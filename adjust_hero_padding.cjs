const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'pt-[50px] md:pt-[60px] lg:pt-[70px]',
  'pt-[50px] md:pt-[60px] lg:pt-[80px]'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated desktop padding to pt-[80px]!');
