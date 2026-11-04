/**
 * TP GLOBAL SERVICES - CLIENT APPLICATION ENGINE
 * Compliant with PRD 1.0 Specifications & Nile Africa Technologies Standards
 * Unified Platform for TP Stitches, Travels & Tours, Event Planner & Beauty Studio
 */

// ========================================================
// 1. DATA SEED: FASHION CATALOGUE (PRD SECTION 8 & 9)
// ========================================================
const FASHION_CATALOGUE = [
  {
    id: 'prod-new-001',
    slug: 'navy-resort-linen-shorts-coord-set',
    title: 'Navy Resort Linen Shirt & Shorts Co-Ord Set',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Pure Breathable Linen',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/navy-linen-shorts-set.jpg',
    description: 'Bespoke short-sleeve resort button-up tunic featuring a mandarin collar and vertical tuck seams, paired with tailored drawstring linen shorts. Ideal for yachting, Cape Verde coastal retreats, and relaxed luxury occasions.',
    ambassadorApproved: true,
    badge: 'Resort Collection'
  },
  {
    id: 'prod-new-002',
    slug: 'earthtone-geometric-bohemian-linen-set',
    title: 'Earthtone Geometric Color-Block Bohemian Linen Set',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Artisanal Woven Linen',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/earth-geometric-linen-set.jpg',
    description: 'Statement bohemian two-piece featuring abstract earth-toned geometric panels in terracotta, olive green, espresso black, and ecru. Features a 3/4-sleeve notched henley tunic and flowing easy-drape trousers.',
    ambassadorApproved: true,
    badge: 'Artisanal Luxury'
  },
  {
    id: 'prod-new-003',
    slug: 'sunset-orange-plaid-resort-linen-ensemble',
    title: 'Sunset Plaid Woven Linen Resort Ensemble',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Textured Plaid Linen',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/orange-plaid-resort-set.jpg',
    description: 'Vibrant sunset orange, sky blue, and cream plaid woven linen lounge set. Relaxed split-neck tunic shirt with matching drawstring lounge trousers for effortless warm-weather sophistication.',
    ambassadorApproved: false,
    badge: 'Summer Resort'
  },
  {
    id: 'prod-new-004',
    slug: 'mustard-pitch-black-tribal-stripe-linen-set',
    title: 'Mustard & Pitch-Black Tribal Stripe Linen Two-Piece',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Textured Tribal Stripe Linen',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/tribal-stripe-mustard-set.jpg',
    description: 'Vertical tribal geometric stripe ensemble incorporating mustard gold, pitch black, and natural cream. Distinctive elongated silhouette with relaxed comfort trousers, honoring African textile roots.',
    ambassadorApproved: true,
    badge: 'Tribal Luxe'
  },
  {
    id: 'prod-new-005',
    slug: 'geometric-maze-labyrinth-linen-ensemble',
    title: 'Graphic Labyrinth Maze Print Linen Ensemble',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Graphic Pattern Linen',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/geometric-maze-linen-set.jpg',
    description: 'Mesmerizing geometric maze labyrinth print in rich dark chocolate on natural ecru linen. Contemporary oversized cut tunic paired with coordinating wide-leg trousers for bold cultural expression.',
    ambassadorApproved: false,
    badge: 'Graphic Artistry'
  },
  {
    id: 'prod-new-006',
    slug: 'sky-blue-mandarin-pleated-resort-set',
    title: 'Sky Blue Pleated Mandarin Linen Shorts Set',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Fine Coastal Linen',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/sky-blue-resort-shorts-set.jpg',
    description: 'Fresh sky-blue breathable linen shirt featuring a mandarin split collar and tailored front vertical tucks, complete with coordinated casual linen shorts for premier coastal elegance.',
    ambassadorApproved: true,
    badge: 'Riviera Collection'
  },
  {
    id: 'prod-new-007',
    slug: 'terracotta-earth-textured-linen-shorts-set',
    title: 'Terracotta Earth Textured Linen Tunic & Shorts Set',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Textured Slub Linen',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/terracotta-linen-shorts-set.jpg',
    description: 'Artisanal warm terracotta slub linen crewneck tunic featuring rolled sleeve cuffs and utility chest pocket, paired with matching drawstring linen shorts.',
    ambassadorApproved: true,
    badge: 'Earth Luxe'
  },
  {
    id: 'prod-new-008',
    slug: 'midnight-navy-ocean-deck-lounge-linen-set',
    title: 'Midnight Navy Ocean Deck Linen Lounge Two-Piece',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Ultra-Soft Breezy Linen',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/midnight-blue-lounge-linen-set.jpg',
    description: 'Deep ocean midnight blue long-sleeve henley shirt with pearl buttons paired with relaxed drawstring lounge trousers. Engineered for private overwater retreats and evening beachfront elegance.',
    ambassadorApproved: true,
    badge: 'Resort Elegance'
  },
  {
    id: 'prod-new-009',
    slug: 'natural-oatmeal-safari-tailored-linen-suit',
    title: 'Natural Oatmeal Safari Tailored Linen Suit',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Heritage Pure Linen',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/oatmeal-safari-linen-suit.jpg',
    description: 'Understated luxury oatmeal beige button-down safari linen shirt with roll-up sleeve tabs and matching straight-leg tailored trousers. Perfect for global jetset travel and distinguished occasions.',
    ambassadorApproved: true,
    badge: 'Diaspora Jetset'
  },
  {
    id: 'prod-new-010',
    slug: 'chambray-indigo-mandarin-linen-shorts-set',
    title: 'Chambray Blue Mandarin Collar Linen Shorts Set',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Textured Chambray Linen',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/chambray-blue-resort-shorts-set.jpg',
    description: 'Short-sleeve tailored chambray blue tunic shirt with horn button accents, chest flap pocket, and tab-detail cuffs, paired with coordinating tailored drawstring shorts.',
    ambassadorApproved: false,
    badge: 'Summer Casual'
  },
  {
    id: 'prod-new-011',
    slug: 'couples-monochrome-afrocentric-mask-ensemble',
    title: 'Monochrome Afrocentric Mask Matching Couple’s Ensemble',
    gender: 'Unisex',
    category: 'Ready-to-Wear',
    fabric: 'Crisp White Cotton & Tribal Print',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/couples-afrocentric-mask-set.jpg',
    description: 'Striking his-and-hers coordinating duo featuring graphic African heritage mask motifs and matching geometric tribal printed accents. Features a short-sleeve tunic and trousers for him, and a modern shift dress for her.',
    ambassadorApproved: true,
    badge: 'Couple’s Signature'
  },
  {
    id: 'prod-new-012',
    slug: 'artisanal-adire-indigo-resort-kaftan-collection',
    title: 'Artisanal Adire Indigo Tie-Dye Kimono & Kaftan Series',
    gender: 'Women',
    category: 'Ready-to-Wear',
    fabric: 'Hand-Dyed Indigo Adire Cotton',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/adire-indigo-kaftan-collection.jpg',
    description: 'Flowing resort kaftan collection crafted from heritage Nigerian indigo tie-dye cotton, featuring distinctive color-contrast embroidered butterfly neckline plackets in crimson, saffron, and cobalt.',
    ambassadorApproved: true,
    badge: 'Heritage Adire'
  },
  {
    id: 'prod-new-013',
    slug: 'bohemian-tribal-patchwork-drop-crotch-harem-trousers',
    title: 'Bohemian Tribal Patchwork Drop-Crotch Harem Trousers',
    gender: 'Unisex',
    category: 'Ready-to-Wear',
    fabric: 'Patchwork Ethnic Print Cotton',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/boho-tribal-patchwork-harem-pants.jpg',
    description: 'Statement artisanal drop-crotch harem lounge trousers composed of multi-hued bohemian African mandala and tribal geometric patchworks with drawstring waist and elastic ankle cuffs.',
    ambassadorApproved: false,
    badge: 'Boho Luxe'
  },
  {
    id: 'prod-new-014',
    slug: 'statement-adire-mask-appliqued-oversized-boubou',
    title: 'Statement Adire Indigo Mask-Appliqué Oversized Boubou',
    gender: 'Women',
    category: 'Ready-to-Wear',
    fabric: 'Artisanal Tie-Dye Indigo & Canvas',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/statement-adire-mask-applique-boubou.jpg',
    description: 'Museum-worthy luxury oversized boubou gown in traditional indigo-and-white tie-dye Adire, crowned by a dramatic bold African mask appliqué centerpiece with white-and-black contrast styling.',
    ambassadorApproved: true,
    badge: 'Haute Couture'
  },
  {
    id: 'prod-new-015',
    slug: 'burgundy-navy-adire-batik-lounge-ensembles',
    title: 'Executive Adire Batik Two-Tone Tunic & Trousers Sets',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Heritage Wax Batik Cotton',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/burgundy-navy-adire-batik-lounge-sets.jpg',
    description: 'Distinguished two-piece native lounge sets combining solid yoke panels with authentic hand-batiked African rhythm motifs in royal navy blue and deep regal burgundy. Ideal for cultural celebrations and evening affairs.',
    ambassadorApproved: true,
    badge: 'Bespoke Batik'
  },
  {
    id: 'prod-new-016',
    slug: 'royal-white-ceremonial-agbada-ensemble',
    title: 'Royal White Grand Ceremonial 3-Piece Agbada',
    gender: 'Men',
    category: 'Agbada',
    fabric: 'Jacquard Silk-Cotton & Rich White Embroidery',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/white-embroidered-agbada-studio-mannequin.jpg',
    description: 'Immaculate white grand Agbada 3-piece featuring tone-on-tone dense geometric chest embroidery, matching tailored trousers, and inner tunic. Ideal for high-profile weddings, coronation events, and prestigious gala receptions.',
    ambassadorApproved: true,
    badge: 'Royal Masterpiece'
  },
  {
    id: 'prod-new-017',
    slug: 'midnight-navy-embroidered-lattice-senator-suit',
    title: 'Midnight Navy Embroidered Lattice Senator Suit',
    gender: 'Men',
    category: 'Ready-to-Wear',
    fabric: 'Premium Wool-Touch Cashmere Feel Cotton',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/midnight-navy-embroidered-senator.jpg',
    description: 'Bespoke deep navy blue senator native ensemble highlighted by intricate geometric lattice embroidery along the sleeve cuffs and hemline. Clean, commanding, and tailored to executive perfection.',
    ambassadorApproved: true,
    badge: 'Executive Senator'
  },
  {
    id: 'prod-new-018',
    slug: 'ivory-bespoke-embroidered-bib-agbada',
    title: 'Ivory Bespoke Diamond-Embroidered Bib Agbada',
    gender: 'Men',
    category: 'Agbada',
    fabric: 'Fine Cotton Silk with Multicolor Embroidery',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/ivory-embroidered-bib-agbada.jpg',
    description: 'Architectural ivory bespoke Agbada featuring an ornate geometric bib embroidery in regal gold, slate, and cobalt diamond motifs. Paired with coordinating ceremonial Aso-Oke fila.',
    ambassadorApproved: true,
    badge: 'Ceremonial Majesty'
  },
  {
    id: 'prod-new-019',
    slug: 'pitch-black-adinkra-infinity-knot-agbada',
    title: 'Pitch-Black Adinkra Infinity Knot 3-Piece Agbada',
    gender: 'Men',
    category: 'Agbada',
    fabric: 'High-Density Pitch Black Brocade & Silver Beadwork',
    noPrice: true,
    priceNGN: null,
    priceGBP: null,
    isStartingPrice: false,
    image: 'assets/images/fashion/pitch-black-infinity-knot-agbada.jpg',
    description: 'Dramatic sovereign black 3-piece Agbada detailed with hand-beaded silver Adinkra infinity knot embroidery across the chest and inner tunic. The pinnacle of Black African luxury and authority.',
    ambassadorApproved: true,
    badge: 'Sovereign Black'
  }
];

