// Shared layout: page shell, header, footer, reusable sections.
export const SITE = {
  name: 'American Rescreen LLC',
  domain: 'https://american-rescreening.com',
  phone: '(352) 587-3719',
  phoneHref: 'tel:+13525873719',
  email: 'americanrescreen@yahoo.com',
  hours: 'Mon – Fri: 6:00 AM to 6:00 PM',
  area: 'Spring Hill, FL',
  socials: [
    ['Facebook', 'https://www.facebook.com/AmericanRescreeningLLC/', 'M13.5 9H15V6.5h-1.5c-1.93 0-3.5 1.57-3.5 3.5v1.5H8V14h2v5.5h2.5V14h2l.5-2.5h-2.5V10c0-.55.45-1 1-1z'],
    ['Instagram', 'https://www.instagram.com/americanrescreeningllc/', 'M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5zm0 5.8a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6zM16.5 8.3a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0zM12 6.6c1.76 0 1.97 0 2.66.04a3.6 3.6 0 0 1 1.23.23c.3.12.52.26.75.49.23.23.37.44.49.75.09.24.2.6.23 1.23.03.69.04.9.04 2.66s-.01 1.97-.04 2.66a3.6 3.6 0 0 1-.23 1.23 2.02 2.02 0 0 1-.49.75c-.23.23-.44.37-.75.49-.24.09-.6.2-1.23.23-.69.03-.9.04-2.66.04s-1.97-.01-2.66-.04a3.6 3.6 0 0 1-1.23-.23 2.02 2.02 0 0 1-.75-.49 2.02 2.02 0 0 1-.49-.75 3.6 3.6 0 0 1-.23-1.23C6.6 13.97 6.6 13.76 6.6 12s0-1.97.04-2.66c.03-.63.14-.99.23-1.23.12-.3.26-.52.49-.75.23-.23.44-.37.75-.49.24-.09.6-.2 1.23-.23C10.03 6.6 10.24 6.6 12 6.6M12 5.4c-1.79 0-2.02.01-2.72.04-.7.03-1.18.14-1.6.31-.44.17-.8.4-1.17.76-.37.37-.6.73-.76 1.17-.17.42-.28.9-.31 1.6C5.4 9.98 5.4 10.2 5.4 12s.01 2.02.04 2.72c.03.7.14 1.18.31 1.6.17.44.4.8.76 1.17.37.37.73.6 1.17.76.42.17.9.28 1.6.31.7.03.93.04 2.72.04s2.02-.01 2.72-.04c.7-.03 1.18-.14 1.6-.31a3.23 3.23 0 0 0 1.17-.76c.37-.37.6-.73.76-1.17.17-.42.28-.9.31-1.6.03-.7.04-.93.04-2.72s-.01-2.02-.04-2.72c-.03-.7-.14-1.18-.31-1.6a3.23 3.23 0 0 0-.76-1.17 3.23 3.23 0 0 0-1.17-.76c-.42-.17-.9-.28-1.6-.31C14.02 5.4 13.79 5.4 12 5.4z'],
    ['YouTube', 'https://www.youtube.com/channel/UC3-DdV0-rYwvq5UOvsf8G6Q', 'M18.6 8.6a1.73 1.73 0 0 0-1.22-1.22C16.3 7.09 12 7.09 12 7.09s-4.3 0-5.38.29A1.73 1.73 0 0 0 5.4 8.6C5.11 9.68 5.11 12 5.11 12s0 2.32.29 3.4c.16.6.63 1.06 1.22 1.22 1.08.29 5.38.29 5.38.29s4.3 0 5.38-.29a1.73 1.73 0 0 0 1.22-1.22c.29-1.08.29-3.4.29-3.4s0-2.32-.29-3.4zM10.62 14.11V9.89L14.2 12l-3.58 2.11z'],
    ['Yelp', 'https://www.yelp.com/biz/american-rescreening-new-port-richey', 'M11.9 5.6c.3-.5 1-.4 1.2.1l.1.3v5.2c0 .8-1 1.1-1.5.5l-2.6-3.4a.8.8 0 0 1 .1-1.1 8.6 8.6 0 0 1 2.7-1.6zM8 10.7l3.2 2.2c.6.4.4 1.4-.4 1.5l-3.9.6a.8.8 0 0 1-.9-.7 8.5 8.5 0 0 1 .8-3.2c.2-.5.8-.7 1.2-.4zm3.6 5.1c.6-.3 1.3.2 1.2.9l-.5 3.8c-.1.5-.6.9-1.1.7a8.6 8.6 0 0 1-2.6-1.7.8.8 0 0 1 0-1.1l3-2.6zm2.7-.4c-.3-.6.3-1.3 1-1.1l3.7 1.1c.5.2.8.7.5 1.2a8.6 8.6 0 0 1-2 2.4.8.8 0 0 1-1.1-.2l-2.1-3.4zm1-2.9c-.7.1-1.2-.7-.8-1.3l2.2-3.2c.3-.4 1-.5 1.3 0a8.5 8.5 0 0 1 1.3 3 .8.8 0 0 1-.7.9l-3.3.6z'],
  ],
};

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Rescreening', href: '/services/rescreening/' },
  {
    label: 'Specialty Screens', href: '/services/screen-replacements/',
    children: [
      ['Florida Glass Installation', '/florida-glass-installation-in-spring-hill/'],
      ['Pet Screen Installation', '/pet-screen-installation/'],
      ['Super Screen Installation', '/super-screen-installation/'],
    ],
  },
  { label: 'Panel Replacement', href: '/services/screen-repairs/' },
  {
    label: 'Other Services', href: null,
    children: [
      ['Door Replacement', '/door-replacement/'],
      ['Doggy Door Installation', '/doggy-door-installation-in-spring-hill/'],
      ['Pool Cage Painting', '/pool-cage-painting/'],
    ],
  },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

