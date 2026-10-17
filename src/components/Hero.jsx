// Hero Section Component - Reusable Data-Driven Banner Carousel with Banner 3 Right-Side Media Container Animation
import React, { useState, useEffect } from 'react';

// Complete 5 Banner Slot Registry
export const ALL_HERO_SLIDES = [
  {
    id: 1,
    isReady: true,
    video: null,
    image: 'kerala-student-banner-1.png',
    badge: null,
    theme: 'dark',
    heading: 'From Class 1 to Career Goals: Your Complete Learning Partner',
    subheading: 'Whether mastering school subjects, cracking competitive exams, or building professional skills, Viskool gives learners of all ages the structure, guidance, and confidence to succeed.',
    chips: null,
    overlayClass: 'bg-gradient-to-r from-black/85 via-black/55 to-black/25',
    ctaPrimary: {
      label: 'Explore Courses',
      type: 'explore',
    },
    ctaSecondary: {
      label: 'Talk to an Expert',
      type: 'contact',
      source: 'Hero Banner 1',
    },
  },
  {
    id: 2,
    isReady: true,
    video: null,
    image: '/banner-student-banner3-style-black-left.webp',
    badge: 'TUITION',
    theme: 'dark',
    heading: 'Complete Learning Partner for School Academic Excellence',
    subheading: 'Get expert one-to-one school tuition for Grades 5–12 across Kerala State, CBSE, ICSE, and IGCSE.',
    chips: [
      'All Subjects · Grades 5–12',
      'CBSE · ICSE · STATE · IGCSE',
      'Doubt Clearing & Regular Tests',
    ],
    overlayClass: '',
    ctaPrimary: {
      label: 'Book a Free Demo',
      type: 'demo',
      source: 'Hero Banner 2',
    },
    ctaSecondary: {
      label: 'Talk to an Expert',
      type: 'contact',
      source: 'Hero Banner 2',
    },
  },
  {
    id: 3,
    isReady: true, // Banner 3 — Upskill & Career Program
    badge: 'UPSKILL',
    theme: 'dark', // Dark theme for full background image with left dark overlay
    heading: 'Launch a High-Paying Career with High-Demand Skills',
    subheading: 'Master in-demand skills in Digital Marketing, Performance Marketing and Data Analytics through hands-on projects and expert mentorship.',
    chips: [
      'Digital Marketing',
      'Performance Marketing',
      'Data Analytics',
    ],
    ctaPrimary: {
      label: 'Book a Free Demo',
      type: 'demo',
      source: 'Hero Banner 3',
    },
    ctaSecondary: {
      label: 'Talk to an Expert',
      type: 'contact',
      source: 'Hero Banner 3',
    },
    image: '/banner-3-upskill-gradient.webp',
    overlayClass: '',
  },
  {
    id: 4,
    isReady: true,
    video: null,
    image: '/banner-4.webp',
    badge: 'COMPETITIVE EXAMS',
    theme: 'dark',
    heading: 'Expert Coaching for NEET, JEE & High Court Assistant Success',
    subheading: 'Expert mentors, regular practice tests, and personal guidance at every step. Walk into the exam with confidence.',
    chips: [
      'Entrance Coaching · NEET/JEE',
      'Government Exams',
    ],
    overlayClass: 'bg-gradient-to-r from-black/85 via-black/50 to-transparent sm:from-black/75 sm:via-black/40 sm:to-transparent',
    ctaPrimary: {
      label: 'Book a Free Demo',
      type: 'demo',
      source: 'Hero Banner 4',
    },
    ctaSecondary: {
      label: 'Talk to an Expert',
      type: 'contact',
      source: 'Hero Banner 4 - Request Free Assessment',
    },
  },
  {
    id: 5,
    isReady: false, // Reserved Banner 5
  },
];

