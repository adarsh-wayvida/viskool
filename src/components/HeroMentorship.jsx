import React from 'react';

export const HeroMentorship = ({ onActionClick }) => {
  return (
    <section className="py-8 lg:py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left order-1">
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-[#102A43] leading-[1.2] tracking-tight mb-5">
              <span className="text-[#8B1538]">VISKOOL:</span> Where Personal Mentorship Meets Proven Success
            </h2>
            
            <p className="text-[#555555] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0 font-normal">
              Experience smart, personalized, and results-driven education at Viskool, the best online learning platform.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 list-none p-0 m-0 mb-8 mx-auto lg:mx-0 text-left">
              {[
                "100% Personalized Attention",
                "Real-Time Progress Tracking",
                "Regular Evaluation and Tracking",
                "Academic-Aligned Curriculum",
                "Expert Faculty Guidance",
                "Live and Recorded Classes"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B1538] shrink-0"></span>
                  <span className="text-[#102A43] font-medium text-sm sm:text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex justify-center lg:justify-start">
              <button 
                type="button"
                onClick={() => onActionClick && onActionClick('Book a Free Demo Class')}
                className="inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 py-3.5 rounded-lg shadow-sm transition-transform duration-200 active:scale-95 bg-[#8B1538] hover:bg-[#73152C] text-white"
              >
                Book a Free Demo Class
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 order-2">
            <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[16/10] bg-[#ECEDEF] rounded-3xl overflow-hidden shadow-sm relative">
              <img 
                src="/viskool-personal-mentorship-student-new.webp" 
                alt="Student receiving personal mentorship online" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
