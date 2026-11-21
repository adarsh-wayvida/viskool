const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const idx = content.indexOf('Digital Marketing Course Fee in Kerala:');
const startIdx = content.indexOf('<div className="mt-8', idx);
const endIdx = content.indexOf('</table>\n            </div>', startIdx) + 29;

console.log(startIdx, endIdx);
console.log(content.substring(startIdx, startIdx+100));
console.log(content.substring(endIdx - 100, endIdx));
