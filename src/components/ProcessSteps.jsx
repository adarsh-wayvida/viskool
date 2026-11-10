// ProcessSteps Component - Value Proposition & 3 Steps
import React from 'react';
import StudentSuccessSlider from './StudentSuccessSlider.jsx';

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
    <section className="pt-12 lg:pt-14 bg-white relative overflow-hidden">
      
      {/* Decorative Sparkles Top Right */}
      <div className="absolute top-8 right-12 text-[#8B1538]/30 text-3xl pointer-events-none select-none">
        ✦ ✧
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Section Headline - 2-Line Structure */}
        <h3 className="text-2xl md:text-4xl font-bold text-center leading-tight">
            <span className="block">India’s Online Learning &</span>
            <span className="block">Education Platform for</span>
            <span className="block text-[#800020] mt-1">School Tuition, NEET, JEE,</span>
            <span className="block text-[#800020]">KEAM, PSC & Career Upskilling</span>
          </h3>

        {/* Informative Subtext matching screenshot */}
        <p className="text-[#555555] text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-6xl mx-auto font-normal">
          Master your goals with live and recorded classes taught by expert educators. Whether you are aiming for top marks in school, clearing competitive exams like NEET, JEE, KEAM and PSC, or advancing your career, Viskool delivers structured learning and personal guidance to ensure your success.
        </p>

        <div className="my-10">
          <StudentSuccessSlider />
        </div>


        <div className="mt-16 lg:mt-20">
          <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest mb-4">
            Featured in Leading Media Platforms
          </h3>
          <div className="relative overflow-hidden group w-screen left-1/2 -translate-x-1/2 pt-0 pb-0">
            {/* The scrolling container with smooth animation. 
                Pauses on hover. Uses motion-reduce for accessibility. */}
            <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full">
              {[...Array(4)].map((_, groupIdx) => (
                <div 
                  key={groupIdx} 
                  className="flex items-center gap-8 sm:gap-10 md:gap-14 pr-8 sm:pr-10 md:pr-14"
                >
                  {MEDIA_LOGOS.map((logo) => (
                    <div 
                      key={logo.id} 
                      className="w-[100px] h-[28px] sm:w-[120px] sm:h-[32px] lg:w-[140px] lg:h-[40px] flex items-center justify-center shrink-0"
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

