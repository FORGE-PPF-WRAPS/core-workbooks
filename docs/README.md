# SOP & Operations Documents

White-label, print-ready Standard Operating Procedures and operational docs for automotive restyling shops.

## Folder structure

```
docs/
├── manifest.json          ← document registry (required for build)
├── output/                ← generated HTML/PDF (gitignored)
├── reference/             ← drop your existing docs here for conversion
├── sops/                  ← SOP source files (.md)
├── policies/              ← shop policies
├── checklists/            ← printable checklists
└── forms/                 ← intake, inspection, sign-off forms
```

## Document library

| ID | Title | Category |
|----|-------|----------|
| `vehicle-inspection-form` | Vehicle Inspection Form | forms |
| `change-order-form` | Change Order Form | forms |
| `warranty-certificate` | Warranty Certificate | forms |
| `independent-contractor-agreement` | Independent Contractor Agreement | agreements |
| `referral-partner-agreement` | Referral Partner Agreement | agreements |
| `training-student-agreement` | Training Student Agreement | agreements |
| `forge-license-agreement` | Forge License Agreement | agreements |
| `white-label-agreement` | White-Label Agreement | agreements |
| `service-agreement` | Service Agreement | agreements |
| `asset-ownership-agreement` | Asset Ownership Agreement | agreements |
| `ip-assignment-agreement` | IP Assignment Agreement | agreements |
| `terms-of-service` | Terms of Service | policies |
| `privacy-policy` | Privacy Policy | policies |
| `trademark-usage-policy` | Trademark Usage Policy | policies |

## Themes

| Theme | Command | Use case |
|-------|---------|----------|
| **White-label** (default) | `npm run build:docs` | Client-ready, neutral styling, no brand |
| **Branded** | `npm run build:docs:branded` | Your shop — gradient cover, logo, display font |

Both themes produce US Letter print output.

## Add a document

1. Create `docs/sops/your-doc-id.md` (copy from `_template.md`)
2. Register in `docs/manifest.json`:

```json
{
  "documents": [
    {
      "id": "vehicle-intake",
      "title": "Vehicle Intake Procedure",
      "subtitle": "Customer drop-off and pre-inspection",
      "type": "SOP",
      "version": "1.0",
      "source": "docs/sops/vehicle-intake.md"
    }
  ]
}
```

3. Build:

```bash
npm install
npm run build:docs              # white-label HTML
npm run build:docs:pdf          # white-label HTML + PDF
npm run build:docs:branded      # branded HTML
npm run build:docs:branded:pdf  # branded HTML + PDF
```

Output: `docs/output/whitelabel/` and `docs/output/branded/`

## Markdown components

Shared layout components from `design-system/` (legacy aliases in parentheses):

| Layout | Class | Legacy alias |
|--------|-------|--------------|
| Callout | `callout`, `callout warning`, `callout tip` | — |
| SOP / procedure | `sop-page` | `procedure` |
| Checklist | `checklist` | — |
| Quiz | `quiz-page` | `knowledge-check` |
| Revision history | `revision-block` | — |
| Page break | `page-break` | — |

Examples:

- `<div class="callout">` — general notice
- `<div class="callout warning">` — safety / compliance
- `<div class="callout tip">` — best practice
- `<div class="procedure">` or `<div class="sop-page">` — step-by-step block
- `<ul class="checklist">` — printable checkboxes
- `<div class="revision-block">` — version history table
- `<div class="page-break"></div>` — force new page

See `design-system/README.md` and `docs/ARCHITECTURE.md` for the full component library.

## Reference files

Place your existing completed docs in `docs/reference/` — send the file list to the agent for conversion into the manifest + markdown sources.

## Document ID naming

Lowercase, hyphens only: `ppf-prep-sequence`, `tint-qc-checklist`, `shop-safety-policy`
