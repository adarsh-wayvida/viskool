const fs = require('fs');
const path = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(path, 'utf8');

const targetStr = `<div className="flex flex-col items-center mt-1">
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">2</p>
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">Certification</p>
                    </div>`;
                    
const altTargetStr = `<div className="flex flex-col items-center mt-1">\r
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">2</p>\r
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">Certification</p>\r
                    </div>`;

const replacement = `<div className="flex flex-col items-center mt-1">
                      <p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">Dual</p>
                      <p className="text-[12px] md:text-[14px] text-slate-600 mt-1">Certification</p>
                    </div>`;

if (content.includes(targetStr)) {
  content = content.replace(targetStr, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful (LF)');
} else if (content.includes(altTargetStr)) {
  content = content.replace(altTargetStr, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful (CRLF)');
} else {
  // Let's just do a regex replace to be safe
  const regex = /<p className="text-\[14px\] md:text-\[17px\] font-bold text-\[#0F172A\] leading-tight">2<\/p>/g;
  if (regex.test(content)) {
    content = content.replace(regex, '<p className="text-[14px] md:text-[17px] font-bold text-[#0F172A] leading-tight">Dual</p>');
    fs.writeFileSync(path, content, 'utf8');
    console.log('Update successful (Regex fallback)');
  } else {
    console.log('Target string not found');
  }
}
