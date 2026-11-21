const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace section paddings
content = content.replace(/pb-10 pt-10 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14/g, 'pb-6 pt-6 font-sans sm:px-6 sm:pb-8 lg:px-8 lg:pb-10');
content = content.replace(/pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14/g, 'pb-6 pt-0 font-sans sm:px-6 sm:pb-8 lg:px-8 lg:pb-10');

// Replace white card inner paddings
content = content.replace(/px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10/g, 'px-6 py-5 shadow-sm sm:px-8 sm:py-6 lg:px-10 lg:py-8');

// Also check for hero section padding if needed
// pt-[100px] pb-[40px] lg:pt-[120px] lg:pb-[60px]
content = content.replace(/pt-\[100px\] pb-\[40px\] lg:pt-\[120px\] lg:pb-\[60px\]/g, 'pt-[80px] pb-[20px] lg:pt-[100px] lg:pb-[40px]');

fs.writeFileSync(file, content);
console.log("Paddings reduced");
