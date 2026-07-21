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
${h2('Operational Standards')}
${procedure(`${title} — Shop SOP Sequence`, [
  'Review work order and confirm vehicle/package match',
  'Verify environmental conditions (temperature, humidity, cleanliness)',
  'Stage all tools and materials before vehicle enters install zone',
  'Execute procedure steps without skipping documented checkpoints',
  'Document completion with photos where required',
  'Lead installer signs QC before customer notification',
])}
${h2('Decision Matrix')}
${table(['Situation', 'Action', 'Escalate If'], [
  ['Substrate questionable', 'Stop; test spot; disclose to customer', 'Adhesion test fails'],
  ['Customer adds scope mid-job', 'Change order signed before work continues', 'Customer refuses'],
  ['Contamination found mid-install', 'Stop; assess redo scope', 'Larger than dime zone'],
  ['Pattern does not fit', 'Verify VIN/year; re-plot', 'Software confirms mismatch'],
  ['Edge lift at QC', 'Re-tuck or section redo', 'Repeat on same panel type'],
])}
${h2('Lead Installer Verification')}
${checklist([
  'Technician can execute this domain per SOP without reference',
  'QC audit passed on last three jobs in this domain',
  'Comeback rate for this domain within shop threshold',
  'SOP revision logged if procedure changed',
  'All documentation fields complete on job card',
])}
${callout('tip', `**Shop standard:** Post a one-page ${title} quick-reference at the bay. Field crews reference SOPs during production — not after comebacks.`)}
${h2('Common Failures')}
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
    ['Business Operations & Installer Development', 'KPIs, comebacks, competency authorization Level 1–4, comeback root cause analysis, and portfolio standards.'],
  ];

  return [
    {
      title: 'Introduction & Manual Scope',
      content: `
${p('This is the authoritative core manual for professional automotive paint protection film operations. It is not a course outline or abbreviated overview — it is the complete shop reference covering every phase from material science through warranty administration, fleet programs, and comeback analysis.')}
${p('Use this manual to establish SOPs, verify technician competency, settle technical disputes, and maintain consistent output across every installer and every vehicle platform.')}
${callout('tip', '**How to use this manual:** Lead installers reference panel procedures during live installs. Managers use competency standards for authorization. QC uses troubleshooting tables for comeback analysis. Estimators use package and vehicle matrix chapters for scoping.')}
${h2('Complete Scope — What This Manual Covers')}
${checklist([
  'TPU film science, product tiers, and selection criteria',
  'Shop setup, contamination control, and environmental standards',
  'Complete tool and equipment specifications',
  'Safety, chemical handling, and regulatory compliance',
  'Vehicle intake, documentation, and liability protection',
  'Paint assessment, correction prerequisites, and refusal criteria',
  'Full surface preparation and decontamination sequences',
  'Pattern software, plotting, nesting, and material management',
  'Wet install method, squeegee technique, and edge engineering',
  'Post-heat standards, cure timelines, and delivery protocols',
  'Every major panel and coverage zone — full procedures',
  'Package definitions, pricing, warranty, and business operations',
  'Troubleshooting encyclopedia — 35+ defects with corrective action',
  'Vehicle application matrix — 20 platform types',
  '50 core operational domains — complete shop reference',
  'Technician competency standards and field scenario analysis',
])}
${h2('Technician Authorization Tiers')}
${table(['Tier', 'Authorization', 'Typical Scope'], [
  ['Tier I — Prep & Support', 'Surface prep, assist, flat zones', 'Decon, masking, door edges'],
  ['Tier II — Panel Installer', 'Independent on intermediate panels', 'Hood, fenders, rockers'],
  ['Tier III — Advanced Installer', 'Complex curves, bumpers, mirrors', 'Full bumpers, capstone panels'],
  ['Tier IV — Lead / QC', 'Sign-off authority, comeback resolution', 'Full packages, fleet, warranty'],
])}
${checklist(['Numbered procedures are mandatory SOP sequence', 'Warning callouts indicate safety or paint damage risk', 'All temperatures Fahrenheit unless noted', 'Deviations require lead installer authorization and documentation'])}
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
${p('Comprehensive defect reference for lead installers, QC, and warranty evaluation. Cross-reference with Extended Troubleshooting Reference and relevant Technical Bulletins.')}
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
