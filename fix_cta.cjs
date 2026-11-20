const fs = require('fs');
const file = 'src/components/FloatingCourseCTA.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldDesktopBlock = `<div className="hidden md:flex">
        <button
          type="button"
          className={\`fixed bottom-8 right-24 z-50 bg-[#800020] text-white rounded-full px-6 py-2.5 font-bold text-sm shadow-xl transition-all duration-500 \${visibilityClass}\`}
        >
          Enroll Now
        </button>
      </div>`;

const newDesktopBlock = `<div className="hidden md:flex">
        <div className={\`fixed bottom-8 right-24 z-50 flex items-center bg-white rounded-full shadow-xl border border-gray-100 p-1 transition-all duration-500 \${visibilityClass}\`}>
          <div className="px-5 font-bold text-[#102A43]">
            ?15000
          </div>
          <button
            type="button"
            className="bg-[#8B1538] hover:bg-[#73152C] text-white rounded-full px-6 py-2 font-bold text-sm transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </div>`;

content = content.replace(oldDesktopBlock, newDesktopBlock);

fs.writeFileSync(file, content, 'utf8');
console.log('Added price to floating CTA!');
