const fs = require('fs');
const file = 'c:/Users/Lenovo/.gemini/antigravity/scratch/viskool-version2/src/components/CourseSection.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'export const CourseSection = ({ courses, onSelectCourse, onEnrollCourse, onActionClick }) => {',
  'export const CourseSection = ({ courses, onSelectCourse, onEnrollCourse, onActionClick, hideHeader = false }) => {'
);

content = content.replace(
  '<section id="courses" className="py-6 lg:py-8 bg-[#FAFAFA] relative">',
  '<section id="courses" className={hideHeader ? "relative" : "py-6 lg:py-8 bg-[#FAFAFA] relative"}>'
);

content = content.replace(
  '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">',
  '<div className={hideHeader ? "w-full" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>'
);

content = content.replace(
  '{/* Section Header */}',
  '{/* Section Header */}\n        {!hideHeader && ('
);

content = content.replace(
  '        {/* Courses Cards Grid */}',
  '        )}\n\n        {/* Courses Cards Grid */}'
);

fs.writeFileSync(file, content, 'utf8');
