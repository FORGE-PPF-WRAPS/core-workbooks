const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const DESIGN_SYSTEM = path.join(ROOT, 'design-system');

const CSS_LAYERS = [
  'tokens.css',
  'base.css',
  'textures.css',
  'components.css',
  'icons.css',
  'layouts.css',
];

const VALID_THEMES = new Set(['whitelabel', 'branded']);

const MANUAL_CSS_LAYERS = [
  'tokens.css',
  'base.css',
  'components.css',
  'icons.css',
  'layouts.css',
];

function loadDesignSystemCss(theme = 'whitelabel', options = {}) {
  if (!VALID_THEMES.has(theme)) {
    throw new Error(`Unknown theme: ${theme}. Use whitelabel or branded.`);
  }

  const layerFiles = options.forManual ? MANUAL_CSS_LAYERS : CSS_LAYERS;
  const layers = layerFiles.map((file) =>
    fs.readFileSync(path.join(DESIGN_SYSTEM, file), 'utf8')
  );
  const themeCss = fs.readFileSync(
    path.join(DESIGN_SYSTEM, 'themes', `${theme}.css`),
    'utf8'
  );

  return `${layers.join('\n')}\n${themeCss}`;
}

function parseThemeArgs(argv = process.argv.slice(2)) {
  const branded = argv.includes('--branded') || argv.includes('--theme=branded');
  const theme = branded ? 'branded' : 'whitelabel';
  const pdf = argv.includes('--pdf');
  return { theme, pdf, argv };
}

module.exports = {
  ROOT,
  DESIGN_SYSTEM,
  VALID_THEMES,
  loadDesignSystemCss,
  parseThemeArgs,
};
