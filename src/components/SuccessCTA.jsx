// SuccessCTA Component - High-Impact Call to Action Banner
import React from 'react';

export const SuccessCTA = ({ onOpenContact }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF5F6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-extrabold text-[#8B1538] tracking-tight mb-5 leading-snug">
          Ready for Academic and Career Success?
        </h2>

        <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Whether you want better academic performance, success in competitive exams, or career growth through new skills, Viskool provides the right guidance, expert support, and flexible learning experience to help you move forward with confidence.
        </p>

      </div>
    </section>
  );
};
