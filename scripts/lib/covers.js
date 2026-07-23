const { resolveBrandLogo, resolveBrandMonogram } = require('./assets');

function watermarkDiv(monogramUri) {
  if (!monogramUri) return '';
  return `<div class="cover-watermark" aria-hidden="true" style="background-image: url('${monogramUri}')"></div>`;
}

function buildWorkbookCover(course, theme) {
  const branded = theme === 'branded';
  const logo = branded ? resolveBrandLogo() : null;
  const monogram = branded ? resolveBrandMonogram() : null;
  const logoHtml = logo
    ? `<img class="brand-logo branded-only" src="${logo}" alt="Skill Forge" />`
    : '';

  const brandMark = branded && !logo
    ? '<div class="brand-mark branded-only">Skill Forge</div>'
    : '';

  const texture = branded
    ? '<div class="cover-texture texture-carbon" aria-hidden="true"></div>'
    : '';
  const watermark = branded ? watermarkDiv(monogram) : '';

  const version = course.version || '1.0';
  const docType = course.docType || 'Student Workbook';

  return `
  <div class="cover layout-cover${branded ? ' has-brand-gradient' : ''}">
    ${texture}
    ${watermark}
    ${logoHtml}
    ${brandMark}
    <div class="cover-title-block">
      <h1>${course.title}</h1>
    </div>
    ${course.subtitle ? `<p class="subtitle">${course.subtitle}</p>` : ''}
    <p class="meta">${docType} · Version ${version}</p>
    <div class="student-fields doc-fields">
      <p>Student Name: _________________________________</p>
      <p>Class Date: ___________________________________</p>
      <p>Instructor: ___________________________________</p>
      <p>Location: ____________________________________</p>
    </div>
  </div>`;
}

function buildDocCover(doc, theme) {
  const branded = theme === 'branded';
  const logo = branded ? resolveBrandLogo() : null;
  const logoHtml = logo
    ? `<img class="brand-logo branded-only" src="${logo}" alt="Skill Forge" />`
    : '';

  return `
  <div class="cover layout-cover${branded ? ' has-brand-gradient' : ''}">
    ${logoHtml}
    <div class="brand-mark ${branded && !logo ? 'branded-only' : 'whitelabel-only'}">Skill Forge</div>
    <div class="brand-mark whitelabel-only">Standard Operating Procedure</div>
    <h1>${doc.title}</h1>
    ${doc.subtitle ? `<p class="subtitle">${doc.subtitle}</p>` : ''}
    <p class="meta">${doc.type || 'Document'} · Version ${doc.version || '1.0'}</p>
    <div class="doc-fields">
      <p>Organization: _________________________________</p>
      <p>Document ID: ${doc.id}</p>
      <p>Effective Date: _______________________________</p>
      <p>Approved By: __________________________________</p>
    </div>
  </div>`;
}

function buildWorkbookFooter(theme) {
  if (theme === 'branded') {
    return '<p class="footer-note branded-only">© Skill Forge · Where Students Become Teachers · For enrolled students only.</p>';
  }
  return '<p class="footer-note whitelabel-only">Confidential — Training materials for enrolled students only. Reproduction prohibited without written authorization.</p>';
}

function buildDocFooter(theme) {
  if (theme === 'branded') {
    return '<p class="footer-note branded-only">Confidential — Skill Forge training operations.</p>';
  }
  return '<p class="footer-note whitelabel-only">Confidential — Internal use only. Reproduction prohibited without written authorization.</p>';
}

function buildManualCover(manual, theme) {
  const branded = theme === 'branded';
  const logo = branded ? resolveBrandLogo() : null;
  const monogram = branded ? resolveBrandMonogram() : null;
  const logoHtml = logo
    ? `<img class="brand-logo branded-only" src="${logo}" alt="Skill Forge" />`
    : '';
  const texture = branded
    ? '<div class="cover-texture texture-carbon" aria-hidden="true"></div>'
    : '';
  const watermark = branded ? watermarkDiv(monogram) : '';

  return `
  <div class="cover layout-cover manual-cover${branded ? ' has-brand-gradient' : ''}">
    ${texture}
    ${watermark}
    ${logoHtml}
    <div class="brand-mark ${branded ? 'branded-only' : 'whitelabel-only'}">Skill Forge · Core Operations Manual</div>
    <div class="brand-mark whitelabel-only">Core Operations Manual</div>
    <h1>${manual.title}</h1>
    ${manual.subtitle ? `<p class="subtitle">${manual.subtitle}</p>` : ''}
    <p class="meta">${manual.type || 'Core Operations Manual'} · Version ${manual.version || '1.0'}</p>
    <div class="doc-fields">
      <p>Organization: _________________________________</p>
      <p>Document ID: ${manual.id}</p>
      <p>Revision Date: _______________________________</p>
      <p>Authorized By: ________________________________</p>
    </div>
  </div>`;
}

function buildManualFooter(theme) {
  if (theme === 'branded') {
    return '<p class="footer-note branded-only">Confidential — Skill Forge Core Operations Manual. Reproduction prohibited without written authorization.</p>';
  }
  return '<p class="footer-note whitelabel-only">Confidential — Internal operations reference. Reproduction prohibited without written authorization.</p>';
}

module.exports = {
  buildWorkbookCover,
  buildDocCover,
  buildManualCover,
  buildWorkbookFooter,
  buildDocFooter,
  buildManualFooter,
};
