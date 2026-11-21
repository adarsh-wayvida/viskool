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
      {/* Changed items-center to items-stretch so all cards grow to match the tallest one */}
      <div className="flex w-max items-stretch animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full gap-6 px-4">
        {[...REVIEWS, ...REVIEWS].map((src, i) => (
          <div
            key={i}
            // Added flex flex-col so the inner div can fill the vertical space
            className="w-[350px] sm:w-[450px] md:w-[500px] h-auto p-3 rounded-2xl bg-white border border-gray-200 shrink-0 shadow-sm flex flex-col"
          >
            {/* Added flex-1 to stretch and fill the remaining card height */}
            <div className="w-full flex-1 overflow-hidden rounded-[10px] bg-[#22242a] flex items-start justify-center">
              {/* Used object-contain and h-full to fit the image without stretching it */}
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
console.log('CourseReviewSlider updated with uniform heights!');
