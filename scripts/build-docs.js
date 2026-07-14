#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.join(__dirname, '..');
const DOCS_ROOT = path.join(ROOT, 'docs');
const MANIFEST = path.join(DOCS_ROOT, 'manifest.json');
const OUTPUT = path.join(DOCS_ROOT, 'output');
const STYLES = path.join(ROOT, 'styles');

function parseArgs() {
  const args = process.argv.slice(2);
  const theme = args.includes('--branded') || args.includes('--theme=branded')
    ? 'branded'
    : 'whitelabel';
  const pdf = args.includes('--pdf');
  return { theme, pdf };
}

function loadCss(theme) {
  const base = fs.readFileSync(path.join(STYLES, 'shared', 'print-base.css'), 'utf8');
  const themeCss = fs.readFileSync(path.join(STYLES, theme, 'print.css'), 'utf8');
  return `${base}\n${themeCss}`;
}

function logoDataUri(relPath) {
  const abs = path.join(ROOT, relPath);
  if (!fs.existsSync(abs)) return null;
  const ext = path.extname(abs).slice(1).toLowerCase();
  const mime = ext === 'svg' ? 'image/svg+xml' : `image/${ext === 'jpg' ? 'jpeg' : ext}`;
  const data = fs.readFileSync(abs).toString('base64');
  return `data:${mime};base64,${data}`;
}

function buildCover(doc, theme) {
  const branded = theme === 'branded';
  const logo = branded ? logoDataUri('workbooks/assets/brand/logos/skill-forge-logo.svg')
    || logoDataUri('workbooks/assets/brand/logos/skill-forge-logo.png')
    || logoDataUri('workbooks/assets/brand/logos/forge-ppf-logo.jpg')
    : null;

  const logoHtml = logo
    ? `<img class="brand-logo branded-only" src="${logo}" alt="" />`
    : '';

  return `
  <div class="cover${branded ? ' has-brand-gradient' : ''}">
    ${logoHtml}
    <div class="brand-mark ${branded ? 'branded-only' : 'whitelabel-only'}">Skill Forge</div>
    <div class="brand-mark whitelabel-only">Standard Operating Procedure</div>
    <h1>${doc.title}</h1>
    ${doc.subtitle ? `<p class="subtitle">${doc.subtitle}</p>` : ''}
    <p class="meta">${doc.type || 'Document'} · Version ${doc.version || '1.0'}</p>
    <div class="doc-fields">
      <p>Organization: _________________________________</p>
      <p>Document ID: ${doc.id}</p>
      <p>Effective Date: _______________________________</p>
      <p>Approved By: __________________________________</p>
    </div>
  </div>`;
}

function buildHtml(doc, theme) {
  const source = path.join(ROOT, doc.source);
  if (!fs.existsSync(source)) {
    throw new Error(`Missing source: ${doc.source}`);
  }
  const md = fs.readFileSync(source, 'utf8');
  const body = marked.parse(md);
  const css = loadCss(theme);
  const cover = buildCover(doc, theme);
  const footer = theme === 'branded'
    ? '<p class="footer-note branded-only">Confidential — Internal use. Skill Forge training operations.</p>'
    : '<p class="footer-note whitelabel-only">Confidential — Internal use only. Reproduction prohibited without written authorization.</p>';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${doc.title}</title>
  <style>${css}</style>
</head>
<body class="theme-${theme}">
  ${cover}
  ${body}
  ${footer}
</body>
</html>`;
}

function buildPdf(htmlPath, pdfPath) {
  const chrome = process.env.CHROME_BIN || 'google-chrome';
  const { spawn } = require('child_process');
  const os = require('os');
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'skill-forge-docs-'));
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);

  const child = spawn(chrome, [
    '--headless=new', '--disable-gpu', '--no-sandbox', '--disable-dev-shm-usage',
    `--user-data-dir=${userDataDir}`,
    `--print-to-pdf=${pdfPath}`, '--print-to-pdf-no-header', '--remote-debugging-port=0',
    `file://${htmlPath}`,
  ], { stdio: 'ignore' });

  const deadline = Date.now() + 45000;
  while (Date.now() < deadline) {
    if (fs.existsSync(pdfPath) && fs.statSync(pdfPath).size > 1000) {
      child.kill('SIGKILL');
      fs.rmSync(userDataDir, { recursive: true, force: true });
      return;
    }
    const waitUntil = Date.now() + 300;
    while (Date.now() < waitUntil) { /* sync wait */ }
  }
  child.kill('SIGKILL');
  fs.rmSync(userDataDir, { recursive: true, force: true });
  throw new Error(`Timed out generating PDF: ${pdfPath}`);
}

function main() {
  const { theme, pdf } = parseArgs();
  if (!fs.existsSync(MANIFEST)) {
    console.error('Missing docs/manifest.json');
    process.exit(1);
  }
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  const docs = manifest.documents || [];
  if (docs.length === 0) {
    console.log('No documents in manifest.');
    return;
  }

  fs.mkdirSync(OUTPUT, { recursive: true });
  console.log(`Building ${docs.length} document(s) — theme: ${theme}`);

  for (const doc of docs) {
    const html = buildHtml(doc, theme);
    const outDir = path.join(OUTPUT, theme);
    fs.mkdirSync(outDir, { recursive: true });
    const htmlPath = path.join(outDir, `${doc.id}.html`);
    const pdfPath = path.join(outDir, `${doc.id}.pdf`);
    fs.writeFileSync(htmlPath, html);
    console.log(`  → ${htmlPath}`);
    if (pdf) {
      buildPdf(htmlPath, pdfPath);
      console.log(`  → ${pdfPath}`);
    }
  }
  console.log('Done.');
}

main();
