const fs = require('fs');
const content = fs.readFileSync('src/app/courses/ai-integrated-digital-marketing/page.jsx', 'utf8');
const regex = /<div className="w-full max-w-none rounded-3xl[^>]*>/g;
const matches = content.match(regex);
if (matches) {
    console.log(matches[0]);
    console.log(matches[1]);
}
