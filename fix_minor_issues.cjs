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

// Add Top Padding
content = content.replace(
  '<section className="relative w-full bg-[#FBFCFF] font-sans overflow-hidden min-h-[auto] lg:min-h-[600px] flex flex-col items-center pt-[24px] md:pt-[32px] lg:pt-[40px] pb-[24px] md:pb-[32px] lg:pb-[40px] px-[20px] md:px-[48px] lg:px-[64px]" id="hero">',
  '<section className="relative w-full bg-[#FBFCFF] font-sans overflow-hidden min-h-[auto] lg:min-h-[600px] flex flex-col items-center pt-[48px] md:pt-[56px] lg:pt-[64px] pb-[24px] md:pb-[32px] lg:pb-[40px] px-[20px] md:px-[48px] lg:px-[64px]" id="hero">'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed rupee and padding');
