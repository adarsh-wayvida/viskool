const fs = require('fs');
let code = fs.readFileSync('src/components/Header.jsx', 'utf8');

// The logic is:
// if (item.label.toLowerCase().includes('parent testimonial') && onNavigate) { ... } else if (...) { ... } else { ... }
code = code.replace(
  /if\s*\([^)]*\.includes\('parent testimonial'\)[\s\S]*?onActionClick\(`Selected: \${[^}]+}`\);\s*\}/g,
  `if (item.href && item.href.startsWith('/')) {
                                    if (onNavigate) {
                                      const route = item.href.substring(1);
                                      onNavigate(route || 'home');
                                    }
                                  }`
);

// We have to be careful not to mess up mobile which uses `subItem.href` instead of `item.href`.
// Let's do it with a more targeted regex.
