"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ParentTestimonialsPage as ParentTestimonialsComp } from '../../components/ParentTestimonialsPage.jsx';

export default function ParentTestimonials() {
  const router = useRouter();

  const handleOpenContact = (actionTitle = 'Inquiry') => {
    window.dispatchEvent(new CustomEvent('openContactModal', { detail: { title: actionTitle } }));
  };

  const handleNavigateHome = () => {
    router.push('/');
  };

  return (
    <ParentTestimonialsComp 
      onOpenContact={handleOpenContact}
      onNavigateHome={handleNavigateHome}
    />
  );
}
