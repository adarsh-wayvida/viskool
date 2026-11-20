const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const backLinkBlock = `        <div className="w-full max-w-[1520px] mx-auto z-20 flex justify-start mb-2 md:mb-4">
          <a
            href="/#courses"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#3F4D5A] transition-colors hover:text-[#9B0F38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B0F38] focus-visible:ring-offset-2 sm:text-base"
          >
            <IconArrowLeft className="h-5 w-5" stroke={1.8} aria-hidden="true" />
            Back to courses
          </a>
        </div>`;

// Remove the original block
content = content.replace(backLinkBlock, '');

// Insert it into the relative container, absolutely positioned
const newBackLink = `          {/* Back to courses - Absolute positioned */}
          <div className="absolute top-0 left-0 lg:left-4 z-20">
            <a
              href="/#courses"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#3F4D5A] transition-colors hover:text-[#9B0F38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9B0F38] focus-visible:ring-offset-2 sm:text-base"
            >
              <IconArrowLeft className="h-5 w-5" stroke={1.8} aria-hidden="true" />
              Back to courses
            </a>
          </div>`;

content = content.replace(
  '<div className="relative mx-auto w-full max-w-[1440px] flex flex-col items-center z-10 flex-1 justify-center">',
  '<div className="relative mx-auto w-full max-w-[1440px] flex flex-col items-center z-10 flex-1 justify-center">\n' + newBackLink
);

// We also need to remove the massive padding we added earlier, since the absolute positioned element no longer pushes content down.
// Let's change pt-[60px] md:pt-[80px] lg:pt-[100px] back to something more reasonable like pt-[32px] md:pt-[48px] lg:pt-[64px]
content = content.replace('pt-[60px] md:pt-[80px] lg:pt-[100px]', 'pt-[32px] md:pt-[48px] lg:pt-[64px]');

fs.writeFileSync(file, content, 'utf8');
console.log('Moved back link!');
