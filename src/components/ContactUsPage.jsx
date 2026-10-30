"use client";

import React from 'react';
import { PageBanner } from './PageBanner.jsx';
import { FAQSection } from './FAQSection.jsx';
import { IconMapPin, IconPhone, IconMail, IconWorld, IconClock, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconBrandLinkedin } from '@tabler/icons-react';

const contactFAQs = [
  {
    question: "Where is Viskool's head office located?",
    answer: "Our head office is at 3rd Floor, Capital Towers, Statue, Opp. Secretariat, Trivandrum, Kerala 695001. You can find it on the map above."
  },
  {
    question: "Are Viskool's classes online or offline?",
    answer: "All classes are live and online, so you can learn from home anywhere in India or the Gulf. The office is for counselling and enquiries."
  },
  {
    question: "Can I visit the office to speak to someone in person?",
    answer: "Yes. Call us to fix a time, and a counsellor will meet you, explain the courses, and answer your questions."
  },
  {
    question: "What are your office and support hours?",
    answer: "We are available Monday to Saturday, 10:00 AM to 6:00 PM (Sunday: Closed). You can also reach us by phone, WhatsApp, or email outside these hours, and we'll get back to you."
  },
  {
    question: "I live outside of Kerala. Can I still join?",
    answer: "Yes. We teach students across India and the GCC, including Dubai (UAE), Qatar, Saudi Arabia, and Oman, with timings that suit your region."
  },
  {
    question: "Do you have centres in other cities?",
    answer: "Viskool is an online learning platform, so students in every city learn with the same mentors through live classes."
  },
  {
    question: "How can I reach Viskool quickly?",
    answer: "Call or WhatsApp us on +91 8943384338, email info@viskool.com, or fill in the form below, and we will call you back."
  },
  {
    question: "Can I attend a free demo class without visiting the office?",
    answer: "Yes. Book it online through the form below, and we'll share the class link."
  }
];

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

      <section className="w-full py-6 sm:py-8 lg:py-10 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
            
            {/* Left: Contact Info */}
            <div className="bg-[#FAF4F7] rounded-3xl p-3 sm:p-3.5 lg:p-4 shadow-sm border border-gray-100 flex flex-col h-full justify-center">
              <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-[#102A43] mb-4 lg:mb-5 leading-tight">
                Our Head Office Address
              </h2>
              
              <div className="space-y-3 sm:space-y-4">
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
                      Monday - Saturday: 9:00 AM - 9:00 PM<br />
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
      <section className="w-full pt-1 sm:pt-1 lg:pt-1.5 pb-8 sm:pb-10 lg:pb-12 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            
            {/* Facebook Card */}
            <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#8B1538] flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110">
                <IconBrandFacebook size={28} className="text-[#8B1538]" stroke={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-3">Follow On Facebook</h3>
              <a href="#" className="mt-auto px-8 py-2.5 bg-[#8B1538] text-white font-bold text-sm rounded-full transition-all duration-300 hover:shadow-md hover:bg-[#73152C]">
                FOLLOW
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#8B1538] flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110">
                <IconBrandInstagram size={28} className="text-[#8B1538]" stroke={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-3">Follow On Instagram</h3>
              <a href="#" className="mt-auto px-8 py-2.5 bg-[#8B1538] text-white font-bold text-sm rounded-full transition-all duration-300 hover:shadow-md hover:bg-[#73152C]">
                FOLLOW
              </a>
            </div>

            {/* YouTube Card */}
            <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#8B1538] flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110">
                <IconBrandYoutube size={28} className="text-[#8B1538]" stroke={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-3">Subscribe On YouTube</h3>
              <a href="#" className="mt-auto px-8 py-2.5 bg-[#8B1538] text-white font-bold text-sm rounded-full transition-all duration-300 hover:shadow-md hover:bg-[#73152C]">
                SUBSCRIBE
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-full bg-white border-2 border-[#8B1538] flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110">
                <IconBrandLinkedin size={28} className="text-[#8B1538]" stroke={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#102A43] mb-3">Follow On LinkedIn</h3>
              <a href="#" className="mt-auto px-8 py-2.5 bg-[#8B1538] text-white font-bold text-sm rounded-full transition-all duration-300 hover:shadow-md hover:bg-[#73152C]">
                FOLLOW
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={contactFAQs} 
        onActionClick={(action) => console.log(action)} 
        title={<>Frequently Asked <span className="text-[#8B1538] leading-[1.2]">Questions</span></>} 
      />

      {/* Registration Form Section */}
      <section className="w-full py-8 sm:py-10 lg:py-12 font-sans bg-[#FAF4F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-[#102A43] leading-[1.2] tracking-tight">
              Ready To Get Started? <span className="text-[#8B1538]">Register Today</span>
            </h2>
          </div>

          <div className="bg-white rounded-[32px] p-3 sm:p-5 lg:p-6 shadow-sm border border-gray-100">
            <form className="space-y-3 lg:space-y-4">
              
              {/* Name - Full Width */}
              <div className="space-y-2.5">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-2xl bg-[#F6F4F7] border-transparent focus:bg-white focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 transition-all outline-none placeholder:text-gray-400" />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                <div className="space-y-2.5">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Email</label>
                  <input type="email" placeholder="Enter valid email id" className="w-full px-5 py-4 rounded-2xl bg-[#F6F4F7] border-transparent focus:bg-white focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 transition-all outline-none placeholder:text-gray-400" />
                </div>
                
                {/* Phone Group */}
                <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] gap-2">
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Code <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="+91" className="w-full px-5 py-4 rounded-2xl bg-[#F6F4F7] border-transparent focus:bg-white focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 transition-all outline-none placeholder:text-gray-400" />
                  </div>
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number <span className="text-red-500">*</span></label>
                    <input type="tel" className="w-full px-5 py-4 rounded-2xl bg-[#F6F4F7] border-transparent focus:bg-white focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 transition-all outline-none" />
                  </div>
                </div>
              </div>

              {/* District & Courses Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                <div className="space-y-2.5">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">District <span className="text-red-500">*</span></label>
                  <select defaultValue="" className="w-full px-5 py-4 rounded-2xl bg-[#F6F4F7] border-transparent focus:bg-white focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 transition-all outline-none text-gray-500 appearance-none">
                    <option value="" disabled>Select District</option>
                  </select>
                </div>
                <div className="space-y-2.5">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Courses <span className="text-red-500">*</span></label>
                  <select defaultValue="" className="w-full px-5 py-4 rounded-2xl bg-[#F6F4F7] border-transparent focus:bg-white focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 transition-all outline-none text-gray-500 appearance-none">
                    <option value="" disabled>Select Class</option>
                  </select>
                </div>
              </div>

              <div className="pt-6">
                <button type="button" className="w-full px-10 py-4 bg-[#8B1538] text-white font-bold text-[15px] rounded-2xl hover:bg-[#73122E] transition-colors duration-200 shadow-sm">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
