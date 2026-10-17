// Parent Testimonials Page Component - Desktop Web Version with Rich Content-Led Cards
import React, { useState } from 'react';
import { TestimonialStoryDialog } from './TestimonialStoryDialog.jsx';

// Slide 1: Original 4 Parent Stories (Enriched content to fill card proportion cleanly)
const TESTIMONIAL_SLIDE_1 = [
  {
    id: 's1-1',
    avatar: 'parent-video-1.jpg',
    mediaType: 'image',
    quote: 'Viskool has helped my daughter become significantly more organized, disciplined, and confident in her studies.',
    description: 'The teachers are remarkably approachable and patient. The weekly structured practice sessions, conceptual clarity, and regular mentor feedback have brought a positive shift in her academic performance.',
    parentRole: 'Parent of Class 10 Student',
    courseName: 'CBSE Foundation Course',
  },
  {
    id: 's1-2',
    avatar: 'parent-video-2.jpg',
    mediaType: 'image',
    quote: 'My son genuinely looks forward to his interactive live classes every single evening now.',
    description: 'The complex concepts in Mathematics and Science are explained with great clarity. The teachers provide dedicated individual attention, which has made a noticeable difference in his problem-solving speed.',
    parentRole: 'Parent of Class 11 Student',
    courseName: 'JEE Preparation Course',
  },
  {
    id: 's1-3',
    avatar: 'parent-video-3.jpg',
    mediaType: 'image',
    quote: 'The overall learning environment at home has become much more positive, structured, and encouraging.',
    description: "Viskool's structured live classes and weekly progress reviews have helped my son stay accountable, avoid exam stress, and develop strong independent study habits for his competitive prep.",
    parentRole: 'Parent of Class 12 Student',
    courseName: 'NEET Preparation Course',
  },
  {
    id: 's1-4',
    avatar: 'parent-video-4.jpg',
    mediaType: 'image',
    quote: 'We\'ve seen a real, lasting improvement in her study consistency and genuine interest in learning.',
    description: 'The comprehensive study materials, practice worksheets, and continuous teacher support are excellent. She now approaches tests with a calm, well-prepared, and self-assured mindset.',
    parentRole: 'Parent of Class 9 Student',
    courseName: 'CBSE Foundation Course',
  },
];

// Slide 2: Four Realistic Admin Content Testimonials
const TESTIMONIAL_SLIDE_2 = [
  {
    id: 's2-1',
    avatar: 'parent-video-5.jpg',
    mediaType: 'none',
    quote: 'Viskool\'s holistic approach to school academics completely transformed our routine. The structured daily practice and patient mentorship helped my daughter build genuine interest in her studies without any exam stress.',
    description: 'We appreciate how accessible teachers are whenever she has doubts. It feels like having a dedicated mentor right at home guiding her through every subject.',
    parentRole: 'Parent of Class 8 Student',
    courseName: 'CBSE All-Subjects Foundation',
  },
  {
    id: 's2-2',
    avatar: 'parent-video-6.jpg',
    mediaType: 'video',
    image: 'parent-card-father-son.jpg',
    videoDuration: '01:45',
    quote: 'Watch how Viskool helped our son crack JEE with 1-on-1 mentorship and weekly mock analytics.',
    description: 'Hear directly from Mr. Suresh about his son\'s journey from Class 11 core concepts to achieving a top percentile in competitive national test preparation.',
    parentRole: 'Parent of Class 12 JEE Aspirant',
    courseName: 'JEE Main & Advanced Mentorship',
  },
  {
    id: 's2-3',
    avatar: 'parent-video-1.jpg',
    mediaType: 'image',
    quote: 'Viskool has been wonderful for my daughter. Her confidence in Mathematics has improved so much in just two months!',
    description: 'The interactive live sessions, step-by-step problem breakdown, and patient teaching style made learning enjoyable, clear, and thoroughly engaging.',
    parentRole: 'Parent of Class 7 Student',
    courseName: 'Middle School Mathematics',
  },
  {
    id: 's2-4',
    avatar: 'parent-video-2.jpg',
    mediaType: 'image',
    quote: 'When my son started preparing for Class 12 board exams and NEET, we were overwhelmed by the vast syllabus and pressure. Viskool transformed his routine completely.',
    description: 'The continuous performance reports and personal mentor calls kept us informed every week, allowing us to support his goals effectively and calmly.',
    parentRole: 'Parent of Class 12 NEET Aspirant',
    courseName: 'NEET Biology & Chemistry Intensive',
  },
];

const CAROUSEL_SLIDES = [TESTIMONIAL_SLIDE_1, TESTIMONIAL_SLIDE_2];

