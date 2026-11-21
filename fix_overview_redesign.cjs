const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const startTag = '<div className="relative grid grid-cols-4 gap-2 md:gap-4 lg:gap-5 w-full">';
const endTag = '</MagicCursorContainer>';

const startIdx = content.indexOf(startTag);
if (startIdx === -1) {
    console.log('Start tag not found');
    process.exit(1);
}

const endBlockStr = '</div>\n              </MagicCursorContainer>';
let gridEndIdx = content.indexOf(endBlockStr, startIdx);

const cards = [
  { icon: 'IconCalendarEvent', bgCard: '#EEF6FF', bgIcon: '#1A73E8', title: '90 Days', subtitle: 'Duration' },
  { icon: 'IconDeviceDesktop', bgCard: '#E6FBF7', bgIcon: '#12B8A6', title: 'Live Online', subtitle: 'Learning Mode' },
  { icon: 'IconClock', bgCard: '#FEF2F2', bgIcon: '#F25C54', title: '90 Hours', subtitle: 'Live Training' },
  { icon: 'IconSchool', bgCard: '#FFF8E6', bgIcon: '#F59E0B', title: '1 Month', subtitle: 'Internship' },
  { icon: 'IconVideo', bgCard: '#F5F0FF', bgIcon: '#A855F7', title: '6 Months', subtitle: 'Recording Access' },
  { icon: 'IconUsers', bgCard: '#EAF8F0', bgIcon: '#22C55E', title: '1 Year', subtitle: 'Community Support' },
  { icon: 'IconCertificate', bgCard: '#FFF0F5', bgIcon: '#EC4899', title: '2', subtitle: 'Certification' },
  { icon: 'IconBriefcase', bgCard: '#EBF5FF', bgIcon: '#0EA5E9', title: 'Placement Assistance', subtitle: 'Career Support' }
];

let newGrid = `<div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 w-full">\n`;

cards.forEach((c, i) => {
  newGrid += `                  {/* ${i + 1}. ${c.subtitle} */}
                  <div className="flex flex-col items-center justify-center text-center gap-3 p-4 md:p-5 rounded-[24px] bg-[${c.bgCard}] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-2xl bg-[${c.bgIcon}] text-white shadow-sm">
                      <${c.icon} size={24} stroke={1.5} />
                    </div>
                    <div className="flex flex-col items-center mt-1">
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">${c.title}</p>
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">${c.subtitle}</p>
                    </div>
                  </div>\n`;
});

newGrid += `                </div>\n              </MagicCursorContainer>`;

const textToReplace = content.substring(startIdx, gridEndIdx + endBlockStr.length);
content = content.replace(textToReplace, newGrid);

fs.writeFileSync(file, content);
console.log('Done redesigning!');
