const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const lottieCode = '<DotLottieReact src="/images/digital-marketing.lottie" loop autoplay className="w-full h-full object-contain drop-shadow-2xl" />';
const imgCode = '<img src="/images/smartphone-team-engagement.webp" alt="Smartphone team with engagement bubbles" className="w-full h-full object-contain drop-shadow-2xl" />';

if (content.includes(lottieCode)) {
  content = content.replace(lottieCode, imgCode);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Lottie removed and replaced with the previous static image!');
} else {
  console.log('Could not find the lottie code. Let me try regex.');
  const lottieRegex = /<DotLottieReact[^>]*\/>/;
  if (lottieRegex.test(content)) {
    content = content.replace(lottieRegex, imgCode);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed via regex.');
  }
}
