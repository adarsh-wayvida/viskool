const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<div className="flex-1 flex justify-end items-center h-full">\s*<div className="w-1\/2 flex flex-col justify-center gap-1\.5 md:gap-2 opacity-80">\s*<div className="h-\[3px\] md:h-1 w-full bg-gradient-to-r from-\[#1A73E8\] to-\[#12B8A6\] rounded-full"><\/div>\s*<div className="h-\[3px\] md:h-1 w-4\/5 ml-auto bg-gradient-to-r from-\[#8B1538\] to-pink-500 rounded-full"><\/div>\s*<div className="h-\[3px\] md:h-1 w-3\/5 ml-auto bg-gradient-to-r from-\[#F59E0B\] to-yellow-400 rounded-full"><\/div>\s*<\/div>\s*<\/div>/g;

const replacement = `<div className="flex-1 flex justify-end items-center h-full opacity-60">
                        <div className="flex -space-x-3 md:-space-x-4">
                          <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-[#1A73E8]/20 mix-blend-multiply"></div>
                          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#8B1538]/20 mix-blend-multiply"></div>
                          <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-[#F59E0B]/20 mix-blend-multiply"></div>
                          <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#12B8A6]/20 mix-blend-multiply"></div>
                        </div>
                      </div>`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully replaced lines with faded circles.");
} else {
  console.log("Could not find the target lines.");
}
