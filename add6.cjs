const fs = require('fs');
const p = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let lines = fs.readFileSync(p, 'utf8').split(/(?<=\n)/);
let target = -1;
for (let i = 788; i < lines.length; i++) {
  if (lines[i].includes('</section>')) { target = i; break; }
}
const block = [
`SECTION_PLACEHOLDER`
];
