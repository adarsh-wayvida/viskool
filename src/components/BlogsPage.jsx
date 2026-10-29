"use client";

import React, { useState } from 'react';
import { PageBanner } from './PageBanner.jsx';
import { IconSearch } from '@tabler/icons-react';

const CATEGORIES = [
  'Digital Marketing',
  'High Court of Kerala',
  'JEE',
  'Kerala PSC',
  'Language Skill',
  'NEET',
  'School Tuitions',
  'Upskill courses'
];

export function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('Digital Marketing');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full bg-[#FAF4F7] min-h-screen selection:bg-[#8B1538] selection:text-white">
      <PageBanner 
        backgroundImage="/blog-hero-bg.webp"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' }
        ]}
        title={
          <>
            Learning Resources, Career Insights &<br className="hidden sm:block" /> Education Tips At Viskool Learning
          </>
        }
        subtitle={
          <>
            Explore practical learning tips, career guidance, course insights, and education resources<br className="hidden sm:block" /> to help students and professionals move forward with confidence.
          </>
        }
        titleClassName="leading-[1.15] sm:leading-[1.2]"
        subtitleClassName="max-w-[1050px] leading-[1.5] sm:leading-[1.6]"
      />

      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 font-sans border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
            INSIGHTS & RESOURCES
          </p>
          <h2 className="mb-4 text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px]">
            Explore Our <span className="text-[#8B1538]">Blogs</span>
          </h2>
          <p className="max-w-2xl text-base font-bold leading-relaxed text-gray-600 sm:text-lg">
            Learning Resources, Career Insights & Education Tips
          </p>
        </div>
      </section>

      {/* Search & Categories Section */}
      <section className="w-full bg-white pb-12 sm:pb-16 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          {/* Search Bar */}
          <div className="relative w-full max-w-xl mb-8 sm:mb-10">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 sm:h-14 pl-6 pr-14 rounded-full border border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B1538]/20 focus:border-[#8B1538] transition-all shadow-sm text-sm sm:text-base"
            />
            <button
              type="button"
              className="absolute right-1.5 top-1.5 bottom-1.5 w-10 sm:w-11 bg-[#15803D] hover:bg-[#166534] text-white rounded-full flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
              aria-label="Search"
            >
              <IconSearch size={20} stroke={2.5} />
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap xl:flex-nowrap justify-center gap-2 sm:gap-3 w-full mx-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 outline-none focus:outline-none focus:ring-0 [-webkit-tap-highlight-color:transparent] border ${
                  activeCategory === category
                    ? 'bg-[#8B1538] text-white border-[#8B1538] shadow-md'
                    : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-200 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
