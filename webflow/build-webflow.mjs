// Generates Webflow-ready HTML fragments (one root div per page) + adapted CSS
// from the mockup source. Output: webflow/pages/<key>.html and webflow/webflow.css
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';

const state = JSON.parse(readFileSync('webflow/build-state.json', 'utf8'));
const posts = JSON.parse(readFileSync('content/posts.json', 'utf8'));
const A = (f) => state.assets[f].url; // asset URL by filename

const PHONE = '(352) 587-3719', PHONE_HREF = 'tel:+13525873719';
const EMAIL = 'americanrescreen@yahoo.com';
const HOURS = 'Mon – Fri: 6:00 AM to 6:00 PM';

const NAV = [
  ['Home', '/'], ['About', '/about'], ['Rescreening', '/rescreening'],
  ['Specialty Screens', '/screen-replacements'], ['Panel Replacement', '/screen-repairs'],
  ['Doors', '/door-replacement'], ['Painting', '/pool-cage-painting'],
  ['Blog', '/blog'], ['Contact', '/contact'],
];

const kicker = (t) => `<div class="kicker"><span class="kicker-star">★</span> ${t}</div>`;
const check = (strong, rest) => `<li class="check-item"><span class="check-star">★</span><div><strong>${strong}</strong> ${rest}</div></li>`;

const header = `
<div class="top-wrap">
  <div class="stripes"></div>
  <div class="topbar"><div class="container topbar-inner">
    <a href="${PHONE_HREF}" class="topbar-link">${PHONE}</a>
    <a href="mailto:${EMAIL}" class="topbar-link">${EMAIL}</a>
    <div class="topbar-text">${HOURS}</div>
  </div></div>
  <div class="site-header"><div class="container header-inner">
    <a href="/" class="wordmark"><img src="${A('logo-badge.png')}" alt="American Rescreen logo" class="badge"><span class="wm-text">American <span class="wm-red">Rescreen</span></span></a>
    <nav class="site-nav">${NAV.map(([l, h]) => `<a href="${h}" class="nav-link">${l}</a>`).join('')}</nav>
  </div></div>
</div>`;

const footer = `
<div class="site-footer">
  <div class="container footer-grid">
    <div class="footer-col">
      <a href="/" class="wordmark wm-footer"><img src="${A('logo-badge.png')}" alt="American Rescreen logo" class="badge"><span class="wm-text wm-white">American <span class="wm-red">Rescreen</span></span></a>
      <p class="footer-p">Locally owned and operated screen company serving Spring Hill and the surrounding counties for over 23 years. Licensed &amp; insured.</p>
    </div>
    <div class="footer-col">
      <h3 class="footer-h">Services</h3>
      <a href="/rescreening" class="footer-link">Pool &amp; Patio Rescreening</a>
      <a href="/screen-repairs" class="footer-link">Individual Panel Replacement</a>
      <a href="/florida-glass-installation-in-spring-hill" class="footer-link">Florida Glass Installation</a>
      <a href="/super-screen-installation" class="footer-link">Super Screen Installation</a>
      <a href="/pet-screen-installation" class="footer-link">Pet Screen Installation</a>
      <a href="/door-replacement" class="footer-link">Door Replacement</a>
      <a href="/pool-cage-painting" class="footer-link">Pool Cage Painting</a>
      <a href="/doggy-door-installation-in-spring-hill" class="footer-link">Doggy Door Installation</a>
    </div>
    <div class="footer-col">
      <h3 class="footer-h">Company</h3>
      <a href="/about" class="footer-link">About Us</a>
      <a href="/blog" class="footer-link">Blog</a>
      <a href="/contact" class="footer-link">Contact</a>
      <h3 class="footer-h footer-h2">Contact</h3>
      <a href="${PHONE_HREF}" class="footer-link">${PHONE}</a>
      <a href="mailto:${EMAIL}" class="footer-link">${EMAIL}</a>
      <div class="footer-text">${HOURS}</div>
      <div class="footer-text">Spring Hill, Florida</div>
    </div>
  </div>
  <div class="footer-bottom"><div class="container">© 2026 American Rescreen LLC. All rights reserved.</div></div>
</div>`;

const quoteForm = (title) => `
<div class="quote-form">
  ${title ? `<h3 class="form-title">${title}</h3><div class="form-sub">Free estimate · No obligation · We reply within one business day</div>` : ''}
  <form name="Quote Request" class="qform">
    <div class="form-grid">
      <div class="form-field"><label class="form-label">Full Name</label><input type="text" name="Name" placeholder="Full name" required class="form-input"></div>
      <div class="form-field"><label class="form-label">Phone</label><input type="tel" name="Phone" placeholder="(352) 555-0100" required class="form-input"></div>
      <div class="form-field"><label class="form-label">Email</label><input type="email" name="Email" placeholder="you@email.com" required class="form-input"></div>
      <div class="form-field"><label class="form-label">Address</label><input type="text" name="Address" placeholder="Street address" required class="form-input"></div>
    </div>
    <div class="form-field"><label class="form-label">What would you like to get done?</label><textarea name="Message" rows="4" placeholder="Tell us about your screen enclosure, doors, or repair project…" required class="form-input form-area"></textarea></div>
    <input type="submit" value="Request My Free Quote" class="btn btn-red btn-full">
  </form>
  <div class="form-note">We respond within one business day. Prefer to talk? Call <a href="${PHONE_HREF}" class="form-note-link">${PHONE}</a>.</div>
</div>`;

const ctaBand = (h) => `
<div class="cta-band"><div class="container cta-inner">
  <div><h2 class="cta-h">${h}</h2><div class="cta-sub">Free estimates · Licensed &amp; insured · Serving Spring Hill and the surrounding counties</div></div>
  <div class="cta-actions"><a href="${PHONE_HREF}" class="btn btn-white">Call ${PHONE}</a><a href="/contact" class="btn btn-outline">Request a Free Quote</a></div>
</div></div>`;

