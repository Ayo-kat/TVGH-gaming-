/* =========================================================
   TVGH — The Viral Game Club Hub
   Main JavaScript
   =========================================================
   ⚙️  BEGINNER'S GUIDE
   ---------------------------------------------------------
   Everything you need to edit is inside the
   "TVGH_CONFIG", "GAMING_CARDS", "GAMING_PACKAGES",
   "COMBO_DEALS", "MENU" and "FACILITIES" objects below.
   You do NOT need to touch the rest of the file.
   ========================================================= */


/* =========================================================
   1. CENTRAL CONFIG — EDIT BUSINESS DETAILS HERE
   ========================================================= */
const TVGH_CONFIG = {
  businessName: "The Viral Game Club Hub",
  abbreviation: "TVGH",
  location: "City Square, Rustenburg, South Africa",

  /* -------------------------------------------------------
     ⚠️ IMPORTANT — WHATSAPP NUMBER
     -------------------------------------------------------
     Replace the number below with the REAL business
     WhatsApp number in international format.
     Rules:
       - No "+" sign
       - No spaces
       - No brackets or dashes
       - South African numbers start with 27
     Example: for +27 71 234 5678 use:  "27712345678"
     ------------------------------------------------------- */
  whatsappNumber: "27000000000", // ← CHANGE THIS before going live

  /* -------------------------------------------------------
     OPERATING HOURS
     Update these once confirmed. They show in the
     Contact section and the footer.
     ------------------------------------------------------- */
  operatingHours: "Operating hours: please confirm with us on WhatsApp.",

  /* -------------------------------------------------------
     SOCIAL MEDIA LINKS
     Paste your full profile URLs. Leave "#" to disable.
     ------------------------------------------------------- */
  social: {
    facebook:  "#",   // e.g. https://www.facebook.com/yourpage
    instagram: "#",   // e.g. https://www.instagram.com/yourpage
    tiktok:    "#"    // e.g. https://www.tiktok.com/@yourpage
  }
};


/* =========================================================
   2. GAMING CARDS (for the "Our Gaming Experience" section)
   ---------------------------------------------------------
   • To replace a photo, edit the `image` path.
   • To change a starting price, edit `priceFrom`.
   • To add a card, copy any { ... } object and paste it
     after the last one (remember the comma).
   ========================================================= */
const GAMING_CARDS = [
  {
    title: "Single Player Gaming",
    desc:  "Jump into your favourite solo titles and enjoy a personal gaming session.",
    image: "assets/images/gaming/single-player.jpg",
    priceFrom: "R25",
    packageValue: "1 Player",
    durationValue: "20 Minutes"
  },
  {
    title: "Two Player Gaming",
    desc:  "Go head-to-head with a friend on the same station.",
    image: "assets/images/gaming/two-player.jpg",
    priceFrom: "R30",
    packageValue: "2 Players",
    durationValue: "20 Minutes"
  },
  {
    title: "Four Player Gaming",
    desc:  "Full squad sessions — perfect for groups and friendly rivalries.",
    image: "assets/images/gaming/four-player.jpg",
    priceFrom: "R40",
    packageValue: "4 Players",
    durationValue: "20 Minutes"
  },
  {
    title: "Multiplayer Experiences",
    desc:  "Bring the crew together for competitive multiplayer matches and social gaming.",
    image: "assets/images/gaming/multiplayer.jpg",
    priceFrom: "R40",
    packageValue: "4 Players",
    durationValue: "1 Hour"
  }
];


/* =========================================================
   3. GAMING PRICING
   ---------------------------------------------------------
   These are the CONFIRMED official TVGH prices.
   Do not change unless the business confirms a change.
   Prices are per STATION, not per person.
   ========================================================= */
const GAMING_PACKAGES = [
  {
    players: "1 Player",
    short:   "SOLO",
    rows: [
      { duration: "20 Minutes", price: 25 },
      { duration: "30 Minutes", price: 40 },
      { duration: "1 Hour",     price: 70 },
      { duration: "2 Hours",    price: 120 }
    ]
  },
  {
    players: "2 Players",
    short:   "DUO",
    rows: [
      { duration: "20 Minutes", price: 30 },
      { duration: "30 Minutes", price: 50 },
      { duration: "1 Hour",     price: 85 },
      { duration: "2 Hours",    price: 150 }
    ]
  },
  {
    players: "4 Players",
    short:   "SQUAD",
    rows: [
      { duration: "20 Minutes", price: 40 },
      { duration: "30 Minutes", price: 65 },
      { duration: "1 Hour",     price: 110 },
      { duration: "2 Hours",    price: 190 }
    ]
  }
];


