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
  title: 'Pool & Patio Rescreening in Spring Hill, FL | American Rescreening',
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
      <p>Every job uses premium screening — including Phifer products — in your choice of mesh types, from standard fiberglass to no-see-um, pet, privacy, and super screen.</p>
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
      ['What types of screen do you offer?', 'Standard fiberglass, no-see-um (20/20) mesh, pet screen, Florida Glass privacy screen, and heavy-duty super screen — we’ll help you pick the right one for each area.'],
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
  title: 'Florida Glass & Super-shade Screen in Spring Hill, FL | American Rescreening',
  metaDesc: 'Privacy and specialty screen options in Spring Hill, FL: Florida Glass, super-shade screen, pet screen, and no-see-um mesh. 23+ years of experience. Free quotes — (352) 587-3719.',
  ogImage: 'screen-replacements.jpg',
  body: `
${serviceHero('Florida Glass &amp; Super-shade Screen', 'Tired of prying eyes on your pool or patio? We install specialty screens that add privacy, shade, and durability — without giving up light and airflow.', 'screen-replacements.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">Specialty Screens</p>
      <h2>The Right Screen for Every Situation</h2>
      <p>Standard screening keeps bugs out — but it can’t do everything. Depending on what you need, we offer specialty options that solve specific problems:</p>
      <ul class="checks">
        <li><strong><a href="/florida-glass-installation-in-spring-hill/">Florida Glass</a></strong> — vinyl-laminated privacy screen that blocks sightlines, wind, and water spray. Perfect for pool enclosure lower panels.</li>
        <li><strong>Super-shade / <a href="/super-screen-installation/">Super Screen</a></strong> — heavy-duty polyester mesh with superior tear resistance, extra shade, and UV protection.</li>
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
      <p>We’ve been installing specialty screens in Spring Hill for over two decades, and we only use materials we trust to last — including Phifer screening products. We want to be your screen company for the long haul, and that starts with doing this job right.</p>
    </div>
    <div class="grid-3">
      ${testimonialCards()}
    </div>
  </div>
</section>

${ctaBand('Want privacy and shade without losing the view?')}
`,
};

