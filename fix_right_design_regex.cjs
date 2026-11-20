const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /{\/\* Right Benefit \*\/}\s*<div className="relative z-10 flex flex-row items-center lg:absolute lg:right-\[5%\] xl:right-\[12%\] lg:top-\[15%\]">[\s\S]*?<\/div>\s*<\/div>/;

const newRightSideBlock = `{/* Right Benefit */}
            <div className="relative z-10 flex flex-col items-center lg:items-start lg:absolute lg:right-[5%] xl:right-[12%] lg:top-[15%]">
              <span className="text-[#0868E8] font-bold text-[18px] lg:text-[22px] whitespace-nowrap leading-none tracking-tight">Placement Assistance</span>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="flex items-center justify-center w-[18px] h-[18px] bg-[#0CA5E9] rounded-sm shrink-0">
                  <IconBriefcase size={12} stroke={2} color="white" />
                </div>
                <span className="text-[#334155] font-medium text-[14px]">Career Support</span>
              </div>
            </div>`;

if (regex.test(content)) {
  content = content.replace(regex, newRightSideBlock);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully redesigned the right side with regex!');
} else {
  console.log('Regex failed.');
}
