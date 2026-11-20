const fs = require('fs');
const file = 'src/components/MagicCursorContainer.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('??', '<img src="/images/graduate-cap.svg" alt="Graduate Cap" className="w-[34px] h-[34px] object-contain drop-shadow-md pointer-events-none" />');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed emoji');
