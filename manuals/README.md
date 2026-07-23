# Skill Forge Core Operations Manuals

Authoritative 150–200 page reference manuals covering **every aspect** of professional shop operations — not training course outlines or abbreviated class materials.

These are governing SOP documents for installers, estimators, lead technicians, and managers.

## Manuals

| Manual | Focus | Output |
|--------|-------|--------|
| PPF Master Install | Complete paint protection film operations | `manuals/output/ppf-master-install.pdf` |
| Window Tint Master Install | Complete window film operations | `manuals/output/window-tint-master-install.pdf` |
| Customer Service Operations | Front-of-house, sales, client experience | `manuals/output/customer-service-operations.pdf` |
| Vinyl Wrap Master Install | Complete vehicle wrap operations | `manuals/output/vinyl-wrap-master-install.pdf` |
| Ceramic Coating Application | Complete coating operations | `manuals/output/ceramic-coating-application.pdf` |
| Paint Correction & Detailing | Complete correction and detailing operations | `manuals/output/paint-correction-detailing.pdf` |

## What each manual covers

Every manual includes:

- **Core technical chapters** — material science, tools, safety, prep, application, QC, pricing, warranty
- **Panel/zone procedure library** — full SOP for every major coverage area
- **50 core operational domains** — contamination control, ADAS, fleet ops, liability, inventory, KPIs, etc.
- **Vehicle application matrix** — 20 vehicle platforms
- **Climate adaptation standards**
- **Troubleshooting encyclopedia** — defects, causes, corrections, prevention
- **Technician competency standards** — shop authorization gates (not classroom exercises)
- **Field scenario analysis** — operational decision frameworks
- **80 technical bulletins** — mandatory shop SOPs
- **Forms, job cards, and QC templates**

## Build

```bash
npm run generate:manuals      # regenerate from source generators
npm run build:manuals:pdf     # build all PDFs
```

## Public downloads

Published via **GitHub Pages** on the `cursor-design-system` branch:

**Index:** https://forge-ppf-wraps.github.io/core-workbooks/

| Manual | PDF |
|--------|-----|
| PPF Master Install | https://forge-ppf-wraps.github.io/core-workbooks/manuals/ppf-master-install.pdf |
| Window Tint Master Install | https://forge-ppf-wraps.github.io/core-workbooks/manuals/window-tint-master-install.pdf |
| Customer Service Operations | https://forge-ppf-wraps.github.io/core-workbooks/manuals/customer-service-operations.pdf |
| Vinyl Wrap Master Install | https://forge-ppf-wraps.github.io/core-workbooks/manuals/vinyl-wrap-master-install.pdf |
| Ceramic Coating Application | https://forge-ppf-wraps.github.io/core-workbooks/manuals/ceramic-coating-application.pdf |
| Paint Correction & Detailing | https://forge-ppf-wraps.github.io/core-workbooks/manuals/paint-correction-detailing.pdf |

After pushing, enable Pages under **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Relationship to student workbooks

| Document | Purpose |
|----------|---------|
| **Core Operations Manual** (this) | Complete shop reference — every aspect, every procedure, every operational domain |
| **Student Workbook** (`workbooks/`) | Condensed 3-day hands-on course companion for classroom training |

The manuals are the source of truth. Workbooks are derived training companions — not the other way around.
