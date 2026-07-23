# Skill Forge / Forge PPF Brand Kit

Official brand assets for branded PDF output (`npm run build:branded:pdf`, `npm run build:docs:branded:pdf`).

## Production logo files

| File | Role | Use |
|------|------|-----|
| `logos/forge-main-logo.png` | **Hero** | Workbook covers, marketing hero |
| `logos/forge-ppf-logo.jpg` | **Primary / service** | SOPs, manuals, forms, documents |
| `logos/forge-secondary-monogram-logo.jpg` | **Monogram** | Cover watermarks, headers, favicons |
| `logos/skill-forge-logo.svg` | Fallback | Vector placeholder if production files missing |
| `logos/skill-forge-monogram.svg` | Fallback | Vector monogram placeholder |

Paths are defined in `brand-tokens.json` and resolved by `scripts/lib/assets.js`.

## Brand palette (v2.0)

| Token | Hex | Use |
|-------|-----|-----|
| Forge Pink | `#FF0F7B` | Gradient start, Day 1 |
| Forge Purple | `#7D3CFF` | Gradient mid, Day 2 |
| Forge Cyan | `#00D5FF` | Gradient end, Day 3 |
| Forge Gold | `#D9B44A` | Certificates, premium |
| Forge Black | `#080808` | Covers, backgrounds |

**Gradient:** `135deg` — `#FF0F7B` → `#7D3CFF` → `#00AAFF`

Defined in `brand-tokens.json` and applied via `design-system/themes/branded.css`.

## Folder structure

```
workbooks/assets/brand/
├── brand-tokens.json       ← colors, logos, typography, tagline
├── gradient.json
├── logos/
│   ├── forge-main-logo.png
│   ├── forge-ppf-logo.jpg
│   ├── forge-secondary-monogram-logo.jpg
│   └── skill-forge-*.svg   ← fallbacks only
└── fonts/
    └── skill-forge-display.woff2  ← add your file
```

## Typography

| Role | Font | File |
|------|------|------|
| Headlines | Skill Forge Display | `fonts/skill-forge-display.woff2` |
| Body | Inter / Segoe UI | System |

## Rebuild after replacing assets

```bash
npm run build:all:branded:pdf
npm run build:library:copy
```

No CSS changes required when filenames in `brand-tokens.json` stay the same.
