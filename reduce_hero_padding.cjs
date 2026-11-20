const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// The current section padding is pt-[100px] md:pt-[120px] lg:pt-[140px]
content = content.replace(
  'pt-[100px] md:pt-[120px] lg:pt-[140px]',
  'pt-[50px] md:pt-[60px] lg:pt-[70px]'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Reduced top padding by half!');
