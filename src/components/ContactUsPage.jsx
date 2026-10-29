"use client";

import React from 'react';
import { PageBanner } from './PageBanner.jsx';

export function ContactUsPage() {
  return (
    <div className="w-full bg-[#FAF4F7] min-h-screen selection:bg-[#8B1538] selection:text-white">
      <PageBanner 
        backgroundImage="/blog-hero-bg.webp"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]}
        title={
          <>
            Contact Viskool for Online Courses & Learning Support
          </>
        }
        subtitle={
          <>
            Talk to our experts about school tuition, exam coaching or career skills, and find the right course for your goal.
          </>
        }
        titleClassName="leading-[1.15] sm:leading-[1.2] lg:whitespace-nowrap"
        subtitleClassName="max-w-[1050px] leading-[1.5] sm:leading-[1.6]"
      />

      <section className="w-full bg-white py-12 sm:py-16 lg:py-20 font-sans border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
            CONTACT US
          </p>
          <h2 className="mb-4 text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px]">
            We'd Love to Hear From <span className="text-[#8B1538]">You</span>
          </h2>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-gray-600 sm:text-lg">
            Placeholder content for Contact Us page. Details will be provided later.
          </p>
        </div>
      </section>
      
      {/* Placeholder for future content */}
      <section className="w-full bg-[#FAF4F7] py-16 sm:py-20 lg:py-24 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[400px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-3xl bg-white">
          <p className="text-gray-500 font-medium text-lg">Contact Form & Details Placeholder Area</p>
        </div>
      </section>
    </div>
  );
}
