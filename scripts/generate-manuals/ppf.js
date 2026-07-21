'use strict';

const {
  p, h2, h3, h4, callout, procedure, checklist, table, specTable,
  troubleshootingSection, panelProcedure,
} = require('./shared');

const PPF_PANELS = require('./ppf-panels-data');

const TROUBLESHOOTING = [
  ['Silvering / hazy adhesive', 'Dry squeegee or insufficient slip', 'Lift and reapply with adequate slip; lighter passes', 'Maintain wet path throughout'],
  ['Contamination speck', 'Dirty environment or poor prep', 'Lift locally; clean; patch or redo panel', 'Control bay; IPA wipe before lay'],
  ['Edge lift (immediate)', 'Trapped solution or poor tuck', 'Dry edge channel; re-tuck with heat', 'Dry seams before tuck'],
  ['Edge lift (after 48hr)', 'No post-heat on stretch', 'Remove section; reapply; post-heat', 'Post-heat all stretched zones'],
  ['Finger / tent', 'Excess tension without relief', 'Heat; relief cut; reset', 'Follow pattern relief marks'],
  ['Orange peel in adhesive', 'Film stretched too aggressively', 'Remove and replace panel', 'Stretch only as needed'],
  ['Yellowing (months later)', 'Wrong film tier for UV exposure', 'Warranty claim per manufacturer', 'Match film spec to climate'],
  ['Adhesive line visible', 'Bridged recess', 'Heat and reset; add relief', 'Never bridge body lines'],
  ['Knife cut in paint', 'Excessive blade pressure', 'Touch up paint; disclose', 'Fresh blade; light pressure'],
  ['Pattern misalignment', 'Wrong pattern or orientation', 'Re-cut; verify VIN pattern', 'Double-check orientation'],
  ['Bubble after install', 'Trapped air / moisture', 'Pin if policy allows; else lift', 'Squeegee systematically'],
  ['Self-heal not working', 'Customer expectation mismatch', 'Educate on top-coat limits', 'Set expectations at sale'],
  ['PPF on fresh paint', 'Outgassing under film', 'Remove; wait cure; reinstall', '30-day minimum cure'],
  ['Film on vinyl wrap', 'Adhesion failure risk', 'Do not install; disclose', 'Inspect substrate before sale'],
  ['Sensor interference', 'Film over sensor face', 'Trim or use sensor film', 'Mask sensors on intake'],
  ['Trim pull at bumper', 'Insufficient wrap under lip', 'Extend wrap into hidden zone', 'Wrap all hidden edges'],
  ['Water spots under film', 'Hard water on paint pre-install', 'Redo panel after decon', 'Final IPA wipe'],
  ['Crown failure on cap', 'Cold stretch', 'Pre-stretch on table', 'Pre-stretch compound panels'],
  ['Warranty denial — impact', 'Customer impact damage', 'Document; explain exclusion', 'Educate on impact vs defect'],
  ['Customer blames prior chip', 'Pre-existing damage', 'Show intake photos', 'Always photograph'],
  ['Discoloration at exhaust', 'Heat exposure', 'Use heat-rated film in zone', 'Match spec to vehicle'],
  ['Stain under top coat', 'Bug acid before cure', 'Clean per aftercare', '48hr wash hold'],
  ['Peel during removal', 'Aggressive adhesive / old film', 'Slow heat removal', 'Proper removal technique'],
  ['Installer cut injury', 'Unsafe blade use', 'First aid; retrain', 'Cut away from body'],
  ['Chemical stain', 'Wrong cleaner on film', 'Replace area; educate', 'Provide aftercare sheet'],
  ['Line at film seam', 'Poor butt-seam technique', 'Re-do seam', 'Follow seam standards'],
  ['ADAS calibration fault', 'Bumper disturbed', 'Refer OEM calibration', 'Document sensor zones'],
  ['Paint pull on removal', 'Weak factory repaint', 'Stop; heat; pro removal', 'Assess paint first'],
  ['Dust nibs after correction', 'Buff residue', 'Re-wipe IPA', 'Correct before PPF'],
  ['High humidity install', 'Slow cure / edge issues', 'Extend cure; climate control', 'Monitor bay humidity'],
  ['Winter install brittleness', 'Cold film', 'Warm film to room temp', 'Acclimate film 24hr'],
  ['Fleet inconsistency', 'No QC standard', 'QC checklist per vehicle', 'Standardize capstone QC'],
  ['Pattern software error', 'Wrong year/model', 'Verify VIN before plot', 'VIN check at intake'],
  ['Customer wash too soon', 'Aftercare ignored', 'Document delivery', 'Signed aftercare at delivery'],
  ['Lift at fender-wheel junction', 'Insufficient post-heat', 'Re-heat and press', 'Post-heat wheel arches'],
  ['Optical distortion on headlight', 'Wrong film or haze', 'Use optical-grade lens film', 'Lens-rated product only'],
];

