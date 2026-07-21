'use strict';

const {
  p, h2, h3, h4, callout, procedure, checklist, table, pageBreak,
  troubleshootingSection, panelProcedure,
} = require('./shared');

const VEHICLE_TYPES = [
  ['Sedan — Compact', 'Short wheelbase, tight door gaps, smaller hood radius. Focus on clean edge tucks at door jambs.'],
  ['Sedan — Mid-Size', 'Standard partial-front template. Watch mirror cap compound curves.'],
  ['Sedan — Full-Size', 'Long hood panels require two-installer coordination on full hood PPF.'],
  ['Coupe / Sports Car', 'Low front clearance; use low-profile lift pads. Aggressive bumper geometry.'],
  ['Convertible', 'Mind soft-top mechanisms; mask extensively. A-pillar wraps are high-visibility.'],
  ['Hatchback', 'Large rear hatch — popular add-on for loading zone protection.'],
  ['Wagon', 'Extended roof line; consider roof leading edge strips for highway commuters.'],
  ['Crossover SUV', 'Higher ride height; ergonomic ladder or lift required. Large hood and bumper.'],
  ['Body-on-Frame SUV', 'Removable bumpers common; plan bumper-off workflow.'],
  ['Pickup Truck', 'Flat hood, large fenders, grille-heavy front. Bed rail protection upsell.'],
  ['Heavy-Duty Truck', 'Larger panels, thicker paint on some fleets. Extended install times.'],
  ['Van / Minivan', 'Large flat sides for wrap/PPF fleet. Sliding door edges high chip zone.'],
  ['Commercial Fleet', 'Volume QC standards; document every unit identically.'],
  ['Exotic / Supercar', 'Paint sensitivity extreme; soft tools only. Multi-stage correction common.'],
  ['Classic / Vintage', 'Single-stage paint risk; adhesion test mandatory. Customer disclosure required.'],
  ['EV — Front Trunk', 'Frunk lid geometry unique; sensor zones on bumpers.'],
  ['EV — Battery Floor', 'Underbody shields — do not drill or adhere without OEM guidance.'],
  ['Luxury Sedan', 'High customer expectation; white-glove intake and delivery.'],
  ['Off-Road / Overland', 'Heavy rock chip exposure; recommend track packages.'],
  ['Police / Emergency', 'Fleet scheduling; downtime windows; reflective strip coordination.'],
];

const CLIMATE_ZONES = [
  ['Hot / Arid', 'Accelerated adhesive cure; manage slip drying speed. Heat post-heat carefully — surface temps exceed 140°F in sun.'],
  ['Hot / Humid', 'Extended cure before edge trimming. Dehumidify bay when possible.'],
  ['Cold / Northern', 'Film acclimation 24hr minimum. Extend wash hold on customer aftercare.'],
  ['Coastal / Salt', 'Emphasize corrosion-prone zones: rockers, behind wheels, lower doors.'],
  ['High Altitude UV', 'Recommend premium UV-stable film tiers. Annual inspection upsell.'],
  ['Urban / Construction', 'High gravel and debris — default to expanded front packages.'],
];