const HEROCSS = {};
const pageHero = (title, lede, img, key) => {
  HEROCSS[key] = `.hero-${key} { background-image: url('${img}'); }`;
  return `
<div class="page-hero hero-${key}"><div class="page-hero-scrim"></div><div class="container hero-content">
  <h1 class="hero-h1">${title}</h1>
  <p class="hero-lede">${lede}</p>
  <div class="hero-actions"><a href="/contact" class="btn btn-red">Get a Free Quote</a><a href="${PHONE_HREF}" class="btn btn-outline">Call ${PHONE}</a></div>
</div></div>`;
};

const steps = (items) => `
<div class="section section-cream"><div class="container">
  <div class="section-head center">${kicker('How It Works')}<h2 class="title-h2">Our Process</h2></div>
  <div class="steps-grid">${items.map(([t, d], i) => `<div class="step"><div class="step-num">0${i + 1}</div><h3 class="title-h3">${t}</h3><p class="step-p">${d}</p></div>`).join('')}</div>
</div></div>`;

const stdSteps = steps([
  ['Free Inspection', 'We assess your existing screens and frame, and identify exactly what needs attention — and what doesn’t.'],
  ['Honest Recommendation', 'You get a clear quote with material options that fit your needs and budget. No pressure, no upselling.'],
  ['Expert Installation', 'Our crew works efficiently and carefully, minimizing disruption and leaving your space clean.'],
  ['Warranty & Care Tips', 'Every job is backed by our warranty, and we’ll show you how to keep your screens in top shape.'],
]);

const faqBlock = (title, items) => `
<div class="section"><div class="container">
  <div class="section-head">${kicker('FAQs')}<h2 class="title-h2">${title}</h2></div>
  <div class="faq-list">${items.map(([q, a]) => `<div class="faq-item"><h3 class="faq-q">${q}</h3><p class="faq-a">${a}</p></div>`).join('')}</div>
</div></div>`;

const card3 = (cards) => `<div class="grid-3">${cards.map(([t, d]) => `<div class="card"><h3 class="title-h3">${t}</h3><p class="card-p">${d}</p></div>`).join('')}</div>`;

const testimonials = `
<div class="grid-3">
  ${[['Carisa Fleissner', 'Highly recommend. After trying 2 other companies that didn’t follow through, American Rescreen returned my message promptly and got me on the schedule quickly! Fair price, quality work, fast and courteous service.'],
     ['Carmel Macchia', 'Rob and his crew worked on my 37 year old cage. They did a FANTASTIC job repainting, replacing the bolts and screws, new doors and hardware, as well as a full rescreen. Reasonable prices, came promptly every day and responded to all my questions quickly and honestly.'],
     ['Celeste Hall', 'American Rescreen is an awesome company! Rob gave me a quick and reasonable estimate and Jared came out to rescreen my garage door. I was very happy with the work he did. Would definitely recommend this business to others!!']]
    .map(([n, t]) => `<div class="card quote-card"><div class="stars">★★★★★</div><p class="quote-text">“${t}”</p><div class="quote-name">— ${n}</div></div>`).join('')}
</div>`;

// ---------- PAGES ----------
const pages = {};

