"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import SyllabusTabs from "../../../components/SyllabusTabs";
import CourseReviewSlider from "../../../components/CourseReviewSlider";
import DigitalMarketingLeadForm from "../../../components/DigitalMarketingLeadForm";
import FloatingCourseCTA from "../../../components/FloatingCourseCTA";
import StickyCourseNav from "../../../components/StickyCourseNav.jsx";
import MagicCursorContainer from "../../../components/MagicCursorContainer.jsx";
import {
  IconArrowLeft,
  IconCrown,
  IconUsers,
  IconRoute,
  IconSpeakerphone,
  IconTargetArrow,
  IconChartBar,
  IconSparkles,
  IconCertificate,
  IconCurrencyRupee,
  IconAd,
  IconPointer,
  IconEye,
  IconUserDollar,
  IconFilterCheck,
  IconShare, IconCalendarEvent, IconDeviceDesktop, IconClock, IconSchool, IconVideo, IconBriefcase } from "@tabler/icons-react";
import { Laptop, Wifi, BookOpen, Monitor, Clock, Sparkles } from "lucide-react";


const LEARNING_GOALS = [
  {
    title: "Customer Journey",
    icon: IconRoute,
    headerClass: "bg-[#CDEBFA]",
    iconClass: "text-[#0B3D6B]",
    text: "Explain how brands get customers online, from the first click to the final sale.",
  },
  {
    title: "Job-Ready Skills",
    icon: IconSpeakerphone,
    headerClass: "bg-[#F8CDD2]",
    iconClass: "text-[#8B2A38]",
    text: "Build job-ready skills in ads, SEO, content, and reporting.",
  },
  {
    title: "Campaign Management",
    icon: IconTargetArrow,
    headerClass: "bg-[#FFD59B]",
    iconClass: "text-[#8A4A03]",
    text: "Set up and manage campaigns with a small budget.",
  },
  {
    title: "Reports & Insights",
    icon: IconChartBar,
    headerClass: "bg-[#DED0F4]",
    iconClass: "text-[#4A2F7A]",
    text: "Read reports and explain results in simple words.",
  },
  {
    title: "AI-Powered Workflow",
    icon: IconSparkles,
    headerClass: "bg-[#BFEDEA]",
    iconClass: "text-[#075E58]",
    text: "Use AI tools to work faster without losing quality.",
  },
  {
    title: "Career Portfolio",
    icon: IconCertificate,
    headerClass: "bg-[#DDEFCB]",
    iconClass: "text-[#2F5E1A]",
    text: "Finish with a portfolio, certificate, and interview practice.",
  },
];

const MARKETING_METRICS = [
  {
    name: "ROI",
    description: "Whether the money you spent brought more money back.",
    example: "₹10,000 spent, ₹15,000 earned = 50% return",
    icon: IconCurrencyRupee,
    iconClass: "bg-[#DCEEFF] text-[#2563A8]",
  },
  {
    name: "ROAS",
    description: "Sales earned for every rupee spent on ads.",
    example: "₹5 in sales for every ₹1 of ad spend",
    icon: IconAd,
    iconClass: "bg-[#FFE0DD] text-[#D95C50]",
  },
  {
    name: "CPC",
    description: "Cost of one click on your ad.",
    example: "₹10 per click",
    icon: IconPointer,
    iconClass: "bg-[#FFE8C5] text-[#D97706]",
  },
  {
    name: "CTR",
    description: "Share of people who click after seeing your ad.",
    example: "3 clicks from 100 views = 3%",
    icon: IconEye,
    iconClass: "bg-[#E7DDF7] text-[#7655A8]",
  },
  {
    name: "CPA",
    description: "Cost of getting one lead or customer.",
    example: "₹200 per enquiry",
    icon: IconUserDollar,
    iconClass: "bg-[#D4F1EE] text-[#0F8F88]",
  },
  {
    name: "Conversion Rate",
    description: "Share of visitors who take the action you want.",
    example: "5 enquiries from 100 visitors = 5%",
    icon: IconFilterCheck,
    iconClass: "bg-[#E3F1D6] text-[#5D8C3A]",
  },
];

