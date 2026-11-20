const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldBlock = `<div className="relative z-10 flex items-center gap-[16px] lg:absolute lg:left-[5%] xl:left-[12%] lg:top-[15%]">
              <span className="text-[#0868E8] font-bold text-[16px] lg:text-[18px] whitespace-nowrap">90-Day Live Training</span>
              <div className="flex items-center justify-center w-[40px] h-[40px] lg:w-[46px] lg:h-[46px] bg-[#0868E8] rounded-full shadow-lg shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>`;

const newBlock = `<div className="relative z-10 flex flex-col items-start lg:absolute lg:left-[5%] xl:left-[12%] lg:top-[15%]">
              <span className="text-[#0868E8] font-bold text-[18px] lg:text-[22px] whitespace-nowrap leading-none tracking-tight">90-Day Live Training</span>
              <div className="flex items-center gap-1.5 mt-2">
                <svg className="w-[16px] h-[16px] text-[#FBBF24] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[#334155] font-semibold text-[14px]">4.7</span>
                <span className="text-[#94A3B8] text-[14px] leading-none px-1">&bull;</span>
                <span className="text-[#334155] font-medium text-[14px]">1 rating</span>
              </div>
            </div>`;

if (content.includes(oldBlock)) {
  content = content.replace(oldBlock, newBlock);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully redesigned the live training section!');
} else {
  console.log('Could not find the exact block. Running regex fallback.');
  // Regex fallback just in case formatting differs slightly
  const regex = /<div className="relative z-10 flex items-center gap-\[16px\] lg:absolute lg:left-\[5%\] xl:left-\[12%\] lg:top-\[15%\]">[\s\S]*?<\/svg>\s*<\/div>\s*<\/div>/;
  if (regex.test(content)) {
    content = content.replace(regex, newBlock);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Redesigned via regex!');
  } else {
    console.log('Regex also failed.');
  }
}

