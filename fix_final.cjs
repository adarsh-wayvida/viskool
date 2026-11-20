const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Fix Rupee Symbol
content = content.replace(
  '<span className="text-[#071534] font-bold text-[28px] md:text-[32px] leading-none">?15,000</span>',
  '<span className="text-[#071534] font-bold text-[28px] md:text-[32px] leading-none">?15,000</span>'
);
content = content.replace(
  '<span className="text-[#8190AA] font-semibold text-[16px] md:text-[18px] line-through leading-none">?20,000</span>',
  '<span className="text-[#8190AA] font-semibold text-[16px] md:text-[18px] line-through leading-none">?20,000</span>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed rupee');
