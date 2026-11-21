const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// The issue is that the cards are using `h-fit` inside a grid container. 
// If we change it to `h-full`, the grid will naturally stretch all cards in a row to match the tallest card in that row.

const target = 'className="flex h-fit flex-col rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"';
const replacement = 'className="flex h-full flex-col justify-start rounded-2xl border border-gray-100 bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(16,42,67,0.10)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"';

if (content.includes(target)) {
    // This will replace all 6 fee cards
    content = content.replace(new RegExp(target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement);
    fs.writeFileSync(file, content);
    console.log('Fixed card heights!');
} else {
    console.log('Target string not found');
}
