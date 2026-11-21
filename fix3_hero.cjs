const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldHero = `<div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">`;
const newHero = `<div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10 relative">`;
if(content.includes(oldHero)) {
  content = content.replace(oldHero, newHero);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed Hero!');
}
