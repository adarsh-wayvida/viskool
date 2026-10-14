"use client";

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ANNOUNCEMENT_ITEMS, NAV_LINKS, FOOTER_DATA } from '../data/mockData.js';

import { AnnouncementBar } from './AnnouncementBar.jsx';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { FloatingActions } from './FloatingActions.jsx';
import { ContactModal } from './ContactModal.jsx';

export function SiteLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  // Map Next.js pathname to the old 'currentPage' state for Header active state
  let currentPage = 'home';
  if (pathname === '/parent-testimonials') currentPage = 'parent-testimonials';
  else if (pathname === '/student-testimonials') currentPage = 'student-testimonials';
  
  const [modalState, setModalState] = useState({
    isOpen: false,
    initialData: null,
  });

  React.useEffect(() => {
    const handleEvent = (e) => {
      setModalState({ isOpen: true, initialData: e.detail });
    };
    window.addEventListener('openContactModal', handleEvent);
    return () => window.removeEventListener('openContactModal', handleEvent);
  }, []);

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
    if (page === 'home') router.push('/');
    else router.push(`/${page}`);
  };

  const handleWhatsApp = () => showToast('Clicked WhatsApp Float');
  const handlePhone = () => showToast('Clicked Phone Float');

  return (
    <>
      {toastMessage && (
        <div className="fixed top-5 right-5 z-[9999] bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-medium border border-gray-700 animate-slideDown">
          <span className="text-[#8B1538] bg-white w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      <Header 
        navLinks={NAV_LINKS} 
        onOpenContact={handleOpenContact}
        onActionClick={handleActionClick}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      <AnnouncementBar 
        items={ANNOUNCEMENT_ITEMS} 
        onActionClick={handleActionClick} 
      />

      <main>{children}</main>

      <Footer 
        footerData={FOOTER_DATA} 
        onActionClick={handleActionClick}
      />

      <FloatingActions 
        onWhatsAppClick={handleWhatsApp}
        onPhoneClick={handlePhone}
      />

      <ContactModal 
        isOpen={modalState.isOpen}
        onClose={handleCloseContact}
        initialData={modalState.initialData}
        onSubmitSuccess={showToast}
      />
    </>
  );
}
