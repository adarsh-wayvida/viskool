"use client";

import React, { useEffect, useState } from "react";
import { Share2, Star } from "lucide-react";

export default function FloatingCourseCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility (existing logic)
      setIsVisible(window.scrollY > 600);

      // Calculate scroll progress (0 to 100)
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SVG circle progress math
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center gap-3">
        {/* Pill bar */}
        <div className="flex-1 bg-white rounded-full shadow-2xl border border-gray-200 px-6 py-3 flex items-center justify-between gap-4">
          {/* Left: Course info (hidden on mobile) */}
          <div className="hidden md:block">
            <p className="text-xs font-bold uppercase tracking-wide text-[#102A43]">
              Master AI-Integrated Digital Marketing in 90 Days...
            </p>
            <div className="flex items-center gap-3 mt-1 text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                4.7 Rating
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                Premium
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Live
              </span>
            </div>
          </div>

          {/* Middle: Price */}
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
              Course Price
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#800020]">₹15,000</span>
              <span className="text-sm text-gray-400 line-through">₹20,000</span>
            </div>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-[#800020] text-white rounded-full px-6 py-2.5 font-bold text-sm hover:opacity-90 transition"
            >
              Enroll Now
            </button>
            <button
              type="button"
              aria-label="Share"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
            >
              <Share2 size={16} />
            </button>
          </div>
        </div>

        {/* Scroll-to-top / Reading progress button attached to right edge */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative w-14 h-14 bg-white border border-gray-200 shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-[#800020] transition-colors flex-shrink-0"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <svg className="absolute inset-0 w-14 h-14 -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="3"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="none"
              stroke="#800020"
              strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>
          <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}