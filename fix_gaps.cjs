const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace section gaps to be almost nonexistent
content = content.replace(/pb-3 pt-3 font-sans sm:px-6 sm:pb-4 lg:px-8 lg:pb-6/g, 'pb-1 pt-1 font-sans sm:px-6 sm:pb-1 lg:px-8 lg:pb-2');
content = content.replace(/pb-3 pt-0 font-sans sm:px-6 sm:pb-4 lg:px-8 lg:pb-6/g, 'pb-1 pt-0 font-sans sm:px-6 sm:pb-1 lg:px-8 lg:pb-2');

fs.writeFileSync(file, content);
console.log("Section gaps reduced further");
