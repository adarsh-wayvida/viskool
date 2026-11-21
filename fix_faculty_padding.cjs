const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = 'className="bg-[#FCF8F9] px-4 pb-8 pt-0 font-sans sm:px-6 sm:pb-10 lg:px-8 lg:pb-12" id="faculty"';
const replaceStr = 'className="bg-[#FCF8F9] px-4 pb-1 pt-0 font-sans sm:px-6 sm:pb-1 lg:px-8 lg:pb-2" id="faculty"';

if (content.includes(targetStr)) {
    content = content.replace(targetStr, replaceStr);
    fs.writeFileSync(file, content);
    console.log('Fixed faculty section outer padding');
} else {
    console.log('Not found');
}
