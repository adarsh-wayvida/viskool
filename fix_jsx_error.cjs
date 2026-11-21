const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<section className="bg-\[#FCF8F9\] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="requirements">/;

if (regex.test(content)) {
  content = content.replace(regex, '            </div>\n          </div>\n        </div>\n      </section>\n\n\n      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="requirements">');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Fixed JSX syntax error!');
} else {
  console.log('Could not find the exact pattern. Will try a more robust approach.');
  // More robust: just replace 4 divs with 3 divs before the requirements section
  const regex2 = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<section[^>]*id="requirements">/;
  if (regex2.test(content)) {
    content = content.replace(regex2, '            </div>\n          </div>\n        </div>\n      </section>\n\n\n      <section className="bg-[#FCF8F9] px-4 pb-10 pt-0 font-sans sm:px-6 sm:pb-12 lg:px-8 lg:pb-14" id="requirements">');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed JSX syntax error using regex2!');
  } else {
    // maybe it's 3 divs and we just have an extra one somewhere? Let's just fix the exact string
    const exact = `            </div>\n          </div>\n        </div>\n        </div>\n      </section>`;
    if (content.includes(exact)) {
      content = content.replace(exact, `            </div>\n          </div>\n        </div>\n      </section>`);
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed by exact string replacement');
    } else {
      console.log("Failed all attempts.");
    }
  }
}
