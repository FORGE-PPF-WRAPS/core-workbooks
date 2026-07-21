'use strict';

const {
  p, h2, h3, h4, pageBreak, chapterDivider,
  callout, procedure, checklist, table, specTable,
  troubleshootingSection, panelProcedure, writeChapters,
} = require('./shared');

// ─────────────────────────────────────────────────────────────────────────────
// SURFACE PANELS — ceramic coating surface-type procedure data
// ─────────────────────────────────────────────────────────────────────────────

const SURFACE_PANELS = [
  {
    name: 'Clear Coat Paint — Standard',
    difficulty: 'Intermediate',
    time: '15–25 min per panel',
    orientation: 'N/A',
    overview:
      'Clear coat is the primary surface for ceramic coating on production vehicles. Properly corrected and decontaminated clear coat accepts coating chemistry optimally, producing maximum gloss, hydrophobic performance, and longevity. Any defects or contamination present at application will be sealed permanently under the coating.',
    prep: [
      'Paint correction completed and verified under LED inspection light (all marring, swirls, and scratches removed)',
      'IPA panel wipe completed within 30 minutes of application (70% IPA:30% distilled water)',
      'Surface temperature 15–25 °C; relative humidity below 65%',
      'Panel is in shade or under controlled lighting — never coat in direct sunlight',
      'All surrounding panels masked if applying single-panel at a time',
      'Gloves worn — skin oils contaminate the surface immediately',
    ],
    steps: [
      'Dispense 4–6 drops of coating onto a folded suede or microfiber applicator block',
      'Apply to the panel in overlapping cross-hatch strokes (horizontal then vertical), ensuring full coverage at 2–3 drops per 30 cm × 30 cm section',
      'Work in 30 cm × 30 cm sections — do not apply to the entire panel before leveling',
      'After applying each section, wait the flash time specified by the product (typically 30–90 seconds depending on temperature and humidity)',
      'Level with a clean, dry short-pile microfiber cloth using light pressure in straight overlapping wipes',
      'Inspect under a raking LED light: high spots appear as a haziness or rainbow iridescence; wipe until surface is uniform',
      'Advance to the next section using the same sequence',
      'After completing the full panel, do a final inspection pass under the raking light',
      'Allow panel to cure undisturbed for the product-specified initial cure window (typically 2–6 hours before any water contact)',
    ],
    qc: [
      'No high spots visible under raking light — a high spot left on clear coat will haze and become visible as a smear after full cure',
      'Uniform gloss across the entire panel — no dry or dragged areas',
      'No applicator pad fibers embedded in the wet coating',
      'Water beads into contact angles greater than 90° when tested with a light mist at 24 hours',
    ],
    tips: 'In humid conditions (above 55% RH), flash times shorten dramatically. Monitor the panel actively and level as soon as the rainbow shimmer appears — do not wait for a set time. In dry, hot conditions, flash time extends but the coating may skin over before leveling if left too long.',
    warnings: 'Ceramic coating on uncorrected paint is not acceptable on any professional service. Swirl marks, scratches, and oxidation will be amplified and permanently locked under the coating. Never proceed without inspector confirmation that paint is at the required correction level.',
    defects: [
      ['High spot haze after cure', 'Flash time too long before leveling; product applied too thick', 'Light machine polish with 3000+ grit compound to remove; recoat', 'Monitor flash time actively; work in smaller sections in hot conditions'],
      ['Streaking after leveling', 'Leveling cloth was too damp or contaminated', 'IPA wipe and re-apply the section; use a fresh dry leveling cloth', 'Dedicate a dry leveling cloth per panel; never reuse a wet cloth'],
      ['Coating peeling at 3 months', 'Surface contamination at application; IPA wipe not completed', 'Machine polish to remove coating; thorough prep; recoat', 'IPA wipe is mandatory immediately before application — never skip'],
    ],
  },
  {
    name: 'Glass (Windshield & All Windows)',
    difficulty: 'Beginner',
    time: '10–15 min per glass surface',
    orientation: 'N/A',
    overview:
      'Glass coating is one of the highest-satisfaction coatings in terms of instantly perceived customer benefit — the rain-beading and improved visibility in wet weather are immediately dramatic. Glass surfaces are generally cleaner substrates than paint but require specific preparation to remove water spots and road film contamination.',
    prep: [
      'Clean glass with a dedicated glass cleaner (ammonia-free) and a glass-specific microfiber',
      'Remove water spots with a light glass-safe compound if present before proceeding',
      'Wipe with 70% IPA to remove cleaner residue',
      'Mask the rubber seals and windshield wiper park area if coating only the glass',
      'Ensure wipers are clean before driving after application — contaminated wipers will streak the fresh coating',
    ],
    steps: [
      'Apply 3–4 drops of glass coating to an applicator folded to a flat face',
      'Apply in overlapping strokes across the glass surface — glass is larger than most paint panels; work in sections',
      'Flash time on glass is typically shorter than on paint — begin leveling as soon as a rainbow sheen appears',
      'Level with a clean, dry glass microfiber using firm overlapping strokes',
      'Inspect by looking through the glass from inside: any unleveled coating creates a visual distortion',
      'Apply a second application cross-wise (perpendicular strokes) for maximum coverage on the windshield',
      'Allow to cure before the first rain event or test with a mist at 60 minutes',
    ],
    qc: [
      'No optical distortion visible through the glass from the interior — inspect from the driver\'s seat position',
      'Uniform water beading across the entire glass at 60 minutes',
      'No coating on rubber seals — if contaminated, clean immediately with IPA while still fresh',
      'Wipers park cleanly without smearing — if smearing occurs, clean wiper blades before use',
    ],
    tips: 'Rain-repellent coatings on the windshield have a functional threshold: above approximately 60 km/h, a coated windshield sheds water without wipers in light rain. Demonstrate this to the customer — it is the most memorable proof of value for any coating service.',
    warnings: 'Never apply paint ceramic coating to glass — the chemistry and cure requirements are different. Use only a dedicated glass-specific coating product. Paint coating on glass creates an optical distortion that is extremely difficult to remove without polishing.',
    defects: [
      ['Optical distortion (haze) through the windshield', 'Coating not fully leveled; high spots on glass', 'Light compound polish on the glass surface; recoat', 'Always check from the interior viewing angle during leveling'],
      ['Water smearing rather than beading', 'Coating not fully cured; or wiper contamination', 'Allow additional cure time; clean wipers before use', 'Do not test with wipers until 60 minutes minimum cure; clean wipers at delivery'],
    ],
  },
  {
    name: 'Wheels & Brake Calipers',
    difficulty: 'Intermediate',
    time: '20–30 min per wheel set',
    orientation: 'N/A',
    overview:
      'Wheel coating protects against brake dust bonding, iron fallout, and road tar — all of which are extremely aggressive on wheel finishes. Coated wheels clean in a fraction of the time of uncoated wheels. The challenge is that wheels are an extremely aggressive environment: high heat from braking, road debris impact, and chemical exposure from cleaners.',
    prep: [
      'Wheels must be fully removed from the vehicle for professional application — on-car wheel coating is significantly inferior',
      'Degrease wheels with a dedicated wheel cleaner; agitate barrels and spoke facets with brushes',
      'Apply iron/fallout remover; allow dwell; rinse thoroughly',
      'Dry completely — wheel barrels retain water in channels; use compressed air blow-out',
      'IPA wipe all surfaces to be coated: face, spokes, barrel',
      'Allow to fully dry — any moisture contamination in the barrel will be sealed under the coating',
    ],
    steps: [
      'Begin with the barrel (inside of the wheel) — apply coating to a folded applicator; wipe into the barrel in overlapping passes; this is the hardest area to access and the most important for protection',
      'Apply to each spoke individually if the wheel design has spokes; work from hub outward; include spoke sides and back faces',
      'Apply to the wheel face in overlapping cross-hatch strokes',
      'Level the barrel and spoke areas with a small detail cloth before the face flash time expires',
      'Level the face last — the face is the highest visibility area; use a clean section of the leveling cloth',
      'Inspect under a bare bright light held at different angles — every unleveled area creates a rainbow high spot',
      'Allow to cure fully before wheel reinstallation (minimum 4 hours; ideally overnight)',
    ],
    qc: [
      'No high spots on any surface — check the barrel with a light on an extension',
      'Brake caliper coating (if applied) is uniform and does not have drips into the rotor hat area',
      'Coating is applied to the wheel barrel — customers value this unseen protection highly when educated on it',
    ],
    tips: 'Explain to customers that wheel coatings do not prevent brake dust — they prevent brake dust from bonding. The wheel will still need washing, but dust will rinse off with a light hose vs. requiring aggressive scrubbing on an uncoated wheel.',
    warnings: 'Never apply coating to the brake rotor contact surface or brake caliper contact surfaces. Any coating on friction surfaces is a safety hazard. Mask the rotor hat and any mechanical contact areas before application.',
    defects: [
      ['Coating flaking from barrel at 6 months', 'Incomplete decontamination; residual brake fluid or tire dressing', 'Polish to remove; full decontamination; recoat', 'Degrease barrels aggressively; IPA wipe is critical in barrels'],
      ['High spots on spoke facets', 'Difficult geometry makes leveling incomplete', 'IPA wipe while still fresh; or light compound; recoat', 'Use a thin folded cloth for leveling on narrow spoke facets'],
    ],
  },
  {
    name: 'Leather Interior Surfaces',
    difficulty: 'Beginner–Intermediate',
    time: '20–40 min for full interior',
    orientation: 'N/A',
    overview:
      'Leather coating protects against UV fading, dye transfer from clothing, food and drink spills, and the abrasive wear that degrades leather surfaces over years of use. Application requires a leather-specific coating — not a paint ceramic coating — and must be done only on properly cleaned leather.',
    prep: [
      'Clean leather with a pH-neutral leather cleaner and a soft brush or microfiber applicator — agitate gently',
      'Inspect for cracks, peeling, or previous product buildup (silicone conditioners must be fully removed before coating)',
      'Allow leather to fully dry — leather is porous; residual moisture prevents coating adhesion',
      'Do not use silicone-based conditioner before coating — silicone prevents bonding; clean any prior silicone with a dedicated silicone remover',
    ],
    steps: [
      'Apply leather coating to a foam applicator; work in small sections (one seat cushion at a time)',
      'Wipe in overlapping strokes; apply with moderate pressure to work coating into the leather grain',
      'Allow to dry as specified by the product — leather coatings typically require 5–10 minutes of air cure',
      'Buff lightly with a soft, clean microfiber cloth to remove surface film and restore the leather\'s natural appearance',
      'Repeat for all leather surfaces: seats, door panels, steering wheel (center section only — avoid the gripping area for safety), center console',
      'Allow the full vehicle interior to cure before the customer occupies the vehicle (typically 1 hour; confirm with product specs)',
    ],
    qc: [
      'Leather retains its original texture and sheen — not over-glossed or artificial-looking',
      'No coating buildup in perforations (perforated leather) — use minimal product near perforations',
      'Steering wheel grip area is not slippery — if accidentally coated, clean with IPA before delivery',
    ],
    tips: 'Demonstrate the protection to the customer using a water mist on a coated seat section — the beading on leather is visually impressive and reinforces the value of the service.',
    warnings: 'Alcantara and suede materials require a different, suede-specific coating and application method. Standard leather coating on alcantara can stiffen the material and damage its texture. Identify the material before selecting the product.',
    defects: [
      ['Leather looks artificially glossy after cure', 'Over-application; too much product per section', 'Buff with a damp cloth to reduce surface coating; if persistent — light IPA wipe', 'Use less product; work in thin coats'],
      ['Coating peeling on high-wear seat bolster', 'Prior silicone conditioner not fully removed; or leather surface cracking', 'Clean and recoat bolster area; if leather is cracked — this is pre-existing; document', 'Confirm silicone removal before application; document leather condition at intake'],
    ],
  },
  {
    name: 'Fabric & Textile Surfaces',
    difficulty: 'Beginner',
    time: '15–25 min for full interior fabric',
    orientation: 'N/A',
    overview:
      'Fabric coating creates a hydrophobic surface on cloth seats, carpet, headliners, and fabric door panels. The coating penetrates into the textile fibers and causes liquids to bead and run off rather than soaking in. It does not stiffen or change the texture of properly applied fabric coating.',
    prep: [
      'Vacuum all fabric surfaces thoroughly — fibers standing up and free of debris accept coating more uniformly',
      'Steam clean or extract any stains present — coating over stains will seal them permanently',
      'Allow fabric to fully dry — moisture in the textile prevents coating penetration',
      'Do not apply fabric protectant or conditioner prior to coating',
    ],
    steps: [
      'Shake the fabric coating product thoroughly',
      'Apply in a fine, even mist from 20–30 cm above the surface — do not saturate',
      'Work in overlapping passes until all fabric is evenly misted',
      'Allow first coat to dry to the touch (typically 15–20 minutes)',
      'Apply a second coat perpendicular to the first for even penetration',
      'Allow to cure for minimum 60 minutes before contact; maximum performance at 24 hours',
    ],
    qc: [
      'Fabric texture is unchanged — no stiffness or color change',
      'Water beads and runs off when tested with a light mist',
      'No over-spray on leather, trim, or glass surfaces adjacent to fabric areas',
    ],
    tips: 'Apply fabric coating before leather coating in the same session to prevent over-spray contamination of freshly applied leather coating.',
    warnings: 'Do not apply fabric coating to a wet or even damp fabric — the coating cannot penetrate and will sit on the surface, creating an uneven film. Confirm dryness with the back of the hand before application.',
    defects: [
      ['Fabric stiffened after application', 'Over-application; product saturated rather than misted', 'Steam clean the over-applied area; allow to dry; reapply lightly', 'Maintain spray distance; light mist only; two thin coats'],
      ['Coating not beading — liquid soaks in', 'Fabric was wet or damp at application; or existing protectant blocked penetration', 'Re-clean and thoroughly dry; reapply', 'Confirm dryness before application; steam extract prior products'],
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CERAMIC COATING MANUAL — CHAPTER BUILDERS
// ─────────────────────────────────────────────────────────────────────────────

function ccChCoatingChemistry() {
  let c = '';
  c += p('Understanding the chemistry behind ceramic coatings transforms an installer who follows instructions into a professional who understands why each step matters. This chapter covers the science without unnecessary complexity — enough to make confident decisions in the field and to educate customers with authority.');

  c += h2('What Is a Ceramic Coating?');
  c += p('Automotive ceramic coatings are primarily based on silicon dioxide (SiO₂) — the same compound found in glass and quartz — suspended in a liquid carrier. When applied to a paint surface, the carrier evaporates and the SiO₂ molecules cross-link and bond to the paint\'s clear coat at the molecular level, forming a semi-permanent glass-like layer.');

  c += table(
    ['Property', 'Uncoated Clear Coat', 'Ceramic-Coated Clear Coat'],
    [
      ['Water contact angle', '20–40° (water spreads)', '90–120° (water beads and rolls)'],
      ['Surface hardness', 'Clear coat rated 2–3H pencil hardness', 'Coating layer rated 7–9H — significantly more scratch resistant'],
      ['Chemical resistance', 'Vulnerable to road fallout, bird droppings (acidic)', 'Chemical resistance dramatically improved; still not impervious'],
      ['UV resistance', 'Clear coat degrades and oxidizes over years', 'Coating filters UV; dramatically slows clear coat degradation'],
      ['Release of contaminants', 'Contaminants bond strongly to clear coat surface', 'Coated surface is low-energy; most contaminants do not bond; release with rinse'],
      ['Gloss depth', 'Baseline factory gloss', 'Amplified gloss due to the glass-smooth coating layer'],
    ]
  );

  c += h2('Coating Chemistry — Active Components');
  c += table(
    ['Component', 'Chemical', 'Function'],
    [
      ['Primary binder', 'Silicon dioxide (SiO₂) or silicon carbide (SiC)', 'Forms the glass-like matrix that gives the coating its hardness and chemical resistance'],
      ['Secondary binder', 'Titanium dioxide (TiO₂) in some formulas', 'Enhances UV resistance; adds self-cleaning photo-catalytic properties'],
      ['Crosslinking agent', 'Polysilazane or modified siloxane', 'Binds SiO₂ particles together and bonds the matrix to the clear coat surface'],
      ['Carrier solvent', 'Ethanol, IPA, or proprietary solvent blend', 'Keeps the active chemistry in suspension during application; evaporates during flash phase'],
      ['Thickness modifier', 'Variable viscosity agents', 'Controls how thick each layer is deposited; affects final coating thickness'],
      ['Catalyst', 'Atmospheric moisture (ambient humidity)', 'Triggers the cross-linking reaction — the coating cures from contact with airborne moisture'],
    ]
  );

  c += h2('The Curing Process');
  c += p('Ceramic coating cure is a chemical reaction, not just evaporation. The cross-linking reaction is initiated by atmospheric moisture and proceeds in stages:');

  c += procedure('Ceramic Coating Cure Stages', [
    '**Initial flash (0–5 min after application):** Solvent carrier begins to evaporate; coating becomes tacky; this is the window for leveling — too early and you spread uncured chemistry; too late and the coating has skinned over',
    '**Surface cure (1–6 hours):** The coating surface hardens while the interior continues to react; the coating is water-resistant but not yet at full hardness; no washing, water exposure, or panel contact',
    '**Partial cure (12–24 hours):** The coating is 60–70% of final hardness; vehicle can be driven; light rain is acceptable; no washing or waxing',
    '**Full mechanical cure (7–14 days):** The cross-linking network is complete; the coating is at rated hardness; normal washing can resume; pH-neutral products only',
    '**Final chemical stabilization (30 days):** The coating fully stabilizes chemically; the hydrophobic angle reaches its maximum; full rated chemical resistance is active',
  ]);

  c += callout('tip', 'Temperature and humidity directly affect cure speed. At 20 °C and 50% RH, standard timelines apply. In hot, humid conditions, flash time is shorter — monitor the panel actively. In cold, dry conditions, cure may take significantly longer — consider a cure accelerator product if available, or extend the pre-delivery cure window.');

  c += h2('Hydrophobic vs. Hydrophilic Surfaces');
  c += p('The hydrophobic (water-repelling) behavior of a ceramic coating is a measurable property described by the water contact angle — the angle formed between a water droplet\'s edge and the surface beneath it. This measurement provides an objective assessment of coating performance at any point in its life.');

  c += table(
    ['Contact Angle', 'Surface Description', 'Coating Status', 'Practical Observation'],
    [
      ['< 30°', 'Hydrophilic — water spreads freely', 'No coating or coating fully depleted', 'Water sheets flat; no beading; high water spot risk'],
      ['30°–60°', 'Weakly hydrophobic', 'Worn wax or sealant; aging coating', 'Some beading but droplets flatten; moderate water spot risk'],
      ['70°–90°', 'Hydrophobic', 'Good wax or sealant; entry ceramic or aged professional coating', 'Clear beading; water rolls on movement; good everyday performance'],
      ['90°–110°', 'Strongly hydrophobic', 'Professional ceramic coating in good condition', 'Tight spherical beads; rolling immediately on slight vibration; excellent self-cleaning'],
      ['> 110°', 'Super-hydrophobic', 'Premium or graphene coating at peak cure', 'Water sheets instantly; beads are nearly spherical; maximum self-cleaning performance'],
    ]
  );

  c += h2('Multi-Layer Coating Chemistry');
  c += p('Many professional coatings are designed for multi-layer application, where each layer bonds to the previous one through the same cross-linking chemistry. The accumulation of layers increases thickness, hardness, and durability. The chemistry requires that each layer must be applied within the correct inter-coat window:');

  c += table(
    ['Layer Timing', 'State of Previous Layer', 'Result'],
    [
      ['Too soon (within 30 min, still wet)', 'Previous layer solvent still present', 'Layers blend; second coat does not add thickness; potential streaking'],
      ['Optimal window (1–4 hours, surface cured)', 'Previous layer is surface-cured but chemically active', 'Second layer chemically bonds to first; both layers cure together as one thicker coating'],
      ['Too late (after 12–24 hours, fully cured)', 'Previous layer is cured glass; cannot chemically bond', 'Second layer bonds only physically to the first; delamination risk; must use a dedicated inter-coat adhesion promoter'],
    ]
  );

  return c;
}

function ccChPaintAssessment() {
  let c = '';
  c += p('Paint assessment is the diagnostic phase that determines what prep work is required before coating can be applied. Skipping or rushing this step is the leading cause of professional dissatisfaction with coating results — both from the customer and the installer.');

  c += h2('Paint Condition Classification');
  c += table(
    ['Class', 'Description', 'Pre-Coating Requirement'],
    [
      ['Class 1 — Excellent', 'Factory finish or professionally corrected; no swirls, no scratches, no oxidation visible', 'IPA wipe and coating — no correction needed'],
      ['Class 2 — Light Defects', 'Light swirl marks from improper washing; minor buffer holograms; no deep scratches', 'Single-stage light polishing; IPA wipe; coating'],
      ['Class 3 — Moderate Defects', 'Moderate swirls and RDS (random deep scratches); some oxidation beginning at panel edges', 'Two-stage correction (cut compound + polish); IPA wipe; coating'],
      ['Class 4 — Heavy Defects', 'Heavy swirling, deep scratches, significant oxidation, possible clear coat failure beginning', 'Multi-stage correction; evaluate whether clear coat can support a coating'],
      ['Class 5 — Coating Not Suitable', 'Clear coat failure (peeling, cracking, fish-eye oxidation); significant panel damage', 'Painting required before coating — refer to body shop; coating is not an appropriate solution'],
    ]
  );

  c += h2('Paint Assessment Methodology');
  c += procedure('Paint Condition Assessment', [
    '**Initial wash:** Perform a full paint decontamination wash to ensure defects are from the paint, not contamination',
    '**Measurement with paint depth gauge:** Take readings at 5+ points per panel; record values; flag any reading significantly below manufacturer specification (typically under 80 microns suggests prior polishing or damage)',
    '**Visual inspection under natural light:** View each panel from multiple angles; note swirl distribution, oxidation, and any isolated deeper scratches',
    '**Inspection under LED detail light (raking angle):** This reveals defects invisible in diffused light; swirls become clearly visible as a spider-web pattern under raking LED',
    '**Clay bar test:** Run a clay bar over the paint surface; the drag resistance tells you how contaminated the surface is even after washing',
    '**Surface feel test:** Run a clean, gloved finger (or a plastic bag over the fingertip) across the paint surface; contamination feels rough or gritty even after washing',
    '**Document and photograph each panel\'s condition:** This forms the basis for the correction scope and the customer consultation',
  ]);

  c += h2('Paint Thickness & Correction Safety');
  c += p('Every polishing step removes some clear coat. A vehicle with a thin clear coat — whether from the factory or from prior polishing — may not be safely correctable to Class 1 without risking clear coat failure. Paint thickness must be measured before any correction work begins.');

  c += table(
    ['Reading (microns)', 'Interpretation', 'Correction Approach'],
    [
      ['> 130', 'Stock clear coat; likely never polished', 'Full correction possible; 2–3 stage correction safe'],
      ['100–130', 'Normal stock or very light prior polishing', 'Standard 1–2 stage correction; use conservative compounds'],
      ['80–100', 'Prior polishing has occurred; reduced safety margin', 'One polishing stage maximum; use finishing compounds only; review customer expectations'],
      ['60–80', 'Significantly polished; very limited margin', 'No cutting compounds; light finishing only; advise customer of limitations; document'],
      ['Below 60', 'Clear coat at critical threshold; failure risk', 'Do not polish; advise repainting; coating over defects is the only option; document thoroughly'],
    ]
  );

  c += h2('Customer Consultation on Paint Assessment');
  c += p('The paint assessment results must be communicated to the customer before any work begins. The assessment is not an upsell mechanism — it is a professional disclosure. Some customers will be surprised by the condition of their paint. Deliver this honestly and with solutions.');

  c += callout('script', '"Before we apply any coating, we always do a thorough paint assessment. What we found on your vehicle:\n\n[Summary of condition class and specific defects]\n\nHere\'s what that means for your coating result: [Explain the impact if not corrected vs. if correction is done]\n\nOur recommendation is [specific correction scope]. This will add [X] to the project and [Y] to the timeline. Would you like me to walk you through what the correction involves?"');

  return c;
}

function ccChCorrectionPrerequisites() {
  let c = '';
  c += p('Paint correction must be completed to the required standard before coating is applied. This chapter covers the scope of correction required as a coating prerequisite, the assessment of when correction is sufficient, and the hand-off protocol between the correction stage and the coating stage.');

  c += h2('Why Correction Before Coating Is Non-Negotiable');
  c += p('Ceramic coating does not hide defects — it amplifies them. The glass-like smoothness of a properly applied coating creates a mirror effect that makes every swirl mark, orange peel dimple, and scratch more visible than it was on an uncorrected surface. A customer who paid for a premium coating on an uncorrected vehicle will be far more disappointed with the result than if no coating had been applied.');

  c += callout('warning', 'Never apply a ceramic coating over paint that has not been assessed and corrected to the agreed standard. If a customer declines correction to save money, document this on the work order with the customer\'s signature. The shop is not responsible for results on uncorrected surfaces when the customer has declined correction.');

  c += h2('Correction Level Requirements by Coating Tier');
  c += table(
    ['Coating Package', 'Minimum Correction Requirement', 'Defect Removal Target'],
    [
      ['Entry / single-stage coating', 'IPA wipe only — correction assumed to be customer\'s responsibility', 'No shop warranty on correction quality'],
      ['Standard professional coating', 'Paint is clean and decontaminated; light polishing to remove fresh car-wash swirls', '70% defect removal minimum'],
      ['Premium coating (1–2 layers)', 'One-stage machine correction using appropriate compound and pad', '85% defect removal minimum'],
      ['Elite / concours coating (3+ layers)', 'Multi-stage correction: cut, refine, and finish stages; verified by high-end inspection system', '95%+ defect removal; client-approved'],
    ]
  );

  c += h2('Correction Hand-Off Protocol');
  c += p('The person performing correction and the person applying coating may be the same or different team members. Regardless, a hand-off inspection must occur before coating begins.');

  c += procedure('Correction to Coating Hand-Off Inspection', [
    'Correction is completed and the corrector considers the vehicle ready',
    'The coating applicator inspects each panel under the detail light independently — a fresh set of eyes catches what the corrector\'s eyes have adapted to',
    'Any remaining defects above the agreed correction threshold are returned to the corrector',
    'Once both agree the vehicle is at the required standard, the coating applicator performs the IPA wipe sequence',
    'IPA wipe panel → coat that panel immediately → do not allow time for dust re-settling between wipe and application',
    'Document the correction completion with photos and note the correction level achieved in the job record',
  ]);

  return c;
}

function ccChIPAWipePrep() {
  let c = '';
  c += p('The IPA panel wipe is the final decontamination step immediately before coating application. It removes the lubricants, compounds, and polishing oils left behind by the correction process. Any residual polishing product on the surface will interfere with coating adhesion — this step is critical.');

  c += h2('IPA Wipe Protocol');
  c += procedure('Panel-by-Panel IPA Wipe Sequence', [
    'Prepare a fresh mixture of 70% IPA (isopropyl alcohol) and 30% distilled water in a trigger spray bottle — use distilled water only; tap water leaves mineral deposits',
    'Work in panel-sized sections — do not wipe the entire car and then start coating',
    'Spray 3–4 mists onto the panel surface from 20 cm distance; do not soak',
    'Wipe in straight overlapping passes with a clean, folded microfiber (lint-free, dedicated to IPA use only)',
    'Flip the cloth to a clean side on each pass — never wipe a panel with a cloth that already has compound residue',
    'Inspect the cloth after wiping — if significant compound or polish is visible, the correction process left too much residue; re-wipe with a fresh cloth until the cloth comes away clean',
    'Immediately after the IPA wipe, put on fresh nitrile gloves and do not touch the panel surface with bare skin',
    'Coat the panel within 5 minutes of the IPA wipe — any longer and atmospheric contamination begins to re-deposit',
  ]);

  c += h2('Common IPA Wipe Errors');
  c += table(
    ['Error', 'Consequence', 'Prevention'],
    [
      ['Using tap water in the IPA mixture', 'Mineral deposits left on paint surface; adhesion failure in spots', 'Distilled water only — keep a supply in the coating kit'],
      ['Using a cloth that also touched the paint with bare hands', 'Skin oil transferred to the paint; coating fish-eyes', 'Dedicated IPA cloths; gloves on before picking up the cloth'],
      ['Wiping the whole car and waiting before coating', 'Dust and oil re-deposit on panel surface', 'Wipe one panel → coat immediately; do not skip ahead'],
      ['Insufficient cloth changes', 'Compound residue re-deposited on the panel', 'Flip to a clean surface every pass; dispose of the cloth if saturated'],
      ['IPA concentration too low', 'Insufficient removal of polishing oils', 'Maintain 70:30 ratio; check with a refractometer if uncertain'],
    ]
  );

  c += h2('Panel Inspection Before Coating');
  c += p('After the IPA wipe and before the first drop of coating is applied, perform a final visual inspection of the panel. Hold a detail light at a raking angle and scan the surface. What you are looking for:');

  c += checklist([
    'No holograms or buffer marks visible — these should have been removed in correction but may appear differently in raking light',
    'No haze from the IPA — the IPA should flash clean; if there is haze, wipe again',
    'No dust, fibers, or particles on the surface — even a single fiber under the coating will be a permanent imperfection',
    'No fingerprints or skin oil marks from handling',
    'The surface has a deep, clear reflection — if the surface looks dull or hazy under the detail light, something is wrong with the prep',
  ]);

  return c;
}

function ccChApplicationMethods() {
  let c = '';
  c += p('The application method for ceramic coatings is more critical than most installers appreciate. The small differences between an expert application and an amateur application are not visible during the job — they manifest as high spots, uneven hydrophobics, and premature failure 3–12 months after installation.');

  c += h2('Applicator Types');
  c += table(
    ['Applicator', 'Material', 'Coating Types', 'Notes'],
    [
      ['Suede block', 'Microsuede wrapped foam block', 'Most professional ceramic coatings', 'Most common; excellent product pickup and release; replace after each vehicle'],
      ['Microfiber applicator', 'Short-pile microfiber cloth', 'Some consumer-grade and spray coatings', 'Not as precise as suede for SiO₂ coatings; picks up and re-deposits coating unevenly'],
      ['Syringe applicator', 'Disposable syringe for dot application', 'Very high-solid coatings', 'More control over product quantity; used for concours-level applications'],
      ['Spray gun (professional)', 'HVLP spray system', 'Spray-grade ceramic top coats only', 'Used for coverage speed on fleet applications; not for standard professional coatings'],
    ]
  );

  c += h2('Drop Count Control');
  c += p('Professional ceramic coatings are highly concentrated. Using more product than specified does not produce a thicker, more protective coating — it produces an uneven coating that is harder to level and more prone to high spots.');

  c += callout('tip', 'The standard application rate for most professional coatings is 4–6 drops per 60 cm × 60 cm section. That is approximately the size of a car door. The suede applicator should be damp with product, not wet. If you can squeeze product out of the applicator, you have applied too much.');

  c += h2('Application Technique — Cross-Hatch Method');
  c += procedure('Cross-Hatch Application Method', [
    'Dispense 4–6 drops of coating onto the flat face of the suede applicator',
    'Spread evenly by wiping the applicator face against itself until the suede is uniformly damp',
    'Begin at the top of the section; make overlapping horizontal passes across the full width of the section',
    'Return with overlapping vertical passes in the opposite direction — this is the "cross-hatch"; it ensures complete coverage and eliminates thin spots left by single-direction wiping',
    'Do not apply too much pressure — the coating spreads with very light contact; heavy pressure causes streaking',
    'Add drops to the applicator every 30 cm × 30 cm section; do not let the applicator run dry mid-section',
    'Monitor flash time — as soon as the rainbow iridescence appears on the section, it is time to level; do not continue applying to additional sections before leveling the current one',
  ]);

  c += h2('Working Area Size — Adjustment for Conditions');
  c += table(
    ['Condition', 'Recommended Working Section Size', 'Reason'],
    [
      ['15–22 °C, 40–55% RH (ideal)', '60 cm × 60 cm', 'Ample flash time; full section can be applied and leveled at a relaxed pace'],
      ['22–30 °C, 55–70% RH (warm/humid)', '30 cm × 30 cm', 'Flash time is short; smaller sections prevent the coating from skinning before leveling'],
      ['30+ °C or direct sun exposure', 'Do not apply', 'Coating will flash too fast; high spots are inevitable; reschedule for controlled conditions'],
      ['Below 15 °C (cool)', '60 cm × 60 cm or larger', 'Flash time is extended; no need to rush; confirm cure times are extended as well'],
    ]
  );

  return c;
}

function ccChLeveling() {
  let c = '';
  c += p('Leveling is the step that separates a professional coating result from an amateur one. A correctly leveled coating is invisible — it looks like the paint itself but better. A poorly leveled coating shows streaks, high spots, and uneven sheen within days of curing. This chapter covers every aspect of the leveling technique.');

  c += h2('The Flash Time Window');
  c += p('Flash time is the window between when the coating is applied and when it becomes too skinned-over to level effectively. This window varies by product, temperature, and humidity — typically 30–120 seconds. The flash is indicated by the appearance of a rainbow iridescence or a faint haze on the applied surface.');

  c += callout('warning', 'Missing the flash window is the most common cause of high spots. If the coating has already skinned, do not attempt to level it with a cloth — you will leave drag marks and potentially introduce scratches. Allow it to cure, then correct with a light machine polish before re-applying.');

  c += h2('Leveling Cloth Selection');
  c += table(
    ['Cloth Type', 'GSM / Pile', 'Use Case', 'Notes'],
    [
      ['Short-pile microfiber (leveling towel)', '300–400 GSM; 3–5 mm pile', 'Primary leveling towel for most coatings', 'Most commonly used; fold into quarters for a firm, flat working surface'],
      ['Suede leveling cloth', 'Flat suede; no pile', 'Very high-solid coatings; concours application', 'Gentler on the fresh coating surface; used for the finest applications'],
      ['Waffle-weave microfiber', '400 GSM; waffled texture', 'Final inspection wipe after leveling', 'Not used for primary leveling — use as a final buff to remove any micro-fiber drag'],
    ]
  );

  c += h2('Leveling Technique');
  c += procedure('Coating Leveling Protocol', [
    'When the rainbow iridescence or haze appears, pick up the leveling cloth folded to a flat, four-layer pad',
    'Apply light, consistent pressure — the coating levels with surface contact, not force',
    'Use straight overlapping wipes in one direction (horizontal or vertical — be consistent)',
    'After completing the passes in one direction, rotate the cloth to a clean surface and make passes in the perpendicular direction',
    'Do not scrub or use circular motions — this creates holograms that are visible after cure',
    'Inspect under the detail light after leveling — the surface should be uniform; no rainbow, no haze, no streaks',
    'If any areas appear unleveled, add a single stroke with a fresh section of cloth before the coating fully skins',
    'Set the used cloth aside — do not return it to the clean cloth pile; it is contaminated with coating chemistry',
  ]);

  c += h2('High Spot Detection and Removal');
  c += p('A high spot is an area where the coating was not fully leveled before curing. It appears as a hazy or iridescent patch after the coating cures. High spots must be corrected before the customer takes delivery — they will worsen with UV exposure and washing.');

  c += procedure('High Spot Correction', [
    'Identify the high spot under raking detail light at different angles — verify it is a coating high spot and not a smear from the leveling cloth',
    'Spray a small amount of IPA (70%) onto the high spot while the coating is still in early cure (within 2 hours) — if it dissolves, wipe clean and reapply a thin coat to that section only',
    'If the coating is fully cured (overnight or longer), the only safe correction is a light machine polish (3000+ grit finishing compound) to remove the high spot — polish until the haze is gone, verify, then recoat that section',
    'Never use heavy compounds to remove high spots from ceramic coating — the surrounding cured coating will be damaged',
  ]);

  return c;
}

function ccChCuring() {
  let c = '';
  c += p('Ceramic coating cure management is an ongoing responsibility from the moment the coating is applied until the customer takes delivery and for the weeks that follow. Understanding the cure stages allows the professional to give accurate aftercare instructions and to troubleshoot any post-delivery issues with confidence.');

  c += h2('Cure Environment Requirements');
  c += table(
    ['Parameter', 'Requirement', 'Effect of Non-Compliance'],
    [
      ['Temperature (ambient)', '15–25 °C during application; same or warmer for cure', 'Below 10 °C: curing slows dramatically; coating remains vulnerable for extended period'],
      ['Humidity', '40–65% RH during application and initial cure', 'Below 30%: moisture-catalyzed cure is slowed; longer cure window required. Above 70%: flash time too short; high spot risk'],
      ['Airflow', 'Still air during application; light ventilation acceptable during cure', 'Strong airflow during application deposits dust into the wet coating'],
      ['UV exposure', 'No direct sun during application; controlled UV exposure during cure acceptable', 'Direct sun accelerates flash time to unworkable speed; work in shade or closed bay'],
      ['Water contact', 'None during initial cure window (6–12 hours minimum)', 'Water contamination during initial cure causes water marks permanently bonded in the coating'],
      ['Physical contact', 'None during initial cure', 'Contact while curing embeds the contact material permanently (cloth, fingerprints, dust)'],
    ]
  );

  c += h2('Cure Acceleration');
  c += p('In commercial production environments or when a fast turnaround is required, certain methods can safely accelerate the ceramic coating cure:');

  c += checklist([
    '**Cure lamp (infrared):** IR lamp exposure at 60 °C panel surface temperature for 20–30 minutes per panel achieves a 4–6 hour cure equivalent; verify product compatibility before using IR cure',
    '**Controlled warm environment:** Maintaining the bay at 25–28 °C with 50–55% RH during the cure period naturally accelerates the chemical reaction without risk',
    '**Cure accelerator spray (product-specific):** Some coating manufacturers offer a spray that catalyzes the cross-linking reaction; apply per the product protocol — do not use generic accelerators',
    '**Humidification:** If the shop\'s ambient RH is very low (below 30%), introducing humidity with a humidifier in the bay can restart a stalled cure',
  ]);

  c += h2('Pre-Delivery Cure Protocol');
  c += procedure('Minimum Pre-Delivery Cure Requirements', [
    'Single-stage coating applied: minimum 4 hours in the bay before vehicle is moved outdoors',
    'Multi-layer coating: minimum 6 hours after the final coat is applied; 12 hours is preferred',
    'If IR cure was used: minimum 1 hour cool-down period before vehicle is moved or exposed to rain',
    'Exterior inspection before delivery: detail light pass; check for any high spots or areas missed at application',
    'Mist test on the roof: apply a light water mist from 30 cm; water should bead immediately and run cleanly',
    'If water does not bead uniformly: investigate cause (missed area, high spot, contaminated section); address before delivery',
    'Temperature equalization before delivery if the bay is significantly warmer than outdoors: allow 30 minutes with bay door open',
  ]);

  return c;
}

function ccChMultiLayerSystems() {
  let c = '';
  c += p('Multi-layer coating systems are the cornerstone of elite-tier ceramic coating services. By applying multiple layers within the inter-coat adhesion window, the professional builds a significantly thicker, harder, and more durable coating than any single application can achieve. This chapter covers multi-layer chemistry, timing, and the correct protocol for each layer type.');

  c += h2('Why Multiple Layers?');
  c += table(
    ['Layer Count', 'Approximate Final Thickness', 'Additional Benefit', 'Typical Warranty'],
    [
      ['1 layer', '~1.5–2 microns', 'Baseline protection, gloss, and hydrophobics', '1–2 years'],
      ['2 layers', '~3–4 microns', 'Measurably improved hardness; extended hydrophobic durability', '3–5 years'],
      ['3 layers', '~5–7 microns', 'Approaching rated maximum hardness; scratch resistance noticeably improved', '5–7 years'],
      ['3 layers + top coat', '~6–9 microns total', 'Maximum protection; top coat optimizes hydrophobics and self-cleaning', '7–10 years'],
    ]
  );

  c += h2('Inter-Coat Window Timing');
  c += p('The inter-coat window is the period after the first layer\'s surface cure during which the second layer can chemically bond — not just physically stack. Missing this window results in layers that are mechanically present but do not provide the durability of a true multi-layer chemical bond.');

  c += table(
    ['Product Stage', 'Optimal Inter-Coat Window', 'What Happens If Missed'],
    [
      ['Standard SiO₂ coating, 20 °C', '1–4 hours after first coat leveling', 'Chemical bonding window closes; second coat bonds physically only; delamination risk'],
      ['High-solid/thick formula', '2–6 hours', 'Extended window due to higher solid content; verify with product datasheet'],
      ['Spray top coat over base coat', 'After base is surface-cured; typically 2–8 hours', 'Spray top coat is designed to bond to cured base; not as time-sensitive'],
      ['Missed window (>24 hours)', 'Past chemical bonding window', 'Use a dedicated adhesion promoter between layers; or polish and restart'],
    ]
  );

  c += h2('Multi-Layer Application Protocol');
  c += procedure('Three-Layer Coating Application', [
    '**Layer 1 (Base layer):** Apply to all panels using the cross-hatch method; level each panel at flash; allow 2 hours surface cure at 20 °C',
    '**Layer 1 inspection:** Detail light pass across all panels; confirm no high spots from the first layer before proceeding',
    '**Layer 2 (Build layer):** Apply using the same technique; note that flash time may be slightly shorter on the now-coated surface; watch carefully; level each panel',
    '**Layer 2 inspection:** Detail light pass; confirm; allow 2 hours additional surface cure',
    '**Layer 3 (Performance/top layer):** Apply using the same technique; some products offer a specialized top coat with enhanced hydrophobics for this layer; follow product protocol',
    '**Layer 3 inspection and final cure:** Detail light pass; 6-hour minimum bay cure before delivery; mist test before customer arrival',
  ]);

  c += h2('Specialty Layer Options');
  c += table(
    ['Layer Type', 'When Applied', 'Function'],
    [
      ['Hydrophobic enhancement layer', 'As the final layer over cured base', 'Maximizes water contact angle beyond base coating capability; needs replacement every 12–18 months (service maintenance opportunity)'],
      ['Sacrificial top coat', 'Over fully cured base layers (7+ days)', 'Provides an additional expendable layer that takes environmental fallout; can be refreshed without disturbing the base'],
      ['Anti-static coating', 'As a final layer', 'Reduces static dust attraction; particularly valuable in dry environments and for vehicles with matte paint'],
      ['UV-blocking layer', 'As a first or second layer', 'Concentrated UV blockers; extends clear coat life further; popular on vehicles in high UV regions'],
    ]
  );

  return c;
}

function ccChMaintenance() {
  let c = '';
  c += p('A ceramic coating is not maintenance-free — it is maintenance-reduced. Customers who understand this distinction will be better stewards of their coating and will return for the annual maintenance services that extend the coating\'s life and create recurring revenue for the shop.');

  c += h2('Coated Vehicle Maintenance Schedule');
  c += table(
    ['Interval', 'Service', 'Product Type', 'Who Performs'],
    [
      ['Weekly to biweekly', 'Rinseless or foam wash', 'pH-neutral, coating-safe soap', 'Customer'],
      ['Monthly', 'Full hand wash + inspection for contaminants', 'pH-neutral soap + coating-specific spray detailer as drying aid', 'Customer or shop'],
      ['Every 3–6 months', 'Iron fallout decontamination', 'pH-neutral iron remover', 'Customer or shop'],
      ['Annually', 'Professional wash, decontamination, and hydrophobic enhancement layer', 'Shop-applied top coat or coating booster', 'Shop'],
      ['As needed', 'Bug and tar spot treatment', 'Coating-safe tar remover applied immediately', 'Customer immediately; shop if unable'],
      ['At 2–3 years (standard coating)', 'Assess coating integrity; consider recoat', 'As determined by inspection', 'Shop — professional inspection'],
    ]
  );

  c += h2('Customer Wash Protocol — Written Guide');
  c += procedure('Correct Wash Method for a Coated Vehicle', [
    '**Pre-rinse:** Rinse the entire vehicle with a hose at low pressure to remove loose dirt before any contact',
    '**Foam or snow foam (optional but recommended):** Apply a coating-safe foam to dwell for 3–5 minutes; this loosens bonded dirt chemically before the wash mitt touches the paint',
    '**Hand wash:** Use a clean microfiber wash mitt and two-bucket method (one wash bucket, one rinse bucket); work panel by panel from the roof downward',
    '**Rinse:** Rinse fully; the coating\'s hydrophobics will cause the water to sheet off significantly faster than an uncoated vehicle',
    '**Dry:** A high-quality microfiber drying towel or a drying aid spray (detailer) reduces drying time; do not allow water to air dry — water spots can develop on coatings in hard water areas',
    '**Inspect:** After drying, run a hand over the paint; if it feels rough or gritty rather than glass-smooth, an iron/fallout decontamination is needed',
  ]);

  c += h2('Products to Avoid on Coated Vehicles');
  c += callout('warning', 'The following products will degrade or damage a ceramic coating and must be avoided by the customer:\n\n• Automatic car washes with abrasive brushes (scratches the coating surface)\n• Wax or paint sealant applied over the coating (creates a haze; does not bond; interferes with hydrophobics)\n• pH-aggressive cleaners (acidic or alkaline extremes etch the coating)\n• Harsh bug and tar removers with strong solvents\n• Abrasive polish or compound applied to the coating surface without professional guidance\n• Any product labelled "cleaner wax" or "wash and wax"');

  c += h2('Seasonal Coating Considerations');
  c += table(
    ['Season', 'Environmental Threat', 'Customer Action Required', 'Shop Service Opportunity'],
    [
      ['Winter', 'Road salt; ice-melt chemicals; freezing water in micro-pores', 'Rinse vehicle thoroughly after driving on salted roads; never leave salt residue to dry on the coating', 'Pre-winter decon wash; coating boost before winter; post-winter inspection and touch-up'],
      ['Spring', 'Tree sap; pollen; acid rain from industrial runoff', 'Remove tree sap within 24 hours; rinse pollen buildup weekly', 'Spring decon wash + polish assessment; coating boost for winter-worn vehicles'],
      ['Summer', 'UV degradation; bird droppings; bug splatter; heat accelerated bonding of organic contamination', 'Remove bird drops immediately; rinse bugs daily if driving at dusk/night', 'Mid-summer inspection; hydrophobic enhancement if vehicle is parked outdoors full-time'],
      ['Autumn', 'Leaf tannin staining; early frost; increased bird activity', 'Remove fallen leaves from the paint surface — tannins stain coatings on contact', 'Pre-winter coating inspection and boost'],
    ]
  );

  return c;
}

function ccChInteriorCoating() {
  let c = '';
  c += p('Interior ceramic and protective coating represents a significant add-on revenue opportunity that is frequently undersold. The interior of a vehicle experiences daily abuse from UV exposure through the glass, body contact, food and drink, and environmental contamination. Professional interior protection dramatically extends the life of every surface and reduces the customer\'s maintenance burden.');

  c += h2('Interior Surface Coverage Map');
  c += table(
    ['Surface Category', 'Applicable Protection', 'Priority Level'],
    [
      ['Leather seats', 'Leather ceramic coating', 'High — most visible; most worn'],
      ['Fabric / cloth seats', 'Fabric hydrophobic coating', 'High — spills are the primary threat'],
      ['Dashboard (plastic/vinyl)', 'Ceramic coating for plastics / UV protectant', 'High — UV fading and cracking'],
      ['Door panels (mix of materials)', 'Per material type; assess each door individually', 'Medium — daily contact wear'],
      ['Carpet and floor mats', 'Fabric hydrophobic coating', 'Medium — cleaned easily when coated; permanent stains when not'],
      ['Headliner (fabric)', 'Light fabric coating — careful application; no over-saturation', 'Medium — hair and skin oil contact'],
      ['Steering wheel (leather/Alcantara)', 'Leather or suede-specific coating; avoid grip area', 'Medium — degradation from hand contact'],
      ['Center console (mixed materials)', 'Per material; assess carefully around display screens', 'Low — less UV; moderate contact'],
    ]
  );

  c += h2('Interior Coating Application Sequence');
  c += procedure('Interior Coating Sequence', [
    'Start with the headliner — overspray from fabric coating can settle on surfaces below; doing the headliner first prevents this',
    'Coat dashboard, door panels, and all hard plastic/vinyl surfaces next — these have the longest dry times',
    'Coat door panel fabric inserts while door panels are being done',
    'Coat carpet and floor mats (remove mats; coat them flat on a clean surface)',
    'Coat seats last — leather and fabric products have relatively short dry times and must not be sat on until cured',
    'Final step: glass coating on all interior glass surfaces (windows, sunroof glass)',
    'Allow the entire interior to cure for minimum 60 minutes with doors open before closing the vehicle',
    'Inspect all surfaces for runs, streaks, or over-saturation before the cure window closes',
  ]);

  return c;
}

function ccChWarrantyDocumentation() {
  let c = '';
  c += p('Professional coating warranties are a primary selling point and a source of ongoing customer relationship value. The warranty documentation process must be rigorous, accurate, and consistent — a warranty that cannot be traced back to a specific vehicle, product lot, and application date is legally and professionally meaningless.');

  c += h2('Warranty Certificate — Required Elements');
  c += table(
    ['Element', 'Source', 'Why It Matters'],
    [
      ['Customer full name and contact info', 'Job record', 'For warranty claim communication'],
      ['Vehicle information', 'Intake form (VIN, Make, Model, Year, Color)', 'Prevents transfer of warranty to a different vehicle'],
      ['Date of application', 'Job record', 'Establishes the warranty clock start date'],
      ['Product name, tier, and lot number', 'Product packaging / label', 'Lot number allows manufacturer to verify a claim; required by most manufacturers for backing their warranty'],
      ['Number of layers applied', 'Application log', 'Determines coverage level; affects expected longevity'],
      ['Warranty duration', 'Per product and tier selected', 'Clearly states what is covered and for how long'],
      ['Coverage description', 'Product warranty document', 'Specifies what the manufacturer covers vs. what the shop covers vs. what is excluded'],
      ['Maintenance requirements', 'Per product protocol', 'Defines what the customer must do to maintain warranty coverage'],
      ['Signature of the technician and the customer', 'Obtained at delivery', 'Both parties acknowledge the service was performed and terms are understood'],
    ]
  );

  c += h2('Product Lot Number Tracking');
  c += p('Every coating product has a lot number printed on the bottle or packaging. This lot number must be recorded on every warranty certificate and in the CRM job record for that vehicle. Manufacturers routinely require lot numbers when processing warranty claims — without it, the claim may be denied.');

  c += procedure('Product Lot Tracking Protocol', [
    'At the start of each job, photograph the product label showing the lot number',
    'Record the lot number in the job record in CRM',
    'If multiple bottles of the same product are used, record all lot numbers — they should be from the same production run if possible',
    'If products from different lots are used, note which lots were used on which panels',
    'Include the lot number on the warranty certificate',
  ]);

  c += h2('Annual Maintenance Warranty Requirement');
  c += p('Some premium coating warranties require annual professional maintenance to remain valid. This must be disclosed clearly at the time of sale and again at delivery. It is also the shop\'s primary retention tool for coating clients.');

  c += callout('tip', 'Frame the annual maintenance requirement as a benefit, not a burden: "Your warranty includes an annual professional inspection and enhancement service — we\'ll bring your hydrophobics back to new condition and verify your coating is performing at its best. We\'ll schedule your first one-year check-in now so you don\'t forget." Then put the appointment in the CRM.');

  return c;
}

function ccChTroubleshooting() {
  let c = '';
  c += p('Ceramic coating troubleshooting falls into two categories: issues discovered before delivery (in-shop), which can be fully corrected, and issues reported after delivery, which require careful diagnosis based on the customer\'s description, timeline, and vehicle history.');

  c += h2('Pre-Delivery Troubleshooting');
  c += troubleshootingSection([
    ['High spot — rainbow haze after leveling', 'Flash time exceeded before leveling; too thick an application', 'If within 2 hours: IPA wipe the section; re-apply. If fully cured: light machine polish; re-apply', 'Monitor flash time; work in smaller sections; reduce product quantity'],
    ['Coating drips on the panel below', 'Too much product on applicator; applying to vertical panels', 'Wipe immediately while wet; IPA the area; re-apply clean coat', 'Use less product; apply to horizontal surfaces first; wipe applicator edges before touching vertical panels'],
    ['Coating smear on window glass from panel overspray', 'Coating contacted glass during panel application', 'IPA wipe immediately while fresh; if cured — glass-safe compound to remove', 'Mask glass edges before coating adjacent panels'],
    ['Uneven hydrophobics (some areas bead; others do not)', 'Missed section during application; applicator ran dry mid-panel', 'Re-apply coating to the non-beading section; check for contamination first', 'Count drops per section consistently; check coverage with an applicator pass using IPA to verify'],
    ['Coating will not level — immediate drag marks', 'Flash time already passed; coating is skinning', 'Allow to cure; light polish the area; recoat', 'Do not attempt to level coating that has already flashed — accept and rework after cure'],
    ['Applicator leaving fibers on the surface', 'Applicator suede is wearing or was contaminated with cured product', 'IPA wipe; switch to a fresh applicator; recoat if fibers are embedded', 'Replace applicators every vehicle; inspect applicator face before each application'],
  ]);

  c += h2('Post-Delivery Troubleshooting');
  c += troubleshootingSection([
    ['Customer reports water is no longer beading at 6 months', 'Hydrophobic performance degraded due to improper wash products (wax, polish) or chemical fallout', 'Inspect the vehicle; if coating integrity is intact — apply a hydrophobic enhancement layer. If coating is compromised — discuss recoat', 'Confirm customer is using only coating-safe wash products; provide product list at delivery'],
    ['Customer reports swirl marks visible after first wash', 'Customer used a dirty wash mitt or automatic brush car wash', 'Offer a light machine polish; explain the cause without accusation', 'Educate thoroughly on wash process at delivery; include written washing guide'],
    ['Bird dropping etching on coated surface', 'Dropping left on the coating for more than 24 hours in high UV/heat', 'Assess depth of etching; if in the coating layer — light polish; if etched into the clear coat — correction needed', 'Advise customers to remove bird droppings immediately; this is the coating\'s primary vulnerability'],
    ['Coating appears to have delaminated in patches', 'Surface contamination at application; or chemical contact (strong solvent) post-delivery', 'Assess whether the remaining coating is intact; strip affected areas; correct; recoat', 'Thorough prep is the only prevention; document any chemical contact incidents reported by the customer'],
    ['Coating appears hazy after outdoor cure (overnight rain on fresh coating)', 'Water contact during initial cure phase; water marks permanently bonded', 'Light machine polish to remove haze; recoat the affected panels', 'Ensure cure window is respected; advise customers on no-water restriction; keep the vehicle in the shop for the full initial cure period'],
  ]);

  c += h2('Warranty Claim Evaluation Framework');
  c += table(
    ['Claim Type', 'Evidence to Request from Customer', 'Shop Investigation', 'Likely Outcome'],
    [
      ['Coating delaminated / peeled off', 'Photos; wash product used; any chemical exposure incidents', 'Inspect vehicle; PTG readings on affected panels; check application records', 'If chemical exposure or wash stripping is the cause: warranty void per care terms; document and educate. If shop application error: recoat at no charge'],
      ['Severe water spotting despite coating', 'Wash method used; water source (well water vs. municipal)', 'Hard water test on the customer\'s area; inspect spotting depth', 'Hard water spots above the coating: cleaning service at discounted rate. Spots etching through the coating: assess correction + possible recoat'],
      ['Rust or paint damage under the coating', 'Photos; whether a chip or crack was present before coating', 'Inspect original intake photos for any pre-existing chip or exposed metal', 'Coating does not prevent rust from forming at uncoated damage points; if chip was pre-existing: not a warranty item; document with intake photos'],
    ]
  );

  return c;
}

function ccChSurfacePanelsContent() {
  let c = '';
  c += p('The following surface procedure cards provide application references for each major surface type encountered in professional ceramic coating services. Use them during training and as QC standards during post-application inspection.');

  for (const surface of SURFACE_PANELS) {
    c += panelProcedure('Ceramic Coating', surface);
    c += pageBreak();
  }

  return c;
}

function ccChAppendices() {
  let c = '';
  c += h2('Appendix A — Coating Product Comparison Reference');
  c += table(
    ['Attribute', 'Entry Grade', 'Mid Grade', 'Professional Grade', 'Elite Grade'],
    [
      ['SiO₂ Content', '10–30%', '40–60%', '60–80%', '80–92%'],
      ['Hardness (pencil)', '7H', '8H', '9H', '9H+'],
      ['Flash time at 20 °C', '30–60 sec', '45–90 sec', '60–120 sec', '90–180 sec (more working time)'],
      ['Layers', '1', '1–2', '2–3', '3+'],
      ['Expected longevity', '1–2 years', '2–4 years', '4–7 years', '7–10 years'],
      ['Manufacturer backing', 'None or limited', 'Product warranty only', 'Full manufacturer warranty', 'Full manufacturer + shop program warranty'],
    ]
  );

  c += h2('Appendix B — Environmental Condition Decision Chart');
  c += table(
    ['Temperature', 'Humidity', 'Recommendation'],
    [
      ['Under 10 °C', 'Any', 'Do not apply — cure will not initiate properly; reschedule'],
      ['10–15 °C', 'Under 50%', 'Proceed with caution; extend working time budget; use IR cure lamp'],
      ['15–25 °C', '40–65%', 'Optimal conditions — proceed with standard protocol'],
      ['25–30 °C', '50–70%', 'Reduce working section size; monitor flash time actively'],
      ['30+ °C', 'Any', 'Do not apply outdoors or in uncontrolled bay; reschedule'],
      ['Any temperature', 'Above 70% RH', 'Do not apply — flash time too unpredictable; high-spot risk elevated'],
    ]
  );

  c += h2('Appendix C — Post-Service Customer Aftercare Guide Template');
  c += callout('tip', '**YOUR COATING AFTERCARE GUIDE**\n\n**First 7 days:** No washing; no water contact if possible; avoid parking under trees; do not apply wax or protectant.\n\n**Days 7–30:** Hand wash only with pH-neutral soap; avoid automatic car washes; no wax or polish; remove bird droppings, sap, and tar within 24 hours.\n\n**After 30 days:** Continue hand washing with pH-neutral products. Schedule your annual maintenance check at 12 months.\n\n**Never use:** Abrasive polish, "cleaner wax" products, brush car washes, or pH-aggressive cleaners.\n\n**Questions?** Contact us: [phone / email]');

  c += h2('Appendix D — Coating Application Log Template');
  c += table(
    ['Field', 'Record'],
    [
      ['Vehicle (Year/Make/Model/VIN)', ''],
      ['Customer Name', ''],
      ['Date of Application', ''],
      ['Product Name and Tier', ''],
      ['Lot Number(s)', ''],
      ['Number of Layers Applied', ''],
      ['Inter-Coat Timing', ''],
      ['Bay Temperature at Application', ''],
      ['Humidity at Application', ''],
      ['Cure Method (ambient / IR)', ''],
      ['Initial Cure Time in Bay (hours)', ''],
      ['QC Result (pass / notes)', ''],
      ['Technician Name', ''],
    ]
  );

  c += h2('Appendix E — Coating Maintenance Service Price Guide');
  c += table(
    ['Service', 'Frequency', 'Price Range', 'Included'],
    [
      ['Annual coating inspection', '12 months', '$75–$150', 'Decon wash; contact angle assessment; visual panel inspection; maintenance product top-up'],
      ['SiO₂ boost / maintenance coat', '12–18 months', '$100–$250', 'Decon wash; spray-on SiO₂ enhancement applied; flash and wipe; hydrophobic performance restored'],
      ['Full coating maintenance detail', '12–24 months', '$250–$450', 'Decon + clay; IPA; ceramic boost; interior wipe; glass; wheels'],
      ['Emergency decontamination', 'As needed', '$75–$150', 'Iron removal; wash; spot assessment; apply hydrophobic enhancer'],
      ['Annual maintenance plan (pre-paid)', 'Annual', '$150–$250/yr', 'Annual inspection + decon wash pre-paid; priority scheduling; locked rate'],
    ]
  );

  c += h2('Appendix F — Coating Warranty Registration Checklist');
  c += checklist([
    'Warranty registration completed with the manufacturer\'s portal within 24 hours of application if required',
    'Registration number recorded in the CRM job record and on the physical warranty certificate issued to the customer',
    'Customer contact details confirmed as accurate — warranty claim notifications must reach the correct person',
    'Care instructions card signed and dated by the customer at delivery — this is the evidence that care requirements were communicated',
    'First annual inspection appointment booked or a CRM reminder set for 11 months post-application date',
    'Warranty certificate filed in both the customer\'s CRM record and a physical warranty binder maintained in the shop for legal reference',
  ]);

  return c;
}

// ─────────────────────────────────────────────────────────────────────────────
// PAINT CORRECTION & DETAILING MANUAL — PANELS AND CHAPTER BUILDERS
// ─────────────────────────────────────────────────────────────────────────────

const DETAIL_STAGES = [
  {
    name: 'Stage 1 — Express Detail',
    steps: [
      'Exterior hand wash (two-bucket method; pH-neutral soap)',
      'Rinse and dry with microfiber drying towel',
      'Glass cleaning inside and out with ammonia-free glass cleaner',
      'Interior vacuum (seats, carpet, floor mats)',
      'Interior wipe-down of hard surfaces with an all-purpose cleaner at appropriate dilution',
      'Tire shine and wheel spray wipe',
      'Spray detailer or quick wax on exterior for light protection',
    ],
    duration: '60–90 minutes',
    price_range: '$80–$150',
    notes: 'Express detail is a maintenance service — it does not include paint decontamination, correction, or coating. Do not promise a restored appearance from an express detail on a neglected vehicle.',
  },
  {
    name: 'Stage 2 — Standard Detail',
    steps: [
      'Pre-rinse to remove loose debris',
      'Foam cannon application; 5-minute dwell',
      'Two-bucket hand wash; panel by panel from roof down',
      'Rinse; dry with microfiber',
      'Clay bar decontamination on all painted surfaces',
      'Iron fallout removal if indicated by inspection',
      'Glass cleaning inside and out',
      'Full interior vacuum and extraction of floor mats',
      'Interior surface wipe with appropriate products for each material type',
      'Leather conditioning (if leather interior)',
      'Tire and wheel cleaning with dedicated products; tire dressing',
      'Engine bay light cleaning if included in scope',
      'Application of spray sealant or carnauba wax',
    ],
    duration: '3–5 hours',
    price_range: '$200–$350',
    notes: 'The standard detail is the backbone of a detailing menu. It should leave the vehicle looking significantly better than when it arrived without the need for machine polishing.',
  },
  {
    name: 'Stage 3 — Paint Correction Detail',
    steps: [
      'Full Stage 2 decontamination wash and clay',
      'Paint thickness measurement on all panels',
      'Paint condition assessment under LED detail light; photograph all defects',
      'Masking of trim, rubber, and glass as needed',
      'Machine polish — compound stage: correct scratches, swirls, and oxidation',
      'Machine polish — finishing stage: refine surface to high gloss',
      'IPA panel wipe after polishing to remove polish oils',
      'Inspect each panel under raking detail light; re-polish any areas not at standard',
      'Application of carnauba wax, sealant, or handover for ceramic coating application',
      'Interior detail concurrent with paint work (Stage 2 interior scope)',
      'Glass decontamination and treatment',
      'Final vehicle inspection and QC',
    ],
    duration: '1–2 days (depending on vehicle size and defect severity)',
    price_range: '$500–$1,500+',
    notes: 'Paint correction detailing is a skilled service requiring machine polishing experience. Never assign this stage to a technician who has not completed supervised correction training.',
  },
  {
    name: 'Stage 4 — Show Preparation Detail',
    steps: [
      'All Stage 3 steps completed to 95%+ defect removal standard',
      'Final jeweling stage with ultra-fine finishing compound (20,000+ grit equivalent)',
      'Panel-by-panel inspection under high-intensity show lighting',
      'Spot correction on any remaining micro-defect not acceptable under show inspection',
      'Elite-grade paint coating or carnauba wax application',
      'Wheel removal; full wheel and brake caliper detail and coating',
      'Engine bay show preparation: detail, dress, and protect all engine bay surfaces',
      'Interior deep clean and leather conditioning; dress all plastics and trim',
      'Tires cleaned and dressed with water-based tire product (not silicone-based)',
      'Final inspection with the customer present',
    ],
    duration: '2–4 days',
    price_range: '$1,500–$4,000+',
    notes: 'Show preparation is a premium service reserved for concours competitors, collectors, and enthusiasts preparing for an event. Every minute detail is addressed. Price reflects the time, skill, and materials involved.',
  },
];

function dtChWashMethods() {
  let c = '';
  c += p('The wash is the foundation of every detailing service. Done correctly, it removes contamination without introducing marring. Done incorrectly, it adds swirl marks with every pass. This chapter covers every professional wash method and when each is appropriate.');

  c += h2('The Two-Bucket Wash Method — Standard');
  c += p('The two-bucket method is the industry standard for preventing cross-contamination during the contact wash phase. One bucket contains clean soapy water; the other is a rinse bucket for cleaning the wash mitt between panels.');

  c += procedure('Two-Bucket Wash Protocol', [
    'Fill Bucket 1 with water and a measured amount of pH-neutral car shampoo (per product dosing)',
    'Fill Bucket 2 with clean water only — this is the rinse bucket',
    'Install a grit guard in the bottom of each bucket — grit guards trap debris at the bottom; the mitt dips above the grit guard, not into the debris',
    'Pre-rinse the vehicle with a hose or pressure washer at safe distance (minimum 30 cm with a fan nozzle)',
    'Load the wash mitt from Bucket 1; wash one panel starting from the roof and working downward',
    'Rinse the mitt in Bucket 2 after each panel; agitate against the grit guard; reload from Bucket 1',
    'Never wash the rockers and lower panels with the same mitt pass as the roof and hood — the lower body areas carry the most abrasive grit',
    'Rinse the vehicle fully before the soap dries — especially in warm weather',
    'Dry with clean, folded microfiber drying towels using a patting technique — do not drag',
  ]);

  c += h2('Snow Foam Pre-Wash');
  c += p('Snow foam (also called foam cannon application) is a pre-wash contact-free cleaning step that removes significant surface contamination before any mitt touches the paint. It reduces the amount of abrasive grit the wash mitt encounters, reducing swirl introduction.');

  c += procedure('Snow Foam Pre-Wash Protocol', [
    'Fill the foam cannon bottle with the manufacturer-recommended dilution of foam shampoo',
    'Attach to a pressure washer; set the canon to maximum foam production',
    'Apply foam from bottom to top (to maximize dwell time — foam on the lower panels lasts longer when applied first)',
    'Allow the foam to dwell for 3–5 minutes — the surfactants lift and encapsulate contamination',
    'Rinse from the top down with a gentle fan nozzle; do not use a direct stream',
    'Proceed to the two-bucket hand wash — the foam pre-wash is not a substitute for contact washing',
  ]);

  c += h2('Rinseless Wash Method');
  c += p('The rinseless wash (also called a waterless or rinseless wash) is a technique for maintaining clean vehicles where water conservation is desired or where a hose is not available. It is not appropriate for heavily soiled vehicles.');

  c += procedure('Rinseless Wash Protocol', [
    'Mix rinseless wash concentrate with water per product instructions in a bucket (typically 30:1 to 100:1)',
    'Pre-spray the panel to be washed with the rinseless solution from a trigger bottle',
    'Using a plush microfiber towel (not a regular wash mitt), wipe the panel in straight passes — do not scrub',
    'Flip to a clean face of the towel after each pass',
    'Buff the panel dry with a second clean, dry microfiber towel',
    'Work panel by panel; use fresh towels frequently — the rinseless wash relies on encapsulation; a saturated towel re-deposits contamination',
    'Not suitable for vehicles with caked mud, tar, or heavy fallout — use traditional wash first',
  ]);

  c += h2('Wash Chemical Selection');
  c += table(
    ['Chemical', 'pH', 'Use Case', 'Avoid On'],
    [
      ['pH-neutral shampoo (6.5–7.5)', 'Neutral', 'Standard maintenance wash on all vehicles', 'Nothing — appropriate for all finishes'],
      ['Strip wash / degreasing shampoo (8–9)', 'Mildly alkaline', 'Pre-detail wash to remove wax, sealant, and polish oils', 'Coated vehicles — will strip the hydrophobic top coat'],
      ['Wheel cleaner (alkaline)', 'Alkaline (9–12)', 'Wheel cleaning — dissolves brake dust chemically', 'Paint surfaces — will etch clear coat'],
      ['Iron/fallout remover (acidic at first; neutralizes)', 'Acidic (2–4 in concentrate; neutralizes on contact)', 'Iron fallout removal from paint and wheels', 'Bare metal, chrome, or polished aluminum — etching risk'],
      ['Bug remover', 'Mildly alkaline or solvent', 'Protein-based contamination (bugs, bird droppings)', 'Do not allow to dwell on any surface — always rinse within 60 seconds'],
    ]
  );

  c += h2('Wash Mitt and Towel Maintenance');
  c += p('The quality of the wash media directly determines whether the wash introduces or removes contamination. New mitts must be primed before their first use on a customer\'s vehicle; used mitts must be maintained and regularly inspected for embedded grit or fiber degradation.');

  c += procedure('Wash Mitt Washing Protocol', [
    'After each use: rinse the mitt immediately under running water; agitate the mitt against itself to dislodge trapped grit',
    'Machine wash mitts separately from other shop textiles — cross-contamination from compound-soaked polishing pads will ruin a wash mitt',
    'Use a fragrance-free, low-temperature (30–40 °C) detergent with no fabric softener — fabric softener reduces the microfiber\'s soil pick-up capability',
    'Air-dry mitts flat or on a hanger — tumble drying at high heat degrades microfiber structure over time',
    'Inspect mitts before each use: run your fingers through the fibers; any embedded grit, hardened product deposits, or fiber clumping means the mitt should be retired',
    'Retire a wash mitt after 30–50 uses or when it fails the inspection — a $25 mitt should not be used past its serviceable life to wash a $100,000 vehicle',
  ]);

  c += table(
    ['Wash Media Type', 'Best Application', 'Max Reuses (approx.)', 'Retirement Indicator'],
    [
      ['Microfiber wash mitt', 'All painted surfaces; standard two-bucket wash', '30–60 washes', 'Fiber clumping; embedded grit that washing cannot remove; pulling sensation on paint'],
      ['Lambswool mitt', 'Painted surfaces; gentle contact; premium vehicles', '20–40 washes', 'Matted wool; reduced loft; embedded contamination'],
      ['Foam pad applicator (for rinseless wash)', 'Rinseless or waterless wash — small section work', '15–30 uses', 'Any visible contamination streak in the foam; foam cell breakdown'],
      ['Microfiber drying towel', 'Drying after rinse; final buff after rinseless wash', '50–100 uses per face (fold and use multiple faces per session)', 'Hardened product deposit anywhere on the towel; reduced plush feel; shedding fibers'],
    ]
  );

  return c;
}

function dtChDecontamination() {
  let c = '';
  c += p('Paint decontamination removes contamination embedded in or bonded to the clear coat surface that washing cannot dislodge. Iron fallout, tar spots, water spots, industrial fallout, and old adhesive residue are all decontamination targets. A properly decontaminated surface is the prerequisite for any polishing, coating, or film application.');

  c += h2('Contamination Types and Their Effects');
  c += table(
    ['Contamination Type', 'Source', 'Effect on Paint', 'Removal Method'],
    [
      ['Iron fallout (brake dust)', 'Brake dust from the vehicle and surrounding traffic', 'Metallic particles embed in clear coat; rust and bloom; permanent staining if left', 'Chemical iron remover (color-changing); rinse; clay if residue remains'],
      ['Tar', 'Road surface bitumen; splashing from roads', 'Sticky contamination that bonds strongly to clear coat; difficult to remove', 'Tar remover on a microfiber cloth; no scrubbing; rinse'],
      ['Tree sap', 'Airborne sap from trees', 'Acidic; etches clear coat on contact; becomes very hard when dried', 'Sap remover; clay bar; if etched — light polishing required'],
      ['Bird droppings', 'Highly acidic (uric acid)', 'The most damaging common contamination; can etch through clear coat within hours in heat', 'Damp cloth immediately; sap remover for dried droppings; may require polishing if etched'],
      ['Water spots (mineral)', 'Tap water, sprinkler overspray', 'Mineral calcium deposits create a raised texture; dull appearance', 'Water spot remover or dilute acid rinse; clay; polish if etch is deep'],
      ['Industrial fallout', 'Manufacturing emissions, rail yards', 'Metallic and chemical particles; similar to iron fallout but variable chemistry', 'Iron remover + clay; significant cases may require polishing'],
      ['Old adhesive / sticker residue', 'Decals, stickers, tape', 'Adhesive layer bonds to clear coat; contaminant of the worst kind for film application', 'Adhesive remover on a cloth; IPA follow-up; never use a blade on paint'],
    ]
  );

  c += h2('Chemical Decontamination Protocol');
  c += procedure('Chemical Decontamination Sequence', [
    'Complete the wash first — chemical decontaminants should be applied to a clean, wet vehicle',
    'Apply iron remover: spray on all painted surfaces, wheels, and wheel arches; observe the color change from clear to purple/pink as the chemical reacts with iron particles',
    'Allow 3–5 minutes dwell — do not let it dry; mist with water if it is drying',
    'Rinse thoroughly with a hose',
    'Apply tar remover to identified tar spots: wipe gently with a microfiber cloth; do not scrub; rinse',
    'Apply bug remover to the front surfaces (bumper, hood, windshield): dwell 60 seconds; rinse',
    'Rinse the entire vehicle completely',
    'Dry the vehicle before proceeding to clay bar decontamination',
  ]);

  c += h2('Clay Bar Decontamination');
  c += p('The clay bar physically removes bonded surface contamination by shearing it away from the clear coat surface. After claying, the surface should feel completely smooth and glass-like to the touch. Clay bar is used after chemical decontamination and before any polishing, coating, or film application.');

  c += procedure('Clay Bar Protocol', [
    'Break off a piece of clay bar approximately the size of a 50-pence coin; knead into a flat disc',
    'Spray the paint surface and the clay bar generously with clay lubricant — never clay without lubricant',
    'Glide the clay bar across the surface in straight, overlapping passes — do not apply pressure; use gentle, consistent contact',
    'The clay will drag on contaminated areas and feel smooth on clean areas — this is the feedback that tells you where the surface is contaminated',
    'Continue until the clay glides smoothly with no drag — this panel is decontaminated',
    'Fold the clay to a fresh face every 30 cm of claying — when all faces are contaminated, discard and use a new piece',
    'Dry the panel with a microfiber towel; feel the surface with the back of your clean hand through a plastic bag — it should feel completely smooth',
    'If the clay bar is dropped on the floor, discard it immediately — it has been contaminated with grit that will scratch paint',
  ]);

  return c;
}

function dtChPolishingCompounds() {
  let c = '';
  c += p('Polishing compounds are the cutting tools of paint correction. Understanding abrasive grades, their correct applications, and the relationship between compound grade and pad selection is essential to achieving a predictable, reproducible correction result without over-polishing the clear coat.');

  c += h2('Abrasive Mechanisms');
  c += p('Modern polishing compounds use one of two abrasive mechanisms, or a combination:');

  c += table(
    ['Mechanism', 'Description', 'Products Typically Used In', 'Behavior'],
    [
      ['Fixed abrasive', 'Particles are a fixed mineral (aluminum oxide, silicon carbide)', 'Traditional compounds and polishes', 'Consistent cut throughout the polishing cycle; does not diminish'],
      ['Diminishing abrasive', 'Particles break down into smaller sizes as polishing progresses', 'Modern professional compounds and polishes', 'Starts with aggressive cut; finishes with a polish; one product does two jobs in some systems'],
      ['Chemical abrasive (SMAT)', 'Chemical reaction softens and etches the clear coat microscopically for removal', 'Some advanced correcting systems', 'Lower heat generation; gentler on thin clear coats; works differently with heat vs. rotary vs. DA'],
    ]
  );

  c += h2('Compound Grade Reference');
  c += table(
    ['Grade', 'Typical Abrasive Size', 'Cut Level', 'Finish Level', 'Use For'],
    [
      ['Heavy compound', '5–10 microns', 'Very high', 'Very rough — hologram risk', 'Severe oxidation, deep scratches (2+ stage process; always follow with polish)'],
      ['Medium compound', '3–5 microns', 'High', 'Moderate roughness', 'Moderate swirls, light-moderate oxidation; multi-stage process; follow with finishing'],
      ['Light compound / heavy polish', '1–3 microns', 'Medium', 'Good — may be final step on dark colors with DA', 'Light-moderate swirls; one-step correction on lightly defected paint'],
      ['Finishing polish', '0.5–1 micron', 'Low', 'High gloss', 'Refining after compound; removing holograms; final step before coating'],
      ['Ultra-fine finishing / jeweling compound', '< 0.5 micron', 'Minimal', 'Maximum gloss', 'Concours-level finishing; removing micro-scratches from finishing stage; pre-coating gloss maximization'],
    ]
  );

  c += h2('Choosing the Correct Starting Compound');
  c += p('The most common mistake in paint correction is choosing a compound that is either too aggressive (removes more clear coat than necessary) or too light (requires many more passes to achieve correction). The correct starting point is determined by the defect severity and the clear coat thickness reading.');

  c += procedure('Compound Selection Test', [
    'Identify the most common defect type (swirl, scratch, oxidation) and severity',
    'Check the paint thickness reading for the panel in question — if below 80 microns, start with a light compound regardless of defect severity',
    'Select a compound one grade lighter than you think you need for the first test pass',
    'Perform a 30 cm × 30 cm test section with the chosen compound and pad; evaluate the result under the detail light',
    'If defect removal is insufficient after 4 machine passes: step up one compound grade and re-test',
    'If the finish after compounding is hazy and requires significant refinement: consider stepping down one grade for the main correction to reduce the refinement work',
    'The goal is maximum defect removal with the least aggressive compound that achieves it',
  ]);

  return c;
}

function dtChPadSelection() {
  let c = '';
  c += p('The polishing pad is the interface between the machine and the paint. Pad selection affects cut level, finish quality, heat generation, and compound absorption. The pad and compound must be matched to each other and to the machine type — a foam pad that works well on a dual-action polisher may produce completely different results on a rotary.');

  c += h2('Pad Types and Properties');
  c += table(
    ['Pad Type', 'Material', 'Cut Level', 'Finish Level', 'Compatible Machine'],
    [
      ['Heavy cutting wool pad', 'Woven or twisted wool fiber', 'Maximum', 'Very rough — holograms certain', 'Rotary only — generates heat that activates compounds'],
      ['Medium cutting foam', 'Open-cell foam, typically orange or yellow', 'High', 'Moderate', 'Rotary or DA; most versatile cutting pad'],
      ['Light cutting / polishing foam', 'Medium-density foam, white or light green', 'Medium', 'Good', 'Rotary or DA; best for one-step correction'],
      ['Finishing foam', 'Dense, tight-cell foam, black or red', 'Low', 'High gloss', 'Rotary or DA; refining and finishing stage'],
      ['Ultra-soft finishing', 'Micro-foam or microsuede, typically blue', 'Minimal', 'Maximum gloss', 'DA only at low speed; jeweling stage; pre-coating final'],
      ['Microfiber cutting pad', 'Microfiber face on foam body', 'High-medium', 'Better than equivalent foam', 'DA; generates less heat than wool; excellent with modern compounds'],
    ]
  );

  c += h2('Pad Maintenance');
  c += checklist([
    'Prime new pads with a small amount of compound before the first use — unpaired pads absorb compound inconsistently',
    'Clean pads during the job with a pad conditioning brush on the orbital motion — use the brush while the machine is running to remove compound buildup',
    'Never allow a pad to sit with dried compound on it — soak in warm water immediately after use; agitate; rinse until water runs clear',
    'Air dry pads completely before storage — never machine dry (compresses the foam cells)',
    'Inspect pads before each use — torn, flattened, or misshapen pads produce inconsistent results and must be discarded',
    'Separate pads by grade and machine — a finishing pad contaminated with heavy compound will scratch rather than finish',
    'Label pads by compound they have been used with — re-using a heavy compound pad with a finishing polish produces unpredictable results',
  ]);

  c += h2('Pad and Compound Matching Chart');
  c += table(
    ['Defect Level', 'Recommended Pad', 'Recommended Compound', 'Machine Type', 'Stage Count'],
    [
      ['Severe oxidation', 'Wool or heavy cutting foam', 'Heavy compound', 'Rotary', '3 stages: cut, compound, finish'],
      ['Moderate swirls and deep scratches', 'Medium cutting foam', 'Medium compound', 'Rotary or DA', '2 stages: compound, finish'],
      ['Light swirls and minor RDS', 'Light cutting foam or microfiber', 'Light compound', 'DA at 5–6 speed', '2 stages: compound, finish'],
      ['Very light swirls (new car protection)', 'Finishing foam', 'Finishing polish', 'DA at 4–5 speed', '1 stage'],
      ['Pre-coating surface refinement', 'Ultra-soft or blue finishing pad', 'Ultra-fine polish', 'DA at 3–4 speed', '1 stage'],
    ]
  );

  return c;
}

function dtChMachineTechnique() {
  let c = '';
  c += p('Machine polishing technique is where the difference between a surface that looks corrected and one that is truly corrected becomes clear. The technique must be adapted to the machine type, pad and compound combination, panel geometry, and clear coat condition. This chapter covers technique for both dual-action and rotary polishers.');

  c += h2('Dual-Action (DA) Polisher Technique');
  c += p('The DA polisher oscillates and rotates simultaneously. This action distributes heat evenly, makes it harder to burn through clear coat, and produces excellent results when operated correctly. The DA is the recommended starting machine for new technicians.');

  c += procedure('DA Polisher Technique', [
    'Prime the pad: apply 4 pea-sized drops of compound to the pad face in a cross pattern; spread over the panel before beginning machine movement',
    'Set the machine speed: start at speed 3 out of 6 for priming; increase to speed 5–6 for active correction',
    'Hold the machine flat to the panel surface — do not angle the pad; full pad contact is essential',
    'Apply moderate and consistent pressure — 2–3 kg of downward pressure; too little reduces cut; too much stalls the oscillation',
    'Work in 40 cm × 40 cm sections; move in overlapping passes at 3–5 cm/second',
    'Complete 4–6 passes over the section; inspect under the detail light',
    'If compound is fully worked in (clear/dry) and the defects are still present: add one additional drop of product and make 2 more passes',
    'If compound is still oily after 6 passes: the panel section may be too large; reduce to 30 cm × 30 cm',
    'Wipe the section with a clean microfiber; inspect under raking light before moving to the next section',
  ]);

  c += h2('Rotary Polisher Technique');
  c += p('The rotary polisher spins on a single axis without the oscillation of a DA. This produces more aggressive cutting power and more heat. The rotary is used for severe correction scenarios where a DA cannot achieve sufficient correction in a reasonable time — and requires more experience to use without causing damage.');

  c += procedure('Rotary Polisher Technique', [
    'Reduce working section to 30 cm × 30 cm maximum — the rotary generates heat rapidly; smaller sections give better control',
    'Speed: 800–1,200 RPM for cutting; 600–900 RPM for finishing',
    'Hold the machine at slight angles (3–5°) and change the angle direction every second pass — this prevents hologram formation from single-axis rotation',
    'Keep the machine moving at 5–8 cm/second — stopping the machine while spinning causes immediate heat concentration and burn-through risk',
    'Monitor panel temperature: if the panel surface becomes too hot to touch comfortably (above 55 °C), stop; allow to cool before continuing',
    'Follow every rotary compound stage with at least one DA finishing stage to remove holograms from the rotary direction',
    'Never use a rotary with a wool pad on a thin clear coat — this is the fastest way to burn through',
  ]);

  c += h2('Speed Settings Reference');
  c += table(
    ['Operation', 'DA Speed Setting (1–6)', 'Rotary RPM'],
    [
      ['Compound spreading / priming', '2–3', '400–600'],
      ['Active cutting (heavy compound)', '5–6', '1,000–1,400'],
      ['Active polishing (medium compound)', '5', '900–1,200'],
      ['Finishing (light polish)', '4–5', '700–1,000'],
      ['Ultra-fine jeweling', '3–4', '600–800'],
      ['Final wipe-in (carnauba)', '2–3', 'N/A — use by hand or low-speed applicator'],
    ]
  );

  return c;
}

function dtChPaintDepth() {
  let c = '';
  c += p('Paint depth measurement is a non-negotiable pre-correction discipline. It is the only way to know whether the clear coat can safely absorb the polishing required to achieve the target correction level. This chapter covers the measurement methodology, interpretation, and integration with correction planning.');

  c += h2('How a Paint Depth Gauge Works');
  c += p('Magnetic induction gauges measure the depth of non-magnetic material (paint layers) over a magnetic substrate (steel). They cannot accurately read paint depth over aluminum, plastic, fiberglass, or magnesium body panels. Eddy current gauges exist for non-ferrous panels. A professional correction technician must know which panel type they are reading.');

  c += table(
    ['Gauge Type', 'Works On', 'Does Not Work On', 'Notes'],
    [
      ['Magnetic induction (most common)', 'Steel panels (doors, quarter panels, roof)', 'Aluminum, plastic, fiberglass, carbon fiber', 'Confirm the panel is steel with a magnet before reading'],
      ['Eddy current', 'Aluminum panels (many new vehicle hoods and fenders)', 'Steel panels', 'Required for luxury vehicles with all-aluminum construction'],
      ['Dual-mode', 'Both steel and aluminum (auto-detection)', 'Plastic, fiberglass, carbon fiber', 'Recommended for shops that work on a variety of vehicles'],
    ]
  );

  c += h2('Measurement Protocol');
  c += procedure('Paint Depth Measurement Protocol', [
    'Take 5 readings per panel minimum: center, four quadrants',
    'Record every reading — do not average in your head; write it down or use a gauge that auto-records',
    'Compare readings within a panel: a reading that is 30+ microns lower than the surrounding area suggests a prior repair in that area',
    'Flag any panel with a reading below 80 microns as high-risk and limit correction to finishing polish only',
    'Flag any reading below 60 microns as no-correction: inform the customer; coating over the existing condition is the only safe option',
    'Compare different panels: a door reading 50 microns less than the hood may indicate the door has been repainted',
    'Document all readings in the job record; photograph the gauge readings on each panel',
  ]);

  c += h2('Communicating Readings to Customers');
  c += callout('script', '"Before we polish anything, we always measure the paint thickness. Here\'s what we found on your vehicle:\n\n[Summary: most panels are at X microns, which is healthy stock clear coat. However, your [panel] is at Y microns, which tells us it has been polished before or possibly repainted.]\n\nWhat this means for our correction plan: on the panels with healthy thickness, we can achieve a high level of correction. On the thinner panel, we\'re going to use a very light polishing approach to avoid any risk to the clear coat. In practice, you may notice a slightly lower defect removal percentage on that panel — which I want you to know about in advance rather than be surprised."');

  return c;
}

function dtChInspectionLighting() {
  let c = '';
  c += p('Paint condition is only visible under the right lighting. Flat overhead shop lighting hides the majority of defects that will be immediately visible to the customer standing next to their vehicle in natural daylight. Professional inspection lighting is not optional — it is as essential as the polisher.');

  c += h2('Types of Inspection Lighting');
  c += table(
    ['Light Type', 'What It Reveals', 'Best Use', 'Limitations'],
    [
      ['Raking LED bar (narrow beam)', 'Swirl marks, scratches, buffer holograms, panel texture', 'Primary defect detection; pre- and post-correction comparison', 'May create shadows on textured or heavily contoured panels'],
      ['Diffused LED panel (broad, even light)', 'Overall paint uniformity, paint color match between panels, low-contrast defects', 'Evaluating paint finish quality; checking for color mismatch on repaired panels', 'Does not reveal fine swirl marks as well as raking light'],
      ['Single-point halogen or incandescent', 'Gloss level; deep swirls on dark colors', 'Dark color correction assessment; gloss measurement before coating', 'Generates heat; avoid prolonged close exposure to paint'],
      ['Natural daylight (overcast)', 'The most revealing real-world condition', 'Final exterior inspection before delivery; customer evaluation', 'Not controllable in terms of angle; cannot be used indoors'],
      ['UV light', 'Repaint detection; filler and blemish detection; coating presence verification', 'Pre-purchase inspections; verifying coating coverage after application', 'Not useful for standard defect detection'],
    ]
  );

  c += h2('Inspection Angle Protocol');
  c += procedure('Multi-Angle Inspection Method', [
    '**Position 1 — 90° to the panel (straight on):** Evaluate overall gloss and paint uniformity; check for color mismatch',
    '**Position 2 — Raking angle (15–20° to the surface):** Hold the LED bar parallel to the panel at a low angle; swirls and scratches become clearly visible as they catch and scatter the light',
    '**Position 3 — Looking down the panel edge:** Stand at one end of a long panel (door, quarter panel) and look down its length; wavy texture, orange peel, and any panel irregularities become visible',
    '**Position 4 — Transmitted light (interior through glass):** For glass inspection; look through the glass from inside with the LED bar on the outside surface; defects in glass coatings or laminate are visible',
    '**Position 5 — Customer eye level:** Stand at the position where the customer will stand when looking at their vehicle; this is ultimately the most important vantage point',
  ]);

  c += h2('Pre-Correction vs. Post-Correction Inspection Protocol');
  c += table(
    ['Inspection Point', 'Light Type Used', 'What to Document'],
    [
      ['Before correction — full vehicle', 'Raking LED + natural light', 'All defects by type and panel; photograph each panel under raking light'],
      ['After compound stage — per panel', 'Raking LED', 'Remaining defects after cut; assess whether further compounding or polishing stage is needed'],
      ['After polish/finishing stage — per panel', 'Raking LED + single-point', 'Final defect level; hologram check from rotary polishing; high-spot check from DA'],
      ['After IPA wipe — per panel', 'Raking LED', 'Final defect level; any polishing oils removed; surface ready for coating'],
      ['Pre-delivery — full vehicle', 'All angles; natural light if possible', 'Customer-level QC; compare to pre-correction photos; document improvement'],
    ]
  );

  return c;
}

function dtChInteriorDetailing() {
  let c = '';
  c += p('Interior detailing is a technically diverse discipline requiring knowledge of every interior material type, appropriate chemistry for each, and the mechanical skills to deep-clean areas that household cleaning products and methods cannot reach. This chapter provides a comprehensive interior detailing reference.');

  c += h2('Interior Material Classification');
  c += table(
    ['Material', 'Common Locations', 'Appropriate Chemistry', 'Avoid'],
    [
      ['Leather (genuine)', 'Seats, door panels, steering wheel', 'pH-neutral leather cleaner; leather conditioner after', 'Silicone, oil-based products, solvent cleaners'],
      ['Leatherette / vinyl', 'Seats, door inserts, dashboard top', 'All-purpose cleaner (APC) at mild dilution; interior protectant', 'Solvent-based cleaners (may crack vinyl); silicone'],
      ['Alcantara / microsuede', 'Headliners, seat centers, steering wheel trim', 'Dedicated alcantara cleaner; nap brush to restore pile', 'Water saturation; silicone; oil-based products; heat'],
      ['Hard plastic', 'Dashboard, center console, door handles', 'APC at 10:1–20:1 dilution; interior detailer spray', 'Solvent-based cleaners on textured plastics (may blanche)'],
      ['Piano black / gloss trim', 'Dashboard accents, center console bezels', 'Interior spray detailer; microfiber only — no dry wipe', 'Dry wiping (severe scratching); abrasive cloths'],
      ['Carpet', 'Floor, trunk', 'APC at higher dilution or dedicated carpet cleaner; hot water extractor for deep clean', 'Over-saturating without extraction (mold risk)'],
      ['Fabric / cloth seats', 'Seat faces, headliner', 'Upholstery cleaner + extractor; agitation brush for set stains', 'Over-saturation; direct heat on wet fabric'],
      ['Rubber trim / seals', 'Door seals, door openings, trunk seals', 'APC; rubber protectant', 'Silicone-based protectants (dry out rubber over time)'],
    ]
  );

  c += h2('Interior Detailing Sequence');
  c += procedure('Full Interior Detailing Sequence', [
    '**Remove and shake floor mats:** Pre-clean outside the vehicle; return at the end',
    '**Remove all personal items from the vehicle and place in a designated area:** Photograph before removing to document position',
    '**Dry vacuum — entire interior:** Seats, carpet, under seats, trunk, headliner, all crevices',
    '**Steam or extract carpet and fabric seats:** Work in sections; agitate with a detail brush; extract with the wet-dry extractor; work from the rear forward',
    '**Treat leather — clean, then condition:** Panel by panel; wipe clean; apply conditioner while leather is still warm from cleaning; buff off excess',
    '**Clean hard surfaces (dashboard, console, door panels):** APC spray on a microfiber applicator — spray onto the cloth, not the surface to avoid overspray on glass',
    '**Detail vents and crevices:** Use a detail brush to push debris out of vents; compressed air to blow out gaps; follow with a dry microfiber wipe',
    '**Clean interior glass:** Ammonia-free glass cleaner on a glass microfiber; two-cloth method (one cleaner, one buffer)',
    '**Apply interior protectant:** Dash, door panels, rubber trim; do not over-apply — excess protectant attracts dust',
    '**Return floor mats:** Properly positioned and secure',
    '**Final interior inspection:** Sit in each seat position; check for missed areas; verify interior fragrance is neutral or light',
  ]);

  return c;
}

function dtChEngineBay() {
  let c = '';
  c += p('Engine bay detailing is a service that dramatically improves the presentation of a vehicle for sale, show, or pride of ownership. It requires care to avoid electrical and mechanical damage from water and cleaning chemicals. Done correctly, it can add hundreds of dollars of perceived value to a vehicle.');

  c += h2('Engine Bay Safety Protocol');
  c += callout('warning', 'Engine bay detailing involves water and chemicals in close proximity to electrical components, sensors, and exposed connections. The following safety steps are non-negotiable:\n\n• Allow the engine to cool completely before beginning — minimum 2 hours after last operation\n• Cover the alternator, ignition coil, exposed fuses, and the air intake with plastic bags or specialty covers before any water or product is applied\n• Use a low-pressure water source only — a pressure washer must be used from a distance and with a wide fan nozzle, never a direct stream at electrical connections\n• Do not allow water to enter the air intake — a hydro-locked engine is a shop-liability catastrophe\n• Remove plastic covers immediately after rinsing — trapped moisture under plastic causes corrosion');

  c += h2('Engine Bay Detailing Procedure');
  c += procedure('Engine Bay Detailing Protocol', [
    'Ensure engine is cool; photograph the bay for reference before beginning',
    'Cover alternator, fuse box, ignition module, and air intake',
    'Pre-spray the entire bay with a diluted APC (3:1 to 5:1 for lightly soiled; 1:1 for heavily soiled)',
    'Allow 2–3 minutes dwell',
    'Agitate with detail brushes of various sizes: large brush for open areas; small detailing brush for around bolt heads, hose clamps, and wiring loom holders',
    'Low-pressure rinse from the back of the bay forward (toward the radiator) — avoid directing water toward the firewall',
    'Remove plastic covers immediately',
    'Dry with compressed air blow-out: get into every crevice to remove standing water',
    'Follow with a microfiber wipe-down of all surfaces accessible by hand',
    'Apply plastic/rubber protectant to hoses, plastic covers, and rubber trim using a detail brush',
    'Apply a metal-safe degreaser or protectant to any exposed metal surfaces',
    'Allow to fully dry before starting the engine: minimum 20 minutes with the hood open',
    'Start the engine and allow to idle for 5 minutes: listen for unusual sounds; check for any fluid leaks that may have been masked by prior contamination',
  ]);

  c += h2('What to Avoid in Engine Bay Detailing');
  c += checklist([
    'Never use a high-pressure stream of water — the risk to electrical connections is too high',
    'Never use silicone-based dressing on engine drive belts — causes slipping and premature wear',
    'Avoid oil-based dressings on hose connections — oil degrades rubber over time',
    'Do not apply protectant to the coolant reservoir cap or any fluid caps — contamination risk',
    'Do not allow any cleaning chemical to contact exposed brake lines or clutch lines',
    'Do not skip the dry-out phase — starting a wet engine causes misfires and may damage sensors',
  ]);

  c += h2('Engine Bay Dressing Reference');
  c += table(
    ['Surface', 'Product Type', 'Application Method', 'Finish Level'],
    [
      ['Rubber hoses and moldings', 'Water-based rubber conditioner', 'Detail brush or applicator pad; light coat', 'Satin — never glossy on hoses'],
      ['Plastic covers and reservoirs', 'UV-stable plastic dressing', 'Foam applicator; thin even coat; buff off excess', 'Satin to low-gloss'],
      ['Painted surfaces (firewall, strut towers)', 'Detail spray or light all-purpose protectant', 'Microfiber wipe; protect from oxidation and corrosion', 'Match original paint finish'],
      ['Chrome or polished metal accents', 'Metal polish; then protectant spray', 'Hand polish; wipe; apply protectant', 'High gloss; maintain with regular wiping'],
      ['Wire loom and cable bundles', 'No product — dry only', 'Compressed air; soft brush; do not apply any dressing to wiring', 'Leave clean and dry'],
    ]
  );

  return c;
}

function dtChPricing() {
  let c = '';
  c += p('Detailing pricing must accurately reflect the time, material, and skill required for each service level while remaining competitive in the local market. The most common detailing business mistake is underpricing services because time investment is underestimated during the planning phase.');

  c += h2('Pricing Building Blocks');
  c += table(
    ['Cost Category', 'How to Calculate', 'Common Error'],
    [
      ['Labor', 'Technician hourly cost (wages + burden) × estimated hours', 'Underestimating hours — time each service on real vehicles before setting prices'],
      ['Materials', 'Product cost per vehicle + applicator and cloth replacement cost', 'Forgetting to amortize consumables (pads, cloths, clay bars) into per-vehicle cost'],
      ['Overhead allocation', 'Monthly fixed costs (rent, utilities, equipment) ÷ monthly vehicle capacity', 'Often completely ignored in small shop pricing; leads to working for below-market wages'],
      ['Margin', 'Target profit % above total cost', 'Should be at least 30% above fully loaded cost; higher for premium services'],
    ]
  );

  c += h2('Detailing Menu Structure');
  c += table(
    ['Service', 'Description', 'Price Range (Small Vehicle)', 'Price Range (Large Vehicle/SUV)'],
    [
      ['Express Detail (Stage 1)', 'Wash, dry, vacuum, wipe, tire shine', '$75–$125', '$100–$175'],
      ['Standard Detail (Stage 2)', 'Full wash, clay, interior deep clean, sealant', '$175–$300', '$250–$400'],
      ['Single-Stage Polish + Detail', 'Stage 2 + one-step machine polish', '$350–$550', '$450–$700'],
      ['Two-Stage Correction + Detail', 'Stage 3 correction + interior detail', '$600–$950', '$800–$1,300'],
      ['Full Correction (Stage 3)', 'Maximum correction + interior + preparation for coating', '$900–$1,500', '$1,200–$2,000'],
      ['Show Detail (Stage 4)', 'Concours preparation; all surfaces; multi-day', '$1,800–$4,000+', '$2,500–$5,000+'],
      ['Engine Bay', 'Add-on to any service', '$100–$200', '$150–$275'],
      ['Headlight restoration', 'Add-on; restores yellowed / hazy headlight lenses', '$80–$150 per pair', '$80–$150 per pair'],
    ]
  );

  c += h2('Vehicle Condition Pricing Adjustments');
  c += p('Base prices assume a vehicle in average condition. Heavily neglected, heavily soiled, or larger-than-standard vehicles require a surcharge to maintain profitability.');

  c += table(
    ['Condition Factor', 'Surcharge Guidance'],
    [
      ['Heavily neglected interior (pet hair, severe staining)', '+25–50% of interior portion of the job'],
      ['Heavily oxidized paint (Stage 4 defect level)', '+30–50% of polishing portion'],
      ['Oversized vehicle (full-size van, crew-cab truck, motorhome)', '+20–40% across all services'],
      ['Heavy tar or fallout contamination', '+$50–$100 per decontamination stage required'],
      ['Prior DIY polishing with swirl marks and holograms', '+$100–$200 — existing holograms add a full additional correction stage'],
    ]
  );

  c += h2('Add-On Upsell Script Integration');
  c += p('Add-on services have the highest margin-per-hour of any line on the detailing menu. They are best offered at the intake inspection — before the customer has a price anchor — rather than during or after the service. Presenting add-ons at intake gives the customer time to consider them rather than feeling pressured at delivery.');

  c += procedure('Intake Add-On Presentation', [
    'Complete the inspection; walk the customer through the primary service scope and its pricing first',
    'Transition: "While I was looking the vehicle over, I noticed a few things worth mentioning — would you like me to walk through them quickly?"',
    'Headlights: "Your headlights are clouded — that affects visibility at night and the appearance significantly. We can restore those while the car is here for [price]. Want to include that?"',
    'Trim: "The exterior plastic trim has faded — it\'s a quick treatment that brings it back to black and protects it against UV for the next year. That\'s [price] if you\'d like to add it."',
    'Interior fabric: "Have you thought about protecting the fabric from future spills? We apply a hydrophobic barrier that makes cleanup a wipe rather than a scrub. That adds [price]."',
    'Never present more than 3 add-ons in a single conversation — option overload causes customers to decline all of them',
    'Record the add-ons accepted and declined in the CRM — declined add-ons are follow-up opportunities at the next visit',
  ]);

  c += table(
    ['Add-On', 'Intake Trigger', 'Single-Line Pitch', 'Price Range'],
    [
      ['Headlight restoration', 'Yellowed or hazy lenses visible at intake', '"Restore your headlights today — better visibility and they\'ll look brand new"', '$80–$150/pair'],
      ['Trim restoration', 'Faded black plastic on doors, bumpers, or cladding', '"We can bring your trim back to like-new black while we detail — it\'ll look factory again"', '$60–$120'],
      ['Fabric protection', 'Cloth or fabric seats; carpet in good condition', '"A quick spray treatment makes future spills wipe right off — especially valuable with kids or pets"', '$60–$150'],
      ['Pet hair removal', 'Visible pet hair embedded in fabric', '"We can remove all the embedded pet hair before we clean — it\'ll be spotless"', '$60–$120'],
      ['Engine bay', 'Visible grease or dirt on the engine visible at intake', '"A clean engine bay makes servicing easier and keeps your new detail consistent throughout"', '$80–$150'],
    ]
  );

  return c;
}

function dtChDetailQC() {
  let c = '';
  c += p('Quality control in detailing is a customer satisfaction driver at a direct, visible level — the customer can immediately evaluate the result when they inspect their vehicle. This chapter provides a structured QC framework for every detailing stage.');

  c += h2('Exterior QC Checklist');
  c += checklist([
    'Paint surface is completely free of water spots, soap residue, and wax haze',
    'All chrome and brightwork is polished and streak-free',
    'Rubber trim is dressed — matte and uniform, not shiny or over-saturated',
    'Tires are clean and evenly dressed — no wipe marks or sling-off on the fenders',
    'Wheels are clean on face, spokes, and barrel (verify barrel with a light)',
    'Glass is clean and streak-free — check from inside and outside',
    'Door jambs are clean and dressed — not forgotten or half-done',
    'Fuel filler door surround is clean — this is a detail people notice immediately',
    'All badging and trim is clean and free of compound or product residue',
    'License plate area and frame are clean',
    'Wiper blades are wiped — not streaking from product contamination',
  ]);

  c += h2('Interior QC Checklist');
  c += checklist([
    'No dust visible on the dashboard, vents, or any horizontal surface',
    'All glass is streak-free — check from the driver\'s seat and from outside',
    'Leather is clean and conditioned — not dry; not greasy or over-conditioned',
    'Carpets are uniformly clean and pile is lifted (not matted in one direction)',
    'Floor mats are correctly positioned and secured',
    'Center console is clean — including the inside of cup holders and the charging port area',
    'All door panel pockets and armrests are clean',
    'Trunk is vacuumed and any cargo area liner is dressed',
    'Headliner is spot-free — particularly around map lights and sunroof edges',
    'Odor is neutral or lightly fresh — no overwhelming fragrance; no lingering chemical smell',
  ]);

  c += h2('Correction-Level QC');
  c += checklist([
    'Pre-correction photos are compared to post-correction inspection under the same light setup',
    'No holograms from rotary polishing — inspect specifically at 45° angles under single-point light',
    'No buffer trails (straight line marks from DA moving too fast) — inspect under raking LED',
    'No compound splatter on rubber trim, glass, or panel edges',
    'All polishing oils removed by IPA wipe — no oily sheen visible',
    'Customer is shown the before-and-after comparison before delivery is confirmed',
  ]);

  c += h2('QC Sign-Off System');
  c += p('No vehicle leaves the shop without a physical or digital QC sign-off. This is not optional — it is the single procedural step that prevents the majority of post-delivery complaints. The sign-off is performed by a person other than the technician who performed the service whenever possible.');

  c += table(
    ['QC Stage', 'Who Signs Off', 'What Is Checked', 'What Happens If Issue Found'],
    [
      ['Post-wash QC', 'Any senior technician', 'Surface is clean; no contamination; panels dry; no water spots', 'Re-wash or spot treat; do not proceed to correction until passed'],
      ['Post-correction QC', 'Lead technician or shop manager', 'All panels inspected under inspection bar; defect map reviewed; holograms; induced marring', 'Re-correct the specific panel; do not allow the vehicle to proceed to coating until all panels pass'],
      ['Post-coating QC', 'Lead technician or shop manager', 'All coated surfaces inspected; no high spots; no missed areas; hydrophobic test on spot panel', 'Rework high spots; add a second coat to missed areas; do not release the vehicle until passed'],
      ['Delivery QC', 'Service advisor or front desk', 'Interior clean; no product residue on exterior; personal items returned; fuel level as received', 'Correct any cosmetic issues before the customer enters the vehicle'],
    ]
  );

  c += h2('QC Documentation for Coating Jobs');
  c += checklist([
    'Before photos: minimum 20 photos of intake condition — all panels, all glass, wheels, pre-existing damage closeups',
    'Defect map completed with condition grade and specific defect notes for each panel before correction begins',
    'PTG readings recorded for each panel — minimum one reading per panel; three readings for any panel with unusual thickness',
    'Post-correction photos: minimum 8 comparison photos showing the most significantly corrected areas',
    'Coating application record: product name and lot number; ambient conditions; panels coated in sequence; flash and leveling notes; IR cure duration if used',
    'Final inspection sign-off form: technician initial and manager countersign; all panels confirmed pass; delivery authorized',
    'All documentation uploaded to the CRM before the customer is contacted for pickup — no verbal delivery without the paper trail in place',
  ]);

  c += h2('Detail Stages Reference Section');
  c += p('The following stage cards provide a quick-reference overview of each detailing service stage defined in this manual.');

  for (const stage of DETAIL_STAGES) {
    c += h3(stage.name);
    c += table(
      ['Attribute', 'Detail'],
      [
        ['Duration', stage.duration],
        ['Typical Price Range', stage.price_range],
        ['Key Notes', stage.notes],
      ]
    );
    c += procedure(`${stage.name} — Steps`, stage.steps);
    c += pageBreak();
  }

  return c;
}

function dtChFleetDetailing() {
  let c = '';
  c += p('Fleet detailing is a high-volume, recurring revenue stream that differs from consumer detailing in scheduling, product selection, turnaround requirements, and pricing structure. A shop that can execute fleet work efficiently and maintain consistent quality across multiple identical vehicles has a significant competitive advantage in the commercial market.');

  c += h2('Fleet Detailing vs. Consumer Detailing — Key Differences');
  c += table(
    ['Factor', 'Consumer Detailing', 'Fleet Detailing'],
    [
      ['Volume per engagement', '1 vehicle', '3–50+ vehicles per cycle'],
      ['Consistency requirement', 'Each vehicle judged on its own result', 'All vehicles must be visually consistent — a detail that is excellent on one vehicle and average on another is a failed fleet job'],
      ['Turnaround priority', 'Quality over speed', 'Speed AND quality — vehicles in service cannot be down for full-day details'],
      ['Product selection', 'Best product for each specific situation', 'Standardized products across all vehicles; no per-vehicle variations'],
      ['Pricing', 'Consumer rate; single-job basis', 'Volume pricing; contract basis; annual commitment preferred'],
      ['Scheduling', 'Flexible; customer-driven', 'Fixed schedule; dispatch and return coordinated with fleet manager'],
      ['Relationship', 'Direct with the vehicle owner', 'Institutional — fleet manager or purchasing department; not the vehicle users'],
    ]
  );

  c += h2('Standard Fleet Service Packages');
  c += table(
    ['Package', 'Scope', 'Frequency', 'Price Model'],
    [
      ['Fleet Express', 'Exterior wash; tire dressing; glass clean; interior vacuum and wipe', 'Weekly or biweekly', 'Per-vehicle rate; volume discount at 10+ vehicles per cycle'],
      ['Fleet Standard', 'Full exterior wash with fallout removal; full interior detail', 'Monthly', 'Per-vehicle rate; contract pricing for 6- or 12-month commitment'],
      ['Fleet Protection', 'Standard detail + paint sealant application', 'Quarterly', 'Higher per-vehicle rate; annual contract'],
      ['Fleet Branding Maintenance', 'Vinyl wrap or livery maintenance; inspection for lifting or damage; edge resealing', 'Quarterly or as-needed', 'Per-service rate or annual maintenance contract'],
      ['New Fleet Vehicle Prep', 'New car prep service for each vehicle entering the fleet', 'Per vehicle at acquisition', 'Per-vehicle rate'],
    ]
  );

  c += h2('Fleet Service Production Workflow');
  c += procedure('Fleet Detail Production Protocol', [
    'Group vehicles in the production area by service type; establish a numbered sequence to track progress',
    'Designate roles: one technician per function where volume permits (one dedicated to exterior; one to interior)',
    'Use a standardized product layout for each vehicle — the same product in the same location for every vehicle in the fleet reduces reaching, error, and decision time',
    'Quality check each vehicle against the fleet-specific checklist before release; the fleet manager or a designated company contact should sign off on at least the first vehicle of each batch',
    'Track time-per-vehicle for each fleet client; use this data to verify that the pricing is accurate and to identify efficiency opportunities in future contracts',
    'Document any pre-existing damage or condition concerns on each vehicle during the fleet intake — fleet vehicles are often shared between multiple drivers; accountability is diffuse; documentation protects the shop',
  ]);

  c += h2('Fleet Account Pricing Model');
  c += p('Fleet pricing must account for the volume efficiency gain (less mobilization time per vehicle) and the consistency requirement (more process discipline and QC time per vehicle). The net effect is typically a 15–25% discount from single-vehicle consumer rates for established fleet contracts.');

  c += table(
    ['Fleet Size', 'Typical Discount from Consumer Rate', 'Contract Length Recommended', 'Payment Terms'],
    [
      ['2–5 vehicles', '5–10%', '3–6 months', 'Net 30 invoice'],
      ['6–15 vehicles', '10–15%', '6–12 months', 'Net 30 invoice; annual prepay discount available'],
      ['16–30 vehicles', '15–20%', '12 months minimum', 'Net 30 or quarterly prepay'],
      ['31+ vehicles', '20–25%', '12–24 months', 'Negotiated; quarterly prepay with auto-renewal'],
    ]
  );

  return c;
}

function dtChPaintChipTouchup() {
  let c = '';
  c += p('Paint chip and scratch touch-up is not paint correction — it is a cosmetic repair service that addresses the physical paint defect rather than the surface defect. Detailers are frequently asked to address rock chips, door dings (that have removed paint), and deep scratches. Understanding the scope of what is and is not a detailing function — and knowing how to perform basic touch-up accurately — prevents both customer disappointment and improper work.');

  c += h2('Scope of Touch-Up for Detailers vs. Body Shop Work');
  c += table(
    ['Defect Type', 'Detailer Scope', 'Body Shop Required'],
    [
      ['Rock chip — paint only; no primer showing; < 3 mm', 'Touch-up paint spot treatment is within detailer scope', 'Not required unless customer wants a perfect repair'],
      ['Rock chip — primer showing; 3–8 mm', 'Touch-up paint application to prevent rust; cosmetic imperfection will remain visible', 'Required if invisible repair is the goal'],
      ['Rock chip — metal showing; rust developing', 'Emergency rust treatment to halt corrosion; professional repair immediately', 'Required for proper repair'],
      ['Deep scratch — through clear coat to paint', 'Touch-up paint for rust prevention; polishing for scratch mitigation around the scratch', 'Required if invisible repair is the goal'],
      ['Door ding with paint damage', 'Touch-up of paint at the ding; PDR (paintless dent repair) referral for the dent itself', 'Required if the dent must be removed'],
      ['Bumper scuff — no paint break; surface abrasion only', 'Machine polish with appropriate compound; may not achieve 100% removal', 'Required if polish cannot remove the scuff'],
    ]
  );

  c += h2('Touch-Up Paint — Application Protocol');
  c += p('Touch-up paint application is a skill that requires practice and patience. The goal is not a perfect invisible repair — it is a chip that is properly sealed against moisture and rust and is significantly less visible than the bare chip was.');

  c += procedure('Rock Chip Touch-Up Protocol', [
    'Identify the exact paint color code — typically on a sticker in the door jam, under the hood, or in the trunk; never guess the color',
    'Source touch-up paint in the correct color code; OEM-sourced is preferred for factory paint match; aftermarket touch-up products vary in quality significantly',
    'Clean the chip thoroughly with IPA; remove any contamination, loose paint, or rust flaking',
    'If rust is present: treat with a rust converter product; allow to cure per product instructions before applying touch-up paint',
    'Apply touch-up paint with the product\'s brush or with a fine artist\'s brush; apply in the thinnest possible layer that fills the chip',
    'Allow to dry completely (24 hours minimum)',
    'Apply a second layer if the first layer is sunken below the surrounding paint surface (common on deep chips)',
    'After full cure (72+ hours): level the touch-up with 2000-grit wet-sand until it is flush with the surrounding clear coat',
    'Polish the sanded area with a light compound and finishing polish to blend the gloss',
    'Clear coat touch-up: apply a small spot of clear coat to restore the UV protection layer over the bare touch-up paint',
    'Note: touch-up paint will never be invisible unless the car is sent for a full panel respray; set this expectation with the customer before beginning',
  ]);

  c += h2('Scratch Treatment — What Polishing Can and Cannot Fix');
  c += table(
    ['Scratch Type', 'Fingernail Test', 'Polishing Outcome', 'Touch-Up Required'],
    [
      ['Clear coat scratch only (swirl)', 'Fingernail does not catch', 'Fully removable with appropriate compound', 'No'],
      ['Deep clear coat scratch', 'Fingernail catches slightly', 'Reduction of 50–80%; white appearance may remain', 'No — but may be cosmetically improved with clear coat pen'],
      ['Scratch into paint layer', 'Fingernail catches clearly; color visible', 'Cannot correct — polishing removes material around the scratch but not the scratch', 'Yes — touch-up paint before any polishing'],
      ['Scratch through to primer', 'Fingernail catches deeply; primer color visible', 'Cannot correct by polishing; makes area around scratch look better', 'Yes — touch-up; rust prevention essential'],
      ['Scratch through to metal', 'Fingernail catches completely; silver metal visible', 'Do not polish until touch-up and primer applied', 'Yes — urgent; rust begins within hours in moist environments'],
    ]
  );

  return c;
}

function dtChResalePrep() {
  let c = '';
  c += p('Pre-sale vehicle preparation is one of the most time-pressured and high-ROI detailing applications. A vehicle properly prepared for resale — whether private sale or dealer trade — commands a measurably higher price and sells faster than an undetailed equivalent. The detailer\'s role is to maximize the visual and olfactory impression of the vehicle within the constraints of its actual condition.');

  c += h2('Resale Prep Service Scope');
  c += table(
    ['Scope Level', 'Included Work', 'Best For', 'Typical Price'],
    [
      ['Basic Presentation', 'Full exterior wash; clay; paint sealant; full interior detail; glass; tires and wheels', 'Vehicles in good condition that simply need to look their best', '$250–$450'],
      ['Enhanced Presentation', 'Basic Presentation + single-stage machine polish on exterior; headlight restoration if needed; engine bay clean', 'Vehicles with moderate swirling or aging that needs refreshment', '$500–$800'],
      ['Maximum Value Prep', 'Enhanced Presentation + 2-stage correction; odor elimination if needed; leather conditioning and repair; carpet extraction; all trim restoration', 'Vehicles with significant visual wear where the ROI on extensive prep is clear', '$900–$1,800'],
    ]
  );

  c += h2('The ROI Case for Resale Detailing');
  c += p('Customers who hesitate to invest in resale preparation often do not understand the return on investment. The following framework helps communicate the value.');

  c += procedure('Presenting the Resale Prep ROI', [
    'Ask the customer what they expect to receive for the vehicle: "What are you hoping to get?"',
    'Ask if they have compared similar vehicles on the resale market: "Have you looked at what comparable vehicles are listed for?"',
    'Point out that buyer first impressions directly determine willingness to negotiate: "A buyer who sees a vehicle that looks well-maintained will offer closer to asking price. One who sees swirls, interior wear, and a stale smell will immediately start negotiating heavily."',
    'Quantify: "Our pre-sale package is [price]. Based on what we typically see, a properly presented vehicle commands [amount] more than an undetailed equivalent — and frequently sells [time] faster. That pays for the detail and puts [net] additional in your pocket."',
    'Close: "Would you like to proceed? We can typically turn around a resale prep in [timeframe]."',
  ]);

  c += h2('What to Document for Resale Prep Customers');
  c += checklist([
    'Pre-service photos of every panel; interior; engine bay — these form the "before" documentation that demonstrates the value of the service',
    'List of specific improvements made: polish removed X% of swirls; headlights restored from Y condition to Z condition; etc.',
    'Provide the customer with before/after photos they can share in their listing: "These photos will tell buyers the vehicle was professionally prepared"',
    'Note any pre-existing conditions that the detail cannot correct: paint chips; clear coat failure beginning; rust under a seal — the customer should be aware of these before presenting the vehicle to buyers',
    'Include a brief written description of the services performed that the customer can share with potential buyers to demonstrate care and investment',
  ]);

  return c;
}

function dtChToolMaintenance() {
  let c = '';
  c += p('Professional detailing tools represent a significant capital investment. Polishing machines, extractors, steam cleaners, lighting equipment, and the full suite of hand tools require proper maintenance to perform consistently, safely, and for their designed service life. This chapter provides a maintenance schedule and procedure for every major tool category in the professional detail shop.');

  c += h2('Machine Polisher Maintenance');
  c += table(
    ['Machine Type', 'After Each Job', 'Weekly', 'Monthly', 'Annual'],
    [
      ['DA random orbital', 'Clean backing plate; remove compound residue from housing; inspect backing plate for wobble', 'Check carbon brushes for wear; clean vent holes with compressed air', 'Inspect cord for damage; check swivel for smooth rotation; lubricate swivel bearing with polisher-rated grease', 'Full service by manufacturer or qualified technician; replace worn components'],
      ['Rotary polisher', 'Clean spindle and backing plate; remove compound from housing; inspect for smooth rotation', 'Check brush wear; lubricate gear housing per manufacturer schedule', 'Same as DA monthly; test for vibration at all speeds', 'Professional service; replace carbon brushes and any worn gear components'],
      ['Long-throw DA', 'Same as standard DA', 'Same as standard DA', 'Inspect the larger eccentric bearing for smooth operation — this bearing carries more load than standard DA', 'Professional service; eccentric bearing is higher wear than standard DA'],
    ]
  );

  c += h2('Wet-Dry Extractor Maintenance');
  c += procedure('Extractor Maintenance Protocol', [
    'After each use: empty the waste tank completely; rinse with clean water; allow to dry before storing',
    'Weekly: clean the filter (paper filters — replace; foam filters — rinse and air dry); inspect hoses and wand connections for blockages',
    'Monthly: run a solution of 10:1 water and white vinegar through the system to descale any mineral buildup in the pump and hoses; follow with a clean water flush',
    'Inspect the squeegee attachment for cracking or deformation — a worn squeegee leaves water behind rather than picking it up',
    'Annual: inspect the motor brushes; check pump pressure output; replace intake and exhaust filters',
    'Never store with water in the tank — stagnant water breeds bacteria and creates odor that transfers to the next vehicle',
  ]);

  c += h2('Detail Lighting Equipment Maintenance');
  c += checklist([
    'LED panel and boom arm lights: clean the lens face monthly with a soft microfiber and lens cleaner; dust on the lens reduces output and makes defect detection less reliable',
    'Check all cable connections quarterly — damaged or intermittent connections are a fire hazard',
    'Raking LED bars: inspect the mounting bracket for security — a dropped detail light is at minimum a quality risk (broken glass) and at worst a vehicle damage event',
    'Replace LED elements that have dimmed noticeably — consistent lighting output is critical for reliable defect detection',
    'Calibrate brightness settings: if two lights are being used simultaneously, ensure they are at the same brightness level — unequal brightness creates a shadow at the seam between them',
  ]);

  c += h2('Clay Bar and Chemical Product Storage Maintenance');
  c += table(
    ['Item', 'Storage Requirement', 'Inspection Interval', 'Replacement Trigger'],
    [
      ['Clay bars', 'Sealed in original packaging or in a sealed container with clay lubricant; cool, dark storage', 'Before each use', 'Replace if dropped; if contaminated with grit; if color has changed to dark (absorbed contamination)'],
      ['Spray bottles', 'Labeled clearly with product name and dilution; store upright', 'Monthly — check for mold or residue buildup in the nozzle', 'Replace if nozzle clogs or mists inconsistently; replace if bottle is cracked or if label has peeled'],
      ['Microfiber towels', 'Washed separately from regular laundry; stored folded in a clean bin with a dust cover', 'Before each use — check for fibers, stains, or embedded contamination', 'Replace if pile is matted and cannot be restored by washing; if heavily stained; if torn'],
      ['Polishing pads', 'Cleaned after each use; stored flat in individual labeled bags', 'Before each use — check for flat spots, tears, or compound saturation', 'Replace if foam is compressed and does not recover; if face is torn; if compound has hardened in the foam'],
      ['Paint depth gauge', 'Store in padded case; calibrate regularly', 'Calibrate against a zero-reading surface (bare steel plate) at the start of each day of measurement work', 'Replace if calibration cannot be achieved; if display is damaged; if probe tip is worn'],
    ]
  );

  c += h2('Annual Shop Equipment Audit');
  c += procedure('Annual Tool and Equipment Audit Protocol', [
    'List every tool and piece of equipment in the shop with its last service date',
    'Test every polisher at all speeds; listen for unusual sounds; check for vibration beyond normal',
    'Test every extractor for suction pressure; run a timed water-pickup test and compare to prior year',
    'Inspect all electrical equipment for cord damage; replace any cord that has nicks, cuts, or worn insulation immediately — do not continue using damaged electrical equipment',
    'Replace all polishing pads that are past their prime; mid-quality results from worn pads cost more in re-dos than the pad replacement cost',
    'Update the chemical inventory: discard any product past its shelf life; stock up on high-turnover consumables',
    'Inspect the bay environment: lighting output; HVAC function; floor condition; drainage; any maintenance needed before the next peak season',
  ]);

  return c;
}

function dtChAppendices() {
  let c = '';
  c += h2('Appendix A — Chemical Dilution Reference');
  c += table(
    ['Chemical', 'Typical Dilution', 'Notes'],
    [
      ['All-purpose cleaner (APC)', '3:1–20:1 (water:concentrate)', 'Higher dilution = lighter duty; 3:1 for engine bays; 20:1 for interior surfaces'],
      ['Fallout / iron remover', 'Typically ready-to-use', 'Some concentrates: 3:1 dilution for maintenance; follow product label'],
      ['Clay lubricant', 'Typically ready-to-use or 2:1', 'Never substitute with soap — it degrades the clay bar'],
      ['Rinseless wash', '30:1–100:1 (water:concentrate)', 'Per product; bucketful at lower ratio for heavier soiling'],
      ['Leather cleaner', 'Per product — typically 5:1–10:1', 'Use weaker dilution for regular maintenance; stronger for heavy soiling'],
      ['Carpet and fabric cleaner', '3:1–10:1', 'Pre-spray at 5:1; agitate; extract; rinse with plain water'],
      ['Glass cleaner', 'Typically ready-to-use', 'DIY mixture: 50% IPA / 50% distilled water as a reliable alternative'],
    ]
  );

  c += h2('Appendix B — Pad and Compound Shorthand Matrix');
  c += table(
    ['Scenario', 'Pad Color (generic)', 'Compound Grade', 'Machine / Speed'],
    [
      ['Severe correction', 'Orange / Wool', 'Heavy', 'Rotary / 1,000–1,200 RPM'],
      ['Moderate correction', 'Orange', 'Medium', 'Rotary 900 RPM or DA 5–6'],
      ['Light correction / one-step', 'White/Cream', 'Light', 'DA 5'],
      ['Finishing', 'Black', 'Finishing polish', 'DA 4–5'],
      ['Pre-coating jeweling', 'Blue/Microsuede', 'Ultra-fine', 'DA 3–4'],
    ]
  );

  c += h2('Appendix C — Interior Stain Treatment Quick Reference');
  c += table(
    ['Stain Type', 'Treatment', 'Notes'],
    [
      ['Coffee / tea', 'APC at 5:1; agitate; extract', 'Fast treatment prevents permanent staining; tannins bond quickly'],
      ['Ink', 'IPA on a microfiber; blot — do not rub; repeat', 'Blotting prevents spreading; may require multiple applications'],
      ['Blood', 'Cold water (never hot — hot sets protein stains); enzyme cleaner; extract', 'Hot water permanently sets blood stains — always use cold first'],
      ['Food grease', 'Degreaser at 5:1; agitate; extract; rinse', 'Oil-based stains require a degreasing agent; soap alone is insufficient'],
      ['Pet urine', 'Enzyme-based cleaner; thorough extraction; allow to dry fully; re-apply if odor persists', 'Enzymes break down the uric acid crystals responsible for odor; steam alone spreads the contamination'],
      ['Mold / mildew', 'Dilute bleach or specialist mold remover; agitate; extract; dry fully', 'Address moisture source; re-occurrence is certain if dampness is not eliminated'],
    ]
  );

  c += h2('Appendix D — Vehicle Inspection Report Template (Detailing)');
  c += table(
    ['Field', 'Details to Record'],
    [
      ['Customer name and contact', ''],
      ['Vehicle Year / Make / Model', ''],
      ['Current odometer', ''],
      ['Date of service', ''],
      ['Stage of detail (1–4)', ''],
      ['Pre-service paint condition (Class 1–5)', ''],
      ['Paint thickness readings per panel', ''],
      ['Pre-correction defect documentation (photos attached)', ''],
      ['Correction level achieved', ''],
      ['Products used (name + lot numbers for coatings)', ''],
      ['Interior condition notes at intake', ''],
      ['Any pre-existing interior damage documented', ''],
      ['QC result (pass / areas noted)', ''],
      ['Technician name', ''],
    ]
  );

  c += h2('Appendix E — Detailing Service Booking Script');
  c += callout('script', '**Phone Intake for a New Detailing Inquiry:**\n\n"Thank you for calling [Shop Name], this is [Your Name] — how can I help you today?"\n\n[After they describe what they are looking for:]\n"That sounds like a great candidate for our [service name]. Can I ask a few quick questions so I can put together the right option for you?"\n\n"What year, make, and model is the vehicle? And would you describe the paint as generally clean, or has it seen a lot of use?"\n\n"And what\'s most important to you — are you looking for maximum appearance, protection, or both?"\n\n[After gathering information:]\n"Perfect. Based on what you\'ve described, I\'d recommend our [tier] detail. That includes [3-item summary]. The investment for that service is [price], and we could have it done in [timeframe]. I have [day] or [day] available — which works better for you?"');

  c += h2('Appendix F — Detailing Job Time Standards');
  c += table(
    ['Service', 'Solo Technician', 'Two-Person Team', 'Notes'],
    [
      ['Maintenance detail', '1.5–2.5 hrs', '1–1.5 hrs', 'Standard single-vehicle; adjust for condition'],
      ['Full detail — standard', '3–5 hrs', '2–3 hrs', 'Includes full interior and exterior'],
      ['Full detail — premium', '5–8 hrs', '3–5 hrs', 'Includes correction pass; more thorough interior'],
      ['Single-stage correction', '2–4 hrs', '1.5–2.5 hrs', 'Per vehicle; does not include protection application'],
      ['Two-stage correction', '4–8 hrs', '2.5–5 hrs', 'Compound + finishing polish; per vehicle'],
      ['Full interior extraction', '2–4 hrs', '1.5–2.5 hrs', 'Includes seats, carpet, door panels; excludes paint correction'],
      ['Headlight restoration (pair)', '30–60 min', '20–40 min', 'Includes seal and protective coating'],
    ]
  );

  c += h2('Appendix G — Chemical Safety Quick Reference');
  c += table(
    ['Chemical Category', 'PPE Required', 'First Aid (Eye Contact)', 'Storage'],
    [
      ['Iron fallout remover (low-acid)', 'Nitrile gloves; eye protection in enclosed spaces', 'Rinse with water 15 min; seek medical advice if irritation persists', 'Cool, dark location; away from alkaline chemicals'],
      ['Alkaline degreaser', 'Nitrile gloves; eye protection when spraying', 'Rinse with water 15 min; seek medical advice', 'Away from acids; cool storage'],
      ['IPA 99%', 'Nitrile gloves; fire source exclusion zone', 'Rinse with water; IPA is not a serious eye irritant but rinse as precaution', 'Away from heat; spark-free storage; closed container'],
      ['Tar remover (petroleum solvent)', 'Nitrile gloves; ventilation; no open flame', 'Rinse immediately; if sensitivity develops: medical attention', 'Flammable storage cabinet; away from heat sources'],
    ]
  );

  return c;
}

// ─────────────────────────────────────────────────────────────────────────────
// ADDITIONAL CERAMIC COATING CHAPTERS — EXPANDED CONTENT
// ─────────────────────────────────────────────────────────────────────────────

function ccChFullCorrectionForCoating() {
  let c = '';
  c += p('Paint correction performed specifically as a pre-coating preparation differs from general paint correction in its objectives, standards, and finishing requirements. The goal is not merely to make the paint look better — it is to bring the surface to the precise condition that allows a ceramic coating to perform at its engineered maximum capability. This chapter covers the complete multi-stage correction sequence from paint depth verification through final IPA inspection, with the coating application as the terminal step.');

  c += h2('Pre-Correction Assessment Protocol — Complete');
  c += procedure('Full Vehicle Pre-Correction Assessment', [
    '**Wash the vehicle completely** before assessment — contaminated paint gives misleading defect readings',
    '**Paint depth gauge pass** — minimum 5 readings per panel; record and photograph each reading; create a panel-by-panel thickness map',
    '**Identify previously repainted panels** — panels with readings 40+ microns below the average of adjacent panels have likely been repainted; these may have different clear coat chemistry and hardness',
    '**Clay bar test section** — run the clay bar over a test area on each panel type present; note clay drag level as a proxy for surface contamination severity',
    '**Polishing test in concealed area** — before committing to a compound grade, perform a 30 cm × 30 cm test polish in a low-visibility area (door jamb, lower quarter panel); evaluate defect removal percentage and residual scratch pattern',
    '**Define correction scope** — document for each panel: current condition class; target condition class; compound grade and pad selection; number of polishing stages; expected outcome at each stage',
    '**Customer acknowledgment** — present the assessment findings and the correction plan; obtain written confirmation that the customer understands the target, the limitation of paint thickness, and any panels that cannot be corrected to the full standard',
  ]);

  c += h2('Multi-Stage Correction Sequence — Full Detail');

  c += h3('Stage 1: Heavy Compound (Cutting Stage)');
  c += p('Used on vehicles with Class 3 or 4 paint condition. The objective is maximum defect removal — not finish quality. Heavy compound will leave a hazy or hologrammed surface that is refined in subsequent stages.');
  c += checklist([
    'Machine: rotary at 900–1,100 RPM or DA at speed 5–6 with heavy cutting foam pad',
    'Work in 30 cm × 30 cm sections maximum; rotary polisher on paint with significant oxidation benefits from smaller section work',
    'Apply 4 pea-sized drops of heavy compound to the pad; spread at low speed before increasing to working speed',
    'Complete 4–6 overlapping passes over the section; monitor compound lubrication — do not let the compound dry on the surface',
    'Wipe clean with a short-pile microfiber; inspect under raking LED',
    'Defect removal target: 80–90% in this stage; remaining minor defects are addressed in Stage 2',
    'If defect removal is insufficient after 6 passes: re-apply compound and make 2 additional passes; if still insufficient — consider whether a wool pad with the same compound is needed',
    'After completing the full vehicle: wipe all panels; perform a preliminary inspection pass under the detail light',
  ]);

  c += h3('Stage 2: Medium Compound or Heavy Polish (Refinement)');
  c += p('Used after the cutting stage to remove the scratch pattern left by the heavy compound while completing the correction of any remaining defects. The surface should progress from hazy to near-gloss.');
  c += checklist([
    'Machine: DA at speed 4–5 with medium cutting foam or microfiber pad',
    'Switch pads — never use the Stage 1 heavy pad for Stage 2; compound contamination defeats the purpose of the stage',
    'Apply medium compound or heavy polish; work in 40 cm × 40 cm sections',
    'Complete 4–6 passes; inspect: the Stage 1 haze should be greatly reduced or eliminated; the Stage 2 product should finish cleaner than Stage 1',
    'Wipe clean; inspect under both raking and overhead LED; any remaining holograms from Stage 1 that are not clearing after 6 passes indicate a pad selection or speed issue — adjust',
    'Target surface state after Stage 2: 90–95% defect removal; surface clear of heavy compound haze; minor swirls only remaining',
  ]);

  c += h3('Stage 3: Finishing Polish (Pre-Coating Refinement)');
  c += p('The finishing stage brings the paint to its maximum achievable gloss level and removes any micro-scratches or hologramming from Stage 2. The surface after this stage is what will be permanently locked under the coating.');
  c += checklist([
    'Machine: DA at speed 3–4 with finishing foam pad (black or ultrafine)',
    'Apply 3–4 drops of finishing polish; spread at speed 2; increase to working speed 3–4',
    'Complete 4–6 passes; the finishing polish will leave minimal residue on wipe; the surface should reflect with extreme clarity',
    'Wipe clean; inspect under raking LED from multiple angles: any remaining hologram pattern; any deep RDS not addressed in earlier stages; any polishing oil haze',
    'If holograms are present from Stage 2: increase DA speed to 5 with the finishing pad for the affected panels',
    'If a deep scratch was not removed in Stages 1 and 2: it will not be removed in Stage 3; document and notify the customer before proceeding to coating',
    'Final surface state target: maximum achievable defect removal; no holograms; no polishing haze; surface reflects with showroom clarity',
  ]);

  c += h2('Between-Stage Quality Gates');
  c += p('A quality gate is a mandatory stop between stages where the current stage\'s result is verified before the next stage begins. Skipping quality gates causes late-stage discovery of problems that require going back multiple stages.');

  c += table(
    ['Gate', 'Position', 'What Is Verified', 'Fail Action'],
    [
      ['Gate 1', 'After Stage 1 completion', 'Defect removal % on each panel; any panel below 80% gets an additional compound pass before proceeding', 'Additional Stage 1 passes on failing panels'],
      ['Gate 2', 'After Stage 2 completion', 'Stage 1 haze removal; no holograms on any panel; defect removal at 90%+', 'Additional Stage 2 passes; if hologram persists — check pad and speed'],
      ['Gate 3', 'After Stage 3 completion; before IPA wipe', 'Maximum achievable clarity; no micro-haze; no polishing oil visible', 'Additional Stage 3 passes; verify pad is not contaminated; check polish dilution'],
      ['Gate 4', 'After IPA wipe; immediately before coating', 'Surface is completely free of oils, dust, and polishing residue; no IPA haze; completely clean surface', 'Re-wipe with fresh IPA and clean cloth; inspect again; do not proceed until confirmed clean'],
    ]
  );

  c += h2('Defect-by-Defect Correction Reference');
  c += table(
    ['Defect Type', 'Depth', 'Stage Required', 'Realistic Removal Expectation'],
    [
      ['Automated wash swirls (fine spider-web pattern)', 'Top of clear coat; <2 microns', 'Stage 2 or Stage 3 only', '95–100% removal'],
      ['Buffer holograms from prior work', 'Top layer of clear coat; ~1–3 microns', 'Stage 2 with adjusted technique (low speed DA; no rotary)', '90–100% removal'],
      ['Random deep scratches (RDS)', 'Mid clear coat; 3–8 microns', 'Stage 1 + Stage 2 + Stage 3', '60–90% removal depending on depth; very deep scratches visible to a fingernail are not fully correctable'],
      ['Surface oxidation (mild)', 'Surface layer of clear coat; <5 microns', 'Stage 2 or Stage 3 depending on severity', '90–100% removal for mild; Stage 1 required for significant oxidation'],
      ['Clear coat orange peel (factory texture)', 'Not a defect — factory standard', 'Wet-sand + polish if customer wants removal; high-cost procedure; typically not corrected for coating prep', 'Reducible but not typically eliminated in standard correction'],
      ['Paint chip (through to primer or metal)', 'Through entire paint stack', 'Not correctable by polishing', 'Touch-up paint; film over top; or accept as limitation — document'],
      ['Etching from bird droppings or acid rain', 'Variable; 1–10 microns into clear coat', 'Stage 1 if light; wet-sand required for deep etching', '50–90% depending on depth; severe etching requires wet-sand; very severe requires repaint'],
    ]
  );

  return c;
}

function ccChCoatingSelectionGuide() {
  let c = '';
  c += p('With hundreds of ceramic coating products on the market and new formulations releasing regularly, selecting the right product for a given application is a critical professional skill. This chapter provides a framework for evaluation, a tier-by-tier comparison of coating characteristics, and the decision factors that drive correct product selection for each customer scenario.');

  c += h2('Coating Evaluation Framework');
  c += p('When evaluating a new coating product for inclusion in the shop\'s service menu, the following criteria should be assessed through both manufacturer data and real-world in-shop testing:');

  c += table(
    ['Criterion', 'What to Test / Verify', 'How to Test'],
    [
      ['Flash time stability', 'Does the flash time vary predictably with temperature and humidity, or is it erratic?', 'Test at 15 °C, 20 °C, 25 °C, and 30 °C; measure time to rainbow appearance at each temperature'],
      ['Leveling ease', 'Does the coating level cleanly without dragging or streaking?', 'Apply to a test panel; level at the correct flash stage; inspect for drag marks and rainbow residue after leveling'],
      ['High spot tolerance', 'What happens if you miss a spot? How obvious is a high spot after cure?', 'Intentionally miss a small area; cure fully; inspect — how visible is the high spot; how difficult to correct'],
      ['Cure window', 'Does the coating reach surface hardness within the promised timeframe?', 'Test pencil hardness at 4, 8, 12, and 24 hours; compare to manufacturer specification'],
      ['Hydrophobic contact angle', 'Does the coating achieve the contact angle specified in the marketing material?', 'Measure contact angle with a drop of water and a reference protractor at 24 hours and 7 days'],
      ['Manufacturer warranty program', 'Does the manufacturer provide installer training, warranty backing, and product lot traceability?', 'Contact the manufacturer directly; request the warranty program documents and installer enrollment process'],
    ]
  );

  c += h2('Coating Tier Definitions — Shop Standard');
  c += p('Define the shop\'s coating tier structure clearly, with specific products assigned to each tier. Consistency of product assignment prevents confusion in communication, warranty administration, and customer expectations.');

  c += table(
    ['Internal Tier Name', 'External Marketing Name', 'Product Specification', 'Layers', 'Shop Warranty', 'Price Positioning'],
    [
      ['Tier 1 — Entry', '"Essential Protection"', 'Professional mid-grade SiO₂; 60%+ solids', '1 layer', '12 months workmanship', 'Accessible; maximum market reach'],
      ['Tier 2 — Standard', '"Professional Shield"', 'High-grade SiO₂; 75%+ solids; 9H', '2 layers', '2 years workmanship', 'Core service; highest volume tier'],
      ['Tier 3 — Premium', '"Elite Ceramic"', 'Top-grade SiO₂ or graphene-enhanced; 85%+ solids; 9H+', '3 layers', '3 years workmanship', 'Premium positioning; enthusiast market'],
      ['Tier 4 — Elite', '"Concours Guard"', 'Top-tier graphene or ultra-premium SiO₂; 90%+ solids; 9H+', '3 layers + top coat', '5 years workmanship', 'Flagship; show vehicle and collector market'],
    ]
  );

  c += h2('Correction Level Required by Tier');
  c += table(
    ['Coating Tier', 'Minimum Correction Requirement', 'Documentation Required'],
    [
      ['Tier 1 — Entry', 'Surface decontamination + IPA wipe; customer accepts paint AS IS', 'Signed customer acknowledgment of paint condition; photos of intake condition'],
      ['Tier 2 — Standard', 'Single-stage machine correction; 80%+ defect removal', 'Pre- and post-correction photos; paint depth records'],
      ['Tier 3 — Premium', 'Two-stage correction; 90%+ defect removal; verified by lead installer', 'Full assessment documentation; paint depth map; stage-by-stage photo set'],
      ['Tier 4 — Elite', 'Full multi-stage correction; 95%+ defect removal; optional wet-sand for orange peel reduction', 'Complete documentation; customer sign-off on each stage; professional lighting inspection photos'],
    ]
  );

  c += h2('Product Storage and Inventory Management');
  c += checklist([
    'Ceramic coating products must be stored at 10–25 °C — freezing crystallizes the SiO₂ suspension; heat above 35 °C causes gelation in some formulas',
    'Store bottles upright; never on their side — some formulas have settling that must not contact the cap seal',
    'Opened bottles have a reduced shelf life — most are 12 months unopened; 3–6 months after first use; record the date opened on the bottle',
    'Never mix product from two opened bottles even of the same SKU — lot numbers may differ; chemistry may be at different stages',
    'Maintain minimum 2 bottles per tier in inventory at all times; do not run to zero before re-ordering',
    'Order from the same supplier batch when possible; if a batch change is necessary, perform a mini flash-time test on a panel before the first job with the new batch',
    'Record lot numbers in a product inventory log along with receipt date and first-open date',
  ]);

  return c;
}

function ccChCoatingPricingBusiness() {
  let c = '';
  c += p('The ceramic coating service category offers among the highest gross margin per hour of any automotive restyling service when priced and sold correctly. This chapter provides the complete pricing framework, bundling strategy, and business model considerations for establishing a profitable coating operation within any shop configuration.');

  c += h2('Fully-Loaded Cost Analysis for Coating Services');
  c += p('Many operators price coating services based only on material cost and a rough time estimate. This consistently leads to underpricing because the true cost of delivering a professional coating includes several categories that are frequently overlooked.');
  c += table(
    ['Cost Category', 'Typical Amount', 'Notes'],
    [
      ['Coating product cost per vehicle', '$25–$150 depending on tier and vehicle size', 'Calculate in cost per ml; measure product used per vehicle for 3 jobs; average for your per-vehicle cost'],
      ['Applicator and leveling cloth cost', '$8–$20 per vehicle', 'Suede blocks at $3–5 each; leveling cloths at $2–4 each; 3–6 cloths per vehicle'],
      ['IPA and prep chemical cost', '$3–$8 per vehicle', 'IPA; distilled water; clay; iron remover portion'],
      ['Labor (coating application only)', '$80–$200 per hour × coating hours', 'Exclude correction time from coating labor — price that separately'],
      ['Bay overhead (coating-specific portion)', '$30–$80 per hour in use', 'Rent; utilities; equipment depreciation allocated to coating bay time'],
      ['Quality control time', '$30–$60 per vehicle', '30–60 minutes of QC inspection at technician rate'],
      ['Warranty administration overhead', '$15–$25 per vehicle', 'Warranty certificate preparation; CRM documentation; annual follow-up cost amortized'],
      ['Marketing and sales cost (per closed job)', '$50–$150 per job', 'Calculated from total marketing spend divided by jobs generated'],
    ]
  );

  c += h2('Pricing by Tier — Detailed Breakdown');
  c += table(
    ['Tier', 'Included Services', 'Material Cost', 'Labor Hours (Application only)', 'Target Retail Price', 'Target Gross Margin %'],
    [
      ['Entry (1 layer; no correction)', 'Wash; decontamination; IPA wipe; single-layer coating', '$30–$60', '2–3 hours', '$400–$650', '55–65%'],
      ['Standard (2 layers; light correction included)', 'Wash; full decon; light machine polish; 2-layer coating', '$60–$120', '5–8 hours', '$900–$1,400', '50–60%'],
      ['Premium (3 layers; 2-stage correction)', 'Wash; full decon; 2-stage machine correction; 3-layer coating; wheel coating', '$100–$180', '8–14 hours', '$1,800–$3,000', '45–55%'],
      ['Elite (3+ layers; full multi-stage correction; all surfaces)', 'Wash; full decon; multi-stage correction; 3-layer paint + glass + wheels + trim coating; top coat', '$150–$250', '14–22 hours', '$3,500–$6,000+', '45–55%'],
    ]
  );

  c += h2('Add-On Pricing — Per Service Item');
  c += table(
    ['Add-On Service', 'Additional Time', 'Material Cost', 'Recommended Add-On Price'],
    [
      ['Glass coating (all windows)', '45–75 minutes', '$10–$25', '$150–$250 added to any package'],
      ['Wheel coating (all 4 wheels, off car)', '60–90 minutes', '$15–$30', '$200–$350 added to any package'],
      ['Brake caliper coating (all 4)', '30–60 minutes', '$10–$20', '$150–$250 added to any package'],
      ['Leather coating (full interior)', '45–90 minutes', '$15–$30', '$200–$350 added to any package'],
      ['Fabric coating (full interior)', '30–60 minutes', '$10–$20', '$150–$250 added to any package'],
      ['Annual maintenance (existing coating)', '90–120 minutes', '$15–$40', '$200–$400 standalone'],
      ['Spray coating add-on (no correction)', '45–60 minutes', '$15–$30', '$150–$250 add-on to any wash/detail'],
    ]
  );

  c += h2('Package Bundling Strategy');
  c += p('Bundles increase average job value and simplify the customer\'s decision. When the customer sees a pre-designed package, the decision shifts from "should I add each item?" to "which level is right for me?" — a much easier decision that consistently results in higher average transaction value.');

  c += procedure('Designing Effective Service Bundles', [
    'Always include at least three bundle tiers — the middle tier is selected most frequently when presented between a high and low anchor',
    'Name bundles by outcome rather than by technical specification: "Complete Protection" vs. "3-Layer SiO₂ with 9H Hardness"',
    'Every bundle includes a clear warranty summary in the marketing material — warranty differentiation is a primary value driver between tiers',
    'Seasonal bundles (spring prep; winter protection) create urgency that standard ongoing packages cannot create',
    'Fleet bundles should be priced per unit with a volume discount at 5+ and 10+ units; negotiate annual commitment for best pricing to the fleet operator',
    'Dealer bundles are priced for F&I markup: the dealer charges the customer 1.5–2× your wholesale price; your wholesale price must still be profitable at that level',
  ]);

  return c;
}

function ccChEnvironmentalSeasonalCoating() {
  let c = '';
  c += p('Ceramic coating application is highly sensitive to environmental conditions. Unlike paint polishing — which tolerates a wider range of temperatures and humidity — the chemical cross-linking reaction in ceramic coatings is precisely affected by temperature, humidity, and even UV exposure during the cure phase. Understanding and managing the environment is not a luxury — it is a technical requirement for consistent professional results.');

  c += h2('Bay Environmental Control Requirements');
  c += table(
    ['Environmental Variable', 'Target Range', 'Effect Below Range', 'Effect Above Range', 'Control Method'],
    [
      ['Ambient temperature', '18–25 °C', 'Cure slows dramatically; risk of incomplete cross-linking within pre-delivery window', 'Flash time shortens to unworkable; high-spot risk increases', 'Programmable HVAC; portable heater (no combustion — fumes affect coating chemistry)'],
      ['Panel surface temperature', '15–27 °C', 'Same as ambient temperature effect; amplified if panel is cooler than air', 'Panel in direct sun can be 20 °C above ambient; much too hot for application', 'Infrared thermometer check before each panel; window tinting film on bay windows to reduce solar gain'],
      ['Relative humidity', '40–65% RH', 'Below 30%: moisture catalyst insufficient; cure may fail to initiate in low-humidity coating formulas', 'Above 70%: flash time becomes unpredictable; streaking risk increases sharply', 'Digital hygrometer monitoring; dehumidifier if above 70%; humidifier if below 30%'],
      ['Air movement (wind / draft)', 'Still air during application; gentle exhaust after', 'No negative effect of very still air on application quality', 'Strong air movement deposits dust into wet coating; causes uneven flash time across the panel', 'Positive pressure filtered supply air; close bay doors during application'],
      ['UV exposure', 'Shade during application; no direct sun on wet coating', 'Minimal negative effect in shade with very low UV', 'Direct sun dramatically accelerates flash time and causes uneven cure', 'Work in closed bay; or tent the vehicle if working outdoors is unavoidable'],
    ]
  );

  c += h2('Seasonal Coating Calendar');

  c += h3('Spring (March–May): Peak Season Management');
  c += p('Spring is the highest-demand season for ceramic coating services. New car protection, post-winter vehicle restoration, and pre-summer show preparation all converge simultaneously. Managing this peak requires proactive scheduling and stock management.');
  c += checklist([
    'Pre-season booking: open spring booking slots in February; notify existing customers first',
    'Product stock: order coating inventory in January for spring delivery — do not risk a stock-out during peak weeks',
    'Staff capacity: if spring demand exceeds capacity, prioritize highest-value jobs and manage a waitlist for others',
    'Marketing: spring-specific messaging about winter salt damage and the importance of protection before summer UV exposure',
    'Temperature verification: spring temperatures can swing 15+ °C in a single day; verify bay temperature at the start of each job regardless of the morning forecast',
  ]);

  c += h3('Summer (June–August): Heat and UV Management');
  c += p('Summer brings the most challenging application conditions: high ambient temperature, intense UV, and increased customer expectations for rapid turnaround.');
  c += checklist([
    'Schedule coating jobs in the morning before the bay heats up; by afternoon, bay temperatures in un-airconditioned shops may exceed the safe application range',
    'A portable air conditioning unit in the coating bay is a quality-critical investment for shops without built-in HVAC — the cost is recovered in avoided re-dos',
    'Cure lamps can be used to accelerate the initial cure in summer, allowing faster vehicle turnover without sacrificing coat quality',
    'Dark-colored vehicle panels in summer may exceed 60 °C in direct sun — allow the vehicle to cool completely before coating (minimum 2 hours in shade)',
  ]);

  c += h3('Fall (September–November): Ideal Conditions and Preparation');
  c += p('Fall offers the most consistently favorable coating conditions: moderate temperatures, low humidity, and minimal UV intensity. This is the best season for multi-layer systems and concours-level work.');
  c += checklist([
    'Leverage fall conditions to schedule the most demanding multi-layer and elite coating jobs',
    'Offer fall protection specials: "protect before winter" messaging is effective for driving demand',
    'Check bay heating system before late fall — a failing heater in October causes quality issues in November',
    'Stock sufficient product for fall demand; order before September',
  ]);

  c += h3('Winter (December–February): Cold Weather Protocol');
  c += p('Winter is the most technically demanding season for coating application due to cold temperatures. If the bay is not temperature-controlled, winter work requires special adaptation.');
  c += checklist([
    'The bay must reach 18 °C before any coating work begins — do not rush this; heating a cold concrete floor takes significantly longer than heating the air',
    'Vehicle panels arriving from outside are typically 5–10 °C below the ambient bay temperature; allow 30 minutes of bay acclimatization time before the IPA wipe',
    'Consider a panel heating protocol using an infrared lamp if the panel cannot reach 15 °C by acclimatization alone',
    'Extended cure windows: at 15 °C, many coatings require 50–100% longer cure time before water contact; adjust the pre-delivery hold time accordingly',
    'Inform customers of the winter cure extension: "We keep the vehicle an additional 2 hours in our heated bay to ensure the coating reaches its full strength before you drive in the winter weather"',
    'Winter is the best season for marketing gift certificates for coating services — enthusiasts and new car owners make ideal gift recipients',
  ]);

  return c;
}

function ccChExtendedDemonstration() {
  let c = '';
  c += p('The ability to educate a customer about ceramic coating — from first inquiry through aftercare — is a primary driver of both conversion and retention. This chapter provides the complete educational script library: what to say at each touchpoint, how to explain the technology to different customer types, how to conduct live demonstrations that create lasting emotional impressions, and how to handle every technical question a customer might ask.');

  c += h2('Customer Type Classification');
  c += table(
    ['Type', 'How to Identify', 'Education Approach', 'Key Trigger'],
    [
      ['The Researcher', 'Comes in with printed screenshots; quotes specific specs; asks about SiO₂ percentages; has read forum posts', 'Match their technical level; use accurate chemistry language; acknowledge their research before adding to it', 'Validate their knowledge: "You\'ve done your homework — that\'s exactly right. Here\'s the detail most people miss..."'],
      ['The Skeptic', 'Challenges claims; asks "how is this different from wax?"; expects exaggeration', 'Lead with what the coating cannot do; honesty disarms skeptics faster than any sales pitch', 'Start with limitations: "Here\'s what coating won\'t do..."'],
      ['The Enthusiast', 'Loves cars; excited; asks about the process; may want to watch the application', 'Share the passion; go deeper on the chemistry and process; offer to observe the application if the shop allows', 'Process detail: "Let me show you what the surface looks like under a detail light before and after prep..."'],
      ['The Value Seeker', 'Primary question is price; compares immediately to cheaper options; asks "is it worth it?"', 'Quantify value in concrete terms; use cost-per-year comparison; connect to resale value', 'The number: "Over 5 years, that\'s $X per year — less than one professional car wash per month — for a vehicle that washes in a fraction of the time."'],
      ['The Delegator', 'Trusts your recommendation; says "just do what you think is best"; not interested in the details', 'Build trust with confidence; keep the explanation concise; make one clear recommendation', 'One clear ask: "Based on your vehicle and how you use it, I\'d recommend our Standard package. Here\'s why..."'],
    ]
  );

  c += h2('Technical FAQ — Complete Response Library');
  c += table(
    ['Customer Question', 'Accurate, Confident Answer'],
    [
      ['"How is this different from wax?"', '"Wax sits on top of the paint and washes off within weeks. Ceramic coating chemically bonds to the clear coat at the molecular level and forms a glass-like layer that lasts years — not weeks. Wax improves gloss temporarily; ceramic coating changes the surface permanently."'],
      ['"Will it prevent scratches?"', '"It won\'t prevent all scratches — if someone keys your car with deliberate force, the coating won\'t stop that. But it significantly increases resistance to light scratches from washing and parking lot contact, and any scratches that do occur are less likely to go through to the bare paint underneath."'],
      ['"How long does it last?"', '"The physical coating layer, once bonded, is essentially permanent in the sense that it has to be polished off rather than washing away. What changes over time is the hydrophobic performance — the water beading effect. In our standard tier, that lasts 3–5 years with correct care; our premium tier maintains it for 5–7 years."'],
      ['"Does it yellow over time?"', '"Modern professional ceramic coatings do not yellow. You may be thinking of older PVC-based protective films, which could yellow. The SiO₂ (glass chemistry) in today\'s coatings is UV-stable by nature — it\'s the same reason glass doesn\'t yellow. Our product carries a manufacturer\'s warranty against color change."'],
      ['"Do I still need to wash my car?"', '"Yes — coating reduces how often you need to wash and how hard you need to work to get it clean, but it doesn\'t eliminate the need for washing. The difference is that what used to take 45 minutes of scrubbing might take 20 minutes of light rinsing. And contamination that used to bond to the paint now sits on the coating surface and rinses off easily."'],
      ['"Can it be applied over paint protection film?"', '"Yes — in fact, we often recommend it. The coating goes on top of the PPF and protects the film\'s top coat, makes the film easier to clean, and amplifies the gloss. We verify compatibility with the specific PPF product first."'],
      ['"My dealer offered the same thing for $300 — why are you $1,400?"', '"Dealer-applied coatings are typically a spray-and-wipe product applied in a few minutes with no paint correction — the protection lasts 6–18 months at best. Our service includes a full machine correction of the paint to remove swirls and scratches, application by a trained technician, and a multi-year warranty. The products are in completely different categories."'],
    ]
  );

  c += h2('Demo Station Setup and Script');
  c += procedure('Demo Station Setup', [
    'Obtain two identical painted steel or aluminum panels (body shop scrap panels are ideal)',
    'Machine correct and IPA wipe both panels to the same standard',
    'Apply 3-layer professional coating to one panel only; leave the other uncoated',
    'Allow full cure (7 days minimum for the most dramatic hydrophobic performance)',
    'Label clearly: "No Protection" and "Professional Ceramic Coating"',
    'Store demo panels flat in the consultation area; replace when genuinely dirty or scratched',
    'Additional demo options: a clay bar demo panel showing contamination removal; a paint depth gauge for customer hands-on use; a magnified panel photo showing the SiO₂ layer under electron microscopy (available from premium product manufacturers)',
  ]);

  c += callout('script', '**Live Demo Script at Consultation:**\n\n"Let me show you something. These two panels came from the same vehicle. Both were machine polished. This one (uncoated) has no protection. This one has three layers of the coating we\'d be applying to your vehicle.\n\n[Apply water mist to both panels]\n\nSee the difference? On the uncoated panel, the water spreads and sits — that\'s your paint on every vehicle without protection. On the coated panel, the water beads up and rolls off — that\'s the hydrophobic effect. When rain hits your vehicle at speed, it just sheets off rather than sitting and depositing minerals.\n\nNow watch this — [apply a small amount of dirt or cooking oil to both]\n\nOn the uncoated surface, this contamination bonds immediately. On the coated surface, I can rinse this with plain water and it releases — [rinse the coated panel]\n\nThis is exactly what you\'ll experience every time you wash your vehicle after we apply the coating. Does that make sense?"');

  return c;
}

// ─────────────────────────────────────────────────────────────────────────────
// ADDITIONAL CERAMIC COATING CHAPTERS
// ─────────────────────────────────────────────────────────────────────────────

function ccChGrapheneCoatings() {
  let c = '';
  c += p('Graphene-based coatings represent the most significant evolution in ceramic coating chemistry in recent years. Understanding how graphene differs from SiO₂ — and where each excels — allows the professional to recommend the right technology for each customer situation rather than defaulting to one product for all applications.');

  c += h2('Graphene Chemistry — How It Differs from SiO₂');
  c += table(
    ['Property', 'SiO₂ Ceramic Coating', 'Graphene-Enhanced Coating'],
    [
      ['Primary material', 'Silicon dioxide (amorphous glass)', 'Graphene oxide (single-atom carbon lattice)'],
      ['Hardness', '7–9H pencil scale', '9–10H; graphene lattice is inherently stiffer than glass-chain SiO₂'],
      ['Heat dissipation', 'SiO₂ is an insulator — heat builds on the surface', 'Graphene is an excellent thermal conductor — dissipates heat across the surface; dramatically reduces water spotting from heat in direct sun'],
      ['Hydrophobics', 'Excellent (90–120° contact angle)', 'Excellent (similar to high-end SiO₂); graphene-enhanced products maintain hydrophobics longer under UV exposure'],
      ['UV resistance', 'Good — SiO₂ UV stability is well-documented', 'Excellent — graphene lattice absorbs and dissipates UV energy efficiently'],
      ['Flexibility', 'Moderate — SiO₂ matrix can micro-crack on flexible panels', 'Higher flexibility — graphene lattice is mechanically flexible; better for plastic and flexible trim panels'],
      ['Application', 'Similar to SiO₂ — similar flash and leveling requirements', 'Slightly longer working time in most formulas; forgiving for high-heat environments'],
      ['Price premium', 'Baseline', 'Typically 20–40% higher material cost; justifiable for hot climates or high-UV regions'],
    ]
  );

  c += h2('When to Recommend Graphene vs. SiO₂');
  c += table(
    ['Scenario', 'Recommended Technology', 'Reason'],
    [
      ['Vehicle stored in a hot, sunny climate (Arizona, Florida, etc.)', 'Graphene', 'Superior heat dissipation reduces the #1 cause of water spot etching — hot surface + minerals from rinse water'],
      ['Enthusiast vehicle in temperate climate, primarily garaged', 'Premium SiO₂', 'Temperature dissipation advantage is less relevant; SiO₂ performs equivalently for this use case'],
      ['Dark-colored vehicle parked outdoors', 'Graphene', 'Dark paint absorbs significantly more heat; graphene dissipation is most beneficial'],
      ['Light-colored vehicle with frequent washing', 'Either — SiO₂ is cost-effective', 'Light colors absorb less heat; water spots are less likely; SiO₂ advantage sufficient'],
      ['Flexible exterior plastic components (spoilers, bumper covers)', 'Graphene', 'Better flexibility reduces micro-cracking on components that flex during driving'],
      ['Customer on a tight budget', 'Mid-tier SiO₂', 'Graphene premium is not justified without commensurate climate or use-case benefit'],
    ]
  );

  c += h2('Application Differences — Graphene vs. Standard SiO₂');
  c += p('Graphene coatings are applied with identical methods to SiO₂ coatings — same cross-hatch technique, same suede applicator, same leveling cloth approach. The key practical differences are:');

  c += checklist([
    'Flash time is typically 10–30 seconds longer than equivalent SiO₂ products — beneficial in hot environments, requires patience in cool conditions',
    'Graphene coatings flash darker (deeper visual rainbow before leveling) — do not confuse this for over-application; level at the same rainbow stage as SiO₂',
    'Leveling pressure should be slightly lighter than with SiO₂ — graphene matrix is higher viscosity and responds to lighter touch',
    'Cure time is comparable to SiO₂ — same pre-delivery cure windows apply',
    'High-spot correction follows the same protocol — IPA while fresh; light machine polish if cured',
  ]);

  return c;
}

function ccChPPFCoatingCombination() {
  let c = '';
  c += p('Paint Protection Film (PPF) and ceramic coating are complementary technologies that are increasingly sold and installed together. The combination provides the most comprehensive surface protection available: PPF absorbs and self-heals physical impacts; the ceramic coating on top of the PPF makes it easier to clean, amplifies gloss, and protects the film\'s top coat from degradation.');

  c += h2('The PPF + Coating Rationale');
  c += table(
    ['Protection Layer', 'What It Protects Against', 'What It Does Not Protect Against'],
    [
      ['PPF alone', 'Rock chips, scratches, minor abrasion, UV through the film\'s clear coat', 'Chemical fallout bonding; water spot etching on the film\'s surface; reduced gloss over time'],
      ['Ceramic coating alone', 'Chemical bonding; UV degradation; water spot etching; general surface contamination', 'Rock chips; deep scratches through the coating; significant abrasion'],
      ['PPF + Ceramic coating', 'All of the above combined', 'Extreme mechanical force (severe collision damage); clear coat failure from prior damage'],
    ]
  );

  c += h2('Application Sequence for Combined Installs');
  c += procedure('PPF + Ceramic Coating Combined Install Sequence', [
    '**Stage 1 — Paint Correction:** Complete all correction before any film or coating is applied; the paint surface must be at the target standard before the PPF is laid',
    '**Stage 2 — PPF Installation:** Install PPF to the agreed panel scope; use standard installation practices; allow PPF adhesive to fully cure (minimum 72 hours)',
    '**Stage 3 — PPF Surface Decontamination:** Wash the vehicle; remove any installation slip solution residue from the PPF surface; clay bar the PPF surface lightly using a polymer clay specifically rated for PPF',
    '**Stage 4 — PPF IPA Wipe:** Wipe the PPF surface with 70% IPA; this activates the top coat for ceramic bonding — PPF top coats have been formulated to accept ceramic coatings',
    '**Stage 5 — Ceramic Coating Application on PPF:** Apply ceramic coating to the PPF surface using the same cross-hatch technique; flash times may differ on PPF vs. paint — monitor carefully',
    '**Stage 6 — Ceramic Coating on Non-PPF Panels:** Apply coating to all panels not covered by PPF; level per standard protocol',
    '**Stage 7 — Cure:** Full vehicle cure per standard protocol; PPF panels require the same cure time as paint panels',
  ]);

  c += h2('Product Compatibility');
  c += callout('warning', 'Not all ceramic coatings are compatible with all PPF top coats. Verify compatibility with the specific PPF product line before applying. Some older or economy PPF films have top coats that do not bond well with SiO₂ coatings. The PPF manufacturer\'s approved coating list should always be consulted.');

  c += table(
    ['PPF Top Coat Type', 'Ceramic Coating Compatibility', 'Notes'],
    [
      ['Matte finish PPF', 'Only matte-specific ceramic top coat', 'Standard SiO₂ coating on matte film creates glossy areas that the customer did not want'],
      ['Gloss finish PPF with activated top coat', 'Most professional SiO₂ and graphene coatings', 'Verify with the PPF manufacturer — most modern premium films explicitly support ceramic coating'],
      ['Self-healing PPF with hydrophobic factory top coat', 'Verify compatibility — may not bond permanently', 'The factory hydrophobic top coat may prevent the SiO₂ chemistry from bonding; light scuff or dedicated primer may be required'],
    ]
  );

  c += h2('Pricing a Combined PPF + Coating Package');
  c += p('The combination package commands a meaningful premium over each service alone — the protection value is multiplicative, not just additive. Pricing should reflect the elevated outcome, not merely the sum of the two services.');

  c += table(
    ['Package Scope', 'Base Pricing Approach', 'Premium Justification'],
    [
      ['PPF partial front + coating on all panels', 'PPF price + coating price + 15% combined package surcharge', 'Single mobilization; enhanced workflow efficiency for the shop; maximum protection for the customer'],
      ['PPF full vehicle + coating on PPF', 'PPF price + reduced coating price (smaller scope) + package surcharge', 'Coating on PPF is faster to apply than on bare paint; adjust accordingly'],
      ['PPF high-impact zones + correction + coating', 'Sum of all three services + complexity premium', 'Multi-day job; significant skill and material cost; premium positioning is justified'],
    ]
  );

  return c;
}

function ccChSprayCoatings() {
  let c = '';
  c += p('Spray ceramic coatings and maintenance spray products occupy a distinct segment of the coating market. They are not a replacement for professional-grade permanent coatings — but they are legitimate tools in the service menu, particularly as maintenance products for existing coated vehicles and as an accessible entry point that brings new clients into the shop.');

  c += h2('Spray Coating Categories');
  c += table(
    ['Category', 'Durability', 'SiO₂ Content', 'Application Method', 'Best Use Case'],
    [
      ['Professional spray coating (in-shop application)', '6–18 months', '10–30%', 'Spray onto panel; spread with applicator pad; level with microfiber', 'Add-on service; fleet applications; in-shop speed applications'],
      ['Maintenance spray booster', '2–4 months', '5–15%', 'Spray onto clean, damp panel after wash; spread; buff dry', 'Maintenance service for existing ceramic-coated vehicles; client-applied between professional services'],
      ['Consumer spray coating (sold retail)', '2–6 months', '3–10%', 'Spray; wipe; buff', 'Not a professional service offering; can be sold retail with education'],
      ['SiO₂ spray detailer', '4–8 weeks', '< 5%', 'Spray onto panel; wipe dry with microfiber', 'Drying aid at wash; adds modest hydrophobics; refreshes existing coating between services'],
    ]
  );

  c += h2('In-Shop Spray Coating as an Add-On Service');
  c += p('A spray ceramic application performed in-shop as a standalone service represents an excellent low-investment add-on to any detailing or wash service. The time investment is minimal, the material cost is low, and the customer perceives genuine value in the hydrophobic properties demonstrated at delivery.');

  c += procedure('In-Shop Spray Coating Application', [
    'Complete the full wash and decontamination sequence — spray coating is only as good as the surface it is applied to',
    'Dry the vehicle with a microfiber drying towel; ensure no water spots remain',
    'Spray the product onto a clean applicator pad or directly onto a panel at manufacturer-specified distance',
    'Spread with the applicator pad in overlapping circular or linear strokes; work panel by panel',
    'Allow flash time per product instructions (typically 30–60 seconds)',
    'Buff with a short-pile microfiber leveling towel; rotate to a clean side every panel',
    'Inspect each panel under a detail light — no streaks or missed areas',
    'Demonstrate hydrophobic performance to the customer with a light water mist at delivery',
  ]);

  c += h2('Customer Education on Spray vs. Permanent Coating');
  c += callout('script', '"This spray coating service gives your vehicle a genuine hydrophobic surface that makes washing easier and adds UV protection — you\'ll notice the water beading right away. It typically lasts 4–6 months depending on how often the vehicle is washed and where it\'s parked.\n\nIf you\'re interested in something that lasts 3–7 years without annual reapplication, our [permanent coating tier] is the step up. Many of our customers start with a spray application and then upgrade once they see the difference it makes day to day. Does that sound like something you\'d want to learn more about?"');

  return c;
}

function ccChSpecialtyVehicles() {
  let c = '';
  c += p('Ceramic coating extends beyond passenger cars to motorcycles, boats, trailers, aircraft components, and commercial equipment. Each substrate type presents unique prep, application, and curing considerations. This chapter covers the most commonly requested specialty vehicle applications.');

  c += h2('Motorcycles');
  c += table(
    ['Surface', 'Coating Approach', 'Special Considerations'],
    [
      ['Painted fairings', 'Standard paint coating protocol; same as automotive clear coat', 'Small panel size; use minimal product per applicator section'],
      ['Chrome', 'Dedicated chrome-safe coating or high-solids SiO₂', 'Standard SiO₂ may not bond to chrome long-term without primer; use chrome-specific or test adhesion first'],
      ['Matte tank / fairings', 'Matte-specific coating only', 'Standard SiO₂ will gloss out matte — never apply to matte without matte-rated product'],
      ['Engine cases and headers (aluminum)', 'High-temp ceramic coating rated for engine temperatures', 'Standard automotive coatings will fail at engine temperatures; purpose-built high-temp product required'],
      ['Wheels (spoked or cast)', 'Wheel coating as per standard protocol', 'Spoked wheels require individual spoke treatment — time-consuming but high-value for maintenance reduction'],
    ]
  );

  c += h2('Marine / Boat Gelcoat');
  c += p('Boat gelcoat is a glass fiber composite surface that differs from automotive paint in chemistry, porosity, and UV exposure intensity. Marine ceramic coatings must be formulated for or at least rated for the sustained UV, salt water, and chemical exposure of the marine environment.');

  c += procedure('Marine Coating Application Protocol', [
    'Wash the gelcoat with a marine-specific cleaner; remove algae, barnacle deposits, and salt residue',
    'Oxidized gelcoat must be machine-polished before coating — unpolished gelcoat is porous and cannot form a smooth coating layer',
    'Clay bar the gelcoat surface after polishing to remove any remaining contamination',
    'IPA wipe per standard protocol',
    'Apply a marine-rated ceramic coating; standard automotive coatings may not withstand prolonged salt water exposure',
    'Above-waterline application only — never coat below the waterline (requires anti-fouling paint, not ceramic)',
    'Allow to cure in a dry, sheltered environment — salt air during cure can cause surface irregularities',
    'Advise the customer that marine coatings typically have shorter service lives than automotive (12–24 months) due to the extreme environment; annual re-application is typically required',
  ]);

  c += h2('Aircraft (Exterior Surfaces)');
  c += p('Aircraft exterior ceramic coating is an emerging application. The benefits — easier cleaning, UV protection, and contamination resistance — are significant for operators who need to keep aircraft clean for regulatory and performance reasons. This application requires specific regulatory awareness.');

  c += callout('warning', 'Aircraft exterior coatings may be subject to aviation regulatory requirements in some jurisdictions. Always verify with the aircraft owner and their maintenance organization that the coating product is approved for use on the specific aircraft\'s exterior surfaces and does not affect any aerodynamic certification. This is a strict regulatory area — never assume approval without written confirmation.');

  c += checklist([
    'Only use coating products that the aircraft owner\'s maintenance organization has verified are compatible with the aircraft\'s exterior paint and certification',
    'Aluminum skin surfaces require a different adhesion approach than automotive clear coat — verify product compatibility',
    'Avoid coating over any navigation lights, sensors, pitot tubes, or regulatory markings',
    'Document every product applied to the aircraft in writing — aircraft maintenance records require documentation of any substance applied to the exterior',
    'Price this work at a significant premium relative to automotive — the liability exposure and regulatory requirements justify it',
  ]);

  return c;
}

function ccChCustomerDemonstration() {
  let c = '';
  c += p('A live demonstration is the most powerful sales tool available to the ceramic coating professional. Seeing water bead and roll off a coated surface, watching a cleaning cloth glide effortlessly across the slick surface, and hearing a clear explanation of what is happening and why creates a lasting emotional impression that no brochure or video can match. This chapter provides structured demonstration techniques for the consultation, delivery, and follow-up stages.');

  c += h2('The Demo Panel — Setup and Use');
  c += p('Every shop should maintain a set of demo panels — typically half-panel sections of painted steel or aluminum — that are partially coated to create a side-by-side comparison of coated vs. uncoated surfaces on the same panel.');

  c += procedure('Demo Panel Setup', [
    'Obtain a painted half-panel or create one from a body shop scrap panel; sand and paint if needed',
    'Machine correct and prepare the full panel surface to the same standard as a paid job',
    'Apply ceramic coating to exactly half the panel; mask the other half with painter\'s tape before coating',
    'Remove the tape after coating cures; the uncoated half should be clearly distinct from the coated half',
    'Label the two halves: "Uncoated" and "Ceramic Coated"',
    'Use during consultations: apply a water mist across both halves; the difference in water behavior is immediately dramatic and requires no explanation',
    'Also demonstrate soil-shedding: apply a small amount of dirt or cooking oil to both halves; show that the coated side releases with a single water rinse while the uncoated side requires scrubbing',
    'Replace demo panels when they become genuinely dirty — a dirty demo panel undermines the message',
  ]);

  c += h2('Live Demonstrations at Different Customer Touchpoints');
  c += table(
    ['Touchpoint', 'Demonstration', 'Purpose'],
    [
      ['First consultation', 'Water mist on demo panel; hydrophobic explanation', 'Build emotional engagement; help customer visualize the benefit'],
      ['During correction (if customer visits)', 'Show paint depth gauge reading before and after; compare defect panel under raking light', 'Build trust in the correction process; justify the correction scope'],
      ['At delivery', 'Water mist on the customer\'s own coated vehicle; gloss comparison to an uncoated area if possible', 'The most impactful moment — it\'s their vehicle; make it memorable'],
      ['Annual maintenance visit', 'Water contact angle test on the existing coating; demonstrate if the hydrophobics have degraded', 'Reinforces the need for maintenance; creates the opportunity to apply a booster layer'],
    ]
  );

  c += h2('Explaining Coatings to Non-Technical Customers');
  c += p('Many customers are not technically inclined. The explanation of why ceramic coating works must be relatable and clear without being condescending.');

  c += callout('script', '"Think of your car\'s paint like a piece of natural wood — porous, with tiny valleys and high points that contamination gets into. What we do is fill in all those valleys with a liquid glass layer that hardens on the surface. Once it\'s there, dirt, water, and chemicals can\'t get into the paint — they can only touch the glass surface. Glass is much easier to clean than wood, which is why coated cars stay cleaner longer and wash much more easily.\n\nThe hydrophobic effect — that water beading you saw on the demo panel — happens because water molecules are repelled by the smooth, low-surface-energy glass coating. They can\'t spread out, so they roll up into a ball and roll off, taking dirt with them."');

  return c;
}

function ccChBusinessDevelopment() {
  let c = '';
  c += p('The ceramic coating market is a premium-positioned service with significant growth potential, but it is also increasingly competitive as more installers enter the market. Building a sustainable coating business requires more than technical skill — it requires intentional positioning, structured service delivery, and a clear client experience that justifies the investment.');

  c += h2('Market Positioning for Coating Services');
  c += table(
    ['Position', 'Target Customer', 'Price Point', 'Marketing Focus'],
    [
      ['Volume / value tier', 'Budget-conscious consumers; daily drivers', 'Entry-level; spray coating; single-stage economy SiO₂', 'Accessibility; ease; basic protection'],
      ['Professional mid-tier', 'Car owners who care about their vehicle; most of the market', 'Mid-range; 2-layer professional SiO₂; correction included', 'Quality; professional results; warranty; portfolio'],
      ['Elite / concours tier', 'Collectors; enthusiasts; exotic vehicle owners', 'Premium; multi-layer graphene or elite SiO₂; full correction', 'Exclusivity; result; experience; warranty backing; brand credibility'],
    ]
  );

  c += h2('Building a Dealer Network for Ceramic Coating');
  c += p('Dealerships are a high-volume lead source for ceramic coating. New vehicle buyers are the ideal coating customer: high car-care motivation, emotional investment in the vehicle, and a purchase decision context that makes add-on protection feel natural.');

  c += procedure('Dealer Partnership — Coating Service Integration', [
    'Approach the F&I Manager: coating services are most naturally positioned as an F&I product in the finance office',
    'Provide a tiered menu with clear customer-facing benefit language; make it easy for the F&I team to present without technical knowledge',
    'Offer a demo car at the dealership: a coated vehicle in the showroom that customers can see and touch is the most effective selling tool',
    'Train the F&I team: a 30-minute in-dealership session on what the coating does, how to answer common objections, and what the warranty covers',
    'Provide a co-branded warranty certificate so the customer associates the coating with both the dealership and the shop — dual credibility',
    'Set up a seamless vehicle dispatch: dealer calls; shop picks up or the customer drops off within 24 hours of vehicle delivery',
    'Review the partnership monthly: share volume data and customer satisfaction feedback; treat the dealer as a business partner, not just a referral source',
  ]);

  c += h2('Coating Service Revenue Model');
  c += table(
    ['Service', 'Material Cost', 'Labor Hours', 'Target Retail Price', 'Gross Margin'],
    [
      ['Spray coating add-on (in-shop)', 'Low', '0.5–1 hour', '$150–$250', '75–85%'],
      ['Single-layer SiO₂ (after correction)', 'Moderate', '2–4 hours', '$600–$900', '55–65%'],
      ['Two-layer SiO₂ (with correction)', 'Moderate-high', '4–8 hours', '$1,000–$1,800', '50–60%'],
      ['Three-layer premium (full correction + multi-layer)', 'High', '8–16 hours', '$2,000–$4,500', '45–55%'],
      ['Annual maintenance (existing coated vehicle)', 'Low', '1–2 hours', '$200–$400', '70–80%'],
    ]
  );

  c += h2('Building a Coating Portfolio');
  c += p('The coating portfolio is the primary conversion tool for high-value coating sales. A prospective customer who can see documented results on vehicles similar to their own is already partially sold before the consultation begins.');

  c += checklist([
    'Photograph every completed coating job: before/after in matching lighting and angle',
    'Organize the portfolio by vehicle type and service tier — show relevant work to relevant prospects',
    'Include paint depth measurements and correction level documentation in the portfolio for technically-minded customers (overlay the gauge reading on the photo)',
    'Get testimonial quotes from satisfied coating customers — written permission required for use',
    'Post at least two coating results per week on social media — coating hydrophobic videos are among the highest-performing content in this market',
    'Build a Google review request workflow specifically for coating customers — the "wow" factor at delivery makes coating customers among the most likely to leave spontaneous positive reviews',
  ]);

  return c;
}

function ccChPanelByPanelReference() {
  let c = '';
  c += p('Ceramic coating application is not uniform across every panel on a vehicle. Flash time, product quantity, leveling approach, and the specific quality checks required vary by panel geometry, surface area, and orientation (horizontal vs. vertical). This chapter provides a panel-by-panel reference for professional coating application — the definitive guide for both new technicians building their process and experienced professionals verifying their technique against the established standard.');

  c += h2('Horizontal Panels (Hood, Roof, Trunk Lid)');
  c += p('Horizontal panels are the highest-exposure surfaces on any vehicle — they receive direct overhead UV, rain, bird droppings, and tree sap. They are also the easiest panels to coat well because gravity assists even product distribution and flash time is more consistent than on vertical surfaces.');

  c += table(
    ['Panel', 'Product Quantity (drops)', 'Section Size', 'Flash Time Reference (20 °C)', 'Special Notes'],
    [
      ['Hood — full', '6 drops per 60 cm × 60 cm section', '60 × 60 cm', '45–75 seconds', 'Work from windshield edge to front edge; finish each section before moving; at front edge — apply product slightly heavier to prevent dry edge'],
      ['Roof — full', '6 drops per 60 cm × 60 cm', '60 × 60 cm', '45–75 seconds', 'Most challenging horizontal panel — work center-line first; work in stripes side to side; sunroof glass is a different substrate — use glass coating or verify compatibility'],
      ['Trunk lid / decklid', '4–5 drops per section', '60 × 60 cm', '45–70 seconds', 'Rear spoiler base is often missed — coat this area with a small applicator before the main panel work; trunks have more vertical surfaces than hoods'],
    ]
  );

  c += h2('Vertical Panels (Doors, Fenders, Quarter Panels)');
  c += p('Vertical panels introduce gravity as a challenge — excess product can run or sag before leveling. The product quantity must be precisely controlled and the section size reduced to maintain quality.');

  c += table(
    ['Panel', 'Product Quantity', 'Section Size', 'Flash Time Reference', 'Special Notes'],
    [
      ['Front fender', '4–5 drops per section', '50 × 50 cm', '30–60 seconds (faster — vertical)', 'Work top to bottom; the wheel arch area is high-UV exposure — ensure full coverage into the arch curve'],
      ['Door (full)', '4–5 drops per section', '40 × 50 cm', '30–55 seconds', 'Character line is a common missed area — work applicator gently into the line; door handles — coat the door face then coat the handle separately with a small applicator'],
      ['Quarter panel', '4–5 drops per section', '40 × 50 cm', '30–55 seconds', 'This is the lowest panel on most vehicles — most contamination exposure; apply thoroughly and verify leveling in the lower sections'],
      ['Rear quarter panel', '4–5 drops per section', '40 × 50 cm', '30–55 seconds', 'Wheel arch exposure is very high here; ensure the inner wheel arch lip is coated if accessible'],
    ]
  );

  c += h2('Bumpers (Curved and Compound Geometry)');
  c += p('Bumpers combine multiple geometry types and are the highest-difficulty panels for coating. They require the smallest working sections and the most active flash time monitoring.');

  c += table(
    ['Bumper Area', 'Section Size', 'Application Method', 'Leveling Challenge'],
    [
      ['Upper bumper face', '30 × 30 cm', 'Standard cross-hatch; work from center to corners', 'Flash time is variable across the surface; monitor each section individually'],
      ['Bumper corner (compound curve)', '20 × 20 cm maximum', 'Work into the curve with the suede applicator held flat against the curvature; rotate to maintain full face contact', 'The inside of the corner curve is the most common missed section — inspect with a raking light'],
      ['Fog light recesses', 'Per recess — very small', 'Fold the applicator to a small working face; apply to the recess sides and back', 'Recess areas flash faster due to lower air circulation; level quickly'],
      ['Lower grille surround (if coated)', 'Per section of the surround face', 'Standard; keep product off the grille insert itself', 'The chamfered edge of the grille surround is easy to miss — wipe along the edge with a fresh applicator face'],
      ['Lower valance', '30 × 30 cm', 'Standard; but this area may have a textured surface — use trim coating if textured plastic', 'Textured plastic has faster flash time than smooth paint — watch carefully'],
    ]
  );

  c += h2('Glass Surfaces');
  c += table(
    ['Glass Surface', 'Product Type', 'Section Size', 'Application Technique', 'QC Check'],
    [
      ['Windshield (front)', 'Dedicated glass coating', 'Half windshield at a time', 'Apply in overlapping horizontal stripes; level before advancing; apply a second perpendicular coat', 'Inspect through the glass from the inside for optical distortion; check wiper park area'],
      ['Rear windshield', 'Dedicated glass coating', 'Full panel or half', 'Same as front windshield; be careful around rear wiper if present — remove or mask the wiper arm', 'Check for distortion through the glass and from the exterior'],
      ['Side windows', 'Dedicated glass coating', 'Full window at once', 'Apply; level; repeat for each window', 'Do not get glass coating on rubber seals or paint; mask if necessary'],
      ['Sunroof / moonroof glass', 'Dedicated glass coating', 'Full panel', 'Open the sunroof fully for access; coat both the glass and the surrounding seal area lightly', 'Close sunroof gently after application; check seal area for product buildup'],
    ]
  );

  c += h2('Small Parts and Accessories');
  c += table(
    ['Part', 'Treatment', 'Technique Notes'],
    [
      ['Side mirrors (painted caps)', 'Standard paint coating', 'Small applicator; work the curved surfaces with care; very small section size'],
      ['Antenna base', 'Standard paint coating; avoid the antenna element itself', 'Mask the antenna before coating the surrounding area'],
      ['Door handle inserts (painted)', 'Standard paint coating', 'Apply coating to a folded applicator; wipe into the handle face; level carefully — handle area has fast flash time'],
      ['Exterior emblems (gloss)', 'Standard paint coating applied over and around', 'Apply to the paint surrounding the emblem; also apply to the emblem face if it is chrome or painted; avoid getting coating in the emblem mounting gap'],
      ['Wiper arms (if painted)', 'Standard paint coating', 'Lift the wiper arm; coat the arm face; lower carefully; ensure the wiper blade rubber is not coated — rubber is incompatible with SiO₂ coating chemistry'],
      ['Running boards / side steps (if painted)', 'Standard paint coating or step-rated coating if surface is textured', 'Work in sections; step surfaces have faster flash time due to textured surface area'],
    ]
  );

  c += h2('Order of Operations — Full Vehicle Coating Sequence');
  c += procedure('Recommended Full Vehicle Coating Order', [
    'Coat glass surfaces first (all windows including windshield) — glass coating products may differ from paint coating; avoid any spray-onto-paint risk',
    'Coat wheels (if wheel coating is part of the service) — do all four wheels before touching the paint',
    'Coat horizontal paint panels: roof → hood → trunk lid',
    'Coat the front bumper (most complex; highest attention required; coat while the applicator and technique are freshest)',
    'Coat door panels: start with all doors on the driver side; then passenger side',
    'Coat front fenders: driver then passenger',
    'Coat rear quarter panels: driver then passenger',
    'Coat rear bumper last — a less complex panel but very high contamination exposure area',
    'Coat small parts and accessories as a final pass',
    'Inspect the full vehicle under raking LED light; address any high spots or missed areas immediately',
  ]);

  return c;
}

function ccChCoatingOnSpecialtySubstrates() {
  let c = '';
  c += p('Ceramic coating application extends beyond clear-coated automotive paint to encompass exterior plastics, unpainted trim, powder-coated wheels, rubber, and metal surfaces. Each substrate type presents specific bonding, compatibility, and durability considerations. Applying a coating designed for clear coat paint to an incompatible substrate produces either poor durability or complete adhesion failure.');

  c += h2('Substrate-by-Substrate Coating Reference');

  c += h3('Exterior Unpainted Trim (Black Plastic)');
  c += p('Unpainted black exterior trim is one of the most difficult substrates to coat effectively. The polypropylene and ABS plastics commonly used in exterior trim have low surface energy — meaning adhesive bonds form weakly on their surfaces without chemical pretreatment.');
  c += table(
    ['Preparation Step', 'Purpose', 'Product Type'],
    [
      ['Clean with trim-specific cleaner', 'Remove surface oils, silicone, and UV plasticizer residue', 'pH-neutral trim cleaner; not APC — APC residue interferes with bonding'],
      ['Light sanding with 2000-grit (optional for severely degraded trim)', 'Create mechanical anchor points for coating adhesion', 'Dry-sand; wipe clean; IPA wipe immediately after'],
      ['Adhesion promoter application', 'Chemically activates the plastic surface for coating bonding', 'Trim-specific adhesion primer; allow to cure per product instructions before coating'],
      ['Apply trim-specific ceramic coating', 'UV protection and contamination resistance', 'Never use paint ceramic coating on plastic trim — the product requires a different substrate chemistry'],
    ]
  );
  c += callout('warning', 'Applying paint-grade ceramic coating to unpainted plastic trim produces UV-activated hazing or complete adhesion failure within 3–6 months in most climates. Always verify the product is rated for plastic substrates before application.');

  c += h3('Powder-Coated Wheels');
  c += p('Powder-coated wheels are the most common aftermarket wheel finish and accept ceramic coating readily when properly prepared. The powder coat surface is relatively porous compared to clear coat paint — the coating penetrates this micro-porosity and forms a stronger mechanical bond than on smooth paint.');
  c += checklist([
    'Degrease with a powder-coat-safe cleaner — avoid solvent-based cleaners on fresh powder coat (under 30 days)',
    'Light scuff with 2500-grit wet/dry sandpaper on the face if the powder coat has any surface contamination or bloom — rinse; dry; IPA wipe',
    'Apply wheel-rated ceramic coating with a suede applicator; small sections per spoke facet; level before moving to the next spoke',
    'Cure time on powder coat: 24 hours before water contact; 7 days for full chemical resistance development',
    'Powder coat ceramic coating typically lasts 12–24 months vs. 3–5 years on clear coat paint — inform the customer and schedule re-application accordingly',
  ]);

  c += h3('Chrome and Polished Metal');
  c += p('Chrome surfaces present a bonding challenge because the chrome layer is extremely smooth and non-reactive to standard SiO₂ ceramic chemistry. Standard coatings applied to unprimed chrome surfaces may peel within weeks.');
  c += table(
    ['Approach', 'Preparation Required', 'Expected Durability'],
    [
      ['Dedicated chrome ceramic coating (chrome-rated product)', 'IPA wipe; apply chrome-specific coating per product instructions', '12–18 months; adequate for most applications'],
      ['Adhesion primer + standard coating', 'IPA wipe; apply adhesion primer rated for chrome; cure; apply standard coating', '18–24 months; better durability than unprimed'], 
      ['No coating (discourage for high-maintenance chrome)', 'N/A', 'No protection — chrome requires frequent polishing to maintain appearance'],
    ]
  );

  c += h3('Convertible Soft Tops (Fabric)');
  c += p('Convertible soft top fabric is a specialized coating substrate. The fabric requires a penetrating coating that soaks into the textile weave and provides both hydrophobic and UV protection. Standard ceramic paint coating is completely unsuitable.');
  c += checklist([
    'Thoroughly clean the top with a convertible-specific fabric cleaner and a soft brush — remove all contamination, tree sap, and bird droppings',
    'Allow to dry completely — convertible tops are thick and retain moisture; use a compressed air blow-out and allow 2+ hours of air drying',
    'Apply a fabric-specific ceramic coating in a fine mist; two coats with 15 minutes between; do not over-saturate',
    'Cure time: 60 minutes before any water contact; 24 hours before using the top in rain',
    'Annual re-application is typically required; maintain the service as part of a soft-top maintenance program',
  ]);

  c += h2('Application Tool Selection by Substrate');
  c += table(
    ['Substrate', 'Recommended Applicator', 'Recommended Leveling Cloth', 'Key Technique Note'],
    [
      ['Clear coat paint (standard)', 'Suede block', 'Short-pile microfiber 300–400 GSM', 'Cross-hatch application; standard flash time monitoring'],
      ['PPF top coat', 'Suede block', 'Short-pile microfiber', 'Flash time is shorter on PPF than on paint; monitor closely'],
      ['Powder coat wheel', 'Small suede applicator or folded suede', 'Small detail cloth per section', 'Work spoke by spoke; barrel last; allow more time for even leveling'],
      ['Unpainted black trim', 'Small foam applicator (not suede)', 'Clean lint-free cloth', 'Very thin application — trim coating absorbs and shows less visual feedback than paint'],
      ['Glass', 'Flat suede or glass-specific applicator', 'Glass-specific lint-free cloth', 'Harder to see flash on glass; use transmitted light to verify coverage'],
      ['Leather', 'Foam applicator', 'Soft microfiber buffing cloth', 'Light touch; work grain direction; never saturate perforated leather'],
    ]
  );

  return c;
}

function ccChProfessionalCoatingTools() {
  let c = '';
  c += p('Professional ceramic coating application demands a level of tool quality, organization, and discipline that goes beyond what most detail supply catalogs describe. This chapter provides a complete professional tool reference — what you need, why you need it, and how to maintain it. A coating application tool set that is poorly maintained or incorrectly organized produces inconsistent results regardless of product quality or installer skill.');

  c += h2('Core Coating Tool Set — Complete Inventory');
  c += table(
    ['Tool', 'Quantity', 'Specification', 'Replacement Interval'],
    [
      ['Suede applicator block', '2 per vehicle (never reuse)', 'Dense suede face; firm foam core; minimum 8 cm × 5 cm face', 'Dispose after each vehicle — never reuse between jobs'],
      ['Leveling microfiber towel (short-pile)', '4–6 per vehicle', '300–400 GSM; short pile (< 5 mm); edgeless preferred', 'Wash after each use; retire after 20 machine washes or when fibers become uneven'],
      ['Waffle-weave final inspection cloth', '2 per vehicle', '400 GSM; waffle texture', 'Wash after each use; separate from leveling cloths to prevent cross-contamination'],
      ['Infrared thermometer', '1 (permanent)', 'Distance: spot ratio 8:1 or better; range 0–150 °C; 0.5 °C accuracy', 'Calibrate annually; replace battery every 12 months'],
      ['LED detail inspection light', '1 (minimum)', 'High-output LED with raking + diffuse mode; minimum 2,000 lumens', 'Check LED performance quarterly; replace if output has declined'],
      ['Nitrile gloves', '1 pair per vehicle; change if contaminated', 'Powder-free; minimum 0.1 mm thickness; size-appropriate', 'Dispose of after each job — skin oil through a hole in a glove will contaminate the surface'],
      ['IPA spray bottle', '1 dedicated to coating prep only', 'Trigger spray; 500 ml minimum; labeled clearly', 'Clean the spray mechanism monthly; replace if contamination occurs'],
      ['Distilled water supply', 'Minimum 2 litres per vehicle for IPA dilution', 'Distilled (not filtered, not spring, not tap)', 'Buy fresh; do not use water stored for more than 30 days after opening'],
      ['Edge seal applicator', '1', 'Fine-tip bottle or cotton-tipped applicator for precise edge sealing', 'N/A — apply and dispose of the tip'],
      ['Masking tape (coating-grade)', 'As required', '36 mm vinyl or plastic tape; does not leave residue on cured coating', 'Check bond on a cured surface quarterly — tape grade changes between production runs'],
    ]
  );

  c += h2('Applicator Block Quality Standards');
  c += p('The suede applicator block is the direct interface between the product and the paint. A compromised applicator produces compromised results. The following standards define what an acceptable applicator looks and feels like before use:');
  c += checklist([
    'The suede face must be uniformly dry — any residual product from prior use disqualifies the block',
    'The foam core must be firm and even — soft spots indicate saturation or compression that will cause uneven product delivery',
    'The face must be free of embedded particles — a single grit particle in the suede face will scratch the surface during application',
    'The size must be appropriate to the section being worked — a very large block is difficult to control in tight areas; a very small block increases application time and risk of uneven product distribution on large panels',
    'Do not pre-apply product to the block before the vehicle is ready — product sitting on the suede begins to cure within minutes; the suede will harden and the product will not transfer correctly',
  ]);

  c += h2('Leveling Cloth Management');
  c += p('The leveling cloth is the tool most frequently compromised in professional coating application. A cloth that has been used on a panel and is now carrying cured product will scratch the next panel rather than level it. The cloth management protocol is non-negotiable:');

  c += procedure('Leveling Cloth Protocol During Application', [
    'Begin with 4 clean leveling cloths staged in a clean container before starting the vehicle',
    'Use the first cloth for the first two panels; fold to a clean face after each panel',
    'After 4 panel faces (2 per fold), the cloth is depleted of clean surface area — set it aside in a "used" container and pick up a fresh cloth',
    'Never take a used cloth from the used container to re-use on a fresh panel',
    'After the job: all used cloths go into the wash bag; document the count so you know how many clean cloths you need before the next job',
    'Wash leveling cloths separately from other shop towels — use a powder detergent; no fabric softener; no dryer sheets; softener and dryer sheets coat the microfiber and dramatically reduce their effectiveness',
    'Allow to fully air dry or machine dry on low heat — high heat shrinks or damages the microfiber structure',
  ]);

  c += h2('Environmental Monitoring Tools');
  c += table(
    ['Tool', 'What to Monitor', 'Target Range', 'Action if Out of Range'],
    [
      ['Digital thermometer (ambient)', 'Bay air temperature', '15–25 °C', 'Heat or cool the bay before starting; do not apply coating outside this range'],
      ['Hygrometer (humidity)', 'Relative humidity in the bay', '40–65% RH', 'Run a dehumidifier if above 70%; if below 30%, humidify or wait for natural conditions'],
      ['Infrared thermometer (panel surface)', 'Paint surface temperature', '15–27 °C for application; verify independently of air temperature', 'A panel in the sun can be 20 °C warmer than the air temperature; always verify the surface, not the air'],
      ['Dust monitor (optional)', 'Airborne particle count in the bay', '< 10,000 particles per m³', 'Run HEPA air purifier; clean bay floor with damp mop; allow 30 minutes settling time before starting'],
    ]
  );

  return c;
}

function ccChCoatingQAProgram() {
  let c = '';
  c += p('A formal Quality Assurance program for ceramic coating services provides an auditable trail of every quality-affecting decision and action taken during a job. This is distinct from the QC inspection (which verifies the outcome) — QA verifies that the process was followed correctly, which is the only reliable predictor of consistent outcomes across different technicians and different vehicles.');

  c += h2('QA Program Components');
  c += table(
    ['Component', 'Description', 'Who Is Responsible'],
    [
      ['Job setup checklist', 'Verified before any work begins: tools staged; bay conditions checked; product lot recorded', 'Coating technician'],
      ['Assessment documentation', 'Completed paint thickness map; defect classification; correction scope agreement; customer sign-off', 'Lead installer + SA'],
      ['Process compliance log', 'Real-time log of each stage: compound used; pad; time per section; IPA wipe time; panel coating time; flash time observed', 'Coating technician'],
      ['Environmental log', 'Temperature and humidity recorded at job start; mid-point; and during coating application', 'Coating technician'],
      ['QC inspection sign-off', 'Independent inspection by a person other than the applicator; result documented with photos', 'Lead installer or CSM'],
      ['Customer delivery checklist', 'All items delivered: warranty certificate; lot numbers recorded; aftercare guide given; care products provided if applicable', 'SA at delivery'],
      ['Post-delivery follow-up log', '24-hour check-in call; 7-day water bead mist test photos shared by customer; 30-day satisfaction confirmed', 'SA or CSM'],
    ]
  );

  c += h2('Process Compliance Log — Field Template');
  c += table(
    ['Stage', 'Time Started', 'Time Completed', 'Technician Notes', 'Passed? Y/N'],
    [
      ['Wash + decontamination', '', '', '', ''],
      ['Paint depth measurement', '', '', 'Panel readings: ', ''],
      ['Paint correction Stage 1', '', '', 'Product: ___ Pad: ___', ''],
      ['Paint correction Stage 2', '', '', 'Product: ___ Pad: ___', ''],
      ['Paint correction Stage 3', '', '', 'Product: ___ Pad: ___', ''],
      ['IPA wipe — all panels', '', '', 'IPA concentration: 70%', ''],
      ['Pre-coating dust inspection', '', '', 'Bay conditions: ___ °C / ___% RH', ''],
      ['Coating Layer 1 application', '', '', 'Product lot: ___ / Flash time observed: ___', ''],
      ['Layer 1 surface cure (wait time)', '', '', '', ''],
      ['Coating Layer 2 application', '', '', 'Product lot: ___ / Flash time: ___', ''],
      ['Coating Layer 3 / top coat', '', '', 'Product lot: ___ / Flash time: ___', ''],
      ['Full vehicle QC inspection', '', '', '', ''],
      ['Final cure time in bay', '', '', '', ''],
      ['Pre-delivery mist test', '', '', 'Contact angle: pass / fail', ''],
    ]
  );

  c += h2('Non-Conformance Reporting');
  c += p('When a process step is found to be out of compliance — whether during the job or at the QC inspection — a Non-Conformance Report (NCR) must be completed before delivery occurs. The NCR documents what went wrong, the root cause, the corrective action taken, and the preventive measure implemented.');

  c += procedure('Non-Conformance Response Protocol', [
    'The person who identifies the non-conformance stops the process and documents the issue immediately',
    'The NCR form is completed: what was observed; at what stage; what the specification was; what was actually found',
    'The lead installer and CSM are notified; the root cause is identified collaboratively',
    'Corrective action is implemented: re-do the affected stage; address the root cause before proceeding',
    'The corrected work is re-inspected before the process continues',
    'The NCR is filed in the job record; reviewed at the monthly QA review meeting',
    'If the same non-conformance occurs more than twice in 90 days: a systemic issue is identified; a process change is required; document the change and retrain affected staff',
  ]);

  return c;
}

// ─────────────────────────────────────────────────────────────────────────────
// ADDITIONAL DETAILING CHAPTERS
// ─────────────────────────────────────────────────────────────────────────────

function dtChDetailChemicals() {
  let c = '';
  c += p('Professional detailing chemistry is a complex discipline in its own right. The correct selection, dilution, and application of chemical products determines both the quality of the result and the safety of the vehicle surfaces being treated. This chapter provides a comprehensive reference for the chemical categories used in professional detailing operations, including dilution ratios, surface compatibility, dwell time guidance, and safe handling practices.');

  c += h2('Chemical Categories — Complete Reference');

  c += h3('Pre-Wash & Traffic Film Removers');
  c += p('Pre-wash chemicals are applied before contact washing to break down and soften heavy surface contamination, reducing the grit load that the wash mitt encounters.');
  c += table(
    ['Product Type', 'Typical Dilution', 'Dwell Time', 'Surface Compatibility', 'Notes'],
    [
      ['TFR (traffic film remover)', '10:1–30:1', '2–5 minutes', 'All exterior painted surfaces; do not use on bare aluminum', 'Do not use on hot surfaces; rinse before drying'],
      ['Snow foam', '10:1–20:1 in foam cannon', '3–5 minutes', 'All exterior surfaces', 'Foam consistency indicates dilution is correct; too runny = too dilute'],
      ['Bug remover', 'Ready-to-use or 3:1', '60 seconds maximum', 'Painted; clear glass; not bare metal or polished aluminum', 'Always rinse within specified dwell — protein contamination bonds rapidly to clean surfaces'],
      ['Citrus pre-wash', '5:1–10:1', '2–3 minutes', 'Painted surfaces; not raw plastics or rubber long-term', 'Pleasant smell; effective on road grime; weaker on heavy tar'],
    ]
  );

  c += h3('Wash Products');
  c += table(
    ['Product Type', 'pH', 'Dilution', 'Best For', 'Avoid On'],
    [
      ['pH-neutral shampoo', '6.5–7.5', '500:1–1000:1', 'All vehicles; maintenance washing', 'Nothing — safe on all surfaces'],
      ['Strip wash / prep wash', '8–9', '100:1–200:1', 'Pre-correction; pre-coating; after applying paste wax that must be removed', 'Ceramic-coated vehicles in maintenance; will strip coating hydrophobics'],
      ['Rinseless wash concentrate', '7–8', '30:1–100:1', 'Low-water; waterless; quick maintenance', 'Very heavy contamination — rinseless can\'t handle heavy soiling safely'],
      ['Waterless wash', 'Near neutral', 'Ready-to-use', 'Lightly soiled vehicles; maintenance between washes', 'Any vehicle with significant surface dirt — abrasion risk without water carrier'],
    ]
  );

  c += h3('Chemical Decontamination Products');
  c += table(
    ['Product Type', 'Active Chemistry', 'Target Contamination', 'Dwell Time', 'Rinse Required'],
    [
      ['Iron / fallout remover', 'Thioglycolate or ammonium thioglycolate', 'Ferrous metal particles (brake dust, industrial fallout)', '3–7 minutes', 'Yes — thorough rinse; do not allow to dry'],
      ['Tar remover', 'Solvent blend (petroleum-based or terpene-based)', 'Road tar, bitumen splatter, adhesive residue', '30–60 seconds per spot', 'Yes — wipe clean; IPA follow-up'],
      ['Insect / bug remover', 'Enzyme + surfactant blend', 'Insect protein contamination', 'Up to 60 seconds', 'Yes — thoroughly'],
      ['Wheel acid (pH ~2–4)', 'Phosphoric or hydrofluoric acid (dilute)', 'Heavy calcium deposits, stubborn brake dust on bare wheels', '30–60 seconds maximum', 'Immediate and thorough — acid chemistry; extreme care required'],
      ['Water spot remover', 'Mild acid or chelating agent', 'Mineral deposits from water drying on paint or glass', 'Per product — typically 1–2 minutes', 'Yes; may require clay after removal'],
    ]
  );

  c += h3('Interior Chemicals');
  c += table(
    ['Product Type', 'Dilution for Use', 'Target Surfaces', 'Not Suitable For'],
    [
      ['All-purpose cleaner (APC)', '5:1–20:1 depending on surface type', 'Hard plastics; vinyl; carpet; most fabric', 'Leather (too harsh at strong dilution); LCD screens'],
      ['Leather cleaner', 'Ready-to-use or 5:1', 'Genuine leather; coated leather', 'Alcantara; untreated suede; nubuck'],
      ['Carpet and upholstery cleaner', '3:1–10:1', 'Carpet; fabric seats; floor mats', 'Leather; piano black plastic; any glossy interior surface'],
      ['Glass cleaner', 'Ready-to-use', 'Interior and exterior glass', 'Never on LCD or touch screens — may penetrate and damage electronics'],
      ['Enzyme odor eliminator', 'Ready-to-use or 5:1', 'Carpet; fabric seats; headliner', 'Leather (can dry and crack); glossy surfaces'],
      ['Silicone-free interior detailer / dressing', 'Ready-to-use (spray)', 'Plastic; vinyl; rubber trim (interior)', 'Steering wheel grip surfaces; pedals; any surface where slip is a safety concern'],
    ]
  );

  c += h2('Chemical Safety — Detailing Operation Requirements');
  c += checklist([
    'All chemical containers are labeled with product name, dilution, and the date mixed if a dilution was prepared in advance',
    'Safety Data Sheets (SDS) for every chemical used in the shop are maintained in a binder accessible to all staff',
    'Staff review the SDS for any new product before first use — PPE requirements vary significantly between products',
    'Acid-based wheel cleaners require gloves, eye protection, and are used only outdoors or in a ventilated area — never spray indoors without industrial ventilation',
    'Iron removers contain sulphur compounds; the strong odor is expected; ventilation during use is required',
    'No mixing of different chemical products — chemical reactions between incompatible products can produce harmful gases',
    'Spills are cleaned immediately; chemical waste is disposed of per local environmental regulations — never poured into a storm drain',
  ]);

  return c;
}

function dtChNewCarDetailPrep() {
  let c = '';
  c += p('New car delivery preparation is a high-value, time-sensitive service that gives the professional detailer access to vehicles at their most pristine state — before factory transport contamination, dealer lot dust, and showroom handling have had time to cause damage. Understanding the unique challenges of new vehicle prep positions the shop to serve dealers, private buyers taking delivery, and brand-enthusiast clients who want their new vehicle treated to the highest professional standard from day one.');

  c += h2('New Car Contamination Reality');
  c += p('A "new" vehicle arriving at a dealership or via transport truck is far from the pristine showroom condition the customer envisions. The typical new vehicle delivery condition includes:');
  c += checklist([
    'Transport dust and road contamination from the delivery trip (often 500–1,000+ km)',
    'Overspray from surrounding vehicles during transport on an open carrier',
    'Factory wax — a cheap protective wax applied at the factory that must be fully removed before any quality product is applied',
    'Rail and iron fallout from rail transport — the single most contamination-heavy transport method',
    'Adhesive tape residue from protective plastic sheeting removed at the dealership',
    'Fingerprints and handling marks from PDI inspection at the dealer',
    'Dealer showroom film — the light dust and contamination accumulated on the lot',
    'In some cases: touch-up paint applied at the dealership to conceal transport damage — this must be identified and documented before any correction work',
  ]);

  c += h2('New Car Prep Sequence');
  c += procedure('Complete New Car Preparation Protocol', [
    '**Visual inspection first** — photograph all four sides and roof before touching the vehicle; note any transport damage, touch-up paint, panel damage, or contamination',
    '**Factory wax removal wash** — use a strip wash (not pH-neutral maintenance shampoo) at 50:1–100:1 dilution; hand wash with a clean mitt; thorough rinse',
    '**Iron fallout removal** — new vehicles shipped by rail have extremely high iron contamination; apply iron remover to all panels; observe the reaction; rinse thoroughly',
    '**Clay bar decontamination** — use a fine or medium clay; the surface should feel smooth and glass-like after this stage',
    '**Paint depth measurement** — record baseline readings for all panels on a new vehicle; this establishes the factory-original thickness for future reference and protects both the shop and the customer against any future dispute',
    '**Paint correction (if needed)** — assess under raking detail light; many new vehicles have holograms from the factory polishing line or dealership PDI buffing; correct to the appropriate standard',
    '**IPA wipe all panels** — confirm all factory wax, transport wax, and polishing oils are removed',
    '**Apply protection (per customer\'s selection)**: PPF, ceramic coating, paint sealant, or combination service',
  ]);

  c += h2('New Car Prep Pricing Considerations');
  c += table(
    ['Package', 'Scope', 'Price Range', 'Time Required'],
    [
      ['New Car Decontamination + Sealant', 'Strip wash; iron removal; clay; sealant application', '$200–$350', '2–3 hours'],
      ['New Car Decontamination + Coating', 'Strip wash; iron; clay; paint depth map; entry ceramic coating', '$450–$750', '4–6 hours'],
      ['New Car Correction + Premium Coating', 'Full decon; correction; multi-layer premium coating', '$1,200–$2,200', '1–2 days'],
      ['New Car Full Protection Package', 'PPF partial/full + ceramic coating + coating on wheels + window tint', '$3,000–$8,000+', '3–7 days'],
    ]
  );

  c += h2('Communicating New Car Prep Value to the Customer');
  c += callout('script', '"Most people don\'t realize that a brand-new vehicle is actually one of the dirtiest surfaces we work on from a contamination standpoint — factory wax, iron from rail transport, and handling marks from the dealer. The first professional service we do isn\'t about making it look better than it already does — it\'s about removing what shouldn\'t be there and then protecting what needs protecting from this point forward. You\'ll never be able to do this again at this level of paint condition — every mile from here increases the contamination. This is the optimal moment to act."');

  return c;
}

function dtChVehicleInspectionReport() {
  let c = '';
  c += p('The pre-service vehicle inspection report is the most important document in professional detailing. It protects the shop legally, creates a clear communication record with the customer, and establishes a baseline that allows meaningful before-and-after comparisons. This chapter covers inspection report design, documentation methodology, and how to present findings to customers effectively.');

  c += h2('What a Professional Inspection Report Contains');
  c += table(
    ['Section', 'Required Information', 'Format'],
    [
      ['Vehicle identification', 'Year, Make, Model, Color, VIN (last 6), Mileage', 'Text fields'],
      ['Customer information', 'Name, Contact, Date', 'Text fields'],
      ['Service requested', 'Specific service scope agreed by customer', 'Dropdown or text'],
      ['Paint depth readings', '5 readings per panel minimum; all panels documented', 'Table grid with panel map'],
      ['Paint condition by panel', 'Defect type and severity rating; classification 1–5', 'Panel diagram with notation'],
      ['Pre-existing damage', 'Every rock chip, scratch, dent, paint defect; location on vehicle', 'Vehicle outline diagram; photo references'],
      ['Interior condition', 'Stains, tears, wear; seat material type; all door panels', 'Text + checklist'],
      ['Window / glass condition', 'Chips, cracks, existing tint condition', 'Text notation'],
      ['Wheel and tire condition', 'Curb rash, finish condition, tire wear visible', 'Text notation'],
      ['Personal property inventory', 'Items of value left in vehicle; disclaimer statement', 'Text with customer initials'],
      ['Customer signature and date', 'Customer acknowledges the report and accepts terms', 'Signature line'],
    ]
  );

  c += h2('Paint Depth Mapping Protocol — Standard Form');
  c += p('Use the following panel grid format for recording paint depth readings. Minimum readings: Center + Four quadrants per panel = 5 readings per panel minimum. For full correction jobs: 10+ readings per panel recommended.');

  c += table(
    ['Panel', 'Reading 1', 'Reading 2', 'Reading 3', 'Reading 4', 'Reading 5', 'Average', 'Flag?'],
    [
      ['Hood — center', '', '', '', '', '', '', ''],
      ['Roof', '', '', '', '', '', '', ''],
      ['Trunk lid', '', '', '', '', '', '', ''],
      ['Front bumper', '', '', '', '', '', '', ''],
      ['Rear bumper', '', '', '', '', '', '', ''],
      ['Front fender (L)', '', '', '', '', '', '', ''],
      ['Front fender (R)', '', '', '', '', '', '', ''],
      ['Front door (L)', '', '', '', '', '', '', ''],
      ['Front door (R)', '', '', '', '', '', '', ''],
      ['Rear door (L)', '', '', '', '', '', '', ''],
      ['Rear door (R)', '', '', '', '', '', '', ''],
      ['Quarter panel (L)', '', '', '', '', '', '', ''],
      ['Quarter panel (R)', '', '', '', '', '', '', ''],
    ]
  );

  c += p('**Flag criteria:** Any reading below 80 microns is flagged automatically. Any reading more than 40 microns below the average of adjacent panels is flagged for suspected repaint. All flagged panels are reviewed with the customer before correction work begins.');

  c += h2('Photography Protocol for Inspection Reports');
  c += procedure('Inspection Photography Requirements', [
    'Photograph the vehicle from 8 positions before any work begins: front 3/4 driver; front 3/4 passenger; full profile driver; full profile passenger; front straight; rear straight; roof; engine bay',
    'Photograph each pre-existing defect from two angles: close-up (30 cm distance); context shot (at 1 m distance showing panel location)',
    'Use a photographic reference scale (ruler or coin) next to any defect being photographed — this establishes actual size in the photo',
    'All inspection photos are taken under the same lighting conditions (ideally natural overcast or the shop\'s overhead LED) — consistency allows meaningful comparison',
    'Photos are uploaded to the CRM job file before the vehicle enters the work area',
    'The time stamp on the photos is the legal timestamp — ensure the camera date and time are correct',
  ]);

  c += h2('Presenting Inspection Findings to the Customer');
  c += callout('script', '"Before we start any work, I want to walk you through what our inspection found — this takes about 5 minutes and protects both of us. We\'ve documented [X] pre-existing conditions on your vehicle: [describe the top 3–4 most significant]. Here\'s the paint thickness map — these are the thickest panels [hood, doors] and the thinnest [note any thin panels]. This tells us how aggressively we can polish each panel.\n\nWhat this means for your service today: [describe any implications — limited correction on thin panel; touch-up paint in one spot that we won\'t cover; etc.]. Does all of that make sense? Any questions before I have you sign here?"');

  return c;
}

function dtChInteriorMaterialRef() {
  let c = '';
  c += p('Interior detailing requires a different chemical and mechanical approach for every material type present in the vehicle. Using the wrong product on the wrong material is the most common cause of interior damage claims in professional detailing. This chapter provides a comprehensive material-by-material reference for every interior surface type commonly encountered in professional practice.');

  c += h2('Genuine Leather — Complete Reference');
  c += table(
    ['Attribute', 'Genuine Leather Properties', 'Detailing Implication'],
    [
      ['Surface structure', 'Natural grain; pores present; absorbs liquids', 'Cleans more deeply than coated leather; absorbs conditioning products effectively'],
      ['pH sensitivity', 'pH 4.5–5.5 (slightly acidic)', 'Never use alkaline APC at full dilution — will dry and crack leather over time'],
      ['UV sensitivity', 'High — fades, dries, cracks without UV protection', 'Apply UV-protective conditioner at every service; document condition at intake'],
      ['Dye type', 'Aniline (no topcoat) or pigmented (protected topcoat)', 'Aniline leather is the most delicate — never use harsh cleaners; pigmented leather is more durable'],
    ]
  );
  c += procedure('Genuine Leather Cleaning and Conditioning Protocol', [
    'Identify leather type (aniline vs. pigmented): aniline leather darkens noticeably when water contacts it; pigmented leather beads or resists water absorption',
    'Apply leather cleaner to a soft brush or foam applicator; work in small sections; agitate gently in a circular motion',
    'Wipe clean with a damp microfiber; inspect the cloth — if heavy soiling is present, repeat on the same section before moving on',
    'Allow the leather to dry completely before applying conditioner — conditioning wet leather locks moisture in and may cause mildew in porous aniline types',
    'Apply leather conditioner: a thin coat with a foam applicator; work it into the grain; allow to penetrate for 5 minutes',
    'Buff off any excess with a dry soft microfiber — no excess conditioner should remain on the surface',
    'Inspect the result under a bright light: the leather should look supple and have its natural sheen restored; not greasy or over-shiny',
  ]);

  c += h2('Leatherette / Bonded Leather / Vinyl Upholstery');
  c += table(
    ['Property', 'Characteristic', 'Care Implication'],
    [
      ['Surface', 'PVC or PU coating over fabric backing; no natural grain', 'More durable than genuine leather for cleaning; can tolerate slightly higher pH cleaners'],
      ['Cleaning response', 'Resists absorption; contamination stays on the surface', 'APC at 5:1–10:1 is appropriate for most cleaning; rarely needs more than one pass'],
      ['Conditioning', 'Does not absorb oil-based conditioners (no pores)', 'Use a vinyl/leatherette dressing instead of leather conditioner — different chemistry'],
      ['Damage modes', 'Cracking and peeling at wear points; UV color fade; solvent damage', 'Never use solvent-based products; UV protection appropriate; document cracking at intake'],
    ]
  );

  c += h2('Alcantara / Microsuede');
  c += p('Alcantara is an extremely delicate synthetic microsuede used in premium and sports vehicles. It is among the highest-risk interior materials in the shop — damage is permanent and replacement is expensive.');
  c += checklist([
    'Use only dedicated alcantara cleaner — standard APC will mat the fibers permanently',
    'Apply cleaner with a very soft brush; work in one direction with the nap; never circular scrubbing',
    'Use minimal moisture — alcantara absorbs moisture deeply and dries slowly; over-wetting causes water marks',
    'Dry with compressed air if available; otherwise allow to air dry completely in a ventilated environment',
    'Use a dry soft-bristle brush to restore the nap after drying — brush in one direction consistently',
    'Never use a hot iron or heat gun on alcantara — the material distorts and cannot be restored',
    'Apply an alcantara-specific protectant if available; do not use general fabric hydrophobic spray — it can leave residue that mats the fibers',
  ]);

  c += h2('Hard Plastic — Instrument Panel and Trim');
  c += table(
    ['Plastic Type', 'Surface Texture', 'Cleaning Product', 'Dressing Product', 'What to Avoid'],
    [
      ['Matte soft-touch plastic', 'Matte; rubber-like coating on the surface', 'APC at 10:1; very soft cloth; gentle only', 'Silicone-free matte interior detailer', 'Any silicone product — causes the soft-touch coating to become sticky and attract dust'],
      ['Piano black / gloss plastic', 'High-gloss; shows every fingerprint and swirl', 'Spray onto cloth; never directly on surface; wipe in one direction only', 'Piano black specific detailer — ultra-fine', 'Dry wiping (scratches instantly); paper towels; rough cloth; anything that has been used on other surfaces'],
      ['Standard hard plastic (dashboards)', 'Textured or grain-pattern ABS', 'APC at 10:1; agitate with a detail brush for textured channels', 'Interior trim dressing (low-gloss); or UV protectant spray', 'Over-saturation with APC — leaves white residue in texture channels'],
      ['Rubber and TPE trim', 'Soft; flexible; sometimes textured', 'APC at 5:1; soft brush', 'Rubber protectant; avoid silicone-based', 'Oil-based conditioners — degrade rubber over time'],
    ]
  );

  c += h2('Carpet and Floor Mats');
  c += table(
    ['Condition', 'Approach', 'Products', 'Equipment'],
    [
      ['Light soiling (fresh)', 'Vacuum; apply carpet cleaner at 5:1; agitate with brush; blot dry', 'Carpet cleaner; agitation brush', 'Vacuum; stiff brush; microfiber'],
      ['Moderate soiling (set stains)', 'Vacuum; pre-spray enzyme cleaner; dwell 5 min; agitate; extract with hot water extractor', 'Enzyme cleaner; hot water extractor solution', 'Hot water extractor; agitation brush'],
      ['Heavy soiling (mud, pet hair, embedded grime)', 'Remove mats; pre-vacuum with metal bristle vacuum attachment; pre-soak with enzyme cleaner; extract aggressively; repeat', 'Heavy-duty enzyme cleaner; carpet pre-treat', 'Industrial extractor; stiff agitation brush; air mover for drying'],
      ['Pet hair embedded in carpet', 'Rubber squeegee across the carpet surface lifts pet hair mechanically before vacuuming', 'None — mechanical only', 'Rubber squeegee; vacuum'],
    ]
  );

  c += h2('Interior Glass');
  c += p('Interior glass presents a unique challenge because it is often hazy from off-gassing plasticizers rather than just dust. This haze is a thin film of chemical residue from the dashboard materials that deposits on the inside of the glass over time.');
  c += procedure('Interior Glass Cleaning Protocol', [
    'Spray glass cleaner onto a clean microfiber cloth — never directly onto the glass (excess spray contacts electronics and seals)',
    'Wipe in one direction across the glass; do not use circular motion (causes haze streaks)',
    'Inspect at 45° angle to the glass with a light source — any remaining haze or streaking will be visible at this angle',
    'Use a second clean dry microfiber to buff the glass immediately after the wet wipe — do not allow the cleaner to air dry',
    'For heavy interior plastic film: apply IPA at 50% concentration; allow 10 seconds dwell; wipe with the grain of the glass (horizontal or vertical); follow immediately with standard glass cleaner',
    'Do not use ammonia-based glass cleaners near window tint — ammonium chemistry dissolves some tint adhesives',
    'Windshield inspection: sit in the driver seat; check for any residue that affects visibility at specific angles; road film often leaves a haze at 30° that is only visible from the driver\'s position',
  ]);

  return c;
}

function dtChPolishingMatrix() {
  let c = '';
  c += p('The compound and pad selection matrix is the reference that bridges the paint condition assessment to the machine polishing action. This chapter provides a comprehensive reference for every combination of paint condition, machine type, pad material, compound grade, and expected outcome — the complete professional polishing decision framework.');

  c += h2('Machine Type Selection — First Decision');
  c += table(
    ['Machine Type', 'Best Application', 'Advantage', 'Limitation', 'Skill Level Required'],
    [
      ['Dual-action (DA) random orbital', 'Light to moderate correction; finishing; coating prep', 'Lowest heat generation; most forgiving; excellent for beginners', 'Cannot match rotary on severe oxidation or deep scratches without significant time investment', 'Beginner — safe for all levels'],
      ['Forced rotation DA', 'Moderate to significant correction; faster than standard DA', 'More aggressive than standard DA; retains some safety of DA motion', 'More aggressive — requires more technique awareness than standard DA', 'Intermediate'],
      ['Rotary polisher', 'Severe correction; heavy oxidation; deep scratches', 'Maximum correction speed; most effective on severe defects', 'Generates significant heat; hologram risk; burn-through risk; requires experienced technique', 'Advanced — not for unsupervised beginners'],
      ['Long-throw DA (21–25 mm throw)', 'Large flat panels; hood; roof; fast correction with reduced hologram risk vs. rotary', 'Faster cutting than short-throw DA; minimal hologram risk', 'Less effective in tight areas; not suitable for bumpers and complex curves', 'Intermediate'],
    ]
  );

  c += h2('Master Compound & Pad Selection Matrix');
  c += p('Use this matrix to identify the correct starting point for any correction scenario. Find the paint condition down the left column; cross-reference with the machine type across the top to find the recommended compound grade and pad combination.');

  c += table(
    ['Paint Condition', 'DA Polisher', 'Forced Rotation DA', 'Rotary Polisher'],
    [
      ['Class 1 — Perfect (pre-coating prep only)', 'Ultra-fine polish + blue finishing pad; Speed 3', 'Ultra-fine polish + finishing foam; Speed 3', 'Ultra-fine polish + finishing foam; 600–800 RPM'],
      ['Class 2 — Light swirls and wash marks', 'Finishing polish + white polishing foam; Speed 4–5', 'Light compound + white foam; Speed 4', 'Light compound + polishing foam; 800–1,000 RPM'],
      ['Class 3 — Moderate swirls and some RDS', 'Light-medium compound + orange cutting foam or microfiber; Speed 5', 'Medium compound + orange foam; Speed 4–5', 'Medium compound + orange foam; 900–1,100 RPM'],
      ['Class 4 — Heavy swirls, significant RDS, light oxidation', 'Medium compound + orange cutting foam; Speed 5–6; may require two passes', 'Medium-heavy compound + orange foam; Speed 5', 'Heavy compound + orange foam or light wool; 1,000–1,200 RPM'],
      ['Class 5 — Severe oxidation, widespread deep scratches', 'Heavy compound + cutting foam at maximum speed; multiple passes required', 'Heavy compound + cutting foam; maximum speed', 'Heavy compound + heavy cutting foam or wool; 1,100–1,400 RPM'],
    ]
  );

  c += h2('Finishing Stage Requirements by Correction Stage');
  c += table(
    ['Correction Stage Used', 'Finishing Requirement', 'Pad for Finishing', 'Compound for Finishing', 'Number of Finishing Passes'],
    [
      ['Ultra-fine polish only (Class 1)', 'No additional finishing required', 'N/A', 'N/A', '0'],
      ['Finishing polish (Class 2)', 'One light finishing pass with ultra-fine', 'Blue or microsuede finishing pad', 'Ultra-fine jeweling polish', '1 pass per panel'],
      ['Light to medium compound (Class 3)', 'One-stage finishing with finishing polish', 'Black or white finishing foam', 'Finishing polish', '2 passes per panel'],
      ['Medium compound (Class 4)', 'Two-stage finishing: medium polish → finishing polish', 'White polishing foam then black finishing foam', 'Light compound then finishing polish', '2 passes each (4 total per panel)'],
      ['Heavy compound (Class 5)', 'Full two-stage: heavy polish → medium polish → finishing polish', 'Orange → white → black foam sequence', 'Medium → light → finishing sequence', '2 passes each (6 total per panel) — expect full day per vehicle'],
    ]
  );

  c += h2('Working Time and Section Size by Compound Grade');
  c += table(
    ['Compound Grade', 'Working Time Per Section (20 °C)', 'Section Size', 'Pass Count', 'Signs the Compound Is Spent'],
    [
      ['Ultra-fine polish', '60–90 seconds per section', '60 × 60 cm', '4–6 passes', 'Product becomes transparent; surface shines clearly; no more residue on the pad'],
      ['Finishing polish', '45–75 seconds per section', '50 × 50 cm', '4–6 passes', 'Same as above; finish inspection shows high gloss without haze'],
      ['Light compound', '60–90 seconds per section', '40 × 40 cm', '5–8 passes', 'Compound breaks down and goes clear; residue on the pad has decreased noticeably'],
      ['Medium compound', '60–90 seconds per section', '30 × 40 cm', '6–10 passes', 'Compound slows and breaks clear; haze from compound is replaced by improved clarity'],
      ['Heavy compound', '90–120 seconds per section', '25 × 35 cm', '8–12 passes', 'Compound goes from opaque to semi-clear; cutting sensation through the machine decreases'],
    ]
  );

  c += h2('Hologram Prevention and Elimination');
  c += p('Holograms are a directional scratch pattern created by rotary polishing. They are typically invisible in overhead light but highly visible under a single-point halogen or LED from a raking angle. Every installer using a rotary polisher must understand and systematically prevent holograms.');

  c += table(
    ['Hologram Cause', 'Prevention', 'Correction After Discovery'],
    [
      ['Rotary direction imprinted on paint', 'Follow every rotary stage with a DA finishing stage', 'DA polish with finishing foam; this disrupts the directional pattern'],
      ['Machine speed too high for finishing stage', 'Reduce RPM to 600–900 for finishing; never use high RPM for polishing stage', 'Re-do the finishing stage at correct speed'],
      ['Pad contamination from prior compound stage', 'Change pads between stages; clean pad thoroughly or use a new pad', 'Re-do the finishing stage with a clean pad'],
      ['Surface temperature too low during rotary use', 'Ensure panel is at 15 °C minimum; warm with a heat lamp if needed', 'Re-do the affected passes with correct surface temperature'],
      ['Pad spinning on the surface rather than orbital motion', 'Ensure the backing plate bolt is tight; verify backing plate is flat', 'Re-do with a correctly functioning machine; inspect backing plate'],
    ]
  );

  c += h2('Paint Temperature Reference for Polishing');
  c += table(
    ['Paint Surface Temperature', 'Polishing Action', 'Risk'],
    [
      ['Below 12 °C', 'Do not begin — polishing is ineffective; compounds do not break down correctly', 'Wasted product; no defect improvement; potentially induces scratches in cold stiff clear coat'],
      ['12–18 °C', 'Proceed with longer working time; lighter compound at this temperature', 'Slower cure means residue removal takes longer; some compounds do not activate properly below 15 °C'],
      ['18–27 °C', 'Optimal — standard protocol applies', 'None when technique is correct'],
      ['27–35 °C', 'Reduce section size; work faster; monitor for compound drying', 'Compound drying too fast; dry polishing creates micro-scratches'],
      ['Above 35 °C', 'Do not polish — move the vehicle to shade; cool the panel before resuming', 'Compound dries instantly; rotary polishing on a hot panel burns through clear coat rapidly'],
    ]
  );

  return c;
}

function dtChClayAndIronRemoval() {
  let c = '';
  c += p('Clay bar decontamination and iron/fallout removal are the foundation of every professional detailing and paint correction service. These processes remove the embedded and bonded contamination that washing cannot touch, preparing the surface for safe contact with polishing pads, ceramic coatings, and film adhesives. This chapter provides the complete technical reference for both chemical and mechanical decontamination.');

  c += h2('Understanding Surface Contamination Layers');
  c += p('The contamination on a vehicle\'s paint exists in three distinct zones, each requiring a different removal approach:');

  c += table(
    ['Zone', 'Location', 'Contamination Type', 'Removal Method'],
    [
      ['Zone 1 — Surface (above clear coat)', 'On top of the clear coat surface', 'Dust, light dirt, bird droppings, water spots, wax residue', 'Washing; spray cleaners; rinse'],
      ['Zone 2 — Bonded (on clear coat surface)', 'Chemically or physically bonded to the outer surface of the clear coat', 'Iron fallout, tar, tree sap, old film adhesive residue, industrial fallout', 'Chemical decontamination (iron remover, tar remover) + clay bar'],
      ['Zone 3 — Embedded (in clear coat)', 'Forced into the micro-texture of the clear coat surface', 'Fine metallic particles, industrial particles, brake dust', 'Clay bar (mild mechanical abrasion) + chemical fallout remover'],
    ]
  );

  c += h2('Iron Fallout — Complete Reference');
  c += p('Iron (ferrous) contamination is universally present on vehicles in urban and suburban environments. Brake dust from the vehicle itself and from surrounding traffic constantly deposits microscopic iron particles on all painted surfaces. These particles embed in the clear coat and oxidize, creating rust spots that are visible as orange or brown dots under magnification.');

  c += h3('Iron Fallout Remover — How It Works');
  c += p('Iron fallout removers contain thioglycolate or similar sulphur-based chemistry that reacts specifically with iron particles. The reaction converts ferrous iron compounds to a soluble form, releasing them from the clear coat surface. The dramatic color change from clear to purple or reddish-purple that occurs on contact is the visual indication of this reaction.');

  c += procedure('Iron Fallout Removal — Complete Protocol', [
    'Vehicle must be washed and clean before iron removal — loose dirt on top of the panel dilutes the remover and reduces effectiveness',
    'Ensure the paint surface is cool and shaded — iron remover applied to a hot or sun-heated panel dries before the reaction is complete, leaving residue',
    'Spray the iron remover generously onto all painted surfaces; also apply to wheels and wheel arches which typically have the highest iron concentration',
    'Allow the product to dwell for 3–7 minutes — the color change reaction will be clearly visible on heavily contaminated areas; the more intense the color change, the greater the iron contamination',
    'Do not allow the product to dry — if it begins to dry before the dwell time is complete, mist with water to maintain the wet chemical environment',
    'At the end of the dwell period, rinse the entire vehicle thoroughly with a hose at moderate pressure; begin rinsing from the top and work downward',
    'Inspect the rinse water runoff — it should be pink or purple-tinged; colorless rinse may indicate insufficient dwell time or very low contamination',
    'Repeat for a second application if the color change was intense on the first application — heavy contamination benefits from two iron removal applications',
    'Dry the vehicle before proceeding to the clay bar stage — wet panels prevent the clay lubricant from functioning correctly',
  ]);

  c += h3('Iron Contamination Assessment by Vehicle Type');
  c += table(
    ['Vehicle Type / Usage', 'Iron Contamination Level', 'Iron Removal Frequency'],
    [
      ['Daily commuter — urban; 20+ km/day', 'High — frequent braking in traffic', 'Every full detail; minimum every 3 months'],
      ['Weekend driver — garage stored; light use', 'Low-moderate — primarily from ambient fallout', 'Every 6 months or at each annual detail'],
      ['Track or performance vehicle', 'Very high — aggressive braking; high-performance brake dust', 'After each track day; ceramic-coated track vehicles especially'],
      ['Electric vehicle (EV)', 'Very low — regenerative braking reduces brake dust dramatically', 'Annually or when contamination is detected by clay bar test'],
      ['Vehicles parked near rail lines or industrial zones', 'Very high — steel grinding from rail wheels; industrial emissions', 'Every 2–3 months; may require professional iron removal at each service'],
    ]
  );

  c += h2('Clay Bar Decontamination — Advanced Reference');
  c += p('The clay bar was developed in Japan in the 1990s and revolutionized the professional detailing industry. The polymer clay bar acts as a mild abrasive that shears surface-bonded contamination away from the clear coat without damaging the paint surface — when used with adequate lubrication.');

  c += h3('Clay Bar Types');
  c += table(
    ['Type', 'Aggressiveness', 'Surface Impact', 'Best For'],
    [
      ['Fine / mild clay', 'Gentle', 'Leaves minimal marring — virtually none on most surfaces', 'Lightly contaminated vehicles; painted surfaces with thin clear coat; pre-coating prep on corrected paint'],
      ['Medium clay (most common)', 'Moderate', 'Light marring on dark colors; usually within polishing tolerance', 'Moderately contaminated vehicles; standard professional use'],
      ['Heavy / aggressive clay', 'High', 'Creates measurable marring that requires polishing before coating', 'Severely contaminated surfaces; texture removal from previously painted surfaces'],
      ['Synthetic clay (polymer pad)', 'Variable by product', 'Less marring than traditional clay; longer life', 'High-volume professional use; large fleet vehicles; less effective on deeply embedded contamination vs. traditional clay bar'],
    ]
  );

  c += h3('Clay Bar Lubrication');
  c += p('The lubricant is the most critical element in safe clay bar use. Insufficient lubrication causes the clay to drag on the surface rather than glide, creating scratches that require polishing to correct. The clay bar should glide effortlessly across the surface — any drag indicates insufficient lubrication or contamination in the clay.');

  c += checklist([
    'Use a dedicated clay lubricant — not regular car shampoo, which does not provide sufficient lubrication and may contaminate the clay bar',
    'Apply lubricant generously: the panel surface should be visibly wet and slippery before the clay makes contact',
    'Re-apply lubricant every 3–4 clay passes — the clay absorbs lubricant as it moves',
    'The clay bar should leave behind a small amount of lubricant residue on the surface — the panel is not dry after claying',
    'After completing the panel, spray a final mist of lubricant and wipe dry with a clean microfiber to remove the clay lubricant residue',
  ]);

  c += h3('Clay Bar Pass Technique');
  c += procedure('Correct Clay Bar Pass Technique', [
    'Hold the clay bar flat with your palm; do not grip at the edges — a flat contact surface distributes pressure evenly',
    'Apply lubricant to the panel; allow to mist across the surface',
    'Place the clay flat on the panel; use no downward pressure — the weight of your hand is sufficient',
    'Glide the clay in straight passes — horizontal first, then vertical; never circular (circular passes create a circular scratch pattern)',
    'Listen and feel: clean areas are silent and feel smooth; contaminated areas sound faintly like sandpaper and drag slightly',
    'When you reach the end of the panel, fold the clay to expose a clean surface; re-apply lubricant',
    'Continue until the clay glides silently and without drag across the entire panel',
    'Wipe the panel dry with a clean microfiber; verify smoothness with the "plastic bag test" — a zip-lock bag over the fingertip magnifies surface feel',
  ]);

  return c;
}

function dtChHeadlightRestoration() {
  let c = '';
  c += p('Headlight lens restoration is one of the highest-ROI add-on services in the detailing menu. The materials cost is low, the time investment is 30–60 minutes per pair, and the result is dramatically visible to the customer. Severely oxidized headlights — the cloudy, yellow-brown lenses common on vehicles 5+ years old — can be restored to near-new clarity using progressively finer abrasives.');

  c += h2('Headlight Oxidation Causes');
  c += p('Modern headlight lenses are made from polycarbonate (PC) plastic rather than glass. Polycarbonate is lighter and impact-resistant but begins to degrade under UV exposure. The factory UV-protective coating on the outer surface of the lens degrades first, exposing the unprotected polycarbonate to direct UV. The UV initiates a chemical reaction that yellows and hazes the material from the outside in.');

  c += table(
    ['Oxidation Level', 'Appearance', 'Restoration Approach', 'Time Estimate'],
    [
      ['Level 1 — Light', 'Slight haze; original clarity approximately 80%', 'Hand polish with light compound + UV sealant', '15–20 min per pair'],
      ['Level 2 — Moderate', 'Yellow-brown tint; haze visible; clarity approximately 50%', 'Wet-sand 1000-grit + 2000-grit + machine polish + UV sealant', '30–45 min per pair'],
      ['Level 3 — Severe', 'Thick yellow-brown coating; heavily pitted; clarity approximately 20%', 'Wet-sand 400-grit + 800 + 1500 + 2000 + machine polish + UV coating', '45–75 min per pair'],
      ['Level 4 — Failed', 'Delaminating surface layer; internal damage visible', 'Evaluate for lens replacement — restoration may not achieve acceptable result', 'Advise customer before attempting'],
    ]
  );

  c += h2('Headlight Restoration Procedure — Standard Level 2');
  c += procedure('Headlight Restoration — Moderate Oxidation', [
    'Mask the surrounding paint panels with painter\'s tape and masking paper — wet sanding produces slurry that stains paint',
    'Wet-sand the lens surface with 1000-grit wet/dry sandpaper on a sanding block; use plenty of water; work in horizontal passes until the surface is uniformly frosted (all oxidation removed)',
    'Progress to 2000-grit wet-sand; work in perpendicular direction to the previous stage; continue until 1000-grit scratches are replaced with uniform 2000-grit texture',
    'Machine polish with a foam pad and light compound at DA medium speed (4–5); work until haze from sanding is removed and clarity begins to return',
    'Follow with finishing polish on a finishing pad at DA low speed (3–4); bring the surface to maximum clarity',
    'IPA wipe the lens surface',
    'Apply a dedicated UV-protective headlight sealant or coating; this is critical — without UV protection the lens will re-oxidize within 3–12 months',
    'Cure per product instructions; remove masking',
    'Photograph the restored pair against the pre-restoration photographs for the customer portfolio',
  ]);

  c += h2('Headlight Restoration — Business Considerations');
  c += table(
    ['Factor', 'Guidance'],
    [
      ['Pricing', '$80–$175 per pair depending on severity; add-on to any detailing service'],
      ['Warranty', 'UV sealant longevity: 12–24 months; advise customer that without UV protection, re-oxidation is inevitable'],
      ['Upgrade to ceramic headlight coating', 'After restoration, offer a ceramic coating application to the lens; significantly extends protection beyond standard UV sealant'],
      ['When to decline', 'Internal delamination, cracks, or fogging from moisture infiltration cannot be corrected by polishing — recommend replacement lens; document the decline reason'],
    ]
  );

  return c;
}

function dtChTrimRestoration() {
  let c = '';
  c += p('Exterior plastic trim restoration addresses one of the most visible signs of vehicle aging: faded, gray, or dried-out black trim panels. Door trim strips, wheel arch cladding, body side moldings, and bumper trim can all be restored from a chalky gray appearance to a deep, rich black that dramatically improves the vehicle\'s overall appearance. This service pairs naturally with any detail package.');

  c += h2('Understanding Plastic Trim Degradation');
  c += p('Exterior plastic trim is typically made from unpainted black polypropylene or ABS plastic. Unlike clear-coated paint, these plastics are not protected by a lacquer layer. UV radiation attacks the surface plasticizers in the plastic, causing them to leach out — leaving a dry, chalky surface. Silicone-based products temporarily mask this by coating the surface, but do not replace lost plasticizers.');

  c += h2('Restoration Methods by Severity');
  c += table(
    ['Severity', 'Appearance', 'Method', 'Expected Result'],
    [
      ['Light fading', 'Slightly gray; still has some texture definition', 'Trim-specific restoration product (penetrating formula); wipe on; allow to penetrate; buff off', 'Full restoration; results last 12–24 months'],
      ['Moderate fading', 'Gray-white; texture partly obscured by surface chalking', 'Light machine polish with a foam pad to remove surface chalk; apply penetrating restorer; seal with trim coating', 'Good restoration; sealing extends results to 2–3 years'],
      ['Severe chalking', 'White surface layer; deeply dried; texture nearly invisible', 'Wet sand 1500-grit to remove chalked surface layer; machine polish; penetrating restorer; seal with trim ceramic or UV coating', 'Best achievable restoration; results without sealant will fade within months'],
      ['Staining (paint overspray, tar)', 'Discolored but not necessarily faded', 'Overspray remover or clay bar on the trim surface; clean; apply restorer', 'Varies by stain type; paint overspray may require wet-sanding'],
    ]
  );

  c += h2('Trim Restoration Procedure');
  c += procedure('Exterior Plastic Trim Restoration', [
    'Clean the trim with a dedicated trim cleaner or APC at 5:1 — remove all wax, silicone, and surface contamination; old silicone dressings prevent penetration of restoration products',
    'If moderately or severely chalked: apply a light compound to a foam pad; machine polish at low speed (DA speed 3–4); this removes the chalked surface layer and prepares a fresh substrate for the restorer',
    'Apply the penetrating trim restorer per product instructions — typically: apply to a foam applicator; work into the trim in circular motion; allow to penetrate for 5–10 minutes',
    'Buff off any excess with a clean microfiber — the trim should be deep black, not shiny or oily-looking',
    'If ceramic trim coating is being applied: IPA wipe the trim; apply the trim-specific ceramic coating to an applicator; wipe onto the trim in overlapping strokes; level per product instructions',
    'Avoid getting any restorer or coating on painted surfaces — mask the paint edge if necessary',
    'Allow to cure per product instructions before exposing to rain or washing',
  ]);

  c += h2('Trim Restoration Products to Avoid');
  c += checklist([
    'Silicone-based tire shine or vinyl dressing applied to trim — temporary; slings off onto paint in driving; customer complaints of greasy paint',
    'Petroleum-based products — degrades the plastic further over time',
    'Paste wax on unpainted black trim — leaves a white residue in the texture channels that is extremely difficult to remove',
    'Abrasive polish rated 3H or below — too aggressive for most trim plastics; can remove the surface texture permanently',
  ]);

  return c;
}

function dtChOdorElimination() {
  let c = '';
  c += p('Odor elimination is a specialty service that commands a premium price precisely because it is difficult to do correctly. Surface-level odor masking — spraying air freshener and hoping for the best — is immediately detectable and fails within days. True odor elimination requires identifying the source, removing the source material if possible, and then treating the remaining molecular odor with the correct chemistry.');

  c += h2('Odor Categories & Root Causes');
  c += table(
    ['Odor Type', 'Source Material', 'Primary Elimination Method', 'Notes'],
    [
      ['Tobacco smoke', 'Nicotine and tar deposited on every interior surface including the headliner, HVAC system, and vents', 'Ozone treatment + enzyme treatment + deep clean of all surfaces + HVAC cabin filter replacement', 'Severe cases may require multiple treatments; set expectation that 95% reduction is realistic; 100% elimination is rare on heavily saturated vehicles'],
      ['Pet urine', 'Uric acid crystals embedded in carpet, padding, and upholstery', 'Hot water extraction; enzyme-based cleaner (breaks down uric acid); ozone treatment', 'The carpet underpad is the primary reservoir — must be addressed with an extractor that pulls the enzyme solution deep; surface cleaning alone fails'],
      ['Mold and mildew', 'Fungal growth from water infiltration, condensation, or wet carpet', 'Source of moisture identified and sealed first; antimicrobial treatment; extraction; ozone treatment', 'Treatment without fixing the moisture source results in immediate recurrence'],
      ['Food and beverage', 'Protein and sugar residue in upholstery and carpet', 'Hot water extraction; enzyme cleaner; standard interior detail', 'Usually the easiest odor to eliminate; set expectation for 100% elimination if treated promptly'],
      ['Chemical smell (new car, paint, solvents)', 'Off-gassing from upholstery, adhesives, or prior chemical treatment', 'Ventilation; ozone treatment; cabin air filter replacement', 'New vehicle chemical smell dissipates naturally with time; ozone accelerates this process'],
      ['Fuel smell', 'Spilled fuel; fuel system leak', 'Do not treat — identify and repair the fuel system leak first; fuel smell is a safety hazard', 'Never mask a fuel smell with deodorizers; refuse the service until the vehicle is inspected by a mechanic'],
    ]
  );

  c += h2('Ozone Treatment Protocol');
  c += p('Ozone (O₃) is a powerful oxidizing gas that destroys organic odor molecules at a molecular level. An ozone generator placed inside the sealed vehicle produces a high concentration of ozone that penetrates every surface and eliminates embedded odors. It is the most effective tool for eliminating widespread odors.');

  c += procedure('Ozone Treatment Protocol', [
    'Complete all physical cleaning first — ozone treats molecular odors, not physical contamination; physical material must be removed before ozone treatment',
    'Open all seat storage areas, glove box, and center console; trunk must be accessible to ozone if odor is present there',
    'Set the ozone generator inside the vehicle (front seat); close all windows and doors except for the generator\'s intake slot',
    'Run the generator for 1–3 hours depending on severity — light odor: 60 minutes; severe odor: 2–3 hours',
    'Run the vehicle\'s HVAC system in recirculation mode during the ozone treatment to push ozone through the ventilation system',
    'After the treatment: open all doors and windows; allow the vehicle to air out for minimum 60 minutes before anyone enters; ozone at high concentrations is a respiratory irritant',
    'Inspect with olfactory confirmation: enter the vehicle after airing out; the interior should smell clean and neutral; if odor persists — a second treatment is needed',
    'Finish with an interior detailer or light fragrance spray — not to mask odor, but to add a neutral clean scent that the customer associates with the resolved outcome',
  ]);

  c += callout('warning', '**Ozone is an irritant at the concentrations used for odor elimination.** Never operate an ozone generator with people or animals inside the vehicle. Post a visible warning on the vehicle during treatment. Do not enter the vehicle during the ozone cycle without respiratory protection.');

  return c;
}

function dtChSeasonalProtocols() {
  let c = '';
  c += p('Seasonal changes bring predictable demands and service opportunities for detailing operations. Proactively aligning the service menu, marketing calendar, and workshop preparation with the season ensures the shop captures demand at its peak rather than reacting to it after the opportunity has passed.');

  c += h2('Spring — Post-Winter Decontamination Season');
  c += p('Spring is the highest-volume season for decontamination and correction services. Road salt, sand, and winter grime have accumulated on and in vehicles over the cold months. Customers are motivated to restore their vehicle\'s appearance as the weather improves.');

  c += table(
    ['Service', 'Spring Demand Level', 'Primary Reason'],
    [
      ['Full exterior decontamination detail', 'Very High', 'Salt accumulation on paint and undercarriage'],
      ['Paint correction', 'High', 'Winter wash scratches; swirl marks from drive-through car washes'],
      ['Ceramic coating application', 'High', 'Customers coating vehicles before summer show season and outdoor events'],
      ['Interior deep clean', 'High', 'Mud, salt, and winter debris in carpet and crevices'],
      ['PPF application', 'High', 'Pre-summer road trip and show season preparation'],
      ['Wheel restoration', 'High', 'Salt and chemical damage on wheel finish through winter'],
    ]
  );

  c += h2('Summer — UV Protection & Maintenance Season');
  c += p('Summer brings the highest UV intensity and the highest car show and outdoor event activity. The primary customer concern is UV damage and keeping vehicles clean for events.');

  c += checklist([
    'Market UV protection services (coating, PPF, tint) with summer-specific messaging about heat and UV damage',
    'Maintenance wash services are popular — customers want consistent clean appearances for summer events',
    'Window tinting demand peaks in summer — combine with interior protection services for bundle opportunities',
    'Graphene coating is worth highlighting in summer marketing — the heat dissipation benefit is most relevant in high-temperature climates',
    'Offer a "show season ready" package combining correction, coating, and interior detail for the car show market',
  ]);

  c += h2('Fall — Pre-Winter Protection Season');
  c += p('Fall is the second peak season for protection services. Customers who delayed spring correction now feel the urgency of protecting their vehicle before winter salt and cold returns.');

  c += checklist([
    'Market PPF and ceramic coating as pre-winter investments: "protect your paint before the salt season"',
    'Vinyl wrap maintenance inspections: fall is the time to re-seal lifting edges before cold weather causes full delamination',
    'Interior protection: apply fabric and leather coatings before winter boots and heavy clothing cycles begin',
    'Window tint: heat is still meaningful in early fall; the tint demand is present but decelerating',
    'Wheel coating: fall is an excellent time to coat wheels before the salted winter road season',
  ]);

  c += h2('Winter — Indoor Service Season');
  c += p('Winter demand slows for outdoor-dependent services but creates specific opportunities for enclosed indoor services and preparation work.');

  c += checklist([
    'Engine bay detailing: indoor service; no sun restrictions; customers preparing for spring shows are already thinking ahead',
    'Interior deep clean and leather conditioning: protect dried leather during the dry winter indoor environment',
    'Paint correction for vehicles stored indoors: collectors and enthusiasts want their stored vehicles corrected and coated before spring return to service',
    'Gift certificates: holiday season gift certificate sales to automotive enthusiasts; market to partners and spouses',
    'Training and process improvement: slower winter season is the time to train staff, refine procedures, and update the service menu for the coming year',
    'Pre-season ceramic coating specials: book spring coating appointments in winter at a modest discount to smooth revenue flow',
  ]);

  return c;
}

function dtChMobileOperations() {
  let c = '';
  c += p('Mobile detailing extends the service to the customer\'s location — home, workplace, or event venue. It removes the barrier of vehicle drop-off and enables the shop to capture customers who value time over all other considerations. Mobile operations require different equipment, pricing, and service scope than a fixed facility.');

  c += h2('Mobile vs. Fixed Facility — Service Scope Comparison');
  c += table(
    ['Service', 'Suitable for Mobile', 'Notes'],
    [
      ['Express detail (wash, wipe, vacuum)', 'Yes — primary mobile service', 'Core mobile offering; high volume; efficient'],
      ['Standard detail with clay bar', 'Yes — with limitations', 'Requires water supply and drainage; plan accordingly'],
      ['Rinseless wash only', 'Yes — excellent for apartments and workplaces', 'No drainage required; fastest mobile option'],
      ['Interior extraction and deep clean', 'Yes — with wet-dry extractor', 'Portable extractor and heated water system required'],
      ['Machine polishing and paint correction', 'Limited — only if controlled shade available', 'Sunlight makes inspection and correction very difficult; results are inconsistent without raking detail light'],
      ['Ceramic coating application', 'Not recommended', 'Dust, wind, and temperature control cannot be maintained outdoors; coating quality is severely compromised'],
      ['Engine bay decontamination', 'Possible with permission and drainage plan', 'Must confirm drainage is acceptable at the location; not suitable for apartments or enclosed garages'],
    ]
  );

  c += h2('Mobile Operation Equipment Requirements');
  c += checklist([
    'Water source: portable water tank (minimum 80-litre capacity for a standard detail) or confirmed on-site water connection',
    'Water pump: 12V transfer pump for on-demand water delivery from the tank',
    'Drainage: portable wastewater containment mat for enclosed locations; hose-out option confirmed for outdoor locations',
    'Power: vehicle-mounted inverter (2,000W minimum) for wet-dry extractor and polisher if used; generator as backup',
    'Product organization: rolling cabinet or organized crates; all products in sealed, labeled containers',
    'Wet-dry extractor: portable unit with 20+ litre capacity for interior extraction',
    'Lighting: portable LED work light for interior and shaded exterior inspection',
    'Waste disposal: sealed waste water container; do not leave waste water at the customer\'s location',
    'Signage: professional vehicle branding; a mobile detail van is rolling advertising',
  ]);

  c += h2('Mobile Detailing Pricing Model');
  c += p('Mobile detailing commands a premium over fixed-facility pricing to account for travel time, equipment cost, water, and the convenience value delivered to the customer.');

  c += table(
    ['Factor', 'Fixed Facility', 'Mobile Premium'],
    [
      ['Express detail', 'Baseline price', '+25–35% for mobile; +$30–$60 travel fee beyond X km radius'],
      ['Standard detail', 'Baseline price', '+20–30% for mobile'],
      ['Interior extraction', 'Baseline price', '+15–20% for mobile'],
      ['Service area radius', 'N/A', 'Define free-zone radius (typically 15 km); charge per km beyond'],
      ['Minimum service value', 'N/A', 'Set a minimum booking value of $150–$200 to ensure mobile visits are economically viable'],
    ]
  );

  c += h2('Mobile Scheduling Efficiency');
  c += p('Mobile profitability depends on route density — clustering bookings geographically so that travel time between jobs is minimized.');

  c += checklist([
    'Designate service days by zone: Monday/Tuesday = North; Wednesday/Thursday = South; etc.',
    'Offer customers in the same zone a modest incentive to book on the same day as neighboring customers',
    'Limit to 2–3 mobile bookings per day maximum — quality control suffers with more than 3 full details in a single day',
    'Pre-book blocks of time rather than individual jobs where corporate or apartment complex accounts are available',
    'Track revenue per mile driven monthly — this is the key efficiency metric for mobile operations',
  ]);

  return c;
}

function dtChBusinessOperations() {
  let c = '';
  c += p('A detailing business with excellent technical skill but poor business fundamentals is not sustainable. This chapter covers the key business management disciplines that ensure the detailing operation is profitable, predictable, and scalable.');

  c += h2('Revenue Per Labor Hour — The Key Metric');
  c += p('Revenue per labor hour (RPLH) is the most important financial metric for a labor-intensive service business. It measures how efficiently the team converts time into revenue and is the primary tool for identifying whether pricing, service mix, or efficiency needs to be adjusted.');

  c += table(
    ['Service', 'Typical RPLH', 'Target RPLH', 'Improvement Lever'],
    [
      ['Express detail', '$60–$90/hr', '$80–$100/hr', 'Increase speed through process standardization; reduce time per step'],
      ['Standard detail', '$80–$120/hr', '$100–$130/hr', 'Price increase; reduce over-service; bundle add-ons to increase average ticket'],
      ['Paint correction', '$100–$150/hr', '$120–$180/hr', 'Premium positioning; verify correction scope is priced adequately for complexity'],
      ['Ceramic coating application', '$150–$250/hr', '$180–$300/hr', 'Highest RPLH service — prioritize coating sales in the service mix'],
      ['Mobile detail', '$70–$100/hr net', '$90–$120/hr net', 'Route density; reduce travel time; raise mobile premium'],
    ]
  );

  c += h2('Appointment Book Management');
  c += checklist([
    'Fill the appointment book 2 weeks in advance at minimum — running a reactive schedule creates revenue gaps',
    'Designate certain time slots for high-value services (correction, coating) and protect them from being booked by express details',
    'Over-booking buffer: book to 90% of theoretical capacity to allow for detail overruns without impacting the next customer',
    'No-show management: collect a deposit on all bookings above $200; deposit amount deducted from the job on completion',
    'Waitlist management: maintain a waitlist for popular times; fill cancellations from the waitlist within 30 minutes of the slot opening',
  ]);

  c += h2('Staff Productivity Standards');
  c += table(
    ['Role', 'Target Productive Hours / Day', 'Target Revenue Generation / Day', 'Quality Standard'],
    [
      ['Junior detailer (0–1 year)', '6 hours productive out of 8-hour shift', '$480–$600 per day', 'Supervised QC on all completed work'],
      ['Mid-level detailer (1–3 years)', '6.5 hours productive', '$650–$850 per day', 'Self QC + spot-check by lead'],
      ['Senior detailer / lead', '7 hours productive (including QC time on others\' work)', '$900–$1,200+ per day', 'Full self QC + team QC responsibility'],
      ['Coating specialist', '6 hours productive (coating work is precision; allow time)', '$1,000–$2,000+ per day', 'Full self QC on every panel; no compromise'],
    ]
  );

  c += h2('Service Menu Review Cadence');
  c += p('A service menu that was correct two years ago may not be correctly positioned for today\'s market. Quarterly reviews ensure pricing keeps pace with costs and market conditions.');

  c += procedure('Quarterly Service Menu Review', [
    'Calculate actual cost per service: material + labor + overhead allocation for the past quarter',
    'Compare to billed price: identify any services where the gross margin has compressed below 40%',
    'Review competitive positioning: have any new competitors entered the market; has competitor pricing shifted',
    'Customer mix analysis: which services are most popular; which generate the most total margin; adjust marketing focus accordingly',
    'Introduce or retire services: if a service has not been sold more than 3 times in 90 days, evaluate whether it belongs on the menu',
    'Update all printed and digital pricing assets — inconsistent pricing across channels erodes trust',
  ]);

  return c;
}

// ─────────────────────────────────────────────────────────────────────────────
// CERAMIC COATING — ADDITIONAL CHAPTERS
// ─────────────────────────────────────────────────────────────────────────────

function ccChGlassCoating() {
  let c = '';
  c += p('Automotive glass coating is one of the most high-value, low-cost-of-goods services in the protective coating category. A properly applied glass coating dramatically improves rain shedding at highway speeds, reduces ice adhesion in winter, and can extend wiper blade life by minimizing the abrasive contact between dry rubber and uncoated glass.');

  c += h2('Glass Coating Chemistry');
  c += p('Glass coatings are based on fluorinated silane or SiO₂ chemistry, similar to paint coatings but formulated for the non-porous surface of automotive glass. The key difference from paint coatings is that glass has no clear coat — it is a homogeneous inorganic surface, and bonding chemistry must work with the silica matrix of the glass itself.');

  c += table(
    ['Chemistry Type', 'Bond Mechanism', 'Typical Durability', 'Performance Characteristics'],
    [
      ['Fluorinated silane (F-SiO₂)', 'Covalent bond to glass silica matrix', '12–24 months', 'Excellent rain shedding; low surface energy; reduces wiper chatter'],
      ['Nano-SiO₂ / quartz', 'Mechanical adhesion in glass micro-texture', '6–12 months', 'Good clarity; stacks with paint coatings; fast to apply'],
      ['Hybrid fluorocarbon', 'Dual-mechanism: silane + fluoropolymer layer', '18–36 months', 'Premium performance; highest water contact angle; best UV resistance'],
      ['Consumer spray-on', 'Temporary surface adhesion — no curing', '1–4 weeks', 'Acceptable short-term beading; not a professional-grade solution'],
    ]
  );

  c += h2('Glass Preparation Protocol');
  c += p('Glass prep is the most critical phase of the application. Any contamination — mineral deposits, wiper residue, silicone from interior detailing products — will cause the coating to fail prematurely or apply unevenly.');

  c += procedure('Glass Coating Preparation Sequence', [
    'Wash all glass surfaces with a dedicated glass cleaner — avoid any product containing silicone or wax',
    'Clay bar treatment on the exterior glass surface: use a clay bar or glass-specific clay cloth with quick detailer as lubricant — the bar will pick up embedded minerals and wiper residue',
    'Glass polish or glass-specific compound if there is significant wiper chatter, hard water etching, or mineral deposits — apply with a glass polishing pad on a DA polisher at 1500–2000 RPM',
    'Wipe all glass with 99% isopropyl alcohol applied to a clean microfiber — change the cloth if any smearing occurs',
    'Inspect the glass under direct lighting: the surface should appear crystal-clear with no haze, residue, or pitting',
    'Remove all interior rubber seals and tape off the window trim and rubber gaskets — coating on rubber degrades the rubber and creates adhesion problems',
    'Allow the glass to reach room temperature if the vehicle has been in a cold environment — coating below 10 °C reduces adhesion',
  ]);

  c += h2('Glass Coating Application');
  c += procedure('Glass Coating Application Sequence', [
    'Decant 3–5 drops of glass coating onto an applicator block wrapped in a suede or velvet applicator cloth',
    'Apply to the glass in horizontal overlapping strokes across the entire surface — work one window at a time',
    'Cross-hatch with vertical strokes to ensure complete, even coverage — the coating should appear as a thin, slightly hazy layer',
    'Allow flash time per manufacturer specification — typically 60–120 seconds; the surface will shift from hazy to beginning to level',
    'Buff with a clean, dry short-pile microfiber cloth using light circular motion — do not apply pressure',
    'Inspect under raking light for high spots, streaks, or missed areas — re-buff as needed',
    'If high spots are discovered after the coating has begun to cure (typically after 5–10 minutes), they must be removed with a dedicated high-spot remover — do not dry buff a partially cured high spot as this will cause marring',
    'Allow 30–60 minutes before exposing to any moisture; 24-hour full cure before using wipers',
    'Apply a second coat (if product supports) after the first coat has cured 4–6 hours — second coat enhances durability and beading angle',
  ]);

  c += h2('Windshield vs. Side Glass vs. Rear Glass');
  c += table(
    ['Surface', 'Special Considerations', 'Application Adjustments'],
    [
      ['Windshield (exterior)', 'Largest surface; must coexist with wipers; wiper park zone must be coated', 'Work in sections; ensure even flash before buffing; note wiper park zone for full coverage'],
      ['Windshield (interior)', 'Interior glass coatings prevent fogging but require separate interior-safe formula', 'Use interior glass coating only — exterior formulas can release fumes and are not designed for inward-facing surfaces'],
      ['Door glass (tempered)', 'Exposed edges when window lowers — coat the run-off edges if window drops into door', 'Apply to full glass surface; roll down window 5 mm to access the very top edge'],
      ['Rear glass with heated filaments', 'Defroster filaments can cause uneven application and buffing pressure risks', 'Apply coating parallel to filaments; buff parallel to filaments — never cross-buff on defroster glass'],
      ['Sunroof / panoramic glass', 'Often above-installed glass; interior-facing; requires both interior and exterior treatment', 'Access via ladder or elevated platform; interior treatment with interior-safe formula'],
    ]
  );

  c += callout('tip', '**Post-Application Rain Test:** After the coating has cured 24 hours, spray a fine water mist from a distance of 1 meter at a 45° angle to the glass. A properly coated surface will sheet water rapidly at angles above 30°, and individual water droplets will bead into tight spheres on flat sections. This test is excellent for customer education and before/after demonstration.');

  return c;
}

function ccChWheelCaliper() {
  let c = '';
  c += p('Wheel and brake caliper coatings are among the most visually impactful and technically demanding applications in the coating service menu. Wheels and calipers operate in an extreme environment: heat from braking, corrosive brake dust, road salt, stone chips, and cleaning chemicals all attack unprotected surfaces. A correctly applied ceramic coating on wheels and calipers provides meaningful protection and a superior appearance.');

  c += h2('Wheel Coating Challenges');
  c += checklist([
    'Wheel surfaces have complex geometry: spokes, barrel, center, outer lip, and lug nut recesses all require individual attention',
    'Brake dust contains metallic particles that are highly corrosive to lacquer finishes — coating prevents etching',
    'Wheels operate at high temperatures from braking — coating must be heat-stable; most automotive paint coatings are rated to 250 °C but this should be verified before applying to caliper faces',
    'Wheel coatings must be compatible with the wheel finish: polished aluminum, powder coat, painted, and chrome all require different prep and coating selection',
    'Access to the inner barrel of the wheel requires removal — on-vehicle wheel coating covers only the outward-facing surfaces',
    'Lug nut recesses trap cleaning chemicals and contamination; thorough prep inside these areas is critical but difficult',
  ]);

  c += h2('Wheel Prep Protocol — Off-Vehicle (Recommended)');
  c += procedure('Off-Vehicle Wheel Coating Preparation', [
    'Remove wheels from vehicle; place on a wheel stand or hang vertically for 360° access',
    'Clean with alkaline wheel cleaner at manufacturer recommended dilution — allow dwell time; agitate with a wheel woolie on the barrel and a stiff-bristle brush on the face',
    'Iron fallout remover applied to all surfaces — allow 5–8 minutes dwell; purple color change indicates iron contamination is being dissolved',
    'Rinse thoroughly; re-inspect; repeat iron remover application if heavy contamination is still present',
    'Clay bar or clay mitt over all polished and painted surfaces',
    'Machine polish the wheel face if it has swirl marks, water spots, or brake dust etching — compound on a microfiber pad at medium speed',
    'IPA wipe entire wheel including barrel and all recesses — use cotton swabs for lug nut holes',
    'Compressed air blow-out of all cavities before coating to remove any trapped cleaning chemical',
    'Final inspection under LED lighting: the wheel must appear flawless and completely clean before coating begins',
  ]);

  c += h2('Coating Application on Wheels');
  c += procedure('Wheel Coating Sequence', [
    'Start with the inner barrel: apply coating on a wrapped applicator block; work in overlapping strokes; allow flash then buff with a short-nap cloth',
    'Move to the lug nut recesses: apply coating on a cotton swab or small detail applicator; a small folded cloth squares for buffing',
    'Apply coating to spokes from center outward; ensure coverage on all spoke faces including the side edges',
    'Apply to the wheel face in overlapping strokes; allow flash time; buff with light pressure in the direction of the spokes',
    'Apply to the outer lip last; the flat lip surface is easiest; wrap the cloth around a stiff card for the curved lip edge',
    'Second coat application after first coat has cured: apply and buff the same sequence — second coat improves depth and durability',
    'Allow 24 hours before reinstalling on vehicle; 48 hours before first wash',
  ]);

  c += h2('Brake Caliper Coating');
  c += p('Calipers operate in a far more extreme heat environment than wheels. Standard SiO₂ coatings may not provide adequate heat resistance for calipers on performance or frequently braked vehicles. Caliper-specific coatings or high-temperature ceramic coatings rated above 400 °C are recommended.');

  c += table(
    ['Caliper Type', 'Heat Exposure', 'Recommended Coating', 'Notes'],
    [
      ['Standard OEM single-piston', 'Moderate — typically 150–300 °C at caliper body', 'Standard SiO₂ coating (250 °C rated)', 'Standard daily driver; coating will protect against brake dust and cleaning chemical corrosion'],
      ['Multi-piston performance caliper', 'High — 300–500 °C possible on track use', 'High-temp ceramic or dedicated caliper coating (500 °C rated)', 'Verify coating spec before applying; do not use standard paint coatings'],
      ['Powder-coated / painted caliper', 'As above depending on caliper type', 'Use paint-compatible SiO₂ coating', 'Prep must preserve the powder coat — no aggressive machine work'],
      ['Bare cast iron caliper', 'High — heat discoloration common', 'High-temp caliper paint + ceramic topcoat', 'Bare iron must be sealed before coating; surface prep is critical to remove rust'],
    ]
  );

  c += callout('warning', '**Do not apply standard automotive paint coatings to brake rotors or to any surface that contacts brake pads.** Coating on rotor faces causes brake failure. Keep coating at least 10 mm from the rotor edge. Only coat the caliper body and visible caliper bracket surfaces.');

  c += h2('Wheel and Caliper Coating Maintenance');
  c += checklist([
    'Coated wheels should not be cleaned with acidic wheel cleaners — use pH-neutral wheel cleaner only for regular maintenance',
    'Iron fallout remover may be used 2–3 times per year on coated wheels for decontamination — rinse thoroughly and follow with a pH-neutral wash',
    'Annual inspection: include wheel coating condition in the vehicle\'s annual maintenance visit; re-coat if the hydrophobic performance has degraded',
    'Stone chips that penetrate through the coating to the base material should be spot-treated with touch-up paint before re-coating over the repaired area',
    'Advise customers to avoid extended contact between coated wheels and ice-melt chemicals — these can attack the coating over winter months',
    'Calipers: if the vehicle is used for track days, inspect the caliper coating after each track session — extreme heat cycling can accelerate coating wear on performance calipers',
  ]);

  return c;
}

function ccChCoatingInspectionReporting() {
  let c = '';
  c += p('Professional coating services demand equally professional documentation. A coating inspection report serves four purposes: it provides a permanent legal record of the vehicle\'s condition at the time of service; it communicates clearly with the customer what was found and what was done; it validates the warranty provided; and it establishes a baseline for future maintenance visits.');

  c += h2('Pre-Coating Inspection Elements');
  c += table(
    ['Inspection Category', 'What to Assess', 'Documentation Method', 'Customer Communication'],
    [
      ['Paint film thickness', 'Measure each panel with a digital paint depth gauge; record readings', 'Table: panel name + readings in µm', 'Share readings; explain what "factory" reads vs. any repainted panels'],
      ['Paint defect classification', 'Swirl severity (1–5); scratches; water spots; etching; oxidation', 'Annotated diagram with photo for each significant defect', 'Show before photos; explain what is correctable vs. accepted as-is'],
      ['Paint contamination', 'Iron fallout level (light / moderate / heavy); tar spots; tree sap', 'CRM notes; photo if visible', 'Explain why decon adds time and cost'],
      ['Existing coatings', 'Water behavior test; check for prior coating layers', 'Note in report if prior coating detected', 'Prior coating may require additional prep or may void adhesion warranty'],
      ['Non-paint surfaces', 'Trim condition; glass condition; wheel finish', 'Photo documentation', 'Scope agreement: specify which surfaces are included in the coating service'],
      ['Panel repair history', 'Compare thickness readings to factory spec; identify any repainted panels', 'Mark repainted panels on diagram', 'Inform customer of thin clearcoat readings before correction begins'],
    ]
  );

  c += h2('Post-Correction Inspection');
  c += p('After paint correction is complete and before coating is applied, a second inspection confirms that the correction achieved the agreed targets and that the surface is in optimal condition for coating adhesion.');

  c += checklist([
    'Inspect all corrected panels under 3-bulb LED bar at direct, side, and raking angles',
    'Compare before photos to current condition — document the correction result with matching after photos from the same angle and lighting',
    'Re-check paint film thickness after correction — ensure no panel has been cut below 80 µm total or below 20 µm clear coat',
    'Assess any areas that could not be corrected: deeper scratches, stone chips, etching that goes into the base coat — document and confirm customer acceptance',
    'Confirm IPA wipe was completed across all surfaces and no residue, polish dust, or pad lubricant remains',
    'Panel-by-panel sign-off on the correction checklist before the lead installer begins coating application',
  ]);

  c += h2('Coating Application Record');
  c += procedure('Documenting the Coating Application', [
    'Record the coating product name, lot/batch number, and expiry date — this information is critical for warranty validation',
    'Note ambient temperature and relative humidity at the start of the coating session — these affect flash and cure time',
    'Record the application sequence: which panels were coated first, how many layers were applied, flash time observed for each layer',
    'Note any panels where application was interrupted, re-done, or where high spots were encountered and how they were resolved',
    'Record the IR lamp warm-up duration or infrared curing procedure used if applicable',
    'Final inspection notes: all panels reviewed; coating appearance graded (excellent / acceptable / re-done)',
    'Delivery date: the vehicle cannot leave until the coating has reached the minimum pre-delivery cure time specified by the manufacturer',
  ]);

  c += h2('Customer Handover Report Package');
  c += checklist([
    'One-page inspection summary: vehicle details, services performed, defects found and corrected, defects accepted as-is',
    'Photo documentation: minimum 8 before photos and 8 after photos highlighting the most significant correction areas',
    'Coating certificate: product name, date applied, number of layers, warranty term, and warranty registration number if applicable',
    'Care instructions card: laminated or card stock; lists approved wash methods, products to avoid, and first-wash timing',
    'Maintenance schedule: recommended annual inspection date pre-printed or pre-entered as a CRM follow-up',
    'Customer signature on the handover report acknowledges receipt of care instructions and confirms the vehicle was delivered in the condition described',
  ]);

  return c;
}

function ccChLongTermCoatingMaintenance() {
  let c = '';
  c += p('Ceramic coating maintenance is the revenue stream that transforms a one-time installation into a long-term client relationship. An educated customer who maintains their coating correctly will experience better performance, honor the warranty requirements, and return for annual inspections and top-up services — each a revenue opportunity.');

  c += h2('The Coating Maintenance Service Menu');
  c += table(
    ['Service', 'Frequency', 'Duration', 'Price Range', 'What Is Performed'],
    [
      ['Annual Coating Inspection', '12 months post-application', '60–90 min', '$75–$150', 'Decontamination wash; contact angle assessment; visual inspection; maintenance coating top-up if needed'],
      ['Ceramic Boost / Top-Up', '12–18 months or as needed', '90–120 min', '$100–$250', 'Decon wash; SiO₂ spray coating applied over existing ceramic for refreshed hydrophobics'],
      ['Paint Decontamination Wash', '6 months', '45–60 min', '$50–$120', 'Two-stage decon: iron fallout + tar remover; rinse; dry — no polish or coating applied'],
      ['Full Maintenance Detail', '12 months', '3–5 hours', '$250–$450', 'Full decon; clay bar; IPA wipe; coating boost; interior vacuum and wipe-down; glass clean'],
      ['Emergency Contamination Removal', 'As needed', '60–90 min', '$75–$150', 'Immediate response to bird drop etching, tree sap, industrial fallout — addressed before etching occurs'],
    ]
  );

  c += h2('Self-Maintenance Education');
  c += p('The care instructions delivered at pickup are only effective if the customer understands the reasoning behind each rule. A brief verbal explanation at delivery converts a list of restrictions into a protocol the customer values and follows.');

  c += procedure('Customer Maintenance Education at Delivery', [
    'Explain the curing timeline: "For the first 7 days, avoid automated washes, no washing at all for 48 hours — the coating is completing its cross-linking and must not be disturbed"',
    'Demonstrate the water behavior: use a spray bottle on the freshly coated vehicle to show the sheeting and beading — this creates an emotional moment that reinforces care motivation',
    'Specify the wash method: "Two-bucket hand wash with pH-neutral shampoo — or contact-free rinse only. No automated tunnel washes, ever — the brushes contain contamination from every car ahead of yours"',
    'List specific chemicals to avoid: "No wax, no polishing compound, no clay without glass clay, no wheel acid. These products will chemically strip the coating."',
    'Show them the bird drop protocol: "If you see a bird drop, water your car immediately or wipe it off with a damp microfiber. Bird drops are highly acidic and can etch the coating within hours in summer heat"',
    'Provide the maintenance card in physical form — walk them through it line by line',
    'Confirm their annual inspection is booked or pre-schedule it before they leave the lot',
  ]);

  c += h2('Diagnosing Coating Performance Over Time');
  c += table(
    ['Symptom', 'Likely Cause', 'Corrective Service', 'Customer Education Point'],
    [
      ['Water no longer beading', 'Coating hydrophobics depleted; contamination layer', 'Decon wash + coating boost', '"This is normal after 12–18 months — a boost restores it"'],
      ['Water spots forming easily', 'Hard water mineral deposits above coating', 'Spot treatment with dilute acid detailer; decon wash', '"Always dry the car after washing in hard water areas"'],
      ['Surface feels rough / gritty', 'Industrial fallout or brake dust bonded above coating', 'Iron fallout removal; clay treatment', '"Schedule a decon service — this is the coating working, catching contamination before it hits paint"'],
      ['Swirl marks developing', 'Incorrect wash media (automated brush wash or dry wiping)', 'Light machine polish if above coating; re-coat', '"This is why the wash protocol matters — the coating can be polished but once removed the paint is exposed"'],
      ['Coating lifting on edges', 'Insufficient post-application cure; chemical exposure', 'Re-coating of affected panels after prep', '"Which products were used on the car? Some car washes contain stripping agents"'],
      ['Coating appears dull', 'Light contamination film; silicone fallout from neighboring vehicles', 'Decon wash; IPA wipe; assess for re-coat', '"SiO₂ spray contamination from wand wash enclosures is a known issue"'],
    ]
  );

  return c;
}

function ccChSalesPresentationCoating() {
  let c = '';
  c += p('Selling ceramic coating is a fundamentally consultative process. Customers who arrive with no prior knowledge of ceramic coating need to be educated before they can make a meaningful buying decision. Customers who arrive with online research need their misconceptions addressed and their specific concerns validated. In both cases, the sales conversation structure determines whether the customer sees the service as valuable or overpriced.');

  c += h2('Understanding Customer Motivation Types');
  c += table(
    ['Motivation Type', 'What They Actually Want', 'Sales Approach', 'Key Objection to Address'],
    [
      ['Appearance-driven', '"I want my car to look amazing all the time"', 'Lead with the visual result; before/after photos; water behavior demo', '"Will it really look that different?" — Yes, demonstrate it'],
      ['Protection-driven', '"I paid a lot for this car; I want to protect it"', 'Lead with value preservation; resale impact; paint replacement cost', '"Is it really necessary?" — Frame it against the cost of paint correction or respraying'],
      ['Convenience-driven', '"I hate washing my car"', 'Lead with ease of maintenance; self-cleaning hydrophobics; wash time savings', '"It can\'t be that low-maintenance" — Show the water behavior; explain two-bucket wash'],
      ['Status-driven', '"I want the best protection available"', 'Lead with the premium tier; multi-layer system; product credentials', '"Is this the best one available?" — Present your top-tier system confidently'],
      ['Value-driven', '"I want to make sure this is worth it"', 'Lead with cost comparison: correction costs, paint preservation, resale', '"It\'s expensive" — Break it down to cost per day over the warranty period'],
    ]
  );

  c += h2('The Coating Demonstration Protocol');
  c += p('A physical demonstration converts a sales conversation into an experience. No verbal description of hydrophobic performance equals the impact of showing a customer water beading off a freshly coated surface. Maintain a demonstration panel in the shop at all times for this purpose.');

  c += procedure('In-Shop Coating Demonstration', [
    'Maintain two demonstration tiles: one uncoated (cleaned and polished) and one freshly ceramic-coated from the same substrate',
    'Bring the customer to the demonstration area — framing it as "let me show you the difference rather than just tell you" builds anticipation',
    'Apply a water mist from a spray bottle to both tiles simultaneously; allow the customer to observe the behavior',
    'Invite the customer to touch both tiles to feel the hydrophobic slickness of the coated surface versus the uncoated surface',
    'Apply a small amount of diluted coffee or colored liquid to both tiles; show how the coated surface beads and repels while the uncoated surface wets and stains',
    'If time allows, demonstrate UV exposure effect by showing a faded panel versus a protected panel photo from the portfolio',
    'Invite questions during the demonstration — curiosity at this stage is strong buying intent',
  ]);

  c += h2('Addressing the Most Common Objections');
  c += table(
    ['Objection', 'What It Really Means', 'Effective Response'],
    [
      ['"It\'s too expensive"', 'They haven\'t connected the value to the price', '"A paint correction on this vehicle if the paint oxidizes or deep scratches develop runs $500–$1,500. This coating is preventative — it\'s far less expensive than correcting problems after they occur."'],
      ['"My neighbor said ceramic is just marketing"', 'They\'ve heard skeptical information; they\'re testing your confidence', '"Ceramic coatings are validated by paint film thickness measurements before and after — the chemistry is real, measurable, and has been used on aircraft and industrial applications for decades."'],
      ['"Can\'t I just wax it?"', 'They\'re comparing to a familiar product', '"Wax is a sacrificial coating with 4–8 weeks of protection. Ceramic bonds permanently to the paint at the molecular level — they\'re fundamentally different products. Wax repels water. Ceramic becomes part of the paint surface."'],
      ['"I\'ll think about it"', 'They\'re not yet convinced; risk aversion', '"Of course — take your time. Just so you know, the longer paint goes unprotected, the more correction work it needs before coating is possible. I\'m happy to reserve a date while you decide."'],
      ['"I saw it cheaper online"', 'Price comparison without quality context', '"Consumer-grade ceramic kits contain 3–5% SiO₂. The product we apply is a professional-grade formulation not available retail. The difference shows in durability — consumer kits last 6 months; our application carries a [X]-year warranty."'],
    ]
  );

  c += callout('tip', '**Bundling tip:** Ceramic coating consultations are an ideal upsell moment for PPF on high-impact zones. Frame it as: "Most customers who invest in ceramic coating also choose to protect the most vulnerable areas — the front bumper, hood, and mirrors — with paint protection film. Would you like me to show you what that would look like on your specific vehicle?" This addition can increase the average job value by 40–60%.');

  return c;
}

// ─────────────────────────────────────────────────────────────────────────────
// DETAILING — ADDITIONAL CHAPTERS
// ─────────────────────────────────────────────────────────────────────────────

function dtChWaterlessWashing() {
  let c = '';
  c += p('Waterless and rinse-less washing techniques are essential skills for any professional detailer operating in water-restricted environments, mobile operations, indoor shows, or winter conditions. Executed correctly, these methods achieve a clean, protected finish without any water connection. Executed incorrectly, they cause fine scratches that undermine the entire service quality standard.');

  c += h2('Waterless vs. Rinse-Less vs. Waterless Polish');
  c += table(
    ['Method', 'Water Used', 'Best Application Condition', 'Surface Contamination Level', 'Scratch Risk'],
    [
      ['Waterless wash', '0 mL', 'Lightly dusty vehicles; indoor display cars; show detailing', 'Very light dust only', 'Highest if heavy dirt is present'],
      ['Rinse-less wash (ONR method)', '1–2 gallons for full vehicle', 'Lightly to moderately dirty; no heavy mud or grit', 'Light to moderate', 'Low with correct dilution and lubrication'],
      ['Waterless polish (combo products)', '0 mL', 'Paint maintenance between details; light contamination removal with minor swirl reduction', 'Very light — must be clean', 'Moderate — abrasives in some formulas'],
      ['Traditional wash (baseline)', '20–40 gallons', 'Heavily contaminated vehicles; after off-road use', 'Any level', 'Lowest when technique is correct'],
    ]
  );

  c += h2('Rinse-Less Wash (Reduced Water Method) Protocol');
  c += procedure('Rinse-Less Wash Procedure', [
    'Prepare a diluted solution: use a full-size bucket with approximately 2 gallons of water and manufacturer-specified rinse-less product dilution (typically 1:64 to 1:256)',
    'Pre-soak multiple clean microfiber cloths in the solution — these are your lubricated wash cloths',
    'Start on the highest, least contaminated surfaces: roof first, then glass, then upper panels',
    'Work one section at a time: wring out excess from a soaked cloth, lay on the panel, and wipe in straight lines from top to bottom — never circular',
    'Use a fresh face of the cloth for each wipe — fold the cloth to expose a fresh surface; never re-use a dirty face on the paint',
    'Follow immediately with a dry microfiber to remove residue and buff to a streak-free finish',
    'Move to the next section; replace cloths when all faces are dirty — never use a saturated-with-dirt cloth',
    'Wheels and sills last — use the dirtiest cloths on the lowest contamination areas or designate separate cloths for these areas entirely',
    'Inspect all surfaces under a light before completing: look for any missed areas, streaks, or smearing',
  ]);

  c += h2('Show Detailing Between Classes');
  c += p('Car show environment detailing is a specialized application of waterless techniques. Show cars are often coated and in excellent condition — the task is maintaining that condition between judging classes or during a multi-day event.');

  c += checklist([
    'Use a dedicated show-detail spray formulated to enhance gloss and provide slick protection — not a cleaner',
    'Microfibers used for show detailing must be specifically reserved for this purpose — washed and dried at low temperature without fabric softener',
    'One panel at a time: one spray; one wipe with a folded microfiber; one dry buff with a second microfiber — never re-spray over a buffed area',
    'Glass: use a separate glass-specific detail spray and lint-free glass cloths — no overlap with paint cloths',
    'Tires and trim: apply tire dressing and trim protectant before the car enters judging — apply 30 minutes ahead; buff to a satin finish — high-gloss tire shine that flings is never appropriate for a show car',
    'Keep the show kit compact: 4 microfibers, 1 detail spray, 1 glass spray, 1 tire/trim product, lint roller for interior — everything in a branded kit bag',
  ]);

  return c;
}

function dtChPaintProtectionBasics() {
  let c = '';
  c += p('Detailers are frequently the first professionals to discuss long-term paint protection with a customer. Understanding the full spectrum of protection options — from wax to sealant to ceramic coating to paint protection film — allows the detailer to position services appropriately, set accurate expectations, and make effective upsell recommendations that genuinely serve the customer\'s needs.');

  c += h2('The Paint Protection Spectrum');
  c += table(
    ['Product Type', 'Active Chemistry', 'Durability', 'Protection Level', 'Application Method', 'DIY or Professional'],
    [
      ['Carnauba wax', 'Natural wax matrix; sacrificial layer', '4–8 weeks', 'UV and minor contamination buffer; zero impact resistance', 'Hand application; machine application', 'Both; professional application superior'],
      ['Synthetic paint sealant', 'Polymer cross-linked with paint', '3–6 months', 'Better UV and chemical resistance than wax; still sacrificial', 'DA machine or hand application', 'Both'],
      ['Spray ceramic / SiO₂ boost', 'Si-based hydrophobic layer; partially cured', '3–12 months', 'Good hydrophobics; light chemical and UV resistance', 'Spray and wipe over clean paint', 'Both; professional for best adhesion'],
      ['Professional ceramic coating', 'Cross-linked quartz/silica bonded to clear coat', '2–10 years (product-dependent)', 'Excellent UV, chemical, and minor impact resistance; permanent hydrophobics', 'Professional application with leveling', 'Professional only'],
      ['Paint protection film (PPF)', 'Polyurethane film; self-healing topcoat', '5–10 years', 'Physical impact, scratch, chemical resistance; self-healing', 'Professional installation with heat forming', 'Professional only'],
    ]
  );

  c += h2('Helping Customers Choose the Right Protection');
  c += procedure('Protection Recommendation Conversation', [
    'Ask about the customer\'s primary concern: "What are you most worried about with this vehicle\'s paint?" — answers cluster into appearance, protection, convenience, or value',
    'Ask about their wash habits: "Do you hand wash, use a self-serve bay, or go through an automated wash?" — this determines which products will survive their routine',
    'Ask about vehicle usage: "Is this a daily driver, a weekend car, or a show vehicle?" — usage determines exposure level and appropriate protection tier',
    'Ask about budget range: "For paint protection, we have options from around $X for a sealant up to $X for our top-tier ceramic system — is there a range that works for you?"',
    'Present two options, not one: the "good" option and the "better" option — let the customer self-select up rather than feeling pushed',
    'Explain the trade-off of each: "The sealant is great value and gives 6 months of protection; the ceramic gives 5 years and means less maintenance work for you"',
    'If the customer selects a lower tier, honor that choice enthusiastically — do not make them feel wrong; record the recommendation in the CRM for future follow-up',
  ]);

  c += h2('Sealant and Wax Application Standards');
  c += procedure('Machine Wax or Sealant Application', [
    'Surface must be clean, decontaminated, and if being detailed: corrected and IPA-wiped before wax or sealant is applied',
    'Apply product to a foam applicator pad on the DA polisher — typically 4 pea-sized dots around the pad face',
    'Spread at very low speed (speed 1 or free-spin) to distribute product across the section before ramping up to working speed',
    'Work at medium speed (3–4 on a 6-speed DA) with light to moderate pressure — no heat generation required for wax/sealant',
    'Overlapping passes across the panel in horizontal, then vertical cross-hatch pattern — ensure complete coverage',
    'Allow the product to haze to a light white or clear haze per manufacturer instructions — typically 2–5 minutes',
    'Buff with a clean, plush 500+ GSM microfiber using light circular then straight strokes — the finish should be uniform with no streaking',
    'Inspect under LED lighting before moving to the next panel',
  ]);

  return c;
}

function dtChProfessionalWashSetup() {
  let c = '';
  c += p('The professional wash setup is the foundation on which all other detailing work is built. A correctly configured wash station with properly maintained equipment, appropriate products for the soil level and surface type, and a disciplined workflow prevents the cross-contamination, swirl introduction, and surface damage that distinguish amateur results from professional-grade outcomes.');

  c += h2('Two-Bucket Wash Setup');
  c += procedure('Two-Bucket Wash Configuration', [
    'Fill Bucket 1 (wash bucket) with clean water and pH-neutral car shampoo at manufacturer dilution — typically 30–50 mL per 10-liter bucket',
    'Fill Bucket 2 (rinse bucket) with clean water only — no soap; this bucket receives the dirty mitt between passes',
    'Place a grit guard at the bottom of each bucket: the grit guard traps dirt below the water surface and prevents it from being re-loaded onto the mitt',
    'Pre-wash the vehicle with a foam cannon or pressure washer to remove loose soil before any contact wash — this reduces the contamination load dramatically',
    'Use a dedicated plush wash mitt (microfiber or lambswool) — never a sponge, which traps grit and causes scratching',
    'Work top to bottom: roof first; then hood and trunk; then upper panels; then lower panels; then sills and wheels last with a separate bucket and mitt dedicated to lower contamination',
    'Rinse the mitt in the rinse bucket before each new load of shampoo — agitate against the grit guard surface to dislodge dirt',
    'Rinse the vehicle top to bottom with pressure washer or garden hose; start from the highest point and work down',
    'Dry immediately with clean microfiber drying towels or a forced-air dryer — avoid air-drying which leaves water spots',
  ]);

  c += h2('Wash Chemistry Selection Guide');
  c += table(
    ['Situation', 'Product Type', 'pH Range', 'Notes'],
    [
      ['Normal weekly maintenance wash', 'pH-neutral shampoo', '7–8', 'Safe on all coatings, wax, and sealants; lubricating; suds well for mitt lubrication'],
      ['Post-rain contamination removal', 'pH-neutral + decon additive', '7–8', 'Some maintenance shampoos contain mild decon chemistry; check compatibility with coating'],
      ['Heavy road grime (winter / construction)', 'Alkaline prewash spray', '9–11', 'Applied as touchless pre-wash only; rinse thoroughly before contact wash; can strip wax/sealant'],
      ['Coating maintenance (annual decon)', 'Iron remover + pH-neutral wash', '7–8 for wash; 4–6 for iron remover', 'Iron remover applied separately before wash; rinse fully before wash step'],
      ['Engine bay wash', 'Low-alkaline degreaser diluted 1:10', '8–9', 'Protect electrical components; work cool engine only; rinse thoroughly'],
      ['Interior fabric cleaning', 'Fabric-specific cleaner; pH neutral to slightly alkaline', '7–9', 'Test in inconspicuous area; dilute for light soiling; use extraction for deep cleaning'],
    ]
  );

  c += h2('Drying Technique Standards');
  c += checklist([
    'Use microfiber drying towels with GSM of 500 or higher — lower GSM towels drag on the paint and cause micro-marring',
    'Panel wipe technique: lay the towel flat on the panel and glide it across — do not rub back and forth',
    'Towels used on bodywork panels are never used on glass or sills — cross-contamination risk',
    'Forced-air drying (leaf blower or dedicated car dryer) is preferred: zero paint contact; removes water from body seams and mirrors where towels cannot reach',
    'After forced-air, use a detail spray and single large drying towel for any remaining water droplets on flat surfaces',
    'Panel gaps and door jambs require a dedicated small towel or compressed air — water trapped in gaps stains lower paint when the door opens',
    'After drying, inspect all glass for water spots before the customer arrives — glass should be addressed with a glass-specific cleaner if spots are present',
  ]);

  return c;
}

function dtChExteriorTrimProtection() {
  let c = '';
  c += p('Exterior plastic and rubber trim — black plastic bumpers, window trim strips, door moldings, mirror housings, roof rails — degrades predictably when unprotected. UV exposure oxidizes and fades black plastic to a chalky grey; rubber gaskets harden and crack; chrome-look plastic trim loses its depth. Proper trim protection is a core element of any comprehensive detail package and a recurring maintenance revenue opportunity.');

  c += h2('Trim Degradation Mechanism');
  c += p('Most automotive exterior trim is made of EPDM rubber, TPO (thermoplastic polyolefin), or ABS plastic — each containing UV stabilizers that deplete over time. Once the UV stabilizers are consumed, the material oxidizes and fades. This process is irreversible on a cellular level — restoration can improve appearance but cannot fully restore original depth of color without applying a coating or sealant that replaces the lost surface chemistry.');

  c += table(
    ['Material', 'Degradation Signs', 'Restoration Possible', 'Protection Method', 'Service Life of Treatment'],
    [
      ['Black EPDM rubber trim', 'Fading to grey; chalky surface; dry texture', 'Yes — significant improvement with trim restorer', 'Trim restorer + SiO₂ coating', '6–12 months with SiO₂ topcoat'],
      ['Black TPO plastic', 'Grey fading; surface oxidation; loss of texture depth', 'Yes — light wet sanding + trim coat for severe cases', 'Trim restorer; trim-specific ceramic', '12–24 months with ceramic'],
      ['Chrome-look plastic trim', 'Peeling; flaking; yellowing of underlying plastic', 'Partial — peeling chrome cannot be restored; base can be coated', 'UV-resistant trim sealant; wrapping is an option', '6–12 months'],
      ['ABS plastic (body cladding)', 'Chalky grey; surface pitting in advanced cases', 'Yes for early-stage; surface prep + trim coat', 'Trim-specific ceramic or aerosol sealant', '12–18 months'],
      ['Rubber door seals / window gaskets', 'Cracking; hardening; loss of sealing effectiveness', 'Partial — surface conditioning; full gasket replacement for cracked material', 'Rubber conditioner / protectant', '3–6 months'],
    ]
  );

  c += h2('Trim Preparation and Restoration');
  c += procedure('Exterior Trim Restoration Sequence', [
    'Assess the trim: categorize as light fade (within normal detail service), medium fade (requires trim restorer application), or severe fade (requires wet sanding or panel replacement discussion)',
    'Clean the trim surface with an all-purpose cleaner at 1:10 dilution; agitate with a stiff detailing brush; wipe with a clean microfiber',
    'For medium-fade trim: apply a dedicated trim restorer using a foam applicator in overlapping strokes; work into the texture of the trim with the applicator; allow 5 minutes dwell; wipe excess with a clean microfiber; repeat 2–3 coats until the surface returns to a consistent dark, matte finish',
    'For severely faded trim with surface chalking: wet-sand lightly with 1500-grit wet/dry paper, keeping the trim wet; this removes the oxidized surface layer; follow with 2000-grit for smoothing; then apply trim restorer as above',
    'Protect the adjacent painted panels with masking tape before any sanding or application — restorer products will stain paint if not wiped immediately',
    'Apply a trim-specific SiO₂ sealant or ceramic coating as the final protective layer — these slow the re-oxidation process and extend the result',
    'Inspect the trim result under natural light: the surface should be uniform in color and sheen with no restorer residue on adjacent panels or glass',
  ]);

  c += h2('Trim Protection as a Package Add-On');
  c += callout('tip', '**Selling trim protection:** During any vehicle inspection, photograph any visibly faded trim before service and show the before photo during the delivery walkthrough to demonstrate the improvement. Quantify the before/after visually — faded trim before and restored trim after is one of the most striking transformations in detailing and one of the easiest upsells. Present trim protection as an add-on to any full detail at a clearly defined price point ($30–$80 depending on trim complexity).');

  c += checklist([
    'Every full detail quote should include a trim protection line item — even if the customer declines, document the offer in the CRM',
    'Trim restoration is a standalone service for vehicles where the trim is severely faded but the paint does not require other detailing work',
    'Window trim and door seal conditioning should be included in premium full detail packages — it\'s a small cost of goods with high perceived value',
    'Include trim protectant in the maintenance care kit provided to coating customers — extends trim appearance between annual inspections',
    'Photograph all trim conditions at intake — this protects the shop and also creates the documentation needed to demonstrate the improvement at delivery',
  ]);

  return c;
}

function dtChDocumentationJobCards() {
  let c = '';
  c += p('Professional documentation systems transform a detailing shop from a tradesperson\'s operation into a structured business that can be managed, scaled, and sold. Every job must have a written record, every vehicle must have a documented condition at intake, and every service performed must be traceable to a technician, a product, and a time stamp.');

  c += h2('The Job Card System');
  c += p('A job card is the single source of truth for a detail job. It accompanies the vehicle from intake through service and delivery. Whether digital (via CRM) or physical (on paper), the job card contains all information the technician needs to perform the service and all information the front desk needs to communicate with the customer.');

  c += table(
    ['Job Card Field', 'Purpose', 'Who Fills It', 'When'],
    [
      ['Customer name and contact', 'Identity and communication', 'Front desk at intake', 'Before vehicle arrives'],
      ['Vehicle description and VIN last 6', 'Vehicle identification and legal protection', 'Front desk or inspector at intake', 'At intake'],
      ['Services authorized', 'Scope of work; prevents disputes', 'Advisor with customer signature', 'Before service begins'],
      ['Pre-existing conditions noted', 'Legal protection; damage documentation', 'Inspector with customer sign-off', 'At intake walkaround'],
      ['Products to be used', 'Quality record; for warranty validation', 'Technician at start of job', 'When service begins'],
      ['Work sequence log', 'Time management; technician accountability', 'Technician throughout service', 'During service'],
      ['QC sign-off', 'Final inspection passed', 'Lead or QC inspector', 'Before delivery'],
      ['Delivery condition notes', 'Post-service documentation', 'Front desk at delivery', 'At customer handover'],
    ]
  );

  c += h2('Photo Documentation Standards');
  c += procedure('Vehicle Photo Documentation Protocol', [
    'Photograph the vehicle before any work begins — exterior: all four corners, all four sides, roof, glass, wheels — minimum 20 photos',
    'Photograph any pre-existing defects individually with a raking-light flash or inspection light to highlight depth — chip, scratch, or dent must be clearly visible in the photo',
    'Time-stamp photos automatically through the CRM photo upload function or ensure the device date/time is accurate',
    'Photograph the vehicle in progress at any stage where a significant correction or application is being documented for the customer',
    'Post-correction: photograph all corrected areas from the same angle as the pre-correction photos — this enables side-by-side before/after presentation',
    'Post-detail: photograph the completed vehicle in the same positions as the intake photos — before/after documentation for marketing use (with customer permission) and for the delivery presentation',
    'Upload all photos to the CRM before the customer arrives for pickup — never present photos from a personal device as the primary documentation',
  ]);

  c += h2('CRM Record Completeness Standards');
  c += checklist([
    'Every customer interaction (call, text, email) is logged in the CRM under the customer record — not in a personal notes app or on paper',
    'Every vehicle record includes the VIN or last 6 digits, year, make, model, color, and odometer reading',
    'Every job record is linked to a customer record — orphaned jobs (no customer record) are not permitted',
    'Warranty registration is entered into the CRM at the time of the job close — not retroactively',
    'Follow-up tasks are created at job close for every customer: 7-day check-in reminder; annual inspection reminder; review request',
    'CRM data is audited monthly: incomplete records are flagged and completed by the responsible staff member',
    'Customer communication preferences are recorded: "prefers text", "do not call before 9 AM", "email only for updates" — these must be honored',
  ]);

  return c;
}

function dtChGarageAndStorageDetailing() {
  let c = '';
  c += p('A growing segment of the detailing market involves vehicles that are stored rather than driven — classic cars, collector vehicles, exotic supercars kept in climate-controlled facilities, and seasonal-use vehicles. Detailing for storage requires a fundamentally different approach than detailing for daily use: the goal is to protect the vehicle from dormancy-related deterioration and ensure it is in pristine condition when the owner returns.');

  c += h2('Pre-Storage Detail Checklist');
  c += checklist([
    'Exterior wash and decontamination: remove all road contamination, bird drops, and industrial fallout before storage — these continue to etch paint under a cover',
    'Paint protection application or refresh: if the vehicle has no ceramic coating, apply a sealant or wax before storage; if coated, perform decon wash and top-up',
    'Glass: clean all exterior glass surfaces; apply glass coating if not already coated — glass water spots are almost impossible to remove without polishing after long storage',
    'Rubber seals and trim: condition all exterior rubber with a UV-protective rubber conditioner — dry rubber cracks over storage',
    'Wheels and tires: clean thoroughly including inner barrel; apply tire protectant; inflate tires to the upper end of the manufacturer range to compensate for pressure loss during storage',
    'Interior: vacuum all surfaces; extract any moisture from carpets; treat leather with a conditioner; place a desiccant pack inside the vehicle to absorb moisture',
    'Engine bay: light cleaning; check for any current fluid leaks that should be resolved before storage',
    'Final inspection and photo documentation: photograph the vehicle from all angles immediately before storage — this is the baseline for any insurance or condition dispute',
  ]);

  c += h2('Post-Storage Inspection and Detailing');
  c += procedure('Post-Storage Detail Sequence', [
    'Remove any cover carefully — static charge on the cover can attract dust and cause scratching if the cover is dragged across the paint',
    'Inspect the cover itself for signs of moisture trapping, mold, or debris — a contaminated cover should not be replaced on the vehicle',
    'Visual inspection of the vehicle before any washing: look for signs of pest activity, moisture intrusion, fluid leaks, or tire flat-spotting',
    'Exterior wash using the two-bucket method or rinse-less wash if the vehicle was stored under a cover in a clean environment',
    'Inspect paint surface under inspection lighting: storage can cause moisture spotting, cover transfer marks, or adhesion failures in wax or sealant',
    'Correct any surface issues found before applying fresh protection',
    'Interior inspection: check for moisture damage to leather, mold in carpets or under floor mats, or pest evidence',
    'Road-test preparation check: verify tire pressure, check fluid levels, confirm the vehicle is safe to operate before delivery to the customer',
  ]);

  c += h2('Long-Term Storage Paint Maintenance Programs');
  c += p('Collector car facilities and high-end storage operations represent a niche but high-value recurring service opportunity. A vehicle in storage for 6+ months benefits from scheduled mid-storage visits from the detailer, even without the owner present.');

  c += table(
    ['Service Program', 'Frequency', 'What Is Performed', 'Pricing Model'],
    [
      ['Monthly storage inspection', 'Monthly', 'Visual inspection; cover check; report to owner with photos', 'Retainer: $50–$100/month'],
      ['Quarterly maintenance detail', 'Every 3 months', 'Cover removal; rinse-less wash; decon; protection refresh; tire pressure check; re-cover', 'Per-service: $150–$300'],
      ['Annual full storage detail', 'Annually', 'Full detail, decon, correction if needed, full protection application, interior conditioning, full photo report', 'Per-service: $400–$800+'],
      ['Pre-show preparation', 'As requested', 'Show-quality detail; clay; correction; wax or coating; tire dressing; interior show prep', 'Per-service: $300–$600+'],
    ]
  );

  return c;
}

function ccChChemistryDeep() {
  let c = '';
  c += p('Understanding the chemistry of ceramic coatings at a deeper level allows technicians to make better decisions about product selection, application conditions, and troubleshooting. This chapter covers the key chemical concepts without requiring a chemistry degree — practical knowledge for professional application.');

  c += h2('SiO₂ Concentration and What It Means');
  c += p('Silicon dioxide (SiO₂) concentration is commonly cited in marketing materials and on product labels. Understanding what the concentration actually means — and what it does not mean — prevents misinterpretation and enables more accurate conversations with customers.');

  c += table(
    ['SiO₂ Concentration', 'Product Category', 'Application Method', 'Expected Result', 'Important Context'],
    [
      ['3–10% SiO₂', 'Consumer spray coatings; maintenance sprays', 'Spray-and-wipe; no leveling required', '3–6 months durability; enhanced hydrophobics', 'High concentration of carrier solvents; actual cross-linked SiO₂ layer is very thin'],
      ['15–30% SiO₂', 'Entry-level professional coatings', 'Applicator block; leveling required', '1–2 years durability; hard surface layer', 'Adequate for protection; requires professional technique for consistent results'],
      ['50–70% SiO₂', 'Mid-tier professional coatings', 'Applicator block; flash and level with strict timing', '3–5 years durability; high scratch resistance', 'High SiO₂ content requires precise application temperature and humidity; more demanding to apply'],
      ['70–85% SiO₂ + TiO₂ additives', 'Premium professional coatings', 'Panel-by-panel application; IR cure recommended', '5–10 years rated; highest scratch and chemical resistance', 'Premium pricing justified by performance; most sensitive to application conditions; professional certification often required by manufacturer'],
      ['Graphene-enhanced', 'Next-generation coatings', 'As above; some with different carrier solvents', 'Comparable or exceeding SiO₂ performance; improved thermal resistance', 'Graphene platelets improve heat resistance and may reduce water spotting; not a simple upgrade — different chemistry requires different technique'],
    ]
  );

  c += h2('The Role of Carrier Solvents');
  c += p('The SiO₂ or TiO₂ particles must be delivered to the surface in a liquid carrier that evaporates after application, leaving the active chemistry behind. The type and ratio of carrier solvent is a critical factor in how the coating behaves during application.');

  c += checklist([
    'Fast-evaporating solvents (IPA-based): shorter flash times; require precise application technique; more sensitive to high temperature',
    'Slow-evaporating solvents (hybrid carrier systems): more forgiving in warm conditions; longer working time; may require additional buffing passes to prevent high spots',
    'Solvent evaporation rate explains why the same coating applied in summer versus winter behaves very differently — ambient temperature dramatically changes the flash window',
    'Checking the solvent type in the product technical data sheet (TDS) enables the technician to adjust technique rather than fighting the product in challenging conditions',
    'Never mix coatings from different brands in the same application session — carrier solvent incompatibility can cause surface hazing or adhesion failure between layers',
  ]);

  c += h2('Cross-Linking and Cure Stages');
  c += procedure('Understanding the Cure Stages', [
    'Stage 1 — Flash (0–5 minutes): solvent evaporates; coating transitions from wet to tacky; this is when leveling must occur; leveling after this stage causes marring',
    'Stage 2 — Initial cure (5–60 minutes): cross-linking begins between SiO₂ molecules and the clear coat surface; coating develops from tacky to tack-free; IR curing can be applied to accelerate this stage',
    'Stage 3 — Handling hardness (1–12 hours): surface has enough hardness to handle without direct touch; still sensitive to water, chemical exposure, and mechanical contact',
    'Stage 4 — Full cure (7–30 days): cross-linking is complete; final hardness (measured in pencil hardness: H to 10H) is achieved; full chemical and UV resistance realized',
    'Temperature effect: every 10 °C increase approximately halves the cure time; IR lamps exploit this by raising the local panel surface temperature to 60–80 °C, compressing Stage 2 and 3 into a controlled, rapid process',
  ]);

  c += h2('Pencil Hardness and Why It Matters');
  c += p('Pencil hardness is the industry standard measure for coating scratch resistance. The scale runs from 6B (very soft) through HB (medium) to 10H (very hard). Factory automotive clear coat typically tests at 2H–4H. Professional ceramic coatings claim ratings of 9H, though this requires interpretation.');

  c += callout('tip', '**Interpreting 9H claims:** The pencil hardness test is performed on the coating surface, not on the underlying clear coat. A "9H coating" means the coating itself resists a 9H pencil. However, the coating is bonded to the clear coat below it, which may be 2H–4H. A swirl mark or scratch that penetrates the coating and into the clear coat will still damage the paint. The coating\'s hardness reduces the frequency and depth of micro-marring — it does not make the vehicle indestructible. This context is important when educating customers who believe a "9H" coating means no scratches ever.');

  return c;
}

function ccChCompleteWorkflow() {
  let c = '';
  c += p('This chapter consolidates the complete vehicle workflow from customer drop-off through coating delivery into a single reference document. It is designed for use as an operational standard operating procedure and as a training guide for new coating technicians. Every step is sequenced precisely; no step may be skipped; each step has a defined completion criterion before the next begins.');

  c += h2('Phase 1 — Vehicle Intake (15–20 minutes)');
  c += procedure('Vehicle Intake Sequence', [
    'Customer and technician review the vehicle together under adequate lighting: all four sides, roof, glass, wheels, and interior — note all pre-existing damage on the intake form',
    'Measure paint film thickness on all primary panels using a calibrated digital gauge: record the value for each panel in the job card',
    'Photograph all panels, all glass, all wheels, and all pre-existing damage: timestamp all photos and upload to the CRM',
    'Discuss service scope with customer: confirm which panels are included; confirm any panels excluded from correction or coating',
    'Customer signs the service authorization form: scope confirmed; pre-existing damage acknowledged; pricing approved',
    'Move vehicle into the service bay: wash bay first if arriving dirty; coating bay only after full decontamination',
  ]);

  c += h2('Phase 2 — Wash and Decontamination (45–90 minutes)');
  c += procedure('Full Decontamination Sequence', [
    'Pre-rinse entire vehicle with water to remove loose dirt',
    'Foam cannon application of pH-neutral shampoo: dwell 3 minutes; rinse from top to bottom',
    'Two-bucket hand wash with wash mitt: work from roof to lower panels; rinse mitt in rinse bucket between each panel',
    'Iron fallout remover applied to all paint and wheel surfaces: dwell 4–7 minutes; agitate with a soft brush on heavy fallout areas; rinse thoroughly',
    'Tar and adhesive remover on lower panels, behind wheels, and any visible tar deposits: wipe with clean microfibers; rinse',
    'Clay bar treatment on all paint surfaces using clay lubricant: glide in straight strokes; fold clay to expose a fresh face when it loads with contamination',
    'Final rinse: remove all product residue; inspect panels while wet for any remaining contamination',
    'Dry with forced-air blower and clean microfiber drying towels: ensure all panel gaps and mirrors are fully dry',
    'Move vehicle to correction bay: do not introduce the vehicle to the correction area while wet',
  ]);

  c += h2('Phase 3 — Paint Correction (2–12 hours depending on tier)');
  c += procedure('Paint Correction Workflow', [
    'Inspect all panels under 3-bulb LED inspection bar: document defect map for each panel (type and severity of defects)',
    'Select correction products: choose compound grit and pad combination based on defect severity and paint hardness',
    'Perform test spot on each panel: 5 cm × 5 cm; assess result under inspection light; confirm products correct the defects before committing to the full panel',
    'Correct each panel systematically: use DA or rotary at the confirmed settings; 3–4 overlapping passes; maintain consistent speed and pressure',
    'After correcting each panel, check paint film thickness with gauge: if any reading approaches 80 µm total or 20 µm clear coat, stop correction on that panel; document and notify customer',
    'Final inspection of all corrected panels under the inspection bar: confirm defects are at or below the agreed correction target',
    'IPA wipe all corrected surfaces: use 50/50 IPA and purified water; single-direction wipes; this removes any polishing oil residue that would prevent coating adhesion',
    'Panel-by-panel sign-off by lead technician before coating begins: no exceptions',
  ]);

  c += h2('Phase 4 — Coating Application (2–6 hours)');
  c += procedure('Coating Application Workflow', [
    'Transfer vehicle to the coating bay: ensure the bay is at 18–25 °C and relative humidity below 60% before proceeding',
    'Confirm surface temperature with an infrared thermometer: panels must be between 15–27 °C; allow to acclimatize if outside range',
    'Final IPA wipe immediately before coating: this is the last contamination removal; apply, wipe; do not let IPA dry on the surface before coating',
    'Apply coating to the first panel using the applicator block method: 4–6 drops on suede applicator; apply in overlapping horizontal then vertical strokes',
    'Flash time: observe the panel — typically 60–90 seconds at room temperature; the surface shifts from wet to a faint haze indicating the initial cure has begun',
    'Level with a clean, flat short-nap microfiber: light pressure; straight strokes; remove all coating uniformly; no streaks or high spots allowed',
    'Move to the next panel immediately; do not allow leveled panels to sit unattended — inspect every 5 minutes for any high spots developing',
    'High spot management: if a high spot is discovered after leveling, apply high-spot remover on a clean cloth and buff immediately — do not dry-buff a hardening high spot',
    'After all panels are coated and leveled, perform first inspection pass under the inspection bar: check every panel for uniformity and any missed areas',
    'Apply second coat (where package includes) after the first coat has cured to a tack-free state: typically 1–4 hours depending on product',
    'IR lamp curing: apply infrared lamp at recommended distance (typically 40–60 cm) for 20–40 minutes per panel to accelerate cross-linking and achieve handling hardness faster',
  ]);

  c += h2('Phase 5 — Final Inspection and Delivery (30–45 minutes)');
  c += procedure('Delivery Preparation', [
    'Full vehicle inspection under the inspection bar: all panels, glass, trim, wheels — document any observations',
    'Apply glass coating if included: follow glass coating protocol; allow minimum 30 minutes before delivery',
    'Apply wheel coating if included: barrel, face, lug nut recesses; allow to cure before driving',
    'Final exterior wipe-down: remove any fingerprints or handling marks from the coating session',
    'Interior preparation: ensure interior is free of any coating overspray; clean glass interior; vacuum any debris from the detail session',
    'Photograph the completed vehicle from all angles in the same positions as intake photos: final documentation',
    'Customer handover: delivery walkthrough, aftercare education, care card, warranty documentation, annual inspection booking',
  ]);

  return c;
}

function ccChCoatingAftercare() {
  let c = '';
  c += p('The aftercare instructions delivered to a customer at handover are as important as the coating application itself. A customer who washes their coated vehicle incorrectly, uses incompatible products, or exposes the fresh coating to damaging conditions before full cure can cause premature failure that the shop will be expected to remedy under warranty. A rigorous aftercare education process protects both the customer\'s investment and the shop\'s warranty liability.');

  c += h2('Critical Curing Period Rules — First 7 Days');
  c += table(
    ['Timeframe', 'What Is Happening to the Coating', 'What Customer Must Do (and Avoid)', 'Why It Matters'],
    [
      ['0–48 hours', 'Initial cross-linking; coating is bonding to clear coat; highly vulnerable to water and contamination', 'No water contact whatsoever; keep vehicle in garage; no rain; no morning dew if possible', 'Water before initial cure causes surface blushing, hazing, and water marks that cannot be removed without polishing and re-coating'],
      ['48–96 hours', 'Secondary cure phase; cross-linking progressing; surface hardening', 'Keep dry if possible; if exposed to rain, allow to dry naturally — do not wipe a wet coated surface while fresh', 'Wiping a semi-cured coating can disturb the surface level and cause streaking'],
      ['4–7 days', 'Cure approaching full hardness; surface stable but not at full chemical resistance', 'First wash if needed: hand wash only with pH-neutral shampoo; no pressure washing directly on panels; no wax or sealant', 'Chemical resistance not yet complete — aggressive cleaners can penetrate the partially cured surface'],
      ['7–30 days', 'Full hardness reached on most products; chemical resistance approaching rated level', 'Normal hand wash routine may begin; no automated washes; no wax for 30 days', 'Wax applied over fresh ceramic fills the pores and reduces the long-term performance'],
      ['30+ days', 'Full rated cure on most professional coatings', 'Normal maintenance protocol applies; pH-neutral wash; no abrasives; no solvents', 'Maintain per care card instructions for warranty validity'],
    ]
  );

  c += h2('Approved and Prohibited Products');
  c += table(
    ['Product Category', 'Approved', 'Prohibited', 'Notes'],
    [
      ['Car shampoo', 'pH-neutral (pH 7–8); no wax, no gloss enhancers', 'Alkaline wash (pH > 9); shampoos containing wax or SiO₂ boosters', 'SiO₂ boosters in shampoo can cause uneven surface build-up over time'],
      ['Drying aid / detail spray', 'SiO₂-based quick detailer; coating-compatible spray', 'Any product containing wax, carnauba, or polymer sealant', 'Wax-based drying aids leave a residue that dulls the coating\'s gloss'],
      ['Wheel cleaner', 'pH-neutral wheel cleaner; dedicated decon cleaner used occasionally', 'Acidic wheel cleaner on coated wheels (strips coating); alkaline on coated painted wheels', 'Iron fallout removers (low-acid) are acceptable occasionally for decontamination'],
      ['Glass cleaner', 'Ammonia-free glass cleaner', 'Any ammonia-based glass cleaner near coated surfaces', 'Ammonia degrades SiO₂ coatings; do not allow overspray on coated paint or trim'],
      ['Interior cleaner', 'pH-neutral APC at low dilution; specific leather cleaner for leather', 'Silicone-based interior dressings (outgassing silicone contaminates exterior coating)', 'Silicone dressings on interior surfaces near windows outgas and deposit silicone on the exterior glass'],
    ]
  );

  c += h2('Aftercare Card Content Standards');
  c += checklist([
    'Card is printed on durable cardstock or laminated — not paper; it must survive the vehicle owner\'s life',
    'First wash timing is the first item on the card in bold — most critical rule; most commonly violated',
    'Approved wash method is described in 3 steps maximum — complexity causes non-compliance',
    'Product warnings are listed as "never use X" statements, not technical descriptions — customer needs actionable rules',
    'Contact information is printed on the card: "If in doubt, call us before using any product on your coating"',
    'Annual inspection reminder date is hand-written on the card at delivery — personalized details improve retention',
    'Card fits in a vehicle owner\'s manual or glove box — do not make it oversized',
  ]);

  c += h2('Follow-Up Contact Schedule for Coated Vehicles');
  c += table(
    ['Contact Point', 'Timing', 'Method', 'Message Focus'],
    [
      ['Cure reminder', '48 hours post-delivery', 'Text message', '"Just checking in — your coating is still in its initial cure phase. Remember, no washing until [date]. Any questions?"'],
      ['First wash guidance', '7 days post-delivery', 'Text or email', '"Your coating has reached full hardness — here\'s a quick reminder of the approved wash method as you head into your first wash."'],
      ['30-day check-in', '30 days post-delivery', 'Phone call preferred', '"How is your coating performing? Any questions about the maintenance? Just wanted to make sure you\'re seeing the results we expect."'],
      ['6-month reminder', '6 months post-delivery', 'Email + text', '"6 months in — your coating is performing well. If you\'ve noticed any water-spot buildup, now is a great time for a decon wash. Want to schedule?"'],
      ['Annual inspection', '11 months post-delivery', 'Email + call', '"Your annual inspection is coming up next month — this keeps your warranty current and ensures maximum performance. Ready to book?"'],
    ]
  );

  return c;
}

function ccChPackageDesign() {
  let c = '';
  c += p('Ceramic coating package design is the intersection of service capability, customer psychology, and pricing strategy. A well-designed package menu removes friction from the buying decision, maximizes the average job value, and positions every tier so the customer naturally gravitates toward the mid-to-high option.');

  c += h2('Three-Tier Package Architecture');
  c += p('The industry-standard three-tier structure — Entry, Standard, Premium — exploits a proven psychological principle: when presented with three options, most buyers choose the middle option. The entry tier sets the low anchor; the premium tier makes the middle seem reasonable; the middle is where most revenue is generated.');

  c += table(
    ['Tier', 'Example Name', 'Included Services', 'Target Customer', 'Typical Price Range'],
    [
      ['Entry', 'Ceramic Shield', 'Paint decon wash; IPA wipe; single-layer entry ceramic; glass coating; 1-year warranty', 'Budget-conscious first-time buyer; lease vehicles', '$500–$800'],
      ['Standard', 'Ceramic Pro', 'Full decon; light one-step correction; 2-layer professional ceramic; glass coating; wheel coating; 3-year warranty', 'Enthusiast; new car owner; value-quality balance', '$900–$1,500'],
      ['Premium', 'Ceramic Elite', 'Full decon; full 2-stage correction; 3-layer premium ceramic; glass coating; wheel and caliper coating; fabric protection; 5-year warranty', 'Luxury/exotic owner; maximum protection seeker', '$1,800–$3,500+'],
    ]
  );

  c += h2('Add-On Services for Upselling');
  c += table(
    ['Add-On', 'Price Range', 'When to Offer', 'Upsell Script'],
    [
      ['PPF on front zone (hood + bumper + mirrors)', '$400–$900', 'After presenting ceramic package; frame as completing the protection', '"The ceramic protects your paint chemistry; the film protects it physically. Most enthusiasts combine both for complete coverage."'],
      ['Interior ceramic (fabric + leather + plastic)', '$150–$350', 'During the package presentation; bundle discount available', '"Would you like to extend the same protection inside? Coffee spills and UV fade on leather are just as damaging over time."'],
      ['Additional correction stage', '$150–$300', 'After paint inspection reveals heavier defects than the standard tier includes', '"We found a few deeper marks that the standard one-step correction won\'t fully address — adding a second stage removes those completely before we coat."'],
      ['Annual maintenance program (pre-paid)', '$150–$250/yr', 'At delivery; frame as warranty protection', '"Pre-paying the annual inspection locks in today\'s rate and ensures your warranty stays valid — most customers find it easier to bundle it now."'],
      ['Ceramic window tint', '$300–$700', 'Any full coating job; heat rejection and UV protection are complementary', '"Your interior and leather will benefit even more with ceramic window film — UV rejection keeps the interior cooler and stops fade from inside."'],
    ]
  );

  c += h2('Package Presentation Sequence');
  c += procedure('How to Present Coating Packages', [
    'Start with the vehicle inspection — share what you found; this creates context and authority for your recommendation',
    'Ask one qualifying question before presenting prices: "Is this your daily driver, a weekend car, or something you\'re looking to maximize the value on?" — this helps you lead with the right tier',
    'Present the full menu first; let the customer scan before you speak — give them 30 seconds to look before starting your walkthrough',
    'Walk through the tiers from top to bottom: "Our Elite package gives you the most comprehensive protection with a 5-year warranty — here\'s everything included…" — then the Standard, then the Entry',
    'Anchor at the top: "Most customers with a vehicle like yours go with the Standard or Elite — both come with full correction, which is important given what we saw in the paint today"',
    'Do not ask "which would you like?" immediately — invite questions first: "What questions do you have about any of these?"',
    'After questions, recommend: "Based on what you\'ve told me about how you use it and what you\'re hoping to achieve, I would personally recommend the Standard package"',
    'Offer the upgrade path clearly: "For $X more, the Elite adds [specific tangible benefit] — I can show you the difference on the demo tile if you\'d like to see it before deciding"',
  ]);

  return c;
}

function dtChLeatherCare() {
  let c = '';
  c += p('Leather interior care is one of the highest perceived-value services in the detailing menu and one of the most technically nuanced. Automotive leather spans a wide range of quality, finish types, and condition states. A technique correct for top-grain coated leather is inappropriate for aniline or semi-aniline leather. Understanding the material before applying chemistry or mechanical force is the first professional requirement.');

  c += h2('Automotive Leather Classification');
  c += table(
    ['Leather Type', 'Surface Finish', 'Cleaning Sensitivity', 'Conditioning Need', 'Common In'],
    [
      ['Fully coated / pigmented', 'Thick polymer topcoat; most durable; uniform color', 'Low — most resistant to cleaning chemicals within pH range', 'Moderate — conditioner softens the topcoat layer', 'Entry to mid-range vehicles; factory OEM leather'],
      ['Semi-aniline', 'Thin protective topcoat over natural grain; some natural variation visible', 'Moderate — thinner topcoat; avoid strong solvents', 'High — topcoat can dry and crack without conditioning', 'Premium OEM leather; performance vehicles'],
      ['Aniline (full-grain)', 'No protective topcoat; fully natural surface; visible grain and variations', 'Very high — absorbs liquids immediately; no alkaline cleaners', 'Very high — must be conditioned regularly; natural oils deplete rapidly', 'Luxury vehicles; custom interiors; rare'],
      ['Nubuck / suede', 'Buffed-grain surface; velvety texture; no smooth topcoat', 'Extreme — water alone can cause marks; no liquid cleaners without specific product', 'Specific nubuck conditioner only; never liquid cream conditioner', 'Luxury interiors; some sports vehicle inserts'],
      ['Synthetic / PU leather (vegan)', 'Plastic-based; uniform texture; no natural grain variation', 'Low — typically very cleanable; avoid petroleum solvents', 'Moderate — PU can dry and crack without UV/heat protection', 'Entry vehicles; EVs; modern "vegan" interiors'],
    ]
  );

  c += h2('Leather Cleaning Protocol');
  c += procedure('Leather Cleaning Sequence', [
    'Identify the leather type before any cleaning begins: examine the surface finish, check for a pore pattern (natural leather), consult the vehicle service manual for material specification if unsure',
    'Test the cleaner in an inconspicuous area — under the seat, on a hidden seam — and observe for 60 seconds: any color lift, surface change, or unusual reaction means stop and re-assess product selection',
    'Vacuum the leather surfaces with a soft brush attachment before any liquid cleaning — dry debris causes scratching when wet',
    'Apply leather cleaner to a soft microfiber applicator or soft-bristle leather brush — never directly onto the leather surface',
    'Work in sections; use gentle circular or linear strokes with the applicator; agitate lightly to emulsify surface contamination and ingrained soil from creases',
    'Wipe with a clean damp microfiber to remove the cleaner and lifted contamination; inspect the microfiber — dark residue indicates soil being removed',
    'For heavily soiled stitching, use a soft toothbrush-style detail brush with diluted cleaner; work gently along the stitch groove',
    'Repeat cleaning pass on heavily soiled areas; allow the leather to dry fully between passes — re-cleaning wet leather can over-strip natural oils',
    'Inspect under a bright LED light for remaining contamination, dye transfer, or any areas that need additional attention',
  ]);

  c += h2('Leather Conditioning Protocol');
  c += p('Conditioning restores flexibility, surface sheen, and UV resistance to automotive leather. A leather surface that is not conditioned develops micro-cracks in the surface coating, which eventually propagate into the leather body and cause permanent damage. Conditioning frequency depends on climate, UV exposure, and how often the leather is cleaned.');

  c += checklist([
    'Apply conditioner with a soft microfiber applicator — a small amount goes a long way; pea-sized drops spread 15–20 cm',
    'Work in circular motions; allow the conditioner to absorb into the leather surface for 3–5 minutes before buffing',
    'Buff with a clean dry microfiber to remove excess; do not leave a greasy residue — excess conditioner attracts dust and soil',
    'Seat bolsters and high-contact areas receive 2 applications — these areas experience the most flexing and abrasion',
    'Steer wheel leather is conditioned last — excess conditioner on a steering wheel creates a slippery, unsafe surface; buff until completely dry',
    'Allow full absorption before the customer takes delivery — minimum 30 minutes; conditioner that has not been fully absorbed transfers to clothing',
    'Document the conditioner used in the job card — conditioner product selection affects future service recommendations',
  ]);

  c += h2('Leather Repair and Color Restoration');
  c += p('Professional leather repair and color restoration extends the life of damaged leather and adds significant value to a detailing service offering. These are advanced services requiring dedicated training and practice, but the basics should be understood by all professional detailers.');

  c += table(
    ['Condition', 'Assessment', 'Service Level', 'Approximate Investment'],
    [
      ['Light dye fade (surface only)', 'Surface color loss; grain intact', 'Leather colorant application; detail service', '$80–$150 add-on'],
      ['Peeling topcoat (early stage)', 'Topcoat separating from leather body; small areas', 'Topcoat repair: sand; apply topcoat; color-match', '$150–$300 per seat'],
      ['Crack in leather body (minor)', 'Shallow surface crack; no substrate separation', 'Filler compound; topcoat; colorant', '$200–$400 per zone'],
      ['Major structural damage', 'Large tears; delamination; foam exposure', 'Panel replacement or specialist leather repair shop', 'Refer to specialist; out of scope for detail service'],
    ]
  );

  return c;
}

function dtChInteriorDetailingDeep() {
  let c = '';
  c += p('A thorough interior detail is a systematic process that works from the top of the vehicle interior down, from dry removal before wet cleaning, and from the most sensitive surfaces before the most contamination-tolerant. This chapter provides the complete reference procedure for a full interior detail, including material-specific techniques for every surface type.');

  c += h2('Interior Detail Sequence Overview');
  c += procedure('Full Interior Detail — Top-to-Bottom Sequence', [
    'Remove all loose items, floor mats, and any personal belongings — collect in a labeled bag or return to the customer at intake',
    'Compressed air blow-out: use 30–50 PSI compressed air to blow all vents, crevices, seams, and gap areas from top to bottom — this displaces debris before any contact cleaning',
    'Roof liner inspection and cleaning: identify the headliner material (fabric or vinyl); clean with a dedicated headliner-safe foam cleaner applied on a microfiber; never saturate — headliner glue dissolves with excess moisture',
    'Visors and grab handles: wipe with APC at 1:10 dilution; inspect for soiling in the visor mirror area and the fabric edges',
    'Dashboard: dust with a soft detailing brush first; then wipe with a dampened microfiber and interior-safe APC; work each section in overlapping passes; pay attention to seams and knobs',
    'Center console: remove cup holder inserts if detachable; clean each section individually; for soft-touch plastic, use a gentle product to avoid surface hazing',
    'Door panels: work top to bottom on each door; fabric sections with upholstery cleaner; hard plastic with APC; leather with leather cleaner; door jambs with APC and brush',
    'Seats: complete one seat at a time; refer to material-specific cleaning protocol (fabric extraction, leather cleaning, vinyl wipe)',
    'Carpets and floor mats: pre-treat with carpet cleaner; agitate with a stiff brush; extract with a hot-water extractor for heavily soiled carpets; mats cleaned separately outside the vehicle',
    'Final wipe-down: door sills, seat rails (vacuum), pedals, and all overlooked surfaces; final glass clean interior (ammonia-free)',
  ]);

  c += h2('Fabric Seat and Carpet Extraction');
  c += p('Hot-water extraction is the professional standard for deep cleaning fabric seats and carpets. It achieves results impossible with brush-and-vacuum methods: chemical penetration, agitation, and wet extraction in a single pass removes years of embedded contamination.');

  c += checklist([
    'Pre-treat with a dedicated fabric pre-cleaner or APC at 1:5 dilution — allow 3–5 minutes dwell time',
    'Agitate with a stiff upholstery brush in straight passes — work with the fabric nap direction to prevent pilling',
    'Extract with a hot-water extractor immediately after agitation — the extraction head should overlap each pass by 50%',
    'Inspect the extraction waste water color — dark extraction means significant soil removal; continue passes until the water runs lighter',
    'Allow adequate drying time: 2–4 hours with airflow; place the customer on notice that upholstery must not be sat on until dry',
    'Use a drying fan or leave vehicle doors ajar in a dust-free environment to accelerate drying',
    'Once dry, inspect for any remaining staining — spot treat and re-extract as needed before delivery',
  ]);

  c += h2('Dashboard and Trim Material Reference');
  c += table(
    ['Material', 'Cleaning Product', 'Dressing Product', 'Shine Level', 'Caution'],
    [
      ['Hard gloss plastic', 'APC 1:10; wipe with microfiber', 'Matte trim protectant', 'Match factory finish: most dashboards are matte/satin', 'Do NOT apply high-gloss dressing to dashboards — reflection causes windshield glare and driver distraction'],
      ['Soft-touch / rubberized plastic', 'APC 1:20; gently wipe — avoid scrubbing', 'UV protectant spray (no grease)', 'Factory matte', 'Scrubbing causes permanent micro-abrasion on soft-touch surfaces; gentle passes only'],
      ['Piano black trim', 'Dedicated piano black cleaner; only plush microfiber', 'Piano black protectant', 'High gloss', 'Piano black scratches from almost any contact — plush microfiber and zero pressure only'],
      ['Brushed aluminum trim', 'IPA 50/50 on a microfiber', 'None required', 'Brushed satin', 'Wipe parallel to the brush grain; circular or cross-direction wiping creates visible marks'],
      ['Carbon fiber trim', 'APC 1:20; soft brush for texture', 'UV sealant', 'Gloss (clear coat)', 'Carbon fiber is coated in clear coat; treat as painted surface'],
      ['Wood trim (real)', 'Lightly dampened cloth; never saturate', 'Wood-specific conditioner', 'Satin to high gloss', 'Moisture causes wood grain to raise and finish to lift; apply with damp cloth, not wet'],
    ]
  );

  return c;
}

function dtChMenuDesign() {
  let c = '';
  c += p('A well-designed service menu is one of the most powerful business tools available to a detailing operation. It structures how customers discover and purchase services, establishes the shop\'s positioning, and directly influences average transaction value. The goal is a menu that is simple enough for a customer to understand in 90 seconds and comprehensive enough to generate the revenue needed to sustain a professional operation.');

  c += h2('Core Service Menu Architecture');
  c += p('The most effective detailing menus are organized in two layers: service tiers (packages) and add-on services. Tiers handle the primary buying decision; add-ons generate incremental revenue after the primary decision is made. Presenting tiers and add-ons separately in the menu prevents the overwhelm that causes customers to default to the cheapest option.');

  c += table(
    ['Package Tier', 'Service Bundle', 'Target Vehicle Type', 'Duration', 'Target Price'],
    [
      ['Maintenance Detail', 'Exterior wash + dry + tire dressing + glass + interior vacuum + dash wipe', 'Regular clients; lightly used vehicles', '1.5–2.5 hrs', '$80–$150'],
      ['Full Detail — Standard', 'Two-stage wash + decon + interior full clean + conditioning + exterior protection spray', 'Typical used vehicle; quarterly detail client', '3–5 hrs', '$200–$350'],
      ['Full Detail — Premium', 'All standard services + light one-pass correction + sealant + engine bay + thorough leather treatment', 'Enthusiast owners; pre-sale; annual investment', '5–8 hrs', '$350–$600'],
      ['Correction Detail', 'Full decon + multi-stage correction + protection (wax, sealant, or spray coating)', 'Purchase inspection; neglected vehicles; pre-coating', '6–12 hrs', '$500–$1,000'],
      ['Correction + Coating', 'Full correction detail + professional ceramic coating', 'New car; pre-sale high-value; protection seekers', '8–16 hrs (may span 2 days)', '$1,000–$3,000+'],
    ]
  );

  c += h2('Add-On Services Catalog');
  c += table(
    ['Add-On Service', 'Duration', 'Price Range', 'Best Offered With'],
    [
      ['Engine bay detail', '45–90 min', '$80–$150', 'Full detail premium; pre-sale prep'],
      ['Headlight restoration', '30–60 min', '$60–$120', 'Any full detail; pre-sale prep'],
      ['Odor elimination (ozone or enzyme treatment)', '60–180 min', '$100–$250', 'Interior deep clean; smoke or pet vehicle'],
      ['Convertible top clean + protect', '45–90 min', '$80–$160', 'Full detail on convertibles; spring season'],
      ['Leather color touch-up (minor)', '30–60 min', '$80–$200', 'Premium full detail; pre-sale'],
      ['Trim restoration (faded exterior plastic)', '30–60 min', '$60–$120', 'Any exterior service on older vehicles'],
      ['Paint chip touch-up (per chip)', '15–60 min', '$25–$75/chip', 'Any correction or coating job; pre-sale'],
      ['Ceramic glass coating', '30–60 min', '$80–$150', 'Any full detail or ceramic job'],
      ['Wheel face coating (per wheel)', '30 min', '$50–$80/wheel', 'Full ceramic package; premium detail'],
      ['Pet hair removal', '30–60 min', '$60–$120', 'Interior detail; fabric seats; carpets'],
    ]
  );

  c += h2('Pricing Strategy for Detailing Services');
  c += procedure('Setting Sustainable Pricing', [
    'Calculate your fully-loaded labor cost: hourly wage + payroll taxes + benefits + training investment; this is your true cost per labor hour',
    'Calculate your direct material cost per service: include chemicals at actual use-per-job rates, not the purchase price of the full container',
    'Estimate overhead per job: monthly rent + utilities + insurance + equipment depreciation ÷ monthly job volume = overhead per job',
    'Sum all three for total cost per job; apply target margin: cost × 1.5 (for 33% gross margin) as a minimum; cost × 1.7 (for 41% gross margin) for stronger positioning',
    'Sanity-check against the market: if your cost-based price is significantly above the local market, find efficiencies; if it is below market, do not race to the bottom — raise your price and invest in quality',
    'Tier your pricing with enough spread that the mid-tier reads as "the smart choice" between an obvious entry-level and a clearly premium option',
    'Review pricing quarterly: material and labor costs change; pricing that was correct 12 months ago may now be under-margin',
  ]);

  c += h2('Communicating Value to Justify Professional Pricing');
  c += checklist([
    'The intake inspection creates the value: showing the customer their vehicle\'s condition before service, using an inspection light to reveal defects invisible in normal lighting, justifies the price before the service begins',
    'Before/after photos are the most powerful pricing justification tool: customers who see the transformation understand immediately why a professional result costs more than a self-service car wash',
    'Quantify what they\'re getting: "This includes 8 hours of skilled labor, professional-grade chemicals not available to consumers, and my 100% satisfaction guarantee" makes the price tangible',
    'Break down multi-hour services by component: "The first hour is decontamination; the next 3–4 hours are the correction; the final hour is protection application and inspection" — this communicates the skill and time investment',
    'Never apologize for pricing: confidence in pricing signals confidence in quality; if you hedge your price, the customer reads it as negotiable or unreliable',
    'Offer a satisfaction guarantee with clear terms: this reduces purchase anxiety and is a strong closing tool — "If you\'re not happy with the result, I want to make it right before you leave"',
  ]);

  return c;
}

function dtChAdverseConditions() {
  let c = '';
  c += p('Professional detailing does not always occur in ideal conditions. Mobile operations, inadequately heated workshops, humid coastal climates, extreme summer heat, and winter operations all create challenges that the professional detailer must be prepared to manage. This chapter provides protocols for every adverse condition scenario the detailer is likely to encounter.');

  c += h2('Hot Weather Detailing');
  c += table(
    ['Condition', 'Impact on Detailing', 'Adaptation Protocol'],
    [
      ['Ambient temp > 30 °C', 'Products dry too quickly; streaking in wash and polish; coating flash time dramatically shortened', 'Work in shade or early morning; cool panels with water mist before contact; work smaller sections'],
      ['Panel surface temp > 40 °C', 'Polish dries on the panel before it can level; wax hazes immediately; coating flash is nearly instantaneous', 'Measure panel temp with IR thermometer; cool panel to below 30 °C with mist before applying any product; never apply coating to a hot panel'],
      ['High UV index', 'Wax and sealants cure to a hard film faster than expected; some products haze unevenly in direct UV', 'Keep the vehicle in shade during application; use UV-stable products; work in the early morning window'],
      ['Low humidity in hot/dry climate', 'Spray products evaporate immediately; polish dries before it can be worked; static charge on paint attracts dust', 'Use higher dilution on all spray products; keep a misting bottle of purified water nearby; enclose the work area if mobile'],
    ]
  );

  c += h2('Cold Weather and Winter Detailing');
  c += checklist([
    'Do not perform contact washing when ambient temperature is below 4 °C — water freezes on the panel during the wash, trapping contamination under ice',
    'Rinse-less or waterless washing is the safe winter option for lightly contaminated vehicles when indoor facilities are unavailable',
    'Indoor heated facility: ensure the shop reaches at least 15 °C before beginning any polishing or coating work — cold panels prevent proper product adhesion and leveling',
    'Wax performance is reduced below 15 °C — wax hardens before it can bond properly; use paint sealant or coating in cold-climate operations as a more temperature-stable alternative',
    'IPA in preparation wipes may not evaporate completely in cold environments, leaving moisture on the panel — use a lint-free cloth to physically remove the IPA rather than allowing air evaporation',
    'Coating application below 10 °C should not occur: flash time extends unpredictably; the coating cross-links unevenly; use an IR lamp to raise the panel surface temperature if the shop cannot be adequately heated',
    'Tire dressings become thick and difficult to apply in cold temperatures — warm the product in a warm water bath for 5 minutes before use',
  ]);

  c += h2('High Humidity Environments');
  c += procedure('Humidity Management Protocol', [
    'Measure relative humidity before beginning any coating application: use a digital hygrometer in the work area',
    'If humidity exceeds 65%, delay coating application — high humidity causes blushing (white haziness from moisture trapped in the partially cured coating) on many SiO₂ formulations',
    'If humidity is 50–65%: proceed with caution; work smaller panel sections; level more promptly than in low-humidity conditions',
    'Use a dehumidifier in the coating bay: a portable commercial dehumidifier targeting 45–55% RH is a standard investment for coating shops in coastal or tropical climates',
    'After washing and before polishing: allow additional drying time; use forced air on all panel gaps and recesses to ensure no trapped moisture',
    'High humidity accelerates the initial flash of some coating formulations: adjust timing based on the TDS moisture sensitivity notes',
    'Document the ambient conditions (temperature and humidity) at the start of every coating session in the job record — this protects the shop if a coating performance issue is investigated later',
  ]);

  c += h2('Outdoor and Mobile Detailing Adverse Condition Adaptations');
  c += table(
    ['Situation', 'Challenge', 'Adaptation'],
    [
      ['Wind during exterior wash', 'Soap and rinse blow back onto dried panels; airborne contamination lands on wet paint', 'Position vehicle with its long axis parallel to the wind; work the upwind side first; never allow soap to dry — follow immediately with rinse'],
      ['Dust and pollen environment', 'Airborne particles land on freshly polished panels; contaminate pads; create fine scratches in finishing stages', 'Cover completed panels with a clean microfiber while working adjacent panels; use an enclosed van or pop-up tent for mobile corrections'],
      ['No available water source', 'Cannot perform a wet wash; contamination is a scratching risk during any contact work', 'Use rinse-less wash; pre-blow the vehicle with compressed air; never skip contamination removal — abort the correction if the vehicle is too dirty for safe dry or rinse-less treatment'],
      ['Customer vehicle parked in direct sun', 'Panel temps too high for safe polishing or coating', 'Relocate vehicle to shade before beginning; allow 15–20 minutes cool-down; re-check panel temp before starting'],
      ['Unexpected rain during exterior work', 'Rain water contaminating freshly applied protection or diluting compounds', 'Stop immediately; move vehicle under cover or into a vehicle tent; assess what has been exposed; re-clean and re-apply any affected sections after the rain passes'],
    ]
  );

  return c;
}

function dtChPolishingDefectRecovery() {
  let c = '';
  c += p('Even experienced technicians encounter polishing defects — holograms, buffer trails, induced marring, or cases where a defect is more stubborn than expected. This chapter provides the systematic approach to diagnosing and correcting every major polishing defect encountered in professional correction work.');

  c += h2('Polishing Defect Classification');
  c += table(
    ['Defect Type', 'Cause', 'Appearance', 'Recovery Method', 'Prevention'],
    [
      ['Holograms (buffer trails)', 'DA at wrong speed with finishing pad + compound; rotary used without finishing step', 'Swirling circular marks visible only in direct or artificial light; paint may appear clear in other light', 'Remove with foam finishing pad + finishing polish on DA at low speed; straight-line passes', 'Always finish with a finishing product after compound; never use compound with a foam finishing pad'],
      ['Micro-marring from pad', 'Pad loaded with old compound; pad too aggressive for the surface hardness; speed too high', 'Diffuse haze across the entire polished area; visible in raking light', 'Lighter pad + finishing polish; assess pad condition — replace loaded pads', 'Inspect and replace pads regularly; prime every new pad before use on a vehicle'],
      ['Streaking', 'Product applied too thickly; polished too dry (product evaporated before leveling); insufficient passes', 'Parallel streaks following pad direction; most visible in strong side-lighting', 'Re-polish the section with fresh product and consistent pressure; use the cross-hatch pass pattern', 'Correct product quantity; never over-dry a section; work in the correct section size for ambient temperature'],
      ['Burning (heat damage to clear coat)', 'Machine stationary too long; too much pressure; rotary speed too high on thin clear coat', 'Dulling or whitening of the clear coat; if severe: texture change; if extreme: clear coat separation', 'Very mild: finishing polish may recover; moderate to severe: clear coat too thin to polish further — paint specialist required', 'Keep machine moving; reduce speed on areas of prior collision repair or thin clear; check PTG before and after every panel'],
      ['Induced scratches', 'Contaminated pad; contaminated polish (grit introduced); debris on the panel surface', 'Single or clustered scratches distinct from the surrounding finish; may be straight or directional', 'Compound to remove the induced scratch; assess depth with PTG; if into primer — refinish required', 'Inspect panel surface before polishing; prime pads properly; use bagged polish storage; clean panel before polishing'],
    ]
  );

  c += h2('Diagnosing an Unresponsive Defect');
  c += p('When a defect does not respond to the expected compound and pad combination, a systematic diagnostic process identifies the correct response — whether that is a more aggressive product, a different technique, or a referral for respray.');

  c += procedure('Unresponsive Defect Diagnostic Sequence', [
    'Re-assess the defect under a focal-point light (high-intensity LED flashlight) — confirm the defect is in the clear coat, not in the base coat; base coat defects cannot be polished out',
    'Perform a paint thickness gauge reading at the defect — if the reading is below 90 µm total, the clear coat may be too thin to allow further correction',
    'Increase compound aggression by one level: if you were using a medium compound, switch to a heavy compound with a cutting pad; perform a fresh test spot',
    'If compound cannot remove it: examine the defect under magnification (loupe or jewelers loop) — determine if the scratch has a shadow (into base) or a reflective bottom (in clear coat)',
    'Scratches with a reflective bottom are in clear coat and may respond to a more aggressive cutting combination',
    'Scratches with a dark shadow are into the base coat or primer — these cannot be polished and must be addressed with paint touch-up or respray',
    'Document the finding and communicate to the customer before proceeding: show the defect, explain the limitation, and confirm the revised scope of the correction',
  ]);

  c += h2('Hologram and Buffer Trail Removal Protocol');
  c += procedure('Hologram Removal Sequence', [
    'Inspect the affected panel under multiple light sources: the holograms must be identified precisely — they can be diffuse across the entire panel or localized to areas where the pad direction changed',
    'Clean and prime a fresh foam finishing pad — a new pad must be broken in before use on the vehicle',
    'Apply 4 drops of a pure finishing polish (zero-cut or near-zero-cut; no heavy abrasives)',
    'Set the DA polisher to a lower orbit speed than used during the original polishing: speed 4 on a 6-speed machine is typical',
    'Work in straight overlapping passes across the panel: horizontal first pass; vertical cross-hatch; avoid circular or random motion',
    'After 3–4 passes, inspect under the inspection light: hologram removal is confirmed when the streaking pattern has been replaced by a uniform reflection',
    'If holograms persist: the previous product contained an abrasive level that requires a second application with the finishing polish; do not increase aggression — increase the number of passes',
    'Final inspection: view the panel from multiple angles including directly overhead in artificial light; holograms are most visible when looking toward a light source at a shallow angle',
  ]);

  c += h2('Working with Extremely Hard or Extremely Soft Paints');
  c += table(
    ['Paint Type', 'Characteristics', 'Compound & Pad Adjustment', 'Risk to Manage'],
    [
      ['Very hard clear coat (Japanese/German OEM)', 'High resistance to abrasion; takes significantly more passes to correct; defects are deeply embedded', 'Use more aggressive compound; cutting pad; more passes; increase orbital speed', 'Slow correction — do not rush by increasing pressure; consistent moderate pressure is safer than variable high pressure'],
      ['Very soft clear coat (some Italian; older vehicles)', 'Corrects easily; scratches easily; re-mars during buffing if product dries', 'Medium compound at most; foam cutting pad; work smaller sections; use in cooler conditions', 'Induced marring risk is high — inspect frequently; work sections of 30 × 30 cm maximum; have finishing polish ready immediately after compound'],
      ['Ceramic-coated paint (coating over prior paint)', 'Coating must be removed before paint correction — polishing over a coating is ineffective and contaminates pads', 'Chemical coating removal or light machine work to remove the coating first; then assess the bare paint underneath', 'Do not assume a coated vehicle\'s paint is in good condition — coating preserves whatever condition the paint was in when it was applied'],
      ['Repainted / refinished panel', 'Thickness unknown without PTG; cure time of fresh respray may be incomplete; fresh respray cannot be polished for 30–60 days', 'Check PTG before any work; confirm cure age with customer; use finishing products only if correction is needed on fresh respray', 'Heavy compound on fresh respray removes the clear coat entirely — confirm the paint\'s cure age before any machine work'],
    ]
  );

  return c;
}

function dtChPaintConditionAssessment() {
  let c = '';
  c += p('A formal paint condition assessment performed at vehicle intake is the foundation of every correction and coating service. It creates the information needed to set accurate expectations, quote correctly, avoid correcting unresolvable defects, and produce the before/after documentation that demonstrates value to the customer. This chapter defines the assessment methodology and the reporting format.');

  c += h2('Paint Condition Classification System');
  c += table(
    ['Grade', 'Condition Description', 'Typical Defects Present', 'Recommended Service Path'],
    [
      ['Grade 1 — Excellent', 'Near-new; minor light swirl marks only; no water spots or etching', 'Light swirl marks; very minor dust nibs from the factory clear', 'IPA wipe + ceramic coating; no correction required; or single-pass finishing polish'],
      ['Grade 2 — Good', 'Light swirl damage; minor water spots; some light scratches in clear coat', 'Wash-induced swirls; automated car wash marks; light water etching', 'Single-stage light correction with medium compound; finishing polish; then coating'],
      ['Grade 3 — Fair', 'Moderate swirl and scratch damage; visible water spots and etching; some buffer holograms', 'Swirl marks clearly visible in direct light; etched water spots; isolated deeper scratches', 'Two-stage correction: compound + polish; deeper scratches addressed or documented as accepted'],
      ['Grade 4 — Poor', 'Heavy defects; deep scratches; significant etching; possible fading or oxidation', 'All of Grade 3 plus isolated deep scratches into base coat; heavy etching; possible fading on horizontal panels', 'Heavy correction including wet sanding in extreme cases; accept unresolvable defects formally; coating after full correction'],
      ['Grade 5 — Restoration Required', 'Oxidation; fading through paint layers; structural damage to clear coat; deep chips', 'Clear coat failure; color fade; stone chip clusters; rust intrusion', 'Machine polishing insufficient; chemical or mechanical restoration followed by refinishing referral; coating only after restoration'],
    ]
  );

  c += h2('Paint Thickness Gauge Interpretation');
  c += p('The paint thickness gauge (PTG) is a non-destructive tool that measures the total paint film thickness through magnetic induction (for steel substrates) or eddy current (for aluminum). Reading the gauge correctly and knowing what the readings mean for the correction budget is a mandatory skill for all paint correction technicians.');

  c += table(
    ['Reading (µm)', 'Interpretation', 'Correction Safety Level', 'Notes'],
    [
      ['> 200 µm', 'Possible prior respray or body filler', 'Safe to correct with any product', 'Thick readings indicate a panel has been repainted; this is informational but not a correction constraint'],
      ['120–200 µm', 'Factory original paint on a thicker-apply vehicle', 'Full correction capability', 'Typical for American trucks, SUVs, and older European vehicles'],
      ['90–120 µm', 'Standard factory OEM thickness', 'Full to moderate correction capability', 'Most passenger vehicles fall in this range; standard correction is safe'],
      ['70–89 µm', 'Thin factory paint or previously corrected vehicle', 'Light correction only; 1–2 stages maximum', 'Each machine polishing stage removes approximately 1–3 µm of clear coat; thin readings limit the number of safe passes'],
      ['50–69 µm', 'Very thin — borderline concern', 'Finishing polish only; no compound; no wet sanding', 'Must be disclosed to customer; do not machine polish aggressively; manual finishing only'],
      ['< 50 µm', 'Unsafe to machine polish', 'No machine correction — risk of clear coat burn-through', 'Stop; document; notify customer; referral for respray assessment'],
    ]
  );

  c += h2('Assessment Report Format');
  c += procedure('Producing the Customer Assessment Report', [
    'Panel diagram: use a vehicle silhouette diagram; mark each panel with its Grade (1–5) and any significant defects with standardized symbols',
    'PTG reading table: panel name + average reading + minimum reading + assessment (safe/caution/do not polish)',
    'Photo documentation: at minimum one wide-angle photo and one raking-light defect-highlight photo per panel',
    'Defect inventory: list each category of defect (swirl, scratch, water spot, chip) and the panels affected; indicate which are correctable and which are not',
    'Recommended service: state the correction stage recommended based on the assessment; give the customer options with their respective outcomes',
    'Accepted-as-is items: list all defects that cannot be corrected; obtain customer sign-off acknowledging these will remain after service',
    'Customer signature block: "I have reviewed the paint condition assessment and understand which defects will be addressed and which will remain. I authorize the recommended services as described."',
  ]);

  c += h2('Communicating the Assessment to the Customer');
  c += p('How the assessment is communicated is as important as its content. Customers who feel informed make better decisions and have higher satisfaction after service.');

  c += checklist([
    'Walk the customer around the vehicle during the assessment if time permits — an assessment done together is far more credible than a report handed over after the fact',
    'Use the inspection light to demonstrate defects directly: "Here is what we\'re correcting. You can see how the light catches the swirl marks from this angle."',
    'Be specific about what will change: "These swirl marks will be fully removed. These deeper marks — see this one here? — we can reduce it by 70–80% but it won\'t disappear completely."',
    'Set correction expectations in percentages, not absolutes: "We\'ll achieve 90–95% correction of the visible defects on this vehicle" is more credible than "it will look like new"',
    'Reference the photos you\'ve taken: "I\'ve photographed all of these findings — when you pick up the vehicle, I\'ll show you the before and after side by side"',
    'Obtain sign-off on accepted defects before starting work: disputes about unresolved defects after service are almost always the result of incomplete pre-service communication',
  ]);

  return c;
}

function dtChConvertibleTops() {
  let c = '';
  c += p('Convertible tops and soft-top vinyl roofs require specialized care that differs fundamentally from hard-surface detailing. The materials — canvas, mohair, vinyl, plastic rear windows — are sensitive to abrasives, solvents, and harsh chemicals. Incorrect products or technique can cause shrinkage, color stripping, seam damage, or cracking of the plastic window.');

  c += h2('Convertible Top Material Types');
  c += table(
    ['Material', 'Common Finish', 'Cleaning Sensitivity', 'Protection Product', 'Cleaning Frequency'],
    [
      ['Acrylic canvas (most common)', 'Matte textile; black, tan, grey', 'Sensitive to alkaline cleaners; no solvents', 'Fabric protectant spray; UV sealant', 'Every 3 months or as needed'],
      ['Mohair (classic vehicles)', 'Plush textile; limited colors', 'Very sensitive; hand-clean only with mild soap', 'Wax or dedicated fabric sealant', 'Annually or as needed; protect from moisture'],
      ['Vinyl soft top', 'Smooth; may be textured', 'Moderate sensitivity; avoid petroleum solvents', 'Vinyl conditioner; UV protectant', 'Monthly in UV-exposure climates'],
      ['Plastic rear window (vinyl)', 'Clear / tinted', 'Sensitive to abrasives — ANY scratch shows; no ammonia cleaners', 'Plastic polish then UV sealant', 'Every 3–6 months; avoid folding in cold'],
    ]
  );

  c += h2('Convertible Top Cleaning Protocol');
  c += procedure('Canvas / Acrylic Soft Top Cleaning', [
    'Brush dry debris from the top before any liquid contact — loose debris causes scratching when wet',
    'Pre-wet the top with clean water from a garden hose — do not use a pressure washer directly on the top fabric (risk of water intrusion and seam damage)',
    'Apply a dedicated convertible top cleaner at the recommended dilution — never an all-purpose cleaner or alkaline degreaser on canvas',
    'Agitate with a soft-bristle brush in circular motions; work from the rear of the top forward to avoid pushing dirt into the seal between top and body',
    'Rinse thoroughly with clean water; inspect for remaining staining',
    'For stubborn stains (bird drop, tree sap, mildew): use a targeted stain remover formulated for the specific material; test in an inconspicuous area first',
    'Allow to dry completely before applying any protectant — a wet top traps protectant and causes uneven application',
    'Apply convertible top protectant with a foam applicator or soft cloth; work into the fabric; allow to dwell per instructions; buff off any excess',
  ]);

  c += h2('Plastic Rear Window Care');
  c += p('The rear plastic window is the most vulnerable component of a convertible top system. It scratches with even light contact from a dirty cloth, yellows from UV exposure, and cracks if folded in cold temperatures. A cracked or severely scratched window typically requires professional replacement — prevention is far more cost-effective.');

  c += checklist([
    'Clean the plastic window with a dedicated plastic-safe cleaner only — no glass cleaners containing ammonia',
    'Use a clean, dedicated microfiber cloth for the window only — never re-use a cloth that has touched painted surfaces, which may contain fine grit',
    'Polish with a plastic polish applied by hand or very low-speed DA (1000 RPM maximum) — never use a compound or abrasive paste',
    'Apply a UV sealant formulated for plastic windows after polishing — this is the primary protection against yellowing',
    'Warn the customer never to fold the top in temperatures below 10 °C without first allowing the plastic window to warm up — cold plastic cracks when flexed',
    'Inspect the window for delamination at the edges or seams at every service — edge delamination is an early indicator of impending window failure',
  ]);

  c += h2('Seam and Drain Maintenance');
  c += checklist([
    'Inspect all seams between the top fabric and the body seal at every convertible service — lifted seams allow water intrusion',
    'Seam sealant products are available for minor lifting; apply with a fine brush; press the seam flat and allow to cure',
    'Check convertible top drain tubes (located at the corners of most convertible tops) — blocked drains cause overflow into the interior; clear with compressed air or a dedicated drain cleaning tool',
    'Lubricate the convertible top frame mechanisms with a silicone-based lubricant annually — dry pivots cause wear and binding',
    'Inspect the weatherstripping around the perimeter of the top for compression loss — flat or cracked weatherstripping allows wind noise and water entry',
  ]);

  return c;
}

function dtChDetailingKPIs() {
  let c = '';
  c += p('A detailing business that does not measure its performance cannot reliably improve it. Key performance indicators for a detailing operation fall into four categories: financial health, operational efficiency, customer experience, and staff productivity. Tracking these metrics creates the data needed to make confident business decisions.');

  c += h2('Financial KPIs');
  c += table(
    ['KPI', 'Formula', 'Target', 'Review Cadence', 'Action if Below Target'],
    [
      ['Gross revenue per day', 'Total revenue ÷ operating days', 'Market-dependent; track trend', 'Weekly', 'Review booking density; assess pricing'],
      ['Average job value (AJV)', 'Total revenue ÷ number of jobs', 'Track and increase quarter-over-quarter', 'Monthly', 'Review upsell success rate; adjust package pricing'],
      ['Gross margin per job', '(Revenue − material cost) ÷ Revenue', '> 60%', 'Monthly', 'Audit material usage; identify over-use or under-pricing'],
      ['Revenue per labor hour', 'Total revenue ÷ total labor hours billed', '> $80 per hour (market-dependent)', 'Monthly', 'Improve efficiency; reduce non-billable time; raise prices'],
      ['Repeat customer rate', 'Customers with 2+ jobs in 12 months ÷ total unique customers', '> 30%', 'Quarterly', 'Improve follow-up system; introduce loyalty program'],
      ['Conversion rate (quote to booking)', 'Booked jobs ÷ quotes sent × 100', '> 50%', 'Monthly', 'Review pricing; improve consultation quality; follow up faster'],
    ]
  );

  c += h2('Operational KPIs');
  c += table(
    ['KPI', 'Formula', 'Target', 'Review Cadence', 'Action if Below Target'],
    [
      ['On-time completion rate', 'Jobs completed by committed time ÷ total jobs', '> 90%', 'Weekly', 'Review time estimates; identify recurring delays; adjust scheduling'],
      ['Re-do rate (quality)', 'Jobs requiring re-work ÷ total jobs', '< 3%', 'Monthly', 'Identify root cause; retrain; enforce QC checklist'],
      ['Vehicle capacity utilization', 'Vehicles serviced ÷ maximum vehicle capacity', '> 80%', 'Weekly', 'Review marketing; adjust staffing schedule; add a bay if consistently > 90%'],
      ['Material waste rate', 'Material cost ÷ revenue', '< 15%', 'Monthly', 'Audit material use; retrain on economy of use; reduce over-application'],
      ['Job card completeness', 'Complete job cards ÷ total job cards', '100%', 'Weekly', 'Enforce documentation at intake; retrain front desk staff'],
    ]
  );

  c += h2('Customer Experience KPIs');
  c += table(
    ['KPI', 'How Measured', 'Target', 'Review Cadence'],
    [
      ['Average review score', 'Average star rating across all platforms', '> 4.7 stars', 'Monthly'],
      ['Review response rate', 'Reviews responded to ÷ total reviews received', '100%', 'Weekly'],
      ['Net Promoter Score (NPS)', 'Customer survey: "How likely are you to recommend us?" 1–10', '> 60 (promoters minus detractors)', 'Quarterly'],
      ['Complaint rate', 'Formal complaints ÷ total jobs', '< 2%', 'Monthly'],
      ['Post-service follow-up completion rate', 'Completed 7-day check-in calls ÷ total jobs', '> 95%', 'Weekly'],
    ]
  );

  c += h2('Using KPIs in Team Meetings');
  c += procedure('Monthly KPI Review Meeting Agenda', [
    'Share the dashboard: display all KPIs with current month vs. prior month and vs. target — a visual dashboard prevents misunderstanding of numbers',
    'Acknowledge wins: identify which KPIs improved; name the team or individual responsible for the improvement',
    'Identify focus areas: select no more than 2 KPIs below target for focused action — too many priorities means no priorities',
    'Root-cause discussion: for each focus KPI, ask "why is it below target?" until you reach the actionable root cause — not "what is the number?" but "what is causing the number?"',
    'Define actions: for each root cause, assign a specific action, a responsible person, and a date for the first progress check',
    'Close with the team\'s collective energy toward the next month — not on problems, but on what we will achieve',
  ]);

  c += callout('tip', '**KPI dashboard tool:** Even a simple shared spreadsheet updated weekly provides 80% of the value of a sophisticated BI tool. What matters is consistency — the same metrics, the same format, reviewed at the same time each week. Start simple; add complexity only when the basics are a habit.');

  return c;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORTS
// ─────────────────────────────────────────────────────────────────────────────

function generateCeramicManual() {
  const chapters = [
    { title: 'Coating Chemistry & Technology',                 content: ccChCoatingChemistry() },
    { title: 'Paint Assessment & Defect Classification',       content: ccChPaintAssessment() },
    { title: 'Paint Correction Prerequisites',                 content: ccChCorrectionPrerequisites() },
    { title: 'IPA Wipe & Final Panel Preparation',             content: ccChIPAWipePrep() },
    { title: 'Coating Application Methods',                    content: ccChApplicationMethods() },
    { title: 'Leveling & High-Spot Management',                content: ccChLeveling() },
    { title: 'Curing & Environmental Controls',               content: ccChCuring() },
    { title: 'Multi-Layer Coating Systems',                    content: ccChMultiLayerSystems() },
    { title: 'Maintenance Protocols',                          content: ccChMaintenance() },
    { title: 'Interior Ceramic Coating',                       content: ccChInteriorCoating() },
    { title: 'Warranty & Documentation',                       content: ccChWarrantyDocumentation() },
    { title: 'Troubleshooting',                                content: ccChTroubleshooting() },
    { title: 'Full Correction Sequence for Coating Preparation', content: ccChFullCorrectionForCoating() },
    { title: 'Coating Product Selection Guide',                content: ccChCoatingSelectionGuide() },
    { title: 'Coating on Specialty Substrates',                content: ccChCoatingOnSpecialtySubstrates() },
    { title: 'Complete Panel-by-Panel Coating Reference',      content: ccChPanelByPanelReference() },
    { title: 'Professional Coating Tools & Environment',       content: ccChProfessionalCoatingTools() },
    { title: 'Quality Assurance Program for Coating Services', content: ccChCoatingQAProgram() },
    { title: 'Coating Pricing, Packaging & Business Strategy', content: ccChCoatingPricingBusiness() },
    { title: 'Environmental Controls & Seasonal Coating Guidance', content: ccChEnvironmentalSeasonalCoating() },
    { title: 'Customer Education & Demonstration Techniques — Extended', content: ccChExtendedDemonstration() },
    { title: 'Graphene Coatings & Advanced Nano-Technology',   content: ccChGrapheneCoatings() },
    { title: 'PPF + Ceramic Coating Combination Systems',      content: ccChPPFCoatingCombination() },
    { title: 'Spray Coatings & Maintenance Products',          content: ccChSprayCoatings() },
    { title: 'Specialty Vehicles — Motorcycle, Marine, Aircraft', content: ccChSpecialtyVehicles() },
    { title: 'Customer Demonstrations & Education',            content: ccChCustomerDemonstration() },
    { title: 'Building a Ceramic Coating Business',            content: ccChBusinessDevelopment() },
    { title: 'Glass Coating — Master Reference',               content: ccChGlassCoating() },
    { title: 'Wheel & Brake Caliper Ceramic Coating',          content: ccChWheelCaliper() },
    { title: 'Coating Inspection & Reporting System',          content: ccChCoatingInspectionReporting() },
    { title: 'Long-Term Coating Maintenance Programs',         content: ccChLongTermCoatingMaintenance() },
    { title: 'Ceramic Coating Sales Presentation',             content: ccChSalesPresentationCoating() },
    { title: 'Coating Aftercare Education & Follow-Up',       content: ccChCoatingAftercare() },
    { title: 'Ceramic Coating Package Design & Upselling',    content: ccChPackageDesign() },
    { title: 'Complete Coating Prep Workflow — Step by Step', content: ccChCompleteWorkflow() },
    { title: 'Ceramic Coating Chemistry Deep Dive',            content: ccChChemistryDeep() },
    { title: 'Surface Procedure Library',                      content: ccChSurfacePanelsContent() },
    { title: 'Appendices',                                     content: ccChAppendices() },
  ];

  return chapters;
}

function generateDetailingManual() {
  const chapters = [
    { title: 'Wash Methods',                                   content: dtChWashMethods() },
    { title: 'Decontamination',                                content: dtChDecontamination() },
    { title: 'Polishing Compounds & Abrasives',                content: dtChPolishingCompounds() },
    { title: 'Pad Selection & Maintenance',                    content: dtChPadSelection() },
    { title: 'DA & Rotary Machine Technique',                  content: dtChMachineTechnique() },
    { title: 'Paint Depth & Correction Safety',               content: dtChPaintDepth() },
    { title: 'Inspection Lighting & Methodology',              content: dtChInspectionLighting() },
    { title: 'Interior Detailing',                             content: dtChInteriorDetailing() },
    { title: 'Engine Bay Detailing',                           content: dtChEngineBay() },
    { title: 'Pricing & Package Structure',                    content: dtChPricing() },
    { title: 'Detailing Chemistry — Complete Reference',       content: dtChDetailChemicals() },
    { title: 'New Car Delivery Preparation',                   content: dtChNewCarDetailPrep() },
    { title: 'Vehicle Inspection Report & Documentation',     content: dtChVehicleInspectionReport() },
    { title: 'Interior Detailing — Material-by-Material Reference', content: dtChInteriorMaterialRef() },
    { title: 'Professional Polishing — Master Compound & Pad Matrix', content: dtChPolishingMatrix() },
    { title: 'Clay Bar & Iron Fallout Removal — Advanced',     content: dtChClayAndIronRemoval() },
    { title: 'Quality Control & Detail Stage Reference',       content: dtChDetailQC() },
    { title: 'Headlight & Tail Light Restoration',            content: dtChHeadlightRestoration() },
    { title: 'Plastic & Exterior Trim Restoration',           content: dtChTrimRestoration() },
    { title: 'Odor Elimination',                              content: dtChOdorElimination() },
    { title: 'Seasonal Detailing Protocols',                  content: dtChSeasonalProtocols() },
    { title: 'Mobile Detailing Operations',                   content: dtChMobileOperations() },
    { title: 'Business Operations for Detailing Shops',       content: dtChBusinessOperations() },
    { title: 'Fleet Detailing Operations',                     content: dtChFleetDetailing() },
    { title: 'Paint Chip & Touch-Up Basics for Detailers',   content: dtChPaintChipTouchup() },
    { title: 'Resale Preparation Detailing',                  content: dtChResalePrep() },
    { title: 'Detailing Tools — Maintenance & Care',          content: dtChToolMaintenance() },
    { title: 'Leather Interior Care — Complete Reference',     content: dtChLeatherCare() },
    { title: 'Full Interior Detail Sequence & Procedures',    content: dtChInteriorDetailingDeep() },
    { title: 'Waterless & Rinse-Less Washing Techniques',     content: dtChWaterlessWashing() },
    { title: 'Paint Protection Fundamentals for Detailers',   content: dtChPaintProtectionBasics() },
    { title: 'Professional Wash Station Setup & Chemistry',   content: dtChProfessionalWashSetup() },
    { title: 'Exterior Trim & Rubber Protection',             content: dtChExteriorTrimProtection() },
    { title: 'Job Cards, Documentation & CRM Standards',      content: dtChDocumentationJobCards() },
    { title: 'Collector & Stored Vehicle Detailing',          content: dtChGarageAndStorageDetailing() },
    { title: 'Detailing for Special Surfaces — Convertible Tops & Vinyl', content: dtChConvertibleTops() },
    { title: 'Professional Detailing KPIs & Business Metrics', content: dtChDetailingKPIs() },
    { title: 'Polishing Defect Recovery — Advanced Problem Solving', content: dtChPolishingDefectRecovery() },
    { title: 'Paint Condition Assessment & Client Reporting',  content: dtChPaintConditionAssessment() },
    { title: 'Detailing for Adverse Conditions & Environments', content: dtChAdverseConditions() },
    { title: 'Full Detail Menu Design & Package Pricing',      content: dtChMenuDesign() },
    { title: 'Appendices',                                     content: dtChAppendices() },
  ];

  return chapters;
}

module.exports = {
  generateCeramicManual,
  generateDetailingManual,
  SURFACE_PANELS,
  DETAIL_STAGES,
};
