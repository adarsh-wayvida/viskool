const fs = require('fs');
const file = 'src/components/StickyCourseNav.jsx';
let content = fs.readFileSync(file, 'utf8');

// The scrolled nav uses py-2
content = content.replace(
  'className={isScrolled ? "fixed top-2 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl bg-white/95 backdrop-blur-md shadow-lg rounded-full py-2 z-40 transition-all duration-300" : "w-full bg-white border-b py-2 relative z-40"}',
  'className={isScrolled ? "fixed top-2 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl bg-white/95 backdrop-blur-md shadow-lg rounded-full py-4 z-40 transition-all duration-300" : "w-full bg-white border-b py-4 relative z-40"}'
);

// The buttons also use py-2. Let's make them slightly taller too for a better click area.
content = content.replace(
  'className={`inline-block px-4 py-2 text-sm font-bold whitespace-nowrap transition-all duration-300 ${',
  'className={`inline-block px-5 py-3 text-sm font-bold whitespace-nowrap transition-all duration-300 ${'
);

// Also let's adjust the arrow buttons slightly so they stay centered and look good with the taller bar
content = content.replace(
  'className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-1 rounded-r-full shadow-[2px_0_4px_rgba(0,0,0,0.1)] z-10 hover:bg-gray-50 focus:outline-none"',
  'className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-2 py-1.5 rounded-r-full shadow-[2px_0_4px_rgba(0,0,0,0.1)] z-10 hover:bg-gray-50 focus:outline-none"'
);
content = content.replace(
  'className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-1 rounded-l-full shadow-[-2px_0_4px_rgba(0,0,0,0.1)] z-10 hover:bg-gray-50 focus:outline-none"',
  'className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-2 py-1.5 rounded-l-full shadow-[-2px_0_4px_rgba(0,0,0,0.1)] z-10 hover:bg-gray-50 focus:outline-none"'
);


fs.writeFileSync(file, content, 'utf8');
console.log('Increased nav height');
