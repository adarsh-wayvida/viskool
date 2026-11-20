const fs = require('fs');
const file = 'src/components/CourseReviewSlider.jsx';
let content = fs.readFileSync(file, 'utf8');

// The container has: 'flex w-max items-start animate-marquee'
// We change it to: 'flex w-max items-center animate-marquee'
content = content.replace('flex w-max items-start animate-marquee', 'flex w-max items-center animate-marquee');

fs.writeFileSync(file, content, 'utf8');
console.log('Cards vertically center aligned!');