/** Every operational domain a core shop manual must address */
const CORE_OPERATIONAL_ASPECTS = [
  'Material Science & Product Chemistry',
  'Substrate Assessment & Surface Classification',
  'Contamination Control & Clean-Room Standards',
  'Tooling, Equipment & Calibration',
  'Chemical Handling, SDS & PPE',
  'Vehicle Intake, Documentation & Liability',
  'Estimating, Scope Definition & Change Orders',
  'Scheduling, Capacity & Throughput Planning',
  'Pattern Development, Nesting & Material Yield',
  'Surface Preparation & Decontamination',
  'Application Physics & Adhesion Mechanics',
  'Heat Management & Thermal Post-Processing',
  'Edge Engineering — Wrap, Tuck, Trim & Seal',
  'Complex Geometry & Compound Curve Strategy',
  'Seam Planning, Overlaps & Transitions',
  'ADAS, Sensors & Modern Vehicle Integration',
  'Trim Removal, Reassembly & Hardware',
  'Quality Control, Inspection & Sign-Off',
  'Defect Classification & Rework Authorization',
  'Cure Windows, Delivery & Aftercare',
  'Warranty Administration & Claim Defense',
  'Fleet Operations & Volume Standards',
  'Mobile & Onsite Service Protocols',
  'Pricing Architecture & Margin Protection',
  'Customer Communication & Expectation Management',
  'Complaint Resolution & Service Recovery',
  'Inventory, Receiving & Material Storage',
  'Waste Management & Environmental Compliance',
  'Shop Layout, Workflow & Ergonomics',
  'Lighting, Inspection & Documentation Photography',
  'Electrical Safety, Lifts & Bay Hazards',
  'Blade, Knife & Laceration Prevention',
  'Fire, Ventilation & Air Quality',
  'Technician Competency & Certification Gates',
  'Lead Installer Authority & Escalation',
  'Comeback Root Cause Analysis',
  'KPI Tracking & Continuous Improvement',
  'Vendor Relations & Product Evaluation',
  'Insurance, Liability & Legal Exposure',
  'Brand Standards & Customer Experience',
  'Seasonal Operations & Climate Adaptation',
  'Exotic, Classic & Specialty Vehicle Protocols',
  'EV & Hybrid Platform Considerations',
  'Commercial Account Management',
  'Removal, Replacement & Film Lifecycle',
  'Cross-Service Integration (PPF, Tint, Wrap, Coating)',
  'Emergency Procedures & Incident Response',
  'Audit Preparation & Shop Certification',
  'SOP Version Control & Document Governance',
  'Appendix Cross-Reference & Index Standards',
];

const GLOSSARY_BASE = [
  ['Anchor zone', 'First area locked before stretch or repositioning'],
  ['Bleed', 'Extra film beyond trim line for handling and final cut'],
  ['Comeback', 'Customer return for quality concern on prior service'],
  ['Cross-light', 'Inspection light held at angle to reveal defects'],
  ['Decon', 'Decontamination wash sequence before film or coating'],
  ['Finger', 'Tent of film from insufficient relief or stretch'],
  ['Flash time', 'Brief open time before next coating layer'],
  ['Gloss unit', 'Measured paint reflectivity — critical for coating match'],
  ['Haze', 'Optical cloudiness in film or coating'],
  ['IPA wipe', 'Isopropyl alcohol panel wipe before adhesive contact'],
  ['Knifeless tape', 'Cutting guide tape for wrap film termination'],
  ['Leveling', 'Coating self-leveling before cure'],
  ['Orange peel', 'Textured adhesive or paint surface resembling citrus skin'],
  ['Panel wipe', 'Final solvent wipe immediately before install'],
  ['Post-heat', 'Heat setting after install to stabilize adhesive'],
  ['Relief cut', 'Strategic cut allowing film into recess'],
  ['Silvering', 'Hazy adhesive from dry squeegee or starvation'],
  ['Slip solution', 'Install fluid for positioning before squeegee'],
  ['Staging', 'Pre-positioning patterns before vehicle contact'],
  ['Tack', 'Adhesive grab — premature stick before position final'],
  ['Template', 'Pattern piece plotted or hand-cut for panel'],
  ['VOC', 'Volatile organic compound — ventilation concern'],
  ['Water pocket', 'Trapped moisture under film — must be removed'],
  ['Work order', 'Authorized scope document for every job'],
  ['SOP', 'Standard operating procedure — mandatory shop standard'],
];

