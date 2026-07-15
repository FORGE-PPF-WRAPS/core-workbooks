# CORE Workbooks — Architecture & Design System Audit

This document records the repository audit, improvement plan, and structural decisions for the CORE Workbooks platform. The application was **not rebuilt**; existing Markdown content and build flows were preserved while centralizing styling and PDF generation.

## Current architecture

```
core-workbooks/
├── design-system/          # Master design system (source of truth)
├── scripts/
│   ├── lib/                # Shared build utilities
│   ├── build-workbooks.js  # Workbook HTML/PDF pipeline
│   └── build-docs.js       # SOP/forms/policies pipeline
├── workbooks/
│   ├── manifest.json       # Course registry
│   ├── core/<course>/      # Markdown source
│   └── output/<theme>/     # Generated HTML/PDF
├── docs/
│   ├── manifest.json       # Document registry
│   └── output/<theme>/     # Generated HTML/PDF
└── styles/                 # Deprecated shims → design-system/
```

### Content vs layout separation

| Layer | Location | Responsibility |
|-------|----------|----------------|
| Content | `*.md` files | Course/document text, tables, component markup |
| Registry | `manifest.json` | Title, version, source path, document type |
| Layout shell | `scripts/lib/covers.js` | Cover pages, footers, field blocks |
| Presentation | `design-system/` | Tokens, components, themes |
| Assembly | `scripts/lib/html.js` | Markdown → HTML document wrapper |
| Output | `scripts/lib/pdf.js` | Headless Chrome PDF generation |

## Audit findings

### Duplicate code (resolved)

| Issue | Before | After |
|-------|--------|-------|
| Print CSS | `workbooks/assets/print.css` duplicated `styles/shared/print-base.css` with hardcoded colors | Single `design-system/` stack |
| PDF generation | Identical `buildPdf()` in both build scripts | `scripts/lib/pdf.js` |
| Cover/footer HTML | Inline in each build script | `scripts/lib/covers.js` |
| Theme loading | Docs-only theme support | Both pipelines use `scripts/lib/theme.js` |

### Inconsistent styling (resolved)

| Issue | Resolution |
|-------|------------|
| Workbooks used branded colors without theme toggle | Theme-aware builds (`whitelabel` / `branded`) |
| `.lab` vs `.procedure` naming | Unified in `components.css` with legacy aliases |
| Hardcoded "Velox Wrap Co" in workbook cover/footer | Neutral white-label defaults; branded theme uses Skill Forge |
| No page numbering | CSS `@page @bottom-center` counter (Chrome print) |

### Reusable components

Existing Markdown classes map to design system components:

- `callout`, `callout.tip`, `callout.warning`
- `checklist`
- `lab` / `lesson-page`
- `procedure` / `sop-page`
- `knowledge-check` / `quiz-page`
- `notes-page`, `notes-lines`
- `revision-block` (docs)
- `layout-cover`, `layout-certificate`, `layout-appendix`

### Unused or orphaned assets

| Item | Status | Recommendation |
|------|--------|----------------|
| `docs/sops/_template.md` | Template only, not in manifest | Keep as author reference; add SOPs to manifest when ready |
| `workbooks/core/vinyl-wrap/README.md` | Placeholder course | Add `workbook.md` + manifest entry when content is written |
| `workbooks/assets/brand/fonts/` | Font files may be missing | Add `skill-forge-display.woff2` for branded theme |
| `workbooks/assets/brand/logos/skill-forge-logo.svg` | May be missing | Falls back to `forge-ppf-logo.jpg` |
| `styles/shared/print-base.css` | Deprecated shim | Remove in a future major version |
| `workbooks/assets/print.css` | Deprecated shim | Remove in a future major version |
| `docs/output/*.html` | Gitignored build artifacts | Expected; regenerate via `npm run build:docs` |

### Branding inconsistencies (addressed)

| Area | Standard |
|------|----------|
| Typography | `--font-body`, `--font-heading`, `--font-display` tokens |
| Spacing | `--space-*` scale in `tokens.css` |
| Headers | `h1`–`h4` rules in `base.css` |
| Footers | `buildWorkbookFooter()` / `buildDocFooter()` per theme |
| Page numbers | `@page` counter in `base.css` |
| Icons | Unicode checklist boxes (`☐`); SVG logo when branded |
| Print layout | US Letter, 0.75in margins, cover page break |

## Improvement plan (completed in this phase)

1. **Centralize design tokens** — `design-system/tokens.css` + theme overrides
2. **Unify component library** — `design-system/components.css` with layout aliases
3. **Extract shared build library** — `scripts/lib/*`
4. **Manifest-driven workbooks** — `workbooks/manifest.json`
5. **Theme parity** — Workbooks support `--branded` like docs
6. **Deprecate legacy CSS paths** — `styles/` and `workbooks/assets/print.css` shims

## Future improvements (not in scope)

- **Vinyl Wrap workbook** — Add content and manifest entry
- **SOP documents** — Populate `docs/sops/` and register in `docs/manifest.json`
- **Running headers** — Per-section `.running-header` in Markdown where needed
- **Brand kit** — Upload monogram SVG and display font to `workbooks/assets/brand/`
- **CI build** — GitHub Action to verify `npm run build:all:pdf` on push
- **Remove deprecated shims** — Delete `styles/` duplicate paths once external refs are gone

## Build commands

```bash
npm install

# Workbooks
npm run build                 # white-label HTML → workbooks/output/whitelabel/
npm run build:pdf             # white-label PDF
npm run build:branded         # branded HTML
npm run build:branded:pdf     # branded PDF

# Documents
npm run build:docs            # white-label HTML
npm run build:docs:pdf        # white-label PDF
npm run build:docs:branded:pdf

# All
npm run build:all:pdf
```

## Adding new content

### Workbook

1. Create `workbooks/core/<id>/workbook.md`
2. Add entry to `workbooks/manifest.json`
3. Run `npm run build:pdf`

### SOP / form / policy

1. Create Markdown under `docs/<category>/`
2. Add entry to `docs/manifest.json`
3. Run `npm run build:docs:pdf`

No CSS changes required for either path.
