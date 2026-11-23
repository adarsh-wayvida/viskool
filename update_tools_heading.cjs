const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<h4 className="text-\[24px\] font-bold leading-\[1\.2\] tracking-tight text-\[#102A43\] sm:text-\[30px\]\s*lg:text-\[36px\]">\s*Master the Tools That\{" "\}\s*<span className="text-\[#8B1538\]">Actually Get You Hired<\/span>\s*<\/h4>/g;

const replacement = `<h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                Master the <span className="text-[#8B1538]">Tools That Actually Get You Hired</span>
              </h4>`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully updated the Tools heading color.");
} else {
  console.log("Could not find the target string. The regex might not be matching.");
}
