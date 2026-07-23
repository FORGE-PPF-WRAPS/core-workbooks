#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SOPS_DIR = path.join(ROOT, 'docs/sops');
const MANIFEST_PATH = path.join(ROOT, 'docs/manifest.json');

const VERSION = '1.0';

const SECTIONS = [
  { num: 1, title: 'Company Operations', range: 'SOP-001 – SOP-004' },
  { num: 2, title: 'Customer Experience', range: 'SOP-100 – SOP-107' },
  { num: 3, title: 'Installation Operations', range: 'SOP-200 – SOP-206' },
  { num: 4, title: 'Window Tint', range: 'SOP-300' },
  { num: 5, title: 'Paint Protection Film', range: 'SOP-400' },
  { num: 6, title: 'Vinyl Wrap', range: 'SOP-500' },
  { num: 7, title: 'Colored TPU', range: 'SOP-600' },
  { num: 8, title: 'Business Operations', range: 'SOP-700 – SOP-705' },
  { num: 9, title: 'Marketing', range: 'SOP-800 – SOP-803' },
  { num: 10, title: 'Emergency Procedures', range: 'SOP-900 – SOP-903' },
];

function sop(code, section, title, slug, fields) {
  const sectionMeta = SECTIONS.find((s) => s.num === section);
  return {
    code,
    section,
    sectionTitle: sectionMeta.title,
    title,
    id: `sop-${code.replace('SOP-', '').toLowerCase()}-${slug}`,
    slug,
    ...fields,
  };
}

