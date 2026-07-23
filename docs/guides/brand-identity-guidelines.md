# Brand Identity Guidelines

**Skill Forge / Forge PPF — Design System v2.0**

---

## Brand architecture

| Layer | Name | Usage |
|-------|------|-------|
| Master brand | **Skill Forge** | Training, licensing, design system, turnkey systems |
| Service brand | **Forge PPF** | Paint protection film operations and dealer-facing materials |
| Tagline | **WHERE STUDENTS BECOME TEACHERS** | Covers, certificates, marketing headers |

---

## Logo usage

**Primary lockup:** `workbooks/assets/brand/logos/skill-forge-logo.svg`  
**Horizontal:** `skill-forge-logo-horizontal.svg`  
**Monogram / watermark:** `skill-forge-monogram.svg`

<ul class="checklist">
<li>Maintain clear space equal to the height of the monogram on all sides</li>
<li>Minimum print width: 1.5 inches for primary logo; 0.4 inches for monogram</li>
<li>Do not stretch, rotate, recolor, or add effects to logo files</li>
<li>On dark backgrounds use full-color logo; on busy photos use monogram watermark at 8–12% opacity</li>
</ul>

---

## Color palette (v2.0)

| Token | Hex | Usage |
|-------|-----|-------|
| Forge Pink | `#FF0F7B` | Primary accent, CTAs, Day 1 |
| Forge Magenta | `#FF2BA6` | Gradients, highlights |
| Forge Purple | `#7D3CFF` | Secondary, headings, Day 2 |
| Forge Violet | `#5D2BFF` | Deep accent |
| Forge Blue | `#00AAFF` | Install chapters, links |
| Forge Cyan | `#00D5FF` | Finishing, tips, Day 3 |
| Forge Gold | `#D9B44A` | Business, certificates, premium |
| Forge Black | `#080808` | Backgrounds, covers |
| Forge Charcoal | `#121212` | Surfaces |
| Forge White | `#FFFFFF` | Text on dark, print body |

**Primary gradient:** `linear-gradient(135deg, #FF0F7B, #7D3CFF, #00AAFF)`

Source of truth: `workbooks/assets/brand/brand-tokens.json` and `design-system/themes/branded.css`

---

## Typography

| Role | Font | Usage |
|------|------|-------|
| Display / headings | Skill Forge Display | Covers, chapter titles, marketing headlines |
| Body | Inter, Segoe UI, Arial | Manuals, SOPs, forms, website body |
| Labels | system-ui | Tags, captions, form labels |

Install display font files in `workbooks/assets/brand/fonts/` (woff2, woff, otf).

---

## Voice & tone

<ul class="checklist">
<li><strong>Expert</strong> — technically accurate, confident, never guessing</li>
<li><strong>Direct</strong> — shop-floor language, not corporate fluff</li>
<li><strong>Professional</strong> — premium positioning without arrogance</li>
<li><strong>Educational</strong> — teach the why, not just the how</li>
</ul>

---

## Application by deliverable

| Deliverable | Brand application |
|-------------|-------------------|
| Workbooks | Branded cover, day edge markers, certificate with QR |
| Manuals | Branded cover, gradient chapter dividers, carbon texture |
| SOPs / forms | Branded header, logo on cover page |
| Website | Primary gradient hero, dark theme option, logo in nav |
| Social | Gradient frame template, before/after layout per marketing kit |
| Shop signage | Forge PPF for service bay; Skill Forge for training area |

---

## White-label deployment

Licensed partners rebrand per **White-Label Agreement**:

1. Replace logo paths in `brand-tokens.json`
2. Override CSS variables in a shop-specific theme file
3. Submit sample PDFs for approval before customer distribution
4. Retain structural layout and SOP content integrity

---

## Revision history

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | | Design System v2.0 palette and typography |
| 1.0 | | Initial Skill Forge brand kit |
