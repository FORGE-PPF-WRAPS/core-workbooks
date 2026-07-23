# Turnkey Business System — Complete Deliverables Guide

**Forge PPF / Skill Forge — Everything included in your shop launch package**

---

## Purpose

This document is the master index for the complete turnkey business system: branding, websites, operations manuals, installation manuals, training workbooks, standard operating procedures, pricing guides, warranties, customer documents, and marketing resources.

Use it during onboarding, licensing, and white-label deployment to verify every deliverable is configured for your shop.

---

## Document hierarchy

Forge is built like an operating system for installers. **The SOP Manual is the foundation** — everything else points back to it.

| Layer | Document | Purpose |
|-------|----------|---------|
| **1** | **SOP Manual** | How the business runs — daily operations |
| **2** | Master Installer Manual | How to perform the work — technical depth |
| **3** | Technical Bulletins | Updates, refinements, and improvements |
| **4** | Training Workbooks | Hands-on learning for new installers |
| **5** | Quality Standards Manual | Inspection criteria and pass/fail definitions |
| **6** | Operations Forms & Checklists | Documents used at the point of work |
| **7** | Brand Standards Manual | Logos, colors, fonts, and voice |

New team members start with the SOP Manual. Master Installer Manuals teach execution. Technical bulletins handle continuous improvement.

**Master index:** `forge-sop-manual` — `docs/sops/forge-sop-manual.md`

---

## 1. Branding & Identity

| Deliverable | Document ID | Location |
|-------------|-------------|----------|
| Brand Identity Guidelines | `brand-identity-guidelines` | `docs/guides/` |
| Trademark Usage Policy | `trademark-usage-policy` | `docs/policies/` |
| White-Label Agreement | `white-label-agreement` | `docs/agreements/` |
| Forge License Agreement | `forge-license-agreement` | `docs/agreements/` |
| Logo assets (SVG) | — | `workbooks/assets/brand/logos/` |
| Design tokens (v2.0) | — | `workbooks/assets/brand/brand-tokens.json` |
| Branded theme CSS | — | `design-system/themes/branded.css` |

**Implementation checklist**

<ul class="checklist">
<li>Apply brand colors and typography to website and print materials</li>
<li>Install logo package on website header, email signature, and shop signage</li>
<li>Configure white-label fields in all customer-facing PDFs</li>
<li>Train staff on trademark usage policy</li>
</ul>

---

## 2. Website & Digital Presence

| Deliverable | Document ID | Location |
|-------------|-------------|----------|
| Website & Digital Playbook | `website-digital-presence-playbook` | `docs/guides/` |
| Terms of Service | `terms-of-service` | `docs/policies/` |
| Privacy Policy | `privacy-policy` | `docs/policies/` |
| Document library portal | — | `library/index.html` |

**Required website pages**

<ul class="checklist">
<li>Home — services overview, trust signals, CTA to quote/consultation</li>
<li>Services — PPF, tint, wrap, ceramic, detailing (one page per service)</li>
<li>Gallery / portfolio — before-and-after with photography standards</li>
<li>About — brand story, certifications, warranty promise</li>
<li>Training — course catalog (links to workbooks and enrollment)</li>
<li>Contact / quote — form, phone, hours, map</li>
<li>Resources — link to warranty policy, aftercare, and FAQ</li>
</ul>

---

## 3. SOP Manual — Foundation (37 procedures)

**Forge Standard Operating Procedures v1.0** — `forge-sop-manual`

| Section | Procedures |
|---------|------------|
| 1. Company Operations | SOP-001 – SOP-004 |
| 2. Customer Experience | SOP-100 – SOP-107 |
| 3. Installation Operations | SOP-200 – SOP-206 |
| 4. Window Tint | SOP-300 |
| 5. Paint Protection Film | SOP-400 |
| 6. Vinyl Wrap | SOP-500 |
| 7. Colored TPU | SOP-600 |
| 8. Business Operations | SOP-700 – SOP-705 |
| 9. Marketing | SOP-800 – SOP-803 |
| 10. Emergency Procedures | SOP-900 – SOP-903 |

Each SOP is a standalone printable document in `docs/sops/` (e.g. `sop-103-vehicle-check-in`). Post bay-relevant SOPs at workstations; train CS on Section 2 before phone duty.

---

## 4. Master Installer Manuals (150–200 pages each)

Complete shop reference — every operational domain, not training course outlines.

| Manual | ID |
|--------|-----|
| PPF Master Install | `ppf-master-install` |
| Window Tint Master Install | `window-tint-master-install` |
| Vinyl Wrap Master Install | `vinyl-wrap-master-install` |
| Ceramic Coating Application | `ceramic-coating-application` |
| Paint Correction & Detailing | `paint-correction-detailing` |
| Customer Service Operations | `customer-service-operations` |

Each manual includes: material science, tools, safety, prep, application, QC, pricing, warranty, 50 core operational domains, vehicle matrix, troubleshooting encyclopedia, competency standards, and 80+ technical bulletins.

**Relationship to SOPs:** SOPs define *what* to do and *when*. Master Installer Manuals define *how* to do it with technical depth. Service workflow SOPs (300, 400, 500, 600) reference the corresponding manual.

---

## 5. Technical Bulletins

80+ bulletins per manual — mandatory shop updates published as manual chapters. When a bulletin changes a procedure, update the corresponding SOP in the next SOP Manual revision.

---

