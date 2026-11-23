const fs = require('fs');
const path = 'src/components/SyllabusTabs.jsx';
let content = fs.readFileSync(path, 'utf8');

const targetRegex = /\{\/\* Presenter Image - Only visible on LG screens and up \*\/\}\s*<div className="hidden lg:flex absolute top-0 bottom-0 right-8 w-\[35%\] xl:w-\[25%\] pointer-events-none z-0 items-center justify-end">\s*<img\s*src="\/images\/student-presenter\.webp"\s*alt="Student Presenter"\s*className="w-auto h-\[90%\] object-contain drop-shadow-sm"\s*\/>\s*<\/div>/;

const replacement = `{/* Presenter Image - Only visible on LG screens and up */}
        <div className="hidden lg:flex absolute bottom-0 right-8 top-4 w-[35%] xl:w-[25%] pointer-events-none z-0 items-end justify-end">
          <img 
            src="/images/student-presenter.webp" 
            alt="Student Presenter" 
            className="w-auto h-full max-h-full object-contain object-bottom drop-shadow-sm"
          />
        </div>`;

if (targetRegex.test(content)) {
  content = content.replace(targetRegex, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful');
} else {
  console.log('Target block not found');
}