const latest = posts.slice(0, 3);
pages.home = `<div class="page-root">
${header}
<div class="hero"><div class="hero-scrim"></div><div class="container hero-content">
  <div class="hero-grid">
    <div class="hero-left">
      ${kicker('Spring Hill, FL &amp; Surrounding Counties')}
      <h1 class="hero-h1">Screens That <span class="grad">Outlast</span> the Florida Sun</h1>
      <p class="hero-lede">From full pool cage rescreens to a single torn panel, American Rescreen has kept Spring Hill–area homes bug-free and beautiful for over 23 years. Licensed, insured, and locally owned.</p>
      <div class="hero-actions"><a href="${PHONE_HREF}" class="btn btn-red">Call ${PHONE}</a><a href="/rescreening" class="btn btn-outline">Explore Services</a></div>
      <div class="hero-badges"><div class="hero-badge">★ 23+ Years of Experience</div><div class="hero-badge">★ Licensed &amp; Insured</div><div class="hero-badge">★ Locally Owned</div></div>
    </div>
    ${quoteForm('Request a Free Quote')}
  </div>
</div></div>
<div class="stats"><div class="container stats-inner">
  <div class="stat"><div class="stat-b">23+</div><div class="stat-s">Years in Business</div></div>
  <div class="stat"><div class="stat-b">5.0 ★</div><div class="stat-s">Customer Rating</div></div>
  <div class="stat"><div class="stat-b">1000s</div><div class="stat-s">Enclosures Rescreened</div></div>
  <div class="stat"><div class="stat-b">100%</div><div class="stat-s">Licensed &amp; Insured</div></div>
</div></div>
<div class="section section-cream"><div class="container">
  <div class="section-head center">${kicker('Our Services')}<h2 class="title-h2">Everything Your Screen Enclosure Needs</h2>
  <p class="section-p">Quality screen repair and replacement using premium materials from Phifer and Super Screen — backed by a warranty and a crew that shows up when they say they will.</p></div>
  <div class="grid-3">
    ${[['Pool, Patio & Lanai Rescreening', '/rescreening', 'Full rescreens with premium screening — clearer views, better airflow, and no more bugs, from pool cages to porches.'],
       ['Individual Panel Replacement', '/screen-repairs', 'One torn panel doesn’t need a full rescreen. We match and replace individual panels quickly and affordably.'],
       ['Pool Cage Painting', '/pool-cage-painting', 'A full repaint of your cage’s aluminum frame — with new bolts and screws — for a like-new look at a fraction of replacement cost.'],
       ['Florida Glass Installation', '/florida-glass-installation-in-spring-hill', 'Laminated privacy screen that blocks prying eyes, wind-blown debris, and water spray — while light still comes through.'],
       ['Super Screen & HD Screen', '/super-screen-installation', 'Thicker, heavy-duty screening that stands up to pets, storm debris, and years of Florida weather.'],
       ['Solar & No-See-Um Screens', '/screen-replacements', 'Super Solar screen blocks the sun’s heat and glare, and 20/20 fine mesh keeps out even no-see-ums.'],
       ['Pet Screens & Doggy Doors', '/pet-screen-installation', 'Claw-resistant pet screening and pet door installation so your screens and your pets can finally get along.'],
       ['Door Replacement', '/door-replacement', 'New screen and entry doors that improve security, curb appeal, and energy efficiency.'],
       ['Specialty Screens Overview', '/screen-replacements', 'Not sure which screen you need? Compare Florida Glass, Super Screen, HD, Super Solar, pet screen, and 20/20 mesh.']]
      .map(([t, h, d]) => `<div class="card"><h3 class="title-h3"><a href="${h}" class="card-link">${t}</a></h3><p class="card-p">${d}</p><a href="${h}" class="more-link">Learn more →</a></div>`).join('')}
  </div>
</div></div>
<div class="section"><div class="container split">
  <div class="split-text">
    ${kicker('Why Choose American Rescreen')}
    <h2 class="title-h2">A Local Crew That Treats Your Home Like Their Own</h2>
    <p class="section-p">American Rescreen is a locally owned and operated screen company that has served the Spring Hill community for more than two decades. We know what Florida sun, storms, and humidity do to a screen enclosure — and we build ours to last.</p>
    <ul class="checks">
      ${check('Premium materials only.', 'We install screening from Phifer and Super Screen — including heavy-duty HD mesh — because it holds up longest under the Florida sun.')}
      ${check('Free inspections and honest quotes.', 'We tell you what actually needs replacing — sometimes that’s one panel, not the whole cage.')}
      ${check('Warranty on every job.', 'Our work is guaranteed, and we stand behind it.')}
      ${check('Fast, courteous service.', 'Prompt callbacks, on-time arrivals, and a clean job site when we leave.')}
    </ul>
    <a href="/about" class="btn btn-navy">More About Us</a>
  </div>
  <img src="${A('screen-repair-florida.jpg')}" alt="American Rescreen technician replacing pool enclosure screen panels" class="split-img">
</div></div>
<div class="section section-cream"><div class="container">
  <div class="section-head center">${kicker('Reviews')}<h2 class="title-h2">What Our Neighbors Say</h2></div>
  ${testimonials}
</div></div>
<div class="section"><div class="container">
  <div class="section-head center">${kicker('Recent Projects')}<h2 class="title-h2">Our Work Around Spring Hill</h2></div>
  <div class="gallery">
    ${['pool-rescreening-fl.jpg|Freshly rescreened pool enclosure', 'pool-screen-in-florida.jpg|Pool screen enclosure', 'screen-panel-florida.jpg|New screen panel installation', 'pool-rescreening-in-fl.jpg|Pool cage rescreening project', 'screen-repair-florida.jpg|Screen repair on a Florida lanai', 'pool-screens-in-florida.jpg|Completed pool screen enclosure', 'screen-panels-in-fl.jpg|Replaced screen panels', 'pool-rescreening-fl-1.jpg|Pool area with new screening'].map((s) => { const [f, alt] = s.split('|'); return `<img src="${A(f)}" alt="${alt}" class="gallery-img">`; }).join('')}
  </div>
</div></div>
${ctaBand('Ready to enjoy your outdoor space again?')}
<div class="section section-cream"><div class="container">
  <div class="section-head center">${kicker('Latest From Our Blog')}<h2 class="title-h2">Screen Care Tips &amp; Guides</h2></div>
  <div class="grid-3">
    ${latest.map((p) => `<div class="card post-card"><a href="/blog/${p.slug}" class="post-img-link"><img src="${A(p.image)}" alt="${p.title.replace(/"/g, '&quot;')}" class="post-img"></a><div class="post-body"><div class="post-meta"><span class="post-cat">${p.category}</span> · ${p.date}</div><h3 class="title-h3"><a href="/blog/${p.slug}" class="card-link">${p.title}</a></h3><p class="card-p">${p.excerpt}</p><a href="/blog/${p.slug}" class="more-link">Read more →</a></div></div>`).join('')}
  </div>
  <div class="center-wrap"><a href="/blog" class="btn btn-navy">View All Posts</a></div>
</div></div>
${footer}
</div>`;

pages.about = `<div class="page-root">
${header}
${pageHero('Your Local Screen Experts Since Day One', 'Over 23 years of rescreening, repairing, and protecting outdoor spaces across Spring Hill and the surrounding counties.', A('pool-screen-in-florida.jpg'), 'about')}
<div class="section"><div class="container split">
  <div class="split-text">
    ${kicker('Who We Are')}
    <h2 class="title-h2">Locally Owned. Community Trusted.</h2>
    <p class="section-p">American Rescreen LLC is a licensed and insured screen company based right here in Spring Hill. We’re not a franchise and we’re not a storm-chasing crew from out of town — we’re your neighbors, and our reputation lives or dies on the work we leave behind.</p>
    <p class="section-p">With more than two decades in the trade, we’ve rescreened everything from brand-new lanais to 37-year-old pool cages. We understand the unique demands Florida weather puts on screen enclosures, and we tailor every job to what your home actually needs — no upselling, no shortcuts.</p>
    <p class="section-p">What sets us apart is simple: we use the best materials available — from Phifer and Super Screen, including their heavy-duty HD mesh — because they last the longest. We want to be your screen company for life, not just for one job.</p>
  </div>
  <img src="${A('american-rescreening-llc.jpg')}" alt="Completed pool screen enclosure by American Rescreen" class="split-img">
