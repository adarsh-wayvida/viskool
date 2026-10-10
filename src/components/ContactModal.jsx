// ContactModal Component - Centered Modal Matching Design Reference (2-Column Layout)
import React, { useState, useEffect, useRef } from 'react';

export const ContactModal = ({ isOpen, onClose, initialData, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const previousActiveElementRef = useRef(null);
  const firstNameInputRef = useRef(null);

  // Handle body scroll locking, escape key, and focus trap / restoration
  useEffect(() => {
    if (isOpen) {
      previousActiveElementRef.current = document.activeElement;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      // Focus first input field
      setTimeout(() => {
        if (firstNameInputRef.current) {
          firstNameInputRef.current.focus();
        }
      }, 50);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        if (previousActiveElementRef.current && typeof previousActiveElementRef.current.focus === 'function') {
          previousActiveElementRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      if (onSubmitSuccess) {
        onSubmitSuccess('Thank you! Our friendly team will contact you shortly.');
      }
      setIsSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-gray-100 flex flex-col md:flex-row relative transition-all duration-300 transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 md:top-5 md:right-5 z-30 w-9 h-9 rounded-full bg-gray-100/90 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-lg font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          ✕
        </button>

        {/* Left Column: Form Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto bg-white">
          <div>
            {/* Header */}
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-1.5">
              Get in touch
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-normal mb-6">
              Our friendly team would love to hear from you.
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl font-bold mb-4 shadow-sm">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-xs leading-relaxed">
                  Thank you for reaching out. Our academic team will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name & Last Name (Side by side) */}
                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1">
                      First name
                    </label>
                    <input
                      ref={firstNameInputRef}
                      type="text"
                      required
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-800 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Phone Number with IN +91 Prefix */}
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Phone number
                  </label>
                  <div className="flex">
                    <span className="bg-gray-50 border border-gray-200 border-r-0 rounded-l-xl px-3 py-2.5 text-xs font-semibold text-gray-600 flex items-center justify-center shrink-0">
                      IN +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-r-xl border border-gray-200 focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Leave us a message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-[#8B1538] focus:ring-2 focus:ring-[#8B1538]/20 outline-none transition-all resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#F5BA31] hover:bg-[#E5AC25] text-gray-900 font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-all duration-200 active:scale-[0.99] cursor-pointer"
                  >
                    Send message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Visual Panel Image */}
        <div className="w-full md:w-1/2 relative bg-gray-100 hidden md:block overflow-hidden min-h-[420px]">
          <img
            src="contact-panel-agent.jpg"
            alt="Viskool Customer Support Team"
            className="w-full h-full object-cover object-center"
          />
        </div>

      </div>
    </div>
  );
};
