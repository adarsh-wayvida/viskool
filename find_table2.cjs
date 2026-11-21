const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const idx = content.indexOf('Digital Marketing Course Fee in Kerala:');
const startIdx = content.indexOf('<div className="mt-8', idx);
const endIdx = content.indexOf('</table>', startIdx) + 8;
const divEndIdx = content.indexOf('</div>', endIdx) + 6;

console.log(startIdx, divEndIdx);
console.log(content.substring(startIdx, startIdx+100));
console.log(content.substring(divEndIdx - 100, divEndIdx));

const items = [
  {
    title: "Course fee",
    icon: "IconCurrencyRupee",
    headerClass: "bg-[#EEF6FF]",
    iconClass: "text-[#1A73E8]",
    text: "?15000",
  },
  {
    title: "Payment options",
    icon: "IconUserDollar",
    headerClass: "bg-[#E6FBF7]",
    iconClass: "text-[#12B8A6]",
    text: "Full payment / Partial Payment",
  },
  {
    title: "EMI Options",
    icon: "IconCalendarEvent",
    headerClass: "bg-[#FEF2F2]",
    iconClass: "text-[#F25C54]",
    text: "No EMI",
  },
  {
    title: "What is included",
    icon: "IconSparkles",
    headerClass: "bg-[#FFF8E6]",
    iconClass: "text-[#F59E0B]",
    text: "Everything in the \"What You Get with Us\" table above, plus live classes and your certificate",
  },
  {
    title: "Free demo class",
    icon: "IconVideo",
    headerClass: "bg-[#F5F0FF]",
    iconClass: "text-[#A855F7]",
    text: "Yes, Free demo class is available",
  },
  {
    title: "Current offer",
    icon: "IconTargetArrow",
    headerClass: "bg-[#EAF8F0]",
    iconClass: "text-[#22C55E]",
    text: "No offer available currently",
  }
];

let newBlock = `<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">\n`;

items.forEach((item) => {
  newBlock += `              <article
                className="flex h-fit flex-col rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={\`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.headerClass}\`}
                  >
                    <${item.icon}
                      className={\`h-6 w-6 ${item.iconClass}\`}
                      stroke={2}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base md:text-[17px] font-bold leading-snug text-[#102A43] text-left">
                    ${item.title}
                  </h3>
                </div>
                <p className="text-sm md:text-[14px] font-normal leading-relaxed text-slate-700 text-left">
                  ${item.text}
                </p>
              </article>\n`;
});

newBlock += `            </div>`;

const tableBlock = content.substring(startIdx, divEndIdx);
content = content.replace(tableBlock, newBlock);
fs.writeFileSync(file, content);
console.log('Done!');
