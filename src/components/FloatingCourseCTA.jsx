"use client";

import React, { useEffect, useState } from "react";
import { Share2 } from "lucide-react";

export default function FloatingCourseCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visibilityClass = isVisible ? "opacity-100" : "opacity-0 pointer-events-none";

  return (
    <>
      {/* ============ MOBILE: Full-width sticky footer bar ============ */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50 px-4 pr-6 py-3 flex justify-between items-center gap-3 md:hidden transition-all duration-500 ${visibilityClass}`}
      >
        {/* Left: Share icon */}
        <button
          type="button"
          aria-label="Share"
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
        >
          <Share2 size={16} />
        </button>
        {/* Right: Enroll Now with price */}
        <button
          type="button"
          className="w-fit ml-auto bg-[#800020] text-white rounded-full px-6 py-2.5 font-bold text-sm text-center hover:opacity-90 transition"
        >
          Enroll Now
        </button>
      </div>

      {/* ============ DESKTOP: Floating Enroll Now button ============ */}
      <div className="hidden md:flex">
        <div className={`fixed bottom-6 right-[88px] z-50 flex items-center bg-white rounded-full shadow-xl border border-gray-100 p-1 transition-all duration-500 ${visibilityClass}`}>
          <div className="px-5 flex items-center gap-2">
            <span className="font-bold text-[#071534] text-[18px] leading-none">₹15,000</span>
            <span className="text-[#8190AA] font-semibold text-[14px] line-through leading-none">₹20,000</span>
          </div>
          <button
            type="button"
            className="bg-[#8B1538] hover:bg-[#73152C] text-white rounded-full px-6 py-2 font-bold text-sm transition-colors"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
}
