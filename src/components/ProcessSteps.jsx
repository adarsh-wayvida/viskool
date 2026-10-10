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
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[33px] xl:text-[36px] font-bold italic tracking-tight leading-snug max-w-6xl mx-auto mb-6 text-[#1A1A1A]">
          <span className="block">
            India's Online learning platform for,{' '}
            <span className="text-[#8B1538]">
              School Tuition, NEET, JEE,
            </span>
          </span>
          <span className="text-[#8B1538] block mt-1 sm:mt-2">
            KEAM &amp; Career Upskilling
          </span>
        </h2>

        {/* Informative Subtext matching screenshot */}
        <p className="text-[#555555] text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-3xl mx-auto mb-6 font-normal">
          Learn from expert educators through live and recorded classes designed to improve marks, crack competitive exams, and build real career skills. From school tuition to NEET, JEE, KEAM, and professional upskilling, Viskool helps students and professionals achieve better results with structured learning and personal guidance.
        </p>

        {/* Sub-tagline with Burgundy Accent */}
        <p className="text-sm sm:text-base md:text-[17px] font-medium text-[#8B1538] tracking-normal mb-14 sm:mb-16">
          Explore Courses. Enroll with Confidence. Learn with Results.
        </p>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              onClick={() => onActionClick(`Step clicked: ${step.title}`)}
              className="group relative bg-[#FCF8F9] hover:bg-[#F8F0F2] border border-[#F1E0E5] rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg cursor-pointer flex flex-col items-center"
            >
              {/* Circular Icon Badge */}
              <div className="w-16 h-16 rounded-full bg-[#8B1538] text-white flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform duration-300 mb-6">
                {step.number === '1' && (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )}
                {step.number === '2' && (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
                {step.number === '3' && (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#8B1538] transition-colors">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
