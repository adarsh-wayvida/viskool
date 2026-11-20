const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const newStyle = `
        @keyframes bgWaveTranslate {
          0% { transform: translate(-45%, -50%); }
          50% { transform: translate(-55%, -50%); }
          100% { transform: translate(-45%, -50%); }
        }
        .animate-bg-wave {
          animation: bgWaveTranslate 20s ease-in-out infinite;
        }
`;

content = content.replace('.animate-wave-float {', newStyle + '\n        .animate-wave-float {');

const bgSvg = `
        {/* Full-width Animated Background Waves */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-60">
          <svg className="absolute w-[200vw] min-w-[2000px] h-[800px] left-1/2 top-1/2 animate-bg-wave" viewBox="0 0 2000 800" fill="none" preserveAspectRatio="none">
            <path d="M0 400 C 400 200, 600 600, 1000 400 C 1400 200, 1600 600, 2000 400" stroke="url(#wave-grad-1)" strokeWidth="1.5" fill="none" />
            <path d="M0 500 C 300 700, 700 100, 1000 500 C 1300 700, 1700 100, 2000 500" stroke="url(#wave-grad-2)" strokeWidth="1" fill="none" />
            <path d="M0 300 C 500 100, 500 700, 1000 300 C 1500 100, 1500 700, 2000 300" stroke="url(#wave-grad-3)" strokeWidth="1" fill="none" />
            <defs>
              <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
                <stop offset="25%" stopColor="#93C5FD" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#93C5FD" stopOpacity="0" />
                <stop offset="75%" stopColor="#93C5FD" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#67E8F9" stopOpacity="0" />
                <stop offset="25%" stopColor="#67E8F9" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#67E8F9" stopOpacity="0" />
                <stop offset="75%" stopColor="#67E8F9" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#67E8F9" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="wave-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0" />
                <stop offset="25%" stopColor="#E9D5FF" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#E9D5FF" stopOpacity="0" />
                <stop offset="75%" stopColor="#E9D5FF" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#E9D5FF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
`;

content = content.replace('{/* Radial Glows */}', bgSvg + '\n        {/* Radial Glows */}');

const oldLinesStart = content.indexOf('{/* Connector Lines (Decorative) */}');
const oldLinesEnd = content.indexOf('</div>', content.indexOf('</svg>', oldLinesStart)) + 6;
if(oldLinesStart !== -1 && oldLinesEnd > oldLinesStart) {
  content = content.substring(0, oldLinesStart) + content.substring(oldLinesEnd);
}

fs.writeFileSync(file, content, 'utf8');
console.log('Added background waves!');
