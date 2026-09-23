import { SITE, quoteForm, ctaBand } from '../layout.mjs';

const ICONS = {
  pool: 'M2 15c1.7 0 1.7 1.5 3.4 1.5S7 15 8.7 15s1.7 1.5 3.3 1.5S13.7 15 15.3 15s1.7 1.5 3.3 1.5S20.3 15 22 15v2c-1.7 0-1.7 1.5-3.4 1.5S17 17 15.3 17s-1.6 1.5-3.3 1.5S10.3 17 8.7 17 7 18.5 5.4 18.5 3.7 17 2 17zM8.5 5A2.5 2.5 0 0 1 11 7.5V13H9V11H7v2H5V7.5A2.5 2.5 0 0 1 7.5 5zm0 2a.5.5 0 0 0-.5.5V9h2V7.5a.5.5 0 0 0-.5-.5zM14 5h5v2h-5v2h5v2h-5v2h-2V7a2 2 0 0 1 2-2z',
  panel: 'M4 4h16v16H4zm2 2v5h5V6zm7 0v5h5V6zm-7 7v5h5v-5zm7 0v5h5v-5z',
  door: 'M6 3h12a1 1 0 0 1 1 1v17h-2V5H8v16H6V4a1 1 0 0 1 0-1zm4 8h2v3h-2zM9 21v-2h6v2z',
  paw: 'M12 12.5c2.6 0 5.5 2 5.5 4.5 0 1.4-1.1 2.5-2.5 2.5-1.1 0-2-.4-3-.4s-1.9.4-3 .4A2.5 2.5 0 0 1 6.5 17c0-2.5 2.9-4.5 5.5-4.5zM6.5 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm11 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM9.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm5 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
  privacy: 'M12 5c5 0 9 4.5 10 7-1 2.5-5 7-10 7S3 14.5 2 12c1-2.5 5-7 10-7zm0 2C8.6 7 5.6 9.8 4.2 12 5.6 14.2 8.6 17 12 17s6.4-2.8 7.8-5C18.4 9.8 15.4 7 12 7zm0 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z',
  shield: 'M12 2l8 3.5v5.6c0 5-3.4 9.5-8 10.9-4.6-1.4-8-5.9-8-10.9V5.5zm0 2.2L6 6.8v4.3c0 3.9 2.6 7.6 6 8.8 3.4-1.2 6-4.9 6-8.8V6.8z',
  cable: 'M4 4h3v3H4zm13 0h3v3h-3zM5.5 8.5l4.7 4.7a4 4 0 1 0 1.4-1.4L6.9 7.1zm13-1.4l-4.2 4.2 1.4 1.4 4.2-4.2zM14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0z',
  wrench: 'M21.7 6.6a5.5 5.5 0 0 1-7.2 6.7L8 19.8a2.1 2.1 0 0 1-3-3l6.5-6.5a5.5 5.5 0 0 1 6.7-7.2l-3.2 3.1.8 2.8 2.8.8z',
  screen: 'M3 5h18v12H3zm2 2v8h14V7zm-2 12h18v2H3z',
};
const chip = (name) => `<div class="icon-chip"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[name]}"/></svg></div>`;

const SERVICES = [
  ['pool', 'Pool Rescreening', '/services/rescreening/', 'Full rescreens of pool enclosures with premium Phifer screening — clearer views, better airflow, and no more bugs.'],
  ['screen', 'Patio, Lanai & Porch Rescreening', '/services/rescreening/', 'Bring worn patio, lanai, and porch screens back to life so every outdoor space is comfortable year-round.'],
  ['panel', 'Individual Panel Replacement', '/services/screen-repairs/', 'One torn panel doesn’t need a full rescreen. We match and replace individual panels quickly and affordably.'],
  ['privacy', 'Florida Glass Installation', '/florida-glass-installation-in-spring-hill/', 'Laminated privacy screen that blocks prying eyes, wind-blown debris, and water spray — while light still comes through.'],
  ['shield', 'Super Screen Installation', '/super-screen-installation/', 'Heavy-duty, tear-resistant mesh with a tighter weave for better shade, longer life, and fewer no-see-ums.'],
  ['paw', 'Pet Screens & Doggy Doors', '/pet-screen-installation/', 'Claw-resistant pet screening and pet door installation so your screens and your pets can finally get along.'],
  ['door', 'Door Replacement', '/door-replacement/', 'New screen and entry doors that improve security, curb appeal, and energy efficiency.'],
  ['cable', 'Hurricane Cable Installation', '/hurricane-cable-installation/', 'Reinforce your screen enclosure against Florida storms with professionally installed hurricane cables.'],
  ['wrench', 'Small Home Repairs', '/small-home-repairs/', 'The handyman list you’ve been putting off — done right by the same crew you already trust with your enclosure.'],
];

