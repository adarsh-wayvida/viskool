const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Extract Syllabus Section
const syllabusStart = content.indexOf('<section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="syllabus">');
if (syllabusStart === -1) {
    console.log('Could not find syllabus section');
    process.exit(1);
}

// Find the end of syllabus section (</section>)
const syllabusEnd = content.indexOf('</section>', syllabusStart) + '</section>'.length;
let syllabusSection = content.substring(syllabusStart, syllabusEnd);

// Remove syllabus from current location
content = content.substring(0, syllabusStart) + content.substring(syllabusEnd);

// 2. Remove the number "8. " from "8. Syllabus"
syllabusSection = syllabusSection.replace('8. Syllabus', 'Syllabus');

// 3. Find insertion point: directly below <section id="course-overview" ...> and its closing </section>
const courseOverviewStart = content.indexOf('<section id="course-overview"');
if (courseOverviewStart === -1) {
    console.log('Could not find course-overview section');
    process.exit(1);
}
const courseOverviewEnd = content.indexOf('</section>', courseOverviewStart) + '</section>'.length;

// Insert syllabusSection right after courseOverviewEnd
content = content.substring(0, courseOverviewEnd) + '\n      ' + syllabusSection + '\n' + content.substring(courseOverviewEnd);

// 4. Renumber remaining sections 9 to 16 -> 8 to 15
content = content.replace('9. CAREER OPPORTUNITIES', '8. CAREER OPPORTUNITIES');
content = content.replace('10. CERTIFICATIONS', '9. CERTIFICATIONS');
content = content.replace('11. REVIEWS', '10. REVIEWS');
content = content.replace('12. TOOLS', '11. TOOLS');
content = content.replace('13. DIGITAL MARKETING INSTITUTE IN KERALA', '12. DIGITAL MARKETING INSTITUTE IN KERALA');
content = content.replace('14. MODE & TIMINGS', '13. MODE & TIMINGS');
content = content.replace('15. READY TO START?', '14. READY TO START?');
content = content.replace('16. FAQ', '15. FAQ');

fs.writeFileSync(file, content, 'utf8');
console.log('Reordered and renumbered page.jsx successfully!');

// Now update StickyCourseNav.jsx
const navFile = 'src/components/StickyCourseNav.jsx';
let navContent = fs.readFileSync(navFile, 'utf8');

// We need to move `{ id: "syllabus", label: "SYLLABUS" },` to right after `{ id: "course-overview", label: "COURSE OVERVIEW" },`
const syllabusNavItem = '  { id: "syllabus", label: "SYLLABUS" },\n';
if (navContent.includes(syllabusNavItem)) {
    navContent = navContent.replace(syllabusNavItem, '');
    const courseOverviewItem = '  { id: "course-overview", label: "COURSE OVERVIEW" },\n';
    navContent = navContent.replace(courseOverviewItem, courseOverviewItem + syllabusNavItem);
    fs.writeFileSync(navFile, navContent, 'utf8');
    console.log('StickyCourseNav.jsx updated successfully!');
} else {
    console.log('Could not find syllabus nav item to move in StickyCourseNav.jsx');
}

