const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const styleBlock = `
      <style dangerouslySetInnerHTML={{ __html: \`
        @keyframes waveFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-wave-float {
          animation: waveFloat 4s ease-in-out infinite;
        }
        .glitter-hover {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .glitter-hover::before {
          content: '';
          position: absolute;
          top: 0; left: -150%;
          width: 100%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.9), transparent);
          transform: skewX(-20deg);
          z-index: 10;
        }
        .glitter-hover:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(255,255,255,0.9), 0 0 20px rgba(5,221,225,0.5);
        }
        .glitter-hover:hover::before {
          animation: shine 1.5s infinite;
        }
        @keyframes shine {
          0% { left: -150%; }
          20% { left: 150%; }
          100% { left: 150%; }
        }
      \`}} />
`;

content = content.replace('{/* Radial Glows */}', styleBlock + '\n        {/* Radial Glows */}');

const replaceIcon = (searchStr, replaceClassStr, delay) => {
  let idx = content.indexOf(searchStr);
  if (idx !== -1) {
    let closingIdx = content.indexOf('</div>', idx);
    let before = content.substring(0, idx);
    let after = content.substring(closingIdx + 6);
    let middle = content.substring(idx, closingIdx + 6);
    
    // Replace the opening tag
    middle = middle.replace(searchStr, replaceClassStr);
    // Add the extra closing div
    middle = middle.replace('</div>', '</div>\n            </div>');
    content = before + middle + after;
  }
};

// FB
replaceIcon(
  '<div className="absolute hidden lg:flex items-center justify-center w-[42px] h-[42px] rounded-[10px] bg-white shadow-md left-[15%] top-[65%] rotate-[-6deg]">',
  '<div className="absolute hidden lg:block left-[15%] top-[65%] animate-wave-float" style={{ animationDelay: "0s" }}><div className="flex items-center justify-center w-[42px] h-[42px] rounded-[10px] bg-white shadow-md rotate-[-6deg] glitter-hover cursor-pointer">'
);

// WA
replaceIcon(
  '<div className="absolute hidden lg:flex items-center justify-center w-[46px] h-[46px] rounded-[12px] bg-white shadow-md left-[28%] bottom-[10%] rotate-[8deg]">',
  '<div className="absolute hidden lg:block left-[28%] bottom-[10%] animate-wave-float" style={{ animationDelay: "0.8s" }}><div className="flex items-center justify-center w-[46px] h-[46px] rounded-[12px] bg-white shadow-md rotate-[8deg] glitter-hover cursor-pointer">'
);

// YT
replaceIcon(
  '<div className="absolute hidden lg:flex items-center justify-center w-[42px] h-[42px] rounded-[10px] bg-white shadow-md right-[15%] top-[60%] rotate-[5deg]">',
  '<div className="absolute hidden lg:block right-[15%] top-[60%] animate-wave-float" style={{ animationDelay: "1.6s" }}><div className="flex items-center justify-center w-[42px] h-[42px] rounded-[10px] bg-white shadow-md rotate-[5deg] glitter-hover cursor-pointer">'
);

// Analytics
replaceIcon(
  '<div className="absolute hidden lg:flex items-center justify-center w-[46px] h-[46px] rounded-[12px] bg-white shadow-md right-[28%] bottom-[15%] rotate-[-8deg]">',
  '<div className="absolute hidden lg:block right-[28%] bottom-[15%] animate-wave-float" style={{ animationDelay: "2.4s" }}><div className="flex items-center justify-center w-[46px] h-[46px] rounded-[12px] bg-white shadow-md rotate-[-8deg] glitter-hover cursor-pointer">'
);


fs.writeFileSync(file, content, 'utf8');
console.log('Animated icons!');
