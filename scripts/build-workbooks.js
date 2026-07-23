#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { ROOT, parseThemeArgs } = require('./lib/theme');
const { wrapDocument, markdownToHtml } = require('./lib/html');
const { buildWorkbookCover, buildWorkbookFooter } = require('./lib/covers');
const { setHtmlOutputDir } = require('./lib/assets');
const { enhanceWorkbookHtml } = require('./lib/workbook-enhance');
const { preprocessMarkdown } = require('./lib/images');
const { buildPdf } = require('./lib/pdf');

const OUTPUT = path.join(ROOT, 'workbooks', 'output');
const MANIFEST = path.join(ROOT, 'workbooks', 'manifest.json');

function loadCourses() {
  if (!fs.existsSync(MANIFEST)) {
    throw new Error('Missing workbooks/manifest.json');
  }
  const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  return manifest.courses || [];
}

async function buildHtml(course, theme) {
  const source = path.join(ROOT, course.source);
  if (!fs.existsSync(source)) {
    throw new Error(`Missing source: ${course.source}`);
  }

  let md = fs.readFileSync(source, 'utf8');
  md = preprocessMarkdown(md);
  const rawBody = markdownToHtml(md);
  const body = await enhanceWorkbookHtml(rawBody, course, theme);
  const cover = buildWorkbookCover(course, theme);
  const footer = buildWorkbookFooter(theme);

  return wrapDocument({
    title: `${course.title} — Workbook`,
    body,
    cover,
    footer,
    theme,
    bodyClass: 'workbook',
  });
}

async function main() {
  const { theme, pdf } = parseThemeArgs();
  const courses = loadCourses();

  if (courses.length === 0) {
    console.log('No courses in manifest.');
    return;
  }

  const outDir = path.join(OUTPUT, theme);
  fs.mkdirSync(outDir, { recursive: true });
  console.log(`Building ${courses.length} workbook(s) — theme: ${theme}`);

  for (const course of courses) {
    console.log(`  ${course.id}...`);
    setHtmlOutputDir(outDir);
    const html = await buildHtml(course, theme);
    const htmlPath = path.join(outDir, `${course.id}-workbook.html`);
    const pdfPath = path.join(outDir, `${course.id}-workbook.pdf`);

    fs.writeFileSync(htmlPath, html);
    console.log(`    → ${htmlPath}`);

    if (pdf) {
      await buildPdf(htmlPath, pdfPath, { tmpPrefix: 'core-workbooks-' });
      console.log(`    → ${pdfPath}`);
    }
  }

  console.log('Done.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
