const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<p className="mb-4">\s*After this course, you can apply for roles like Digital Marketing Executive, SEO Executive, Social Media Executive, or Performance Marketer in Kerala or anywhere in the world\. You can also freelance or grow your own business\.\s*<\/p>/;

if (regex.test(content)) {
  content = content.replace(regex, '');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Removed paragraph from section 9 successfully.');
} else {
  console.log('Failed to find paragraph in section 9.');
}
