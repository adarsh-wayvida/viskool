const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newLayout = `<div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
              {/* Card 1: Ammu */}
              <div className="group flex h-fit flex-col sm:flex-row items-center sm:items-start rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md gap-4 sm:gap-6">
                <div className="relative shrink-0 h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-[3px] border-[#F8CDD2]/50 p-1">
                  <div className="h-full w-full rounded-full bg-[#FCF8F9] overflow-hidden">
                    <img src="/images/faculty/AMMU.png" alt="Ammu" className="h-full w-full object-cover object-top" />
                  </div>
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <h3 className="text-[18px] md:text-xl font-bold text-[#102A43] leading-snug">Ammu</h3>
                  <p className="text-[13px] md:text-sm font-semibold text-[#8B1538] mt-0.5 mb-2">Digital Marketing Expert</p>
                  <p className="text-[13px] md:text-[14px] leading-relaxed text-slate-600">
                    Passionate about helping students master the art of digital marketing through practical, hands-on learning.
                  </p>
                </div>
              </div>

              {/* Card 2: Haritha */}
              <div className="group flex h-fit flex-col sm:flex-row items-center sm:items-start rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md gap-4 sm:gap-6">
                <div className="relative shrink-0 h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-[3px] border-[#CDEBFA]/50 p-1">
                  <div className="h-full w-full rounded-full bg-[#EEF6FF] overflow-hidden">
                    <img src="/images/faculty/HARITHA.png" alt="Haritha" className="h-full w-full object-cover object-top" />
                  </div>
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <h3 className="text-[18px] md:text-xl font-bold text-[#102A43] leading-snug">Haritha</h3>
                  <p className="text-[13px] md:text-sm font-semibold text-[#1A73E8] mt-0.5 mb-2">Digital Marketing Expert</p>
                  <p className="text-[13px] md:text-[14px] leading-relaxed text-slate-600">
                    Bringing years of industry experience to the classroom, focusing on campaign management and analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;

if (regex.test(content)) {
    content = content.replace(regex, newLayout);
    fs.writeFileSync(file, content);
    console.log('Layout replaced successfully!');
} else {
    console.log('Regex did not match.');
}
