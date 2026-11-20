const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `<img src="/images/digital-growth-symbol.webp" alt="Blue-cyan digital growth symbol" className="w-full h-full object-contain drop-shadow-2xl" />`;

const startStr = '<svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">';
const endStr = '</svg>';

const startIdx = content.indexOf(startStr);
const endIdx = content.indexOf(endStr, startIdx) + endStr.length;

if (startIdx !== -1 && endIdx > startIdx) {
  content = content.substring(0, startIdx) + replacement + content.substring(endIdx);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Image replaced successfully');
} else {
  console.log('Failed to find SVG tags');
}
