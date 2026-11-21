const fs = require('fs');
const file = 'src/components/StickyCourseNav.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace:
// className={isScrolled ? `fixed ${isHidden ? "top-4" : "top-[90px]"} left-1/2 -translate-x-1/2 w-[96%] max-w-7xl bg-white/95 backdrop-blur-md shadow-lg rounded-full py-4 z-40 transition-all duration-300` : "w-full bg-white border-b py-4 relative z-40"}
// With:
// className={isScrolled ? "fixed top-4 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl bg-white/95 backdrop-blur-md shadow-lg rounded-full py-4 z-40 transition-all duration-300" : "w-full bg-white border-b py-4 relative z-40"}

const oldClass = 'className={isScrolled ? `fixed ${isHidden ? "top-4" : "top-[90px]"} left-1/2 -translate-x-1/2 w-[96%] max-w-7xl bg-white/95 backdrop-blur-md shadow-lg rounded-full py-4 z-40 transition-all duration-300` : "w-full bg-white border-b py-4 relative z-40"}';

const newClass = 'className={isScrolled ? "fixed top-4 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl bg-white/95 backdrop-blur-md shadow-lg rounded-full py-4 z-40 transition-all duration-300" : "w-full bg-white border-b py-4 relative z-40"}';

if (content.includes(oldClass)) {
  content = content.replace(oldClass, newClass);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed StickyCourseNav to always be top-4 when scrolled!');
} else {
  console.log('Could not find the class to replace.');
}
