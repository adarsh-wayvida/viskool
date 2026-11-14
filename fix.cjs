const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUsPage.jsx', 'utf8');

content = content.replaceAll(
  'className=\"w-14 h-14 rounded-full bg-[#8B1538] flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110\"',
  'className=\"w-14 h-14 rounded-full bg-white border-2 border-[#8B1538] flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110\"'
);

content = content.replace('<IconBrandFacebook size={28} className=\"text-white\" stroke={1.5} />', '<IconBrandFacebook size={28} className=\"text-[#8B1538]\" stroke={1.5} />');
content = content.replace('<IconBrandInstagram size={28} className=\"text-white\" stroke={1.5} />', '<IconBrandInstagram size={28} className=\"text-[#8B1538]\" stroke={1.5} />');
content = content.replace('<IconBrandYoutube size={28} className=\"text-white\" stroke={1.5} />', '<IconBrandYoutube size={28} className=\"text-[#8B1538]\" stroke={1.5} />');
content = content.replace('<IconBrandLinkedin size={28} className=\"text-white\" stroke={1.5} />', '<IconBrandLinkedin size={28} className=\"text-[#8B1538]\" stroke={1.5} />');

fs.writeFileSync('src/components/ContactUsPage.jsx', content);
console.log('done');
