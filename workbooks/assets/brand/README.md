# Skill Forge Brand Assets

Drop your brand files here. The workbook build uses these paths and names.

## Folder structure

```
workbooks/assets/brand/
├── logos/
│   ├── skill-forge-monogram.svg      ← monogram (Skill Forge primary / secondary)
│   ├── skill-forge-monogram.png      ← PNG fallback if no SVG
│   ├── skill-forge-logo.svg          ← full logo with avatar (arms crossed)
│   ├── skill-forge-logo.png          ← PNG fallback
│   ├── velox-wrapco-logo.svg         ← Velox Wrap Co wordmark (optional)
│   └── velox-wrapco-logo.png
├── fonts/
│   └── skill-forge-display.woff2     ← the Forge PPF display font (preferred)
│   └── skill-forge-display.woff      ← fallback
│   └── skill-forge-display.otf       ← or .ttf if that's what you have
└── gradient.json                     ← optional: gradient color stops (see below)
```

## Naming rules

| File | Use on workbook |
|------|-----------------|
| `skill-forge-monogram.svg` | Cover corner mark, page headers, footer |
| `skill-forge-logo.svg` | Cover hero — full lockup with avatar |
| `velox-wrapco-logo.svg` | “Presented by Velox Wrap Co” line on cover |
| `skill-forge-display.woff2` | All headings — same typeface as “Forge PPF” |

**Prefer SVG for logos** (sharp at any print size). Add a matching `.png` at 2× resolution only if you don’t have SVG.

**Font:** Name it `skill-forge-display` with the correct extension (`.woff2`, `.woff`, or `.otf`). Use this filename even if the source font file has a different name — the build script expects one predictable path.

## gradient.json (optional)

If the gradient isn’t baked into the logo files, add:

```json
{
  "angle": 135,
  "stops": [
    { "color": "#______", "position": "0%" },
    { "color": "#______", "position": "100%" }
  ]
}
```

## After you add files

Commit and push to the branch, then tell the agent to wire branding in. Or run locally:

```bash
npm run build:pdf
```

## Minimum to get started

At least these three:

1. `logos/skill-forge-monogram.svg`
2. `logos/skill-forge-logo.svg`
3. `fonts/skill-forge-display.woff2` (or `.otf` / `.ttf`)
