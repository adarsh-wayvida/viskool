const fs = require('fs');
const path = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(path, 'utf8');

const targetRegex = /<div className="absolute right-0 top-1\/2 -translate-y-1\/2 w-\[70%\] sm:w-\[60%\] md:w-\[50%\] lg:w-\[45%\] xl:w-\[40%\] flex justify-end pointer-events-none z-0">\s*<img src="\/images\/learning-to-career-journey\.webp" alt="Learning Journey" className="h-auto w-full object-contain object-right max-h-\[80px\] md:max-h-\[110px\] lg:max-h-\[130px\]" \/>\s*<\/div>/g;

const replacement = `<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[40%] flex justify-end pointer-events-none z-0">
                      <img src="/images/learning-to-career-journey.webp" alt="Learning Journey" className="h-auto w-full object-contain object-right max-h-[50px] sm:max-h-[80px] md:max-h-[110px] lg:max-h-[130px]" />
                    </div>`;

if (targetRegex.test(content)) {
  content = content.replace(targetRegex, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful');
} else {
  console.log('Target block not found');
}
