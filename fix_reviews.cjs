const fs = require('fs');
const file = 'src/components/CourseReviewSlider.jsx';

const content = `"use client";

import React from "react";

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
  return (
    <div className="relative w-full overflow-hidden group py-4">
      <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full gap-6 px-4">
        {[...REVIEWS, ...REVIEWS].map((src, i) => (
          <div
            key={i}
            className="w-80 aspect-square p-3 overflow-hidden rounded-2xl bg-white border border-gray-200 shrink-0 shadow-sm"
          >
            <div className="w-full h-full overflow-hidden rounded-[10px] bg-[#22242a] flex items-start justify-center">
              <img 
                src={src} 
                alt={\`Course Review \${i + 1}\`} 
                className="w-full h-full object-contain object-top block" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
`;

fs.writeFileSync(file, content, 'utf8');
console.log('CourseReviewSlider updated successfully!');