const SOPS = [
  // ── Section 1: Company Operations ──────────────────────────────────────
  sop('SOP-001', 1, 'Company Mission & Core Values', 'company-mission-core-values', {
    purpose: 'Define why the shop exists and the non-negotiable values that govern every decision, interaction, and installation.',
    scope: 'All owners, managers, installers, and customer-facing staff. Posted in break room and referenced during onboarding.',
    responsibilities: [
      ['Owner / GM', 'Maintains mission statement; models values in daily decisions'],
      ['All staff', 'Know mission and values; escalate conflicts with values to management'],
    ],
    procedures: [
      {
        name: 'Mission statement',
        steps: [
          'Forge exists to deliver flawless automotive protection and restyling through disciplined craft, honest communication, and repeatable systems.',
          'Every vehicle leaving the shop represents our reputation — quality is not optional.',
          'We train installers to professional standards because shortcuts create comebacks, not profit.',
        ],
      },
      {
        name: 'Core values',
        steps: [
          '**Craftsmanship** — Do the work right the first time. Rework is failure, not a second chance.',
          '**Integrity** — Document condition honestly. Never sell what the vehicle does not need.',
          '**Accountability** — Own mistakes immediately. Fix them before the customer discovers them.',
          '**Respect** — Treat every customer vehicle as if it were your own.',
          '**Continuous improvement** — Follow SOPs, then improve them through technical bulletins and QC data.',
        ],
        checkpoint: 'New hires can recite mission and all five values within first week.',
      },
    ],
    qualityStandards: [
      'Mission and values posted in shop and included in employee handbook',
      'Referenced in pre-shift huddles at least weekly',
    ],
    related: [
      ['Forge SOP Manual', 'forge-sop-manual'],
      ['Employee Code of Conduct', 'sop-002-employee-code-of-conduct'],
      ['Brand Identity Guidelines', 'brand-identity-guidelines'],
    ],
  }),

  sop('SOP-002', 1, 'Employee Code of Conduct', 'employee-code-of-conduct', {
    purpose: 'Establish behavioral standards for professionalism, safety, and customer trust.',
    scope: 'All employees, contractors, and trainees while on premises or representing the shop.',
    responsibilities: [
      ['Owner / GM', 'Enforces policy; documents violations'],
      ['Lead installer', 'Models conduct on the floor; reports issues'],
      ['All staff', 'Comply with dress, language, phone, and social media standards'],
    ],
    procedures: [
      {
        name: 'Professional standards',
        steps: [
          'Arrive on time, in clean branded or neutral work attire. No offensive graphics.',
          'No profanity, arguments, or personal phone use in customer areas.',
          'No food or open drinks in installation bays.',
          'Customer vehicles: no smoking, no unauthorized test drives, no personal items left inside.',
        ],
      },
      {
        name: 'Confidentiality & social media',
        steps: [
          'Do not post customer vehicles, pricing disputes, or internal drama on personal social accounts without written release.',
          'Do not discuss one customer\'s job with another customer.',
          'Shop marketing content follows SOP-800 through SOP-803 only.',
        ],
      },
      {
        name: 'Substance & safety',
        steps: [
          'Zero tolerance for alcohol or illegal substances on premises or while operating shop vehicles.',
          'Report injuries, near-misses, and equipment damage immediately to management.',
        ],
      },
    ],
    qualityStandards: [
      'Zero unresolved conduct complaints on customer record',
      'Annual acknowledgment signed by every team member',
    ],
    safetyNotes: 'Violations involving safety or customer property may result in immediate suspension pending review.',
    related: [
      ['Company Mission & Core Values', 'sop-001-company-mission-core-values'],
      ['Shop Opening Procedure', 'sop-003-shop-opening-procedure'],
    ],
  }),

  sop('SOP-003', 1, 'Shop Opening Procedure', 'shop-opening-procedure', {
    purpose: 'Standardize the start of every business day so bays, tools, and front desk are production-ready before the first customer.',
    scope: 'First person on site (typically lead installer or opening manager). Completed before 30 minutes prior to first appointment.',
    responsibilities: [
      ['Opening lead', 'Executes full opening checklist'],
      ['Customer service', 'Verifies CRM appointments and phone forwarding'],
    ],
    procedures: [
      {
        name: 'Facility & security',
        steps: [
          'Disarm alarm; unlock front entry. Lights on in showroom, bays, and QC area.',
          'Verify HVAC running — target 68–72°F in install bays.',
          'Check restrooms and waiting area are clean and stocked.',
        ],
      },
      {
        name: 'Production readiness',
        steps: [
          'Complete Daily Bay Reset Checklist in each active bay.',
          'Power on compressors, plotters, and heat guns; verify air pressure and blade condition.',
          'Restock PPE, towels, IPA, slip solution, and blades to par levels.',
          'Review today\'s work orders — confirm film/coverage materials pulled for first two jobs.',
        ],
      },
      {
        name: 'Front desk readiness',
        steps: [
          'Boot POS, CRM, and phone system. Test hold music and voicemail.',
          'Print or queue today\'s appointment sheet.',
          'Post daily production board with bay assignments.',
        ],
        checkpoint: 'Shop is customer-presentable and first job can start within 15 minutes of vehicle arrival.',
      },
    ],
    qualityStandards: [
      'Opening checklist signed daily',
      'No bay starts a job without completed reset',
    ],
    related: [
      ['Daily Bay Reset Checklist', 'daily-bay-reset-checklist'],
      ['Shop Closing Procedure', 'sop-004-shop-closing-procedure'],
      ['Installation Bay Setup', 'sop-203-installation-bay-setup'],
    ],
  }),

  sop('SOP-004', 1, 'Shop Closing Procedure', 'shop-closing-procedure', {
    purpose: 'Secure the facility, protect customer vehicles, and close out production records at end of day.',
    scope: 'Last person on site or designated closing manager. Every business day.',
    responsibilities: [
      ['Closing lead', 'Executes closing checklist and secures building'],
      ['Installers', 'Complete bay cleanup before leaving'],
    ],
    procedures: [
      {
        name: 'Production closeout',
        steps: [
          'All vehicles secured — keys in lockbox, covers on if overnight in bay.',
          'Incomplete jobs documented on work order with photos and next-step notes.',
          'Waste film, bottles, and sharps disposed per local regulations.',
          'Tools returned to shadow boards; heat guns holstered and powered off.',
        ],
      },
      {
        name: 'Administrative closeout',
        steps: [
          'CRM updated — job status, ETA changes, and customer texts sent.',
          'Cash drawer balanced; deposits prepared per accounting schedule.',
          'Tomorrow\'s appointments confirmed or flagged for follow-up.',
        ],
      },
      {
        name: 'Security',
        steps: [
          'Exterior doors locked; bay doors down.',
          'Alarm armed; verify camera system recording.',
          'Final walkthrough — no vehicles running, no open chemicals, no lights left on in bays.',
        ],
      },
    ],
    qualityStandards: [
      'Zero vehicles left unlocked overnight',
      '100% of in-progress jobs have written status on work order',
    ],
    related: [
      ['Shop Opening Procedure', 'sop-003-shop-opening-procedure'],
      ['CRM Updates', 'sop-703-crm-updates'],
    ],
  }),

  // ── Section 2: Customer Experience ───────────────────────────────────────
  sop('SOP-100', 2, 'Answering the Phone', 'answering-the-phone', {
    purpose: 'Deliver a consistent, professional first impression on every inbound call.',
    scope: 'Customer service, front desk, and any staff answering the main shop line.',
    procedures: [
      {
        name: 'Answer within 3 rings',
        steps: [
          'Greeting: "Thank you for calling [Shop Name], this is [Name], how can I help you today?"',
          'Speak clearly, smile — tone carries through the phone.',
          'If you must place on hold: ask permission, hold under 60 seconds, thank them when returning.',
        ],
      },
      {
        name: 'Information capture',
        steps: [
          'Capture: name, phone, email, vehicle year/make/model, service interest, timeline.',
          'Enter lead in CRM before ending call — even if they are "just asking questions."',
          'If unable to quote on the phone, schedule consultation or promise callback within 2 business hours.',
        ],
      },
      {
        name: 'Transfer & escalation',
        steps: [
          'Technical questions beyond your authority → warm transfer to lead installer or manager with context.',
          'Angry caller → remain calm, listen, do not argue. Escalate to manager per SOP-902 if needed.',
        ],
      },
    ],
    qualityStandards: [
      'Answer rate ≥ 90% during business hours',
      'Every call logged in CRM same day',
    ],
    related: [
      ['Responding to Leads', 'sop-101-responding-to-leads'],
      ['Scheduling Appointments', 'sop-102-scheduling-appointments'],
    ],
  }),

  sop('SOP-101', 2, 'Responding to Leads', 'responding-to-leads', {
    purpose: 'Convert inbound inquiries into qualified appointments with consistent follow-up.',
    scope: 'Web forms, SMS, email, social DMs, and walk-in inquiries.',
    procedures: [
      {
        name: 'Speed to lead',
        steps: [
          'Respond within 15 minutes during business hours; within 2 hours after hours.',
          'Use template: thank them, acknowledge vehicle/service, ask one qualifying question, offer two appointment slots.',
          'Log source (Google, Instagram, referral) in CRM for marketing attribution.',
        ],
      },
      {
        name: 'Qualification',
        steps: [
          'Confirm vehicle details, desired coverage, budget range if appropriate, and timeline.',
          'Send pricing guide or package overview PDF when customer requests ballpark — never guess on complex jobs.',
          'Disqualify respectfully if vehicle or scope is outside shop capabilities — refer when possible.',
        ],
      },
      {
        name: 'Follow-up sequence',
        steps: [
          'Day 0: initial response. Day 1: follow-up if no reply. Day 3: value-add (gallery link, review snippet). Day 7: final check-in.',
          'Mark lead lost with reason after 7 days of no engagement.',
        ],
      },
    ],
    qualityStandards: [
      'Median first-response time under 30 minutes',
      'Lead-to-appointment conversion tracked monthly',
    ],
    related: [
      ['Answering the Phone', 'sop-100-answering-the-phone'],
      ['Estimate Process', 'sop-105-estimate-process'],
      ['Marketing Resources Kit', 'marketing-resources-kit'],
    ],
  }),

  sop('SOP-102', 2, 'Scheduling Appointments', 'scheduling-appointments', {
    purpose: 'Book production time accurately so bays are neither over-committed nor idle.',
    scope: 'Customer service and managers scheduling drop-off, install, and pickup.',
    procedures: [
      {
        name: 'Capacity check',
        steps: [
          'Verify bay availability against job complexity — do not book two full front-end PPF jobs in one bay same day.',
          'Block buffer time for QC and unexpected rework (minimum 2 hours per major job).',
          'Confirm material on hand or order lead time before confirming date.',
        ],
      },
      {
        name: 'Booking',
        steps: [
          'Create CRM appointment with: customer, vehicle, scope, estimated labor hours, assigned bay, deposit status.',
          'Send confirmation text/email with date, time, address, what to bring, and cancellation policy.',
          'For multi-day jobs: book drop-off, estimated completion, and pickup as separate calendar events.',
        ],
      },
      {
        name: 'Changes & no-shows',
        steps: [
          'Reschedules: offer two alternatives; note reason in CRM.',
          'No-show: call within 30 minutes; release bay after 2 hours; apply cancellation policy if applicable.',
        ],
      },
    ],
    qualityStandards: [
      'Schedule accuracy — completed on promised date ≥ 95%',
      'Every appointment linked to work order before vehicle arrives',
    ],
    related: [
      ['Vehicle Check-In', 'sop-103-vehicle-check-in'],
      ['Work Order / Job Card', 'work-order-job-card'],
      ['Refund & Cancellation Policy', 'refund-cancellation-policy'],
    ],
  }),

  sop('SOP-103', 2, 'Vehicle Check-In', 'vehicle-check-in', {
    purpose: 'Document vehicle condition, authorize work, and set expectations before any service begins.',
    scope: 'All customer vehicles — PPF, tint, wrap, TPU, ceramic, detailing. CS and lead tech at drop-off.',
    procedures: [
      {
        name: 'Greet and verify',
        steps: [
          'Confirm customer name, service scope, and estimated completion date.',
          'Verify deposit received if required per SOP-106.',
          'Open or update job in CRM / work order system.',
        ],
      },
      {
        name: 'Walkaround inspection',
        steps: [
          'Inspect all four sides, roof, glass, wheels, and interior (if applicable) under adequate lighting.',
          'Document every pre-existing defect on Vehicle Inspection Form.',
          'Photograph all panels and all noted damage — timestamp photos.',
        ],
      },
      {
        name: 'Authorization',
        steps: [
          'Review scope and price with customer.',
          'Customer signs Service Agreement and inspection form.',
          'Collect keys; tag with job number.',
        ],
      },
      {
        name: 'Bay handoff',
        steps: [
          'Move vehicle to assigned bay or queue.',
          'Notify lead technician via work order.',
          'Send customer confirmation text with direct contact info and ETA.',
        ],
        checkpoint: 'No vehicle enters production without signed inspection form.',
      },
    ],
    qualityStandards: [
      '100% vehicles have signed inspection form before work starts',
      'All pre-existing damage photographed and noted',
    ],
    related: [
      ['Vehicle Inspection Form', 'vehicle-inspection-form'],
      ['Customer Walkaround', 'sop-104-customer-walkaround'],
      ['Service Agreement', 'service-agreement'],
    ],
  }),

  sop('SOP-104', 2, 'Customer Walkaround', 'customer-walkaround', {
    purpose: 'Build trust by reviewing documented condition with the customer before keys change hands.',
    scope: 'Performed at check-in and again at delivery. CS or lead tech conducts.',
    procedures: [
      {
        name: 'Check-in walkaround',
        steps: [
          'Walk vehicle with customer clockwise — front, passenger, rear, driver.',
          'Point out each defect already noted; ask "anything we missed?"',
          'Explain what areas will be worked on and what will not be touched.',
          'Customer initials inspection form at completion.',
        ],
      },
      {
        name: 'Delivery walkaround',
        steps: [
          'Review completed work panel by panel in QC lighting.',
          'Demonstrate edges, seams, and care instructions.',
          'Customer signs delivery checklist confirming acceptance.',
        ],
      },
    ],
    qualityStandards: [
      'Zero "you scratched my car" disputes without pre-existing photo documentation',
      'Walkaround completed on 100% of retail jobs',
    ],
    related: [
      ['Vehicle Check-In', 'sop-103-vehicle-check-in'],
      ['Vehicle Delivery', 'sop-107-vehicle-delivery'],
      ['Vehicle Delivery Checklist', 'vehicle-delivery-checklist'],
    ],
  }),

  sop('SOP-105', 2, 'Estimate Process', 'estimate-process', {
    purpose: 'Produce accurate, professional written estimates that protect margin and set clear scope.',
    scope: 'All custom quotes — PPF, tint, wrap, TPU, ceramic, detailing packages.',
    procedures: [
      {
        name: 'Discovery',
        steps: [
          'Confirm vehicle year, make, model, trim, color, and condition.',
          'Identify customer goals: coverage level, film brand tier, timeline, budget sensitivity.',
          'Inspect vehicle in person when possible — photos are not sufficient for complex wrap or full PPF.',
        ],
      },
      {
        name: 'Build the estimate',
        steps: [
          'Use service-specific pricing guide — PPF, tint, wrap, coating, or detailing matrix.',
          'Line-item: materials, labor, removal, correction add-ons, tax, and total.',
          'Note exclusions: existing damage, paint correction requirements, film waste on complex colors.',
          'Enter estimate in CRM; generate Service Estimate / Quote PDF.',
        ],
      },
      {
        name: 'Present and close',
        steps: [
          'Walk customer through scope — what is included and what is not.',
          'Valid for 30 days unless material costs change > 5%.',
          'Offer deposit collection per SOP-106 to secure schedule slot.',
        ],
      },
    ],
    qualityStandards: [
      'Written estimate on every job over $500',
      'Estimate-to-invoice variance under 10% without signed change order',
    ],
    related: [
      ['Service Estimate / Quote', 'service-estimate-quote'],
      ['PPF Package Pricing Guide', 'ppf-pricing-guide'],
      ['Change Order Form', 'change-order-form'],
    ],
  }),

  sop('SOP-106', 2, 'Collecting Deposits', 'collecting-deposits', {
    purpose: 'Secure commitment and cover material costs before ordering film or blocking production time.',
    scope: 'All jobs requiring deposit per shop policy (typically ≥ $1,000 or custom material orders).',
    procedures: [
      {
        name: 'Deposit amount',
        steps: [
          'Standard: 50% deposit to schedule; balance due at pickup unless pre-approved account.',
          'Custom film orders: 100% material cost deposit before ordering.',
          'State deposit is non-refundable within cancellation window per Refund & Cancellation Policy.',
        ],
      },
      {
        name: 'Collection',
        steps: [
          'Accept card, cash, or approved digital payment — no personal Venmo/Zelle to staff.',
          'Issue Deposit & Payment Receipt immediately.',
          'Record payment in CRM and work order; update schedule to "confirmed."',
        ],
      },
      {
        name: 'Refunds & transfers',
        steps: [
          'Refunds only per published policy — manager approval required.',
          'Deposit may transfer to reschedule within 90 days if customer notifies before cutoff.',
        ],
      },
    ],
    qualityStandards: [
      'Deposit collected before custom material order placed',
      'Receipt issued 100% of the time',
    ],
    related: [
      ['Deposit & Payment Receipt', 'deposit-payment-receipt'],
      ['Refund & Cancellation Policy', 'refund-cancellation-policy'],
      ['Scheduling Appointments', 'sop-102-scheduling-appointments'],
    ],
  }),

  sop('SOP-107', 2, 'Vehicle Delivery', 'vehicle-delivery', {
    purpose: 'Complete the customer experience with education, documentation, and a flawless handoff.',
    scope: 'Every completed job before keys return to customer.',
    procedures: [
      {
        name: 'Pre-delivery verification',
        steps: [
          'Final Inspection (SOP-206) signed off.',
          'Vehicle cleaned of install debris; interior vacuumed if foot traffic occurred.',
          'Paperwork packet prepared: warranty certificate, aftercare card, invoice.',
        ],
      },
      {
        name: 'Customer walkthrough',
        steps: [
          'Review completed work in QC lighting — panel by panel.',
          'Explain cure times, wash restrictions, and warranty registration (SOP-702).',
          'Customer signs Vehicle Delivery Checklist and accepts vehicle.',
        ],
      },
      {
        name: 'Post-delivery',
        steps: [
          'Collect final payment per SOP-701 if balance due.',
          'Schedule follow-up per SOP-704 and review request per SOP-803.',
          'CRM status → delivered; attach delivery photos.',
        ],
      },
    ],
    qualityStandards: [
      'Zero deliveries without signed delivery checklist',
      'Aftercare card provided 100% of film/coating jobs',
    ],
    related: [
      ['Vehicle Delivery Checklist', 'vehicle-delivery-checklist'],
      ['Customer Aftercare Card', 'customer-aftercare-card'],
      ['Warranty Certificate', 'warranty-certificate'],
    ],
  }),

  // ── Section 3: Installation Operations ───────────────────────────────────
  sop('SOP-200', 3, 'Vehicle Inspection', 'vehicle-inspection', {
    purpose: 'Assess paint, glass, and substrate condition before any installation work begins.',
    scope: 'Lead installer or designated prep tech. After CS check-in, before wash or decon.',
    procedures: [
      {
        name: 'Lighting & documentation',
        steps: [
          'Position vehicle in inspection lighting — minimum 1000 lux on horizontal surfaces.',
          'Verify CS inspection form on file; re-walk if gaps exist.',
          'Photograph every panel at 3 angles minimum.',
        ],
      },
      {
        name: 'Paint & substrate assessment',
        steps: [
          'Note swirls, chips, rust, repaints, PDR, and aftermarket parts.',
          'Identify high-risk areas: rubber trim, badges, sensors, panoramic roofs.',
          'Flag paint correction requirement before film install — stop if customer declined correction on swirled panels.',
        ],
      },
      {
        name: 'Production notes',
        steps: [
          'Enter findings on work order — installer-facing notes.',
          'Complete Pre-Install QC Checklist.',
          'Escalate scope changes to manager before proceeding.',
        ],
      },
    ],
    qualityStandards: [
      'Pre-install checklist on 100% of jobs',
      'No film applied over undisclosed pre-existing damage',
    ],
    related: [
      ['Pre-Install QC Checklist', 'pre-install-qc-checklist'],
      ['Vehicle Check-In', 'sop-103-vehicle-check-in'],
      ['PPF Master Install Manual', 'ppf-master-install'],
    ],
  }),

  sop('SOP-201', 3, 'Vehicle Wash Procedure', 'vehicle-wash-procedure', {
    purpose: 'Remove surface dirt safely before decontamination and film application.',
    scope: 'All vehicles receiving PPF, wrap, TPU, or coating. Performed in designated wash zone.',
    procedures: [
      {
        name: 'Pre-rinse',
        steps: [
          'Rinse entire vehicle top-down with pressure washer — max 1200 PSI, 12" standoff.',
          'Focus wheel wells and lower panels where grit accumulates.',
          'Never spray directly at panel gaps or damaged paint.',
        ],
      },
      {
        name: 'Contact wash',
        steps: [
          'Two-bucket method: clean soap solution + rinse bucket with grit guards.',
          'Microfiber wash mitt only — no brushes on paint.',
          'Work top-down; straight-line motion; rinse mitt between panels.',
        ],
      },
      {
        name: 'Dry & handoff',
        steps: [
          'Blow dry door jambs, mirrors, and emblems with filtered air.',
          'Microfiber towel dry — no dragging across dry panels.',
          'Move to decon bay immediately or cover vehicle if delay exceeds 30 minutes.',
        ],
      },
    ],
    qualityStandards: [
      'Zero towel scratches from wash process',
      'Vehicle enters decon within 2 hours of wash',
    ],
    safetyNotes: 'Wet floors — cones and caution signs required in wash bay.',
    related: [
      ['Decontamination', 'sop-202-decontamination'],
      ['Contamination Control', 'sop-202-decontamination'],
    ],
  }),

  sop('SOP-202', 3, 'Decontamination', 'decontamination', {
    purpose: 'Remove bonded contaminants so film adheres to a chemically clean surface.',
    scope: 'All PPF, wrap, and TPU installs. Select steps per service manual.',
    procedures: [
      {
        name: 'Chemical decon',
        steps: [
          'Iron remover on paint — dwell per product label, rinse thoroughly.',
          'Tar and adhesive remover on affected areas only.',
          'Panel wipe with IPA 70% (or manufacturer-specified prep solution) immediately before install.',
        ],
      },
      {
        name: 'Mechanical decon',
        steps: [
          'Clay bar or clay mitt with lubricant on paint surfaces receiving film.',
          'Glass: steel wool 0000 + glass cleaner on tint jobs only where manual specifies.',
          'Final IPA wipe — one direction, fresh towel per section.',
        ],
      },
      {
        name: 'Contamination control',
        steps: [
          'No silicone-based dressings in install bay before or during job.',
          'Installers wash hands; nitrile gloves for final prep.',
          'Vehicle cannot leave decon bay through customer waiting area.',
        ],
        checkpoint: 'Water break test passes on paint (sheet flow, no beading spots) before PPF/wrap.',
      },
    ],
    qualityStandards: [
      'Zero adhesion failures traced to prep on QC review',
      'IPA wipe within 30 minutes of first panel install',
    ],
    related: [
      ['PPF Surface Prep (workflow)', 'sop-400-complete-ppf-installation-workflow'],
      ['Pre-Install QC Checklist', 'pre-install-qc-checklist'],
    ],
  }),

  sop('SOP-203', 3, 'Installation Bay Setup', 'installation-bay-setup', {
    purpose: 'Configure a clean, organized bay for maximum quality and efficiency.',
    scope: 'Before every job. Lead installer or assigned tech.',
    procedures: [
      {
        name: 'Bay environment',
        steps: [
          'Complete Daily Bay Reset Checklist.',
          'Verify lighting — no burned-out LEDs in primary work zone.',
          'Dust sweep; damp-mop if floor visible dirty.',
          'Close bay doors during active install to limit dust ingress.',
        ],
      },
      {
        name: 'Equipment layout',
        steps: [
          'Heat gun on stand; extension cords routed overhead, not across walk paths.',
          'Solution bottles labeled and filled; blades in dispenser.',
          'Plotter warmed up if computer-cut job.',
          'Trash and film liner bins within arm\'s reach.',
        ],
      },
      {
        name: 'Job staging',
        steps: [
          'Pull work order; confirm film lot numbers match job card.',
          'Stage patterns or roll film at bay entry.',
          'Post "Bay Occupied" sign if customers have bay sightlines.',
        ],
      },
    ],
    qualityStandards: [
      'Bay reset between every job',
      'Film lot traceable to work order',
    ],
    related: [
      ['Daily Bay Reset Checklist', 'daily-bay-reset-checklist'],
      ['Tool Preparation', 'sop-204-tool-preparation'],
      ['Shop Opening Procedure', 'sop-003-shop-opening-procedure'],
    ],
  }),

  sop('SOP-204', 3, 'Tool Preparation', 'tool-preparation', {
    purpose: 'Ensure every tool is clean, functional, and appropriate before touching customer vehicles.',
    scope: 'All installers before starting any job.',
    procedures: [
      {
        name: 'Cutting & squeegee tools',
        steps: [
          'Fresh blade in knife — change every panel or when dull.',
          'Inspect squeegees for nicks; swap if edge damaged.',
          'Tack cloth squeegee faces before first panel.',
        ],
      },
      {
        name: 'Heat & air',
        steps: [
          'Heat gun tip clean; test on scrap film for even heat.',
          'Compressor moisture drained; air hose filtered.',
        ],
      },
      {
        name: 'Chemicals',
        steps: [
          'Verify slip solution mix ratio per film manufacturer.',
          'IPA bottle labeled with date mixed; discard after 7 days.',
          'No unauthorized adhesives or dressings in bay.',
        ],
      },
    ],
    qualityStandards: [
      'Zero scratch incidents from dull blades in QC quarter',
      'Tool shadow board 100% accounted for at job end',
    ],
    related: [
      ['Installation Bay Setup', 'sop-203-installation-bay-setup'],
      ['Quality Control Inspection', 'sop-205-quality-control-inspection'],
    ],
  }),

  sop('SOP-205', 3, 'Quality Control Inspection', 'quality-control-inspection', {
    purpose: 'Verify installation meets shop standards before vehicle moves to final inspection.',
    scope: 'All installation services. Performed by lead installer or QC-designated tech — not the sole installer on complex jobs.',
    procedures: [
      {
        name: 'Environment',
        steps: [
          'Move vehicle to QC zone with adequate cross-lighting.',
          'Vehicle clean enough to evaluate finish — no wash residue on evaluation areas.',
        ],
      },
      {
        name: 'Edge audit',
        steps: [
          'Inspect every edge, seam, and termination point.',
          'Verify post-heat completed per Master Installer Manual standards.',
          'No lifting, contamination, or incomplete tuck.',
        ],
      },
      {
        name: 'Optical inspection',
        steps: [
          'View every panel at multiple angles.',
          'Check for bubbles, fingers, scratches, haze, or debris.',
          'Document with photos — minimum 4 exterior angles + 2 detail shots.',
        ],
      },
      {
        name: 'Sign-off',
        steps: [
          'Complete Post-Install QC Checklist.',
          'Lead installer signs work order.',
          'Fail → rework before advancing to SOP-206.',
        ],
      },
    ],
    qualityStandards: [
      'Post-install checklist on 100% of jobs',
      'Comeback rate under shop target (track monthly)',
    ],
    safetyNotes: 'Do not deliver with any visible defect — see fail criteria in Quality Standards Manual.',
    related: [
      ['Post-Install QC Checklist', 'post-install-qc-checklist'],
      ['Final Inspection', 'sop-206-final-inspection'],
      ['Installation Failure', 'sop-900-installation-failure'],
    ],
  }),

  sop('SOP-206', 3, 'Final Inspection', 'final-inspection', {
    purpose: 'Manager-level sign-off that the vehicle is customer-ready.',
    scope: 'Every vehicle before customer notification. Shop manager or senior lead.',
    procedures: [
      {
        name: 'Documentation review',
        steps: [
          'Work order complete — hours, materials, photos attached.',
          'QC checklist signed; any rework noted and resolved.',
          'Warranty registration data ready for SOP-702.',
        ],
      },
      {
        name: 'Customer-ready audit',
        steps: [
          'Repeat edge and optical check at customer viewing height.',
          'Interior free of tools, trash, and glove residue.',
          'Exterior free of tape marks, solution residue, and fingerprints on glass.',
        ],
      },
      {
        name: 'Release',
        steps: [
          'Sign final inspection line on work order.',
          'Notify CS to schedule delivery (SOP-107).',
          'Update CRM status → ready for pickup.',
        ],
      },
    ],
    qualityStandards: [
      'Manager sign-off on 100% of retail deliveries',
      'Delivery photos match QC photos — no post-QC damage',
    ],
    related: [
      ['Quality Control Inspection', 'sop-205-quality-control-inspection'],
      ['Vehicle Delivery', 'sop-107-vehicle-delivery'],
      ['Vehicle Delivery Checklist', 'vehicle-delivery-checklist'],
    ],
  }),

  // ── Section 4–7: Service workflows ───────────────────────────────────────
  sop('SOP-300', 4, 'Complete Tint Installation Workflow', 'complete-tint-installation-workflow', {
    purpose: 'End-to-end procedure for professional window tint installation from bay setup through QC.',
    scope: 'All automotive window tint services. Follow Window Tint Master Install Manual for film-specific detail.',
    procedures: [
      {
        name: 'Pre-install',
        steps: [
          'Verify legal VLT limits for customer state and window location.',
          'Complete SOP-200 through SOP-204.',
          'Protect interior: seat covers, dash mat, door panel tape on switches.',
        ],
      },
      {
        name: 'Glass preparation',
        steps: [
          'Clean exterior glass for patterning reference if needed.',
          'Interior glass: scrub with dedicated glass cleaner, scrape embedded particles with razor (45° angle, wet), final IPA wipe.',
          'Roll down windows 1" to clean top edge channel.',
        ],
      },
      {
        name: 'Film application',
        steps: [
          'Cut pattern (plotter or hand) with 1/16" shrink allowance.',
          'Shrink on outside or heat-form per film type; never overheat ceramic.',
          'Apply slip solution; position film; squeegee center-out; tack edges last.',
          'Heat post-form edges; wipe solution from film and glass.',
        ],
      },
      {
        name: 'QC & cure instructions',
        steps: [
          'Inspect for contamination, fingers, and light gaps.',
          'Complete SOP-205 and SOP-206.',
          'Instruct customer: 3–5 day window cure, no rolling down until verified.',
        ],
      },
    ],
    qualityStandards: [
      'Zero dust particles visible at 18" in final QC light',
      'Edges uniformly tucked — no gap at defroster lines',
    ],
    related: [
      ['Window Tint Master Install Manual', 'window-tint-master-install'],
      ['Window Tint Workbook', 'window-tint-workbook'],
      ['Tint Pricing Guide', 'tint-pricing-guide'],
    ],
  }),

  sop('SOP-400', 5, 'Complete PPF Installation Workflow', 'complete-ppf-installation-workflow', {
    purpose: 'End-to-end procedure for paint protection film from surface prep through edge sealing.',
    scope: 'All PPF services — partial, full front, track, and full body. Follow PPF Master Install Manual for panel specifics.',
    procedures: [
      {
        name: 'Pre-install',
        steps: [
          'Complete SOP-200 through SOP-204.',
          'Confirm paint correction completed if required and approved.',
          'Pull patterns; verify kit completeness against coverage map.',
        ],
      },
      {
        name: 'Surface prep',
        steps: [
          'SOP-201 wash → SOP-202 decon on all panels receiving film.',
          'Final IPA wipe panel-by-panel immediately before each piece.',
          'Never apply dressing before or during install.',
        ],
      },
      {
        name: 'Film application',
        steps: [
          'Spray slip solution on panel and adhesive side of film.',
          'Position; anchor hinge or center tack per panel geometry.',
          'Squeegee with overlapping strokes; evacuate all solution.',
          'Wrap edges; post-heat 90–120°C per film spec using IR thermometer.',
        ],
      },
      {
        name: 'Complex areas',
        steps: [
          'Bumpers and mirrors: relief cuts only per manual — no freehand slashing.',
          'Sensors and ADAS: follow manual clearance zones; recalibrate if disturbed.',
          'Seams: overlap 3mm minimum where double-layer required.',
        ],
      },
      {
        name: 'QC',
        steps: [
          'Complete SOP-205 and SOP-206.',
          'Document install with photos for warranty file.',
        ],
      },
    ],
    qualityStandards: [
      'No visible fingers, contamination, or edge lift at delivery',
      'Post-heat logged on work order for full-front and above',
    ],
    related: [
      ['PPF Master Install Manual', 'ppf-master-install'],
      ['PPF Workbook', 'ppf-workbook'],
      ['PPF Package Pricing Guide', 'ppf-pricing-guide'],
    ],
  }),

  sop('SOP-500', 6, 'Complete Vinyl Wrap Workflow', 'complete-vinyl-wrap-workflow', {
    purpose: 'End-to-end procedure for cast vinyl color-change and commercial wrap installs.',
    scope: 'Full and partial vinyl wraps. Follow Vinyl Wrap Master Install Manual for compound curves and inlays.',
    procedures: [
      {
        name: 'Pre-install',
        steps: [
          'Complete SOP-200 through SOP-204.',
          'Remove or mask hardware per coverage map — photograph before removal.',
          'Acclimate film roll to bay temperature minimum 2 hours.',
        ],
      },
      {
        name: 'Surface prep',
        steps: [
          'Wash and decon per SOP-201 and SOP-202.',
          'IPA wipe; ensure zero wax or sealant residue.',
          'Degrease door jambs and fuel door if wrapped.',
        ],
      },
      {
        name: 'Application',
        steps: [
          'Measure and cut with 2" bleed; label pieces by panel.',
          'Apply dry or wet per film manufacturer — consistent method per job.',
          'Post-heat all recessed areas and edges; use thermometer.',
          'Knifeless tape or bladeless cutting at panel gaps where specified.',
        ],
      },
      {
        name: 'Reassembly & QC',
        steps: [
          'Reinstall hardware with correct torque — no stripped clips.',
          'Complete SOP-205 and SOP-206.',
          'Customer aftercare: no wash 7 days; hand wash only first 30 days.',
        ],
      },
    ],
    qualityStandards: [
      'No lifting at edges or mirrors at 30-day follow-up',
      'Color match across panels — no visible shade shift',
    ],
    related: [
      ['Vinyl Wrap Master Install Manual', 'vinyl-wrap-master-install'],
      ['Vinyl Wrap Pricing Guide', 'wrap-pricing-guide'],
    ],
  }),

  sop('SOP-600', 7, 'Complete TPU Installation Workflow', 'complete-tpu-installation-workflow', {
    purpose: 'End-to-end procedure for colored TPU (paint protection with color) installation.',
    scope: 'Colored TPU color-change and protection packages. Combines PPF technique with wrap-level coverage planning.',
    procedures: [
      {
        name: 'Pre-install',
        steps: [
          'Complete SOP-200 through SOP-204.',
          'Verify color batch match across all rolls — same lot number.',
          'Plan seam placement away from primary sight lines.',
        ],
      },
      {
        name: 'Surface prep',
        steps: [
          'Same standard as SOP-400 — wash, decon, IPA per panel.',
          'Higher paint correction standard — TPU shows defects more than clear PPF.',
        ],
      },
      {
        name: 'Application',
        steps: [
          'Handle TPU with gloves — oils affect color coat.',
          'Slip solution ratio per TPU manufacturer — often less slip than clear PPF.',
          'Squeegee with felt edge; avoid repeated passes on color face.',
          'Post-heat to spec — overheating yellows or hazes color TPU.',
        ],
      },
      {
        name: 'Seams & edges',
        steps: [
          'Overlap seams in hidden areas; use manufacturer-approved seam tape if required.',
          'Edge seal with primer only where manual specifies.',
        ],
      },
      {
        name: 'QC',
        steps: [
          'Color consistency check under multiple light sources.',
          'Complete SOP-205 and SOP-206.',
        ],
      },
    ],
    qualityStandards: [
      'Batch lot recorded on work order',
      'No color haze or orange peel from over-heating',
    ],
    related: [
      ['PPF Master Install Manual', 'ppf-master-install'],
      ['Vinyl Wrap Master Install Manual', 'vinyl-wrap-master-install'],
      ['Complete PPF Installation Workflow', 'sop-400-complete-ppf-installation-workflow'],
    ],
  }),

  // ── Section 8: Business Operations ───────────────────────────────────────
  sop('SOP-700', 8, 'Creating Invoices', 'creating-invoices', {
    purpose: 'Generate accurate invoices that match authorized scope and support accounting.',
    scope: 'Customer service or manager at job completion.',
    procedures: [
      {
        name: 'Invoice build',
        steps: [
          'Pull work order — verify scope matches signed estimate or change orders.',
          'Line-item labor, materials, shop supplies, tax, and discounts.',
          'Apply deposit credit; calculate balance due.',
        ],
      },
      {
        name: 'Review',
        steps: [
          'Manager approval if variance from estimate exceeds 10%.',
          'Attach change order signatures if scope changed.',
          'Generate PDF invoice; store in CRM.',
        ],
      },
    ],
    qualityStandards: [
      'Invoice issued same day as delivery',
      'Zero invoices without linked work order',
    ],
    related: [
      ['Collecting Payments', 'sop-701-collecting-payments'],
      ['Service Estimate / Quote', 'service-estimate-quote'],
      ['Change Order Form', 'change-order-form'],
    ],
  }),

  sop('SOP-701', 8, 'Collecting Payments', 'collecting-payments', {
    purpose: 'Collect final payment securely and document for accounting.',
    scope: 'At vehicle pickup or per approved billing terms.',
    procedures: [
      {
        name: 'Payment collection',
        steps: [
          'Verify balance due against invoice.',
          'Accept approved payment methods — card, cash, check, fleet account.',
          'Process card present when possible; no card numbers over SMS.',
        ],
      },
      {
        name: 'Receipt & close',
        steps: [
          'Issue receipt; customer copy and shop copy.',
          'CRM payment status → paid; attach transaction ID.',
          'Do not release keys until payment clears (except pre-approved accounts).',
        ],
      },
    ],
    qualityStandards: [
      'Payment recorded before keys released — 100%',
      'Daily cash reconciliation matches POS',
    ],
    related: [
      ['Deposit & Payment Receipt', 'deposit-payment-receipt'],
      ['Creating Invoices', 'sop-700-creating-invoices'],
    ],
  }),

  sop('SOP-702', 8, 'Warranty Registration', 'warranty-registration', {
    purpose: 'Register customer warranty coverage with complete documentation for claims support.',
    scope: 'All jobs including shop workmanship and film manufacturer warranties.',
    procedures: [
      {
        name: 'Registration data',
        steps: [
          'Customer name, contact, VIN, vehicle details.',
          'Film product, lot number, coverage areas, install date, installer name.',
          'Attach install photos and signed delivery checklist.',
        ],
      },
      {
        name: 'Submission',
        steps: [
          'Enter in CRM warranty module.',
          'Submit manufacturer registration within 7 days if required by film brand.',
          'Issue Warranty Certificate to customer at delivery.',
        ],
      },
    ],
    qualityStandards: [
      '100% warranty registration before delivery',
      'Film lot traceable on every PPF/TPU job',
    ],
    related: [
      ['Warranty Certificate', 'warranty-certificate'],
      ['Shop Warranty Policy', 'warranty-policy'],
      ['Warranty Claim Intake Form', 'warranty-claim-form'],
    ],
  }),

  sop('SOP-703', 8, 'CRM Updates', 'crm-updates', {
    purpose: 'Keep customer and job records current so production and follow-up run without gaps.',
    scope: 'Every team member who touches a job. Minimum updates at check-in, start, QC, and delivery.',
    procedures: [
      {
        name: 'Required touchpoints',
        steps: [
          'Lead created → appointment scheduled → vehicle checked in → in production → QC → ready → delivered.',
          'Each transition updated same day — no batch updates at week end.',
          'Photos uploaded at check-in, post-install QC, and delivery.',
        ],
      },
      {
        name: 'Notes standard',
        steps: [
          'Notes are factual: what was done, what is pending, who owns next step.',
          'Tag team members for handoffs (@lead, @cs).',
        ],
      },
    ],
    qualityStandards: [
      'CRM status matches physical vehicle location',
      'Zero "where is this car?" calls from CS to bay',
    ],
    related: [
      ['Work Order / Job Card', 'work-order-job-card'],
      ['Vehicle Check-In', 'sop-103-vehicle-check-in'],
    ],
  }),

  sop('SOP-704', 8, 'Customer Follow-Up', 'customer-follow-up', {
    purpose: 'Proactive post-service contact to catch issues early and build loyalty.',
    scope: 'Customer service. All retail jobs.',
    procedures: [
      {
        name: 'Follow-up schedule',
        steps: [
          'Day 1: text — "How does everything look? Any questions on care?"',
          'Day 7: email — aftercare reminder and direct contact for concerns.',
          'Day 30: check-in on cure completion (tint windows, coating, wrap wash restrictions).',
        ],
      },
      {
        name: 'Issue handling',
        steps: [
          'Any concern → schedule inspection within 48 hours.',
          'Document in CRM; escalate to SOP-902 if complaint.',
        ],
      },
    ],
    qualityStandards: [
      'Follow-up completed on 100% of retail jobs',
      'Issues identified before Google review when possible',
    ],
    related: [
      ['Customer Complaint', 'sop-902-customer-complaint'],
      ['Review Request Process', 'sop-803-google-review-process'],
    ],
  }),

  sop('SOP-705', 8, 'Review Request Process', 'review-request-process', {
    purpose: 'Systematically request reviews from satisfied customers without violating platform policies.',
    scope: 'Customer service after positive follow-up response.',
    procedures: [
      {
        name: 'Timing',
        steps: [
          'Request review only after Day 7 follow-up confirms satisfaction.',
          'Never request review while resolving a complaint.',
        ],
      },
      {
        name: 'Delivery',
        steps: [
          'Send direct Google review link via SMS or email.',
          'One request per job — no daily nagging.',
          'Thank customers who leave reviews within 48 hours.',
        ],
      },
    ],
    qualityStandards: [
      'Review request sent on ≥ 80% of satisfied jobs',
      'Zero incentivized reviews (no discounts for reviews)',
    ],
    related: [
      ['Google Review Process', 'sop-803-google-review-process'],
      ['Customer Follow-Up', 'sop-704-customer-follow-up'],
    ],
  }),

  // ── Section 9: Marketing ─────────────────────────────────────────────────
  sop('SOP-800', 9, 'Before & After Photos', 'before-and-after-photos', {
    purpose: 'Capture consistent, high-quality documentation for marketing and QC records.',
    scope: 'All jobs where Photo Release Consent is signed.',
    procedures: [
      {
        name: 'Before photos (check-in)',
        steps: [
          'Same 8 angles every time: front 3/4 L/R, rear 3/4 L/R, straight front, straight rear.',
          'Detail shots of damage, unique features, and areas receiving work.',
          'Clean background when possible; no shop clutter in frame.',
        ],
      },
      {
        name: 'After photos (QC)',
        steps: [
          'Match before angles exactly — same position, same zoom.',
          'QC lighting; vehicle clean.',
          'Close-up hero shots of edges, hood lines, and craftsmanship.',
        ],
      },
      {
        name: 'File management',
        steps: [
          'Upload to CRM same day; tag vehicle and services.',
          'Raw files to marketing folder within 48 hours.',
        ],
      },
    ],
    qualityStandards: [
      'Before/after sets on ≥ 90% of eligible jobs',
      'Photo release on file before marketing use',
    ],
    related: [
      ['Photo & Marketing Release Consent', 'photo-release-consent'],
      ['Social Media Posting', 'sop-801-social-media-posting'],
      ['Marketing Resources Kit', 'marketing-resources-kit'],
    ],
  }),

  sop('SOP-801', 9, 'Social Media Posting', 'social-media-posting', {
    purpose: 'Publish on-brand content that showcases work without exposing customer privacy.',
    scope: 'Marketing manager or authorized staff only.',
    procedures: [
      {
        name: 'Content approval',
        steps: [
          'Verify photo release signed.',
          'Apply brand filters and templates from Marketing Resources Kit.',
          'Caption: service performed, film brand (if allowed), shop tagline, CTA.',
        ],
      },
      {
        name: 'Publishing cadence',
        steps: [
          'Minimum 3 posts per week across primary platforms.',
          'Rotate: finished work, process reels, education, team.',
          'Respond to comments and DMs within 4 business hours — route leads to SOP-101.',
        ],
      },
    ],
    qualityStandards: [
      '100% posts use approved brand assets',
      'Zero customer plates visible without blur',
    ],
    related: [
      ['Brand Identity Guidelines', 'brand-identity-guidelines'],
      ['Before & After Photos', 'sop-800-before-and-after-photos'],
      ['Video Content', 'sop-802-video-content'],
    ],
  }),

  sop('SOP-802', 9, 'Video Content', 'video-content', {
    purpose: 'Produce short-form video that demonstrates expertise and drives inquiries.',
    scope: 'Marketing and senior installers with media training.',
    procedures: [
      {
        name: 'Production',
        steps: [
          'Plan shot list: hook (3 sec), process, reveal.',
          'Stable mount or gimbal; shop audio off or licensed music only.',
          'No customer faces or plates without release.',
        ],
      },
      {
        name: 'Post-production',
        steps: [
          'Brand intro/outro template; logo watermark.',
          'Length: 15–60 sec Reels/TikTok; 2–5 min YouTube process videos.',
          'Upload native to each platform — no cross-posted watermarks.',
        ],
      },
    ],
    qualityStandards: [
      'Minimum 2 video posts per month',
      'All videos reviewed by manager before publish',
    ],
    related: [
      ['Social Media Posting', 'sop-801-social-media-posting'],
      ['Marketing Resources Kit', 'marketing-resources-kit'],
    ],
  }),

  sop('SOP-803', 9, 'Google Review Process', 'google-review-process', {
    purpose: 'Grow Google reputation through ethical review generation and professional responses.',
    scope: 'Customer service and management.',
    procedures: [
      {
        name: 'Generation',
        steps: [
          'Follow SOP-705 for satisfied customers.',
          'QR code at delivery desk links to Google review page.',
        ],
      },
      {
        name: 'Response protocol',
        steps: [
          'Respond to all reviews within 48 hours.',
          'Positive: thank customer, mention team, invite return.',
          'Negative: apologize, take offline, provide manager contact — never argue publicly.',
          'Escalate 1–2 star reviews to SOP-902 immediately.',
        ],
      },
    ],
    qualityStandards: [
      'Average rating maintained ≥ 4.7',
      '100% review response rate',
    ],
    related: [
      ['Review Request Process', 'sop-705-review-request-process'],
      ['Customer Complaint', 'sop-902-customer-complaint'],
    ],
  }),

  // ── Section 10: Emergency Procedures ─────────────────────────────────────
  sop('SOP-900', 10, 'Installation Failure', 'installation-failure', {
    purpose: 'Respond immediately when an installation cannot be completed to standard.',
    scope: 'Any installer who identifies a non-recoverable defect, substrate failure, or scope impossibility.',
    procedures: [
      {
        name: 'Stop work',
        steps: [
          'Halt install immediately — do not "push through."',
          'Notify lead installer and manager before customer contact.',
          'Photograph condition; preserve removed film if applicable.',
        ],
      },
      {
        name: 'Assessment',
        steps: [
          'Determine root cause: prep failure, film defect, paint failure, scope error.',
          'Document on work order with recommended remedy and timeline.',
          'If film defect: quarantine roll lot; contact distributor.',
        ],
      },
      {
        name: 'Customer communication',
        steps: [
          'Manager calls customer same day — honest explanation, revised ETA.',
          'No vehicle delivery until remedy complete and SOP-206 passed.',
        ],
      },
    ],
    qualityStandards: [
      'Manager notified within 30 minutes of stop-work decision',
      'Root cause coded in CRM for trend analysis',
    ],
    safetyNotes: 'Never leave vehicle in unsafe condition — partial installs secured or film removed.',
    related: [
      ['Film Damage', 'sop-901-film-damage'],
      ['Quality Control Inspection', 'sop-205-quality-control-inspection'],
    ],
  }),

  sop('SOP-901', 10, 'Film Damage', 'film-damage', {
    purpose: 'Handle damaged film stock, installation errors, and customer vehicle damage during service.',
    scope: 'Installers and managers when film or vehicle is damaged in bay.',
    procedures: [
      {
        name: 'Film stock damage',
        steps: [
          'Segregate damaged roll; log lot number and damage type.',
          'Reorder if inventory insufficient — update customer ETA.',
          'Do not use creased or contaminated film on customer vehicles.',
        ],
      },
      {
        name: 'Vehicle damage during service',
        steps: [
          'Stop work; photograph damage; notify manager immediately.',
          'Do not admit liability — document facts only.',
          'Manager contacts insurance per policy; customer notified within 2 hours.',
          'Complete Accident/Damage Claims procedure if applicable (SOP-903).',
        ],
      },
    ],
    qualityStandards: [
      'Damage report filed within 24 hours',
      'Customer notified before they discover damage independently',
    ],
    related: [
      ['Accident/Damage Claims', 'sop-903-accident-damage-claims'],
      ['Installation Failure', 'sop-900-installation-failure'],
    ],
  }),

  sop('SOP-902', 10, 'Customer Complaint', 'customer-complaint', {
    purpose: 'Resolve customer dissatisfaction fairly, quickly, and with full documentation.',
    scope: 'Any staff receiving a complaint. Manager owns resolution.',
    procedures: [
      {
        name: 'Intake',
        steps: [
          'Listen without interrupting; take notes.',
          'Apologize for their experience — not necessarily admitting fault.',
          'Schedule inspection within 48 hours; offer loaner options if available.',
        ],
      },
      {
        name: 'Investigation',
        steps: [
          'Review check-in photos, QC records, and installer notes.',
          'Inspect vehicle with customer present when possible.',
          'Classify: legitimate defect, expectation mismatch, unrelated pre-existing.',
        ],
      },
      {
        name: 'Resolution',
        steps: [
          'Remedy per warranty policy — rework, partial refund, or goodwill gesture.',
          'Manager approves any concession over $250.',
          'Document resolution in CRM; customer signs if settlement involves release.',
        ],
      },
    ],
    qualityStandards: [
      'First response within 4 business hours',
      'Resolution plan within 48 hours of inspection',
    ],
    related: [
      ['Shop Warranty Policy', 'warranty-policy'],
      ['Warranty Claim Intake Form', 'warranty-claim-form'],
      ['Customer Follow-Up', 'sop-704-customer-follow-up'],
    ],
  }),

  sop('SOP-903', 10, 'Accident/Damage Claims', 'accident-damage-claims', {
    purpose: 'Process insurance and liability claims when shop causes vehicle damage.',
    scope: 'Management only. Legal counsel for severe incidents.',
    procedures: [
      {
        name: 'Immediate actions',
        steps: [
          'Secure vehicle; preserve scene; photos from all angles.',
          'Complete internal incident report within 24 hours.',
          'Do not repair damage without customer authorization documented.',
        ],
      },
      {
        name: 'Insurance notification',
        steps: [
          'Notify shop insurance carrier per policy requirements.',
          'Provide customer with insurance contact and claim number.',
          'Cooperate with adjuster; supply inspection photos and work orders.',
        ],
      },
      {
        name: 'Closure',
        steps: [
          'Track claim to resolution in CRM.',
          'Post-incident review: root cause and SOP update if systemic.',
        ],
      },
    ],
    qualityStandards: [
      'Incident report filed within 24 hours',
      'Customer updated every 48 hours until resolved',
    ],
    safetyNotes: 'Injuries: call 911 first. OSHA reportable incidents documented per state law.',
    related: [
      ['Film Damage', 'sop-901-film-damage'],
      ['Vehicle Inspection Form', 'vehicle-inspection-form'],
    ],
  }),
];

