const fs = require('fs');
const path = require('path');
const { ROOT } = require('./theme');
const { resolveImageUri: resolveMediaUri } = require('./assets');

const IMAGES_ROOT = path.join(ROOT, 'workbooks/assets/images');
const MANIFEST_PATH = path.join(IMAGES_ROOT, 'manifest.json');

let manifestCache = null;

function loadImageManifest() {
  if (manifestCache) return manifestCache;
  if (!fs.existsSync(MANIFEST_PATH)) return { tools: {}, galleries: {}, base: 'workbooks/assets/images' };
  manifestCache = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  return manifestCache;
}

function imageRelPath(toolId) {
  const manifest = loadImageManifest();
  const tool = manifest.tools?.[toolId];
  if (!tool?.path) return null;
  const base = manifest.base || 'workbooks/assets/images';
  return `${base}/${tool.path.replace(/^\//, '')}`;
}

function resolveImageUri(toolIdOrPath) {
  let rel = toolIdOrPath;
  if (!toolIdOrPath.includes('/')) {
    rel = imageRelPath(toolIdOrPath);
    if (!rel) return null;
  } else if (!rel.startsWith('workbooks/')) {
    rel = `workbooks/assets/images/${rel.replace(/^\//, '')}`;
  }
  return resolveMediaUri(rel);
}

function buildToolCard(toolId) {
  const manifest = loadImageManifest();
  const tool = manifest.tools?.[toolId];
  if (!tool) return '';

  const src = resolveImageUri(toolId);
  if (!src) return '';

  const label = tool.label || toolId;
  return `<figure class="tool-card">
  <img src="${src}" alt="${label}" loading="lazy" />
  <figcaption>${label}</figcaption>
</figure>`;
}

function buildToolGallery(courseOrList) {
  const manifest = loadImageManifest();
  let toolIds = [];

  if (Array.isArray(courseOrList)) {
    toolIds = courseOrList;
  } else if (typeof courseOrList === 'string') {
    toolIds = manifest.galleries?.[courseOrList] || [];
  }

  const cards = toolIds.map(buildToolCard).filter(Boolean);
  if (cards.length === 0) return '';

  return `<div class="tool-gallery">\n${cards.join('\n')}\n</div>`;
}

const GALLERY_RE = /\{\{tool-gallery:([a-z0-9,-]+)\}\}/gi;
const TOOL_RE = /\{\{tool:([a-z0-9-]+)\}\}/gi;

function processToolPlaceholders(html) {
  let out = html.replace(GALLERY_RE, (_, key) => {
    const ids = key.includes(',') ? key.split(',').map((s) => s.trim()) : key;
    return buildToolGallery(ids);
  });
  out = out.replace(TOOL_RE, (_, toolId) => buildToolCard(toolId));
  return out;
}

/** Expand {{tool-gallery:…}} / {{tool:…}} in markdown before HTML conversion. */
function preprocessMarkdown(markdown) {
  return processToolPlaceholders(markdown);
}

function processHtmlImages(html) {
  let out = processToolPlaceholders(html);

  // Markdown images: workbooks/assets/images/... or images/...
  out = out.replace(
    /(<img[^>]+src=["'])([^"']+)(["'][^>]*>)/gi,
    (match, prefix, src, suffix) => {
      if (src.startsWith('data:') || src.startsWith('http')) return match;

      let rel = src;
      if (rel.startsWith('images/')) {
        rel = `workbooks/assets/images/${rel.slice(7)}`;
      } else if (!rel.startsWith('workbooks/')) {
        rel = `workbooks/assets/images/${rel.replace(/^\//, '')}`;
      }

      const resolved = resolveMediaUri(rel);
      if (!resolved) return match;
      return `${prefix}${resolved}${suffix}`;
    }
  );

  return out;
}

module.exports = {
  loadImageManifest,
  resolveImageUri,
  buildToolCard,
  buildToolGallery,
  processHtmlImages,
  preprocessMarkdown,
};
