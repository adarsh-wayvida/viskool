const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldBlockRegex = /{\/\* Overlay Gradient \(Optional but good for text readability\) \*\/}[\s\S]*?<\/span>\s*<\/div>/;

if (oldBlockRegex.test(content)) {
  content = content.replace(oldBlockRegex, '');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully removed the overlay and preview text!');
} else {
  console.log('Could not find the block to remove.');
}
