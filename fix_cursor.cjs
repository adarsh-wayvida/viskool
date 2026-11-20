const fs = require('fs');
const file = 'src/components/MagicCursorContainer.jsx';
let content = fs.readFileSync(file, 'utf8');

// The main cursor is the first div under {isHovering && (
// It currently has ?? inside it.
content = content.replace(
  '<div \n          className="pointer-events-none absolute z-[100] text-3xl drop-shadow-md"\n          style={{ \n            left: mousePos.x, \n            top: mousePos.y, \n            transform: \'translate(-50%, -50%)\' \n          }}\n        >\n          ??\n        </div>',
  '<div \n          className="pointer-events-none absolute z-[100] drop-shadow-md"\n          style={{ \n            left: mousePos.x, \n            top: mousePos.y, \n            transform: \'translate(-50%, -50%)\' \n          }}\n        >\n          <img src="/images/graduate-cap.svg" alt="Graduate Cap" className="w-[34px] h-[34px] object-contain pointer-events-none" />\n        </div>'
);

// The glitter particles are under {glitters.map((g) => (
// They currently have ? inside them.
content = content.replace(
  '<div\n          key={g.id}\n          className="pointer-events-none absolute z-[90] glitter-particle"\n          style={{ \n            left: g.x, \n            top: g.y,\n            fontSize: g.size + \'px\',\n            transform: \'translate(-50%, -50%)\'\n          }}\n        >\n          ?\n        </div>',
  '<div\n          key={g.id}\n          className="pointer-events-none absolute z-[90] glitter-particle"\n          style={{ \n            left: g.x, \n            top: g.y,\n            fontSize: g.size + \'px\',\n            transform: \'translate(-50%, -50%)\'\n          }}\n        >\n          ?\n        </div>'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed cursor!');
