#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const ROOT = path.join(__dirname, '..');
const OUTPUT = path.join(ROOT, 'workbooks', 'output');
const ASSETS = path.join(ROOT, 'workbooks', 'assets');

const COURSES = [
  {
    id: 'window-tint',
    title: 'Window Tint Installation',
    subtitle: 'Core Course — 3-Day Beginner Program',
    source: path.join(ROOT, 'workbooks', 'core', 'window-tint', 'workbook.md'),
  },
  {
    id: 'ppf',
    title: 'Paint Protection Film (PPF)',
    subtitle: 'Core Course — 3-Day Beginner Program',
    source: path.join(ROOT, 'workbooks', 'core', 'ppf', 'workbook.md'),
  },
];

function buildHtml(course) {
  const md = fs.readFileSync(course.source, 'utf8');
  const body = marked.parse(md);
  const css = fs.readFileSync(path.join(ASSETS, 'print.css'), 'utf8');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skill Forge — ${course.title}</title>
  <style>${css}</style>
</head>
<body>
  <div class="cover">
    <div class="brand">Skill Forge · Velox Wrap Co</div>
    <h1>${course.title}</h1>
    <p class="subtitle">${course.subtitle}</p>
    <p class="meta">Student Workbook · Version 1.0</p>
    <div class="student-fields">
      <p>Student Name: _________________________________</p>
      <p>Class Date: ___________________________________</p>
      <p>Instructor: ___________________________________</p>
      <p>Location: ____________________________________</p>
    </div>
  </div>
  ${body}
  <p class="footer-note">© Velox Wrap Co · Skill Forge Training · For enrolled students only. Reproduction prohibited without written permission.</p>
</body>
</html>`;
}

function buildPdf(htmlPath, pdfPath) {
  const chrome = process.env.CHROME_BIN || 'google-chrome';
  const { spawn } = require('child_process');
  const os = require('os');
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'skill-forge-chrome-'));
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);

  const child = spawn(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    `--user-data-dir=${userDataDir}`,
    `--print-to-pdf=${pdfPath}`,
    '--print-to-pdf-no-header',
    '--remote-debugging-port=0',
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

fs.mkdirSync(OUTPUT, { recursive: true });

const shouldBuildPdf = process.argv.includes('--pdf');

for (const course of COURSES) {
  console.log(`Building ${course.id}...`);
  const html = buildHtml(course);
  const htmlPath = path.join(OUTPUT, `${course.id}-workbook.html`);
  const pdfPath = path.join(OUTPUT, `${course.id}-workbook.pdf`);

  fs.writeFileSync(htmlPath, html);
  console.log(`  → ${htmlPath}`);

  if (shouldBuildPdf) {
    buildPdf(htmlPath, pdfPath);
    console.log(`  → ${pdfPath}`);
  }
}

console.log('Done.');