const TESTIMONIALS = [
  ['Carisa Fleissner', 'Highly recommend. After trying 2 other companies that didn’t follow through, American Rescreening returned my message promptly and got me on the schedule quickly! Fair price, quality work, fast and courteous service.'],
  ['Carmel Macchia', 'Rob and his crew worked on my 37 year old cage. They did a FANTASTIC job repainting, replacing the bolts and screws, new doors and hardware, as well as a full rescreen. Reasonable prices, came promptly every day and responded to all my questions quickly and honestly.'],
  ['Celeste Hall', 'American Rescreening is an awesome company! Rob gave me a quick and reasonable estimate and Jared came out to rescreen my garage door. I was very happy with the work he did. Would definitely recommend this business to others!!'],
];

export const testimonialCards = () => TESTIMONIALS.map(([name, text]) => `
  <div class="quote-card">
    <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
    <blockquote>“${text}”</blockquote>
    <cite>${name}</cite>
  </div>`).join('');

const GALLERY = [
  ['pool-rescreening-fl.jpg', 'Freshly rescreened pool enclosure in Spring Hill, FL'],
  ['pool-screen-in-florida.jpg', 'Pool screen enclosure over a residential pool'],
  ['screen-panel-florida.jpg', 'New screen panel installation'],
  ['pool-rescreening-in-fl.jpg', 'Pool cage rescreening project'],
  ['screen-repair-florida.jpg', 'Screen repair on a Florida lanai'],
  ['pool-screens-in-florida.jpg', 'Completed pool screen enclosure'],
  ['screen-panels-in-fl.jpg', 'Replaced screen panels on an enclosure'],
  ['pool-rescreening-fl-1.jpg', 'Pool area with new screening'],
];

export const home = {
  path: '/',
  file: 'index.html',
  title: 'Screen Company in Spring Hill, FL | American Rescreening LLC',
  metaDesc: 'Pool rescreening, screen repair, Florida Glass, and screen enclosure services in Spring Hill, FL. Locally owned, licensed & insured, 23+ years of experience. Free estimates — call (352) 587-3719.',
  body: `
<section class="hero">
  <div class="container">
    <div class="hero-grid">
      <div>
        <p class="kicker">Spring Hill, Florida</p>
        <h1>Screens That <span class="grad">Outlast</span> the Florida Sun</h1>
        <p class="lede">From full pool cage rescreens to a single torn panel, American Rescreening has kept Spring Hill homes bug-free and beautiful for over 23 years. Licensed, insured, and locally owned.</p>
        <div class="hero-actions">
          <a class="btn btn-red" href="${SITE.phoneHref}">Call ${SITE.phone}</a>
          <a class="btn btn-outline-white" href="/services/rescreening/">Explore Services</a>
        </div>
        <div class="hero-badges">
          <span><svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/></svg>23+ Years of Experience</span>
          <span><svg viewBox="0 0 24 24"><path d="M12 2l8 3.5v5.6c0 5-3.4 9.5-8 10.9-4.6-1.4-8-5.9-8-10.9V5.5z"/></svg>Licensed &amp; Insured</span>
          <span><svg viewBox="0 0 24 24"><path d="M12 3l9 8h-3v9h-4v-6H10v6H6v-9H3z"/></svg>Locally Owned &amp; Operated</span>
        </div>
      </div>
      ${quoteForm('quote', 'Request a Free Quote')}
    </div>
  </div>
</section>

<div class="stats">
  <div class="container stats-inner">
    <div class="stat"><b>23+</b><span>Years in Business</span></div>
    <div class="stat"><b>5.0 ★</b><span>Customer Rating</span></div>
    <div class="stat"><b>1000s</b><span>Enclosures Rescreened</span></div>
    <div class="stat"><b>100%</b><span>Licensed &amp; Insured</span></div>
  </div>
</div>

<section class="section-cream">
  <div class="container">
    <div class="section-head center">
      <p class="kicker">Our Services</p>
      <h2>Everything Your Screen Enclosure Needs</h2>
      <p>Quality screen repair and replacement using premium Phifer materials — backed by a warranty and a crew that shows up when they say they will.</p>
    </div>
    <div class="grid-3">
      ${SERVICES.map(([ic, t, href, d]) => `
      <div class="card">
        ${chip(ic)}
        <h3><a href="${href}">${t}</a></h3>
        <p>${d}</p>
        <a class="more" href="${href}">Learn more →</a>
      </div>`).join('')}
    </div>
  </div>
</section>

<section>
  <div class="container split">
    <div>
      <p class="kicker">Why Choose American Rescreening</p>
      <h2>A Local Crew That Treats Your Home Like Their Own</h2>
      <p>American Rescreening is a locally owned and operated screen company that has served the Spring Hill community for more than two decades. We know what Florida sun, storms, and humidity do to a screen enclosure — and we build ours to last.</p>
      <ul class="checks">
        <li><strong>Premium materials only.</strong> We install Phifer screening products because they hold up longest under the Florida sun.</li>
        <li><strong>Free inspections and honest quotes.</strong> We tell you what actually needs replacing — sometimes that&rsquo;s one panel, not the whole cage.</li>
        <li><strong>Warranty on every job.</strong> Our work is guaranteed, and we stand behind it.</li>
        <li><strong>Fast, courteous service.</strong> Prompt callbacks, on-time arrivals, and a clean job site when we leave.</li>
      </ul>
      <a class="btn btn-navy" href="/about/">More About Us</a>
    </div>
    <img src="/assets/images/screen-repair-florida.jpg" alt="American Rescreening technician replacing pool enclosure screen panels" loading="lazy">
  </div>
</section>

<section class="section-cream">
  <div class="container">
    <div class="section-head center">
      <p class="kicker">Reviews</p>
      <h2>What Our Neighbors Say</h2>
    </div>
    <div class="grid-3">
      ${testimonialCards()}
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head center">
      <p class="kicker">Recent Projects</p>
      <h2>Our Work Around Spring Hill</h2>
    </div>
    <div class="gallery">
      ${GALLERY.map(([f, alt]) => `<img src="/assets/images/${f}" alt="${alt}" loading="lazy">`).join('\n      ')}
    </div>
  </div>
</section>

${ctaBand('Ready to enjoy your outdoor space again?')}

%%BLOG_PREVIEW%%
`,
};

