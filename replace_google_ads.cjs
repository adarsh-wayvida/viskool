const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the image path
content = content.replace(
  /\/images\/tools\/google_ads_digital_4424\.webp/g,
  '/images/tools/icons8-google-ads-48.png'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Replaced Google Ads logo!');
