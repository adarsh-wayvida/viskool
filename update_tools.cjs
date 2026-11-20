const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const toolsGridRegex = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;

const newToolsContent = `            {/* Tools Carousel Grid */}
            <div className="mt-10 overflow-hidden">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12 items-center justify-items-center opacity-80">
                <img src="/images/tools/google_ads_digital_4424.webp" alt="Google Ads" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="/images/tools/facebook_ads_logo_1291.webp" alt="Meta" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="/images/tools/google analytics_1456.png" alt="Google Analytics 4" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="/images/tools/mail_chimp_logo (2)_4550.webp" alt="Mailchimp" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="/images/tools/Search_ads_logo_2508.webp" alt="Search Ads" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="/images/tools/moz_digital_marketing_course_3909.webp" alt="Moz" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                
                <img src="/images/tools/Hoot_Suite_logo_7138.webp" alt="Hootsuite" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="/images/tools/Google_ads_planner_logo_7253.webp" alt="Google Keyword Planner" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="/images/tools/microsoft_clarity_image_4216.webp" alt="Clarity by Microsoft" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="/images/tools/Helium_logo_9422.webp" alt="Helium 10" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="/images/tools/Amazon_ads_logo (1)_9237.webp" alt="Amazon Ads" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
                <img src="/images/tools/gtm_logo (1)_4348.webp" alt="Google Tag Manager" className="h-8 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>`;

if (toolsGridRegex.test(content)) {
  content = content.replace(toolsGridRegex, newToolsContent);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Replaced tools cards with logo grid!');
} else {
  console.log('Regex failed');
}
