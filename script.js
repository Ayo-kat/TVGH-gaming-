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
     ⚠️ IMPORTANT — WHATSAPP NUMBERS
     -------------------------------------------------------
     Add one entry per WhatsApp number you want to show.
     Rules for each number:
       - No "+" sign
       - No spaces
       - No brackets or dashes
       - South African numbers start with 27
     Example: for +27 71 234 5678 use: "27712345678"

     The FIRST number in the list is used as the default
     for all "Book Now" / "Book This Deal" buttons.
     ------------------------------------------------------- */
  whatsappNumbers: [
    { label: "Bookings & Enquiries", number: "+27 63 318 0343" }
    // Add more lines below, e.g.:
    // { label: "Second Line", number: "27712345678" }
  ],

  /* -------------------------------------------------------
     OPERATING HOURS
     Update these once confirmed. They show in the
     Contact section.
     ------------------------------------------------------- */
  operatingHours: "Operating hours: please confirm with us on WhatsApp.",

  /* -------------------------------------------------------
     SOCIAL MEDIA LINKS
     Paste your full profile URLs. Leave "#" to disable.
     ------------------------------------------------------- */
  social: {
    facebook:  "#",
    instagram: "#",
    tiktok:    "#"
  }
};


/* =========================================================
   2. GAMING CARDS
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
   3. GAMING PRICING (verified official prices)
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
   5. MENU
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
   7. ICON LIBRARY
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
       you're doing.
   ========================================================= */


/* ---------------------------------------------------------
   Helpers
   --------------------------------------------------------- */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function getPrimaryNumber() {
  return (TVGH_CONFIG.whatsappNumbers[0] || { number: "" }).number;
}

function buildWhatsAppUrl(message, numberOverride) {
  const number = String(numberOverride || getPrimaryNumber()).replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function formatPhone(num) {
  const digits = String(num).replace(/\D/g, "");
  if (digits.startsWith("27") && digits.length === 11) {
    return `+27 ${digits.slice(2, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  }
  if (digits.length === 10) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  return `+${digits}`;
}

function openWhatsApp(message, numberOverride) {
  window.open(buildWhatsAppUrl(message, numberOverride), "_blank", "noopener");
}

function attachImageFallbacks(scope) {
  (scope || document).querySelectorAll("img").forEach(img => {
    if (img.dataset.fallbackBound) return;
    img.dataset.fallbackBound = "1";
    img.addEventListener("error", () => { img.style.opacity = "0"; });
  });
}


/* =========================================================
   RENDER: WhatsApp number cards (Booking section)
   ========================================================= */
function renderWhatsAppNumbers() {
  const wrap = document.getElementById("whatsappNumbers");
  if (!wrap) return;

  const greeting = `Hello ${TVGH_CONFIG.businessName}! I would like to book a gaming session. Please assist.`;

  wrap.innerHTML = TVGH_CONFIG.whatsappNumbers.map(entry => {
    const url = buildWhatsAppUrl(greeting, entry.number);
    const display = formatPhone(entry.number);
    return `
      <a href="${url}" class="whatsapp-number-card" target="_blank" rel="noopener" aria-label="Chat with ${escapeHtml(entry.label || 'TVGH')} on WhatsApp">
        <span class="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A12 12 0 0 0 3.4 19L2 22l3.1-1.4A12 12 0 1 0 20.5 3.5Zm-8.5 19a9.9 9.9 0 0 1-5-1.4l-.4-.2-2.5 1 1-2.4-.2-.4A10 10 0 1 1 12 22.5Zm5.6-7.4c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.2 8.2 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.5a2 2 0 0 0 .3-.5.5.5 0 0 0 0-.5c0-.2-.7-1.7-1-2.3s-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7A6.3 6.3 0 0 0 7.9 14a14.3 14.3 0 0 0 5.5 4.8 18 18 0 0 0 1.8.7 4.4 4.4 0 0 0 2 .1 3.4 3.4 0 0 0 2.2-1.5 2.7 2.7 0 0 0 .2-1.5c-.1-.1-.3-.2-.6-.3Z"/></svg>
        </span>
        <span class="whatsapp-info">
          <span class="label">${escapeHtml(entry.label || "WhatsApp")}</span>
          <span class="number">${escapeHtml(display)}</span>
          <span class="hint">Tap to open WhatsApp</span>
        </span>
        <span class="whatsapp-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </a>
    `;
  }).join("");
}


/* =========================================================
   RENDER: Gaming cards (Book Now → WhatsApp)
   ========================================================= */
function renderGamingCards() {
  const wrap = document.getElementById("gamingCards");
  if (!wrap) return;

  wrap.innerHTML = GAMING_CARDS.map(c => `
    <article class="game-card">
      <div class="img-wrap">
        <img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.title)} at TVGH Rustenburg" loading="lazy" />
      </div>
      <div class="game-body">
        <h3>${escapeHtml(c.title)}</h3>
        <p>${escapeHtml(c.desc)}</p>
        <div class="game-price">From ${escapeHtml(c.priceFrom)} <small>per station</small></div>
        <button class="btn btn-primary btn-sm" data-book-title="${escapeHtml(c.title)}" data-book-package="${escapeHtml(c.packageValue)}" data-book-duration="${escapeHtml(c.durationValue)}">
          Book Now
        </button>
      </div>
    </article>
  `).join("");

  attachImageFallbacks(wrap);
  wrap.querySelectorAll("[data-book-title]").forEach(btn => {
    btn.addEventListener("click", () => {
      const msg = `Hello ${TVGH_CONFIG.businessName}! I would like to book a ${btn.dataset.bookTitle} session (${btn.dataset.bookPackage}, ${btn.dataset.bookDuration}). Please confirm availability.`;
      openWhatsApp(msg);
    });
  });
}


/* =========================================================
   RENDER: Pricing (Book → WhatsApp)
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
        data-book-duration="${escapeHtml(pkg.rows[0].duration)}"
        data-book-price="${pkg.rows[0].price}">
        Book ${escapeHtml(pkg.players)}
      </button>
    </div>
  `).join("");

  wrap.querySelectorAll("[data-book-package]").forEach(btn => {
    btn.addEventListener("click", () => {
      const msg = `Hello ${TVGH_CONFIG.businessName}! I would like to book a ${btn.dataset.bookPackage} gaming station for ${btn.dataset.bookDuration} (R${btn.dataset.bookPrice}). Please confirm availability.`;
      openWhatsApp(msg);
    });
  });
}


/* =========================================================
   RENDER: Combo deals (Book This Deal → WhatsApp)
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
      <button class="btn btn-primary btn-sm" data-book-combo="${escapeHtml(deal.name)}" data-book-combo-price="${deal.price}">
        Book This Deal
      </button>
    </article>
  `).join("");

  wrap.querySelectorAll("[data-book-combo]").forEach(btn => {
    btn.addEventListener("click", () => {
      const msg = `Hello ${TVGH_CONFIG.businessName}! I would like to book the "${btn.dataset.bookCombo}" combo deal (R${btn.dataset.bookComboPrice}). Please confirm availability.`;
      openWhatsApp(msg);
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
   NAV
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
   CONTACT + SOCIAL — wire up to config
   ========================================================= */
function wireConfigLinks() {
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

  const hours = document.getElementById("hoursText");
  if (hours) hours.textContent = TVGH_CONFIG.operatingHours;

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
  renderWhatsAppNumbers();
  renderGamingCards();
  renderPricing();
  renderCombos();
  renderMenu();
  renderFacilities();
  setupNavigation();
  setupGallery();
  wireConfigLinks();
  attachImageFallbacks(document);
});
