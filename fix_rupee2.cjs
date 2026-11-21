const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const target = '?15000';
// Only replace the last occurrence (which is inside the card, not the paragraph text above)
const lastIdx = content.lastIndexOf(target);

if (lastIdx !== -1) {
    content = content.substring(0, lastIdx) + '&#8377;15000' + content.substring(lastIdx + target.length);
    fs.writeFileSync(file, content);
    console.log('Fixed using HTML entity');
} else {
    console.log('Not found');
}
