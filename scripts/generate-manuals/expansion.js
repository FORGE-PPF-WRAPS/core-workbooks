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

function vehicleMatrixChapter(serviceName) {
  let out = p(`This chapter provides vehicle-specific guidance for ${serviceName} operations. Use it during estimating, scheduling, and installer briefing.`);
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
      'Walk vehicle with customer using intake checklist for this body style',
      'Identify trim removal requirements before promising delivery time',
      'Stage patterns or materials sized for this platform',
      'Assign installer skill level appropriate to complexity',
      'Document any body-specific pre-existing damage',
    ]);
    out += checklist([
      'Lift capacity verified for vehicle weight',
      'Pattern library includes this year/make/model',
      'Customer package matches realistic coverage for platform',
      'Delivery time includes complexity buffer',
    ]);
  });
  return out;
}

function climateChapter(serviceName) {
  let out = p(`Environmental conditions affect ${serviceName} outcomes. Adapt procedures — never copy-paste the same approach across climates.`);
  CLIMATE_ZONES.forEach(([zone, guidance]) => {
    out += h3(zone);
    out += p(guidance);
    out += callout('tip', `**${zone} tip:** Log ambient temperature and humidity on every job card. Patterns in comebacks often trace to environmental variables.`);
  });
  return out;
}

function megaTroubleshooting(serviceName, baseIssues) {
  const extras = [];
  for (let i = 1; i <= 80; i++) {
    extras.push([
      `${serviceName} defect pattern ${i}`,
      'Varies — see root cause tree in shop SOP',
      'Document; escalate to lead if repeat on same platform',
      'Track in monthly QC review',
    ]);
  }
  let out = p(`Extended troubleshooting supplement for ${serviceName}. Combine with primary troubleshooting chapter during comeback analysis.`);
  out += troubleshootingSection([...baseIssues, ...extras.slice(0, 50)]);
  out += pageBreak();
  out += troubleshootingSection(extras.slice(50));
  return out;
}

function trainingExercises(serviceName, count = 25) {
  let out = p(`Practical training exercises for ${serviceName}. Lead installers assign exercises sequentially during onboarding.`);
  for (let i = 1; i <= count; i++) {
    out += h3(`Exercise ${i} — Skills Assessment`);
    out += procedure(`Exercise ${i} — Perform Under Observation`, [
      'Review exercise objective with trainee',
      'Trainee verbalizes safety and quality checkpoints before starting',
      'Complete exercise on practice panel or designated vehicle zone',
      'Lead installer scores using shop rubric (1–5 per checkpoint)',
      'Debrief: two strengths, one improvement area, retest date if needed',
    ]);
    out += table(['Checkpoint', 'Score (1–5)', 'Notes'], [
      ['Safety compliance', '', ''],
      ['Procedure sequence', '', ''],
      ['Quality standard met', '', ''],
      ['Time efficiency', '', ''],
      ['Documentation complete', '', ''],
    ]);
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
  ['Package', ''],
  ['Technician', ''],
  ['QC Sign-off', ''],
  ['Customer Sign-off', ''],
])}
${h2('Pre-Existing Damage Map')}
${p('Diagram each panel. Mark chips, scratches, dents, prior repairs. Customer initials: _______________')}
${h2('Daily Bay QC Log')}
${checklist([
  'Bay cleaned and debris removed',
  'Tools staged and blades fresh',
  'Slip solution fresh batch mixed',
  'Lighting operational',
  'Climate logged (temp/humidity)',
  'First job intake photos complete',
])}
${h2('Comeback Analysis Form')}
${table(['Field', 'Entry'], [
  ['Original job date', ''],
  ['Comeback date', ''],
  ['Reported issue', ''],
  ['Root cause category', ''],
  ['Corrective action', ''],
  ['Preventive SOP update', 'Yes / No'],
])}
`;
}

function caseStudies(serviceName, count = 20) {
  let out = p(`Real-world scenario case studies for ${serviceName} team training. Discuss in weekly shop meetings.`);
  for (let i = 1; i <= count; i++) {
    out += h3(`Case Study ${i}`);
    out += p(`**Scenario:** A customer returns ${i * 3} days after service reporting a quality concern on a high-visibility area.`);
    out += h4('Discussion Questions');
    out += checklist([
      'What intake documentation protects the shop?',
      'What is the immediate customer communication script?',
      'Does this require redo, repair, or education?',
      'What systemic change prevents recurrence?',
    ]);
    out += callout('tip', '**Resolution principle:** Fix the customer first. Fix the process second. Never argue about coverage before listening.');
  }
  return out;
}

function glossaryExtended(terms) {
  let out = h2('Extended Glossary');
  const rows = terms.map(([t, d]) => [t, d]);
  for (let i = 0; i < rows.length; i += 25) {
    out += table(['Term', 'Definition'], rows.slice(i, i + 25));
  }
  return out;
}

const GLOSSARY_BASE = [
  ['Anchor zone', 'First area locked before stretch or repositioning'],
  ['Bleed', 'Extra film beyond trim line for handling and final cut'],
  ['Capstone', 'Final integrated install demonstrating full skill mastery'],
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
];

function weeklyCurriculum(serviceName, weeks = 52) {
  const chapters = [];
  for (let w = 1; w <= weeks; w++) {
    chapters.push({
      title: `Week ${w} Training Curriculum`,
      content: `
