"use client";

import React, { useState } from "react";

const COUNTRY_CODES = [
  { code: "+91", label: "India (+91)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+1", label: "USA (+1)" },
  { code: "+44", label: "UK (+44)" },
];

export default function DigitalMarketingLeadForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91",
    phone: "",
    city: "",
    course: "Digital Marketing",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        countryCode: "+91",
        phone: "",
        city: "",
        course: "Digital Marketing",
      });
    }, 4000);
  };

  const inputClass =
    "w-full bg-[#F3EEF4] border-0 rounded-2xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#8B1538] focus:bg-white transition-all outline-none";

  return (
    <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-6 md:p-8">
      {isSubmitted ? (
        <div className="text-center py-10 space-y-3">
          <div className="w-16 h-16 bg-[#8B1538]/10 text-[#8B1538] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-gray-900">Enquiry Received!</h3>
          <p className="text-gray-600 text-sm max-w-md mx-auto">
            Thank you for contacting Viskool. Our academic advisor will reach out to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col gap-4">
            {/* Full Name */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              FULL NAME
            </label>
            <input
              type="text"
              required
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={inputClass}
            />
          </div>

          {/* Phone Number with country code */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              PHONE NUMBER
            </label>
            <div className="grid grid-cols-[110px_1fr] gap-3">
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                className={inputClass + " cursor-pointer appearance-none"}
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                required
                placeholder="9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          {/* City or District */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              CITY OR DISTRICT
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Kochi"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={inputClass}
            />
          </div>

          {/* Course (locked) */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              COURSE
            </label>
            <input
              type="text"
              readOnly
              value="Digital Marketing"
              className={inputClass + " cursor-not-allowed opacity-70"}
            />
          </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8B1538] text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
          >
            Submit Enquiry
          </button>
        </form>
      )}
    </div>
  );
}