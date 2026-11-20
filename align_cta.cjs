const fs = require('fs');

const ctaFile = 'src/components/FloatingCourseCTA.jsx';
let ctaContent = fs.readFileSync(ctaFile, 'utf8');

// Change `fixed bottom-8 right-24` to `fixed bottom-6 right-[5.5rem]` (to position it to the left of the bottom-6 right-6 FAB)
ctaContent = ctaContent.replace(
  /fixed bottom-8 right-24/g,
  'fixed bottom-6 right-[88px]'
);

fs.writeFileSync(ctaFile, ctaContent, 'utf8');
console.log('Aligned CTA to bottom-6!');

