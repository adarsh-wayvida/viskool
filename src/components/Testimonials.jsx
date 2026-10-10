// Testimonials Component - Scaled to Exact Proportion from Reference Screenshot
import React, { useState } from 'react';

export const Testimonials = ({ testimonials, onActionClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const item = testimonials[currentIndex] || testimonials[0];

  return (
    <section className="py-12 sm:py-16 bg-[#FAF5F6] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            What Our{' '}
            <span className="italic text-[#8B1538] font-extrabold">
              Students
            </span>{' '}
            Say
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Hear from our learners about their transformative experiences with Viskool.
          </p>
        </div>

        {/* 2-Column Responsive Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center max-w-3xl mx-auto">
          
          {/* Left Column: Student Compact Image */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-48 sm:w-56 rounded-[22px] overflow-hidden bg-white shadow-sm border border-gray-100 p-1">
              <img
                src={item.image || 'public/testimonial-aarav.png'}
                alt={item.name}
                className="w-full h-auto object-cover rounded-[18px]"
              />
            </div>
          </div>

          {/* Right Column: Compact Details */}
          <div className="md:col-span-7 flex flex-col justify-center text-left">
            
            {/* Student Name */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mb-0.5">
              {item.name}
            </h3>

            {/* Role / Grade Subtitle */}
            <p className="text-xs sm:text-sm text-gray-500 font-normal mb-4 sm:mb-5">
              {item.role}
            </p>

            {/* Testimonial Quote Text */}
            <p className="text-xs sm:text-sm md:text-base text-[#555555] leading-relaxed mb-6 font-normal max-w-md">
              {item.quote}
            </p>

            {/* Bottom Left Navigation Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={prevReview}
                aria-label="Previous testimonial"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#8B1538] hover:bg-[#73152C] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextReview}
                aria-label="Next testimonial"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#8B1538] hover:bg-[#73152C] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
