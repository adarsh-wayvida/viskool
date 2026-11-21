const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

if(content.includes('Dual Certs')) {
  content = content.replace(/Dual Certs/g, '2');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Replaced "Dual Certs" with "2"!');
} else {
  console.log('Could not find "Dual Certs" text.');
}
