const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const qaBlockRegex = /\s*<div className="mt-8 space-y-4 rounded-2xl bg-\[#F8F0F2\] p-5 sm:p-6">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

if (qaBlockRegex.test(content)) {
  content = content.replace(qaBlockRegex, '\n          </div>\n        </div>');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Removed Q&A block from "Who is it for?" section!');
} else {
  console.log('Could not find the block to remove');
}
