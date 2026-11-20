const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldBlock = `<div className="relative mb-10">
                  <h3 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                    Course Overview
                  </h3>
                  <div className="h-1.5 w-[140px] bg-[#8B1538] rounded-full mt-3"></div>
                </div>`;

const newBlock = `<div className="relative mb-10">
                  <h3 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                    Course <span className="text-[#8B1538]">Overview</span>
                  </h3>
                </div>`;

if (content.includes(oldBlock)) {
  content = content.replace(oldBlock, newBlock);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated the Course Overview heading!');
} else {
  console.log('Could not find the exact block. Trying regex...');
  // regex fallback
  const regex = /<div className="relative mb-10">\s*<h3 className="[^"]*">\s*Course Overview\s*<\/h3>\s*<div className="[^"]*bg-\[#8B1538\][^"]*"><\/div>\s*<\/div>/g;
  if(regex.test(content)){
     content = content.replace(regex, newBlock);
     fs.writeFileSync(file, content, 'utf8');
     console.log('Updated via regex!');
  } else {
     console.log('Failed to find it via regex too.');
  }
}
