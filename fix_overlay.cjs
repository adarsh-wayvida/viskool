const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldOverlay = '<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>';
const newOverlay = '<div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300"></div>';

if (content.includes(oldOverlay)) {
  content = content.replace(oldOverlay, newOverlay);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Overlay opacity increased successfully!');
} else {
  console.log('Could not find the exact overlay string, let me search for it.');
}
