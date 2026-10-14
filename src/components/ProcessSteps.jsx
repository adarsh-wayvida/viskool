// ProcessSteps Component - Value Proposition & 3 Steps
import React from 'react';

export const ProcessSteps = ({ steps, onActionClick }) => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Sparkles Top Right */}
      <div className="absolute top-8 right-12 text-[#8B1538]/30 text-3xl pointer-events-none select-none">
        ✦ ✧
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Section Headline - Exact 2-Line Structure */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-[34px] font-bold italic tracking-tight leading-snug max-w-6xl mx-auto mb-6 text-[#1A1A1A]">
          <span className="block">
            India’s Online Learning & Education Platform for{' '}
            <span className="text-[#8B1538]">
              School Tuition,
            </span>
          </span>
          <span className="text-[#8B1538] block mt-1 sm:mt-2">
            NEET, JEE, KEAM, PSC &amp; Career Upskilling
          </span>
        </h2>

        {/* Informative Subtext matching screenshot */}
        <p className="text-[#555555] text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-3xl mx-auto mb-6 font-normal">
          Master your goals with live and recorded classes taught by expert educators. Whether you are aiming for top marks in school, clearing competitive exams like NEET, JEE, KEAM and PSC, or advancing your career, Viskool delivers structured learning and personal guidance to ensure your success.
        </p>

        {/* Sub-tagline with Burgundy Accent */}
        <p className="text-sm sm:text-base md:text-[17px] font-medium text-[#8B1538] tracking-normal mb-14 sm:mb-16">
          Explore Courses. Enroll with Confidence. Learn with Results.
        </p>

        {/* Featured in Media - Placeholders */}
        <div className="mt-8 sm:mt-10 mb-2">
          <h3 className="text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#242424] leading-[1.3] tracking-normal mb-8">
            Featured in Leading Media Platforms
          </h3>
          <div className="relative overflow-hidden group">
            {/* The scrolling container with smooth animation. 
                Pauses on hover. Uses motion-reduce for accessibility. */}
            <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full">
              {/* Duplicate the array of 8 items twice to ensure a seamless infinite loop */}
              {[...Array(2)].map((_, groupIdx) => (
                <div 
                  key={groupIdx} 
                  className="flex items-center gap-4 sm:gap-5 md:gap-6 pr-4 sm:pr-5 md:pr-6"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div 
                      key={num} 
                      className="w-[140px] h-[62px] sm:w-[160px] sm:h-[71px] lg:w-[180px] lg:h-[80px] bg-[#DADCE0] border border-[#C7C9CD] rounded-lg flex items-center justify-center p-3 sm:p-4 shrink-0"
                    >
                      {/* Image placeholder ready for object-contain webp images */}
                      {/* <img src="" alt="" className="w-full h-full object-contain" /> */}
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
