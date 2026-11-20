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
            <section className="relative w-full bg-[#FBFCFF] font-sans overflow-hidden min-h-[auto] lg:min-h-[500px] flex flex-col items-center pt-[50px] md:pt-[60px] lg:pt-[90px] pb-[16px] md:pb-[24px] lg:pb-[32px] px-[20px] md:px-[48px] lg:px-[64px]" id="hero">
        
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes waveFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes bgWaveTranslate {
          0% { transform: translate(-45%, -50%); }
          50% { transform: translate(-55%, -50%); }
          100% { transform: translate(-45%, -50%); }
        }
        .animate-bg-wave {
          animation: bgWaveTranslate 20s ease-in-out infinite;
        }

        .animate-wave-float {
          animation: waveFloat 4s ease-in-out infinite;
        }
        .glitter-hover {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .glitter-hover::before {
          content: '';
          position: absolute;
          top: 0; left: -150%;
          width: 100%; height: 100%;
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.9), transparent);
          transform: skewX(-20deg);
          z-index: 10;
        }
        .glitter-hover:hover {
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(255,255,255,0.9), 0 0 20px rgba(5,221,225,0.5);
        }
        .glitter-hover:hover::before {
          animation: shine 1.5s infinite;
        }
        @keyframes shine {
          0% { left: -150%; }
          20% { left: 150%; }
          100% { left: 150%; }
        }
      `}} />

        
        {/* Full-width Animated Background Waves */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-100">
          <svg className="absolute w-[200vw] min-w-[2000px] h-[800px] left-1/2 top-1/2 animate-bg-wave" viewBox="0 0 2000 800" fill="none" preserveAspectRatio="none">
            <path d="M0 400 C 400 200, 600 600, 1000 400 C 1400 200, 1600 600, 2000 400" stroke="url(#wave-grad-1)" strokeWidth="3" fill="none" />
            <path d="M0 500 C 300 700, 700 100, 1000 500 C 1300 700, 1700 100, 2000 500" stroke="url(#wave-grad-2)" strokeWidth="2" fill="none" />
            <path d="M0 300 C 500 100, 500 700, 1000 300 C 1500 100, 1500 700, 2000 300" stroke="url(#wave-grad-3)" strokeWidth="2" fill="none" />
            <defs>
              <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
                <stop offset="25%" stopColor="#93C5FD" stopOpacity="1" />
                <stop offset="50%" stopColor="#93C5FD" stopOpacity="0" />
                <stop offset="75%" stopColor="#93C5FD" stopOpacity="1" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#67E8F9" stopOpacity="0" />
                <stop offset="25%" stopColor="#67E8F9" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#67E8F9" stopOpacity="0" />
                <stop offset="75%" stopColor="#67E8F9" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#67E8F9" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="wave-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0" />
                <stop offset="25%" stopColor="#E9D5FF" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#E9D5FF" stopOpacity="0" />
                <stop offset="75%" stopColor="#E9D5FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E9D5FF" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Radial Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#93C5FD] rounded-full blur-[140px] opacity-[0.15] pointer-events-none"></div>
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[#67E8F9] rounded-full blur-[120px] opacity-[0.15] pointer-events-none"></div>
        <div className="absolute bottom-[5%] left-[5%] w-[500px] h-[500px] bg-[#E9D5FF] rounded-full blur-[130px] opacity-[0.14] pointer-events-none"></div>

        

        <div className="relative mx-auto w-full max-w-[1440px] flex flex-col items-center z-10 flex-1 justify-center">
          {/* Back to courses - Absolute positioned */}
          <div className="absolute top-0 left-0 lg:left-4 z-20">
            <a
              href="/#courses"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#3F4D5A] transition-colors hover:text-[#9B0F38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B0F38] focus-visible:ring-offset-2 sm:text-base"
            >
              <IconArrowLeft className="h-5 w-5" stroke={1.8} aria-hidden="true" />
              Back to courses
            </a>
          </div>
          {/* Eyebrow */}
          <h2 className="text-[#071534] font-bold text-[13px] md:text-[15px] lg:text-[16px] tracking-[0.05em] text-center mb-[8px] md:mb-[12px] uppercase">
            AI-INTEGRATED DIGITAL MARKETING
          </h2>

          {/* Main Heading */}
          <h3 className="text-[#061330] font-[800] text-[30px] md:text-[38px] lg:text-[46px] leading-[1.15] tracking-[-0.02em] text-center max-w-[900px] mx-auto">
            Master Digital Marketing.<br className="hidden lg:block" /> Build Your Career.
          </h3>

          {/* Description */}
          <p className="text-[#10213E] font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] text-center max-w-[800px] mx-auto mt-[8px] md:mt-[12px]">
            Learn SEO, social media, Google Ads, analytics and AI through expert-led live training and practical campaign projects.
          </p>

          {/* Feature Area */}
          <div className="relative w-full mt-[16px] md:mt-[24px] flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
            
            

            {/* Left Benefit */}
            <div className="relative z-10 flex flex-col items-start lg:absolute lg:left-[5%] xl:left-[12%] lg:top-[15%]">
              <span className="text-[#0868E8] font-bold text-[18px] lg:text-[22px] whitespace-nowrap leading-none tracking-tight">90-Day Live Training</span>
              <div className="flex items-center gap-1.5 mt-2">
                <svg className="w-[16px] h-[16px] text-[#FBBF24] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-[#334155] font-semibold text-[14px]">4.7</span>
                <span className="text-[#94A3B8] text-[14px] leading-none px-1">&bull;</span>
                <span className="text-[#334155] font-medium text-[14px]">1 rating</span>
              </div>
            </div>

            {/* Central Illustration */}
            <div className="relative z-10 w-[220px] md:w-[280px] lg:w-[320px] flex justify-center order-first lg:order-none mb-4 lg:mb-0">
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-[#05DDE1] blur-[70px] opacity-[0.2] rounded-full pointer-events-none"></div>
                <DotLottieReact src="/images/digital-marketing.lottie" loop autoplay className="w-full h-full object-contain drop-shadow-2xl" />
              </div>
            </div>

            {/* Right Benefit */}
            <div className="relative z-10 flex flex-col items-center lg:items-start lg:absolute lg:right-[5%] xl:right-[12%] lg:top-[15%]">
              <span className="text-[#0868E8] font-bold text-[18px] lg:text-[22px] whitespace-nowrap leading-none tracking-tight">Placement Assistance</span>
              <div className="flex items-center gap-1.5 mt-2">
                <div className="flex items-center justify-center w-[18px] h-[18px] bg-[#0CA5E9] rounded-sm shrink-0">
                  <IconBriefcase size={12} stroke={2} color="white" />
                </div>
                <span className="text-[#334155] font-medium text-[14px]">Career Support</span>
              </div>
            </div>

            {/* Channel Icons (Absolute decorative) */}
            <div className="absolute hidden lg:block left-[15%] top-[65%] animate-wave-float" style={{ animationDelay: "0s" }}><div className="flex items-center justify-center w-[42px] h-[42px] rounded-[10px] bg-white shadow-md rotate-[-6deg] glitter-hover cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </div>
            </div>
            <div className="absolute hidden lg:block left-[28%] bottom-[10%] animate-wave-float" style={{ animationDelay: "0.8s" }}><div className="flex items-center justify-center w-[46px] h-[46px] rounded-[12px] bg-white shadow-md rotate-[8deg] glitter-hover cursor-pointer">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </div>
            </div>
            <div className="absolute hidden lg:block right-[15%] top-[60%] animate-wave-float" style={{ animationDelay: "1.6s" }}><div className="flex items-center justify-center w-[42px] h-[42px] rounded-[10px] bg-white shadow-md rotate-[5deg] glitter-hover cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </div>
            </div>
            <div className="absolute hidden lg:block right-[28%] bottom-[15%] animate-wave-float" style={{ animationDelay: "2.4s" }}><div className="flex items-center justify-center w-[46px] h-[46px] rounded-[12px] bg-white shadow-md rotate-[-8deg] glitter-hover cursor-pointer">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#F9AB00"><path d="M21 12.001c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9 9-4.03 9-9zm-13.5-3h9v6h-9v-6z" fill="#E37400"/></svg>
            </div>
            </div>

          </div>

          {/* Pricing and Actions */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[18px] lg:gap-[24px] mt-[16px] md:mt-[24px] lg:mt-[16px] w-full z-10">
            <div className="flex items-center gap-[16px] lg:gap-[12px]">
              <span className="text-[#071534] font-bold text-[28px] md:text-[32px] leading-none">₹15,000</span>
              <span className="text-[#8190AA] font-semibold text-[16px] md:text-[18px] line-through leading-none">₹20,000</span>
            </div>
            
            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-[16px] items-center lg:ml-[8px]">
              <button
                type="button"
                onClick={() =>
                  openContact("Enroll Now", {
                    source: "AI Integrated Digital Marketing Course",
                  })
                }
                className="h-[44px] md:h-[48px] min-w-full sm:min-w-[140px] px-[24px] md:px-[32px] bg-[#9B0F38] text-white font-bold text-[15px] md:text-[16px] rounded-full transition-transform hover:-translate-y-1 hover:bg-[#8B0D32] flex items-center justify-center shadow-sm"
              >
                Enroll Now
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("curriculum");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="h-[44px] md:h-[48px] min-w-full sm:min-w-[140px] px-[24px] md:px-[32px] bg-transparent border-[1.5px] border-[#9B0F38] text-[#9B0F38] font-bold text-[15px] md:text-[16px] rounded-full transition-colors hover:bg-[#9B0F38]/5 flex items-center justify-center"
              >
                View Syllabus
              </button>
            </div>
          </div>

        </div>
      </section>

      <div className="hidden md:block">
        <StickyCourseNav />
      </div>
      <section id="course-overview" className="bg-[#FCF8F9] px-4 pb-10 pt-10 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
          <div className="mx-auto max-w-7xl">
            <MagicCursorContainer>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full border-[1.5px] border-dashed border-gray-200 opacity-60 pointer-events-none"></div>
                <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-gradient-to-bl from-green-100/50 to-blue-50/50 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-100/40 to-pink-50/40 pointer-events-none"></div>

                <div className="relative mb-10">
                  <h3 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                    Course Overview
                  </h3>
                  <div className="h-1.5 w-[140px] bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#F97316] rounded-full mt-3"></div>
                </div>
                
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                  {/* 1. Duration */}
                  <div className="flex items-center gap-4 p-4 rounded-[20px] bg-[#EEF6FF] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-[#1A73E8] text-white shadow-sm">
                      <IconCalendarEvent size={26} stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-[#0F172A] leading-tight">90 Days</p>
                      <p className="text-[14px] text-slate-600 mt-0.5">Duration</p>
                    </div>
                  </div>

                  {/* 2. Learning Mode */}
                  <div className="flex items-center gap-4 p-4 rounded-[20px] bg-[#E6FBF7] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-[#12B8A6] text-white shadow-sm">
                      <IconDeviceDesktop size={26} stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-[#0F172A] leading-tight">Live Online</p>
                      <p className="text-[14px] text-slate-600 mt-0.5">Learning Mode</p>
                    </div>
                  </div>

                  {/* 3. Live Training */}
                  <div className="flex items-center gap-4 p-4 rounded-[20px] bg-[#FEF2F2] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-[#F25C54] text-white shadow-sm">
                      <IconClock size={26} stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-[#0F172A] leading-tight">90 Hours</p>
                      <p className="text-[14px] text-slate-600 mt-0.5">Live Training</p>
                    </div>
                  </div>

                  {/* 4. Internship */}
                  <div className="flex items-center gap-4 p-4 rounded-[20px] bg-[#FFF8E6] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-[#F59E0B] text-white shadow-sm">
                      <IconSchool size={26} stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-[#0F172A] leading-tight">1 Month</p>
                      <p className="text-[14px] text-slate-600 mt-0.5">Internship</p>
                    </div>
                  </div>

                  {/* 5. Recording Access */}
                  <div className="flex items-center gap-4 p-4 rounded-[20px] bg-[#F5F0FF] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-[#A855F7] text-white shadow-sm">
                      <IconVideo size={26} stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-[#0F172A] leading-tight">6 Months</p>
                      <p className="text-[14px] text-slate-600 mt-0.5">Recording Access</p>
                    </div>
                  </div>

                  {/* 6. Community Support */}
                  <div className="flex items-center gap-4 p-4 rounded-[20px] bg-[#EAF8F0] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-[#22C55E] text-white shadow-sm">
                      <IconUsers size={26} stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-[#0F172A] leading-tight">1 Year</p>
                      <p className="text-[14px] text-slate-600 mt-0.5">Community Support</p>
                    </div>
                  </div>

                  {/* 7. Certification */}
                  <div className="flex items-center gap-4 p-4 rounded-[20px] bg-[#FFF0F5] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-[#EC4899] text-white shadow-sm">
                      <IconCertificate size={26} stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-[#0F172A] leading-tight">Dual Certificates</p>
                      <p className="text-[14px] text-slate-600 mt-0.5">Certification</p>
                    </div>
                  </div>

                  {/* 8. Career Support */}
                  <div className="flex items-center gap-4 p-4 rounded-[20px] bg-[#EBF5FF] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-[#0EA5E9] text-white shadow-sm">
                      <IconBriefcase size={26} stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-[#0F172A] leading-tight">Placement Assistance</p>
                      <p className="text-[14px] text-slate-600 mt-0.5">Career Support</p>
                    </div>
                  </div>

                  {/* 9. Course Fees */}
                  <div className="flex items-center gap-4 p-4 rounded-[20px] bg-[#FFF6EB] transition-transform duration-300 hover:-translate-y-1 hover:shadow-sm">
                    <div className="flex-shrink-0 flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-[#F97316] text-white shadow-sm">
                      <IconCurrencyRupee size={26} stroke={1.5} />
                    </div>
                    <div>
                      <p className="text-[17px] font-bold text-[#0F172A] leading-tight">₹15,000</p>
                      <p className="text-[14px] text-slate-600 mt-0.5">Course Fees</p>
                    </div>
                  </div>
                </div>
              </MagicCursorContainer>
            </div>
        </section>

        <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="overview">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="objectives">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
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
                    className="flex min-h-0 md:min-h-[280px] h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(16,42,67,0.10)]"
                  >
                    <div
                      className={`relative flex h-20 md:h-32 shrink-0 items-center justify-center ${goal.headerClass}`}
                    >
                      <GoalIcon
                        className={`relative z-10 h-10 w-10 md:h-16 md:w-16 ${goal.iconClass}`}
                        stroke={1.7}
                        aria-hidden="true"
                      />
                      <div
                        className="absolute -bottom-5 left-[-10%] h-10 w-[120%] rounded-[50%] bg-white"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex flex-col justify-start px-4 md:px-5 pb-5 md:pb-7 pt-4 md:pt-6 text-center sm:px-6 gap-1 md:gap-2">
                      <h3 className="text-base md:text-lg font-bold leading-snug text-[#102A43] sm:text-xl">
                        {goal.title}
                      </h3>
                      <div className="mx-auto my-1 md:my-2 h-px w-full bg-[#102A43]/12" />
                      <p className="text-sm md:text-[15px] font-normal leading-6 md:leading-7 text-[#102A43] sm:text-base mt-1 md:mt-2">
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="curriculum">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="who-is-it-for">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
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

            <div className="mt-8 space-y-4 rounded-2xl bg-[#F8F0F2] p-5 sm:p-6">
              <div>
                <p className="text-[15px] font-bold leading-7 text-[#102A43] sm:text-base">
                  Q: Can a commerce, arts or science student join?
                </p>
                <p className="mt-1 text-[15px] leading-7 text-gray-700 sm:text-base">
                  A: Yes. Digital marketing needs creativity and basic computer
                  skills, not a particular degree.
                </p>
              </div>
              <div>
                <p className="text-[15px] font-bold leading-7 text-[#102A43] sm:text-base">
                  Q: I have a full-time job. Can I still attend?
                </p>
                <p className="mt-1 text-[15px] leading-7 text-gray-700 sm:text-base">
                  A: Yes. Choose the evening batch, and use the recorded sessions,
                  which you can watch for 6 months, to catch up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="requirements">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
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
      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="what-you-get">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
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


      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="fees">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
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

            <div className="mt-8 w-full overflow-x-auto rounded-2xl border border-[#8B1538]/15">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm sm:text-base">
                <thead className="bg-[#F8F0F2] text-[#8B1538]">
                  <tr>
                    <th className="border-r border-[#8B1538]/15 px-5 py-4 font-bold">Item</th>
                    <th className="px-5 py-4 font-bold">Details</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[#102A43]">
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Course fee</td>
                    <td className="px-5 py-4 font-bold text-[#102A43]">₹15000</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Payment options</td>
                    <td className="px-5 py-4">Full payment / Partial Payment</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">EMI Options</td>
                    <td className="px-5 py-4">No EMI</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">What is included</td>
                    <td className="px-5 py-4">Everything in the "What You Get with Us" table above, plus live classes and your certificate</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Free demo class</td>
                    <td className="px-5 py-4">Yes, Free demo class is available</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Current offer</td>
                    <td className="px-5 py-4">No offer available currently</td>
                  </tr>
                </tbody>
              </table>
            </div>

            
          </div>
        </div>
      </section>
      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="syllabus">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              8. Syllabus
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="career">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              9. CAREER OPPORTUNITIES
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

            <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="certifications">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="mb-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
                10. CERTIFICATIONS
              </p>

              <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                Certificates That Open Doors
              </h4>

              <p className="mt-4 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8 max-w-3xl">
                You receive dual certifications upon finishing the classes, projects, and final assessment. These certificates validate your skills and enhance your resume for top employers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Viskool Certificate */}
              <div className="flex flex-col gap-4">
                <div className="flex aspect-[16/11] w-full max-w-[420px] mx-auto items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <span className="font-medium text-gray-400">Viskool Certificate Placeholder</span>
                </div>
                <div className="text-center">
                  <h5 className="font-bold text-[#102A43]">Viskool Course Certificate</h5>
                  <p className="text-sm text-gray-500">Awarded upon successful course completion</p>
                </div>
              </div>

              {/* Board Certificate */}
              <div className="flex flex-col gap-4">
                <div className="flex aspect-[16/11] w-full max-w-[420px] mx-auto items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100 shadow-sm transition-transform hover:scale-[1.02]">
                  <span className="font-medium text-gray-400">Board Certificate Placeholder</span>
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="reviews">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              11. REVIEWS
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

        <div className="w-full mt-8 overflow-hidden">
          <CourseReviewSlider />
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="tools">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              12. TOOLS
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Master the Tools That{" "}
              <span className="text-[#8B1538]">Actually Get You Hired</span>
            </h4>

            <p className="mt-7 mb-8 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              You will learn 9 core tools that marketing teams use every day, from ad managers to analytics and design.
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

      

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="why-viskool">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              13. DIGITAL MARKETING INSTITUTE IN KERALA
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="timings">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              14. MODE & TIMINGS
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Mode, Duration, and{" "}
              <span className="text-[#8B1538]">Class Timings</span>
            </h4>

            <p className="mt-7 mb-8 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              Classes are live online and last 90 days, with 90 hours in total and 1 hour per day. You can choose a day batch or an evening batch. Our digital marketing classes for Kerala learners are live online; every class is recorded, and you can watch it again for 6 months.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Next Batch Starts</span>
                <span className="text-[#102A43] font-semibold transition-colors duration-300 group-hover:text-[#800020]">[Soon]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="cta">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
                  15. READY TO START?
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="faq">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              16. FAQ
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="conclusion">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-[#F8F0F2] px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              CONCLUSION
            </p>

            <h3 className="text-2xl md:text-4xl font-bold leading-[1.2] tracking-tight text-[#102A43]">
              Conclusion: Learn Digital Marketing in{" "}
              <span className="text-[#800020]">God's Own Country</span>
            </h3>

            <div className="mt-7 space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>Kerala, God's Own Country, is known for its backwaters, green hills and a deep love for learning, and today that love for learning is moving online.</p>
              <p>From Trivandrum, Kollam, Pathanamthitta, Alappuzha, Kottayam, Idukki, Ernakulam, Thrissur, Palakkad, Malappuram, Kozhikode, Wayanad, Kannur and Kasaragod, learners can now join the Best Digital Marketing Course from their own homes.</p>
              <p>At Viskool, you simply book a free demo class, learn through live and recorded classes with expert mentors, work on real projects and finish with a certificate and placement support, all in a course and learning experience made just for Kerala learners.</p>
            </div>
          </div>
        </div>
      </section>

      <FloatingCourseCTA />

    </>
  );
}





