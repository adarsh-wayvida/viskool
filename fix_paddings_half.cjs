const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// The current padding is pb-10 (40px) on mobile, sm:pb-12 (48px) on tablet, lg:pb-14 (56px) on desktop.
// Half of that is pb-5 (20px), sm:pb-6 (24px), lg:pb-7 (28px).
content = content.replace(/pb-10 pt-10 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14/g, 'pb-5 pt-5 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7');
content = content.replace(/pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14/g, 'pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7');

fs.writeFileSync(file, content);
console.log("Paddings reduced to exactly half");
