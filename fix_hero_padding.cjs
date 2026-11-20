const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// The current section padding is pt-[32px] md:pt-[48px] lg:pt-[64px]
content = content.replace(
  'pt-[32px] md:pt-[48px] lg:pt-[64px]',
  'pt-[100px] md:pt-[120px] lg:pt-[140px]'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Increased top padding to clear the header!');
