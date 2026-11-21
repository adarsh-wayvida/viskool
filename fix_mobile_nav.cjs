const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the hidden wrapper around StickyCourseNav
const regex = /<div className="hidden md:block">\s*<StickyCourseNav \/>\s*<\/div>/g;
const replacement = `<div className="block">\n        <StickyCourseNav />\n      </div>`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully updated StickyCourseNav visibility.");
} else {
  console.log("Could not find the target string. The file might have been modified already.");
}
