"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { StudentTestimonialsPage as StudentTestimonialsComp } from '../../components/StudentTestimonialsPage.jsx';

export default function StudentTestimonials() {
  const router = useRouter();

  const handleOpenContact = (actionTitle = 'Inquiry') => {
    window.dispatchEvent(new CustomEvent('openContactModal', { detail: { title: actionTitle } }));
  };

  const handleNavigate = (page) => {
    if (page === 'home') router.push('/');
    else router.push(`/${page}`);
  };

  return (
    <StudentTestimonialsComp 
      onOpenContact={handleOpenContact}
      onNavigate={handleNavigate}
    />
  );
}
