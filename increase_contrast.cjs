const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Increase wrapper opacity
content = content.replace(
  'absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-60',
  'absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-100'
);

// Increase stroke widths
content = content.replace('strokeWidth="1.5"', 'strokeWidth="3"');
content = content.replace('strokeWidth="1"', 'strokeWidth="2"'); // Replaces first occurrence
content = content.replace('strokeWidth="1"', 'strokeWidth="2"'); // Replaces second occurrence

// Increase gradient stop opacities
content = content.replace(/stopOpacity="0.8"/g, 'stopOpacity="1"');
content = content.replace(/stopOpacity="0.6"/g, 'stopOpacity="0.9"');
content = content.replace(/stopOpacity="0.5"/g, 'stopOpacity="0.8"');

fs.writeFileSync(file, content, 'utf8');
console.log('Increased wave contrast!');
