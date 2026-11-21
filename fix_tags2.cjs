const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const s = content.indexOf('Placement Assistance</p>');
const endBlock = content.substring(s, s + 400);

const startIdx = content.indexOf('</div>\n              </div>\n\n                  \n                </div>\n              </MagicCursorContainer>');
if (startIdx !== -1) {
  content = content.replace('</div>\n              </div>\n\n                  \n                </div>\n              </MagicCursorContainer>', '</div>\n              </MagicCursorContainer>');
  fs.writeFileSync(file, content);
  console.log('Fixed tags');
} else {
  console.log('Not found string exactly. Let me use regex.');
  content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/MagicCursorContainer>/, '</div>\n              </MagicCursorContainer>');
  fs.writeFileSync(file, content);
  console.log('Fixed tags regex');
}
