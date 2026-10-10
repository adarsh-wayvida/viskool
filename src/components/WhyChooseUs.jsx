// WhyChooseUs Component - Benefits Grid
import React from 'react';

export const WhyChooseUs = ({ benefits, onActionClick }) => {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Why Students Choose{' '}
            <span className="font-serif italic text-[#8B1538] font-bold">
              Viskool
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Learn from experienced mentors through structured courses, interactive classes, and personalized support that make learning simple, effective, and accessible.
          </p>
        </div>

        {/* Benefits Grid Layout matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Large Card: Live & Recorded Online Classes */}
          <div 
            onClick={() => onActionClick('Benefit: Live and Recorded Online Classes')}
            className="lg:col-span-6 bg-[#FCF8F9] border border-[#F1E0E5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between group hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="rounded-2xl overflow-hidden mb-6 h-64 sm:h-80 relative shadow-md">
              <img
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80"
                alt="Live and Recorded Online Classes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#8B1538] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                Interactive Live &amp; HD Video
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#8B1538]/10 text-[#8B1538] flex items-center justify-center font-bold text-lg">
                  📹
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#8B1538] transition-colors">
                  Live and Recorded Online Classes
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Real-time mentorship with personalized attention and anytime access to high quality video learning resources, class recordings, and chapter notes.
              </p>
            </div>
          </div>

          {/* Right Column (2 stacked cards) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-8">
            
            {/* Top Right Card: From School Learning to Career Success */}
            <div 
              onClick={() => onActionClick('Benefit: School Learning to Career Success')}
              className="bg-[#FCF8F9] border border-[#F1E0E5] rounded-3xl p-6 sm:p-8 group hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8B1538] text-white flex items-center justify-center text-xl shrink-0 shadow-md group-hover:scale-110 transition-transform">
                  🎓
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#8B1538] transition-colors mb-2">
                    From School Learning to Career Success
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Structured curriculum covering academic foundations from Class 1 to Class 12, competitive exams preparation (NEET/JEE/KEAM), through advanced career skill development.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Right Card: A Great Community */}
            <div 
              onClick={() => onActionClick('Benefit: A Great Community')}
              className="bg-[#FCF8F9] border border-[#F1E0E5] rounded-3xl p-6 sm:p-8 group hover:shadow-xl transition-all duration-300 cursor-pointer flex-1 flex flex-col justify-between"
            >
              <div className="rounded-2xl overflow-hidden mb-6 h-48 relative shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
                  alt="A Great Community"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#8B1538]/10 text-[#8B1538] flex items-center justify-center font-bold text-lg">
                    👥
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#8B1538] transition-colors">
                    A Great Community
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Connect with mentors, peer learners, and industry alumni to foster a collaborative and motivating atmosphere.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
