const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// The original block
const oldBlock = `        <div className="w-full max-w-[1520px] mx-auto z-20 flex justify-start mb-2 md:mb-4">
          <a
            href="/#courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#3F4D5A] transition-colors hover:text-[#9B0F38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B0F38] focus-visible:ring-offset-2 sm:text-base"
          >
            <IconArrowLeft className="h-5 w-5" stroke={1.8} aria-hidden="true" />
            Back to courses
          </a>
        </div>`;

if (content.includes(oldBlock)) {
  content = content.replace(oldBlock, '');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Removed the broken block!');
} else {
  console.log('Block not found. It might be slightly malformed.');
  
  // Try regex if exact match fails
  const regex = /<div className="w-full max-w-\[1520px\] mx-auto z-20 flex justify-start mb-2 md:mb-4">[\s\S]*?<\/a>\s*<\/div>/;
  if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed via regex!');
  } else {
    console.log('Regex also failed.');
  }
}
