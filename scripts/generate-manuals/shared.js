function esc(s) {
  return String(s).replace(/\|/g, '\\|');
}

function p(text) {
  return `\n${text}\n`;
}

function h2(title) {
  return `\n## ${title}\n`;
}

function h3(title) {
  return `\n### ${title}\n`;
}

function h4(title) {
  return `\n#### ${title}\n`;
}

function pageBreak() {
  return '\n<div class="page-break"></div>\n';
}

function chapterDivider(num, title) {
  return `${pageBreak()}\n# Chapter ${num} — ${title}\n`;
}

function callout(type, text) {
  const cls = type ? `callout ${type}` : 'callout';
  return `\n<div class="${cls}">\n\n${text}\n\n</div>\n`;
}

function procedure(title, steps) {
  const items = steps.map((s, i) => `${i + 1}. ${s}`).join('\n');
  return `\n<div class="procedure">\n\n### ${title}\n\n${items}\n\n</div>\n`;
}

function checklist(items) {
  const lis = items.map((i) => `<li>${i}</li>`).join('\n');
  return `\n<ul class="checklist">\n${lis}\n</ul>\n`;
}

function table(headers, rows) {
  const head = `| ${headers.join(' | ')} |`;
  const sep = `| ${headers.map(() => '---').join(' | ')} |`;
  const body = rows.map((r) => `| ${r.map(esc).join(' | ')} |`).join('\n');
  return `\n${head}\n${sep}\n${body}\n`;
}

function specTable(specs) {
  return table(['Parameter', 'Specification', 'Notes'], specs);
}

function troubleshootingSection(issues) {
  let out = h3('Troubleshooting Reference');
  out += table(
    ['Symptom', 'Likely Cause', 'Corrective Action', 'Prevention'],
    issues
  );
  return out;
}

function panelProcedure(service, panel) {
  return `
${h3(`${panel.name} — Master Procedure`)}

**Difficulty:** ${panel.difficulty} · **Typical time:** ${panel.time} · **Film orientation:** ${panel.orientation || 'As marked on pattern'}

${p(panel.overview)}

${h4('Pre-Install Checklist')}
${checklist(panel.prep)}

${procedure(`${panel.name} Install Sequence`, panel.steps)}

${h4('Quality Checkpoints')}
${checklist(panel.qc)}

${panel.tips ? callout('tip', panel.tips) : ''}
${panel.warnings ? callout('warning', panel.warnings) : ''}

${h4('Common Defects on This Panel')}
${troubleshootingSection(panel.defects)}
`;
}

function writeChapters(baseDir, chapters) {
  const fs = require('fs');
  const path = require('path');
  fs.mkdirSync(baseDir, { recursive: true });
  for (const entry of fs.readdirSync(baseDir)) {
    if (entry.endsWith('.md')) {
      fs.unlinkSync(path.join(baseDir, entry));
    }
  }
  chapters.forEach((ch, idx) => {
    const num = String(idx + 1).padStart(2, '0');
    const slug = ch.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const file = path.join(baseDir, `${num}-${slug}.md`);
    const body = ch.divider === false
      ? ch.content
      : `${chapterDivider(idx + 1, ch.title)}${ch.content}`;
    fs.writeFileSync(file, body.trim() + '\n');
  });
}

module.exports = {
  esc, p, h2, h3, h4, pageBreak, chapterDivider,
  callout, procedure, checklist, table, specTable,
  troubleshootingSection, panelProcedure, writeChapters,
};
