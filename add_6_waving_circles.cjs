const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<div className="flex-1 flex justify-end items-center h-full opacity-60">\s*<div className="flex -space-x-3 md:-space-x-4">\s*<div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-\[#1A73E8\]\/20 mix-blend-multiply"><\/div>\s*<div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-\[#8B1538\]\/20 mix-blend-multiply"><\/div>\s*<div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-\[#F59E0B\]\/20 mix-blend-multiply"><\/div>\s*<div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-\[#12B8A6\]\/20 mix-blend-multiply"><\/div>\s*<\/div>\s*<\/div>/g;

const replacement = `<div className="flex-1 flex justify-end items-center h-full opacity-60">
                        <style>{\`
                          @keyframes subtleWave {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-8px); }
                          }
                          .animate-wave {
                            animation: subtleWave 2.5s ease-in-out infinite;
                          }
                        \`}</style>
                        <div className="flex -space-x-2 md:-space-x-3 pr-2">
                          <div className="animate-wave w-5 h-5 md:w-8 md:h-8 rounded-full bg-[#1A73E8]/30 mix-blend-multiply" style={{ animationDelay: '0ms' }}></div>
                          <div className="animate-wave w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#8B1538]/30 mix-blend-multiply" style={{ animationDelay: '200ms' }}></div>
                          <div className="animate-wave w-6 h-6 md:w-9 md:h-9 rounded-full bg-[#F59E0B]/30 mix-blend-multiply" style={{ animationDelay: '400ms' }}></div>
                          <div className="animate-wave w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#12B8A6]/30 mix-blend-multiply" style={{ animationDelay: '600ms' }}></div>
                          <div className="animate-wave w-5 h-5 md:w-8 md:h-8 rounded-full bg-pink-500/30 mix-blend-multiply" style={{ animationDelay: '800ms' }}></div>
                          <div className="animate-wave w-6 h-6 md:w-10 md:h-10 rounded-full bg-indigo-500/30 mix-blend-multiply" style={{ animationDelay: '1000ms' }}></div>
                        </div>
                      </div>`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully replaced 4 circles with 6 waving circles.");
} else {
  console.log("Could not find the target string.");
}
