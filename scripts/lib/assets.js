const fs = require('fs');
const path = require('path');
const { ROOT } = require('./theme');

const LOGO_CANDIDATES = [
  'workbooks/assets/brand/logos/skill-forge-logo.svg',
  'workbooks/assets/brand/logos/skill-forge-logo.png',
  'workbooks/assets/brand/logos/forge-ppf-logo.jpg',
];

function fileToDataUri(absPath) {
  const ext = path.extname(absPath).slice(1).toLowerCase();
  const mime = ext === 'svg'
    ? 'image/svg+xml'
    : `image/${ext === 'jpg' ? 'jpeg' : ext}`;
  const data = fs.readFileSync(absPath).toString('base64');
  return `data:${mime};base64,${data}`;
}

function resolveAssetDataUri(relPath) {
  const abs = path.join(ROOT, relPath);
  if (!fs.existsSync(abs)) return null;
  return fileToDataUri(abs);
}

function resolveBrandLogo() {
  for (const rel of LOGO_CANDIDATES) {
    const uri = resolveAssetDataUri(rel);
    if (uri) return uri;
  }
  return null;
}

module.exports = {
  LOGO_CANDIDATES,
  resolveAssetDataUri,
  resolveBrandLogo,
};
