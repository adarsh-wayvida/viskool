// Learning Journey Form Section Component - Embedded inline enquiry form above FAQ section
import React, { useState } from 'react';

const CATEGORY_COURSES_MAP = {
  'School Tuitions': [
    'Class 10 CBSE Board Exam Batch',
    'Class 12 Physics & Chemistry',
    'Class 8-12 Interactive Tuitions',
  ],
  'NEET / JEE Prep': [
    'NEET UG 1-Year Master Batch',
    'JEE Main & Advanced 1-Year Program',
    'NEET 2026 Intensive Crash Course',
  ],
  'Digital Marketing': [
    'Digital Marketing Course for Freshers',
    'Advanced Performance Marketing & SEO',
    'Social Media & Content Strategy',
  ],
  'Upskill Courses': [
    'Full Stack Web Development',
    'Python Programming & AI Basics',
    'Data Analytics & Excel Masterclass',
  ],
};

export const LearningJourneyForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    category: '',
    course: '',
    message: '',
    agreePrivacy: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableCourses = formData.category ? CATEGORY_COURSES_MAP[formData.category] || [] : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert('Please agree to the privacy policy before submitting.');
      return;
    }
    setIsSubmitted(true);
    if (onSubmitSuccess) {
      onSubmitSuccess(`Enquiry submitted successfully for ${formData.fullName || 'your request'}!`);
    }
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        category: '',
        course: '',
        message: '',
        agreePrivacy: false,
      });
    }, 4000);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FBF7F9] to-[#F5ECF2] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-4 sm:mb-5">
            Ready to Transform Your
            <span className="block text-[#8B1538] mt-1 md:mt-2 leading-[1.2]">
              Academic & Professional Journey?
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of successful learners today. Book your free counselling session now!
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-100/80">
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
                  className="w-full bg-[#F3EEF4] border-0 rounded-2xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#8B1538] focus:bg-white transition-all outline-none"
                />
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F3EEF4] border-0 rounded-2xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#8B1538] focus:bg-white transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F3EEF4] border-0 rounded-2xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#8B1538] focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>

              {/* Category & Course Dropdowns Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                    CATEGORY
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value, course: '' })}
                    className="w-full bg-[#F3EEF4] border-0 rounded-2xl px-4 py-3.5 text-sm text-gray-800 focus:ring-2 focus:ring-[#8B1538] focus:bg-white transition-all outline-none cursor-pointer appearance-none"
                  >
                    <option value="">Select category</option>
                    {Object.keys(CATEGORY_COURSES_MAP).map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                    COURSE
                  </label>
                  <select
                    disabled={!formData.category}
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-[#F3EEF4] border-0 rounded-2xl px-4 py-3.5 text-sm text-gray-800 disabled:opacity-60 focus:ring-2 focus:ring-[#8B1538] focus:bg-white transition-all outline-none cursor-pointer appearance-none"
                  >
                    <option value="">
                      {formData.category ? 'Select course' : 'Select category first'}
                    </option>
                    {availableCourses.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                  MESSAGE
                </label>
                <textarea
                  rows="3.5"
                  placeholder="Tell us more about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F3EEF4] border-0 rounded-2xl px-4 py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#8B1538] focus:bg-white transition-all outline-none resize-none"
                ></textarea>
              </div>

              {/* Checkbox / Privacy Policy */}
              <div className="flex items-center gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="privacy-check"
                  checked={formData.agreePrivacy}
                  onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                  className="w-4 h-4 text-[#8B1538] border-gray-300 rounded focus:ring-[#8B1538] cursor-pointer"
                />
                <label htmlFor="privacy-check" className="text-xs text-gray-600 cursor-pointer select-none">
                  I agree to the{' '}
                  <a href="#privacy" className="text-gray-900 font-medium underline hover:text-[#8B1538]">
                    privacy policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#8B1538] hover:bg-[#73152C] text-white font-bold py-4 rounded-2xl transition-all shadow-md hover:shadow-lg active:scale-[0.99] text-sm sm:text-base cursor-pointer"
              >
                Send Enquiry
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

