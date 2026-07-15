const { resolveBrandLogo } = require('./assets');

function buildWorkbookCover(course, theme) {
  const branded = theme === 'branded';
  const logo = branded ? resolveBrandLogo() : null;
  const logoHtml = logo
    ? `<img class="brand-logo branded-only" src="${logo}" alt="" />`
    : '';

  const brandMark = branded
    ? '<div class="brand-mark branded-only">Skill Forge</div>'
    : '<div class="brand-mark whitelabel-only">Training Workbook</div>';

  const version = course.version || '1.0';
  const docType = course.docType || 'Student Workbook';

  return `
  <div class="cover layout-cover${branded ? ' has-brand-gradient' : ''}">
    ${logoHtml}
    ${brandMark}
    <h1>${course.title}</h1>
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
    ? `<img class="brand-logo branded-only" src="${logo}" alt="" />`
    : '';

  return `
  <div class="cover layout-cover${branded ? ' has-brand-gradient' : ''}">
    ${logoHtml}
    <div class="brand-mark ${branded ? 'branded-only' : 'whitelabel-only'}">Skill Forge</div>
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
    return '<p class="footer-note branded-only">© Skill Forge Training · For enrolled students only. Reproduction prohibited without written permission.</p>';
  }
  return '<p class="footer-note whitelabel-only">Confidential — Training materials for enrolled students only. Reproduction prohibited without written authorization.</p>';
}

function buildDocFooter(theme) {
  if (theme === 'branded') {
    return '<p class="footer-note branded-only">Confidential — Internal use. Skill Forge training operations.</p>';
  }
  return '<p class="footer-note whitelabel-only">Confidential — Internal use only. Reproduction prohibited without written authorization.</p>';
}

module.exports = {
  buildWorkbookCover,
  buildDocCover,
  buildWorkbookFooter,
  buildDocFooter,
};
