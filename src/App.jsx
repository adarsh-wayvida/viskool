// App Component - Standalone Homepage Prototype Root
import React, { useState } from 'react';
import { 
  ANNOUNCEMENT_ITEMS, 
  NAV_LINKS, 
  HERO_SLIDES, 
  PROCESS_STEPS, 
  COURSE_CATEGORIES, 
  FEATURED_COURSES, 
  BENEFITS, 
  FAQS, 
  ACHIEVEMENTS, 
  TESTIMONIALS, 
  FOOTER_DATA 
} from './data/mockData.js';

import { AnnouncementBar } from './components/AnnouncementBar.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { ProcessSteps } from './components/ProcessSteps.jsx';
import { CourseSection } from './components/CourseSection.jsx';
import { WhyChooseUs } from './components/WhyChooseUs.jsx';
import { SuccessCTA } from './components/SuccessCTA.jsx';
import { FAQSection } from './components/FAQSection.jsx';
import { Achievements } from './components/Achievements.jsx';
import { Testimonials } from './components/Testimonials.jsx';
import { LearningJourneyForm } from './components/LearningJourneyForm.jsx';
import { ParentTestimonialsPage } from './components/ParentTestimonialsPage.jsx';
import { StudentTestimonialsPage } from './components/StudentTestimonialsPage.jsx';
import { Footer } from './components/Footer.jsx';
import { FloatingActions } from './components/FloatingActions.jsx';
import { ContactModal } from './components/ContactModal.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'parent-testimonials' | 'student-testimonials'

  const [modalState, setModalState] = useState({
    isOpen: false,
    initialData: null,
  });

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleOpenContact = (actionTitle = 'Inquiry', extraData = null) => {
    setModalState({
      isOpen: true,
      initialData: extraData || { title: actionTitle },
    });
  };

  const handleCloseContact = () => {
    setModalState({ isOpen: false, initialData: null });
  };

  const handleActionClick = (actionName) => {
    showToast(`Clicked: ${actionName}`);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#8B1538] selection:text-white antialiased">
      
      {/* Toast Notification for Click Feedback */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-medium border border-gray-700 animate-slideDown">
          <span className="text-[#8B1538] bg-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Main Navigation Header */}
      <Header 
        navLinks={NAV_LINKS} 
        onOpenContact={handleOpenContact}
        onActionClick={handleActionClick}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* 2. Announcement Bar (below header) */}
      <AnnouncementBar 
        items={ANNOUNCEMENT_ITEMS} 
        onActionClick={handleActionClick} 
      />

      {/* Main Content Sections */}
      <main>
        {currentPage === 'parent-testimonials' ? (
          <ParentTestimonialsPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : currentPage === 'student-testimonials' ? (
          <StudentTestimonialsPage 
            onOpenContact={handleOpenContact}
            onNavigate={handleNavigate}
          />
        ) : (
          <>
            {/* 3. Hero Carousel */}
            <Hero 
              slides={HERO_SLIDES} 
              onActionClick={handleActionClick}
              onOpenContact={handleOpenContact}
            />

        {/* 4. Process & Value Proposition */}
        <ProcessSteps 
          steps={PROCESS_STEPS} 
          onActionClick={handleActionClick}
        />

        {/* 5. Featured Courses & Filter Tabs */}
        <CourseSection 
          categories={COURSE_CATEGORIES}
          courses={FEATURED_COURSES}
          onSelectCourse={handleSelectCourse}
          onEnrollCourse={handleEnrollCourse}
          onActionClick={handleActionClick}
        />

        {/* 6. Why Choose Viskool Benefits */}
        <WhyChooseUs 
          benefits={BENEFITS} 
          onActionClick={handleActionClick}
        />

        {/* 7. Success CTA Banner */}
        <SuccessCTA 
          onOpenContact={handleOpenContact}
        />

        {/* 8. Student Achievements */}
        <Achievements 
          achievements={ACHIEVEMENTS} 
          onActionClick={handleActionClick}
        />

        {/* 9. Student Testimonials */}
        <Testimonials 
          testimonials={TESTIMONIALS} 
          onActionClick={handleActionClick}
        />

        {/* 10. Start Your Learning Journey Lead Form */}
        <LearningJourneyForm 
          onSubmitSuccess={showToast}
        />

        {/* 11. Interactive FAQ Accordion (Above Footer) */}
        <FAQSection 
          faqs={FAQS} 
          onActionClick={handleActionClick}
        />
          </>
        )}
      </main>

      {/* 11. Footer */}
      <Footer 
        footerData={FOOTER_DATA} 
        onActionClick={handleActionClick}
      />

      {/* 12. Floating Action Buttons */}
      <FloatingActions 
        onWhatsAppClick={handleWhatsApp}
        onPhoneClick={handlePhone}
      />

      {/* Interactive Modal */}
      <ContactModal 
        isOpen={modalState.isOpen}
        onClose={handleCloseContact}
        initialData={modalState.initialData}
        onSubmitSuccess={showToast}
      />

    </div>
  );
}