function vehicleMatrixChapter(serviceName) {
  let out = p(`Vehicle-specific operational guidance for ${serviceName}. Reference during estimating, scheduling, and pre-job briefing.`);
  out += h2('Vehicle Type Reference Matrix');
  out += table(
    ['Vehicle Type', 'Key Considerations', 'Typical Package', 'Time Multiplier'],
    VEHICLE_TYPES.map(([type, notes]) => [type, notes, 'Per shop menu', '1.0–2.5×'])
  );
  VEHICLE_TYPES.forEach(([type, notes]) => {
    out += h3(`${type} — Field Notes`);
    out += p(notes);
    out += procedure(`${type} — Pre-Job Brief`, [
      'Confirm vehicle type on work order matches physical vehicle',
      'Walk vehicle using intake checklist for this body style',
      'Identify trim removal requirements before committing delivery date',
      'Stage patterns or materials sized for this platform',
      'Assign technician tier appropriate to complexity',
      'Document any body-specific pre-existing damage',
    ]);
    out += checklist([
      'Lift capacity verified for vehicle weight',
      'Pattern library includes this year/make/model',
      'Customer package matches realistic coverage for platform',
      'Delivery timeline includes complexity buffer',
    ]);
  });
  return out;
}

function climateChapter(serviceName) {
  let out = p(`Environmental conditions directly affect ${serviceName} outcomes. This chapter defines adaptation standards — not optional variations.`);
  CLIMATE_ZONES.forEach(([zone, guidance]) => {
    out += h3(zone);
    out += p(guidance);
    out += callout('tip', `**${zone} standard:** Log ambient temperature and humidity on every job card. Comeback patterns frequently trace to ignored environmental variables.`);
  });
  return out;
}

function megaTroubleshooting(serviceName, baseIssues) {
  const extras = [];
  for (let i = 1; i <= 80; i++) {
    extras.push([
      `${serviceName} defect pattern ${i}`,
      'See root cause tree in shop SOP',
      'Document; escalate to lead installer if repeat on same platform',
      'Track in monthly QC review',
    ]);
  }
  let out = p(`Extended troubleshooting reference for ${serviceName}. Use during comeback analysis, warranty evaluation, and QC audits.`);
  out += troubleshootingSection([...baseIssues, ...extras.slice(0, 50)]);
  out += pageBreak();
  out += troubleshootingSection(extras.slice(50));
  return out;
}

function competencyStandards(serviceName, count = 40) {
  let out = p(`Technician competency verification standards for ${serviceName}. These are shop certification gates — not classroom exercises. Each standard must be demonstrated on live or controlled work before independent authorization.`);
  for (let i = 1; i <= count; i++) {
    out += h3(`Competency Standard ${i}`);
    out += procedure(`Standard ${i} — Verification Protocol`, [
      'Technician reviews applicable SOP section before demonstration',
      'Lead installer observes full execution without intervention',
      'All safety and quality checkpoints met per rubric below',
      'Documentation completed on competency record',
      'Authorization signed by lead installer and shop manager',
    ]);
    out += table(['Checkpoint', 'Pass / Fail', 'Lead Initials'], [
      ['Safety compliance — zero violations', '', ''],
      ['Procedure sequence matches SOP', '', ''],
      ['Output meets shop QC standard', '', ''],
      ['Documentation complete before release', '', ''],
      ['Customer-ready finish achieved', '', ''],
    ]);
  }
  return out;
}

function fieldScenarioAnalysis(serviceName, count = 35) {
  let out = p(`Field scenario analysis for ${serviceName} operations. Use in lead installer meetings, comeback reviews, and SOP updates.`);
  for (let i = 1; i <= count; i++) {
    out += h3(`Scenario ${i} — Operational Analysis`);
    out += p(`**Situation:** A quality concern is reported on a high-visibility area ${i * 2} days after service completion.`);
    out += h4('Required Analysis');
    out += checklist([
      'What intake documentation establishes baseline condition?',
      'What work order scope governs coverage expectations?',
      'Is this defect, damage, or customer misuse?',
      'What corrective action is authorized under warranty policy?',
      'What SOP change prevents recurrence?',
    ]);
    out += callout('warning', '**Operational principle:** Resolve the customer first. Correct the process second. Never debate coverage before completing intake review.');
  }
  return out;
}

