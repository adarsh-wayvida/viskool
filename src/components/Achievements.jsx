// Achievements Component - High Polish Infinite Auto-Scrolling Marquee displaying Identically Proportioned Predesigned Card Assets
import React from 'react';

export const Achievements = ({ achievements, onActionClick }) => {
  // Duplicate array multiple times for infinite seamless scrolling effect
  const marqueeItems = [...achievements, ...achievements, ...achievements, ...achievements];

  return (
    <section className="py-12 sm:py-16 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Inline Keyframes for Marquee Animation */}
      <style>{`
        @keyframes achievementsMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-achievements-marquee {
          display: flex;
          width: max-content;
          animation: achievementsMarquee 35s linear infinite;
        }
        .animate-achievements-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Students{' '}
            <span className="italic text-[#8B1538] font-extrabold">
              Achievements
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
            Celebrating our top rankers and exam achievers from Kerala
          </p>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Left Marquee Track */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Soft Side Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#FAFAFA] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#FAFAFA] to-transparent z-20 pointer-events-none" />

        <div className="animate-achievements-marquee gap-6 sm:gap-8 px-4 items-center">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => onActionClick && onActionClick(`Achievement clicked: ${item.name}`)}
              className="w-[280px] sm:w-[320px] aspect-[706/838] shrink-0 rounded-[28px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer select-none border border-black/5 bg-transparent"
            >
              <img
                src={item.cardImage}
                alt={item.name}
                className="w-full h-full object-cover block rounded-[28px]"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
