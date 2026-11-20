const fs = require('fs');
const file = 'src/components/SyllabusTabs.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldRender = `<div className="mt-3 flex flex-col gap-2">
          {active.content.map((item, index) => (
            <p key={index} className="text-[15px] leading-relaxed text-[#475569] sm:text-base flex items-start">
              <span className="mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-[#8B1538] flex-shrink-0"></span>
              <span>{item}</span>
            </p>
          ))}
        </div>`;

// The problem is `mt-1` on the span. The line height is relaxed, meaning the text is tall.
// We can use `mt-2` to push the dot down, or use `items-baseline` or `mt-[8px]`.
// Actually, `mt-2.5` or `mt-2` usually aligns dots perfectly with the middle of the first line of text.

const newRender = `<div className="mt-4 flex flex-col gap-3">
          {active.content.map((item, index) => (
            <p key={index} className="text-[15px] leading-relaxed text-[#475569] sm:text-base flex items-start">
              <span className="mr-2.5 mt-[10px] w-[5px] h-[5px] rounded-full bg-[#8B1538] flex-shrink-0"></span>
              <span>{item}</span>
            </p>
          ))}
        </div>`;

content = content.replace(oldRender, newRender);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed alignment of bullet points!');