/* =========================================================
   4. SPECIAL COMBO DEALS
   ---------------------------------------------------------
   Verified combo descriptions and prices. Edit only with
   the business owner's confirmation.
   ========================================================= */
const COMBO_DEALS = [
  {
    name:  "Play & Snack",
    price: 85,
    items: ["1 Hour Gaming", "Any R10 Snack", "Water"]
  },
  {
    name:  "Play & Drink",
    price: 75,
    items: ["1 Hour Gaming", "300ml Coke or Fanta"]
  },
  {
    name:  "Double Play",
    price: 100,
    items: ["2 Players", "1 Hour Gaming", "2 Drinks"]
  },
  {
    name:  "Kids' Day Out",
    price: 140,
    items: ["2 Hours Gaming", "Snack", "Drink"]
  }
];


/* =========================================================
   5. MENU (Food & Drinks)
   ---------------------------------------------------------
   To update a price, change the number after `price`.
   To add an item, add a new { name, price } object.
   To remove, delete the object and its trailing comma.
   ========================================================= */
const MENU = {
  softDrinks: [
    { name: "Water",         price: 5  },
    { name: "300ml Coke",    price: 10 },
    { name: "500ml Coke",    price: 15 },
    { name: "300ml Fanta",   price: 10 },
    { name: "500ml Fanta",   price: 15 },
    { name: "Powerade",      price: 16 },
    { name: "Cool Time",     price: 4  },
    { name: "Slushie",       price: 25 }
  ],
  energyDrinks: [
    { name: "Dragon",          price: 12 },
    { name: "Switch",          price: 12 },
    { name: "250ml Red Bull",  price: 21 },
    { name: "355ml Red Bull",  price: 29 },
    { name: "473ml Red Bull",  price: 37 }
  ],
  snacks: [
    { name: "Simba",       price: 12 },
    { name: "Doritos",     price: 12 },
    { name: "Lays",        price: 12 },
    { name: "Popcorn",     price: 10 },
    { name: "KitKat Bar",  price: 10 },
    { name: "Hobo Snack",  price: 2  },
    { name: "Snake Sweets",price: 2  }
  ]
};


/* =========================================================
   6. FACILITIES
   ========================================================= */
const FACILITIES = [
  { name: "PlayStation Gaming",  icon: "gamepad" },
  { name: "Racing Simulator",    icon: "racing"  },
  { name: "Snooker",             icon: "snooker" },
  { name: "Social Space",        icon: "social"  },
  { name: "Cold Drinks & Snacks",icon: "drink"   }
];


/* =========================================================
   7. ICON LIBRARY (inline SVGs)
   ========================================================= */
const ICONS = {
  gamepad: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="10" rx="4"/><path d="M7 10v4M5 12h4M15 11h.01M18 13h.01"/></svg>`,
  racing:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 15l2-6h14l2 6"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M5 15h14"/></svg>`,
  snooker: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2" fill="currentColor"/></svg>`,
  social:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><circle cx="17" cy="10" r="2.5"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><path d="M15 20c0-2.2 1.5-3.7 3.5-3.7S22 17.8 22 20"/></svg>`,
  drink:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 8h9l3 8H8L5 8Z"/><path d="M14 8V6a2 2 0 0 1 2-2h3"/><path d="M4 20h16"/></svg>`
};


/* =========================================================
   ⚠️  Do not edit below this line unless you know what
       you're doing. All the code below renders the
       content from the data above.
   ========================================================= */


/* ---------------------------------------------------------
   Utility: safe text
   --------------------------------------------------------- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/* ---------------------------------------------------------
   Utility: WhatsApp URL builder
   --------------------------------------------------------- */
