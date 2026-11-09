"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/student_banner_demo.jpg",
  "/images/student_banner_demo.jpg",
  "/images/student_banner_demo.jpg",
];

export default function StudentSuccessSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative overflow-hidden w-full max-w-7xl mx-auto my-16 rounded-2xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="w-full flex-shrink-0 relative">
            <Image src={src} alt={`Student success banner ${i + 1}`} width={1920} height={1080} className="w-full h-auto block" />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md z-10 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md z-10 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrentIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === currentIndex ? "bg-[#8B1538]" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}