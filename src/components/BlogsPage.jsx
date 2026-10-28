import React from 'react';
import { PageBanner } from './PageBanner.jsx';

export function BlogsPage() {
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
          <p className="max-w-2xl text-base font-normal leading-relaxed text-gray-600 sm:text-lg">
            Insights, tips, and stories from the world of education and learning. Stay updated with the best practices and updates in education.
          </p>
        </div>
      </section>
    </div>
  );
}