// Reusable Parent Video Testimonials Data
export const PARENT_VIDEOS_DATA = [
  {
    id: 'pv-1',
    name: 'Gayathri Vishal',
    tagline: 'Parent of Vridhi Vishal',
    course: 'CBSE Foundation Course',
    duration: '01:45',
    thumbnail: 'parent-video-1.jpg',
    videoUrl: '',
    gradient: 'from-[#4A1525] via-[#2A101C] to-[#14080E]',
  },
  {
    id: 'pv-2',
    name: 'Shilpa Bala',
    tagline: 'Parent of Class 10 Student',
    course: 'School Academic Mentorship',
    duration: '02:10',
    thumbnail: 'parent-video-2.jpg',
    videoUrl: '',
    gradient: 'from-[#1E3A2B] via-[#12241A] to-[#0A140F]',
  },
  {
    id: 'pv-3',
    name: 'Gayathri Arun',
    tagline: 'Parent of Kalyani',
    course: 'NEET Foundation Course',
    duration: '01:55',
    thumbnail: 'parent-video-3.jpg',
    videoUrl: '',
    gradient: 'from-[#8B1538] via-[#590D24] to-[#26050F]',
  },
  {
    id: 'pv-4',
    name: 'Shamna Kasim',
    tagline: 'Parent of Middle Schooler',
    course: 'Class 8 Foundation',
    duration: '02:30',
    thumbnail: 'parent-video-4.jpg',
    videoUrl: '',
    gradient: 'from-[#3B2C42] via-[#231A28] to-[#100C13]',
  },
  {
    id: 'pv-5',
    name: 'Muktha',
    tagline: 'Parent of Class 11 Student',
    course: 'JEE Main & Advanced',
    duration: '01:40',
    thumbnail: 'parent-video-5.jpg',
    videoUrl: '',
    gradient: 'from-[#1F2937] via-[#111827] to-[#0B0F17]',
  },
  {
    id: 'pv-6',
    name: 'Suresh Kumar',
    tagline: 'Parent of Class 12 Student',
    course: 'Board Exam Intensive',
    duration: '02:15',
    thumbnail: 'parent-video-6.jpg',
    videoUrl: '',
    gradient: 'from-[#5C1B2E] via-[#38101C] to-[#19070D]',
  },
];

