const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Eyebrow
content = content.replace(
  '<h2 className="text-[#071534] font-bold text-[14px] md:text-[24px] lg:text-[28px] tracking-[0.02em] text-center mb-[20px] md:mb-[28px]">',
  '<h2 className="text-[#071534] font-bold text-[13px] md:text-[15px] lg:text-[16px] tracking-[0.05em] text-center mb-[16px] md:mb-[20px] uppercase">'
);

// Main Heading
content = content.replace(
  '<h1 className="text-[#061330] font-[800] text-[36px] md:text-[54px] lg:text-[clamp(54px,5vw,78px)] leading-[1.12] tracking-[-0.035em] text-center max-w-[1100px] mx-auto">',
  '<h3 className="text-[#061330] font-[800] text-[30px] md:text-[38px] lg:text-[46px] leading-[1.15] tracking-[-0.02em] text-center max-w-[900px] mx-auto">'
);
content = content.replace(
  'Master Digital Marketing.<br className="hidden lg:block" /> Build Your Career.\n          </h1>',
  'Master Digital Marketing.<br className="hidden lg:block" /> Build Your Career.\n          </h3>'
);

// Description
content = content.replace(
  '<p className="text-[#10213E] font-medium text-[17px] md:text-[23px] lg:text-[27px] leading-[1.42] text-center max-w-[900px] mx-auto mt-[24px] md:mt-[28px]">',
  '<p className="text-[#10213E] font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-center max-w-[800px] mx-auto mt-[16px] md:mt-[20px]">'
);

// Left benefit
content = content.replace(
  '<span className="text-[#0868E8] font-bold text-[21px] lg:text-[24px] whitespace-nowrap">90-Day Live Training</span>',
  '<span className="text-[#0868E8] font-bold text-[16px] lg:text-[18px] whitespace-nowrap">90-Day Live Training</span>'
);
content = content.replace(
  '<div className="flex items-center justify-center w-[52px] h-[52px] lg:w-[56px] lg:h-[56px] bg-[#0868E8] rounded-full shadow-lg shrink-0">',
  '<div className="flex items-center justify-center w-[40px] h-[40px] lg:w-[46px] lg:h-[46px] bg-[#0868E8] rounded-full shadow-lg shrink-0">'
);
content = content.replace(
  '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">',
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'
);

// Right benefit
content = content.replace(
  '<span className="text-[#071534] font-bold text-[23px] lg:text-[26px] leading-tight whitespace-nowrap">Placement Assistance</span>',
  '<span className="text-[#071534] font-bold text-[17px] lg:text-[19px] leading-tight whitespace-nowrap">Placement Assistance</span>'
);
content = content.replace(
  '<span className="text-[#5F6F8C] font-medium text-[17px] lg:text-[19px] mt-[2px] leading-tight">Career Support</span>',
  '<span className="text-[#5F6F8C] font-medium text-[14px] lg:text-[15px] mt-[2px] leading-tight">Career Support</span>'
);
content = content.replace(
  '<div className="flex items-center justify-center w-[62px] h-[62px] lg:w-[66px] lg:h-[66px] rounded-[16px] bg-gradient-to-br from-[#0868E8] to-[#05DDE1] shadow-lg shrink-0">',
  '<div className="flex items-center justify-center w-[48px] h-[48px] lg:w-[52px] lg:h-[52px] rounded-[14px] bg-gradient-to-br from-[#0868E8] to-[#05DDE1] shadow-lg shrink-0">'
);
content = content.replace(
  '<IconBriefcase size={32} stroke={1.8} color="white" />',
  '<IconBriefcase size={26} stroke={1.8} color="white" />'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fonts reduced');