// ========================================================
// 2. STATE MANAGEMENT
// ========================================================
const APP_STATE = {
  currentView: 'home',
  currency: 'NGN', // 'NGN' or 'GBP'
  beautyCurrency: 'CVE', // 'CVE', 'EUR', or 'GBP'
  beautyCategory: 'all',
  filters: {
    gender: 'All',
    category: 'All',
    fabric: 'All',
    search: ''
  },
  leads: [],
  selectedProduct: null
};

const CONTACT_INFO = {
  nigeriaWhatsApp: '2347042297094',
  capeVerdeWhatsApp: '2389145325',
  email: 'tpglobalservices14@gmail.com'
};

// ========================================================
// 3. INITIALIZATION
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  initLeadsStore();
  initRouting();
  initCurrencySelector();
  initMobileMenu();
  renderCatalogue();
  initBeautyRateCard();
  updateLeadCounters();
  renderAdminLeads();
});

// ========================================================
// 4. ROUTING & NAVIGATION
// ========================================================
function initRouting() {
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    handleRoute(hash);
  });

  // Initial load
  const initialHash = window.location.hash.replace('#', '') || 'home';
  handleRoute(initialHash);
}

function handleRoute(viewName) {
  const validViews = ['home', 'stitches', 'travels', 'events', 'beauty', 'about', 'contact', 'admin'];
  const targetView = validViews.includes(viewName) ? viewName : 'home';

  APP_STATE.currentView = targetView;

  // Toggle page views
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });

  const activeView = document.getElementById(`view-${targetView}`);
  if (activeView) {
    activeView.classList.add('active');
  }

  // Update header nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('data-nav') === targetView) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile drawer if open
  closeMobileMenu();

  // If entering admin, re-render leads
  if (targetView === 'admin') {
    renderAdminLeads();
  }
}

function navigateTo(viewName) {
  window.location.hash = viewName;
}

// ========================================================
// 5. MOBILE MENU
// ========================================================
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('mobileDrawerCloseBtn');

  if (btn && drawer) {
    btn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('active');
      if (isOpen) {
        closeMobileMenu();
      } else {
        drawer.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ========================================================
// 6. CURRENCY TOGGLE (NGN / GBP) - EXACT CLIENT AMOUNTS
// ========================================================
function initCurrencySelector() {
  document.querySelectorAll('.curr-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.getAttribute('data-currency');
      switchCurrency(selected);
    });
  });
}