export const screenRepairs = {
  path: '/services/screen-repairs/',
  title: 'Individual Panel Replacement in Spring Hill, FL | American Rescreening',
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
  title: 'Florida Glass Installation in Spring Hill, FL | American Rescreening',
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
  title: 'Pet Screen Installation in Spring Hill, FL | American Rescreening',
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
  title: 'Super Screen Installation in Spring Hill, FL | American Rescreening',
  metaDesc: 'Super Screen installation in Spring Hill, FL — tear-resistant, longer-lasting mesh with better shade, UV protection, and no-see-um defense. Free quotes — (352) 587-3719.',
  ogImage: 'pool-rescreening-fl.jpg',
  body: `
${serviceHero('Super Screen Installation in Spring Hill, FL', 'When standard screening keeps failing, upgrade. Super Screen is next-generation mesh with superior strength, shade, and lifespan — made for the Florida outdoors.', 'pool-rescreening-fl.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">What Is Super Screen?</p>
      <h2>Stronger Weave. Longer Life.</h2>
      <p>Super Screen is engineered polyester mesh that outperforms traditional fiberglass in every category that matters in Florida: tear strength, impact resistance, UV stability, and insect protection. The denser weave keeps out no-see-ums that slip through standard mesh, and it carries a manufacturer warranty measured in decades, not years.</p>
      <ul class="checks">
        <li><strong>Superior durability</strong> — resists tears, punctures, and storm-blown debris far better than standard screening.</li>
        <li><strong>Better pest control</strong> — the tighter weave stops mosquitoes and no-see-ums.</li>
        <li><strong>Sun protection</strong> — blocks a significant share of UV rays while keeping your view.</li>
        <li><strong>Added privacy</strong> — a slightly denser look gives your enclosure more seclusion.</li>
      </ul>
    </div>
    <img src="/assets/images/pool-rescreening-fl.jpg" alt="Pool enclosure upgraded with Super Screen mesh" loading="lazy">
  </div>
</section>

<section class="section-cream">
  <div class="container">
    <div class="section-head center"><p class="kicker">Applications</p><h2>Where Super Screen Shines</h2></div>
    <div class="grid-3">
      <div class="card"><h3>Pool Enclosures</h3><p>Fewer bugs, less UV on swimmers, and screening that survives storm season after storm season.</p></div>
      <div class="card"><h3>Lanais &amp; Patios</h3><p>A more comfortable, shaded outdoor room you can use at any hour.</p></div>
      <div class="card"><h3>Porches &amp; Decks</h3><p>Shade, insect control, and a touch of privacy for the spaces where you actually live.</p></div>
    </div>
  </div>
</section>

${process4([
  ['Consultation & Quote', 'We assess your enclosure, explain your Super Screen options, and give you a clear price.'],
  ['Screen Removal', 'Old mesh comes out carefully, and we check your frame while we’re at it.'],
  ['Frame Prep & Install', 'Minor frame adjustments as needed, then precise cutting and tensioned installation.'],
  ['Cleanup & Final Walk', 'We leave the site clean and walk the finished job with you panel by panel.'],
])}

<section>
  <div class="container">
    <div class="section-head"><p class="kicker">FAQs</p><h2>Super Screen Questions</h2></div>
    ${faq([
      ['Is Super Screen worth the extra cost?', 'If you’ve replaced standard screening more than once, usually yes. The longer lifespan and tear resistance mean fewer repairs, and the shade and no-see-um protection are benefits you feel every day.'],
      ['How much more shade does it provide?', 'Noticeably more than standard mesh — it softens glare and lowers heat in the enclosure while keeping the view.'],
      ['Can I mix Super Screen with other screen types?', 'Yes. Many homeowners use Super Screen on roofs and sun-facing walls, with Florida Glass or pet screen where those make more sense.'],
    ])}
  </div>
</section>

${ctaBand('Upgrade once. Enjoy it for decades.')}
`,
};