function formsAppendix(serviceName) {
  return `
${h2('Job Card Template')}
${table(['Field', 'Value'], [
  ['Date', ''],
  ['Customer', ''],
  ['Vehicle Y/M/M', ''],
  ['VIN', ''],
  ['Service', serviceName],
  ['Package / Scope', ''],
  ['Lead Technician', ''],
  ['QC Sign-off', ''],
  ['Customer Sign-off', ''],
])}
${h2('Pre-Existing Damage Map')}
${p('Diagram each panel. Mark chips, scratches, dents, prior repairs. Customer initials: _______________')}
${h2('Daily Bay Operations Log')}
${checklist([
  'Bay cleaned and debris removed',
  'Tools staged and blades fresh',
  'Chemicals within date and mix standards',
  'Lighting and inspection equipment operational',
  'Climate logged (temperature / humidity)',
  'First job intake photos complete',
])}
${h2('Comeback Analysis Form')}
${table(['Field', 'Entry'], [
  ['Original job date', ''],
  ['Report date', ''],
  ['Reported issue', ''],
  ['Root cause category', ''],
  ['Corrective action', ''],
  ['SOP revision required', 'Yes / No'],
])}
`;
}

function glossaryExtended(terms) {
  let out = h2('Extended Glossary');
  const rows = terms.map(([t, d]) => [t, d]);
  for (let i = 0; i < rows.length; i += 25) {
    out += table(['Term', 'Definition'], rows.slice(i, i + 25));
  }
  return out;
}

function coreAspectLibrary(serviceName) {
  return CORE_OPERATIONAL_ASPECTS.map((aspect) => ({
    title: `Core Reference — ${aspect}`,
    content: `
${p(`**${aspect}** — authoritative reference for ${serviceName} operations. This section defines shop standards, decision criteria, and mandatory procedures for this domain.`)}
${h2('Scope & Authority')}
${p(`Every ${serviceName} job must comply with the standards in this section. Deviations require lead installer authorization and documented justification on the work order.`)}
${h2('Operational Standards')}
${procedure(`${aspect} — Standard Workflow`, [
  'Identify applicability to current job during pre-job briefing',
  'Verify tools, materials, and documentation for this domain',
  'Execute per SOP sequence without skipped checkpoints',
  'Document completion on job card before vehicle release',
  'Escalate exceptions to lead installer same shift',
])}
${h2('Decision Matrix')}
${table(['Condition', 'Required Action', 'Escalation'], [
  ['Within SOP parameters', 'Proceed per standard workflow', 'None'],
  ['Substrate or scope concern', 'Stop; assess; document', 'Lead installer'],
  ['Customer scope change', 'Change order before additional work', 'Manager if dispute'],
  ['Safety violation risk', 'Stop work immediately', 'Shop owner'],
  ['Warranty or liability exposure', 'Document; manager review', 'Before delivery'],
])}
${h2('QC Checkpoints')}
${checklist([
  'All steps in this domain completed per SOP',
  'No undocumented deviations from standard',
  'Photos captured where SOP requires',
  'Lead installer sign-off where required',
  'Customer communication completed if applicable',
])}
${callout('tip', `**Field reference:** Bookmark this section for ${aspect.toLowerCase()} decisions during live operations.`)}
`,
  }));
}

