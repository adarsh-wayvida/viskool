const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldUnderline = '<div className="h-1.5 w-[140px] bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#F97316] rounded-full mt-3"></div>';
const newUnderline = '<div className="h-1.5 w-[140px] bg-[#8B1538] rounded-full mt-3"></div>';

content = content.replace(oldUnderline, newUnderline);

fs.writeFileSync(file, content, 'utf8');
console.log('Replaced gradient underline with solid burgundy!');
