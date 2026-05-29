const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const userLink = "https://play.google.com/store/apps/details?id=in.ambigo.user";
const partnerLink = "https://play.google.com/store/apps/details?id=in.ambigo.driver&pcampaignid=web_share";

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. User App QR card
  content = content.replace(
    /<div className="promo-card">(\s*<div className="promo-card-content">\s*<div className="qr-code-wrapper">\s*<img src="user_app_link\.png")/g,
    `<div className="promo-card" onClick={() => window.open('${userLink}', '_blank')} style={{ cursor: 'pointer' }}>$1`
  );

  // 2. User App Install card
  content = content.replace(
    /<div className="promo-card">(\s*<div className="promo-card-content">\s*<div className="app-logo-wrapper">\s*<div className="app-logo-container">\s*<img src="userapplogo\.webp")/g,
    `<div className="promo-card" onClick={() => window.open('${userLink}', '_blank')} style={{ cursor: 'pointer' }}>$1`
  );

  // 3. Partner App QR card
  content = content.replace(
    /<div className="promo-card">(\s*<div className="promo-card-content">\s*<div className="qr-code-wrapper">\s*<img src="partner_link\.png")/g,
    `<div className="promo-card" onClick={() => window.open('${partnerLink}', '_blank')} style={{ cursor: 'pointer' }}>$1`
  );

  // 4. Partner App Install card
  content = content.replace(
    /<div className="promo-card">(\s*<div className="promo-card-content">\s*<div className="app-logo-wrapper">\s*<div className="app-logo-container">\s*<img src="partnerlogo\.webp")/g,
    `<div className="promo-card" onClick={() => window.open('${partnerLink}', '_blank')} style={{ cursor: 'pointer' }}>$1`
  );

  // 5. Sign up arrow click? No, the user only mentioned the apps. 

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