function switchCurrency(curr) {
  APP_STATE.currency = curr;

  // Update buttons across header, mobile drawer, and catalogue toolbar
  document.querySelectorAll('.curr-btn').forEach(b => {
    if (b.getAttribute('data-currency') === curr) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  document.querySelectorAll('.curr-chip').forEach(c => {
    if (c.id === `chip-${curr}`) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });

  renderCatalogue();

  // If product modal is open, re-render modal pricing
  if (APP_STATE.selectedProduct) {
    renderModalProduct(APP_STATE.selectedProduct);
  }

  showToast('Currency Updated', `Displaying verified prices in ${curr}.`);
}

function formatPrice(product) {
  if (product.noPrice || (product.priceNGN === null && product.priceGBP === null)) {
    return 'Order on WhatsApp';
  }
  if (APP_STATE.currency === 'GBP') {
    if (product.priceGBP !== null) {
      return `£${product.priceGBP.toLocaleString()}`;
    }
    return product.isStartingPrice ? 'Quote on Request' : 'Enquire for Price';
  } else {
    // NGN
    if (product.priceNGN !== null) {
      const prefix = product.isStartingPrice ? 'From ' : '';
      return `${prefix}₦${product.priceNGN.toLocaleString()}`;
    }
    return 'Enquire for Price';
  }
}

function getSecondaryPrice(product) {
  if (product.noPrice || (product.priceNGN === null && product.priceGBP === null)) {
    return 'Tap anywhere to order';
  }
  if (APP_STATE.currency === 'GBP') {
    if (product.priceNGN) {
      const prefix = product.isStartingPrice ? 'From ' : '';
      return `${prefix}₦${product.priceNGN.toLocaleString()} NGN`;
    }
    return '';
  } else {
    if (product.priceGBP) {
      return `£${product.priceGBP.toLocaleString()} GBP`;
    }
    return 'GBP on enquiry';
  }
}

// ========================================================
// 7. CATALOGUE FILTERING & RENDERING (TP STITCHES)
// ========================================================
function setGenderFilter(gender) {
  APP_STATE.filters.gender = gender;

  document.querySelectorAll('.filter-btn').forEach(b => {
    if (b.getAttribute('data-gender') === gender) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  renderCatalogue();
}

function quickFilterFashion(val) {
  navigateTo('stitches');
  if (val === 'Men' || val === 'Women' || val === 'Accessories') {
    setGenderFilter(val);
  } else if (val === 'Agbada') {
    document.getElementById('categoryFilter').value = 'Agbada';
    applyFilters();
  }
}

function applyFilters() {
  const cat = document.getElementById('categoryFilter').value;
  const fabric = document.getElementById('fabricFilter').value;
  const search = document.getElementById('catalogueSearch').value.toLowerCase().trim();

  APP_STATE.filters.category = cat;
  APP_STATE.filters.fabric = fabric;
  APP_STATE.filters.search = search;

  renderCatalogue();
}

function resetCatalogueFilters() {
  document.getElementById('categoryFilter').value = 'All';
  document.getElementById('fabricFilter').value = 'All';
  document.getElementById('catalogueSearch').value = '';
  setGenderFilter('All');
}

function renderCatalogue() {
  const grid = document.getElementById('productGrid');
  const emptyState = document.getElementById('catalogueEmpty');

  if (!grid) return;

  const filtered = FASHION_CATALOGUE.filter(item => {
    // Gender filter
    if (APP_STATE.filters.gender !== 'All' && item.gender !== APP_STATE.filters.gender) {
      return false;
    }
    // Category filter
    if (APP_STATE.filters.category !== 'All' && item.category !== APP_STATE.filters.category) {
      return false;
    }
    // Fabric filter
    if (APP_STATE.filters.fabric !== 'All' && item.fabric !== APP_STATE.filters.fabric) {
      return false;
    }
    // Search query
    if (APP_STATE.filters.search) {
      const q = APP_STATE.filters.search;
      const match = item.title.toLowerCase().includes(q) ||
                    item.fabric.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q) ||
                    item.category.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  grid.innerHTML = filtered.map(item => {
    const isDirectOrder = item.noPrice || (item.priceNGN === null && item.priceGBP === null);
    const formattedPrice = formatPrice(item);
    const secondaryPrice = getSecondaryPrice(item);
    const waMessage = encodeURIComponent(
      `Hello TP Stitches, I want to order the "${item.title}" (${item.fabric || 'Luxury Wear'}). Please share available sizing, fitting, and delivery timeline.`
    );
    const waLink = `https://wa.me/${CONTACT_INFO.nigeriaWhatsApp}?text=${waMessage}`;

    if (isDirectOrder) {
      return `
        <article class="product-card direct-order-card" data-id="${item.id}" onclick="handleDirectWhatsAppOrder('${waLink}', event)">
          <div class="product-img-box">
            <img src="${item.image}" alt="${item.title}" class="product-img" loading="lazy">
            <div class="product-badge-group">
              <span class="p-pill gold">${item.badge}</span>
              <span class="p-pill">${item.gender}</span>
              <span class="p-pill wa-pill">⚡ Order via WhatsApp</span>
            </div>
            <div class="direct-order-overlay">
              <span>💬 Click to Order on WhatsApp</span>
            </div>
          </div>
          <div class="product-info">
            <span class="product-fabric-tag">${item.fabric}</span>
            <h3 class="product-title">${item.title}</h3>
            <p class="product-desc">${item.description}</p>
            <div class="product-pricing-row direct-order-price-row">
              <span class="price-main order-highlight">Order via WhatsApp</span>
              <span class="price-alt">Tap anywhere to order</span>
            </div>
            <div class="product-action-row single-action">
              <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-wa-full-width" onclick="event.stopPropagation(); trackProductEnquiry('${item.id}')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </article>
      `;
    }

    return `
      <article class="product-card" data-id="${item.id}">
        <div class="product-img-box">
          <img src="${item.image}" alt="${item.title}" class="product-img" loading="lazy">
          <div class="product-badge-group">
            <span class="p-pill ${item.ambassadorApproved ? 'gold' : ''}">${item.badge}</span>
            <span class="p-pill">${item.gender}</span>
          </div>
          <button class="btn-quick-view" onclick="openProductModal('${item.id}')">Quick View</button>
        </div>
        <div class="product-info">
          <span class="product-fabric-tag">${item.fabric}</span>
          <h3 class="product-title">${item.title}</h3>
          <p class="product-desc">${item.description}</p>
          <div class="product-pricing-row">
            <span class="price-main">${formattedPrice}</span>
            <span class="price-alt">${secondaryPrice}</span>
          </div>
          <div class="product-action-row">
            <button class="btn-card-action btn-details-card" onclick="openProductModal('${item.id}')">
              Details
            </button>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn-card-action btn-wa-card" onclick="trackProductEnquiry('${item.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function handleDirectWhatsAppOrder(waLink, event) {
  if (event) {
    event.stopPropagation();
  }
  trackProductEnquiry('direct-whatsapp-order');
  window.open(waLink, '_blank');
}

function handleBeautyWhatsAppBooking(serviceName, event) {
  if (event) {
    event.stopPropagation();
  }
  const cleanId = (serviceName || 'service').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  trackProductEnquiry(`beauty-booking-${cleanId}`);
  const msg = encodeURIComponent(
    `Hello TP Global Beauty Studio, I would like to book an appointment for: "${serviceName}". Please share available slots, location, and preparation details.`
  );
  window.open(`https://wa.me/${CONTACT_INFO.nigeriaWhatsApp}?text=${msg}`, '_blank');
}

// ========================================================
// 8. PRODUCT MODAL (QUICK VIEW & SIZE SELECTOR)
// ========================================================
function openProductModal(productId) {
  const product = FASHION_CATALOGUE.find(p => p.id === productId);
  if (!product) return;

  APP_STATE.selectedProduct = product;
  renderModalProduct(product);

  const modal = document.getElementById('productModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderModalProduct(product) {
  const container = document.getElementById('modalProductContent');
  const isDirectOrder = product.noPrice || (product.priceNGN === null && product.priceGBP === null);
  const priceDisplay = formatPrice(product);
  const secondaryDisplay = getSecondaryPrice(product);

  const waMessage = isDirectOrder
    ? encodeURIComponent(
        `Hello TP Stitches, I want to order the "${product.title}" (${product.fabric || 'Luxury Wear'}). Please share available sizing, fitting, and delivery timeline.`
      )
    : encodeURIComponent(
        `Hello TP Stitches, I am enquiring about ${product.title} (${product.fabric}) priced at ${priceDisplay}. I would like to order or arrange a fitting.`
      );
  const waLink = `https://wa.me/${CONTACT_INFO.nigeriaWhatsApp}?text=${waMessage}`;

  container.innerHTML = `
    <div class="modal-img-col">
      <img src="${product.image}" alt="${product.title}" class="modal-product-img">
    </div>
    <div class="modal-details-col">
      <span class="m-detail-fabric">${product.fabric} • ${product.category}</span>
      <h2 class="m-detail-title">${product.title}</h2>
      
      <div class="m-detail-pricing">
        <span class="m-price-ngn ${isDirectOrder ? 'order-highlight' : ''}">${isDirectOrder ? 'Order via WhatsApp' : priceDisplay}</span>
        <span class="m-price-gbp">${isDirectOrder ? 'Direct Custom Order' : (secondaryDisplay ? `(${secondaryDisplay})` : '')}</span>
      </div>

      <p class="m-detail-desc">${product.description}</p>

      <ul class="m-specs-list">
        <li><strong>Gender:</strong> <span>${product.gender}</span></li>
        <li><strong>Fabric:</strong> <span>${product.fabric}</span></li>
        <li><strong>Sizing:</strong> <span>Standard S, M, L, XL, XXL or Bespoke Tailored to Fit</span></li>
        <li><strong>Fulfillment:</strong> <span>Handmade in Lagos, delivery across Nigeria & Worldwide (UK, US, Diaspora)</span></li>
      </ul>

      <div class="m-cta-group">
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" onclick="trackProductEnquiry('${product.id}')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          ${isDirectOrder ? 'Order Directly on WhatsApp' : 'Enquire &amp; Order on WhatsApp'}
        </a>
        <button class="btn btn-outline" style="color: var(--text-main); border-color: var(--border-color);" onclick="closeProductModal()">
          Continue Browsing
        </button>
      </div>
    </div>
  `;
}

function closeProductModal(event) {
  if (event && event.target !== event.currentTarget && !event.target.classList.contains('modal-close-btn')) {
    return;
  }
  const modal = document.getElementById('productModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  APP_STATE.selectedProduct = null;
}

function trackProductEnquiry(productId) {
  const product = FASHION_CATALOGUE.find(p => p.id === productId);
  if (!product) return;

  // Record an automated intent lead into the dashboard
  createLead({
    division: 'TP Stitches',
    leadType: 'Product Enquiry',
    customerName: 'WhatsApp Visitor',
    phone: 'Direct via WhatsApp',
    email: 'Pending WhatsApp Contact',
    country: 'Nigeria / Diaspora',
    serviceOrItem: product.title,
    notes: `Customer initiated WhatsApp enquiry for ${product.title} (${product.fabric}). Price: ${formatPrice(product)}`,
    status: 'New'
  });
}

// ========================================================
// 9. SERVICE INTAKE & FORM HANDLERS (PRD SECTIONS 10, 11, 12, 13)
// ========================================================

// Division B: Travels & Tours Submit Handler
function handleTravelSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const lead = {
    division: 'Travels & Tours',
    leadType: 'Travel Quote Request',
    customerName: formData.get('fullName'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    country: formData.get('destination')?.includes('Cape Verde') ? 'Cape Verde Focus' : 'International',
    serviceOrItem: formData.get('service'),
    notes: `Route: ${formData.get('departure')} -> ${formData.get('destination')}. Dates: ${formData.get('dates')}. Travellers: ${formData.get('passengers')}. Requests: ${formData.get('message') || 'None'}`,
    status: 'New'
  };

  createLead(lead);
  form.reset();

  showToast('Travel Request Submitted', 'Our travel coordinators are reviewing your itinerary and will reach out shortly.');

  // Pre-fill WhatsApp link option
  const waText = encodeURIComponent(
    `Hello TP Global Travels & Tours, I have submitted a travel request for ${lead.serviceOrItem} (${lead.customerName}). Please find my details on file.`
  );
  window.open(`https://wa.me/${CONTACT_INFO.nigeriaWhatsApp}?text=${waText}`, '_blank');
}

function selectTravelDestination(destName) {
  const destInput = document.getElementById('t_destination');
  if (destInput) {
    destInput.value = destName;
  }
  const formCard = document.getElementById('travelFormContainer');
  if (formCard) {
    formCard.scrollIntoView({ behavior: 'smooth' });
  }
  showToast('Destination Selected', `Updated destination to "${destName}".`);
}

// Division C: Event Planner Submit Handler
function handleEventSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const selectedServices = Array.from(form.querySelectorAll('input[name="services"]:checked')).map(cb => cb.value).join(', ');

  const lead = {
    division: 'Event Planner',
    leadType: 'Event Planning Brief',
    customerName: formData.get('hostName'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    country: formData.get('location')?.toLowerCase().includes('cape verde') ? 'Cape Verde' : 'Nigeria',
    serviceOrItem: `${formData.get('eventType')} (${formData.get('guestCount')} Guests)`,
    notes: `Date: ${formData.get('eventDate') || 'TBD'}. Location: ${formData.get('location')}. Services: ${selectedServices}. Budget: ${formData.get('budgetRange')}`,
    status: 'New'
  };

  createLead(lead);
  form.reset();
  updateGuestDisplay(150);

  showToast('Event Brief Received', 'Thank you! We are compiling a customized event coordination proposal for you.');

  const waText = encodeURIComponent(
    `Hello TP Global Event Planner, I have submitted an event brief for my upcoming ${formData.get('eventType')}. Host: ${lead.customerName}.`
  );
  window.open(`https://wa.me/${CONTACT_INFO.nigeriaWhatsApp}?text=${waText}`, '_blank');
}

function updateGuestDisplay(val) {
  const el = document.getElementById('guestCountDisplay');
  if (el) {
    el.innerText = `${val} Guests`;
  }
}

// ========================================================
// BEAUTY STUDIO DATA & VERIFIED TREATMENT RATE CARD ENGINE
// (PRD & WhatsApp Updates: Manicure, Pedicure, Makeup, Massage & Special)
// ========================================================
const BEAUTY_SERVICES_DATA = [
  // MANICURE & PEDICURE
  {
    id: 'bs-01',
    category: 'mani-pedi',
    categoryName: 'Manicure & Pedicure',
    title: 'Standard Manicure',
    tier: 'standard',
    priceCVE: '800–1,200 CVE',
    priceEUR: '€7.26–10.88',
    priceGBP: '£6.05–9.07',
    description: 'Precision nail trimming, shaping, cuticle care, conditioning hand lotion, and natural shine buff.'
  },
  {
    id: 'bs-02',
    category: 'mani-pedi',
    categoryName: 'Manicure & Pedicure',
    title: 'Exclusive Manicure',
    tier: 'exclusive',
    priceCVE: '2,000–3,500 CVE',
    priceEUR: '€18.14–31.74',
    priceGBP: '£15.12–26.47',
    description: 'Deluxe paraffin treatment, gentle exfoliating scrub, extended acupressure hand massage, and protective gel finish.'
  },
  {
    id: 'bs-03',
    category: 'mani-pedi',
    categoryName: 'Manicure & Pedicure',
    title: 'Standard Pedicure',
    tier: 'standard',
    priceCVE: '1,000–1,500 CVE',
    priceEUR: '€9.07–13.60',
    priceGBP: '£7.56–11.34',
    description: 'Refreshing aromatic foot soak, gentle scrub, nail shaping, cuticle therapy, and moisturising foot massage.'
  },
  {
    id: 'bs-04',
    category: 'mani-pedi',
    categoryName: 'Manicure & Pedicure',
    title: 'Exclusive Pedicure',
    tier: 'exclusive',
    priceCVE: '2,500–4,000 CVE',
    priceEUR: '€22.67–36.28',
    priceGBP: '£18.91–30.25',
    description: 'Deep detox foot soak, invigorating sugar scrub, intensive callus therapy, hydrating mask, hot towels, and extended massage.'
  },
  {
    id: 'bs-05',
    category: 'mani-pedi',
    categoryName: 'Manicure & Pedicure',
    title: 'Standard Combo (Mani + Pedi)',
    tier: 'standard',
    priceCVE: '1,800–2,500 CVE',
    priceEUR: '€16.32–22.67',
    priceGBP: '£13.61–18.91',
    description: 'Complete simultaneous grooming pairing our standard manicure and standard pedicure in a synchronized relaxing session.'
  },
  {
    id: 'bs-06',
    category: 'mani-pedi',
    categoryName: 'Manicure & Pedicure',
    title: 'Exclusive Combo (Mani + Pedi)',
    tier: 'exclusive',
    priceCVE: '4,500–7,000 CVE',
    priceEUR: '€40.81–63.48',
    priceGBP: '£34.03–52.94',
    description: 'The premier luxury treatment: deluxe paraffin hands, hot towel feet, deep aromatherapy massage, and salon-grade topcoat.'
  },

  // MAKEUP SERVICES
  {
    id: 'bs-07',
    category: 'makeup',
    categoryName: 'Makeup Artistry',
    title: 'Standard Everyday Makeup',
    tier: 'standard',
    priceCVE: '2,500 CVE',
    priceEUR: '€22.67',
    priceGBP: '£18.91',
    description: 'Clean, radiant lightweight application designed for daytime meetings, business appearances, and effortless elegance.'
  },
  {
    id: 'bs-08',
    category: 'makeup',
    categoryName: 'Makeup Artistry',
    title: 'Exclusive Everyday Makeup',
    tier: 'exclusive',
    priceCVE: '4,000 CVE',
    priceEUR: '€36.28',
    priceGBP: '£30.25',
    description: 'Elevated daytime radiance using luxury foundation blends, subtle sculpting, brow framing, and setting mist for all-day perfection.'
  },
  {
    id: 'bs-09',
    category: 'makeup',
    categoryName: 'Makeup Artistry',
    title: 'Standard Party Makeup',
    tier: 'standard',
    priceCVE: '3,500 CVE',
    priceEUR: '€31.74',
    priceGBP: '£26.47',
    description: 'Glamorous, long-wearing party look with defined eyes, customized lash placement, and photogenic contouring.'
  },
  {
    id: 'bs-10',
    category: 'makeup',
    categoryName: 'Makeup Artistry',
    title: 'Exclusive Party Makeup',
    tier: 'exclusive',
    priceCVE: '5,500 CVE',
    priceEUR: '€49.88',
    priceGBP: '£41.59',
    description: 'Red-carpet intensity featuring HD airbrush finish, shimmer accents, bespoke lashes, and camera-proof longevity.'
  },
  {
    id: 'bs-11',
    category: 'makeup',
    categoryName: 'Makeup Artistry',
    title: 'Standard Event Makeup',
    tier: 'standard',
    priceCVE: '4,000 CVE',
    priceEUR: '€36.28',
    priceGBP: '£30.25',
    description: 'High-definition coverage tailored for gala dinners, conferences, family celebrations, and stage appearances.'
  },
  {
    id: 'bs-12',
    category: 'makeup',
    categoryName: 'Makeup Artistry',
    title: 'Exclusive Event Makeup',
    tier: 'exclusive',
    priceCVE: '6,500 CVE',
    priceEUR: '€58.95',
    priceGBP: '£49.15',
    description: 'VIP gala transformation including skin prep facial boost, waterproof application, custom pigments, and luxury touch-up kit.'
  },
  {
    id: 'bs-13',
    category: 'makeup',
    categoryName: 'Makeup Artistry',
    title: 'Standard Luxury / Glam Makeup',
    tier: 'standard',
    priceCVE: '5,000 CVE',
    priceEUR: '€45.35',
    priceGBP: '£37.81',
    description: 'Full Hollywood soft-glam, seamless cut crease, defined cheekbone highlights, and velvety matte or gloss lip contour.'
  },
  {
    id: 'bs-14',
    category: 'makeup',
    categoryName: 'Makeup Artistry',
    title: 'Exclusive Luxury / Glam Makeup',
    tier: 'exclusive',
    priceCVE: '8,000 CVE',
    priceEUR: '€72.55',
    priceGBP: '£60.50',
    description: 'Masterclass high-fashion glam by our lead artist with luxury skincare prep, couture lashes, and lighting-adaptive complexion.'
  },
  {
    id: 'bs-15',
    category: 'makeup',
    categoryName: 'Makeup Artistry',
    title: 'Standard Bridal Makeup',
    tier: 'standard',
    priceCVE: '7,000 CVE',
    priceEUR: '€63.48',
    priceGBP: '£52.94',
    description: 'Timeless, romantic bridal aesthetic formulated to withstand emotion, warmth, and high-resolution flash photography.'
  },
  {
    id: 'bs-16',
    category: 'makeup',
    categoryName: 'Makeup Artistry',
    title: 'Exclusive Bridal Makeup',
    tier: 'exclusive',
    priceCVE: '12,000 CVE',
    priceEUR: '€108.83',
    priceGBP: '£90.75',
    description: 'Couture bridal package: personal consultation, luxury skin prep ritual, bespoke lash styling, veil setting, and artist touch-up kit.'
  },

  // MASSAGE SERVICES
  {
    id: 'bs-17',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Standard 30 Minutes Massage',
    tier: 'standard',
    priceCVE: '2,000 CVE',
    priceEUR: '€18.14',
    priceGBP: '£15.12',
    description: 'Targeted neck, shoulder, and upper back express massage for fast desk tension and travel fatigue relief.'
  },
  {
    id: 'bs-18',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Exclusive 30 Minutes Massage',
    tier: 'exclusive',
    priceCVE: '3,500 CVE',
    priceEUR: '€31.74',
    priceGBP: '£26.47',
    description: 'Concentrated deep-tissue trigger point therapy with warming herbal balm and hot towel finish.'
  },
  {
    id: 'bs-19',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Standard 45 Minutes Massage',
    tier: 'standard',
    priceCVE: '2,500 CVE',
    priceEUR: '€22.67',
    priceGBP: '£18.91',
    description: 'Focused relaxation therapy covering upper body and legs to restore circulation and muscle flexibility.'
  },
  {
    id: 'bs-20',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Exclusive 45 Minutes Massage',
    tier: 'exclusive',
    priceCVE: '4,500 CVE',
    priceEUR: '€40.81',
    priceGBP: '£34.03',
    description: 'Therapeutic muscle recovery with organic botanical essential oils and warm compress soothing.'
  },
  {
    id: 'bs-21',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Standard 60 Minutes Massage',
    tier: 'standard',
    priceCVE: '3,500 CVE',
    priceEUR: '€31.74',
    priceGBP: '£26.47',
    description: 'Full-body Swedish relaxation treatment designed to relieve whole-body stress and induce deep mental calm.'
  },
  {
    id: 'bs-22',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Exclusive 60 Minutes Massage',
    tier: 'exclusive',
    priceCVE: '6,000 CVE',
    priceEUR: '€54.41',
    priceGBP: '£45.37',
    description: 'Signature holistic massage: hot stones, customized pressure, aromatherapy diffusion, and full bodily revitalization.'
  },
  {
    id: 'bs-23',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Standard 90 Minutes Massage',
    tier: 'standard',
    priceCVE: '5,000 CVE',
    priceEUR: '€45.35',
    priceGBP: '£37.81',
    description: 'Extended head-to-toe therapeutic sanctuary allowing every major muscle group to fully unwind.'
  },
  {
    id: 'bs-24',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Exclusive 90 Minutes Massage',
    tier: 'exclusive',
    priceCVE: '8,500 CVE',
    priceEUR: '€77.09',
    priceGBP: '£64.28',
    description: 'Master therapist indulgence: hot volcanic stones, lymphatic drainage, scalp therapy, and deep botanical hydration.'
  },
  {
    id: 'bs-25',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Standard Hot Stone Massage',
    tier: 'standard',
    priceCVE: '4,500 CVE',
    priceEUR: '€40.81',
    priceGBP: '£34.03',
    description: 'Smooth basalt river stones heated to soothing temperatures to melt chronic back and shoulder tension.'
  },
  {
    id: 'bs-26',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Exclusive Hot Stone Massage',
    tier: 'exclusive',
    priceCVE: '7,000 CVE',
    priceEUR: '€63.48',
    priceGBP: '£52.94',
    description: 'VIP volcanic stone ritual infused with customized lavender and eucalyptus oils, spinal alignment, and thermal compresses.'
  },
  {
    id: 'bs-27',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Standard Couples Massage',
    tier: 'standard',
    priceCVE: '6,000 CVE',
    priceEUR: '€54.41',
    priceGBP: '£45.37',
    description: 'Synchronized dual massage in our private couples suite with soft ambient music and relaxing aromatherapy.'
  },
  {
    id: 'bs-28',
    category: 'massage',
    categoryName: 'Massage & Spa',
    title: 'Exclusive Couples Massage',
    tier: 'exclusive',
    priceCVE: '10,000 CVE',
    priceEUR: '€90.69',
    priceGBP: '£75.62',
    description: 'VIP couples romance package: champagne greeting, hot stone integration, foot soak ritual, and 75 minutes of total harmony.'
  },

  // SPECIALIST & BESPOKE
  {
    id: 'bs-29',
    category: 'custom',
    categoryName: 'Nails & Lashes',
    title: 'Sculpted Acrylics & BIAB Builder Gel',
    tier: 'standard',
    priceCVE: '3,000–5,500 CVE',
    priceEUR: '€27.20–49.90',
    priceGBP: '£22.70–41.60',
    description: 'Custom sculpted nail extensions, French ombré, chrome finish, or hand-painted nail artistry.'
  },
  {
    id: 'bs-30',
    category: 'custom',
    categoryName: 'Nails & Lashes',
    title: 'Custom Lash Technician Artistry',
    tier: 'standard',
    priceCVE: '3,500–6,500 CVE',
    priceEUR: '€31.74–58.95',
    priceGBP: '£26.47–49.15',
    description: 'Classic single-lash, light hybrid, or Russian mega volume sets styled precisely to your eye shape.'
  },
  {
    id: 'bs-31',
    category: 'custom',
    categoryName: 'Special Consultation',
    title: '✨ Special / Bespoke Custom Beauty Service',
    tier: 'special',
    priceCVE: 'Price on Consultation',
    priceEUR: 'Price on Consultation',
    priceGBP: 'Price on Consultation',
    description: 'Unlisted service, bridal entourage, private home call, photoshoot package, or custom combination. Price disclosed after WhatsApp consultation.'
  }
];

function initBeautyRateCard() {
  renderBeautyRateCard();
}

function switchBeautyCurrency(curr) {
  APP_STATE.beautyCurrency = curr;
  document.querySelectorAll('.b-curr-btn').forEach(btn => {
    if (btn.getAttribute('data-bcurr') === curr) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderBeautyRateCard();
  showToast('Beauty Currency Changed', `Displaying treatment rate card in ${curr}.`);
}

function filterBeautyMenu(cat) {
  APP_STATE.beautyCategory = cat;
  document.querySelectorAll('.b-cat-btn').forEach(btn => {
    if (btn.getAttribute('data-bcat') === cat) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderBeautyRateCard();
}

function renderBeautyRateCard() {
  const container = document.getElementById('rateCardContainer');
  if (!container) return;

  const currentCat = APP_STATE.beautyCategory || 'all';
  const curr = APP_STATE.beautyCurrency || 'CVE';

  const filtered = currentCat === 'all'
    ? BEAUTY_SERVICES_DATA
    : BEAUTY_SERVICES_DATA.filter(item => item.category === currentCat);

  container.innerHTML = `
    <div class="rate-card-grid">
      ${filtered.map(item => {
        let priceDisplay = '';
        let altDisplay = '';

        if (item.tier === 'special') {
          priceDisplay = 'Disclosed on Consultation';
          altDisplay = 'Bespoke quote via WhatsApp';
        } else if (curr === 'CVE') {
          priceDisplay = item.priceCVE;
          altDisplay = `${item.priceEUR} • ${item.priceGBP}`;
        } else if (curr === 'EUR') {
          priceDisplay = item.priceEUR;
          altDisplay = `${item.priceCVE} • ${item.priceGBP}`;
        } else {
          priceDisplay = item.priceGBP;
          altDisplay = `${item.priceCVE} • ${item.priceEUR}`;
        }

        const tierClass = item.tier === 'exclusive' ? 'exclusive' : item.tier === 'special' ? 'special' : 'standard';
        const tierLabel = item.tier === 'exclusive' ? 'Exclusive Luxury' : item.tier === 'special' ? '✨ Special' : 'Standard';

        return `
          <div class="rate-item-card">
            <div class="rate-header-row">
              <h4 class="rate-item-title">${item.title}</h4>
              <span class="tier-pill ${tierClass}">${tierLabel}</span>
            </div>
            <div class="rate-cat-tag">${item.categoryName}</div>
            <p style="font-size: 0.8rem; color: #94A3B8; line-height: 1.45; margin-bottom: 14px; flex-grow: 1;">${item.description}</p>
            <div class="rate-footer-row">
              <div class="rate-price-box">
                <span class="rate-main-price">${priceDisplay}</span>
                <span class="rate-alt-price">${altDisplay}</span>
              </div>
              <button type="button" class="btn-book-rate" onclick="selectBeautyServiceFromRate('${item.title}', '${item.tier}')">
                Book This
              </button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function selectBeautyServiceFromRate(serviceTitle, tier) {
  const select = document.getElementById('b_service');
  if (select) {
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(serviceTitle.toLowerCase()) || 
          select.options[i].value.toLowerCase().includes(serviceTitle.toLowerCase())) {
        select.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      if (tier === 'special') {
        select.value = '✨ Special / Bespoke Service (Price Disclosed After Consultation)';
      }
    }
  }

  // Set tier radio
  if (tier === 'exclusive') {
    const radio = document.querySelector('input[name="serviceTier"][value="Exclusive VIP Tier"]');
    if (radio) radio.checked = true;
    toggleSpecialNotice(false);
  } else if (tier === 'special') {
    const radio = document.getElementById('tierSpecialRadio');
    if (radio) radio.checked = true;
    toggleSpecialNotice(true);
  } else {
    const radio = document.querySelector('input[name="serviceTier"][value="Standard Tier (Catalog Rate)"]');
    if (radio) radio.checked = true;
    toggleSpecialNotice(false);
  }

  const formCard = document.getElementById('beautyFormContainer');
  if (formCard) {
    formCard.scrollIntoView({ behavior: 'smooth' });
  }

  showToast('Treatment Selected', `Selected "${serviceTitle}". Select your appointment slot below.`);
}

function selectBeautySpecial() {
  const select = document.getElementById('b_service');
  if (select) {
    select.value = '✨ Special / Bespoke Service (Price Disclosed After Consultation)';
  }
  const specialRadio = document.getElementById('tierSpecialRadio');
  if (specialRadio) {
    specialRadio.checked = true;
  }
  toggleSpecialNotice(true);
  const formCard = document.getElementById('beautyFormContainer');
  if (formCard) {
    formCard.scrollIntoView({ behavior: 'smooth' });
  }
  showToast('Special Consultation', 'Senior therapist will review your bespoke needs and disclose quote via WhatsApp.');
}

function handleBeautyServiceChange(val) {
  if (val && val.includes('Special')) {
    const specialRadio = document.getElementById('tierSpecialRadio');
    if (specialRadio) {
      specialRadio.checked = true;
    }
    toggleSpecialNotice(true);
  } else {
    toggleSpecialNotice(false);
  }
}

function toggleSpecialNotice(isSpecial) {
  const alert = document.getElementById('specialConsultAlert');
  if (alert) {
    if (isSpecial) {
      alert.classList.remove('hidden');
    } else {
      alert.classList.add('hidden');
    }
  }
}

function selectBeautyService(serviceName) {
  const select = document.getElementById('b_service');
  if (select) {
    select.value = serviceName;
  }
  const formCard = document.getElementById('beautyFormContainer');
  if (formCard) {
    formCard.scrollIntoView({ behavior: 'smooth' });
  }
}

// Division D: Beauty Studio Appointment Handler
function handleBeautySubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const selectedService = formData.get('service');
  const serviceTier = formData.get('serviceTier') || 'Standard Tier';
  const isSpecial = (serviceTier && serviceTier.includes('Special')) || (selectedService && selectedService.includes('Special'));

  const lead = {
    division: 'Beauty Studio',
    leadType: isSpecial ? 'Bespoke Beauty Consultation' : 'Studio Appointment Request',
    customerName: formData.get('clientName'),
    phone: formData.get('phone'),
    email: 'Phone/WhatsApp Preferred',
    country: 'Cape Verde & Nigeria',
    serviceOrItem: selectedService,
    notes: `Tier / Preference: ${serviceTier}. Preferred Date: ${formData.get('preferredDate') || 'Flexible'}. Preferred Time: ${formData.get('preferredTime')}. Contact Method: ${formData.get('contactPref')}. Notes: ${formData.get('notes') || 'None'}`,
    status: 'New'
  };

  createLead(lead);
  form.reset();
  toggleSpecialNotice(false);

  showToast('Appointment Request Sent', 'Our studio concierge will contact you via WhatsApp to confirm your appointment.');

  const waText = encodeURIComponent(
    `Hello TP Global Beauty Studio, I submitted an appointment request for: ${lead.serviceOrItem}\n• Preference / Tier: ${serviceTier}\n• Client Name: ${lead.customerName}\n• Date: ${formData.get('preferredDate') || 'Flexible'}\n• Time: ${formData.get('preferredTime')}\n${isSpecial ? '• Note: Special / Bespoke request. Please disclose customized pricing after consultation.' : 'Please confirm available booking slots.'}`
  );
  window.open(`https://wa.me/${CONTACT_INFO.nigeriaWhatsApp}?text=${waText}`, '_blank');
}

// General Contact Form Handler
function handleGeneralContact(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const lead = {
    division: formData.get('division') || 'General Corporate',
    leadType: 'General Enquiry',
    customerName: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    country: 'Nigeria / International',
    serviceOrItem: 'Corporate Outreach',
    notes: formData.get('message'),
    status: 'New'
  };

  createLead(lead);
  form.reset();

  showToast('Message Received', 'Your enquiry has been logged in our executive desk.');
}

// ========================================================
// 10. LEAD PERSISTENCE & ADMIN DASHBOARD ENGINE (PRD SECTION 13 & 14)
// ========================================================
const LEADS_STORAGE_KEY = 'tp_global_leads_v1';

function initLeadsStore() {
  const stored = localStorage.getItem(LEADS_STORAGE_KEY);
  if (stored) {
    try {
      APP_STATE.leads = JSON.parse(stored);
    } catch (e) {
      APP_STATE.leads = getInitialSeedLeads();
      saveLeads();
    }
  } else {
    APP_STATE.leads = getInitialSeedLeads();
    saveLeads();
  }
}

function getInitialSeedLeads() {
  return [
    {
      id: 'LD-9201',
      date: '2026-10-27 11:30',
      division: 'TP Stitches',
      leadType: 'Product Enquiry',
      customerName: 'Kunle Adeleke',
      phone: '+234 803 445 1290',
      email: 'kunle.adeleke@firm.ng',
      country: 'Nigeria',
      serviceOrItem: 'Men’s Complete Luxury RTW (Italian Linen)',
      notes: 'Interested in bespoke sizing (Chest 42, Waist 34). Delivery required to Victoria Island.',
      status: 'New'
    },
    {
      id: 'LD-9202',
      date: '2026-10-26 16:45',
      division: 'Travels & Tours',
      leadType: 'Travel Quote Request',
      customerName: 'Fatima Al-Hassan',
      phone: '+238 991 2284',
      email: 'fatima@traveldesk.com',
      country: 'Cape Verde',
      serviceOrItem: 'Cape Verde Document Assistance & Hotel',
      notes: 'Family of 4 traveling from Abuja to Praia. Requires entry documentation guidance and airport transfer.',
      status: 'Contacted'
    },
    {
      id: 'LD-9203',
      date: '2026-10-26 14:10',
      division: 'Beauty Studio',
      leadType: 'Appointment Request',
      customerName: 'Zainab Balogun',
      phone: '+234 703 112 4490',
      email: 'zainab.b@lifestyle.com',
      country: 'Nigeria',
      serviceOrItem: 'Lash Technician Artistry + Nail Services',
      notes: 'Requested Friday 2:00 PM slot for wedding guest preparation.',
      status: 'Quoted'
    }
  ];
}

function saveLeads() {
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(APP_STATE.leads));
  updateLeadCounters();
}

function createLead(data) {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10) + ' ' + now.toTimeString().slice(0, 5);
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);

  const newLead = {
    id: `LD-${randomSuffix}`,
    date: dateStr,
    division: data.division,
    leadType: data.leadType,
    customerName: data.customerName,
    phone: data.phone,
    email: data.email,
    country: data.country || 'Nigeria',
    serviceOrItem: data.serviceOrItem,
    notes: data.notes || '',
    status: data.status || 'New'
  };

  APP_STATE.leads.unshift(newLead);
  saveLeads();
  renderAdminLeads();
  return newLead;
}

function updateLeadCounters() {
  const total = APP_STATE.leads.length;
  const newCount = APP_STATE.leads.filter(l => l.status === 'New').length;
  const fashionCount = APP_STATE.leads.filter(l => l.division === 'TP Stitches').length;
  const serviceCount = APP_STATE.leads.filter(l => l.division !== 'TP Stitches').length;

  const badgeEl = document.getElementById('unreadLeadBadge');
  const badgeMob = document.getElementById('unreadLeadBadgeMob');
  if (badgeEl) {
    badgeEl.innerText = newCount;
    badgeEl.style.display = newCount > 0 ? 'inline-block' : 'none';
  }
  if (badgeMob) {
    badgeMob.innerText = newCount;
    badgeMob.style.display = newCount > 0 ? 'inline-block' : 'none';
  }

  const kpiTotal = document.getElementById('kpiTotalLeads');
  const kpiNew = document.getElementById('kpiNewLeads');
  const kpiFashion = document.getElementById('kpiFashionLeads');
  const kpiService = document.getElementById('kpiServiceLeads');

  if (kpiTotal) kpiTotal.innerText = total;
  if (kpiNew) kpiNew.innerText = newCount;
  if (kpiFashion) kpiFashion.innerText = fashionCount;
  if (kpiService) kpiService.innerText = serviceCount;
}

function renderAdminLeads() {
  const tbody = document.getElementById('adminLeadsTableBody');
  const emptyEl = document.getElementById('adminTableEmpty');
  const badgeEl = document.getElementById('leadCountBadge');

  if (!tbody) return;

  const divFilter = document.getElementById('adminDivisionFilter')?.value || 'All';
  const statusFilter = document.getElementById('adminStatusFilter')?.value || 'All';

  const filtered = APP_STATE.leads.filter(l => {
    if (divFilter !== 'All' && l.division !== divFilter) return false;
    if (statusFilter !== 'All' && l.status !== statusFilter) return false;
    return true;
  });

  if (badgeEl) {
    badgeEl.innerText = `Showing ${filtered.length} of ${APP_STATE.leads.length} leads`;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    if (emptyEl) emptyEl.classList.remove('hidden');
    return;
  }

  if (emptyEl) emptyEl.classList.add('hidden');

  tbody.innerHTML = filtered.map(l => {
    const divClass = l.division.toLowerCase().includes('stitches') ? 'stitches' :
                     l.division.toLowerCase().includes('travel') ? 'travels' :
                     l.division.toLowerCase().includes('event') ? 'events' :
                     l.division.toLowerCase().includes('beauty') ? 'beauty' : 'general';

    const statusClass = `status-${l.status.toLowerCase()}`;

    return `
      <tr>
        <td>
          <span class="lead-id">${l.id}</span>
          <span class="lead-date">${l.date}</span>
        </td>
        <td>
          <span class="badge-div ${divClass}">${l.division}</span>
        </td>
        <td>
          <strong>${l.customerName}</strong><br>
          <small style="color: var(--text-muted);">${l.leadType}</small>
        </td>
        <td>
          <a href="tel:${l.phone}" style="font-weight: 600;">${l.phone}</a><br>
          <small style="color: var(--text-light);">${l.email}</small>
        </td>
        <td>
          <strong>${l.serviceOrItem}</strong><br>
          <small style="color: var(--text-muted);">${l.notes ? l.notes.slice(0, 50) + '...' : ''}</small>
        </td>
        <td>
          <select class="status-badge ${statusClass}" onchange="changeLeadStatus('${l.id}', this.value)" style="border: 1px solid var(--border-color); outline: none; cursor: pointer; padding: 4px 8px; border-radius: var(--radius-full);">
            <option value="New" ${l.status === 'New' ? 'selected' : ''}>New</option>
            <option value="Contacted" ${l.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
            <option value="Quoted" ${l.status === 'Quoted' ? 'selected' : ''}>Quoted</option>
            <option value="Won" ${l.status === 'Won' ? 'selected' : ''}>Won</option>
            <option value="Closed" ${l.status === 'Closed' ? 'selected' : ''}>Closed</option>
          </select>
        </td>
        <td>
          <div style="display: flex; gap: 6px;">
            <button class="table-action-btn" title="View Full Details" onclick="viewLeadDetails('${l.id}')">View</button>
            <a href="https://wa.me/${l.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(l.customerName)},%20this%20is%20TP%20Global%20Services%20following%20up%20on%20your%20${encodeURIComponent(l.division)}%20enquiry." target="_blank" rel="noopener noreferrer" class="table-action-btn" style="color: #25D366;" title="Reply on WhatsApp">WA</a>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function changeLeadStatus(id, newStatus) {
  const lead = APP_STATE.leads.find(l => l.id === id);
  if (lead) {
    lead.status = newStatus;
    saveLeads();
    renderAdminLeads();
    showToast('Status Updated', `Lead ${id} marked as ${newStatus}.`);
  }
}

function viewLeadDetails(id) {
  const lead = APP_STATE.leads.find(l => l.id === id);
  if (!lead) return;

  alert(
    `LEAD DETAILS (${lead.id})\n\n` +
    `Division: ${lead.division}\n` +
    `Type: ${lead.leadType}\n` +
    `Customer: ${lead.customerName}\n` +
    `Phone: ${lead.phone}\n` +
    `Email: ${lead.email}\n` +
    `Item/Service: ${lead.serviceOrItem}\n` +
    `Date: ${lead.date}\n` +
    `Status: ${lead.status}\n\n` +
    `Notes / Requirements:\n${lead.notes}`
  );
}

function seedSampleLead() {
  const randomDivs = [
    { div: 'TP Stitches', type: 'Product Enquiry', item: 'Royal Grand Agbada 3-Piece Set', name: 'Alhaji Sanusi Dantata' },
    { div: 'Travels & Tours', type: 'Travel Quote Request', item: 'Praia Beach Vacation + Hotel', name: 'Bolanle Williams' },
    { div: 'Event Planner', type: 'Event Planning Brief', item: 'Silver Jubilee Celebration (300 Guests)', name: 'Barrister Nkem Opara' },
    { div: 'Beauty Studio', type: 'Appointment Request', item: 'Glamour Bridal Makeup + Spa Pedicure', name: 'Dr. Halima Bello' }
  ];

  const pick = randomDivs[Math.floor(Math.random() * randomDivs.length)];

  createLead({
    division: pick.div,
    leadType: pick.type,
    customerName: pick.name,
    phone: '+234 809 ' + Math.floor(1000000 + Math.random() * 9000000),
    email: pick.name.toLowerCase().replace(/[^a-z]/g, '') + '@gmail.com',
    country: 'Nigeria',
    serviceOrItem: pick.item,
    notes: 'Simulated customer inquiry created for dashboard verification and testing.',
    status: 'New'
  });

  showToast('Simulated Lead Generated', `Captured new lead from ${pick.name} for ${pick.div}.`);
}

function exportLeadsToCSV() {
  if (APP_STATE.leads.length === 0) {
    showToast('No Leads to Export', 'There are currently no recorded customer inquiries.');
    return;
  }

  const headers = ['Lead ID', 'Date', 'Division', 'Lead Type', 'Customer Name', 'Phone', 'Email', 'Country', 'Service/Item', 'Status', 'Notes'];
  
  const csvRows = [headers.join(',')];

  APP_STATE.leads.forEach(l => {
    const row = [
      `"${l.id}"`,
      `"${l.date}"`,
      `"${l.division}"`,
      `"${l.leadType}"`,
      `"${l.customerName.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.country}"`,
      `"${l.serviceOrItem.replace(/"/g, '""')}"`,
      `"${l.status}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`
    ];
    csvRows.push(row.join(','));
  });

  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `TP_Global_Leads_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('Export Complete', 'Downloaded leads CSV file successfully.');
}

// ========================================================
// 11. TOAST NOTIFICATION UTILITY
// ========================================================
function showToast(title, message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="pulse-dot" style="margin-top: 5px;"></span>
    <div class="toast-body">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 4000);
}
