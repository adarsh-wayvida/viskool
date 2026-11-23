const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /(<h4[^>]*>)\s*Certificates That Open Doors\s*(<\/h4>)/g;

if (regex.test(content)) {
  content = content.replace(regex, `$1\n                Certificates That <span className="text-[#8B1538]">Open Doors</span>\n              $2`);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully updated 'Open Doors' to burgundy.");
} else {
  console.log("Could not find the target string.");
}
