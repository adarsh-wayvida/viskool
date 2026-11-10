'use client';

import React, { useEffect, useRef, useState } from 'react';

function parseStatValue(str) {
  const match = str.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match) return { prefix: '', num: 0, suffix: str, isFloat: false };
  const prefix = match[1];
  const numStr = match[2].replace(/,/g, '');
  const num = parseFloat(numStr);
  const suffix = match[3];
  const isFloat = match[2].includes('.');
  return { prefix, num, suffix, isFloat };
}

function formatValue(currentNum, parsed) {
  let numStr;
  if (parsed.isFloat) {
    numStr = currentNum.toFixed(1);
  } else {
    numStr = Math.floor(currentNum).toLocaleString('en-US');
  }
  return `${parsed.prefix}${numStr}${parsed.suffix}`;
}

export const AnimatedStatValue = ({ value, index }) => {
  const ref = useRef(null);
  // Start with the final value so the number is always present in the DOM
  // (including the server-rendered HTML) and never stuck at opacity 0.
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setDisplayValue(value);
      return;
    }

    const parsed = parseStatValue(value);
    const duration = 1500;
    const delay = index * 100;
    let rafId = null;
    let started = false;
    let startTime = null;

    const animate = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = timestamp - startTime - delay;

      if (progress < 0) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      const percentage = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setDisplayValue(formatValue(parsed.num * easeOut, parsed));

      if (percentage < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    const startAnimation = () => {
      if (started) return;
      started = true;
      setDisplayValue(formatValue(0, parsed));
      rafId = requestAnimationFrame(animate);
    };

    // No IntersectionObserver (very old browsers) → show final value.
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          startAnimation();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [value, index]);

  return (
    <div ref={ref} className="relative inline-flex justify-center items-center w-full whitespace-nowrap">
      <span className="whitespace-nowrap">{displayValue}</span>
    </div>
  );
};

export const Statistics = () => {
  const stats = [
    {
      value: "15,000+",
      title: "Students & Professionals",
      subtitle: "ACTIVE LEARNERS",
      bgColor: "bg-[#F4F7F5]" // Pale sage
    },
    {
      value: "95%",
      title: "Consistent Success Rate",
      subtitle: "COURSE COMPLETION RATE",
      bgColor: "bg-[#FDF3F4]" // Pale blush rose
    },
    {
      value: "65%",
      title: "Career & Score Growth",
      subtitle: "SALARY HIKE / RANK BOOST",
      bgColor: "bg-[#F5F2F8]" // Pale muted lavender
    },
    {
      value: "4.9/5 ★",
      title: "Rated Across Programs",
      subtitle: "PARENT & STUDENT RATING",
      bgColor: "bg-[#FCF5F0]" // Pale warm apricot
    }
  ];

  return (
    <section className="py-6 lg:py-8 bg-white relative z-0">
      
      {/* Decorative ambient background glows for depth */}
      <div className="absolute top-1/2 left-0 sm:left-1/4 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#8B1538]/[0.03] rounded-full blur-[80px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-0 sm:right-1/4 -translate-y-1/2 w-[30rem] h-[30rem] bg-[#F4F7F5] rounded-full blur-[80px] pointer-events-none -z-10 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Soft underlying tray to anchor the cards */}
        <div className="absolute inset-0 bg-gray-50/50 rounded-[2.5rem] scale-[0.98] translate-y-3 -z-10 border border-gray-100 hidden lg:block"></div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 items-stretch">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`${stat.bgColor} rounded-3xl p-4 flex flex-col items-center justify-center text-center border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full relative group`}
            >
              {/* Subtle top inner highlight for 3D card effect on hover */}
              <div className="absolute inset-0 rounded-3xl border-t-2 border-white/80 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="text-2xl md:text-3xl font-extrabold text-[#8B1538] mb-4 tracking-tight leading-none relative z-10 group-hover:scale-105 transition-transform duration-300">
                <AnimatedStatValue value={stat.value} index={idx} />
              </div>
              <div className="text-[#1A1A1A] text-xs md:text-sm font-bold leading-snug mb-2.5 relative z-10">
                {stat.title}
              </div>
              <div className="text-[#666666] text-[11px] font-bold tracking-widest uppercase relative z-10 lg:whitespace-nowrap">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
