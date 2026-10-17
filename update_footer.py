import re

with open('src/components/Footer.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the address and email in contact us.
# Email
content = content.replace('<span>hello@viskool.com</span>', '<a href="mailto:info@viskool.com" className="hover:text-[#8B1538] transition-colors">info@viskool.com</a>')

# Address
content = content.replace('<span>Viskool Education Pvt Ltd,<br/>Kerala, India</span>', '<span>3rd Floor, Capital Towers, Opposite Secretariat, Statue, Palayam, Thiruvananthapuram, Keralam 695001</span>')

# 2. Re-arrange column 1 and remove column 2
col1_and_2_regex = re.compile(r'\{/\* Column 1 - Viskool \*/\}.*?\{/\* Column 3 - Quick Links \*/\}', re.DOTALL)

new_col1 = '''{/* Column 1 - Viskool */}
          <div className="flex flex-col space-y-6 lg:col-span-2">
            <img 
              src="viskool-logo.png" 
              alt="Viskool" 
              className="h-8 w-auto object-contain self-start"
            />
            <div className="flex flex-col space-y-3">
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

          {/* Column 3 - Quick Links */}'''

content = col1_and_2_regex.sub(new_col1, content)

# 3. Add second footer row (Courses) above Divider & Copyright
courses_html = '''{/* Second Footer Row - Courses */}
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

        {/* Divider & Copyright */}'''

content = content.replace('{/* Divider & Copyright */}', courses_html)

with open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
