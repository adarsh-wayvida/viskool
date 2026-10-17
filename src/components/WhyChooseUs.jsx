// WhyChooseUs Component - Benefits Grid
import React from 'react';

export const WhyChooseUs = ({ onActionClick }) => {
  const benefitsList = [
    "100% Personalized Attention & Mentorship",
    "Real-Time Progress Tracking & Analytics",
    "Continuous Evaluation & Practice",
    "Industry & Academic-Aligned Curriculum"
  ];

  return (
    <section id="why-choose-us-placeholder" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Image Area (approx 43% on Desktop) */}
          <div className="w-full lg:w-[43%] relative mt-8 lg:mt-0 px-4 sm:px-6 lg:px-0">
            {/* Pale burgundy offset background shape */}
            <div className="absolute -left-0 sm:-left-2 -bottom-4 sm:-bottom-6 w-[80%] h-[80%] bg-[#FAF5F7] rounded-3xl z-0"></div>
            
            {/* Thin burgundy rectangular outline overlapping edges */}
            <div className="absolute -top-4 sm:-top-6 -left-0 sm:-left-2 w-[85%] h-[90%] border border-[#8B1538] rounded-tl-xl rounded-br-xl z-20 pointer-events-none"></div>

            {/* Main Image Container */}
            <div className="relative z-10 w-full aspect-[4/3] bg-[#ECEDEF] rounded-3xl shadow-sm overflow-hidden flex items-center justify-center">
              <img 
                src="/viskool-personal-mentorship-student.webp" 
                alt="Student receiving personal mentorship online" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Right Content Area (approx 57% on Desktop) */}
          <div className="w-full lg:w-[57%] flex flex-col justify-center">
            
            {/* Headline */}
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-5">
              <span className="text-[#8B1538] leading-[1.2]">Viskool</span>: Where Personal Mentorship Meets Proven Success
            </h2>

            {/* Description */}
            <p className="text-[#555555] text-sm sm:text-[15px] lg:text-base leading-relaxed mb-8 sm:mb-10 max-w-2xl">
              Experience smart, personalized, and results-driven education at Viskool, the best online learning platform.
            </p>

            {/* Benefits Grid (2x2 on desktop, single col on narrow) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 sm:gap-y-6 mb-8 sm:mb-10">
              {benefitsList.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 shrink-0 rounded-full bg-[#8B1538]/10 text-[#8B1538] flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </div>
                  <span className="text-[#242424] text-sm sm:text-[15px] font-semibold leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button 
                onClick={() => onActionClick && onActionClick('Book a Free Demo Class')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#8B1538] hover:bg-[#73152C] text-white font-bold text-sm sm:text-[15px] px-8 py-3.5 rounded-lg shadow-sm transition-colors duration-200 active:scale-95"
              >
                Book a Free Demo Class <span className="ml-2 text-lg leading-none">→</span>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

