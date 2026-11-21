const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace section paddings (Outer gaps)
content = content.replace(/pb-6 pt-6 font-sans sm:px-6 sm:pb-8 lg:px-8 lg:pb-10/g, 'pb-3 pt-3 font-sans sm:px-6 sm:pb-4 lg:px-8 lg:pb-6');
content = content.replace(/pb-6 pt-0 font-sans sm:px-6 sm:pb-8 lg:px-8 lg:pb-10/g, 'pb-3 pt-0 font-sans sm:px-6 sm:pb-4 lg:px-8 lg:pb-6');

// Replace white card inner paddings
content = content.replace(/px-6 py-5 shadow-sm sm:px-8 sm:py-6 lg:px-10 lg:py-8/g, 'px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5');

// Hero section padding
content = content.replace(/pt-\[80px\] pb-\[20px\] lg:pt-\[100px\] lg:pb-\[40px\]/g, 'pt-[60px] pb-[10px] lg:pt-[80px] lg:pb-[20px]');

fs.writeFileSync(file, content);
console.log("Paddings reduced aggressively");
