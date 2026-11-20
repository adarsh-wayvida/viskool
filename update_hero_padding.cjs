const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'pt-[24px] md:pt-[32px] lg:pt-[40px]',
  'pt-[60px] md:pt-[80px] lg:pt-[100px]'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated hero padding');
