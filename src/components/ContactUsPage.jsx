"use client";

import React from 'react';
import { PageBanner } from './PageBanner.jsx';
import { IconMapPin, IconPhone, IconMail, IconWorld, IconClock } from '@tabler/icons-react';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Contact Info */}
            <div className="bg-[#FAF4F7] rounded-3xl p-8 sm:p-10 lg:p-12 shadow-sm border border-gray-100 flex flex-col h-full justify-center">
              <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#102A43] mb-8 lg:mb-10 leading-tight">
                Our Head Office Address
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <IconMapPin size={24} className="text-[#8B1538]" stroke={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#102A43] text-lg mb-1.5">Address</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">
                      3rd Floor, Capital Towers, Opposite Secretariat,<br />
                      Statue, Palayam, Thiruvananthapuram,<br />
                      Keralam 695001
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <IconWorld size={24} className="text-[#8B1538]" stroke={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#102A43] text-lg mb-1.5">Website</h3>
                    <a href="https://www.viskool.com" target="_blank" rel="noopener noreferrer" className="text-[#1769D2] hover:text-[#8B1538] hover:underline leading-relaxed text-[15px] sm:text-base font-medium transition-colors">
                      www.viskool.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <IconPhone size={24} className="text-[#8B1538]" stroke={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#102A43] text-lg mb-1.5">Phone</h3>
                    <a href="tel:+919876543210" className="text-[#1769D2] hover:text-[#8B1538] hover:underline leading-relaxed text-[15px] sm:text-base font-medium transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <IconMail size={24} className="text-[#8B1538]" stroke={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#102A43] text-lg mb-1.5">Email</h3>
                    <a href="mailto:info@viskool.com" className="text-[#1769D2] hover:text-[#8B1538] hover:underline leading-relaxed text-[15px] sm:text-base font-medium transition-colors">
                      info@viskool.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <IconClock size={24} className="text-[#8B1538]" stroke={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#102A43] text-lg mb-1.5">Working Hours</h3>
                    <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map Placeholder */}
            <div className="w-full h-full min-h-[400px] lg:min-h-full bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 relative flex flex-col items-center justify-center group">
              <img 
                src="/images/contact-map.jpg" 
                alt="Viskool Head Office Map Location" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
