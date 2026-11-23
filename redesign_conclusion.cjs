const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/courses/ai-integrated-digital-marketing/page.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /<section className="bg-\[#FCF8F9\] px-4 pb-5 pt-0 font-sans sm:px-6 sm:pb-6 lg:px-8 lg:pb-7" id="conclusion">[\s\S]*?<\/section>/;

const replacement = `<section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-16" id="conclusion">
          <div className="mx-auto max-w-7xl">
            <div className="relative w-full max-w-none rounded-[2rem] border border-[#f5e6d3] bg-[#FCF8F4] px-6 py-8 shadow-sm sm:px-10 sm:py-12 lg:px-14 lg:py-14 overflow-hidden">
              
              {/* Content Wrapper to stay above background image */}
              <div className="relative z-10">
                <p className="mb-4 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#8B1538]">
                  CONCLUSION
                </p>
    
                <h3 className="text-[24px] font-bold leading-[1.2] tracking-tight text-[#102A43] sm:text-[30px] lg:text-[36px]">
                  Conclusion: Learn Digital Marketing in{" "}
                  <span className="text-[#8B1538]">God's Own Country</span>
                </h3>
    
                <div className="mt-6 md:mt-8 space-y-6 text-gray-700 leading-relaxed text-[15px] md:text-[16px] md:leading-8 max-w-[90%]">
                  <p>Kerala, God's Own Country, is known for its backwaters, green hills and a deep love for learning, and today that love for learning is moving online.</p>
                  <p>From Trivandrum, Kollam, Pathanamthitta, Alappuzha, Kottayam, Idukki, Ernakulam, Thrissur, Palakkad, Malappuram, Kozhikode, Wayanad, Kannur and Kasaragod, learners can now join the Best Digital Marketing Course from their own homes.</p>
                  <p>At Viskool, you simply book a free demo class, learn through live and recorded classes with expert mentors, work on real projects and finish with a certificate and placement support, all in a course and learning experience made just for Kerala learners.</p>
                </div>
              </div>

              {/* Background Illustration Placeholder */}
              <div className="absolute bottom-0 right-0 w-full max-w-[600px] pointer-events-none opacity-100 mix-blend-multiply">
                <img src="/images/kerala-illustration.webp" alt="" className="w-full h-auto object-contain object-bottom translate-y-[5%]" />
              </div>
            </div>
          </div>
        </section>`;

if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully redesigned the conclusion section.");
} else {
  console.log("Could not find the target section.");
}