// ── Render helpers ─────────────────────────────────────────────────────────

function renderResponsibilities(rows) {
  if (!rows || rows.length === 0) return '';
  const lines = [
    '## Responsibilities',
    '',
    '| Role | Responsibility |',
    '|------|----------------|',
    ...rows.map(([role, resp]) => `| ${role} | ${resp} |`),
    '',
  ];
  return lines.join('\n');
}

function renderProcedures(procedures) {
  return procedures
    .map((proc) => {
      const steps = proc.steps
        .map((step, i) => {
          if (step.startsWith('**') || step.includes(' — ')) {
            return `${i + 1}. ${step}`;
          }
          return `${i + 1}. ${step}`;
        })
        .join('\n');
      let block = `<div class="procedure">\n\n### ${proc.name}\n\n${steps}\n`;
      if (proc.checkpoint) {
        block += `\n**Checkpoint:** ${proc.checkpoint}\n`;
      }
      block += '\n</div>\n';
      return block;
    })
    .join('\n');
}

function renderQualityStandards(items) {
  if (!items || items.length === 0) return '';
  const list = items.map((item) => `<li>${item}</li>`).join('\n');
  return `## Quality standards\n\n<ul class="checklist">\n${list}\n</ul>\n`;
}

function renderSafety(notes) {
  if (!notes) return '';
  return `\n## Safety notes\n\n<div class="callout warning">\n\n${notes}\n\n</div>\n`;
}

