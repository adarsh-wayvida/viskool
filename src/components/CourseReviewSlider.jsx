"use client";

import React from "react";

const PLACEHOLDERS = [1, 2, 3, 4, 5, 6];

export default function CourseReviewSlider() {
  return (
    <div className="relative w-full overflow-hidden group">
      <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:overflow-x-auto motion-reduce:w-full gap-6 px-4">
        {[...PLACEHOLDERS, ...PLACEHOLDERS].map((n, i) => (
          <div
            key={i}
            className="w-80 aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 font-medium shrink-0"
          >
            Review Screenshot {n}
          </div>
        ))}
      </div>
    </div>
  );
}