function buildWhatsAppUrl(message) {
  const number = String(TVGH_CONFIG.whatsappNumber).replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/* ---------------------------------------------------------
   Utility: hide broken images gracefully
   --------------------------------------------------------- */
function attachImageFallbacks(scope) {
  (scope || document).querySelectorAll("img").forEach(img => {
    if (img.dataset.fallbackBound) return;
    img.dataset.fallbackBound = "1";
    img.addEventListener("error", () => {
      img.style.opacity = "0";
    });
  });
}


/* =========================================================
   RENDER: Gaming cards
   ========================================================= */
function renderGamingCards() {
  const wrap = document.getElementById("gamingCards");
  if (!wrap) return;

  wrap.innerHTML = GAMING_CARDS.map((c, i) => `
    <article class="game-card">
      <div class="img-wrap">
        <img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.title)} at TVGH Rustenburg" loading="lazy" />
      </div>
      <div class="game-body">
        <h3>${escapeHtml(c.title)}</h3>
        <p>${escapeHtml(c.desc)}</p>
        <div class="game-price">From ${escapeHtml(c.priceFrom)} <small>per station</small></div>
        <button class="btn btn-primary btn-sm"
          data-book-package="${escapeHtml(c.packageValue)}"
          data-book-duration="${escapeHtml(c.durationValue)}">
          Book Now
        </button>
      </div>
    </article>
  `).join("");

  attachImageFallbacks(wrap);
  wrap.querySelectorAll("[data-book-package]").forEach(btn => {
    btn.addEventListener("click", () => {
      prefillBooking({
        packageValue: btn.dataset.bookPackage,
        durationValue: btn.dataset.bookDuration
      });
    });
  });
}


/* =========================================================
   RENDER: Pricing
   ========================================================= */
function renderPricing() {
  const wrap = document.getElementById("pricingWrap");
  if (!wrap) return;

  wrap.innerHTML = GAMING_PACKAGES.map(pkg => `
    <div class="price-card">
      <h3>${escapeHtml(pkg.players)}</h3>
      <div class="price-tag">${escapeHtml(pkg.short)} Station</div>
      <div class="price-rows">
        ${pkg.rows.map(row => `
          <div class="price-row">
            <span>${escapeHtml(row.duration)}</span>
            <span>R${row.price}</span>
          </div>
        `).join("")}
      </div>
      <button class="btn btn-primary btn-sm"
        data-book-package="${escapeHtml(pkg.players)}"
        data-book-duration="${escapeHtml(pkg.rows[0].duration)}">
        Book ${escapeHtml(pkg.players)}
      </button>
    </div>
  `).join("");

  wrap.querySelectorAll("[data-book-package]").forEach(btn => {
    btn.addEventListener("click", () => {
      prefillBooking({
        packageValue: btn.dataset.bookPackage,
        durationValue: btn.dataset.bookDuration
      });
    });
  });
}


/* =========================================================
   RENDER: Combo deals
   ========================================================= */
function renderCombos() {
  const wrap = document.getElementById("comboGrid");
  if (!wrap) return;

  wrap.innerHTML = COMBO_DEALS.map(deal => `
    <article class="combo-card">
      <h3>${escapeHtml(deal.name)}</h3>
      <div class="combo-price">R${deal.price}</div>
      <ul class="combo-items">
        ${deal.items.map(it => `<li>${escapeHtml(it)}</li>`).join("")}
      </ul>
      <button class="btn btn-primary btn-sm" data-book-combo="${escapeHtml(deal.name)}">
        Book This Deal
      </button>
    </article>
  `).join("");

  wrap.querySelectorAll("[data-book-combo]").forEach(btn => {
    btn.addEventListener("click", () => {
      prefillBooking({ comboValue: btn.dataset.bookCombo });
    });
  });
}


/* =========================================================
   RENDER: Menu
   ========================================================= */
function renderMenu() {
  const wrap = document.getElementById("menuGrid");
  if (!wrap) return;

  const sections = [
    { key: "softDrinks",   title: "Soft Drinks"   },
    { key: "energyDrinks", title: "Energy Drinks" },
    { key: "snacks",       title: "Snacks"        }
  ];

  wrap.innerHTML = sections.map(sec => `
    <div class="menu-card">
      <h3>${sec.title}</h3>
      <ul class="menu-items">
        ${MENU[sec.key].map(item => `
          <li>
            <span class="item-name">${escapeHtml(item.name)}</span>
            <span class="item-price">R${item.price}</span>
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}


/* =========================================================
   RENDER: Facilities
   ========================================================= */
function renderFacilities() {
  const wrap = document.getElementById("facilityGrid");
  if (!wrap) return;

  wrap.innerHTML = FACILITIES.map(f => `
    <div class="facility">
      ${ICONS[f.icon] || ICONS.gamepad}
      <h4>${escapeHtml(f.name)}</h4>
    </div>
  `).join("");
}


/* =========================================================
   BOOKING — prefill helper
   ========================================================= */
function prefillBooking({ packageValue, durationValue, comboValue }) {
  const section = document.getElementById("booking");
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });

  if (packageValue) {
    const pkg = document.getElementById("bPackage");
    if (pkg) pkg.value = packageValue;
  }
  if (durationValue) {
    const dur = document.getElementById("bDuration");
    if (dur) dur.value = durationValue;
  }
  if (comboValue) {
    const combo = document.getElementById("bCombo");
    if (combo) combo.value = comboValue;
  }
  updatePriceNote();
}


