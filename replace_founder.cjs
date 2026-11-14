const fs = require('fs');
let c = fs.readFileSync('src/components/AboutFounderPage.jsx', 'utf8');

const target = `      <section className="relative w-full bg-[#F4F8FB] px-4 py-12 font-sans sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              WATCH & LEARN
            </p>
            <h2 className="mb-4 text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px]">
              Trending Videos by <span className="text-[#0D9488]">Founder</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base font-medium text-[#102A43]/80 sm:text-lg">
              Real talks, real moments, straight from our Founder.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer border border-gray-100">
                <div className="absolute inset-0 bg-gray-100/50"></div>
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors group-hover:bg-black/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
                    <svg className="ml-1 h-5 w-5 text-[#8B1538] sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>`;

const replacement = `      <section className="bg-[#FCF8F9] px-4 py-10 font-sans sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="mb-8 sm:mb-10 text-left">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
                WATCH & LEARN
              </p>
              <h2 className="mb-4 text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px]">
                Trending Videos by <span className="text-[#8B1538]">Founder</span>
              </h2>
              <p className="max-w-2xl text-base font-medium text-[#102A43]/80 sm:text-lg">
                Real talks, real moments, straight from our Founder.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer border border-gray-100">
                  <div className="absolute inset-0 bg-gray-100/50"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors group-hover:bg-black/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
                      <svg className="ml-1 h-5 w-5 text-[#8B1538] sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>`;

if(c.includes(target)) {
  c = c.replace(target, replacement);
  fs.writeFileSync('src/components/AboutFounderPage.jsx', c);
  console.log('Replaced successfully.');
} else {
  console.log('Target not found.');
}