function midChapter(title, summary, idx) {
  return `
${p(summary)}
${h2('Core Standards')}
${procedure(`${title} — Shop Standard Sequence`, [
  'Review work order and confirm vehicle/package match',
  'Verify environmental conditions (temperature, humidity, cleanliness)',
  'Stage all tools and materials before vehicle enters install zone',
  'Execute procedure steps without skipping documented checkpoints',
  'Document completion with photos where required',
  'Lead installer signs QC before customer notification',
])}
${h2('Reference Table — Key Decision Points')}
${table(['Situation', 'Action', 'Escalate If'], [
  ['Substrate questionable', 'Stop; test spot; disclose', 'Adhesion test fails'],
  ['Customer adds panel mid-job', 'Change order signed before work', 'Refusal to sign'],
  ['Contamination found mid-install', 'Stop; assess redo scope', 'Larger than dime zone'],
  ['Pattern does not fit', 'Verify VIN/year; re-plot', 'Software confirms mismatch'],
  ['Edge lift at QC', 'Re-tuck or section redo', 'Repeat on same panel type'],
])}
${h2('Training Checklist')}
${checklist([
  'Trainee can explain this chapter without reading notes',
  'Trainee demonstrates procedure on practice panel',
  'Lead installer observes full execution once',
  'Comeback rate on this topic tracked monthly',
  'SOP updated when procedure changes',
])}
${callout('tip', '**Shop tip:** Build a one-page cheat sheet from this chapter for bay posting. Installers reference cards beat re-reading the full manual during production.')}
${h2('Common Mistakes')}
${troubleshootingSection(TROUBLESHOOTING.slice(idx * 2, idx * 2 + 4))}
`;
}

