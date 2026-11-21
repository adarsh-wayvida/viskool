const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const startIndex = content.indexOf('<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">');
if (startIndex !== -1) {
  const endIndex = content.indexOf('</div>\n          </div>\n        </div>\n      </section>', startIndex);
  const oldBlock = content.substring(startIndex, endIndex + 6); // Up to the end of the grid div

  const newBlock = `<div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {LEARNING_GOALS.map((goal) => {
                const GoalIcon = goal.icon;

                return (
                  <article
                    key={goal.title}
                    className="flex min-h-0 md:min-h-[280px] h-full flex-col overflow-hidden rounded-[12px] md:rounded-2xl border border-gray-100 bg-white shadow-sm md:shadow-[0_8px_24px_rgba(16,42,67,0.10)]"
                  >
                    {/* Desktop Colored Header (Hidden on Mobile) */}
                    <div
                      className={\`hidden md:flex relative h-32 shrink-0 items-center justify-center \${goal.headerClass}\`}
                    >
                      <GoalIcon
                        className={\`relative z-10 h-16 w-16 \${goal.iconClass}\`}
                        stroke={1.7}
                        aria-hidden="true"
                      />
                      <div
                        className="absolute -bottom-5 left-[-10%] h-10 w-[120%] rounded-[50%] bg-white"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex flex-col justify-start px-3 md:px-5 pb-4 md:pb-7 pt-3 md:pt-4 text-center sm:px-6 relative z-10">
                      {/* Mobile Icon (Hidden on Desktop) */}
                      <div className="flex items-center justify-center md:hidden mb-2">
                        <div className={\`flex items-center justify-center w-8 h-8 rounded-full \${goal.headerClass}\`}>
                          <GoalIcon className={\`w-5 h-5 \${goal.iconClass}\`} stroke={1.7} />
                        </div>
                      </div>
                      
                      <h3 className="text-[12px] sm:text-[14px] md:text-lg font-bold leading-snug text-[#102A43] sm:text-xl mb-1 md:mb-0">
                        {goal.title}
                      </h3>

                      <p className="text-[10px] sm:text-[12px] md:text-[15px] font-normal leading-[1.3] md:leading-7 text-[#102A43] sm:text-base">
                        {goal.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>`;

  content = content.replace(oldBlock, newBlock);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully updated Learning Goals to 2-column mobile layout without colored header!');
} else {
  console.log('Could not find the target grid container.');
}