export const Hero = ({ onActionClick, onOpenContact, onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Active publicly visible slides (Banners 1, 2 & 3)
  const activeSlides = ALL_HERO_SLIDES.filter((slide) => slide.isReady);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  // Autoplay rotation every 6.5 seconds (paused on hover)
  useEffect(() => {
    if (isHovered || activeSlides.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6500);

    return () => clearInterval(timer);
  }, [activeSlides.length, isHovered]);

  const slide = activeSlides[currentSlide] || activeSlides[0];
  const isLight = slide.theme === 'light';

  const handlePrimaryClick = (cta) => {
    if (cta.type === 'explore') {
      if (onNavigate) {
        onNavigate('courses');
      } else {
        const coursesSection = document.getElementById('courses');
        if (coursesSection) {
          coursesSection.scrollIntoView({ behavior: 'smooth' });
        } else if (onActionClick) {
          onActionClick('Explore Courses');
        }
      }
    } else if (cta.type === 'demo' || cta.type === 'contact') {
      if (onOpenContact) {
        onOpenContact(cta.label, { source: cta.source || 'Hero Banner' });
      } else if (onActionClick) {
        onActionClick(cta.label);
      }
    }
  };

  const handleSecondaryClick = (cta) => {
    if (onOpenContact) {
      onOpenContact(cta.label, { source: cta.source || 'Hero Banner' });
    } else if (onActionClick) {
      onActionClick(cta.label);
    }
  };

  return (
    <section 
      className={`relative w-full overflow-hidden bg-black select-none ${slide.id === 1 ? 'hero-banner-one' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes slideContentFadeUp {
          0% {
            transform: translateY(16px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-banner-stagger-1 { animation: slideContentFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 60ms both; }
        .animate-banner-stagger-2 { animation: slideContentFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 160ms both; }
        .animate-banner-stagger-3 { animation: slideContentFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 260ms both; }
        .animate-banner-stagger-4 { animation: slideContentFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 360ms both; }
        .animate-banner-stagger-5 { animation: slideContentFadeUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 460ms both; }


        @media (min-width: 1024px) {
          .hero-banner-one .hero-background-image {
            width: 108%;
            max-width: none;
          }
          .hero-banner-one .hero-copy {
            max-width: min(560px, 48vw);
          }
          .hero-banner-one .hero-copy h1 {
            max-width: 100%;
          }
          .hero-banner-one .hero-copy p {
            max-width: 90%;
          }
          .hero-banner-one .hero-image-overlay {
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.78) 30%, rgba(0, 0, 0, 0.48) 43%, rgba(0, 0, 0, 0.12) 58%, transparent 70%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-banner-stagger-1,
          .animate-banner-stagger-2,
          .animate-banner-stagger-3,
          .animate-banner-stagger-4,
          .animate-banner-stagger-5 {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <div className="relative w-full aspect-[16/9] min-h-[440px] sm:min-h-[520px] max-h-[640px] flex items-center overflow-hidden">
        
        {/* Background Visual Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {slide.video ? (
            /* Video Background */
            <video 
              key={slide.id}
              src={slide.video}
              poster={slide.image}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover object-center transition-opacity duration-700"
            />
          ) : slide.image ? (
            /* Background Image */
            <img 
              key={slide.id}
              src={slide.image} 
              alt={slide.heading}
              className="hero-background-image w-full h-full object-cover object-center transition-opacity duration-700"
            />
          ) : (
            /* Static Base Viskool Gradient Background */
            <div className="w-full h-full bg-gradient-to-br from-[#FFFDFE] via-[#FDF2F4] to-[#F3D0D7] relative overflow-hidden" />
          )}

          {/* Overlay for Video / Image Slides */}
          {(slide.video || slide.image) && (
            <div className={`hero-image-overlay absolute inset-0 ${slide.overlayClass || 'bg-black/55 sm:bg-black/45'}`} />
          )}
        </div>

        {/* Left-Aligned Text Overlay Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 md:px-20 w-full flex items-center justify-start">
          <div 
            key={`banner-content-${slide.id}-${currentSlide}`}
            className="hero-copy max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-left space-y-3 sm:space-y-4"
          >
            
            {/* Optional Badge Pill (Stagger 1) */}
            {slide.badge && (
              <div className="animate-banner-stagger-1">
                <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-xs ${
                  isLight 
                    ? 'bg-[#8B1538]/10 border border-[#8B1538]/20 text-[#8B1538]' 
                    : 'bg-white/15 backdrop-blur-md border border-white/25 text-white'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-[#8B1538] animate-pulse" />
                  <span>{slide.badge}</span>
                </div>
              </div>
            )}

            {/* Headline (Stagger 2) */}
            <div className="animate-banner-stagger-2">
              <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-extrabold tracking-tight !leading-[1.2] max-w-[360px] sm:max-w-[540px] md:max-w-[620px] ${
                isLight ? 'text-[#1A030C]' : 'text-white drop-shadow-md'
              }`}>
                {slide.heading}
              </h1>
            </div>

            {/* Description (Stagger 3) */}
            <div className="animate-banner-stagger-3">
              <p className={`text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed max-w-xl ${
                isLight ? 'text-gray-700' : 'text-gray-200 drop-shadow-sm'
              }`}>
                {slide.subheading}
              </p>
            </div>

            {/* Supporting Chips / Pills (Stagger 4) */}
            {slide.chips && slide.chips.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-1 pb-1 animate-banner-stagger-4">
                {slide.chips.map((chip, idx) => (
                  <span 
                    key={idx}
                    className={`inline-block font-semibold text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                      isLight 
                        ? 'bg-[#8B1538]/8 text-[#73152C] border border-[#8B1538]/15 shadow-xs' 
                        : 'bg-white/15 backdrop-blur-md border border-white/20 text-white shadow-xs'
                    }`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {/* Banner CTA Buttons (Stagger 5) */}
            <div className="pt-2 animate-banner-stagger-5">
              <div className="flex flex-row flex-wrap items-center gap-3 sm:gap-4">
                {/* Primary Button */}
                {slide.ctaPrimary && (
                  <button
                    type="button"
                    onClick={() => handlePrimaryClick(slide.ctaPrimary)}
                    className="inline-flex items-center justify-center bg-[#8B1538] hover:bg-[#73152C] text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-md transition-all duration-200 active:scale-95 cursor-pointer gap-2"
                  >
                    {slide.ctaPrimary.hasPhoneIcon && (
                      <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    )}
                    <span>{slide.ctaPrimary.label}</span>
                    {!slide.ctaPrimary.hasPhoneIcon && (
                      <span className="ml-1.5 text-base leading-none">→</span>
                    )}
                  </button>
                )}

                {/* Secondary Button */}
                {slide.ctaSecondary && (
                  <button
                    type="button"
                    onClick={() => handleSecondaryClick(slide.ctaSecondary)}
                    className={`inline-flex items-center justify-center border font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-sm transition-all duration-200 active:scale-95 cursor-pointer gap-2 ${
                      isLight 
                        ? 'bg-white hover:bg-[#FDF2F4] text-[#8B1538] border-[#8B1538]' 
                        : 'bg-white hover:bg-gray-50 text-[#8B1538] border-[#8B1538]'
                    }`}
                  >
                    <svg className="w-4 h-4 text-[#8B1538] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{slide.ctaSecondary.label}</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Translucent Carousel Arrow Controls */}
        {activeSlides.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous Slide"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/40 hover:bg-white/70 text-gray-900 flex items-center justify-center backdrop-blur-xs transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next Slide"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/40 hover:bg-white/70 text-gray-900 flex items-center justify-center backdrop-blur-xs transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Carousel Indicators (Dots) */}
        {activeSlides.length > 1 && (
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {activeSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlide(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-5 sm:w-6 h-1 sm:h-1.5 bg-[#8B1538] rounded-full' 
                    : 'w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gray-400/70 hover:bg-gray-600 rounded-full'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