## 6. Installation Manuals & Panel Procedures

Installation coverage is integrated into each service operations manual above. Panel procedure libraries are included as dedicated chapters:

<ul class="checklist">
<li>PPF — full coverage zone procedures and supplemental panel library</li>
<li>Window tint — 12+ glass-type master procedures</li>
<li>Vinyl wrap — full panel procedure library</li>
<li>Ceramic / detailing — surface procedure library</li>
</ul>

**Bay reference:** Print individual SOPs from `docs/sops/sop-*.md` for daily use. Workflow SOPs (SOP-300 through SOP-600) are the bay-posted summaries; manuals hold panel-level detail.

---

## 7. Training Workbooks (3-Day Core Programs)

| Course | Status | ID |
|--------|--------|-----|
| Window Tint Installation | Complete | `window-tint` |
| Paint Protection Film (PPF) | Complete | `ppf` |
| Vinyl Wrap | Planned | `vinyl-wrap` |
| Ceramic Coating | Planned | `ceramic-coating` |
| Paint Correction & Detailing | Planned | `paint-correction` |
| Customer Service & Sales | Planned | `customer-service` |

Each workbook: Day 1 Foundations, Day 2 Technique, Day 3 Professional Practice — labs, knowledge checks, completion certificate.

**Training Student Agreement:** `training-student-agreement`

---

## 8. Quality Standards Manual

Inspection criteria embedded in SOP-205 (Quality Control Inspection), SOP-206 (Final Inspection), and Post-Install QC Checklist. Master Installer Manuals define film-specific pass/fail thresholds.

---

## 9. Operations Forms & Checklists

| Type | Examples |
|------|----------|
| Checklists | Pre/post install QC, daily bay reset, vehicle delivery |
| Customer forms | Inspection, estimate, work order, aftercare, photo release |
| Internal | Change orders, deposit receipts |

All forms reference the SOP that governs their use (e.g. Vehicle Inspection Form → SOP-103, SOP-200).

---

## 10. Brand Standards Manual

| Deliverable | Document ID |
|-------------|-------------|
| Brand Identity Guidelines | `brand-identity-guidelines` |
| Trademark Usage Policy | `trademark-usage-policy` |
| Design tokens (v2.0) | `workbooks/assets/brand/brand-tokens.json` |
| Branded theme CSS | `design-system/themes/branded.css` |

---

## 11. Pricing Guides

Editable front-desk pricing matrices — extract from manuals for daily quoting:

| Guide | ID |
|-------|-----|
| PPF Package Pricing | `ppf-pricing-guide` |
| Window Tint Pricing | `tint-pricing-guide` |
| Vinyl Wrap Pricing | `wrap-pricing-guide` |
| Ceramic Coating Pricing | `coating-pricing-guide` |
| Detailing Menu Pricing | `detailing-pricing-guide` |

---

## 12. Warranties

| Document | ID |
|----------|------|
| Shop Warranty Policy | `warranty-policy` |
| Warranty Certificate (customer) | `warranty-certificate` |
| Warranty Claim Intake Form | `warranty-claim-form` |

Warranty registration: **SOP-702**. Administration detail in each installation manual.

---

## 13. Customer Documents

| Document | ID |
|----------|------|
| Vehicle Inspection Form | `vehicle-inspection-form` |
| Service Estimate / Quote | `service-estimate-quote` |
| Work Order / Job Card | `work-order-job-card` |
| Service Agreement | `service-agreement` |
| Change Order Form | `change-order-form` |
| Customer Aftercare Card | `customer-aftercare-card` |
| Photo / Marketing Release | `photo-release-consent` |
| Deposit & Payment Receipt | `deposit-payment-receipt` |

---

## 14. Marketing Resources

| Resource | ID |
|----------|------|
| Marketing Resources Kit | `marketing-resources-kit` |
| Referral Partner Agreement | `referral-partner-agreement` |

Marketing SOPs: SOP-800 through SOP-803. Customer Service Operations Manual includes extended marketing chapters (24–26).

---

## 15. Legal & HR Agreements

| Agreement | ID |
|-----------|------|
| Independent Contractor | `independent-contractor-agreement` |
| Service Agreement | `service-agreement` |
| Asset Ownership | `asset-ownership-agreement` |
| IP Assignment | `ip-assignment-agreement` |
| Referral Partner | `referral-partner-agreement` |
| Refund & Cancellation Policy | `refund-cancellation-policy` |

---

## 16. Implementation Roadmap

### Week 1 — SOPs & brand
1. Distribute Forge SOP Manual to all staff
2. Post Section 3–7 SOPs at each bay
3. Deploy brand assets and website pages

### Week 2 — Customer experience
1. Train CS on Section 2 SOPs (phone, leads, check-in, delivery)
2. Print forms and checklists linked to SOPs
3. Load pricing guides at front desk

### Week 3 — Technical
1. Assign Master Installer Manuals per service line
2. Begin workbook-based training program
3. Complete competency authorization gates

### Week 4 — Go live
1. Full customer document workflow live (SOP-700 through SOP-705)
2. Marketing SOPs active (SOP-800 through SOP-803)
3. Emergency procedures reviewed (Section 10)

---

## Document library

All branded PDFs are assembled in **`library/branded/`** — see `library/manifest.json` and `library/index.html` for the complete downloadable index.

---

## Revision history

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | 2026-07-23 | SOP Manual v1.0 — 37 procedures, documentation hierarchy |
