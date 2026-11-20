const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div>\s*<p className="font-semibold text-\[#102A43\]">\s*Is digital marketing only for big companies\?\s*<\/p>\s*<p className="mt-1">\s*No\. Small shops, clinics, schools, and freelancers use it\s*because it costs less than TV or newspaper ads and shows clear\s*results\.\s*<\/p>\s*<\/div>\s*<div>\s*<p className="font-semibold text-\[#102A43\]">\s*Do I need a degree to learn it\?\s*<\/p>\s*<p className="mt-1">\s*No\. You need curiosity, basic computer skills, and the\s*willingness to practise\.\s*<\/p>\s*<\/div>/g;

if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Successfully removed the question section.');
} else {
    console.log('Regex did not match.');
}
