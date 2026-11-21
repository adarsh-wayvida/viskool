const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldContent = `<div className="flex flex-col justify-start px-4 md:px-5 pb-4 md:pb-5 pt-2 md:pt-4 text-center sm:px-6 gap-1 md:gap-2">`;
const newContent = `<div className="flex flex-col justify-start px-4 md:px-5 pb-4 md:pb-5 pt-0 text-center sm:px-6 gap-1 md:gap-2 relative z-10">`;

if(content.includes(oldContent)) {
  content = content.replace(oldContent, newContent);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed gap inside card!');
} else {
  console.log('Could not find the exact string. Using regex.');
  const regex = /<div className="flex flex-col justify-start px-4 md:px-5 pb-4 md:pb-5 pt-2 md:pt-4 text-center sm:px-6 gap-1 md:gap-2">/;
  if (regex.test(content)) {
    content = content.replace(regex, newContent);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed gap inside card with regex!');
  }
}
