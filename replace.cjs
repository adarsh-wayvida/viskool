const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `      <section className="relative w-full bg-[#FBFCFF] font-sans overflow-hidden min-h-[760px] flex flex-col items-center pt-[40px] md:pt-[56px] lg:pt-[64px] pb-[40px] md:pb-[42px] lg:pb-[52px] px-[20px] md:px-[48px] lg:px-[64px]" id="hero">
        {/* Radial Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#93C5FD] rounded-full blur-[140px] opacity-[0.15] pointer-events-none"></div>
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[#67E8F9] rounded-full blur-[120px] opacity-[0.15] pointer-events-none"></div>
        <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-[#E9D5FF] rounded-full blur-[130px] opacity-[0.14] pointer-events-none"></div>

        <div className="w-full max-w-[1520px] mx-auto z-20 flex justify-start mb-4 md:mb-8">
          <a
            href="/#courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#3F4D5A] transition-colors hover:text-[#9B0F38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B0F38] focus-visible:ring-offset-2 sm:text-base"
          >
            <IconArrowLeft className="h-5 w-5" stroke={1.8} aria-hidden="true" />
            Back to courses
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] flex flex-col items-center z-10 flex-1 justify-center">
          {/* Eyebrow */}
          <h2 className="text-[#071534] font-bold text-[14px] md:text-[24px] lg:text-[28px] tracking-[0.02em] text-center mb-[20px] md:mb-[28px]">
            AI-INTEGRATED DIGITAL MARKETING
          </h2>

          {/* Main Heading */}
          <h1 className="text-[#061330] font-[800] text-[36px] md:text-[54px] lg:text-[clamp(54px,5vw,78px)] leading-[1.12] tracking-[-0.035em] text-center max-w-[1100px] mx-auto">
            Master Digital Marketing.<br className="hidden lg:block" /> Build Your Career.
          </h1>

          {/* Description */}
          <p className="text-[#10213E] font-medium text-[17px] md:text-[23px] lg:text-[27px] leading-[1.42] text-center max-w-[900px] mx-auto mt-[24px] md:mt-[28px]">
            Learn SEO, social media, Google Ads, analytics and AI through expert-led live training and practical campaign projects.
          </p>

          {/* Feature Area */}
          <div className="relative w-full mt-[40px] md:mt-[56px] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            
            {/* Connector Lines (Decorative) */}
            <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
              <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px]" viewBox="0 0 900 400" fill="none">
                <path d="M100 200 Q 300 50, 450 200 T 800 200" stroke="#BFDBFE" strokeWidth="1.5" opacity="0.6" fill="none" />
                <path d="M150 250 Q 350 350, 450 200 T 750 150" stroke="#E9D5FF" strokeWidth="1.5" opacity="0.5" fill="none" />
              </svg>
            </div>

            {/* Left Benefit */}
            <div className="relative z-10 flex items-center gap-[16px] lg:absolute lg:left-[5%] xl:left-[12%] lg:top-[15%]">
              <span className="text-[#0868E8] font-bold text-[21px] lg:text-[24px] whitespace-nowrap">90-Day Live Training</span>
              <div className="flex items-center justify-center w-[52px] h-[52px] lg:w-[56px] lg:h-[56px] bg-[#0868E8] rounded-full shadow-lg shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Central Illustration */}
            <div className="relative z-10 w-[280px] md:w-[360px] lg:w-[420px] flex justify-center order-first lg:order-none mb-4 lg:mb-0">
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-[#05DDE1] blur-[70px] opacity-[0.2] rounded-full pointer-events-none"></div>
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="growthGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#123DEB" />
                      <stop offset="100%" stopColor="#05DDE1" />
                    </linearGradient>
                  </defs>
                  {/* Infinity Loop */}
                  <path d="M 120 200 C 60 140, 60 260, 120 200 C 180 140, 220 260, 280 200 C 340 140, 340 260, 280 200 C 220 140, 180 260, 120 200" stroke="url(#growthGrad)" strokeWidth="28" fill="none" strokeLinecap="round" />
                  {/* Upward Arrow */}
                  <path d="M 200 240 L 200 110 M 150 160 L 200 110 L 250 160" stroke="url(#growthGrad)" strokeWidth="24" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Ascending Bars */}
                  <rect x="270" y="220" width="18" height="40" rx="9" fill="url(#growthGrad)" />
                  <rect x="300" y="180" width="18" height="80" rx="9" fill="url(#growthGrad)" />
                  <rect x="330" y="130" width="18" height="130" rx="9" fill="url(#growthGrad)" />
                </svg>
              </div>
            </div>

            {/* Right Benefit */}
            <div className="relative z-10 flex flex-row items-center lg:absolute lg:right-[5%] xl:right-[12%] lg:top-[15%]">
              <div className="flex items-center justify-center w-[62px] h-[62px] lg:w-[66px] lg:h-[66px] rounded-[16px] bg-gradient-to-br from-[#0868E8] to-[#05DDE1] shadow-lg shrink-0">
                <IconBriefcase size={32} stroke={1.8} color="white" />
              </div>
              <div className="ml-4 flex flex-col justify-center text-left">
                <span className="text-[#071534] font-bold text-[23px] lg:text-[26px] leading-tight whitespace-nowrap">Placement Assistance</span>
                <span className="text-[#5F6F8C] font-medium text-[17px] lg:text-[19px] mt-[2px] leading-tight">Career Support</span>
              </div>
            </div>

            {/* Channel Icons (Absolute decorative) */}
            <div className="absolute hidden lg:flex items-center justify-center w-[54px] h-[54px] rounded-[14px] bg-white shadow-md left-[15%] top-[65%] rotate-[-6deg]">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            <div className="absolute hidden lg:flex items-center justify-center w-[60px] h-[60px] rounded-[14px] bg-white shadow-md left-[28%] bottom-[10%] rotate-[8deg]">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </div>
            <div className="absolute hidden lg:flex items-center justify-center w-[54px] h-[54px] rounded-[14px] bg-white shadow-md right-[15%] top-[60%] rotate-[5deg]">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </div>
            <div className="absolute hidden lg:flex items-center justify-center w-[60px] h-[60px] rounded-[14px] bg-white shadow-md right-[28%] bottom-[15%] rotate-[-8deg]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#F9AB00"><path d="M21 12.001c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9zm-13.5-3h9v6h-9v-6z" fill="#E37400"/></svg>
            </div>

          </div>

          {/* Pricing and Actions */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[18px] lg:gap-[24px] mt-[40px] md:mt-[48px] lg:mt-[34px] w-full z-10">
            <div className="flex items-center gap-[16px] lg:gap-[12px]">
              <span className="text-[#071534] font-[800] text-[38px] md:text-[42px] leading-none">?15,000</span>
              <span className="text-[#8190AA] font-semibold text-[22px] md:text-[24px] line-through leading-none">?20,000</span>
            </div>
            
            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-[16px] items-center lg:ml-[8px]">
              <button
                type="button"
                onClick={() =>
                  openContact("Enroll Now", {
                    source: "AI Integrated Digital Marketing Course",
                  })
                }
                className="h-[50px] md:h-[56px] min-w-full sm:min-w-[165px] px-[30px] md:px-[38px] bg-[#9B0F38] text-white font-bold text-[17px] md:text-[19px] rounded-full transition-transform hover:-translate-y-1 hover:bg-[#8B0D32] flex items-center justify-center shadow-sm"
              >
                Enroll Now
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("curriculum");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="h-[50px] md:h-[56px] min-w-full sm:min-w-[165px] px-[30px] md:px-[38px] bg-transparent border-[2px] border-[#9B0F38] text-[#9B0F38] font-bold text-[17px] md:text-[19px] rounded-full transition-colors hover:bg-[#9B0F38]/5 flex items-center justify-center"
              >
                View Syllabus
              </button>
            </div>
          </div>

        </div>
      </section>`;

const startIdx = content.indexOf('<section className="bg-[#FCFAFA] px-4 pb-7 pt-3 font-sans sm:px-6 sm:pb-10 sm:pt-5 lg:px-8 lg:pb-12 lg:pt-6">');
const endMarker = '      </section>';
const endIdx = content.indexOf(endMarker, startIdx) + endMarker.length;

if (startIdx !== -1 && endIdx > startIdx) {
  content = content.substring(0, startIdx) + replacement + content.substring(endIdx);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully replaced');
} else {
  console.log('Could not find start or end index', startIdx, endIdx);
}
