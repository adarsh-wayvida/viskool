const fs = require('fs');
const file = 'src/components/MagicCursorContainer.jsx';
let content = fs.readFileSync(file, 'utf8');

// The original file uses \r\n line endings. We will use Regex to safely replace the characters.
content = content.replace(
  />\s*\?\?\s*<\/div>/,
  '>\n          <img src="/images/graduate-cap.svg" alt="Graduate Cap" className="w-[34px] h-[34px] object-contain pointer-events-none" />\n        </div>'
);

content = content.replace(
  />\s*\?\s*<\/div>/,
  '>\n          ?\n        </div>'
);

// Also let's clean up the text-3xl from the main cursor so it doesn't mess with the image size
content = content.replace('className="pointer-events-none absolute z-[100] text-3xl drop-shadow-md"', 'className="pointer-events-none absolute z-[100] drop-shadow-md"');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed cursor regex');
