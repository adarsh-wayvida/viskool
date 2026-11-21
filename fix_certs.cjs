const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the grid container max-width
content = content.replace(
  /<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">/g,
  '<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">'
);

// Replace the certificate max-width
content = content.replace(
  /<div className="flex aspect-\[16\/11\] w-full max-w-\[420px\] mx-auto items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 shadow-sm transition-transform hover:scale-\[1\.02\]">/g,
  '<div className="flex aspect-[16/11] w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 shadow-sm transition-transform hover:scale-[1.02]">'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully made certificates full width.");