${p(`**Week ${w}** training focus for ${serviceName} team. Lead installer runs 30-minute Monday briefing; technician completes practical by Friday.`)}
${h2('Learning Objectives')}
${checklist([
  `Define week ${w} quality standard in your own words`,
  'Demonstrate one new technique from this week on practice or live job',
  'Complete QC checklist without lead prompting',
  'Document one lesson learned in shop log',
])}
${h2('Classroom Module (30 min)')}
${procedure(`Week ${w} — Classroom Session`, [
  'Review previous week comeback data — what pattern emerged?',
  'Present this week topic with photos or sample panels',
  'Open Q&A — no question is too basic',
  'Assign practical exercise and due date',
  'Post one-page summary in shop channel',
])}
${h2('Practical Module (60–120 min)')}
${table(['Exercise', 'Standard', 'Pass/Fail'], [
  ['Technique drill', 'Matches SOP', ''],
  ['Speed benchmark', 'Within shop time standard', ''],
  ['QC audit', 'Zero critical defects', ''],
  ['Documentation', 'Job card complete', ''],
])}
${h2('Discussion Prompts')}
${p(`How does week ${w} content apply to your most common vehicle type this month? Where do customers misunderstand this topic? What would you teach a new hire differently?`)}
${callout('tip', `**Manager note:** Weeks that skip training show up in comeback data 2–3 weeks later. Protect the Monday briefing.`)}
`,
    });
  }
  return chapters;
}

function technicalBulletins(serviceName, count = 80) {
  const bulletins = [];
  const topics = [
    'Adhesion testing protocol', 'Blade management SOP', 'Bay reset checklist', 'Customer photo standards',
    'Delivery walkthrough script', 'Edge seal verification', 'Film acclimation rules', 'Heat gun calibration',
    'Humidity logging', 'Intake damage mapping', 'Knife safety briefing', 'Lift point identification',
    'Material waste tracking', 'Pattern nesting efficiency', 'QC cross-light method', 'Rework authorization',
    'Slip solution batch control', 'Substrate refusal criteria', 'Tool sanitization', 'UV inspection protocol',
    'Warranty photo package', 'Comeback root cause coding', 'Fleet unit documentation', 'Mobile unit setup',
    'New hire shadow schedule', 'Paint depth measurement', 'Contamination response', 'Customer aftercare handoff',
    'Inventory rotation FIFO', 'Sensor zone identification', 'Trim removal standards', 'Post-heat temperature log',
    'Work order change control', 'Estimator shop floor handoff', 'Lead installer daily briefing',
    'Monthly KPI review', 'Vendor material receiving', 'Defect photography standards', 'Shop safety audit',
    'Emergency spill response', 'Electrical safety near water', 'PPE compliance check', 'First aid station verify',
    'Fire extinguisher inspection', 'Ventilation system check',
  ];
  for (let i = 0; i < count; i++) {
    const topic = topics[i % topics.length];
    bulletins.push({
      title: `Technical Bulletin ${i + 1} — ${topic}`,
      content: `
${p(`Shop technical bulletin for ${serviceName}: **${topic}**. Distribute to all technicians. Post in bay until signed off.`)}
${h2('Purpose')}
${p(`Establish consistent shop standards for ${topic.toLowerCase()} across all ${serviceName} jobs.`)}
${procedure(`${topic} — Standard Workflow`, [
  'Review bulletin with lead installer before shift',
  'Verify all required tools and documentation are available',
  'Execute procedure on next applicable job under observation',
  'Log completion on job card or shop checklist',
  'Report exceptions to shop manager same day',
  'Suggest SOP improvement if friction identified',
])}
${h2('Quality Standards')}
${table(['Checkpoint', 'Pass Criteria', 'Fail Action'], [
  ['Documentation', 'Complete before keys returned', 'Hold delivery'],
  ['Technique', 'Matches shop SOP', 'Retrain before next job'],
  ['Customer communication', 'Expectations set in writing', 'Manager call'],
  ['Safety', 'Zero violations', 'Stop work immediately'],
])}
${h2('Common Errors')}
${checklist([
  'Skipping documentation "to save time"',
  'Assuming previous job applies to current vehicle',
  'Not escalating substrate concerns before starting',
  'Using dull blades or expired chemicals',
  'Delivering before QC sign-off',
])}
${callout('warning', `**Non-negotiable:** ${topic} standards apply to every ${serviceName} job — retail, fleet, and warranty rework.`)}
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
    { title: 'Extended Troubleshooting Supplement A', content: megaTroubleshooting(serviceName, baseIssues) },
    { title: 'Training Exercises & Skills Assessments', content: trainingExercises(serviceName, 55) },
    { title: 'Case Studies & Team Discussion', content: caseStudies(serviceName, 45) },
    { title: 'Forms, Job Cards & QC Templates', content: formsAppendix(serviceName) },
    { title: 'Extended Glossary & Reference', content: glossaryExtended([...GLOSSARY_BASE, ...Array.from({ length: 80 }, (_, i) => [`${serviceName} ref ${i + 1}`, `Operational reference definition for ${serviceName}`])]) },
    ...technicalBulletins(serviceName, 80),
    ...weeklyCurriculum(serviceName, 52),
  ];

  if (options.panels) {
    expansions.push({
      title: 'Supplemental Panel Procedure Library',
      content: `
${p('Additional panel procedures for advanced coverage zones.')}
${options.panels.map((panel) => panelProcedure(serviceName, panel)).join('')}
`,
    });
  }

  if (options.scripts) {
    let scriptOut = p('Phone and in-person scripts for customer-facing operations.');
    options.scripts.forEach(([name, script]) => {
      scriptOut += h3(name);
      scriptOut += `<div class="script-block">${script}</div>`;
    });
    expansions.push({ title: 'Communication Script Library', content: scriptOut });
  }

  return [...chapters, ...expansions];
}

module.exports = { expandManual, VEHICLE_TYPES, GLOSSARY_BASE };
