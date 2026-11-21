const fs = require('fs');
const file = 'src/components/StickyCourseNav.jsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = '{ id: "syllabus", label: "SYLLABUS" },';
const replacementStr = '{ id: "syllabus", label: "SYLLABUS" },\n  { id: "faculty", label: "FACULTY" },';

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(file, content);
    console.log('Added FACULTY to StickyCourseNav');
} else {
    console.log('Could not find syllabus in SECTIONS array');
}
