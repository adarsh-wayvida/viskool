"use client";

import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { STUDENT_TESTIMONIALS_DATA } from './StudentTestimonialsPage.jsx';
import { TestimonialCard } from './ParentTestimonialsPage.jsx';
import { TestimonialStoryDialog } from './TestimonialStoryDialog.jsx';

const DEFAULT_HEADING = (
  <>Inspiring Journeys from Our Classrooms to <span className="text-[#8B1538] leading-[1.2]">Top Careers</span></>
);

export const HomeStudentTestimonials = ({
  testimonials = STUDENT_TESTIMONIALS_DATA,
  eyebrowLabel = 'STUDENT REVIEWS',
  heading = DEFAULT_HEADING,
  subheading = null,
}) => {
  const router = useRouter();
  const sliderRef = useRef(null);
  const resumeTimerRef = useRef(null);
  const dragStartXRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  // Autoplay pause condition state flags
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isTabInactive, setIsTabInactive] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeModalStudent, setActiveModalStudent] = useState(null);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  // Check prefers-reduced-motion & tab visibility
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionChange);
    } else {
      mediaQuery.addListener(handleMotionChange);
    }

    const handleVisibilityChange = () => {
      setIsTabInactive(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionChange);
      } else {
        mediaQuery.removeListener(handleMotionChange);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Track exact scroll position to handle sub-pixel scrolling speeds correctly
  const exactScrollLeftRef = useRef(0);

  // Continuous smooth scrolling ticker (rAF at ~60fps)
  useEffect(() => {
    let animFrameId = null;
    let lastTime = performance.now();

    const isPaused = 
      isHovered || 
      isFocused || 
      isInteracting || 
      isTabInactive || 
      prefersReducedMotion ||
      !!activeModalStudent;

    const smoothScrollStep = (currentTime) => {
      const slider = sliderRef.current;
      if (slider && !isPaused && slider.children.length > 0) {
        const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
        const speed = 15; // pixels per second (gentle pace)
        
        // If user manually scrolled, sync our exact tracker
        if (Math.abs(slider.scrollLeft - exactScrollLeftRef.current) > 2) {
          exactScrollLeftRef.current = slider.scrollLeft;
        }

        exactScrollLeftRef.current += speed * delta;
        slider.scrollLeft = exactScrollLeftRef.current;

        // Seamless infinite wrap-around check
        // Calculate the exact width of a single set of items
        const gap = 20; // gap-5 = 20px
        const firstChild = slider.children[0];
        if (firstChild) {
          const itemWidth = firstChild.offsetWidth + gap;
          const resetWidth = itemWidth * testimonials.length;

          // When we've scrolled exactly one set's width, snap back to the start seamlessly
          if (slider.scrollLeft >= resetWidth) {
            slider.scrollLeft -= resetWidth;
            exactScrollLeftRef.current -= resetWidth;
          }
        }
      }
      lastTime = currentTime;
      if (!isPaused) {
        animFrameId = requestAnimationFrame(smoothScrollStep);
      }
    };

    if (!isPaused) {
      lastTime = performance.now();
      animFrameId = requestAnimationFrame(smoothScrollStep);
    }

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [isHovered, isFocused, isInteracting, isTabInactive, prefersReducedMotion, activeModalStudent, testimonials.length]);

  // Handle manual interaction pause & auto-resume after 2s
  const triggerInteractionPause = () => {
    setIsInteracting(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2000);
  };

  useEffect(() => {
    checkScroll();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (slider) slider.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    triggerInteractionPause();
    const scrollAmount = sliderRef.current.clientWidth * 0.75;
    
    if (direction === 'left') {
      if (sliderRef.current.scrollLeft <= 5) {
        sliderRef.current.scrollTo({
          left: sliderRef.current.scrollWidth - sliderRef.current.clientWidth,
          behavior: 'smooth',
        });
      } else {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    } else {
      if (sliderRef.current.scrollLeft + sliderRef.current.clientWidth >= sliderRef.current.scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const handlePointerDown = (e) => {
    dragStartXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handlePointerUp = (student, e) => {
    const currentX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
    if (dragStartXRef.current !== null) {
      const diff = Math.abs(currentX - dragStartXRef.current);
      if (diff < 5) {
        setActiveModalStudent(student);
      }
    }
    dragStartXRef.current = null;
  };

  return (
    <section className="py-6 lg:py-8 bg-[#FAFDFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/3 flex flex-col pt-4">
            <div className="font-serif text-[80px] leading-none text-gray-200 mb-2 pointer-events-none select-none">
              “
            </div>
            
            {eyebrowLabel && (
              <div className="inline-flex items-center gap-1.5 mb-4">
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-gray-500">
                  {eyebrowLabel}
                </span>
              </div>
            )}
            
            <h2 className={`text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight ${subheading ? 'mb-4' : 'mb-8'}`}>
              {heading}
            </h2>

            {subheading && (
              <h3 className="text-base sm:text-lg font-semibold text-gray-600 leading-relaxed mb-8">
                {subheading}
              </h3>
            )}

            <div className="mt-2">
              <button
                type="button"
                onClick={() => router.push('/student-testimonials')}
                className="flex items-center gap-2 px-6 py-2.5 text-[15px] font-bold bg-white text-[#15803D] border border-[#15803D] hover:bg-[#F0FDF4] rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 cursor-pointer w-fit"
              >
                View All
              </button>
            </div>
          </div>

          {/* Right Column (Slider) */}
          <div className="w-full lg:w-2/3 -mr-[50vw]">
            <div 
              ref={sliderRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onTouchStart={() => triggerInteractionPause()}
              className="flex items-stretch gap-5 overflow-x-auto scrollbar-none pb-6 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Duplicate multiple times for seamless infinite loop on any screen width */}
              {[1, 2, 3, 4, 5, 6].map((setIdx) => (
                <React.Fragment key={setIdx}>
                  {testimonials.map((student, index) => {
                    const sentenceEnd = student.quote.search(/[.!?](?:\s|$)/);
                    const quote = sentenceEnd >= 0 ? student.quote.slice(0, sentenceEnd + 1) : student.quote;
                    const description = sentenceEnd >= 0 ? student.quote.slice(sentenceEnd + 1).trim() : '';

                    return (
                      <div 
                        key={`${setIdx}-${student.id}-${index}`} 
                        className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 h-auto cursor-pointer transition-transform hover:-translate-y-1"
                        onPointerDown={handlePointerDown}
                        onPointerUp={(e) => handlePointerUp(student, e)}
                        onPointerCancel={() => { dragStartXRef.current = null; }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActiveModalStudent(student);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-label={`Read full testimonial from ${student.name}`}
                      >
                        <div className="pointer-events-none w-full h-full">
                          <TestimonialCard 
                            item={{
                              mediaType: 'image',
                              quote,
                              description,
                              avatar: student.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" fill="%23F1E0E5"/%3E%3Ccircle cx="24" cy="17" r="8" fill="%238B1538"/%3E%3Cpath d="M8 46v-6a16 16 0 0132 0v6" fill="%238B1538"/%3E%3C/svg%3E',
                              parentRole: student.name,
                              courseName: student.tag,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <TestimonialStoryDialog story={activeModalStudent} onClose={() => setActiveModalStudent(null)} />
    </section>
  );
};

