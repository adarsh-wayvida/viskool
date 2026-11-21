const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace flex-col with flex-row for both cards on mobile
// First we find the card containers
const target1 = 'className="group flex h-fit flex-col sm:flex-row items-center sm:items-start rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md gap-4 sm:gap-6"';
const replace1 = 'className="group flex h-fit flex-row items-start rounded-2xl border border-gray-100 bg-white p-4 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md gap-3 sm:gap-6"';

// Fix the text alignment inside the text container from text-center on mobile to text-left always
const target2 = 'className="flex flex-col text-center sm:text-left"';
const replace2 = 'className="flex flex-col text-left"';

// Shrink the image slightly on mobile so it fits well beside the text
const target3 = 'className="relative shrink-0 h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-[3px] border-[#F8CDD2]/50 p-1"';
const replace3 = 'className="relative shrink-0 h-20 w-20 sm:h-28 sm:w-28 overflow-hidden rounded-full border-[3px] border-[#F8CDD2]/50 p-0.5 sm:p-1"';

const target4 = 'className="relative shrink-0 h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-[3px] border-[#CDEBFA]/50 p-1"';
const replace4 = 'className="relative shrink-0 h-20 w-20 sm:h-28 sm:w-28 overflow-hidden rounded-full border-[3px] border-[#CDEBFA]/50 p-0.5 sm:p-1"';


if (content.includes(target1) && content.includes(target2)) {
    content = content.replace(new RegExp(target1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace1);
    content = content.replace(new RegExp(target2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace2);
    content = content.replace(new RegExp(target3.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace3);
    content = content.replace(new RegExp(target4.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace4);
    
    fs.writeFileSync(file, content);
    console.log('Mobile faculty layout fixed!');
} else {
    console.log('Could not find the target strings.');
}
