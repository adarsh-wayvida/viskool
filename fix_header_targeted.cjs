const fs = require('fs');
let code = fs.readFileSync('src/components/Header.jsx', 'utf8');

// We can just find the exact block and replace it using substring matching
const index = code.indexOf("if (item.label.toLowerCase().includes('parent testimonial') && onNavigate) {");
if(index !== -1) {
    const end = code.indexOf("}", code.indexOf("onActionClick(`Selected: ${item.label}`);")) + 1;
    const block = code.substring(index, end);
    const replacement = `if (item.href && item.href.startsWith('/')) {
                                    if (onNavigate) {
                                      const route = item.href.substring(1);
                                      onNavigate(route || 'home');
                                    }
                                  } else if (item.href && item.href.startsWith('#')) {
                                    // let the anchor link work natively, just remove preventDefault
                                  }`;
    code = code.substring(0, index) + replacement + code.substring(end);
}

const mIndex = code.indexOf("if (subItem.label.toLowerCase().includes('parent testimonial') && onNavigate) {");
if(mIndex !== -1) {
    const mEnd = code.indexOf("}", code.indexOf("onActionClick(`Selected: ${subItem.label}`);")) + 1;
    const mReplacement = `if (subItem.href && subItem.href.startsWith('/')) {
                                if (onNavigate) {
                                  const route = subItem.href.substring(1);
                                  onNavigate(route || 'home');
                                }
                              } else if (subItem.href && subItem.href.startsWith('#')) {
                                // let the anchor link work natively
                              }`;
    code = code.substring(0, mIndex) + mReplacement + code.substring(mEnd);
}

// We also need to conditionally call e.preventDefault() only for non-hash links.
// Let's just fix the whole onClick blocks.
