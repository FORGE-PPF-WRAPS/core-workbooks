const { marked } = require('marked');
const { loadDesignSystemCss } = require('./theme');

function wrapDocument({ title, body, cover = '', footer = '', theme = 'whitelabel', css }) {
  const stylesheet = css || loadDesignSystemCss(theme);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>${stylesheet}</style>
</head>
<body class="theme-${theme}">
  ${cover}
  ${body}
  ${footer}
</body>
</html>`;
}

function markdownToHtml(markdown) {
  return marked.parse(markdown);
}

module.exports = {
  wrapDocument,
  markdownToHtml,
};
