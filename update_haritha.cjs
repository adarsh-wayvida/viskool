const fs = require('fs');
const path = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Make cards full height
content = content.replace(/group flex h-fit flex-row/g, 'group flex h-full flex-row');

// 2. Update Haritha's qualifications and certifications into one education line
const harithaRegex = /<div className="flex items-start gap-2 text-\[13px\] md:text-\[14px\] text-slate-600">\s*<IconSchool className="shrink-0 w-4 h-4 mt-0\.5 text-\[#1A73E8\]" \/>\s*<span>Qualification: Diploma in Computer Science, BBA<\/span>\s*<\/div>\s*<div className="flex items-start gap-2 text-\[13px\] md:text-\[14px\] text-slate-600">\s*<IconCertificate className="shrink-0 w-4 h-4 mt-0\.5 text-\[#1A73E8\]" \/>\s*<span>Certifications: Diploma in Digital Marketing, SEO & WordPress<\/span>\s*<\/div>/g;

const harithaReplacement = `<div className="flex items-start gap-2 text-[13px] md:text-[14px] text-slate-600">
                      <IconSchool className="shrink-0 w-4 h-4 mt-0.5 text-[#1A73E8]" />
                      <span>Education: Diploma in Computer Science, BBA, Diploma in Digital Marketing, SEO & WordPress</span>
                    </div>`;

if (harithaRegex.test(content)) {
  content = content.replace(harithaRegex, harithaReplacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful');
} else {
  console.log('Could not find Haritha regex match');
}
