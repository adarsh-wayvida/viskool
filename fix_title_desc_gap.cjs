const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldBlock = `<div className="flex flex-col justify-start px-4 md:px-5 pb-4 md:pb-5 -mt-4 md:-mt-6 text-center sm:px-6 gap-1 md:gap-2 relative z-10">
                      <h3 className="text-base md:text-lg font-bold leading-snug text-[#102A43] sm:text-xl">
                        {goal.title}
                      </h3>
                      <div className="mx-auto my-1 md:my-2 h-px w-full bg-[#102A43]/12" />
                      <p className="text-sm md:text-[15px] font-normal leading-6 md:leading-7 text-[#102A43] sm:text-base mt-0.5 md:mt-1">
                        {goal.text}
                      </p>
                    </div>`;

// Restore the normal top padding so it isn't aggressively pushed up
// Remove the divider
// Remove gap and margins to bring title and description very close
const newBlock = `<div className="flex flex-col justify-start px-4 md:px-5 pb-4 md:pb-5 pt-2 md:pt-4 text-center sm:px-6 relative z-10">
                      <h3 className="text-base md:text-lg font-bold leading-snug text-[#102A43] sm:text-xl mb-1">
                        {goal.title}
                      </h3>
                      <p className="text-sm md:text-[15px] font-normal leading-6 md:leading-7 text-[#102A43] sm:text-base">
                        {goal.text}
                      </p>
                    </div>`;

if(content.includes(oldBlock)) {
  content = content.replace(oldBlock, newBlock);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed gap between title and description!');
} else {
  console.log('Could not find the exact string. Try regex.');
}
