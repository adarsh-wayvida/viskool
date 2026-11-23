const fs = require('fs');
const path = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(path, 'utf8');

const targetStart = '<div className="relative mb-8 flex items-center w-full overflow-hidden">';
const targetEnd1 = 'lg:h-[60px] w-auto object-contain max-w-full" />\n                    </div>\n                  </div>';
const targetEnd2 = 'lg:h-[60px] w-auto object-contain max-w-full" />\r\n                    </div>\r\n                  </div>';

const startIndex = content.indexOf(targetStart);
if (startIndex !== -1) {
  let endIndex = content.indexOf(targetEnd2, startIndex);
  let targetEndLength = targetEnd2.length;
  
  if (endIndex === -1) {
    endIndex = content.indexOf(targetEnd1, startIndex);
    targetEndLength = targetEnd1.length;
  }

  if (endIndex !== -1) {
    const targetStr = content.substring(startIndex, endIndex + targetEndLength);

    const replacement = `<div className="relative mb-8 flex items-center justify-between w-full">
                    <h3 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px] whitespace-nowrap pr-4 relative z-10">
                      Course <span className="text-[#8B1538]">Overview</span>
                    </h3>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[40%] flex justify-end pointer-events-none z-0">
                      <img src="/images/learning-to-career-journey.webp" alt="Learning Journey" className="h-auto w-full object-contain object-right max-h-[80px] md:max-h-[110px] lg:max-h-[130px]" />
                    </div>
                  </div>`;

    content = content.replace(targetStr, replacement);
    fs.writeFileSync(path, content, 'utf8');
    console.log('Update successful');
  } else {
    console.log('Failed to find end block');
  }
} else {
  console.log('Failed to find start block');
}
