const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<iframe src="\/images\/Digital-Marketing-Certificate\.pdf#toolbar=0&navpanes=0&scrollbar=0"[\s\S]*?<\/iframe>/g;

const replacement = `<img src="/images/Digital-Marketing-Certificate.webp" alt="Viskool Course Certificate" className="w-full h-full object-contain" />`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  
  // Also tweak the container aspect ratio to match standard certificates better without forcing a cutoff
  content = content.replace(
    /aspect-\[1\.414\/1\] max-w-\[500px\]/g,
    'aspect-auto max-w-[500px]' 
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully replaced the PDF iframe with the WEBP image.");
} else {
  console.log("Could not find the iframe string.");
}
