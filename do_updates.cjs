const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// SECTION 6 UPDATES

// 1. Replace description
content = content.replace(
  'Viskool gives you real work experience, 1 year of WhatsApp\n                community support, recorded classes, and real agency work. Here is\n                the full list of what is included.',
  'If you are looking for digital marketing training Kerala learners can join from home, Viskool\'s live online classes bring the classroom to you.'
);

// 2. Add rows to table
const newRows = `                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Placement assistance</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">After the course</td>
                    <td className="px-5 py-4">Placement assistance with resume, portfolio and mock interviews</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Personal attention</td>
                    <td className="border-r border-[#8B1538]/10 px-5 py-4">During the course</td>
                    <td className="px-5 py-4">Personal attention from mentors who know your name and your goals</td>
                  </tr>
                </tbody>`;
content = content.replace('                </tbody>\n              </table>\n            </div>\n            <div className="mt-10">\n              <h3 className="text-2xl font-bold text-[#102A43]">Why choose Viskool?</h3>', newRows + '\n              </table>\n            </div>\n            <div className="mt-10">\n              <h3 className="text-2xl font-bold text-[#102A43]">Why choose Viskool?</h3>');


// 3 & 4. Remove Why Choose Viskool and the pink box
// Using regex to capture from <div className="mt-10"> up to the end of the section
const regexSec6Remove = /<div className="mt-10">\s*<h3 className="text-2xl font-bold text-\[#102A43\]">Why choose Viskool\?<\/h3>[\s\S]*?<div className="mt-8 rounded-2xl bg-\[#F8F0F2\] px-6 py-5 text-center">[\s\S]*?<\/p>\s*<\/div>/;
content = content.replace(regexSec6Remove, '');


// SECTION 7 UPDATES

// 1. Rename 7. Fee to 7. Course Fee
content = content.replace(
  '<p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">\n              7. Fee\n            </p>',
  '<p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#8B1538] sm:text-sm">\n              7. Course Fee\n            </p>'
);

// 2. Add EMI Options to table
const emiRow = `                  <tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Payment options</td>
                    <td className="px-5 py-4">Full payment / Partial Payment</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">EMI Options</td>
                    <td className="px-5 py-4">No EMI</td>
                  </tr>`;
content = content.replace(
  '<tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">\n                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Payment options</td>\n                    <td className="px-5 py-4">Full payment / Partial Payment</td>\n                  </tr>',
  emiRow
);

// 3. Remove text and Q&As
const regexSec7Remove = /<p className="mt-7 text-\[15px\] leading-7 text-gray-700 sm:text-base sm:leading-8">\s*Fees depend on the course length, the mentors, and the support you\s*get after class\.\s*<\/p>\s*<div className="mt-8 space-y-4 rounded-2xl bg-\[#F8F0F2\] p-5 sm:p-6">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/;

// We will construct the ending explicitly since the regex above might be too greedy or fail
const specificContentToReplaceSec7 = `            <p className="mt-7 text-[15px] leading-7 text-gray-700 sm:text-base sm:leading-8">
              Fees depend on the course length, the mentors, and the support you
              get after class.
            </p>

            <div className="mt-8 space-y-4 rounded-2xl bg-[#F8F0F2] p-5 sm:p-6">
              <div>
                <p className="text-[15px] font-bold leading-7 text-[#102A43] sm:text-base">
                  Q: Is EMI available?
                </p>
                <p className="mt-1 text-[15px] leading-7 text-gray-700 sm:text-base">
                  A: No, We provide partial payment facility only.
                </p>
              </div>
              <div>
                <p className="text-[15px] font-bold leading-7 text-[#102A43] sm:text-base">
                  Q: Can I see a class before paying?
                </p>
                <p className="mt-1 text-[15px] leading-7 text-gray-700 sm:text-base">
                  A: Yes. Book a free demo class and decide after you have seen how
                  we teach.
                </p>
              </div>
            </div>`;
content = content.replace(specificContentToReplaceSec7, '');


fs.writeFileSync(file, content, 'utf8');
console.log('Successfully applied all changes to Section 6 and 7.');
