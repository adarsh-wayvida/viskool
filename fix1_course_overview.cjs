const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const overviewGridStart = '<div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">';
const overviewIndex = content.indexOf(overviewGridStart);
if (overviewIndex !== -1) {
  const magicCursorEnd = content.indexOf('</MagicCursorContainer>', overviewIndex);
  const oldGridBlock = content.substring(overviewIndex, magicCursorEnd);
  
  const newGrid = `<div className="relative grid grid-cols-4 gap-2 sm:gap-4 lg:gap-5">
                  <div className="flex flex-col items-center justify-center text-center gap-1.5 sm:gap-3 p-2 sm:p-5 rounded-[12px] sm:rounded-[20px] bg-[#EEF6FF] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-[52px] sm:h-[52px] rounded-lg sm:rounded-2xl bg-[#1A73E8] text-white shadow-sm">
                      <IconCalendarEvent className="w-5 h-5 sm:w-[26px] sm:h-[26px]" stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-[11px] sm:text-[16px] lg:text-[18px] font-bold text-[#0F172A] leading-tight">90 Days</p>
                      <p className="text-[9px] xs:text-[10px] sm:text-[13px] lg:text-[14px] text-slate-600 mt-0.5 sm:mt-1">Duration</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center gap-1.5 sm:gap-3 p-2 sm:p-5 rounded-[12px] sm:rounded-[20px] bg-[#E6FBF7] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-[52px] sm:h-[52px] rounded-lg sm:rounded-2xl bg-[#12B8A6] text-white shadow-sm">
                      <IconDeviceDesktop className="w-5 h-5 sm:w-[26px] sm:h-[26px]" stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-[11px] sm:text-[16px] lg:text-[18px] font-bold text-[#0F172A] leading-tight">Live Online</p>
                      <p className="text-[9px] xs:text-[10px] sm:text-[13px] lg:text-[14px] text-slate-600 mt-0.5 sm:mt-1">Learning Mode</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center gap-1.5 sm:gap-3 p-2 sm:p-5 rounded-[12px] sm:rounded-[20px] bg-[#FEF2F2] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-[52px] sm:h-[52px] rounded-lg sm:rounded-2xl bg-[#F25C54] text-white shadow-sm">
                      <IconClock className="w-5 h-5 sm:w-[26px] sm:h-[26px]" stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-[11px] sm:text-[16px] lg:text-[18px] font-bold text-[#0F172A] leading-tight">90 Hours</p>
                      <p className="text-[9px] xs:text-[10px] sm:text-[13px] lg:text-[14px] text-slate-600 mt-0.5 sm:mt-1">Live Training</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center gap-1.5 sm:gap-3 p-2 sm:p-5 rounded-[12px] sm:rounded-[20px] bg-[#FFF8E6] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-[52px] sm:h-[52px] rounded-lg sm:rounded-2xl bg-[#F59E0B] text-white shadow-sm">
                      <IconSchool className="w-5 h-5 sm:w-[26px] sm:h-[26px]" stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-[11px] sm:text-[16px] lg:text-[18px] font-bold text-[#0F172A] leading-tight">1 Month</p>
                      <p className="text-[9px] xs:text-[10px] sm:text-[13px] lg:text-[14px] text-slate-600 mt-0.5 sm:mt-1">Internship</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center gap-1.5 sm:gap-3 p-2 sm:p-5 rounded-[12px] sm:rounded-[20px] bg-[#F5F0FF] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-[52px] sm:h-[52px] rounded-lg sm:rounded-2xl bg-[#A855F7] text-white shadow-sm">
                      <IconVideo className="w-5 h-5 sm:w-[26px] sm:h-[26px]" stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-[11px] sm:text-[16px] lg:text-[18px] font-bold text-[#0F172A] leading-tight">6 Months</p>
                      <p className="text-[9px] xs:text-[10px] sm:text-[13px] lg:text-[14px] text-slate-600 mt-0.5 sm:mt-1">Recording</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center gap-1.5 sm:gap-3 p-2 sm:p-5 rounded-[12px] sm:rounded-[20px] bg-[#EAF8F0] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-[52px] sm:h-[52px] rounded-lg sm:rounded-2xl bg-[#22C55E] text-white shadow-sm">
                      <IconUsers className="w-5 h-5 sm:w-[26px] sm:h-[26px]" stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-[11px] sm:text-[16px] lg:text-[18px] font-bold text-[#0F172A] leading-tight">1 Year</p>
                      <p className="text-[9px] xs:text-[10px] sm:text-[13px] lg:text-[14px] text-slate-600 mt-0.5 sm:mt-1">Community</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center gap-1.5 sm:gap-3 p-2 sm:p-5 rounded-[12px] sm:rounded-[20px] bg-[#FFF0F5] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-[52px] sm:h-[52px] rounded-lg sm:rounded-2xl bg-[#EC4899] text-white shadow-sm">
                      <IconCertificate className="w-5 h-5 sm:w-[26px] sm:h-[26px]" stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-[11px] sm:text-[16px] lg:text-[18px] font-bold text-[#0F172A] leading-tight">2</p>
                      <p className="text-[9px] xs:text-[10px] sm:text-[13px] lg:text-[14px] text-slate-600 mt-0.5 sm:mt-1">Certification</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center gap-1.5 sm:gap-3 p-2 sm:p-5 rounded-[12px] sm:rounded-[20px] bg-[#EBF5FF] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-[52px] sm:h-[52px] rounded-lg sm:rounded-2xl bg-[#3B82F6] text-white shadow-sm">
                      <IconBriefcase className="w-5 h-5 sm:w-[26px] sm:h-[26px]" stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[10px] xs:text-[11px] sm:text-[16px] lg:text-[18px] font-bold text-[#0F172A] leading-tight">Placement</p>
                      <p className="text-[9px] xs:text-[10px] sm:text-[13px] lg:text-[14px] text-slate-600 mt-0.5 sm:mt-1">Career Support</p>
                    </div>
                  </div>
                </div>\n              `;
  
  content = content.replace(oldGridBlock, newGrid);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed Course Overview!');
}
