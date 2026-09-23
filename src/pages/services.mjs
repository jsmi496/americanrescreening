import { SITE, ctaBand, faq, serviceHero } from '../layout.mjs';
import { testimonialCards } from './core.mjs';

const process4 = (steps) => `
<section class="section-cream">
  <div class="container">
    <div class="section-head center"><p class="kicker">How It Works</p><h2>Our Process</h2></div>
    <div class="steps">
      ${steps.map(([t, d]) => `<div class="step"><h3>${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>`;

const stdProcess = process4([
  ['Free Inspection', 'We assess your existing screens and frame, and identify exactly what needs attention — and what doesn’t.'],
  ['Honest Recommendation', 'You get a clear quote with material options that fit your needs and budget. No pressure, no upselling.'],
  ['Expert Installation', 'Our crew works efficiently and carefully, minimizing disruption and leaving your space clean.'],
  ['Warranty & Care Tips', 'Every job is backed by our warranty, and we’ll show you how to keep your screens in top shape.'],
]);

export const rescreening = {
  path: '/services/rescreening/',
  title: 'Pool & Patio Rescreening in Spring Hill, FL | American Rescreen',
  metaDesc: 'Professional rescreening for pool enclosures, patios, lanais, and porches in Spring Hill, FL. Premium Phifer materials, free inspections, warranty-backed work. Call (352) 587-3719.',
  ogImage: 'pool-rescreening-fl.jpg',
  body: `
${serviceHero('Outdoor Rescreening in Spring Hill, FL', 'Florida sun, storms, and humidity are brutal on screen enclosures. When your screens sag, tear, or let the bugs in, we make them like new again — with materials built to last.', 'pool-rescreening-fl.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">Rescreening Services</p>
      <h2>Every Enclosure, Every Screen</h2>
      <p>Rescreening does more than keep insects out. It restores airflow and visibility, protects your pool and patio from debris, and brings back the outdoor space you actually want to spend time in.</p>
      <ul class="checks">
        <li><strong>Pool enclosure rescreening</strong> — full cage rescreens that make your pool area safe, clean, and enjoyable again.</li>
        <li><strong>Patio &amp; lanai rescreening</strong> — restore ventilation, visibility, and insect protection to your outdoor living space.</li>
        <li><strong>Porch rescreening</strong> — durable, great-looking screens that keep your porch usable year-round.</li>
        <li><strong>Screen repair</strong> — minor damage doesn’t always need a full rescreen. We fix what can be fixed.</li>
      </ul>
      <p>Every job uses premium screening from Phifer and Super Screen — including heavy-duty HD mesh — in your choice of types: standard fiberglass, 20/20 no-see-um, pet screen, Florida Glass privacy, Super Screen, and Super Solar.</p>
    </div>
    <img src="/assets/images/pool-rescreening-in-fl.jpg" alt="Pool enclosure being rescreened in Spring Hill, FL" loading="lazy">
  </div>
</section>

${stdProcess}

<section>
  <div class="container">
    <div class="section-head center"><p class="kicker">The Benefits</p><h2>Why Rescreening Is Worth It</h2></div>
    <div class="grid-3">
      <div class="card"><h3>Comfortable Outdoor Living</h3><p>Enjoy your pool and patio without mosquitoes, no-see-ums, or falling debris.</p></div>
      <div class="card"><h3>Protects Your Investment</h3><p>A well-maintained enclosure protects your pool, furniture, and home — and boosts property value.</p></div>
      <div class="card"><h3>Looks Great, Lasts Longer</h3><p>Tight, clear screens transform how your whole backyard looks, and quality materials keep it that way.</p></div>
    </div>
  </div>
</section>

<section class="section-cream">
  <div class="container">
    <div class="section-head"><p class="kicker">FAQs</p><h2>Rescreening Questions, Answered</h2></div>
    ${faq([
      ['How much does rescreening cost?', 'It depends on the size of the enclosure and the screen type you choose. Panel repairs start small; full pool cage rescreens vary with square footage. Contact us for a free, no-obligation quote — we’ll give you an honest number.'],
      ['How long does rescreening take?', 'Most individual repairs are done in under a day. Full pool enclosure rescreens typically take one to a few days depending on size and weather.'],
      ['What types of screen do you offer?', 'Standard fiberglass, 20/20 no-see-um mesh, pet screen, Florida Glass privacy screen, heavy-duty Super Screen and HD screen, and sun-blocking Super Solar screen — we’ll help you pick the right one for each area.'],
      ['Do you provide a warranty?', 'Yes. All of our rescreening work is warranty-backed. If a problem shows up, we come back and fix it.'],
      ['Can you repair my existing screens instead of replacing everything?', 'Absolutely. If only a panel or two is damaged, we’ll tell you — individual panel replacement is one of our most popular services.'],
    ])}
  </div>
</section>

${ctaBand('Ready to rescreen? Get your free inspection.')}
`,
};

export const screenReplacements = {
  path: '/services/screen-replacements/',
  title: 'Florida Glass & Specialty Screens in Spring Hill, FL | American Rescreen',
  metaDesc: 'Specialty screen options in Spring Hill, FL: Florida Glass privacy screen, heavy-duty Super Screen and HD mesh, sun-blocking Super Solar, pet screen, and 20/20 no-see-um. Free quotes — (352) 587-3719.',
  ogImage: 'screen-replacements.jpg',
  body: `
${serviceHero('Florida Glass &amp; Specialty Screens', 'Tired of prying eyes on your pool or patio? Or screens that keep tearing? We install specialty screens for privacy, durability, sun protection, and pests — without giving up light and airflow.', 'screen-replacements.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">Specialty Screens</p>
      <h2>The Right Screen for Every Situation</h2>
      <p>Standard screening keeps bugs out — but it can’t do everything. Depending on what you need, we offer specialty options that solve specific problems:</p>
      <ul class="checks">
        <li><strong><a href="/florida-glass-installation-in-spring-hill/">Florida Glass</a></strong> — vinyl-laminated privacy screen that blocks sightlines, wind, and water spray. Perfect for pool enclosure lower panels.</li>
        <li><strong><a href="/super-screen-installation/">Super Screen &amp; HD screen</a></strong> — thicker, heavy-duty mesh with superior tear resistance for screens that keep failing.</li>
        <li><strong>Super Solar screen</strong> — sun-blocking mesh that cuts heat and glare in your enclosure.</li>
        <li><strong><a href="/pet-screen-installation/">Pet screen</a></strong> — up to 7× stronger than standard mesh, built to survive claws and paws.</li>
        <li><strong>20/20 no-see-um screen</strong> — tighter weave that keeps out even the tiniest biting insects.</li>
      </ul>
      <p>Not sure which is right for your enclosure? We’ll walk you through the options during your free inspection and quote.</p>
      <a class="btn btn-red" href="/contact/">Request a Quote</a>
    </div>
    <img src="/assets/images/screen-replacements.jpg" alt="Florida Glass privacy screen installed on a pool enclosure" loading="lazy">
  </div>
</section>

<section class="section-cream">
  <div class="container">
    <div class="section-head center">
      <p class="kicker">Why We’re the Best at This</p>
      <h2>23+ Years. The Best Materials. Guaranteed.</h2>
      <p>We’ve been installing specialty screens in Spring Hill for over two decades, and we only use materials we trust to last — from Phifer and Super Screen. We want to be your screen company for the long haul, and that starts with doing this job right.</p>
    </div>
    <div class="grid-3">
      ${testimonialCards()}
    </div>
  </div>
</section>

${ctaBand('Not sure which screen you need? Ask us.')}
`,
};

export const screenRepairs = {
  path: '/services/screen-repairs/',
  title: 'Individual Panel Replacement in Spring Hill, FL | American Rescreen',
  metaDesc: 'One torn screen panel? No need for a full rescreen. Fast, affordable individual panel replacement for pool cages, lanais, and patios in Spring Hill, FL. Call (352) 587-3719.',
  ogImage: 'screen-panel-florida.jpg',
  body: `
${serviceHero('Individual Panel Replacement in Spring Hill, FL', 'A single torn panel shouldn’t mean rescreening the whole cage. We replace individual panels quickly and affordably — matched to your existing screens.', 'screen-panel-florida.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">Panel Replacement</p>
      <h2>Fix the Panel, Not the Whole Enclosure</h2>
      <p>Wind-blown branches, an overeager dog, sun-brittled mesh — screen panels fail one at a time, and one bad panel is all it takes to let every mosquito in the neighborhood into your pool area.</p>
      <p>Our individual panel replacement service is the fast, budget-friendly fix. We remove the damaged panel, install new screening that matches the rest of your enclosure, and re-spline it tight so it looks like nothing ever happened.</p>
      <ul class="checks">
        <li><strong>Matched materials</strong> — new panels blend in with your existing mesh type and color.</li>
        <li><strong>Any panel, anywhere</strong> — roof panels, wall panels, door panels, garage door screens.</li>
        <li><strong>Honest assessments</strong> — if your whole enclosure is near the end of its life, we’ll tell you. If it isn’t, we won’t sell you a full rescreen you don’t need.</li>
        <li><strong>Fast turnaround</strong> — most panel replacements are done the same visit.</li>
      </ul>
      <a class="btn btn-red" href="/contact/">Get a Free Quote</a>
    </div>
    <img src="/assets/images/pool-screen-panel-repair-in-fl.jpg" alt="Technician replacing an individual screen panel on a pool enclosure" loading="lazy">
  </div>
</section>

${stdProcess}

<section>
  <div class="container">
    <div class="section-head"><p class="kicker">FAQs</p><h2>Panel Replacement Questions</h2></div>
    ${faq([
      ['When is panel replacement the right choice vs. a full rescreen?', 'If damage is limited to one or a few panels and the rest of your screening is in good shape, panel replacement is the smart move. If most panels are brittle, faded, or sagging, a full rescreen usually costs less per panel and resets the clock on your whole enclosure. We’ll give you our honest read during the free inspection.'],
      ['Will the new panel match my existing screens?', 'Yes — we match mesh type and color as closely as possible. A brand-new panel may look slightly cleaner than 10-year-old screening at first, but it will blend quickly.'],
      ['How fast can you come out?', 'Usually within days, not weeks. One panel is a quick job, and we keep common materials stocked.'],
      ['Do you replace screen door panels too?', 'Yes — doors, kick plates, garage door screens, and window screens included.'],
    ])}
  </div>
</section>

${ctaBand('Got a torn panel? We’ll make it disappear.')}
`,
};

export const floridaGlass = {
  path: '/florida-glass-installation-in-spring-hill/',
  title: 'Florida Glass Installation in Spring Hill, FL | American Rescreen',
  metaDesc: 'Florida Glass (laminated privacy screen) installation in Spring Hill, FL. Privacy, weather protection, and style for pool enclosures, lanais, and patios. Free quotes — (352) 587-3719.',
  ogImage: 'pool-screens-in-florida.jpg',
  body: `
${serviceHero('Florida Glass Installation in Spring Hill, FL', 'Privacy without walls. Florida Glass is a vinyl-laminated screen that blocks sightlines, wind, and water spray — while soft, natural light still fills your space.', 'pool-screens-in-florida.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">What Is Florida Glass?</p>
      <h2>A Privacy Screen Built for Florida</h2>
      <p>Florida Glass is fiberglass screening with a vinyl laminate layer, creating a semi-opaque panel that looks frosted from the outside. Unlike regular mesh, it stops water spray, wind-blown dirt, and grass clippings — and completely blocks the view from neighboring properties.</p>
      <ul class="checks">
        <li><strong>Privacy enhancement</strong> — enjoy your pool without an audience.</li>
        <li><strong>Weather &amp; debris protection</strong> — keeps rain spray, dirt, and clippings out of your enclosure.</li>
        <li><strong>Insect prevention</strong> — seals out crawling and flying pests better than open mesh.</li>
        <li><strong>UV &amp; noise reduction</strong> — softens harsh sun and dampens outside noise.</li>
      </ul>
    </div>
    <img src="/assets/images/pool-screens-in-florida.jpg" alt="Florida Glass privacy panels on the lower section of a pool enclosure" loading="lazy">
  </div>
</section>

<section class="section-cream">
  <div class="container">
    <div class="section-head center"><p class="kicker">Where It Works Best</p><h2>Popular Florida Glass Applications</h2></div>
    <div class="grid-3">
      <div class="card"><h3>Pool Enclosures</h3><p>The classic use: privacy panels along the lower walls of your pool cage, keeping the view open up top while blocking sightlines at eye level.</p></div>
      <div class="card"><h3>Lanais &amp; Patios</h3><p>Turn a lanai into a private outdoor room, protected from wind and spray, that’s comfortable in any season.</p></div>
      <div class="card"><h3>Garden &amp; Backyard Enclosures</h3><p>Keep debris out and privacy in for any screened structure on your property.</p></div>
    </div>
  </div>
</section>

${process4([
  ['Consultation', 'We assess your enclosure, discuss which panels make sense for Florida Glass, and answer your questions.'],
  ['Measurement', 'Precise measurements ensure a perfect, wrinkle-free fit on every panel.'],
  ['Installation', 'Our technicians install your Florida Glass with clean splines and a professional finish.'],
  ['Inspection & Tips', 'We walk the job with you and share simple maintenance tips to keep it looking new.'],
])}

<section>
  <div class="container">
    <div class="section-head"><p class="kicker">FAQs</p><h2>Florida Glass Questions</h2></div>
    ${faq([
      ['Does Florida Glass block light?', 'No — it’s translucent. Light filters through with a soft, frosted look, but people can’t see in.'],
      ['Is it durable in Florida weather?', 'Yes. Florida Glass is designed for our heat, humidity, and storms, and typically lasts as long as or longer than standard screening.'],
      ['Can you install it on just some panels?', 'Absolutely — most homeowners use it on lower wall panels for privacy and keep standard mesh above for the view.'],
      ['How do I clean it?', 'A gentle rinse and a soft brush with mild soap is all it takes. We’ll give you full care instructions after installation.'],
    ])}
  </div>
</section>

${ctaBand('Ready for real privacy in your outdoor space?')}
`,
};

export const petScreen = {
  path: '/pet-screen-installation/',
  title: 'Pet Screen Installation in Spring Hill, FL | American Rescreen',
  metaDesc: 'Claw-resistant pet screen installation in Spring Hill, FL — up to 7x stronger than standard mesh. Stop replacing torn screens; upgrade once. Free quotes — (352) 587-3719.',
  ogImage: 'screenpanels.jpg',
  body: `
${serviceHero('Pet Screen Installation in Spring Hill, FL', 'Has your dog torn through the screen door again? Pet screen is heavy-duty mesh built to survive claws, paws, and enthusiasm — so you can stop re-screening the same panel.', 'screenpanels.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">What Is Pet Screen?</p>
      <h2>Screening That Fights Back</h2>
      <p>Pet screen is woven from thicker, stronger vinyl-coated polyester — roughly seven times stronger than standard fiberglass mesh. It shrugs off scratching, pawing, and the occasional full-speed nose-first arrival, while still letting air and light through.</p>
      <ul class="checks">
        <li><strong>Tear and puncture resistant</strong> — built for dogs, cats, and grass trimmers alike.</li>
        <li><strong>Great for high-risk areas</strong> — door panels, kick plates, and lower wall panels where pets make contact.</li>
        <li><strong>Keeps pests out</strong> — the tight, tough weave also blocks crawling bugs, lizards, and snakes.</li>
        <li><strong>Blends in</strong> — install it only where you need it; it pairs cleanly with standard screening above.</li>
      </ul>
    </div>
    <img src="/assets/images/screenpanels.jpg" alt="Heavy-duty pet screen installed on a lanai door panel" loading="lazy">
  </div>
</section>

<section class="section-cream">
  <div class="container split rev">
    <img src="/assets/images/pexels-heino-schliep-15866678.jpg" alt="Dog waiting at the door — a doggy door ends the doorman routine" loading="lazy">
    <div>
      <p class="kicker">The Companion Fix</p>
      <h2>Add a Doggy Door, Save Your Screens</h2>
      <p>Here’s a trade secret: dogs stop going <em>through</em> screens when they have their own way in and out. Pairing pet screen with a <a href="/doggy-door-installation-in-spring-hill/">pet door installation</a> solves the problem for good — your dog gets freedom, and you stop playing screen-repair whack-a-mole.</p>
      <p>Pet doors come in sizes from small (cat-approved) to extra-large, and we’ll install one in your screen door, entry door, or wall.</p>
      <a class="btn btn-navy" href="/doggy-door-installation-in-spring-hill/">About Doggy Door Installation</a>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head center"><p class="kicker">Where We Install It</p><h2>Pet Screen Applications</h2></div>
    <div class="grid-3">
      <div class="card"><h3>Patio &amp; Lanai Enclosures</h3><p>Let pets enjoy the outdoors with you — without sacrificing your screening to their claws.</p></div>
      <div class="card"><h3>Screen Doors</h3><p>The single most-destroyed screen panel in any pet home. Pet screen ends the cycle.</p></div>
      <div class="card"><h3>Window Screens</h3><p>Keep windows open for fresh air without worrying about cats climbing the mesh.</p></div>
    </div>
  </div>
</section>

${ctaBand('Pets and screens can get along. We’ll prove it.')}
`,
};

export const superScreen = {
  path: '/super-screen-installation/',
  title: 'Super Screen & HD Screen Installation in Spring Hill, FL | American Rescreen',
  metaDesc: 'Heavy-duty Super Screen and HD screen installation in Spring Hill, FL. Thicker, tear-resistant screening \u2014 with 20/20 no-see-um and sun-blocking Super Solar options. Free quotes \u2014 (352) 587-3719.',
  ogImage: 'pool-rescreening-fl.jpg',
  body: `
${serviceHero('Super Screen Installation in Spring Hill, FL', 'When standard screening keeps failing, upgrade. Super Screen is a thicker, heavy-duty mesh built to take real abuse \u2014 pets, storm debris, and years of Florida weather.', 'pool-rescreening-fl.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">What Is Super Screen?</p>
      <h2>Thicker Mesh. Serious Durability.</h2>
      <p>Super Screen is a heavy-duty screening material that\u2019s substantially thicker and stronger than standard fiberglass mesh. It isn\u2019t a shade product \u2014 it\u2019s a durability product: screening that resists tears, punctures, and impacts that would shred ordinary mesh, backed by a long manufacturer warranty.</p>
      <p>We install the full Super Screen family, and we\u2019ll match the right product to the job:</p>
      <ul class="checks">
        <li><strong>Super Screen (standard)</strong> \u2014 the heavy-duty workhorse for enclosures that need to stand up to pets, debris, and time.</li>
        <li><strong>HD screen by Super Screen</strong> \u2014 an even tougher mesh we install often; a favorite for high-wear enclosures.</li>
        <li><strong>Super Screen 20/20</strong> \u2014 the fine-weave version that keeps out no-see-ums. (Standard Super Screen does not \u2014 if tiny biting insects are your problem, this is the one you want.)</li>
        <li><strong>Super Solar screen</strong> \u2014 the sun-blocking member of the family, built to cut heat and glare in your enclosure.</li>
      </ul>
    </div>
    <img src="/assets/images/pool-rescreening-fl.jpg" alt="Pool enclosure upgraded with heavy-duty Super Screen mesh" loading="lazy">
  </div>
</section>

<section class="section-cream">
  <div class="container">
    <div class="section-head center"><p class="kicker">Why Upgrade</p><h2>Where Heavy-Duty Screening Pays Off</h2></div>
    <div class="grid-3">
      <div class="card"><h3>Storm-Prone Enclosures</h3><p>Wind-blown debris that tears standard mesh often bounces off Super Screen \u2014 fewer post-storm repairs.</p></div>
      <div class="card"><h3>Homes With Pets</h3><p>Thicker, tougher mesh shrugs off claws and paws that destroy ordinary screening.</p></div>
      <div class="card"><h3>Tired of Rescreening</h3><p>If you\u2019ve replaced panels more than once, upgrading to Super Screen or HD resets the clock for far longer.</p></div>
    </div>
  </div>
</section>

${process4([
  ['Consultation & Quote', 'We assess your enclosure, explain which Super Screen product fits your situation, and give you a clear price.'],
  ['Screen Removal', 'Old mesh comes out carefully, and we check your frame while we\u2019re at it.'],
  ['Frame Prep & Install', 'Minor frame adjustments as needed, then precise cutting and tensioned installation.'],
  ['Cleanup & Final Walk', 'We leave the site clean and walk the finished job with you panel by panel.'],
])}

<section>
  <div class="container">
    <div class="section-head"><p class="kicker">FAQs</p><h2>Super Screen Questions</h2></div>
    ${faq([
      ['Is Super Screen worth the extra cost?', 'If you\u2019ve replaced standard screening more than once \u2014 or you have pets \u2014 usually yes. The tear resistance and long manufacturer warranty mean far fewer repairs over the life of the enclosure.'],
      ['Does Super Screen keep out no-see-ums?', 'Standard Super Screen does not \u2014 its weave is about strength, not insect size. The 20/20 version has a fine weave that does keep out no-see-ums. We\u2019ll help you pick the right one.'],
      ['What if I want shade or sun protection?', 'That\u2019s Super Solar screen \u2014 a sun-blocking mesh in the same product family that cuts heat and glare. We install it too, often on west-facing walls and roofs.'],
      ['Can I mix screen types in one enclosure?', 'Absolutely. Many homeowners run HD or Super Screen on high-wear panels, Super Solar on the sunny side, Florida Glass down low for privacy, and standard mesh elsewhere.'],
    ])}
  </div>
</section>

${ctaBand('Done replacing torn screens? Upgrade once.')}
`,
};

export const doorReplacement = {
  path: '/door-replacement/',
  title: 'Door Replacement in Spring Hill, FL | American Rescreen',
  metaDesc: 'Screen door and entry door replacement in Spring Hill, FL. Improve security, energy efficiency, and curb appeal with expert installation. Free quotes — (352) 587-3719.',
  ogImage: 'door-replacement-in-spring-hill.jpg',
  body: `
${serviceHero('Door Replacement in Spring Hill, FL', 'Sticking, sagging, drafty, or just dated — when a door stops doing its job, we replace it with one that improves your home’s security, efficiency, and look.', 'door-replacement-in-spring-hill.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">Door Services</p>
      <h2>The Right Door, Installed Right</h2>
      <p>A quality door protects your home, saves energy, and sets the tone for your whole exterior. We replace screen doors, entry doors, and enclosure doors across Spring Hill — with options for every style and budget.</p>
      <ul class="checks">
        <li><strong>Screen &amp; enclosure doors</strong> — new doors, frames, and hardware for pool cages and lanais, including self-closing hinges and pet-resistant screening.</li>
        <li><strong>Improved security</strong> — solid construction and quality locks that protect what matters.</li>
        <li><strong>Energy efficiency</strong> — tight seals and modern materials that keep conditioned air where it belongs.</li>
        <li><strong>Curb appeal</strong> — a new door is one of the highest-impact, lowest-cost upgrades a home can get.</li>
      </ul>
      <a class="btn btn-red" href="/contact/">Get a Door Quote</a>
    </div>
    <img src="/assets/images/door-replacement-in-spring-hill.jpg" alt="New screen door installed on a Spring Hill home" loading="lazy">
  </div>
</section>

${process4([
  ['Free Consultation', 'We look at your current doors, listen to what you want, and assess what replacement makes sense.'],
  ['Selection Guidance', 'We help you choose the right door — material, design, hardware, and function.'],
  ['Professional Installation', 'Precise fitting, smooth operation, clean finish. Done on time with minimal disruption.'],
  ['Warranty & Maintenance', 'Your new door is covered by our warranty, and we’ll show you how to keep it working like new.'],
])}

<section>
  <div class="container">
    <div class="section-head"><p class="kicker">FAQs</p><h2>Door Replacement Questions</h2></div>
    ${faq([
      ['How much does door replacement cost?', 'It varies with door type, materials, and customization. Screen doors are budget-friendly; entry doors range wider. Contact us for a free, specific quote.'],
      ['How long does replacement take?', 'Most door replacements are completed in a single visit once your door is on hand.'],
      ['Can you add a doggy door to my new door?', 'Yes — we can install a pet door in most new or existing doors. See our doggy door installation service.'],
      ['Do you offer warranties?', 'Yes, all door replacements are backed by our workmanship warranty plus applicable manufacturer warranties.'],
    ])}
  </div>
</section>

${ctaBand('First impressions start at the door.')}
`,
};

export const doggyDoor = {
  path: '/doggy-door-installation-in-spring-hill/',
  title: 'Doggy Door Installation in Spring Hill, FL | American Rescreen',
  metaDesc: 'Professional doggy door installation in Spring Hill, FL — screen doors, entry doors, and sliders. Give your pet freedom and save your screens. Free quotes — (352) 587-3719.',
  ogImage: 'pexels-heino-schliep-15866678.jpg',
  body: `
${serviceHero('Doggy Door Installation in Spring Hill, FL', 'Stop being the doorman. A properly installed pet door gives your dog freedom, ends the scratching and barking at the door, and — bonus — saves your screens.', 'pexels-heino-schliep-15866678.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">Why a Doggy Door?</p>
      <h2>Freedom for Them, Peace for You</h2>
      <ul class="checks">
        <li><strong>Pet independence</strong> — potty breaks, playtime, and fresh air on your dog’s schedule, not yours.</li>
        <li><strong>A calmer household</strong> — no more frantic scratching, barking, or door-darting.</li>
        <li><strong>Protects your screens</strong> — dogs stop pushing through screens once they have their own door.</li>
        <li><strong>Healthier pets</strong> — more activity and fewer accidents, especially helpful for senior pets and busy owners.</li>
      </ul>
      <p>Pet doors come in small through extra-large — small sizes work great for cats — with options like locking panels, weatherproof flaps, and microchip-activated access for extra security.</p>
      <a class="btn btn-red" href="/contact/">Get an Installation Quote</a>
    </div>
    <img src="/assets/images/pexels-heino-schliep-15866678.jpg" alt="Dog sitting at the door, waiting to be let out" loading="lazy">
  </div>
</section>

<section class="section-cream">
  <div class="container">
    <div class="section-head center"><p class="kicker">Installation Options</p><h2>Where We Install Pet Doors</h2></div>
    <div class="grid-3">
      <div class="card"><h3>Screen Doors</h3><p>The most popular option — direct lanai and backyard access, and the end of screen damage.</p></div>
      <div class="card"><h3>Entry &amp; Exterior Doors</h3><p>A weatherproof pet door in your back door, with locking options for when you’re away.</p></div>
      <div class="card"><h3>Sliding Glass Doors</h3><p>Panel inserts that add a pet door to your slider — no cutting into the glass or wall.</p></div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head"><p class="kicker">FAQs</p><h2>Doggy Door Questions</h2></div>
    ${faq([
      ['What size pet door do I need?', 'Measure your pet’s shoulder height and width — we’ll help you size it right during the consultation. When in doubt, size up slightly for comfort.'],
      ['Will a pet door let other animals in?', 'Flap doors deter most critters, and locking or microchip-activated doors ensure only your pet gets through.'],
      ['Can you install one in my screen door?', 'Yes — screen door pet doors are our specialty, and we’ll reinforce the surrounding panel with pet screen if needed.'],
    ])}
  </div>
</section>

${ctaBand('Your dog is ready. Are you?')}
`,
};

export const poolCagePainting = {
  path: '/pool-cage-painting/',
  title: 'Pool Cage Painting in Spring Hill, FL | American Rescreen',
  metaDesc: 'Pool cage painting in Spring Hill, FL. We repaint aluminum enclosure frames and replace bolts and screws for a like-new cage at a fraction of replacement cost. Call (352) 587-3719.',
  ogImage: 'img_8157-scaled.jpg',
  body: `
${serviceHero('Pool Cage Painting in Spring Hill, FL', 'Chalky, faded, oxidized cage frame? A professional repaint \u2014 with fresh hardware \u2014 makes a decades-old enclosure look brand new for a fraction of the cost of replacing it.', 'img_8157-scaled.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">Cage Painting</p>
      <h2>Make an Old Cage Look New Again</h2>
      <p>Florida sun is hard on painted aluminum. Over the years, cage frames fade, chalk, and oxidize \u2014 and rusted bolts and screws streak the finish. The frame is usually still structurally sound; it just looks tired. That\u2019s where a professional repaint comes in.</p>
      <ul class="checks">
        <li><strong>Full frame repaint</strong> \u2014 we clean and prep the aluminum, then apply a durable finish over every beam and upright.</li>
        <li><strong>New bolts and screws</strong> \u2014 rusted fasteners get replaced, not painted over, so the streaks don\u2019t come back.</li>
        <li><strong>Pairs perfectly with a rescreen</strong> \u2014 painting and rescreening together is the closest thing to a brand-new enclosure without rebuilding it.</li>
        <li><strong>A fraction of replacement cost</strong> \u2014 restore the cage you have instead of paying to tear it down and rebuild.</li>
      </ul>
      <a class="btn btn-red" href="/contact/">Get a Painting Quote</a>
    </div>
    <img src="/assets/images/img_8157-scaled.jpg" alt="Freshly repainted pool cage frame with new screening" loading="lazy">
  </div>
</section>

<section class="section-cream">
  <div class="container">
    <div class="section-head center"><p class="kicker">Real Results</p><h2>Don\u2019t Take Our Word for It</h2>
    <p>Here\u2019s what one Spring Hill homeowner said after we restored her 37-year-old cage:</p></div>
    <div style="max-width:720px;margin:0 auto">
      <div class="quote-card">
        <div class="stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>
        <blockquote>\u201cRob and his crew worked on my 37 year old cage. They did a FANTASTIC job repainting, replacing the bolts and screws, new doors and hardware, as well as a full rescreen. Reasonable prices, came promptly every day and responded to all my questions quickly and honestly.\u201d</blockquote>
        <cite>Carmel Macchia</cite>
      </div>
    </div>
  </div>
</section>

${process4([
  ['Inspection & Quote', 'We look over your frame, flag any repairs it needs, and quote the repaint \u2014 with or without a rescreen.'],
  ['Prep & Hardware', 'The frame is cleaned and prepped, and corroded bolts and screws are swapped for new ones.'],
  ['Painting', 'A durable finish goes on evenly across the entire frame \u2014 no drips on your deck or screens.'],
  ['Walkthrough', 'We inspect the finished cage with you and back the work with our warranty.'],
])}

<section>
  <div class="container">
    <div class="section-head"><p class="kicker">FAQs</p><h2>Cage Painting Questions</h2></div>
    ${faq([
      ['Is painting really worth it vs. replacing the cage?', 'If the frame is structurally sound \u2014 and most are \u2014 absolutely. A repaint with new hardware costs a fraction of a new enclosure and can add many years of life and curb appeal.'],
      ['Should I rescreen at the same time?', 'It\u2019s the ideal time. The old screens typically come off for a proper frame prep anyway, so doing both at once gets you a like-new cage in one project.'],
      ['What about rusted screws and bolts?', 'We replace them. Painting over rusted fasteners just delays the streaks \u2014 new hardware is part of doing the job right.'],
      ['How long does the paint last?', 'With quality prep and paint, many years \u2014 the prep work is what makes the difference, and we don\u2019t skip it.'],
    ])}
  </div>
</section>

${ctaBand('Your cage has good bones. Let\u2019s make it look like it.')}
`,
};

export const all = [rescreening, screenReplacements, screenRepairs, floridaGlass, petScreen, superScreen, doorReplacement, doggyDoor, poolCagePainting];
