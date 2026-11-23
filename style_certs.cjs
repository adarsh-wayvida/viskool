const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace Viskool Certificate container
const viskoolRegex = /<div className="flex aspect-auto max-w-\[500px\] mx-auto w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition-transform hover:scale-\[1\.02\] overflow-hidden relative">\s*<img src="\/images\/Digital-Marketing-Certificate\.webp" alt="Viskool Course Certificate" className="w-full h-full object-contain" \/>\s*<\/div>/g;

const viskoolReplacement = `<div className="flex aspect-[4/3] max-w-[500px] mx-auto w-full items-center justify-center rounded-xl border border-gray-200 shadow-sm transition-transform hover:scale-[1.02] overflow-hidden relative" style={{ backgroundColor: '#f8fafc', backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
                      <img src="/images/Digital-Marketing-Certificate.webp" alt="Viskool Course Certificate" className="w-full h-full object-contain p-4 md:p-6 drop-shadow-md" />
                    </div>`;

// Replace Board Certificate container
const boardRegex = /<div className="flex aspect-auto max-w-\[500px\] mx-auto w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition-transform hover:scale-\[1\.02\] overflow-hidden">\s*<img src="\/images\/board-certificate\.webp" alt="Board Course Certificate" className="w-full h-full object-contain" \/>\s*<\/div>/g;

const boardReplacement = `<div className="flex aspect-[4/3] max-w-[500px] mx-auto w-full items-center justify-center rounded-xl border border-gray-200 shadow-sm transition-transform hover:scale-[1.02] overflow-hidden relative" style={{ backgroundColor: '#f8fafc', backgroundImage: 'radial-gradient(#cbd5e1 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
                      <img src="/images/board-certificate.webp" alt="Board Course Certificate" className="w-full h-full object-contain p-4 md:p-6 drop-shadow-md" />
                    </div>`;

if (viskoolRegex.test(content) && boardRegex.test(content)) {
  content = content.replace(viskoolRegex, viskoolReplacement);
  content = content.replace(boardRegex, boardReplacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully updated certificates with fixed dimensions and background patterns.");
} else {
  console.log("Could not find the target strings.");
}
