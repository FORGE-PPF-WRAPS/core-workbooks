const { buildChapterDivider, buildCertificateHtml } = require('./certificate');
const { resolveBrandMonogram } = require('./assets');
const { processHtmlImages } = require('./images');

const DAY_LABELS = {
  1: 'Day 1',
  2: 'Day 2',
  3: 'Day 3',
};

function injectComponentLabels(html) {
  return html
    .replace(/<div class="lab">/g, '<div class="lab"><span class="type-label">Hands-On Lab</span>')
    .replace(/<div class="callout warning">/g, '<div class="callout warning"><span class="type-label">Safety</span>')
    .replace(/<div class="callout tip">/g, '<div class="callout tip"><span class="type-label">Pro Tip</span>')
    .replace(/<div class="knowledge-check">/g, '<div class="knowledge-check"><span class="type-label">Knowledge Check</span>');
}

function injectSectionIcons(html) {
  return html
    .replace(/<h2>([^<]*\bLab\b[^<]*)<\/h2>/gi, '<h2 class="type-lab">$1</h2>')
    .replace(/<h2>([^<]*\bSafety\b[^<]*)<\/h2>/gi, '<h2 class="type-safety">$1</h2>')
    .replace(/<h2>([^<]*Knowledge Check[^<]*)<\/h2>/gi, '<h2 class="type-quiz">$1</h2>')
    .replace(/<h2>([^<]*Final Knowledge Check[^<]*)<\/h2>/gi, '<h2 class="type-quiz">$1</h2>');
}

function transformDaySections(html, theme) {
  const monogramUri = theme === 'branded' ? resolveBrandMonogram() : null;
  const dayHeaderRe = /<h1>Day (\d)\s*[—–-]\s*([^<]+)<\/h1>/i;
  const chunks = html.split(/(?=<h1>Day \d)/i);

  if (chunks.length <= 1) return html;

  let result = chunks[0];

  for (let i = 1; i < chunks.length; i++) {
    const chunk = chunks[i];
    const match = chunk.match(dayHeaderRe);
    if (!match) {
      result += chunk;
      continue;
    }

    const dayNum = match[1];
    const dayTitle = match[2].trim();
    const rest = chunk.replace(dayHeaderRe, '').replace(/^\s*<div class="page-break"><\/div>\s*/i, '');

    result += buildChapterDivider(dayNum, dayTitle, theme, monogramUri);
    result += `<section class="day-section day-${dayNum}" data-day="${dayNum}" data-day-label="${DAY_LABELS[dayNum] || `Day ${dayNum}`}">`;
    result += rest;
    result += '</section>';
  }

  return result;
}

async function replaceCompletionSection(html, course, theme) {
  const certificate = await buildCertificateHtml(course, theme);
  const re = /<h2[^>]*>Course Completion Record<\/h2>[\s\S]*?(?=<h2[^>]*>Resources|$)/i;

  if (re.test(html)) {
    return html.replace(re, certificate);
  }

  return `${html}\n${certificate}`;
}

async function enhanceWorkbookHtml(html, course, theme) {
  let out = html;
  out = out.replace(/<div class="page-break"><\/div>\s*(?=<h1>Day \d)/gi, '');
  out = transformDaySections(out, theme);
  out = injectComponentLabels(out);
  out = injectSectionIcons(out);
  out = await replaceCompletionSection(out, course, theme);
  out = processHtmlImages(out);
  return out;
}

module.exports = {
  enhanceWorkbookHtml,
};