export const ParentVideoSlider = ({ onPlayVideo, isModalOpen = false, videos = PARENT_VIDEOS_DATA, audience = 'Parents', title, subtitle, hideLabel, onViewAll, centerHeader = false, containerClassName = "py-8 sm:py-10 my-6" }) => {
  const sliderRef = React.useRef(null);
  const autoplayTimerRef = React.useRef(null);
  const resumeTimerRef = React.useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Autoplay pause condition state flags
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isTabInactive, setIsTabInactive] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check scroll boundary states
  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  // Check prefers-reduced-motion & tab visibility
  React.useEffect(() => {
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

  // Continuous smooth scrolling ticker (rAF at ~60fps)
  React.useEffect(() => {
    let animFrameId = null;
    let lastTime = performance.now();

    const isPaused = 
      isHovered || 
      isFocused || 
      isDragging || 
      isInteracting || 
      isTabInactive || 
      isModalOpen || 
      prefersReducedMotion;

    const smoothScrollStep = (currentTime) => {
      const slider = sliderRef.current;
      if (slider && !isPaused) {
        const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
        const speed = 26; // pixels per second (slightly gentler pace)
        
        slider.scrollLeft += speed * delta;

        // Infinite wrap-around check
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
          slider.scrollLeft = 0;
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
  }, [isHovered, isFocused, isDragging, isInteracting, isTabInactive, isModalOpen, prefersReducedMotion]);

  // Handle manual interaction pause & auto-resume after 2s
  const triggerInteractionPause = () => {
    setIsInteracting(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2000);
  };

  React.useEffect(() => {
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    triggerInteractionPause();
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftPos(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    triggerInteractionPause();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftPos - walk;
  };

  return (
    <div className={`w-full ${containerClassName} border-t border-b border-gray-100`}>
      {/* Section Header */}
      <div className={`flex flex-col ${centerHeader ? 'gap-3' : 'sm:flex-row items-start sm:items-end justify-between gap-4'} mb-4 sm:mb-5`}>
        <div className={centerHeader ? 'flex flex-col items-center text-center w-full' : ''}>
          {!hideLabel && (
            <div className="inline-flex items-center gap-1.5 bg-[#8B1538]/10 border border-[#8B1538]/15 px-3 py-0.5 rounded-full mb-2">
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#8B1538]">
                VIDEO STORIES
              </span>
            </div>
          )}
          {title ? (
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-2">
              {title}
            </h2>
          ) : (
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Hear It From the{' '}
              <span className="font-serif text-[#8B1538] font-bold">
                {audience}
              </span>
            </h3>
          )}
          <p className={`text-xs sm:text-sm lg:text-base text-gray-600 font-normal pt-1 ${centerHeader ? 'max-w-2xl' : 'max-w-xl'}`}>
            {subtitle || 'Real experiences, shared in their own words.'}
          </p>
        </div>
      </div>

      {/* Video Cards Horizontal Slider Container */}
      <div className="relative group/slider px-4 sm:px-8">
        {/* Left Navigation Arrow */}
        <button
          type="button"
          onClick={() => scroll('left')}
          aria-label="Scroll left video testimonials"
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg bg-white border border-gray-100 text-[#8B1538] hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538] active:scale-95 disabled:opacity-0"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Navigation Arrow */}
        <button
          type="button"
          onClick={() => scroll('right')}
          aria-label="Scroll right video testimonials"
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg bg-white border border-gray-100 text-[#8B1538] hover:bg-[#8B1538] hover:text-white hover:border-[#8B1538] active:scale-95 disabled:opacity-0"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`flex items-center gap-4 sm:gap-5 overflow-x-auto scrollbar-none pb-4 pt-2 px-1 sm:px-2 select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => onPlayVideo && onPlayVideo(video)}
            className="w-[210px] sm:w-[240px] md:w-[255px] aspect-[4/5] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-md hover:shadow-xl border border-white/60 transition-all duration-300 hover:scale-[1.02] cursor-pointer group bg-gray-900"
          >
            {/* Card Thumbnail / Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient} flex items-center justify-center`}>
              <img
                src={video.thumbnail}
                alt={video.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              {/* Neutral Abstract Face Silhouette Placeholder if Image Fails */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-30 group-hover:opacity-20 transition-opacity">
                <svg className="w-16 h-16 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
            </div>

            {/* Top-Right Duration Pill Badge */}
            <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-medium text-white/90 border border-white/10">
              {video.duration || '01:45'}
            </div>

            {/* Center Animated Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/25 border border-white/50 backdrop-blur-md flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#8B1538] group-hover:border-[#8B1538]">
                <svg className="w-5 h-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Bottom Gradient Card Info Overlay - Strengthened background */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-3.5 sm:p-4 bg-gradient-to-t from-black/90 via-black/80 to-transparent flex flex-col justify-end pt-20">
              <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
                {video.name}
              </h4>
              <p className="text-[11px] sm:text-xs text-gray-200/90 font-medium mt-0.5 line-clamp-1 drop-shadow-md">
                {video.tagline}
              </p>
              <span className="text-[10px] text-[#F8DFE6] font-semibold mt-1 inline-block opacity-90">
                {video.course}
              </span>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Bottom Centered CTA */}
      {onViewAll && (
        <div className="flex justify-center mt-8 sm:mt-10">
          <button
            type="button"
            onClick={onViewAll}
            className="flex items-center gap-2 px-6 py-2.5 text-[15px] font-bold text-gray-900 bg-[#F5BA31] hover:bg-[#F4B41A] rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

// Clean, Content-Led Section-Isolated Testimonial Card Component
export const TestimonialCard = ({ item, onPlayVideo, onReadMore }) => {
  const quoteRef = React.useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);
  React.useEffect(() => {
    if (!onReadMore) return;
    const checkOverflow = () => setIsTruncated([quoteRef.current].some((element) => element && element.scrollHeight > element.clientHeight + 1));
    checkOverflow();
    const observer = new ResizeObserver(checkOverflow);
    [quoteRef.current].forEach((element) => element && observer.observe(element));
    document.fonts.ready.then(checkOverflow);
    return () => observer.disconnect();
  }, [item.quote, item.description, onReadMore]);

  const isVideo = item.mediaType === 'video';

  return (
    <div
      style={{ fontFamily: 'Inter, sans-serif' }}
      className={`not-italic bg-white border border-gray-100 hover:border-[#8B1538]/20 rounded-xl sm:rounded-2xl p-3 sm:p-3.5 md:p-4 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 relative overflow-hidden h-full group ${
        onReadMore || isVideo ? 'cursor-pointer' : ''
      }`}
      role={onReadMore ? 'button' : undefined}
      tabIndex={onReadMore ? 0 : undefined}
      aria-label={onReadMore ? `Read full story from ${item.parentRole}` : undefined}
      onKeyDown={(event) => {
        if (event.target === event.currentTarget && onReadMore && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); onReadMore(); }
      }}
      onClick={() => onReadMore ? onReadMore() : isVideo && onPlayVideo && onPlayVideo(item)}
    >
      {/* Top Section: Graphic Accent Icon & Quote Content */}
      <div className="space-y-2">
        
        {/* Top Header Row with Tasteful Quote Icon Accent & Rating Badge */}
        <div className="flex items-center justify-between">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#8B1538]/5 border border-[#8B1538]/10 flex items-center justify-center text-[#8B1538] shrink-0 transition-colors group-hover:bg-[#8B1538]/10">
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Right Header Chip */}
          {isVideo ? null : (
            <div className="inline-flex items-center gap-0.5 text-[#F5BA31] text-[10px] sm:text-xs font-bold bg-[#FAF2F5] border border-[#8B1538]/10 px-2 py-0.5 rounded-full">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          )}
        </div>

        {/* Quote & Description Content */}
        <div className="space-y-1 pt-0.5">
          <p style={{ fontFamily: 'Inter, sans-serif' }} ref={quoteRef} className={`text-[15px] text-[#2B2B2B] leading-[1.5] font-normal not-italic ${onReadMore ? 'line-clamp-5' : ''}`}>
            {[item.quote, item.description].filter(Boolean).join(' ')}
          </p>
        </div>

      </div>

      {/* Bottom Section: Author Metadata */}
      <div className="pt-2.5 sm:pt-3 mt-auto">
        {onReadMore && isTruncated && (
          <button type="button" onClick={(event) => { event.stopPropagation(); onReadMore(); }} className="text-xs font-semibold text-[#8B1538] underline underline-offset-4 hover:text-[#73152C] mb-3 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8B1538]">More</button>
        )}
        <div className="w-8 h-[1px] bg-[#8B1538]/20 mb-1.5" />
        
        <div className="flex items-center gap-2.5">
          <img
            src={item.avatar}
            alt={item.parentRole}
            loading="lazy"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover object-top shrink-0 border border-[#8B1538]/10"
          />
          <div className="min-w-0">
            <div style={{ fontFamily: 'Inter, sans-serif' }} className="text-[14px] font-semibold text-gray-900 not-italic">
              {item.parentRole}
            </div>
            {item.courseName && (
              <div style={{ fontFamily: 'Inter, sans-serif' }} className="text-[13px] text-gray-500 font-normal not-italic mt-0.5">
                {item.courseName}
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export const ParentTestimonialsPage = ({ onOpenContact }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeStory, setActiveStory] = useState(null);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentCards = CAROUSEL_SLIDES[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);
  };

  return (
    <div className="w-full bg-[#FAF4F7] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF4F7] via-[#FAF2F6] to-[#FAF4F7] py-12 lg:py-16 border-b border-[#8B1538]/5">
        
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-[#EED5E2]/35 -rotate-1 rounded-3xl pointer-events-none blur-[1px]" />
        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-[#E8C2D3]/25 rotate-1 rounded-3xl pointer-events-none" />

        <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full border border-[#8B1538]/10 pointer-events-none" />
        <div className="absolute -top-8 -right-8 w-72 h-72 rounded-full border border-[#8B1538]/15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            
            <div className="space-y-4">
              
              <div className="inline-flex items-center gap-2 bg-[#8B1538]/10 border border-[#8B1538]/15 px-3.5 py-1 rounded-full">
                <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#8B1538]">
                  PARENT TESTIMONIALS.
                </span>
                <span className="text-[#8B1538]/30 font-serif text-sm">✦</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-gray-900 tracking-tight leading-[1.08] relative sm:whitespace-nowrap">
                What Our{' '}
                <span className="font-serif text-[#8B1538] font-bold relative inline-block">
                  Parents
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#8B1538]/20" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M2 8 C 30 2, 70 10, 98 4" />
                  </svg>
                </span>{' '}
                Say
              </h1>

              <p className="text-base sm:text-[16px] text-gray-600 font-normal max-w-xl leading-relaxed pt-1 space-y-2 relative z-10">
                Hear from parents about their child's learning journey with Viskool. Discover how our interactive live classes and dedicated mentors build genuine academic confidence. Read real experiences of families who have seen consistent progress in board exams and competitive test prep. Our personalized attention ensures every student receives tailored guidance according to their learning pace. Partner with us to create a structured and encouraging learning environment right at home.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[520px] h-[300px] sm:h-[320px]">
                
                <div className="absolute top-1 -left-2 w-[235px] sm:w-[255px] h-[185px] sm:h-[200px] rounded-2xl bg-[#EED5E2]/80 -rotate-6 transform border border-[#8B1538]/10 pointer-events-none shadow-sm" />
                <div className="absolute top-4 right-[-6px] w-[225px] sm:w-[245px] h-[175px] sm:h-[190px] rounded-2xl bg-[#E8C2D3]/70 rotate-6 transform border border-[#8B1538]/10 pointer-events-none shadow-sm" />
                <div className="absolute bottom-[-4px] left-[23%] sm:left-[25%] w-[205px] sm:w-[225px] h-[145px] sm:h-[160px] rounded-2xl bg-[#E5BFD0]/80 -rotate-3 transform border border-[#8B1538]/10 pointer-events-none shadow-sm" />

                <div className="absolute top-0 left-0 w-[235px] sm:w-[255px] h-[185px] sm:h-[200px] rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(139,21,56,0.12)] border-2 border-white -rotate-2 transition-all hover:rotate-0 duration-300 z-10">
                  <img src="mother-and-son-landscape.webp" alt="Mother and son story" className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-3 right-0 w-[225px] sm:w-[245px] h-[175px] sm:h-[190px] rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(139,21,56,0.12)] border-2 border-white rotate-2 transition-all hover:rotate-0 duration-300 z-10">
                  <img src="father-and-daughter-landscape.webp" alt="Father and daughter story" className="w-full h-full object-cover" />
                </div>

                <div className="absolute bottom-0 left-[24%] sm:left-[26%] w-[205px] sm:w-[225px] h-[145px] sm:h-[160px] rounded-2xl overflow-hidden shadow-[0_16px_32px_rgba(139,21,56,0.18)] border-3 border-white z-20 transition-all hover:scale-102 duration-300">
                  <img src="mother-and-daughter-landscape.webp" alt="Mother and daughter story" className="w-full h-full object-cover" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT CONTAINER — "Every Family Has a Story" SECTION */}
      <div className="w-full bg-[#FCFCFD] py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-gray-100 pb-3 gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Every family has a{' '}
              <span className="font-serif text-[#8B1538] font-bold">
                story
              </span>
            </h2>

            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial slide"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8B1538] hover:bg-[#73152C] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial slide"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8B1538] hover:bg-[#73152C] text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7">
            {currentCards.map((item) => (
              <TestimonialCard 
                key={item.id} 
                item={item}
                onReadMore={() => setActiveStory({ image: item.avatar, name: item.parentRole, tag: item.courseName, category: 'Parent Testimonial', quote: [item.quote, item.description].filter(Boolean).join(' ') })}
                onPlayVideo={(v) => setActiveVideo(v)} 
              />
            ))}
          </div>

          {/* New Parent Video Testimonials Slider */}
          <ParentVideoSlider onPlayVideo={(v) => setActiveVideo(v)} isModalOpen={!!activeVideo} />

          <div className="bg-gradient-to-r from-[#FDF5F8] via-[#FBF0F5] to-[#F5E6EC] rounded-3xl p-8 sm:p-12 border border-[#8B1538]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                Let's talk about your child's{' '}
                <span className="font-serif text-[#8B1538] font-bold block sm:inline">
                  learning goals.
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-normal pt-1">
                Understand how Viskool can support your child's journey with a personalized conversation.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenContact && onOpenContact('Talk to Our Team', { source: 'Parent Testimonials CTA' })}
              className="bg-[#8B1538] hover:bg-[#73152C] text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base shadow-md transition-all hover:shadow-lg active:scale-98 flex items-center gap-2.5 shrink-0 cursor-pointer"
            >
              <span>Talk to Our Team</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      <TestimonialStoryDialog story={activeStory} onClose={() => setActiveStory(null)} />

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-lg font-bold transition-all cursor-pointer"
            >
              ✕
            </button>
            <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
              <img src={activeVideo.image || 'parent-card-father-son.jpg'} alt="Video cover" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div className="w-16 h-16 rounded-full bg-[#F5BA31] text-gray-900 flex items-center justify-center text-2xl font-bold mb-3 shadow-lg">
                  ▶
                </div>
                <h4 className="text-lg font-bold">{activeVideo.parentRole}</h4>
                <p className="text-xs text-gray-200 mt-1 max-w-md">{activeVideo.quote}</p>
              </div>
            </div>
            <div className="p-5 bg-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#8B1538] uppercase tracking-wider">{activeVideo.courseName}</span>
                <p className="text-xs text-gray-500 mt-0.5">Parent Video Story • Duration {activeVideo.videoDuration}</p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="px-4 py-2 bg-[#8B1538] hover:bg-[#73152C] text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

