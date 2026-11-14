const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUsPage.jsx', 'utf8');

// Replace the container div classes for all four cards
content = content.replace(/className=\"w-14 h-14 rounded-full bg-\\[#8B1538\\] flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110\"/g, 'className=\"w-14 h-14 rounded-full bg-white border-2 border-[#8B1538] flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110\"');

// Replace the icon colors
content = content.replace(/className=\"text-white\" stroke=\\{1.5\\}/g, 'className=\"text-[#8B1538]\" stroke={1.5}');

fs.writeFileSync('src/components/ContactUsPage.jsx', content);
console.log('Replaced correctly.');
