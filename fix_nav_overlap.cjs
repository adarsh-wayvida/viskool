const fs = require('fs');
const file = 'src/components/StickyCourseNav.jsx';
let content = fs.readFileSync(file, 'utf8');

// Currently:
// className={isScrolled ? "fixed top-2 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl bg-white/95 backdrop-blur-md shadow-lg rounded-full py-4 z-40 transition-all duration-300" : "w-full bg-white border-b py-4 relative z-40"}

// We want to dynamically change `top-2` to `top-[90px]` when `!isHidden` (meaning scrolling up, header is visible)
// Wait, if it's fixed, it should be top-[90px] when header is there, and top-4 when header is hidden.
// Let's replace the hardcoded "top-2" with a dynamic value based on isHidden.

const oldClass = 'className={isScrolled ? "fixed top-2 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl bg-white/95 backdrop-blur-md shadow-lg rounded-full py-4 z-40 transition-all duration-300" : "w-full bg-white border-b py-4 relative z-40"}';

const newClass = 'className={isScrolled ? `fixed ${isHidden ? "top-4" : "top-[90px]"} left-1/2 -translate-x-1/2 w-[96%] max-w-7xl bg-white/95 backdrop-blur-md shadow-lg rounded-full py-4 z-40 transition-all duration-300` : "w-full bg-white border-b py-4 relative z-40"}';

content = content.replace(oldClass, newClass);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed StickyCourseNav overlapping issue!');
