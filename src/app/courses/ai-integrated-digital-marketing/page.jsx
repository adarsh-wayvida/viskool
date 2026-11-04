"use client";

import React from "react";
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

const LEARNING_GOALS = [
  {
    title: "Customer Journey",
    icon: IconRoute,
    headerClass: "bg-[#CDEBFA]",
    iconClass: "text-[#1976A8]",
    text: "Explain how brands get customers online, from the first click to the final sale.",
  },
  {
    title: "Job-Ready Skills",
    icon: IconSpeakerphone,
    headerClass: "bg-[#F8CDD2]",
    iconClass: "text-[#D64E63]",
    text: "Build job-ready skills in ads, SEO, content, and reporting.",
  },
  {
    title: "Campaign Management",
    icon: IconTargetArrow,
    headerClass: "bg-[#FFD59B]",
    iconClass: "text-[#D97706]",
    text: "Set up and manage campaigns with a small budget.",
  },
  {
    title: "Reports & Insights",
    icon: IconChartBar,
    headerClass: "bg-[#DED0F4]",
    iconClass: "text-[#7C5BB3]",
    text: "Read reports and explain results in simple words.",
  },
  {
    title: "AI-Powered Workflow",
    icon: IconSparkles,
    headerClass: "bg-[#BFEDEA]",
    iconClass: "text-[#0F8F88]",
    text: "Use AI tools to work faster without losing quality.",
  },
  {
    title: "Career Portfolio",
    icon: IconCertificate,
    headerClass: "bg-[#DDEFCB]",
    iconClass: "text-[#5D8C3A]",
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
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px] lg:whitespace-nowrap">
              Your Path to{" "}
              <span className="text-[#8B1538]">Digital Marketing</span>
            </h2>

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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              1. What is Digital Marketing?
            </p>

            <h2 className="text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px] lg:whitespace-nowrap">
              The Secret Behind{" "}
              <span className="text-[#8B1538]">Every Viral Brand!</span>
            </h2>

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

            <h2 className="text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px] lg:whitespace-nowrap">
              Where Will This Course Take You?{" "}
              <span className="text-[#8B1538]">Our 6 Learning Goals</span>
            </h2>

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

            <h2 className="text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px] lg:whitespace-nowrap">
              10 Skill Areas That Turn{" "}
              <span className="text-[#8B1538]">
                Beginners into Marketers
              </span>
            </h2>

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
    </>
  );
}