function generatePpfManual() {
  const midTopics = [
    ['Shop Setup & Contamination Control', 'Bay layout, lighting, filtration, clean zones, tool shadow boards, material storage, humidity control, and daily bay reset procedures.'],
    ['Tools & Equipment Standards', 'Squeegees by durometer, slip bottles, heat guns, plotters, blades, tack cloths, inspection lights, lift requirements, and PPE inventory.'],
    ['Safety, Chemical Handling & Compliance', 'Blade safety, heat gun burns, chemical SDS, ventilation, electrical near water, ladder/lift safety, first aid, and incident reporting.'],
    ['Vehicle Intake & Documentation', 'Key control, photo protocol, damage mapping, package verification, ADAS identification, customer authorization, and change orders.'],
    ['Paint Assessment & Correction Prerequisites', 'Inspection lighting, paint depth, repaints, chips, swirls, when to polish, when to refuse, and documenting pre-existing damage.'],
    ['Surface Preparation — Full Decon Sequence', 'Wash, clay, iron, tar, IPA wipe, panel wipe timing, environment lock, and final inspection before pattern touch.'],
    ['Slip Solution Chemistry & Mixing', 'Concentration ratios, water quality, alcohol additives, when to refresh, and contamination of slip bottles.'],
    ['Pattern Software & Plotting Workflow', 'VIN verification, pattern selection, nesting, bleed, waste tracking, labeling pieces, and revision control.'],
    ['Wet Install Method — Core Technique', 'Liner peel timing, anchor strategy, squeegee angles, slip management, partner roles, and wet path discipline.'],
    ['Squeegee Technique & Tool Selection', 'Hard vs soft cards, felt edges, foam on recesses, pressure control, overlap passes, and avoiding dry drag.'],
    ['Edge Treatment — Wrap, Tuck & Trim', 'Wrap under lip standards, tuck into seams, trim blade technique, when to disassemble trim, and edge seal verification.'],
    ['Post-Heat Standards & Cure Timeline', 'Temperature ranges, gun distance, continuous motion, cure before delivery, customer wash hold, and environmental factors.'],
    ['Quality Control & Inspection Protocol', 'Cross-light method, edge audit, contamination scan, seam review, photo documentation, and sign-off checklist.'],
    ['Packages, Coverage Zones & Upsell Logic', 'Partial front definitions, full front, track pack, high-impact add-ons, and consultative selling.'],
    ['Pricing, Margins & Warranty Administration', 'Labor hours by panel, material waste factor, warranty registration, claim documentation, and customer education.'],
    ['Business Operations & Installer Development', 'KPIs, comebacks, training path Level 1–4, comeback root cause analysis, and portfolio standards.'],
  ];

  return [
    {
      title: 'Introduction & Manual Scope',
      content: `
${p('This Master Install Manual is the definitive reference for professional automotive paint protection film installation. It covers every phase of shop operations from vehicle intake through warranty delivery — written for lead installers, trainees, and shop managers building a PPF program.')}
${callout('tip', '**How to use this manual:** Train new installers chapter-by-chapter. Reference panel procedures on the floor via tablet. Use troubleshooting tables during QC reviews.')}
${h2('Scope of Coverage')}
${p('This manual addresses TPU-based paint protection film on passenger vehicles, light trucks, SUVs, and commercial fleet applications.')}
${table(['Topic', 'Covered', 'Not Covered'], [
  ['TPU gloss/clear PPF', 'Yes', ''],
  ['Matte/satin PPF', 'Yes', ''],
  ['Colored PPF', 'Partial', 'Advanced color-change program'],
  ['Paint correction before PPF', 'Yes — basics', 'Advanced multi-stage correction'],
  ['Pattern software workflow', 'Yes — generic', 'Brand-specific software UI'],
  ['Headlight protection', 'Yes', ''],
])}
${h2('Skill Levels Defined')}
${table(['Level', 'Description', 'Typical Panels'], [
  ['Level 1', 'Can prep, assist, install flat zones', 'Door edges, flat hood sections'],
  ['Level 2', 'Independent on intermediate panels', 'Full hood, fenders, rockers'],
  ['Level 3', 'Complex curves and bumpers', 'Bumpers, mirrors, capstones'],
  ['Level 4', 'Lead installer / trainer', 'Full front, fleet, QC sign-off'],
])}
${checklist(['Procedures in numbered boxes are mandatory sequence', 'Warning callouts indicate safety or paint damage risk', 'Tip callouts indicate efficiency improvements', 'Checklists are minimum standards', 'All temperatures are Fahrenheit unless noted'])}
`,
    },
    {
      title: 'TPU Film Science & Product Selection',
      content: `
${h2('What Is Paint Protection Film?')}
${p('Modern PPF is a multi-layer thermoplastic polyurethane (TPU) laminate engineered to absorb impact energy, resist staining, and self-heal light surface marring.')}
${specTable([
  ['Overall thickness', '6–8 mil typical', 'Varies by product tier'],
  ['Top coat', '0.5 mil elastomeric', 'Self-healing, stain resistance'],
  ['TPU body', '5–6 mil', 'Impact absorption'],
  ['Adhesive', '1 mil pressure-sensitive', 'Removable without paint damage'],
  ['Release liner', 'Polyester', 'Removed at install'],
])}
${h2('Film Categories')}
${table(['Category', 'Appearance', 'Primary Use'], [
  ['Standard gloss clear', 'Invisible on factory paint', 'Partial front, full front'],
  ['Matte/satin clear', 'Reduces gloss uniformly', 'Stealth packages'],
  ['Colored TPU', 'Pigmented protection', 'Color-change with protection'],
  ['Textured', 'Carbon/brushed patterns', 'Accent panels'],
])}
${h2('Self-Healing Behavior')}
${p('The elastomeric top coat flows back when heated above approximately 140°F. Deep gouges through the TPU body cannot self-heal — set customer expectations accurately.')}
${callout('warning', 'Never promise that PPF prevents all damage. PPF dramatically reduces everyday wear; it does not make paint invincible against major impacts.')}
${table(['Customer Profile', 'Recommended Tier', 'Package Starting Point'], [
  ['Daily commuter highway miles', 'Premium gloss TPU', 'Partial front + rockers'],
  ['Luxury/exotic', 'Top-tier optical clarity', 'Full front minimum'],
  ['Off-road / gravel', 'Thicker impact-rated TPU', 'Full front + rockers'],
  ['Lease return protection', 'Standard gloss', 'High-impact zones only'],
  ['Matte factory paint', 'Matte PPF matched to sheen', 'Full front'],
])}
`,
    },
    ...midTopics.map(([title, summary], i) => ({
      title,
      content: midChapter(title, summary, i),
    })),
    {
      title: 'Troubleshooting Encyclopedia',
      content: `
${p('Comprehensive defect reference for lead installers and QC. Use during comebacks, training reviews, and warranty evaluations.')}
${troubleshootingSection(TROUBLESHOOTING)}
`,
    },
    {
      title: 'Master Panel Procedures — All Coverage Zones',
      content: `
${p('Complete install procedures for every major PPF coverage zone. Each procedure includes pre-install checklist, step sequence, QC points, and defect reference.')}
${PPF_PANELS.map((panel) => panelProcedure('PPF', panel)).join('')}
`,
    },
    {
      title: 'Appendices — Quick Reference',
      content: `
${h2('Glossary')}
${table(['Term', 'Definition'], [
  ['TPU', 'Thermoplastic polyurethane film body'],
  ['Top coat', 'Self-healing elastomeric surface layer'],
  ['Slip solution', 'Install fluid allowing film positioning'],
  ['Post-heat', 'Heat setting after install to stabilize adhesive'],
  ['Silvering', 'Hazy adhesive appearance from dry squeegee'],
  ['Finger', 'Tent of film from insufficient relief'],
  ['Anchor', 'First zone locked before stretch'],
  ['Relief cut', 'Strategic cut allowing film to settle into recess'],
])}
${h2('Cure & Aftercare Summary')}
${checklist([
  'No wash for 48 hours minimum',
  'No high-pressure direct on edges for 7 days',
  'No wax or sealant on film for 14 days unless product-approved',
  'Annual inspection recommended for high-mileage vehicles',
  'Report edge lift immediately — do not pick at film',
])}
${h2('Package Coverage Quick Reference')}
${table(['Package', 'Typical Panels'], [
  ['Partial front', 'Bumper, hood leading, fenders partial, mirrors'],
  ['Full front', 'Full hood, full fenders, full bumper, mirrors, A-pillars'],
  ['Track pack', 'Full front + rockers + rear impact zones'],
])}
`,
    },
  ];
}

module.exports = { generatePpfManual };
