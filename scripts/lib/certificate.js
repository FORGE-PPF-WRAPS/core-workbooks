const { generateQrSvg } = require('./qr');
const { resolveBrandLogo, resolveBrandMonogram, loadBrandTokens } = require('./assets');

function watermarkStyle(monogramUri) {
  if (!monogramUri) return '';
  return ` style="background-image: url('${monogramUri}')"`;
}

function buildChapterDivider(dayNum, dayTitle, theme, monogramUri) {
  const branded = theme === 'branded';
  const texture = branded
    ? '<div class="chapter-divider__texture texture-carbon" aria-hidden="true"></div>'
    : '';
  const watermark = branded && monogramUri
    ? `<div class="chapter-divider__watermark" aria-hidden="true"${watermarkStyle(monogramUri)}></div>`
    : '';

  return `
<div class="chapter-divider day-${dayNum}${branded ? ' chapter-divider--branded' : ''}" data-day="${dayNum}">
  ${texture}
  ${watermark}
  <div class="chapter-divider__edge" aria-hidden="true"></div>
  <div class="chapter-divider__content">
    <span class="chapter-divider__day">Day ${dayNum}</span>
    <h1 class="chapter-divider__title">${dayTitle}</h1>
    <div class="chapter-divider__rule"></div>
  </div>
</div>`;
}

async function buildCertificateHtml(course, theme) {
  const tokens = loadBrandTokens() || {};
  const resources = tokens.resources || {};
  const url = resources.url || 'https://forgeppf.com/skill-forge';
  const label = resources.label || 'Skill Forge Resources';
  const branded = theme === 'branded';

  const logo = branded ? resolveBrandLogo() : null;
  const monogram = branded ? resolveBrandMonogram() : null;
  const qrSvg = await generateQrSvg(url, 130);

  const logoHtml = logo
    ? `<img class="certificate-logo branded-only" src="${logo}" alt="Skill Forge" />`
    : '<div class="certificate-logo-text branded-only">Skill Forge</div>';

  const texture = branded
    ? '<div class="certificate-texture texture-carbon" aria-hidden="true"></div>'
    : '';
  const watermark = branded && monogram
    ? `<div class="certificate-watermark" aria-hidden="true"${watermarkStyle(monogram)}></div>`
    : '';

  const gradientFrame = branded ? ' certificate--branded' : '';

  return `
<div class="page-break"></div>
<div class="layout-certificate certificate-page${gradientFrame}">
  ${texture}
  ${watermark}
  <div class="certificate-frame">
    <div class="certificate-inner">
      ${logoHtml}
      <p class="certificate-eyebrow">Certificate of Completion</p>
      <h1 class="certificate-title">${course.title}</h1>
      <p class="certificate-subtitle">${course.subtitle || 'Skill Forge Core Course'}</p>
      <p class="certificate-tagline branded-only">${tokens.tagline || 'Where Students Become Teachers'}</p>

      <div class="certificate-body">
        <p class="certificate-presented">This certifies that</p>
        <p class="certificate-name-line">_______________________________________________</p>
        <p class="certificate-presented">successfully completed all course requirements including labs, knowledge checks, and the capstone install.</p>

        <div class="certificate-checklist no-break">
          <table class="certificate-table">
            <thead>
              <tr><th>Requirement</th><th>Completed</th><th>Instructor</th></tr>
            </thead>
            <tbody>
              <tr><td>Day 1 Labs</td><td>☐</td><td>_____</td></tr>
              <tr><td>Day 2 Labs</td><td>☐</td><td>_____</td></tr>
              <tr><td>Day 3 Capstone</td><td>☐</td><td>_____</td></tr>
              <tr><td>All Knowledge Checks</td><td>☐</td><td>_____</td></tr>
            </tbody>
          </table>
        </div>

        <div class="certificate-meta-row">
          <div class="certificate-meta-field">
            <p>Class Date</p>
            <p class="certificate-line">_________________________</p>
          </div>
          <div class="certificate-meta-field">
            <p>Instructor</p>
            <p class="certificate-line">_________________________</p>
          </div>
          <div class="certificate-meta-field">
            <p>Issue Date</p>
            <p class="certificate-line">_________________________</p>
          </div>
        </div>
      </div>

      <div class="certificate-footer">
        <div class="certificate-qr-block">
          <div class="certificate-qr">${qrSvg}</div>
          <div class="certificate-qr-copy">
            <p class="certificate-qr-title">Scan for ${label}</p>
            <p class="certificate-qr-desc">Course updates, reference materials, and future Skill Forge programs.</p>
            <p class="certificate-qr-url">${url.replace(/^https?:\/\//, '')}</p>
          </div>
        </div>
        <div class="signature-row">
          <p>Instructor Signature</p>
          <p>Skill Forge Program Director</p>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

module.exports = {
  buildChapterDivider,
  buildCertificateHtml,
};