</div></div>
<div class="section section-cream"><div class="container">
  <div class="section-head center">${kicker('Why Homeowners Choose Us')}<h2 class="title-h2">The American Rescreen Difference</h2></div>
  ${card3([
    ['23+ Years of Experience', 'Two decades of Florida rescreening means we’ve seen — and fixed — it all. Our estimates are accurate and our work is efficient.'],
    ['Licensed & Insured', 'Full licensing and insurance protect your home and give you peace of mind on every project, big or small.'],
    ['Premium Materials', 'We install screening from Phifer and Super Screen — including heavy-duty HD mesh — and quality hardware, because cheap materials fail fast in the Florida sun.'],
    ['Honest, Fair Pricing', 'Free inspections, straightforward quotes, and recommendations based on what you need — not what pads the invoice.'],
    ['Warranty-Backed Work', 'Every rescreen and repair comes with a warranty. If something isn’t right, we come back and make it right.'],
    ['Fast & Courteous', 'Prompt callbacks, on-time arrivals, clean job sites. Our reviews say it better than we can.'],
  ])}
</div></div>
<div class="section"><div class="container">
  <div class="section-head center">${kicker('Our Previous Projects')}<h2 class="title-h2">Work We’re Proud Of</h2></div>
  <div class="gallery">
    ${['pool-rescreening-fl.jpg', 'pool-screens-in-florida.jpg', 'screen-panel-in-florida.jpg', 'pool-screen-panel-repair-in-fl.jpg', 'screen-repairs-in-fl.jpg', 'screenpanels.jpg', '20200421_155052-scaled.jpg', 'img_8157-scaled.jpg'].map((f) => `<img src="${A(f)}" alt="American Rescreen project" class="gallery-img">`).join('')}
  </div>
</div></div>
<div class="section section-cream"><div class="container">
  <div class="section-head center">${kicker('Areas We Serve')}<h2 class="title-h2">Proudly Serving Hernando, Pasco &amp; Citrus Counties</h2>
  <p class="section-p">Based in Spring Hill, we work throughout the surrounding counties — Brooksville, Weeki Wachee, Hudson, New Port Richey, Homosassa, and the communities in between. Not sure if you’re in our service area? <a href="/contact" class="text-link">Just ask.</a></p></div>
</div></div>
${ctaBand('Let’s take care of your screen enclosure.')}
${footer}
</div>`;

pages.contact = `<div class="page-root">
${header}
${pageHero('Contact American Rescreen', 'Request a free quote or ask us anything about your screen enclosure. We respond within one business day.', A('pool-rescreening-fl.jpg'), 'contact')}
<div class="section"><div class="container contact-grid">
  <div class="contact-left">
    ${kicker('Request a Free Quote')}
    <h2 class="title-h2">Tell Us About Your Project</h2>
    ${quoteForm('')}
  </div>
  <div class="info-card">
    <h2 class="title-h2">Get in Touch</h2>
    <div class="info-row"><strong>Phone:</strong>&nbsp;<a href="${PHONE_HREF}" class="text-link">${PHONE}</a></div>
    <div class="info-row"><strong>Email:</strong>&nbsp;<a href="mailto:${EMAIL}" class="text-link">${EMAIL}</a></div>
    <div class="info-row"><strong>Hours:</strong>&nbsp;${HOURS}</div>
    <div class="info-row"><strong>Service Area:</strong>&nbsp;Spring Hill, FL &amp; surrounding counties</div>
    <p class="info-note">Emergencies after a storm? Call us — if we can’t answer, leave a message and we’ll get back to you as soon as possible.</p>
  </div>
</div></div>
${footer}
</div>`;

pages.blog = `<div class="page-root">
${header}
${pageHero('Screen Care Tips &amp; Guides', 'Practical advice from 23+ years of rescreening Spring Hill–area homes — maintenance how-tos, buying guides, and storm prep.', A('pool-screens-in-florida.jpg'), 'blogpg')}
<div class="section"><div class="container">
  <div class="grid-3">
    ${posts.map((p) => `<div class="card post-card"><a href="/blog/${p.slug}" class="post-img-link"><img src="${A(p.image)}" alt="${p.title.replace(/"/g, '&quot;')}" class="post-img" loading="lazy"></a><div class="post-body"><div class="post-meta"><span class="post-cat">${p.category}</span> · ${p.date}</div><h3 class="title-h3"><a href="/blog/${p.slug}" class="card-link">${p.title}</a></h3><a href="/blog/${p.slug}" class="more-link">Read more →</a></div></div>`).join('')}
  </div>
</div></div>
${ctaBand('Reading about screen problems? We fix them.')}
${footer}
</div>`;

// ---- service pages ----
const svc = (key, hero, bodySections) => { pages[key] = `<div class="page-root">\n${header}\n${hero}\n${bodySections}\n${footer}\n</div>`; };

svc('rescreening',
  pageHero('Outdoor Rescreening in Spring Hill, FL', 'Florida sun, storms, and humidity are brutal on screen enclosures. When your screens sag, tear, or let the bugs in, we make them like new again — with materials built to last.', A('pool-rescreening-fl.jpg'), 'rescreening'),
  `<div class="section"><div class="container split">
  <div class="split-text">
    ${kicker('Rescreening Services')}
    <h2 class="title-h2">Every Enclosure, Every Screen</h2>
    <p class="section-p">Rescreening does more than keep insects out. It restores airflow and visibility, protects your pool and patio from debris, and brings back the outdoor space you actually want to spend time in.</p>
    <ul class="checks">
      ${check('Pool enclosure rescreening', '— full cage rescreens that make your pool area safe, clean, and enjoyable again.')}
      ${check('Patio & lanai rescreening', '— restore ventilation, visibility, and insect protection to your outdoor living space.')}
      ${check('Porch rescreening', '— durable, great-looking screens that keep your porch usable year-round.')}
      ${check('Screen repair', '— minor damage doesn’t always need a full rescreen. We fix what can be fixed.')}
    </ul>
    <p class="section-p">Every job uses premium screening from Phifer and Super Screen — including heavy-duty HD mesh — in your choice of types: standard fiberglass, 20/20 no-see-um, pet screen, Florida Glass privacy, Super Screen, and Super Solar.</p>
  </div>
  <img src="${A('pool-rescreening-in-fl.jpg')}" alt="Pool enclosure being rescreened in Spring Hill, FL" class="split-img">
