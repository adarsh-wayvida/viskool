// ProcessSteps Component - Value Proposition & 3 Steps
import React from 'react';

const MEDIA_LOGOS = [
  { id: 2, src: '/logos/benchmark.webp', alt: 'Benchmark' },
  { id: 3, src: '/logos/big-news-network.webp', alt: 'Big News Network' },
  { id: 4, src: '/logos/edex-digital-logo.webp', alt: 'Edex Digital' },
  { id: 5, src: '/logos/ET.webp', alt: 'Economic Times' },
  { id: 6, src: '/logos/Tribune.webp', alt: 'The Tribune' },
  { id: 7, src: '/logos/zeebiz_logo_new.webp', alt: 'Zee Business' },
];

export const ProcessSteps = ({ steps, onActionClick }) => {
  return (
    <section className="pt-6 lg:pt-8 bg-white relative overflow-hidden">
      
      {/* Decorative Sparkles Top Right */}
      <div className="absolute top-8 right-12 text-[#8B1538]/30 text-3xl pointer-events-none select-none">
        ✦ ✧
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Section Headline - Exact 2-Line Structure */}
        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight max-w-6xl mx-auto mb-6">
          <span className="block lg:whitespace-nowrap">
            India’s Online Learning & Education Platform for
          </span>
          <span className="text-[#8B1538] block mt-1 sm:mt-2 lg:whitespace-nowrap leading-[1.2]">
            School Tuition, NEET, JEE, KEAM, PSC &amp; Career Upskilling
          </span>
        </h2>

        {/* Informative Subtext matching screenshot */}
        <p className="text-[#555555] text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-3xl mx-auto font-normal">
          Master your goals with live and recorded classes taught by expert educators. Whether you are aiming for top marks in school, clearing competitive exams like NEET, JEE, KEAM and PSC, or advancing your career, Viskool delivers structured learning and personal guidance to ensure your success.
        </p>


        <div className="mt-8 lg:mt-10 mb-8 lg:mb-10">
          <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest mb-6">
            Featured in Leading Media Platforms
          </h3>
          <div className="relative overflow-hidden group w-screen left-1/2 -translate-x-1/2 py-4">
            {/* The scrolling container with smooth animation. 
                Pauses on hover. Uses motion-reduce for accessibility. */}
            <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full">
              {[...Array(4)].map((_, groupIdx) => (
                <div 
                  key={groupIdx} 
                  className="flex items-center gap-8 sm:gap-12 md:gap-16 pr-8 sm:pr-12 md:pr-16"
                >
                  {MEDIA_LOGOS.map((logo) => (
                    <div 
                      key={logo.id} 
                      className="w-[140px] h-[40px] sm:w-[160px] sm:h-[48px] lg:w-[180px] lg:h-[56px] flex items-center justify-center shrink-0"
                    >
                      <img src={logo.src} alt={logo.alt} className="max-w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

