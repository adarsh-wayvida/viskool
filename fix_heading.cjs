const fs = require('fs');
let content = fs.readFileSync('src/components/ParentTestimonialsPage.jsx', 'utf8');

content = content.replace(
  /<h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight">[\s\S]*?<\/h3>/, 
  '<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight truncate">\n                Let\'s talk about your child\'s <span className="text-[#8B1538]">learning goals.</span>\n              </h3>'
);

content = content.replace(
  /<p className="text-xs sm:text-sm text-gray-600 font-normal pt-1">/, 
  '<p className="text-xs sm:text-sm text-gray-600 font-normal pt-1 truncate">'
);

content = content.replace(
  /<div className="space-y-2 max-w-xl">/, 
  '<div className="space-y-2 max-w-full overflow-hidden">'
);

fs.writeFileSync('src/components/ParentTestimonialsPage.jsx', content);
console.log('done');
