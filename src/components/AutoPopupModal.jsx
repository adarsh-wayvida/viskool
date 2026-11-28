import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useState, useEffect, useRef } from 'react';

const CustomSelect = ({ value, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative" ref={ref}>
      <div
        className={`w-full text-left text-[13px] sm:text-[14px] px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg border focus-within:border-[#8B1538] focus-within:ring-1 focus-within:ring-[#8B1538] outline-none transition-all flex items-center justify-between bg-white ${isOpen ? 'border-[#8B1538] ring-1 ring-[#8B1538]' : 'border-gray-300'} ${value ? 'text-gray-800' : 'text-gray-500'}`}
      >
        <button type="button" className="flex-1 text-left truncate outline-none" onClick={() => setIsOpen(!isOpen)}>
          {selectedOption ? selectedOption.label : placeholder}
        </button>
        <div className="flex items-center gap-2 ml-2">
          {value && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange('');
                setIsOpen(false);
              }}
              className="text-gray-400 hover:text-gray-600 focus:outline-none flex items-center justify-center"
              aria-label="Clear selection"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          )}
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="focus:outline-none flex items-center justify-center">
            <svg className={`w-2.5 h-2.5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1.5 bg-white border border-gray-100 rounded-lg shadow-2xl z-[150] overflow-y-auto max-h-48 py-1 animate-fadeIn">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 text-[13px] sm:text-[14px] transition-colors ${value === opt.value ? 'bg-[#8B1538]/5 text-[#8B1538] font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-[#8B1538]'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const AutoPopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: 'Call',
    course: '',
    contactTime: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const courseOptions = [
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'high-court', label: 'High Court of Kerala' },
    { value: 'jee', label: 'JEE' },
    { value: 'kerala-psc', label: 'Kerala PSC' },
    { value: 'language-skill', label: 'Language Skill' },
    { value: 'neet', label: 'NEET' },
    { value: 'school-tuitions', label: 'School Tuitions' },
    { value: 'upskill-courses', label: 'Upskill courses' }
  ];

  const timeOptions = [
    { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 4 PM)' },
    { value: 'evening', label: 'Evening (4 PM - 7 PM)' }
  ];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-white rounded-[24px] max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col md:flex-row relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 text-xl font-medium cursor-pointer transition-colors hover:bg-gray-100"
        >
          &#x2715;
        </button>

        {/* Left Column: Lottie Animation */}
        <div className="hidden md:flex md:w-5/12 bg-[#F9F4F6] relative overflow-hidden flex-col items-center justify-center min-h-[400px] rounded-l-[24px]">
           <div className="w-full h-full flex items-center justify-center absolute inset-0 mix-blend-multiply opacity-95">
             <DotLottieReact
               src="/learning-journey.lottie"
               loop
               autoplay
               style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(1.45)', transformOrigin: 'center center' }}
             />
           </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full md:w-7/12 p-4 sm:p-8 lg:p-10 flex flex-col justify-center bg-white rounded-[24px] md:rounded-none md:rounded-r-[24px]">
          <h2 className="text-xl sm:text-[28px] font-bold text-[#102A43] tracking-tight mb-4 sm:mb-6">
            Start Your Learning Journey
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] sm:text-[14px] font-semibold text-[#102A43] mb-1 sm:mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-[13px] sm:text-[14px] px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg border border-gray-300 focus:border-[#8B1538] focus:ring-1 focus:ring-[#8B1538] outline-none transition-all placeholder:text-gray-400 text-gray-800"
                />
              </div>
              <div>
                <label className="block text-[12px] sm:text-[14px] font-semibold text-[#102A43] mb-1 sm:mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-[13px] sm:text-[14px] px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg border border-gray-300 focus:border-[#8B1538] focus:ring-1 focus:ring-[#8B1538] outline-none transition-all placeholder:text-gray-400 text-gray-800"
                />
              </div>
            </div>

            {/* Phone & Contact Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] sm:text-[14px] font-semibold text-[#102A43] mb-1 sm:mb-1.5">
                  Phone Number
                </label>
                <div className="flex rounded-lg border border-gray-300 focus-within:border-[#8B1538] focus-within:ring-1 focus-within:ring-[#8B1538] overflow-hidden bg-white">
                  <div className="flex items-center px-3 border-r border-gray-300 text-[13px] sm:text-[14px] font-medium text-gray-700 select-none bg-white">
                    <span className="text-[11px] text-gray-600 font-semibold mr-1.5 tracking-wider">IN</span>
                    +91
                    <svg className="w-2.5 h-2.5 ml-1.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-[13px] sm:text-[14px] px-3 sm:px-3.5 py-2 sm:py-2.5 outline-none placeholder:text-gray-400 text-gray-800"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] sm:text-[14px] font-semibold text-[#102A43] mb-1 sm:mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="flex p-1 rounded-lg border border-gray-300 bg-white">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, contactMethod: 'Call' })}
                    className={`flex-1 py-1 sm:py-1.5 text-[12px] sm:text-[14px] font-semibold rounded-md transition-colors ${
                      formData.contactMethod === 'Call'
                        ? 'bg-[#8B1538]/10 text-[#8B1538]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    Call
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, contactMethod: 'WhatsApp' })}
                    className={`flex-1 py-1 sm:py-1.5 text-[12px] sm:text-[14px] font-semibold rounded-md transition-colors ${
                      formData.contactMethod === 'WhatsApp'
                        ? 'bg-[#8B1538]/10 text-[#8B1538]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Course Selection & Contact Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] sm:text-[14px] font-semibold text-[#102A43] mb-1 sm:mb-1.5">
                  Course Selection
                </label>
                <CustomSelect
                  value={formData.course}
                  onChange={(val) => setFormData({ ...formData, course: val })}
                  options={courseOptions}
                  placeholder="Select a course"
                />
              </div>
              <div>
                <label className="block text-[12px] sm:text-[14px] font-semibold text-[#102A43] mb-1 sm:mb-1.5">
                  Preferred Contact Time
                </label>
                <CustomSelect
                  value={formData.contactTime}
                  onChange={(val) => setFormData({ ...formData, contactTime: val })}
                  options={timeOptions}
                  placeholder="Select a time"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-2.5 sm:py-3 bg-[#8B1538] hover:bg-[#73152C] text-white text-[13px] sm:text-[14px] font-bold rounded-xl transition-all shadow-md active:scale-95"
              >
                Submit Enquiry
              </button>
              <p className="text-[11px] sm:text-[12px] text-gray-500 font-medium">
                We'll contact you shortly. No spam.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
