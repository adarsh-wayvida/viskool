const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// The grid container starts with: <div className="relative grid grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-5">
// We want to replace the whole grid with a 4-card 2x2 grid.

const newGrid = `<div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
                  {/* 1. Duration */}
                  <div className="flex flex-col items-center justify-center text-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-[20px] bg-[#EEF6FF] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-xl sm:rounded-2xl bg-[#1A73E8] text-white shadow-sm">
                      <IconCalendarEvent size={26} stroke={1.5} className="scale-90 sm:scale-100" />
                    </div>
                    <div>
                      <p className="text-[14px] sm:text-[18px] font-bold text-[#0F172A] leading-tight">90 Days</p>
                      <p className="text-[12px] sm:text-[14px] text-slate-600 mt-0.5">Duration</p>
                    </div>
                  </div>

                  {/* 2. Learning Mode */}
                  <div className="flex flex-col items-center justify-center text-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-[20px] bg-[#E6FBF7] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-xl sm:rounded-2xl bg-[#12B8A6] text-white shadow-sm">
                      <IconDeviceDesktop size={26} stroke={1.5} className="scale-90 sm:scale-100" />
                    </div>
                    <div>
                      <p className="text-[14px] sm:text-[18px] font-bold text-[#0F172A] leading-tight">Live Online</p>
                      <p className="text-[12px] sm:text-[14px] text-slate-600 mt-0.5">Learning Mode</p>
                    </div>
                  </div>

                  {/* 3. Live Training */}
                  <div className="flex flex-col items-center justify-center text-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-[20px] bg-[#FEF2F2] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-xl sm:rounded-2xl bg-[#F25C54] text-white shadow-sm">
                      <IconClock size={26} stroke={1.5} className="scale-90 sm:scale-100" />
                    </div>
                    <div>
                      <p className="text-[14px] sm:text-[18px] font-bold text-[#0F172A] leading-tight">90 Hours</p>
                      <p className="text-[12px] sm:text-[14px] text-slate-600 mt-0.5">Live Training</p>
                    </div>
                  </div>

                  {/* 4. Certification */}
                  <div className="flex flex-col items-center justify-center text-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-[20px] bg-[#FFF0F5] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-xl sm:rounded-2xl bg-[#EC4899] text-white shadow-sm">
                      <IconCertificate size={26} stroke={1.5} className="scale-90 sm:scale-100" />
                    </div>
                    <div>
                      <p className="text-[14px] sm:text-[18px] font-bold text-[#0F172A] leading-tight">Dual Certificates</p>
                      <p className="text-[12px] sm:text-[14px] text-slate-600 mt-0.5">Certification</p>
                    </div>
                  </div>
                </div>`;

const regex = /<div className="relative grid grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-5">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/MagicCursorContainer>/;

// The regex needs to capture exactly the grid div. 
// A safer way is to find the start of the grid, and since there are 9 cards, it's a bit long. Let's just use string splitting or a precise regex.

const startMarker = '<div className="relative grid grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-5">';
const endMarker = '              </MagicCursorContainer>'; // End of MagicCursorContainer wrapper is shortly after the grid

const startIndex = content.indexOf(startMarker);
if (startIndex !== -1) {
  // Let's find where the grid ends. It ends before </MagicCursorContainer>
  // Wait, let's just find the next </MagicCursorContainer> and replace up to it.
  const afterGridStart = content.substring(startIndex);
  const magicCursorIndex = afterGridStart.indexOf('</MagicCursorContainer>');
  
  if (magicCursorIndex !== -1) {
    const oldGridBlock = afterGridStart.substring(0, magicCursorIndex);
    
    // We just replace oldGridBlock with newGrid + some spacing
    const toReplace = content.substring(startIndex, startIndex + magicCursorIndex);
    content = content.replace(toReplace, newGrid + '\n              ');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Replaced the 3x3 grid with the new 2x2 grid!');
  } else {
    console.log('Could not find </MagicCursorContainer>');
  }
} else {
  console.log('Could not find start marker.');
}

