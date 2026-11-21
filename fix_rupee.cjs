const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const target = `<p className="text-sm md:text-[14px] font-normal leading-relaxed text-slate-700 text-left">
                  ?15000
                </p>`;
const replacement = `<p className="text-sm md:text-[16px] font-bold leading-relaxed text-[#102A43] text-left">
                  ?15000
                </p>`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(file, content);
    console.log('Fixed rupee symbol and made it bold.');
} else {
    console.log('Target string not found!');
}
