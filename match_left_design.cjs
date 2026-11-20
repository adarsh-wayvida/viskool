const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const rightSideBlock = `<div className="relative z-10 flex items-center lg:absolute lg:right-[5%] xl:right-[12%] lg:top-[15%] bg-white/40 backdrop-blur-sm p-[12px] rounded-2xl shadow-sm border border-white/50">
              <div className="flex items-center justify-center w-[44px] h-[44px] lg:w-[50px] lg:h-[50px] bg-gradient-to-br from-[#0CA5E9] to-[#0868E8] rounded-[14px] shadow-md shrink-0">
                <IconBriefcase size={26} stroke={1.8} color="white" />
              </div>
              <div className="ml-4 flex flex-col justify-center text-left">
                <span className="text-[#071534] font-bold text-[17px] lg:text-[19px] leading-tight whitespace-nowrap">Placement Assistance</span>
                <span className="text-[#5F6F8C] font-medium text-[14px] lg:text-[15px] mt-[2px] leading-tight">Career Support</span>
              </div>
            </div>`;

// Actually we need to make it look exactly like the left side structure we just built.
// The left side has: text on top, stars/ratings on bottom, NO background/border/box.
// The prompt says "the lefft and right side sections has differnt design. i like the left one. convert right into that too"
// Let's strip the box, icon, and keep only text stacked like the left side.

const newRightSideBlock = `<div className="relative z-10 flex flex-col items-start lg:items-end lg:absolute lg:right-[5%] xl:right-[12%] lg:top-[15%]">
              <span className="text-[#0868E8] font-bold text-[18px] lg:text-[22px] whitespace-nowrap leading-none tracking-tight">Placement Assistance</span>
              <div className="flex items-center mt-2">
                <span className="text-[#334155] font-medium text-[14px]">Career Support</span>
              </div>
            </div>`;

if (content.includes(rightSideBlock)) {
  content = content.replace(rightSideBlock, newRightSideBlock);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully redesigned the Placement Assistance section to match!');
} else {
  console.log('Could not find the exact block. Running regex fallback.');
  // Regex fallback
  const regex = /<div className="relative z-10 flex items-center lg:absolute lg:right-\[5%\] xl:right-\[12%\] lg:top-\[15%\] bg-white\/40 backdrop-blur-sm p-\[12px\] rounded-2xl shadow-sm border border-white\/50">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
  if (regex.test(content)) {
    content = content.replace(regex, newRightSideBlock);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Redesigned via regex!');
  } else {
    console.log('Regex also failed. Let\'s try a broader search.');
    
    // Broad search
    const broadRegex = /<div className="relative z-10 flex items-center lg:absolute lg:right-\[5%\] xl:right-\[12%\] lg:top-\[15%\].*?">[\s\S]*?Placement Assistance[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
    if (broadRegex.test(content)) {
      content = content.replace(broadRegex, newRightSideBlock);
      fs.writeFileSync(file, content, 'utf8');
      console.log('Redesigned via broad regex!');
    } else {
      console.log('Broad regex failed too.');
    }
  }
}

