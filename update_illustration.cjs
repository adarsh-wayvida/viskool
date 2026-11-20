const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// The original image tag
content = content.replace(
  /\/images\/digital-growth-symbol\.webp/g,
  '/images/smartphone-team-engagement.webp'
);

content = content.replace(
  /alt="Blue-cyan digital growth symbol"/g,
  'alt="Smartphone team with engagement bubbles"'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Illustration updated successfully!');