export const doorReplacement = {
  path: '/door-replacement/',
  title: 'Door Replacement in Spring Hill, FL | American Rescreening',
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
  title: 'Doggy Door Installation in Spring Hill, FL | American Rescreening',
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

export const hurricaneCables = {
  path: '/hurricane-cable-installation/',
  title: 'Hurricane Cable Installation in Spring Hill, FL | American Rescreening',
  metaDesc: 'Protect your screen enclosure from storm damage with professional hurricane cable installation in Spring Hill, FL. Affordable storm protection — call (352) 587-3719.',
  ogImage: 'hurricane-cables-in-spring-hill.jpg',
  body: `
${serviceHero('Hurricane Cable Installation in Spring Hill, FL', 'Florida storm season is a matter of when, not if. Hurricane cables reinforce your screen enclosure so high winds flex it instead of destroying it.', 'hurricane-cables-in-spring-hill.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">Storm Protection</p>
      <h2>What Hurricane Cables Do</h2>
      <p>Hurricane cables are heavy-duty galvanized steel cables anchored across your screen enclosure’s framing and secured to the structure. Under hurricane-force winds, they distribute the load and keep the enclosure’s frame from twisting, lifting, or collapsing.</p>
      <ul class="checks">
        <li><strong>Protects your enclosure</strong> — bracing that dramatically improves your cage’s odds in a major storm.</li>
        <li><strong>Deflects debris damage</strong> — cables help the structure absorb impacts that would otherwise tear panels and bend framing.</li>
        <li><strong>Cost-effective insurance</strong> — a fraction of the cost of rebuilding a destroyed enclosure.</li>
        <li><strong>Peace of mind</strong> — one less thing to worry about when a storm spins up in the Gulf.</li>
      </ul>
      <a class="btn btn-red" href="/contact/">Get a Storm-Readiness Quote</a>
    </div>
    <img src="/assets/images/hurricane-cables-in-spring-hill.jpg" alt="Hurricane cables installed on a pool screen enclosure" loading="lazy">
  </div>
</section>

<section class="section-cream">
  <div class="container">
    <div class="section-head center"><p class="kicker">Good to Know</p><h2>Before the Storm Comes</h2></div>
    <div class="grid-3">
      <div class="card"><h3>Install Before Season</h3><p>The best time to install hurricane cables is before June. Crews (ours included) book up fast once a storm is named.</p></div>
      <div class="card"><h3>Pairs With Rescreening</h3><p>Installing cables during a rescreen is efficient — we’re already working on every panel of your enclosure.</p></div>
      <div class="card"><h3>Professional Matters</h3><p>Cable tension and anchoring points determine whether cables actually protect anything. This is not a DIY-friendly job.</p></div>
    </div>
  </div>
</section>

${ctaBand('Storm season is coming. Get ahead of it.')}
`,
};

export const smallHomeRepairs = {
  path: '/small-home-repairs/',
  title: 'Small Home Repairs in Spring Hill, FL | American Rescreening',
  metaDesc: 'Handyman and small home repair services in Spring Hill, FL from the crew you already trust with your screen enclosure. Honest, reliable, done right. Call (352) 587-3719.',
  ogImage: 'screen-repairs-in-fl.jpg',
  body: `
${serviceHero('Small Home Repairs in Spring Hill, FL', 'That list of little fixes you’ve been putting off? We handle it — with the same care and reliability we bring to every screen enclosure.', 'screen-repairs-in-fl.jpg')}

<section>
  <div class="container split">
    <div>
      <p class="kicker">Why Small Repairs Matter</p>
      <h2>Little Problems Get Big If You Let Them</h2>
      <p>A loose railing becomes a safety hazard. A small leak becomes water damage. A sticking door becomes a broken frame. Staying ahead of small repairs protects your home’s value, safety, and comfort — and it’s a lot cheaper than the alternative.</p>
      <ul class="checks">
        <li><strong>Carpentry</strong> — doorknobs, cabinets, hardware, squeaky floors, trim.</li>
        <li><strong>Drywall &amp; paint</strong> — hole patching, crack repair, touch-ups.</li>
        <li><strong>Minor plumbing</strong> — leaky faucets, showerheads, running toilets.</li>
        <li><strong>Fixtures &amp; hardware</strong> — light fixtures, railings, weather stripping, and the rest of the list.</li>
      </ul>
      <p>For complex electrical or plumbing work we’ll tell you straight when a licensed specialist is the right call — and we’ll never charge you to find that out.</p>
      <a class="btn btn-red" href="/contact/">Send Us Your List</a>
    </div>
    <img src="/assets/images/screen-repairs-in-fl.jpg" alt="Home repair work on a Spring Hill screened patio" loading="lazy">
  </div>
</section>

<section class="section-cream">
  <div class="container">
    <div class="section-head center"><p class="kicker">The Benefits</p><h2>One Trusted Crew for the Whole List</h2></div>
    <div class="grid-3">
      <div class="card"><h3>Prevents Major Issues</h3><p>Catching minor problems early saves real money — small fixes now beat big repairs later.</p></div>
      <div class="card"><h3>Preserves Home Value</h3><p>A well-maintained home holds its value and shows better if you ever sell.</p></div>
      <div class="card"><h3>Safer &amp; More Comfortable</h3><p>Secure railings, working detectors, smooth doors — small repairs make daily life better.</p></div>
    </div>
  </div>
</section>

${ctaBand('Hand us the honey-do list.')}
`,
};

export const all = [rescreening, screenReplacements, screenRepairs, floridaGlass, petScreen, superScreen, doorReplacement, doggyDoor, hurricaneCables, smallHomeRepairs];
