# Skill Forge Brand Kit

Official brand assets for CORE Workbooks branded PDF output (`npm run build:branded:pdf`).

## Brand palette

| Token | Hex | Use |
|-------|-----|-----|
| Magenta | `#FF2DAA` | Gradient start, accent highlights |
| Purple | `#7A3FFF` | Gradient mid, headings, borders |
| Cyan | `#15D8FF` | Gradient end, secondary accents |
| Gold | `#D4AF37` | Certificates, premium callouts |
| Black | `#0A0A0F` | Cover background, heading text |
| Silver | `#B8BDC9` | Taglines, muted labels |
| White | `#FFFFFF` | Cover text on gradient |

**Gradient:** `135deg` — `#FF2DAA` → `#7A3FFF` → `#15D8FF`

Defined in `brand-tokens.json` and applied via `design-system/themes/branded.css`.

## Folder structure

```
workbooks/assets/brand/
├── brand-tokens.json              ← colors, gradient, typography, tagline
├── gradient.json                  ← gradient stops only
├── logos/
│   ├── skill-forge-monogram.svg   ← crosshair F icon (headers, favicons)
│   ├── skill-forge-logo.svg       ← full lockup for cover pages
│   └── skill-forge-logo-horizontal.svg  ← compact horizontal lockup
└── fonts/
    └── skill-forge-display.woff2  ← headline font (add your file)
```

## Logo files

| File | Use |
|------|-----|
| `skill-forge-monogram.svg` | Page headers, small marks, watermarks |
| `skill-forge-logo.svg` | Cover hero — monogram + wordmark + tagline |
| `skill-forge-logo-horizontal.svg` | Inline headers on light backgrounds |

SVG logos ship with the repo as vector placeholders based on the brand style guide. Replace with your production artwork when available — keep the same filenames.

## Typography

| Role | Font | File |
|------|------|------|
| Headlines | Skill Forge Display (italic, distressed) | `fonts/skill-forge-display.woff2` |
| Body | Segoe UI / Helvetica Neue | System |
| Labels / tagline | Geometric sans, all-caps | System |

**To enable the display font:** drop `skill-forge-display.woff2` (or `.woff` / `.otf`) into `fonts/`. Until then, branded headings fall back to Arial Black / Impact italic.

## Tagline

> WHERE STUDENTS BECOME TEACHERS

Rendered automatically on branded cover pages from `brand-tokens.json`.

## Service brand (Forge PPF)

The Forge PPF service identity uses the same palette and monogram. Service-specific marketing assets (vehicle photography, QR codes, social handles) are not used in workbook print output.

## Replacing placeholder assets

1. Export production SVGs from your design tool
2. Overwrite files in `logos/` using the same names
3. Add `skill-forge-display.woff2` to `fonts/`
4. Rebuild: `npm run build:branded:pdf`

No CSS changes required when filenames match.
