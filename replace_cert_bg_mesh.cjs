const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /style={{ backgroundColor: '#FCF8F9', backgroundImage: 'radial-gradient\(#E2D1D6 1\.5px, transparent 1\.5px\)', backgroundSize: '24px 24px' }}/g;

const replacement = `style={{ backgroundColor: '#ffffff', backgroundImage: 'radial-gradient(at 0% 0%, rgba(147, 197, 253, 0.6) 0px, transparent 70%), radial-gradient(at 100% 0%, rgba(233, 213, 255, 0.8) 0px, transparent 70%), radial-gradient(at 100% 100%, rgba(253, 230, 138, 0.7) 0px, transparent 70%), radial-gradient(at 0% 100%, rgba(191, 219, 254, 0.6) 0px, transparent 70%)' }}`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully replaced dot pattern with abstract mesh gradient.");
} else {
  console.log("Could not find the target background style string.");
}
