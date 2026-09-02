// Shared Project Data and Client Multi-Page Router for Karishma Kumari Portfolio
const projectsData = [
  {
    id: "kuchuu-puchuu",
    name: "Kuchuu Puchuu — Chai & Bites",
    category: "Client / Business Website",
    categoryType: "sold",
    statusText: "SOLD • DELIVERED",
    statusClass: "status-sold",
    gridClass: "featured-wide",
    url: "https://kuchuu-puchuu-chai-bites.ai.studio/",
    ctaText: "VIEW LIVE WEBSITE →",
    image: "images/kuchuu_chai_concept_1788340999750.jpg",
    conceptType: "Client Delivered Business Website",
    shortDesc: "A custom commercial website created and delivered for an Indian roadside chai and food business, focused on menu presentation, local discoverability and customer inquiries.",
    businessContext: "Local food venture in Delhi NCR needing to expand beyond walk-in patrons by giving customers an easy way to browse snacks and chai varieties, request bulk orders, and find location directions.",
    solution: "Built a warm editorial digital storefront with mobile-first menu discovery, structured pricing, location map pin, and an instant WhatsApp ordering flow.",
    features: [
      "Custom business website architecture",
      "Mobile-optimized menu showcase",
      "Direct WhatsApp customer ordering/enquiry",
      "Local business details & operating hours",
      "Street chai food culture branding identity",
      "Instant mobile loading speed"
    ],
    detailsNote: "Sold and delivered as a live business website for the client, driving real local inquiries and WhatsApp orders."
  },
  {
    id: "lumiere",
    name: "Lumière Beauty Studio",
    category: "Salon & Beauty Template",
    categoryType: "template",
    statusText: "WEBSITE TEMPLATE",
    statusClass: "status-template",
    gridClass: "medium-tall",
    url: "https://karishmakumaritk-cpu.github.io/Selon-templet-1/",
    ctaText: "VIEW DEMO →",
    image: "images/lumiere_salon_concept_1788341026422.jpg",
    conceptType: "Premium Indian Salon & Aesthetics Concept",
    shortDesc: "Premium salon and beauty studio concept crafted for hair stylists, makeup artists, and aesthetic clinics with complete booking flow.",
    businessContext: "Salon and aesthetic clinics often lose premium appointments when relying solely on social media DMs without a structured service rate card or direct booking mechanism.",
    solution: "Designed an editorial aesthetic layout featuring categorized beauty treatments, stylist credentials, client reviews, and direct WhatsApp appointment booking.",
    features: [
      "Editorial salon aesthetic & typography",
      "Interactive treatment service menu",
      "Direct appointment & WhatsApp booking CTA",
      "High-converting lookbook gallery",
      "Fully responsive mobile layout",
      "Ready-to-deploy client structure"
    ],
    detailsNote: "Website Template / Commercial Product available for customization and rapid 3–5 day deployment for salon & beauty studio owners."
  },
  {
    id: "noire",
    name: "NOIRÉ",
    category: "Luxury Salon Template",
    categoryType: "template",
    statusText: "WEBSITE TEMPLATE",
    statusClass: "status-template",
    gridClass: "medium-standard",
    url: "https://karishmakumaritk-cpu.github.io/Noire-salon-template-3/",
    ctaText: "VIEW DEMO →",
    image: "images/noire_luxury_concept_1788341083049.jpg",
    conceptType: "Dark Luxury Wellness & Spa Concept",
    shortDesc: "Elegant modern salon and luxury wellness brand website concept featuring a high-contrast dark aesthetic and boutique presentation.",
    businessContext: "Boutique wellness centers and luxury spas require high visual fidelity and sensory atmosphere to justify premium service pricing.",
    solution: "Engineered a dark luxury visual architecture with gold accent typography, transparent treatment pricing, stylist profiles, and one-tap consultation booking.",
    features: [
      "Sophisticated dark luxury palette",
      "Treatment list with pricing breakdown",
      "Stylist team profile showcase",
      "One-click WhatsApp booking integration",
      "Client testimonial showcase ready",
      "Seamless responsive navigation"
    ],
    detailsNote: "Website Template / Commercial Product designed specifically for high-end boutique salons and luxury spas."
  },
  {
    id: "savora",
    name: "SAVORA — Modern Kitchen & Dining",
    category: "Restaurant Template",
    categoryType: "template",
    statusText: "WEBSITE TEMPLATE",
    statusClass: "status-template",
    gridClass: "wide-landscape",
    url: "https://karishmakumaritk-cpu.github.io/restaurant-01/",
    ctaText: "VIEW DEMO →",
    image: "images/savora_dining_concept_1788341044554.jpg",
    conceptType: "Modern Dining & Culinary Hospitality Concept",
    shortDesc: "Modern restaurant website concept designed for food businesses, fine dining venues, bistros, and culinary establishments.",
    businessContext: "Independent restaurants and fine-dining eateries need to capture direct table reservations and takeaway orders without high 3rd-party marketplace commissions.",
    solution: "Created a full-featured dining website with mobile digital food menu, chef narrative, table reservation trigger, and direct WhatsApp takeaway channel.",
    features: [
      "Comprehensive digital food menu",
      "Online table reservation system CTA",
      "Chef story & culinary philosophy section",
      "High-definition food gallery layout",
      "WhatsApp ordering and inquiry links",
      "Google Maps integration friendly"
    ],
    detailsNote: "Website Template / Commercial Product ready to brand with restaurant menus, photography, and booking channels in 3–5 days."
  },
  {
    id: "restaurant-02",
    name: "Restaurant Website — Template 02",
    category: "Restaurant Template",
    categoryType: "template",
    statusText: "WEBSITE TEMPLATE",
    statusClass: "status-template",
    gridClass: "medium-standard",
    url: "https://karishmakumaritk-cpu.github.io/restaurant-02/",
    ctaText: "VIEW DEMO →",
    image: "images/rest2_cafe_concept_1788341129457.jpg",
    conceptType: "Fast-Casual Urban Eatery Concept",
    shortDesc: "Alternative modern restaurant concept tailored for fast-casual dining, cafés, and urban eateries seeking clean visual layout.",
    businessContext: "Cafés and quick-service food outlets need an ultra-fast, mobile-friendly landing experience optimized for patrons browsing on Instagram or Google Maps.",
    solution: "Implemented quick-scan menu cards, combo promotion banners, one-tap call and WhatsApp ordering buttons, and clear open hours.",
    features: [
      "Quick-scan categorized food items",
      "Special offers & combo banners",
      "Direct phone and WhatsApp ordering",
      "Location and operating hours highlight",
      "Lightweight performance architecture",
      "Mobile touch-friendly interactions"
    ],
    detailsNote: "Website Template / Commercial Product built for cafés, cloud kitchens, and neighborhood restaurants."
  },
  {
    id: "maison-belle",
    name: "Maison Belle Modern Beauty Lounge",
    category: "Beauty / Salon Template",
    categoryType: "template",
    statusText: "WEBSITE TEMPLATE",
    statusClass: "status-template",
    gridClass: "medium-standard",
    url: "https://maison-belle-modern-beauty-lounge.ai.studio",
    ctaText: "VIEW DEMO →",
    image: "images/maison_lounge_concept_1788341114755.jpg",
    conceptType: "Chic Skincare & Lounge Concept",
    shortDesc: "Modern beauty lounge concept highlighting clean aesthetic presentation, premium service cards and seamless appointment inquiry.",
    businessContext: "Modern skincare lounges and aesthetic studios require trust-building design and transparent service tiers to turn visitors into repeat clients.",
    solution: "Curated a calm, minimalist aesthetic with structured service packages, consultation inquiry flow, and lookbook gallery.",
    features: [
      "High-end beauty lounge art direction",
      "Curated service tiers and packages",
      "Consultation request lead capture",
      "Gallery grid with clean modal view",
      "Mobile-first responsive styling",
      "Social media integration ready"
    ],
    detailsNote: "Website Template / Commercial Product designed for modern skincare, nail spas, and beauty studios."
  },
  {
    id: "majestic-estates",
    name: "Majestic Estates",
    category: "Real Estate Template",
    categoryType: "template",
    statusText: "WEBSITE TEMPLATE",
    statusClass: "status-template",
    gridClass: "wide-landscape",
    url: "https://karishmakumaritk-cpu.github.io/majestic-estates/",
    ctaText: "VIEW DEMO →",
    image: "images/majestic_realestate_concept_1788341065851.jpg",
    conceptType: "Delhi / NCR Property & Consultant Concept",
    shortDesc: "Premium real estate website concept built for Indian real estate consultants, brokerages, and property developers.",
    businessContext: "Real estate brokers and property developers require high-credibility presentation to convert high-ticket property buyers and rental leads.",
    solution: "Engineered property showcase galleries with specifications, locality guides, virtual tour links, and instant WhatsApp inquiry forms.",
    features: [
      "Buy / Rent / Sell structured flows",
      "Residential & commercial property showcase",
      "Property detail specifications layout",
      "Direct Call & WhatsApp inquiry buttons",
      "Prime locality & neighborhood guides",
      "Full mobile responsive property viewing"
    ],
    detailsNote: "Website Template / Commercial Product created to showcase properties, generate buyer/renter leads, and build developer trust."
  },
  {
    id: "vision-ai-studio",
    name: "Vision AI Studio",
    category: "AI Automation Studio / SaaS",
    categoryType: "team",
    statusText: "TEAM PROJECT • IN DEVELOPMENT",
    statusClass: "status-team",
    gridClass: "wide-landscape",
    url: "https://velision.in/",
    ctaText: "VISIT VISION AI STUDIO →",
    image: null,
    conceptType: "Team AI Automation Studio & Platform",
    shortDesc: "Vision AI Studio is a team-led AI automation studio currently being built to create scalable AI-powered workflows, automation systems and SaaS-based business solutions.",
    businessContext: "Businesses lose substantial daily revenue and hours to repetitive manual lead management, customer support routing, and disparate data silos.",
    solution: "Developing an end-to-end AI automation studio orchestrating multi-step agentic workflows, WhatsApp conversation bots, and voice calling systems.",
    features: [
      "AI workflow & agent orchestration",
      "SaaS subscription & trial architecture",
      "JWT authentication structures",
      "Automated CRM & customer lifecycle flows",
      "Voice AI call agents & WhatsApp bots",
      "Team-led scalable product development"
    ],
    detailsNote: "Team Project — In Development. My role: Founder & AI Architect, leading automation workflows, system logic, and AI integrations."
  },
  {
    id: "miravika",
    name: "MIRAVIKA",
    category: "E-Commerce Business",
    categoryType: "own",
    statusText: "OWN BUSINESS • LIVE",
    statusClass: "status-own",
    gridClass: "medium-tall",
    url: "https://miravika.com/",
    ctaText: "VISIT MIRAVIKA →",
    image: "images/miravika_store_concept_1788341144429.jpg",
    conceptType: "Live Consumer E-Commerce Storefront",
    shortDesc: "MIRAVIKA is my own e-commerce brand, where I work across product presentation, e-commerce operations, branding, and digital commerce.",
    businessContext: "Independent lifestyle and consumer apparel brands face intense marketplace competition without authentic branding, sharp merchandising, and efficient order fulfillment.",
    solution: "Built and actively manage an independent D2C storefront and multi-marketplace operation with customized product cataloging, SEO listings, and order workflows.",
    features: [
      "Live independent digital commerce storefront",
      "Marketplace operations & product listings",
      "Marketplace SEO & visual merchandising",
      "End-to-end customer experience management",
      "Real-world operational inventory workflows",
      "Brand identity & packaging curation"
    ],
    detailsNote: "Own Business — Live. Represents hands-on operational knowledge of running an active consumer e-commerce venture."
  },
  {
    id: "buildy-tools",
    name: "Buildy Tools — Free Excel Automation Tool",
    category: "Digital Product / Excel AI",
    categoryType: "free",
    statusText: "FREE TO USE",
    statusClass: "status-free",
    gridClass: "medium-standard",
    url: "https://buildy-tools.lovable.app",
    ctaText: "TRY IT FREE →",
    image: null,
    conceptType: "Free AI-Powered Data Structuring Utility",
    shortDesc: "A practical Excel automation tool that turns messy copied seller data into structured, usable records with AI-assisted processing. Completely free to use.",
    businessContext: "Online sellers and spreadsheet operators waste hours every week cleaning unstructured, copied raw data to paste into standard seller catalog sheets.",
    solution: "Engineered a zero-friction, browser-based utility that ingests unstructured text, applies smart formatting rules, and delivers clean tabular columns instantly.",
    features: [
      "100% Free digital utility for sellers & operators",
      "Raw copied data → AI parsing → structured rows",
      "Preserves target Excel column arrangements",
      "Eliminates hours of manual data formatting",
      "Clean instant browser-based interface",
      "Built, tested, and published as a live product"
    ],
    detailsNote: "Free to Use digital product. Built to solve repetitive manual data formatting for marketplace sellers."
  }
];

