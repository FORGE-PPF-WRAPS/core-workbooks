'use strict';

const {
  p, h2, h3, h4, pageBreak, chapterDivider,
  callout, procedure, checklist, table, specTable,
  troubleshootingSection, panelProcedure, writeChapters,
} = require('./shared');

// ─────────────────────────────────────────────────────────────────────────────
// WRAP PANELS — 12 panels with full procedure data
// ─────────────────────────────────────────────────────────────────────────────

const WRAP_PANELS = [
  {
    name: 'Hood — Full',
    difficulty: 'Intermediate',
    time: '90–120 min',
    orientation: 'Film grain (if directional) runs front-to-back',
    overview:
      'The hood is the largest single panel on most vehicles and the most visually prominent. Success requires managing the large film sheet without premature adhesion, keeping the leading edge tension-free while wrapping to the underside, and controlling the side edges around the hood\'s compound curve drop.',
    prep: [
      'Wash with panel prep soap; clay bar entire surface',
      'IPA wipe to 70/30 mixture — wipe front-to-back, never circular',
      'Check paint surface temperature: 18–27 °C (65–80 °F) optimal',
      'Remove hood emblem or flag around it per customer preference',
      'Pre-cut film 10 cm oversize on all edges; pre-shrink leading edge if cast film',
      'Knifeless tape set on rear edge of hood if wrap terminates there rather than underside wrap',
      'Have slip solution in a fine-mist bottle ready; dry squeegee + felt edge tool staged',
    ],
    steps: [
      'Fold film in half lengthwise with liner facing out; position over hood to verify coverage and grain direction',
      'Fold back top half; peel liner from center section only; mist slip solution generously on paint and exposed adhesive',
      'Lay center section onto hood using squeegee from center outward in overlapping horizontal strokes, 60° angle, light pressure',
      'Work toward the front edge (grille lip); use consistent squeegee strokes to push air out at 5–10 cm intervals',
      'Unfold the held-back half; peel liner while holding film taut above the panel; squeegee center-out as before',
      'Squeegee toward the rear edge — if wrapping to underside, lift and re-position film at the hood lip; stretch film over the lip in 5 cm sections using thumb and hard card',
      'Work the side edges: tuck along each fender line using fingertips to pre-stretch then squeegee firmly',
      'At the front corners (compound curve), relief cut or small V-notch to allow film to conform without bridging',
      'Post-heat the entire surface at 60–65 °C; re-squeegee while warm to activate adhesive and eliminate micro-bubbles',
      'Post-heat all wrapped edges at 70 °C; pull gently outward while applying heat; squeegee edge flat against underside',
      'Trim any relief cuts cleanly using a fresh blade at 20° angle; seal cut edges with edge sealer',
      'Final QC pass under 3-bulb inspection light: check for bubbles, fish-eyes, lifting edges, and uneven seams',
    ],
    qc: [
      'No bubbles larger than 2 mm at 48 hours (small air pockets may self-heal under heat)',
      'All edges are adhered flat with no curl or lift',
      'Film grain / pattern is consistent from front to rear with no twist',
      'No squeegee scratches visible under raking light',
      'Front edge terminates cleanly at grille line or under lip — not visible from 1 m',
      'No stretch distortion or whitening at corners',
    ],
    tips: 'On vehicles with heavily sculpted hood lines, pre-crease the film lightly at each character line before laying — this prevents the bridging that causes long-term lifting. Warm film at 35–40 °C before the panel lay in cold environments.',
    warnings: 'Do not post-heat with a heat gun held stationary — keep the gun moving at 15 cm/s minimum to prevent hot spots. On metallic and color-shift films, directional consistency is critical — mark the film top with tape before cutting.',
    defects: [
      ['Large bubble after 48 hours', 'Moisture or contamination trapped under film', 'Lift corner at nearest edge; remove, clean, re-apply', 'Thorough IPA wipe before install; dry panel completely'],
      ['Edge lifting within 7 days', 'Insufficient post-heat or edge sealer missed', 'Re-heat edge to 70 °C and re-squeegee; apply edge sealer', 'Post-heat protocol completed on every edge'],
      ['Stretch whitening at corner', 'Over-stretched film; too much tension applied', 'Remove and re-cut with deeper relief; use more slip during application', 'Pre-heat film before corner stretching'],
      ['Fish-eye contamination', 'Silicone or oil on paint surface before application', 'Remove film; clay bar; wipe with IPA 99%; re-apply', 'Panel prep checklist always completed'],
    ],
  },
  {
    name: 'Roof Panel',
    difficulty: 'Intermediate',
    time: '60–90 min',
    orientation: 'Grain runs front-to-back; match hood grain if same film run',
    overview:
      'Roof wraps offer dramatic visual impact on color-change and gloss-black applications. The main challenges are managing film in open air (UV and wind) and accessing all edges cleanly, particularly the rear edge that terminates at the windshield header.',
    prep: [
      'Remove roof rack, antenna, and any trim pieces that can be safely detached',
      'IPA wipe roof surface — do not contaminate neighboring panels',
      'Ensure ambient temperature is stable — avoid wrapping in direct sunlight (heat causes premature adhesion)',
      'Stage a helper or use a tension frame to hold the oversize sheet above the roof during positioning',
      'Knifeless tape set along windshield header and rear window header if wrapping to the glass seal',
      'Pre-cut film 12 cm oversize on all four sides',
    ],
    steps: [
      'With a helper, carry the pre-sized film above the roof and align front-to-back; mark the center of the film with a small piece of tape',
      'Hold film taut approximately 10 cm above the roof; peel liner starting from center, fold liner outward on each side as you go',
      'Lay the center strip from front header to rear header in a single continuous stroke — do not allow the film to touch the panel and then lift',
      'Squeegee from center outward in horizontal passes, maintaining consistent 60° angle',
      'Work toward both long side edges simultaneously; tuck film under any existing trim strip or squeegee firmly down the drip rail',
      'At the A-pillar corners (front), allow excess film to overlap; post-heat and fold over the pillar edge or trim at the edge seam',
      'At the rear header, run knifeless tape and cut cleanly at the glass seal line',
      'Post-heat the full surface at 60 °C while re-squeegee passes are made',
      'Post-heat all four edges at 70 °C; seal immediately',
      'Replace any removed trim pieces; check that clips are secure and film is not pinched',
    ],
    qc: [
      'Film grain aligns with hood within 5° angular tolerance',
      'No bridging across the center roof bow (common on full-size trucks and SUVs)',
      'All four edges are sealed and flat',
      'No bubbles under raking inspection light at 24 hours',
      'Drip rail film is flush — no proud edge that a fingernail catches',
    ],
    tips: 'On panoramic sunroof vehicles, the film terminates at the glass seal. Use knifeless tape for a clean cut line and avoid blade-cutting over the glass.',
    warnings: 'Wind is the enemy of large panel installs. Close bay doors or use a temporary curtain. A gust at the wrong moment can crease the entire sheet, wasting the material.',
    defects: [
      ['Center bow bridging', 'Film not pressed into contour; insufficient slip application', 'Lift section; re-heat; press with felt squeegee into contour', 'Use extra slip in the center area; work into contour as first move'],
      ['Drip rail proud edge', 'Film folded rather than stretched over the rail', 'Re-heat; use a firm tuck tool to fold film under rail', 'Use a tucking wedge to guide film under rail during application'],
      ['Rear header waviness', 'Film not pulled taught before squeegee pass', 'Lift and re-do the rear quarter of the panel', 'Always squeegee from front to rear on the roof — never side-to-side first'],
    ],
  },
  {
    name: 'Front Bumper',
    difficulty: 'Advanced',
    time: '90–150 min',
    orientation: 'N/A — film conforms to surface; no directional restriction',
    overview:
      'The front bumper is the most complex panel on the vehicle due to compound curves, deep air intakes, license plate recesses, fog light housings, lower valance transitions, and the need for a seamless appearance at the top edge where it meets the hood. This panel demands precision, patience, and willingness to re-do sections that do not conform cleanly.',
    prep: [
      'Remove the bumper from the vehicle if the shop has the capability — off-car install produces superior results on complex bumpers',
      'Remove fog light bezels, active grille shutters, radar modules, or any removable components',
      'Clay bar and IPA wipe all surfaces including deep recesses',
      'Ensure recess areas are free of old adhesive or contamination',
      'Pre-measure and cut multiple pieces: top main section; lower valance; side transitions; recess inserts',
      'Lay out all pieces before starting — a bumper is multi-piece by design, not a failure',
      'Stage full detail light, heat gun, tucking tools, felt squeegees, and multiple blade handles',
    ],
    steps: [
      'Install the top edge piece first: align the top edge of the film at the hood/bumper seam line; squeegee from center downward',
      'Work the film into the upper character line of the bumper using fingertip pressure then felt squeegee',
      'At the fog light housing: relief cut radiating from each corner; fold film into the recess; squeegee each facet',
      'At the lower grille opening: cut the opening with a channel blade; wrap the film edge into the grille channel',
      'For the lower valance section: apply as a separate piece using knifeless tape at the transition point',
      'Side sections wrap around to the door jamb edge: pre-stretch film before contact using heat; fold to inside of bumper',
      'All relief cuts are cleaned with a fresh blade at 20°; overlapping corners are trimmed to a clean single layer',
      'Post-heat the complete assembly section by section at 65 °C',
      'Post-heat all folded edges at 70 °C and squeegee firmly',
      'Reinstall removed components; check that panel gap at hood is even and film seam is not visible at normal viewing distance',
    ],
    qc: [
      'No bridging across any character line or recess opening',
      'Hood-to-bumper seam is clean and parallel to the body line',
      'Fog light housing area shows no wrinkles or bridging',
      'Lower edge is wrapped cleanly to the underside of the valance — no peeling or flutter at highway speed',
      'Film color/texture matches adjacent panels (if full vehicle wrap)',
      'No silver liner or adhesive exposed at any cut edge',
    ],
    tips: 'Cut a paper template of complex recess areas before cutting the film. A 10-minute templating session prevents a wasted piece of film. On modern bumpers with radar systems, never squeegee directly over the sensor — film bridges are acceptable and sometimes required.',
    warnings: 'Radar sensors (adaptive cruise, blind spot monitors) may be adversely affected by metallic wrap films or dark tint films. If the vehicle has these systems, use non-metallic film on bumper faces and note this on the work order.',
    defects: [
      ['Bridging at grille opening', 'Film not cut and folded into channel', 'Carefully cut opening; fold edges into channel', 'Always plan opening cuts before application'],
      ['Wrinkle at corner transition', 'Insufficient relief cuts or wrong cut placement', 'Add additional relief cuts; heat and re-form', 'Pre-test on a practice piece of similar geometry'],
      ['Seam at hood gap too visible', 'Film terminated at wrong line', 'Re-cut with knifeless tape for clean line; re-evaluate panel gap', 'Measure twice; use knifeless tape for all visible seams'],
      ['Film peeling from lower valance', 'Low adhesion area — paint often textured or rubberized', 'Clean thoroughly; use primer on textured areas; re-apply', 'Always check valance surface type before selecting film'],
    ],
  },
  {
    name: 'Rear Bumper',
    difficulty: 'Intermediate',
    time: '60–90 min',
    orientation: 'N/A — match body color direction if applicable',
    overview:
      'The rear bumper shares many challenges with the front bumper but is typically less complex due to fewer fog lights and sensors. The main challenges are the trunk-to-bumper seam management, exhaust cutouts, and the lower kickplate area that experiences high contact wear.',
    prep: [
      'Clean and IPA wipe including the lower kickplate and exhaust areas',
      'Check for rock chip damage on the kickplate area — document for the customer',
      'Remove exhaust tips or trim rings if removable',
      'Knifeless tape set at trunk-to-bumper panel line for a clean seam',
      'Pre-cut main piece with 10 cm overage on all edges',
    ],
    steps: [
      'Start at the trunk-to-bumper seam: align film using knifeless tape as guide; squeegee downward from the seam line',
      'Work down the main bumper face using center-out squeegee technique',
      'Exhaust cutout: let film lay over the opening; cut X-relief; fold flaps inward; trim flush to opening lip',
      'Side wrap-around: pre-heat film; fold to door jamb or body panel edge',
      'Lower kickplate: apply separately if texture changes; this area may require a scuff-resistant laminate overpatch on high-wear vehicles',
      'Post-heat full panel at 65 °C; post-heat all edges at 70 °C; seal with edge sealer on all exposed cut edges',
    ],
    qc: [
      'Trunk-to-bumper seam line is straight and parallel to the body gap',
      'Exhaust cutouts are clean with no visible adhesive at the opening',
      'Lower kickplate coverage is complete and firmly adhered',
      'No bridging at trunk lip transition',
    ],
    tips: 'Use a kickplate-specific wear-resistant overlay on fleet vehicles and work trucks — standard cast film will show scuffs within months on bumpers that see regular loading.',
    warnings: 'Exhaust heat will degrade film if the exhaust exits are pointed directly at the bumper face. Verify exhaust direction and advise the customer if their exhaust configuration is a risk to the film.',
    defects: [
      ['Film lifting from kickplate within 30 days', 'Surface contamination from boot polish or wax', 'Solvent clean; re-apply; educate customer on products', 'Ask customers about boot contact area before application'],
      ['Exhaust cutout edge melting', 'Exhaust heat proximity', 'Re-cut with increased clearance; use heat-resistant barrier tape', 'Inspect exhaust routing before cutting; maintain clearance'],
    ],
  },
  {
    name: 'Front Fender (Driver Side)',
    difficulty: 'Beginner–Intermediate',
    time: '45–75 min',
    orientation: 'Grain runs front-to-back; match hood direction',
    overview:
      'Fenders are a good entry-level wrap panel — predominantly flat with predictable compound curves at the wheel arch and A-pillar. The primary challenge is the wheel arch edge, which requires precise trimming for a clean visible line.',
    prep: [
      'IPA wipe including the wheel arch inner lip and the door jamb area at the front edge',
      'Remove any wheel arch trim clips if the film must be tucked behind them',
      'Mark the door jamb edge with knifeless tape for the rear panel termination',
      'Pre-cut film 10 cm oversize on all sides',
    ],
    steps: [
      'Position film on the panel with overage at wheel arch, A-pillar, and door gap; verify grain orientation',
      'Peel liner from center; apply slip solution; lay using center-out squeegee technique',
      'Work down to the wheel arch: pre-heat film to 40 °C; stretch gradually around the arch curve; use relief cuts at the tightest radius point',
      'Wheel arch termination: fold film to the inside of the arch using a tuck tool; squeegee flat; trim flush at the arch lip edge',
      'Door gap edge: use knifeless tape to cut a clean seam at the body line; fold remainder into the jamb',
      'A-pillar edge: fold film around the pillar or terminate cleanly at the fender-to-pillar seam line',
      'Post-heat full panel; post-heat wheel arch fold at 70 °C',
    ],
    qc: [
      'Wheel arch inner lip shows no visible adhesive or rough trim from outside',
      'Door gap termination is consistent — same depth fold on both sides of the vehicle',
      'Grain aligns with the hood within visual tolerance',
      'No pull-marks or stretch patterns visible under raking light',
    ],
    tips: 'On vehicles where the fender and hood share an exposed edge seam, use knifeless tape on both pieces to create matching parallel seam lines — nothing makes a wrap look amateurish faster than mismatched seam placement.',
    warnings: 'Fender vents and louvers require individual film sections per louver blade — never stretch a single piece over a vent grille. The result will bridge and lift within weeks.',
    defects: [
      ['Wheel arch lifting in winter', 'Insufficient post-heat at arch fold; ice and water intrusion', 'Re-heat arch; add edge sealer; advise customer on winter wash care', 'Use edge sealer on all wheel arch fold edges at install'],
      ['Grain mismatch with hood', 'Film sheet laid at wrong angle', 'Re-do from scratch after confirming grain orientation', 'Mark grain direction with tape on all pieces before cutting'],
    ],
  },
  {
    name: 'Door Panel (Full)',
    difficulty: 'Beginner–Intermediate',
    time: '45–60 min',
    orientation: 'Grain runs front-to-back',
    overview:
      'Full door wraps are a staple panel that installers at all experience levels must master. The main challenge is the door handle recess and the character lines that cross the panel, which require careful squeegee angle management to prevent bridging.',
    prep: [
      'Remove door handle if possible (remove-and-reinstall method produces cleaner results than wrapping around)',
      'IPA wipe entire door face and edges',
      'Open the door to provide edge access; place a soft pad on the rocker to protect it from the door edge during wrapping',
      'Knifeless tape at door jamb edges for clean termination on all four sides',
    ],
    steps: [
      'Verify film sizing: should cover door face with 5 cm overlap into door jamb on all four edges',
      'Position and align film; peel liner; apply slip solution; lay from center outward',
      'At the character line (horizontal crease across panel): slow down and change squeegee angle to 30° to feed film into the line rather than bridging over it',
      'Door handle recess: if handle removed — film the recess fully, then install handle over film for the cleanest result. If not removed — relief cut around recess; fold film edges into the pocket',
      'Work all four door edges into the jamb: top edge under the seal; side edges into the gap; bottom edge under the rocker cap',
      'Post-heat full panel at 60 °C; post-heat all jamb folds at 70 °C',
      'Re-install door handle; verify handle function and alignment',
    ],
    qc: [
      'No bridging over character lines — run a fingernail along the line; film should follow the contour',
      'Door handle area shows no wrinkles or lifting when handle is at rest and when pulled',
      'All four jamb edges are tucked a minimum of 20 mm into the jamb',
      'Bottom edge is protected against car wash brush abrasion',
    ],
    tips: 'Character lines with a sharp V-profile (greater than 45° included angle) may require a horizontal relief slit at the deepest point of the line to allow the film to conform without bridging.',
    warnings: 'Never apply heat to the door glass edge with a heat gun — the sudden thermal shock can crack the glass in cold weather. Use a hot damp towel to warm the glass seal area instead.',
    defects: [
      ['Bridging at character line', 'Squeegee angle too steep; film not worked into the crease', 'Re-heat; use a stiff felt edge tool to press film into line', 'Work slowly at character lines; lower squeegee angle'],
      ['Handle area lifting', 'Insufficient adhesion at curved handle pocket', 'Remove handle; clean pocket; re-apply; seal edges', 'Always prefer remove-and-reinstall method for door handles'],
    ],
  },
  {
    name: 'Mirror Cap (Each)',
    difficulty: 'Intermediate',
    time: '30–45 min per mirror',
    orientation: 'N/A — conform-to-shape application',
    overview:
      'Mirror caps offer a high visual-impact accent opportunity (gloss black, carbon fiber, color-change) and are frequently done as standalone upgrades. Despite their small size, they require precise technique due to the compound curves and the need to wrap to the inside mounting surface.',
    prep: [
      'Remove mirror from vehicle if possible — off-car is strongly preferred for mirror caps',
      'Remove any chrome or trim inserts from the mirror shell',
      'IPA wipe all surfaces including the inner mounting face',
      'Assess the cap geometry: most mirrors require at least two pieces (front face + rear face) or one piece with multiple relief cuts',
    ],
    steps: [
      'Start with the front face: lay film over the mirror cap with generous overage (5 cm minimum on all sides)',
      'From the flat top surface, squeegee outward toward the edges',
      'As the mirror face curves downward at the leading edge, pre-heat film to 40 °C; gradually stretch using fingertips, working in 2 cm increments',
      'At the bottom curve (most compound area on most mirrors): alternate heat and stretch in 1–2 cm increments; use a felt squeegee to press each section before moving to the next',
      'At the trailing edge (where mirror meets the door), fold excess film to the inside mounting surface',
      'Trim excess neatly at the inner edge; seal all cut edges',
      'Repeat for the mirror bottom face if applicable; match film grain/pattern with front face',
      'Post-heat the entire assembly at 65 °C; re-squeegee any areas that have not fully adhered',
      'Re-install on vehicle; check that film is not pinched at the mounting points',
    ],
    qc: [
      'No bubbles visible from any normal viewing angle',
      'Film wraps cleanly to the inside of the cap with no visible white adhesive from behind',
      'Both mirrors are matched — no visible difference in texture orientation or sheen',
      'No wrinkles at the leading edge curve — this is the most common failure point',
    ],
    tips: 'On small mirror caps, work with minimal slip solution — too much slip makes it difficult to control positioning on the small surface. A dry or near-dry application with frequent heat assists is often cleaner.',
    warnings: 'Camera-equipped mirrors (blind spot cameras, 360° view cameras) have glass camera lenses that must not be scratched by squeegees or contaminated with adhesive. Mask camera lenses before starting the wrap.',
    defects: [
      ['Wrinkle at leading edge curve', 'Insufficient heat; film not pre-stretched', 'Re-heat; lift; stretch incrementally', 'Use more heat before each section at the leading curve'],
      ['Film not adhering to inner mounting face', 'Mounting surface often textured ABS — low adhesion', 'Scuff surface lightly; use application primer', 'Primer all ABS mounting surfaces before wrapping'],
    ],
  },
  {
    name: 'A-Pillar (Left & Right)',
    difficulty: 'Beginner–Intermediate',
    time: '20–35 min per pillar',
    orientation: 'Film runs vertically top-to-bottom',
    overview:
      'A-pillars are visible transition pieces between the hood/fender and the windshield. Most are wrapped with a single narrow piece that folds slightly to the windshield glass seal edge. Accuracy is critical as the seam is at eye level from outside the vehicle.',
    prep: [
      'IPA wipe entire pillar including the glass seal channel',
      'Remove any existing vinyl or film; if previous film, clean adhesive completely',
      'If the A-pillar has a molded end cap, remove and wrap the cap separately for a cleaner result',
    ],
    steps: [
      'Pre-cut a strip slightly wider than the pillar plus 15 mm on the glass side and 10 mm on the door-gap side',
      'Position and align the strip vertically — the top end tucks under the roof film or trim',
      'Squeegee from the center of the pillar face outward toward the glass edge',
      'Fold the glass-side edge into the rubber seal channel using a tuck wedge tool',
      'The outer door-gap edge folds into the fender-to-door gap or terminates at the body seam line',
      'Post-heat the full pillar at 65 °C; re-squeegee; seal glass-side edge with clear edge sealer',
    ],
    qc: [
      'Pillar coverage is gap-free from the top trim to the lower corner of the windshield glass',
      'Glass seal edge is fully tucked — no visible adhesive or film edge from inside or outside the vehicle',
      'The pillar seam at the door gap is aligned with the door panel seam (if door panel is also being wrapped)',
    ],
    tips: 'On narrow pillars, keep film slightly undersized at the glass edge — it is easier to pull the seal back and tuck than to have excess film fold over into the glass.',
    warnings: 'Avoid pulling aggressively on the windshield seal to tuck film — seals can deform or tear, creating a water leak. Work slowly with a flexible tuck wedge.',
    defects: [
      ['Film lifting at glass seal edge', 'Seal moisture; insufficient tuck depth', 'Re-heat; re-tuck; apply edge sealer', 'Ensure glass seal area is thoroughly dry; use a dry-brush before tucking'],
      ['Film too short at top', 'Incorrect measurement before cutting', 'Re-cut with correct measurement; overlap under roof trim', 'Always measure with trim removed; add 15 mm extra at top'],
    ],
  },
  {
    name: 'Roof Pillars (B & C)',
    difficulty: 'Intermediate',
    time: '30–45 min per pillar set',
    orientation: 'Vertical grain; match A-pillar orientation',
    overview:
      'B and C pillars are wrapped similarly to A pillars but may be wider and have additional complexity from door and window seals on both sides. They are often wrapped in gloss black or carbon fiber for accent purposes.',
    prep: [
      'IPA wipe all pillar surfaces; ensure door seals are clean and free of protectants',
      'Remove any trim plates or badges on the pillar',
      'Determine whether film wraps to the inside of the door opening or terminates at the visible face edge',
    ],
    steps: [
      'Cut a piece sized for the full pillar face with 20 mm overage on the front and rear glass edges',
      'Align the piece vertically; squeegee from center outward',
      'Fold the front glass seal edge into the rubber channel',
      'Fold the rear glass seal edge into its channel',
      'Top and bottom edges tuck under body trim or fold into the door opening',
      'Post-heat at 65 °C; seal all tucked edges with edge sealer',
    ],
    qc: [
      'Both sides of the vehicle are symmetrical — same exposure, same sheen, same seam placement',
      'No bridging between glass seal channels',
      'Door seals re-compress and seal correctly after reinstallation — test with a water hose if concerned',
    ],
    tips: 'If both glass seals on the B-pillar are present (common on 4-door sedans), the piece is effectively a band between two channels. Pre-stretch the film slightly in the horizontal direction before laying to prevent the film from pulling out of one channel when the other is tucked.',
    warnings: 'C-pillar wraps on SUVs often cover the third-row window seal. Check that the door-actuated glass still seals correctly after the wrap. An improperly tucked edge can deform the seal and cause water intrusion.',
    defects: [
      ['Film pulling out of one seal while tucking the other', 'Insufficient film width; film under tension', 'Re-cut wider piece; tuck both sides simultaneously with two tuck tools', 'Always pre-stretch before laying between two tight channels'],
    ],
  },
  {
    name: 'Trunk Lid / Decklid',
    difficulty: 'Intermediate',
    time: '60–90 min',
    orientation: 'Grain runs left-to-right on most trunk lids; verify against body line',
    overview:
      'The trunk lid is similar to the hood in technique but is typically smaller and often has a prominent lip or spoiler that requires a separate piece or a complex fold. On sedans, the trunk lip is one of the most visible edges on the vehicle.',
    prep: [
      'Remove trunk-mounted spoilers or spoiler brackets when possible for cleaner edge wrapping',
      'Remove license plate and license plate lights',
      'IPA wipe including the trunk lip underside — this is often a high-adhesion challenge area',
      'Assess spoiler mounting: does the film pass under the spoiler gasket or terminate at the spoiler edge?',
    ],
    steps: [
      'Start film at the front edge of the trunk lid (nearest to the cabin)',
      'Squeegee from center outward and rearward',
      'At the character line above the trunk lip, use a low squeegee angle to work film into the feature line',
      'At the rear lip edge: pre-heat film; stretch over the lip; fold down the inside of the lip at least 20 mm',
      'If a spoiler is present: run the film under the spoiler gasket or terminate with knifeless tape at the spoiler base — never bridge under the spoiler gap as the lift will cause failure',
      'Replace license plate surround and lights after trimming film around lamp housing',
      'Post-heat full lid at 60 °C; post-heat lip fold at 70 °C; seal all cut edges',
    ],
    qc: [
      'Trunk lip fold is a minimum 20 mm onto the underside — deeper is better',
      'License plate area is clean with no adhesive visible in the lamp housing',
      'If spoiler is present, the seam at the spoiler base is flush and not visible from rear view',
      'Grain direction matches rear body panels for coherent appearance',
    ],
    tips: 'On vehicles with an integrated lip spoiler (part of the trunk lid metal), the fold-over on the rear lip is the most visible edge on the vehicle from behind. Take extra time here — it is what people see at a red light.',
    warnings: 'Trunk wiring harnesses for the license plate lights often run along the trunk lip. Verify the harness is positioned inside the fold before squeegeeing the film flat — pinching the harness can cause electrical shorts.',
    defects: [
      ['Film bridging at character line above lip', 'Squeegee angle too high; insufficient feed into line', 'Re-heat; use felt edge tool to press into line', 'Slow down; change angle; test on a cold press first'],
      ['Trunk lip fold peeling in winter', 'Cold-temperature adhesion failure; insufficient depth', 'Warm to 70 °C; re-fold; extend fold depth; edge sealer', 'Post-heat lip to 70 °C at install; minimum 20 mm fold'],
    ],
  },
  {
    name: 'Rocker Panels',
    difficulty: 'Beginner',
    time: '30–45 min (both sides)',
    orientation: 'Grain runs front-to-back',
    overview:
      'Rocker panels are low-mounted, predominantly flat panels that run between the front and rear wheel arches. They are a high-impact zone for road debris, curb rash, and door dings from tight parking. Wrapping them in a durable cast film significantly extends their cosmetic life.',
    prep: [
      'Clean thoroughly — rockers accumulate tar, road grime, and salt; use a dedicated fallout remover before IPA wipe',
      'Inspect for any rust bubbling — document and inform the customer; film will trap moisture if installed over active rust',
      'Check wheel arch-to-rocker transition — is the film a single piece or does it terminate at the arch lip?',
    ],
    steps: [
      'Measure the rocker length and height; cut a single piece for each side with 10 cm overage top and bottom',
      'Lay from the center of the rocker outward — this is a relatively simple flat application',
      'Top edge: tuck under the door sill plate or fold to the inside of the door opening',
      'Bottom edge: fold under the rocker lip to the underside; secure with squeegee',
      'Front and rear ends: terminate at the wheel arch with a clean cut or fold into the arch',
      'Post-heat full panel at 60 °C; post-heat all folds at 70 °C',
    ],
    qc: [
      'Top edge is invisible from outside — either under sill plate or tucked into door opening',
      'Bottom fold is a minimum 15 mm — withstands high-speed air at 100 km/h without lifting',
      'No bubbles that will accumulate moisture and cause rust acceleration',
    ],
    tips: 'On lowered vehicles, the rocker panel may be extremely close to the ground. Assess whether the wrap will be scraped on speed bumps and advise the customer accordingly.',
    warnings: 'Always inspect for active rust or rust bubbling before wrapping rockers. Film wrapped over active rust accelerates rust spread by trapping moisture — this is a liability and quality issue that must be disclosed.',
    defects: [
      ['Bottom edge flutter at highway speed', 'Insufficient fold depth; fold not post-heated', 'Re-heat; increase fold depth to minimum 20 mm; add edge sealer', 'Minimum 20 mm fold on all rocker bottom edges; always edge seal'],
      ['Film contaminated with tar at application', 'Rocker not fully decontaminated before install', 'Remove film; solvent decontaminate; re-apply', 'Use tar remover before IPA wipe on all rocker panels'],
    ],
  },
  {
    name: 'Full Rear Quarter Panel',
    difficulty: 'Advanced',
    time: '90–120 min',
    orientation: 'Grain runs front-to-back; match door panels',
    overview:
      'The rear quarter panel is often the largest single body panel on a vehicle and presents the most complex curves, particularly on sedans and coupes where the wheel arch blends into the rear door area. Managing the wheel arch, the C-pillar transition, and the trunk/quarter edge seam are the three primary challenges.',
    prep: [
      'IPA wipe entire quarter panel including the inner wheel arch lip',
      'Determine panel seam strategy: will the quarter film overlap or butt-join the door film?',
      'Knifeless tape set at the trunk/quarter edge for clean termination',
      'Remove any side emblems or badging — this is mandatory on large quarter panel installations',
      'Pre-cut film with 15 cm overage on all four edges — err toward more on the wheel arch side',
    ],
    steps: [
      'Position and align the film for grain direction; center the panel on the film sheet',
      'Peel liner and apply slip solution to the full panel',
      'Lay film starting from the vertical center of the panel; squeegee horizontally outward',
      'Work toward the wheel arch: slowest, most deliberate section of this panel; pre-heat film to 40 °C; work in 3 cm increments around the arch',
      'At the tightest radius of the wheel arch, multiple small relief cuts allow the film to conform; each cut is immediately squeegeed down',
      'Inner wheel arch fold: a minimum 20 mm fold to the inside of the arch with edge sealer',
      'C-pillar transition: film terminates at the C-pillar with a clean seam or overlaps by 5 mm under the pillar trim',
      'Rear edge at trunk panel: use knifeless tape for a clean, straight seam at the quarter-to-trunk seam line',
      'Post-heat full panel section by section at 60–65 °C; post-heat wheel arch fold at 70 °C',
    ],
    qc: [
      'Wheel arch fold minimum 20 mm; no visible adhesive from below the car',
      'Grain is continuous and uninterrupted from front of quarter to rear (no twist)',
      'C-pillar seam or transition is clean and aligns with adjacent panel seams',
      'Rear quarter-to-trunk seam is straight, parallel to the body gap, and consistent in width',
      'No bridging over any character line or raised body feature',
    ],
    tips: 'On heavily styled rear quarters (e.g., wide-body conversions or fastback coupes), break the panel into two pieces split at the character line. Each piece conforms much more cleanly, and a knifeless tape seam at the character line is invisible from any normal viewing angle.',
    warnings: 'Parking sensor modules embedded in the rear quarter panel on some vehicles can be dislodged during aggressive squeegeeing. Work with reduced pressure in known sensor locations and test sensor function before delivery.',
    defects: [
      ['Wheel arch lifting at 3-month mark', 'Edge sealer not applied; winter water infiltration', 'Re-heat; re-fold with deeper fold; seal thoroughly', 'Edge sealer is mandatory on all wheel arch folds'],
      ['Twist in grain across long panel', 'Film sheet not perfectly aligned at start', 'Remove entire panel film; re-lay with alignment guides', 'Mark grain direction on film back before positioning'],
      ['Bubble cluster near character line', 'Slip solution trapped; insufficient squeegee pressure at line', 'Pin bubbles with a fine needle; post-heat; squeegee from outer edge inward toward pin hole', 'Reduce slip solution near character lines; increase squeegee pressure at line transition'],
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CHAPTER BUILDERS
// ─────────────────────────────────────────────────────────────────────────────

function chFilmTechnology() {
  let c = '';
  c += p('Vinyl wrap film is a precision-engineered composite material. Understanding its construction from the top coat to the adhesive layer gives the installer the insight to choose the right film for every application, troubleshoot problems at their root cause, and advise customers with genuine expertise.');

  c += h2('Film Construction — Anatomy of a Wrap Film');
  c += table(
    ['Layer', 'Material', 'Function', 'Typical Thickness'],
    [
      ['Top Coat', 'Polyurethane (PU) clear coat or acrylic lacquer', 'UV protection, surface hardness, finish type', '20–30 microns'],
      ['Print Layer (if applicable)', 'Solvent or UV-cured ink', 'Pattern, color, design', '5–15 microns'],
      ['Face Film', 'Calendered or cast PVC; cast PU for premium films', 'Conformability, color pigmentation, structural body', '60–100 microns'],
      ['Primer Layer', 'Acrylic or epoxy bonding agent', 'Adhesion between face film and adhesive', '5 microns'],
      ['Pressure-Sensitive Adhesive (PSA)', 'Acrylic or modified acrylic PSA', 'Bonds film to paint; must be removable', '20–40 microns'],
      ['Liner (Release Paper)', 'Siliconized polyester or paper', 'Protects adhesive during storage and application', '75–130 microns'],
    ]
  );

  c += h2('Cast vs. Calendered Film');
  c += p('The manufacturing method fundamentally determines how a film behaves during application and over its service life. Every installer must understand this distinction before recommending a product.');

  c += table(
    ['Property', 'Cast Film', 'Calendered Film'],
    [
      ['Manufacturing process', 'Liquid PVC poured onto a moving web; slowly dried', 'PVC compound pressed through rollers under heat and tension'],
      ['Molecular memory', 'None — molecules set in their final state; no return tendency', 'High — film wants to return to its flat state; lifts on curves over time'],
      ['Conformability', 'Excellent — conforms to complex compound curves', 'Limited — suited for flat surfaces and simple curves only'],
      ['Thickness', 'Thinner and more consistent (60–80 microns)', 'Thicker and less uniform (80–100+ microns)'],
      ['Shrinkage after application', 'Minimal', 'Significant — can cause edge lifting on curves and recesses'],
      ['Service life (outdoor)', '7–12 years', '3–5 years'],
      ['Cost', 'Higher', 'Lower'],
      ['Best use', 'Complex vehicle panels, full wraps, long-term installs', 'Flat signs, interior graphics, short-term campaigns'],
    ]
  );

  c += callout('warning', '**Never use calendered film for full vehicle wraps.** The molecular memory will cause lifting on any curved panel within 6–18 months regardless of installation quality. If a customer brings in a "deal" film that is calendered, explain the distinction and recommend a cast product.');

  c += h2('Film Categories by Finish and Application');
  c += table(
    ['Category', 'Finish Types', 'Application Notes', 'Maintenance Considerations'],
    [
      ['Gloss color change', 'High gloss, satin gloss', 'Forgiving of minor imperfections; good for beginners', 'Standard wash; shows water spots'],
      ['Matte / Flat', 'Flat matte, satin matte, dead matte', 'Unforgiving of fingerprints during install; avoid rubber squeegees on face', 'No wax; matte-specific spray detailer only'],
      ['Chrome / Mirror', 'High-mirror chrome, brushed metal', 'Extreme care during install; scratches during application show; no dry squeegeeing', 'No abrasive cleaners; polish-free maintenance'],
      ['Color-shift / Chameleon', 'Dual-tone, multi-angle shift', 'Directional film — grain direction is critical; pieces must all run same direction', 'Clean with microfiber; no rough pad contact'],
      ['Textured', 'Carbon fiber (2D/3D), brushed aluminum, forged composite, crocodile', 'Texture must be matched at all seams; forgiving of minor bubbles', 'Compressed air to clean texture channels'],
      ['Print / Wrap design', 'Full-color digital print', 'Pre-designed; panels pre-cut by vendor; requires pattern alignment during install', 'UV-protective spray recommended'],
      ['Fluorescent / Neon', 'High-visibility solid colors', 'Sensitive to heat during install — lower post-heat temperature', 'Avoid long UV exposure — fades faster than standard pigments'],
    ]
  );

  c += h2('Film Selection Matrix');
  c += p('Use this reference to select the appropriate film tier for common customer requests.');

  c += table(
    ['Customer Request', 'Recommended Film Type', 'Avoid'],
    [
      ['Full color change on daily driver', 'Premium cast, gloss or satin', 'Calendered; chrome on daily driver'],
      ['Competition or show car full wrap', 'Premium cast, customer-specified finish', 'Economy cast; any calendered'],
      ['Fleet van branding', 'Mid-grade cast or calendered (flat surface only)', 'Chrome; color-shift (hard to match later)'],
      ['Accent roof or hood on personal vehicle', 'Premium cast gloss black or carbon fiber texture', 'Calendered — will lift on roof curves'],
      ['Interior trim accents', 'Cast or flexible calendered; interior grade', 'Standard exterior film (off-gassing in heat inside vehicle)'],
      ['Motorcycle tank and fairings', 'Premium conformable cast', 'Calendered; anything with aggressive molecular memory'],
    ]
  );

  return c;
}

function chAdhesiveSystems() {
  let c = '';
  c += p('The pressure-sensitive adhesive (PSA) layer is the least visible component of a wrap film and one of the most important. Understanding adhesive chemistry, activation requirements, and failure modes turns a technically competent installer into an expert who can prevent problems before they occur.');

  c += h2('Adhesive Types in Vinyl Wrap Film');
  c += table(
    ['Adhesive Type', 'Description', 'Best For', 'Removal Characteristics'],
    [
      ['Solvent-acrylic standard', 'Traditional aggressive adhesive; high initial tack', 'Long-term installs; flat surface applications', 'Requires heat and careful peel; may leave residue after 5+ years'],
      ['Micro-channel / air-release', 'Adhesive with microscopic channels allowing trapped air to escape', 'Complex panel installs; beginner-friendly application', 'Clean removal; channels also allow minimal moisture escape'],
      ['Dual-layer adhesive', 'Two-part system with a repositionable inner layer and permanent outer bonding zone', 'Premium full wraps; allows more adjustment time', 'Clean removal within design life; engineered for specific substrates'],
      ['Low-tack removable', 'Designed for short-term campaigns; very gentle on painted surfaces', 'Seasonal graphics; rental fleet branding', 'Clean removal even after 1–2 years'],
    ]
  );

  c += h2('Adhesive Activation & Curing');
  c += p('A common misconception is that the adhesive is "done" once the film is squeegeed down. PSA adhesives continue to build bond strength for 24–72 hours after application. The following factors affect this cure:');

  c += checklist([
    '**Temperature:** Adhesive bond strength builds faster at 20–27 °C. Cold environments (below 10 °C) dramatically slow cure — do not deliver vehicles in cold conditions without warning the customer about reduced initial adhesion',
    '**Pressure:** Squeegee pressure during installation activates adhesive flow into the paint surface micro-texture — this is why firm, overlapping strokes matter',
    '**Post-heat:** Applying 60–65 °C to the film for 10–15 seconds per panel section significantly accelerates adhesive flow and bond development',
    '**Surface contact area:** Textured, porous, or contaminated surfaces reduce contact area and permanently limit bond strength regardless of subsequent cure time',
    '**UV exposure:** Initial UV exposure to the film after installation accelerates top coat cure but has minimal effect on adhesive cure',
  ]);

  c += h2('Slip Solution Formulation');
  c += p('Slip solution is used to allow the installer to reposition the film before the adhesive grips permanently. The formulation affects how much working time is available.');

  c += table(
    ['Formula', 'Mix Ratio (Water:Additive)', 'Characteristics', 'Best For'],
    [
      ['Mild soap solution', '1000:1 (drop of dish soap)', 'Moderate slip; moderate re-tack time', 'General flat panel work'],
      ['Isopropyl alcohol solution', '10:1 (IPA to water)', 'Faster re-tack than soap; minimal lubrication', 'Not recommended as slip — use for prep only'],
      ['Professional film application fluid', 'Per product instructions', 'Optimized slip-to-tack balance; no residue', 'Recommended for all installations'],
      ['Dry application (no slip)', 'N/A', 'Immediate adhesion — no repositioning possible', 'Small accent pieces; expert application only'],
    ]
  );

  c += callout('tip', 'Use less slip solution than you think you need. Excess slip under a large panel takes hours to migrate out to the edges. On large panels (hood, roof), mist lightly — the goal is lubrication for positioning, not soaking. Work out the slip with firm squeegee pressure from the center outward.');

  return c;
}

function chToolsEquipment() {
  let c = '';
  c += p('Professional wrap installation requires a well-organized, properly maintained tool kit. The right tool for each application phase prevents surface damage, reduces installation time, and produces a consistently higher quality result. This chapter defines the complete tool inventory and describes the correct application for each.');

  c += h2('Core Squeegee Toolkit');
  c += table(
    ['Tool', 'Material / Hardness', 'Use Case', 'Surface Caution'],
    [
      ['Hard plastic squeegee (yellow/orange)', 'Rigid ABS plastic', 'Flat panels, primary film application strokes', 'Can scratch gloss film if used dry — always use film over film or felt edge'],
      ['Soft rubber squeegee', 'Shore A 40–60 durometer', 'Delicate films (matte, chrome), glass tint application', 'Too soft for tight character lines — misses adhesion in the crease'],
      ['Felt-edge hard card', 'Hard plastic core + felt wrap', 'All panel types; edge work; wrapping over lips', 'Replace felt when worn smooth — bare edge will scratch'],
      ['Rigid edge tool (teflon card)', 'PTFE-coated plastic', 'Chrome and polished films; no-scratch edge activation', 'High cost — reserve for premium films only'],
      ['Buffer pad', 'Terry cloth + foam backer', 'Final buffing pass; large flat panels', 'Must be clean — contaminated buffer spreads debris under film'],
    ]
  );

  c += h2('Cutting Tools');
  c += table(
    ['Tool', 'Blade Type', 'Application', 'Safety Note'],
    [
      ['Wrap knife / snap-off blade', '30° snap-off blade', 'General film trimming, cutting liner, rough-cut of panels', 'Change blade every 60–90 seconds of cutting — dull blades tear rather than cut'],
      ['Channel blade / knifeless guide', 'Concealed rounded tip with cutting recess', 'Cutting through film without contacting paint; overlapping seam cuts', 'Still possible to scratch paint through thick film — maintain correct angle'],
      ['Low-angle film knife', '20° fixed blade', 'Seam cutting, detail work near panel edges', 'Never use for cutting over glass'],
      ['Rotary cutter (plotter blade)', 'Rolling disc blade', 'Straight line cutting of pre-laminated printed film', 'Requires cutting mat under film; not for on-car cutting'],
      ['Knifeless tape', 'Monofilament embedded in tape', 'Cutting without a blade; ideal for visible seam lines', 'Pull at 45° to the surface in a continuous motion for clean cuts'],
    ]
  );

  c += h2('Heat Tools');
  c += table(
    ['Tool', 'Temperature Range', 'Use', 'Critical Operating Notes'],
    [
      ['Professional heat gun', '30–650 °C adjustable', 'All post-heat applications, film activation, edge treatment', 'Keep moving at minimum 15 cm/s; never hold stationary on film'],
      ['Infrared thermometer', 'Reading only', 'Verify film surface temperature during post-heat', 'Read from 15 cm distance; measure film surface, not air'],
      ['Hot damp towel', '~60 °C surface temp', 'Gentle warming for glass seal edges; tight access areas', 'Useful where heat gun access is limited'],
      ['Heat lamp (infrared panel)', '40–80 °C at surface', 'Even warming of large panels; controlled heat for large installs', 'Set to correct distance per manufacturer — too close causes hot spots'],
    ]
  );

  c += h2('Preparation & Cleaning Tools');
  c += checklist([
    'Clay bar (medium grade) — final surface decontamination before installation',
    'Spray bottles (3 minimum): slip solution, IPA wipe, plain water rinse',
    'Microfiber towels (lint-free, minimum 10 on hand per vehicle): panel wipe-down, buffing',
    'Tack cloth: final surface pass before film contact on clean paint',
    'Panel prep soap (strip wax and sealant): pre-IPA wash step',
    'IPA solution (70/30 IPA:water): final prep wipe',
    'Detailing light (LED with raking/diffuse modes): surface inspection before and after application',
    'Lint roller: remove fibers and debris from the install environment and tools',
    'Compressed air blow gun: clear dust from body seams, grilles, and panel gaps before installation',
  ]);

  c += h2('Workshop Environment Requirements');
  c += checklist([
    'Temperature maintained at 18–27 °C throughout installation — film and adhesive performance degrades outside this range',
    'Humidity below 60% RH — high humidity extends adhesive cure time and can cause adhesion failures on textured surfaces',
    'Positive pressure ventilation or sealed bay — dust is the enemy of a clean install',
    'Overhead lighting supplemented by raking detail lights — flat overhead light hides bubbles and missed adhesion',
    'Water supply and drainage accessible in the bay — final panel prep rinse must happen close to the work area',
    'Organized tool station: every tool has a home; tools not in use are off the vehicle and out of reach of the film surface',
  ]);

  return c;
}

function chSafety() {
  let c = '';
  c += p('The vinyl wrap installation environment presents several underappreciated hazards. Sharp blades, chemical solvents, high-temperature heat tools, and physical demands of reaching across large panels all contribute to injury risk. This chapter establishes a non-negotiable safety culture.');

  c += h2('Blade Safety');
  c += callout('warning', 'Blade injuries are the leading cause of installer injury in this trade. Every blade-related practice below is mandatory — not optional.');

  c += checklist([
    'Blades are never placed on a vehicle surface — return to handle or set on the dedicated blade tray',
    'Snap off and dispose of dull segments using the blade snapper tool — never fingers, never pliers',
    'Blade snapper waste is placed in a designated sharps container — not the general trash bin',
    'When handing a blade handle to another person, hold the handle and extend the handle end — never the blade end',
    'Blades are not used while leaning over the work surface — stand or use proper body mechanics',
    'Cut-resistant gloves are worn for all liner removal on large sheets where grip force is high',
    'Never use a blade to open film packaging while holding the packaging against the body',
  ]);

  c += h2('Chemical Safety');
  c += table(
    ['Chemical', 'Hazard', 'PPE Required', 'Safe Use Practice'],
    [
      ['Isopropyl Alcohol (IPA)', 'Flammable; respiratory irritant at high concentration', 'Nitrile gloves; good ventilation', 'Store away from heat; use in ventilated bay; no open flames'],
      ['Tar and adhesive remover solvents', 'Skin and respiratory irritant; defatting agent', 'Nitrile gloves; eye protection in enclosed spaces', 'Apply with cloth — do not spray directly at face'],
      ['Fallout / iron remover', 'Acidic; skin and eye irritant', 'Nitrile gloves; eye protection; avoid skin contact', 'Do not allow to dry on paint or skin; rinse thoroughly'],
      ['Heat gun output (hot air)', 'Burn hazard; fire risk near solvents', 'Do not use near open solvent containers', 'Ensure area is clear of flammable materials before heating'],
      ['Application fluid / slip solution', 'Generally low hazard', 'None required for standard use', 'Store per product label; dispose of excess responsibly'],
    ]
  );

  c += h2('Ergonomic Safety');
  c += p('Full vehicle wraps require extended periods of reaching, bending, and working in awkward positions. Repetitive strain injuries to the wrists, shoulders, and lower back are common in this trade.');

  c += checklist([
    'Use adjustable height creepers and knee pads for all low-panel work (rockers, lower bumpers, wheel arches)',
    'Take a 5-minute break every 45 minutes of continuous squeegeeing — wrist strain is cumulative',
    'Vehicle positioning: adjust height when possible using a lift; never hunch over a hood for 90 minutes',
    'When pulling liner from large sheets, use the whole arm movement — not wrist-only pulling',
    'Maintain core tension when leaning across panels — do not collapse the lower back',
    'Report any wrist or shoulder pain early — early intervention prevents chronic injury',
  ]);

  return c;
}

function chDesignPlanning() {
  let c = '';
  c += p('Professional wrap projects begin with thorough design and planning before any film is touched. A well-planned wrap minimizes material waste, prevents costly re-dos, and ensures the customer\'s vision aligns with what is technically achievable. This chapter covers both design consultation and physical panel planning.');

  c += h2('Color Change Consultation');
  c += p('Color change wraps are the most emotionally significant wrap service for most customers. The consultation must bridge the customer\'s vision with realistic expectations about the final result.');

  c += procedure('Color Change Consultation Steps', [
    'Show physical samples — never rely solely on digital renders or computer screens (color rendering varies dramatically between displays)',
    'Present samples against the customer\'s vehicle in natural daylight to show how ambient light affects the finish',
    'Walk through the finish implications: matte shows imperfections differently than gloss; chrome is unforgiving of every panel gap and seam',
    'Discuss seam placement strategy — where will seams appear and are they acceptable to the customer?',
    'Confirm panel inclusion/exclusion: are door jambs, engine bay, door shuts, trunk interior included or excluded?',
    'Discuss the vehicle\'s current paint condition — heavily scratched or chipped paint will show texture through the film',
    'Deliver a written scope of work that specifies every included and excluded surface',
  ]);

  c += h2('Seam Strategy Planning');
  c += p('Seam placement is as much a design decision as a technical one. Poorly planned seam placement draws the eye to exactly the worst places.');

  c += table(
    ['Seam Location', 'Visibility Level', 'Notes'],
    [
      ['Body panel gaps (door-to-fender, etc.)', 'Lowest — seam hides in factory gap', 'Preferred termination location for all color-change wraps'],
      ['Character line (horizontal body feature)', 'Low — line draws the eye away from the seam', 'Use knifeless tape for a precise cut; align to center of the line'],
      ['Center of a flat panel', 'High — very visible', 'Only acceptable if the design calls for a split color or panel is too wide for available film width'],
      ['Hood center seam (front-to-back on engine-hood area)', 'Medium — acceptable if grain is perfectly aligned', 'Less visible on textured films; more visible on gloss; plan carefully'],
      ['Roof center seam', 'Low from normal height — more visible to taller observers', 'Unavoidable on wide roofs; minimize by precisely matching grain'],
    ]
  );

  c += h2('Material Quantity Planning');
  c += p('Accurate material estimates prevent the disaster of running short mid-job or ordering excessive material that increases job cost without adding value.');

  c += procedure('Film Quantity Calculation', [
    'Measure each panel individually: length × width in cm, then add 20% for overage and relief cuts',
    'Group pieces that can share a single film width (typical roll width: 152 cm)',
    'Account for pattern matching on color-shift or directional films: add a full panel length for every panel after the first',
    'For textured films (carbon fiber), add an additional 15% for pattern alignment',
    'Calculate total linear meters required at your film\'s roll width',
    'Order 10% additional above calculated quantity as a safety buffer for re-dos',
    'For premium films, always order from the same production batch to prevent color variance between rolls',
  ]);

  return c;
}

function chSurfacePrep() {
  let c = '';
  c += p('Surface preparation is the single most important factor determining the longevity and appearance of any wrap installation. No installation technique compensates for poor prep. The film\'s adhesive requires a perfectly clean, contaminant-free, chemically neutral surface to achieve its engineered bond strength.');

  c += h2('Surface Contaminants and Their Effects');
  c += table(
    ['Contaminant', 'Effect on Adhesion', 'Removal Method'],
    [
      ['Wax and paint sealant', 'Creates a release layer between paint and adhesive — bond strength dramatically reduced', 'Strip wax wash; follow with IPA wipe'],
      ['Silicone from detailing products', 'Causes fish-eye contamination — adhesive cannot wet the surface; creates permanent dimples', 'Silicone remover; multiple IPA wipes; may require clay bar'],
      ['Tar and road contamination', 'Physical barrier; adhesive bonds to tar rather than paint', 'Tar remover applied to microfiber cloth; IPA follow-up'],
      ['Iron fallout (brake dust)', 'Metallic particles embedded in clear coat create bond failure points', 'Iron/fallout remover (chemical); rinse; IPA wipe'],
      ['Bird dropping or tree sap residue', 'Acidic etching of clear coat creates surface topography that traps air', 'Sap remover; clay if necessary; IPA final'],
      ['Water spots (mineral deposits)', 'Raised calcium deposits prevent full film contact', 'Light compound on affected area; IPA wipe; assess if correction needed'],
      ['Prior adhesive residue (old film)', 'Extremely high adhesion to the new film; creates immediate, unremovable bond in that spot', 'Adhesive remover; IPA; full contamination check before film'],
      ['Fingerprints and skin oils', 'Oil film prevents adhesive contact', 'IPA wipe immediately before film contact'],
    ]
  );

  c += h2('Standard Pre-Wrap Prep Sequence');
  c += procedure('Complete Pre-Wrap Surface Preparation', [
    '**Panel wash:** Wash the entire vehicle with a strip-wax shampoo using a clean two-bucket method; rinse fully; dry with clean microfiber',
    '**Fallout removal (if needed):** Spray iron fallout remover on all surfaces; allow dwell time per product instructions; rinse thoroughly',
    '**Tar removal (if needed):** Apply tar remover to microfiber and wipe affected areas; rinse; dry',
    '**Clay bar decontamination:** Clay the entire vehicle using a clay lubricant; the surface should feel like glass after claying',
    '**Rinse and dry:** Rinse all clay lubricant; blow out all panel gaps and seams with compressed air; dry completely',
    '**IPA wipe (panel by panel, as you install):** 70/30 IPA:water mixture; wipe in straight passes, front to back; flip the cloth every pass to a clean surface',
    '**Tack cloth pass:** Before each film section touches the panel, run a tack cloth across the surface to capture any final airborne particles',
    '**Environment check:** Sweep or blow out bay floor before rolling in the freshly prepped vehicle',
  ]);

  c += callout('tip', 'The IPA wipe should be done panel by panel immediately before laying that panel\'s film — not all panels at once. Dust settles on clean panels within minutes. Prep, then immediately install each panel.');

  c += h2('Prepping Specific Surface Types');
  c += table(
    ['Surface Type', 'Special Prep Consideration'],
    [
      ['Factory clear coat (new car)', 'Standard prep sequence; avoid clay on fresh paint (under 30 days) — use IPA wipe only'],
      ['Repainted panel', 'Verify paint is fully cured (minimum 30 days); some repaint shops use high-wax primers — extra IPA wipes required'],
      ['Matte factory paint', 'Use matte-safe prep products; never use clay — scratches matte; IPA only'],
      ['Textured plastic (bumpers, rockers)', 'Apply application primer to textured areas before film; standard PSA does not bond reliably to rough ABS'],
      ['Chrome trim being wrapped over', 'Chrome is a challenging substrate; scuff lightly with 1500-grit dry; apply primer; test adhesion before full coverage'],
      ['Vinyl film being wrapped over (layering)', 'Not recommended for long-term installs; if required — ensure existing film is clean, fully adhered, and IPA wiped'],
    ]
  );

  return c;
}

function chMeasuringCutting() {
  let c = '';
  c += p('Accurate measurement and efficient cutting are core skills that separate experienced installers from beginners. Over-cutting wastes material; under-cutting means re-cutting. This chapter provides measurement standards for every panel type and cutting technique guidance for all scenarios.');

  c += h2('Measurement Standards — Overage by Panel Type');
  c += table(
    ['Panel', 'Measurement Method', 'Standard Overage', 'Reason for Overage'],
    [
      ['Hood', 'Measure at widest point + longest dimension', '10 cm all sides', 'Wrap-under on front; fold-over on sides; adjustment at rear'],
      ['Roof', 'Width at widest + length front-to-rear', '12 cm all sides', 'Large panel; large correction needed if misaligned'],
      ['Door', 'Panel face width × height', '8 cm all sides', 'Jamb fold on all four edges'],
      ['Bumper (sectional)', 'Per piece — measure each section individually', '10 cm all edges of each section', 'Multiple pieces; each requires fold or termination overage'],
      ['Mirror cap', 'Circumference + height', '5 cm all sides', 'Small piece; compound curves consume more film than expected'],
      ['Pillar', 'Width × height', '15 mm glass side; 10 mm outer edge', 'Glass channel tuck; outer seam fold'],
      ['Fender', 'Width + height including arch', '10 cm; +15 cm on wheel arch side', 'Arch fold is the most film-consuming edge'],
      ['Quarter panel', 'Width × height', '15 cm all sides', 'Complex panel; errors are expensive; generous overage is cheap insurance'],
    ]
  );

  c += h2('Cutting Techniques');

  c += h3('Knifeless Tape Method — Preferred for Visible Seams');
  c += procedure('Knifeless Tape Cut', [
    'Apply the knifeless tape to the paint surface along the desired cut line before applying film',
    'Run the tape in a single continuous stroke — joins in the tape create visible seam interruptions',
    'Apply the film over the top of the tape normally',
    'Once the film is adhered, locate the tape pull tab at the end of the run',
    'Pull the tape at 45° to the surface in a continuous, controlled motion — do not pull at 90° (tears) or 0° (drags)',
    'The monofilament cuts through the adhesive and face film cleanly as it is pulled',
    'Post-heat the cut edge and squeegee firmly; apply edge sealer to the cut edge',
  ]);

  c += h3('Channel / On-Car Blade Cut Method');
  c += procedure('On-Car Blade Cut', [
    'Use only a specialized channel cutter or a film-safe blade with a rounded tip',
    'Hold the blade at 20° to the surface — shallower angles ride on the film, not dig into paint',
    'Cut with the blade moving toward you in a pulling motion — not a pushing stroke',
    'Use a single pass — multiple passes increase paint-contact risk',
    'Immediately remove the trimmed film strip; verify paint is undamaged',
    'Post-heat and squeegee the cut edge; seal with edge sealer',
  ]);

  c += callout('warning', 'Channel cutters and 20° blades still have the potential to scratch paint, especially on soft or freshly repainted surfaces. Never drag the blade along paint without the film as a protective layer between blade and surface. When in doubt, use knifeless tape.');

  return c;
}

function chKnifelessInlays() {
  let c = '';
  c += p('Knifeless tape and inlay/overlay film techniques unlock design possibilities that would otherwise require expensive digital printing. Accent stripes, two-tone panels, logos, and dimensional inlays can all be executed with basic materials when the technique is correct.');

  c += h2('Knifeless Tape Applications Beyond Seam Cutting');
  c += table(
    ['Application', 'Tape Type', 'Description'],
    [
      ['Panel body line seam', 'Straight tape', 'Standard seam cut along a body character line'],
      ['Accent stripe boundary', 'Straight tape (two parallel runs)', 'Two tape runs define the stripe width; film cut between them to reveal base film'],
      ['Curved graphic border', 'Curved/flexible tape', 'Articulated tape runs the curve; creates a clean edge for any complex shape'],
      ['Door handle surround', 'Flexible tape', 'Outlines the door handle recess for a clean inlay piece'],
      ['Seam-free door jamb termination', 'Straight tape', 'Runs at door gap edge; produces a perfectly parallel film termination'],
    ]
  );

  c += h2('Inlay and Overlay Techniques');

  c += h3('Two-Tone Panel Inlay');
  c += procedure('Two-Tone Inlay Method', [
    'Apply the base color film across the full panel; squeegee fully; do not post-heat yet',
    'Apply knifeless tape in the desired design pattern over the base film',
    'Apply the second-color accent film over the tape and base film in the accent area',
    'Squeegee the accent film firmly',
    'Pull the knifeless tape — this cuts through both film layers simultaneously',
    'Remove the trim strip of the top accent film outside the cut line',
    'Remove the trim strip of the base film inside the cut line (reveals the panel paint for full inlay) OR leave the base film for an overlay effect',
    'Post-heat all edges; squeegee firmly; seal all cut edges',
  ]);

  c += h3('Logo and Badge Inlay');
  c += p('Pre-cut logos or badges can be inlaid into wrapped panels for a clean, dimensional brand accent.');
  c += procedure('Logo Inlay', [
    'Apply the base color film to the panel; squeegee fully',
    'Apply masking tape frame around where the logo will be placed to prevent scratching the surrounding film',
    'Position the pre-cut logo film over the base; the logo is an adhesive-backed decal; squeegee from center outward',
    'Remove the masking frame; heat the logo edges at 65 °C and squeegee edges firmly',
    'Check for any bridging at logo edge — this is the most common failure point on thick logo films',
  ]);

  return c;
}

function chFlatPanels() {
  let c = '';
  c += p('Flat panel installation is the foundational skill upon which all advanced wrap techniques are built. Mastery of the squeegee technique, slip solution management, and post-heat on flat surfaces must be demonstrated before moving to compound curves and complex panels.');

  c += h2('Squeegee Technique Fundamentals');
  c += table(
    ['Variable', 'Correct Technique', 'Common Error', 'Result of Error'],
    [
      ['Angle', '45–60° from the panel surface', 'Perpendicular (90°)', 'Creates pressure marks; pushes air under film'],
      ['Direction', 'Center outward in overlapping strokes', 'Edge-to-edge single pass', 'Air trapped in center of panel'],
      ['Pressure', 'Firm and consistent — blade flexes slightly', 'Excessive pressure', 'Squeegee scratches or stretch marks on face film'],
      ['Speed', 'Slow, deliberate — 5–8 cm per second', 'Fast or erratic', 'Film shifts on slip; uneven pressure; missed adhesion'],
      ['Overlap', 'Each stroke overlaps previous by 50%', 'Single-pass coverage', 'Missed adhesion bands; bubbles between strokes'],
    ]
  );

  c += h2('Air Management Principles');
  c += p('The squeegee technique exists to direct air out of the panel — not just to press the film down. Think of it as sweeping air toward the nearest edge, then completely out. Air that is squeegeed to the edge but not squeegee past the edge creates an edge bubble.');

  c += procedure('Flat Panel Installation Sequence', [
    'Position film over panel with slip solution; verify alignment on all edges',
    'Peel liner from center back; fold liner outward on both sides',
    'Make one center stroke from top to bottom to anchor the film and prevent movement',
    'Working from the center outward: make overlapping horizontal strokes at 45°; each stroke pushes air toward the near edge',
    'When a stroke reaches the film edge, lift the squeegee and return to center — do not sweep along the edge',
    'After all horizontal strokes, make final vertical strokes from top to bottom to clear remaining air',
    'Check under a raking light for remaining bubbles; work them to the edge with targeted squeegee strokes',
    'Trim excess film with knifeless tape or a 20° blade',
    'Post-heat at 60 °C; make final squeegee pass while film is warm',
    'Seal all cut edges with edge sealer',
  ]);

  return c;
}

function chDeepRecesses() {
  let c = '';
  c += p('Deep recesses and compound curves are where the quality gap between novice and expert installers is most visible. These areas — door handle pockets, air vents, complex grill surrounds, fender vents — cannot be rushed and require a structured approach: heat, stretch, hold, cool, advance.');

  c += h2('The Heat-Stretch-Hold Cycle');
  c += p('This is the core technique for all compound curves and deep recesses. It is methodical and slow by design — attempting to rush it causes whitening, tearing, or eventual lifting.');

  c += procedure('Heat-Stretch-Hold Cycle for Deep Recesses', [
    '**Pre-heat the film section:** Apply heat at 40 °C (not full post-heat temperature) to the film directly above the recess; the film becomes soft and elastic',
    '**Pre-stretch away from the surface:** With the film still above the surface, gently stretch the warm film in the direction needed using fingertips — do not apply to the surface yet',
    '**Make contact and lock in one point:** Touch the film to the deepest point of the recess; use a felt tool to lock it in while holding the remaining film in tension',
    '**Work outward from the locked point:** Incrementally press the film into the recess by working 1–2 cm increments in all directions from the locked center',
    '**Hold each increment:** After pressing each section, hold firm pressure for 3–5 seconds before releasing — this allows the adhesive to grip and prevents springback',
    '**Cool each section before advancing:** Release pressure only after the adhesive has gripped; moving too fast allows the film to pull back out of the recess',
    '**Post-heat when complete:** After the recess is fully covered, post-heat at 65 °C and re-squeegee to finalize adhesion',
  ]);

  c += h2('Relief Cuts — When and How');
  c += p('Relief cuts allow film to conform to geometry that would otherwise cause bridging or tearing. They are not failures — they are planned interventions for geometry that exceeds the film\'s elastic limits.');

  c += table(
    ['Situation', 'Relief Cut Type', 'How to Execute'],
    [
      ['Round or oval opening (grille, fog light)', 'X-cut or starburst cut', 'Cut an X through the center of the opening; press each triangular flap into the channel; trim at the inside edge of the channel'],
      ['Square or rectangular opening', 'Corner relief cuts only', 'Cut diagonally from each inside corner outward 5 mm; fold flaps in; trim flush at channel interior'],
      ['Tight inner radius (wheel arch tightest point)', 'Small radial slits', 'Cut 4–6 short radial slits from the edge inward; each slit allows the adjacent section to fold independently'],
      ['Deep recess with compound curve', 'Multiple radial slits from the center', 'Cut from the deepest point outward in 4–8 directions; work each section independently'],
    ]
  );

  c += callout('warning', 'Every relief cut exposes an adhesive edge inside a recess or opening. These edges must be carefully trimmed flush with the surface interior and sealed with edge sealer to prevent moisture ingress and adhesive contamination.');

  return c;
}

function chPostHeat() {
  let c = '';
  c += p('Post-heat is not optional — it is a required step in every professional vinyl wrap installation. Post-heating serves multiple critical functions: it activates the pressure-sensitive adhesive to its final bond strength, eliminates micro-bubbles and fish-eyes, and releases film stretch memory so that the film does not pull back from edges over time.');

  c += h2('Why Post-Heat Is Mandatory');
  c += table(
    ['Function', 'Mechanism', 'What Happens Without It'],
    [
      ['Adhesive activation', 'Heat reduces adhesive viscosity momentarily, allowing it to flow into paint micro-texture', 'Bond strength remains at 40–60% of design specification; premature lifting'],
      ['Stretch memory release', 'Heat sets the film in its installed state, eliminating elastic return tendency', 'Film pulls back from edges within days to weeks, especially in cold weather'],
      ['Micro-bubble elimination', 'Heat allows trapped micro-air pockets to migrate through the adhesive layer to the edge', 'Small bubbles remain visible and may grow as temperature cycles cause expansion'],
      ['Edge seating', 'Heat makes film pliable for a final squeegee pass that presses all fold edges flat', 'Edge folds pop up when cold; particularly common on door jamb and wheel arch folds'],
    ]
  );

  c += h2('Post-Heat Temperature Reference');
  c += table(
    ['Application', 'Target Film Surface Temperature', 'Heat Gun Distance', 'Gun Movement Speed'],
    [
      ['General panel post-heat', '60–65 °C', '10–15 cm', '15 cm/s — continuous movement'],
      ['Edge and fold post-heat', '68–72 °C', '8–10 cm', '10 cm/s — slower on edges'],
      ['Textured film (carbon fiber, etc.)', '55–60 °C — lower to protect texture', '15–20 cm', '15–20 cm/s'],
      ['Matte film', '55–58 °C — higher heat can gloss-out matte areas', '15 cm', '20 cm/s'],
      ['Chrome / mirror film', '50–55 °C — chrome is heat sensitive; whitening occurs above 65 °C', '20 cm', '20 cm/s; check frequently'],
    ]
  );

  c += h2('Post-Heat Sequence');
  c += procedure('Panel Post-Heat Protocol', [
    'Verify squeegee work is complete on the panel before starting post-heat',
    'Set heat gun to mid-range (approximately 300–350 °C output — this produces 60–65 °C on film surface at 15 cm)',
    'Start at one corner of the panel; sweep the gun in overlapping S-patterns across the entire panel surface',
    'Check temperature every 30 seconds with infrared thermometer — do not guess',
    'While film is at temperature, make a final squeegee pass with a felt-edge squeegee to eliminate any remaining micro-texture',
    'Move to edges: increase gun intensity slightly and slow movement; post-heat all fold edges to 70 °C',
    'Immediately squeegee each edge section while hot — once the film cools, the edge is set regardless of position',
    'Apply edge sealer to all cut edges before the edge cools — sealer bonds better to a warm edge',
  ]);

  return c;
}

function chSeamManagement() {
  let c = '';
  c += p('Seam management is a design and execution discipline. All wrapped vehicles have seams — the installer\'s skill lies in placing them where they are least visible and executing them so cleanly that even a visible seam does not look like an error.');

  c += h2('Seam Placement Hierarchy');
  c += procedure('Prioritize Seam Locations in This Order', [
    '**First choice:** Factory body gap (door-to-fender, trunk-to-quarter, hood-to-fender) — seam hides completely in the gap',
    '**Second choice:** Character line (horizontal or vertical feature pressed into the body) — the line itself draws the eye; seam blends into the shadow',
    '**Third choice:** Under trim or molding — film terminates behind a trim strip; never visible',
    '**Fourth choice:** Edge of a panel where two different film colors or finishes are designed to meet — a design seam is an intentional joint',
    '**Last resort:** Open panel face — only when film width is insufficient and no design opportunity exists; minimize visibility with perfect grain matching',
  ]);

  c += h2('Executing a Butt-Join Seam');
  c += procedure('Butt-Join Seam on Panel Face', [
    'Apply the first film piece; squeegee fully; do not post-heat yet; leave a 5 mm uncut edge at the seam line',
    'Apply the second film piece, overlapping the first by 5–8 mm at the seam line',
    'Squeegee the second piece fully',
    'Apply knifeless tape under the overlap (between the two layers) along the desired seam line before applying the second piece, OR cut through both layers simultaneously with a channel cutter at the overlap',
    'Pull the knifeless tape or remove the cut strips from both layers',
    'Post-heat the seam area; squeegee firmly so both edges lie flat',
    'Inspect under a raking light: no gap, no ridge, no adhesive visible at the joint',
    'Apply edge sealer along the seam if it is in a high-stress area (curves, high-traffic zone)',
  ]);

  c += h2('Overlap vs. Butt-Join — When to Use Each');
  c += table(
    ['Joint Type', 'Description', 'Use When', 'Avoid When'],
    [
      ['Butt-join', 'Two film edges meet precisely; no overlap', 'High-visibility seam locations; color-change wraps; anywhere appearance is paramount', 'High-stress mechanical areas; edges that will see water infiltration'],
      ['Overlap', 'One film edge laps over another by 3–5 mm', 'Concealed areas (under trim, inside jambs); fleet wraps where production speed matters', 'Visible panel faces; matte and textured films (step is very visible)'],
      ['Knifeless seam through both layers', 'Both films applied with overlap; tape cuts both simultaneously', 'Any visible face seam; ensures perfect alignment of the joint', 'Cannot be used near glass or painted surfaces where the mono-filament could scratch'],
    ]
  );

  return c;
}

function chTexturedFilms() {
  let c = '';
  c += p('Textured films — including 2D and 3D carbon fiber, brushed aluminum, forged composite, and specialty surfaces — follow the same installation fundamentals as smooth films but require additional discipline at every step because their texture amplifies every mistake.');

  c += h2('Properties of Textured Films');
  c += table(
    ['Film Type', 'Pattern Type', 'Critical Installer Note'],
    [
      ['2D Carbon fiber', 'Printed woven pattern on flat film', 'Pattern must be perfectly directional — no angular twist between panels'],
      ['3D Carbon fiber', 'Embossed raised weave texture on film surface', 'Squeegee bridges the peaks — use a rubber squeegee, never hard plastic; do not over-heat (flattens texture)'],
      ['Brushed aluminum', 'Printed directional brushed line on flat film', 'Brush direction must be consistent across all panels — panels on left and right side must mirror, not both run the same direction'],
      ['Forged composite', 'Random swirl pattern — not directional', 'Random pattern means no directional matching required; most forgiving textured film'],
      ['Crocodile / leather', 'Deep embossed three-dimensional texture', 'Extremely thick film; less conformable; avoid complex curves; post-heat temperature must be carefully controlled'],
      ['Holographic / prismatic', 'Light-refractive metallic pattern', 'Pattern angle affects appearance dramatically; discuss with customer before install; extremely sensitive to fingerprints during install'],
    ]
  );

  c += h2('Pattern Matching Across Panels');
  c += p('On directional or repetitive pattern films, panels that are adjacent on the vehicle must have their patterns aligned. A carbon fiber weave that is at 45° on the hood and 90° on the roof looks like two different films.');

  c += procedure('Pattern Matching Protocol', [
    'Before cutting any panels, establish the master orientation angle for the project (typically 0° = weave running fore-to-aft)',
    'Mark the grain direction on the back of every cut piece with a chalk or tape arrow',
    'Lay adjacent panels side by side on the floor before application to verify pattern continuity',
    'On mirror panels (left and right doors), the film is mirrored: left door grain runs front-to-back; right door also runs front-to-back — not one front-to-back and one back-to-front',
    'Accept that perfect pattern matching at seams is not achievable — the goal is consistent grain angle, not pattern line-up across a seam',
  ]);

  c += h2('Squeegee Selection for Textured Films');
  c += p('Hard plastic squeegees scratch the peaks of embossed textures. The squeegee must be soft enough to ride over the peaks without damage while still providing enough pressure to activate the adhesive in the valleys.');

  c += checklist([
    'Soft rubber squeegee (Shore A 40–50) for all 3D embossed textures',
    'Felt-edge squeegee for the final post-heat pass on all textured films',
    'Never use a bare hard-card or yellow squeegee directly on 3D carbon fiber — use it only for the liner removal and initial positioning, then switch to soft rubber',
    'Clean the squeegee with a damp cloth before each pass on textured film — accumulated debris will scratch the texture peaks',
  ]);

  return c;
}

function chFleetWraps() {
  let c = '';
  c += p('Fleet wrap projects differ from personal vehicle wraps in scope, timeline, process consistency requirements, and business relationship management. A shop that can execute fleet projects efficiently and consistently has a highly scalable revenue stream. This chapter addresses the operational and technical distinctions of fleet work.');

  c += h2('Fleet Project Phases');
  c += procedure('Fleet Wrap Project Lifecycle', [
    '**Bid/Quote Phase:** Measure a sample vehicle from the fleet; calculate material quantities; develop a per-unit price; total fleet bid with volume discount if applicable; provide a sample vehicle as proof of concept',
    '**Design Approval Phase:** Work with the client\'s marketing or brand team; provide digital mock-ups for approval; obtain final, signed artwork approval before any film is cut',
    '**Material Ordering Phase:** Order all material at once from the same production batch to ensure color consistency; build in 15% excess for damages and re-dos',
    '**Production Scheduling Phase:** Schedule vehicles in blocks — 3–5 vehicles per week maximum for most shop sizes; define a daily delivery-and-return schedule with the fleet manager',
    '**Install Phase:** Standardize the install sequence and assign specific installers to specific panels for consistency; develop a per-vehicle QC checklist',
    '**QC & Approval Phase:** Fleet manager or designated approver signs off on each vehicle before it returns to service',
    '**Documentation Phase:** Photograph each completed vehicle; update the fleet installation log; retain records for warranty claims',
  ]);

  c += h2('Fleet Consistency Standards');
  c += p('The hardest part of fleet wrap work is not the first vehicle — it is the 20th. Consistency requires systems, not just skill.');

  c += checklist([
    'A written panel sequence is created for the fleet vehicle type and followed in the same order on every unit',
    'Film panels are pre-cut in batches before installation begins (cut 5 vehicles worth of material, then install)',
    'Cut pieces are labeled and organized per vehicle position before any installation begins',
    'The same installer or installer pair handles the same panels on every vehicle in the fleet',
    'A fleet-specific QC checklist is completed and signed on each unit',
    'Any deviation from the approved design requires immediate notification of the fleet manager',
    'Material lot numbers are recorded for every vehicle in the fleet log',
  ]);

  c += h2('Fleet Pricing Model');
  c += table(
    ['Cost Element', 'Calculation Method', 'Notes'],
    [
      ['Material', 'Square meters × price per square meter + 15% waste factor', 'Order from same batch; waste factor is real — budget for it'],
      ['Labor — Install', 'Hours per vehicle × shop labor rate', 'Fleet work is often faster per unit than single vehicles after the first two due to workflow optimization'],
      ['Design / artwork preparation', 'Fixed fee per design + per-format fee if multiple sizes', 'Charge for design separately — never bundle it into material cost'],
      ['Fleet management overhead', '10–15% of total project value', 'Coordination, scheduling, re-dos, fleet manager communication'],
      ['Volume discount', 'Typically 5–15% at 10+ vehicles; negotiable', 'Never discount labor to zero — installations always require skilled time'],
    ]
  );

  return c;
}

function chQualityControl() {
  let c = '';
  c += p('Quality control is the systematic verification that the installation meets the professional standard before the vehicle is returned to the customer. It is not a final glance — it is a structured inspection using the right tools and methodology.');

  c += h2('QC Inspection Stages');
  c += table(
    ['Stage', 'When', 'What Is Checked', 'Who Performs'],
    [
      ['Panel-level QC', 'Immediately after each panel is post-heated', 'Bubbles, fish-eyes, edge adhesion, squeegee marks', 'Lead installer or senior installer on that panel'],
      ['Vehicle-level QC (initial)', '24 hours after last panel is completed', 'Full vehicle inspection under detail light; all panels revisited', 'Lead installer independent of who installed'],
      ['Vehicle-level QC (pre-delivery)', '1 hour before customer pick-up', 'Cleanliness, alignment, edge condition, seam inspection', 'CSM or Service Advisor (non-technical review layer)'],
    ]
  );

  c += h2('QC Inspection Method — The 3-Light Pass');
  c += procedure('Three-Angle Inspection Method', [
    '**Overhead ambient light (LED shop light):** Walk the vehicle at 1 meter distance; look for gross defects — major bubbles, missing coverage, color mismatch, wrong film orientation',
    '**Raking detail light (handheld LED at low angle):** Hold the light at 10–15° to the panel surface; this angle reveals bubbles, fish-eyes, and squeegee marks invisible in overhead light',
    '**Transmitted light (from inside through glass, if applicable):** For tint applications; reveals bubbles, contamination, and adhesion gaps that are only visible with light behind the film',
  ]);

  c += h2('QC Defect Classification');
  c += table(
    ['Defect Class', 'Description', 'Action', 'Customer Communication'],
    [
      ['Class A — Accept', 'Within specification for the service level; not visible at 30 cm under normal light', 'No action required; document for reference', 'Not communicated unless asked directly'],
      ['Class B — Monitor', 'Minor defect visible on close inspection; expected to self-resolve with temperature cycling', 'Photograph; note in job file; re-inspect at 30-day warranty check-in', 'Disclose at delivery with explanation; show that it is within expected range'],
      ['Class C — Rework', 'Visible defect at normal viewing distance; does not meet standard; must be corrected before delivery', 'Rework immediately; do not deliver', 'If rework delays delivery, notify the customer proactively with revised ETA'],
      ['Class D — Remake', 'Defect requiring full panel removal and re-installation', 'Remove and redo the affected panel; inspect root cause', 'Notify customer of delay; explain what happened and how it was corrected'],
    ]
  );

  c += h2('Common QC Findings and Their Causes');
  c += troubleshootingSection([
    ['Bubble cluster near panel edge', 'Slip solution not fully squeegeed to edge', 'Post-heat and squeegee toward edge until bubble exits', 'Reduce slip solution; always finish squeegeeing fully to the edge'],
    ['Fish-eye contamination', 'Silicone, wax, or oil residue on paint', 'Lift affected area; clean; re-apply', 'Multiple IPA wipes; clay bar if needed'],
    ['Squeegee scratch on gloss film', 'Dry squeegee contact; debris on squeegee', 'Polish scratch with film-safe compound on the face; if deep — replace the film section', 'Use felt-edge squeegee; clean squeegee before each pass'],
    ['Edge lifting at 24 hours', 'Insufficient post-heat; no edge sealer', 'Re-heat edge to 70 °C; re-squeegee; seal', 'Post-heat protocol is non-negotiable'],
    ['Seam gap visible', 'Butt-join too tight or two films pulled apart during post-heat', 'Very small gap — apply edge sealer to both edges and blend; large gap — remake', 'Slight overlap (0.5 mm) at butt-join; do not over-stretch film toward seam during post-heat'],
    ['Pattern misalignment on adjacent panels', 'Grain direction not verified before installation', 'Assess whether the mismatch is noticeable at normal viewing distance; if yes — remake', 'Establish and mark grain direction before any cutting'],
  ]);

  return c;
}

function chTroubleshooting() {
  let c = '';
  c += p('This chapter serves as a rapid-reference field guide for diagnosing and correcting the most frequently encountered vinyl wrap installation problems. Each entry describes the symptom, the most likely cause, the corrective action, and the preventive measure.');

  c += h2('Field Troubleshooting Reference');
  c += troubleshootingSection([
    ['Film will not conform to recess; keeps popping out', 'Film temperature too cold; insufficient heat before stretching', 'Heat film section to 40 °C before contact; work the recess in smaller increments', 'Pre-heat film in cold environments; use heat lamp for large pre-softening'],
    ['Film tears when stretching into tight corner', 'Film over-heated (loses tensile strength); or wrong film type for the curve', 'Replace section with fresh film; reduce heat; consider multi-piece approach', 'Never exceed 75 °C on film face; use conformable cast film for tight compound curves'],
    ['Adhesive strings visible at cut edge', 'Blade too dull; blade angle too steep', 'Trim string flush with fresh blade; seal the edge', 'Replace blade every 60–90 seconds of cutting; maintain 20° blade angle'],
    ['Film color looks different on different panels', 'Directional color-shift film installed with inconsistent orientation; or different production batches', 'Verify all panels are installed in same grain direction; for batch mismatch — re-order', 'Order all material from same batch; mark grain direction before cutting any piece'],
    ['Knifeless tape monofilament breaks mid-pull', 'Tape pulled at wrong angle (too steep); tape crossed itself', 'Start a new pull from the break point using a blade to begin; apply sealer to junction', 'Pull at 45° only; run tape in single continuous lengths without crossing'],
    ['Film bubbles appearing after delivery (2–4 weeks)', 'Off-gassing from fresh paint under film; or adhesive not fully cured', 'Lift bubbles at nearest edge; allow gases to escape; re-apply', 'Do not wrap fresh paint under 30 days; advise customers with recent repaints'],
    ['Film turns silver-white when heated', 'Over-heating — film face compound degraded', 'Remove and replace the affected section', 'Use IR thermometer to verify temperature; never exceed 75 °C on film face'],
    ['Texture flattened in spots on 3D carbon film', 'Used hard squeegee directly on texture peaks; or over-heated', 'Cannot be reversed — section must be replaced', 'Use only soft rubber squeegee on 3D textures; reduce post-heat temperature'],
    ['Air trapped along long edge after post-heat', 'Squeegee strokes did not fully exit the panel at the edge', 'Post-heat again; use a pin/needle prick at the trapped bubble; squeegee to edge', 'Always finish each squeegee stroke completely off the edge of the film'],
    ['Film lifting from chrome surface within 30 days', 'Chrome is a low-energy surface; standard PSA has poor adhesion', 'Remove; scuff chrome lightly; apply adhesion primer; re-apply', 'Always prime chrome before wrapping; document limitation to customer'],
  ]);

  return c;
}

function chWrapPanelsContent() {
  let c = '';
  c += p('The following panel procedure cards provide a master installation reference for each major vehicle panel type. They should be used during training, as a pre-job reference for new installers, and as a QC standard during post-installation inspection.');

  for (const panel of WRAP_PANELS) {
    c += panelProcedure('Vinyl Wrap', panel);
    c += pageBreak();
  }

  return c;
}

function chAppendicesWrap() {
  let c = '';
  c += h2('Appendix A — Temperature Quick Reference Card');
  c += table(
    ['Task', 'Film Surface Target (°C)', 'Gun Setting (°C output)', 'Measurement Method'],
    [
      ['Film pre-warming (cold environment)', '35–40', '~200', 'IR thermometer 15 cm from surface'],
      ['General post-heat', '60–65', '~350', 'IR thermometer; verify before squeegeeing'],
      ['Edge post-heat (fold/tuck)', '68–72', '~400', 'IR thermometer; smaller gun tip recommended'],
      ['Matte film post-heat', '55–58', '~300', 'Lower threshold — verify frequently'],
      ['Chrome film post-heat', '50–55', '~250', 'Lowest threshold; risk of whitening above 60 °C'],
      ['Maximum safe film temperature', '75', 'N/A', 'Above this: face film degrades; stop immediately'],
    ]
  );

  c += h2('Appendix B — Blade Change Schedule');
  c += checklist([
    'New blade at the start of every vehicle',
    'Change snap segment every 60–90 seconds of active cutting',
    'Always change blade before cutting a visible seam',
    'Dispose of used segments in the sharps container — never in open trash',
    'Inspect blade tip before any on-car cut — tip chips are invisible but cause scratches',
  ]);

  c += h2('Appendix C — Film Storage Requirements');
  c += table(
    ['Parameter', 'Requirement', 'Effect of Non-Compliance'],
    [
      ['Temperature', '10–30 °C (50–86 °F)', 'Cold: adhesive crystallizes; hot: liner releases; adhesive transfer'],
      ['Humidity', '40–60% RH', 'High humidity causes liner curl and adhesive migration'],
      ['Storage orientation', 'Horizontal on reel; never stored vertically on the core end', 'Vertical storage causes core deformation and edge adhesive migration'],
      ['Light exposure', 'Away from direct UV (store in tube or box)', 'UV degrades adhesive and face film pigment even before installation'],
      ['FIFO rotation', 'First-in, first-out for all film inventory', 'Old film nearing shelf life must be used before fresh stock'],
    ]
  );

  c += h2('Appendix D — Knifeless Tape Type Selection');
  c += table(
    ['Tape Type', 'Description', 'Use For'],
    [
      ['Straight line tape', 'Rigid monofilament; cuts a perfectly straight line', 'Panel gaps, door edges, any straight seam'],
      ['Curve tape (flexible)', 'Semi-flexible tape; can follow gentle curves', 'Character lines with radius, hood leading edge curves'],
      ['Tight-curve tape', 'Fully flexible; follows radius down to 25 mm', 'Mirror cap edges, door handle surrounds, emblem outlines'],
      ['Glass tape', 'Monofilament safe for use near glass; no metal', 'Terminations near windshield seals and glass edges'],
      ['Wide-strip tape', 'Produces a wider cut line; 2–5 mm spacing', 'Two-tone panel gaps where a thicker separator is desired'],
    ]
  );

  c += h2('Appendix E — Post-Install Customer Instructions Summary Card');
  c += checklist([
    'Do not wash the vehicle for 7 days after installation',
    'Avoid high-pressure washes and automatic brush car washes',
    'Hand wash with mild soap and microfiber mitt only',
    'Never use petroleum-based wax or polish directly on the film surface',
    'Park in a garage or shaded area when possible — extended direct sun accelerates film aging',
    'If bird droppings or tree sap contact the film, remove within 24 hours with a damp microfiber — do not let them sit',
    'For matte finishes: use only matte-specific spray detailer; no wax; no gloss-enhancing products',
    'Report any lifting edge or bubble within 30 days — early intervention prevents larger issues',
  ]);

  return c;
}

function chPPFVsVinylWrap() {
  let c = '';
  c += p('Paint Protection Film and vinyl color-change wrap are distinct technologies that are frequently confused by customers — and occasionally by installers who have not been trained on both. Understanding the differences, overlaps, and combination opportunities between PPF and vinyl wrap allows the professional to recommend the right product for every customer\'s situation and to upsell combination packages that deliver maximum value.');

  c += h2('PPF vs. Vinyl Wrap — Side-by-Side Comparison');
  c += table(
    ['Attribute', 'Paint Protection Film (PPF)', 'Vinyl Wrap (Color-Change)'],
    [
      ['Primary material', 'Thermoplastic polyurethane (TPU); much thicker and more elastic', 'Polyvinyl chloride (PVC) or cast PU; thinner; designed for conformability'],
      ['Primary purpose', 'Impact protection; self-healing; preserving original paint', 'Color change; customization; partial protection as a secondary benefit'],
      ['Thickness', '6–8 mil (150–200 microns) — very thick', '2–4 mil (50–100 microns) — significantly thinner'],
      ['Self-healing', 'Yes — TPU elastomer returns to its original form with heat', 'No — standard vinyl does not self-heal'],
      ['Impact resistance', 'High — absorbs rock chips and minor impacts', 'Low — vinyl does not protect against rock chips; chips will appear through the film'],
      ['Color options', 'Clear (most common); color-PPF is available but limited palette', 'Hundreds of colors, finishes, and effects; full custom design capability'],
      ['Longevity', '7–12 years with proper care; premium products up to 15 years', '5–7 years for premium cast; 3–5 years for standard'],
      ['Removability', 'Removable without paint damage (within design life)', 'Removable without paint damage (within design life)'],
      ['Adhesive', 'More aggressive adhesive system; less forgiving of errors during application', 'Pressure-sensitive adhesive with air-release channels; more forgiving for application'],
      ['Install difficulty', 'Higher — less elastic forgiveness; more precision required', 'Moderate — film is more workable; recoverable from more errors'],
      ['Price point', 'Higher — material is more expensive; installation is more demanding', 'Lower — material is less expensive; installation is faster'],
      ['Best for', 'Vehicles where preserving original paint is the primary goal', 'Vehicles where aesthetics and customization are the primary goal'],
    ]
  );

  c += h2('Color PPF — A Hybrid Option');
  c += p('Color PPF is paint protection film with pigment added to the polyurethane — it provides the self-healing and impact protection of PPF while also changing the vehicle\'s color. It is typically more expensive than both clear PPF and standard vinyl wrap, and it is the appropriate recommendation for customers who want both protection and a color change simultaneously.');

  c += table(
    ['Comparison Factor', 'Clear PPF', 'Color PPF', 'Vinyl Color-Change Wrap'],
    [
      ['Primary benefit', 'Paint protection; invisible', 'Paint protection + color change', 'Color change; aesthetics'],
      ['Self-healing', 'Yes', 'Yes', 'No'],
      ['Color palette', 'N/A (clear)', 'Limited — solid colors and satin only', 'Extensive — hundreds of options'],
      ['Price per square meter', 'High', 'Very high — 20–40% above clear PPF', 'Moderate'],
      ['Best customer', 'Wants to protect the paint, keep original color', 'Wants both protection and a color change', 'Wants a color change; protection is secondary'],
    ]
  );

  c += h2('Combination Coverage — PPF Where It Matters, Vinyl Everywhere Else');
  c += p('A practical and popular approach for enthusiast vehicles is to apply PPF to the high-impact zones (front bumper, hood, front fenders, mirrors, door edges) and a vinyl color-change wrap to the remaining body panels. This maximizes protection where it is most needed while keeping the project cost below a full-vehicle PPF.');

  c += procedure('PPF + Vinyl Combination Install Sequence', [
    'Install PPF first on all designated PPF panels — ensure edges are completely sealed before any vinyl is applied',
    'Allow PPF adhesive to cure for minimum 72 hours before applying any vinyl film that touches the PPF edge',
    'Apply vinyl to all non-PPF panels using standard installation technique',
    'At the transition between PPF and vinyl: the vinyl film terminates at the PPF edge; the PPF edge is covered by the vinyl termination',
    'Confirm that no vinyl is applied over the PPF face — vinyl over PPF prevents the PPF from self-healing under the vinyl and creates a multi-layer adhesion system that may fail prematurely',
    'QC inspection must verify that the PPF-to-vinyl transition is flush — no proud vinyl edge catching the wind',
  ]);

  c += h2('When to Recommend Each Product');
  c += callout('tip', '**Recommend PPF when:** The customer wants to keep the original color; the vehicle is high-value; the primary driving concern is rock chips and physical damage; the vehicle will be used in high-debris environments (highway commuting, track use).\n\n**Recommend Vinyl Wrap when:** The customer wants a color change, pattern, or custom design; the vehicle is a lease (wrap is fully reversible); the customer has a budget that does not accommodate full-vehicle PPF; the protection goal is UV and cosmetic, not impact.\n\n**Recommend both when:** The customer wants a color change AND protection on the high-impact zones; the budget supports it; the vehicle is being retained long-term.');

  return c;
}

function chFilmBrandKnowledge() {
  let c = '';
  c += p('Product knowledge is part of professional expertise. Understanding the categories of film products in the market — without bias toward any brand — allows the installer to make recommendations that genuinely serve the customer. This chapter covers the technical categories and key product attributes that distinguish premium products from economy options across the vinyl wrap market.');

  c += h2('Premium Cast Film Characteristics');
  c += p('Premium cast films share a set of quality indicators that distinguish them from economy alternatives. Evaluating any film against these criteria allows the professional to make an informed quality assessment independent of brand marketing claims.');

  c += table(
    ['Characteristic', 'Premium Grade', 'Economy Grade', 'How to Verify'],
    [
      ['Molecular memory', 'None — cast process eliminates memory; film holds shape after installation', 'High — calendered film returns to flat state; edges lift on curves', 'Apply to a curved surface; check for lifting at 7 days at room temperature'],
      ['Thickness consistency', 'Uniform ± 2 microns across the roll', 'Variable — up to ±10 microns variation', 'Measure with a micrometer at 5 points across a 30 cm section of liner-included film'],
      ['Top coat clarity', 'Crystal clear; no yellow tint; UV-stable', 'May have slight yellow cast; UV stability degraded in 3–5 years', 'Inspect against white background in natural light'],
      ['Adhesive release rate', 'Adhesive releases from liner smoothly and evenly', 'Adhesive may string or pull unevenly from liner', 'Peel 30 cm of liner; inspect adhesive surface for consistency'],
      ['Temperature conformability', 'Conforms at 40–45 °C; remains stable up to 70 °C post-heat', 'May require higher temperature to conform; more likely to tear or mottle at high heat', 'Test on a test curve at standardized temperature'],
      ['Color consistency', 'Consistent color from roll center to roll edge; batch-to-batch consistency', 'Noticeable color shift from edge to center; batch variations', 'View under natural light from multiple angles across the full roll width'],
    ]
  );

  c += h2('Film Liner Characteristics');
  c += p('The release liner is often dismissed as packaging, but its quality directly affects installation quality. A poor liner tears, allows adhesive transfer, and makes panel positioning difficult.');

  c += checklist([
    'Thickness: 75–90 micron liners are standard; thinner liners tear on large panels; thicker liners add weight and reduce peel-off ease',
    'Release value: the force required to peel the liner should be consistent and low — inconsistent release suggests manufacturing variability in the silicone coating',
    'Transparency: some premium liners are semi-transparent, allowing easier pattern positioning; opaque liners require external alignment marks',
    'Moisture sensitivity: low-quality liners curl and deform in humid environments; premium liners are dimensionally stable within the storage range',
    'Scoring (where applicable): liner that is pre-scored for easier removal on complex shapes adds installation efficiency; verify the score line does not go through the adhesive layer',
  ]);

  c += h2('Film Storage Specifications — Technical Reference');
  c += table(
    ['Parameter', 'Requirement', 'Consequence of Non-Compliance'],
    [
      ['Storage temperature', '10–30 °C; ideal 18–22 °C', 'Below 10 °C: adhesive crystallizes; becomes brittle; may crack during liner removal. Above 35 °C: liner can curl; adhesive may migrate or gel'],
      ['Relative humidity', '40–60% RH', 'Above 70% RH: liner curls; adhesive migration possible. Below 25% RH: static electricity builds up; attracts dust to the adhesive surface'],
      ['UV exposure', 'Store in original packaging or in light-blocking tube', 'Direct UV degrades pigment and adhesive even before installation — particularly damaging on fluorescent films'],
      ['Storage orientation', 'Horizontal on the core; if vertical — must be core-end down; never flat on the face', 'Incorrect orientation causes core deformation; edge adhesive migration'],
      ['FIFO discipline', 'First-in, first-out; date-stamp all rolls upon receipt', 'Using old stock after new stock is used can result in using films approaching end of shelf life without knowing it'],
      ['Shelf life', '24 months from manufacture date (standard cast); verify on product certificate of conformity', 'Film installed past shelf life may have adhesive that does not cure correctly and lifts within months'],
    ]
  );

  return c;
}

function chAdvancedInstallerReference() {
  let c = '';
  c += p('This chapter consolidates the advanced technique references that experienced installers use to diagnose problems, adapt to unusual situations, and consistently achieve results beyond the industry baseline. It serves as both a training reference for developing installers and a field guide for experienced professionals encountering challenging scenarios.');

  c += h2('Temperature Management — Full Reference');
  c += p('Temperature management is the single most impactful variable within the installer\'s control on any given job day. This section provides a complete reference for temperature effects across all major installation parameters.');

  c += table(
    ['Parameter', '< 10 °C (Cold)', '10–18 °C (Cool)', '18–27 °C (Optimal)', '27–35 °C (Warm)', '> 35 °C (Hot)'],
    [
      ['Film flexibility', 'Stiff; brittle; high tear risk', 'Slightly stiff; manageable with pre-warm', 'Excellent conformability', 'Very soft; easy to over-stretch', 'Over-soft; wrinkles during application'],
      ['Adhesive tack', 'Very low — film slides on slip solution; difficult to lock in', 'Low to moderate', 'Optimal — good working time', 'High — locks in faster than expected', 'Immediate — almost no adjustment window'],
      ['Slip solution drying time', 'Very slow — can take hours to migrate to edge', 'Slow', 'Moderate — per normal protocol', 'Fast — must squeegee promptly', 'Very fast — almost no working time'],
      ['Post-heat temperature required', 'Higher — more heat needed to activate adhesive', 'Slightly higher', 'Standard (65–70 °C film surface)', 'Standard or lower', 'Lower — panel is already warm; risk of over-heating'],
      ['Edge adhesion after post-heat', 'Poor unless thorough post-heat applied', 'Adequate with full post-heat', 'Excellent', 'Excellent', 'May exceed optimal — monitor closely'],
      ['Recommended action', 'Pre-warm film with heat lamp; increase post-heat duration; work in a heated bay', 'Bring film to room temperature before starting; pre-warm complex areas', 'Standard protocol', 'Reduce working section size; monitor slip dry time', 'Avoid installation; if unavoidable — work in shade; mist panel with cool water between sections'],
    ]
  );

  c += h2('Squeegee Pressure Calibration');
  c += p('Squeegee pressure is one of the least-discussed but most impactful variables in installation quality. Incorrect pressure is the leading cause of squeegee scratches on premium films and missed adhesion on large flat panels.');

  c += table(
    ['Film Type', 'Correct Pressure Feel', 'Symptoms of Too Much Pressure', 'Symptoms of Too Little Pressure'],
    [
      ['Standard cast gloss', 'Squeegee blade deflects visibly but does not flex to 90°; firm and consistent', 'Squeegee marks on film surface; orange-peel distortion on thin film', 'Air not fully expelled; bubbles at panel center that will not migrate to edge'],
      ['Matte finish film', 'Lighter than gloss — the matte surface scratches at lower pressure', 'Shiny streaks on matte surface from over-pressure — irreversible', 'Bubbles under film; poor adhesion on flat areas'],
      ['3D textured (carbon fiber)', 'Very light — texture peaks must not be compressed', 'Texture peaks flattened permanently; uneven sheen', 'Poor adhesion in valleys between texture peaks'],
      ['Chrome / mirror finish', 'Lightest possible — felt-edge squeegee only; no hard tools', 'Scratch marks from felt particles; uneven reflectivity', 'Poor adhesion on large flat sections'],
      ['Heavy cast (PPF-grade cast)', 'Firmer than standard — film is thicker and requires more pressure to seat', 'Visible pressure marks that dissipate with heat and time', 'Persistent bubbles under thick film; edge lifting'],
    ]
  );

  c += h2('Overlap vs. Gap — Decision Reference');
  c += p('The decision to leave a small overlap or a small gap at a seam has long-term quality implications. This reference defines when each is appropriate and how to achieve the correct joint type consistently.');

  c += table(
    ['Joint Type', 'Appearance', 'Use Case', 'Execution Method', 'Common Error'],
    [
      ['Zero-gap butt join (preferred)', 'Two film edges meet exactly; no gap; no overlap; flush surface', 'All high-visibility seams on flat and low-curvature surfaces', 'Knifeless tape through both layers simultaneously; or precisely aligned first piece with knifeless tape on its edge before second piece is applied', 'Pulling the tape at too steep an angle causes a gap; pulling too slowly on a hot surface causes adhesive stringing into the cut'],
      ['Minimal overlap (1–2 mm)', 'A very slight ridge at the seam; visible under raking light', 'Low-visibility areas where structural seam strength is prioritized over appearance (interior door jams; wheel arch inner faces)', 'First piece applied; second piece overlaps by measured 2 mm; squeegee firmly to ensure the overlap is flat', 'Overlap in a visible area where the ridge is noticeable; overlap on thick film which creates a very obvious step'],
      ['Alignment seam (design edge)', 'Two different colored or textured films meeting at a defined design boundary', 'Two-tone designs; accent wraps; deliberate style elements', 'Same as butt join; knifeless tape defines the boundary line precisely; must be planned in advance', 'Seam not at the intended design line; asymmetrical seam placement on a two-sided vehicle (door to door)'],
    ]
  );

  c += h2('Film Defect Recognition — Field Identification Guide');
  c += table(
    ['Observed Defect', 'Physical Appearance', 'Root Cause', 'Timing of Discovery', 'Corrective Action'],
    [
      ['Fish-eye (adhesion void)', 'Circular dimple with raised ring; looks like a crater in the film surface', 'Silicone or oil contamination on paint surface at the moment of adhesion', 'Immediately visible during installation; may worsen at 24 hours', 'Lift the section at the nearest edge; clean the paint thoroughly; re-apply'],
      ['Orange peel (installer-induced)', 'Bumpy texture in the film that was not present in the original film flat', 'Film stretched unevenly; excessive heat applied in one direction; over-stretched film cooling in a stressed state', 'Usually visible immediately after post-heat; sometimes more visible at 24–48 hours as adhesive cures', 'Mild: may self-reduce over 48 hours with heat cycling. Severe: lift and re-apply with correct heat and stretch technique'],
      ['Bridging at a recess', 'Film spans across a depression without adhering to its sides; visible gap between film and the recess wall', 'Insufficient heat during application; insufficient stretch into the recess; incorrect technique', 'Usually visible during application but sometimes only confirmed during QC inspection', 'Re-heat the bridged area to 40 °C; work the film into the recess using heat-stretch-hold; may require relief cuts'],
      ['Edge lifting (acute)', 'Film edge rising away from the surface within 7 days of installation', 'Insufficient post-heat; no edge sealer; inadequate IPA prep in the edge area', 'Discovered at 7-day check or at warranty claim', 'Re-heat edge to 70 °C; squeegee firmly; apply edge sealer immediately after'],
      ['Whitening / hazing', 'White or foggy area in the film; loss of clarity', 'Film over-heated (face degraded above 75 °C); or film torn at the molecular level by excessive stretch', 'Immediately visible after the event; cannot be resolved with further heat or time', 'The affected section must be removed and replaced'],
      ['Moisture bubble (teardrop shaped)', 'Elongated bubble with a specific tear-drop or oval shape; often appears in first 24–48 hours then disappears', 'Moisture trapped from slip solution; not contamination; normal in air-release channel films', '24–48 hours after installation', 'Usually self-resolves as moisture migrates through film edges; if not resolved by 7 days — pin the bubble with a needle at the narrow end; press flat; apply heat'],
    ]
  );

  c += h2('Speed and Efficiency Reference — Full Vehicle Time Standards');
  c += p('The following standards reflect professional installer performance on typical vehicles. Times include panel prep, application, and post-heat but do not include vehicle decontamination wash or final QC inspection.');

  c += table(
    ['Vehicle Type', 'Full Vehicle Wrap Time (Experienced Installer)', 'Full Vehicle Wrap Time (Intermediate)', 'Panel-by-Panel Breakdown'],
    [
      ['Compact sedan', '12–18 hours', '18–24 hours', 'Roof 1h; Hood 1.5h; Trunk 1h; 4 doors 1h each; bumpers 2h each; fenders 0.75h each; mirrors 0.5h each'],
      ['Mid-size sedan / coupe', '14–20 hours', '20–28 hours', 'Add 1–2 hours for larger door panels and longer hood'],
      ['Full-size sedan / executive', '18–24 hours', '24–32 hours', 'Add 2–4 hours for larger surface area and additional trim complexity'],
      ['Compact SUV / crossover', '14–20 hours', '20–28 hours', 'Roof and rear cargo door add complexity vs. sedan'],
      ['Mid-size SUV', '18–26 hours', '26–36 hours', 'Third door or tailgate; larger roof; more complex rear'],
      ['Full-size SUV / truck', '22–32 hours', '32–44 hours', 'Bed or third-row door; very wide panels; roof access challenges'],
      ['Sports car / supercar', '24–40 hours', 'Not recommended solo', 'Complex geometry multiplies time dramatically; budget generously'],
      ['Van (full-size)', '20–30 hours', '30–40 hours', 'Large flat panels are fast; but the number of panels is high'],
    ]
  );

  return c;
}

function chBumpersMirrorsDoorHandles() {
  let c = '';
  c += p('Bumpers, mirrors, and door handles are among the most technically challenging surfaces in automotive wrap installation. They are also three of the most visually prominent areas where quality differences between installers are immediately visible. This chapter provides comprehensive installation guidance that supplements the panel procedure library with technique-level detail.');

  c += h2('Bumper Installation — Technique Deep Dive');
  c += p('The front bumper integrates multiple geometry types in a single panel: compound curves at the corners, flat or gently curved face sections, recesses for sensors and fog lights, openings for grilles and air intakes, and the transition to the hood at the top. No single installation approach handles all of these simultaneously — the professional treats the bumper as a multi-piece installation by design.');

  c += h3('Bumper Piece Planning');
  c += table(
    ['Bumper Section', 'Typical Treatment', 'Seam Strategy'],
    [
      ['Upper bumper face (below hood)', 'Primary piece; covers the main visual area', 'Top edge uses knifeless tape at the bumper-to-hood gap; integrates with the hood piece seam'],
      ['Corner sections (each side)', 'Separate piece per corner; most compound geometry', 'Seam at the vertical character line where the corner transitions to the bumper face'],
      ['Lower grille opening surround', 'Film wraps into the grille channel; opening is cut open', 'Channel wrap technique; knifeless tape not needed — blade cut at inside edge of channel'],
      ['Fog light recess (each)', 'Relief-cut film that folds into the recess; bezel reinstalled over film edge', 'No seam visible — film terminates behind the reinstalled bezel'],
      ['Lower valance (textured section)', 'Separate piece if texture type changes', 'Seam at the texture transition or at a body line; match film finish to other panels'],
      ['Sensor locations (radar, parking)', 'Film bridges or terminates at sensor edge; never over radar face', 'Clear film or no film over active sensor faces; decorative film stops at sensor housing perimeter'],
    ]
  );

  c += h3('Corner Section Installation');
  c += procedure('Bumper Corner Section', [
    'Cut a corner section piece with 15 cm overage on all edges — corners consume more film than expected',
    'Pre-heat the piece to 40 °C using a heat lamp positioned 30 cm above the film on a flat surface; this pre-softens the film for the compound curve without adhesive contact',
    'Position the pre-heated piece at the corner; center it on the compound curve without allowing adhesive contact yet',
    'Make contact at the highest crown point of the corner; squeegee outward in all directions from this contact point',
    'As the film approaches the extreme inside curve radius, use the heat-stretch-hold cycle in 1–2 cm increments',
    'At the inside edge where the bumper meets the fender: tuck the film with a thin flexible tuck tool; this edge is visible at the panel gap',
    'At the lower edge of the corner: fold film under the bumper valance by minimum 20 mm',
    'Post-heat at 65 °C; re-squeegee all sections; post-heat the underside fold at 70 °C; edge seal all cut edges',
  ]);

  c += h2('Mirror Cap Installation — Technique Deep Dive');
  c += p('Mirror caps are small but unforgiving. The compound curves, combined with the need to wrap to the mounting surface interior, create a disproportionate challenge relative to the mirror\'s size. The most common failure is a wrinkle at the leading edge curve — the most convex point of the mirror face.');

  c += h3('Mirror Geometry Analysis');
  c += p('Before cutting film for a mirror cap, study the geometry from three angles: front-face curve, side profile curve, and bottom curve. Most mirrors have:');
  c += checklist([
    'A gently convex face (easiest area)',
    'A sharply curved leading edge (the forward-facing pointed end) — this is the highest-difficulty point',
    'A less dramatic trailing edge (the rear of the mirror, where it meets the door)',
    'A flat or gently curved top surface — easier than the leading edge',
    'A bottom curve that may have a drainage channel or mounting feature',
  ]);

  c += h3('Mirror Wrapping Strategy by Geometry Difficulty');
  c += table(
    ['Mirror Type', 'Difficulty', 'Piece Count', 'Primary Challenge'],
    [
      ['Rectangular compact (most hatchbacks)', 'Low-Intermediate', '1–2 pieces', 'Tight leading edge radius'],
      ['Large SUV / truck side mirror', 'Intermediate', '2–3 pieces (face + bottom + cap)', 'Large surface area + lower housing curve'],
      ['Aerodynamic swept mirror (sports cars)', 'Advanced', '2–3 pieces', 'Extreme compound curves; thin pointed leading edge'],
      ['Camera-integrated mirror (360° systems)', 'Advanced', '2–3 pieces', 'Camera lens must not be touched or contaminated; film terminates at lens bezel'],
    ]
  );

  c += h2('Door Handle Installation — Technique Deep Dive');
  c += p('Door handles are high-visibility, high-touch points. Customers interact with the door handle many times per day; lifting or wrinkling at the handle area is one of the first quality failures they notice. The remove-and-reinstall method produces dramatically superior results and should be the standard approach whenever the handle design permits.');

  c += h3('Handle Types and Recommended Approach');
  c += table(
    ['Handle Type', 'Description', 'Recommended Installation Method'],
    [
      ['Surface-mounted pull handle', 'Handle sits proud of the door; clip-on removal', 'Remove and reinstall; film the door and the handle separately; reinstall handle over film'],
      ['Recessed pocket handle', 'Handle recedes into a pocket in the door', 'Preferred: remove; if not removable — relief cut at all four pocket corners; fold film into the pocket with a thin tuck tool'],
      ['Flush push-button handle', 'No visible external handle; push to release', 'Film passes over the door; button aperture is opened cleanly with a starburst cut; film folds into the aperture edges'],
      ['Integrated LED handle', 'LED strip or ambient light in or around the handle', 'Never cover the LED strip directly; film terminates at the handle bezel edge; remove handle for the cleanest result'],
      ['Door handle bowl (concave depression)', 'The bowl-shaped area behind a fixed exterior handle', 'Pre-heat and use heat-stretch-hold cycle to conform film into the bowl; or apply a dedicated inset piece to the bowl only'],
    ]
  );

  c += procedure('Remove-and-Reinstall Handle Method', [
    'Identify the handle mounting points — most handles are secured by two or three clips accessible from inside the door after the door panel is removed',
    'Remove the door interior panel (if required for handle removal) — protect the door card with a panel removal tool; do not use a flat screwdriver',
    'Release the handle clips and disconnect any wiring (door latch cable, LED connector)',
    'Wrap the door panel without the handle present — the cleanest, flattest result is now possible at the handle mounting area',
    'Apply film over the handle bolt mounting holes if they are visible — they will be covered by the handle on reinstallation',
    'Reinstall the handle over the wrapped door — the film is now trapped cleanly under the handle base; the only visible film edge is where the handle face meets the door',
    'If the handle itself is being wrapped: wrap it off the vehicle using the same technique as a mirror cap; reinstall the wrapped handle over the wrapped door',
  ]);

  return c;
}

function chVehicleSpecificChallenges() {
  let c = '';
  c += p('Different vehicle types present predictably different installation challenges. An installer who prepares for the geometry of a sports car differs fundamentally from one working on a full-size pickup truck. This chapter provides vehicle-type-specific guidance for the most commonly wrapped categories.');

  c += h2('Sports Cars & Supercars');
  c += p('Sports and exotic vehicles combine low rooflines, dramatic compound curves, wide low bumpers, diffuser elements, and frequently — carbon fiber panels, which are non-magnetic and have textured surfaces that require different prep.');

  c += checklist([
    'Paint depth gauge on carbon fiber panels requires an eddy-current model — magnetic induction does not read correctly',
    'Carbon fiber texture on exposed panels is a contamination trap — blow out all carbon weave channels with compressed air before IPA wipe',
    'Low-profile hood clearance: use a felt-edge squeegee for all sections where knuckle clearance is tight',
    'Wide rear bumpers on sports cars typically require 3–4 pieces — plan the piece map before starting',
    'Diffusers: film must terminate cleanly at the leading edge of the diffuser or at the first vane — film does not wrap around sharp diffuser vanes',
    'Side skirts: extremely low ground clearance makes the bottom fold difficult; use a long flexible tuck tool',
    'Fender vents and louvers: each blade is a separate insert — never stretch one piece over an entire vent grille',
    'Wing/spoiler: remove from the vehicle when possible; the underside of a wing is highly visible and must be wrapped cleanly',
  ]);

  c += h2('Full-Size Trucks & SUVs');
  c += p('Large body panels, off-road-spec hardware, and working vehicle surfaces create a distinct set of challenges on trucks and SUVs.');

  c += checklist([
    'Bed rails on pickup trucks: film must wrap into the bed rail channel using a flexible tuck tool; the bed rail end caps are separate piece',
    'Running boards and side steps: use a textured-finish overlay film if the customer uses the steps regularly — standard gloss film wears quickly on step surfaces',
    'Bed liner areas: film should not extend into the textured bed liner area; terminate at the body-to-liner interface',
    'Door handle area on trucks: truck door handles are often large and require a more substantial relief cut pattern than passenger car handles',
    'Long door panels: full-size truck doors are the widest single-piece door panels in the market; work with a second person to position and squeegee the large film sheet',
    'Roof height: always use a step stool or platform — never reach across the roof of a full-size truck; insufficient leverage produces poor adhesion and risks wrist injury',
    'Wheel arch fender flares: if removable — remove and wrap separately for the cleanest result; if not — wrap to the flare edge using knifeless tape',
  ]);

  c += h2('Minivans & Family Vehicles');
  c += p('Minivans are disproportionately popular for vinyl wrap in fleet and commercial applications (delivery, transport) and are occasionally color-changed by private owners.');

  c += checklist([
    'Sliding door tracks: film must terminate at the sliding door track edge; never let film enter the track channel — it will be destroyed on the first door cycle',
    'Roof height and rake: most minivans have a relatively flat roof at an accessible height; one of the more straightforward roof applications',
    'C-pillar wrap: minivans often have a prominent C-pillar between the sliding door and the rear window — this is a popular accent wrap target',
    'Rear tailgate glass: larger than most hatchback rear windows; glass coating or tint application requires care on the wide span',
    'Lower body cladding: many minivans have plastic cladding panels along the lower body; these require adhesion primer before wrap application',
  ]);

  c += h2('Sedans — B and C Segment');
  c += p('Standard sedans represent the largest volume of individual consumer wrap projects. The geometry is familiar and manageable, but the C-pillar, trunk lid, and roofline transitions are characteristic challenge points.');

  c += checklist([
    'C-pillar to trunk transition: many sedans have a flowing roofline that curves into the C-pillar and connects to the trunk — this compound curve area is handled as a multi-piece region with the seam placed inside the decklid edge channel',
    'Trunk lip: on fastback-style sedans, the trunk lip is a very short fold distance; post-heat is critical to ensure adhesion on this narrow fold',
    'Mirror caps: sedan mirrors are typically smaller than SUV and truck mirrors — work with minimal slip solution for better positional control',
    'Sedan door handles: recess-style handles are common; the remove-and-reinstall method is highly practical on most sedan handle designs',
  ]);

  c += h2('Motorcycles');
  c += p('Motorcycle vinyl wrap is a specialized skill distinct from automotive wrap. The tank, fairing panels, and fender geometry are all significantly more curved than any automotive panel, requiring very conformable cast film and mastery of the heat-stretch-hold cycle.');

  c += checklist([
    'Film selection: use only the most conformable cast films rated for complex compound curves; standard automotive wrap films may not conform to tank curves',
    'Tank: the most difficult piece; typically requires three pieces — left face, right face, top cap — with seams placed at the tank ribs or centerline',
    'Fairing panels: typically removed from the motorcycle for wrap installation; on-bike application is possible but significantly more difficult',
    'Fenders: motorcycle fenders are highly compound-curved; expect to use the full heat-stretch-hold sequence with 1–2 cm increments',
    'Unpainted surfaces: some motorcycle frames and components are powdercoated; film adhesion to powdercoat is generally good but requires thorough decontamination',
    'Pricing: motorcycle wrap pricing is not proportional to vehicle size — the complexity and time-per-square-meter is significantly higher than automotive; price accordingly',
  ]);

  return c;
}

function chWrapMaintenanceRemoval() {
  let c = '';
  c += p('Vinyl wrap maintenance and eventual removal are both part of the complete service lifecycle. Educating customers on proper maintenance extends the film\'s service life and reduces warranty claims. Professional removal at end of life prevents paint damage and prepares the vehicle for the next service.');

  c += h2('Wrap Maintenance — Customer Education Protocol');
  c += p('Customers who wash and care for their wrapped vehicle correctly will get 5–7 years of service from a quality cast film. Customers who abuse the film may see failures within 18–24 months.');

  c += table(
    ['Timeframe', 'Maintenance Task', 'Product / Method'],
    [
      ['Within 7 days of install', 'No washing of any kind', 'Allow adhesive to fully cure before any water contact'],
      ['7–30 days post-install', 'Hand wash only; no automated wash', 'Mild pH-neutral soap; microfiber wash mitt; two-bucket method'],
      ['After 30 days ongoing', 'Hand wash preferred; touchless automated wash acceptable', 'pH-neutral soap; avoid heated wax rinse cycles; avoid brush contact'],
      ['Monthly', 'Inspect edges and seams for early lifting; address before full delamination', 'Customer self-inspection; early lift reported to shop'],
      ['Every 3–6 months', 'Film-safe protectant or vinyl detailer application', 'Vinyl-specific spray detailer; not wax; not silicone-heavy products'],
      ['Annually', 'Professional wrap inspection; edge seal check; UV assessment', 'Shop service; re-seal any lifting edges; identify aging zones'],
    ]
  );

  c += h2('Products Safe for Wrapped Vehicles');
  c += checklist([
    'pH-neutral car shampoo (6.5–7.5 pH)',
    'Vinyl-specific spray detailer or quick detailer rated for wrapped surfaces',
    'Isopropyl alcohol (for spot cleaning of adhesive residue, bird droppings, or tar on the film)',
    'Bug remover rated for vinyl film — test in inconspicuous area first',
    'Waterless wash product rated for vinyl',
  ]);

  c += h2('Products That Damage Vinyl Wrap — Do Not Use');
  c += callout('warning', '**These products will degrade, stain, or lift vinyl wrap:**\n\n• Any product containing petroleum distillates (can dissolve adhesive)\n• Engine degreasers or citrus-based heavy degreasers on wrap surfaces\n• Paste wax or polymer sealant applied over matte or color-shift films (ruins finish)\n• Any abrasive polish or compound applied directly to the film face\n• Ammonia-based products (degrades plasticizers in film over time)\n• Automatic brush car washes (abrasion damages film face; brushes catch on seam edges)\n• High-pressure steam on wrapped surfaces (can lift edges and cause delamination)');

  c += h2('Film Longevity by Service Environment');
  c += table(
    ['Environmental Condition', 'Expected Service Life (Premium Cast Film)', 'Primary Degradation Factor'],
    [
      ['Garage-stored; hand wash only; temperate climate', '7–10 years', 'UV exposure (minimal); edge wear over time'],
      ['Outdoor-parked; regular hand wash; temperate climate', '5–7 years', 'UV; atmospheric fallout; edge contact'],
      ['Outdoor-parked; automated wash; high UV region', '3–5 years', 'Accelerated UV degradation; brush abrasion on edges'],
      ['Fleet vehicle; daily driving; commercial use', '2–4 years', 'High-cycle door opening wear; cleaning chemical exposure; mileage-related vibration'],
      ['Track / motorsport vehicle', '1–3 seasons', 'Heat exposure; abrasion from tire debris; frequent washing'],
    ]
  );

  c += h2('Vinyl Wrap Removal');
  c += p('Removing vinyl wrap at end of life — or to re-wrap in a new design — requires the same care as installation. Improper removal causes adhesive residue bonding to paint, clear coat stretching, and in severe cases, paint lifting.');

  c += procedure('Professional Wrap Removal Protocol', [
    'Heat the film to 40–50 °C using a heat gun or infrared lamp — warm film removes in one piece; cold film tears into small fragments that take significantly longer',
    'Lift the film at a corner or edge; peel at 15–20° angle — not straight up at 90°; a shallow angle reduces adhesive residue transfer',
    'Work slowly and in long strips when possible — patience during removal prevents paint damage',
    'Where adhesive residue remains after film removal, apply adhesive remover to a microfiber cloth; wipe in straight passes; do not scrub',
    'IPA wipe all panels after adhesive removal — confirms the paint surface is clean and reveals any adhesive missed by the remover',
    'Inspect for paint transfer, clear coat stretch, or any area where the film removed paint — document and photograph any pre-existing or removal-related damage',
    'Discuss any new condition with the customer before proceeding to re-wrap or return the vehicle',
  ]);

  c += callout('tip', 'Films that have exceeded their service life (5+ years on outdoor-stored vehicles) are significantly more difficult to remove. The adhesive has fully cured and may begin to split from the film face, leaving adhesive behind on the paint. Quote removal of aged film at a premium — it takes 2–3x the time of removing a film within its service life.');

  return c;
}

function chWorkshopSetup() {
  let c = '';
  c += p('The physical installation environment is a direct determinant of installation quality. Dust, poor lighting, temperature variation, and cluttered workflow create problems that cannot be overcome by installer skill. This chapter defines the standards for a professional vinyl wrap installation environment.');

  c += h2('Bay Design Principles');
  c += table(
    ['Element', 'Standard', 'Reason'],
    [
      ['Floor', 'Sealed epoxy or smooth concrete; no porous surfaces', 'Porous floors release dust with every footstep; epoxy is wipeable and dust-minimizing'],
      ['Walls', 'Light-colored paint (white or light gray); sealed', 'Reflects light evenly; dark walls create installation shadows; seal prevents concrete dust'],
      ['Ceiling height', 'Minimum 3.5 m (12 ft); 4+ m preferred', 'Allows full-size van and SUV installation without contact with ceiling utilities'],
      ['Lighting', 'LED overhead at 500+ lux + additional raking lights on a boom arm', 'Overhead light alone hides defects; supplemental raking light reveals bubbles and missed adhesion'],
      ['Temperature control', 'Dedicated HVAC maintaining 18–27 °C; thermostatic control', 'Temperature fluctuation causes film to behave inconsistently during installation and cure'],
      ['Positive pressure ventilation', 'HEPA-filtered positive pressure supply; filtered exhaust', 'Positive pressure prevents dust infiltration from outside; HEPA captures ambient particles'],
      ['Vehicle access', 'Bay wide enough for 60 cm clear space on all sides of the vehicle', 'Installer must access all panel edges without contortion'],
      ['Tool organization', 'Wall-mounted tool rack or rolling cart; every tool has a designated location', 'Tools not in use must not be on the vehicle or where they can fall onto a panel'],
    ]
  );

  c += h2('Dust Control Protocol');
  c += p('Dust is the single most costly environmental variable in vinyl wrap installation. A single dust particle under the film during application produces a permanent visible blemish. Systematic dust control is not optional — it is a quality standard.');

  c += procedure('Bay Dust Control Protocol', [
    'Wet-mop the bay floor minimum one hour before installation begins — this settles airborne dust without generating new particles',
    'Blow out all body gaps, seams, and vents on the vehicle with compressed air outside the bay; then drive into the clean bay',
    'Do not sweep the bay during installation — any broom or dry-dust mop creates a dust cloud that settles on the work surface',
    'Close all bay access doors during installation; manage foot traffic — every entry and exit introduces outdoor air and particles',
    'Use a tack cloth on each panel immediately before film contact — the tack cloth captures any particle that settled since the IPA wipe',
    'Work clothes: do not wear clothing that sheds fibers (fleece, wool); wear a clean shop shirt or smock',
    'Hair: long hair must be tied back and secured inside a hat or hood — human hair is a significant source of contamination in an installation environment',
  ]);

  c += h2('Material Staging & Workflow');
  c += p('A professional installation has a workflow layout — not just a bay with a car in it. Tools, film, and consumables are staged for efficient access without creating hazards.');

  c += checklist([
    'Film roll storage: a wall-mounted roll holder at the correct height allows film to be unrolled and cut cleanly without touching the floor',
    'Cutting table: a dedicated table with a smooth, non-shedding surface (HDPE or smooth laminate) for liner removal and panel sizing',
    'Squeegee tray: a magnetic or clipped tray on the vehicle ensures squeegees and blades are always within reach without resting on the panel',
    'Spray bottle holster: a belt holster for the slip solution bottle keeps it accessible and prevents it being set down on a panel',
    'Blade disposal: a sharps container within arm\'s reach of the work area — no exceptions; no loose snap-off segments on the floor',
    'Heat gun holder: a heat gun must never rest on a painted surface; use a heat gun stand or hook-mounted holder',
    'Lighting rig: a boom-arm or tripod-mounted raking LED is positioned to provide inspection light from the correct angle without requiring the installer to hold it',
  ]);

  return c;
}

function chMaterialWaste() {
  let c = '';
  c += p('Material waste management in a vinyl wrap shop has financial, environmental, and operational dimensions. Uncontrolled waste increases material cost per vehicle, creates disposal challenges, and signals a lack of planning discipline. This chapter covers waste reduction strategies and responsible disposal.');

  c += h2('Waste Sources & Reduction Strategies');
  c += table(
    ['Waste Source', 'Typical % of Material Waste', 'Reduction Strategy'],
    [
      ['Panel overage (standard)', '10–15%', 'Optimize measurement; use remnant pieces for smaller panels (mirrors, pillars) before ordering'],
      ['Re-dos (defect or error)', '5–20% depending on skill level', 'Reduce through proper prep and training; track by installer for coaching'],
      ['Pattern matching waste (directional film)', '5–15%', 'Plan panel nesting efficiently; order in longer rolls to reduce end-cut waste'],
      ['Liner material', '100% of all installed film', 'Recycle through a film liner recycling program; do not add to general waste stream'],
      ['Blade snaps and sharps', 'High volume', 'Use sharps container; full container is collected by a sharps disposal service'],
      ['IPA and cleaning chemical containers', 'Moderate', 'Use refillable containers where possible; dispose of empties as per local chemical waste regulations'],
    ]
  );

  c += h2('Remnant Management');
  c += p('Off-cuts and remnants from large panels are a hidden cost centre. An unmanaged remnant pile grows quickly and contains material that is often still usable for smaller pieces. A formal remnant system recovers a meaningful portion of material cost.');

  c += procedure('Remnant Management Protocol', [
    'After each panel is trimmed, any piece 30 cm × 30 cm or larger is retained — not discarded',
    'Remnants are rolled loosely (never folded — creasing damages the adhesive) and tagged with the film SKU, job date, and approximate dimensions',
    'Remnants are stored on a dedicated remnant shelf in a cool, dark area — same storage conditions as full rolls',
    'At the start of each new job, the installer checks the remnant shelf for compatible pieces that cover smaller panels (mirrors, pillars, A-pillar strips) before cutting from the main roll',
    'Remnants older than 6 months are assessed for adhesive condition before use — if the adhesive has migrated or dried, the piece is discarded',
    'Track remnant material by cost recovered per month: this is a measurable KPI for material efficiency',
  ]);

  c += h2('Liner Recycling');
  c += p('The polyester release liner that backs vinyl wrap film is a significant waste stream. Most liner is not accepted in standard municipal recycling programs due to the silicone release coating. Specialty recycling programs exist for this material.');

  c += checklist([
    'Collect all liner material in a dedicated bin — do not mix with general recycling',
    'Research liner take-back or recycling programs from your primary film supplier — several manufacturers offer this',
    'Partner with a local commercial recycling facility that accepts silicone-coated film liner',
    'Track liner volume collected per month — this demonstrates your environmental commitment and can be used in marketing ("We recycle X kg of liner per month")',
    'Liner that cannot be recycled is disposed of in appropriate commercial waste — not residential recycling bins',
  ]);

  return c;
}

function chWrapPricingBusiness() {
  let c = '';
  c += p('Professional vinyl wrap pricing requires balancing material cost, labor time, overhead allocation, and market positioning. Under-pricing wraps is the most common reason wrap businesses fail — film cost is high, labor intensity is significant, and margin erosion happens quickly if pricing is not structured correctly.');

  c += h2('Cost-of-Goods Analysis per Wrap Type');
  c += table(
    ['Wrap Type', 'Avg Film Used (m²)', 'Film Cost per m²', 'Avg Labor Hours', 'Labor Rate (example)', 'Break-Even (materials + labor)'],
    [
      ['Full sedan color change', '16–18 m²', '$8–$18', '12–16 hrs', '$65/hr', '$940–$1,360'],
      ['Full SUV/truck color change', '20–24 m²', '$8–$18', '16–20 hrs', '$65/hr', '$1,200–$1,732'],
      ['Full van / fleet vehicle', '22–28 m²', '$7–$14', '14–20 hrs', '$60/hr', '$1,134–$1,592'],
      ['Partial roof + mirrors accent', '4–6 m²', '$8–$18', '3–4 hrs', '$65/hr', '$227–$368'],
      ['Hood only', '3–4 m²', '$8–$18', '2–3 hrs', '$65/hr', '$154–$267'],
      ['Chrome delete (full vehicle)', '8–12 m²', '$12–$22', '8–12 hrs', '$65/hr', '$616–$1,044'],
    ]
  );

  c += h2('Pricing Structure');
  c += p('A profitable wrap business prices above break-even cost by a margin that covers overhead and generates profit. A minimum 40% gross margin on materials and direct labor is required to sustain the business when overhead (rent, utilities, equipment depreciation, insurance, marketing) is factored in.');

  c += procedure('Setting a Job Price', [
    'Calculate material cost: measure the vehicle or use a reference chart; add 15% overage for waste and mistakes; multiply by current film cost per square meter',
    'Calculate labor cost: estimate hours based on vehicle complexity; multiply by fully-loaded labor rate (hourly wage × 1.3 for payroll overhead)',
    'Sum material + labor = direct job cost',
    'Apply overhead allocation: direct job cost × 1.25 to cover facility, equipment, utilities, and admin',
    'Apply target gross margin: cost × 1.4 (for 40% gross margin) to arrive at the minimum selling price',
    'Sanity-check against market: if the price is below market, consider raising margin; if significantly above market on a standard job, review efficiency assumptions',
    'Present to the customer as a firm, itemized quote — do not present a range; ranges invite negotiation to the bottom',
  ]);

  c += h2('Quoting Process');
  c += checklist([
    'All quotes are issued in writing via CRM-generated quote or signed estimate form — verbal quotes are not binding',
    'Quote is valid for 21 days: film prices fluctuate; labor cost assumptions must reflect current rates',
    'Quote specifies the exact film product, finish, and color — price changes if film changes',
    'Quote specifies what is included: panels covered, hardware removal/reinstallation, trimmed vs. wrapped under edges',
    'Quote specifies what is NOT included: paint correction if needed, hard-to-access panels excluded from scope, hardware replacement if damaged during removal',
    'Deposit requirement: minimum 30% deposit on all wrap jobs; 50% on custom or specialty film orders',
    'Payment balance is due at completion, before the vehicle is released — this is a non-negotiable policy',
  ]);

  c += h2('Protecting Margins on Complex Jobs');
  c += table(
    ['Risk Factor', 'Impact on Cost', 'Mitigation Strategy'],
    [
      ['Difficult body lines / deep recesses', '+20–40% labor time', 'Assess vehicle complexity at quote; add complexity surcharge for high-difficulty vehicles'],
      ['Paint defects requiring correction before wrap', 'Unquoted correction cost', 'Inspect paint before quoting; include a correction add-on option in the quote'],
      ['Customer change-of-mind on color after film ordered', 'Film cost lost or restocking fee', 'Collect deposit before ordering specialty film; no-refund clause on ordered film'],
      ['Installation re-do due to contamination', 'Double labor and film cost', 'Enforce prep checklist; do not skip steps under time pressure'],
      ['Film adhesion failure under warranty', 'Full or partial re-install cost', 'Use only reputable film; document application conditions; enforce maintenance requirement'],
    ]
  );

  return c;
}

function chColorTheoryForWrappers() {
  let c = '';
  c += p('Color selection is one of the most consequential decisions in a wrap project. Installers and consultants who understand color theory, finish perception, and how vehicle geometry interacts with color can guide clients to outcomes they love — and avoid costly change-of-mind remakes.');

  c += h2('Color and Finish Categories');
  c += table(
    ['Category', 'Subcategory', 'Visual Effect', 'Best Application', 'Maintenance Level'],
    [
      ['Gloss', 'Solid', 'Mirror-like reflection; classic appearance', 'Luxury vehicles; brand vehicles', 'High — shows water spots and swirls readily'],
      ['Gloss', 'Metallic', 'Sparkling depth; shifts with light angle', 'Sports cars; premium color-change', 'High — flop direction must match panel to panel'],
      ['Gloss', 'Color-shift', 'Dramatic hue change based on viewing angle', 'Show cars; accent panels', 'High — installation angle critical for effect'],
      ['Satin', 'Flat satin', 'Low sheen; semi-matte; modern premium look', 'SUVs; executive vehicles', 'Medium — no wax; gentle pH-neutral wash'],
      ['Matte', 'Flat matte', 'Zero reflection; aggressive; hides minor imperfections', 'Sports wraps; stealth looks', 'Medium — no polishes; dedicated matte care'],
      ['Textured', 'Carbon fiber', 'Woven pattern with light sheen', 'Accent panels; roof; spoilers', 'Medium — texture traps dirt; soft brush cleaning'],
      ['Textured', 'Brushed metal', 'Directional brushed look; metallic base', 'Interior trims; pillars; custom accents', 'Low — very forgiving; hides fingerprints'],
      ['Chrome', 'Mirror chrome', 'Full reflective mirror surface', 'Show vehicles; full wraps — not recommended on daily drivers', 'Very high — fingerprints; scratches instantly visible'],
    ]
  );

  c += h2('How Vehicle Shape Affects Color Perception');
  c += p('The same color film looks materially different on a sport coupe versus an SUV. Body curves, panel angles, and surface area all modify how light interacts with the finish. Understanding this prevents client disappointment.');

  c += checklist([
    'Large flat panels (vans, box trucks) show metallic flop unevenly — use solid colors or non-directional films for large fleets',
    'Tight curves and deep recesses on matte films can create sheen variation — acceptable and consistent once explained to the client',
    'Dark colors show every panel gap and trim line more clearly — align transitions to factory body lines',
    'Light colors on larger vehicles often appear even lighter than the sample swatch — show clients at scale if possible',
    'Color-shift films require consistent viewer angle for the effect to read — complex body shapes can interrupt the shift mid-panel',
    'Gloss black on panels with factory textured plastic near edges creates a visible contrast — plan trim removal or matching carefully',
    'Brushed or carbon-fiber textured films have a grain direction — this must run consistently across all panels for a factory-look result',
  ]);

  c += h2('Color Consultation Process');
  c += procedure('In-Person Color Consultation', [
    'Begin with the client\'s intent: daily driver, show car, fleet branding — this narrows the viable finish categories immediately',
    'Show physical swatch samples under the same lighting conditions as the vehicle will typically be viewed — shop fluorescent lighting is not representative',
    'If the client wants a specific color concept, show 2–3 options in that direction, not just one — giving choice increases commitment',
    'Address maintenance expectations directly: "This finish requires X wash method and no wax — are you comfortable with that?"',
    'For full vehicle wraps, show a reference image of a similar body style in the chosen color — a coupe reference for a coupe client',
    'Document the chosen film SKU, finish, and color on the signed authorization form before ordering',
    'Order a sample panel or perform a test install on a hidden area (under-door sill) for exotic finishes before committing to the full vehicle',
    'If the client is undecided between two colors, offer a 48-hour sample loan: provide swatches for them to assess at home in their garage and in daylight',
  ]);

  c += h2('Color Matching for Partial Wraps');
  c += p('When wrapping only part of a vehicle — accent stripes, roof panel, mirror caps — matching the wrap color to the factory paint or existing wrap requires careful assessment. Perfect matching is often impossible, which must be communicated clearly.');

  c += table(
    ['Scenario', 'Challenge', 'Recommended Approach', 'Client Communication'],
    [
      ['Roof wrap to match body color', 'Paint and film never match exactly under all lighting', 'Choose contrasting finish — gloss black roof on any color reads as intentional design', 'Explain that factory color match in vinyl is not achievable; propose deliberate contrast'],
      ['Replacing one panel of an aging wrap', 'Film batches vary; aged film has shifted color', 'Wrap adjacent panels together or full vehicle to ensure consistency', 'Show client the old vs. new film under proper light before proceeding'],
      ['Adding stripes to a painted vehicle', 'Exact paint code color may not exist in film', 'Shade match: find nearest film color in same finish family', 'Document in authorization that "film color is the closest available match — not an exact paint replica"'],
      ['Fleet vehicle addition to existing wrapped fleet', 'Film batch numbers differ over time', 'Source remaining film from same SKU and batch if available; store excess', 'Order one extra roll from the original batch during the initial fleet project'],
    ]
  );

  return c;
}

function chInstallerCertificationPathway() {
  let c = '';
  c += p('A structured installer development pathway transforms an entry-level hire into a confident, efficient technician while protecting the shop\'s quality standards. This chapter establishes the competency levels, training milestones, and certification gates that every installer moves through from first day to lead installer status.');

  c += h2('Installer Skill Levels');
  c += table(
    ['Level', 'Title', 'Authorized Work', 'Supervision Required', 'Typical Timeline'],
    [
      ['L1', 'Installer Trainee', 'Surface prep, panel cleaning, observing installs, film trimming', 'Direct supervision — never alone on a vehicle', '0–60 days'],
      ['L2', 'Junior Installer', 'Flat panels (hood, roof, trunk) under supervision', 'Co-installer on every job; no solo work', '60–180 days'],
      ['L3', 'Installer', 'Full vehicle color-change wraps; bumpers; mirrors', 'Lead reviews final QC; installer works independently', '6–18 months'],
      ['L4', 'Senior Installer', 'All wrap types including fleet, textured, chrome; mentors L1/L2', 'Autonomous; performs own QC sign-off', '18–36 months'],
      ['L5', 'Lead Installer / Trainer', 'All services; signs off on all other installers\' work; trains staff', 'Autonomous; signs QC for entire shop', '3+ years'],
    ]
  );

  c += h2('Training Curriculum by Level');
  c += h3('Level 1 — Trainee Curriculum');
  c += checklist([
    'Film care and handling: unrolling, storage, why not to fold film',
    'Panel prep chemistry: what IPA does, why contamination causes fish-eyes, temperature effects',
    'Tool identification and maintenance: squeegees, heat guns, knives, knifeless tape',
    'Shop safety: heat gun burn prevention, blade handling and disposal, chemical safety',
    'Observation log: watch and document 10 installs; complete observation form for each',
    'Trimming practice on scrap panels: achieve clean edges without cutting into paint',
    'Squeegee technique on flat panels: proper angle, pressure, and stroke pattern',
  ]);

  c += h3('Level 2 — Junior Installer Curriculum');
  c += checklist([
    'Complete L1 curriculum plus pass the panel prep proficiency test (assessed by L4+)',
    'Perform full hood wrap under supervision: submit QC photos reviewed by lead',
    'Perform full roof wrap under supervision: manage large sheet positioning and post-heat',
    'Knifeless tape technique: complete inlay exercise on practice substrate',
    'Film application to compound curves: use of relief cuts and stretch management',
    'Post-heat protocol: correct technique for all edges; temperature verification',
    'Edge sealing and finishing: where and how to apply edge sealer without visual residue',
    'Complete 20 supervised panels before advancing; all panels must pass L4 QC review',
  ]);

  c += h2('Certification Gates');
  c += procedure('Level Advancement Assessment', [
    'Installer requests assessment when they believe they meet all curriculum requirements',
    'Lead installer or shop manager schedules a timed practical assessment on a designated test vehicle or practice substrate',
    'Assessment criteria: prep quality (pass/fail), installation technique (pass/fail), edge quality (pass/fail), post-heat coverage (pass/fail), time within benchmark (pass/fail)',
    'All five criteria must pass — partial pass is not accepted; assessment may be retaken after 2-week remediation period',
    'Passing installer receives a written level advancement record in their personnel file',
    'Level advancement is tied to compensation review — pay grade advances at each level',
    'Lead installer signs the advancement form; shop owner countersigns',
  ]);

  c += h2('Ongoing Professional Development');
  c += p('Certification is not a one-time event. The film industry evolves rapidly — new adhesive technologies, new film categories, and new application techniques emerge regularly. Continuing development is expected of all installers at every level.');

  c += checklist([
    'All installers complete at least one manufacturer-sponsored training (online or in-person) per year',
    'New film products are introduced in a monthly 30-minute product review session — lead installer leads; all staff attend',
    'Competition wraps and show vehicles are used as development opportunities — assign L2/L3 installers to work alongside the lead on high-profile builds',
    'Installer performance metrics (QC re-do rate, time efficiency, customer satisfaction) are reviewed quarterly and shared confidentially with each installer',
    'Installer portfolio: each installer maintains a photo portfolio of completed work — used for performance review and in shop marketing with permission',
    'Cross-training with PPF installation is encouraged for L4+ installers — dual certification increases installer versatility and value',
  ]);

  c += h2('Installer Tools & Equipment Responsibility');
  c += p('Each installer is responsible for the condition and cleanliness of their personal tool set. Tools that are not maintained correctly directly impact installation quality. A squeegee with a nicked edge causes scratches. A heat gun with a dirty nozzle deposits contaminants. A knife with a dull blade causes ragged cuts that lift.');

  c += table(
    ['Tool', 'Cleaning Frequency', 'Maintenance Action', 'Replacement Trigger'],
    [
      ['Squeegee (hard card)', 'Every panel', 'Wipe edge with clean microfiber; inspect for nicks', 'Any nick visible on the edge — replace immediately; do not use a nicked card'],
      ['Squeegee (felt edge)', 'Weekly or when soiled', 'Wash in warm water; air dry flat; do not fold', 'When felt develops hard spots or tears at the edge'],
      ['Heat gun nozzle', 'Weekly', 'Wipe cool nozzle with a dry cloth; remove any dust buildup inside the barrel', 'If heating element shows uneven output or nozzle is cracked'],
      ['Knifeless tape dispenser', 'As needed', 'Keep spool loaded; wipe the cutter guide with IPA', 'If the cutter guide is chipped — ragged guide creates ragged cuts'],
      ['Cutting mat / work surface', 'Daily', 'Sweep; IPA wipe to remove adhesive transfer; flip when one side is scored deeply', 'When cutting mat is deeply grooved and cannot be IPA-wiped clean'],
      ['Spray bottles', 'Weekly', 'Empty; rinse with clean water; check nozzle for clogging', 'If nozzle cannot be cleared; contamination risk from old solution'],
    ]
  );

  return c;
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

function generateVinylWrapManual() {
  const chapters = [
    { title: 'Film Technology & Types',                        content: chFilmTechnology() },
    { title: 'Adhesive Systems & Chemistry',                   content: chAdhesiveSystems() },
    { title: 'Tools & Equipment',                              content: chToolsEquipment() },
    { title: 'Safety Standards',                               content: chSafety() },
    { title: 'Design & Color Change Planning',                 content: chDesignPlanning() },
    { title: 'Surface Preparation',                            content: chSurfacePrep() },
    { title: 'Measuring & Pattern Cutting',                    content: chMeasuringCutting() },
    { title: 'Knifeless Tape & Inlay Techniques',              content: chKnifelessInlays() },
    { title: 'Flat Panel Installation',                        content: chFlatPanels() },
    { title: 'Deep Recesses & Compound Curves',                content: chDeepRecesses() },
    { title: 'Post-Heat & Film Activation',                    content: chPostHeat() },
    { title: 'Seam Management',                                content: chSeamManagement() },
    { title: 'Textured Films',                                 content: chTexturedFilms() },
    { title: 'Fleet Wraps',                                    content: chFleetWraps() },
    { title: 'Quality Control',                                content: chQualityControl() },
    { title: 'Troubleshooting',                                content: chTroubleshooting() },
    { title: 'PPF vs. Vinyl Wrap — Comparison & Combination',  content: chPPFVsVinylWrap() },
    { title: 'Film Brand Knowledge & Product Evaluation',      content: chFilmBrandKnowledge() },
    { title: 'Advanced Installer Reference — Techniques & Problem-Solving', content: chAdvancedInstallerReference() },
    { title: 'Bumpers, Mirrors & Door Handles — Advanced Technique', content: chBumpersMirrorsDoorHandles() },
    { title: 'Vehicle-Specific Installation Challenges',       content: chVehicleSpecificChallenges() },
    { title: 'Wrap Maintenance, Longevity & Removal',          content: chWrapMaintenanceRemoval() },
    { title: 'Workshop Setup & Dust Control',                  content: chWorkshopSetup() },
    { title: 'Material Waste Management',                      content: chMaterialWaste() },
    { title: 'Panel Procedure Library — All Panels',           content: chWrapPanelsContent() },
    { title: 'Color Theory & Film Selection Consultation',     content: chColorTheoryForWrappers() },
    { title: 'Installer Certification & Development Pathway', content: chInstallerCertificationPathway() },
    { title: 'Wrap Pricing, Quoting & Business Standards',    content: chWrapPricingBusiness() },
    { title: 'Appendices',                                     content: chAppendicesWrap() },
  ];

  return chapters;
}

module.exports = { generateVinylWrapManual, WRAP_PANELS };
