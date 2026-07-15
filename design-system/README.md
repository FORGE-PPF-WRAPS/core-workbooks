# CORE Workbooks Design System

Central source of truth for print styling across training workbooks, SOPs, forms, and policies.

## Structure

| File | Purpose |
|------|---------|
| `tokens.css` | Spacing, typography scale, semantic color slots, shadows, page margins |
| `base.css` | Page setup, headings, tables, utilities, print/screen media |
| `components.css` | Callouts, checklists, lesson/lab, SOP/procedure, quiz, worksheet, review |
| `layouts.css` | Cover, certificate, appendix, running header/footer |
| `themes/whitelabel.css` | Neutral client-ready theme (default) |
| `themes/branded.css` | Skill Forge / Forge PPF branded theme |

Build scripts concatenate these layers in order via `scripts/lib/theme.js`.

## Themes

- **whitelabel** (default) — No brand identity; suitable for client delivery
- **branded** — Gradient cover, display font, accent palette, logo when available

```bash
npm run build                    # workbooks, white-label
npm run build:branded            # workbooks, branded HTML
npm run build:pdf                # workbooks, white-label PDF
npm run build:branded:pdf        # workbooks, branded PDF
npm run build:docs:pdf           # docs, white-label PDF
npm run build:docs:branded:pdf   # docs, branded PDF
```

## Layout components

Use these HTML classes in Markdown source. Legacy aliases remain supported.

| Layout | Primary class | Legacy alias |
|--------|---------------|--------------|
| Cover | `.layout-cover` | `.cover` |
| Lesson | `.lesson-page` | `.lab` |
| SOP | `.sop-page` | `.procedure` |
| Checklist | `.checklist` | — |
| Worksheet | `.worksheet-page` | `.worksheet` |
| Quiz | `.quiz-page` | `.knowledge-check` |
| Review | `.review-page` | — |
| Certificate | `.layout-certificate` | `.certificate-page` |
| Appendix | `.layout-appendix` | `.appendix-page` |

### Examples

```html
<div class="lesson-page">
<h3>Lab 1 — Surface Prep</h3>
<p>Complete the steps below with instructor sign-off.</p>
</div>

<div class="quiz-page">
<h3>Knowledge Check — Day 1</h3>
<ol>
<li>Question one?</li>
</ol>
</div>

<ul class="checklist">
<li>Step verified</li>
</ul>
```

## Branded workbook enhancements

When built with `--branded`, workbooks automatically include:

- **Carbon fiber texture** on gradient covers and chapter dividers (low opacity)
- **Monogram watermark** behind cover titles and divider pages
- **Chapter divider pages** — full-width gradient opener for each Day
- **Day edge markers** — colored left border + tab (Day 1 magenta, Day 2 purple, Day 3 cyan)
- **Type icons** — Labs, Safety, Tips, and Knowledge Checks get labeled icons
- **Certificate of Completion** — gradient frame, checklist, and QR code to Skill Forge resources

Configure the QR link in `workbooks/assets/brand/brand-tokens.json` → `resources.url`.


1. Add `workbooks/core/<course>/workbook.md`
2. Register in `workbooks/manifest.json`
3. Run `npm run build` — styling is inherited automatically

No per-workbook CSS changes required.
