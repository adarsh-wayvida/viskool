const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<div className="relative mb-10">\s*<h3 className="text-\[24px\] font-bold leading-\[1\.2\] tracking-tight text-\[#102A43\] sm:text-\[30px\]\s*lg:text-\[36px\]">\s*Course <span className="text-\[#8B1538\]">Overview<\/span>\s*<\/h3>\s*<\/div>/g;

const replacement = `<div className="relative mb-8 sm:mb-10 flex items-center justify-between">
                    <h3 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                      Course <span className="text-[#8B1538]">Overview</span>
                    </h3>
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100 p-2 sm:p-4">
                      <img src="/images/digital-growth-symbol.webp" alt="Digital Growth" className="w-full h-full object-contain" />
                    </div>
                  </div>`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully added illustration to Course Overview header.");
} else {
  console.log("Could not find the target string.");
}
