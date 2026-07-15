const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const os = require('os');

function buildPdf(htmlPath, pdfPath, options = {}) {
  const chrome = options.chromeBin || process.env.CHROME_BIN || 'google-chrome';
  const timeoutMs = options.timeoutMs || 45000;
  const tmpPrefix = options.tmpPrefix || 'core-workbooks-chrome-';

  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), tmpPrefix));
  if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath);

  const child = spawn(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    `--user-data-dir=${userDataDir}`,
    `--print-to-pdf=${pdfPath}`,
    '--print-to-pdf-no-header',
    '--remote-debugging-port=0',
    `file://${htmlPath}`,
  ], { stdio: 'ignore' });

  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (fs.existsSync(pdfPath) && fs.statSync(pdfPath).size > 1000) {
      child.kill('SIGKILL');
      try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch { /* ignore */ }
      return;
    }
    const waitUntil = Date.now() + 300;
    while (Date.now() < waitUntil) { /* sync wait */ }
  }

  child.kill('SIGKILL');
  try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch { /* ignore */ }
  throw new Error(`Timed out generating PDF: ${pdfPath}`);
}

module.exports = { buildPdf };
