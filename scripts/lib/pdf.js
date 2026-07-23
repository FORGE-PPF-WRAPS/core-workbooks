const path = require("path");
const puppeteer = require("puppeteer");

async function buildPdf(htmlPath, pdfPath) {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ]
  });

  try {
    const page = await browser.newPage();

    await page.goto(`file://${path.resolve(htmlPath)}`, {
      waitUntil: "networkidle0"
    });

    await page.pdf({
      path: pdfPath,
      format: "Letter",
      printBackground: true,
      preferCSSPageSize: true
    });
  } finally {
    await browser.close();
  }
}

module.exports = { buildPdf };
