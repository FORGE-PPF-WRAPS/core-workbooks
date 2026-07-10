# Skill Forge Image Assets

Drop photos, diagrams, and placeholders here. Use **PNG or WebP** for photos (min 1200px wide for print). Use **SVG** for line-art diagrams.

## Full repo asset map

```
workbooks/assets/
│
├── brand/                                    ← BRANDING KIT
│   ├── logos/
│   │   ├── skill-forge-monogram.svg
│   │   ├── skill-forge-monogram.png
│   │   ├── skill-forge-logo.svg              ← avatar + arms crossed
│   │   ├── skill-forge-logo.png
│   │   ├── forge-ppf-logo.svg                ← Forge PPF lockup (if separate)
│   │   ├── forge-ppf-logo.png
│   │   ├── forge-wraps-logo.svg              ← Forge Wraps lockup (if separate)
│   │   ├── forge-wraps-logo.png
│   │   └── velox-wrapco-logo.svg
│   ├── fonts/
│   │   ├── skill-forge-display.woff2         ← Forge PPF typeface
│   │   ├── skill-forge-display.woff
│   │   └── skill-forge-display.otf
│   └── gradient.json
│
└── images/
    │
    ├── shared/                               ← USED BY 2+ COURSES
    │   ├── tools/
    │   │   ├── heat-gun.png
    │   │   ├── hard-squeegee.png
    │   │   ├── soft-squeegee.png
    │   │   ├── felt-squeegee.png
    │   │   ├── spray-bottle-slip.png
    │   │   ├── spray-bottle-tack.png
    │   │   ├── utility-knife.png
    │   │   ├── snitty-knife.png
    │   │   ├── extension-blade-holder.png
    │   │   ├── plotter.png
    │   │   ├── inspection-light.png
    │   │   ├── tack-cloth.png
    │   │   ├── lint-roller.png
    │   │   ├── microfiber-towel.png
    │   │   ├── tape-measure.png
    │   │   ├── infrared-thermometer.png
    │   │   └── application-gloves.png
    │   ├── ppe/
    │   │   ├── safety-glasses.png
    │   │   ├── nitrile-gloves.png
    │   │   └── respirator.png
    │   └── workspace/
    │       ├── clean-bay-overview.png
    │       ├── led-lighting-setup.png
    │       └── film-storage-rack.png
    │
    ├── window-tint/                          ← TINT ONLY
    │   ├── tools/
    │   │   ├── utility-knife.png
    │   │   ├── hard-card.png
    │   │   ├── tint-blade-holder.png
    │   │   ├── scrub-pad-0000.png
    │   │   ├── heat-gun-holster.png
    │   │   └── tint-plotter.png
    │   ├── techniques/
    │   │   ├── outside-cut-method.png
    │   │   ├── inside-cut-method.png
    │   │   ├── heat-shrink-finger.png
    │   │   ├── defroster-line-squeegee.png
    │   │   ├── rear-window-h-pattern.png
    │   │   └── wet-out-center-out.png
    │   └── diagrams/
    │       ├── vlt-chart.png
    │       └── window-positions.png
    │
    ├── ppf/                                  ← PPF ONLY
    │   ├── tools/
    │   │   ├── ppf-hard-squeegee-felt.png
    │   │   ├── slip-solution-setup.png
    │   │   ├── tack-solution-setup.png
    │   │   ├── clay-bar.png
    │   │   ├── iron-remover.png
    │   │   └── chip-filler.png
    │   ├── techniques/
    │   │   ├── anchor-point-hood.png
    │   │   ├── relief-cut.png
    │   │   ├── edge-wrap.png
    │   │   ├── edge-tuck.png
    │   │   ├── edge-flush.png
    │   │   ├── post-heat.png
    │   │   └── silvering-example.png
    │   └── diagrams/
    │       ├── partial-front-coverage.png
    │       ├── full-front-coverage.png
    │       └── decon-sequence.png
    │
    └── vinyl-wrap/                           ← WRAP ONLY (planned course)
        ├── tools/
        │   ├── wrap-hard-squeegee.png
        │   ├── wrap-felt-squeegee.png
        │   ├── wrap-knife.png
        │   ├── seam-roller.png
        │   ├── primer-promoter.png
        │   ├── edge-seal-tape.png
        │   ├── magnet-holders.png
        │   └── wrap-plotter.png
        ├── techniques/
        │   ├── hinge-method.png
        │   ├── relief-cut-curve.png
        │   ├── post-heat-relax.png
        │   ├── door-handle-cup.png
        │   ├── mirror-wrap.png
        │   └── inlay-seam.png
        └── diagrams/
            ├── panel-naming.png
            └── stretch-direction.png
```

## Naming rules

| Rule | Example |
|------|---------|
| All lowercase | `heat-gun.png` not `Heat-Gun.png` |
| Hyphens between words | `spray-bottle-slip.png` |
| No spaces or underscores | ✗ `heat gun.png` ✗ `heat_gun.png` |
| PNG or WebP for photos | `.png` preferred for print |
| SVG for vector diagrams | `window-positions.svg` |
| One tool per file | Don't combine multiple tools in one image |

## Priority upload order

### Tier 1 — Brand (required first)
- `brand/logos/skill-forge-monogram.svg`
- `brand/logos/skill-forge-logo.svg`
- `brand/fonts/skill-forge-display.woff2`

### Tier 2 — Shared tools (all courses)
All files in `images/shared/tools/` and `images/shared/ppe/`

### Tier 3 — Per course
- `images/window-tint/tools/` + `techniques/`
- `images/ppf/tools/` + `techniques/`
- `images/vinyl-wrap/tools/` + `techniques/` (when ready)

## Placeholder tip

If you don't have a photo yet, still create the file with the exact name (even a blank 1×1 PNG or a labeled placeholder). The build can detect missing vs. present files.

## Workbook reference map

| Workbook section | Image folder |
|------------------|--------------|
| Day 1 — Tools | `{course}/tools/` + `shared/tools/` |
| Day 1 — Safety/PPE | `shared/ppe/` |
| Day 1 — Workspace | `shared/workspace/` |
| Day 2 — Techniques | `{course}/techniques/` |
| Day 3 — Packages/diagrams | `{course}/diagrams/` |
