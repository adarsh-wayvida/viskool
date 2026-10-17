// Footer Component - Replaced with user provided image asset
import React from 'react';

export const Footer = ({ footerData }) => {
  return (
    <footer className="w-full bg-[#F5E6FB] py-12 lg:py-16 text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          
          {/* Column 1 - Viskool */}
          <div className="flex flex-col space-y-4">
            <img 
              src="viskool-logo.png" 
              alt="Viskool" 
              className="h-8 w-auto object-contain self-start"
            />
            <div className="pt-2 flex flex-col space-y-3">
              <h3 className="text-lg font-bold text-gray-900">Download The App</h3>
              <p className="text-sm text-gray-700">
                Get the Viskool app for a seamless learning experience on the go.
              </p>
              <div className="flex flex-col gap-3 mt-1">
                <a href={footerData.appLinks.playStore} className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-10 w-auto"
                  />
                </a>
                <a href={footerData.appLinks.appStore} className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store" 
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {footerData.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  aria-label={social.name}
                  className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-[#8B1538] hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold">{social.name.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Courses */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Courses</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><a href="#" className="hover:text-[#8B1538] transition-colors">School Tuition</a></li>
              <li><a href="#" className="hover:text-[#8B1538] transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-[#8B1538] transition-colors">Kerala PSC</a></li>
              <li><a href="#" className="hover:text-[#8B1538] transition-colors">Upskill</a></li>
              <li><a href="#" className="hover:text-[#8B1538] transition-colors">NEET</a></li>
              <li><a href="#" className="hover:text-[#8B1538] transition-colors">JEE</a></li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#8B1538] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 opacity-70">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 opacity-70">✉️</span>
                <a href="mailto:info@viskool.com" className="hover:text-[#8B1538] transition-colors">info@viskool.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 opacity-70">📍</span>
                <span>3rd Floor, Capital Towers, Opposite Secretariat, Statue, Palayam, Thiruvananthapuram, Keralam 695001</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-300/60 text-center">
          <p className="text-sm text-gray-600">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