</div></div>
${stdSteps}
<div class="section"><div class="container">
  <div class="section-head center">${kicker('The Benefits')}<h2 class="title-h2">Why Rescreening Is Worth It</h2></div>
  ${card3([
    ['Comfortable Outdoor Living', 'Enjoy your pool and patio without mosquitoes, no-see-ums, or falling debris.'],
    ['Protects Your Investment', 'A well-maintained enclosure protects your pool, furniture, and home — and boosts property value.'],
    ['Looks Great, Lasts Longer', 'Tight, clear screens transform how your whole backyard looks, and quality materials keep it that way.'],
  ])}
</div></div>
${faqBlock('Rescreening Questions, Answered', [
  ['How much does rescreening cost?', 'It depends on the size of the enclosure and the screen type you choose. Panel repairs start small; full pool cage rescreens vary with square footage. Contact us for a free, no-obligation quote — we’ll give you an honest number.'],
  ['How long does rescreening take?', 'Most individual repairs are done in under a day. Full pool enclosure rescreens typically take one to a few days depending on size and weather.'],
  ['What types of screen do you offer?', 'Standard fiberglass, 20/20 no-see-um mesh, pet screen, Florida Glass privacy screen, heavy-duty Super Screen and HD screen, and sun-blocking Super Solar screen — we’ll help you pick the right one for each area.'],
  ['Do you provide a warranty?', 'Yes. All of our rescreening work is warranty-backed. If a problem shows up, we come back and fix it.'],
  ['Can you repair my existing screens instead of replacing everything?', 'Absolutely. If only a panel or two is damaged, we’ll tell you — individual panel replacement is one of our most popular services.'],
])}
${ctaBand('Ready to rescreen? Get your free inspection.')}`);

svc('screen-replacements',
  pageHero('Florida Glass &amp; Specialty Screens', 'Tired of prying eyes on your pool or patio? Or screens that keep tearing? We install specialty screens for privacy, durability, sun protection, and pests — without giving up light and airflow.', A('screen-replacements.jpg'), 'specialty'),
  `<div class="section"><div class="container split">
  <div class="split-text">
    ${kicker('Specialty Screens')}
    <h2 class="title-h2">The Right Screen for Every Situation</h2>
    <p class="section-p">Standard screening keeps bugs out — but it can’t do everything. Depending on what you need, we offer specialty options that solve specific problems:</p>
    <ul class="checks">
      ${check('Florida Glass', '— vinyl-laminated privacy screen that blocks sightlines, wind, and water spray. Perfect for pool enclosure lower panels.')}
      ${check('Super Screen & HD screen', '— thicker, heavy-duty mesh with superior tear resistance for screens that keep failing.')}
      ${check('Super Solar screen', '— sun-blocking mesh that cuts heat and glare in your enclosure.')}
      ${check('Pet screen', '— up to 7× stronger than standard mesh, built to survive claws and paws.')}
      ${check('20/20 no-see-um screen', '— tighter weave that keeps out even the tiniest biting insects.')}
    </ul>
    <p class="section-p">Not sure which is right for your enclosure? We’ll walk you through the options during your free inspection and quote.</p>
    <a href="/contact" class="btn btn-red">Request a Quote</a>
  </div>
  <img src="${A('screen-replacements.jpg')}" alt="Florida Glass privacy screen installed on a pool enclosure" class="split-img">
</div></div>
<div class="section section-cream"><div class="container">
  <div class="section-head center">${kicker('Why We’re the Best at This')}<h2 class="title-h2">23+ Years. The Best Materials. Guaranteed.</h2>
  <p class="section-p">We’ve been installing specialty screens in Spring Hill for over two decades, and we only use materials we trust to last — from Phifer and Super Screen. We want to be your screen company for the long haul, and that starts with doing this job right.</p></div>
  ${testimonials}
</div></div>
${ctaBand('Not sure which screen you need? Ask us.')}`);

svc('screen-repairs',
  pageHero('Individual Panel Replacement in Spring Hill, FL', 'A single torn panel shouldn’t mean rescreening the whole cage. We replace individual panels quickly and affordably — matched to your existing screens.', A('screen-panel-florida.jpg'), 'panels'),
  `<div class="section"><div class="container split">
  <div class="split-text">
    ${kicker('Panel Replacement')}
    <h2 class="title-h2">Fix the Panel, Not the Whole Enclosure</h2>
    <p class="section-p">Wind-blown branches, an overeager dog, sun-brittled mesh — screen panels fail one at a time, and one bad panel is all it takes to let every mosquito in the neighborhood into your pool area.</p>
    <p class="section-p">Our individual panel replacement service is the fast, budget-friendly fix. We remove the damaged panel, install new screening that matches the rest of your enclosure, and re-spline it tight so it looks like nothing ever happened.</p>
    <ul class="checks">
      ${check('Matched materials', '— new panels blend in with your existing mesh type and color.')}
      ${check('Any panel, anywhere', '— roof panels, wall panels, door panels, garage door screens.')}
      ${check('Honest assessments', '— if your whole enclosure is near the end of its life, we’ll tell you. If it isn’t, we won’t sell you a full rescreen you don’t need.')}
      ${check('Fast turnaround', '— most panel replacements are done the same visit.')}
    </ul>
    <a href="/contact" class="btn btn-red">Get a Free Quote</a>
  </div>
  <img src="${A('pool-screen-panel-repair-in-fl.jpg')}" alt="Technician replacing an individual screen panel" class="split-img">