// Helper to determine asset/link base for GitHub Pages vs Root
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/portfolio-site')) {
    return '/portfolio-site';
  }
  return '';
}

// Global Multi-Page Navigation handler
function navigateTo(route) {
  const base = getBasePath();
  let targetUrl;

  if (route === '/' || route === 'home') {
    targetUrl = base ? `${base}/` : '/';
  } else {
    targetUrl = base ? `${base}${route}` : route;
  }

  // Immediately close mobile nav and any backdrops
  closeMobileNav();

  // Scroll to top of viewport
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Perform smooth page transition navigation
  const pageContainer = document.querySelector('.page-view-container');
  if (pageContainer) {
    pageContainer.style.opacity = '0';
    pageContainer.style.transform = 'translateY(-6px)';
    pageContainer.style.transition = 'opacity 180ms ease, transform 180ms ease';
    
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 180);
  } else {
    window.location.href = targetUrl;
  }
}

// Render projects into container
function renderProjects(filter = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => {
        if (filter === "sold") return p.categoryType === "sold";
        if (filter === "template") return p.categoryType === "template";
        if (filter === "own") return p.categoryType === "own";
        if (filter === "free" || filter === "digital") return p.categoryType === "free" || p.id === "buildy-tools";
        if (filter === "automation" || filter === "ai") return p.categoryType === "team" || p.categoryType === "free";
        return true;
      });

  const base = getBasePath();
  const imgPrefix = base ? `${base}/` : '/';

  container.innerHTML = filtered.map(p => {
    const imgSrc = p.image 
      ? (p.image.startsWith('images/') ? imgPrefix + p.image : (p.image.startsWith('/') ? p.image : '/' + p.image))
      : null;

    return `
    <div class="project-card ${p.gridClass}" onclick="openModal('${p.id}')">
      <div class="project-thumb-frame">
        <span class="project-status-tag ${p.statusClass}">${p.statusText}</span>
        ${imgSrc 
          ? `<img src="${imgSrc}" 
                  alt="${p.name}" 
                  class="project-img-cover" 
                  loading="lazy" 
                  onerror="this.onerror=null; this.parentElement.classList.add('has-fallback'); this.style.display='none';" />
             <div class="project-fallback-visual">
               <span class="project-fallback-tag">${p.category}</span>
               <span class="project-fallback-name">${p.name}</span>
             </div>`
          : `<div class="project-visual-abstract">
               <div class="abstract-ring"></div>
               <div class="abstract-core">
                 <span class="abstract-label">${p.category}</span>
                 <span class="abstract-sub">${p.name}</span>
               </div>
             </div>`
        }
      </div>
      <div class="project-card-info">
        <div class="project-card-header">
          <span class="project-cat">${p.category}</span>
          <span class="project-concept-indicator">${p.categoryType === 'sold' ? 'Delivered Site' : (p.categoryType === 'template' ? 'Website Template' : (p.categoryType === 'own' ? 'Own Business' : (p.categoryType === 'team' ? 'Team Project' : 'Free Tool')))}</span>
        </div>
        <h3 class="project-title">${p.name}</h3>
        <p class="project-desc">${p.shortDesc}</p>
        <div class="project-tags">
          ${p.features.slice(0, 3).map(f => `<span class="ptag">${f}</span>`).join('')}
        </div>
        <div class="project-actions">
          <a href="${p.url}" target="_blank" rel="noopener" class="project-link-cta" onclick="event.stopPropagation()">
            ${p.ctaText}
          </a>
          <button class="project-details-btn" type="button">Details &amp; Specs</button>
        </div>
      </div>
    </div>
    `;
  }).join('');
}

