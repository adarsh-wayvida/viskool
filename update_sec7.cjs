const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Rename 7. Fee to 7. Course Fee
content = content.replace(
  />\s*7\. Fee\s*<\/p>/,
  '>\n              7. Course Fee\n            </p>'
);

// 2. Add EMI Options to table. Looking for Payment options row.
const paymentRegex = /<tr className="border-t border-\[#8B1538\]\/10 bg-\[#FCF8F9\]\/60">\s*<td className="border-r border-\[#8B1538\]\/10 px-5 py-4 font-medium">Payment options<\/td>\s*<td className="px-5 py-4">Full payment \/ Partial Payment<\/td>\s*<\/tr>/;

const emiRow = `<tr className="border-t border-[#8B1538]/10 bg-[#FCF8F9]/60">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">Payment options</td>
                    <td className="px-5 py-4">Full payment / Partial Payment</td>
                  </tr>
                  <tr className="border-t border-[#8B1538]/10">
                    <td className="border-r border-[#8B1538]/10 px-5 py-4 font-medium">EMI Options</td>
                    <td className="px-5 py-4">No EMI</td>
                  </tr>`;
content = content.replace(paymentRegex, emiRow);

// 3. Remove text and Q&As
// Looking for: Fees depend on the course length... and the Q&A box
const textToRemoveRegex = /<p className="mt-7 text-\[15px\] leading-7 text-gray-700 sm:text-base sm:leading-8">\s*Fees depend on the course length, the mentors, and the support you\s*get after class\.\s*<\/p>\s*<div className="mt-8 space-y-4 rounded-2xl bg-\[#F8F0F2\] p-5 sm:p-6">\s*<div>\s*<p className="text-\[15px\] font-bold leading-7 text-\[#102A43\] sm:text-base">\s*Q: Is EMI available\?\s*<\/p>\s*<p className="mt-1 text-\[15px\] leading-7 text-gray-700 sm:text-base">\s*A: No, We provide partial payment facility only\.\s*<\/p>\s*<\/div>\s*<div>\s*<p className="text-\[15px\] font-bold leading-7 text-\[#102A43\] sm:text-base">\s*Q: Can I see a class before paying\?\s*<\/p>\s*<p className="mt-1 text-\[15px\] leading-7 text-gray-700 sm:text-base">\s*A: Yes\. Book a free demo class and decide after you have seen how\s*we teach\.\s*<\/p>\s*<\/div>\s*<\/div>/;

if (textToRemoveRegex.test(content)) {
  content = content.replace(textToRemoveRegex, '');
  console.log('Removed text and Q&As successfully');
} else {
  console.log('Regex for removing text failed');
}

fs.writeFileSync(file, content, 'utf8');
console.log('Done applying Section 7 fixes.');
