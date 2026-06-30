import { writeFileSync } from 'fs';
import { resolve } from 'path';

const today = new Date().toISOString().split('T')[0];

const routes = [
  { path: '/', changefreq: 'hourly', priority: '1.0' },
  { path: '/jobs/latest-jobs', changefreq: 'hourly', priority: '0.9' },
  { path: '/jobs/results', changefreq: 'hourly', priority: '0.9' },
  { path: '/jobs/admit-cards', changefreq: 'hourly', priority: '0.9' },
  { path: '/jobs/answer-keys', changefreq: 'hourly', priority: '0.9' },
  { path: '/jobs/private-jobs', changefreq: 'daily', priority: '0.8' },
  { path: '/jobs/remote-jobs', changefreq: 'daily', priority: '0.7' },
  { path: '/ssc-cgl-2026', changefreq: 'daily', priority: '0.9' },
  { path: '/rrb-technician-2026', changefreq: 'daily', priority: '0.9' },
  { path: '/upsc-recruitment-2026', changefreq: 'daily', priority: '0.9' },
  { path: '/about', changefreq: 'monthly', priority: '0.3' },
  { path: '/contact', changefreq: 'monthly', priority: '0.3' },
  { path: '/privacy', changefreq: 'monthly', priority: '0.2' },
  { path: '/terms', changefreq: 'monthly', priority: '0.2' },
  { path: '/disclaimer', changefreq: 'monthly', priority: '0.2' },
];

const urlset = routes.map(r => `  <url>
    <loc>https://govtjobsindia.online${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>
`;

const outPath = resolve(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');
console.log(`Sitemap generated at ${outPath} with lastmod ${today}`);