function renderRelated(related) {
  if (!related || related.length === 0) return '';
  const rows = related.map(([title, id]) => `| ${title} | \`${id}\` |`).join('\n');
  return `\n## Related documents\n\n| Document | ID |\n|----------|-----|\n${rows}\n`;
}

function renderSop(s) {
  return `# ${s.code} — ${s.title}

**Forge Standard Operating Procedures v${VERSION}**

**Section ${s.section}: ${s.sectionTitle}**

---

## Purpose

${s.purpose}

## Scope

${s.scope}

${renderResponsibilities(s.responsibilities)}
## Procedure

${renderProcedures(s.procedures)}
${renderQualityStandards(s.qualityStandards)}${renderSafety(s.safetyNotes)}${renderRelated(s.related)}
## Revision history

<div class="revision-block">

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| ${VERSION} | 2026-07-23 | Forge Operations | Initial release |

</div>
`;
}

function renderMasterManual() {
  const toc = SECTIONS.map((sec) => {
    const sectionSops = SOPS.filter((s) => s.section === sec.num);
    const rows = sectionSops
      .map((s) => `| ${s.code} | ${s.title} | \`${s.id}\` |`)
      .join('\n');
    return `### Section ${sec.num}: ${sec.title}

*${sec.range}*

| Code | Procedure | Document ID |
|------|-----------|-------------|
${rows}
`;
  }).join('\n');

  return `# Forge Standard Operating Procedures

**Version ${VERSION}**

**The foundation of the Forge operating system**

---

## Purpose

This manual defines how the business runs. Every installer, estimator, manager, and customer-facing team member follows these procedures. All other Forge documentation points back to this manual.

## Document hierarchy

Forge uses the same knowledge architecture as aviation and manufacturing: **operations first, execution second, continuous improvement third.**

| Layer | Document | Purpose |
|-------|----------|---------|
| **1** | **SOP Manual** (this document) | How the business runs — daily operations |
| **2** | Master Installer Manual | How to perform the work — technical depth |
| **3** | Technical Bulletins | Updates, refinements, and improvements |
| **4** | Training Workbooks | Hands-on learning for new installers |
| **5** | Quality Standards Manual | Inspection criteria and pass/fail definitions |
| **6** | Operations Forms & Checklists | Documents used at the point of work |
| **7** | Brand Standards Manual | Logos, colors, fonts, and voice |

**New team members start here.** Learn how the shop operates before opening the installer manual. Refer to technical bulletins for refinements after mastering the SOPs.

---

## How to use this manual

<ul class="checklist">
<li>Post bay-relevant SOPs at each workstation (Sections 3–7)</li>
<li>Train customer service on Section 2 before phone duty</li>
<li>Review Section 10 emergency procedures in monthly safety meetings</li>
<li>When a procedure conflicts with an older document, this manual wins</li>
<li>Propose changes through your manager — updates publish as new versions and technical bulletins</li>
</ul>

---

## Table of contents

${toc}

---

## Master Installer Manuals

| Service | Manual ID |
|---------|-----------|
| Paint Protection Film | \`ppf-master-install\` |
| Window Tint | \`window-tint-master-install\` |
| Vinyl Wrap | \`vinyl-wrap-master-install\` |
| Ceramic Coating | \`ceramic-coating-application\` |
| Paint Correction & Detailing | \`paint-correction-detailing\` |
| Customer Service Operations | \`customer-service-operations\` |

## Operations forms & checklists

| Type | Examples |
|------|----------|
| Checklists | Pre/post install QC, daily bay reset, vehicle delivery |
| Customer forms | Inspection, estimate, work order, aftercare, photo release |
| Warranty | Policy, certificate, claim form |

## Brand standards

See **Brand Identity Guidelines** (\`brand-identity-guidelines\`) and Design System v2.0 (\`design-system/themes/branded.css\`).

---

## Revision history

<div class="revision-block">

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| ${VERSION} | 2026-07-23 | Forge Operations | Initial release — 37 procedures across 10 sections |

</div>
`;
}

