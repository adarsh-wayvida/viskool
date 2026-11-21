const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldStrStart = `<div className="mt-8 w-full overflow-x-auto rounded-2xl border border-[#8B1538]/15">`;
const startIdx = content.indexOf(oldStrStart);

const oldStrEnd = `</table>\n            </div>`;
const endIdx = content.indexOf(oldStrEnd, startIdx) + oldStrEnd.length;

if (startIdx === -1 || endIdx === -1) {
    console.log('Could not find the table block!');
    process.exit(1);
}

const tableBlock = content.substring(startIdx, endIdx);
console.log('Found table block of length:', tableBlock.length);

const items = [
  {
    title: "Course fee",
    icon: "IconCurrencyRupee",
    headerClass: "bg-[#CDEBFA]",
    iconClass: "text-[#0B3D6B]",
    text: "?15000",
  },
  {
    title: "Payment options",
    icon: "IconUserDollar",
    headerClass: "bg-[#F8CDD2]",
    iconClass: "text-[#8B2A38]",
    text: "Full payment / Partial Payment",
  },
  {
    title: "EMI Options",
    icon: "IconCalendarEvent",
    headerClass: "bg-[#FFD59B]",
    iconClass: "text-[#8A4A03]",
    text: "No EMI",
  },
  {
    title: "What is included",
    icon: "IconSparkles",
    headerClass: "bg-[#DED0F4]",
    iconClass: "text-[#4A2F7A]",
    text: "Everything in the \"What You Get with Us\" table above, plus live classes and your certificate",
  },
  {
    title: "Free demo class",
    icon: "IconVideo",
    headerClass: "bg-[#BFEDEA]",
    iconClass: "text-[#075955]",
    text: "Yes, Free demo class is available",
  },
  {
    title: "Current offer",
    icon: "IconTargetArrow",
    headerClass: "bg-[#FDE1CD]",
    iconClass: "text-[#8A4A03]",
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

content = content.replace(tableBlock, newBlock);
fs.writeFileSync(file, content);
console.log('Replaced table with cards successfully!');
