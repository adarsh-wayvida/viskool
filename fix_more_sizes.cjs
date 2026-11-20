const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Illustration Size
content = content.replace(
  '<div className="relative z-10 w-[280px] md:w-[360px] lg:w-[420px] flex justify-center order-first lg:order-none mb-4 lg:mb-0">',
  '<div className="relative z-10 w-[220px] md:w-[280px] lg:w-[320px] flex justify-center order-first lg:order-none mb-4 lg:mb-0">'
);

// Channel Icons Size
content = content.replace(
  'w-[54px] h-[54px] rounded-[14px]',
  'w-[42px] h-[42px] rounded-[10px]'
);
content = content.replace(
  '<svg width="30" height="30" viewBox="0 0 24 24" fill="#1877F2">',
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">'
);

content = content.replace(
  'w-[60px] h-[60px] rounded-[14px]',
  'w-[46px] h-[46px] rounded-[12px]'
);
content = content.replace(
  '<svg width="34" height="34" viewBox="0 0 24 24" fill="#25D366">',
  '<svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">'
);

content = content.replace(
  'w-[54px] h-[54px] rounded-[14px]',
  'w-[42px] h-[42px] rounded-[10px]'
);
content = content.replace(
  '<svg width="30" height="30" viewBox="0 0 24 24" fill="#FF0000">',
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000">'
);

content = content.replace(
  'w-[60px] h-[60px] rounded-[14px]',
  'w-[46px] h-[46px] rounded-[12px]'
);
content = content.replace(
  '<svg width="32" height="32" viewBox="0 0 24 24" fill="#F9AB00">',
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="#F9AB00">'
);

// Pricing
content = content.replace(
  '<span className="text-[#071534] font-[800] text-[38px] md:text-[42px] leading-none">?15,000</span>',
  '<span className="text-[#071534] font-bold text-[28px] md:text-[32px] leading-none">?15,000</span>'
);
content = content.replace(
  '<span className="text-[#8190AA] font-semibold text-[22px] md:text-[24px] line-through leading-none">?20,000</span>',
  '<span className="text-[#8190AA] font-semibold text-[16px] md:text-[18px] line-through leading-none">?20,000</span>'
);

// Buttons
content = content.replace(
  '<button\n                type="button"\n                onClick={() =>\n                  openContact("Enroll Now", {\n                    source: "AI Integrated Digital Marketing Course",\n                  })\n                }\n                className="h-[50px] md:h-[56px] min-w-full sm:min-w-[165px] px-[30px] md:px-[38px] bg-[#9B0F38] text-white font-bold text-[17px] md:text-[19px] rounded-full transition-transform hover:-translate-y-1 hover:bg-[#8B0D32] flex items-center justify-center shadow-sm"\n              >',
  '<button\n                type="button"\n                onClick={() =>\n                  openContact("Enroll Now", {\n                    source: "AI Integrated Digital Marketing Course",\n                  })\n                }\n                className="h-[44px] md:h-[48px] min-w-full sm:min-w-[140px] px-[24px] md:px-[32px] bg-[#9B0F38] text-white font-bold text-[15px] md:text-[16px] rounded-full transition-transform hover:-translate-y-1 hover:bg-[#8B0D32] flex items-center justify-center shadow-sm"\n              >'
);
content = content.replace(
  '<button\n                type="button"\n                onClick={() => {\n                  const el = document.getElementById("curriculum");\n                  if (el) el.scrollIntoView({ behavior: "smooth" });\n                }}\n                className="h-[50px] md:h-[56px] min-w-full sm:min-w-[165px] px-[30px] md:px-[38px] bg-transparent border-[2px] border-[#9B0F38] text-[#9B0F38] font-bold text-[17px] md:text-[19px] rounded-full transition-colors hover:bg-[#9B0F38]/5 flex items-center justify-center"\n              >',
  '<button\n                type="button"\n                onClick={() => {\n                  const el = document.getElementById("curriculum");\n                  if (el) el.scrollIntoView({ behavior: "smooth" });\n                }}\n                className="h-[44px] md:h-[48px] min-w-full sm:min-w-[140px] px-[24px] md:px-[32px] bg-transparent border-[1.5px] border-[#9B0F38] text-[#9B0F38] font-bold text-[15px] md:text-[16px] rounded-full transition-colors hover:bg-[#9B0F38]/5 flex items-center justify-center"\n              >'
);

fs.writeFileSync(file, content, 'utf8');
console.log('More sizes reduced');
