const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const tableRegex = /<div className="mt-7 w-full overflow-x-auto rounded-2xl border border-\[#8B1538\]\/15">[\s\S]*?<\/table>\s*<\/div>/;

const SKILLS = [
  { title: 'Planning', text: 'How to build a digital marketing strategy: set goals, identify your audience, fix a budget, and choose the right channels.' },
  { title: 'SEO', text: 'Search Engine Optimization from scratch: keyword research, on-page SEO, off-page SEO, technical SEO, local SEO for shops and clinics, content structuring, and link building.' },
  { title: 'Paid Ads', text: 'Meta Ads, search ads, and display advertising; how PPC and other paid advertising work; media buying basics; and an overview of performance marketing.' },
  { title: 'Social Media', text: 'Social media management, organic growth tactics, engagement strategies, building a community, and maintaining brand identity on platforms like Facebook and Instagram.' },
  { title: 'Content', text: 'Content marketing, content planning, and copywriting: creating content that attracts, informs, and converts your target audience.' },
  { title: 'Websites', text: 'CMS basics, WordPress fundamentals, creating landing pages with Elementor, optimizing UX/UI, basic web architecture, and CRO (Conversion Rate Optimization).' },
  { title: 'E-commerce', text: 'Setting up e-commerce infrastructure (WooCommerce/Shopify), e-commerce SEO, product page optimization, cart abandonment funnels, and working with Amazon Seller Central.' },
  { title: 'Analytics', text: 'Google Analytics 4 (GA4), tracking metrics (KPIs, ROI, ROAS, CPA, CTR, CPC), using Google Tag Manager (GTM), and data visualization with Looker Studio.' },
  { title: 'Email & CRM', text: 'Email marketing, marketing automation, lead nurturing, mapping the customer journey, and using a CRM.' },
  { title: 'AI', text: 'AI in digital marketing: AI marketing tools, generative AI, AI content creation, AI-powered marketing workflows, and prompt engineering for marketing.' }
];

let cardsJSX = `<div className="mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">\n`;

SKILLS.forEach(skill => {
  cardsJSX += `              <div className="flex flex-col bg-white border border-[#8B1538]/10 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
                <h5 className="text-[14px] sm:text-[16px] font-bold text-[#8B1538] mb-2">${skill.title}</h5>
                <p className="text-[11px] sm:text-[13px] text-gray-700 leading-relaxed">${skill.text}</p>
              </div>\n`;
});
cardsJSX += `            </div>`;

if(tableRegex.test(content)) {
  content = content.replace(tableRegex, cardsJSX);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Successfully replaced table with cards safely!');
} else {
  console.log('Regex did not match.');
}
