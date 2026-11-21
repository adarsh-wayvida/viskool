const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

// The file got corrupted right at the first line. 
// It looks like `"use <div className...` replaced `"use client";` and the imports.
// Wait, I need to know what imports were deleted.
// Let's check git status or git diff. We can just restore the imports and top part from the original.
