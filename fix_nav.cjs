const fs = require('fs');
const navFile = 'src/components/StickyCourseNav.jsx';
let navContent = fs.readFileSync(navFile, 'utf8');

// The line is: `  { id: "syllabus", label: "SYLLABUS" },`
// Let's use regex to replace it
const syllabusNavItemRegex = /[ \t]*\{ id: "syllabus", label: "SYLLABUS" \},?\r?\n/g;

if (syllabusNavItemRegex.test(navContent)) {
    navContent = navContent.replace(syllabusNavItemRegex, '');
    const courseOverviewRegex = /([ \t]*\{ id: "course-overview", label: "COURSE OVERVIEW" \},?\r?\n)/;
    if (courseOverviewRegex.test(navContent)) {
        navContent = navContent.replace(courseOverviewRegex, '$1  { id: "syllabus", label: "SYLLABUS" },\n');
        fs.writeFileSync(navFile, navContent, 'utf8');
        console.log('StickyCourseNav.jsx updated successfully via regex!');
    } else {
        console.log('Could not find course-overview item to insert after');
    }
} else {
    console.log('Still could not find syllabus nav item to remove');
}
