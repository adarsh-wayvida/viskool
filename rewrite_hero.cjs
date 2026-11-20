const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
const content = fs.readFileSync(file, 'utf8');

const startIndex = content.indexOf('<section className="relative w-full bg-[#FBFCFF] font-sans');
if (startIndex === -1) {
  console.log('Could not find start of hero section');
  process.exit(1);
}

const endIndex = content.indexOf('</section>', startIndex);
if (endIndex === -1) {
  console.log('Could not find end of hero section');
  process.exit(1);
}

const beforeHero = content.substring(0, startIndex);
const afterHero = content.substring(endIndex + '</section>'.length);

const newHero = `<section className="relative w-full bg-[#FBFCFF] font-sans pt-[100px] pb-[40px] lg:pt-[120px] lg:pb-[60px] overflow-hidden" id="hero">
        <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">
          
          {/* Left Column */}
          <div className="flex flex-col items-start w-full lg:w-1/2">
            
            {/* Back to courses */}
            <a
              href="/#courses"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#616161] transition-colors hover:text-[#841531] mb-6"
            >
              <IconArrowLeft className="h-4 w-4" stroke={2} aria-hidden="true" />
              Back to courses
            </a>

            {/* Badges */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FFF9E5] border border-[#FFE8A1] rounded-full">
                <IconCrown size={14} className="text-[#D97706]" stroke={2.5} />
                <span className="text-[#B45309] text-[12px] font-semibold">Premium</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#ECFDF5] border border-[#A7F3D0] rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                <span className="text-[#047857] text-[12px] font-semibold">Live</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-[#1A1A1A] font-bold text-[30px] leading-[37.5px] tracking-[-0.8px] mb-6">
              Master AI-Integrated Digital Marketing in 90 Days & Launch Your Dream Career!
            </h1>

            {/* Pricing */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#841531] font-bold text-[30px] leading-[30px]">&#8377;15,000</span>
              <span className="text-[#616161] font-medium text-[20px] line-through decoration-1">&#8377;20,000</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mb-8">
              <button
                type="button"
                onClick={() =>
                  openContact("Enroll Now", {
                    source: "AI Integrated Digital Marketing Course",
                  })
                }
                className="px-8 py-3.5 bg-[#841531] text-white font-semibold text-[16px] leading-[24px] rounded-full transition-transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                Enroll Now
              </button>
              <button
                type="button"
                className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                aria-label="Share"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>

            {/* Ratings & Students */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-[#1A1A1A] font-semibold text-[14px]">4.7</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="14" height="14" viewBox="0 0 20 20" fill="#FBBF24">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#616161] text-[14px] leading-[20px] ml-1">(1 rating)</span>
              </div>
              <div className="flex items-center gap-2 text-[#616161] text-[14px] leading-[20px]">
                <IconUsers size={18} stroke={1.5} />
                <span>2+ Students</span>
              </div>
            </div>

          </div>

          {/* Right Column: Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[580px] aspect-[16/9] bg-[#F3F4F6] rounded-2xl flex items-center justify-center border-2 border-dashed border-[#D1D5DB]">
              <span className="text-[#9CA3AF] font-medium text-lg">Image Placeholder</span>
            </div>
          </div>

        </div>
      </section>`;

fs.writeFileSync(file, beforeHero + newHero + afterHero, 'utf8');
console.log('Hero section completely rewritten!');
