import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';

const root = join(import.meta.dirname, '..', 'dist');
const port = Number(process.env.PORT || 4322);
const types = { '.css':'text/css; charset=utf-8', '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.txt':'text/plain; charset=utf-8', '.xml':'application/xml; charset=utf-8', '.webp':'image/webp', '.png':'image/png', '.jpg':'image/jpeg' };

createServer((request, response) => {
  const urlPath = decodeURIComponent(new URL(request.url || '/', 'http://localhost').pathname);
  const safePath = normalize(urlPath).replace(/^(\.\.(\/|\\|$))+/, '');
  let filePath = join(root, safePath);
  try {
    if (statSync(filePath).isDirectory()) filePath = join(filePath, 'index.html');
    if (!statSync(filePath).isFile() || !filePath.startsWith(root)) throw new Error('not found');
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }
  response.writeHead(200, {
    'Content-Type': types[extname(filePath)] || 'application/octet-stream',
    'Cache-Control': extname(filePath) === '.html' ? 'no-cache' : 'public, max-age=86400',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-Frame-Options': 'DENY',
  });
  if (request.method === 'HEAD') return response.end();
  createReadStream(filePath).pipe(response);
}).listen(port, '127.0.0.1', () => console.log(`Portfolio serving ${root} on http://127.0.0.1:${port}`));
