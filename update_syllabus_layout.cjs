const fs = require('fs');
const path = 'src/components/SyllabusTabs.jsx';
let content = fs.readFileSync(path, 'utf8');

const targetStart = '<div className="mt-10 rounded-2xl bg-[#F8F0F2]';
const startIndex = content.indexOf(targetStart);

if (startIndex !== -1) {
  const replacement = `<div className="mt-8 rounded-2xl bg-[#F8F0F2] p-6 sm:p-6 lg:p-8">
        <h3 className="text-lg font-bold text-[#102A43] sm:text-xl mb-6">
          {active.title}{" "}
          <span className="text-[#8B1538]">({active.days})</span>
        </h3>
        
        {(() => {
          const items = active.content;
          if (items.length <= 5) {
            return (
              <div className="flex flex-col gap-3">
                {items.map((item, index) => (
                  <p key={index} className="text-[15px] leading-relaxed text-[#475569] sm:text-base flex items-start">
                    <span className="mr-2.5 mt-[10px] w-[5px] h-[5px] rounded-full bg-[#8B1538] flex-shrink-0"></span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            );
          } else {
            const midpoint = Math.ceil(items.length / 2);
            const leftColumn = items.slice(0, midpoint);
            const rightColumn = items.slice(midpoint);
            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-12 relative">
                <div className="flex flex-col gap-3">
                  {leftColumn.map((item, index) => (
                    <p key={index} className="text-[15px] leading-relaxed text-[#475569] sm:text-base flex items-start">
                      <span className="mr-2.5 mt-[10px] w-[5px] h-[5px] rounded-full bg-[#8B1538] flex-shrink-0"></span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
                
                {/* Optional subtle divider visible on tablet/desktop */}
                <div className="hidden md:block absolute left-1/2 top-1 bottom-1 w-px bg-gray-300/60 -translate-x-1/2"></div>
                
                <div className="flex flex-col gap-3 mt-1 md:mt-0">
                  {rightColumn.map((item, index) => (
                    <p key={index + midpoint} className="text-[15px] leading-relaxed text-[#475569] sm:text-base flex items-start">
                      <span className="mr-2.5 mt-[10px] w-[5px] h-[5px] rounded-full bg-[#8B1538] flex-shrink-0"></span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
}`;

  content = content.substring(0, startIndex) + replacement;
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful');
} else {
  console.log('Target string not found');
}
