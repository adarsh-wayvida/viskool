const fs = require('fs');
const file = 'src/components/CourseReviewSlider.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Change alignment
content = content.replace('flex w-max items-center animate-marquee', 'flex w-max items-start animate-marquee');

// 2. Change wrapper class
const wrapperRegex = /className="w-80 aspect-square p-3 overflow-hidden rounded-2xl bg-white border border-gray-200 shrink-0 shadow-sm"/g;
content = content.replace(wrapperRegex, 'className="w-[350px] sm:w-[450px] md:w-[500px] h-auto p-3 rounded-2xl bg-white border border-gray-200 shrink-0 shadow-sm"');

// 3. Change inner viewport
const innerRegex = /<div className="w-full h-full overflow-hidden rounded-\[10px\] bg-\[#22242a\] flex items-start justify-center">/g;
content = content.replace(innerRegex, '<div className="w-full h-auto overflow-hidden rounded-[10px] bg-[#22242a] flex items-start justify-center">');

// 4. Change img
const imgRegex = /<img\s+src=\{src\}\s+alt=\{`Course Review \$\{i \+ 1\}`\}\s+className="w-full h-full object-contain object-top block"\s+\/>/g;
content = content.replace(imgRegex, '<img src={src} alt={`Course Review ${i + 1}`} className="w-full h-auto block" />');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed using regex!');
