const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const syllabusIdx = content.indexOf('id="syllabus"');
let insertIdx = content.indexOf('</section>', syllabusIdx);
if (insertIdx !== -1) {
    insertIdx += '</section>'.length;
    
    const facultySection = `\n\n      <section className="bg-[#FCF8F9] px-4 pb-8 pt-0 font-sans sm:px-6 sm:pb-10 lg:px-8 lg:pb-12" id="faculty">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-5 shadow-sm sm:px-8 sm:py-6 lg:px-10 lg:py-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              Our Faculty
            </p>
            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Learn from <span className="text-[#8B1538]">Industry Experts</span>
            </h4>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {/* Card 1: Ammu */}
              <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_8px_24px_rgba(16,42,67,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(16,42,67,0.12)]">
                <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-[#F8CDD2]/50 p-1">
                  <div className="h-full w-full rounded-full bg-[#FCF8F9] overflow-hidden">
                    <img src="/images/faculty/AMMU.png" alt="Ammu" className="h-full w-full object-cover object-top" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#102A43] mb-1">Ammu</h3>
                <p className="text-sm font-medium text-[#8B1538] mb-3">Digital Marketing Expert</p>
                <p className="text-center text-sm leading-relaxed text-slate-600">
                  Passionate about helping students master the art of digital marketing through practical, hands-on learning.
                </p>
              </div>

              {/* Card 2: Haritha */}
              <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_8px_24px_rgba(16,42,67,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(16,42,67,0.12)]">
                <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-[#CDEBFA]/50 p-1">
                  <div className="h-full w-full rounded-full bg-[#EEF6FF] overflow-hidden">
                    <img src="/images/faculty/HARITHA.png" alt="Haritha" className="h-full w-full object-cover object-top" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#102A43] mb-1">Haritha</h3>
                <p className="text-sm font-medium text-[#1A73E8] mb-3">Digital Marketing Expert</p>
                <p className="text-center text-sm leading-relaxed text-slate-600">
                  Bringing years of industry experience to the classroom, focusing on campaign management and analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>`;

    content = content.substring(0, insertIdx) + facultySection + content.substring(insertIdx);
    fs.writeFileSync(file, content);
    console.log('Faculty section added!');
} else {
    console.log('Syllabus end not found');
}
