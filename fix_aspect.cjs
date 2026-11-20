const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// The current classes are `aspect-[4/3] w-full max-w-[320px]`
// A landscape certificate is closer to A4 sideways, which is roughly aspect-[1.414/1], or 1.4:1
// Let's use `aspect-[16/11] max-w-[400px]` to make it noticeably wider while keeping the height reasonable.

content = content.replace(
  /aspect-\[4\/3\] w-full max-w-\[320px\]/g,
  'aspect-[16/11] w-full max-w-[420px]'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated aspect ratio to landscape!');