function filterProjects(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProjects(filter);
}

function openModal(id) {
  const p = projectsData.find(item => item.id === id);
  if (!p) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-body');
  if (!modal || !content) return;

  const isTemplate = p.categoryType === 'template';
  const whatsappMsg = isTemplate
    ? `Hi Karishma, I would like to customize the ${encodeURIComponent(p.name)} website template for my business.`
    : `Hi Karishma, I saw ${encodeURIComponent(p.name)} on your portfolio and want to discuss a similar project.`;

  content.innerHTML = `
    <span class="modal-badge ${p.statusClass}">${p.statusText}</span>
    <h2 class="modal-title">${p.name}</h2>
    <div class="modal-cat">${p.category} · ${p.detailsNote}</div>
    <p class="modal-desc">${p.shortDesc}</p>
    
    <div class="modal-case-study">
      ${p.businessContext ? `
        <div class="case-study-block">
          <div class="case-study-label">01 / BUSINESS CONTEXT &amp; OPPORTUNITY</div>
          <p class="case-study-text">${p.businessContext}</p>
        </div>
      ` : ''}

      ${p.solution ? `
        <div class="case-study-block">
          <div class="case-study-label">02 / SYSTEM ARCHITECTURE &amp; DESIGN SOLUTION</div>
          <p class="case-study-text">${p.solution}</p>
        </div>
      ` : ''}

      <div class="case-study-block">
        <div class="case-study-label">03 / KEY DELIVERABLES &amp; CORE FEATURES</div>
        <ul class="modal-features-list">
          ${p.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
      </div>

      ${isTemplate ? `
        <div class="template-commercial-box">
          <div class="template-commercial-header">
            <span class="commercial-badge">READY TO DEPLOY • 3–5 DAYS EXPRESS TURNAROUND</span>
            <div class="commercial-title">Commercial Product Inclusions</div>
          </div>
          <p class="commercial-desc">This website template is ready to be completely customized for your specific business. Includes brand color styling, service/menu upload, direct WhatsApp inquiry buttons, mobile-first optimization, and custom domain setup assistance.</p>
        </div>
      ` : ''}
    </div>

    <div class="modal-actions">
      <a href="${p.url}" target="_blank" rel="noopener" class="btn-primary">
        ${p.ctaText}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
      </a>
      <a href="https://wa.me/919818691915?text=${whatsappMsg}" target="_blank" rel="noopener" class="btn-whatsapp">
        ${isTemplate ? 'CUSTOMIZE THIS WEBSITE →' : 'DISCUSS SIMILAR PROJECT'}
      </a>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function toggleMobileNav() {
  const links = document.querySelector('.nav-links');
  const toggleBtn = document.querySelector('.mobile-toggle');
  if (links) {
    const isOpen = links.classList.toggle('mobile-open');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
}

function closeMobileNav() {
  const links = document.querySelector('.nav-links');
  const toggleBtn = document.querySelector('.mobile-toggle');
  if (links) {
    links.classList.remove('mobile-open');
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }
}

function handleInquiry(event) {
  event.preventDefault();
  const name = document.getElementById('inq-name') ? document.getElementById('inq-name').value : '';
  const service = document.getElementById('inq-service') ? document.getElementById('inq-service').value : '';
  const budget = document.getElementById('inq-budget') ? document.getElementById('inq-budget').value : '';
  const message = document.getElementById('inq-message') ? document.getElementById('inq-message').value : '';

  const text = `Hi Karishma, my name is ${name}. I am interested in ${service}${budget ? ' (Budget: ' + budget + ')' : ''}. Details: ${message}`;
  const whatsappUrl = `https://wa.me/919818691915?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank');
}