function removeLegacySops() {
  const legacy = [
    'vehicle-intake-sop.md',
    'glass-prep-sop.md',
    'ppf-surface-prep-sop.md',
    'qc-inspection-sop.md',
    'delivery-walkthrough-sop.md',
    'comeback-handling-sop.md',
    'bay-opening-closing-sop.md',
    'contamination-control-sop.md',
  ];
  for (const file of legacy) {
    const p = path.join(SOPS_DIR, file);
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      console.log(`  removed legacy: ${file}`);
    }
  }
}

function updateManifest() {
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  const docs = manifest.documents.filter((d) => {
    if (d.category !== 'sops') return true;
    // Remove old individual SOPs
    return d.source && d.source.startsWith('docs/sops/sop-');
  });

  // Also remove any sops that don't match new pattern
  const filtered = docs.filter((d) => {
    if (d.category !== 'sops') return true;
    return d.id === 'forge-sop-manual' || d.id.startsWith('sop-');
  });

  const sopEntries = [
    {
      id: 'forge-sop-manual',
      title: 'Forge Standard Operating Procedures',
      subtitle: 'Version 1.0 — Foundation manual for how the business runs',
      type: 'SOP Manual',
      version: VERSION,
      source: 'docs/sops/forge-sop-manual.md',
      category: 'sops',
    },
    ...SOPS.map((s) => ({
      id: s.id,
      title: `${s.code} — ${s.title}`,
      subtitle: `Section ${s.section}: ${s.sectionTitle}`,
      type: 'SOP',
      version: VERSION,
      source: `docs/sops/${s.id}.md`,
      category: 'sops',
      sopCode: s.code,
      sopSection: s.section,
    })),
  ];

  const nonSops = filtered.filter((d) => d.category !== 'sops');
  manifest.documents = [...nonSops, ...sopEntries];
  manifest.version = '2.1';
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`  manifest updated: ${sopEntries.length} SOP documents`);
}

function main() {
  console.log('Generating Forge SOP Manual...');
  fs.mkdirSync(SOPS_DIR, { recursive: true });

  removeLegacySops();

  const masterPath = path.join(SOPS_DIR, 'forge-sop-manual.md');
  fs.writeFileSync(masterPath, renderMasterManual());
  console.log(`  wrote forge-sop-manual.md`);

  for (const s of SOPS) {
    const filePath = path.join(SOPS_DIR, `${s.id}.md`);
    fs.writeFileSync(filePath, renderSop(s));
  }
  console.log(`  wrote ${SOPS.length} individual SOPs`);

  updateManifest();
  console.log('Done.');
}

main();
