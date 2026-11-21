const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace section paddings (Outer gaps)
// Increasing slightly from pb-3 to pb-5 (mobile) and pb-6 to pb-8 (desktop)
content = content.replace(/pb-3 pt-3 font-sans sm:px-6 sm:pb-4 lg:px-8 lg:pb-6/g, 'pb-5 pt-5 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-8');
content = content.replace(/pb-3 pt-0 font-sans sm:px-6 sm:pb-4 lg:px-8 lg:pb-6/g, 'pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-8');

// Leaving the inner white card paddings as they were (nice and compact)
// px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5

fs.writeFileSync(file, content);
console.log("Paddings slightly increased");
