"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MODULES = [
  { id: 1, title: "Digital Marketing Foundation & Growth Marketing", days: "Day 1 – 5", content: "Digital marketing fundamentals, customer journeys, buyer personas, AI assisted research and campaign planning." },
  { id: 2, title: "Website, Landing Pages, UX & CRO", days: "Day 6 – 18", content: "WordPress, Figma, Elementor, WooCommerce, landing pages, Core Web Vitals and conversion optimisation." },
  { id: 3, title: "Advanced SEO, GEO & AEO", days: "Day 19 – 28", content: "Keyword research, on-page, Off page and technical SEO, link building, local SEO, Google AI Overviews and AI search optimisation." },
  { id: 4, title: "Google Ads and Performance Marketing", days: "Day 29 – 45", content: "Search, Display, Shopping, YouTube and Performance Max campaigns, bidding, GTM and conversion tracking." },
  { id: 5, title: "Meta Ads & Paid Social", days: "Day 46 – 58", content: "Meta Business Suite, audiences, Pixel, Conversions API, lead generation, retargeting and campaign analysis." },
  { id: 6, title: "Generative AI & Creative Production", days: "Day 59 – 60", content: "Prompt engineering, AI assisted content, image and video creation workflows." },
  { id: 7, title: "Email marketing & Automation", days: "Day 61 – 65", content: "Email deliverability, segmentation, campaign design, automation flows and A/B testing." },
  { id: 8, title: "Analytics & Data Visualisation", days: "Day 66 – 70", content: "GA4, event tracking, UTM parameters, Google Tag Manager and Looker Studio dashboards." },
  { id: 9, title: "E-commerce and Marketplace Growth", days: "Day 71 – 78", content: "Shopify, Amazon Seller Central, product optimisation, retargeting and e-commerce project work." },
  { id: 10, title: "CRM & Omnichannel Automation", days: "Day 79 – 83", content: "WhatsApp Business API, CRM pipelines, SMS marketing, Zapier, Make and connected lead workflows." },
  { id: 11, title: "Freelancing & Agency Operations", days: "Day 84 – 87", content: "LinkedIn branding, client acquisition, proposals, pricing, contracts and full-funnel strategies." },
  { id: 12, title: "Capstone project & career preparation", days: "Day 88 – 90", content: "Business case study, project presentation, ATS resume development, mock interviews and career onboarding." },
];

export default function SyllabusTabs() {
  const [activeModule, setActiveModule] = useState(1);
  const scrollRef = useRef(null);
  const active = MODULES.find((m) => m.id === activeModule);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 300, behavior: "smooth" });
    }
  };

  return (
    <div className="py-8">
      <div className="relative">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:text-[#800020] transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6"
        >
          {MODULES.map((m) => {
            const isActive = activeModule === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveModule(m.id)}
                className={`min-w-[200px] p-4 rounded-xl border bg-white flex flex-col items-center text-center transition-colors cursor-pointer ${
                  isActive ? "border-[#800020]" : "border-gray-200"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Module {m.id}
                </span>
                <span className={`mt-1 text-sm font-semibold ${isActive ? "text-[#800020]" : "text-[#102A43]"}`}>
                  {m.title}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="absolute right-0 top-1/2 z-10 translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:text-[#800020] transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-10 rounded-2xl bg-[#F8F0F2] p-6 sm:p-8">
        <h3 className="text-lg font-bold text-[#102A43] sm:text-xl">
          {active.title}{" "}
          <span className="text-[#8B1538]">({active.days})</span>
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-gray-600 sm:text-base">
          {active.content}
        </p>
      </div>
    </div>
  );
}