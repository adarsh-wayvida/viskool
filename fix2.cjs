const fs = require('fs');
let c = fs.readFileSync('src/components/Header.jsx', 'utf8');

const target = \          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[#222222]">
            {navLinks.map((link) => {
              if (link.hasDropdown) {\;

const newStart = c.indexOf(target);
const endPattern = \                    >
                      <span>{link.label}</span>
                      <svg \;
const newEnd = c.indexOf(endPattern, newStart);

if (newStart !== -1 && newEnd !== -1) {
  const replacement = \          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[#222222]">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isOpen = openDropdown === link.label;
                const isChildActive = link.items && link.items.some(item => item.href === currentPage);

                return (
                  <div 
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => handleTriggerClick(link.label)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleTriggerClick(link.label);
                        }
                      }}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={\\\lex items-center gap-1.5 text-[14px] transition-colors duration-200 cursor-pointer focus:outline-hidden \\\\}\;
  
  c = c.substring(0, newStart) + replacement + c.substring(newEnd);
  fs.writeFileSync('src/components/Header.jsx', c);
  console.log('Fixed exactly');
} else {
  console.log('Could not find boundaries');
}
