const fs = require('fs');
const file = 'src/components/Header.jsx';
let content = fs.readFileSync(file, 'utf8');

// The original code has:
// isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100/80'
// It seems there's a black artifact. Let's completely remove the border-b everywhere on the header, keeping only the shadow on scroll.

content = content.replace(
  "isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100/80'",
  "isScrolled ? 'shadow-sm' : ''"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Removed header border');