/* =========================================================
   BOOKING — populate combo dropdown
   ========================================================= */
function populateComboDropdown() {
  const select = document.getElementById("bCombo");
  if (!select) return;
  select.innerHTML =
    `<option value="">No combo</option>` +
    COMBO_DEALS.map(d =>
      `<option value="${escapeHtml(d.name)}">${escapeHtml(d.name)} — R${d.price}</option>`
    ).join("");
}


/* =========================================================
   BOOKING — price note under the form
   ========================================================= */
function getGamingPrice(packageLabel, duration) {
  const pkg = GAMING_PACKAGES.find(p => p.players === packageLabel);
  if (!pkg) return null;
  const row = pkg.rows.find(r => r.duration === duration);
  return row ? row.price : null;
}

function updatePriceNote() {
  const note = document.getElementById("priceNote");
  if (!note) return;

  const packageValue = document.getElementById("bPackage")?.value || "";
  const durationValue = document.getElementById("bDuration")?.value || "";
  const comboValue = document.getElementById("bCombo")?.value || "";

  const parts = [];

  if (packageValue && durationValue) {
    const price = getGamingPrice(packageValue, durationValue);
    if (price != null) {
      parts.push(`Gaming: <strong>R${price}</strong> (${packageValue}, ${durationValue}, per station)`);
    }
  }

  if (comboValue) {
    const deal = COMBO_DEALS.find(d => d.name === comboValue);
    if (deal) parts.push(`Combo: <strong>R${deal.price}</strong> (${comboValue})`);
  }

  note.innerHTML = parts.length
    ? parts.join(" &nbsp;·&nbsp; ") + " — final price confirmed by TVGH on WhatsApp."
    : "";
}


/* =========================================================
   BOOKING — submit handler
   ========================================================= */
function handleBookingSubmit(e) {
  e.preventDefault();

  const get = id => document.getElementById(id)?.value.trim() || "";

  const data = {
    name:     get("bName"),
    phone:    get("bPhone"),
    date:     get("bDate"),
    time:     get("bTime"),
    players:  get("bPlayers"),
    pkg:      get("bPackage"),
    duration: get("bDuration"),
    combo:    get("bCombo"),
    extras:   get("bExtras"),
    message:  get("bMessage")
  };

  // Validate required fields
  if (!data.name || !data.phone || !data.date || !data.time ||
      !data.players || !data.pkg || !data.duration) {
    alert("Please complete all required fields marked with *.");
    return;
  }

  // Simple phone check (at least 9 digits)
  if (data.phone.replace(/\D/g, "").length < 9) {
    alert("Please enter a valid WhatsApp contact number.");
    return;
  }

  // Build WhatsApp message
  let msg = "Hello TVGH! I would like to make a gaming booking.\n\n";
  msg += `Name: ${data.name}\n`;
  msg += `Contact Number: ${data.phone}\n`;
  msg += `Booking Date: ${data.date}\n`;
  msg += `Booking Time: ${data.time}\n`;
  msg += `Number of Players: ${data.players}\n`;
  msg += `Gaming Package: ${data.pkg}\n`;
  msg += `Session Duration: ${data.duration}\n`;

  const estimated = getGamingPrice(data.pkg, data.duration);
  if (estimated != null) {
    msg += `Package Price: R${estimated} (per station)\n`;
  }

  if (data.combo) {
    const deal = COMBO_DEALS.find(d => d.name === data.combo);
    msg += `Combo Deal: ${data.combo}${deal ? ` — R${deal.price}` : ""}\n`;
  }

  if (data.extras) msg += `Drinks & Snacks: ${data.extras}\n`;
  if (data.message) msg += `Additional Requests: ${data.message}\n`;

  msg += `\nPlease confirm whether my preferred booking time is available.\n\nThank you!`;

  // Show success hint + open WhatsApp
  const success = document.getElementById("formSuccess");
  if (success) success.hidden = false;

  window.open(buildWhatsAppUrl(msg), "_blank", "noopener");
}


