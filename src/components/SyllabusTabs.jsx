"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MODULES = [
  {
    "id": 1,
    "title": "Foundations & Growth Marketing Blueprint",
    "days": "Day 1 - 5",
    "content": [
      "Day 1: Modern Digital Ecosystem, Funnel Architecture (TOFU, MOFU, BOFU) & AI Marketing Evolution",
      "Day 2: Traditional Marketing vs. Omnichannel Growth Hacking Strategy",
      "Day 3: Customer Decision Journeys (CDJ), Micro-Moments & Ideal Customer Profile (ICP)",
      "Day 4: Data-Driven Buyer Persona Engineering with ChatGPT/Claude",
      "Day 5: Competitor Intelligence Setup, Budget Allocation & Media Planning"
    ]
  },
  {
    "id": 2,
    "title": "Website Planning, Dynamic UX/UI & CRO",
    "days": "Day 6 - 18",
    "content": [
      "Day 6: Web Architecture, Server Infrastructure, SSL, DNS & CMS Protocols",
      "Day 7: WordPress CMS Installation, CPanel Navigation & Database Setup",
      "Day 8: UX Wireframing, Site Architecture Mapping & Figma Workflow",
      "Day 9: Theme Engineering: Customization using Elementor & Dynamic Layouts",
      "Day 10: Essential Plugin Ecosystem Setup (Security, Performance, Caching & SSL)",
      "Day 11: Mobile Responsiveness Testing, Core Web Vitals (CWV) & LCP/FID Repair",
      "Day 12: E-Commerce Infrastructure & WooCommerce Integration",
      "Day 13: High-Converting Landing Page Design with Lead Capturing Mechanics",
      "Day 14: Conversion Rate Optimization (CRO), A/B Testing Infrastructure",
      "Day 15: Microsoft Clarity Integration & Session Recording Analysis",
      "Day 16: Full Technical Audit Checklist: Favicons, Schema, 404 Handlers & Redirect Rules",
      "Day 17: Live Production Server Launch & Domain Propagation",
      "Day 18: Website Review, Bug Fixing & UX/UI Feedback Iteration"
    ]
  },
  {
    "id": 3,
    "title": "Advanced Search Systems: SEO, GEO & AEO",
    "days": "Day 19 - 28",
    "content": [
      "Day 19: Search Engine Mechanics, Crawling Algorithms & Google Search Graph Architecture",
      "Day 20: Search Intent Classification & Long-Tail Keyword Mining",
      "Day 21: High-Performance On-Page SEO, Content Structure & Dynamic Schema Markup",
      "Day 22: Technical SEO & Web Crawling Diagnostics using Screaming Frog SEO Spider",
      "Day 23: Off-Page SEO Protocols, Link Graph Analysis, PR & High-DA Backlink Acquisition",
      "Day 24: Hyper-Local SEO, Google Business Profile (GBP) Optimization & Local Citation Building",
      "Day 25: E-Commerce SEO & Programmatic SEO Architecture for Scaling Pages",
      "Day 26: Generative Engine Optimization (GEO): Content Strategy for Google AI Overviews & SGE",
      "Day 27: Answer Engine Optimization (AEO): Structuring Content for ChatGPT, Perplexity & Claude",
      "Day 28: Live Website SEO & AI Search Audit, Competitor Gap Analysis & Execution Practice"
    ]
  },
  {
    "id": 4,
    "title": "Performance PPC & Programmatic Google Ads",
    "days": "Day 29 - 45",
    "content": [
      "Day 29: Google Marketing Platform Overview & PPC Ecosystem Architecture",
      "Day 30: Auction Dynamics, Ad Rank Formula & Quality Score Optimization",
      "Day 31: Account Structure, MCC Setup & Enterprise Payment Configuration",
      "Day 32: High-Intent Search Campaign Setup, Match Types & Negative Keyword Lists",
      "Day 33: Writing High-CTR Ad Copies with ChatGPT Prompts & Dynamic Search Ads (DSA)",
      "Day 34: Audience Signals, In-Market Segments & Custom Affinity Targeting",
      "Day 35: Smart Bidding Strategies (tCPA, tROAS, Maximize Conversions)",
      "Day 36: Conversion Tracking Infrastructure & Google Tag Manager (GTM) Integration",
      "Day 37: Display Network Campaigns, Programmatic Placements & Publisher Exclusions",
      "Day 38: Google Performance Max (PMax) Campaigns & Audience Signal Engineering",
      "Day 39: Video & YouTube Ad Formats (In-Stream, Bumper, Direct Response Ads)",
      "Day 40: Google Shopping Ads, Merchant Center Setup & Product Feed Management",
      "Day 41: Remarketing List for Search Ads (RLSA) & Sequential Ad Funnels",
      "Day 42: Dynamic Creative Testing & Ad Asset Optimization",
      "Day 43: Live Budget Practice: Student Campaign Deployment & Real-Time Setup",
      "Day 44: Automated Bidding Rules & Account Scaling Strategies",
      "Day 45: Google Ads Performance Audit, Impression Share Analysis & Campaign Optimization"
    ]
  },
  {
    "id": 5,
    "title": "Meta Ads, Server-Side Tracking & Paid Social",
    "days": "Day 46 - 58",
    "content": [
      "Day 46: Social Media Ecosystem Dynamics & Social Commerce Landscape",
      "Day 47: Meta Business Suite & Enterprise Business Manager Architecture Setup",
      "Day 48: Competitor Intelligence using Meta Ad Library & Spy Tools",
      "Day 49: Campaign Hierarchy: CBO vs. ABO Strategies",
      "Day 50: Advanced Meta Audience Targeting: Core, Custom & Lookalike (LAL) Audiences",
      "Day 51: Technical Pixel Mastery: Meta Pixel, Dynamic Event Tracking & Custom Conversions",
      "Day 52: Server-Side Tracking: Meta Conversions API (CAPI) Integration via GTM",
      "Day 53: Ad Creative Strategy: Static Carousels, Direct Response Hooks & UGC Ads",
      "Day 54: AI Asset Generation: Using Midjourney, Canva Pro & AdCreative.ai for Ads",
      "Day 55: Lead Generation Funnels, Instant Forms & CRM Auto-Sync Setup",
      "Day 56: Retargeting Sequences, Dynamic Product Ads (DPA) & Catalog Sales",
      "Day 57: Live Execution: Full Campaign Launch, Budget Allocation & Real-Time A/B Testing",
      "Day 58: Campaign Metrics Analysis (ROAS, CPM, CPC, CTR) & Ad Scaling Methods"
    ]
  },
  {
    "id": 6,
    "title": "Generative AI, Copywriting & Visual Asset Creation",
    "days": "Day 59 - 60",
    "content": [
      "Day 59: Prompt Engineering for Marketers: Advanced Frameworks for ChatGPT & Claude",
      "Day 60: Generative AI Video & Image Workflow (CapCut Pro, Midjourney & AI Script Generation)"
    ]
  },
  {
    "id": 7,
    "title": "Email Marketing, Lead Nurturing & Automation Funnels",
    "days": "Day 61 - 65",
    "content": [
      "Day 61: Email Deliverability Protocols (DKIM, SPF, DMARC Setup) & Lead Magnet Design",
      "Day 62: Audience Segmentation, Tagging Systems & List Cleaning (Mailchimp/Brevo)",
      "Day 63: Email Copywriting & Design: Interactive HTML & Responsive Layouts",
      "Day 64: Marketing Automation Flows: Welcome Series, Abandoned Cart & Re-engagement",
      "Day 65: A/B Split Testing, Open Rate/CTR Optimization & Deliverability Tracking"
    ]
  },
  {
    "id": 8,
    "title": "Enterprise Web Analytics & Data Visualization",
    "days": "Day 66 - 70",
    "content": [
      "Day 66: Google Analytics 4 (GA4) Migration, Account Architecture & Data Streams",
      "Day 67: Event-Based Data Models, Custom Dimensions & Metric Configuration",
      "Day 68: Advanced UTM Architecture, Source/Medium Tracking & Multi-Touch Attribution",
      "Day 69: Google Tag Manager (GTM): Custom JavaScript Triggers & Variables Setup",
      "Day 70: Data Visualization: Building Interactive Client Dashboards in Looker Studio"
    ]
  },
  {
    "id": 9,
    "title": "E-Commerce Marketing & Marketplace Growth",
    "days": "Day 71 - 78",
    "content": [
      "Day 71: E-Commerce Ecosystem & Direct-To-Consumer (D2C) Business Models",
      "Day 72: Full Shopify Store Setup, Payment Gateway & Shipping Integration",
      "Day 73: E-Commerce Product Page Conversion Optimization & UX Audit",
      "Day 74: Amazon Seller Central Fundamentals, FBA Workflow & Product Listing",
      "Day 75: E-Commerce Organic Search Strategy & Sponsored Product Ads Architecture",
      "Day 76: Dynamic Retargeting & High-Converting Cart Abandonment Funnels",
      "Day 77: Customer Lifetime Value (CLV) Optimization & Loyalty Program Systems",
      "Day 78: E-Commerce Live Project: Full Mock Store Launch & Ad Strategy Presentation"
    ]
  },
  {
    "id": 10,
    "title": "Omnichannel Automation, CRM & AI WhatsApp Marketing",
    "days": "Day 79 - 83",
    "content": [
      "Day 79: WhatsApp Business API, Green Tick Application & Automated Messaging Systems",
      "Day 80: SMS Marketing Sequences & Omnichannel Customer Retargeting",
      "Day 81: CRM Architecture (HubSpot/Zoho): Pipeline Creation & Deal Tracking",
      "Day 82: No-Code Automation: Building Automated Workflows using Zapier & Make.com",
      "Day 83: Full Workflow Execution: Connecting Meta Lead Ads -> WhatsApp -> CRM -> Email"
    ]
  },
  {
    "id": 11,
    "title": "High-Ticket Freelancing, Agency Operations & Pitching",
    "days": "Day 84 - 87",
    "content": [
      "Day 84: Personal Branding: LinkedIn Profile Optimization & Portfolio Website Building",
      "Day 85: High-Ticket Client Acquisition, Proposal Writing & Pitching",
      "Day 86: Agency Pricing Packages, Retainers & Contract Agreement Formats",
      "Day 87: Full-Funnel Digital Strategy Formulation & Growth Blueprint Creation for Clients"
    ]
  },
  {
    "id": 12,
    "title": "Capstone Industry Project & Career Onboarding",
    "days": "Day 88 - 90",
    "content": [
      "Day 88: Capstone Project Brief: Real-World Business Case Study Strategy & Execution",
      "Day 89: Final Project Presentation, Technical Defense & Expert Panel Review",
      "Day 90: Industry Resume Building, AI-Powered Mock Interviews & Internship/Job Placement Onboarding"
    ]
  }
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

      <div className="mt-8 rounded-2xl bg-[#F8F0F2] p-6 sm:p-6 lg:p-8">
        <h3 className="text-lg font-bold text-[#102A43] sm:text-xl mb-6">
          {active.title}{" "}
          <span className="text-[#8B1538]">({active.days})</span>
        </h3>
        
        {(() => {
          const items = active.content;
          if (items.length <= 5) {
            return (
              <div className="flex flex-col gap-3">
                {items.map((item, index) => (
                  <p key={index} className="text-[15px] leading-relaxed text-[#475569] sm:text-base flex items-start">
                    <span className="mr-2.5 mt-[10px] w-[5px] h-[5px] rounded-full bg-[#8B1538] flex-shrink-0"></span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            );
          } else {
            const midpoint = Math.ceil(items.length / 2);
            const leftColumn = items.slice(0, midpoint);
            const rightColumn = items.slice(midpoint);
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-12 relative">
                <div className="flex flex-col gap-3">
                  {leftColumn.map((item, index) => (
                    <p key={index} className="text-[15px] leading-relaxed text-[#475569] sm:text-base flex items-start">
                      <span className="mr-2.5 mt-[10px] w-[5px] h-[5px] rounded-full bg-[#8B1538] flex-shrink-0"></span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
                
                {/* Optional subtle divider visible on tablet/desktop */}
                <div className="hidden md:block absolute left-1/2 top-1 bottom-1 w-px bg-gray-300/60 -translate-x-1/2"></div>
                
                <div className="flex flex-col gap-3 mt-1 md:mt-0">
                  {rightColumn.map((item, index) => (
                    <p key={index + midpoint} className="text-[15px] leading-relaxed text-[#475569] sm:text-base flex items-start">
                      <span className="mr-2.5 mt-[10px] w-[5px] h-[5px] rounded-full bg-[#8B1538] flex-shrink-0"></span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}