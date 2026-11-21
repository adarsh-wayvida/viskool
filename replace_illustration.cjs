const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<div className="relative mb-8 sm:mb-10 flex items-center justify-between">[\s\S]*?<img src="\/images\/digital-growth-symbol\.webp"[\s\S]*?<\/div>\s*<\/div>/;

const replacement = `<div className="relative mb-8 flex items-center w-full overflow-hidden">
                    <h3 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px] whitespace-nowrap pr-4">
                      Course <span className="text-[#8B1538]">Overview</span>
                    </h3>
                    <div className="flex-1 flex justify-end items-center h-full">
                      <div className="w-1/2 flex flex-col justify-center gap-1.5 md:gap-2 opacity-80">
                        <div className="h-[3px] md:h-1 w-full bg-gradient-to-r from-[#1A73E8] to-[#12B8A6] rounded-full"></div>
                        <div className="h-[3px] md:h-1 w-4/5 ml-auto bg-gradient-to-r from-[#8B1538] to-pink-500 rounded-full"></div>
                        <div className="h-[3px] md:h-1 w-3/5 ml-auto bg-gradient-to-r from-[#F59E0B] to-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully replaced illustration with colorful lines.");
} else {
  console.log("Could not find the target string. The regex might not be matching.");
}
