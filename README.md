# Skill Forge Core Workbooks

Training workbooks for **Velox Wrap Co** Skill Forge — core automotive restyling courses.

**GitHub:** `veloxwrapco/core-workbooks`  
**GitLab:** `veloxwrapco/skill-forge-workbooks-v1.0` (legacy mirror)

## Core Courses (3-Day Beginner)

| Course | Status | Source | Print Output |
|--------|--------|--------|--------------|
| Vinyl Wrap | Planned | — | — |
| **Window Tint** | **Ready** | `workbooks/core/window-tint/workbook.md` | `workbooks/output/window-tint-workbook.pdf` |
| **PPF** | **Ready** | `workbooks/core/ppf/workbook.md` | `workbooks/output/ppf-workbook.pdf` |

## Master Core Operations Manuals (150–200 pages each)

Complete shop reference manuals covering every aspect of each service — not 3-day class outlines.

| Manual | Output |
|--------|--------|
| PPF Master Install | `manuals/output/ppf-master-install.pdf` |
| Window Tint Master Install | `manuals/output/window-tint-master-install.pdf` |
| Customer Service Operations | `manuals/output/customer-service-operations.pdf` |
| Vinyl Wrap Master Install | `manuals/output/vinyl-wrap-master-install.pdf` |
| Ceramic Coating Application | `manuals/output/ceramic-coating-application.pdf` |
| Paint Correction & Detailing | `manuals/output/paint-correction-detailing.pdf` |

```bash
npm run generate:manuals    # regenerate chapter content
npm run build:manuals:pdf   # build all manual PDFs
```

See `manuals/README.md` for the distinction between core manuals and student workbooks.

## Build & Print

### Prerequisites

- Node.js 18+
- Google Chrome (for PDF generation)

### Install & Build

```bash
npm install
npm run build        # HTML output
npm run build:pdf    # HTML + PDF output
```

Output files land in `workbooks/output/`:

- `window-tint-workbook.html` / `.pdf`
- `ppf-workbook.html` / `.pdf`

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
