"use client";

import React from "react";
import { FEATURED_COURSES } from "../data/mockData.js";
import { CourseSection } from "./CourseSection.jsx";
import { HomeStudentTestimonials } from "./HomeStudentTestimonials.jsx";
import { FAQSection } from "./FAQSection.jsx";
import { LearningJourneyForm } from "./LearningJourneyForm.jsx";

const ABOUT_TESTIMONIALS = [
  {
    id: "about-testimonial-rejitha",
    name: "Rejitha",
    tag: "Parent of Reyna",
    quote:
      "My daughter used to hesitate to ask doubts in a big class. With her one-to-one teacher, she now asks freely, and her marks have improved.",
    image:
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" rx="24" fill="%23F1E0E5"/%3E%3Ctext x="24" y="30" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="%238B1538"%3ER%3C/text%3E%3C/svg%3E',
  },
  {
    id: "about-testimonial-kishore",
    name: "Kishore",
    tag: "NEET Aspirant",
    quote:
      "The NEET practice tests and doubt-clearing sessions kept me on track every week.",
    image:
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" rx="24" fill="%23F1E0E5"/%3E%3Ctext x="24" y="30" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="%238B1538"%3EK%3C/text%3E%3C/svg%3E',
  },
  {
    id: "about-testimonial-devika",
    name: "Devika",
    tag: "Makeup Studio",
    quote:
      "I joined the Digital Marketing course with no experience. The hands-on projects helped me feel job ready.",
    image:
      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"%3E%3Crect width="48" height="48" rx="24" fill="%23F1E0E5"/%3E%3Ctext x="24" y="30" text-anchor="middle" font-family="Arial" font-size="18" font-weight="700" fill="%238B1538"%3ED%3C/text%3E%3C/svg%3E',
  },
];

