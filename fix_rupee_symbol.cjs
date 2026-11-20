const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// The file got corrupted somehow (again) and is literally containing the character '?' instead of '?'
content = content.replace(/\?15,000/g, '?15,000');
content = content.replace(/\?20,000/g, '?20,000');
content = content.replace(/\?10,000/g, '?10,000');
content = content.replace(/\?15000/g, '?15000');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed corrupted rupee symbols in page.jsx!');

// Let's also check FloatingCourseCTA.jsx just in case
const ctaFile = 'src/components/FloatingCourseCTA.jsx';
if (fs.existsSync(ctaFile)) {
  let ctaContent = fs.readFileSync(ctaFile, 'utf8');
  if (ctaContent.includes('?15000')) {
    ctaContent = ctaContent.replace(/\?15000/g, '?15000');
    fs.writeFileSync(ctaFile, ctaContent, 'utf8');
    console.log('Fixed corrupted rupee symbol in CTA!');
  }
}
