const fs = require('fs');
const file = 'src/components/CourseReviewSlider.jsx';
let content = fs.readFileSync(file, 'utf8');

// Change the container alignment so dynamic heights align to the top
content = content.replace('flex w-max items-center animate-marquee', 'flex w-max items-start animate-marquee');

// Change the card size from fixed w-80 aspect-square to wider with dynamic height
// Using w-[400px] md:w-[500px] h-auto
const oldCard = 'className="w-80 aspect-square p-3 overflow-hidden rounded-2xl bg-white border border-gray-200 shrink-0 shadow-sm"';
const newCard = 'className="w-[350px] sm:w-[450px] md:w-[500px] h-auto p-3 overflow-hidden rounded-2xl bg-white border border-gray-200 shrink-0 shadow-sm"';

content = content.replace(oldCard, newCard);

// Make the inner image h-auto instead of h-full
const oldInner = `            <div className="w-full h-full overflow-hidden rounded-[10px] bg-[#22242a] flex items-start justify-center">
              <img 
                src={src} 
                alt={\`Course Review \${i + 1}\`} 
                className="w-full h-full object-contain object-top block" 
              />
            </div>`;

const newInner = `            <div className="w-full h-auto overflow-hidden rounded-[10px] bg-[#22242a] flex items-start justify-center">
              <img 
                src={src} 
                alt={\`Course Review \${i + 1}\`} 
                className="w-full h-auto block" 
              />
            </div>`;

// Replace all instances of the old card and inner
if(content.includes(oldCard)) {
  content = content.replace(new RegExp(oldCard.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newCard);
  content = content.replace(new RegExp(oldInner.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newInner);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated review cards to be wider with dynamic height!');
} else {
  console.log('Could not find the exact strings. Need to use regex.');
}