</div></div>
${stdSteps}
${faqBlock('Panel Replacement Questions', [
  ['When is panel replacement the right choice vs. a full rescreen?', 'If damage is limited to one or a few panels and the rest of your screening is in good shape, panel replacement is the smart move. If most panels are brittle, faded, or sagging, a full rescreen usually costs less per panel. We’ll give you our honest read during the free inspection.'],
  ['Will the new panel match my existing screens?', 'Yes — we match mesh type and color as closely as possible. A brand-new panel may look slightly cleaner than 10-year-old screening at first, but it will blend quickly.'],
  ['How fast can you come out?', 'Usually within days, not weeks. One panel is a quick job, and we keep common materials stocked.'],
  ['Do you replace screen door panels too?', 'Yes — doors, kick plates, garage door screens, and window screens included.'],
])}
${ctaBand('Got a torn panel? We’ll make it disappear.')}`);

svc('florida-glass-installation-in-spring-hill',
  pageHero('Florida Glass Installation in Spring Hill, FL', 'Privacy without walls. Florida Glass is a vinyl-laminated screen that blocks sightlines, wind, and water spray — while soft, natural light still fills your space.', A('pool-screens-in-florida.jpg'), 'flglass'),
  `<div class="section"><div class="container split">
  <div class="split-text">
    ${kicker('What Is Florida Glass?')}
    <h2 class="title-h2">A Privacy Screen Built for Florida</h2>
    <p class="section-p">Florida Glass is fiberglass screening with a vinyl laminate layer, creating a semi-opaque panel that looks frosted from the outside. Unlike regular mesh, it stops water spray, wind-blown dirt, and grass clippings — and completely blocks the view from neighboring properties.</p>
    <ul class="checks">
      ${check('Privacy enhancement', '— enjoy your pool without an audience.')}
      ${check('Weather & debris protection', '— keeps rain spray, dirt, and clippings out of your enclosure.')}
      ${check('Insect prevention', '— seals out crawling and flying pests better than open mesh.')}
      ${check('UV & noise reduction', '— softens harsh sun and dampens outside noise.')}
    </ul>
  </div>
  <img src="${A('pool-screens-in-florida.jpg')}" alt="Florida Glass privacy panels on a pool enclosure" class="split-img">
</div></div>
<div class="section section-cream"><div class="container">
  <div class="section-head center">${kicker('Where It Works Best')}<h2 class="title-h2">Popular Florida Glass Applications</h2></div>
  ${card3([
    ['Pool Enclosures', 'The classic use: privacy panels along the lower walls of your pool cage, keeping the view open up top while blocking sightlines at eye level.'],
    ['Lanais & Patios', 'Turn a lanai into a private outdoor room, protected from wind and spray, that’s comfortable in any season.'],
    ['Garden & Backyard Enclosures', 'Keep debris out and privacy in for any screened structure on your property.'],
  ])}
</div></div>
${stdSteps}
${faqBlock('Florida Glass Questions', [
  ['Does Florida Glass block light?', 'No — it’s translucent. Light filters through with a soft, frosted look, but people can’t see in.'],
  ['Is it durable in Florida weather?', 'Yes. Florida Glass is designed for our heat, humidity, and storms, and typically lasts as long as or longer than standard screening.'],
  ['Can you install it on just some panels?', 'Absolutely — most homeowners use it on lower wall panels for privacy and keep standard mesh above for the view.'],
  ['How do I clean it?', 'A gentle rinse and a soft brush with mild soap is all it takes. We’ll give you full care instructions after installation.'],
])}
${ctaBand('Ready for real privacy in your outdoor space?')}`);

svc('pet-screen-installation',
  pageHero('Pet Screen Installation in Spring Hill, FL', 'Has your dog torn through the screen door again? Pet screen is heavy-duty mesh built to survive claws, paws, and enthusiasm — so you can stop re-screening the same panel.', A('screenpanels.jpg'), 'petscreen'),
  `<div class="section"><div class="container split">
  <div class="split-text">
    ${kicker('What Is Pet Screen?')}
    <h2 class="title-h2">Screening That Fights Back</h2>
    <p class="section-p">Pet screen is woven from thicker, stronger vinyl-coated polyester — roughly seven times stronger than standard fiberglass mesh. It shrugs off scratching, pawing, and the occasional full-speed nose-first arrival, while still letting air and light through.</p>
    <ul class="checks">
      ${check('Tear and puncture resistant', '— built for dogs, cats, and grass trimmers alike.')}
      ${check('Great for high-risk areas', '— door panels, kick plates, and lower wall panels where pets make contact.')}
      ${check('Keeps pests out', '— the tight, tough weave also blocks crawling bugs, lizards, and snakes.')}
      ${check('Blends in', '— install it only where you need it; it pairs cleanly with standard screening above.')}
    </ul>
  </div>
  <img src="${A('screenpanels.jpg')}" alt="Heavy-duty pet screen installed on a lanai door panel" class="split-img">
</div></div>
<div class="section section-cream"><div class="container split">
  <img src="${A('pexels-heino-schliep-15866678.jpg')}" alt="Dog waiting at the door" class="split-img">
  <div class="split-text">
    ${kicker('The Companion Fix')}
    <h2 class="title-h2">Add a Doggy Door, Save Your Screens</h2>
    <p class="section-p">Here’s a trade secret: dogs stop going <em>through</em> screens when they have their own way in and out. Pairing pet screen with a pet door installation solves the problem for good — your dog gets freedom, and you stop playing screen-repair whack-a-mole.</p>
    <p class="section-p">Pet doors come in sizes from small (cat-approved) to extra-large, and we’ll install one in your screen door, entry door, or wall.</p>
    <a href="/doggy-door-installation-in-spring-hill" class="btn btn-navy">About Doggy Door Installation</a>
  </div>
</div></div>
<div class="section"><div class="container">
  <div class="section-head center">${kicker('Where We Install It')}<h2 class="title-h2">Pet Screen Applications</h2></div>
  ${card3([
    ['Patio & Lanai Enclosures', 'Let pets enjoy the outdoors with you — without sacrificing your screening to their claws.'],
    ['Screen Doors', 'The single most-destroyed screen panel in any pet home. Pet screen ends the cycle.'],
    ['Window Screens', 'Keep windows open for fresh air without worrying about cats climbing the mesh.'],
  ])}
