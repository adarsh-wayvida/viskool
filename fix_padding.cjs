const fs = require('fs');
const file = 'c:/Users/Lenovo/.gemini/antigravity/scratch/viskool-version2/src/components/AboutViskoolPage.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Why Learners Choose Viskool
content = content.replace(
  'className="bg-[#F9F8F6] py-10 sm:py-12 px-5 sm:px-8"',
  'className="bg-[#F9F8F6] py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8"'
);
content = content.replace(
  '<h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-10 sm:mb-14 text-center">\n            <span className="block text-[#8B1538]">\n              Why Learners Choose Viskool:',
  '<h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-8 sm:mb-10 text-center">\n            <span className="block text-[#8B1538]">\n              Why Learners Choose Viskool:'
);

// 2. Our Vision
content = content.replace(
  'className="bg-white py-12 sm:py-16 lg:py-20 px-5 sm:px-8"',
  'className="bg-white py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8"'
);
content = content.replace(
  '<h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-[#8B1538] leading-[1.2] tracking-tight mb-10 sm:mb-14 text-center">\n            Our Vision, Our Mission, Our Values',
  '<h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-[#8B1538] leading-[1.2] tracking-tight mb-8 sm:mb-10 text-center">\n            Our Vision, Our Mission, Our Values'
);

// 3. Our Courses
content = content.replace(
  'className="bg-[#FAFAFA] py-12 sm:py-16 lg:py-20 px-5 sm:px-8"',
  'className="bg-[#FAFAFA] py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8"'
);
content = content.replace(
  '<h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-10 sm:mb-14 text-center">\n            <span className="text-[#8B1538]">Our</span> Courses',
  '<h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-gray-900 leading-[1.2] tracking-tight mb-8 sm:mb-10 text-center">\n            <span className="text-[#8B1538]">Our</span> Courses'
);

// 4. Wherever You Are
content = content.replace(
  'className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20 px-5 sm:px-8"',
  'className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8"'
);
content = content.replace(
  '<div className="text-center max-w-6xl mx-auto mb-8 sm:mb-10">\n            <h2 className="text-[28px] md:text-[34px] lg:text-[36px]',
  '<div className="text-center max-w-6xl mx-auto mb-6 sm:mb-8">\n            <h2 className="text-[28px] md:text-[34px] lg:text-[36px]'
);

fs.writeFileSync(file, content, 'utf8');
console.log('done');
