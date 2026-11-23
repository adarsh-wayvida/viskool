const fs = require('fs');
const path = 'src/components/SyllabusTabs.jsx';
let content = fs.readFileSync(path, 'utf8');

const targetRegex = /<div className="mt-10 rounded-2xl bg-\[#F8F0F2\] p-6 sm:p-8">\s*<h3 className="text-lg font-bold text-\[#102A43\] sm:text-xl">\s*\{active\.title\}\{" "\}\s*<span className="text-\[#8B1538\]">\(\{active\.days\}\)<\/span>\s*<\/h3>\s*<div className="mt-4 flex flex-col gap-3">\s*\{active\.content\.map\(\(item, index\) => \(\s*<p key=\{index\} className="text-\[15px\] leading-relaxed text-\[#475569\] sm:text-base flex items-start">\s*<span className="mr-2\.5 mt-\[10px\] w-\[5px\] h-\[5px\] rounded-full bg-\[#8B1538\] flex-shrink-0"><\/span>\s*<span>\{item\}<\/span>\s*<\/p>\s*\)\)\}\s*<\/div>\s*<\/div>/;

const replacement = `<div className="mt-10 rounded-2xl bg-[#F8F0F2] p-6 sm:p-8 flex flex-row relative overflow-hidden">
        <div className="w-full lg:w-[70%] xl:w-[75%] relative z-10">
          <h3 className="text-lg font-bold text-[#102A43] sm:text-xl">
            {active.title}{" "}
            <span className="text-[#8B1538]">({active.days})</span>
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            {active.content.map((item, index) => (
              <p key={index} className="text-[15px] leading-relaxed text-[#475569] sm:text-base flex items-start">
                <span className="mr-2.5 mt-[10px] w-[5px] h-[5px] rounded-full bg-[#8B1538] flex-shrink-0"></span>
                <span>{item}</span>
              </p>
            ))}
          </div>
        </div>
        
        {/* Presenter Image - Only visible on LG screens and up */}
        <div className="hidden lg:block absolute bottom-0 right-0 h-[110%] w-[35%] xl:w-[30%] pointer-events-none z-0">
          <img 
            src="/images/student-presenter.webp" 
            alt="Student Presenter" 
            className="w-full h-full object-contain object-right-bottom drop-shadow-sm translate-y-2"
          />
        </div>
      </div>`;

if (targetRegex.test(content)) {
  content = content.replace(targetRegex, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful');
} else {
  console.log('Target block not found');
}
