const fs = require('fs');
const path = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(path, 'utf8');

const ammuTarget = `<p className="text-[13px] md:text-[14px] leading-relaxed text-slate-600">
                    Passionate about helping students master the art of digital marketing through practical, hands-on learning.
                  </p>`;

const ammuTargetCRLF = `<p className="text-[13px] md:text-[14px] leading-relaxed text-slate-600">\r
                    Passionate about helping students master the art of digital marketing through practical, hands-on learning.\r
                  </p>`;
                  
const ammuReplacement = `<div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-start gap-2 text-[13px] md:text-[14px] text-slate-600">
                      <IconBriefcase className="shrink-0 w-4 h-4 mt-0.5 text-[#8B1538]" />
                      <span>7 Years of Experience</span>
                    </div>
                    <div className="flex items-start gap-2 text-[13px] md:text-[14px] text-slate-600">
                      <IconSchool className="shrink-0 w-4 h-4 mt-0.5 text-[#8B1538]" />
                      <span>Education: MBA</span>
                    </div>
                  </div>`;

const harithaTarget = `<p className="text-[13px] md:text-[14px] leading-relaxed text-slate-600">
                    Bringing years of industry experience to the classroom, focusing on campaign management and analytics.
                  </p>`;
                  
const harithaTargetCRLF = `<p className="text-[13px] md:text-[14px] leading-relaxed text-slate-600">\r
                    Bringing years of industry experience to the classroom, focusing on campaign management and analytics.\r
                  </p>`;

const harithaReplacement = `<div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-start gap-2 text-[13px] md:text-[14px] text-slate-600">
                      <IconBriefcase className="shrink-0 w-4 h-4 mt-0.5 text-[#1A73E8]" />
                      <span>5 Years of Experience</span>
                    </div>
                    <div className="flex items-start gap-2 text-[13px] md:text-[14px] text-slate-600">
                      <IconSchool className="shrink-0 w-4 h-4 mt-0.5 text-[#1A73E8]" />
                      <span>Qualification: Diploma in Computer Science, BBA</span>
                    </div>
                    <div className="flex items-start gap-2 text-[13px] md:text-[14px] text-slate-600">
                      <IconCertificate className="shrink-0 w-4 h-4 mt-0.5 text-[#1A73E8]" />
                      <span>Certifications: Diploma in Digital Marketing, SEO & WordPress</span>
                    </div>
                  </div>`;

let updated = false;

if (content.includes(ammuTarget)) {
  content = content.replace(ammuTarget, ammuReplacement);
  updated = true;
} else if (content.includes(ammuTargetCRLF)) {
  content = content.replace(ammuTargetCRLF, ammuReplacement.replace(/\n/g, '\r\n'));
  updated = true;
} else {
  console.log("Could not find Ammu's bio.");
}

if (content.includes(harithaTarget)) {
  content = content.replace(harithaTarget, harithaReplacement);
  updated = true;
} else if (content.includes(harithaTargetCRLF)) {
  content = content.replace(harithaTargetCRLF, harithaReplacement.replace(/\n/g, '\r\n'));
  updated = true;
} else {
  console.log("Could not find Haritha's bio.");
}

if (updated) {
  fs.writeFileSync(path, content, 'utf8');
  console.log("Update successful");
}
