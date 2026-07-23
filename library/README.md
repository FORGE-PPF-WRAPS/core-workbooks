# Skill Forge Document Library

Unified delivery package for the complete turnkey business system.

## Contents

| Category | Description |
|----------|-------------|
| **Turnkey** | Master deliverables index |
| **Branding** | Brand guidelines, trademark policy |
| **Website** | Digital playbook, terms, privacy |
| **Marketing** | Marketing resources kit |
| **Pricing** | Per-service pricing guides |
| **Manuals** | 6 core operations manuals (150–180 pages each) |
| **Workbooks** | 3-day student training workbooks |
| **SOPs** | Bay-posted standard operating procedures |
| **Checklists** | Daily QC and delivery checklists |
| **Customer** | Estimates, agreements, aftercare, releases |
| **Warranty** | Policy, certificate, claim form |
| **Legal** | Agreements and license documents |

## Build

```bash
npm run build:library          # Build all branded PDFs + assemble library
npm run build:library:copy     # Copy existing PDFs only (skip rebuild)
```

Output:
- `library/branded/` — all PDFs organized by category
- `library/index.html` — browse and download portal
- `library/manifest.json` — machine-readable index

## GitHub

Browse: https://github.com/FORGE-PPF-WRAPS/core-workbooks/tree/main/library
