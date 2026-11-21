const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace section paddings (Outer gaps)
// Increasing from pb-5 to pb-8 (mobile) and pb-8 to pb-12 (desktop)
content = content.replace(/pb-5 pt-5 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-8/g, 'pb-8 pt-8 font-sans sm:px-6 sm:pb-10 lg:px-8 lg:pb-12');
content = content.replace(/pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-8/g, 'pb-8 pt-0 font-sans sm:px-6 sm:pb-10 lg:px-8 lg:pb-12');

fs.writeFileSync(file, content);
console.log("Paddings increased again");