// DOM Setup
document.addEventListener('DOMContentLoaded', () => {
  // Render projects if grid exists
  if (document.getElementById("projects-grid")) {
    renderProjects('all');
  }

  // Close modal when clicking overlay outside content
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Close modal and mobile nav on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeMobileNav();
    }
  });

  // Close mobile nav when clicking any nav link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  // Highlight active nav item based on current location
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-link-item').forEach(link => {
    const linkRoute = link.getAttribute('data-route') || link.getAttribute('href');
    if (linkRoute && (currentPath === linkRoute || currentPath.endsWith(linkRoute))) {
      link.classList.add('active');
    }
  });

  // Intercept data-nav links to route cleanly
  document.querySelectorAll('a[data-route]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const route = link.getAttribute('data-route');
      navigateTo(route);
    });
  });

  // Initialize image reveal animations
  initImageAnimations();

  // Mount professional AI Chatbot (KAI)
  mountKaiChatbot();
});

/* ==========================================================================
   IMAGE REVEAL & INTERSECTION OBSERVER ANIMATIONS
   ========================================================================== */
function initImageAnimations() {
  const images = document.querySelectorAll('.hero-photo, .project-img-cover, .about-photo, img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          if (entry.target.parentElement && entry.target.parentElement.classList.contains('img-reveal-wrap')) {
            entry.target.parentElement.classList.add('is-revealed');
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px 40px 0px' });

    images.forEach(img => {
      if (img.complete) {
        img.classList.add('is-revealed');
      } else {
        img.addEventListener('load', () => img.classList.add('is-revealed'));
      }
      imgObserver.observe(img);
    });
  } else {
    images.forEach(img => img.classList.add('is-revealed'));
  }
}