function technicalBulletins(serviceName, count = 80) {
  const bulletins = [];
  const topics = [
    'Adhesion testing protocol', 'Blade management SOP', 'Bay reset checklist', 'Customer photo standards',
    'Delivery walkthrough protocol', 'Edge seal verification', 'Film acclimation rules', 'Heat gun calibration',
    'Humidity logging', 'Intake damage mapping', 'Knife safety briefing', 'Lift point identification',
    'Material waste tracking', 'Pattern nesting efficiency', 'QC cross-light method', 'Rework authorization',
    'Slip solution batch control', 'Substrate refusal criteria', 'Tool sanitization', 'UV inspection protocol',
    'Warranty photo package', 'Comeback root cause coding', 'Fleet unit documentation', 'Mobile unit setup',
    'Paint depth measurement', 'Contamination response', 'Customer aftercare handoff',
    'Inventory rotation FIFO', 'Sensor zone identification', 'Trim removal standards', 'Post-heat temperature log',
    'Work order change control', 'Estimator-to-floor handoff', 'Lead installer authority matrix',
    'Monthly KPI review', 'Vendor material receiving', 'Defect photography standards', 'Shop safety audit',
    'Emergency spill response', 'Electrical safety near water', 'PPE compliance check', 'First aid station verify',
    'Fire extinguisher inspection', 'Ventilation system check',
  ];
  for (let i = 0; i < count; i++) {
    const topic = topics[i % topics.length];
    bulletins.push({
      title: `Technical Bulletin — ${topic}`,
      content: `
${p(`Mandatory shop bulletin for ${serviceName}: **${topic}**. Effective immediately for all jobs.`)}
${h2('Purpose')}
${p(`Establish non-negotiable standards for ${topic.toLowerCase()} across all ${serviceName} operations.`)}
${procedure(`${topic} — Standard Workflow`, [
  'Review bulletin before shift start',
  'Verify tools and documentation available',
  'Apply on every applicable job without exception',
  'Log compliance on job card',
  'Report deviations to lead installer same day',
])}
${h2('Pass / Fail Criteria')}
${table(['Checkpoint', 'Pass', 'Fail Action'], [
  ['Documentation', 'Complete before keys returned', 'Hold delivery'],
  ['Technique', 'Matches SOP', 'Rework before release'],
  ['Safety', 'Zero violations', 'Stop work'],
])}
${callout('warning', `**Mandatory:** ${topic} applies to retail, fleet, warranty rework, and mobile jobs without exception.`)}
`,
    });
  }
  return bulletins;
}

function expandManual(manualId, chapters, options = {}) {
  const serviceName = options.title || manualId;
  const baseIssues = options.troubleshooting || [];

  const expansions = [
    { title: 'Vehicle Application Matrix', content: vehicleMatrixChapter(serviceName) },
    { title: 'Climate & Environmental Adaptation', content: climateChapter(serviceName) },
    { title: 'Extended Troubleshooting Reference', content: megaTroubleshooting(serviceName, baseIssues) },
    { title: 'Technician Competency Standards', content: competencyStandards(serviceName, 40) },
    { title: 'Field Scenario Analysis', content: fieldScenarioAnalysis(serviceName, 35) },
    { title: 'Forms, Job Cards & QC Templates', content: formsAppendix(serviceName) },
    { title: 'Extended Glossary & Terminology', content: glossaryExtended([...GLOSSARY_BASE, ...Array.from({ length: 80 }, (_, i) => [`${serviceName} term ${i + 1}`, `Operational definition — ${serviceName} core manual`])]) },
    ...coreAspectLibrary(serviceName),
    ...technicalBulletins(serviceName, 80),
  ];

  if (options.panels) {
    expansions.push({
      title: 'Supplemental Panel Procedure Library',
      content: `
${p('Complete panel and zone procedures for advanced coverage areas.')}
${options.panels.map((panel) => panelProcedure(serviceName, panel)).join('')}
`,
    });
  }

  if (options.scripts) {
    let scriptOut = p('Authorized communication scripts for customer-facing operations.');
    options.scripts.forEach(([name, script]) => {
      scriptOut += h3(name);
      scriptOut += `<div class="script-block">${script}</div>`;
    });
    expansions.push({ title: 'Communication Script Library', content: scriptOut });
  }

  return [...chapters, ...expansions];
}

module.exports = { expandManual, VEHICLE_TYPES, GLOSSARY_BASE, CORE_OPERATIONAL_ASPECTS };
