const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/Header.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<h4 className="text-\[12px\] font-extrabold uppercase tracking-wider text-\[#8B1538\] mb-4 border-b border-gray-100 pb-2">\s*\{hoveredCategory\.name\}\s*<\/h4>/g;

if (regex.test(content)) {
  content = content.replace(regex, '');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully removed the redundant category heading from the right panel of the dropdown.");
} else {
  console.log("Could not find the target heading to remove.");
}
