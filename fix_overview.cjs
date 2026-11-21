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
// Find the closing div of the grid. 
// We know it's followed by `</div>` then `</div>` then `</MagicCursorContainer>`
const containerEndIdx = content.indexOf(endTag, startIdx);
// Let's go backwards to find the exact grid div close
let gridEndIdx = content.lastIndexOf('</div>', content.lastIndexOf('</div>', containerEndIdx - 1) - 1);

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

let newGrid = `<div className="relative grid grid-cols-4 gap-2 md:gap-4 lg:gap-5 w-full">\n`;

cards.forEach((c, i) => {
  newGrid += `                  {/* ${i + 1}. ${c.subtitle} */}
                  <div className="flex flex-col items-center justify-center text-center gap-2 p-2 rounded-[20px] bg-[${c.bgCard}] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm md:flex-row md:items-start md:text-left md:p-4 md:text-base">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[${c.bgIcon}] text-white shadow-sm">
                      <${c.icon} size={20} stroke={1.5} />
                    </div>
                    <div className="mt-1 text-center md:mt-0 md:text-left">
                      <p className="text-[10px] leading-tight font-bold text-[#0F172A] md:text-[14px]">${c.title}</p>
                      <p className="text-[8px] text-slate-600 mt-0.5 md:text-[12px]">${c.subtitle}</p>
                    </div>
                  </div>\n`;
});

newGrid += `                </div>\n              `;

// Also wait, I need to make sure I don't delete too many closing tags.
// The structure is:
// <MagicCursorContainer>
//   <div decorations />...
//   <div title />
//   <div grid>...</div>
// </MagicCursorContainer>

// Let's replace precisely.
const textToReplace = content.substring(startIdx, gridEndIdx + 6);
content = content.replace(textToReplace, newGrid + '</div>'); // actually newGrid already has `</div>\n              `

fs.writeFileSync(file, content);
console.log('Done!');
