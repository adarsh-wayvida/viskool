"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ParentVideoSlider, PARENT_VIDEOS_DATA } from './ParentTestimonialsPage.jsx';

export const HomeParentVideoTestimonials = () => {
  const router = useRouter();
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleViewAll = () => {
    router.push('/parent-testimonials');
  };

  return (
    <section className="bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParentVideoSlider 
          title={
            <>
              Hear What Parents <span className="text-[#8B1538] italic">Have to Say</span>
            </>
          }
          subtitle={
            <span className="text-gray-500 text-sm sm:text-base font-medium">
              Trusted by thousands of parents for academic improvement and career growth.
            </span>
          }
          hideLabel={true}
          centerHeader={true}
          containerClassName="py-2 mt-2 mb-4"
          onViewAll={handleViewAll}
          onPlayVideo={(v) => setActiveVideo(v)}
          isModalOpen={!!activeVideo}
          videos={PARENT_VIDEOS_DATA}
        />
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center text-lg font-bold transition-all cursor-pointer"
            >
              ✕
            </button>
            <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
              <img src={activeVideo.image || 'parent-card-father-son.jpg'} alt="Video cover" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <div className="w-16 h-16 rounded-full bg-[#F5BA31] text-gray-900 flex items-center justify-center text-2xl font-bold mb-3 shadow-lg">
                  ▶
                </div>
                <h4 className="text-lg font-bold">{activeVideo.parentRole}</h4>
                <p className="text-xs text-gray-200 mt-1 max-w-md">{activeVideo.quote}</p>
              </div>
            </div>
            <div className="p-5 bg-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#8B1538] uppercase tracking-wider">{activeVideo.courseName}</span>
                <p className="text-xs text-gray-500 mt-0.5">Parent Video Story • Duration {activeVideo.duration}</p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="px-4 py-2 bg-[#8B1538] hover:bg-[#73152C] text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
