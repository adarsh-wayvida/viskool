const fs = require('fs');

let content = fs.readFileSync('src/components/Footer.jsx', 'utf-8');

// Add imports
const imports = \import React from 'react';
import { 
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandPinterest
} from '@tabler/icons-react';\;

content = content.replace("import React from 'react';", imports);

// Icon mapping function
const iconFunction = \const getSocialIcon = (iconName) => {
  switch (iconName) {
    case 'instagram': return <IconBrandInstagram size={20} stroke={1.5} />;
    case 'facebook': return <IconBrandFacebook size={20} stroke={1.5} />;
    case 'twitter': return <IconBrandX size={20} stroke={1.5} />;
    case 'linkedin': return <IconBrandLinkedin size={20} stroke={1.5} />;
    case 'youtube': return <IconBrandYoutube size={20} stroke={1.5} />;
    case 'pinterest': return <IconBrandPinterest size={20} stroke={1.5} />;
    default: return null;
  }
};

export const Footer = ({ footerData }) => {\;

content = content.replace('export const Footer = ({ footerData }) => {', iconFunction);

// Update social mapping
const oldSocialMapping = \              <div className="flex items-center gap-3 pt-2">
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
            </div>\;

const newSocialMapping = \              <div className="flex items-center gap-3 pt-2">
              {footerData.socials.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-[#8B1538] flex items-center justify-center hover:bg-[#8B1538] hover:text-white transition-colors shadow-sm"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>\;

// Doing a regex replace to catch minor differences in whitespace
content = content.replace(/<div className="flex items-center gap-3 pt-2">[\\s\\S]*?<\/div>/m, newSocialMapping);

fs.writeFileSync('src/components/Footer.jsx', content, 'utf-8');
