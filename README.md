# Skill Forge Core Workbooks

Training workbooks, SOPs, and operational documents for automotive restyling.

**GitHub:** https://github.com/FORGE-PPF-WRAPS/core-workbooks  
**GitLab:** `veloxwrapco/skill-forge-workbooks-v1.0` (legacy mirror)

## Repository layout

| Path | Contents |
|------|----------|
| `design-system/` | Master print design system (tokens, components, themes) |
| `workbooks/` | Student training workbooks (Tint, PPF, Vinyl Wrap) |
| `docs/` | White-label SOPs, policies, checklists, forms |
| `styles/` | Deprecated CSS shims — see `design-system/` |

## Core Courses (3-Day Beginner)

| Course | Status | Source | Print Output |
|--------|--------|--------|--------------|
| Vinyl Wrap | Planned | — | — |
| **Window Tint** | **Ready** | `workbooks/core/window-tint/workbook.md` | `workbooks/output/window-tint-workbook.pdf` |
| **PPF** | **Ready** | `workbooks/core/ppf/workbook.md` | `workbooks/output/ppf-workbook.pdf` |

## SOPs & Documents

White-label, print-ready operational docs with optional branded styling.

```bash
npm run build:docs              # white-label HTML
npm run build:docs:pdf          # white-label PDF
npm run build:docs:branded      # your brand (gradient, logo, font)
npm run build:docs:branded:pdf  # branded PDF
```

See `docs/README.md` for adding documents. Drop reference files in `docs/reference/`.

**Branch:** `cursor/sop-docs-d9e4`

## Build & Print

### Prerequisites

- Node.js 18+
- Google Chrome (for PDF generation)

### Install & Build

```bash
npm install
npm run build              # white-label HTML
npm run build:pdf          # white-label HTML + PDF
npm run build:branded:pdf  # branded HTML + PDF (Skill Forge theme)
```

Output files land in `workbooks/output/<theme>/`:

- `whitelabel/window-tint-workbook.html` / `.pdf`
- `whitelabel/ppf-workbook.html` / `.pdf`

See `design-system/README.md` and `docs/ARCHITECTURE.md` for the design system and layout components.

### Print from Browser

Open any `.html` file in Chrome and use **Print → Save as PDF** or send to a printer. The stylesheet is optimized for US Letter paper.

## Workbook Structure

Each core course follows the same 3-day format:

1. **Day 1 — Foundations** — Film science, tools, safety, prep, first installs
2. **Day 2 — Technique** — Shrinking/stretching, complex panels, troubleshooting
3. **Day 3 — Professional Practice** — Capstone install, QC, business basics, assessment

Every workbook includes:

- Pre-course checklist
- Daily schedules and learning objectives
- Classroom sessions with reference tables
- Hands-on lab exercises with instructor sign-off
- Knowledge checks
- Notes pages
- Course completion record

## Editing

Source files are Markdown in `workbooks/core/<course>/workbook.md`. Edit the Markdown, then rebuild. HTML div classes (`callout`, `lab`, `knowledge-check`, etc.) pass through for print styling.

## License

© Velox Wrap Co. Training materials for enrolled students. See [LICENSE](LICENSE).
