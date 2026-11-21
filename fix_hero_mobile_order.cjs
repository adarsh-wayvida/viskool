const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// The container is: <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">
// If it's flex-col, it orders DOM elements sequentially. Since Left Column is first, it's above Right Column.
// Wait, the Right Column is the thumbnail. If the user says "in mobile view, the thumbnail comes on top.", they want the thumbnail to be visually ABOVE the text in mobile.
// Wait, let me check the image the user uploaded. The image shows the text above the thumbnail.
// Oh! The user's request: "in mobile view, the thumbnail comes on top." This means they WANT it to be on top, or it IS on top and they don't want it?
// Let me read: "in mobile view, the thumbnail comes on top."
// Let me look at the screenshot. The screenshot shows the text on top, and the thumbnail below it.
// Oh! So the current behavior IS text on top, and they are saying "it should come on top".
// Let's reverse the order on mobile: `flex-col-reverse lg:flex-row`

const oldContainer = `<div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">`;
const newContainer = `<div className="mx-auto w-full max-w-[1280px] px-4 md:px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 z-10 relative">`;

if(content.includes(oldContainer)) {
  content = content.replace(oldContainer, newContainer);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed mobile order to put thumbnail on top!');
} else {
  console.log('Could not find the exact string. Try regex.');
}
