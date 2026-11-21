const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix "The Secret Behind Every Viral Brand!"
// Right now it contains the cards for the 10 skills.
const viralBrandCardsStart = '<div className="mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">';
const indexViral = content.indexOf(viralBrandCardsStart);

if (indexViral !== -1) {
  const endIndexViral = content.indexOf('</div>\n            </div>', indexViral); // Find end of the grid
  const fullGrid = content.substring(indexViral, endIndexViral + 26);
  
  const correctViralTable = `<div className="mt-7 w-full overflow-x-auto rounded-2xl border border-[#8B1538]/15">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm sm:text-base">
                <thead className="bg-[#F8F0F2] text-[#8B1538]">
                  <tr>
                    <th className="w-48 border-r border-[#8B1538]/15 px-5 py-4 font-bold">Channel</th>
                    <th className="px-5 py-4 font-bold border-r border-[#8B1538]/15">What it does</th>
                    <th className="px-5 py-4 font-bold">Where you see it</th>
                  </tr>
                </thead>
                <tbody className="bg-white text-[#102A43]">
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">Search engines</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">Helps people find a business when they search</td>
                    <td className="px-5 py-4">Google results page</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">Social platforms</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">Builds followers, visibility, and brings enquiries</td>
                    <td className="px-5 py-4">Instagram, Facebook, YouTube</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">Email and WhatsApp</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">Keeps customers in touch with offers and updates</td>
                    <td className="px-5 py-4">Inbox, chats</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-semibold">Websites and blogs</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">Shares details and collects enquiries</td>
                    <td className="px-5 py-4">Business websites</td>
                  </tr>
                </tbody>
              </table>
            </div>`;
            
  content = content.replace(fullGrid, correctViralTable);
  console.log("Restored 'Viral Brand' table.");
}

// 2. Fix "10 Skill Areas"
// Right now it's still a table.
const tableStart = '<div className="mt-7 w-full overflow-x-auto rounded-2xl border border-[#8B1538]/15">\n              <table className="w-full min-w-[760px] border-collapse text-left text-sm sm:text-base">\n                <thead className="bg-[#F8F0F2] text-[#8B1538]">\n                  <tr>\n                    <th className="w-48 border-r border-[#8B1538]/15 px-5 py-4 font-bold">\n                      Skill Area';
const indexTable = content.indexOf('<th className="w-48 border-r border-[#8B1538]/15 px-5 py-4 font-bold">\n                      Skill Area');
if (indexTable !== -1) {
  // Find the exact table container
  const tableBlockStart = content.lastIndexOf('<div className="mt-7 w-full overflow-x-auto rounded-2xl border border-[#8B1538]/15">', indexTable);
  const tableBlockEnd = content.indexOf('</table>\n            </div>', tableBlockStart) + '</table>\n            </div>'.length;
  
  const toReplace = content.substring(tableBlockStart, tableBlockEnd);

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

  content = content.replace(toReplace, cardsJSX);
  console.log("Converted '10 Skill Areas' table to cards.");
}

fs.writeFileSync(file, content, 'utf8');

