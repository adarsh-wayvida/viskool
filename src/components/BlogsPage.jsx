"use client";

import React, { useState } from 'react';
import { PageBanner } from './PageBanner.jsx';
import { IconSearch, IconCalendarEvent, IconArrowRight, IconMail } from '@tabler/icons-react';

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

const MOCK_BLOGS = [
  {
    image: '/images/blogs/1.webp',
    category: 'DIGITAL MARKETING',
    title: 'No.1 Digital Marketing Course in Trivandrum 2026: What You Wi...',
    description: 'Find the best digital marketing course in Trivandrum and learn SEO, ads, and social...',
    author: 'AKHIL',
    date: '19 October 2026'
  },
  {
    image: '/images/blogs/2.webp',
    category: 'DIGITAL MARKETING',
    title: 'No.1 Digital Marketing Course in Trivandrum 2026: What You Wi...',
    description: 'Find the best digital marketing course in Trivandrum and learn SEO, ads, and social...',
    author: 'AKHIL',
    date: '19 October 2026'
  },
  {
    image: '/images/blogs/3.webp',
    category: 'DIGITAL MARKETING',
    title: 'No.1 Digital Marketing Course in Trivandrum 2026: What You Wi...',
    description: 'Find the best digital marketing course in Trivandrum and learn SEO, ads, and social...',
    author: 'AKHIL',
    date: '19 October 2026'
  },
  {
    image: '/images/blogs/4.webp',
    category: 'DIGITAL MARKETING',
    title: 'No.1 Digital Marketing Course in Trivandrum 2026: What You Wi...',
    description: 'Find the best digital marketing course in Trivandrum and learn SEO, ads, and social...',
    author: 'AKHIL',
    date: '19 October 2026'
  },
  {
    image: '/images/blogs/5.webp',
    category: 'DIGITAL MARKETING',
    title: 'No.1 Digital Marketing Course in Trivandrum 2026: What You Wi...',
    description: 'Find the best digital marketing course in Trivandrum and learn SEO, ads, and social...',
    author: 'AKHIL',
    date: '19 October 2026'
  },
  {
    image: '/images/blogs/6.webp',
    category: 'DIGITAL MARKETING',
    title: 'No.1 Digital Marketing Course in Trivandrum 2026: What You Wi...',
    description: 'Find the best digital marketing course in Trivandrum and learn SEO, ads, and social...',
    author: 'AKHIL',
    date: '19 October 2026'
  }
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
              className="w-full h-12 sm:h-14 pl-6 pr-14 rounded-full border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B1538]/20 focus:border-[#8B1538] transition-all shadow-sm text-sm sm:text-base"
            />
            <button
              type="button"
              className="absolute right-1.5 top-1.5 bottom-1.5 w-10 sm:w-11 bg-[#8B1538] hover:bg-[#73152C] text-white rounded-full flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
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

      {/* Blog Grid Section */}
      <section className="w-full bg-[#FAF4F7] pb-8 sm:pb-10 lg:pb-12 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {MOCK_BLOGS.map((blog, idx) => (
              <div key={idx} className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                {/* Image Placeholder */}
                <div className="aspect-[1.7] w-full bg-gray-100 relative overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  {/* Category Pill */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#F1E0E5] text-[#8B1538] text-xs font-bold rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[19px] sm:text-[21px] font-bold text-[#102A43] leading-[1.3] mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6 line-clamp-2">
                    {blog.description}
                  </p>
                  
                  {/* Meta */}
                  <div className="mt-auto flex items-center text-gray-500 text-sm mb-5">
                    <span className="mr-4">{blog.author}</span>
                    <div className="flex items-center gap-1.5">
                      <IconCalendarEvent size={16} stroke={1.5} />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  
                  {/* Read More */}
                  <div>
                    <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center text-[#8B1538] font-bold text-[17px] hover:text-[#72112D] transition-colors group-hover:underline">
                      Read More <IconArrowRight size={20} stroke={2.5} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Area */}
          <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center">
            <button className="inline-flex items-center justify-center rounded-full bg-white border border-gray-200 px-8 py-3 text-sm font-bold text-gray-700 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 sm:py-3.5 sm:text-[15px] mb-4">
              Load more
            </button>
            <p className="text-gray-500 text-sm font-medium">Showing 6 of 98 posts</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-transparent pt-0 pb-16 sm:pb-20 lg:pb-24 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
            STAY UPDATED
          </p>
          <h2 className="mb-4 text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px]">
            Subscribe to Our <span className="text-[#8B1538]">Newsletter</span>
          </h2>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-gray-600 sm:text-lg mb-8 sm:mb-10">
            Get the latest articles and education insights delivered directly to your inbox
          </p>
          
          <form className="relative w-full max-w-lg flex items-center mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full h-14 sm:h-16 pl-6 pr-[140px] sm:pr-[160px] rounded-full border border-gray-200 bg-[#FCF8F9] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B1538]/20 focus:border-[#8B1538] transition-all shadow-sm text-sm sm:text-base"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-5 sm:px-7 bg-[#8B1538] hover:bg-[#73152C] text-white rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer active:scale-95"
            >
              <span className="text-sm sm:text-[15px] font-bold">Subscribe</span>
              <IconMail size={18} stroke={2.5} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