export const about = {
  path: '/about/',
  title: 'About Us | Screen Company in Spring Hill, FL | American Rescreening',
  metaDesc: 'American Rescreening is a locally owned, licensed & insured screen company serving Spring Hill, FL for over 23 years. Meet the team behind the area’s trusted pool enclosure and rescreening service.',
  body: `
<section class="page-hero" style="background-image:url('/assets/images/pool-screen-in-florida.jpg')">
  <div class="container">
    <h1>Your Local Screen Experts Since Day One</h1>
    <p>Over 23 years of rescreening, repairing, and protecting outdoor spaces across Spring Hill, Florida.</p>
    <div class="hero-actions">
      <a class="btn btn-red" href="/contact/">Get a Free Quote</a>
      <a class="btn btn-outline-white" href="${SITE.phoneHref}">Call ${SITE.phone}</a>
    </div>
  </div>
</section>

<section>
  <div class="container split">
    <div>
      <p class="kicker">Who We Are</p>
      <h2>Locally Owned. Community Trusted.</h2>
      <p>American Rescreening LLC is a licensed and insured screen company based right here in Spring Hill. We&rsquo;re not a franchise and we&rsquo;re not a storm-chasing crew from out of town — we&rsquo;re your neighbors, and our reputation lives or dies on the work we leave behind.</p>
      <p>With more than two decades in the trade, we&rsquo;ve rescreened everything from brand-new lanais to 37-year-old pool cages. We understand the unique demands Florida weather puts on screen enclosures, and we tailor every job to what your home actually needs — no upselling, no shortcuts.</p>
      <p>What sets us apart is simple: we use the best materials available, including Phifer screening products, because they last the longest. We want to be your screen company for life, not just for one job.</p>
    </div>
    <img src="/assets/images/american-rescreening-llc.jpg" alt="Completed pool screen enclosure by American Rescreening" loading="lazy">
  </div>
</section>

<section class="section-cream">
  <div class="container">
    <div class="section-head center">
      <p class="kicker">Why Homeowners Choose Us</p>
      <h2>The American Rescreening Difference</h2>
    </div>
    <div class="grid-3">
      <div class="card"><h3>23+ Years of Experience</h3><p>Two decades of Florida rescreening means we&rsquo;ve seen — and fixed — it all. Our estimates are accurate and our work is efficient because we&rsquo;ve done it thousands of times.</p></div>
      <div class="card"><h3>Licensed &amp; Insured</h3><p>Full licensing and insurance protect your home and give you peace of mind on every project, big or small.</p></div>
      <div class="card"><h3>Premium Materials</h3><p>We install Phifer screening and quality hardware because cheap materials fail fast in the Florida sun. Good materials are cheaper in the long run.</p></div>
      <div class="card"><h3>Honest, Fair Pricing</h3><p>Free inspections, straightforward quotes, and recommendations based on what you need — not what pads the invoice.</p></div>
      <div class="card"><h3>Warranty-Backed Work</h3><p>Every rescreen and repair comes with a warranty. If something isn&rsquo;t right, we come back and make it right.</p></div>
      <div class="card"><h3>Fast &amp; Courteous</h3><p>Prompt callbacks, on-time arrivals, clean job sites. Our reviews say it better than we can.</p></div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head center">
      <p class="kicker">Our Previous Projects</p>
      <h2>Work We&rsquo;re Proud Of</h2>
    </div>
    <div class="gallery">
      <img src="/assets/images/pool-rescreening-fl.jpg" alt="Pool enclosure rescreening project" loading="lazy">
      <img src="/assets/images/pool-screens-in-florida.jpg" alt="Completed pool screen enclosure" loading="lazy">
      <img src="/assets/images/screen-panel-in-florida.jpg" alt="Screen panel replacement" loading="lazy">
      <img src="/assets/images/pool-screen-panel-repair-in-fl.jpg" alt="Pool screen panel repair" loading="lazy">
      <img src="/assets/images/screen-repairs-in-fl.jpg" alt="Screen repairs on a lanai" loading="lazy">
      <img src="/assets/images/screenpanels.jpg" alt="New screen panels installed" loading="lazy">
      <img src="/assets/images/20200421_155052-scaled.jpg" alt="Screen enclosure project in progress" loading="lazy">
      <img src="/assets/images/img_8157-scaled.jpg" alt="Finished screen enclosure" loading="lazy">
    </div>
  </div>
</section>

<section class="section-cream section-tight">
  <div class="container">
    <div class="section-head center">
      <p class="kicker">Areas We Serve</p>
      <h2>Proudly Serving Hernando County &amp; Beyond</h2>
      <p>Based in Spring Hill, we serve homeowners throughout the surrounding area — including Brooksville, Weeki Wachee, Hudson, New Port Richey, and nearby communities. Not sure if you&rsquo;re in our service area? <a href="/contact/">Just ask.</a></p>
    </div>
  </div>
</section>

${ctaBand('Let’s take care of your screen enclosure.')}
`,
};

