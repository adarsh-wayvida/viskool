// Footer Component - Replaced with user provided image asset
import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#F5E6FB] overflow-hidden">
      <img 
        src="public/footer-img.png" 
        alt="Viskool Footer" 
        className="w-full h-auto object-cover block"
      />
    </footer>
  );
};
