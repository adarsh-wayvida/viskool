const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<article[\s\S]*?key=\{goal\.title\}[\s\S]*?className="flex[^>]*? flex-col[^>]*?"\s*>[\s\S]*?<div\s+className={`relative flex h-20 md:h-32 shrink-0 items-center justify-center \${goal\.headerClass}`}[\s\S]*?<\/div>\s*<div className="flex flex-col justify-start[^>]*?>[\s\S]*?<\/div>\s*<\/article>/;

const newBlock = `<article
                    key={goal.title}
                    className="flex h-fit flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(16,42,67,0.10)]"
                  >
                    <div
                      className={\`relative flex h-20 md:h-28 shrink-0 items-center justify-center \${goal.headerClass}\`}
                    >
                      <GoalIcon
                        className={\`relative z-10 h-10 w-10 md:h-14 md:w-14 \${goal.iconClass}\`}
                        stroke={1.7}
                        aria-hidden="true"
                      />
                      <div
                        className="absolute -bottom-5 left-[-10%] h-10 w-[120%] rounded-[50%] bg-white"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex flex-col justify-start px-4 pb-5 pt-7 text-center gap-1.5 z-10 relative bg-white">
                      <h3 className="text-base md:text-lg font-bold leading-snug text-[#102A43] sm:text-xl">
                        {goal.title}
                      </h3>
                      <p className="text-sm md:text-[15px] font-normal leading-6 md:leading-7 text-[#102A43]">
                        {goal.text}
                      </p>
                    </div>
                  </article>`;

if (regex.test(content)) {
    content = content.replace(regex, newBlock);
    fs.writeFileSync(file, content);
    console.log('Regex replace successful');
} else {
    console.log('Regex failed');
}
