// Static site generator for the American Rescreening mockup.
// Usage: node build.mjs  →  outputs the full site to dist/
import { mkdirSync, writeFileSync, readFileSync, cpSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { page, SITE, ctaBand } from './src/layout.mjs';
import { home, about, contact } from './src/pages/core.mjs';
import { all as servicePages } from './src/pages/services.mjs';

const DIST = 'dist';
const posts = JSON.parse(readFileSync('content/posts.json', 'utf8'));

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
cpSync('assets/images', join(DIST, 'assets/images'), { recursive: true });
cpSync('src/site.css', join(DIST, 'assets/site.css'));

const missing = [];
function write(path, html) {
  const file = path.endsWith('/') ? path + 'index.html' : path;
  const out = join(DIST, file.replace(/^\//, ''));
  mkdirSync(dirname(out), { recursive: true });
  for (const m of html.matchAll(/\/assets\/images\/([a-z0-9._\-]+)/g)) {
    if (!existsSync(join(DIST, 'assets/images', m[1]))) missing.push(`${path} → ${m[1]}`);
  }
  writeFileSync(out, html);
}

const postCard = (p) => `
  <div class="card post-card">
    <a href="/${p.slug}/"><img src="/assets/images/${p.image}" alt="${p.title.replace(/"/g, '&quot;')}" loading="lazy"></a>
    <div class="post-body">
      <div class="post-meta"><span class="cat">${p.category}</span> · ${new Date(p.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
      <h3><a href="/${p.slug}/">${p.title}</a></h3>
      <p>${p.excerpt}</p>
      <a class="more" href="/${p.slug}/">Read more →</a>
    </div>
  </div>`;

// ---- Static pages ----
const blogPreview = `
<section class="section-tight">
  <div class="container">
    <div class="section-head center">
      <p class="kicker">Latest From Our Blog</p>
      <h2>Screen Care Tips &amp; Guides</h2>
    </div>
    <div class="grid-3">${posts.slice(0, 3).map(postCard).join('')}</div>
    <p style="text-align:center;margin-top:30px"><a class="btn btn-navy" href="/blog/">View All Posts</a></p>
  </div>
</section>`;

for (const p of [home, about, contact, ...servicePages]) {
  const body = p.body.replace('%%BLOG_PREVIEW%%', blogPreview);
  write(p.path, page({ ...p, body }));
}

// ---- Blog listing ----
const categories = [...new Set(posts.map((p) => p.category))].sort();
write('/blog/', page({
  title: 'Blog | Screen Care Tips & Guides | American Rescreening',
  metaDesc: 'Tips and guides on pool rescreening, screen enclosure care, Florida Glass, pet screens, hurricane prep, and more from American Rescreening in Spring Hill, FL.',
  path: '/blog/',
  body: `
<section class="page-hero">
  <div class="container">
    <h1>Screen Care Tips &amp; Guides</h1>
    <p>Practical advice from 23+ years of rescreening Spring Hill homes — maintenance how-tos, buying guides, and storm prep.</p>
  </div>
</section>
<section>
  <div class="container">
    <p style="color:var(--muted);margin-bottom:28px">Topics: ${categories.join(' · ')}</p>
    <div class="grid-3">${posts.map(postCard).join('')}</div>
  </div>
</section>
${ctaBand('Reading about screen problems? We fix them.')}
`,
}));

// ---- Blog posts ----
for (const p of posts) {
  write(`/${p.slug}/`, page({
    title: `${p.title} | American Rescreening`,
    metaDesc: p.excerpt.slice(0, 158),
    path: `/${p.slug}/`,
    ogImage: p.image,
    body: `
<section class="section-tight">
  <div class="container article">
    <a class="back-link" href="/blog/">← Back to Blog</a>
    <div class="post-meta"><span class="cat">${p.category}</span> · ${new Date(p.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
    <h1>${p.title}</h1>
    <div class="article-hero"><img src="/assets/images/${p.image}" alt="${p.title.replace(/"/g, '&quot;')}"></div>
    ${p.content}
  </div>
</section>
${ctaBand('Need a hand with your screens?')}
`,
  }));
}

// ---- sitemap + robots ----
const urls = ['/', '/about/', '/contact/', '/blog/', ...servicePages.map((p) => p.path), ...posts.map((p) => `/${p.slug}/`)];
write('/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE.domain}${u}</loc></url>`).join('\n')}
</urlset>`);
write('/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE.domain}/sitemap.xml\n`);

console.log(`Built ${urls.length + 2} files to ${DIST}/`);
if (missing.length) {
  console.warn('MISSING IMAGES:');
  for (const m of [...new Set(missing)]) console.warn('  ' + m);
}
