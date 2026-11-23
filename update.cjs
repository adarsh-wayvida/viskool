const fs = require('fs');
const path = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(path, 'utf8');

const targetStart = '<div className="flex-1 flex justify-end items-center h-full opacity-60">';
const startIdx = content.indexOf(targetStart);

const endStr1 = '</div>\n                      </div>';
const endStr2 = '</div>\r\n                      </div>';

let endIdx = content.indexOf(endStr2, startIdx);
let endLength = endStr2.length;
if (endIdx === -1) {
  endIdx = content.indexOf(endStr1, startIdx);
  endLength = endStr1.length;
}

if (startIdx !== -1 && endIdx !== -1) {
  const target = content.substring(startIdx, endIdx + endLength);
  const replacement = `<div className="flex-1 flex justify-end items-center h-full pl-4 md:pl-8">
                      <img src="/images/learning-to-career-journey.webp" alt="Learning Journey" className="h-10 sm:h-12 md:h-14 lg:h-[60px] w-auto object-contain max-w-full" />
                    </div>`;
  content = content.replace(target, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful');
} else {
  console.log('Target string not found');
}
