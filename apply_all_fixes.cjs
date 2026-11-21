const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Hero Mobile Order
const oldHero = `<div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">`;
const newHero = `<div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10 relative">`;
if(content.includes(oldHero)) content = content.replace(oldHero, newHero);

// 2. Course Overview Cards (4-cols mobile and desktop, 8 cards)
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
                </div>\n              ';
  
  content = content.replace(oldGridBlock, newGrid);
}

// 3. Learning Goals (Our 6 Learning Goals) gap + 2-col mobile layout
const oldLearnGrid = `<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">`;
const newLearnGrid = `<div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">`;
content = content.replace(oldLearnGrid, newLearnGrid);

// Update Card Header height
const oldHeader = `className={\`relative flex h-20 md:h-32 shrink-0 items-center justify-center \${goal.headerClass}\`}`;
const newHeader = `className={\`relative flex h-16 sm:h-20 md:h-24 shrink-0 items-center justify-center \${goal.headerClass}\`}`;
content = content.replace(oldHeader, newHeader);

// Update Icon size
const oldIcon = `className={\`relative z-10 h-10 w-10 md:h-16 md:w-16 \${goal.iconClass}\`}`;
const newIcon = `className={\`relative z-10 h-8 w-8 sm:h-10 sm:w-10 md:h-16 md:w-16 \${goal.iconClass}\`}`;
content = content.replace(oldIcon, newIcon);

// Update Text Container Padding + remove gap between title and desc
const oldTextContainer = `<div className="flex flex-col justify-start px-4 md:px-5 pb-5 md:pb-7 pt-4 md:pt-6 text-center sm:px-6 gap-1 md:gap-2">
                      <h3 className="text-base md:text-lg font-bold leading-snug text-[#102A43] sm:text-xl">
                        {goal.title}
                      </h3>
                      <div className="mx-auto my-1 md:my-2 h-px w-full bg-[#102A43]/12" />
                      <p className="text-sm md:text-[15px] font-normal leading-6 md:leading-7 text-[#102A43] sm:text-base mt-1 md:mt-2">
                        {goal.text}
                      </p>
                    </div>`;
const newTextContainer = `<div className="flex flex-col justify-start px-2 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-2 sm:pt-3 md:pt-4 text-center relative z-10">
                      <h3 className="text-[13px] sm:text-base md:text-lg font-bold leading-snug text-[#102A43] mb-1 md:mb-2">
                        {goal.title}
                      </h3>
                      <p className="text-[11px] sm:text-sm md:text-[15px] font-normal leading-[1.4] sm:leading-6 md:leading-7 text-[#102A43]">
                        {goal.text}
                      </p>
                    </div>`;
// we need regex to catch the map return body.
const mapRegex = /<div className="flex flex-col justify-start px-4 md:px-5 pb-5 md:pb-7 pt-4 md:pt-6 text-center sm:px-6 gap-1 md:gap-2">[\s\S]*?<\/div>/g;
content = content.replace(mapRegex, newTextContainer);

// 4. 10 Skill Areas (convert table to cards)
const skillsStart = content.indexOf('10 Skill Areas That Turn');
if (skillsStart !== -1) {
  const tableBlockStart = content.indexOf('<div className="mt-7 w-full overflow-x-auto rounded-2xl border border-[#8B1538]/15">', skillsStart);
  if(tableBlockStart !== -1) {
    const tableBlockEnd = content.indexOf('</table>\n            </div>', tableBlockStart) + '</table>\n            </div>'.length;
    const toReplace = content.substring(tableBlockStart, tableBlockEnd);

    const SKILLS = [
      { title: 'Planning', text: 'How to build a digital marketing strategy: set goals, identify your audience, fix a budget, and choose the right channels.' },
      { title: 'SEO', text: 'Search Engine Optimization from scratch: keyword research, on-page SEO, off-page SEO, technical SEO, local SEO for shops and clinics, content structuring, and link building.' },
      { title: 'Paid Ads', text: 'Meta Ads, search ads, and display advertising; how PPC and other paid advertising work; media buying basics; and an overview of performance marketing.' },
      { title: 'Social Media', text: 'Social media management, organic growth tactics, engagement strategies, building a community, and maintaining brand identity on platforms like Facebook and Instagram.' },
      { title: 'Content', text: 'Content marketing, content planning, and copywriting: creating content that attracts, informs, and converts your target audience.' },
      { title: 'Websites', text: 'CMS basics, WordPress fundamentals, creating landing pages with Elementor, optimizing UX/UI, basic web architecture, and CRO (Conversion Rate Optimization).' },
      { title: 'E-commerce', text: 'Setting up e-commerce infrastructure (WooCommerce/Shopify), e-commerce SEO, product page optimization, cart abandonment funnels, and working with Amazon Seller Central.' },
      { title: 'Analytics', text: 'Google Analytics 4 (GA4), tracking metrics (KPIs, ROI, ROAS, CPA, CTR, CPC), using Google Tag Manager (GTM), and data visualization with Looker Studio.' },
      { title: 'Email & CRM', text: 'Email marketing, marketing automation, lead nurturing, mapping the customer journey, and using a CRM.' },
      { title: 'AI', text: 'AI in digital marketing: AI marketing tools, generative AI, AI content creation, AI-powered marketing workflows, and prompt engineering for marketing.' }
    ];

    let cardsJSX = `<div className="mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">\n`;
    SKILLS.forEach(skill => {
      cardsJSX += `              <div className="flex flex-col bg-white border border-[#8B1538]/10 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h5 className="text-[14px] sm:text-[16px] font-bold text-[#8B1538] mb-2">${skill.title}</h5>
                  <p className="text-[11px] sm:text-[13px] text-gray-700 leading-relaxed">${skill.text}</p>
                </div>\n`;
    });
    cardsJSX += `            </div>`;

    content = content.replace(toReplace, cardsJSX);
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log('Applied all correct fixes directly to fresh page.jsx!');