export const contact = {
  path: '/contact/',
  title: 'Contact Us | Free Screen Repair Quotes | American Rescreening',
  metaDesc: 'Contact American Rescreening in Spring Hill, FL for a free quote on pool rescreening, screen repair, Florida Glass, doors, and more. Call (352) 587-3719 or send us a message.',
  body: `
<section class="page-hero">
  <div class="container">
    <h1>Contact American Rescreening</h1>
    <p>Request a free quote or ask us anything about your screen enclosure. We respond within one business day.</p>
  </div>
</section>

<section>
  <div class="container contact-grid">
    <div>
      <p class="kicker">Request a Free Quote</p>
      <h2>Tell Us About Your Project</h2>
      ${quoteForm('quote')}
    </div>
    <div class="info-card">
      <h2>Get in Touch</h2>
      <ul>
        <li><svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1z"/></svg><strong>Phone:</strong> <a href="${SITE.phoneHref}">${SITE.phone}</a></li>
        <li><svg viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 7L4 6v12h16V6z"/></svg><strong>Email:</strong> <a href="mailto:${SITE.email}">${SITE.email}</a></li>
        <li><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.6l3.5 2-.75 1.3L11 13V7h2z"/></svg><strong>Hours:</strong> ${SITE.hours}</li>
        <li><svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5.2-7 13-7 13S5 14.2 5 9a7 7 0 0 1 7-7zm0 9.5A2.5 2.5 0 1 0 12 6.5a2.5 2.5 0 0 0 0 5z"/></svg><strong>Service Area:</strong> Spring Hill, FL &amp; surrounding communities</li>
      </ul>
      <h3>Connect With Us</h3>
      <div class="socials">
        ${SITE.socials.map(([label, href, d]) => `<a href="${href}" aria-label="${label}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24"><path d="${d}"/></svg></a>`).join('')}
      </div>
      <p style="margin-top:22px;font-size:.9rem;color:var(--muted)">Emergencies after a storm? Call us — if we can&rsquo;t answer, leave a message and we&rsquo;ll get back to you as soon as possible.</p>
    </div>
  </div>
</section>
`,
};
