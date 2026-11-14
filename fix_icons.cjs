const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUsPage.jsx', 'utf8');
content = content.replaceAll(
  'className=\"w-14 h-14 rounded-full bg-white border-2 border-[#8B1538] flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110\"',
  'className=\"w-14 h-14 flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110\"'
);
fs.writeFileSync('src/components/ContactUsPage.jsx', content);
console.log('Icons updated.');
