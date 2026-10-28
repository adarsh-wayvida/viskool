// Header Section Component - Glassmorphic Header with Navigation & Dropdowns
import React, { useState, useEffect } from 'react';

const COURSE_CATEGORIES_WITH_ITEMS = [
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    items: [
      'Digital Marketing Course for Freshers',
      'Advanced Performance Marketing & SEO',
      'Social Media & Content Strategy',
    ]
  },
  {
    id: 'high-court-kerala',
    name: 'High Court of Kerala',
    items: [
      'High Court Assistant (HCA) Coaching',
      'High Court Office Attendant Prep',
    ]
  },
  {
    id: 'jee-prep',
    name: 'JEE',
    items: [
      'JEE Main 1-Year Comprehensive Batch',
      'JEE Advanced Fast-Track Crash Course',
    ]
  },
  {
    id: 'kerala-psc',
    name: 'Kerala PSC',
    items: [
      'Kerala PSC LDC / UDC Coaching',
      'Kerala PSC Sub-Inspector (SI) Batch',
      'KAS (Kerala Administrative Service) Prep',
    ]
  },
  {
    id: 'language-skill',
    name: 'Language Skill',
    items: [
      'Spoken English & Professional Communication',
      'IELTS & OET Exam Preparation',
    ]
  },
  {
    id: 'neet-prep',
    name: 'NEET',
    items: [
      'NEET UG 1-Year Master Batch',
      'NEET 2026 Intensive Crash Course',
      '1-on-1 Physics & Chemistry Mentorship',
    ]
  },
  {
    id: 'school-tuitions',
    name: 'School Tuitions',
    items: [
      'Class 10 CBSE Board Exam Batch',
      'Class 12 Kerala State Board Physics/Chem',
      'Class 8-12 Interactive Live Tuitions',
    ]
  },
  {
    id: 'upskill-courses',
    name: 'Upskill courses',
    items: [
      'Full Stack Web Development (React & Node)',
      'Python Programming & AI Basics',
      'Data Analytics & Excel Masterclass',
    ]
  }
];

