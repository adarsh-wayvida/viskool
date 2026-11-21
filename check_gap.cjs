const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const facultyIdx = content.indexOf('id="faculty"');
console.log(content.substring(facultyIdx - 80, facultyIdx + 120));

const overviewIdx = content.indexOf('id="overview"');
console.log(content.substring(overviewIdx - 80, overviewIdx + 120));
