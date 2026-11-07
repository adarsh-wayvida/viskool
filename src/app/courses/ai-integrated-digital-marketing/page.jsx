"use client";

import React from "react";
import SyllabusTabs from "../../../components/SyllabusTabs";
import CourseReviewSlider from "../../../components/CourseReviewSlider";
import DigitalMarketingLeadForm from "../../../components/DigitalMarketingLeadForm";
import FloatingCourseCTA from "../../../components/FloatingCourseCTA";
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
  IconShare,
} from "@tabler/icons-react";
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
      <section className="bg-[#FCFAFA] px-4 pb-7 pt-3 font-sans sm:px-6 sm:pb-10 sm:pt-5 lg:px-8 lg:pb-12 lg:pt-6">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12">
          <div className="order-2 lg:order-1">
            <a
              href="/#courses"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#3F4D5A] transition-colors hover:text-[#8B1538] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538] focus-visible:ring-offset-2 sm:text-base"
            >
              <IconArrowLeft className="h-5 w-5" stroke={1.8} aria-hidden="true" />
              Back to courses
            </a>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800 sm:text-sm">
                <IconCrown className="h-4 w-4" stroke={1.8} aria-hidden="true" />
                Premium
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                Live
              </span>
            </div>

            <h3 className="mt-6 max-w-2xl text-[30px] font-bold leading-[1.2] tracking-tight text-[#0F172A] sm:text-[36px] lg:text-[38px]">
              Best Digital Marketing Course in Kerala | Training, Fees &amp;
              Syllabus
            </h3>

            <p className="mt-5 max-w-2xl text-base font-bold leading-7 text-[#102A43] sm:text-lg">
              Best Digital Marketing Course in Kerala with Live Training, Fees,
              Syllabus &amp; Projects
            </p>

            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#3F4D5A] sm:text-base">
              Advance your career with our{" "}
              <strong>Best Digital Marketing Course in Kerala</strong>. Master
              SEO, social media, Google Ads, and campaign management with
              expert-led training. Build practical expertise and earn your
              certificate with live classes, experienced mentors, and hands-on
              projects.
            </p>

            <div className="mt-7 flex flex-wrap items-baseline gap-4">
              <span className="text-[32px] font-bold text-[#8B1538] sm:text-[36px]">
                ₹15,000
              </span>
              <span className="text-lg text-gray-500 line-through sm:text-xl">
                ₹20,000
              </span>
            </div>

            <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() =>
                  openContact("Enroll Now", {
                    source: "AI Integrated Digital Marketing Course",
                  })
                }
                className="min-h-12 w-full rounded-full bg-[#8B1538] px-8 py-3 text-base font-bold text-white transition-colors hover:bg-[#74112F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538] focus-visible:ring-offset-2 active:bg-[#611027] sm:w-auto sm:px-10"
              >
                Enroll Now
              </button>
              <button
                type="button"
                onClick={() =>
                  openContact("Talk to an Expert", {
                    source: "AI Integrated Digital Marketing Course",
                  })
                }
                className="min-h-12 w-full rounded-full border border-[#8B1538] bg-white px-8 py-3 text-base font-bold text-[#8B1538] transition-colors hover:bg-[#F8F0F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538] focus-visible:ring-offset-2 active:bg-[#F3E5E9] sm:w-auto sm:px-10"
              >
                Talk to an Expert
              </button>
              <button
                type="button"
                onClick={handleShare}
                aria-label="Share this course"
                title="Share this course"
                className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full border border-[#8B1538] bg-transparent text-[#8B1538] transition-colors hover:bg-[#F8F0F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1538] focus-visible:ring-offset-2 active:bg-[#F3E5E9] sm:self-auto"
              >
                <IconShare className="h-5 w-5" stroke={1.8} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#3F4D5A] sm:text-base">
              <span className="font-semibold text-[#102A43]">4.7</span>
              <span className="-ml-3 tracking-wider text-amber-400" aria-label="4.7 out of 5 stars">
                ★★★★★
              </span>
              <span className="-ml-3">(1 rating)</span>
              <span className="inline-flex items-center gap-2">
                <IconUsers className="h-5 w-5 text-gray-500" stroke={1.7} aria-hidden="true" />
                2+ Students
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:flex lg:items-center lg:justify-center lg:self-center">
            <img
              src="/images/ai-integrated-digital-marketing.webp"
              alt="Viskool AI Integrated Digital Marketing course thumbnail"
              className="aspect-video w-full rounded-2xl object-cover shadow-[0_10px_30px_rgba(16,42,67,0.12)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 py-10 font-sans sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px] lg:whitespace-nowrap">
              Your Path to{" "}
              <span className="text-[#8B1538]">Digital Marketing</span>
            </h4>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              <p>
                At Viskool, you learn online marketing step by step—from the
                basics and advanced AI tools to running live ad campaigns. Our
                hands-on training is designed for beginners, so you do not need
                any previous marketing experience.
              </p>

              <p>
                By the end of the course, you will have the digital marketing
                skills employers look for, along with a certificate and real
                project work to showcase. Read on to explore the syllabus,
                course fee, duration, and career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

"

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
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

              <div>
                <p className="font-semibold text-[#102A43]">
                  Is digital marketing only for big companies?
                </p>
                <p className="mt-1">
                  No. Small shops, clinics, schools, and freelancers use it
                  because it costs less than TV or newspaper ads and shows clear
                  results.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#102A43]">
                  Do I need a degree to learn it?
                </p>
                <p className="mt-1">
                  No. You need curiosity, basic computer skills, and the
                  willingness to practise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
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
                    className="flex min-h-[280px] h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_24px_rgba(16,42,67,0.10)]"
                  >
                    <div
                      className={`relative flex h-32 shrink-0 items-center justify-center ${goal.headerClass}`}
                    >
                      <GoalIcon
                        className={`relative z-10 h-16 w-16 ${goal.iconClass}`}
                        stroke={1.7}
                        aria-hidden="true"
                      />
                      <div
                        className="absolute -bottom-5 left-[-10%] h-10 w-[120%] rounded-[50%] bg-white"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex flex-1 flex-col px-5 pb-7 pt-6 text-center sm:px-6">
                      <h3 className="text-lg font-bold leading-snug text-[#102A43] sm:text-xl">
                        {goal.title}
                      </h3>
                      <div className="mx-auto my-4 h-px w-full bg-[#102A43]/12" />
                      <p className="text-[15px] font-normal leading-7 text-[#102A43] sm:text-base">
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
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


      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Laptop or desktop</p>
                  <p className="text-sm text-gray-500 mt-1">Smartphone useful for selected tasks</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Stable internet</p>
                  <p className="text-sm text-gray-500 mt-1">Reliable connection for live learning</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Basic English</p>
                  <p className="text-sm text-gray-500 mt-1">Reading and writing skills</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Basic computer skills</p>
                  <p className="text-sm text-gray-500 mt-1">Email, browsers and simple apps</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-medium">Daily practice time</p>
                  <p className="text-sm text-gray-500 mt-1">Around 1-2 hours per day</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
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
      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
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
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-[#102A43]">Why choose Viskool?</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Personal attention from mentors who know your name and your goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Progress tracking, so you always know where you stand</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Regular tests and honest feedback to fix gaps early</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Placement assistance with resume, portfolio and mock interviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="mt-1 bg-rose-900 text-white rounded-full p-1 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-slate-900 font-medium">Day and evening batches to suit students and working people</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-[#F8F0F2] px-6 py-5 text-center">
              <p className="text-[15px] leading-7 text-[#102A43] sm:text-base">
                If you are looking for digital marketing training Kerala learners
                can join from home, Viskool's live online classes bring the
                classroom to you.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              7. Fee
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

            <p className="mt-7 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              Fees depend on the course length, the mentors, and the support you
              get after class.
            </p>

            <div className="mt-8 space-y-4 rounded-2xl bg-[#F8F0F2] p-5 sm:p-6">
              <div>
                <p className="text-[15px] font-bold leading-7 text-[#102A43] sm:text-base">
                  Q: Is EMI available?
                </p>
                <p className="mt-1 text-[15px] leading-7 text-gray-700 sm:text-base">
                  A: No, We provide partial payment facility only.
                </p>
              </div>
              <div>
                <p className="text-[15px] font-bold leading-7 text-[#102A43] sm:text-base">
                  Q: Can I see a class before paying?
                </p>
                <p className="mt-1 text-[15px] leading-7 text-gray-700 sm:text-base">
                  A: Yes. Book a free demo class and decide after you have seen how
                  we teach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
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
                After this course, you can apply for roles like Digital Marketing Executive, SEO Executive, Social Media Executive, or Performance Marketer in Kerala or anywhere in the world. You can also freelance or grow your own business.
              </p>
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-1">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
                  10. CERTIFICATIONS
                </p>

                <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                  Certificates That Open Doors
                </h4>

                <p className="mt-7 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
                  You receive a Viskool course completion certificate after you finish the classes, projects, and final assessment.
                </p>
              </div>

              <div className="flex-1">
                <div className="flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100">
                  <span className="font-medium text-gray-400">Certificate Preview Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              12. FAQ
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              13. REVIEWS
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              14. TOOLS
            </p>

            <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
              Master the Tools That{" "}
              <span className="text-[#8B1538]">Actually Get You Hired</span>
            </h4>

            <p className="mt-7 mb-8 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              You will learn 9 core tools that marketing teams use every day, from ad managers to analytics and design.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300">
                <h4 className="text-lg font-bold text-[#102A43]">Google Ads</h4>
                <p className="mt-2 text-sm text-gray-600">Create and manage ads that appear when people search on Google</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300">
                <h4 className="text-lg font-bold text-[#102A43]">Meta Ads Manager</h4>
                <p className="mt-2 text-sm text-gray-600">Run ads on Facebook and Instagram and track the results</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300">
                <h4 className="text-lg font-bold text-[#102A43]">Google Analytics 4 (GA4)</h4>
                <p className="mt-2 text-sm text-gray-600">See who visits your website and what they do there</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300">
                <h4 className="text-lg font-bold text-[#102A43]">Google Search Console</h4>
                <p className="mt-2 text-sm text-gray-600">Check how your site appears and performs in Google search</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300">
                <h4 className="text-lg font-bold text-[#102A43]">Google Tag Manager</h4>
                <p className="mt-2 text-sm text-gray-600">Add tracking codes without editing website code</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300">
                <h4 className="text-lg font-bold text-[#102A43]">Canva</h4>
                <p className="mt-2 text-sm text-gray-600">Design posts, banners and ad creatives quickly</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300">
                <h4 className="text-lg font-bold text-[#102A43]">WordPress</h4>
                <p className="mt-2 text-sm text-gray-600">Build and manage a simple website or blog</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300">
                <h4 className="text-lg font-bold text-[#102A43]">Mailchimp</h4>
                <p className="mt-2 text-sm text-gray-600">Send email newsletters and automated campaigns to your subscribers</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300">
                <h4 className="text-lg font-bold text-[#102A43]">Google Sheets</h4>
                <p className="mt-2 text-sm text-gray-600">Plan content calendars and track basic campaign data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              15. HOW WE PREPARE YOU
            </p>

            <div>
              <h4 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                How We Prepare You for the{" "}
                <span className="text-[#8B1538]">Real Industry</span>
              </h4>

              <p className="mt-7 w-full text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
                We train you through projects, not just classes: learn a skill, use it on a real brief, get feedback, and repeat. Our practical digital marketing training follows a simple 5-step loop:
              </p>
            </div>

            <div className="mt-10 overflow-x-auto min-w-full">
              <div className="relative z-0 flex flex-row justify-between items-start gap-6 min-w-[700px] px-4 py-4">
                

                <div className="relative flex-1 flex flex-col items-center text-center group min-w-[120px]">
                  <div className="absolute top-6 left-[50%] w-full h-[2px] bg-gray-200 -z-10"></div>
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-rose-100 text-[#800020] font-bold flex items-center justify-center relative z-10 transition-all duration-300 group-hover:bg-[#800020] group-hover:border-[#800020] group-hover:text-white group-hover:scale-110">
                    1
                  </div>
                  <h4 className="font-bold text-[#102A43] group-hover:text-[#800020] mt-4">Learn</h4>
                  <p className="text-sm text-gray-500 mt-1">A live class explains the idea in simple words.</p>
                </div>

                <div className="relative flex-1 flex flex-col items-center text-center group min-w-[120px]">
                  <div className="absolute top-6 left-[50%] w-full h-[2px] bg-gray-200 -z-10"></div>
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-rose-100 text-[#800020] font-bold flex items-center justify-center relative z-10 transition-all duration-300 group-hover:bg-[#800020] group-hover:border-[#800020] group-hover:text-white group-hover:scale-110">
                    2
                  </div>
                  <h4 className="font-bold text-[#102A43] group-hover:text-[#800020] mt-4">Practise</h4>
                  <p className="text-sm text-gray-500 mt-1">You try it yourself with a guided task.</p>
                </div>

                <div className="relative flex-1 flex flex-col items-center text-center group min-w-[120px]">
                  <div className="absolute top-6 left-[50%] w-full h-[2px] bg-gray-200 -z-10"></div>
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-rose-100 text-[#800020] font-bold flex items-center justify-center relative z-10 transition-all duration-300 group-hover:bg-[#800020] group-hover:border-[#800020] group-hover:text-white group-hover:scale-110">
                    3
                  </div>
                  <h4 className="font-bold text-[#102A43] group-hover:text-[#800020] mt-4">Launch</h4>
                  <p className="text-sm text-gray-500 mt-1">You apply it on a real brief or a sample account.</p>
                </div>

                <div className="relative flex-1 flex flex-col items-center text-center group min-w-[120px]">
                  <div className="absolute top-6 left-[50%] w-full h-[2px] bg-gray-200 -z-10"></div>
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-rose-100 text-[#800020] font-bold flex items-center justify-center relative z-10 transition-all duration-300 group-hover:bg-[#800020] group-hover:border-[#800020] group-hover:text-white group-hover:scale-110">
                    4
                  </div>
                  <h4 className="font-bold text-[#102A43] group-hover:text-[#800020] mt-4">Review</h4>
                  <p className="text-sm text-gray-500 mt-1">Your mentor checks the result and gives feedback.</p>
                </div>

                <div className="relative flex-1 flex flex-col items-center text-center group min-w-[120px]">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-rose-100 text-[#800020] font-bold flex items-center justify-center relative z-10 transition-all duration-300 group-hover:bg-[#800020] group-hover:border-[#800020] group-hover:text-white group-hover:scale-110">
                    5
                  </div>
                  <h4 className="font-bold text-[#102A43] group-hover:text-[#800020] mt-4">Present</h4>
                  <p className="text-sm text-gray-500 mt-1">You explain your work the way you would to a client.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              16. DIGITAL MARKETING INSTITUTE IN KERALA
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              17. MODE & TIMINGS
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
                  18. READY TO START?
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
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




