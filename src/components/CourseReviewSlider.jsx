"use client";

import React, { useState } from "react";

const REVIEWS = [
  "/images/reviews/review-1.png",
  "/images/reviews/review-2.png",
  "/images/reviews/review-3.png",
  "/images/reviews/review-4.png",
  "/images/reviews/review-5.png",
  "/images/reviews/review-6.png",
  "/images/reviews/review-7.png",
  "/images/reviews/review-8.png",
  "/images/reviews/review-9.png",
  "/images/reviews/review-10.png",
];

export default function CourseReviewSlider() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="relative w-full overflow-hidden group py-4">
        <div 
          className="flex w-max items-stretch animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full gap-6 px-4"
          style={{ animationDuration: '140s' }}
        >
          {[...REVIEWS, ...REVIEWS].map((src, i) => (
            <div
              key={i}
              className="w-[350px] sm:w-[450px] md:w-[500px] h-auto p-3 rounded-2xl bg-white border border-gray-200 shrink-0 shadow-sm flex flex-col cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setSelectedImage(src)}
            >
              <div className="w-full flex-1 overflow-hidden rounded-[10px] bg-[#22242a] flex items-start justify-center pointer-events-none">
                <img 
                  src={src} 
                  alt={`Course Review ${i + 1}`} 
                  className="w-full h-full object-contain object-top block" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#22242a] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Review Modal" 
              className="w-full h-auto max-h-[85vh] object-contain" 
            />
          </div>
        </div>
      )}
    </>
  );
}