</div></div>
${ctaBand('Pets and screens can get along. We’ll prove it.')}`);

svc('super-screen-installation',
  pageHero('Super Screen Installation in Spring Hill, FL', 'When standard screening keeps failing, upgrade. Super Screen is a thicker, heavy-duty mesh built to take real abuse — pets, storm debris, and years of Florida weather.', A('pool-rescreening-fl.jpg'), 'superscreen'),
  `<div class="section"><div class="container split">
  <div class="split-text">
    ${kicker('What Is Super Screen?')}
    <h2 class="title-h2">Thicker Mesh. Serious Durability.</h2>
    <p class="section-p">Super Screen is a heavy-duty screening material that’s substantially thicker and stronger than standard fiberglass mesh. It isn’t a shade product — it’s a durability product: screening that resists tears, punctures, and impacts that would shred ordinary mesh, backed by a long manufacturer warranty.</p>
    <p class="section-p">We install the full Super Screen family, and we’ll match the right product to the job:</p>
    <ul class="checks">
      ${check('Super Screen (standard)', '— the heavy-duty workhorse for enclosures that need to stand up to pets, debris, and time.')}
      ${check('HD screen by Super Screen', '— an even tougher mesh we install often; a favorite for high-wear enclosures.')}
      ${check('Super Screen 20/20', '— the fine-weave version that keeps out no-see-ums. (Standard Super Screen does not — if tiny biting insects are your problem, this is the one you want.)')}
      ${check('Super Solar screen', '— the sun-blocking member of the family, built to cut heat and glare in your enclosure.')}
    </ul>
  </div>
  <img src="${A('pool-rescreening-fl.jpg')}" alt="Pool enclosure upgraded with heavy-duty Super Screen mesh" class="split-img">
</div></div>
<div class="section section-cream"><div class="container">
  <div class="section-head center">${kicker('Why Upgrade')}<h2 class="title-h2">Where Heavy-Duty Screening Pays Off</h2></div>
  ${card3([
    ['Storm-Prone Enclosures', 'Wind-blown debris that tears standard mesh often bounces off Super Screen — fewer post-storm repairs.'],
    ['Homes With Pets', 'Thicker, tougher mesh shrugs off claws and paws that destroy ordinary screening.'],
    ['Tired of Rescreening', 'If you’ve replaced panels more than once, upgrading to Super Screen or HD resets the clock for far longer.'],
  ])}
</div></div>
${stdSteps}
${faqBlock('Super Screen Questions', [
  ['Is Super Screen worth the extra cost?', 'If you’ve replaced standard screening more than once — or you have pets — usually yes. The tear resistance and long manufacturer warranty mean far fewer repairs over the life of the enclosure.'],
  ['Does Super Screen keep out no-see-ums?', 'Standard Super Screen does not — its weave is about strength, not insect size. The 20/20 version has a fine weave that does keep out no-see-ums. We’ll help you pick the right one.'],
  ['What if I want shade or sun protection?', 'That’s Super Solar screen — a sun-blocking mesh in the same product family that cuts heat and glare. We install it too, often on west-facing walls and roofs.'],
  ['Can I mix screen types in one enclosure?', 'Absolutely. Many homeowners run HD or Super Screen on high-wear panels, Super Solar on the sunny side, Florida Glass down low for privacy, and standard mesh elsewhere.'],
])}
${ctaBand('Done replacing torn screens? Upgrade once.')}`);

svc('door-replacement',
  pageHero('Door Replacement in Spring Hill, FL', 'Sticking, sagging, drafty, or just dated — when a door stops doing its job, we replace it with one that improves your home’s security, efficiency, and look.', A('door-replacement-in-spring-hill.jpg'), 'doors'),
  `<div class="section"><div class="container split">
  <div class="split-text">
    ${kicker('Door Services')}
    <h2 class="title-h2">The Right Door, Installed Right</h2>
    <p class="section-p">A quality door protects your home, saves energy, and sets the tone for your whole exterior. We replace screen doors, entry doors, and enclosure doors across Spring Hill — with options for every style and budget.</p>
    <ul class="checks">
      ${check('Screen & enclosure doors', '— new doors, frames, and hardware for pool cages and lanais, including self-closing hinges and pet-resistant screening.')}
      ${check('Improved security', '— solid construction and quality locks that protect what matters.')}
      ${check('Energy efficiency', '— tight seals and modern materials that keep conditioned air where it belongs.')}
      ${check('Curb appeal', '— a new door is one of the highest-impact, lowest-cost upgrades a home can get.')}
    </ul>
    <a href="/contact" class="btn btn-red">Get a Door Quote</a>
  </div>
  <img src="${A('door-replacement-in-spring-hill.jpg')}" alt="New screen door installed on a Spring Hill home" class="split-img">
</div></div>
${steps([
  ['Free Consultation', 'We look at your current doors, listen to what you want, and assess what replacement makes sense.'],
  ['Selection Guidance', 'We help you choose the right door — material, design, hardware, and function.'],
  ['Professional Installation', 'Precise fitting, smooth operation, clean finish. Done on time with minimal disruption.'],
  ['Warranty & Maintenance', 'Your new door is covered by our warranty, and we’ll show you how to keep it working like new.'],
])}
${faqBlock('Door Replacement Questions', [
  ['How much does door replacement cost?', 'It varies with door type, materials, and customization. Screen doors are budget-friendly; entry doors range wider. Contact us for a free, specific quote.'],
  ['How long does replacement take?', 'Most door replacements are completed in a single visit once your door is on hand.'],
  ['Can you add a doggy door to my new door?', 'Yes — we can install a pet door in most new or existing doors. See our doggy door installation service.'],
  ['Do you offer warranties?', 'Yes, all door replacements are backed by our workmanship warranty plus applicable manufacturer warranties.'],
])}
${ctaBand('First impressions start at the door.')}`);

svc('doggy-door-installation-in-spring-hill',
  pageHero('Doggy Door Installation in Spring Hill, FL', 'Stop being the doorman. A properly installed pet door gives your dog freedom, ends the scratching and barking at the door, and — bonus — saves your screens.', A('pexels-heino-schliep-15866678.jpg'), 'doggy'),
  `<div class="section"><div class="container split">
  <div class="split-text">
    ${kicker('Why a Doggy Door?')}
    <h2 class="title-h2">Freedom for Them, Peace for You</h2>
    <ul class="checks">
      ${check('Pet independence', '— potty breaks, playtime, and fresh air on your dog’s schedule, not yours.')}
      ${check('A calmer household', '— no more frantic scratching, barking, or door-darting.')}
      ${check('Protects your screens', '— dogs stop pushing through screens once they have their own door.')}
      ${check('Healthier pets', '— more activity and fewer accidents, especially helpful for senior pets and busy owners.')}
    </ul>
    <p class="section-p">Pet doors come in small through extra-large — small sizes work great for cats — with options like locking panels, weatherproof flaps, and microchip-activated access for extra security.</p>
    <a href="/contact" class="btn btn-red">Get an Installation Quote</a>
  </div>
  <img src="${A('pexels-heino-schliep-15866678.jpg')}" alt="Dog waiting at the door for a doggy door" class="split-img">
