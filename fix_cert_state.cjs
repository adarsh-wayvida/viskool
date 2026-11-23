const fs = require('fs');
const path = 'src/app/courses/ai-integrated-digital-marketing/page.jsx';
let content = fs.readFileSync(path, 'utf8');

const compDecl = 'export default function AiIntegratedDigitalMarketingPage() {';
const replacement = `export default function AiIntegratedDigitalMarketingPage() {
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);`;

if (content.includes(compDecl) && !content.includes('const [selectedCertificate')) {
  content = content.replace(compDecl, replacement);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update successful');
} else {
  console.log('Target string not found or already added');
}
