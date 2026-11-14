const fs = require('fs');
const p = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let c = fs.readFileSync(p, 'utf8');
const startMarker = '            <div className="mt-8 w-full overflow-x-auto rounded-2xl border border-[#8B1538]/15">';
const endMarker = '            <div className="mt-8 rounded-2xl bg-[#F8F0F2] px-6 py-5 text-center">';
const i = c.indexOf(startMarker);
const j = c.indexOf(endMarker);
let acc = '';
