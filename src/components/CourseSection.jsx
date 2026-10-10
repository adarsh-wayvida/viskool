// CourseSection Component - Featured Courses Matching Design Reference
import React from 'react';

export const CourseSection = ({ courses, onSelectCourse, onEnrollCourse, onActionClick }) => {
  return (
    <section id="courses" className="py-16 lg:py-24 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-gray-900 tracking-tight mb-4 sm:whitespace-nowrap">
            Find the Right Course for Your{' '}
            <span className="italic text-[#8B1538] font-extrabold">
              Future
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Choose from a wide range of courses designed to support school learning, competitive exam success, and career growth.
          </p>
        </div>

        {/* "View all courses" Button - Below Heading, Aligned to the Right */}
        <div className="flex justify-end max-w-6xl mx-auto mb-5">
          <button
            onClick={() => onActionClick('View all courses')}
            className="bg-white hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-medium px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-gray-300 transition-colors shadow-sm"
          >
            View all courses
          </button>
        </div>

        {/* Courses Cards Grid - Exactly Matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Card Image Thumbnail Banner */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Badges Row (Premium & Live) */}
                  <div className="flex items-center gap-2 mb-3">
                    {course.isPremium && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FFF9E6] text-[#A06C00] border border-[#F5E6B8]">
                        <svg className="w-3.5 h-3.5 text-[#B8860B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 18h18M3 18l3-12 6 6 6-6 3 12H3z" />
                        </svg>
                        Premium
                      </span>
                    )}

                    {course.isLive && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8F8F0] text-[#15803D] border border-[#C6F0D9]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]"></span>
                        Live
                      </span>
                    )}
                  </div>

                  {/* Course Title */}
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 leading-snug">
                    {course.title}
                  </h3>
                </div>

                {/* Price and Share Row */}
                <div>
                  <div className="flex items-center justify-between mb-5 pt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-[#8B1538]">
                        {course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-xs sm:text-sm text-gray-400 line-through">
                          {course.originalPrice}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onActionClick(`Share ${course.title}`)}
                      className="text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Share Course"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </button>
                  </div>

                  {/* Action Buttons: Solid Burgundy Enroll Now + Outline Burgundy Get Details */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onEnrollCourse(course)}
                      className="w-full bg-[#8B1538] hover:bg-[#72112D] text-white font-semibold text-xs sm:text-sm py-2.5 rounded-full transition-colors text-center active:scale-95 shadow-sm"
                    >
                      Enroll Now
                    </button>
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="w-full bg-white hover:bg-[#FAF0F3] text-[#8B1538] border border-[#8B1538] font-semibold text-xs sm:text-sm py-2.5 rounded-full transition-colors text-center active:scale-95"
                    >
                      Get Details
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
