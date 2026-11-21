const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/StickyCourseNav.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Update nav padding
content = content.replace(
  /py-4 z-40 transition-all duration-300" : "w-full bg-white border-b py-4 relative z-40"/g,
  'py-2 md:py-4 z-40 transition-all duration-300" : "w-full bg-white border-b py-2 md:py-4 relative z-40"'
);

// Update gap and px on the scroll container
content = content.replace(
  /flex gap-8 px-12/g,
  'flex gap-4 md:gap-8 px-4 md:px-12'
);

// Update button padding and text size
content = content.replace(
  /inline-block px-5 py-3 text-sm/g,
  'inline-block px-3 py-2 md:px-5 md:py-3 text-xs md:text-sm'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated StickyCourseNav dimensions for mobile/md.");
