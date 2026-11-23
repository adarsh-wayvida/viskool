const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<div className="flex aspect-\[16\/11\] w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 shadow-sm transition-transform hover:scale-\[1\.02\]">\s*<span className="font-medium text-gray-400">Viskool Certificate Placeholder<\/span>\s*<\/div>/g;

const replacement = `<div className="flex aspect-[16/11] w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition-transform hover:scale-[1.02] overflow-hidden relative">
                    <iframe src="/images/Digital-Marketing-Certificate.pdf#toolbar=0&navpanes=0&scrollbar=0" className="w-full h-full pointer-events-none" title="Viskool Course Certificate" style={{ border: 'none' }} scrolling="no"></iframe>
                  </div>`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully replaced Viskool Certificate Placeholder with the PDF preview.");
} else {
  console.log("Could not find the target string.");
}
