#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { ROOT, parseThemeArgs } = require('./lib/theme');
const { wrapDocument, markdownToHtml } = require('./lib/html');
const { buildManualCover, buildManualFooter } = require('./lib/covers');
const { setHtmlOutputDir } = require('./lib/assets');
const { loadDesignSystemCss } = require('./lib/theme');

const MANUALS_ROOT = path.join(ROOT, 'manuals');
const MANIFEST = path.join(MANUALS_ROOT, 'manifest.json');
const OUTPUT = path.join(MANUALS_ROOT, 'output');
const MANUAL_CSS = path.join(MANUALS_ROOT, 'assets', 'manual.css');

function loadChapters(chaptersDir) {
  const abs = path.join(ROOT, chaptersDir);
  if (!fs.existsSync(abs)) {
    throw new Error(`Missing chapters directory: ${chaptersDir}`);
  }
  return fs.readdirSync(abs)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => fs.readFileSync(path.join(abs, f), 'utf8'))
    .join('\n\n');
}

function buildToc(chaptersDir) {
  const abs = path.join(ROOT, chaptersDir);
  const files = fs.readdirSync(abs).filter((f) => f.endsWith('.md')).sort();
  const items = files.map((f) => {
    const content = fs.readFileSync(path.join(abs, f), 'utf8');
    const match = content.match(/^#\s+Chapter\s+\d+\s+[—–-]\s+(.+)$/m);
    const title = match ? match[1].trim() : f.replace(/\.md$/, '');
    return `<li>${title}</li>`;
  });
  return `
<div class="manual-toc page-break">
  <h2>Table of Contents</h2>
  <ol class="toc-list">
    ${items.join('\n    ')}
  </ol>
</div>`;
}

function buildHtml(manual, theme) {
  const bodyMd = loadChapters(manual.chaptersDir);
  const toc = buildToc(manual.chaptersDir);
  const cover = buildManualCover(manual, theme);
  const footer = buildManualFooter(theme);
  const body = markdownToHtml(bodyMd);
  const manualCss = fs.existsSync(MANUAL_CSS) ? fs.readFileSync(MANUAL_CSS, 'utf8') : '';
  const css = `${loadDesignSystemCss(theme, { forManual: true })}\n${manualCss}`;

  return wrapDocument({
    title: manual.title,
    body: `${toc}\n${body}`,
    cover,
    footer,
    theme,
    css,
    bodyClass: 'master-manual',
  });
}

function buildPdfChrome(htmlPath, pdfPath) {
  const chrome = process.env.CHROME_BIN || 'google-chrome';
  const { spawn } = require('child_process');
  const os = require('os');
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'skill-forge-manual-'));
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);

  const child = spawn(chrome, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage',
    `--user-data-dir=${userDataDir}`,
    `--print-to-pdf=${pdfPath}`, '--print-to-pdf-no-header', '--remote-debugging-port=0',
    `file://${htmlPath}`,
  ], { stdio: 'ignore' });

  const deadline = Date.now() + 300000;
  while (Date.now() < deadline) {
    if (fs.existsSync(pdfPath) && fs.statSync(pdfPath).size > 5000) {
      child.kill('SIGKILL');
      try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch { /* ignore */ }
      return;
    }
    const waitUntil = Date.now() + 500;
    while (Date.now() < waitUntil) { /* sync wait */ }
  }
  child.kill('SIGKILL');
  try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch { /* ignore */ }
  throw new Error(`Timed out generating PDF: ${pdfPath}`);
}

async function buildPdf(htmlPath, pdfPath) {
  buildPdfChrome(htmlPath, pdfPath);
}

function countPagesEstimate(html) {
  return Math.round(html.length / 3200);
}

async function main() {
  const { theme, pdf } = parseThemeArgs();

  if (!fs.existsSync(MANIFEST)) {
    console.error('Missing manuals/manifest.json — run: npm run generate:manuals');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const manuals = manifest.manuals || [];
  const outDir = path.join(OUTPUT, theme);
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`Building ${manuals.length} master manual(s) — theme: ${theme}`);

  for (const manual of manuals) {
    console.log(`  ${manual.id}...`);
    setHtmlOutputDir(outDir);
    const html = buildHtml(manual, theme);
    const htmlPath = path.join(outDir, `${manual.id}.html`);
    const pdfPath = path.join(outDir, `${manual.id}.pdf`);
    fs.writeFileSync(htmlPath, html);
    const est = countPagesEstimate(html);
    console.log(`    → ${htmlPath} (~${est} pages est.)`);

    if (pdf) {
      await buildPdf(htmlPath, pdfPath);
      const size = fs.statSync(pdfPath).size;
      console.log(`    → ${pdfPath} (${(size / 1024).toFixed(0)} KB)`);
    }
  }

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
