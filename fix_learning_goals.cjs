const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldStr = `className="flex min-h-0 md:min-h-[280px] h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(16,42,67,0.10)]"
                  >
                    <div
                      className={\`relative flex h-20 md:h-32 shrink-0 items-center justify-center \${goal.headerClass}\`}
                    >
                      <GoalIcon
                        className={\`relative z-10 h-10 w-10 md:h-16 md:w-16 \${goal.iconClass}\`}
                        stroke={1.7}
                        aria-hidden="true"
                      />
                      <div
                        className="absolute -bottom-5 left-[-10%] h-10 w-[120%] rounded-[50%] bg-white"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex flex-col justify-start px-2 md:px-2 pb-2 pt-2 text-center sm:px-2 gap-0">
                      <h3 className="text-base md:text-lg font-bold leading-snug text-[#102A43] sm:text-xl">
                        {goal.title}
                      </h3>
                      <div className="mx-auto my-0 h-px w-full bg-[#102A43]/12" />
                      <p className="text-sm md:text-[15px] font-normal leading-6 md:leading-7 text-[#102A43] sm:mt-1">
                        {goal.description}
                      </p>
                    </div>`;

const newStr = `className="flex h-fit flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(16,42,67,0.10)]"
                  >
                    <div
                      className={\`relative flex h-20 md:h-32 shrink-0 items-center justify-center \${goal.headerClass}\`}
                    >
                      <GoalIcon
                        className={\`relative z-10 h-10 w-10 md:h-16 md:w-16 \${goal.iconClass}\`}
                        stroke={1.7}
                        aria-hidden="true"
                      />
                      <div
                        className="absolute -bottom-5 left-[-10%] h-10 w-[120%] rounded-[50%] bg-white"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex flex-col justify-start px-4 pb-5 pt-8 text-center gap-1.5 z-10 relative bg-white">
                      <h3 className="text-base md:text-lg font-bold leading-snug text-[#102A43] sm:text-xl">
                        {goal.title}
                      </h3>
                      <p className="text-sm md:text-[15px] font-normal leading-6 md:leading-7 text-[#102A43]">
                        {goal.description}
                      </p>
                    </div>`;

if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    fs.writeFileSync(file, content);
    console.log('Fixed completely matching string');
} else {
    console.log('String not found perfectly.');
}
