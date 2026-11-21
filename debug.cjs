const fs = require('fs');
const file = 'original_from_remote.jsx';
let content = fs.readFileSync(file, 'utf8');

const oldHero = `px-4 md:px-8 flex flex-col lg:flex-row items-center`;
console.log('Hero idx:', content.indexOf(oldHero));

const oldOverviewStr = `<div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">`;
const oldOverviewEnd = `</div>\n                </div>\n              </MagicCursorContainer>`;
const idx1 = content.indexOf(oldOverviewStr);
const idx2 = content.indexOf(oldOverviewEnd, idx1);
console.log('Overview:', idx1, idx2);

const oldLearnStr = `<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">`;
const idx3 = content.indexOf(oldLearnStr);
const endGridStr = `</div>\n          </div>\n        </div>`;
const endGridIdx = content.indexOf(endGridStr, idx3);
console.log('Learn:', idx3, endGridIdx);

const skillsStartStr = '10 Skill Areas That Turn';
const skillsIndex = content.indexOf(skillsStartStr);
const tableBlockStartStr = '<div className="mt-7 w-full overflow-x-auto rounded-2xl border border-[#8B1538]/15">';
const tableBlockStart = content.indexOf(tableBlockStartStr, skillsIndex);
const tableBlockEndStr = '</table>\n            </div>';
const tableBlockEnd = content.indexOf(tableBlockEndStr, tableBlockStart) + tableBlockEndStr.length;
console.log('Skills:', skillsIndex, tableBlockStart, tableBlockEnd);

const oldTableBlock = content.substring(tableBlockStart, tableBlockEnd);
const replIdx = content.indexOf(oldTableBlock);
console.log('Table block exists at:', replIdx);

