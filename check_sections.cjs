const fs = require('fs');
const content = fs.readFileSync('src/app/courses/ai-integrated-digital-marketing/page.jsx', 'utf8');
const regex = /<section[^>]*className=["'][^"']*["'][^>]*>/g;
const matches = content.match(regex);
if (matches) {
    matches.forEach(m => console.log(m));
}
