"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

const SECTIONS = [
  { id: "course-overview", label: "COURSE OVERVIEW" },
  { id: "syllabus", label: "SYLLABUS" },
  { id: "overview", label: "WHAT IS DIGITAL MARKETING?" },
  { id: "objectives", label: "OBJECTIVES" },
  { id: "curriculum", label: "WHAT WILL YOU LEARN?" },
  { id: "who-is-it-for", label: "WHO IS IT FOR?" },
  { id: "requirements", label: "MINIMUM REQUIREMENTS" },
  { id: "what-you-get", label: "WHAT YOU GET & WHY VISKOOL" },
  { id: "fees", label: "FEE" },
  { id: "career", label: "CAREER OPPORTUNITIES" },
  { id: "certifications", label: "CERTIFICATIONS" },
  { id: "reviews", label: "REVIEWS" },
  { id: "tools", label: "TOOLS" },
{ id: "why-viskool", label: "DIGITAL MARKETING INSTITUTE IN KERALA" },
  { id: "timings", label: "MODE & TIMINGS" },
  { id: "cta", label: "READY TO START?" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "CONCLUSION" },
];

export default function StickyCourseNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const navRef = useRef(null);

    // Sticky state based on scroll position
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 600);
      
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsHidden(true); // Scrolling down
      } else {
        setIsHidden(false); // Scrolling up
      }
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy with IntersectionObserver
  useEffect(() => {
    if (typeof window === 'undefined' || !IntersectionObserver) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll the active nav item into the center of the bar
  useEffect(() => {
    const activeBtn = document.getElementById(`nav-btn-${activeSection}`);
    if (activeBtn && navRef.current) {
      const container = navRef.current;
      // Calculate how far to scroll to center the button in the container
      const scrollPos = activeBtn.offsetLeft - (container.offsetWidth / 2) + (activeBtn.offsetWidth / 2);

      container.scrollTo({
        left: scrollPos,
        behavior: "smooth"
      });
    }
  }, [activeSection]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Calculate the offset to account for the main header and the sticky nav
      const y = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y - 80, behavior: "smooth" });
    }
  };

  const scrollRight = useCallback(() => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  }, []);

  const scrollLeft = useCallback(() => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  }, []);

  return (
    <nav
      className={isScrolled ? "fixed top-2 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl bg-white/95 backdrop-blur-md shadow-lg rounded-full py-4 z-40 transition-all duration-300" : "w-full bg-white border-b py-4 relative z-40"}
    >
      <div className="relative flex items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-white shadow-md rounded-full border border-gray-100 text-gray-600 hover:text-[#102A43]"
          aria-label="Scroll left"
        >
          &#8249;
        </button>
        <div
          ref={navRef}
          className="relative flex-1 overflow-x-auto hide-scrollbar whitespace-nowrap flex gap-8 px-12"
        >
          {SECTIONS.map(({ id, label }) => (
            <button
              id={`nav-btn-${id}`}
              key={id}
              onClick={() => scrollToSection(id)}
              className={`inline-block px-5 py-3 text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                activeSection === id
                  ? "text-[#8B1538] bg-[#8B1538]/10 rounded-full"
                  : "text-gray-500 hover:text-[#102A43]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center bg-white shadow-md rounded-full border border-gray-100 text-gray-600 hover:text-[#102A43]"
          aria-label="Scroll right"
        >
          &#8250;
        </button>
      </div>
    </nav>
  );
}










