#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { ROOT, parseThemeArgs } = require('./lib/theme');
const { wrapDocument, markdownToHtml } = require('./lib/html');
const { buildDocCover, buildDocFooter } = require('./lib/covers');
const { setHtmlOutputDir } = require('./lib/assets');
const { buildPdf } = require('./lib/pdf');

const DOCS_ROOT = path.join(ROOT, 'docs');
const MANIFEST = path.join(DOCS_ROOT, 'manifest.json');
const OUTPUT = path.join(DOCS_ROOT, 'output');

function buildHtml(doc, theme) {
  const source = path.join(ROOT, doc.source);
  if (!fs.existsSync(source)) {
    throw new Error(`Missing source: ${doc.source}`);
  }

  const md = fs.readFileSync(source, 'utf8');
  const body = markdownToHtml(md);
  const cover = buildDocCover(doc, theme);
  const footer = buildDocFooter(theme);

  return wrapDocument({
    title: doc.title,
    body,
    cover,
    footer,
    theme,
  });
}

function main() {
  const { theme, pdf } = parseThemeArgs();

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
    const outDir = path.join(OUTPUT, theme);
    fs.mkdirSync(outDir, { recursive: true });
    setHtmlOutputDir(outDir);
    const html = buildHtml(doc, theme);
    const htmlPath = path.join(outDir, `${doc.id}.html`);
    const pdfPath = path.join(outDir, `${doc.id}.pdf`);

    fs.writeFileSync(htmlPath, html);
    console.log(`  → ${htmlPath}`);

    if (pdf) {
      buildPdf(htmlPath, pdfPath, { tmpPrefix: 'core-workbooks-docs-' });
      console.log(`  → ${pdfPath}`);
    }
  }

  console.log('Done.');
}

main();