/* ==========================================================================
   KAI — PROFESSIONAL AI CHATBOT & KNOWLEDGE ENGINE
   Multilingual (English / Hindi / Hinglish), Safe, Structured & Fast
   ========================================================================== */
function mountKaiChatbot() {
  // Check if chatbot already mounted
  if (document.getElementById('kai-chatbot-root')) return;

  const kaiContainer = document.createElement('div');
  kaiContainer.id = 'kai-chatbot-root';
  kaiContainer.innerHTML = `
    <!-- Floating Trigger Button -->
    <button class="kai-chatbot-btn" id="kai-toggle-btn" aria-label="Open AI Assistant" onclick="toggleKaiChat()">
      <span class="kai-btn-pulse"></span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
      <span>Ask KAI (AI Assistant)</span>
    </button>

    <!-- Chatbot Window Modal -->
    <div class="kai-chatbot-modal" id="kai-modal">
      <div class="kai-header">
        <div class="kai-header-info">
          <div class="kai-avatar">KK</div>
          <div>
            <div class="kai-name">KAI — Studio Assistant</div>
            <div class="kai-status">
              <span class="kai-btn-pulse" style="width:6px;height:6px;"></span>
              Online • Karishma Kumari Studio
            </div>
          </div>
        </div>
        <button class="kai-close-btn" onclick="toggleKaiChat()" aria-label="Close Chat">&times;</button>
      </div>

      <div class="kai-body" id="kai-messages-container">
        <!-- Initial Welcome Message -->
        <div class="kai-message bot">
          <div class="kai-bubble">
            <strong>Namaste &amp; Hello!</strong> I am KAI, Karishma Kumari's AI Studio Assistant.<br><br>
            I can answer questions in <strong>English, Hindi, or Hinglish</strong> regarding:
            <ul style="margin: 0.4rem 0 0.4rem 1.2rem; font-size: 0.82rem; line-height: 1.5;">
              <li>Website Packages (₹2,999 – ₹14,999)</li>
              <li>AI Automation &amp; n8n Workflows</li>
              <li>Delivered Work (Kuchuu Puchuu, MIRAVIKA, Vision AI)</li>
              <li>How to book or start a project</li>
            </ul>
            What can I help you with today?
          </div>
          <div class="kai-time">Just now</div>
          <div class="kai-quick-prompts">
            <button class="kai-quick-btn" onclick="handleQuickPrompt('Website prices kya hain?')">Website prices kya hain?</button>
            <button class="kai-quick-btn" onclick="handleQuickPrompt('What services do you provide?')">Services overview</button>
            <button class="kai-quick-btn" onclick="handleQuickPrompt('Tell me about Kuchuu Puchuu site')">Kuchuu Puchuu case study</button>
            <button class="kai-quick-btn" onclick="handleQuickPrompt('Contact or WhatsApp Karishma')">Direct contact</button>
          </div>
        </div>
      </div>

      <div class="kai-footer">
        <form class="kai-input-row" onsubmit="handleKaiSubmit(event)">
          <input type="text" id="kai-input-field" class="kai-input" placeholder="Type in English or Hindi (e.g. Website cost?)..." autocomplete="off">
          <button type="submit" class="kai-send-btn" aria-label="Send message">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </form>
        <div class="kai-direct-channel-hint">
          Prefer talking directly? <a href="https://wa.me/919818691915?text=Hi%20Karishma,%20I%20have%20an%20inquiry%20regarding%20your%20services." target="_blank" rel="noopener">WhatsApp +91 98186 91915</a>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(kaiContainer);
}

function toggleKaiChat() {
  const modal = document.getElementById('kai-modal');
  if (!modal) return;
  const isActive = modal.classList.toggle('active');
  if (isActive) {
    const input = document.getElementById('kai-input-field');
    if (input) setTimeout(() => input.focus(), 150);
  }
}

function handleQuickPrompt(promptText) {
  const input = document.getElementById('kai-input-field');
  if (input) {
    input.value = promptText;
    processUserKaiMessage(promptText);
    input.value = '';
  }
}

function handleKaiSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('kai-input-field');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  processUserKaiMessage(text);
}

function processUserKaiMessage(text) {
  const container = document.getElementById('kai-messages-container');
  if (!container) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Append user message
  const userDiv = document.createElement('div');
  userDiv.className = 'kai-message user';
  userDiv.innerHTML = `
    <div class="kai-bubble">${escapeHtml(text)}</div>
    <div class="kai-time">${timeStr}</div>
  `;
  container.appendChild(userDiv);
  container.scrollTop = container.scrollHeight;

  // Simulate fast realistic AI thinking (300-500ms)
  setTimeout(() => {
    const replyHtml = generateKaiResponse(text);
    const botDiv = document.createElement('div');
    botDiv.className = 'kai-message bot';
    botDiv.innerHTML = `
      <div class="kai-bubble">${replyHtml}</div>
      <div class="kai-time">${timeStr}</div>
    `;
    container.appendChild(botDiv);
    container.scrollTop = container.scrollHeight;
  }, 350);
}

function generateKaiResponse(rawQuery) {
  const q = rawQuery.toLowerCase();

  // Check language hints (Hindi/Hinglish detection)
  const isHindiOrHinglish = /kya|hai|hain|kaise|kitna|kitne|chahiye|batao|karo|kaun|mujhe|aap|hoga|karega|karni|banao/i.test(q);

  // 1. PRICING & COST QUESTIONS
  if (q.includes('price') || q.includes('cost') || q.includes('rate') || q.includes('kitna') || q.includes('kitne') || q.includes('package') || q.includes('fees') || q.includes('budget')) {
    if (isHindiOrHinglish) {
      return `Karishma ke <strong>Website Development Packages</strong> bilkul transparent hain:<br><br>
      • <strong>Starter Website:</strong> ₹2,999 (Single-page mobile-friendly site, 3 days delivery)<br>
      • <strong>Growth Website (Most Popular):</strong> ₹5,999 (Up to 5 pages, custom branding, WhatsApp order form, 5 days delivery)<br>
      • <strong>Custom / E-Commerce:</strong> ₹9,999 – ₹14,999 (Full digital setup & catalog)<br>
      • <strong>AI Automation Setup:</strong> Starting ₹3,999<br>
      • <strong>Workflow (n8n):</strong> Starting ₹4,999<br><br>
      Aap directly WhatsApp par apna project discuss kar sakte hain: <a href="https://wa.me/919818691915?text=Hi%20Karishma,%20I%20want%20to%20know%20more%20about%20your%20pricing." target="_blank" rel="noopener" style="color:var(--terracotta); font-weight:600;">+91 98186 91915</a>`;
    } else {
      return `Here is the transparent pricing structure for Karishma Kumari's services:<br><br>
      • <strong>Starter Website:</strong> ₹2,999 (1-page fast responsive site, 3-day turnaround)<br>
      • <strong>Growth Website (Most Popular):</strong> ₹5,999 (Up to 5 pages, WhatsApp lead capture, SEO metadata, 5-day delivery)<br>
      • <strong>Custom Business / E-Commerce:</strong> ₹9,999 – ₹14,999 (Turnkey architecture)<br>
      • <strong>AI Chatbots & Agents:</strong> Starting ₹3,999<br>
      • <strong>Workflow Automation (n8n):</strong> Starting ₹4,999<br><br>
      Need a tailored quote? Reach out via WhatsApp: <a href="https://wa.me/919818691915?text=Hi%20Karishma,%20I%20need%20a%20quote." target="_blank" rel="noopener" style="color:var(--terracotta); font-weight:600;">+91 98186 91915</a>.`;
    }
  }

  // 2. KUCHUU PUCHUU OR CLIENT WORK
  if (q.includes('kuchuu') || q.includes('puchuu') || q.includes('chai') || q.includes('sold') || q.includes('client')) {
    if (isHindiOrHinglish) {
      return `<strong>Kuchuu Puchuu — Chai &amp; Bites</strong> ek actual commercial client deliverable hai jise Karishma ne successfully build aur deliver kiya hai.<br><br>
      • <strong>Status:</strong> Sold &amp; Delivered<br>
      • <strong>Purpose:</strong> Roadside Indian chai &amp; snacks business ke liye discoverability, menu showcase aur WhatsApp customer orders.<br>
      • <strong>Live Link:</strong> <a href="https://kuchuu-puchuu-chai-bites.ai.studio/" target="_blank" rel="noopener" style="color:var(--terracotta); font-weight:600;">View Kuchuu Puchuu Site →</a><br><br>
      Kya aap bhi apne restaurant, café ya retail outlet ke liye aisi website chahte hain?`;
    } else {
      return `<strong>Kuchuu Puchuu — Chai &amp; Bites</strong> is a verified client website fully built and delivered by Karishma.<br><br>
      • <strong>Status:</strong> Sold &amp; Delivered<br>
      • <strong>Category:</strong> Food &amp; Hospitality commercial website<br>
      • <strong>Core Features:</strong> Mobile menu, location details, direct customer WhatsApp ordering.<br>
      • <strong>Live Link:</strong> <a href="https://kuchuu-puchuu-chai-bites.ai.studio/" target="_blank" rel="noopener" style="color:var(--terracotta); font-weight:600;">Visit Kuchuu Puchuu Site →</a>`;
    }
  }

  // 3. MIRAVIKA
  if (q.includes('miravika') || q.includes('store') || q.includes('cloth') || q.includes('brand')) {
    return `<strong>MIRAVIKA</strong> is Karishma Kumari's own live e-commerce venture.<br><br>
    • <strong>Role:</strong> Founder &amp; Operations Lead<br>
    • <strong>Scope:</strong> Product cataloging, marketplace operations, branding, and digital commerce pipelines.<br>
    • <strong>Live Store:</strong> <a href="https://miravika.com/" target="_blank" rel="noopener" style="color:var(--terracotta); font-weight:600;">Visit MIRAVIKA.com →</a>`;
  }

  // 4. VISION AI STUDIO / VELISION
  if (q.includes('vision') || q.includes('velision') || q.includes('studio') || q.includes('team')) {
    return `<strong>Vision AI Studio (Velision)</strong> is a team-led AI automation studio co-founded and built by Karishma Kumari.<br><br>
    • <strong>Status:</strong> Active Team Project / Building Scalable SaaS<br>
    • <strong>Focus:</strong> Autonomous AI agents, automated workflow orchestration, and generative business tools.<br>
    • <strong>Website:</strong> <a href="https://velision.in/" target="_blank" rel="noopener" style="color:var(--terracotta); font-weight:600;">velision.in →</a>`;
  }

  // 5. SERVICES OVERVIEW
  if (q.includes('service') || q.includes('kya karte') || q.includes('offer') || q.includes('work') || q.includes('skills')) {
    if (isHindiOrHinglish) {
      return `Karishma 6 core technical &amp; business services offer karti hain:<br><br>
      1. <strong>Website Development:</strong> Fast, mobile-first business websites (3–5 days)<br>
      2. <strong>AI Automation &amp; AI Agents:</strong> Chatbots, WhatsApp auto-responders &amp; voice agents<br>
      3. <strong>Workflow Automation (n8n):</strong> Google Sheets, WhatsApp, CRM and payment gateway syncing<br>
      4. <strong>E-Commerce Management:</strong> Amazon, Flipkart, Meesho cataloging &amp; SEO<br>
      5. <strong>AI Creative Services:</strong> AI product photography, video reels &amp; catalog visuals<br>
      6. <strong>Digital Business Setup:</strong> Complete end-to-end launch for new or offline businesses<br><br>
      Aap <a href="/services" data-route="/services" style="color:var(--terracotta); font-weight:600;">Services Page</a> par sabhi details dekh sakte hain.`;
    } else {
      return `Karishma provides 6 primary digital &amp; automation services:<br><br>
      1. <strong>Website Development:</strong> Salon, restaurant, real estate, and professional sites (₹2,999 – ₹14,999)<br>
      2. <strong>AI Automation &amp; AI Agents:</strong> 24/7 customer support and lead qualification bots<br>
      3. <strong>Workflow Automation (n8n):</strong> End-to-end zero-data-leakage pipeline integrations<br>
      4. <strong>E-Commerce Management:</strong> Cataloging, listing optimization, and order workflows<br>
      5. <strong>AI Creative Services:</strong> Studio-grade AI product photography and marketing assets<br>
      6. <strong>Digital Business Setup:</strong> Turnkey transition from idea to live operations`;
    }
  }

  // 6. CONTACT / PHONE / WHATSAPP / BOOKING
  if (q.includes('contact') || q.includes('call') || q.includes('phone') || q.includes('whatsapp') || q.includes('number') || q.includes('email') || q.includes('reach') || q.includes('baat')) {
    return `You can reach Karishma Kumari directly through any of these verified channels:<br><br>
    • <strong>WhatsApp (Fastest):</strong> <a href="https://wa.me/919818691915?text=Hi%20Karishma,%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener" style="color:#1B8A44; font-weight:700;">+91 98186 91915</a><br>
    • <strong>Phone Call:</strong> <a href="tel:+919818691915" style="color:var(--charcoal); font-weight:600;">+91 98186 91915</a><br>
    • <strong>Email:</strong> <a href="mailto:karishmakumaritk19@gmail.com" style="color:var(--charcoal); font-weight:600;">karishmakumaritk19@gmail.com</a><br>
    • <strong>Location:</strong> New Delhi, India<br>
    • <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/karishma-kumari-1a2b65235/" target="_blank" rel="noopener" style="color:var(--terracotta); font-weight:600;">linkedin.com/in/karishma-kumari</a>`;
  }

  // 7. ABOUT KARISHMA
  if (q.includes('who') || q.includes('about') || q.includes('karishma') || q.includes('founder') || q.includes('experience')) {
    return `<strong>Karishma Kumari</strong> is an <strong>AI Automation Architect</strong> and Founder based in New Delhi, India.<br><br>
    She is the founder of <strong>Vision AI Studio</strong> and e-commerce venture <strong>MIRAVIKA</strong>. She specializes in building practical digital tools, high-conversion business websites, and automated operations that eliminate repetitive friction for businesses.`;
  }

  // DEFAULT CONTEXTUAL FALLBACK
  if (isHindiOrHinglish) {
    return `Dhanyawad! Main aapko Karishma Kumari ki <strong>Website Development (₹2,999 - ₹14,999)</strong>, <strong>AI Automation</strong>, <strong>n8n Workflows</strong>, ya unke live projects jaise <strong>Kuchuu Puchuu</strong> aur <strong>MIRAVIKA</strong> ke baare me bata sakta hoon.<br><br>
    Aap chahein toh directly WhatsApp par baat kar sakte hain: <a href="https://wa.me/919818691915?text=Hi%20Karishma,%20I%20would%20like%20to%20connect." target="_blank" rel="noopener" style="color:var(--terracotta); font-weight:600;">+91 98186 91915</a>.`;
  }

  return `I'm happy to help! I can answer questions about Karishma Kumari's <strong>Website Packages (₹2,999 - ₹14,999)</strong>, <strong>AI Agents &amp; Automation</strong>, or showcase delivered work like <strong>Kuchuu Puchuu</strong> and <strong>MIRAVIKA</strong>.<br><br>
  You can also connect directly with Karishma on WhatsApp: <a href="https://wa.me/919818691915?text=Hi%20Karishma,%20I%20would%20like%20to%20connect." target="_blank" rel="noopener" style="color:var(--terracotta); font-weight:600;">+91 98186 91915</a>.`;
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
