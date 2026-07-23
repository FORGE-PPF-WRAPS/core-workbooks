const fs = require('fs');
const path = require('path');
const { ROOT } = require('./theme');

const BRAND_ROOT = path.join(ROOT, 'workbooks/assets/brand');
const BRAND_TOKENS_PATH = path.join(BRAND_ROOT, 'brand-tokens.json');

/** Set by build scripts so large logo files use relative paths instead of base64. */
let htmlOutputDir = null;

const LOGO_CANDIDATES = [
  'workbooks/assets/brand/logos/forge-main-logo.png',
  'workbooks/assets/brand/logos/forge-ppf-logo.jpg',
  'workbooks/assets/brand/logos/skill-forge-logo.svg',
  'workbooks/assets/brand/logos/skill-forge-logo-horizontal.svg',
];

const MONOGRAM_CANDIDATES = [
  'workbooks/assets/brand/logos/forge-secondary-monogram-logo.jpg',
  'workbooks/assets/brand/logos/skill-forge-monogram.svg',
];

const SERVICE_LOGO_CANDIDATES = [
  'workbooks/assets/brand/logos/forge-ppf-logo.jpg',
  'workbooks/assets/brand/logos/forge-main-logo.png',
];

function setHtmlOutputDir(dir) {
  htmlOutputDir = dir ? path.resolve(dir) : null;
}

function fileToDataUri(absPath) {
  const ext = path.extname(absPath).slice(1).toLowerCase();
  const mime = ext === 'svg'
    ? 'image/svg+xml'
    : `image/${ext === 'jpg' ? 'jpeg' : ext}`;
  const data = fs.readFileSync(absPath).toString('base64');
  return `data:${mime};base64,${data}`;
}

function resolveAssetUri(relPath) {
  const abs = path.join(ROOT, relPath);
  if (!fs.existsSync(abs)) return null;

  const size = fs.statSync(abs).size;
  // Large production artwork — relative path keeps PDFs lean for Puppeteer file:// builds.
  if (htmlOutputDir && size > 150 * 1024) {
    return path.relative(htmlOutputDir, abs).replace(/\\/g, '/');
  }

  return fileToDataUri(abs);
}

/** Always prefer relative paths for print images when output dir is set. */
function resolveImageUri(relPath) {
  const abs = path.join(ROOT, relPath);
  if (!fs.existsSync(abs)) return null;
  if (htmlOutputDir) {
    return path.relative(htmlOutputDir, abs).replace(/\\/g, '/');
  }
  return fileToDataUri(abs);
}

function resolveFirstAsset(candidates) {
  for (const rel of candidates) {
    const uri = resolveAssetUri(rel);
    if (uri) return uri;
  }
  return null;
}

function tokenAssetPath(key) {
  const tokens = loadBrandTokens();
  const rel = tokens?.logos?.[key];
  if (!rel) return null;
  return `workbooks/assets/brand/${rel.replace(/^\//, '')}`;
}

function resolveBrandLogo() {
  const fromToken = tokenAssetPath('primary');
  if (fromToken) {
    const uri = resolveAssetUri(fromToken);
    if (uri) return uri;
  }
  return resolveFirstAsset(LOGO_CANDIDATES);
}

function resolveBrandHero() {
  const fromToken = tokenAssetPath('hero');
  if (fromToken) {
    const uri = resolveAssetUri(fromToken);
    if (uri) return uri;
  }
  return resolveBrandLogo();
}

function resolveBrandMonogram() {
  const fromToken = tokenAssetPath('monogram');
  if (fromToken) {
    const uri = resolveAssetUri(fromToken);
    if (uri) return uri;
  }
  return resolveFirstAsset(MONOGRAM_CANDIDATES);
}

function resolveServiceLogo() {
  const fromToken = tokenAssetPath('service');
  if (fromToken) {
    const uri = resolveAssetUri(fromToken);
    if (uri) return uri;
  }
  return resolveFirstAsset(SERVICE_LOGO_CANDIDATES);
}

function loadBrandTokens() {
  if (!fs.existsSync(BRAND_TOKENS_PATH)) return null;
  return JSON.parse(fs.readFileSync(BRAND_TOKENS_PATH, 'utf8'));
}

module.exports = {
  LOGO_CANDIDATES,
  MONOGRAM_CANDIDATES,
  setHtmlOutputDir,
  resolveAssetUri,
  resolveImageUri,
  resolveBrandLogo,
  resolveBrandHero,
  resolveBrandMonogram,
  resolveServiceLogo,
  loadBrandTokens,
};
