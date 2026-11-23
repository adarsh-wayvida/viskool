const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// The string we added previously
const regex = /style={{ backgroundColor: '#f8fafc', backgroundImage: 'radial-gradient\(#cbd5e1 1\.5px, transparent 1\.5px\)', backgroundSize: '24px 24px' }}/g;

// Replace with #FCF8F9 and slightly darker pinkish/gray dots
const replacement = `style={{ backgroundColor: '#FCF8F9', backgroundImage: 'radial-gradient(#E2D1D6 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully updated certificate background color and dot color.");
} else {
  console.log("Could not find the target string. Let's try a more general replacement.");
}
