const fs = require('fs');

const file = 'src/components/FloatingActions.jsx';
let content = fs.readFileSync(file, 'utf8');

// The main trigger button has bg-[#8B1538] hover:bg-[#73152C]
// The user meant the un-opened (collapsed) state main icon. Oh wait!
// The user said "in collapsed state, give the call icon some other color than black. it looks like it is deactivated".
// The main trigger button has a call icon when closed. Currently it has bg-[#8B1538] text-white. 
// Oh, the user's screenshot shows the dark blue (#102A43) pop-out button for Call, and they are saying it looks black.
// The pop-out call button has: bg-[#102A43] hover:bg-[#0B1F33]
// Wait, the prompt says "in collapsed state". If it's collapsed, the main trigger button is showing the phone.
// BUT the screenshot shows the *expanded* state (X button + Blue call button). 
// The user likely meant: "Give the call icon some other color than black/dark blue. It looks deactivated".
// Let's change the dark blue pop-out button to a brighter blue or another contrasting color, like a bright distinct blue (e.g. #0056b3 or similar, or just a vibrant brand color).

content = content.replace(
  'bg-[#102A43] hover:bg-[#0B1F33] text-white rounded-full',
  'bg-[#0052CC] hover:bg-[#003D99] text-white rounded-full'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Changed pop-out Call button color to a bright blue!');