/* =========================================================
   NAV: mobile toggle + scroll state
   ========================================================= */
function setupNavigation() {
  const toggle = document.getElementById("menuToggle");
  const menu   = document.getElementById("mobileMenu");
  const header = document.getElementById("siteHeader");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.hidden = expanded;
      toggle.setAttribute("aria-label", expanded ? "Open menu" : "Close menu");
    });
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        menu.hidden = true;
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });
}


/* =========================================================
   GALLERY + LIGHTBOX
   ========================================================= */
function setupGallery() {
  const items = Array.from(document.querySelectorAll(".gallery-item"));
  if (!items.length) return;

  const lightbox = document.getElementById("lightbox");
  const lbImage  = document.getElementById("lbImage");
  const lbClose  = document.getElementById("lbClose");
  const lbPrev   = document.getElementById("lbPrev");
  const lbNext   = document.getElementById("lbNext");

  let current = 0;

  function openAt(index) {
    current = index;
    const img = items[current].querySelector("img");
    if (!img) return;
    lbImage.src = img.src;
    lbImage.alt = img.alt || "TVGH gallery photo";
    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lightbox.hidden = true;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function prev() { openAt((current - 1 + items.length) % items.length); }
  function next() { openAt((current + 1) % items.length); }

  items.forEach((item, idx) => item.addEventListener("click", () => openAt(idx)));
  lbClose.addEventListener("click", close);
  lbPrev.addEventListener("click", prev);
  lbNext.addEventListener("click", next);

  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });
}


/* =========================================================
   CONTACT + SOCIAL + FOOTER — wire up to config
   ========================================================= */
function wireConfigLinks() {
  // Generic WhatsApp quick-chat (no pre-filled booking)
  const quickMsg = `Hello ${TVGH_CONFIG.businessName}! I would like to know more about booking a gaming session.`;
  const quickUrl = buildWhatsAppUrl(quickMsg);

  ["contactWhatsAppBtn", "footerWhatsApp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.href = quickUrl;
      el.target = "_blank";
      el.rel = "noopener";
    }
  });

  // Hours
  const hours = document.getElementById("hoursText");
  if (hours) hours.textContent = TVGH_CONFIG.operatingHours;

  // Social links
  const socialMap = [
    ["socialFacebook",  "facebook"],
    ["footerFacebook",  "facebook"],
    ["socialInstagram", "instagram"],
    ["footerInstagram", "instagram"],
    ["socialTikTok",    "tiktok"],
    ["footerTikTok",    "tiktok"]
  ];
  socialMap.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) return;
    const url = TVGH_CONFIG.social[key];
    if (url && url !== "#") {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener";
    } else {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Social media link coming soon.");
      });
    }
  });
}


/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderGamingCards();
  renderPricing();
  renderCombos();
  renderMenu();
  renderFacilities();
  populateComboDropdown();
  setupNavigation();
  setupGallery();
  wireConfigLinks();

  // Booking form
  const form = document.getElementById("bookingForm");
  if (form) form.addEventListener("submit", handleBookingSubmit);

  // Price note updates
  ["bPackage", "bDuration", "bCombo"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", updatePriceNote);
  });

  attachImageFallbacks(document);
});
