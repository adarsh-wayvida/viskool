const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<div className="flex aspect-auto max-w-\[500px\] mx-auto w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 shadow-sm transition-transform hover:scale-\[1\.02\]">\s*<span className="font-medium text-gray-400">Board Certificate Placeholder<\/span>\s*<\/div>/g;

const replacement = `<div className="flex aspect-auto max-w-[500px] mx-auto w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition-transform hover:scale-[1.02] overflow-hidden">
                    <img src="/images/board-certificate.webp" alt="Board Course Certificate" className="w-full h-full object-contain" />
                  </div>`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully replaced the Board Certificate placeholder with the WEBP image.");
} else {
  console.log("Could not find the target string.");
}
