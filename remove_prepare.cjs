const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<section className="bg-\[#FCF8F9\] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="prepare">[\s\S]*?<\/section>/;

if (regex.test(content)) {
  content = content.replace(regex, '');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Removed HOW WE PREPARE YOU section');
} else {
  console.log('Regex failed');
}