export const Header = ({ navLinks, onOpenContact, onActionClick, onNavigate, currentPage = 'home' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'Courses' | 'About Us' | null
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimerRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
        setOpenDropdown(null);
        setHoveredCategory(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const handleMouseEnter = (label) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setHoveredCategory(null);
    }, 200); // 200ms smooth close delay
  };

  const handleTriggerClick = (label) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg transition-all duration-300 ${
      isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
              }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <img 
                src="viskool-logo.png" 
                alt="Viskool" 
                className="h-5 sm:h-6 md:h-7 w-auto object-contain hover:opacity-90 transition-opacity"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[#222222]">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isOpen = openDropdown === link.label;
                const isChildActive = link.items && link.items.some(item => item.href === currentPage);

                return (
                  <div 
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => handleTriggerClick(link.label)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleTriggerClick(link.label);
                        }
                      }}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={`flex items-center gap-1.5 text-[14px] transition-colors duration-200 cursor-pointer focus:outline-hidden ${isChildActive ? 'text-[#8B1538] font-bold border-b-2 border-[#8B1538] pb-0.5' : 'font-medium text-[#222222] hover:text-[#8B1538] py-1 focus:text-[#8B1538]'}`}
                    >
                      <span>{link.label}</span>
                      <svg 
                        className={`w-3.5 h-3.5 text-[#8B1538] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Courses Mega Dropdown Menu */}
                    {isOpen && link.label === 'Courses' && (
                      <div className="absolute left-0 top-full pt-1.5 z-50 animate-fadeIn">
                        <div className="flex bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                          
                          {/* Left Panel: Categories */}
                          <div className="w-52 bg-[#F7F2F4]/60 border-r border-gray-100 py-1.5">
                            {COURSE_CATEGORIES_WITH_ITEMS.map((cat) => {
                              const isActive = hoveredCategory?.id === cat.id;
                              return (
                                <button
                                  key={cat.id}
                                  type="button"
                                  onMouseEnter={() => setHoveredCategory(cat)}
                                  onClick={() => {
                                    setHoveredCategory(cat);
                                    onActionClick(`Selected Category: ${cat.name}`);
                                  }}
                                  className={`w-full flex items-center justify-between px-4 py-2.5 text-[13.5px] text-left transition-colors duration-150 ${
                                    isActive
                                      ? 'bg-[#EFE2E6] text-[#8B1538] font-bold'
                                      : 'text-gray-700 font-normal hover:bg-gray-100/80 hover:text-[#8B1538]'
                                  }`}
                                >
                                  <span>{cat.name}</span>
                                  <span className={`text-xs ${isActive ? 'text-[#8B1538] font-bold' : 'text-gray-300'}`}>
                                    ›
                                  </span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Right Panel: Sub-items */}
                          {hoveredCategory && (
                            <div className="p-5 bg-white min-w-[380px] animate-fadeIn">
                              <h4 className="text-[12px] font-extrabold uppercase tracking-wider text-[#8B1538] mb-4 border-b border-gray-100 pb-2">
                                {hoveredCategory.name}
                              </h4>
                              <div className="space-y-3.5">
                                {hoveredCategory.items.map((itemTitle, idx) => (
                                  <a
                                    key={idx}
                                    href="#courses"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
                                      setOpenDropdown(null);
                                      setHoveredCategory(null);
                                      onActionClick(`Selected Course: ${itemTitle}`);
                                    }}
                                    className="block text-[13.5px] text-gray-700 hover:text-[#8B1538] font-normal leading-snug transition-colors"
                                  >
                                    {itemTitle}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                        </div>
                      </div>
                    )}

                    {/* About Us Simple Dropdown Menu */}
                    {isOpen && link.label === 'About Us' && (
                      <div className="absolute left-0 top-full pt-1.5 z-50 animate-fadeIn">
                        <div className="w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2">
                          {link.items?.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={(e) => {
                                  if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
                                  setOpenDropdown(null);
                                  if (item.href && item.href.startsWith('/')) {
                                    e.preventDefault();
                                    if (onNavigate) {
                                      const route = item.href.substring(1);
                                      onNavigate(route || 'home');
                                    }
                                  }
                                }}
                              className="block px-4 py-2.5 text-[13.5px] text-gray-700 hover:bg-[#F7F2F4] hover:text-[#8B1538] font-medium transition-colors cursor-pointer"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                );
              }

              if (link.isContactTrigger) {
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => onOpenContact('Contact Us')}
                    className="text-[14px] text-[#222222] font-medium hover:text-[#8B1538] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                );
              }

              const isHome = link.label === 'Home';

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (isHome) {
                      if (onNavigate) onNavigate('home');
                    } else if (link.href.startsWith('/')) {
                      if (onNavigate) onNavigate(link.href.slice(1));
                    }
                  }}
                  className={`text-[14px] transition-all duration-200 cursor-pointer ${
                    (isHome && currentPage === 'home') || (!isHome && currentPage === link.href)
                      ? 'text-[#8B1538] font-bold border-b-2 border-[#8B1538] pb-0.5'
                      : 'text-[#222222] font-medium hover:text-[#8B1538]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Join Community Button */}
            <button
              onClick={() => onActionClick('Join our WhatsApp Community')}
              className="inline-flex items-center justify-center border-2 border-[#15803D] text-[#15803D] hover:bg-[#15803D] hover:text-white font-bold text-xs sm:text-sm md:text-[15px] px-5 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 active:scale-95 shadow-sm"
            >
              Join our Community
            </button>

            {/* Get In Touch Button */}
            <button
              onClick={() => onOpenContact('Get In Touch')}
              className="hidden sm:inline-flex items-center justify-center bg-[#8B1538] hover:bg-[#73152C] text-white font-bold text-xs sm:text-sm md:text-[15px] px-6 sm:px-7 py-2 sm:py-2.5 rounded-full transition-all duration-200 hover:shadow-md active:scale-95"
            >
              Get In Touch
              <span className="ml-1.5 font-bold">›</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-[#8B1538] hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.hasDropdown ? (
                <div className="py-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B1538]">
                    {link.label}
                  </span>
                  {link.items && (
                    <div className="mt-1 pl-3 space-y-1.5 border-l-2 border-[#8B1538]/20">
                      {link.items.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={(e) => {
                              setIsMobileMenuOpen(false);
                              if (subItem.href && subItem.href.startsWith('/')) {
                                e.preventDefault();
                                if (onNavigate) {
                                  const route = subItem.href.substring(1);
                                  onNavigate(route || 'home');
                                }
                              }
                            }}
                          className="block text-sm text-gray-700 hover:text-[#8B1538] py-1"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.isContactTrigger ? (
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenContact('Contact Us');
                  }}
                  className="block w-full text-left py-2 text-base font-medium text-gray-800 hover:text-[#8B1538]"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('/')) {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      if (onNavigate) onNavigate(link.href.slice(1));
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className={`block py-2 text-base font-medium ${
                    link.active ? 'text-[#8B1538] font-bold' : 'text-gray-800'
                  }`}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact('Get In Touch (Mobile)');
              }}
              className="w-full flex items-center justify-center bg-[#8B1538] text-white py-2.5 rounded-full font-semibold text-sm shadow-md"
            >
              Get In Touch ›
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

