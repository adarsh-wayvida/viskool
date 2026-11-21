const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = '<div className="grid grid-cols-2 md:grid-cols-3 gap-4">';
const newStr = '<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">';

const regexRemove = /<div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">\s*<span className="text-\[11px\] font-bold text-gray-400 uppercase tracking-wider mb-1">Next Batch Starts<\/span>\s*<span className="text-\[#102A43\] font-semibold transition-colors duration-300 group-hover:text-\[#800020\]">\[Soon\]<\/span>\s*<\/div>/;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, newStr);
    content = content.replace(regexRemove, '');
    fs.writeFileSync(file, content);
    console.log('Fixed Mode layout and removed Next Batch');
} else {
    console.log('Could not find grid container');
}
