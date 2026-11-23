const fs = require('fs');
const path = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Change color to dark green
content = content.replace(
  '<span className=\"text-[#8B1538]\">God\'s Own Country</span>',
  '<span className=\"text-[#166534]\">God\'s Own Country</span>'
);

// 2. Replace Kerala with Keralam in conclusion paragraphs
const startIdx = content.indexOf('Conclusion: Learn Digital Marketing');
const endIdx = content.indexOf('</section>', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  const sectionContent = content.substring(startIdx, endIdx);
  const updatedSection = sectionContent.replace(/Kerala/g, 'Keralam');
  content = content.substring(0, startIdx) + updatedSection + content.substring(endIdx);
  
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful');
} else {
  console.log('Failed to find section');
}
