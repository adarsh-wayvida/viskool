const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<article[\s\S]*?key=\{goal\.title\}[\s\S]*?<\/article>/;

const newBlock = `<article
                    key={goal.title}
                    className="flex h-fit flex-row items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div
                      className={\`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl \${goal.headerClass}\`}
                    >
                      <GoalIcon
                        className={\`h-6 w-6 \${goal.iconClass}\`}
                        stroke={2}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-base md:text-[17px] font-bold leading-snug text-[#102A43] mb-1.5">
                        {goal.title}
                      </h3>
                      <p className="text-sm md:text-[14px] font-normal leading-relaxed text-slate-700">
                        {goal.text}
                      </p>
                    </div>
                  </article>`;

if (regex.test(content)) {
    content = content.replace(regex, newBlock);
    fs.writeFileSync(file, content);
    console.log('Horizontal layout applied successfully');
} else {
    console.log('Regex failed');
}
