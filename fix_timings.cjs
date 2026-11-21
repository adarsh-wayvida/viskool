const fs = require('fs');
const file = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(file, 'utf8');

const startTag = '<div className="grid grid-cols-2 md:grid-cols-3 gap-4">';
const endTag = '</div>\n            </div>\n          </div>\n        </div>\n      </section>';

const startIdx = content.indexOf(startTag);
const endIdx = content.indexOf(endTag, startIdx);

if (startIdx !== -1 && endIdx !== -1) {
    const cardsBlock = content.substring(startIdx, endIdx);
    
    // First, let's change the grid layout to exactly 4 columns
    let newBlock = cardsBlock.replace('<div className="grid grid-cols-2 md:grid-cols-3 gap-4">', '<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">');
    
    // Next, we need to completely remove the "Next Batch Starts" card
    const nextBatchCardRegex = /<div className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col items-center text-center justify-center hover:shadow-md transition-shadow group">\s*<span className="text-\[11px\] font-bold text-gray-400 uppercase tracking-wider mb-1">Next Batch Starts<\/span>\s*<span className="text-\[#102A43\] font-semibold transition-colors duration-300 group-hover:text-\[#800020\]">\[Soon\]<\/span>\s*<\/div>/;
    
    if (newBlock.match(nextBatchCardRegex)) {
        newBlock = newBlock.replace(nextBatchCardRegex, '');
        content = content.replace(cardsBlock, newBlock);
        fs.writeFileSync(file, content);
        console.log('Fixed timings grid and removed Next Batch card');
    } else {
        console.log('Next batch card not found in block!');
    }
} else {
    console.log('Block bounds not found');
}
