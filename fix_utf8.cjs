const fs = require('fs');

// 1. Fix FloatingCourseCTA.jsx
const ctaFile = 'src/components/FloatingCourseCTA.jsx';
let ctaContent = fs.readFileSync(ctaFile, 'utf8');

// Look for the block we need to replace
const ctaRegex = /<div className="px-5 font-bold text-\[#102A43\]">\s*\?15000\s*<\/div>/;
const newCtaPriceBlock = `<div className="px-5 flex items-center gap-2">
            <span className="font-bold text-[#071534] text-[18px] leading-none">\u20B915,000</span>
            <span className="text-[#8190AA] font-semibold text-[14px] line-through leading-none">\u20B920,000</span>
          </div>`;

if (ctaRegex.test(ctaContent)) {
  ctaContent = ctaContent.replace(ctaRegex, newCtaPriceBlock);
  fs.writeFileSync(ctaFile, ctaContent, 'utf8');
  console.log('Fixed FloatingCourseCTA.jsx');
} else {
  console.log('Could not find ?15000 block in CTA');
}

// 2. Fix page.jsx
const pageFile = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let pageContent = fs.readFileSync(pageFile, 'utf8');

pageContent = pageContent.replace(/\?15,000/g, '\u20B915,000');
pageContent = pageContent.replace(/\?20,000/g, '\u20B920,000');
pageContent = pageContent.replace(/\?10,000/g, '\u20B910,000');
pageContent = pageContent.replace(/\?15000/g, '\u20B915,000');

fs.writeFileSync(pageFile, pageContent, 'utf8');
console.log('Fixed page.jsx');

