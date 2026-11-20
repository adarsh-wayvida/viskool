const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const rightSideBlock = `{/* Right Benefit */}
            <div className="relative z-10 flex flex-row items-center lg:absolute lg:right-[5%] xl:right-[12%] lg:top-[15%]">
              <div className="flex items-center justify-center w-[48px] h-[48px] lg:w-[52px] lg:h-[52px] rounded-[14px] bg-gradient-to-br from-[#0868E8] to-[#05DDE1] shadow-lg shrink-0">
                <IconBriefcase size={26} stroke={1.8} color="white" />
              </div>
              <div className="ml-4 flex flex-col justify-center text-left">
                <span className="text-[#071534] font-bold text-[17px] lg:text-[19px] leading-tight whitespace-nowrap">Placement Assistance</span>
                <span className="text-[#5F6F8C] font-medium text-[14px] lg:text-[15px] mt-[2px] leading-tight">Career Support</span>
              </div>
            </div>`;

const newRightSideBlock = `{/* Right Benefit */}
            <div className="relative z-10 flex flex-col items-start lg:items-end lg:absolute lg:right-[5%] xl:right-[12%] lg:top-[15%]">
              <span className="text-[#0868E8] font-bold text-[18px] lg:text-[22px] whitespace-nowrap leading-none tracking-tight">Placement Assistance</span>
              <div className="flex items-center mt-2">
                <span className="text-[#334155] font-medium text-[14px]">Career Support</span>
              </div>
            </div>`;

if (content.includes(rightSideBlock)) {
  content = content.replace(rightSideBlock, newRightSideBlock);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully redesigned the right side!');
} else {
  console.log('Could not find the exact block. Checking regex.');
}
