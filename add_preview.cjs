const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const placeholderBlock = `{/* Right Column: Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[580px] aspect-[16/9] bg-[#F3F4F6] rounded-2xl flex items-center justify-center border-2 border-dashed border-[#D1D5DB]">
              <span className="text-[#9CA3AF] font-medium text-lg">Image Placeholder</span>
            </div>
          </div>`;

const newBlock = `{/* Right Column: Video Preview */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] aspect-[16/9] rounded-[24px] overflow-hidden group cursor-pointer shadow-lg">
              {/* Thumbnail */}
              <img src="/images/digital-marketing-preview.webp" alt="Course Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              
              {/* Overlay Gradient (Optional but good for text readability) */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

              {/* Play Button & Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-[72px] h-[72px] rounded-full border-[1.5px] border-white/80 bg-black/30 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path d="M5 3L19 12L5 21V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white font-bold text-[18px] tracking-wide drop-shadow-md">Preview this course</span>
              </div>
            </div>
          </div>`;

content = content.replace(placeholderBlock, newBlock);

fs.writeFileSync(file, content, 'utf8');
console.log('Replaced placeholder with preview component!');
