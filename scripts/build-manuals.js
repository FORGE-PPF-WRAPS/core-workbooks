#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.join(__dirname, '..');
const MANUALS_ROOT = path.join(ROOT, 'manuals');
const MANIFEST = path.join(MANUALS_ROOT, 'manifest.json');
const OUTPUT = path.join(MANUALS_ROOT, 'output');
const WORKBOOK_CSS = path.join(ROOT, 'workbooks', 'assets', 'print.css');
const MANUAL_CSS = path.join(MANUALS_ROOT, 'assets', 'manual.css');

function loadCss() {
  const base = fs.readFileSync(WORKBOOK_CSS, 'utf8');
  const extra = fs.existsSync(MANUAL_CSS) ? fs.readFileSync(MANUAL_CSS, 'utf8') : '';
  return `${base}\n${extra}`;
}

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

function buildCover(manual) {
  return `
  <div class="cover manual-cover">
    <div class="brand">Skill Forge · Master Reference</div>
    <h1>${manual.title}</h1>
    <p class="subtitle">${manual.subtitle}</p>
    <p class="meta">${manual.type} · Version ${manual.version}</p>
    <div class="doc-fields">
      <p>Organization: _________________________________</p>
      <p>Document ID: ${manual.id}</p>
      <p>Revision Date: _______________________________</p>
      <p>Authorized By: ________________________________</p>
    </div>
  </div>`;
}

function buildHtml(manual, css) {
  const body = loadChapters(manual.chaptersDir);
  const toc = buildToc(manual.chaptersDir);
  const cover = buildCover(manual);
  const parsed = marked.parse(body);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${manual.title}</title>
  <style>${css}</style>
</head>
<body class="master-manual">
  ${cover}
  ${toc}
  ${parsed}
  <p class="footer-note">Confidential — Internal use only. Skill Forge Master Reference. Reproduction prohibited without written authorization.</p>
</body>
</html>`;
}

function buildPdf(htmlPath, pdfPath) {
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

  const deadline = Date.now() + 120000;
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

function countPagesEstimate(html) {
  return Math.round(html.length / 3200);
}

function main() {
  const pdf = process.argv.includes('--pdf');
  if (!fs.existsSync(MANIFEST)) {
    console.error('Missing manuals/manifest.json — run: npm run generate:manuals');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const manuals = manifest.manuals || [];
  const css = loadCss();
  fs.mkdirSync(OUTPUT, { recursive: true });

  console.log(`Building ${manuals.length} master manual(s)...`);

  for (const manual of manuals) {
    console.log(`  ${manual.id}...`);
    const html = buildHtml(manual, css);
    const htmlPath = path.join(OUTPUT, `${manual.id}.html`);
    const pdfPath = path.join(OUTPUT, `${manual.id}.pdf`);
    fs.writeFileSync(htmlPath, html);
    const est = countPagesEstimate(html);
    console.log(`    → ${htmlPath} (~${est} pages est.)`);

    if (pdf) {
      buildPdf(htmlPath, pdfPath);
      const size = fs.statSync(pdfPath).size;
      console.log(`    → ${pdfPath} (${(size / 1024).toFixed(0)} KB)`);
    }
  }

  console.log('Done.');
}

main();
