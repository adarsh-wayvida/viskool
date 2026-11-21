const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// Update Grid Container
const oldGrid = `<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">`;
const newGrid = `<div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">`;
content = content.replace(oldGrid, newGrid);

// Update Card Header height
const oldHeader = `className={\`relative flex h-20 md:h-24 shrink-0 items-center justify-center \${goal.headerClass}\`}`;
const newHeader = `className={\`relative flex h-16 sm:h-20 md:h-24 shrink-0 items-center justify-center \${goal.headerClass}\`}`;
content = content.replace(oldHeader, newHeader);

// Update Icon size
const oldIcon = `className={\`relative z-10 h-10 w-10 md:h-16 md:w-16 \${goal.iconClass}\`}`;
const newIcon = `className={\`relative z-10 h-8 w-8 sm:h-10 sm:w-10 md:h-16 md:w-16 \${goal.iconClass}\`}`;
content = content.replace(oldIcon, newIcon);

// Update Text Container Padding
const oldTextContainer = `<div className="flex flex-col justify-start px-4 md:px-5 pb-4 md:pb-5 pt-3 md:pt-4 text-center sm:px-6 relative z-10">`;
const newTextContainer = `<div className="flex flex-col justify-start px-2 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5 pt-2 sm:pt-3 md:pt-4 text-center relative z-10">`;
content = content.replace(oldTextContainer, newTextContainer);

// Update Title size
const oldTitle = `<h3 className="text-base md:text-lg font-bold leading-snug text-[#102A43] sm:text-xl mb-1.5 md:mb-2">`;
const newTitle = `<h3 className="text-[13px] sm:text-base md:text-lg font-bold leading-snug text-[#102A43] mb-1 md:mb-2">`;
content = content.replace(oldTitle, newTitle);

// Update Description size
const oldDesc = `<p className="text-sm md:text-[15px] font-normal leading-6 md:leading-7 text-[#102A43] sm:text-base">`;
const newDesc = `<p className="text-[11px] sm:text-sm md:text-[15px] font-normal leading-[1.4] sm:leading-6 md:leading-7 text-[#102A43]">`;
content = content.replace(oldDesc, newDesc);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed learning goals 2-column mobile layout!');
