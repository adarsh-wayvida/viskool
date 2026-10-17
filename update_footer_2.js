const fs = require('fs');

let content = fs.readFileSync('src/components/Footer.jsx', 'utf-8');

// 1. Remove about text
content = content.replace(
\            <p className="text-sm text-gray-700 leading-relaxed">
              {footerData.about}
            </p>
\, ''
);

// 2. Insert socials into column 1
const socialsHTML = \              </div>
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
            </div>\;

content = content.replace('              </div>\n            </div>', socialsHTML);

// 3. Remove Column 2 completely
const col2 = \
          {/* Column 2 - Stay Connected */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Stay Connected</h3>
            <div className="flex items-center gap-3">
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
          </div>\;

content = content.replace(col2, '');

// 4. Update the layout grid to be 3 columns instead of 4, or span 2 cols? The prompt says "beneath the main four-column layout", so let's keep it as 4 columns and let the first column span 2.
content = content.replace('<div className="flex flex-col space-y-4">\\n            <img', '<div className="flex flex-col space-y-4 lg:col-span-2">\\n            <img');

// 5. Add second footer row (Courses) above Divider & Copyright
const coursesHTML = \{/* Second Footer Row - Courses */}
        <div className="mt-12 pt-8 border-t border-gray-300/60">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-3 gap-x-4 text-sm text-gray-700 font-medium">
            <span className="font-bold text-gray-900">Courses:</span>
            <a href="#" className="hover:text-[#8B1538] transition-colors">School Tuition</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-[#8B1538] transition-colors">Digital Marketing</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-[#8B1538] transition-colors">Kerala PSC</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-[#8B1538] transition-colors">Upskill</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-[#8B1538] transition-colors">NEET</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-[#8B1538] transition-colors">JEE</a>
          </div>
        </div>

        {/* Divider & Copyright */}\;

content = content.replace('{/* Divider & Copyright */}', coursesHTML);

fs.writeFileSync('src/components/Footer.jsx', content, 'utf-8');