</div></div>
<div class="section section-cream"><div class="container">
  <div class="section-head center">${kicker('Installation Options')}<h2 class="title-h2">Where We Install Pet Doors</h2></div>
  ${card3([
    ['Screen Doors', 'The most popular option — direct lanai and backyard access, and the end of screen damage.'],
    ['Entry & Exterior Doors', 'A weatherproof pet door in your back door, with locking options for when you’re away.'],
    ['Sliding Glass Doors', 'Panel inserts that add a pet door to your slider — no cutting into the glass or wall.'],
  ])}
</div></div>
${faqBlock('Doggy Door Questions', [
  ['What size pet door do I need?', 'Measure your pet’s shoulder height and width — we’ll help you size it right during the consultation. When in doubt, size up slightly for comfort.'],
  ['Will a pet door let other animals in?', 'Flap doors deter most critters, and locking or microchip-activated doors ensure only your pet gets through.'],
  ['Can you install one in my screen door?', 'Yes — screen door pet doors are our specialty, and we’ll reinforce the surrounding panel with pet screen if needed.'],
])}
${ctaBand('Your dog is ready. Are you?')}`);

svc('pool-cage-painting',
  pageHero('Pool Cage Painting in Spring Hill, FL', 'Chalky, faded, oxidized cage frame? A professional repaint — with fresh hardware — makes a decades-old enclosure look brand new for a fraction of the cost of replacing it.', A('img_8157-scaled.jpg'), 'painting'),
  `<div class="section"><div class="container split">
  <div class="split-text">
    ${kicker('Cage Painting')}
    <h2 class="title-h2">Make an Old Cage Look New Again</h2>
    <p class="section-p">Florida sun is hard on painted aluminum. Over the years, cage frames fade, chalk, and oxidize — and rusted bolts and screws streak the finish. The frame is usually still structurally sound; it just looks tired. That’s where a professional repaint comes in.</p>
    <ul class="checks">
      ${check('Full frame repaint', '— we clean and prep the aluminum, then apply a durable finish over every beam and upright.')}
      ${check('New bolts and screws', '— rusted fasteners get replaced, not painted over, so the streaks don’t come back.')}
      ${check('Pairs perfectly with a rescreen', '— painting and rescreening together is the closest thing to a brand-new enclosure without rebuilding it.')}
      ${check('A fraction of replacement cost', '— restore the cage you have instead of paying to tear it down and rebuild.')}
    </ul>
    <a href="/contact" class="btn btn-red">Get a Painting Quote</a>
  </div>
  <img src="${A('img_8157-scaled.jpg')}" alt="Freshly repainted pool cage frame with new screening" class="split-img">
</div></div>
<div class="section section-cream"><div class="container">
  <div class="section-head center">${kicker('Real Results')}<h2 class="title-h2">Don’t Take Our Word for It</h2>
  <p class="section-p">Here’s what one Spring Hill homeowner said after we restored her 37-year-old cage:</p></div>
  <div class="single-quote"><div class="card quote-card"><div class="stars">★★★★★</div><p class="quote-text">“Rob and his crew worked on my 37 year old cage. They did a FANTASTIC job repainting, replacing the bolts and screws, new doors and hardware, as well as a full rescreen. Reasonable prices, came promptly every day and responded to all my questions quickly and honestly.”</p><div class="quote-name">— Carmel Macchia</div></div></div>
</div></div>
${steps([
  ['Inspection & Quote', 'We look over your frame, flag any repairs it needs, and quote the repaint — with or without a rescreen.'],
  ['Prep & Hardware', 'The frame is cleaned and prepped, and corroded bolts and screws are swapped for new ones.'],
  ['Painting', 'A durable finish goes on evenly across the entire frame — no drips on your deck or screens.'],
  ['Walkthrough', 'We inspect the finished cage with you and back the work with our warranty.'],
])}
${faqBlock('Cage Painting Questions', [
  ['Is painting really worth it vs. replacing the cage?', 'If the frame is structurally sound — and most are — absolutely. A repaint with new hardware costs a fraction of a new enclosure and can add many years of life and curb appeal.'],
  ['Should I rescreen at the same time?', 'It’s the ideal time. The old screens typically come off for a proper frame prep anyway, so doing both at once gets you a like-new cage in one project.'],
  ['What about rusted screws and bolts?', 'We replace them. Painting over rusted fasteners just delays the streaks — new hardware is part of doing the job right.'],
  ['How long does the paint last?', 'With quality prep and paint, many years — the prep work is what makes the difference, and we don’t skip it.'],
])}
${ctaBand('Your cage has good bones. Let’s make it look like it.')}`);

mkdirSync('webflow/pages', { recursive: true });
for (const [k, html] of Object.entries(pages)) {
  writeFileSync(`webflow/pages/${k}.html`, html.replace(/\n\s*\n/g, '\n'));
}
writeFileSync('webflow/pages/hero-css.json', JSON.stringify(HEROCSS, null, 1));
console.log('pages written:', Object.keys(pages).join(', '));
for (const [k, html] of Object.entries(pages)) console.log(k, html.length, 'bytes');
