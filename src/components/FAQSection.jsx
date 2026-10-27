// FAQSection Component - Interactive Expandable Accordion
import React, { useState } from 'react';

const DEFAULT_TITLE = (
  <>Got Questions? We've Got{' '}<span className="text-[#8B1538] leading-[1.2]">Answers</span></>
);

export const FAQSection = ({ faqs, onActionClick, title = DEFAULT_TITLE, initialOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState(initialOpenIndex);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-6 lg:py-8 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-3">
            {title}
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-[#8B1538]/30 bg-[#FCF8F9] shadow-sm' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    toggleFAQ(idx);
                    onActionClick(`FAQ toggled: ${faq.question}`);
                  }}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base ${isOpen ? 'text-[#8B1538]' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>

                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#8B1538] text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-[#8B1538]/10 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
};

