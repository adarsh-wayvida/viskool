// AnnouncementBar Component - Top Marquee Banner
import React from 'react';

export const AnnouncementBar = ({ items, onActionClick }) => {
  return (
    <div 
      className="w-full overflow-x-auto border-b border-black/5 bg-[#F8F0F2] text-[#1A1A1A] py-2.5 text-xs sm:text-sm font-medium relative select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x"
      role="region" 
      aria-label="Site Announcements"
    >
      <div className="flex w-max animate-marquee [animation-duration:60s] hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] active:[animation-play-state:paused] motion-reduce:animate-none cursor-pointer">
        {/* Render repeated sequence for seamless infinite scroll (4 copies for perfect 50% loop on ultra-wide screens) */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div 
            key={idx} 
            onClick={() => onActionClick && onActionClick(`Announcement: ${item.highlight || item.text}`)}
            className="flex items-center shrink-0 px-4 group gap-1"
          >
            <span className="text-sm">{item.icon}</span>
            {item.text && <span>{item.text.trim()}</span>}
            {item.highlight && (
              <strong className="text-[#8B1538] font-bold group-hover:underline">
                {item.highlight.trim()}
              </strong>
            )}
            {item.suffix && <span>{item.suffix.trim()}</span>}
            <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#8B1538]/40" />
          </div>
        ))}
      </div>
    </div>
  );
};
