const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace section paddings (Outer gaps)
// Increasing from pb-8 (mobile) and pb-12 (desktop) to pb-10 and pb-14
content = content.replace(/pb-8 pt-8 font-sans sm:px-6 sm:pb-10 lg:px-8 lg:pb-12/g, 'pb-10 pt-10 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14');
content = content.replace(/pb-8 pt-0 font-sans sm:px-6 sm:pb-10 lg:px-8 lg:pb-12/g, 'pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14');

// The first two sections somehow got a unique class string during the earlier replacements.
// Course Overview
content = content.replace(/className="bg-\[#FCF8F9\] px-4 pb-1 pt-1 font-sans sm:px-6 sm:pb-1 lg:px-8 lg:pb-2"/g, 'className="bg-[#FCF8F9] px-4 pb-10 pt-10 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14"');
// All other sections that got squashed to pb-1 / pb-2
content = content.replace(/className="bg-\[#FCF8F9\] px-4 pb-1 pt-0 font-sans sm:px-6 sm:pb-1 lg:px-8 lg:pb-2"/g, 'className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14"');

fs.writeFileSync(file, content);
console.log("Paddings increased universally to pb-10 / lg:pb-14");
