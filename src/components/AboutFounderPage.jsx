import React from 'react';
import { Allura } from 'next/font/google';
import {
  IconBrandYoutube,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandX,
  IconBrandPinterest
} from '@tabler/icons-react';

const allura = Allura({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const videoThumbnails = [
  '/images/founder/eE5krHCN__U-SD.webp',
  '/images/founder/jyqUjNk3Ia0-HD.webp',
  '/images/founder/N2ZG0nv3qBo-HD.webp',
  '/images/founder/OhRTT3qVreM-HD.webp',
  '/images/founder/UgHCR--kBzU-HD.webp',
  '/images/founder/z17J3DW7CO8-HD.webp',
];

const books = [
  {
    title: 'Smile with English for Competitive Exams',
    author: 'By Dr. Gireesh Neyyar · Talent Academy',
    image: '/images/founder/book1.webp'
  },
  {
    title: 'Indian Constitution for Competitive Exams',
    author: '3rd Edition · Revised & Updated · By Dr. Gireesh Neyyar',
    image: '/images/founder/book4.webp'
  },
  {
    title: 'PSC English',
    author: '19th Updated Edition · By Gireesh Neyyar · Talent Academy',
    image: '/images/founder/book2.webp'
  },
  {
    title: 'Rules of English',
    author: 'Through PSC previous examinations · By Dr. Gireesh Neyyar',
    image: '/images/founder/book3.webp'
  }
];

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

              <div className="font-sans max-w-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-4 mt-2">
                <div>
                  <p className="text-base font-bold text-[#102A43] sm:text-lg">Adv. Gireesh Neyyar</p>
                  <p className="mt-1 text-sm font-medium text-[#1769D2] sm:text-base">Founder, Viskool</p>
                </div>
                
                {/* Social Icons */}
                <div className="flex items-center justify-center sm:justify-end gap-3">
                  {[
                    { icon: <IconBrandYoutube size={20} stroke={2} />, name: 'YouTube', href: '#' },
                    { icon: <IconBrandFacebook size={20} stroke={2} />, name: 'Facebook', href: '#' },
                    { icon: <IconBrandLinkedin size={20} stroke={2} />, name: 'LinkedIn', href: '#' },
                    { icon: <IconBrandInstagram size={20} stroke={2} />, name: 'Instagram', href: '#' },
                    { icon: <IconBrandX size={20} stroke={2} />, name: 'X', href: '#' },
                    { icon: <IconBrandPinterest size={20} stroke={2} />, name: 'Pinterest', href: '#' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#8B1538] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8B1538] hover:text-white hover:shadow-md"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
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
            <div className="mb-8 sm:mb-10 text-left">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
                WATCH & LEARN
              </p>
              <h2 className="mb-4 text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px]">
                Trending Videos by <span className="text-[#8B1538]">Founder</span>
              </h2>
              <p className="max-w-2xl text-base font-medium text-[#102A43]/80 sm:text-lg">
                Real talks, real moments, straight from our Founder.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {videoThumbnails.map((src, i) => (
                <div key={i} className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer border border-gray-100">
                  <div className="absolute inset-0 bg-gray-100/50">
                    <img src={src} alt={`Video thumbnail ${i + 1}`} className="h-full w-full object-cover" />
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 transition-colors group-hover:bg-black/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
                      <svg className="ml-1 h-5 w-5 text-[#8B1538] sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center sm:mt-10">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[#8B1538] px-8 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#73152C] hover:shadow-md active:scale-95 sm:py-3.5 sm:text-[15px]"
              >
                See more
              </button>
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
                  <span className="text-[#8B1538]">Gireesh Neyyar: A Leader</span><br />
                  Who Believes Every Learner<br />
                  Can Catch Up
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

      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 sm:pt-0 lg:px-8 lg:pb-14 lg:pt-0">
        <div className="mx-auto max-w-7xl">
          <div className="w-full max-w-none rounded-3xl border border-[#8B1538]/10 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-9 lg:px-10 lg:py-10">
            <div className="mb-8 sm:mb-10 text-left">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">
                PUBLICATIONS
              </p>
              <h2 className="mb-4 text-[28px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[34px] lg:text-[40px]">
                Books by the <span className="text-[#8B1538]">Founder</span>
              </h2>
              <p className="max-w-2xl text-base font-medium text-[#102A43]/80 sm:text-lg">
                Explore books authored by Adv. Gireesh Neyyar.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {books.map((book, i) => (
                <div key={i} className="group relative w-full overflow-hidden rounded-2xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100 flex flex-col">
                  <div className="aspect-[3/4] w-full bg-gray-100/50 flex items-center justify-center overflow-hidden"><img src={book.image} alt={book.title} className="h-full w-full object-cover" /></div>
                  <div className="flex flex-1 flex-col p-5 text-center">
                    <h3 className="mb-2 text-base font-bold leading-snug text-[#102A43]">{book.title}</h3>
                    <p className={`text-sm font-medium text-gray-500 ${i === 2 ? '' : 'mt-auto'}`}>{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

