const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div className="flex flex-col justify-start px-4 md:px-5 pb-4 md:pb-5 -mt-4 md:-mt-6 text-center sm:px-6 gap-1 md:gap-2 relative z-10">[\s\S]*?<\/div>/;

const newBlock = `<div className="flex flex-col justify-start px-4 md:px-5 pb-4 md:pb-5 pt-3 md:pt-4 text-center sm:px-6 relative z-10">
                      <h3 className="text-base md:text-lg font-bold leading-snug text-[#102A43] sm:text-xl mb-1.5 md:mb-2">
                        {goal.title}
                      </h3>
                      <p className="text-sm md:text-[15px] font-normal leading-6 md:leading-7 text-[#102A43] sm:text-base">
                        {goal.text}
                      </p>
                    </div>`;

if(regex.test(content)) {
  content = content.replace(regex, newBlock);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed gap between title and description using regex!');
} else {
  console.log('Regex failed.');
}
