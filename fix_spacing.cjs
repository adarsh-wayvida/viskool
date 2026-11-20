const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldBlock = `<div className="w-full mt-8 overflow-hidden">
          <CourseReviewSlider />
        </div>`;

const newBlock = `<div className="w-full mt-2 overflow-hidden">
          <CourseReviewSlider />
        </div>`;

if(content.includes(oldBlock)) {
  content = content.replace(oldBlock, newBlock);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Reduced mt-8 to mt-2!');
} else {
  // Try regex
  const regex = /<div className="w-full mt-8 overflow-hidden">\s*<CourseReviewSlider \/>\s*<\/div>/g;
  if(regex.test(content)) {
    content = content.replace(regex, newBlock);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Reduced using regex!');
  } else {
    console.log('Failed to find block in page.jsx');
  }
}
