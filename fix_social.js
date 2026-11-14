const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUsPage.jsx', 'utf8');
content = content.replace(/className="w-14 h-14 rounded-full bg-\\[#8B1538\\] flex/g, 'className="w-14 h-14 rounded-full bg-white border-2 border-[#8B1538] flex');
content = content.replace(/<IconBrandFacebook size=\\{28\\} className="text-white"/g, '<IconBrandFacebook size={28} className="text-[#8B1538]"');
content = content.replace(/<IconBrandInstagram size=\\{28\\} className="text-white"/g, '<IconBrandInstagram size={28} className="text-[#8B1538]"');
content = content.replace(/<IconBrandYoutube size=\\{28\\} className="text-white"/g, '<IconBrandYoutube size={28} className="text-[#8B1538]"');
content = content.replace(/<IconBrandLinkedin size=\\{28\\} className="text-white"/g, '<IconBrandLinkedin size={28} className="text-[#8B1538]"');
fs.writeFileSync('src/components/ContactUsPage.jsx', content);
console.log('Replaced.');
