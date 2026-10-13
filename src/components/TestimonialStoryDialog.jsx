import React from 'react';

// Helper component to render achievement icons
const AchievementIcon = ({ type }) => {
  if (type === 'chart') {
    return (
      <svg className="w-4 h-4 text-[#8B1538] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    );
  }
  if (type === 'trophy') {
    return (
      <svg className="w-4 h-4 text-[#8B1538] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4a5 5 0 005 5h4a5 5 0 005-5V3M5 3h14M5 3H3v4a7 7 0 007 7h.01M19 3h2v4a7 7 0 01-7 7m-4 0v4m0 0H8m4 0h4m-4 4v-4" />
      </svg>
    );
  }
  if (type === 'trending') {
    return (
      <svg className="w-4 h-4 text-[#8B1538] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    );
  }
  if (type === 'briefcase') {
    return (
      <svg className="w-4 h-4 text-[#8B1538] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  // Default: Graduation cap academic icon
  return (
    <svg className="w-4 h-4 text-[#8B1538] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
};

// Faceless student placeholder icon component
const FacelessStudentPlaceholder = () => (
  <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center shadow-xs">
      <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
);

// Star Rating Component
const StarRating = ({ rating = 5 }) => (
  <div className="flex items-center gap-0.5 text-amber-400 shrink-0" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <svg 
        key={i} 
        className={`w-3.5 h-3.5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`} 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const TestimonialStoryDialog = ({ story, onClose }) => {
  const closeRef = React.useRef(onClose);
  closeRef.current = onClose;
  React.useLayoutEffect(() => {
    if (!story) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const root = document.documentElement;
    const previousGutter = root.style.scrollbarGutter;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    if (CSS.supports('scrollbar-gutter', 'stable')) {
      root.style.scrollbarGutter = 'stable';
    } else if (scrollbarWidth > 0) {
      const currentPadding = parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
      document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
    }
    document.body.style.overflow = 'hidden';
    const dialog = document.querySelector('[aria-labelledby="testimonial-story-title"]');
    const closeButton = dialog && dialog.querySelector('button');
    if (closeButton) closeButton.focus({ preventScroll: true });
    const trapFocus = (event) => {
      if (event.key === 'Escape') { closeRef.current(); return; }
      if (event.key !== 'Tab') return;
      const dialog = document.querySelector('[aria-labelledby="testimonial-story-title"]');
      const buttons = dialog ? Array.from(dialog.querySelectorAll('button')) : [];
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', trapFocus);
    return () => {
      document.body.style.overflow = previousOverflow;
      root.style.scrollbarGutter = previousGutter;
      document.body.style.paddingRight = previousPadding;
      document.removeEventListener('keydown', trapFocus);
      if (previousFocus && previousFocus.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [story]);

  if (!story) return null;
  return (
<div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => onClose()}
        >
          <div
            role="dialog" aria-modal="true" aria-labelledby="testimonial-story-title" className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#8B1538]/15 space-y-5 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => onClose()}
              aria-label="Close full review"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-[#8B1538] hover:text-white flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Header Profile */}
            <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
                {story.image ? (
                  <img src={story.image} alt={story.name} className="w-full h-full object-cover object-top scale-110" />
                ) : (
                  <FacelessStudentPlaceholder />
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8B1538] bg-[#8B1538]/10 border border-[#8B1538]/15 px-2.5 py-0.5 rounded-full inline-block">
                    {story.category}
                  </span>
                  <StarRating rating={story.rating || 5} />
                </div>
                <h3 id="testimonial-story-title" className="text-xl font-extrabold text-gray-900 tracking-tight">{story.name}</h3>
                <p className="text-xs font-semibold text-gray-500">{story.tag}</p>
              </div>
            </div>

            {/* Full Testimonial Quote */}
            <div className="relative pt-2">
              <div className="text-[#8B1538]/15 font-serif text-5xl leading-none absolute -top-3 -left-2 pointer-events-none">“</div>
              <p className="text-sm text-gray-700 leading-relaxed relative z-10 font-normal italic whitespace-pre-line">
                {story.quote}
              </p>
            </div>

            {/* Achievement Tag if available */}
            {story.achievement && (
              <div className="bg-[#FAF2F5] border border-[#8B1538]/15 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white shadow-2xs shrink-0">
                  <AchievementIcon type={story.achievement.type} />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#8B1538]">
                    KEY ACHIEVEMENT
                  </span>
                  <span className="block text-xs font-bold text-gray-900">
                    {story.achievement.label}
                  </span>
                </div>
              </div>
            )}

            {/* Footer Action */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => onClose()}
                className="bg-[#8B1538] hover:bg-[#73152C] text-white font-bold text-xs px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
  );
};
