const fs = require('fs');
const path = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add state variable
const compDecl = 'export default function AiIntegratedDigitalMarketing() {';
if (content.includes(compDecl) && !content.includes('selectedCertificate')) {
  content = content.replace(compDecl, compDecl + '\n  const [selectedCertificate, setSelectedCertificate] = React.useState(null);');
}

// 2. Make Viskool Cert clickable
const viskoolCertImg = '<img src="/images/Digital-Marketing-Certificate.webp" alt="Viskool Course Certificate" className="w-full h-full object-contain p-4 md:p-6 drop-shadow-md" />';
const viskoolClickableImg = '<img src="/images/Digital-Marketing-Certificate.webp" alt="Viskool Course Certificate" className="w-full h-full object-contain p-4 md:p-6 drop-shadow-md cursor-pointer" onClick={() => setSelectedCertificate(\'/images/Digital-Marketing-Certificate.webp\')} />';

// 3. Make Board Cert clickable
const boardCertImg = '<img src="/images/board-certificate.webp" alt="Board Course Certificate" className="w-full h-full object-contain p-4 md:p-6 drop-shadow-md" />';
const boardClickableImg = '<img src="/images/board-certificate.webp" alt="Board Course Certificate" className="w-full h-full object-contain p-4 md:p-6 drop-shadow-md cursor-pointer" onClick={() => setSelectedCertificate(\'/images/board-certificate.webp\')} />';

content = content.replace(viskoolCertImg, viskoolClickableImg);
content = content.replace(boardCertImg, boardClickableImg);

// 4. Add modal JSX right before the final closing tag </>
const modalJSX = `
      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
              onClick={() => setSelectedCertificate(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedCertificate} 
              alt="Certificate Full Size" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </>
  );
}`;

const finalTags = `    </>
  );
}`;
const altFinalTags = `    </>\r
  );\r
}`;

if (content.includes(finalTags) && !content.includes('Certificate Modal')) {
  content = content.replace(finalTags, modalJSX);
  console.log('Added modal (LF)');
} else if (content.includes(altFinalTags) && !content.includes('Certificate Modal')) {
  content = content.replace(altFinalTags, modalJSX.replace(/\n/g, '\r\n'));
  console.log('Added modal (CRLF)');
}

fs.writeFileSync(path, content, 'utf8');
console.log('Update script finished');
