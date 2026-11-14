const fs = require('fs');
let content = fs.readFileSync('src/components/WhyChooseUs.jsx', 'utf8');
content = content.replace(/<button[\s\S]*?<\/button>/, <button 
                onClick={() => onActionClick && onActionClick('Book a Free Demo Class')}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#8B1538] hover:bg-[#73152C] text-white font-bold text-sm sm:text-[15px] px-8 py-3.5 rounded-lg shadow-sm transition-colors duration-200 active:scale-95"
              >
                Book a Free Demo Class <span className="ml-2 text-lg leading-none">&rarr;</span>
              </button>);
fs.writeFileSync('src/components/WhyChooseUs.jsx', content);
