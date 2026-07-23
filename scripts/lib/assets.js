const fs = require('fs');
const path = require('path');
const { ROOT } = require('./theme');

const BRAND_TOKENS_PATH = path.join(ROOT, 'workbooks/assets/brand/brand-tokens.json');

const LOGO_CANDIDATES = [
  'workbooks/assets/brand/logos/skill-forge-logo.svg',
  'workbooks/assets/brand/logos/skill-forge-logo.png',
  'workbooks/assets/brand/logos/skill-forge-logo-horizontal.svg',
];

const MONOGRAM_CANDIDATES = [
  'workbooks/assets/brand/logos/skill-forge-monogram.svg',
  'workbooks/assets/brand/logos/skill-forge-monogram.png',
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

function resolveFirstAsset(candidates) {
  for (const rel of candidates) {
    const uri = resolveAssetDataUri(rel);
    if (uri) return uri;
  }
  return null;
}

function resolveBrandLogo() {
  return resolveFirstAsset(LOGO_CANDIDATES);
}

function resolveBrandMonogram() {
  return resolveFirstAsset(MONOGRAM_CANDIDATES);
}

function loadBrandTokens() {
  if (!fs.existsSync(BRAND_TOKENS_PATH)) return null;
  return JSON.parse(fs.readFileSync(BRAND_TOKENS_PATH, 'utf8'));
}

module.exports = {
  LOGO_CANDIDATES,
  MONOGRAM_CANDIDATES,
  resolveAssetDataUri,
  resolveBrandLogo,
  resolveBrandMonogram,
  loadBrandTokens,
};