const ABOUT_FAQS = [
  {
    question: "What is Viskool?",
    answer:
      "Viskool is a Kerala-born online learning platform offering one-to-one mentoring for school tuition, competitive exams, and career skills. It was founded in 2023 and has learners in 70+ countries.",
  },
  {
    question: "What courses does Viskool offer?",
    answer: (
      <div className="space-y-3">
        <p>We offer four areas of learning:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <span className="font-semibold text-gray-700">School tuition:</span>{" "}
            Classes 5 to 12 (Kerala State, CBSE, ICSE and IGCSE)
          </li>
          <li>
            <span className="font-semibold text-gray-700">
              Competitive exam training:
            </span>{" "}
            NEET, JEE, PSC, and High Court Assistant
          </li>
          <li>
            <span className="font-semibold text-gray-700">
              Commerce tuition:
            </span>{" "}
            CA and CMA
          </li>
          <li>
            <span className="font-semibold text-gray-700">
              Skills and careers:
            </span>{" "}
            Digital Marketing, Performance Marketing, Data Analytics, AI Tools,
            Power BI, Coding, Robotics &amp; Game Development, and English
            grammar and spoken English
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How is learning at Viskool different from regular coaching?",
    answer:
      "Every student gets personal attention from a mentor, regular tests with honest feedback, and clear progress tracking. You learn from home with a plan built around you, not a crowded classroom.",
  },
  {
    question: "Are the classes online?",
    answer:
      "Yes. All classes are live and online, so you can learn from anywhere in India, the Gulf, or any other country.",
  },
  {
    question: "Who can join Viskool?",
    answer:
      "School students from Class 5 to 12, entrance and PSC aspirants, commerce students, graduates, and working professionals who want to build new skills.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "Choose your course, then book a free demo class or fill in the enquiry form. Our team will call you, guide you through the options, and complete your enrollment.",
  },
  {
    question: "Can I try a class before enrolling?",
    answer:
      "Yes. You can book a free demo class and a free assessment, with no obligation to join.",
  },
  {
    question: "How can parents track their child's progress?",
    answer:
      "Through regular evaluations, test results, and feedback from the mentor. This lets parents see how their child is improving over time.",
  },
  {
    question: "How do I contact Viskool?",
    answer:
      "Call or WhatsApp us on [phone number], email [email ID], or fill in the Contact Us form. You can also use the “Talk to an Expert” button on any page.",
  },
  {
    question: "Is Viskool suitable for students outside Kerala?",
    answer:
      "Yes. We serve students across India and the GCC, including Dubai (UAE), Qatar, Saudi Arabia, and Oman.",
  },
];

export const AboutViskoolPage = () => {
  const handleCourseAction = () => {};

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* 1. HERO BANNER SECTION (Copied exactly from Student Testimonials, image empty) */}
      <section
        className="relative overflow-hidden py-16 sm:py-24 lg:py-28 w-full bg-cover bg-[center_35%] bg-no-repeat"
        style={{
          backgroundImage: "url('/about-viskool-graduates-1920x760.webp')",
        }}
      >
        {/* Semi-transparent burgundy gradient overlay (65% opacity treatment preserved) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/65 to-[#73152C]/65"></div>

        {/* Subtle radial dark overlay behind text to improve readability without a visible box */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_0%,_transparent_65%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
          <nav className="flex items-center justify-center gap-2 text-sm font-medium text-white/80 mb-6 drop-shadow-sm">
            <a
              href="/"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </a>
            <span>&gt;</span>
            <span className="cursor-default">About Us</span>
            <span>&gt;</span>
            <span className="text-white cursor-default">About Viskool</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 font-sans drop-shadow-md">
            One Platform for Every Learning Goal.
          </h1>

          <p className="text-lg sm:text-xl text-white/95 font-normal max-w-2xl font-sans drop-shadow-md mb-10 sm:mb-12">
            One trusted platform for academics, competitive exams and job-ready
            skills, with personal mentoring.
          </p>

          {/* Static Banner Statistics Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 w-full max-w-5xl mx-auto">
            {[
              { value: "15,000+", label: "ACTIVE LEARNERS" },
              { value: "95%", label: "COURSE COMPLETION RATE" },
              { value: "65%", label: "SALARY HIKE / RANK BOOST" },
              {
                value: (
                  <span className="inline-flex items-center gap-1">
                    4.9/5 {"\u2605"}
                  </span>
                ),
                label: "PARENT & STUDENT RATING",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-black/35 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-0.5"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1.5 drop-shadow-sm whitespace-nowrap">
                  {stat.value}
                </div>
                <div className="text-[9.5px] sm:text-[10px] lg:text-xs font-bold text-white/80 uppercase tracking-widest leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WELCOME TO VISKOOL SECTION */}
      <section className="pt-12 sm:pt-16 lg:pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
            {/* Left Column: Heading and Image */}
            <div className="w-full lg:w-[45%] flex flex-col">
              <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-6 sm:mb-8">
                <span className="text-[#8B1538]">Welcome to Viskool</span>{" "}
                Learning
              </h2>

              {/* Image Container */}
              <div className="w-full aspect-[4/3] bg-[#F3F4F6] rounded-3xl overflow-hidden shadow-sm">
                <img
                  src="/about-viskool-learning-section.webp"
                  alt="Viskool learners collaborating through online learning"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full lg:w-[55%] flex flex-col pt-1 lg:pt-2">
              <div className="text-gray-700 text-[15px] sm:text-base leading-relaxed space-y-5 sm:space-y-6">
                <p>
                  Welcome to Viskool, an online learning platform that gives
                  every student personal attention. We offer one-to-one school
                  tuition for Classes 5 to 12 across Kerala State, CBSE, ICSE,
                  and IGCSE syllabi, along with focused commerce tuition for CA
                  and CMA aspirants. For competitive exams, our expert mentors
                  prepare students for NEET, JEE, PSC, and High Court Assistant,
                  with regular tests and feedback that show exactly where to
                  improve.
                </p>
                <p>
                  Beyond academics, Viskool helps learners build job-ready
                  skills in Digital Marketing, Performance Marketing, Data
                  Analytics, AI Tools, Power BI, and Coding, Robotics & Game
                  Development, plus English grammar and spoken English for
                  everyday confidence. Every course comes with personal
                  mentoring, regular evaluations, and progress tracking, so
                  learners and parents always know how far they have come. With
                  over 70,000 enrollments and learners in 70+ countries, Viskool
                  is committed to making quality education accessible,
                  supportive, and result-focused for every student, wherever
                  they are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY SECTION */}
      <section className="pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20 bg-[#FCFAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-10 sm:mb-14 text-center">
            <span className="text-[#8B1538]">Our</span> Story
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card 1: Soft Burgundy */}
            <div className="flex flex-col items-start bg-[#FDF3F5] border border-[#F4E1E6] rounded-2xl p-8 sm:p-10 h-full">
              <div className="w-12 h-1 bg-[#8B1538] rounded-full mb-6"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                How Viskool Began
              </h3>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed mb-4">
                Viskool was founded in 2023 by Adv. Gireesh Neyyar, an
                entrepreneur with over 20 years of experience in education,
                technology, and management. Every learner deserves a mentor who
                knows them.
              </p>
              <a
                href="#founder"
                className="text-[#8B1538] font-semibold text-sm hover:underline inline-flex items-center gap-1 transition-all mt-auto pt-4"
              >
                Read About Our Founder <span>&rarr;</span>
              </a>
            </div>

            {/* Card 2: Warm Cream */}
            <div className="flex flex-col items-start bg-[#FCF9F2] border border-[#F2E8D5] rounded-2xl p-8 sm:p-10 h-full">
              <div className="w-12 h-1 bg-[#D4A373] rounded-full mb-6"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Why We Started
              </h3>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                Too many students sit in crowded classes where doubts go unasked
                and weak areas go unnoticed until the exam result arrives.
                Parents often had no clear idea how their child was really
                doing, and working learners struggled to find skills training
                that led to actual jobs. Good teachers were hard to find outside
                big cities, and travelling for coaching cost time and money.
              </p>
            </div>

            {/* Card 3: Sage Green */}
            <div className="flex flex-col items-start bg-[#F4F7F5] border border-[#E3EDE7] rounded-2xl p-8 sm:p-10 h-full">
              <div className="w-12 h-1 bg-[#4A7C59] rounded-full mb-6"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                What Keeps Us Going
              </h3>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                What drives Viskool is the belief that learning should lead to
                real progress. From school subjects and entrance preparation to
                professional upskilling, we focus on helping learners understand
                better, practise consistently, and move confidently toward their
                next goal.
              </p>
            </div>

            {/* Card 4: Muted Blue-Grey */}
            <div className="flex flex-col items-start bg-[#F4F6F9] border border-[#E2E8F0] rounded-2xl p-8 sm:p-10 h-full">
              <div className="w-12 h-1 bg-[#64748B] rounded-full mb-6"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Where It Has Led
              </h3>
              <p className="text-gray-700 text-[15px] sm:text-base leading-relaxed">
                What began in 2023 as a focused online tuition platform in
                Kerala has grown into a learning community with over 70,000
                enrollments and learners in 70+ countries. School tuition for
                Classes 5 to 12 was followed by competitive exam training,
                commerce tuition and English language courses. We then added
                career skills such as Digital Marketing, Data Analytics, AI
                Tools and Power BI. Today Viskool supports learners from school
                students to working professionals, and we are still growing,
                with the same personal mentoring we started with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learners Choose Viskool Section */}
      <section className="bg-[#F9F8F6] py-10 sm:py-12 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-10 sm:mb-14 text-center">
            <span className="block text-[#8B1538]">
              Why Learners Choose Viskool:
            </span>
            <span className="block mt-1 sm:mt-2">
              Academics and Careers Under One Roof
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 sm:p-5 flex items-center h-full gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#8B1538] text-white rounded-lg flex items-center justify-center font-bold text-sm">
                01
              </span>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                One-to-One Personal Attention
              </h3>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 sm:p-5 flex items-center h-full gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#8B1538] text-white rounded-lg flex items-center justify-center font-bold text-sm">
                02
              </span>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                Interactive Learning & Expert Mentors
              </h3>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 sm:p-5 flex items-center h-full gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#8B1538] text-white rounded-lg flex items-center justify-center font-bold text-sm">
                03
              </span>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                Regular Progress Tracking
              </h3>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 sm:p-5 flex items-center h-full gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#8B1538] text-white rounded-lg flex items-center justify-center font-bold text-sm">
                04
              </span>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                Frequent Tests and Honest Feedback
              </h3>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 sm:p-5 flex items-center h-full gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#8B1538] text-white rounded-lg flex items-center justify-center font-bold text-sm">
                05
              </span>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                Learn From Anywhere
              </h3>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 sm:p-5 flex items-center h-full gap-4">
              <span className="flex-shrink-0 w-10 h-10 bg-[#8B1538] text-white rounded-lg flex items-center justify-center font-bold text-sm">
                06
              </span>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight">
                Everything in One Place
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-[#8B1538] leading-[1.2] tracking-tight mb-10 sm:mb-14 text-center">
            Our Vision, Our Mission, Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Vision */}
            <div className="bg-[#F6DF72] rounded-2xl p-6 sm:p-8 flex flex-col relative overflow-hidden min-h-[280px] sm:min-h-[320px]">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-900/80 leading-relaxed text-[15px] sm:text-base pr-8">
                  To make quality, personalized learning accessible to every
                  learner, everywhere.
                </p>
              </div>
              <img
                src="/illustration-vision.svg"
                alt=""
                className="absolute bottom-2 right-2 w-32 h-32 sm:w-40 sm:h-40 object-contain pointer-events-none"
              />
            </div>

            {/* Mission */}
            <div className="bg-[#9EDDDC] rounded-2xl p-6 sm:p-8 flex flex-col relative overflow-hidden min-h-[280px] sm:min-h-[320px]">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-900/80 leading-relaxed text-[15px] sm:text-base pr-8">
                  To give every learner a mentor, a plan, and the tools to turn
                  effort into results.
                </p>
              </div>
              <img
                src="/illustration-mission.svg"
                alt=""
                className="absolute bottom-2 right-2 w-32 h-32 sm:w-40 sm:h-40 object-contain pointer-events-none"
              />
            </div>

            {/* Values */}
            <div className="bg-[#E5BFD0] rounded-2xl p-6 sm:p-8 flex flex-col relative overflow-hidden min-h-[280px] sm:min-h-[320px]">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Values
                </h3>
                <p className="text-gray-900/80 leading-relaxed text-[15px] sm:text-base pr-8">
                  We measure success by what learners achieve. We keep
                  improving, just as we ask our learners to.
                </p>
              </div>
              <img
                src="/illustration-values.svg"
                alt=""
                className="absolute bottom-2 right-2 w-32 h-32 sm:w-40 sm:h-40 object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-20 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-10 sm:mb-14 text-center">
            <span className="text-[#8B1538]">Our</span> Courses
          </h2>

          <CourseSection
            courses={FEATURED_COURSES.slice(0, 3)}
            onSelectCourse={handleCourseAction}
            onEnrollCourse={handleCourseAction}
            onActionClick={handleCourseAction}
            hideHeader
            filterCourses={false}
          />
        </div>
      </section>

      {/* Learning Across India and the Gulf Section */}
      <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 px-5 sm:px-8">
        <div
          className="absolute -top-16 -left-20 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#F8F0F2] pointer-events-none"
          aria-hidden="true"
        ></div>
        <div
          className="absolute -bottom-20 -right-16 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#FAF5F7] pointer-events-none"
          aria-hidden="true"
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="text-center max-w-6xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-[28px] md:text-[34px] lg:text-[36px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-4 lg:whitespace-nowrap">
              <span className="text-[#8B1538]">Wherever You Are,</span> Your
              Mentor Is Just a Click Away
            </h2>
            <h3 className="text-base sm:text-lg lg:text-base font-semibold text-gray-600 leading-relaxed max-w-4xl lg:max-w-none mx-auto lg:whitespace-nowrap">
              We are bringing one-to-one mentoring to students and professionals
              across India and the Gulf.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">
              <img
                src="/images/about/about-across-india.webp"
                alt="Student receiving one-to-one online mentoring in India"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 z-10 rounded-lg bg-[#8B1538]/90 px-4 py-2 text-sm sm:text-base font-semibold text-white shadow-sm">
                Across India
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">
              <img
                src="/images/about/about-across-gulf.webp"
                alt="Student receiving one-to-one online mentoring in the Gulf"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 z-10 rounded-lg bg-[#8B1538]/90 px-4 py-2 text-sm sm:text-base font-semibold text-white shadow-sm">
                Across the Gulf
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <HomeStudentTestimonials
        testimonials={ABOUT_TESTIMONIALS}
        eyebrowLabel={null}
        heading={
          <>
            <span className="text-[#8B1538] leading-[1.2]">
              Happy Learners,
            </span>{" "}
            Happy Families
          </>
        }
        subheading="See how Viskool has made a difference for students and their families."
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={ABOUT_FAQS}
        onActionClick={handleCourseAction}
        title={
          <>
            <span className="text-[#8B1538] leading-[1.2]">
              Your Questions,
            </span>{" "}
            Answered
          </>
        }
        initialOpenIndex={-1}
      />

      {/* Final Call to Action Section */}
      <section className="bg-white py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative overflow-hidden bg-[#9EDDDC] rounded-3xl shadow-sm"
            style={{
              backgroundImage:
                "repeating-radial-gradient(circle at 12% 115%, transparent 0, transparent 22px, rgba(31,41,55,0.045) 23px, transparent 24px)",
            }}
          >
            <div
              className="absolute -left-14 -bottom-20 w-64 h-64 rounded-[40%] bg-white/15 pointer-events-none"
              aria-hidden="true"
            ></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(260px,1fr)]">
              <div className="px-6 py-9 sm:px-10 sm:py-10 lg:px-12 lg:py-11 flex flex-col justify-center">
                <h2 className="text-[28px] md:text-[34px] lg:text-[36px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-4 lg:whitespace-nowrap">
                  Take the First Step Towards Better Learning
                </h2>
                <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-800/80 leading-relaxed max-w-2xl">
                  Speak to our team about school tuition, exam coaching or
                  career skills.
                </p>
              </div>

              <div className="border-t border-gray-800/10 md:border-t-0 md:border-l flex flex-row items-center justify-center gap-4 px-6 py-7 sm:px-8 md:py-9 text-center">
                <a
                  href="tel:+919876543210"
                  className="inline-flex min-w-36 items-center justify-center rounded-full bg-[#15803D] px-7 py-3 text-sm sm:text-base font-bold text-white shadow-sm transition-all duration-200 hover:bg-[#166534] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15803D] focus-visible:ring-offset-2 focus-visible:ring-offset-[#9EDDDC] active:scale-95"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LearningJourneyForm
        heading="Let’s Plan Your Learning Journey Together"
        onSubmitSuccess={handleCourseAction}
      />
    </div>
  );
};
