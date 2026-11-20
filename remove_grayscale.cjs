const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace all instances of the grayscale hover classes with just hover:scale-110
content = content.replace(/grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110/g, 'transition-transform duration-300 hover:scale-110');

fs.writeFileSync(file, content, 'utf8');
console.log('Removed grayscale filters!');
