const QRCode = require('qrcode');

async function generateQrSvg(url, size = 128) {
  return QRCode.toString(url, {
    type: 'svg',
    margin: 1,
    width: size,
    color: { dark: '#0A0A0F', light: '#FFFFFF' },
  });
}

module.exports = { generateQrSvg };
