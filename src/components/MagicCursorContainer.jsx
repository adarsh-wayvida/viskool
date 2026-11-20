"use client";
import React from 'react';

export default function MagicCursorContainer({ children }) {
  return (
    <div className="relative w-full max-w-none rounded-[32px] border border-[#8B1538]/5 bg-[#FFFDFD] px-6 py-8 shadow-sm sm:px-8 sm:py-10 lg:px-10 lg:py-12 overflow-hidden hover:shadow-md transition-shadow duration-300 group">
      {/* Actual Content Wrapper */}
      <div className="relative z-10 pointer-events-auto">
        {children}
      </div>
    </div>
  );
}