const icon = (d) => `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${d}"/></svg>`;

function navItem(item, currentPath) {
  const isCurrent = (href) => href && (href === currentPath || (href !== '/' && currentPath.startsWith(href)));
  if (!item.children) {
    return `<li><a href="${item.href}"${isCurrent(item.href) ? ' aria-current="page"' : ''}>${item.label}</a></li>`;
  }
  const open = item.children.some(([, href]) => isCurrent(href)) || isCurrent(item.href);
  const top = item.href
    ? `<a href="${item.href}"${isCurrent(item.href) ? ' aria-current="page"' : ''}>${item.label} <span class="caret" aria-hidden="true">▾</span></a>`
    : `<button type="button" aria-expanded="false">${item.label} <span class="caret" aria-hidden="true">▾</span></button>`;
  return `<li class="has-sub${open ? ' sub-current' : ''}">${top}
    <ul class="sub">${item.children.map(([label, href]) => `<li><a href="${href}"${isCurrent(href) ? ' aria-current="page"' : ''}>${label}</a></li>`).join('')}</ul>
  </li>`;
}

export function quoteForm(id = 'quote', heading = '') {
  return `
  <form class="quote-form" id="${id}" name="Quote Request" method="post" action="#${id}" onsubmit="this.classList.add('sent');return false;">
    ${heading ? `<p class="form-title">${heading}</p><p class="form-sub">Free estimate · No obligation · We reply within one business day</p>` : ''}
    <div class="form-grid">
      <label>Full Name<input type="text" name="name" placeholder="Full name" autocomplete="name" required></label>
      <label>Phone<input type="tel" name="phone" placeholder="(352) 555-0100" autocomplete="tel" required></label>
      <label>Email<input type="email" name="email" placeholder="you@email.com" autocomplete="email" required></label>
      <label>Address<input type="text" name="address" placeholder="Street address, Spring Hill, FL" autocomplete="street-address" required></label>
    </div>
    <label>What would you like to get done?<textarea name="message" rows="4" placeholder="Tell us about your screen enclosure, doors, or repair project…" required></textarea></label>
    <button type="submit" class="btn btn-red">Request My Free Quote</button>
    <p class="form-note">We respond within one business day. Prefer to talk? Call <a href="${SITE.phoneHref}">${SITE.phone}</a>.</p>
    <p class="form-success" role="status">Thanks! Your request is in — we'll get back to you within one business day.</p>
  </form>`;
}

