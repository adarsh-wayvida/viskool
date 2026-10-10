const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const ROOT = __dirname;

const liveReloadScript = `
<script>
(function() {
  let lastCheck = null;
  setInterval(() => {
    fetch('/__reload_check')
      .then(res => res.text())
      .then(timestamp => {
        if (lastCheck && lastCheck !== timestamp) {
          window.location.reload();
        }
        lastCheck = timestamp;
      })
      .catch(() => {});
  }, 1000);
})();
</script>
`;

let lastModifiedTime = Date.now();

function checkModified(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        checkModified(fullPath);
      } else {
        if (stat.mtimeMs > lastModifiedTime) {
          lastModifiedTime = stat.mtimeMs;
        }
      }
    }
  } catch(e) {}
}

setInterval(() => checkModified(ROOT), 500);

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.jsx': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4'
};

http.createServer((req, res) => {
  if (req.url === '/__reload_check') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end(String(lastModifiedTime));
  }

  let filePath = path.join(ROOT, req.url === '/' ? 'index.html' : req.url.split('?')[0]);
  const ext = path.extname(filePath).toLowerCase();
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
      return;
    }

    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    if (ext === '.html') {
      let html = content.toString('utf8');
      html = html.replace('</body>', `${liveReloadScript}</body>`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(html);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
}).listen(PORT, () => {
  console.log(`Server running with Live Auto-Reload at http://localhost:${PORT}`);
});
