const fs = require('fs');
const path = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(path, 'utf8');

const target = 'Conclusion: Learn Digital Marketing in{\" \"}';
const replacement = 'Conclusion: <span className=\"text-[#8B1538]\">Learn Digital Marketing</span> in{\" \"}';

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful');
} else {
  console.log('Failed to find target string. Let me search for variations.');
  const startIdx = content.indexOf('Conclusion: Learn Digital Marketing');
  console.log(content.slice(Math.max(0, startIdx - 50), startIdx + 150));
}