export function ctaBand(heading = 'Ready to enjoy your outdoor space again?') {
  return `
  <section class="cta-band">
    <div class="container cta-inner">
      <div>
        <h2>${heading}</h2>
        <p>Free estimates · Licensed &amp; insured · Serving Spring Hill and the surrounding counties</p>
      </div>
      <div class="cta-actions">
        <a class="btn btn-white" href="${SITE.phoneHref}">Call ${SITE.phone}</a>
        <a class="btn btn-outline-white" href="/contact/">Request a Free Quote</a>
      </div>
    </div>
  </section>`;
}

export function faq(items) {
  return `<div class="faq">${items.map(([q, a]) => `
    <details><summary>${q}</summary><div class="faq-a"><p>${a}</p></div></details>`).join('')}
  </div>`;
}

export function serviceHero(title, lede, img) {
  return `
  <section class="page-hero"${img ? ` style="background-image:url('/assets/images/${img}')"` : ''}>
    <div class="container">
      <h1>${title}</h1>
      <p>${lede}</p>
      <div class="hero-actions">
        <a class="btn btn-red" href="/contact/">Get a Free Quote</a>
        <a class="btn btn-outline-white" href="${SITE.phoneHref}">Call ${SITE.phone}</a>
      </div>
    </div>
  </section>`;
}

export function page({ title, metaDesc, path, body, ogImage }) {
  const canonical = SITE.domain + path;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${metaDesc}">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${metaDesc}">
<meta property="og:type" content="website">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.domain}/assets/images/${ogImage || 'pool-screens-in-florida.jpg'}">
<link rel="icon" href="/assets/images/logo-badge-192.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<div class="topbar">
  <div class="container topbar-inner">
    <a href="${SITE.phoneHref}">${SITE.phone}</a>
    <a href="mailto:${SITE.email}">${SITE.email}</a>
    <span>${SITE.hours}</span>
  </div>
</div>
<div class="stripes" aria-hidden="true"></div>
<header class="site-header">
  <div class="container header-inner">
    <a class="wordmark" href="/" aria-label="American Rescreen LLC — Home"><img class="badge" src="/assets/images/logo-badge.png" alt="" width="52" height="52"><span>American <span class="rs">Rescreen</span><small>Screen Repair Service</small></span></a>
    <button class="nav-toggle" aria-label="Menu" aria-expanded="false" onclick="document.body.classList.toggle('nav-open');this.setAttribute('aria-expanded',document.body.classList.contains('nav-open'))"><span></span><span></span><span></span></button>
    <nav class="site-nav" aria-label="Main">
      <ul>
        %%NAV%%
      </ul>
    </nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-col">
      <a class="wordmark" href="/"><img class="badge" src="/assets/images/logo-badge.png" alt="" width="64" height="64"><span>American <span class="rs">Rescreen</span><small>Spring Hill, Florida</small></span></a>
      <p>Locally owned and operated screen company serving Spring Hill and the surrounding counties for over 23 years. Licensed &amp; insured.</p>
      <div class="socials">
        ${SITE.socials.map(([label, href, d]) => `<a href="${href}" aria-label="${label}" target="_blank" rel="noopener">${icon(d)}</a>`).join('')}
      </div>
    </div>
    <div class="footer-col">
      <h3>Services</h3>
      <ul>
        <li><a href="/services/rescreening/">Pool &amp; Patio Rescreening</a></li>
        <li><a href="/services/screen-repairs/">Individual Panel Replacement</a></li>
        <li><a href="/florida-glass-installation-in-spring-hill/">Florida Glass Installation</a></li>
        <li><a href="/super-screen-installation/">Super Screen Installation</a></li>
        <li><a href="/pet-screen-installation/">Pet Screen Installation</a></li>
        <li><a href="/door-replacement/">Door Replacement</a></li>
        <li><a href="/pool-cage-painting/">Pool Cage Painting</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h3>Company</h3>
      <ul>
        <li><a href="/about/">About Us</a></li>
        <li><a href="/blog/">Blog</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li><a href="/contact/#quote">Request a Free Quote</a></li>
      </ul>
      <h3>Contact</h3>
      <ul class="footer-contact">
        <li><a href="${SITE.phoneHref}">${SITE.phone}</a></li>
        <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
        <li>${SITE.hours}</li>
        <li>Spring Hill, Florida</li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">© ${new Date().getFullYear()} American Rescreen LLC. All rights reserved.</div>
  </div>
</footer>
</body>
</html>`.replace('%%NAV%%', NAV.map((i) => navItem(i, path)).join('\n        '));
}
