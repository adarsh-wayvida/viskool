const fs = require('fs');

// Fix page.jsx
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('13. REVIEWS', '11. REVIEWS');
content = content.replace('14. TOOLS', '12. TOOLS');
content = content.replace('16. DIGITAL MARKETING INSTITUTE IN KERALA', '13. DIGITAL MARKETING INSTITUTE IN KERALA');
content = content.replace('17. MODE & TIMINGS', '14. MODE & TIMINGS');
content = content.replace('18. READY TO START?', '15. READY TO START?');
content = content.replace('12. FAQ', '16. FAQ');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed page.jsx section numbers.');

// Fix StickyCourseNav.jsx
const navFile = 'src/components/StickyCourseNav.jsx';
let navContent = fs.readFileSync(navFile, 'utf8');

const regexPrepare = /\s*\{\s*id:\s*"prepare",\s*label:\s*"HOW WE PREPARE YOU"\s*\},\s*/;
if (regexPrepare.test(navContent)) {
  navContent = navContent.replace(regexPrepare, '\n');
  fs.writeFileSync(navFile, navContent, 'utf8');
  console.log('Removed matching item from StickyCourseNav.jsx.');
} else {
  console.log('Could not find prepare item in StickyCourseNav.jsx.');
}
