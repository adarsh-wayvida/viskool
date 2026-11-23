const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<div className="flex -space-x-2 md:-space-x-3 pr-2">/g;
const replacement = `<div className="flex justify-between items-center w-[80%] md:w-[60%] pr-2">`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully spread out the circles.");
} else {
  console.log("Could not find the target string.");
}
