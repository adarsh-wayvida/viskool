"use client";

import React from 'react';
import { 
  HERO_SLIDES, 
  PROCESS_STEPS, 
  COURSE_CATEGORIES, 
  FEATURED_COURSES, 
  BENEFITS, 
  FAQS, 
  ACHIEVEMENTS, 
  TESTIMONIALS
} from '../data/mockData.js';

import { Hero } from '../components/Hero.jsx';
import { ProcessSteps } from '../components/ProcessSteps.jsx';
import { CourseSection } from '../components/CourseSection.jsx';
import { WhyChooseUs } from '../components/WhyChooseUs.jsx';
import { Statistics } from '../components/Statistics.jsx';
import { HomeParentVideoTestimonials } from '../components/HomeParentVideoTestimonials.jsx';
import { HomeStudentTestimonials } from '../components/HomeStudentTestimonials.jsx';
import { SuccessCTA } from '../components/SuccessCTA.jsx';
import { FAQSection } from '../components/FAQSection.jsx';
import { Achievements } from '../components/Achievements.jsx';
import { Testimonials } from '../components/Testimonials.jsx';
import { LearningJourneyForm } from '../components/LearningJourneyForm.jsx';

export default function HomePage() {
  const handleActionClick = (actionName) => {
    // For a real app, you might use context or just a local toast.
    console.log(`Clicked: ${actionName}`);
  };

  const handleOpenContact = (actionTitle = 'Inquiry') => {
    // We could emit a custom event to trigger the modal in SiteLayout, 
    // or just let the button handle it if we passed it down.
    // For simplicity, we can dispatch a custom event.
    window.dispatchEvent(new CustomEvent('openContactModal', { detail: { title: actionTitle } }));
  };

  const handleSelectCourse = () => {};
  const handleEnrollCourse = () => {};
  const showToast = () => {};

  return (
    <>
      <Hero 
        slides={HERO_SLIDES} 
        onActionClick={handleActionClick}
        onOpenContact={handleOpenContact}
      />
      <ProcessSteps 
        steps={PROCESS_STEPS} 
        onActionClick={handleActionClick}
      />
      <WhyChooseUs 
        benefits={BENEFITS} 
        onActionClick={handleActionClick}
      />
      <Statistics />
      <HomeParentVideoTestimonials />
      <HomeStudentTestimonials />
      <CourseSection 
        categories={COURSE_CATEGORIES}
        courses={FEATURED_COURSES}
        onSelectCourse={handleSelectCourse}
        onEnrollCourse={handleEnrollCourse}
        onActionClick={handleActionClick}
      />
      <FAQSection 
        faqs={FAQS} 
        onActionClick={handleActionClick}
      />
      <LearningJourneyForm 
        onSubmitSuccess={showToast}
      />
    </>
  );
}
