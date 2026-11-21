const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const s = content.indexOf('Placement Assistance</p>');
const endBlock = content.substring(s, s + 300);
console.log(endBlock);
