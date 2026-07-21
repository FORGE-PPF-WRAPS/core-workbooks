'use strict';

const {
  p, h2, h3, h4, callout, procedure, checklist, table, specTable,
  troubleshootingSection, panelProcedure, pageBreak,
} = require('./shared');

// ─────────────────────────────────────────────────────────────────────────────
// PANEL DEFINITIONS — 12 distinct glass types with full procedure data
// ─────────────────────────────────────────────────────────────────────────────

const TINT_PANELS = [
  {
    name: 'Windshield Visor Strip',
    difficulty: '★★☆☆☆ Beginner',
    time: '20–35 min',
    orientation: 'Film liner side up, cut edge toward roof',
    overview:
      'The windshield visor strip runs across the top of the front windshield and is the most common entry-level application. It is a flat or very gently curved section that provides UV protection and reduces glare from sun angles above the A-pillar. Most strips are 4–6 inches tall and span the full width of the glass.',
    prep: [
      'Park vehicle under shade or in a controlled environment — no direct sunlight',
      'Clean exterior glass with strip-safe glass cleaner and lint-free towels',
      'Run a razor blade across the full width to lift any adhesive or old film remnants',
      'Clean interior glass thoroughly — wipe down in overlapping passes top to bottom',
      'Confirm glass is free of pitting, chips, or cracks in the visor zone',
      'Inspect wiper park area for adhesive residue (common on used vehicles)',
      'Mask the interior headliner edge with tape to protect upholstery from slip solution',
      'Pre-cut film to width plus 1 inch each side, height plus ½ inch',
    ],
    steps: [
      'Mist the interior glass surface generously with slip solution',
      'Peel the liner back approximately 2 inches from the top edge of the film',
      'Position the exposed adhesive edge against the top gasket or glass edge, holding the liner taut',
      'While a helper holds the film, peel the liner fully downward while misting the adhesive side',
      'Set the film onto the glass — allow slip solution to let you slide it into final position',
      'Align the top edge flush to the rubber gasket; leave 1/16 inch gap, do not tuck under gasket',
      'Squeegee from the center outward using firm, overlapping passes with a soft-blade card',
      'Lift the bottom edge of the film and use a hard card to squeegee from the top edge down',
      'Check for remaining water pockets — re-squeegee any wet spots',
      'Use a thin Teflon-coated card to work solution out along the top gasket edge',
      'Trim the side edges with a single-bevel blade and straight edge, leaving 1/16 inch reveal',
      'Squeegee the cut edges firmly to lock the adhesive against the glass',
      'Remove masking tape carefully; wipe up any solution that escaped under the tape',
      'Final inspection: hold a flashlight at a low angle to reveal any remaining bubbles or debris',
    ],
    qc: [
      'No visible water pockets larger than a dime (small bubbles will dissipate in 3–7 days)',
      'Top edge aligned parallel to roofline with consistent reveal',
      'Side edges trimmed cleanly with no ragged cuts or lifting corners',
      'Film is not bubbling or lifting at any edge',
      'No contamination (dirt, dust, hair) trapped under film',
      'Tint shade matches vehicle specification',
    ],
    tips: 'On vehicles with pronounced curves at the A-pillars, lightly heat the film corners and stretch with your finger before final squeegee to prevent lifting. Work slowly at the gasket edge — rushing causes water channels to form under the gasket lip.',
    warnings: 'Never use a metal razor on coated or acoustic glass (identified by a faint haze or "Acoustic" etching in the corner). Use only plastic cards on these surfaces.',
    defects: [
      ['Finger marks visible', 'Oil from fingers on adhesive during liner peel', 'Lift edge, re-mist, re-squeegee firmly outward', 'Always hold liner with dry fingers only; never touch adhesive'],
      ['Film lifting at top corner', 'Insufficient adhesive contact at curved A-pillar', 'Lift corner, heat gently, re-squeegee with firm pressure', 'Pre-stretch corners with heat before final lay-down'],
      ['Horizontal water streak', 'Squeegee angle too shallow, trapping water in channel', 'Re-squeegee with steeper angle and more pressure', 'Use overlapping passes at 45° to the edge'],
      ['Ragged trim edge', 'Dull blade or excessive blade flex during cut', 'Re-trim carefully with fresh blade against firm straight edge', 'Change blades every 2–3 cuts; use rigid straight edge'],
    ],
  },
  {
    name: 'Front Door Glass (Rolled Down Method)',
    difficulty: '★★★☆☆ Intermediate',
    time: '25–45 min per door',
    orientation: 'Film applied to interior surface; roll glass down to expose top edge',
    overview:
      'Front door glass is the most frequently installed panel and the primary visibility surface that customers notice daily. The rolled-down method allows precise top-edge alignment and clean access for squeegeeing without dashboard interference. Proper handling of the door gaskets and ensuring the film does not fold on itself during liner peel are the key skills for this panel.',
    prep: [
      'Roll window fully down into the door cavity',
      'Clean interior glass thoroughly — the visible top 3–4 inches exposed above the door frame',
      'Roll window back up; clean the full interior surface with glass cleaner and squeegee dry',
      'Scrape any sticker residue, tint glue, or hard water deposits with a razor blade',
      'Re-clean with glass cleaner to remove razor debris',
      'Roll window back down — confirm the top edge is clean and free of grease from the felt channel',
      'Measure and cut film: glass width + ¾ inch each side, glass height + 1 inch top and bottom',
      'Confirm film is cut to the correct shade for front doors (may differ from rear)',
    ],
    steps: [
      'Roll the glass down 3–4 inches to expose the top edge',
      'Mist the interior glass surface generously with slip solution',
      'Peel the liner off the film completely, misting the adhesive side as you go',
      'Float the film onto the glass adhesive-side down, aligned so 1 inch of film overhangs the top edge',
      'Slide the film into horizontal alignment — center it on the glass',
      'Roll the glass up slowly while guiding the film; the overhanging top edge will fold over the top of the glass',
      'With the glass fully up, squeegee the main body of the film with moderate pressure, center outward',
      'Use a hard card to squeegee out any remaining water pockets with firm strokes',
      'Roll the glass back down 3–4 inches — the film top edge now hangs above the glass top',
      'Trim the overhanging film flush with the glass top edge using a single-bevel blade',
      'Roll the glass back up to full height',
      'Squeegee the top edge firmly to lock the trimmed edge against the glass',
      'Trim side edges where film overhangs the glass edge, leaving a 1/16 inch reveal',
      'Use a detail card to work solution and bubbles out from under all edges',
      'Final squeegee pass — hard card edge-to-edge with maximum pressure to seat the adhesive',
    ],
    qc: [
      'Top edge trimmed clean and flush — no film overlapping onto the rubber seal',
      'Film surface is free of finger prints, contamination, and trapped debris',
      'No large water pockets (small remaining pockets < 1 inch will dissipate during cure)',
      'Side edges trimmed with consistent reveal; no lifting corners',
      'Roll glass up and down twice — film must not fold, crinkle, or catch on the felt channel',
      'Shade matches specification; no visible color banding or density variation',
    ],
    tips: 'On short-glass doors (some coupes), the film may be wider than it is tall. Orient the film roll horizontally before cutting to avoid wasted material. Keep slip solution off the door panel — it can stain leather and suede.',
    warnings: 'Do not use a metal razor blade on glass with embedded antenna elements (visible as a fine metallic grid). Contact with the razor destroys the antenna circuit.',
    defects: [
      ['Film folded on itself during lay-down', 'Film edges allowed to contact each other before placement', 'Remove film, separate carefully, re-mist, and re-lay', 'Keep both hands spread wide during lay-down; work with helper on wide glass'],
      ['Film caught in felt channel when rolling', 'Film not trimmed before rolling up', 'Trim top edge before rolling up; re-squeegee', 'Always trim top edge while glass is down, before rolling up'],
      ['Visible vertical water lines after cure', 'Insufficient squeegee pressure during final pass', 'Cannot fix after cure — must re-do panel', 'Always finish with a hard-card high-pressure pass'],
      ['Grease haze under film from felt gasket', 'Felt gasket contaminated glass top edge before install', 'Remove film, clean glass, re-install', 'Wipe top edge of glass with IPA after rolling down before install'],
    ],
  },
  {
    name: 'Rear Door Glass (Full Panel)',
    difficulty: '★★★☆☆ Intermediate',
    time: '30–50 min per door',
    orientation: 'Interior application; roll-down method or full lay-in depending on glass shape',
    overview:
      'Rear door glass often includes a fixed quarter section (the "dog-leg" or "vent") adjacent to the rollable pane. These two pieces of glass require separate film cuts. The rollable pane is installed using the same method as front doors. The fixed quarter section is installed flat. Rear glass is sometimes more curved across the top than front doors — verify before cutting patterns.',
    prep: [
      'Identify whether the rear door has a single pane or a split pane with a fixed vent',
      'If split-pane: measure both sections independently and plan two cuts',
      'Roll the rollable glass down fully; clean both glass sections thoroughly',
      'Scrape any adhesive residue from the fixed vent section — common on older vehicles',
      'Clean all rubber gaskets and seals adjacent to both glass sections',
      'Dry glass with a lint-free towel before applying slip solution',
      'Cut film for rollable section: width + ¾ inch each side, height + 1 inch top and bottom',
      'Cut film for fixed vent section: exact dimensions + ⅜ inch each side and top/bottom',
    ],
    steps: [
      'Install the fixed vent section first (see Flat Glass procedure)',
      'Allow vent section to set 2–3 minutes before proceeding to the rollable pane',
      'Roll the rollable glass down 3–4 inches',
      'Mist the interior glass surface with slip solution',
      'Peel liner and float film onto glass with 1 inch overhang at top edge',
      'Center the film horizontally, leaving equal overhang on each side',
      'Roll glass up slowly while keeping film aligned',
      'Squeegee the main film surface with overlapping strokes, center to edge',
      'Roll glass back down to trim the top edge flush with the glass top',
      'Roll glass up; squeegee the trimmed top edge firmly',
      'Trim side edges leaving a 1/16 inch reveal from the glass edge',
      'For the seam between rollable glass and fixed vent, trim both edges to create a 1/16 inch gap',
      'Squeegee all edges firmly; use a detail card along the seam gap',
      'Test-roll the glass up and down to confirm no film interference with the door mechanics',
    ],
    qc: [
      'Both glass sections installed to matching shade and alignment',
      'Seam between rollable and fixed vent is consistent — approximately 1/16 inch throughout',
      'Rollable glass operates smoothly without film bunching or catching',
      'Fixed vent section shows no lifting edges or corners',
      'No contamination trapped under either section',
      'Film edges are trimmed clean; no ragged cuts visible from inside or outside the vehicle',
    ],
    tips: 'On vehicles where the fixed vent glass is sealed with a black urethane bead, be careful not to nick the sealant with your blade during trim. The sealant can lift and leave a void that allows water infiltration.',
    warnings: 'Some rear door vent glass sections have embedded defroster elements. Inspect carefully with a flashlight before cutting — do not use a metal razor on defroster glass.',
    defects: [
      ['Mismatched shade between rollable and vent sections', 'Wrong film cut used for one section', 'Remove incorrect section and re-install with correct film', 'Label cut pieces before install; double-check before peeling liner'],
      ['Seam gap too wide', 'Film trimmed too short at edge toward the seam', 'Remove and re-cut; maintain ⅜ inch overhang on seam edges before trimming', 'Cut seam side last, trimming with film installed for accuracy'],
      ['Film bunching at bottom of rollable glass', 'Film too long; bottom extends into door cavity', 'Remove, trim film bottom to exact glass height, re-install', 'Verify glass height before cutting; measure twice'],
      ['Air bubble line along fixed vent edge', 'Slip solution channeled along hard glass edge during squeegee', 'Detail card along edge while still wet; press firmly', 'Squeegee perpendicular to edges before parallel passes'],
    ],
  },
  {
    name: 'Fixed Quarter Window (Interior)',
    difficulty: '★★☆☆☆ Beginner',
    time: '15–25 min',
    orientation: 'Interior flat application; no rolling or shrinking required',
    overview:
      'Fixed quarter windows are small, generally flat panes located behind the rear doors or between the B and C pillars. They require no heat shrinking and are a good training panel for new installers. The primary skill is clean cutting around any complex shapes — some quarter windows are triangular, trapezoidal, or have aggressive curves at one corner.',
    prep: [
      'Clean interior glass with glass cleaner and dry thoroughly',
      'Inspect for factory tint — document baseline VLT before adding aftermarket film',
      'Scrape any sticker glue, factory markings, or adhesive residue',
      'Measure glass at widest and tallest points; add ⅜ inch to each edge for overhang',
      'Confirm film pattern orientation — some quarter windows are mirror-imaged left to right',
      'Pre-wet a small area of glass to test for water spots or hard water mineral deposits',
    ],
    steps: [
      'Apply slip solution to the full interior glass surface',
      'Peel the liner from the film while misting the adhesive',
      'Float the film onto the glass, centered with equal overhang on all sides',
      'Squeegee a center anchor strip from top to bottom to hold the film in place',
      'Work outward with overlapping squeegee strokes, pushing solution toward the edges',
      'Once 90% of solution is out, switch to a hard card for the final passes',
      'Trim the film to the glass edge using a single-bevel blade; cut along the glass perimeter',
      'For curved corners, use a curved-tip knife and make the cut in one smooth arc',
      'Squeegee the trimmed edges firmly to seat the adhesive',
      'Inspect at 45° with a flashlight for bubbles, debris, or missed solution pockets',
    ],
    qc: [
      'Film trimmed cleanly to all glass edges with no visible overhang',
      'Curved corner cuts are smooth arcs — no jagged steps or notches',
      'No contamination trapped under film surface',
      'Edges seated firmly with no lifting',
      'Shade is uniform across the full pane',
    ],
    tips: 'When cutting curves, rotate the blade handle rather than moving the hand — this creates a smoother arc. Practice curved cuts on scrap film before committing to the installed piece.',
    warnings: 'On quarter windows with very close proximity to the body panel edge, blade slip during trimming can scratch the painted surface. Use a trim guide or blade guard on body-adjacent edges.',
    defects: [
      ['Jagged curved corner cut', 'Multiple short strokes used instead of one flowing arc', 'Re-trim with fresh blade in single smooth motion', 'Practice curved cuts on scrap before installing'],
      ['Film too small, gap at edge', 'Film cut too short before installation', 'Remove and re-cut with correct dimensions', 'Always add ⅜ inch per edge before installation; trim after'],
      ['Paint scratch from blade during trim', 'Blade contact with body panel during edge trim', 'Polishing compound on scratch if superficial; document and advise customer', 'Use edge guide; retract blade to minimum exposure needed'],
      ['Bubbles remaining after cure', 'Hard water mineral deposits preventing adhesive bond', 'Remove, treat glass with mineral deposit remover, re-install', 'Pre-treat hard-water glass before installation'],
    ],
  },
  {
    name: 'Curved Rear Window (Full Pattern)',
    difficulty: '★★★★★ Expert',
    time: '60–120 min',
    orientation: 'Exterior shrink on outside of glass; final application on interior',
    overview:
      'The rear window is the most technically demanding panel in automotive tinting. The compound curves of most rear windows require heat shrinking the film before installation to eliminate excess material that would otherwise form fingers or pleats. Mastery of heat shrinking — understanding the theory and the motion — separates professional installers from amateurs. This panel alone can take beginners weeks of practice to master.',
    prep: [
      'Clean exterior glass thoroughly — the shrinking process happens on the outside',
      'Clean interior glass for final installation',
      'Identify the type of curve: mild (sedan), moderate (hatchback), severe (muscle car/SUV)',
      'If available, use a pre-cut factory pattern; if not, create a pattern on scrap film first',
      'Cut film to exterior glass dimensions, adding 1 inch to all edges',
      'Confirm defroster line locations — they run across the glass and affect squeegee direction',
      'Set heat gun to medium-low; allow it to reach temperature (2–3 minutes)',
      'Lay film liner-side down on the exterior glass; the adhesive side faces up',
    ],
    steps: [
      'Lay the film on the exterior glass, liner down, adhesive side up — center and tape one edge temporarily',
      'Identify the excess material — it will bunch up and form fingers (pleats of excess film)',
      'With the heat gun on low, apply heat in a sweeping motion 4–6 inches above the film surface',
      'As the film warms, use a soft squeegee or your fingers to push the excess material toward the top of the glass',
      'Work the excess material upward using small, controlled pushes — do not stretch aggressively',
      'Apply heat continuously to keep the film pliable; cold film cracks or develops haze when worked',
      'Concentrate heat on the fingers (pleats) — they will begin to flatten as the film relaxes',
      'Use the squeegee to lock down the shrunk areas before moving to new areas',
      'Repeat until all fingers are gone and the film lays flat against the full exterior glass curve',
      'Allow the film to cool fully while locked against the glass (2–3 minutes)',
      'Trim the exterior film to the glass perimeter, using the glass edge as a guide',
      'Remove the film from the exterior and place liner-side up on a clean work surface',
      'Move to the interior; apply slip solution to the full interior glass surface',
      'Peel the liner from the pre-shrunk film, misting the adhesive',
      'Float the pre-shrunk film onto the interior glass; it should conform naturally to the curve',
      'Squeegee from the center outward following the defroster line direction (horizontal)',
      'Use a hard card along defroster lines — never perpendicular across them under high pressure',
      'Work solution completely out; use a detail card for the edges',
      'Trim film to the interior glass edge using the gasket as a guide',
      'Squeegee trimmed edges firmly; final inspection with flashlight',
    ],
    qc: [
      'No fingers, pleats, or creases visible anywhere on the film surface',
      'Film conforms fully to the glass curve — no bridging across any section',
      'Defroster lines are visible and undamaged through the film',
      'Edges trimmed cleanly with consistent reveal along all gaskets',
      'No contamination, debris, or water pockets visible at installation time',
      'Film is not stretched or thinned — no visible optical distortion',
    ],
    tips: 'The key to shrinking is patience and heat management. Move the gun constantly — holding it in one spot burns the film. Work in zones: divide the glass into thirds and complete each zone before moving on. On severe curves, a second pass of shrinking after the first cool-down often achieves a flatter result than trying to shrink everything in one pass.',
    warnings: 'Never apply high heat directly to defroster lines on the interior surface — it can delaminate the silver traces from the glass. On exterior shrinking, keep the gun moving to prevent hotspots that cause irreversible optical distortion (silvering).',
    defects: [
      ['Fingers remaining after shrinking', 'Insufficient heat or improper pushing technique', 'Re-heat the panel; push excess toward top edge with more authority', 'Practice shrinking on scrap glass; use consistent heat and push motion'],
      ['Silver haze or optical distortion in film', 'Heat gun held stationary — burned the film', 'Film is permanently damaged; must be replaced', 'Never stop gun movement; keep gun 4–6 inches from surface'],
      ['Film bridging across a curve section', 'Film not fully shrunk before interior application', 'Remove, re-shrink more aggressively, re-install', 'Test lay the shrunk film on exterior before peeling liner'],
      ['Defroster line lifted or broken', 'Razor blade or hard card dragged across defroster trace', 'Defroster line may be permanently broken; must inform customer', 'Never use metal tools across defroster lines; squeegee only parallel to lines'],
      ['Contamination trapped under film', 'Dust or debris on interior glass during installation', 'Remove film, re-clean, re-install', 'Clean interior glass immediately before installation; no delay'],
    ],
  },
  {
    name: 'Sunroof / Moonroof Panel',
    difficulty: '★★★☆☆ Intermediate',
    time: '20–35 min',
    orientation: 'Interior application; glass may be removable or fixed',
    overview:
      'Sunroofs and moonroofs are interior ceiling panels with a glass section that allows light to pass through. They receive intense overhead UV exposure and are popular add-on services. Most sunroofs are flat or very gently curved. The primary challenges are working in an awkward overhead position, maintaining cleanliness on a glass surface that tends to collect dust, and managing film on glass with mechanical tracks and seals.',
    prep: [
      'Open the sunroof to its full tilt or slide position to access the interior glass surface',
      'Clean the interior glass thoroughly — wipe in all directions to remove grease and fingerprints',
      'On panoramic sunroofs, identify individual glass panels and plan separate cuts for each',
      'Inspect the rubber seal around the perimeter — old seals may be brittle or misshapen',
      'Measure the full glass area and cut film with ½ inch overhang on all sides',
      'Lay film on a clean flat surface and remove any liner edge adhesive contamination',
      'Prepare a slip solution bottle and have a detail card ready for overhead work',
    ],
    steps: [
      'Position yourself on the front seat or stand beside the vehicle for the best overhead angle',
      'Apply slip solution generously to the full interior glass surface',
      'Peel the film liner while keeping the film flat — overhead work tends to let the film curl',
      'Float the film onto the glass starting from the front edge, working toward the rear',
      'Use a wide soft squeegee to set the film and remove large water pockets immediately',
      'Work from the center of the glass outward in all directions',
      'Use a hard card for final passes, paying attention to the channel edges where water pools',
      'Trim the film to the inner edge of the rubber seal, leaving film flush with or slightly inside the seal',
      'Use a detail card to work the trimmed edges firmly into the seal channel',
      'Close the sunroof partially to check that the film does not catch or pinch in the seal track',
      'Open fully; do a final squeegee pass to seat any edges lifted during the test close',
      'Final inspection overhead: use a mirror or phone camera to check edges you cannot directly see',
    ],
    qc: [
      'Film does not catch, fold, or crinkle when sunroof opens and closes',
      'All edges are sealed into the rubber channel with no lifting',
      'No contamination visible on this high-visibility overhead surface',
      'Film shade is uniform across the full panel',
      'Water pockets, if present, are small and located away from edges',
    ],
    tips: 'On panoramic multi-panel sunroofs, install the rearmost panel first and work forward. This prevents the film from the front panel from being disturbed by your body while installing the rear. Use a clean microfiber glove on your squeegee hand to avoid transferring finger oil.',
    warnings: 'Do not tuck film under sunroof frame seals that contain drain channels. Blocking these channels causes water to enter the headliner. Trim the film to sit at or just inside the channel, never over it.',
    defects: [
      ['Film catching on sunroof seal when closing', 'Film trimmed too long — extends past seal edge', 'Re-trim film flush to or inside the seal boundary', 'Trim conservatively; leave film ⅛ inch inside seal'],
      ['Dust contamination in overhead install', 'Disturbed ceiling dust fell onto film during installation', 'Remove film, clean glass, install immediately after cleaning', 'Clean ceiling area with damp cloth before starting; work quickly after cleaning'],
      ['Film peeling at front edge after cure', 'Adhesive contact with sunroof seal gasket material — incompatible chemistry', 'Re-trim to avoid gasket contact; apply edge sealant if appropriate', 'Keep film ⅛ inch clear of gasket material on all sides'],
      ['Optical distortion visible in overhead view', 'Film stretched during lay-on due to gravity pull', 'Remove and re-install without allowing film to sag before placement', 'Have helper hold far edge of film during lay-on to prevent sag'],
    ],
  },
  {
    name: 'Rear Quarter Glass (C/D Pillar)',
    difficulty: '★★★☆☆ Intermediate',
    time: '20–40 min',
    orientation: 'Interior application; may require mild heat for upper corner curves',
    overview:
      'C-pillar and D-pillar quarter windows are typically fixed glass panels located at the rear of the passenger compartment. On sedans, these are often nearly flat. On SUVs and minivans, the rear quarter glass is frequently larger, more curved, and may include a dog-leg shape at the top where the glass curves into the roof. The more compound the curve, the more heat working is required.',
    prep: [
      'Clean interior glass from the inside of the vehicle — use full arm extension with a lint-free cloth',
      'Inspect for factory privacy glass — note the existing VLT before adding aftermarket film',
      'Identify if the glass has any embedded elements (defroster, antenna)',
      'Measure the glass at multiple points — width top and bottom, height front and rear',
      'Note any pronounced curves at the upper corners that will require heat shrinking',
      'Cut film to the largest dimensions + ½ inch each side',
      'Pre-heat the heat gun and keep it accessible during installation',
    ],
    steps: [
      'Apply slip solution to the full interior glass surface',
      'Peel liner and float the film onto the glass with even overhang on all sides',
      'Set a center anchor pass with the squeegee from top to bottom',
      'If an upper corner curve creates excess material (finger forming), apply gentle heat from 5 inches away',
      'Push the excess film material toward the top edge while it is warm and pliable',
      'Once the corner lays flat, hold it in place with a squeegee while it cools',
      'Squeegee the remainder of the glass from center to edges with firm overlapping strokes',
      'Use a hard card for the final high-pressure passes',
      'Trim all edges to the glass perimeter with a single-bevel blade',
      'Pay special attention to the upper curved corner trim — make this cut in one smooth arc',
      'Squeegee all trimmed edges; use a detail card for corners',
      'Inspect at a low-angle flashlight to identify any remaining bubbles or debris',
    ],
    qc: [
      'No heat-related distortion — film optical clarity unchanged',
      'No fingers or pleats at curved corners',
      'All edges trimmed cleanly with no gaps or overlaps',
      'Film is seated fully — no lifting edges or corners after 10-minute dwell time',
      'Shade matches the other rear panels in the vehicle',
    ],
    tips: 'Use a heat gun with a diffuser tip for the quarter glass corners. The diffuser spreads heat over a larger area, making it easier to warm the film evenly without burning a focal point.',
    warnings: 'On vehicles with embedded GPS or satellite antennas in the rear quarter glass, check the antenna layout before installing metallic film. Metallic and metalized films can significantly degrade these signals.',
    defects: [
      ['Pleat forming at top curve during install', 'Insufficient heat or premature squeegee contact', 'Re-heat the area; push excess before squeegeeing', 'Apply heat, push, then lock — in that sequence; never squeegee cold film on a curve'],
      ['Mismatched shade vs rear window', 'Wrong shade film used for this panel', 'Remove and re-install with correct film', 'Verify film shade before cutting every panel; keep rolls labeled'],
      ['Film bridging at upper curve — not conforming', 'Film too thick or too cold during application', 'Reheat aggressively with diffuser tip; work film into curve with finger pressure', 'Use a thinner film series on vehicles with aggressive quarter glass curves'],
      ['Blade mark on adjacent rubber gasket', 'Blade angle too high during trim cut', 'Trim gasket damage is cosmetic; document for customer', 'Keep blade nearly parallel to glass surface during trim; use minimum blade exposure'],
    ],
  },
  {
    name: 'Front Windshield (Full Coverage)',
    difficulty: '★★★★★ Expert',
    time: '90–150 min',
    orientation: 'Interior application; two-panel or single large sheet depending on vehicle',
    overview:
      'Full windshield tinting is legal only in certain jurisdictions and is subject to strict VLT minimums where permitted. The windshield is the largest, most optically critical glass surface in the vehicle. Any distortion, finger marks, contamination, or incomplete shrinking is immediately visible. Two-panel installation (left and right halves seamed at center) is more common than single-piece installation because it reduces the volume of excess material that must be shrunk on a compound curve. The wire-free windshield approach avoids dashboard interference by patterning without a template.',
    prep: [
      'Verify local VLT requirements for windshields — do not proceed if not compliant',
      'Park vehicle in a controlled, shaded environment at 60–80°F',
      'Clean the full exterior windshield surface — this is where shrinking occurs',
      'Clean the interior windshield surface in sections, working around the dashboard',
      'Tape the dashboard edge with low-tack masking tape to protect from slip solution',
      'Inspect for chips or cracks — do not tint a windshield with an active crack',
      'Cut film in two halves: each half = one side of the windshield + 1 inch overlap at center',
      'Mark the liner side of each half (left/right) before beginning',
    ],
    steps: [
      'Begin with the passenger side panel (easier to access)',
      'Lay film on the exterior glass, liner down, centered on the passenger half',
      'Identify excess material at the compound curves near A-pillar and bottom edge',
      'Shrink the excess using the same finger-elimination technique as the rear window',
      'Work the A-pillar corner first — this is typically the deepest curve on the windshield',
      'Proceed to the bottom curve; work methodically until the panel lays perfectly flat',
      'Allow the passenger panel to cool; trim to a line 1 inch past the vehicle centerline',
      'Remove the panel and store liner-side down on a clean surface',
      'Repeat the shrinking process for the driver side panel',
      'Trim the driver panel to a line 1 inch past center on the driver side',
      'Move to the interior; apply slip solution to the passenger side of the interior windshield',
      'Install the passenger panel first, following the pre-shrunk shape',
      'Squeegee the passenger panel; work from the top center downward',
      'Apply slip solution to the driver side interior; install the driver panel',
      'The two panels should overlap slightly at center — trim both at once for a perfect seam',
      'Squeegee both panels; seam squeegee the center join with firm pressure',
      'Trim the bottom edge along the dashboard edge, leaving 1/16 inch gap',
      'Trim A-pillar edges; use the gasket as a guide',
      'Final hard-card squeegee pass over the entire interior surface',
      'Remove dashboard masking tape; wipe up any escaped solution',
    ],
    qc: [
      'Center seam is nearly invisible — aligned precisely and pressed down firmly',
      'No fingers, pleats, or film distortion on any area of the windshield',
      'A-pillar edges conform fully to the curved glass edge without lifting',
      'Dashboard edge trimmed cleanly — no film overlapping onto plastic trim',
      'Optical clarity is maintained — no distortion when viewed from driver position',
      'VLT is within legal specification for the jurisdiction',
    ],
    tips: 'The windshield is the most returned panel. Take extra time on the shrinking process and do not rush the seam. A perfectly executed center seam is nearly invisible after cure. An imperfect seam is always visible.',
    warnings: 'Never install any film (even very light VLT) on a windshield without confirming local legal VLT requirements. In most US states, windshield tint below the AS1 line must be a minimum of 70% VLT. Installing non-compliant film exposes the business to liability.',
    defects: [
      ['Center seam visible after cure', 'Panels trimmed with gap, or seam not pressed firmly', 'Lifting both edges and re-trimming to achieve tighter seam is difficult; usually requires re-do', 'Use overlap trim technique: lay both panels, trim through both simultaneously with one cut'],
      ['A-pillar bridging — film not conforming to corner', 'Insufficient shrinking at the A-pillar transition', 'Remove, re-shrink A-pillar zone aggressively, re-install', 'Shrink A-pillar corners last when film is already anchored at center'],
      ['Delamination at dashboard edge within first week', 'Film trimmed too close to dashboard heating vent', 'Re-trim and add edge sealant; reposition film away from vent', 'Identify dashboard vent locations before trimming; leave ½ inch clearance from active vents'],
      ['Driver-side optical distortion', 'Film over-stretched during shrinking in the driver sight line', 'Replacement required — optical distortion is a safety issue', 'Never stretch film; only shrink (push excess, do not pull film)'],
    ],
  },
  {
    name: 'Third-Row / Cargo Window (Van/SUV)',
    difficulty: '★★★☆☆ Intermediate',
    time: '25–45 min per panel',
    orientation: 'Interior application; may include hinged or pop-out glass',
    overview:
      'Vans and SUVs often have multiple fixed windows in the third-row and cargo areas. These are frequently large, flat to mildly curved panels. The primary challenges are accessing these glass sections from inside a vehicle with limited mobility and maintaining alignment on large panels without a helper. Cargo windows in vans are often hinged or sliding and require special attention during trim to prevent film from interfering with the opening mechanism.',
    prep: [
      'Identify all glass sections in the third-row and cargo area — count and plan the install sequence',
      'For hinged glass, open it to the full extent of its swing to access the interior surface',
      'Clean all glass sections thoroughly; cargo glass frequently has adhesive from shipping labels',
      'Measure each pane independently — these panels are often different sizes',
      'Cut film for each panel and label the cuts before beginning',
      'For hinged glass, determine whether to trim the film before or after closing the glass',
      'Plan a comfortable working position — use a folding step if necessary for high cargo windows',
    ],
    steps: [
      'Install the rearmost panels first and work toward the front',
      'Apply slip solution to the first glass section',
      'Peel liner and float film onto glass with ½ inch overhang on all sides',
      'Squeegee from center outward, working solution toward all edges simultaneously',
      'Trim to the glass perimeter; on hinged glass, trim with the glass open',
      'For hinged glass, trim the hinge side last — trim conservatively to avoid over-cutting',
      'Close the hinged glass and confirm film does not catch on the frame or seal',
      'Open and re-squeegee any edges that lifted during the closing test',
      'Repeat the procedure for each remaining glass section',
      'Final inspection: check all panels for matching shade, alignment, and edge quality',
    ],
    qc: [
      'All panels installed and matching shade across the cargo area',
      'Hinged and pop-out glass opens and closes freely with film installed',
      'No film contamination from cargo area dust during installation',
      'Edges trimmed cleanly with no lifted corners',
      'No large water pockets visible on any panel',
    ],
    tips: 'On bare cargo vans, the metal cargo walls often reflect dust onto the glass. Wet-mop the cargo floor and walls with a damp cloth before beginning to suppress airborne particles.',
    warnings: 'Do not install film on hinged emergency exit glass without confirming that the film does not impede the emergency release mechanism. Emergency exits must operate without restriction.',
    defects: [
      ['Film shade different from other rear panels', 'Incorrect film roll used for cargo section', 'Remove and re-install with matching film', 'Pre-cut all panels from the same roll batch before starting the vehicle'],
      ['Cargo area dust contamination on all panels', 'Airborne particles from unsealed cargo floor', 'Re-do all panels after wet-cleaning the cargo area', 'Always clean cargo surfaces before tinting; consider working with cargo door open for ventilation'],
      ['Film catching on hinged glass frame', 'Film trimmed to exact frame boundary — no clearance', 'Re-trim film ⅛ inch inside the frame boundary', 'Account for frame movement on hinged glass; trim with clearance'],
      ['Misaligned panel — visible at gap to adjacent panel', 'Film not centered during lay-down', 'Remove and re-lay with even overhang on all sides before squeegeeing', 'Always center film visually before the first squeegee pass'],
    ],
  },
  {
    name: 'Rear Windshield (Flat — Pickup Truck)',
    difficulty: '★★★☆☆ Intermediate',
    time: '30–50 min',
    orientation: 'Interior application; rear window is nearly flat on most pickup trucks',
    overview:
      'Pickup truck rear windows are among the most installer-friendly rear windows because they are generally flat or very gently curved, eliminating the need for heat shrinking. They often contain sliding mechanisms and defroster elements. The defroster grid and antenna elements must be respected during installation. Sliding rear windows require the film to be cut and installed on each moveable and fixed pane individually.',
    prep: [
      'Identify window type: fixed, sliding single pane, or three-section sliding',
      'For sliding windows, plan individual cuts for each pane section',
      'Clean interior glass in all positions — open sliding sections to access the full glass edge',
      'Scrape defroster-adjacent surfaces carefully — factory marks and glue accumulate here',
      'Trace or measure the defroster grid zone to plan squeegee direction during install',
      'Cut film to glass dimensions + ⅜ inch per side for each pane',
      'Confirm antenna element locations before planning film cuts',
    ],
    steps: [
      'Install fixed panes first (outermost sections on three-pane windows)',
      'Apply slip solution to the glass surface',
      'Float film onto glass with equal overhang; anchor with center squeegee pass',
      'Squeegee with horizontal strokes, parallel to the defroster lines — never vertical on this glass',
      'Use a hard card for high-pressure horizontal passes to fully seat film over the defroster grid',
      'Trim edges to the glass perimeter; on sliding sections, trim with the pane in the closed position',
      'Open the sliding pane and re-squeegee the edge near the slide channel',
      'Confirm the sliding mechanism operates freely with film installed',
      'For the sliding center pane, trim both vertical edges with the pane centered',
      'Test the full slide travel — film must not catch or bunch at any position',
      'Final squeegee pass on all panes; inspect with flashlight',
    ],
    qc: [
      'Defroster lines visible and undamaged through the film',
      'Sliding mechanism operates at full travel range without restriction',
      'All panes match shade; seams between panes are consistent in width',
      'Edges trimmed cleanly; defroster lines not cut by the blade',
      'No film contamination from cargo bed wind during install',
    ],
    tips: 'On rear windows with a sliding center pane, note whether the sliding pane overlaps the outer panes when open. Trim the outer pane film to account for this overlap zone — do not allow film from the outer pane to contact the back of the sliding pane.',
    warnings: 'Do not install film on a rear window with a cracked or damaged defroster grid line. Applying film over a damaged defroster creates a potential for electrical arcing when the defroster is energized. Advise the customer to repair the defroster before installation.',
    defects: [
      ['Film bunching when sliding pane is opened', 'Film from fixed pane extends into slide path', 'Re-trim fixed pane film to account for slide overlap zone', 'Test slide travel before final trim; mark trim line based on full-open position'],
      ['Defroster line appears raised or "wormy" under film', 'Squeegee pressure too high directly over defroster trace', 'Cannot reverse — inform customer; reduce pressure in future', 'Always squeegee parallel to defroster lines, not across them'],
      ['Antenna line broken by blade during trim', 'Trim cut crossed an antenna element', 'Antenna element is permanently severed; document and inform customer', 'Map antenna element paths before trimming; never cut across them'],
      ['Horizontal water line persisting after cure', 'Defroster grid raised surface created a water trap', 'Re-squeegee immediately after install while still wet, with firm pressure along the trace line', 'Pre-identify defroster trace height; use a rigid card and extra pressure over the grid zone'],
    ],
  },
  {
    name: 'Limousine / Stretch Vehicle Full Package',
    difficulty: '★★★★☆ Advanced',
    time: '4–8 hours full vehicle',
    orientation: 'Multiple panel types; coordinate film direction for all panels',
    overview:
      'Stretch limousines and custom-built vehicles present a unique set of challenges: a large number of glass panels, custom glass shapes with varying curves, and high customer expectations for a showroom-quality finish. The extended body section typically contains 4–8 side windows per side, one or two sunroofs, and a rear window with a complex shape. Organization, film batch consistency, and methodical sequencing are the keys to a successful limousine install.',
    prep: [
      'Photograph all glass panels before starting — document existing damage',
      'Count all glass sections and create a panel map on paper',
      'Verify that all film is from the same production batch — batch-matched VLT is critical for color uniformity',
      'Cut all panels from the same roll before starting any installation',
      'Label every cut panel with its position (e.g., LS-1 through LS-8 for the left side)',
      'Pre-clean all glass sections before touching any film',
      'Agree on VLT specification with the customer in writing before beginning',
      'Set up a clean staging area to lay out cut panels in order',
    ],
    steps: [
      'Work from the rear of the vehicle to the front on each side',
      'Install the rear window first, then the rear quarter glass, then side windows in order',
      'Install sunroofs before moving to side glass on the same side',
      'For each panel, follow the appropriate standard procedure based on glass type',
      'After each panel, complete a QC inspection before moving to the next',
      'Periodically step back and view installed panels together for shade consistency',
      'Complete one full side before beginning the other',
      'After completing both sides, install the front doors',
      'Install the front windshield visor strip last',
      'Conduct a full vehicle walkthrough QC before presenting the vehicle',
    ],
    qc: [
      'All panels are visually shade-matched from outside the vehicle in natural light',
      'No panel shows defects that would require re-do (a re-do at this stage is expensive)',
      'All glass rolls up and down freely; sunroofs open and close freely',
      'Film edges are consistent in reveal and trim quality across all panels',
      'Customer visible areas (rear passenger compartment windows) are perfect',
      'Documentation: before/after photos taken for each side of the vehicle',
    ],
    tips: 'On limousines, the bar area windows frequently have etched or sandblasted privacy glass. These panels cannot be tinted effectively with standard film — discuss alternatives with the customer before the appointment.',
    warnings: 'Stretch limousines often have non-standard electrical systems running through the body. Confirm the locations of any electrical components near glass before using heat guns near those areas.',
    defects: [
      ['Shade mismatch between panels from different positions on the roll', 'Film cut from edge of roll vs. center — density variation', 'Re-cut all panels from center of a new consistent roll', 'Always cut all panels consecutively from the same roll section; check first and last cut against light'],
      ['Customer complains one window looks darker', 'Interior lighting angle creating optical illusion of shade difference', 'View all windows from outside in identical lighting conditions', 'Conduct customer presentation walkthrough from outside the vehicle in consistent light'],
      ['Film delaminating within 30 days on custom glass', 'Custom glass may have surface coatings incompatible with standard film adhesive', 'Re-install with an adhesion-promoter primer on the glass', 'Always test a small section of custom glass 24 hours before full install'],
      ['Sunroof panel crinkled — high customer visibility', 'Film installed with body blocking proper overhead view', 'Re-install with proper access and lighting from outside', 'Use a step stool and work with the sunroof fully open; never rush the overhead panel'],
    ],
  },
  {
    name: 'Flat Architectural / Privacy Glass (Partition)',
    difficulty: '★★☆☆☆ Beginner',
    time: '15–30 min per pane',
    orientation: 'Interior flat application; no heat required',
    overview:
      'Some vehicles — particularly executive sedans, limousines, and specialty vehicles — include interior partition glass between the driver and passenger compartment. This glass is flat and presents no shrinking challenges. It is an excellent training panel and a high-margin add-on service. The primary concern is optical clarity, since customers view through this glass at close range.',
    prep: [
      'Identify the partition glass material — confirm it is glass, not polycarbonate (acrylic)',
      'Do not apply film designed for glass to polycarbonate — use film specified for polycarbonate',
      'Clean both sides of the partition thoroughly',
      'Measure and cut film to exact glass dimensions + ⅜ inch per side',
      'Inspect the glass for scratches — report any pre-existing scratches to the customer before proceeding',
    ],
    steps: [
      'Apply slip solution to the glass surface (interior-facing side)',
      'Float film onto the glass with equal overhang; center it visually',
      'Anchor with a center squeegee pass; work outward methodically',
      'Use a hard card for the final passes; maximum pressure for flat glass',
      'Trim all edges to the glass perimeter with a fresh blade',
      'Squeegee all trimmed edges; inspect for any lifting corners',
      'Wipe the opposite (exterior-facing) side of the glass clean — installation marks are common',
    ],
    qc: [
      'No contamination — this is a close-view, high-scrutiny surface',
      'Optical clarity maintained — no distortion when viewed at normal partition distance',
      'Edges trimmed cleanly with no jagged cuts',
      'No lifting edges after 10-minute dwell time',
    ],
    tips: 'Partition glass is often acrylic. When in doubt, test with a drop of solvent — acrylic will etch immediately, glass will not. Always confirm the substrate before applying film.',
    warnings: 'Film adhesive designed for glass glass will not bond properly to polycarbonate or acrylic. Using glass film on plastic partition panels will result in premature lifting and customer complaints. Use only substrate-appropriate film.',
    defects: [
      ['Film peeling from surface within days of install', 'Polycarbonate substrate — glass film used instead of polycarbonate film', 'Remove glass film; install polycarbonate-rated film', 'Always test substrate with solvent before installing; use appropriate film specification'],
      ['Optical distortion visible at eye level', 'Trapped air pocket or debris in the sight line zone', 'Re-do the panel; flat glass should be bubble-free immediately', 'Flat glass requires perfect installation; no residual bubbles should remain'],
      ['Blade scratch on glass surface during trim', 'Excessive blade angle or debris under blade during cut', 'Polishing compound on minor scratches; document major scratches', 'Inspect blade before use; sweep loose particles off glass before trimming'],
      ['Film lifting at one corner after 1 week', 'Corner not fully squeegeed during final hard-card pass', 'Re-squeegee the corner while still pliable (within 30 days)', 'Final pass must include firm corner-to-corner squeegee on all four corners'],
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CHAPTER CONTENT BUILDERS
// ─────────────────────────────────────────────────────────────────────────────

function ch01_introduction() {
  return [
    h2('Welcome to Professional Window Tinting'),
    p('Window tinting is one of the most accessible and rewarding services in the automotive finishing industry. With the right training, tools, and discipline, an installer can consistently produce work that protects vehicles, improves occupant comfort, and generates strong revenue for the shop. This manual exists to give you the complete technical foundation — from understanding the physics of solar energy to executing a flawless rear-window shrink on the most difficult glass shapes on the market.'),
    p('This manual is the companion reference for the CORE Workbooks master tint training program. It is organized to support both classroom learning and in-bay reference use. The panel procedures section is designed to be placed in a binder at your workstation and consulted during live installations until the steps become second nature.'),
    callout('tip', 'Experienced tinters use this manual not as a substitute for practice, but as a framework for building consistent habits. The difference between an average installer and a master installer is not talent — it is consistent attention to every step of every procedure on every vehicle.'),
    h3('What This Manual Covers'),
    checklist([
      'Film science — construction, types, properties, and performance grades',
      'Legal compliance — VLT laws, certification, and documentation',
      'Tools and their correct use — every tool in the professional kit',
      'Slip solution chemistry and mixing standards',
      'Vehicle intake and glass assessment protocols',
      'Glass preparation and contamination control',
      'Flat glass installation techniques',
      'Door glass (rolled-down method and full-panel lay-in)',
      'Quarter window installation',
      'Curved rear window — shrinking theory and master procedure',
      'Sunroof and panoramic glass',
      'Defroster and antenna line management',
      'Dot matrix and frit zone techniques',
      'Quality control and inspection standards',
      'Curing requirements and aftercare guidance',
      'Pricing models and service tiers',
      'Troubleshooting — 30+ common defects with root-cause analysis',
      'Master panel procedures for 12 distinct glass types',
      'Appendices — reference tables, laws, and checklists',
    ]),
    h3('How to Use This Manual'),
    p('Chapters 1–8 build the foundational knowledge required before touching film. Chapters 9–17 cover hands-on installation techniques by glass type. Chapters 18–23 address business operations, troubleshooting, and reference material. The panel procedures at the end of this manual are self-contained reference cards for each glass type.'),
    callout('', 'This manual assumes no prior tinting experience. If you are an experienced installer refreshing your skills or training a new employee, use the table of contents to navigate directly to the sections most relevant to your needs.'),
    h3('A Word on Professional Standards'),
    p('The standards described in this manual represent best practices for a professional installation. They are not minimum acceptable standards — they are the target. Every shortcut taken during installation increases the probability of a defect, a re-do, or a dissatisfied customer. A re-do costs more in materials and labor than doing the job right the first time. A dissatisfied customer costs more still in lost referrals and reputation damage.'),
    p('Commit to the standard on every vehicle, regardless of vehicle age, customer budget, or how busy the shop is on a given day.'),
  ].join('');
}

function ch02_filmTypes() {
  return [
    h2('Film Types, Construction, and Performance'),
    p('Modern automotive window film is an engineered composite material. Understanding how film is constructed — and why different construction methods produce different results — is essential for selecting the right product for each customer and for explaining those differences in terms customers understand.'),
    h3('Film Construction — Layers and Their Functions'),
    p('All automotive window films share a common layered structure, though the specific materials and thicknesses vary by product tier.'),
    table(
      ['Layer', 'Material', 'Function'],
      [
        ['Scratch-resistant coating', 'Hardened polyester or silica', 'Protects the film surface from abrasion and cleaning marks'],
        ['Polyester carrier film', 'Biaxially oriented PET', 'The structural backbone of the film; provides dimensional stability'],
        ['Performance layer', 'Dye, metal, carbon, or ceramic', 'Delivers solar rejection, heat blocking, and visible light control'],
        ['Adhesive layer', 'Pressure-sensitive acrylic', 'Bonds the film to the glass surface; determines clarity and longevity'],
        ['Release liner', 'Silicone-coated PET', 'Protects adhesive before installation; removed during application'],
      ]
    ),
    h3('Dyed Film'),
    p('Dyed film is the entry-level product in the window film category. The colorant is embedded in the polyester carrier layer and provides visible light reduction without meaningful heat rejection.'),
    specTable([
      ['Solar Heat Rejection', '5–15%', 'Limited heat rejection — provides privacy and glare reduction'],
      ['UV Rejection', '99%', 'All film grades block nearly all UV regardless of construction'],
      ['IR Rejection', 'Minimal', 'No meaningful infrared blocking'],
      ['Lifespan', '3–5 years', 'Dye migrates over time, causing color fade and purple shift'],
      ['Typical VLT Range', '5–70%', 'Available in a wide shade range'],
      ['Signal Interference', 'None', 'Dyed film does not affect electronics or wireless signals'],
    ]),
    callout('warning', 'Dyed film fades over time, often turning purple or brown. This is a known limitation of the product. Always disclose this to customers and offer a warranty explanation that addresses fade. Never position dyed film as a heat-rejection product.'),
    h3('Metalized Film'),
    p('Metalized film incorporates a thin layer of vapor-deposited metal (typically aluminum) into the film structure. The metal layer reflects solar energy, providing significantly better heat rejection than dyed film and a more stable color over time.'),
    specTable([
      ['Solar Heat Rejection', '35–50%', 'Metal reflection provides meaningful heat rejection'],
      ['UV Rejection', '99%', 'Metal layer also blocks UV effectively'],
      ['IR Rejection', '20–40%', 'Partial infrared blocking'],
      ['Lifespan', '7–10 years', 'Metal layer is stable; does not fade like dye'],
      ['Typical VLT Range', '5–70%', 'Available in standard shade range'],
      ['Signal Interference', 'Moderate to High', 'Metal layer attenuates cell phone, GPS, and satellite signals'],
    ]),
    callout('warning', 'Metalized film can significantly degrade or block GPS, cellular, satellite radio, and toll collection signals. Always inform customers with vehicles that rely on these systems. For connected vehicles with roof-mounted GPS antennas, metallic film may impair navigation accuracy.'),
    h3('Carbon Film'),
    p('Carbon film uses carbon particles as the active layer, providing excellent heat rejection, a stable dark appearance, and no electromagnetic signal interference. It is the most popular mid-tier product for customers seeking performance without signal compromise.'),
    specTable([
      ['Solar Heat Rejection', '40–60%', 'Carbon particle absorption provides strong heat rejection'],
      ['UV Rejection', '99%', 'Consistent across all carbon constructions'],
      ['IR Rejection', '40–60%', 'Better infrared rejection than metalized film'],
      ['Lifespan', '10+ years', 'Carbon is chemically stable — no fading or color shift'],
      ['Typical VLT Range', '5–70%', 'Available in full shade range'],
      ['Signal Interference', 'None', 'Non-metallic — zero impact on electronics or wireless signals'],
    ]),
    h3('Ceramic Film'),
    p('Ceramic film is the premium tier, utilizing nano-ceramic particles that are transparent to visible light but opaque to infrared radiation. The result is unmatched heat rejection even in high-VLT (lighter) shades, combined with clarity and signal transparency. Ceramic film is the appropriate recommendation for any customer prioritizing performance and longevity.'),
    specTable([
      ['Solar Heat Rejection', '60–80%', 'Best available heat rejection without affecting VLT'],
      ['UV Rejection', '99%', 'Ceramic excels at UV protection'],
      ['IR Rejection', '80–99%', 'Industry-leading infrared blocking across all ceramic products'],
      ['Lifespan', '15+ years', 'Nano-ceramic particles are extremely chemically stable'],
      ['Typical VLT Range', '15–90%', 'Available in very light shades with full heat rejection benefit'],
      ['Signal Interference', 'None', 'Ceramic is fully transparent to radio frequencies'],
    ]),
    callout('tip', 'Ceramic film can be installed at a 70% VLT on the front windshield and still deliver significant heat rejection. This is a compelling selling point for customers in hot climates who want legal front glass while still gaining comfort improvement.'),
    h3('Hybrid and Specialty Films'),
    p('Hybrid films combine two or more of the above constructions — for example, carbon-metalized or ceramic-dyed hybrids — to achieve specific price/performance profiles. Specialty films include security/safety film (thicker, shatter-resistant), privacy frosted films, and photochromic films that darken in response to UV exposure.'),
    table(
      ['Film Type', 'Heat Rejection', 'Signal Safe', 'Fade Resistance', 'Price Tier'],
      [
        ['Dyed', 'Low', 'Yes', 'Low', 'Economy'],
        ['Metalized', 'Moderate', 'No', 'High', 'Mid'],
        ['Carbon', 'Good', 'Yes', 'High', 'Mid-Premium'],
        ['Ceramic', 'Excellent', 'Yes', 'Excellent', 'Premium'],
        ['Security/Safety', 'Low-Moderate', 'Yes', 'High', 'Specialty'],
        ['Photochromic', 'Variable', 'Yes', 'Moderate', 'Specialty'],
      ]
    ),
    h3('Reading Film Specifications'),
    p('Film manufacturers publish specification sheets for every product. Learning to read these is essential for accurate product selection and customer communication. Key values to understand:'),
    checklist([
      'VLT — Visible Light Transmission: percentage of visible light that passes through the film',
      'VLR — Visible Light Reflectance: percentage of visible light reflected by the film',
      'TSER — Total Solar Energy Rejected: percentage of all solar energy blocked',
      'IRR — Infrared Rejection: percentage of infrared (heat) energy blocked',
      'UVR — Ultraviolet Rejection: percentage of UV radiation blocked',
      'Luminous Efficacy: ratio of VLT to TSER — higher values mean better heat rejection per unit of darkness',
    ]),
  ].join('');
}

function ch03_vltAndLaws() {
  return [
    h2('VLT Regulations, Legal Compliance, and Documentation'),
    p('Visible Light Transmission (VLT) laws govern how dark window tint can legally be on each glass surface of a vehicle. These laws vary by state, country, and in some cases by vehicle type. Violating VLT laws exposes both the customer and the installation shop to legal liability, fines, and vehicle inspection failures.'),
    callout('warning', 'It is the installer\'s professional obligation to know the VLT laws for every jurisdiction in which the shop operates. When a customer requests a shade that would violate local law, the shop must inform the customer and decline the work or document a written customer acceptance of non-compliant installation. Under no circumstances should non-compliant work be performed without explicit written documentation.'),
    h3('VLT Measurement Fundamentals'),
    p('VLT is measured as a percentage of visible light passing through a material. A completely clear window has a VLT of approximately 90–92% (the glass itself absorbs a small amount). The VLT of a tinted window is the product of the glass VLT and the film VLT.'),
    procedure('Calculating Combined VLT', [
      'Obtain the glass VLT from the vehicle manufacturer\'s specifications or measure with a VLT meter',
      'Obtain the film VLT from the film manufacturer\'s specification sheet',
      'Multiply: Combined VLT = Glass VLT × Film VLT (expressed as decimals)',
      'Example: 90% glass × 50% film = 0.90 × 0.50 = 0.45 = 45% combined VLT',
      'Confirm the combined VLT meets local legal requirements before proceeding',
      'Document the calculation in the customer work order',
    ]),
    h3('General VLT Law Framework'),
    p('While every jurisdiction defines its own rules, most share a similar structure. The following represents the general pattern — always verify current local law before installation.'),
    table(
      ['Glass Surface', 'Typical Minimum VLT', 'Common Exceptions'],
      [
        ['Front windshield (above AS1 line)', '70%+', 'Some states allow clear UV-only film on full windshield'],
        ['Front windshield visor strip', '70%+ or AS1 line limit', 'Many states allow a visor strip down to the AS1 line regardless of VLT'],
        ['Front side windows (driver/passenger)', '35–70%', 'Varies widely by state; some require no tint at all on front doors'],
        ['Rear side windows', '20–35%', 'Most states are more permissive on rear glass'],
        ['Rear windshield', '20–35%', 'Typically same as rear side windows'],
        ['Dual outside mirrors required if', 'Rear glass tinted below certain VLT', 'Several states require functioning outside mirrors'],
      ]
    ),
    h3('Medical Exemptions'),
    p('Most jurisdictions provide a medical exemption process that allows individuals with qualifying conditions (photosensitivity, lupus, melanoma history, xeroderma pigmentosum, etc.) to install film that does not comply with standard VLT requirements. The installer must obtain and retain a copy of the exemption documentation on file and attach the appropriate window exemption certificate to the vehicle.'),
    checklist([
      'Obtain the signed medical exemption certificate from the customer before beginning',
      'Verify the certificate meets the jurisdiction\'s requirements (signed by licensed physician, dated within requirement period)',
      'Retain a copy of the certificate in the shop file',
      'Provide the customer with the required window exemption sticker or card for display',
      'Note the exemption on the work order with customer acknowledgment',
      'Do not proceed with non-compliant work if exemption documentation cannot be produced',
    ]),
    h3('Reflectivity Laws'),
    p('Many jurisdictions regulate visible light reflectance (VLR) as well as VLT. Highly reflective film (mirror-like appearance) is often prohibited or limited to 20–35% VLR. Confirm that any metalized or reflective film chosen for a vehicle meets local VLR limits.'),
    h3('Vehicle Type Distinctions'),
    p('Commercial vehicles, multi-purpose vehicles, and limousines often have different legal frameworks than standard passenger cars. Some jurisdictions exempt SUVs, vans, and trucks from front window regulations. Law enforcement vehicles and emergency vehicles have their own distinct regulations. When in doubt, consult local authorities or a legal resource.'),
    h3('Documentation Standard'),
    procedure('Creating a Compliant Work Order', [
      'Record the customer name, vehicle make, model, year, and VIN',
      'Document each glass section to be tinted, the film shade (VLT%) selected, and the combined glass+film VLT calculation',
      'Confirm each section meets local VLT requirements or note exemption documentation number',
      'Have the customer sign the work order acknowledging the film selection and VLT values',
      'Retain a copy in the shop records for a minimum of 3 years',
      'Provide the customer with an installation receipt that includes the film type, shade, and installation date',
    ]),
    callout('tip', 'A VLT meter (tint meter) is a required tool for any professional shop. Use it to measure the combined VLT of every vehicle before releasing it to the customer. Some customers have had non-compliant tint installed by other shops. Confirm compliance is your responsibility, not just a sales courtesy.'),
  ].join('');
}

function ch04_tools() {
  return [
    h2('Tools of the Trade — Professional Tinting Kit'),
    p('Professional window tinting requires a specific set of tools. Using the correct tool for each task is not optional — the wrong tool causes defects, film damage, or injury. This chapter covers every tool in the professional kit, its purpose, and correct use.'),
    h3('Cutting Tools'),
    table(
      ['Tool', 'Use Case', 'Key Specification'],
      [
        ['Single-bevel razor blade (1")', 'Trimming film edges against glass', 'Replace after 2–3 cuts; never use a dull blade'],
        ['Curved-tip knife', 'Trimming curved corners and arcs', 'Use dedicated curved blade for smooth arcs'],
        ['Straight olfa-style snap knife', 'Cutting film on a cutting surface before installation', 'Snap a fresh segment for each major cut session'],
        ['Rigid straight edge (24")', 'Guiding straight cuts on the cutting surface', 'Must be at least 2 mm thick to prevent blade ride-up'],
        ['Flexible trim guide', 'Following curved gasket edges during in-situ trimming', 'Guides blade along glass edge without contacting paint'],
        ['Precision detail knife (fine point)', 'Trimming very small sections and notches around mirrors or handles', 'Must be extremely sharp — replace frequently'],
      ]
    ),
    h3('Squeegees and Application Cards'),
    table(
      ['Tool', 'Hardness', 'Best Use'],
      [
        ['Soft rubber squeegee (wide)', 'Shore 40–55', 'Initial film placement and large surface water removal'],
        ['Medium card squeegee', 'Shore 60–70', 'General squeegeeing on most glass surfaces'],
        ['Hard card squeegee', 'Shore 80–90', 'Final high-pressure passes; maximum water and bubble removal'],
        ['Detail card (flexible)', 'Shore 50–60', 'Edges, corners, and tight gasket channels'],
        ['Teflon card', 'Shore 70–80', 'Dry squeegee; excellent for gasket edges without solution'],
        ['Turbo squeegee (slotted)', 'Shore 60–70', 'Large flat surfaces; slots allow faster water removal'],
      ]
    ),
    callout('tip', 'Build a squeegee progression habit: always start with the softest tool to place and set the film, then progress to harder tools for each subsequent pass. Using a hard card too early tears or stretches newly placed film.'),
    h3('Heat Tools'),
    table(
      ['Tool', 'Power Range', 'Use Case'],
      [
        ['Variable-temperature heat gun', '400–1200°F settable', 'Shrinking curved rear windows and complex panels; primary heat tool'],
        ['IR heat lamp', 'Variable radiant output', 'Gentle ambient heating of glass and film in cold environments'],
        ['Steamer', 'Steam output; 200–212°F', 'Softening film for removal; also used for light shrinking by some installers'],
      ]
    ),
    h3('Cleaning and Preparation Tools'),
    table(
      ['Tool', 'Use Case', 'Notes'],
      [
        ['Razor blade scraper (6")', 'Removing adhesive residue, stickers, old film glue', 'Use with glass cleaner; never dry scrape'],
        ['Lint-free microfiber cloth', 'Final glass wiping before installation', 'Machine-wash regularly; discard when visibly worn'],
        ['Rubber squeegee (dry)', 'Drying glass after cleaning', 'Keep separate from installation squeegees to avoid cross-contamination'],
        ['Spray bottles (multiple)', 'Slip solution delivery to glass and film adhesive', 'Label clearly: one for glass, one for film'],
        ['Detailing brush (soft)', 'Cleaning gasket channels and corners before installation', 'Do not use on glass surface — too abrasive'],
        ['Isopropyl alcohol (70%)', 'Final edge cleaning and adhesive residue removal', 'Use sparingly — excess IPA can affect some adhesive formulations'],
      ]
    ),
    h3('Measuring and Layout Tools'),
    checklist([
      'Steel tape measure (25 ft) — for measuring glass dimensions before cutting film',
      'Digital VLT meter — for confirming combined VLT compliance before vehicle release',
      'Pattern reference book or digital pattern library (vehicle-specific pre-cut patterns)',
      'Pencil or wax marker — for marking film cuts on the liner side',
      'Flexible measuring tape — for following glass curves when measuring',
      'Level — for checking horizontal alignment of visor strips',
    ]),
    h3('Personal Protective Equipment'),
    checklist([
      'Nitrile gloves — prevent skin oils from contaminating film adhesive',
      'Safety glasses — when using heat gun near glass edges; glass fragments are a hazard',
      'Steel-toe boots — protect feet from dropped tools and glass drops',
      'Clean work apron or shop coat — prevents clothing fibers from contaminating installation',
      'N95 dust mask — when working in dusty environments or with old adhesive removal',
    ]),
    h3('Workstation Requirements'),
    p('The installation environment is as important as the tools. A professional tint bay maintains conditions that support clean, controlled installations.'),
    specTable([
      ['Temperature', '65–80°F (18–27°C)', 'Film adhesive performs poorly outside this range'],
      ['Humidity', '40–60% RH', 'Low humidity = static; high humidity = extended dry times'],
      ['Lighting', 'Bright, directional task lighting', 'Overhead and side lighting to reveal bubbles and contamination'],
      ['Airflow', 'Positive pressure with filtration', 'Prevents dust from entering the bay during open-film installation'],
      ['Flooring', 'Non-porous, wet-cleanable', 'Carpet releases fibers into the air that contaminate installations'],
      ['Film storage', 'Cool, dry, horizontal storage', 'Film rolls stored vertically develop edge curl; heat causes liner adhesion'],
    ]),
  ].join('');
}

function ch05_slipSolution() {
  return [
    h2('Slip Solution — Chemistry, Mixing, and Use'),
    p('Slip solution is the liquid medium that allows the tint installer to float and position window film on the glass surface before the adhesive sets. Understanding slip solution chemistry — what is in it, why it works, and how concentration affects behavior — is essential for producing consistent results across different film types, glass conditions, and environmental temperatures.'),
    h3('What Slip Solution Does'),
    p('Pressure-sensitive acrylic adhesive (used on virtually all window films) bonds to glass when water is displaced from between the film and the glass surface. Slip solution slows this process by keeping a thin layer of water between the adhesive and the glass for several minutes. This window of time is called the working time or open time.'),
    p('During working time, the installer can slide the film to its final position, squeegee out solution, and correct minor alignment errors. Once the solution is squeegeed out and the glass and adhesive are in direct contact, the adhesive begins to bond. The bond strengthens over the following days as remaining moisture evaporates — this is the curing period.'),
    h3('Standard Slip Solution Formula'),
    procedure('Mixing Standard Slip Solution', [
      'Start with 32 oz (1 liter) of clean water — ideally filtered or deionized to prevent mineral deposits',
      'Add 4–6 drops of unscented, clear baby shampoo or a concentrated surfactant solution',
      'Alternatively: add 1 oz of pre-formulated film application solution concentrate per 32 oz water',
      'Cap the bottle and invert gently 3–4 times to mix — do not shake vigorously (creates foam)',
      'Test by spraying on a piece of glass — the liquid should sheet evenly without beading',
      'If the solution beads, add another drop of surfactant and re-test',
      'Label the bottle with the mix date; replace solution after 48 hours to prevent bacterial growth',
    ]),
    callout('warning', 'Do not use fragranced, lotion-enriched, or antibacterial soaps as surfactants. These formulations leave residues that interfere with adhesive bonding and cause long-term adhesion failure. Use only unscented, clear surfactant with no additives.'),
    h3('Adjusting Working Time'),
    p('Standard slip solution provides approximately 3–5 minutes of working time at 70°F. In hot environments, working time decreases. In cold environments, it increases. You can modify the formula to adjust working time:'),
    table(
      ['Condition', 'Adjustment', 'Result'],
      [
        ['Hot bay (>80°F)', 'Increase surfactant slightly or add 10% more water', 'Extends working time by 1–2 minutes'],
        ['Cold bay (<65°F)', 'Reduce surfactant slightly', 'Prevents film from floating too long and absorbing excess solution'],
        ['Large, complex panel (rear window)', 'Increase surfactant for longer positioning window', 'Gives more time to position pre-shrunk film before adhesion begins'],
        ['Small, simple panel (quarter glass)', 'Standard formula is sufficient', 'No adjustment needed'],
        ['High-humidity environment', 'Reduce surfactant slightly', 'High ambient moisture already slows adhesion'],
      ]
    ),
    h3('Applying Slip Solution Correctly'),
    p('Application technique affects how evenly the solution covers the glass and how cleanly it channels out during squeegeeing.'),
    checklist([
      'Hold the spray bottle 6–8 inches from the glass surface',
      'Apply in an overlapping S-pattern to cover the full glass area',
      'The glass surface should be wet everywhere — no dry spots',
      'Do not over-saturate — excess solution increases squeegee time and can run under door panels',
      'Mist the adhesive side of the film as you peel the liner — this prevents the adhesive from touching a dry surface during placement',
      'After placing the film, squeegee from center outward immediately — do not allow solution to dwell under the film unnecessarily',
    ]),
    h3('Water Quality and Contamination'),
    p('Tap water quality varies dramatically by location. Hard water contains dissolved minerals (calcium, magnesium) that leave white residue when water evaporates. This residue appears as spots under the film and interferes with adhesive bonding. For best results, use filtered or deionized water for slip solution.'),
    callout('tip', 'If you are working in an area with very hard water and cannot use filtered water, mix your solution fresh and work quickly. Hard water deposits form when water evaporates — minimizing evaporation time between mixing and use reduces spot formation.'),
  ].join('');
}

function ch06_heatGuns() {
  return [
    h2('Heat Guns — Theory, Setup, and Technique'),
    p('The heat gun is the most powerful and most dangerous tool in the tinting kit. Misused, it burns film, shatters cold glass, and creates optical distortions that cannot be corrected. Mastered, it allows the installer to reshape film to match any curved glass surface — the fundamental skill that separates competent installers from masters.'),
    h3('How Heat Affects Polyester Film'),
    p('Window film is made from biaxially oriented polyester (PET) — a material that was stretched in both directions during manufacture to align the polymer chains. This orientation gives the film its dimensional stability. When you apply heat, you temporarily disrupt this molecular orientation, allowing the film to relax and be reshaped. When it cools, it retains its new shape.'),
    p('This is the scientific basis of heat shrinking: you use heat to relax the film, then push the excess material into a new orientation (gathered toward the top of the glass), then allow it to cool and retain that shape. If you apply too much heat, the polyester chains denature permanently — creating an irreversible haze, silvering effect, or thinning of the film.'),
    h3('Heat Gun Settings by Task'),
    table(
      ['Task', 'Temperature Setting', 'Distance from Film', 'Motion'],
      [
        ['Warming film before working', 'Low (300–400°F)', '6–8 inches', 'Broad sweeping passes'],
        ['Shrinking rear window fingers', 'Medium (500–650°F)', '4–6 inches', 'Constant circular or sweeping motion'],
        ['Shrinking tight A-pillar curves', 'Medium-high (650–750°F)', '3–5 inches', 'Small rapid circles'],
        ['Removing old film (steaming)', '750–900°F', '2–4 inches', 'Slow linear passes; lift film immediately behind gun'],
        ['Activating adhesive at edges (rare)', 'Low (300–350°F)', '6–8 inches', 'Single slow pass; do not hold in one spot'],
      ]
    ),
    callout('warning', 'Never aim a heat gun at tinted glass without film on the surface. Rapid temperature differentials between the film zone and the surrounding glass can cause thermal stress fractures, especially in tempered glass with pre-existing chips or stress risers.'),
    h3('Heat Gun Motion Techniques'),
    p('The motion of the heat gun during shrinking is as important as the temperature setting. The gun must always be moving — a stationary gun creates a hot spot that burns the film and creates permanent optical damage.'),
    procedure('Standard Sweeping Motion for Shrinking', [
      'Hold the heat gun in your dominant hand; have a squeegee or soft card in your other hand',
      'Begin with the gun on one side of the excess material (finger/pleat)',
      'Move the gun in a steady left-right sweeping arc, 4–6 inches above the film surface',
      'Maintain consistent speed — about 4 inches per second laterally',
      'When you feel the film begin to soften (slight loss of stiffness), transition to the push',
      'With the squeegee or finger, gently push the warm excess film toward the top of the glass',
      'Do not stop moving the gun during the push — keep the nearby film warm and pliable',
      'After each push, squeegee the area you just corrected to lock the film in its new shape',
      'Repeat in sections, working from the center of the glass to the edges',
    ]),
    h3('Reading the Film During Shrinking'),
    p('An experienced installer reads the film\'s behavior to understand whether the heat and technique are correct:'),
    table(
      ['What You See', 'What It Means', 'Adjustment'],
      [
        ['Film surface looks slightly glossy and flexible', 'Film is at the correct working temperature', 'Begin pushing the excess material — correct technique'],
        ['Film surface appears matte/flat (unchanged)', 'Film is still cold; not yet pliable', 'Increase heat or slow down the sweeping pass'],
        ['Small silver/white spots appear', 'Overheated — polyester beginning to denature', 'Move gun away immediately; this area may still recover if caught early'],
        ['Obvious silvery sheen across an area', 'Burned — permanent damage', 'This section of film must be replaced; the damage is irreversible'],
        ['Film sticking to itself (adhering back to liner)', 'Film temperature too high; adhesive softening', 'Reduce heat; increase distance from glass surface'],
      ]
    ),
    callout('tip', 'Practice your heat gun technique on scrap film laid over a curved object (a car door, a trash can, a spare windshield) before using it on a customer vehicle. Develop the habit of constant movement before you ever apply the tool to a real installation.'),
  ].join('');
}

function ch07_safety() {
  return [
    h2('Safety Protocols and Shop Hazard Management'),
    p('Window tinting involves glass, sharp blades, high-temperature tools, and chemicals. A professional shop maintains explicit safety protocols that protect installers, customers, and the business.'),
    h3('Blade Safety'),
    p('Single-bevel razor blades are responsible for the majority of hand injuries in the tinting industry. The following protocol must be followed without exception.'),
    procedure('Safe Blade Handling Protocol', [
      'Always carry blades in a dedicated blade holder or protective sleeve — never loose in a pocket',
      'When mounting a blade in a holder, hold the blade by the short edge and engage the slot from the side — never push the cutting edge toward your fingers',
      'Change blades with the blade holder pointed away from your body and away from other personnel',
      'Dispose of used blades in a puncture-resistant sharps container — never in an open trash bin',
      'When trimming film, keep your non-dominant hand on the squeegee or behind the cutting direction — never in front of the blade path',
      'If a blade falls, do not attempt to catch it — let it fall and pick it up from the floor',
    ]),
    callout('warning', 'Most tinting blade injuries happen during blade changes and when cutting with a dull blade (which requires more pressure and is more prone to slipping). Change blades frequently and never apply excessive pressure to a blade — if you need to push hard, the blade is dull.'),
    h3('Heat Gun Safety'),
    checklist([
      'Allow the heat gun to reach operating temperature fully before aiming at film or glass (30 seconds)',
      'Never set a hot heat gun down on a work surface — use the supplied stand or hang it from a hook',
      'Keep the gun cord clear of the work area to prevent tripping',
      'Allow the heat gun to cool for 3–5 minutes before storing in a case',
      'Inspect the gun cord monthly for heat damage, fraying, or insulation cracks',
      'Never use a heat gun near aerosol sprays or flammable cleaning agents',
      'Keep a minimum of 24 inches between an operating heat gun and spray bottles',
    ]),
    h3('Chemical Safety'),
    p('Slip solution surfactants and glass cleaning agents are generally low-hazard, but some products used in tinting (adhesive removers, IPA, ammonia-free cleaners) require attention.'),
    checklist([
      'Read and retain the Safety Data Sheet (SDS) for every chemical product used in the shop',
      'Store chemicals in their original labeled containers — never decant into unlabeled bottles',
      'Keep IPA and other flammable solvents away from heat sources and open flames',
      'Ensure the bay has adequate ventilation when using adhesive removers or solvents',
      'Nitrile gloves are required when handling adhesive removers and concentrated surfactants',
      'First aid kit with eye wash station must be accessible in the bay at all times',
    ]),
    h3('Glass Hazard Protocol'),
    p('Window glass that breaks during or after installation is a significant hazard. Understand the difference between glass types:'),
    table(
      ['Glass Type', 'Break Behavior', 'Hazard Level', 'Installer Action'],
      [
        ['Tempered', 'Shatters into small pebbles', 'Moderate — particles cause cuts', 'Wear safety glasses; sweep thoroughly after breakage'],
        ['Laminated (windshield)', 'Cracks but stays in frame (plastic interlayer)', 'Low — fragments stay bonded', 'Stop work; advise customer to replace windshield before tinting'],
        ['Annealed (older vehicles)', 'Large sharp shards', 'High — severe laceration risk', 'Wear full safety glasses; clear area before attempting to remove'],
      ]
    ),
    h3('Ergonomics and Physical Injury Prevention'),
    p('Tinting is physically demanding — extended overhead work, sustained squeegeeing, and bending into vehicle interiors are common causes of repetitive strain injuries.'),
    checklist([
      'Use a properly sized step stool for all sunroof and windshield work — do not overreach from an unstable position',
      'Take a 5-minute break after every 45 minutes of sustained squeegeeing to rest the wrist and forearm',
      'Rotate squeegee hand technique (overhand/underhand) to alternate muscle groups',
      'Use knee pads when working on low glass (rear quarter windows in sedans)',
      'Maintain a vehicle bay layout that minimizes unnecessary walking distances to reduce fatigue',
      'Lift film rolls correctly — from the sides, not by the center core which can cause the roll to shift',
    ]),
  ].join('');
}

function ch08_vehicleIntake() {
  return [
    h2('Vehicle Intake and Pre-Installation Assessment'),
    p('The vehicle intake process occurs before any film is cut or tool is picked up. A thorough intake protects the customer\'s vehicle, protects the shop from liability, and sets realistic expectations for the installation outcome. Skipping or rushing intake is one of the most common causes of disputes between customers and tinting shops.'),
    h3('Intake Walkthrough Protocol'),
    procedure('Vehicle Intake Procedure', [
      'Greet the customer and confirm the service ordered — tint specification, glass sections, and any special instructions',
      'Walk around the vehicle together with the customer in natural light',
      'Document all pre-existing damage: chips, cracks, scratches, previous tint quality, adhesive residue',
      'Photograph all pre-existing damage with the vehicle and date stamp visible in the photos',
      'Inspect all glass sections for defroster damage, antenna lines, chips, and cracks',
      'Confirm whether any glass has been previously tinted — document the approximate shade',
      'Test all power windows to confirm they roll up and down without binding',
      'Test the defroster on rear windows — confirm all lines are functional before tinting',
      'Ask the customer about any known glass issues: leaks, rattles, seal problems',
      'Review the work order with the customer and obtain a signed authorization before starting',
    ]),
    h3('Documentation Checklist'),
    checklist([
      'Customer name, contact, and vehicle info (year, make, model, VIN)',
      'Signed work order with agreed service and VLT specification',
      'Film shade and type for each glass section documented',
      'Combined VLT calculation for each section confirmed compliant (or exemption documented)',
      'All pre-existing damage photographed and noted on the work order',
      'Customer acknowledgment of pre-existing damage',
      'Estimated completion time provided',
      'After-care instructions and curing period disclosed to customer before installation',
    ]),
    h3('Glass Assessment — What to Look For'),
    table(
      ['Condition', 'Impact on Installation', 'Recommended Action'],
      [
        ['Active crack in any glass', 'Film cannot bridge a crack; crack will spread with temperature cycling', 'Do not tint; require glass replacement first'],
        ['Small chip (< ¼ inch) in non-critical area', 'Risk of crack spreading when glass is heated', 'Advise customer of risk; document; proceed only with written customer acceptance'],
        ['Hard water mineral deposits', 'White spots under film; adhesion failure in mineral areas', 'Treat with mineral deposit remover before installation; re-test adhesion'],
        ['Previous tint — good condition', 'Can tint over in some cases; combined VLT must be calculated', 'Measure current VLT; advise customer if combined VLT would be non-compliant'],
        ['Previous tint — failing (bubbling, peeling)', 'Film will not bond over a failing substrate', 'Require removal of old film before installation'],
        ['Factory privacy glass', 'Very dark glass; adding film may result in non-compliant combined VLT', 'Measure VLT; advise customer on shade selection'],
        ['Defroster line broken', 'Defroster will not function; may appear to be a film defect', 'Document pre-existing damage; offer defroster repair referral'],
        ['Coated or acoustic glass', 'Some coatings are incompatible with standard film adhesive', 'Test adhesion in a small corner before full installation; use adhesion-tested film product'],
      ]
    ),
    callout('tip', 'The intake conversation sets the tone for the entire customer relationship. A thorough, transparent intake builds trust — even if the installer finds problems. Customers appreciate honesty about pre-existing issues far more than discovering them after installation and attributing them to the tinting shop.'),
    h3('Environmental Conditions Checklist'),
    checklist([
      'Bay temperature between 65–80°F — warm the space if necessary before starting',
      'No direct sunlight on the glass during installation — natural light assists inspection but direct sun heats glass too quickly',
      'Bay swept and mopped — all debris that could be picked up by feet and transferred to the glass removed',
      'Air circulation minimal — drafts carry dust that contaminates installation',
      'Film storage area checked — confirm film rolls are within temperature spec (no heat exposure)',
      'All tools cleaned and ready at the workstation before the vehicle enters the bay',
    ]),
  ].join('');
}

function ch09_glassPrep() {
  return [
    h2('Glass Preparation — The Foundation of Every Installation'),
    p('No installation technique can compensate for inadequate glass preparation. Film will not bond properly to contaminated glass. Debris trapped under the film is a permanent defect. Every professional installation begins with glass preparation that is thorough, systematic, and verified before any film is touched.'),
    h3('Cleaning Sequence'),
    procedure('Full Glass Preparation Sequence', [
      'Begin with the exterior glass surface if applicable (for exterior-pattern shrinking)',
      'Apply glass cleaner generously — use enough to fully wet the surface',
      'Use a clean rubber squeegee to push the solution off the glass in overlapping passes',
      'Follow immediately with a lint-free microfiber cloth to collect residual moisture',
      'Inspect the exterior for chips, residue, or areas requiring razor blade attention',
      'Apply a second application of glass cleaner; use a fresh razor blade to scrape the full glass surface in overlapping strokes',
      'The razor blade removes silicone overspray, water spots, adhesive residue, and road grime that cleaners alone cannot remove',
      'Squeegee and wipe dry again after razor scraping',
      'Move to the interior glass surface',
      'Apply glass cleaner and wipe with a lint-free cloth in overlapping passes',
      'Inspect with a flashlight at a low angle — any haze, smear, or residue will be visible',
      'Repeat cleaning until the glass is perfectly clear under the flashlight inspection',
      'Final step: close vehicle windows and doors; dust-blow or vacuum the work area immediately before installing film',
    ]),
    h3('Cleaning Products — What to Use and What to Avoid'),
    table(
      ['Product', 'Appropriate Use', 'Avoid Because'],
      [
        ['Ammonia-free glass cleaner', 'General glass cleaning', 'Ammonia-based cleaners damage defroster adhesive and some tints'],
        ['Isopropyl alcohol (70%)', 'Final edge cleaning; adhesive residue removal', 'Full-glass IPA cleaning leaves a residue that slows adhesion'],
        ['Mineral deposit remover', 'Hard water scale on glass', 'Use only when needed; rinse thoroughly before installation'],
        ['Citrus-based adhesive remover', 'Old tint glue and sticker residue', 'Must be completely removed before film installation; IPA-wipe after'],
        ['Ammonia-based cleaner', 'Do not use in tinting', 'Reacts with defroster silver traces; damages rubber seals over time'],
        ['Paper towels', 'Do not use for final glass wipe', 'Leave lint fibers on glass that contaminate installation'],
        ['Scouring pads', 'Do not use on any glass surface', 'Scratch the glass surface permanently'],
      ]
    ),
    h3('The Flashlight Test'),
    p('After cleaning, perform the flashlight test to confirm the glass is ready for film installation.'),
    procedure('Flashlight Inspection Protocol', [
      'Darken the bay or shade the glass from ambient light',
      'Hold a bright LED flashlight at a 10–15° angle to the glass surface',
      'Slowly sweep the light beam across the glass, watching for any haze, smear, or residue',
      'Any visible haze or residue requires additional cleaning before proceeding',
      'Check the edges and corners especially carefully — these areas trap cleaner residue',
      'Confirm the glass is dry (no visible moisture) in all areas',
      'Only proceed to film installation when the glass passes the flashlight test',
    ]),
    callout('tip', 'New installers often underestimate how clean glass needs to be. A surface that looks clean under normal light is often visibly contaminated under a low-angle flashlight. Train yourself to always use the flashlight test — it takes 30 seconds and prevents reinstalls.'),
    h3('Defroster and Antenna Line Preparation'),
    p('Defroster lines are thin silver conductive traces bonded to the interior glass surface. They are fragile and cannot be replaced without replacing the entire rear glass. Antenna elements are even finer traces in some glass. During preparation, these elements require special attention.'),
    checklist([
      'Use only a soft lint-free cloth on glass with defroster lines — no razor blades over the traces',
      'Clean defroster glass horizontally, parallel to the trace lines, never scrubbing perpendicular across them',
      'Never apply adhesive remover solvents directly to defroster traces — apply to the cloth, not the glass',
      'Document any pre-existing breaks in defroster lines before installation (defroster test with a simple voltmeter or defroster test spray)',
      'On antenna glass, avoid any metal tools near the thin embedded antenna elements',
    ]),
  ].join('');
}

function ch10_contamination() {
  return [
    h2('Contamination Control — Dust, Debris, and Environmental Management'),
    p('Contamination — dust, hair, lint, and debris trapped under the film — is the most common cause of installation defects. Unlike water bubbles, which cure away, contamination is permanent. A single fiber under the film creates a visible raised defect that cannot be corrected without removing and re-installing the film. Contamination control is a continuous discipline throughout the installation process, not a one-time step.'),
    h3('Sources of Contamination'),
    table(
      ['Source', 'Contamination Type', 'Control Method'],
      [
        ['Vehicle headliner / ceiling fabric', 'Textile fibers falling onto glass', 'Wet-wipe ceiling above glass before installation; work with windows up when not installing'],
        ['Installer clothing', 'Lint from fabric', 'Wear a clean shop coat or apron; avoid fleece in the bay'],
        ['Film roll edge', 'Paper dust from liner', 'Wipe roll edge with a damp cloth before cutting; discard first 2 inches of any new roll section'],
        ['Squeegees and tools', 'Dried slip solution residue, lint from previous use', 'Clean all tools before each vehicle; wash squeegee blades with water'],
        ['Air movement in the bay', 'Suspended dust particles', 'Minimize airflow; close bay doors during installation'],
        ['Installer hands', 'Skin cells, oil, particulates', 'Wear nitrile gloves throughout installation'],
        ['Floor debris (from technician footwear)', 'Dust tracked up by movement during installation', 'Wet-mop the bay floor before starting; avoid unnecessary movement around the vehicle'],
      ]
    ),
    h3('The Trapped Particle Protocol'),
    p('Even in controlled environments, occasional debris will be trapped under film. How you respond determines whether the installation is salvageable.'),
    procedure('Responding to Trapped Debris During Installation', [
      'Identify the debris location before squeegeeing it further under the film',
      'While the film is still wet and the adhesive is not yet set, lift the film edge nearest the debris',
      'Use a detail knife or fine point tool to reach under the film toward the debris',
      'Tease the debris toward the lifted edge with the tool tip, then remove it',
      'Re-mist the exposed glass and film adhesive immediately',
      'Re-lay the lifted edge and re-squeegee from the repair point outward',
      'If the debris is in the center of a large panel and cannot be reached from the edge, it may be necessary to remove the full panel and re-install',
      'Never try to squeegee a large piece of debris under the film toward the edge — it creates a visible scratch trail in the adhesive',
    ]),
    callout('warning', 'After the film has cured (24–72 hours), any remaining trapped debris cannot be removed without removing the entire film panel. This is why debris during installation must be addressed immediately, while the adhesive is still hydrated and the film is removable without damage to the glass.'),
    h3('Clean Room Habits'),
    p('Professional shops develop clean room habits that reduce contamination to near zero. These habits become automatic after a few weeks of deliberate practice.'),
    checklist([
      'Never leave film adhesive-side up or exposed for longer than necessary during installation',
      'Do not place film on surfaces that have not been wiped clean — bench tops, car hoods, etc.',
      'Cover film cuts with the liner if you need to set them down between steps',
      'Close the film roll immediately after cutting — never leave a roll unprotected',
      'Inspect both the glass and the film adhesive with a flashlight before the final lay-down',
      'After cleaning the glass, do not re-touch the cleaned surface with anything but film and slip solution',
      'Blow-off compressed air (if available) on the cleaned glass surface as the last step before applying film',
    ]),
  ].join('');
}

function ch11_flatGlass() {
  return [
    h2('Flat Glass Installation Technique'),
    p('Flat glass installation is the foundational skill of automotive tinting. Quarter windows, flat rear windows, partition glass, and some sunroofs all fall into this category. Mastery of flat glass technique is the first milestone for any new installer. The absence of curves eliminates the need for heat work and shrinking, allowing you to focus entirely on clean preparation, accurate cutting, and thorough squeegeeing.'),
    h3('Flat Glass Method Overview'),
    p('The flat glass method uses a lay-in approach: film is cut slightly larger than the glass, floated onto a wet surface using slip solution, aligned, and then squeegeed out before being trimmed to final dimensions.'),
    procedure('Standard Flat Glass Installation', [
      'Complete glass preparation (Chapter 9) — verify with flashlight test',
      'Cut film to glass dimensions + ⅜ inch per side',
      'Mist the interior glass surface generously with slip solution',
      'Peel the film liner while misting the adhesive side',
      'Float the film onto the wet glass, centered — equal overhang on all sides',
      'With a soft squeegee, make one firm stroke from top to bottom at the center of the film — this anchors the film and prevents it from sliding off the glass',
      'Working from the anchored center, squeegee outward in overlapping strokes toward each edge',
      'Apply moderate to firm pressure — enough to push solution ahead of the squeegee without distorting the film',
      'After all major solution is removed, switch to a hard card for the final passes',
      'Make hard-card passes with maximum pressure, edge to edge in both directions',
      'Inspect at a low angle for any remaining wet pockets — re-squeegee those areas',
      'Trim all film edges to the glass perimeter with a single-bevel blade',
      'Squeegee all trimmed edges firmly with a hard card',
      'Final inspection — flashlight from multiple angles',
    ]),
    h3('Squeegee Pressure and Technique'),
    p('The squeegee is the most important tool in creating a quality flat glass installation. Technique matters more than strength.'),
    table(
      ['Phase', 'Tool', 'Pressure Level', 'Motion'],
      [
        ['Initial placement', 'Soft rubber squeegee', 'Light-moderate', 'One center stroke top-to-bottom to anchor film'],
        ['Water removal — body', 'Medium card', 'Moderate', 'Overlapping parallel strokes from center to edge'],
        ['Water removal — detail', 'Hard card', 'Firm', 'Repeated edge-to-edge strokes; overlap each pass by 50%'],
        ['Edge seating', 'Hard card corner', 'Maximum', 'Short firm strokes from film toward the trimmed edge'],
        ['Final inspection pass', 'Hard card flat', 'Maximum', 'Full surface coverage; look for reflection change indicating dry film vs. wet pocket'],
      ]
    ),
    callout('tip', 'Train your eye to detect wet pockets visually. A wet pocket under the film appears as a slight reflection difference — the wet area reflects slightly differently from the fully bonded surrounding film. A low-angle flashlight from the side of the glass makes these pockets easy to detect and target with the squeegee.'),
    h3('Trimming Technique for Flat Glass'),
    procedure('Clean Edge Trimming', [
      'Allow the film to set for 1–2 minutes after initial squeegeeing before trimming',
      'Use a fresh, sharp single-bevel blade — never trim with a dull blade',
      'Hold the blade at a 20–30° angle to the glass surface (nearly flat)',
      'Rest the blade on the glass edge as a guide — use the glass edge itself as the cutting guide for most edges',
      'Pull the blade smoothly and continuously along the edge in one stroke — avoid stopping mid-cut',
      'For corners, cut to the corner point and lift; reposition for the next edge before cutting',
      'After trimming each edge, re-squeegee the trimmed edge immediately with the hard card corner',
      'Inspect each cut — a clean cut is a smooth, consistent line with no jagged edges or ragged points',
    ]),
  ].join('');
}

function ch12_doorGlass() {
  return [
    h2('Door Glass Installation — Full Techniques'),
    p('Door glass is the most commonly installed panel in automotive tinting and the glass surface that customers interact with daily. Quality on this panel is non-negotiable. The rolled-down method (described in Chapter 9 panel procedure) applies to virtually all modern vehicles with power windows. This chapter covers technique refinements, common vehicle-specific challenges, and the alternative full-lay-in method for glass that cannot be rolled down.'),
    h3('The Rolled-Down Method — Why It Works'),
    p('Rolling the glass down 3–4 inches before installation exposes the top edge, allowing the installer to create an overhang that is then trimmed flush after rolling up. This eliminates the need to tuck film under the door gasket and ensures a clean, professional top edge. The felt channel of the door frame naturally holds the film against the glass during rolling, helping the film self-align as the glass rises.'),
    h3('Common Vehicle-Specific Door Glass Challenges'),
    table(
      ['Vehicle Type', 'Challenge', 'Technique Modification'],
      [
        ['Frameless door glass (sports cars, some sedans)', 'No door frame to support film during rolling — film can drop into the door', 'Pre-shrink the top inch of film before installation; hold film against glass manually while rolling up'],
        ['Very short side glass (sports coupes)', 'Film wider than it is tall — handling is awkward', 'Orient film cut horizontally; mark the direction before cutting to avoid confusion'],
        ['OEM black-bordered glass (some Japanese vehicles)', 'Black ceramic frit extends from the gasket — difficult to see the top edge for alignment', 'Use a chalk line or tape mark on the glass as an alignment reference'],
        ['Tinted factory glass (privacy glass)', 'Darker glass hides the top edge; combined VLT may be non-compliant with darker film', 'Measure VLT before film selection; advise customer on shade limitations'],
        ['Rear quarter pop-out vent (vintage vehicles)', 'Small separate glass pane that opens outward — not roll-down', 'Install as flat glass; trim with the vent in the open position for best access'],
        ['Laminated side glass (acoustic)', 'Surface coating may affect adhesion', 'Verify film adhesion compatibility; use adhesion-tested film; test a corner before full install'],
      ]
    ),
    h3('The Full Lay-In Method'),
    p('Some vehicles have fixed door glass (classic cars, custom builds) or glass that should not be rolled down (damaged tracks, defroster elements at the top edge). For these, the full lay-in method is used.'),
    procedure('Full Lay-In Method for Fixed Door Glass', [
      'Clean the interior glass surface completely — the full panel must be accessible',
      'Measure the full glass including any area beneath the door frame that will be covered by the film',
      'Cut film to the full glass dimension + ½ inch per side',
      'Apply slip solution to the full interior surface',
      'Float the film onto the glass with equal overhang on all sides',
      'Squeegee from center outward; work solution toward all edges simultaneously',
      'Trim all edges — top edge trimmed to the door frame or rubber gasket, leaving 1/16 inch gap',
      'Use a detail card to work the top edge into the gasket channel',
      'Trim side edges along the glass edge with the same 1/16 inch reveal',
      'Final hard-card squeegee on all areas including the just-trimmed edges',
    ]),
    h3('Door Glass Quality Benchmarks'),
    checklist([
      'Top edge is straight, parallel to the roofline, with consistent reveal',
      'No water streaks or lines in the direction of the glass roll',
      'No creases or fold marks from the rolling process',
      'Side edges trimmed cleanly with no ragged cuts or lifting',
      'Glass rolls up and down through its full travel without film interference',
      'Film shade is consistent top to bottom — no density variation',
      'No trapped debris visible from either inside or outside the vehicle',
    ]),
  ].join('');
}

function ch13_rearWindow() {
  return [
    h2('Curved Rear Window — Shrinking Theory and Master Procedure'),
    p('The curved rear window is the most technically demanding panel in automotive tinting. It is also the panel that most defines an installer\'s skill level in the eyes of experienced professionals. Understanding the physics of why film must be shrunk — and what is actually happening to the material at a molecular level during shrinking — leads to better technique and faster skill development than any number of repetitive attempts without theoretical grounding.'),
    h3('Why Film Does Not Naturally Fit a Compound Curve'),
    p('A flat sheet of any inextensible material cannot wrap a compound curve (a surface that curves in more than one direction simultaneously, like a car rear window) without wrinkling. This is a geometric reality — the mathematics of Gaussian curvature. To conform to a compound curve, the material must either stretch at the edges or gather the excess material into folds. Since window film is engineered to resist stretching (its PET structure is stable), the installer must remove the excess material by heat-shrinking it — gathering the excess into the film body and locking it there.'),
    h3('Shrinking Fundamentals'),
    table(
      ['Concept', 'Explanation'],
      [
        ['Excess material location', 'Excess material always concentrates at the point of greatest convexity — typically the top center and outer edges of the rear glass'],
        ['Finger formation', 'Unconstrained excess material forms pleats (fingers) oriented in the direction of greatest relief'],
        ['Shrinking direction', 'Push excess material toward the closest free edge — on most rear windows, this is the top edge'],
        ['Heat distribution', 'Heat must reach the full thickness of the film uniformly — gun too close causes surface burn before the body heats'],
        ['Locking the shrink', 'After pushing excess, squeegee the area to lock the film in its new flat position before it cools and wants to spring back'],
        ['Sequential shrinking', 'Work in zones; complete and lock each zone before moving to the next — trying to shrink the whole window at once is ineffective'],
      ]
    ),
    h3('Rear Window Shape Classification'),
    table(
      ['Shape Class', 'Typical Vehicle', 'Difficulty', 'Approach'],
      [
        ['Class A — Mild curve', 'Full-size pickup trucks, large SUVs', '★★★☆☆', 'One to two rounds of shrinking; straightforward technique'],
        ['Class B — Moderate curve', 'Standard sedans, compact cars', '★★★★☆', 'Two to three rounds of shrinking; careful zone management'],
        ['Class C — Severe curve', 'Muscle cars, hatchbacks, sports cars', '★★★★★', 'Three or more rounds; may require pre-stretch technique on some vehicles'],
        ['Class D — Backlight wrap', 'Full rear glass with lateral wrap', '★★★★★', 'Expert only; requires specialty film and dedicated technique'],
      ]
    ),
    h3('Step-by-Step Master Shrink Procedure'),
    procedure('Rear Window Heat Shrink', [
      'Lay the film liner-side down on the exterior of the clean rear glass — center it and allow equal overhang on all sides',
      'Inspect the film surface for any defects before heating — defects are easier to identify before the shrink',
      'Identify where the excess material (fingers/pleats) is located — observe the film on the glass in natural light',
      'Set your heat gun to medium (500–600°F) and allow it to fully reach temperature',
      'Begin heating Zone 1 (center of the glass): sweep the gun in broad arcs 5 inches above the film surface',
      'As the center film warms, use your free hand (fingers spread wide) to gently push excess material toward the top edge',
      'The film should move easily when warm — if it does not move, apply more heat before pushing',
      'Squeegee the pushed area before it cools — lock the shrunk film flat against the glass',
      'Allow Zone 1 to cool fully (30–45 seconds) before proceeding',
      'Move to Zone 2 (driver side): repeat heat-push-squeegee-cool sequence',
      'Move to Zone 3 (passenger side): same sequence',
      'Re-inspect the center for any remaining fingers that appeared during side-zone work',
      'Apply a second pass of shrinking if fingers remain — many rear windows require 2–3 passes',
      'Confirm the film lays flat on the exterior glass with zero fingers or bridging anywhere',
      'Allow the film to cool completely (2–3 minutes) while lying flat on the glass',
      'Trim the film to the glass perimeter while it is on the exterior',
      'Remove the film and carry it adhesive-side up to the interior',
      'Apply slip solution to the interior glass; peel the liner; float the pre-shrunk film onto the interior',
      'Squeegee from the center outward, following defroster line direction (horizontal)',
      'Trim edges; final high-pressure squeegee; inspection',
    ]),
    callout('tip', 'Before your first real shrink attempt on a customer vehicle, practice the shrinking motion on a scrap piece of film on a glass surface of similar curve. The goal is not to create a perfect installation — it is to develop the feel of when the film is warm enough to push and when it is too cold. This tactile sense is what separates fast, confident installers from slow, tentative ones.'),
    h3('Defroster Lines — Protecting Them During the Rear Window Install'),
    p('Rear windows typically contain a defroster grid of silver traces bonded to the interior glass surface. These traces are vulnerable to:'),
    checklist([
      'Razor blade contact during trimming — cuts trace permanently',
      'Hard card dragged perpendicular to the trace at high pressure — can lift the trace from the glass',
      'Excessive heat from the heat gun on the interior — can denature the silver trace binding',
      'Chemical contact with adhesive removers or strong solvents — dissolves the silver trace conductive layer',
    ]),
    p('To protect defroster lines: squeegee only parallel to the traces (horizontally), trim only along the glass edges (never across the glass body near defroster traces), and keep all metal tools away from the trace lines during the interior installation.'),
  ].join('');
}

function ch14_specialGlass() {
  return [
    h2('Special Glass Surfaces — Sunroof, Dot Matrix, and Antenna Glass'),
    h3('Sunroof and Panoramic Glass'),
    p('Sunroof installation is covered in detail in the panel procedure section. This chapter addresses the technical nuances that affect sunroof and panoramic glass more broadly.'),
    p('Panoramic roof systems often consist of two or more glass panels separated by a structural crossmember. Each panel must be treated and installed independently. The most common error is attempting to install one large piece of film across multiple panels — the crossmember creates an uneven surface and the film will bridge across it, creating a visible raised defect.'),
    callout('tip', 'For panoramic roofs with a very narrow gap between panels, align the film cut seams with the structural crossmember. A small gap between film sections at the crossmember is invisible, while a misaligned seam that crosses the crossmember is extremely visible.'),
    h3('Dot Matrix and Frit Zones'),
    p('The dot matrix (also called the frit) is a black ceramic enamel pattern printed on the inside surface of the glass at the edges. It serves two purposes: it hides the adhesive bead used to bond the glass to the vehicle body, and it provides a gradual visual transition from the opaque frame to the transparent glass. The dots are raised from the glass surface, which creates a challenge for window film adhesion.'),
    table(
      ['Frit Zone Challenge', 'Why It Occurs', 'Correct Approach'],
      [
        ['Film bridging across frit dots', 'Adhesive cannot conform to the raised dot surface', 'Heat the film lightly over the frit zone; press firmly with a soft pad to encourage adhesive to conform between dots'],
        ['Water trapping in frit zone', 'Dots create micro-cavities that hold slip solution', 'Squeegee the frit zone multiple times with firm pressure; use a dry detail card for final passes in the frit zone'],
        ['Film lifting from frit zone after cure', 'Insufficient adhesive contact across dot surface', 'Heat-activate the adhesive over the frit zone immediately before final squeegee; use an IR lamp'],
        ['Color difference between frit zone and clear glass', 'Film appears darker over the black frit — optical effect', 'Not a defect; inform customer before installation that this is a normal optical characteristic of frit glass'],
      ]
    ),
    h3('Technique for Frit Zones'),
    procedure('Installing Film Over Frit Borders', [
      'Squeegee the main glass body first and remove all water pockets from the clear glass area',
      'Address the frit zone last — approach it after the main body is fully seated',
      'Apply gentle heat (low gun setting, 6–8 inches distance) over the frit zone to soften the adhesive',
      'Use a soft pad or cloth-wrapped hard card to press the film into the frit dot texture — pressing, not sliding',
      'Make multiple short pressing strokes rather than one long sliding stroke in the frit zone',
      'Inspect the frit zone at multiple angles with a flashlight — any light gaps between the film and the frit dots will be visible',
      'Repeat heat-and-press cycles until the film is fully seated in all frit areas',
    ]),
    h3('Antenna Elements — Invisible and Visible'),
    p('Modern vehicles incorporate antenna elements into the glass in two ways: visible printed traces (similar to defroster lines) and invisible embedded elements within the glass laminate. Visible antenna traces can be identified with a flashlight — they are usually finer and less regular than defroster lines. Embedded antennas (AM/FM, GPS, satellite, cellular) cannot be identified visually.'),
    callout('warning', 'Metallic and metalized films (aluminum layer) significantly attenuate radio frequencies and can render embedded antennas non-functional. Before installing metalized film on a vehicle with advanced connectivity features (built-in navigation, factory satellite radio, cellular connectivity), confirm the film type is signal-compatible or discuss the trade-off with the customer explicitly.'),
    p('For visible antenna traces, follow the same protocol as defroster lines: no metal tools across the trace, squeegee parallel only, no solvents directly on the trace.'),
    h3('Defroster Line Verification and Repair'),
    procedure('Testing Defroster Functionality', [
      'Before installation, energize the defroster (turn on vehicle; activate rear defroster)',
      'Allow the defroster to run for 2–3 minutes',
      'Using an infrared thermometer or thermal camera, scan the rear glass — each defroster trace should produce a warm stripe',
      'Any cold stripe indicates a broken defroster element — document and photograph',
      'Inform the customer of any pre-existing defroster damage before installation',
      'After installation, repeat the defroster test to confirm no damage occurred during installation',
    ]),
  ].join('');
}

function ch15_qcAndInspection() {
  return [
    h2('Quality Control and Final Inspection Standards'),
    p('Quality control is not a final step — it is an ongoing discipline throughout the installation. However, the formal QC inspection before vehicle release is the last opportunity to identify and correct defects before they become customer complaints. This chapter establishes the standard for professional QC inspections.'),
    h3('QC Inspection Protocol'),
    procedure('Full Vehicle QC Inspection', [
      'Begin the inspection before the vehicle leaves the bay — under controlled lighting',
      'Start with the exterior walkthrough: view all glass from outside the vehicle in natural light',
      'Check each panel for shade consistency — compare adjacent panels',
      'Check each panel for visible defects: bubbles, contamination, lifting edges',
      'Open each door and inspect the film edge at the door jamb — no lifting should be visible',
      'Roll each window down and back up — film must travel without catching or folding',
      'Move to the interior: inspect each panel from the inside in natural light',
      'Use a low-angle flashlight on each panel to reveal any trapped debris or water pockets',
      'Test the rear defroster — confirm all traces are functional after installation',
      'Inspect the sunroof open and closed position — film must not interfere with the mechanism',
      'Measure VLT on each relevant panel with a calibrated VLT meter',
      'Document the final VLT reading for each panel on the work order',
    ]),
    h3('Defect Classification System'),
    table(
      ['Class', 'Defect Type', 'Examples', 'Action'],
      [
        ['Class 1 — Reject', 'Major visible defect; customer will certainly notice', 'Large contamination, lifting edges, missing sections, significant wrinkles', 'Re-do before vehicle release — no exceptions'],
        ['Class 2 — Caution', 'Minor defect; may be acceptable depending on location', 'Small water pocket near an edge, minor debris in a low-visibility area', 'Evaluate location and customer expectations; correct if possible'],
        ['Class 3 — Acceptable', 'Defect within normal post-installation parameters', 'Small water pockets < ½ inch in corners that will dissipate during curing', 'Document; disclose to customer with curing explanation'],
      ]
    ),
    h3('VLT Measurement Standard'),
    p('Every vehicle must be measured with a calibrated VLT meter before release. The meter reading must match or exceed the legal minimum for each glass position. Document the readings on the work order and retain.'),
    specTable([
      ['Meter calibration interval', 'Monthly minimum', 'Follow manufacturer calibration schedule; check against a known reference glass'],
      ['Measurement location', 'Center of each glass pane', 'Avoid measuring within 1 inch of edges or defroster lines'],
      ['Number of measurements per pane', 'Minimum 3 per large pane', 'Average the readings; use the lowest reading for compliance purposes'],
      ['Documentation', 'All readings on work order', 'Customer receives copy; shop retains file copy for minimum 3 years'],
    ]),
    h3('Customer Presentation Protocol'),
    procedure('Vehicle Handover Walkthrough', [
      'Walk the customer around the vehicle exterior first — point out each completed section',
      'Explain any small water pockets that remain and give the expected cure timeline',
      'Show the customer the interior from each door — allow them to inspect their primary use windows',
      'Explain the aftercare instructions (do not roll windows for 3–5 days; no cleaning for 7 days)',
      'Provide the aftercare card and warranty documentation',
      'Confirm the customer is satisfied and has no unanswered questions',
      'Obtain customer signature on the completed work order',
    ]),
  ].join('');
}

function ch16_curing() {
  return [
    h2('Curing Process — What Happens After Installation'),
    p('After installation, window film undergoes a curing process during which the remaining slip solution evaporates from between the film adhesive and the glass surface. Understanding this process allows installers to set accurate customer expectations and to distinguish between normal curing artifacts (temporary water pockets, slight haziness) and actual defects.'),
    h3('The Curing Timeline'),
    table(
      ['Timeframe', 'What is Happening', 'What Customer May Observe'],
      [
        ['Day 1–3', 'Slip solution rapidly evaporating; adhesive making initial molecular contact with glass', 'Water pockets (bubbles) are normal and visible; slight haze or cloudiness may be present'],
        ['Day 4–7', 'Most water evaporated; adhesive bond strengthening significantly', 'Bubbles shrinking; haze reducing; film beginning to look clear and crisp'],
        ['Day 7–14', 'Full evaporation complete in most conditions; adhesive bond at near-full strength', 'Bubbles should be gone; film should appear fully clear and uniform'],
        ['Day 14–30', 'Adhesive reaches maximum long-term bond strength', 'Film should look the same as it will for the life of the installation'],
      ]
    ),
    callout('', 'Curing time is significantly affected by temperature and humidity. In cold, humid conditions, cure times can extend to 4–6 weeks. In hot, dry conditions, cure may be nearly complete within 3 days. Never measure a film\'s quality during the cure period — always wait until after the curing period has elapsed before evaluating water pockets or haziness.'),
    h3('Factors That Affect Cure Rate'),
    table(
      ['Factor', 'Effect on Cure', 'Practical Implication'],
      [
        ['High temperature (>85°F)', 'Accelerates cure', 'Vehicles parked in direct sun will cure faster than garage-kept vehicles'],
        ['Low temperature (<50°F)', 'Dramatically slows cure', 'Winter installations may take 4–6 weeks to fully cure; warn customers'],
        ['High humidity', 'Slows evaporation of water-based solution', 'Rainy season installations take longer; avoid very high humidity bay conditions'],
        ['Film type', 'Thicker film has more adhesive and cures slightly slower', 'Ceramic and security films may take 1 week longer than standard film'],
        ['Glass orientation', 'Horizontal glass (sunroof) cures slower than vertical (side windows)', 'Sunroof installations may retain water pockets for 2–3 weeks'],
      ]
    ),
    h3('What Cannot Be Attributed to Curing'),
    p('While water pockets and minor haze are normal curing artifacts, the following are NOT curing-related and represent actual defects:'),
    checklist([
      'Trapped solid debris — does not cure away; permanently visible',
      'Scratches in the film surface — physical damage, not curing',
      'Lifting edges or corners — adhesion failure, not curing',
      'Film folds or creases — installation error, not curing',
      'Color non-uniformity — incorrect installation or mixed film batches',
      'Large water pockets that persist beyond 30 days in normal temperature conditions',
    ]),
    h3('Post-Cure Instructions for Customers'),
    checklist([
      'Do not roll windows down for at least 3–5 days — rolling traps the top edge before adhesive has set',
      'Do not clean the glass on the interior for at least 7 days — cleaning disrupts the curing adhesive',
      'After 7 days, clean only with non-ammonia glass cleaner and a soft cloth — never use abrasive cleaners',
      'Do not apply stickers, decals, or suction-cup mounts to the tinted surface',
      'Expect water pockets to disappear within 7–14 days (longer in cold weather)',
      'Contact the shop if water pockets persist beyond 30 days or if any edge lifting is observed',
    ]),
  ].join('');
}

function ch17_aftercare() {
  return [
    h2('Aftercare, Maintenance, and Long-Term Film Care'),
    p('Window film that is properly installed and properly maintained can last 10–15+ years on premium products. Improper aftercare is the most common cause of premature film failure outside of installation error. Teaching customers how to care for their film is a service that extends the life of the installation and reduces warranty claims.'),
    h3('The Aftercare Card'),
    p('Every customer should receive a written aftercare card at vehicle handover. The card communicates the key restrictions and recommendations clearly, without relying on the customer to remember verbal instructions.'),
    checklist([
      'Do not roll down windows for 3–5 days',
      'Do not clean interior glass for 7 days',
      'After 7 days: clean with ammonia-free glass cleaner and a soft microfiber cloth only',
      'Do not use squeegees, abrasive pads, or paper towels on tinted glass',
      'Do not attach suction cups, window decorations, or stickers to tinted glass',
      'Water pockets or slight haze visible now are normal and will disappear during curing',
      'If film lifts at any edge within 1 year, contact us — this is covered under warranty',
      'Park in shade or a garage when possible — UV exposure accelerates film degradation over many years',
    ]),
    h3('Cleaning Tinted Glass — Customer Instructions'),
    table(
      ['Cleaning Task', 'Correct Product', 'Incorrect Product (avoid)'],
      [
        ['General cleaning (interior)', 'Ammonia-free glass cleaner; soft microfiber cloth', 'Ammonia-based cleaners; paper towels; abrasive cloths'],
        ['Stubborn smears', 'Mild diluted dish soap on a microfiber; rinse with water', 'Solvent-based cleaners; acetone; IPA at high concentration'],
        ['Exterior glass (no film)', 'Any glass cleaner', 'No restriction on exterior glass'],
        ['Water spot removal (post-cure)', 'Diluted white vinegar; rinse clean', 'Abrasive spot removers; scrubbing pads'],
      ]
    ),
    h3('Long-Term Film Maintenance'),
    p('Film requires minimal maintenance beyond correct cleaning practices. However, certain conditions accelerate film degradation:'),
    table(
      ['Degradation Factor', 'Effect', 'Mitigation'],
      [
        ['Continuous direct UV exposure', 'Dyed film fades; all films experience slow adhesive degradation', 'Parking in shade or using a car cover extends film life significantly'],
        ['Repeated ammonia cleaning', 'Attacks adhesive bond over time; causes edge lifting', 'Use only ammonia-free products on tinted glass for the life of the film'],
        ['Suction cup attachments', 'Remove adhesive from film surface; damage coating', 'Use dash-mounted or clip-mounted accessories instead'],
        ['Pet scratches', 'Physical damage to film surface coating', 'No mitigation; repair requires film removal and re-installation in affected area'],
        ['Defroster damage to film (excessive heat)', 'Prolonged defroster use in very cold conditions can stress the film over many years', 'Use defroster for minimum time needed to clear glass; not a significant concern under normal use'],
      ]
    ),
    h3('Warranty Service Protocol'),
    procedure('Handling a Warranty Claim', [
      'Customer contacts the shop with a complaint — schedule an inspection appointment',
      'Inspect the film on the vehicle; document the defect with photographs',
      'Determine whether the defect is a warranty issue (installation defect or manufacturer defect) or a customer-caused issue (damage, improper cleaning)',
      'If warranty applies: schedule a re-installation at no charge; use the same or upgraded film grade',
      'If customer-caused: explain the finding to the customer; offer a discounted re-installation',
      'Document all warranty interactions in the customer file',
      'File a manufacturer warranty claim if the defect is film-related (adhesion failure, bubbling, discoloration) within the manufacturer\'s warranty period',
    ]),
  ].join('');
}

function ch18_pricing() {
  return [
    h2('Pricing Strategy and Service Tier Structure'),
    p('Pricing window tinting correctly is essential for business sustainability. Under-pricing the service leads to high volume at low margins — a model that burns out installers and generates minimal profit. Over-pricing drives away customers to competitors. Professional pricing is based on accurate cost calculation, market positioning, and clear service tier differentiation.'),
    h3('Cost Components'),
    p('Understanding the true cost of a tint installation is the foundation of correct pricing.'),
    table(
      ['Cost Component', 'Calculation Method', 'Example Values'],
      [
        ['Film material cost', 'Square footage used × price per sq ft (including waste factor)', 'Side windows: ~15 sq ft; rear window: ~8 sq ft; full car: ~40–55 sq ft'],
        ['Installation labor', 'Hours × hourly labor rate', 'Full car (competent installer): 2–4 hours'],
        ['Overhead allocation', 'Total monthly overhead ÷ monthly job volume', 'Bay rent, utilities, insurance, tool depreciation'],
        ['Waste factor', 'Typically 15–25% of material cost', 'Film trimmed during install; liner discarded; pattern errors'],
        ['Customer acquisition cost', 'Marketing spend ÷ new customers per month', 'Amortized across each new job'],
      ]
    ),
    h3('Service Tier Framework'),
    table(
      ['Tier', 'Film Type', 'Positioning', 'Margin Target'],
      [
        ['Economy', 'Dyed film', 'Entry-level; price-sensitive customers; basic UV and privacy', '30–40%'],
        ['Standard', 'Carbon film', 'Best-seller; heat rejection + signal safety; best value positioning', '40–55%'],
        ['Premium', 'Ceramic film', 'Maximum performance; heat rejection; clarity; longevity', '55–70%'],
        ['Elite', 'Nano-ceramic or specialty', 'Top-of-line; photochromic; security film; bespoke applications', '60–75%'],
      ]
    ),
    h3('Service Menu Structure'),
    p('Present services as packages rather than individual glass sections. Packages increase average ticket value and simplify the customer decision.'),
    table(
      ['Package Name', 'Included Glass Sections', 'Positioning Statement'],
      [
        ['Two-door package', 'Both front doors + visor strip', 'Legal compliance focus; driver comfort essentials'],
        ['Full sedan package', 'All side glass + rear window', 'Complete privacy and heat protection'],
        ['Full SUV/truck package', 'All side glass + rear window + rear cargo glass', 'Complete coverage for larger vehicles'],
        ['Panoramic package', 'All glass + sunroof / panoramic roof', 'Maximum comfort for vehicles with large glass roofs'],
        ['Full shield package', 'All glass including windshield (where legal)', 'Total UV and heat protection; premium tier film only'],
      ]
    ),
    h3('Upsell Opportunities'),
    checklist([
      'Film grade upgrades: always present the ceramic upgrade benefit during the sales consultation',
      'Windshield tint add-on: many customers do not realize windshield tinting is available and legal',
      'Sunroof add-on: high perceived value; high margin; quick install',
      'Paint protection film (PPF) cross-sell: tint customers are ideal PPF prospects',
      'Annual inspection service: schedule a free 1-year film inspection to confirm customer satisfaction and catch warranty issues early',
    ]),
    callout('tip', 'The most effective upsell technique in window tinting is a live demonstration. If you have a ceramic film sample and a heat lamp, show the customer the infrared blocking difference between their uncoated hand under the lamp, a dyed film sample, and a ceramic sample. The tactile experience of feeling heat through the glass vs. not is more compelling than any verbal description.'),
    h3('Warranty Transparency in Pricing'),
    p('Build warranty terms into your pricing presentation. Customers buying premium film deserve a premium warranty. Clearly state the warranty period, what is covered (manufacturer defects, adhesion failure, discoloration), and what is not (physical damage, incorrect aftercare). A clear warranty builds confidence and justifies price premiums over unlicensed competitors.'),
  ].join('');
}

function ch19_troubleshooting() {
  return [
    h2('Troubleshooting — 30+ Common Defects, Root Causes, and Corrections'),
    p('Every installer encounters defects. The measure of a professional is not whether defects occur — it is how quickly and accurately they can diagnose the root cause, correct it when possible, and implement procedural changes to prevent recurrence. This chapter provides a comprehensive reference for the most common defects encountered in automotive window tinting.'),
    h3('Defect Categories'),
    p('Defects in window tinting generally fall into four categories: preparation failures, installation errors, environmental/material issues, and post-installation damage. Understanding which category a defect belongs to is the first step in root-cause diagnosis.'),
    troubleshootingSection([
      ['Water pockets remaining after 30 days', 'Slip solution not fully removed during install; cold environment slowing cure; film laid over contaminated glass', 'If within 30 days: remove film, clean glass, re-install. After 30 days: the adhesive has set around the water; re-do required', 'Complete squeegee with hard card at maximum pressure; confirm bay temp >65°F during installation'],
      ['Purple or brown color shift in film', 'Dye migration in low-grade dyed film; UV degradation of dye layer', 'Film must be removed and replaced — color shift is permanent', 'Use carbon or ceramic film instead of dyed film; disclose fade risk to customers choosing dyed film'],
      ['Film lifting at edges within first week', 'Insufficient edge squeegee; solution trapped under edge; film cut too long and wedged under gasket', 'While flexible: re-squeegee the edge firmly. After set: remove and re-install', 'Final pass must be hard-card at maximum pressure along all edges; trim to leave 1/16 inch gap from gasket'],
      ['Contamination (debris) trapped under film', 'Dust or lint contamination of glass or adhesive during installation', 'Remove film while still within 30-day removal window; re-clean; re-install', 'Flashlight-inspect glass and adhesive before final lay-down; maintain clean room habits'],
      ['Scratch marks in film surface', 'Blade dragged across film during trim; tool edge contact; abrasive cleaning', 'Film must be removed and replaced — surface scratches are permanent', 'Use blade guard; change blades frequently; inspect tools before each use'],
      ['Film appears hazy or cloudy after 30 days', 'Contamination between glass and adhesive; mineral deposits from hard water in slip solution', 'Remove, clean glass with mineral remover, re-install with filtered water in solution', 'Use filtered or deionized water for slip solution; confirm glass is mineral-free before installation'],
      ['Defroster line broken by blade', 'Trim blade crossed the defroster trace', 'Cannot be repaired; defroster element is permanently severed in that location; customer must be informed', 'Map defroster trace paths before trimming; never cut across the glass body near defroster elements'],
      ['Film wrinkled or creased (horizontal wrinkle)', 'Film folded on itself during liner peel and lay-down', 'Remove immediately while adhesive is still wet; re-lay with care', 'Keep both hands spread wide during lay-down; have a helper for large panels'],
      ['Film shrinking to reveal bare glass strip at top edge (door)', 'Film cut too short; top edge not trimmed correctly leaving insufficient coverage', 'Remove and re-install with correct dimensions', 'Always verify glass height before cutting; add at least 1 inch overhang at the top for the rolled-down method'],
      ['Fingers (pleats) visible in rear window after installation', 'Insufficient heat shrinking before interior installation; rear window installed before pre-shrunk film was removed and re-applied to interior', 'Remove film; return to exterior; re-shrink until all fingers are eliminated; re-install on interior', 'Do not install on interior until exterior shrink test confirms zero fingers; always do a dry lay test before peeling liner'],
      ['Film bridging across rear window curve — not conforming', 'Film shrunk but not enough; or film too thick for the glass curve profile', 'Re-heat the bridging section from the exterior; push the excess; cool; re-check', 'Shrink in at least 2 passes on all Class B and C curves; confirm full conformity before interior installation'],
      ['Film delaminating from frit / dot matrix zone', 'Adhesive could not conform to the raised dot surface; insufficient pressure during frit zone installation', 'Heat-activate the delaminated edge; press firmly with a soft pad into the frit texture; if too far gone, remove and re-install', 'Dedicate extra squeegee time to frit zones; use heat and pressing (not sliding) technique on frit areas'],
      ['Sunroof film catching when sunroof closes', 'Film trimmed too long — extends past the seal boundary into the slide track', 'Trim the offending edge more conservatively', 'Trim sunroof film ⅛ inch inside the seal boundary; test open/close before final edge squeegee'],
      ['GPS or cellular signal degraded after tinting', 'Metallic or metalized film installed over roof glass containing antenna elements', 'Replace metallic film with a signal-transparent carbon or ceramic film', 'Always confirm film type before installation on any glass that may contain antenna elements; default to non-metallic film on all glass'],
      ['Shade mismatch between panels on same vehicle', 'Different film batches used; or different shades inadvertently mixed', 'Identify the mismatched panel; remove and re-install with correctly matched film', 'Cut all panels for a single vehicle consecutively from the same roll; verify shade before cutting each panel'],
      ['VLT meter reading out of compliance', 'Shade selected was too dark for the glass VLT; combined calculation was not performed', 'Remove the non-compliant panel and re-install with a lighter shade film', 'Always calculate combined VLT before installation; measure with a meter before vehicle release'],
      ['Adhesion failure on acoustic or coated glass', 'Standard film adhesive is incompatible with the glass surface coating', 'Remove film; apply an adhesion promoter to the glass; re-install with compatible film', 'Test adhesion on a small corner area of any suspect glass 24 hours before full installation'],
      ['Film turning purple in one window but not others', 'Mixed film batches — one window has different film type (dyed vs. carbon)', 'Identify and replace the dyed film panel with a matching carbon or ceramic panel', 'Confirm all panels are the same film type before installation; label roll ends'],
      ['New customer complains of bubbles the day after install', 'Normal post-installation water pockets — customer was not informed about curing', 'Educate customer about the curing process; schedule a follow-up inspection at 30 days', 'Always provide written aftercare instructions; set explicit expectations about water pockets before the customer leaves'],
      ['Air bubble appears that does not go away after 30 days', 'Trapped air (not water) — caused by film placed on dry glass or too-quick adhesion set', 'Air bubbles do not cure away; remove and re-install the panel', 'Never place film on a dry glass surface; always maintain a fully wetted surface during lay-down'],
      ['Film edge lifted by automated car wash bristles', 'Car wash before cure was complete; edge adhesion not fully set', 'Re-squeegee the lifted edge while the adhesive is still potentially workable; if the adhesive is set hard and the film is lifting, remove and re-install', 'Instruct customers: no automated car washes for 30 days after installation; hand wash only'],
      ['Large water streak running corner-to-corner diagonally', 'Squeegee technique was angular to the glass, creating a diagonal water channel', 'While still wet: re-squeegee with strokes perpendicular to the streak direction. After set: re-do panel', 'Always squeegee parallel to the nearest edge; work systematically in one direction before changing angle'],
      ['Film bubbling along defroster line', 'Film lifted by thermal expansion of the defroster trace when energized; or adhesive incompatibility with silver trace', 'Remove film; check for trace damage; re-install ensuring film is fully seated over the trace at all points', 'Squeegee defroster glass with extra firmness parallel to each trace; test defroster after install to confirm film remains seated'],
      ['Visible fingerprints under the film', 'Installer touched the adhesive with ungloved hands during liner peel', 'Remove the panel; the oil contamination cannot be removed from the adhesive after installation', 'Wear nitrile gloves at all times; never touch the adhesive side of film with bare skin'],
      ['Film installed upside down — liner side in, adhesive side out', 'Film orientation error during installation; liner and adhesive sides confused', 'Remove immediately; the film cannot function with the scratch coating on the inside', 'Always confirm liner vs. adhesive side before installation; the liner is typically shinier and separates with a distinctive sound'],
      ['Pattern film does not fit the glass — incorrect pattern used', 'Wrong vehicle pattern selected from pattern library', 'Remove; pull the correct pattern; re-install', 'Always verify the vehicle year, make, model, and trim level before pulling a pre-cut pattern; physically compare the pattern to the glass before peeling the liner'],
      ['Film lifting seasonally (summer/winter cycles)', 'Adhesive bond was marginal at installation; thermal cycling breaks remaining bond', 'Remove the panel; clean glass thoroughly; re-install with premium adhesive film', 'Do not cut corners on glass preparation; an incomplete glass cleaning is the most common cause of marginal adhesion that fails with thermal stress'],
      ['Customer reports film is scratching their vision (inside surface scratch)', 'Scratch on the film outer surface (interior-facing hardcoat) from abrasive cleaning by customer', 'Remove and re-install; scratched hardcoat cannot be polished', 'Provide clear aftercare instructions; include approved cleaning products on the aftercare card'],
      ['Squeegee marks visible in film after cure', 'Excessive hard-card pressure on a soft film type; or card edge damage creating a line in the film', 'Faint squeegee marks may fade; deep marks are permanent — re-do required', 'Inspect squeegee edges before use; replace chipped or nicked cards; match card hardness to film thickness'],
      ['Film blistering at top of door glass in summer', 'Film top edge trapped under the door gasket; edge seal trapping heat expansion', 'Trim the top edge clear of the gasket; re-squeegee the edge', 'Never tuck film under a door gasket; leave the specified 1/16 inch gap for thermal expansion'],
    ]),
    h3('Diagnostic Decision Tree'),
    p('When a defect is identified, use this sequence to quickly classify the root cause:'),
    procedure('Defect Root-Cause Diagnosis', [
      'When did the defect appear? (At install / within 7 days / after 30 days / after months)',
      'What does it look like? (Bubble / haze / streak / lift / discoloration / contamination)',
      'Where is it located? (Center of glass / edge / corner / specific zone)',
      'Is it reversible? (Still in the wet/workable stage? Or post-cure?)',
      'What was the installation environment? (Temperature, humidity, bay conditions)',
      'What is the film type and age? (Dyed film that is old = fade expected; new ceramic = installation issue)',
      'Match the symptom, location, and timing to the troubleshooting table to identify the most likely cause',
      'Confirm the root cause before correcting — do not assume the first guess is correct',
    ]),
  ].join('');
}

function ch20_panelProcedures() {
  return [
    h2('Master Panel Procedures'),
    p('The following procedures are self-contained installation references for each of the twelve primary glass types covered in this program. Each procedure includes difficulty rating, time estimates, preparation checklist, step-by-step installation sequence, quality checkpoints, and a panel-specific troubleshooting reference. Use these as bay-side reference cards until the procedures are fully internalized.'),
    pageBreak(),
    TINT_PANELS.map((panel) => panelProcedure('window-tint', panel)).join(pageBreak()),
  ].join('');
}

function ch21_businessOperations() {
  return [
    h2('Shop Operations — Scheduling, Workflow, and Efficiency'),
    p('A technically excellent tint shop that operates with poor business discipline will underperform. This chapter addresses the operational side of running a professional tinting operation — scheduling, throughput, quality consistency across multiple installers, and customer communication standards.'),
    h3('Bay Throughput Planning'),
    table(
      ['Vehicle Type', 'Average Install Time (Experienced Installer)', 'Average Install Time (Trainee)', 'Recommended Bay Capacity (per bay per day)'],
      [
        ['Full sedan — economy/carbon film', '1.5–2.5 hours', '3–4 hours', '3–4 vehicles (experienced)'],
        ['Full SUV — carbon film', '2.5–3.5 hours', '4–5 hours', '2–3 vehicles (experienced)'],
        ['Full sedan — ceramic film', '2–3 hours', '3.5–4.5 hours', '3 vehicles (experienced)'],
        ['Rear window only', '45–90 min', '90–150 min', '5–7 vehicles (experienced)'],
        ['Two-door package', '45–60 min', '75–90 min', '6–8 vehicles (experienced)'],
        ['Limousine / full specialty vehicle', '4–8 hours', '8–12 hours', '1 vehicle (expert only)'],
      ]
    ),
    h3('Multi-Installer Quality Consistency'),
    p('When a shop employs multiple installers at different skill levels, maintaining consistent quality requires explicit systems — not just training.'),
    checklist([
      'Written step-by-step procedures posted in the bay (this manual)',
      'Defined QC checklist that every installer must complete before vehicle release — regardless of experience level',
      'Periodic QC audits: shop manager inspects completed vehicles before they leave the lot at random intervals',
      'Defect log: all re-dos are documented with the installer name, defect type, and root cause — reviewed monthly',
      'Cross-training: experienced installers rotate bay positions with trainees so experienced eyes see trainee work directly',
      'Customer satisfaction tracking: follow-up contact 2 weeks after each installation to capture any post-cure complaints',
    ]),
    h3('Scheduling and Booking Standards'),
    procedure('Booking a Window Tint Appointment', [
      'Collect vehicle year, make, model, and trim level during booking — needed for pattern selection',
      'Confirm whether the customer wants a consultation to discuss film types or already knows their selection',
      'Allocate bay time based on the vehicle type and film grade — premium film requires more QC time',
      'Send a confirmation message with the appointment time, expected duration, and preparation instructions',
      'Preparation instructions for customers: wash the vehicle exterior before arriving; remove any items on the dashboard and rear parcel shelf',
      'Day-before reminder: confirm the appointment and reiterate preparation steps',
      'At arrival: complete the intake walkthrough before moving the vehicle to the bay',
    ]),
    h3('Film Inventory Management'),
    p('Inventory management in a tinting shop requires balancing product availability against the cost of holding stock. Film has a shelf life — typically 1–2 years when stored correctly. Ordering too much ties up capital; ordering too little causes delays that disappoint customers.'),
    checklist([
      'Maintain a minimum of one full roll of each film grade and shade in the most common sizes',
      'Track usage by shade and grade monthly — identify which products move fastest and stock those deeper',
      'Conduct a monthly inventory check: inspect each roll for edge damage, curl, or discoloration',
      'Rotate stock: new rolls are placed at the back; oldest rolls are used first',
      'Log all material usage per vehicle on the work order — this data drives accurate reorder planning',
      'Dispose of any roll that is beyond its shelf life or has been stored improperly — do not install degraded film',
    ]),
  ].join('');
}

function ch22_certificationAndProfessional() {
  return [
    h2('Professional Development, Certification, and Industry Standards'),
    p('The window film industry is served by professional associations, certification programs, and manufacturer training initiatives that provide pathways for installers to formally validate their skills and for customers to identify qualified installers. Pursuing certification benefits both individual installers and the business.'),
    h3('Benefits of Professional Certification'),
    checklist([
      'Demonstrates to customers that the installer has been assessed against an objective standard',
      'Access to manufacturer warranty programs that require certified installer status',
      'Marketing differentiation — certified status can be displayed in advertising and at the shop',
      'Access to advanced training and technical support from manufacturers',
      'Connection to the professional installer community for technique sharing and troubleshooting',
      'Required in some markets for commercial and architectural film installation contracts',
    ]),
    h3('Skill Development Milestones'),
    p('For new installers, the following milestones mark meaningful skill progression. Each milestone should be evaluated by an experienced installer or shop manager before the trainee advances independently.'),
    table(
      ['Milestone', 'Skill Validated', 'Typical Timeline from Start'],
      [
        ['Milestone 1 — Flat Glass', 'Quarter windows and flat glass installed to professional QC standard independently', '2–4 weeks of daily practice'],
        ['Milestone 2 — Door Glass', 'All door glass (front and rear) installed using rolled-down method to professional QC standard', '4–8 weeks of daily practice'],
        ['Milestone 3 — Basic Shrink', 'Mild-curve rear windows (Class A) shrunk and installed to professional QC standard', '8–12 weeks of daily practice'],
        ['Milestone 4 — Full Vehicle', 'Complete vehicle installation (all glass) completed independently to professional QC standard', '3–6 months of daily practice'],
        ['Milestone 5 — Advanced Shrink', 'Complex curved rear windows (Class C) and windshields completed to professional QC standard', '6–18 months of daily practice'],
        ['Milestone 6 — Expert', 'Specialty vehicles, limousines, windshields, and teaching new installers', '2+ years of consistent professional practice'],
      ]
    ),
    h3('Continuing Education Topics'),
    p('Even experienced installers benefit from structured continuing education as the industry evolves. Topics worth pursuing include:'),
    checklist([
      'New film chemistry — ceramic and photochromic technologies continue to evolve rapidly',
      'Pattern library updates — new vehicle models require new patterns; staying current prevents installation errors',
      'Legal VLT law changes — regulations are updated periodically; shop must maintain current knowledge',
      'Business operations — pricing strategy, customer service, marketing, and shop management best practices',
      'Related services — paint protection film (PPF) installation is the natural career expansion for experienced tint installers',
      'Safety training — first aid, chemical safety, and ergonomics as the shop grows',
    ]),
    h3('Building a Professional Reputation'),
    p('In the window tinting business, reputation is the most valuable marketing asset. A shop known for quality, transparency, and reliable warranty support will outperform a higher-volume shop that cuts corners. Reputation is built on:'),
    checklist([
      'Consistent quality — every vehicle receives the same level of care regardless of vehicle age or job price',
      'Transparent communication — problems are disclosed, not hidden',
      'Reliable warranty service — complaints are addressed promptly and professionally',
      'Clean, organized facility — customers notice and trust a professional environment',
      'Honest VLT compliance — never install non-compliant work without explicit documented customer acceptance',
      'After-installation follow-up — a 2-week check-in call builds loyalty and catches issues before they become complaints',
    ]),
  ].join('');
}

function ch23_appendices() {
  return [
    h2('Appendices'),
    h3('Appendix A — Quick Reference: VLT Law Summary by Region Type'),
    callout('warning', 'This appendix is a general summary only. VLT laws change frequently. Always verify current regulations with your state or local authority before installation.'),
    table(
      ['Region Type', 'Front Side Windows', 'Rear Side Windows', 'Rear Windshield', 'Front Windshield'],
      [
        ['Most U.S. states', '35–70% minimum VLT', '20–35% minimum VLT', '20–35% minimum VLT', 'Above AS1 line only; 70%+ below AS1'],
        ['Lenient U.S. states', 'No restriction rear of front seat', 'No restriction', 'No restriction', 'Above AS1 line only'],
        ['Strict U.S. states', '70%+ minimum (same as windshield)', '35%+ minimum', '35%+ minimum', 'Above AS1 only; no tint below'],
        ['Canadian provinces (typical)', '35–70% minimum', 'Generally no restriction', 'Generally no restriction', 'No tint permitted below sun visor zone'],
        ['European Union (general)', 'No film below 70% VLT on side windows in most member states', 'Rear only — no standard; varies by country', 'Varies by country', 'Generally no tint film permitted'],
        ['Australia (general)', '35% minimum on front sides', '20% minimum on rear sides', '20% minimum', 'No tint below AS1 line'],
      ]
    ),
    h3('Appendix B — Film Specification Quick Reference'),
    table(
      ['Parameter', 'Dyed', 'Carbon', 'Ceramic', 'Security/Safety'],
      [
        ['TSER (typical)', '10–20%', '40–60%', '60–80%', '20–40%'],
        ['IRR (typical)', '<10%', '40–60%', '80–99%', '<20%'],
        ['UV block', '99%', '99%', '99%', '99%'],
        ['Signal impact', 'None', 'None', 'None', 'None'],
        ['Expected lifespan', '3–5 yr', '10+ yr', '15+ yr', '10+ yr'],
        ['Thickness (typical)', '1–2 mil', '1.5–2 mil', '1.5–3 mil', '4–14 mil'],
      ]
    ),
    h3('Appendix C — Tools Maintenance Schedule'),
    table(
      ['Tool', 'Maintenance Task', 'Frequency'],
      [
        ['Squeegees and cards', 'Rinse with clean water; inspect edge for nicks or debris', 'After every vehicle'],
        ['Razor blades', 'Replace — do not clean and reuse', 'Every 2–3 cuts on installed film'],
        ['Heat gun', 'Wipe exterior housing with dry cloth; inspect cord for damage', 'Weekly; before each use'],
        ['Spray bottles', 'Rinse with clean water; discard old solution; sanitize weekly', 'Refill: daily. Sanitize: weekly'],
        ['VLT meter', 'Calibrate against reference glass; wipe sensor with dry cloth', 'Calibration: monthly. Clean: after every use'],
        ['Work surfaces', 'Wipe with damp cloth; remove debris; sweep under work benches', 'Daily'],
        ['Bay floor', 'Wet mop; remove all debris', 'Before each vehicle entry into the bay'],
      ]
    ),
    h3('Appendix D — Pre-Installation Checklist (Printable)'),
    checklist([
      'Bay temperature: 65–80°F confirmed',
      'Bay floor swept and mopped',
      'Air movement: doors closed or filtered positive-pressure only',
      'Vehicle intake completed: damage documented and photographed',
      'Work order signed by customer',
      'Film shade and grade confirmed for each glass section',
      'Combined VLT calculation completed and documented',
      'All glass sections cleaned and passed flashlight test',
      'Defroster/antenna elements mapped and photographed',
      'Tools: squeegees clean and edge-inspected',
      'Blade: fresh blade installed',
      'Slip solution: freshly mixed, correct concentration',
      'Film: correct shade and grade confirmed; roll inspected for edge damage',
      'Installer: nitrile gloves on; shop coat worn',
    ]),
    h3('Appendix E — Post-Installation QC Checklist (Printable)'),
    checklist([
      'All glass sections tinted as ordered — none missed',
      'Shade consistent across all panels when viewed from exterior in natural light',
      'No lifting edges on any panel',
      'No contamination visible under any panel',
      'Water pockets: only small acceptable pockets remaining (Class 3) — none are Class 1 or 2',
      'All windows tested: roll up and down freely; sunroof opens and closes freely',
      'Rear defroster tested: all elements functional',
      'VLT measured on each panel: all readings documented and compliant',
      'Customer handover completed: walkthrough done; aftercare card provided; work order signed',
      'Before and after photos taken and stored in the customer file',
    ]),
    h3('Appendix F — Slip Solution Mixing Reference Card'),
    table(
      ['Bottle Size', 'Water Volume', 'Surfactant Drops (standard)', 'Surfactant Drops (hot bay)', 'Surfactant Drops (cold bay)'],
      [
        ['16 oz', '16 oz', '2–3 drops', '4–5 drops', '1–2 drops'],
        ['32 oz', '32 oz', '4–6 drops', '7–9 drops', '2–3 drops'],
        ['64 oz', '64 oz', '8–12 drops', '14–18 drops', '4–6 drops'],
        ['1 gallon', '1 gallon', '16–24 drops', '28–36 drops', '8–12 drops'],
      ]
    ),
    h3('Appendix G — Glossary'),
    table(
      ['Term', 'Definition'],
      [
        ['AS1 line', 'A reference line marked on most windshields indicating the uppermost permissible area for window tinting without VLT restriction in many jurisdictions'],
        ['Biaxially oriented PET', 'Polyester film stretched during manufacture in two perpendicular directions to align polymer chains, creating dimensional stability'],
        ['Compound curve', 'A surface that curves simultaneously in more than one direction — the fundamental reason rear windows require heat shrinking'],
        ['Cure', 'The process by which slip solution evaporates and the film adhesive forms a full bond with the glass surface (7–30 days typically)'],
        ['Frit / Dot matrix', 'Black ceramic enamel pattern printed on the inside edge of automotive glass; serves as an aesthetic transition and hides adhesive beads'],
        ['Fingers / Pleats', 'Visible wrinkles or folds in film that form when excess material cannot lay flat against a curved glass surface'],
        ['Heat shrinking', 'The technique of using a heat gun to temporarily disrupt film\'s molecular orientation, allowing excess material to be repositioned and locked into a new shape that conforms to curved glass'],
        ['IRR', 'Infrared Rejection — the percentage of infrared radiation blocked by the film'],
        ['Open time / Working time', 'The period during which slip solution keeps the adhesive hydrated and the film movable on the glass surface'],
        ['TSER', 'Total Solar Energy Rejected — the percentage of all solar energy (UV + visible + infrared) blocked by the film'],
        ['VLT', 'Visible Light Transmission — the percentage of visible light that passes through a material; the primary metric regulated by tinting laws'],
        ['VLR', 'Visible Light Reflectance — the percentage of visible light reflected by the film surface'],
        ['Wet pocket', 'An area of remaining slip solution trapped between the film adhesive and the glass during and after installation; normal during curing if small and away from edges'],
      ]
    ),
    h3('Appendix H — Emergency Reference — What to Do If...'),
    table(
      ['Emergency', 'Immediate Action', 'Follow-up'],
      [
        ['Glass cracks during installation', 'Stop immediately; do not touch the glass; move the vehicle out of the bay', 'Document with photos; notify the customer immediately; do not admit liability until cause is determined; consult with the shop owner'],
        ['Heat gun burns a section of film', 'Remove the film from the glass if it can be done safely; clean the glass', 'Re-install with a new piece of film; do not present a burned film to the customer'],
        ['Installer cuts their hand with a blade', 'Apply pressure with a clean cloth immediately; assess severity; seek medical attention if the wound is deep or bleeding does not stop in 5 minutes', 'Complete an incident report; review blade handling protocol; replace sharps container if full'],
        ['Customer disputes pre-existing damage that was documented', 'Show the customer the pre-installation photographs; review the signed work order together', 'If the dispute persists, involve the shop manager; the signed work order with photos is the definitive record'],
        ['Film is installed to incorrect shade (too dark)', 'Do not release the vehicle; remove the incorrect film and re-install the correct shade before the customer sees it', 'Review the work order and VLT calculation; determine how the error occurred and add a verification step to the process'],
      ]
    ),
  ].join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// CHAPTER ASSEMBLY
// ─────────────────────────────────────────────────────────────────────────────

function generateTintManual() {
  const chapters = [
    { title: 'Introduction — Welcome to Professional Window Tinting', content: ch01_introduction() },
    { title: 'Film Types, Construction, and Performance', content: ch02_filmTypes() },
    { title: 'VLT Regulations, Legal Compliance, and Documentation', content: ch03_vltAndLaws() },
    { title: 'Tools of the Trade — Professional Tinting Kit', content: ch04_tools() },
    { title: 'Slip Solution — Chemistry, Mixing, and Use', content: ch05_slipSolution() },
    { title: 'Heat Guns — Theory, Setup, and Technique', content: ch06_heatGuns() },
    { title: 'Safety Protocols and Shop Hazard Management', content: ch07_safety() },
    { title: 'Vehicle Intake and Pre-Installation Assessment', content: ch08_vehicleIntake() },
    { title: 'Glass Preparation — The Foundation of Every Installation', content: ch09_glassPrep() },
    { title: 'Contamination Control — Dust, Debris, and Environmental Management', content: ch10_contamination() },
    { title: 'Flat Glass Installation Technique', content: ch11_flatGlass() },
    { title: 'Door Glass Installation — Full Techniques', content: ch12_doorGlass() },
    { title: 'Curved Rear Window — Shrinking Theory and Master Procedure', content: ch13_rearWindow() },
    { title: 'Special Glass Surfaces — Sunroof, Dot Matrix, and Antenna Glass', content: ch14_specialGlass() },
    { title: 'Quality Control and Final Inspection Standards', content: ch15_qcAndInspection() },
    { title: 'Curing Process — What Happens After Installation', content: ch16_curing() },
    { title: 'Aftercare, Maintenance, and Long-Term Film Care', content: ch17_aftercare() },
    { title: 'Pricing Strategy and Service Tier Structure', content: ch18_pricing() },
    { title: 'Troubleshooting — 30+ Common Defects, Root Causes, and Corrections', content: ch19_troubleshooting() },
    { title: 'Master Panel Procedures — All 12 Glass Types', content: ch20_panelProcedures() },
    { title: 'Shop Operations — Scheduling, Workflow, and Efficiency', content: ch21_businessOperations() },
    { title: 'Professional Development, Certification, and Industry Standards', content: ch22_certificationAndProfessional() },
    { title: 'Appendices', content: ch23_appendices() },
  ];

  return chapters;
}

module.exports = { generateTintManual };
