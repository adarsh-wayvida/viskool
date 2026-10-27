import React from 'react';
import { Allura } from 'next/font/google';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const AboutFounderPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="w-full overflow-hidden"
        style={{
          background:
            'linear-gradient(110deg, #D994A8 0%, #E5B3C1 48%, #F0D7DE 100%)',
        }}
      >
        <div className="grid min-h-[520px] grid-cols-1 md:grid-cols-[45%_55%] lg:min-h-[560px]">
          <div className="flex min-h-[280px] items-end justify-center md:min-h-0">
            <img
              src="/images/founder/viskool-founder-contrast-burgundy.webp"
              alt="Viskool founder"
              className="h-full max-h-[252px] w-auto max-w-[90%] object-contain object-bottom md:max-h-[468px] lg:max-h-[504px]"
            />
          </div>
          <div className="flex min-h-[240px] items-center px-5 py-10 sm:px-8 md:min-h-0 md:px-10 md:py-12 lg:px-14">
            <div className="w-full max-w-2xl text-left text-[#102A43]">
              <h1 className="mb-7 font-sans leading-none sm:mb-8">
                <span className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3">
                  <span className="text-base font-bold uppercase tracking-[0.16em] sm:text-lg">A</span>
                  <span className={`${allura.className} text-5xl font-normal normal-case tracking-normal sm:text-6xl lg:text-7xl`}>
                    Personal Note
                  </span>
                  <span className="text-base font-bold uppercase tracking-[0.16em] sm:text-lg">FROM</span>
                </span>
                <span className="mt-1 block text-4xl font-extrabold uppercase tracking-[0.04em] sm:text-5xl lg:text-[56px]">
                  Our Founder
                </span>
              </h1>

              <blockquote className="mb-7 max-w-xl font-sans text-sm font-normal not-italic leading-7 text-[#102A43]/85 sm:text-[15px] sm:leading-7 lg:text-base lg:leading-8">
                “Hello, students and parents. Education should not depend on where you live or what you can afford to travel for. Viskool is built for every learner who wants to move ahead, from a Class 5 student to a graduate looking for a better career. Our mentors, regular evaluations, and progress tracking exist so that no learner is left behind. Thank you for letting us be part of your learning journey.”
              </blockquote>

              <div className="font-sans">
                <p className="text-base font-bold text-[#102A43] sm:text-lg">Adv. Gireesh Neyyar</p>
                <p className="mt-1 text-sm font-medium text-[#1769D2] sm:text-base">Founder, Viskool</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
