const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
const content = fs.readFileSync(file, 'utf8');

const startIndex = content.indexOf('<section className="relative w-full bg-[#FBFCFF] font-sans');
if (startIndex === -1) {
  console.log('Could not find start of hero section');
  process.exit(1);
}

// Find the closing tag of this section
// The section has `<section ... id="hero">`
// We need to count open/close tags or just regex.
// A simpler way: It's the first </section> after startIndex.
const endIndex = content.indexOf('</section>', startIndex);
if (endIndex === -1) {
  console.log('Could not find end of hero section');
  process.exit(1);
}

const bannerCode = content.substring(startIndex, endIndex + '</section>'.length);
fs.writeFileSync('banner_code.txt', bannerCode, 'utf8');
console.log('Banner code extracted!');
