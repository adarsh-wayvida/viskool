"use client";

import React from 'react';
import { PageBanner } from './PageBanner.jsx';
import { IconMapPin, IconPhone, IconMail, IconWorld, IconClock, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react';

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

      {/* Social Media Section */}
      <section className="w-full bg-[#FAF4F7] pb-16 sm:pb-20 lg:pb-24 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Facebook Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-full bg-[#FAF4F7] flex items-center justify-center mb-6 group-hover:bg-[#8B1538] transition-colors duration-300">
                <IconBrandFacebook size={32} className="text-[#8B1538] group-hover:text-white transition-colors duration-300" stroke={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#102A43] mb-6">Follow On Facebook</h3>
              <a href="#" className="mt-auto px-8 py-3 bg-[#FCF8F9] text-[#8B1538] font-bold text-sm rounded-full transition-all duration-200 hover:bg-[#8B1538] hover:text-white border border-[#F4E1E6] hover:border-[#8B1538]">
                FOLLOW
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-full bg-[#FAF4F7] flex items-center justify-center mb-6 group-hover:bg-[#8B1538] transition-colors duration-300">
                <IconBrandInstagram size={32} className="text-[#8B1538] group-hover:text-white transition-colors duration-300" stroke={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#102A43] mb-6">Follow On Instagram</h3>
              <a href="#" className="mt-auto px-8 py-3 bg-[#FCF8F9] text-[#8B1538] font-bold text-sm rounded-full transition-all duration-200 hover:bg-[#8B1538] hover:text-white border border-[#F4E1E6] hover:border-[#8B1538]">
                FOLLOW
              </a>
            </div>

            {/* YouTube Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-full bg-[#FAF4F7] flex items-center justify-center mb-6 group-hover:bg-[#8B1538] transition-colors duration-300">
                <IconBrandYoutube size={32} className="text-[#8B1538] group-hover:text-white transition-colors duration-300" stroke={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#102A43] mb-6">Subscribe On Youtube</h3>
              <a href="#" className="mt-auto px-8 py-3 bg-[#FCF8F9] text-[#8B1538] font-bold text-sm rounded-full transition-all duration-200 hover:bg-[#8B1538] hover:text-white border border-[#F4E1E6] hover:border-[#8B1538]">
                SUBSCRIBE
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