export default function AiIntegratedDigitalMarketingPage() {
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);
  const openContact = (label, details) => {
    window.dispatchEvent(
      new CustomEvent("openContactModal", {
        detail: details || { title: label },
      }),
    );
  };

  const handleShare = async () => {
    const shareData = {
      title: "Best Digital Marketing Course in Kerala | Viskool",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
      }
    } catch {
      // User dismissed the share sheet or sharing was blocked.
    }
  };

  return (
    <>
            <section className="relative w-full bg-[#FBFCFF] font-sans pt-[60px] pb-[10px] lg:pt-[80px] lg:pb-[20px] overflow-hidden" id="hero">
        <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">
          
          {/* Left Column */}
          <div className="flex flex-col items-start w-full lg:w-1/2">
            
            {/* Back to courses */}
            <a
              href="/#courses"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#616161] transition-colors hover:text-[#841531] mb-6"
            >
              <IconArrowLeft className="h-4 w-4" stroke={2} aria-hidden="true" />
              Back to courses
            </a>

            {/* Badges */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#FFF9E5] border border-[#FFE8A1] rounded-full">
                <IconCrown size={14} className="text-[#D97706]" stroke={2.5} />
                <span className="text-[#B45309] text-[12px] font-semibold">Premium</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-[#ECFDF5] border border-[#A7F3D0] rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                <span className="text-[#047857] text-[12px] font-semibold">Live</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-[#1A1A1A] font-bold text-[30px] leading-[37.5px] tracking-[-0.8px] mb-6">
              Master AI-Integrated Digital Marketing in 90 Days & Launch Your Dream Career!
            </h1>

            {/* Pricing */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#841531] font-bold text-[30px] leading-[30px]">&#8377;15,000</span>
              <span className="text-[#616161] font-medium text-[20px] line-through decoration-1">&#8377;20,000</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mb-8">
              <button
                type="button"
                onClick={() =>
                  openContact("Enroll Now", {
                    source: "AI Integrated Digital Marketing Course",
                  })
                }
                className="px-8 py-3.5 bg-[#841531] text-white font-semibold text-[16px] leading-[24px] rounded-full transition-transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                Enroll Now
              </button>
              <button
                type="button"
                className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                aria-label="Share"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>

            {/* Ratings & Students */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-[#1A1A1A] font-semibold text-[14px]">4.7</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="14" height="14" viewBox="0 0 20 20" fill="#FBBF24">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#616161] text-[14px] leading-[20px] ml-1">(1 rating)</span>
              </div>
              <div className="flex items-center gap-2 text-[#616161] text-[14px] leading-[20px]">
                <IconUsers size={18} stroke={1.5} />
                <span>2+ Students</span>
              </div>
            </div>

          </div>

          {/* Right Column: Video Preview */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] aspect-[16/9] rounded-[24px] overflow-hidden group cursor-pointer shadow-lg">
              {/* Thumbnail */}
              <img src="/images/digital-marketing-preview.webp" alt="Course Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              
              
            </div>
          </div>

        </div>
      </section>

      <div className="block">
        <StickyCourseNav />
      </div>
      <section id="course-overview" className="bg-[#FCF8F9] px-4 pb-5 pt-5 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7">
          <div className="mx-auto max-w-7xl">
            <MagicCursorContainer>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full border-[1.5px] border-dashed border-gray-200 opacity-60 pointer-events-none"></div>
                <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-gradient-to-bl from-green-100/50 to-blue-50/50 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-100/40 to-pink-50/40 pointer-events-none"></div>

                <div className="relative mb-8 flex items-center justify-between w-full">
                    <h3 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px] whitespace-nowrap pr-4 relative z-10">
                      Course <span className="text-[#8B1538]">Overview</span>
                    </h3>
                    
                  </div>
                
                <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 w-full">
                  {/* 1. Duration */}
                  <div className="flex flex-col items-center justify-center text-center gap-3 p-4 md:p-5 rounded-[24px] bg-[#EEF6FF] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-2xl bg-[#1A73E8] text-white shadow-sm">
                      <IconCalendarEvent size={24} stroke={1.5} />
                    </div>
                    <div className="flex flex-col items-center mt-1">
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">90 Days</p>
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">Duration</p>
                    </div>
                  </div>
                  {/* 2. Learning Mode */}
                  <div className="flex flex-col items-center justify-center text-center gap-3 p-4 md:p-5 rounded-[24px] bg-[#E6FBF7] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-2xl bg-[#12B8A6] text-white shadow-sm">
                      <IconDeviceDesktop size={24} stroke={1.5} />
                    </div>
                    <div className="flex flex-col items-center mt-1">
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">Live Online</p>
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">Learning Mode</p>
                    </div>
                  </div>
                  {/* 3. Live Training */}
                  <div className="flex flex-col items-center justify-center text-center gap-3 p-4 md:p-5 rounded-[24px] bg-[#FEF2F2] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-2xl bg-[#F25C54] text-white shadow-sm">
                      <IconClock size={24} stroke={1.5} />
                    </div>
                    <div className="flex flex-col items-center mt-1">
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">90 Hours</p>
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">Live Training</p>
                    </div>
                  </div>
                  {/* 4. Internship */}
                  <div className="flex flex-col items-center justify-center text-center gap-3 p-4 md:p-5 rounded-[24px] bg-[#FFF8E6] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-2xl bg-[#F59E0B] text-white shadow-sm">
                      <IconSchool size={24} stroke={1.5} />
                    </div>
                    <div className="flex flex-col items-center mt-1">
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">1 Month</p>
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">Internship</p>
                    </div>
                  </div>
                  {/* 5. Recording Access */}
                  <div className="flex flex-col items-center justify-center text-center gap-3 p-4 md:p-5 rounded-[24px] bg-[#F5F0FF] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-2xl bg-[#A855F7] text-white shadow-sm">
                      <IconVideo size={24} stroke={1.5} />
                    </div>
                    <div className="flex flex-col items-center mt-1">
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">6 Months</p>
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">Recording Access</p>
                    </div>
                  </div>
                  {/* 6. Community Support */}
                  <div className="flex flex-col items-center justify-center text-center gap-3 p-4 md:p-5 rounded-[24px] bg-[#EAF8F0] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-2xl bg-[#22C55E] text-white shadow-sm">
                      <IconUsers size={24} stroke={1.5} />
                    </div>
                    <div className="flex flex-col items-center mt-1">
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">1 Year</p>
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">Community Support</p>
                    </div>
                  </div>
                  {/* 7. Certification */}
                  <div className="flex flex-col items-center justify-center text-center gap-3 p-4 md:p-5 rounded-[24px] bg-[#FFF0F5] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-2xl bg-[#EC4899] text-white shadow-sm">
                      <IconCertificate size={24} stroke={1.5} />
                    </div>
                    <div className="flex flex-col items-center mt-1">
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">Dual</p>
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">Certification</p>
                    </div>
                  </div>
                  {/* 8. Career Support */}
                  <div className="flex flex-col items-center justify-center text-center gap-3 p-4 md:p-5 rounded-[24px] bg-[#EBF5FF] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[48px] h-[48px] md:w-[52px] md:h-[52px] rounded-2xl bg-[#0EA5E9] text-white shadow-sm">
                      <IconBriefcase size={24} stroke={1.5} />
                    </div>
                    <div className="flex flex-col items-center mt-1">
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">Placement Assistance</p>
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">Career Support</p>
                    </div>
                  </div>
                </div>
              </MagicCursorContainer>
            </div>
        </section>
      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="syllabus">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              Syllabus
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Digital Marketing Training & Syllabus in Kerala:{" "}
              <span className="text-[#8B1538]">From Zero to Your First Live Campaign</span>
            </h4>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              <p>
                The course has 12 modules, starting with digital marketing basics
                and ending with a live project and interview preparation.
              </p>
            </div>

            <SyllabusTabs />

            <div className="mt-8 rounded-2xl bg-[#F8F0F2] px-6 py-5 text-center">
              <p className="mb-4 text-[15px] leading-7 text-[#102A43] sm:text-base font-semibold">
                Download the detailed brochure from here. Enter your email ID and we will send the brochure directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <input type="email" placeholder="Enter your email address" className="w-full sm:w-80 px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#8B1538]" />
                <button type="submit" className="px-6 py-2 rounded-md bg-[#8B1538] text-white font-medium hover:bg-[#73152C] transition-colors">Get Brochure</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="faculty">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-5 shadow-sm sm:px-8 sm:py-6 lg:px-10 lg:py-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              Our Faculty
            </p>
            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Learn from <span className="text-[#8B1538]">Industry Experts</span>
            </h4>

            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
              {/* Card 1: Ammu */}
              <div className="group flex h-full flex-row items-start rounded-2xl border border-gray-100 bg-white p-4 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md gap-3 sm:gap-6">
                <div className="relative shrink-0 h-20 w-20 sm:h-28 sm:w-28 overflow-hidden rounded-full border-[3px] border-[#F8CDD2]/50 p-0.5 sm:p-1">
                  <div className="h-full w-full rounded-full bg-[#FCF8F9] overflow-hidden">
                    <img src="/images/faculty/AMMU.png" alt="Ammu" className="h-full w-full object-cover object-top" />
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-[18px] md:text-xl font-bold text-[#102A43] leading-snug">Ammu</h3>
                  <p className="text-[13px] md:text-sm font-semibold text-[#8B1538] mt-0.5 mb-2">Digital Marketing Expert</p>
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-start gap-2 text-[13px] md:text-[14px] text-slate-600">
                      <IconBriefcase className="shrink-0 w-4 h-4 mt-0.5 text-[#8B1538]" />
                      <span>7 Years of Experience</span>
                    </div>
                    <div className="flex items-start gap-2 text-[13px] md:text-[14px] text-slate-600">
                      <IconSchool className="shrink-0 w-4 h-4 mt-0.5 text-[#8B1538]" />
                      <span>Education: MBA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Haritha */}
              <div className="group flex h-full flex-row items-start rounded-2xl border border-gray-100 bg-white p-4 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md gap-3 sm:gap-6">
                <div className="relative shrink-0 h-20 w-20 sm:h-28 sm:w-28 overflow-hidden rounded-full border-[3px] border-[#CDEBFA]/50 p-0.5 sm:p-1">
                  <div className="h-full w-full rounded-full bg-[#EEF6FF] overflow-hidden">
                    <img src="/images/faculty/HARITHA.png" alt="Haritha" className="h-full w-full object-cover object-top" />
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-[18px] md:text-xl font-bold text-[#102A43] leading-snug">Haritha</h3>
                  <p className="text-[13px] md:text-sm font-semibold text-[#1A73E8] mt-0.5 mb-2">Digital Marketing Expert</p>
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-start gap-2 text-[13px] md:text-[14px] text-slate-600">
                      <IconBriefcase className="shrink-0 w-4 h-4 mt-0.5 text-[#1A73E8]" />
                      <span>5 Years of Experience</span>
                    </div>
                    <div className="flex items-start gap-2 text-[13px] md:text-[14px] text-slate-600">
                      <IconSchool className="shrink-0 w-4 h-4 mt-0.5 text-[#1A73E8]" />
                      <span>Education: Diploma in Computer Science, BBA, Diploma in Digital Marketing, SEO & WordPress</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


        <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="overview">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              1. What is Digital Marketing?
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px] lg:whitespace-nowrap">
              The Secret Behind{" "}
              <span className="text-[#8B1538]">Every Viral Brand!</span>
            </h4>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              <p>
                Digital marketing is how a business finds and wins customers on
                the internet. It uses search, social media, email, and ads
                instead of posters and hoardings.
              </p>

              <p>
                Think of internet marketing as a shop window that stays open 24
                hours a day. Every time a brand appears on Google, Instagram,
                or WhatsApp, a team is running digital campaigns behind the
                scenes. Each campaign has a goal, a budget, and a way to measure
                the result.
              </p>
            </div>

            <div className="mt-7 w-full overflow-x-auto rounded-2xl border border-[#8B1538]/15">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm sm:text-base">
                <thead className="bg-[#F8F0F2] text-[#8B1538]">
                  <tr>
                    <th className="border-r border-[#8B1538]/15 px-5 py-4 font-bold">
                      Channel
                    </th>
                    <th className="border-r border-[#8B1538]/15 px-5 py-4 font-bold">
                      What it does
                    </th>
                    <th className="px-5 py-4 font-bold">Where you see it</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[#102A43]">
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">
                      Search engines
                    </td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">
                      Helps people find a business when they search
                    </td>
                    <td className="px-5 py-4">Google results page</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">
                      Social platforms
                    </td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">
                      Builds followers, visibility, and brings enquiries
                    </td>
                    <td className="px-5 py-4">
                      Instagram, Facebook, YouTube
                    </td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">
                      Email and WhatsApp
                    </td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">
                      Keeps customers in touch with offers and updates
                    </td>
                    <td className="px-5 py-4">Inbox, chats</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">
                      Websites and blogs
                    </td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">
                      Shares details and collects enquiries
                    </td>
                    <td className="px-5 py-4">Business websites</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              <p>
                These are the main digital marketing channels, and a good plan
                mixes two or three of them. A bakery in Kochi, a coaching centre
                in Trivandrum, and a clothing shop in Kozhikode all use them in
                different ways.
              </p>

              
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="objectives">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              2. Objectives
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px] lg:whitespace-nowrap">
              Where Will This Course Take You?{" "}
              <span className="text-[#8B1538]">Our 6 Learning Goals</span>
            </h4>

            <div className="mt-5 space-y-2 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              <p>
                This course aims to make you work-ready in 90 days. You will
                plan, run, and measure real campaigns on your own.
              </p>
              <p className="font-semibold text-[#102A43]">
                By the end of the course, you will be able to:
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {LEARNING_GOALS.map((goal) => {
                const GoalIcon = goal.icon;

                return (
                  <article
                    key={goal.title}
                    className="flex h-fit flex-row items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${goal.headerClass}`}
                    >
                      <GoalIcon
                        className={`h-6 w-6 ${goal.iconClass}`}
                        stroke={2}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="text-base md:text-[17px] font-bold leading-snug text-[#102A43] mb-1.5">
                        {goal.title}
                      </h3>
                      <p className="text-sm md:text-[14px] font-normal leading-relaxed text-slate-700">
                        {goal.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="curriculum">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              3. What Will You Learn?
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px] lg:whitespace-nowrap">
              10 Skill Areas That Turn{" "}
              <span className="text-[#8B1538]">
                Beginners into Marketers
              </span>
            </h4>

            <p className="mt-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              You will learn SEO, paid ads, social media, content, analytics,
              email, and AI tools, all through practical tasks. Every skill is
              taught with live examples, not only theory.
            </p>

            <div className="mt-7 w-full overflow-x-auto rounded-2xl border border-[#8B1538]/15">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm sm:text-base">
                <thead className="bg-[#F8F0F2] text-[#8B1538]">
                  <tr>
                    <th className="w-48 border-r border-[#8B1538]/15 px-5 py-4 font-bold">
                      Skill Area
                    </th>
                    <th className="px-5 py-4 font-bold">
                      What You Will Learn
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[#102A43]">
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">
                      Planning
                    </td>
                    <td className="px-5 py-4">
                      How to build a digital marketing strategy: set goals,
                      identify your audience, fix a budget, and choose the right
                      channels.
                    </td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">
                      SEO
                    </td>
                    <td className="px-5 py-4">
                      Search Engine Optimization from scratch: keyword
                      research, on-page SEO, off-page SEO, technical SEO, local
                      SEO for shops and clinics, content structuring, and link
                      building.
                    </td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">
                      Paid Ads
                    </td>
                    <td className="px-5 py-4">
                      Meta Ads, search ads, and display advertising; how PPC and
                      other paid advertising work; media buying basics; and an
                      overview of performance marketing.
                    </td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">
                      Social Media
                    </td>
                    <td className="px-5 py-4">
                      Social media marketing, Instagram marketing, Facebook
                      marketing, social media advertising, a simple content
                      strategy, and ways to improve audience engagement.
                    </td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">
                      Content
                    </td>
                    <td className="px-5 py-4">
                      Content marketing, copywriting for ads and captions,
                      content creation for posts and reels, blogging for
                      traffic, and marketing creatives that get attention.
                    </td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">
                      Analytics
                    </td>
                    <td className="px-5 py-4">
                      Google Search Console, web analytics using GA4,
                      conversion tracking, campaign tracking, and the marketing
                      metrics every report needs.
                    </td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">
                      Leads and Sales
                    </td>
                    <td className="px-5 py-4">
                      Lead generation, how sales and marketing funnels work,
                      landing-page optimization, conversion-rate optimization,
                      remarketing, and retargeting.
                    </td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">
                      Email and Automation
                    </td>
                    <td className="px-5 py-4">
                      Email marketing, marketing automation, lead nurturing,
                      mapping the customer journey, and using a CRM.
                    </td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">
                      AI
                    </td>
                    <td className="px-5 py-4">
                      AI in digital marketing: AI marketing tools, generative
                      AI, AI content creation, AI-powered marketing workflows,
                      and prompt engineering for marketing.
                    </td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">
                      E-commerce
                    </td>
                    <td className="px-5 py-4">
                      E-commerce marketing, ways to grow online sales, product
                      marketing, and shopping campaigns.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 border-t border-[#8B1538]/10 pt-10 sm:mt-14 sm:pt-12">
              <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[34px]">
                The 6 Numbers{" "}
                <span className="text-[#8B1538]">
                  Every Marketer Must Read
                </span>
              </h3>

              <div className="relative mt-8">
                <div className="relative grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-6">
                  {MARKETING_METRICS.map((metric) => {
                    const MetricIcon = metric.icon;

                    return (
                      <article
                        key={metric.name}
                        className="relative z-10 ml-8 flex h-full flex-col gap-4 rounded-2xl border border-[#8B1538]/15 bg-white p-5 shadow-[0_8px_24px_rgba(16,42,67,0.10)] sm:ml-0"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${metric.iconClass}`}
                          >
                            <MetricIcon
                              className="h-9 w-9"
                              stroke={1.7}
                              aria-hidden="true"
                            />
                          </div>

                          <h4 className="text-xl font-bold text-[#102A43]">
                            {metric.name}
                          </h4>
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8B1538]">
                            What it tells you
                          </p>
                          <p className="mt-2 text-[15px] leading-7 text-[#102A43]">
                            {metric.description}
                          </p>
                        </div>

                        <div className="rounded-xl bg-[#F8F0F2] px-4 py-3">
                          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8B1538]">
                            Simple example
                          </p>
                          <p className="mt-1 text-sm font-semibold leading-6 text-[#102A43]">
                            {metric.example}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="who-is-it-for">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              4. Who is it for?
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Is This Course Made for You?{" "}
              <span className="text-[#8B1538]">Probably Yes!</span>
            </h4>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              <p>
                Yes, if you are a student, graduate, job seeker, working
                professional, or business owner who wants to market online. No
                marketing background is needed.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Students and fresh graduates from any stream",
                "Job seekers and career switchers",
                "Working professionals who want a better role or a side income",
                "Shop, clinic and business owners who want more customers",
                "Freelancers who want to add marketing services",
                "Homemakers planning to restart their careers",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#8B1538]/10 bg-[#FCF8F9] p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#8B1538] text-white">
                    ✓
                  </span>
                  <p className="text-[15px] leading-6 text-[#102A43]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </section>


      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="requirements">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              5. Minimum Requirements
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              What Do You Need Before Day One?{" "}
              <span className="text-[#8B1538]">Just These 5 Things</span>
            </h4>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              <p>
                You only need a laptop, an internet connection, and basic computer
                skills. You do not need coding or earlier marketing knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-8">
              <div className="flex items-start gap-3 md:gap-4 py-3 px-4 md:p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Laptop or desktop</p>
                  <p className="text-sm text-gray-500 mt-1">Smartphone useful for selected tasks</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4 py-3 px-4 md:p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Stable internet</p>
                  <p className="text-sm text-gray-500 mt-1">Reliable connection for live learning</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4 py-3 px-4 md:p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Basic English</p>
                  <p className="text-sm text-gray-500 mt-1">Reading and writing skills</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4 py-3 px-4 md:p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Basic computer skills</p>
                  <p className="text-sm text-gray-500 mt-1">Email, browsers and simple apps</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4 py-3 px-4 md:p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Daily practice time</p>
                  <p className="text-sm text-gray-500 mt-1">Around 1-2 hours per day</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4 py-3 px-4 md:p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Eagerness to learn</p>
                  <p className="text-sm text-gray-500 mt-1">A positive mindset to master new skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="what-you-get">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              6. What You Get & Why Viskool
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Best Digital Marketing Institute in Kerala:{" "}
              <span className="text-[#8B1538]">What You Get with Us</span>
            </h4>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              <p>
                Viskool gives you real work experience, 1 year of WhatsApp
                community support, recorded classes, and real agency work. Here is
                the full list of what is included.
              </p>
            </div>

            <div className="mt-8 w-full overflow-x-auto rounded-2xl border border-[#8B1538]/15">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm sm:text-base">
                <thead className="bg-[#F8F0F2] text-[#8B1538]">
                  <tr>
                    <th className="border-r border-[#8B1538]/15 px-5 py-4 font-bold">What you get</th>
                    <th className="border-r border-[#8B1538]/15 px-5 py-4 font-bold">How long</th>
                    <th className="px-5 py-4 font-bold">What it means for you</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[#102A43]">
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">1-month internship</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">1 month</td>
                    <td className="px-5 py-4">Work on real tasks and add experience to your CV</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">WhatsApp community support</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">1 year</td>
                    <td className="px-5 py-4">Ask doubts and learn with other learners and mentors</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">WhatsApp group support</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">6 months</td>
                    <td className="px-5 py-4">Quick answers from your mentors inside your batch group</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Technical support at your workplace</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">6 months</td>
                    <td className="px-5 py-4">Stuck with an ad account or tracking set-up at your job? We help you fix it</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Recorded sessions</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">6 months</td>
                    <td className="px-5 py-4">Watch missed or tricky classes again</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Live projects</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">During the course</td>
                    <td className="px-5 py-4">Agency-based projects with real client briefs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
      </section>


      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="fees">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              7. Course Fee
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Digital Marketing Course Fee in Kerala:{" "}
              <span className="text-[#8B1538]">Fee, EMI, and What's Included</span>
            </h4>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              <p>
                The Viskool Digital Marketing course fee is ₹15000 for the complete 90
                days programme. You can try a free demo class before you pay
                anything.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              <article
                className="flex h-full flex-col justify-start rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EEF6FF]`}
                  >
                    <IconCurrencyRupee
                      className={`h-6 w-6 text-[#1A73E8]`}
                      stroke={2}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base md:text-[17px] font-bold leading-snug text-[#102A43] text-left">
                    Course fee
                  </h3>
                </div>
                <p className="text-sm md:text-[16px] font-bold leading-relaxed text-[#102A43] text-left">
                  &#8377;15000
                </p>
              </article>
              <article
                className="flex h-full flex-col justify-start rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6FBF7]`}
                  >
                    <IconUserDollar
                      className={`h-6 w-6 text-[#12B8A6]`}
                      stroke={2}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base md:text-[17px] font-bold leading-snug text-[#102A43] text-left">
                    Payment options
                  </h3>
                </div>
                <p className="text-sm md:text-[14px] font-normal leading-relaxed text-slate-700 text-left">
                  Full payment / Partial Payment
                </p>
              </article>
              <article
                className="flex h-full flex-col justify-start rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FEF2F2]`}
                  >
                    <IconCalendarEvent
                      className={`h-6 w-6 text-[#F25C54]`}
                      stroke={2}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base md:text-[17px] font-bold leading-snug text-[#102A43] text-left">
                    EMI Options
                  </h3>
                </div>
                <p className="text-sm md:text-[14px] font-normal leading-relaxed text-slate-700 text-left">
                  No EMI
                </p>
              </article>
              <article
                className="flex h-full flex-col justify-start rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF8E6]`}
                  >
                    <IconSparkles
                      className={`h-6 w-6 text-[#F59E0B]`}
                      stroke={2}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base md:text-[17px] font-bold leading-snug text-[#102A43] text-left">
                    What is included
                  </h3>
                </div>
                <p className="text-sm md:text-[14px] font-normal leading-relaxed text-slate-700 text-left">
                  Everything in the "What You Get with Us" table above, plus live classes and your certificate
                </p>
              </article>
              <article
                className="flex h-full flex-col justify-start rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F5F0FF]`}
                  >
                    <IconVideo
                      className={`h-6 w-6 text-[#A855F7]`}
                      stroke={2}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base md:text-[17px] font-bold leading-snug text-[#102A43] text-left">
                    Free demo class
                  </h3>
                </div>
                <p className="text-sm md:text-[14px] font-normal leading-relaxed text-slate-700 text-left">
                  Yes, Free demo class is available
                </p>
              </article>
              <article
                className="flex h-full flex-col justify-start rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF8F0]`}
                  >
                    <IconTargetArrow
                      className={`h-6 w-6 text-[#22C55E]`}
                      stroke={2}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base md:text-[17px] font-bold leading-snug text-[#102A43] text-left">
                    Current offer
                  </h3>
                </div>
                <p className="text-sm md:text-[14px] font-normal leading-relaxed text-slate-700 text-left">
                  No offer available currently
                </p>
              </article>
            </div>

            
          </div>
        </div>
      </section>
      

      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="career">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              8. CAREER OPPORTUNITIES
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Digital Marketing Career Opportunities After the Course:{" "}
              <span className="text-[#8B1538]">Roles, Skills, and Growth</span>
            </h4>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              
              <p className="mb-4">
                Digital marketing jobs are available in agencies, startups, schools, hospitals, e-commerce brands, and IT companies in Kerala. Many learners start with a digital marketing internship, then move into a full-time role as they gain experience.
              </p>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-[15px] text-[#102A43]">
                <thead className="bg-[#F8F0F2] text-[#8B1538]">
                  <tr>
                    <th className="border-r border-[#8B1538]/15 px-5 py-4 font-bold">Role</th>
                    <th className="px-5 py-4 font-bold">What you do</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[#102A43]">
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">Digital Marketing Executive</td>
                    <td className="px-5 py-4">Plans and runs campaigns across channels</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">SEO Executive</td>
                    <td className="px-5 py-4">Improves a website's ranking on search engines</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">Social Media Executive</td>
                    <td className="px-5 py-4">Manages pages, posts and community</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">Performance Marketer</td>
                    <td className="px-5 py-4">Runs paid ads and improves results for leads and sales</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">Content Writer</td>
                    <td className="px-5 py-4">Writes blogs, ad copy, video scripts, Marketing Content (Email, WhatsApp, Community), social media, and captions</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">Customer Retention Executive</td>
                    <td className="px-5 py-4">Keeps customers engaged with messages and offers</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">Analytics Executive</td>
                    <td className="px-5 py-4">Tracks data and prepares reports</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">Freelancer or Business Owner</td>
                    <td className="px-5 py-4">Markets their own business or takes clients</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

            <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="certifications">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
                9. CERTIFICATIONS
              </p>

              <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                Certificates That <span className="text-[#8B1538]">Open Doors</span>
              </h4>

              <p className="mt-4 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8 max-w-3xl">
                You receive dual certifications upon finishing the classes, projects, and final assessment. These certificates validate your skills and enhance your resume for top employers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {/* Viskool Certificate */}
              <div className="flex flex-col gap-4">
                <div className="flex aspect-[4/3] max-w-[500px] mx-auto w-full items-center justify-center rounded-xl border border-gray-200 shadow-sm transition-transform hover:scale-[1.02] overflow-hidden relative" style={{ backgroundColor: '#ffffff', backgroundImage: 'radial-gradient(at 0% 0%, rgba(147, 197, 253, 0.6) 0px, transparent 70%), radial-gradient(at 100% 0%, rgba(233, 213, 255, 0.8) 0px, transparent 70%), radial-gradient(at 100% 100%, rgba(253, 230, 138, 0.7) 0px, transparent 70%), radial-gradient(at 0% 100%, rgba(191, 219, 254, 0.6) 0px, transparent 70%)' }}>
                      <img src="/images/Digital-Marketing-Certificate.webp" alt="Viskool Course Certificate" className="w-full h-full object-contain p-4 md:p-6 drop-shadow-md cursor-pointer" onClick={() => setSelectedCertificate('/images/Digital-Marketing-Certificate.webp')} />
                    </div>
                <div className="text-center">
                  <h5 className="font-bold text-[#102A43]">Viskool Course Certificate</h5>
                  <p className="text-sm text-gray-500">Awarded upon successful course completion</p>
                </div>
              </div>

              {/* Board Certificate */}
              <div className="flex flex-col gap-4">
                <div className="flex aspect-[4/3] max-w-[500px] mx-auto w-full items-center justify-center rounded-xl border border-gray-200 shadow-sm transition-transform hover:scale-[1.02] overflow-hidden relative" style={{ backgroundColor: '#ffffff', backgroundImage: 'radial-gradient(at 0% 0%, rgba(147, 197, 253, 0.6) 0px, transparent 70%), radial-gradient(at 100% 0%, rgba(233, 213, 255, 0.8) 0px, transparent 70%), radial-gradient(at 100% 100%, rgba(253, 230, 138, 0.7) 0px, transparent 70%), radial-gradient(at 0% 100%, rgba(191, 219, 254, 0.6) 0px, transparent 70%)' }}>
                      <img src="/images/board-certificate.webp" alt="Board Course Certificate" className="w-full h-full object-contain p-4 md:p-6 drop-shadow-md cursor-pointer" onClick={() => setSelectedCertificate('/images/board-certificate.webp')} />
                    </div>
                <div className="text-center">
                  <h5 className="font-bold text-[#102A43]">Official Board Certification</h5>
                  <p className="text-sm text-gray-500">Recognized by industry leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="reviews">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              10. REVIEWS
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              What Our{" "}
              <span className="text-[#8B1538]">Learners Say</span>
            </h4>

            <p className="mt-7 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              Our learners share their experiences of the course, mentors, and support in the reviews below.
            </p>
          </div>
        </div>

        <div className="w-full mt-2 overflow-hidden">
          <CourseReviewSlider />
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="tools">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              11. TOOLS
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                Master the <span className="text-[#8B1538]">Tools That Actually Get You Hired</span>
              </h4>

            <p className="mt-7 mb-8 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              You will learn 12 core tools that marketing teams use every day, from ad managers to analytics and design.
            </p>

                        {/* Tools Carousel Grid */}
            <div className="mt-10 overflow-hidden">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12 items-center justify-items-center opacity-80">
                <img src="/images/tools/icons8-google-ads-48.png" alt="Google Ads" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
                <img src="/images/tools/facebook_ads_logo_1291.webp" alt="Meta" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
                <img src="/images/tools/google analytics_1456.png" alt="Google Analytics 4" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
                <img src="/images/tools/mail_chimp_logo (2)_4550.webp" alt="Mailchimp" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
                <img src="/images/tools/Search_ads_logo_2508.webp" alt="Search Ads" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
                <img src="/images/tools/moz_digital_marketing_course_3909.webp" alt="Moz" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
                
                <img src="/images/tools/Hoot_Suite_logo_7138.webp" alt="Hootsuite" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
                <img src="/images/tools/Google_ads_planner_logo_7253.webp" alt="Google Keyword Planner" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
                <img src="/images/tools/microsoft_clarity_image_4216.webp" alt="Clarity by Microsoft" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
                <img src="/images/tools/Helium_logo_9422.webp" alt="Helium 10" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
                <img src="/images/tools/Amazon_ads_logo (1)_9237.webp" alt="Amazon Ads" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
                <img src="/images/tools/gtm_logo (1)_4348.webp" alt="Google Tag Manager" className="h-8 md:h-12 object-contain transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="why-viskool">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              12. DIGITAL MARKETING INSTITUTE IN KERALA
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              What Makes Viskool One of the Best{" "}
              <span className="text-[#8B1538]">Digital Marketing Academies in Kerala?</span>
            </h4>

            <p className="mt-7 mb-8 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              Viskool stands out for personal attention, practical projects, long support and placement help. When you search for a digital marketing academy Kerala has many options, so use the 5-point checklist below.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-[15px] text-[#102A43]">
                <thead className="bg-[#F8F0F2] text-[#8B1538]">
                  <tr>
                    <th className="border-r border-[#8B1538]/15 px-5 py-4 font-bold">What to check</th>
                    <th className="px-5 py-4 font-bold">How Viskool answers</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[#102A43]">
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold text-[#102A43]">Are the projects real?</td>
                    <td className="px-5 py-4 text-gray-700">Yes. You work on real client-style briefs, not only slides.</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold text-[#102A43]">Is support long enough?</td>
                    <td className="px-5 py-4 text-gray-700">1 year of WhatsApp community support and 6 months of group and workplace support</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold text-[#102A43]">Can I see a class first?</td>
                    <td className="px-5 py-4 text-gray-700">Yes. Book a free demo class.</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold text-[#102A43]">Is the fee clear?</td>
                    <td className="px-5 py-4 text-gray-700">Yes. Everything included is listed on this page.</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold text-[#102A43]">Will someone help me find a job?</td>
                    <td className="px-5 py-4 text-gray-700">Yes. Placement assistance, ATS resume help and mock interviews.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="timings">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              13. MODE & TIMINGS
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Mode, Duration, and{" "}
              <span className="text-[#8B1538]">Class Timings</span>
            </h4>

            <p className="mt-7 mb-8 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              Classes are live online and last 90 days, with 90 hours in total and 1 hour per day. You can choose a day batch or an evening batch. Our digital marketing classes for Kerala learners are live online; every class is recorded, and you can watch it again for 6 months.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Mode</span>
                <span className="text-[#102A43] font-semibold transition-colors duration-300 group-hover:text-[#800020]">Live online + Recordings</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Duration</span>
                <span className="text-[#102A43] font-semibold transition-colors duration-300 group-hover:text-[#800020]">90 Days</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Total Course Hours</span>
                <span className="text-[#102A43] font-semibold transition-colors duration-300 group-hover:text-[#800020]">90 Hours</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Daily Class Time</span>
                <span className="text-[#102A43] font-semibold transition-colors duration-300 group-hover:text-[#800020]">1 hour per day</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Days Per Week</span>
                <span className="text-[#102A43] font-semibold transition-colors duration-300 group-hover:text-[#800020]">5 Days</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Day Batch</span>
                <span className="text-[#102A43] font-semibold transition-colors duration-300 group-hover:text-[#800020]">[Time]</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Evening Batch</span>
                <span className="text-[#102A43] font-semibold transition-colors duration-300 group-hover:text-[#800020]">7pm-8pm, 8pm-9pm, 9pm-10pm</span>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Weekend Batch</span>
                <span className="text-[#102A43] font-semibold transition-colors duration-300 group-hover:text-[#800020]">[If available]</span>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="cta">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
                  14. READY TO START?
                </p>

                <h4 className="text-2xl md:text-3xl font-bold leading-[1.2] tracking-tight text-[#102A43]">
                  Ready to Launch Your Marketing Journey?{" "}
                  <span className="text-[#8B1538]">Book Your Free Demo Class</span>
                </h4>

                <p className="mt-7 mb-6 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
                  Not sure if this course is right for you? Talk to our mentors directly or book a free demo class to see how we teach.
                </p>

                <button type="button" className="bg-transparent border-2 border-[#102A43] text-[#102A43] rounded-md px-6 py-3 font-semibold hover:bg-[#102A43] hover:text-white transition-colors">
                  Talk to an Expert: Call Now
                </button>
              </div>

              <div>
                <DigitalMarketingLeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="faq">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-3 shadow-sm sm:px-8 sm:py-4 lg:px-10 lg:py-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              15. FAQ
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Digital Marketing Course FAQs:{" "}
              <span className="text-[#8B1538]">Straight Answers</span>
            </h4>

            <div className="flex flex-col gap-2 mt-6">
              <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-900 hover:bg-gray-50 list-none">
                  <span className="text-[#102A43] font-bold">How long is the course?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
                  It runs for 90 Days with 90 hours of live classes. See the full schedule in the timings section below.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-900 hover:bg-gray-50 list-none">
                  <span className="text-[#102A43] font-bold">Do I need coding or design skills?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
                  No. We teach what you need, step by step.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-900 hover:bg-gray-50 list-none">
                  <span className="text-[#102A43] font-bold">Is the course good for beginners?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
                  Yes. We start from zero and raise the level slowly.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-900 hover:bg-gray-50 list-none">
                  <span className="text-[#102A43] font-bold">Will I get placement help?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
                  Yes. You get placement assistance with your resume, portfolio, and mock interviews.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-900 hover:bg-gray-50 list-none">
                  <span className="text-[#102A43] font-bold">Can I learn while working?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
                  Yes. Join the evening batch and use the recordings for 6 months.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-900 hover:bg-gray-50 list-none">
                  <span className="text-[#102A43] font-bold">Will I work on real projects?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
                  Yes. You work on agency-style briefs and finish with a live project for your portfolio.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-900 hover:bg-gray-50 list-none">
                  <span className="text-[#102A43] font-bold">What if I miss a class?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
                  Watch the recording. Recorded sessions are available for 6 months.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-900 hover:bg-gray-50 list-none">
                  <span className="text-[#102A43] font-bold">Do you teach AI?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
                  Yes. One full module shows how to use AI to work faster in research, writing, design, and reporting.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-900 hover:bg-gray-50 list-none">
                  <span className="text-[#102A43] font-bold">Can I start freelancing after the course?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
                  Yes. With your portfolio and project experience, you can approach your first clients, and our WhatsApp support helps with your doubts.
                </div>
              </details>

              <details className="group border border-gray-200 rounded-lg bg-white overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-4 font-semibold text-slate-900 hover:bg-gray-50 list-none">
                  <span className="text-[#102A43] font-bold">How do I try a class first?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
                  </span>
                </summary>
                <div className="p-4 text-gray-600 bg-gray-50 border-t border-gray-200">
                  Book a free demo class using the form on this page.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-16" id="conclusion">
          <div className="mx-auto max-w-7xl">
            <div className="relative w-full max-w-none rounded-[2rem] border border-[#f5e6d3] bg-[#FCF8F4] px-6 py-8 shadow-sm sm:px-10 sm:py-12 lg:px-14 lg:py-14 overflow-hidden">
              
              {/* Content Wrapper to stay above background image */}
              <div className="relative z-10">
                <p className="mb-4 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#8B1538]">
                  CONCLUSION
                </p>
    
                <h3 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                  Conclusion: <span className="text-[#8B1538]">Learn Digital Marketing</span> in{" "}
                  <span className="text-[#166534]">God's Own Country</span>
                </h3>
    
                <div className="mt-6 md:mt-8 space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-[16px] md:leading-8 max-w-[90%]">
                  <p>Keralam, God's Own Country, is known for its backwaters, green hills and a deep love for learning, and today that love for learning is moving online.</p>
                  <p>From Trivandrum, Kollam, Pathanamthitta, Alappuzha, Kottayam, Idukki, Ernakulam, Thrissur, Palakkad, Malappuram, Kozhikode, Wayanad, Kannur and Kasaragod, learners can now join the Best Digital Marketing Course from their own homes.</p>
                  <p>At Viskool, you simply book a free demo class, learn through live and recorded classes with expert mentors, work on real projects and finish with a certificate and placement support, all in a course and learning experience made just for Keralam learners.</p>
                </div>
              </div>

              {/* Background Illustration Placeholder */}
              <div className="absolute bottom-0 right-0 w-full max-w-[600px] pointer-events-none opacity-100 mix-blend-multiply">
                <img src="/images/kerala-illustration.webp" alt="" className="w-full h-auto object-contain object-bottom translate-y-[5%]" />
              </div>
            </div>
          </div>
        </section>

      <FloatingCourseCTA />


      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
              onClick={() => setSelectedCertificate(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedCertificate} 
              alt="Certificate Full Size" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </>
  );
}





