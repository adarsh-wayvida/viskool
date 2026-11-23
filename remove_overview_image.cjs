const fs = require('fs');
const path = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /<div className="absolute right-0 top-1\/2 -translate-y-1\/2 w-\[45%\] sm:w-\[60%\] md:w-\[50%\] lg:w-\[45%\] xl:w-\[40%\] flex justify-end pointer-events-none z-0">[\s\S]*?<img src="\/images\/learning-to-career-journey\.webp"[\s\S]*?<\/div>/g;

if (regex.test(content)) {
  content = content.replace(regex, '');
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful');
} else {
  console.log('Target not found');
}
