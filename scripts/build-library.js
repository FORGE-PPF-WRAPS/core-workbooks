#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const LIBRARY = path.join(ROOT, 'library');
const BRANDED = path.join(LIBRARY, 'branded');

const CATEGORY_LABELS = {
  turnkey: 'Turnkey System',
  branding: 'Branding',
  website: 'Website & Digital',
  marketing: 'Marketing',
  pricing: 'Pricing Guides',
  sops: 'Standard Operating Procedures',
  checklists: 'Checklists',
  customer: 'Customer Documents',
  operations: 'Operations',
  warranty: 'Warranties',
  legal: 'Legal & Agreements',
  training: 'Training',
  manuals: 'Operations Manuals',
  workbooks: 'Training Workbooks',
};

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (!fs.existsSync(src)) {
    console.warn(`  ⚠ missing: ${src}`);
    return false;
  }
  fs.copyFileSync(src, dest);
  return true;
}

function buildAllBranded() {
  console.log('Building all branded PDFs...');
  execSync('npm run build:docs:branded:pdf', { cwd: ROOT, stdio: 'inherit' });
  execSync('npm run build:branded:pdf', { cwd: ROOT, stdio: 'inherit' });
  execSync('npm run build:manuals:branded:pdf', { cwd: ROOT, stdio: 'inherit' });
}

function collectLibraryItems() {
  const items = [];

  const docsManifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/manifest.json'), 'utf8'));
  for (const doc of docsManifest.documents) {
    items.push({
      id: doc.id,
      title: doc.title,
      subtitle: doc.subtitle,
      type: doc.type,
      category: doc.category || 'operations',
      src: path.join(ROOT, 'docs/output/branded', `${doc.id}.pdf`),
      dest: path.join(BRANDED, doc.category || 'docs', `${doc.id}.pdf`),
    });
  }

  const wbManifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'workbooks/manifest.json'), 'utf8'));
  for (const course of wbManifest.courses) {
    items.push({
      id: `${course.id}-workbook`,
      title: course.title,
      subtitle: course.subtitle,
      type: course.docType || 'Student Workbook',
      category: 'workbooks',
      src: path.join(ROOT, 'workbooks/output/branded', `${course.id}-workbook.pdf`),
      dest: path.join(BRANDED, 'workbooks', `${course.id}-workbook.pdf`),
    });
  }

  const manualManifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'manuals/manifest.json'), 'utf8'));
  for (const manual of manualManifest.manuals) {
    const brandedPath = path.join(ROOT, 'manuals/output/branded', `${manual.id}.pdf`);
    const fallbackPath = path.join(ROOT, 'manuals/output', `${manual.id}.pdf`);
    const src = fs.existsSync(brandedPath) && fs.statSync(brandedPath).size < 50 * 1024 * 1024
      ? brandedPath
      : fallbackPath;
    items.push({
      id: manual.id,
      title: manual.title,
      subtitle: manual.subtitle,
      type: manual.type || 'Core Operations Manual',
      category: 'manuals',
      src,
      dest: path.join(BRANDED, 'manuals', `${manual.id}.pdf`),
    });
  }

  return items;
}

function generateIndex(items) {
  const byCategory = {};
  for (const item of items) {
    if (!byCategory[item.category]) byCategory[item.category] = [];
    byCategory[item.category].push(item);
  }

  const categoryOrder = [
    'turnkey', 'branding', 'website', 'marketing', 'pricing',
    'manuals', 'workbooks', 'sops', 'checklists', 'customer',
    'warranty', 'operations', 'legal', 'training',
  ];

  let sections = '';
  for (const cat of categoryOrder) {
    const group = byCategory[cat];
    if (!group || group.length === 0) continue;
    const label = CATEGORY_LABELS[cat] || cat;
    sections += `<section class="category"><h2>${label}</h2><div class="grid">\n`;
    for (const item of group) {
      const href = `branded/${item.category}/${path.basename(item.dest)}`;
      sections += `  <article class="card"><h3>${item.title}</h3><p>${item.subtitle || item.type}</p><a href="${href}">Download PDF</a></article>\n`;
    }
    sections += '</div></section>\n';
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skill Forge Document Library</title>
  <style>
    :root { --bg:#080808; --card:#121212; --text:#f5f5f7; --muted:#9ca5b5; --pink:#ff0f7b; --purple:#7d3cff; --cyan:#00d5ff; }
    * { box-sizing:border-box; margin:0; padding:0; }
    body { font-family:Inter,Segoe UI,sans-serif; background:var(--bg); color:var(--text); line-height:1.6; }
    .hero { padding:3rem 1.5rem 2rem; text-align:center; background:linear-gradient(135deg,rgba(125,60,255,.25),rgba(255,15,123,.15)); border-bottom:1px solid rgba(255,255,255,.08); }
    .hero h1 { font-size:2.25rem; background:linear-gradient(90deg,var(--pink),var(--purple),var(--cyan)); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
    .hero p { color:var(--muted); max-width:40rem; margin:.75rem auto 0; }
    main { max-width:72rem; margin:0 auto; padding:2rem 1.5rem 4rem; }
    .category { margin-bottom:2.5rem; }
    .category h2 { font-size:1.25rem; margin-bottom:1rem; color:var(--cyan); border-bottom:1px solid rgba(255,255,255,.1); padding-bottom:.5rem; }
    .grid { display:grid; gap:1rem; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); }
    .card { background:var(--card); border:1px solid rgba(255,255,255,.08); border-radius:12px; padding:1.25rem; }
    .card h3 { font-size:1rem; margin-bottom:.35rem; }
    .card p { font-size:.85rem; color:var(--muted); margin-bottom:1rem; }
    .card a { display:inline-block; padding:.45rem 1rem; border-radius:8px; background:linear-gradient(90deg,var(--purple),var(--pink)); color:#fff; text-decoration:none; font-size:.85rem; font-weight:600; }
  </style>
</head>
<body>
  <header class="hero">
    <h1>Skill Forge Document Library</h1>
    <p>Complete turnkey business system — branding, manuals, workbooks, SOPs, pricing guides, warranties, customer documents, and marketing resources.</p>
  </header>
  <main>
${sections}  </main>
</body>
</html>`;
}

function main() {
  const skipBuild = process.argv.includes('--copy-only');
  if (!skipBuild) buildAllBranded();

  if (fs.existsSync(BRANDED)) {
    fs.rmSync(BRANDED, { recursive: true, force: true });
  }
  fs.mkdirSync(BRANDED, { recursive: true });

  const items = collectLibraryItems();
  let copied = 0;
  for (const item of items) {
    if (copyFile(item.src, item.dest)) copied++;
  }

  const manifest = {
    version: '1.0',
    generated: new Date().toISOString(),
    theme: 'branded',
    totalItems: items.length,
    copied,
    categories: CATEGORY_LABELS,
    items: items.map((i) => ({
      id: i.id,
      title: i.title,
      subtitle: i.subtitle,
      type: i.type,
      category: i.category,
      path: path.relative(LIBRARY, i.dest).replace(/\\/g, '/'),
    })),
  };

  fs.writeFileSync(path.join(LIBRARY, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  fs.writeFileSync(path.join(LIBRARY, 'index.html'), generateIndex(items.filter((i) => fs.existsSync(i.dest))));

  console.log(`\nLibrary: ${copied}/${items.length} branded PDFs → library/branded/`);
  console.log(`Index: library/index.html`);
}

main();
