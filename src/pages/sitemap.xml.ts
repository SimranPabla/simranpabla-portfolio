import { routes } from '../content/site';

export function GET() {
  const urls = routes.map((route) => `<url><loc>https://simranpabla.com/${route}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
