#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const MANUALS_ROOT = path.join(ROOT, 'manuals');
const { writeChapters } = require('./shared');
const { expandManual } = require('./expansion');

const { generatePpfManual } = require('./ppf');
const { generateTintManual } = require('./window-tint');
const { generateCustomerServiceManual } = require('./customer-service');
const { generateVinylWrapManual, WRAP_PANELS } = require('./vinyl-wrap');
const { generateCeramicManual, generateDetailingManual, SURFACE_PANELS } = require('./ceramic-detailing');
const PPF_PANELS = require('./ppf-panels-data');

const MANUALS = [
  {
    id: 'ppf-master-install',
    title: 'PPF Master Install Manual',
    subtitle: 'Complete Paint Protection Film Installation Reference',
    type: 'Installation Manual',
    version: '1.0',
    generator: generatePpfManual,
    expand: { title: 'PPF Installation', panels: PPF_PANELS, troubleshooting: [] },
  },
  {
    id: 'window-tint-master-install',
    title: 'Window Tint Master Install Manual',
    subtitle: 'Complete Automotive Window Film Installation Reference',
    type: 'Installation Manual',
    version: '1.0',
    generator: generateTintManual,
    expand: { title: 'Window Tint Installation' },
  },
  {
    id: 'customer-service-operations',
    title: 'Customer Service Operations Manual',
    subtitle: 'Front-of-House, Sales, and Client Experience Standards',
    type: 'Operations Manual',
    version: '1.0',
    generator: generateCustomerServiceManual,
    expand: {
      title: 'Customer Service',
      scripts: [
        ['Inbound Phone — New Lead', '"Thank you for calling [Shop Name]. This is [Name]. How can I help protect your vehicle today?"'],
        ['Price Inquiry — Hold Frame', '"I can give you an accurate quote after I know your vehicle and the coverage you want. May I get your year, make, and model?"'],
        ['Complaint — Listen First', '"I am sorry you are experiencing this. I want to fix it. Tell me exactly what you are seeing and when you first noticed it."'],
        ['Delivery — Set Expectations', '"Here is your aftercare sheet. No wash for 48 hours. Edges are curing — avoid picking at any small bubbles unless we discussed them."'],
        ['Upsell — Consultative', '"Based on how you use this vehicle, many owners in your situation add rocker protection. Want me to show you why on your car?"'],
      ],
    },
  },
  {
    id: 'vinyl-wrap-master-install',
    title: 'Vinyl Wrap Master Install Manual',
    subtitle: 'Complete Vehicle Wrap Installation Reference',
    type: 'Installation Manual',
    version: '1.0',
    generator: generateVinylWrapManual,
    expand: { title: 'Vinyl Wrap Installation', panels: WRAP_PANELS },
  },
  {
    id: 'ceramic-coating-application',
    title: 'Ceramic Coating Application Manual',
    subtitle: 'Surface Prep, Application, Cure, and Warranty Standards',
    type: 'Application Manual',
    version: '1.0',
    generator: generateCeramicManual,
    expand: { title: 'Ceramic Coating Application', panels: SURFACE_PANELS },
  },
  {
    id: 'paint-correction-detailing',
    title: 'Paint Correction & Detailing Manual',
    subtitle: 'Correction, Protection, and Detailing Operations Reference',
    type: 'Operations Manual',
    version: '1.0',
    generator: generateDetailingManual,
    expand: { title: 'Paint Correction & Detailing' },
  },
];

function writeManifest(manuals) {
  const manifest = {
    version: '1.0',
    manuals: manuals.map((m) => ({
      id: m.id,
      title: m.title,
      subtitle: m.subtitle,
      type: m.type,
      version: m.version,
      chaptersDir: `manuals/${m.id}/chapters`,
    })),
  };
  fs.writeFileSync(
    path.join(MANUALS_ROOT, 'manifest.json'),
    `${JSON.stringify(manifest, null, 2)}\n`
  );
}

function main() {
  console.log(`Generating ${MANUALS.length} master manuals (expanded)...`);

  for (const manual of MANUALS) {
    console.log(`  ${manual.id}...`);
    let chapters = manual.generator();
    if (manual.expand) {
      chapters = expandManual(manual.id, chapters, manual.expand);
    }
    const dir = path.join(MANUALS_ROOT, manual.id, 'chapters');
    writeChapters(dir, chapters);
    console.log(`    → ${chapters.length} chapters`);
  }

  writeManifest(MANUALS);
  console.log('Done. Run: npm run build:manuals:pdf');
}

main();
