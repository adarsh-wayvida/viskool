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
              <div className="mb-7 font-sans sm:mb-8">
                <div className="flex flex-wrap items-baseline gap-x-2 leading-none sm:gap-x-3">
                  <span className="text-base font-bold uppercase tracking-[0.16em] sm:text-lg">A</span>
                  <span className={`${allura.className} text-5xl font-normal normal-case tracking-normal sm:text-6xl lg:text-7xl`}>
                    Personal Note
                  </span>
                  <span className="text-base font-bold uppercase tracking-[0.16em] sm:text-lg">FROM</span>
                </div>
                <h2 className="mt-0.5 text-[28px] font-bold uppercase leading-[1.2] tracking-[0.04em] sm:text-[34px] lg:text-[40px]">
                  Our Founder
                </h2>
              </div>

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

      <section className="bg-[#FCF8F9] px-4 py-10 font-sans sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
              His Journey
            </p>

            <h2 className="text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px] lg:whitespace-nowrap">
              The Journey That Shaped <span className="text-[#8B1538]">Viskool</span>
            </h2>

            <p className="mt-4 max-w-4xl text-base font-semibold leading-relaxed text-[#102A43]/80 sm:text-lg">
              From a Dropout to the Founder: Gireesh Neyyar&apos;s Journey of Resilience and Reinvention in Education
            </p>

            <div className="mt-7 grid w-full max-w-none grid-cols-1 gap-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8 lg:grid-cols-2 lg:gap-8">
              <div className="min-w-0 space-y-5">
                <p>
                  Adv. Gireesh Neyyar is the founder of Viskool. His journey is an example of how determination and hard work can help a person overcome challenges and achieve their goals. He left school in Class 8 and worked in daily wage jobs for seven years to support himself. Later, he completed his schooling privately and went on to earn degrees in Literature, Law, Management and Journalism. He also qualified for the Civil Services Mains Examination.
                </p>

                <p>
                  With over 20 years of experience in management, administration, academics, IT, sales and marketing, he has worked across different fields. He also held government positions before choosing to become an entrepreneur. He built two education companies, which were later acquired by a publicly listed company.
                </p>
              </div>

              <div className="min-w-0 space-y-5">
                <p>
                  His decision to start Viskool came from a simple belief: everyone deserves access to quality education and better opportunities to grow. He wanted to use technology to make learning more accessible for students and help educators reach more people. Today, Viskool offers school tuition, competitive exam coaching, language training and career skills.
                </p>

                <p className="w-full rounded-2xl bg-[#F8F0F2] px-5 py-4 font-medium text-[#102A43] sm:px-6">
                  At the heart of Viskool is the belief that everyone deserves a chance to learn and move forward, no matter where they start in life. Because starting late should never mean giving up on your dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 sm:pt-0 lg:px-8 lg:pb-14 lg:pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="grid w-full max-w-none grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
              {/* Left Column */}
              <div className="min-w-0">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
                  LEADERSHIP
                </p>
                <h2 className="mb-6 text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px]">
                  Gireesh Neyyar: A Leader Who Believes Every Learner Can Catch Up
                </h2>
                <div className="space-y-5 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
                  <p>
                    From founding Talent Academy to leading Viskool, Adv. Gireesh Neyyar has focused on understanding learners' needs and finding better ways to help them succeed. His journey inspires students, parents, and young professionals to keep learning and moving forward.
                  </p>
                  <p>
                    His vision is to create a learning community where every student gets personal attention, can track their progress, and has access to quality education regardless of their background, location, or financial situation.
                  </p>
                  <p>
                    At Viskool, experienced mentors, regular assessments, and technology come together to help learners prepare for exams and careers. Students can learn from home with personal guidance, while parents can easily follow their child's progress.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="min-w-0 flex h-full items-center justify-center">
                <img 
                  src="/images/founder/Sir-Photo.webp" 
                  alt="Adv. Gireesh Neyyar" 
                  className="h-auto w-full max-w-[500px] lg:max-w-full rounded-2xl object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
