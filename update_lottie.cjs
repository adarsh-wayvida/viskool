const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add the import statement
if (!content.includes('import { DotLottieReact }')) {
  content = content.replace(
    'import React from "react";',
    'import React from "react";\nimport { DotLottieReact } from "@lottiefiles/dotlottie-react";'
  );
}

// 2. Replace the image with the DotLottieReact component
const oldImg = '<img src="/images/smartphone-team-engagement.webp" alt="Smartphone team with engagement bubbles" className="w-full h-full object-contain drop-shadow-2xl" />';
const newLottie = '<DotLottieReact src="/images/digital-marketing.lottie" loop autoplay className="w-full h-full object-contain drop-shadow-2xl" />';

content = content.replace(oldImg, newLottie);

fs.writeFileSync(file, content, 'utf8');
console.log('Lottie file implemented successfully!');
