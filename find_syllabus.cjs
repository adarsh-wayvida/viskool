const fs = require('fs');
const content = fs.readFileSync('src/app/courses/ai-integrated-digital-marketing/page.jsx', 'utf8');
const idx = content.indexOf('id="syllabus"');
console.log(content.substring(idx - 100, idx + 100));
const endIdx = content.indexOf('</section>', idx) + 10;
console.log('endIdx:', endIdx);
console.log(content.substring(endIdx, endIdx + 200));
