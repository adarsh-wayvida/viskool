import React from "react";

export const AboutUsPage = () => {
  return (
    <div className="w-full bg-[#FCFCFD] min-h-screen selection:bg-[#8B1538] selection:text-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-20 w-full bg-[#8B1538] bg-cover bg-[center_35%] bg-no-repeat">
        {/* Semi-transparent burgundy gradient overlay (65% opacity to match student testimonials, layered over solid fallback until image is added) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/65 to-[#73152C]/65"></div>

        {/* Subtle radial dark overlay behind text to improve readability without a visible box */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(0,0,0,0.3)_0%,_transparent_65%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center text-left">
          <nav className="flex items-center gap-2 text-sm font-medium text-white/80 mb-6 drop-shadow-sm">
            <a
              href="/"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </a>
            <span>&gt;</span>
            <span className="text-white cursor-default">About Us</span>
          </nav>

          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-2 drop-shadow-md">
            ABOUT US
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 font-sans drop-shadow-md max-w-4xl">
            Learning, Skills & Career Growth at Viskool Learning
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-white/95 font-semibold max-w-3xl font-sans drop-shadow-md mb-2">
            One Platform for Every Learning Goal.
          </p>

          <p className="text-base sm:text-lg text-white/85 font-normal max-w-2xl font-sans drop-shadow-md">
            One trusted platform for academics, competitive exams and job-ready
            skills, with personal mentoring.
          </p>
        </div>
      </section>
    </div>
  );
};
