// Shared Project Data for Karishma Kumari Portfolio (7 Verified Projects)
const projectsData = [
  {
    id: "miravika",
    name: "MIRAVIKA — E-Commerce Brand",
    category: "OWN BUSINESS",
    categoryType: "own",
    statusText: "OWN BUSINESS • LIVE D2C",
    statusClass: "status-own",
    gridClass: "featured-wide",
    url: "https://miravika.com/",
    ctaText: "VISIT MIRAVIKA STORE →",
    image: "src/assets/images/miravika_store_concept_1788341144429.jpg",
    conceptType: "Live Consumer E-Commerce Storefront",
    shortDesc: "My own consumer e-commerce brand selling fashion accessories & beauty products, operating an independent D2C storefront and selling across Flipkart, Meesho, and Amazon.",
    businessContext: "Independent fashion & beauty brands face high acquisition costs and marketplace competition without distinct visual merchandising, catalog algorithms, and streamlined fulfillment.",
    solution: "Engineered an independent D2C storefront alongside multi-channel marketplace listings, keyword-optimized schemas, high-converting product pages, and automated order notifications.",
    features: [
      "Live independent digital commerce storefront",
      "Multi-marketplace integration (Flipkart, Meesho, Amazon)",
      "Marketplace SEO & visual cataloging",
      "End-to-end customer order fulfillment",
      "Direct WhatsApp customer inquiry assistance",
      "Omnichannel inventory & packaging workflows"
    ],
    architectureDecisions: "Built an omnichannel architecture pairing an independent D2C web storefront with major marketplaces. Implemented keyword-optimized titles, high-resolution lifestyle photography, and unified inventory tracking to balance marketplace sales with direct brand margins.",
    technicalFeatures: [
      "Mobile-optimized D2C storefront with sub-second checkout",
      "Marketplace search keyword & attribute optimization",
      "WhatsApp direct customer consultation & order link",
      "Dynamic SKU categorization & packaging protocols"
    ],
    detailsNote: "Own Business — Live. Represents hands-on operational experience running an active consumer e-commerce enterprise."
  },
  {
    id: "vision-ai-studio",
    name: "Vision AI Studio / Velision",
    category: "TEAM PROJECT",
    categoryType: "team",
    statusText: "TEAM PROJECT • IN DEVELOPMENT",
    statusClass: "status-team",
    gridClass: "wide-landscape",
    url: "https://velision.in/",
    ctaText: "VISIT VISION AI STUDIO →",
    image: null,
    conceptType: "Team AI Automation Studio & Platform",
    shortDesc: "A team-led AI automation studio currently being developed to create scalable multi-agent workflows, customer inquiry bots, and SaaS-based business solutions.",
    businessContext: "Modern businesses lose substantial revenue and daily operational hours to repetitive manual lead qualification, delayed customer responses, and fragmented data tools.",
    solution: "Developing an end-to-end AI automation studio orchestrating multi-step agentic workflows, n8n webhook pipelines, WhatsApp AI agents, and voice calling systems.",
    features: [
      "AI multi-agent workflow orchestration",
      "SaaS subscription & trial architecture",
      "JWT-authenticated secure API endpoints",
      "Automated CRM & customer lifecycle synchronization",
      "Voice AI agents & 24/7 WhatsApp bots",
      "Modular event-driven architecture"
    ],
    architectureDecisions: "Architected as a decoupled event-driven automation framework. Ingest webhooks (website forms, WhatsApp API) connect to backend n8n worker nodes, with structured JSON payloads ensuring fault-tolerant retries between touchpoints and internal CRMs.",
    technicalFeatures: [
      "Multi-agent workflow pipelines built with n8n and LLM APIs",
      "Natural language customer inquiry classification",
      "Automated two-way WhatsApp conversational agent",
      "CRM synchronization across Google Sheets, Airtable, and Notion"
    ],
    detailsNote: "Team Project — In Development (velision.in). Role: Founder & AI Architect leading automation workflows and system logic."
  },
  {
    id: "kuchuu-puchuu",
    name: "Kuchuu Puchuu — Chai & Bites",
    category: "CLIENT DELIVERY",
    categoryType: "sold",
    statusText: "CLIENT DELIVERY • LIVE",
    statusClass: "status-sold",
    gridClass: "medium-tall",
    url: "https://kuchuu-puchuu-chai-bites.ai.studio/",
    ctaText: "VIEW LIVE WEBSITE →",
    image: "src/assets/images/kuchuu_chai_concept_1788340999750.jpg",
    conceptType: "Client Delivered Business Website",
    shortDesc: "A custom commercial website created and delivered for an Indian roadside chai and street food venture, focused on menu discovery, local search, and direct bulk orders.",
    businessContext: "A local street food business in Delhi NCR needed to expand beyond foot traffic by enabling local customers to browse snacks, request bulk office catering, and find map directions.",
    solution: "Delivered a warm editorial web storefront with mobile-first menu discovery, clear item pricing, map location pin, and direct WhatsApp order dispatch.",
    features: [
      "Custom commercial website architecture",
      "Mobile-optimized menu showcase & categories",
      "Direct WhatsApp customer ordering flow",
      "Local operating hours & Google Maps integration",
      "Street chai culture branding & visual layout",
      "Instant page load speed"
    ],
    architectureDecisions: "Engineered with lightweight semantic HTML5 and CSS for immediate mobile loading. Structured local business schema (Restaurant/FoodEstablishment) for map discovery.",
    technicalFeatures: [
      "WhatsApp ordering pre-filling menu items and quantities",
      "Responsive touch menu navigation for smartphone browsers",
      "Local Business Schema.org JSON-LD microdata"
    ],
    detailsNote: "Client Delivery — Live business website delivering real local customer inquiries and WhatsApp orders."
  },
  {
    id: "lumiere",
    name: "Lumière Beauty Studio",
    category: "CLIENT DELIVERY",
    categoryType: "sold",
    statusText: "CLIENT DELIVERY • LIVE",
    statusClass: "status-sold",
    gridClass: "medium-standard",
    url: "https://karishmakumaritk-cpu.github.io/Selon-templet-1/",
    ctaText: "VIEW LIVE WEBSITE →",
    image: "src/assets/images/lumiere_salon_concept_1788341026422.jpg",
    conceptType: "Premium Salon & Beauty Studio Website",
    shortDesc: "Delivered beauty studio website crafted for hair stylists, makeup artists, and aesthetic clinics featuring editorial art direction and interactive booking.",
    businessContext: "Salons lose premium appointments when relying exclusively on social media DMs without a structured rate card or instant booking channel.",
    solution: "Designed an editorial aesthetic layout with categorized treatment rate cards, stylist credential profiles, client reviews, and direct WhatsApp appointment triggers.",
    features: [
      "Editorial salon aesthetic & typography",
      "Interactive treatment service menu",
      "Direct appointment & WhatsApp booking CTA",
      "High-converting lookbook gallery",
      "Fully responsive mobile layout"
    ],
    architectureDecisions: "Built with responsive flex-grid layouts and CSS variable themes. Optimized image loading and appointment action triggers.",
    technicalFeatures: [
      "Categorized service rate card with price breakdown",
      "One-click WhatsApp consultation & appointment dispatch"
    ],
    detailsNote: "Client Delivery — Customized and deployed for hair, beauty, and aesthetic studio operations."
  },
  {
    id: "majestic-estates",
    name: "Majestic Estates",
    category: "CLIENT DELIVERY",
    categoryType: "sold",
    statusText: "CLIENT DELIVERY • LIVE",
    statusClass: "status-sold",
    gridClass: "wide-landscape",
    url: "https://karishmakumaritk-cpu.github.io/majestic-estates/",
    ctaText: "VIEW LIVE WEBSITE →",
    image: "src/assets/images/majestic_realestate_concept_1788341065851.jpg",
    conceptType: "Real Estate & Property Showcase Website",
    shortDesc: "Delivered real estate showcase platform built for property consultants and developers in Delhi NCR to showcase residential and commercial listings.",
    businessContext: "Property brokers need high-credibility web presentation to capture high-intent property buyers and rental inquiries.",
    solution: "Engineered property showcase galleries with detailed specifications, prime locality guides, virtual tour links, and instant WhatsApp lead capture forms.",
    features: [
      "Buy / Rent / Sell structured property flows",
      "Residential & commercial listing cards",
      "Property detail specifications layout",
      "Direct Call & WhatsApp inquiry buttons",
      "Prime locality & neighborhood guides"
    ],
    architectureDecisions: "Structured property categories with clear visual hierarchy, responsive image sliders, and instant contact CTA bars.",
    technicalFeatures: [
      "Property filter navigation",
      "Pre-filled WhatsApp property inquiry button with property code"
    ],
    detailsNote: "Client Delivery — High-ticket real estate lead acquisition and property showcase website."
  },
  {
    id: "ironvault-fitness",
    name: "IronVault Fitness — Gym & WhatsApp Pipeline",
    category: "TEMPLATE",
    categoryType: "template",
    statusText: "TEMPLATE & AUTOMATION PIPELINE",
    statusClass: "status-template",
    gridClass: "wide-landscape",
    url: "https://karishmakumari143la-droid.github.io/Gym-temp-01/",
    ctaText: "VIEW LIVE DEMO →",
    image: null,
    conceptType: "Dark Athletic Gym Template & Lead Pipeline",
    shortDesc: "A dark-athletic gym website template engineered around a documented WhatsApp lead-automation pipeline and free-trial workout pass conversion engine.",
    businessContext: "Gyms across Indian metros lose prospective members when their websites act as static brochures. Trial bookings require an active, low-friction funnel.",
    solution: "Engineered a high-energy dark-athletic digital engine centered on a '1-Day Free Trial Workout Pass' trigger paired with direct WhatsApp lead routing.",
    features: [
      "Dark premium athletic art direction with conversion-first layout",
      "Free-trial booking funnel with instant WhatsApp lead dispatch",
      "Tiered membership matrix (Monthly, Quarterly, Annual)",
      "Trainer credentials, facility amenities & class schedules",
      "ExerciseGym Schema.org JSON-LD for local map search discoverability"
    ],
    architectureDecisions: "Built with a performance-first dark layout (<1.2s First Contentful Paint). Employs vanilla JavaScript for micro-interactions and mobile touch gestures.",
    technicalFeatures: [
      "Zero-friction trial pass modal pre-populating workout time in WhatsApp",
      "Schema.org ExerciseGym microdata with opening hours & geo-coordinates",
      "Sticky mobile bottom action bar with 1-tap WhatsApp and Call triggers"
    ],
    detailsNote: "Website Template & Automation Architecture — Ready for 3–5 day deployment for gyms and CrossFit boxes."
  },
  {
    id: "buildy-tools",
    name: "Buildy Tools — Free Excel Automation Tool",
    category: "DIGITAL PRODUCT",
    categoryType: "free",
    statusText: "DIGITAL PRODUCT • FREE UTILITY",
    statusClass: "status-free",
    gridClass: "medium-standard",
    url: "https://buildy-tools.lovable.app",
    ctaText: "TRY BUILDY TOOLS FREE →",
    image: null,
    conceptType: "Free AI-Powered Data Structuring Utility",
    shortDesc: "A practical browser-based Excel automation tool that turns messy copied seller data into structured, usable tabular records instantly.",
    businessContext: "E-commerce sellers and spreadsheet operators spend hours cleaning unstructured copied raw product text for catalog upload spreadsheets.",
    solution: "Engineered a zero-friction browser utility that ingests unstructured text, applies smart formatting rules, and delivers structured columns instantly.",
    features: [
      "100% Free digital utility for marketplace sellers & operators",
      "Raw copied text → AI parsing → structured tabular columns",
      "Preserves target Excel column arrangements",
      "Eliminates hours of manual data formatting",
      "Instant browser-based interface, zero installation required"
    ],
    architectureDecisions: "Client-side processing engine for instant response, ensuring complete seller data privacy and zero server latency.",
    technicalFeatures: [
      "Regex & AI string pattern matching for price, SKU, and product specs",
      "One-click Copy to Clipboard and CSV export capabilities"
    ],
    detailsNote: "Digital Product — Free to use utility built to solve repetitive seller catalog data formatting."
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

  container.innerHTML = filtered.map((p, index) => {
    const imgSrc = p.image
      ? (() => {
          if (p.image.startsWith('http://') || p.image.startsWith('https://') || p.image.startsWith('data:')) return p.image;
          const assetPath = p.image.replace(/^\.?\//, '');
          return `${base ? `${base}/` : '/'}${assetPath}`;
        })()
      : null;

    const isIronVault = p.id === "ironvault-fitness";

    return `
    <div class="project-card ${p.gridClass} reveal reveal-card stagger-${(index % 6) + 1}" onclick="openModal('${p.id}')">
      <div class="project-thumb-frame">
        <div class="project-browser-bar">
          <div class="browser-dots">
            <span class="browser-dot"></span>
            <span class="browser-dot"></span>
            <span class="browser-dot"></span>
          </div>
          <div class="browser-address-pill"></div>
        </div>
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
          : (isIronVault ? `
             <div class="project-visual-abstract dark-athletic">
               <div class="abstract-athletic-grid"></div>
               <div class="abstract-core">
                 <span class="abstract-badge-athletic">ATHLETIC LEAD ENGINE</span>
                 <span class="abstract-sub athletic-title">IRONVAULT FITNESS</span>
                 <span class="abstract-athletic-caption">Gym &amp; Fitness Studio Template</span>
                 <div class="abstract-athletic-pills">
                   <span>Free Trial Funnel</span>
                   <span>WhatsApp Leads</span>
                   <span>Local SEO</span>
                 </div>
               </div>
             </div>
          ` : `
             <div class="project-visual-abstract">
               <div class="abstract-ring"></div>
               <div class="abstract-core">
                 <span class="abstract-label">${p.category}</span>
                 <span class="abstract-sub">${p.name}</span>
               </div>
             </div>
          `)
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

  // Observe newly rendered cards with motion system
  if (typeof observeMotionElements === 'function') {
    observeMotionElements(container.querySelectorAll('.reveal'));
  }

  // Attach card tilt and scroll choreography on newly rendered cards
  initCardTilt();
  initWorkArchiveChoreography();
}

function filterProjects(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const container = document.getElementById("projects-grid");
  if (container) {
    container.style.opacity = '0.35';
    container.style.transform = 'scale(0.99)';
    container.style.transition = 'opacity 130ms var(--ease-motion), transform 130ms var(--ease-motion)';

    setTimeout(() => {
      renderProjects(filter);
      container.style.opacity = '1';
      container.style.transform = 'scale(1)';
    }, 120);
  } else {
    renderProjects(filter);
  }
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
      ${p.targetAudience ? `
        <div class="case-study-block">
          <div class="case-study-label">TARGET AUDIENCE &amp; COMMERCIAL PROFILE</div>
          <p class="case-study-text">${p.targetAudience}</p>
        </div>
      ` : ''}

      ${p.businessContext ? `
        <div class="case-study-block">
          <div class="case-study-label">01 / BUSINESS CONTEXT &amp; OPPORTUNITY</div>
          <p class="case-study-text">${p.businessContext}</p>
        </div>
      ` : ''}

      ${p.architectureDecisions ? `
        <div class="case-study-block">
          <div class="case-study-label">02 / SYSTEM ARCHITECTURE &amp; DESIGN DECISIONS</div>
          <p class="case-study-text">${p.architectureDecisions}</p>
        </div>
      ` : (p.solution ? `
        <div class="case-study-block">
          <div class="case-study-label">02 / SYSTEM ARCHITECTURE &amp; DESIGN SOLUTION</div>
          <p class="case-study-text">${p.solution}</p>
        </div>
      ` : '')}

      ${p.technicalFeatures ? `
        <div class="case-study-block">
          <div class="case-study-label">03 / TECHNICAL &amp; CONVERSION SPECIFICATIONS</div>
          <ul class="modal-features-list">
            ${p.technicalFeatures.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      ` : `
        <div class="case-study-block">
          <div class="case-study-label">03 / KEY DELIVERABLES &amp; CORE FEATURES</div>
          <ul class="modal-features-list">
            ${p.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      `}

      ${p.differentiation ? `
        <div class="case-study-block" style="background: var(--surface-warm); border-left: 3px solid var(--terracotta); padding: 1.1rem 1.25rem; border-radius: 6px;">
          <div class="case-study-label" style="color: var(--terracotta);">04 / DIFFERENTIATION FROM GENERIC TEMPLATES</div>
          <p class="case-study-text" style="color: var(--charcoal); font-weight: 500;">${p.differentiation}</p>
        </div>
      ` : ''}

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


const aiMethodologyData = {
  aeo: {
    tag: "01 / AEO",
    badgeClass: "",
    title: "Answer Engine Optimization (AEO) Methodology",
    subtitle: "Structuring content for direct answers, voice search, and AI assistant extraction.",
    definition: "Answer Engine Optimization is the discipline of structuring and authoring web content so that modern answer engines (Google AI Overviews, Perplexity, ChatGPT, Apple Intelligence, Siri) can effortlessly identify and extract direct, accurate answers to user queries.",
    purpose: "When a potential client asks 'How much does a custom business website cost in Delhi?' or 'How does WhatsApp automation work for salons?', your site should provide the immediate, authoritative answer rather than making users dig through vague paragraphs.",
    steps: [
      {
        title: "1. Question-Centric Heading Architecture",
        desc: "Transform standard marketing copy into precise, high-intent questions formulated as H2 and H3 headings matching real user search queries."
      },
      {
        title: "2. The 40-Word Direct Answer Window",
        desc: "Place a concise, standalone, factual answer in the very first sentence directly underneath each question heading before providing extended context."
      },
      {
        title: "3. Structured FAQPage & Speakable Microdata",
        desc: "Generate valid Schema.org JSON-LD scripts mirroring visible on-page content, enabling search engines to verify question-answer pairings without parsing ambiguity."
      },
      {
        title: "4. Elimination of Ambiguous Adjectives",
        desc: "Replace generic claims like 'best services' with tangible parameters: scope inclusions, realistic delivery timeframes (3–5 days), and exact transparent pricing."
      }
    ],
    example: "On this website, the FAQ and service pricing sections answer common client questions directly, allowing answer engines to synthesize accurate answers with zero hallucination.",
    whatsappMsg: "Hi Karishma, I would like to consult on implementing AEO (Answer Engine Optimization) for my business website."
  },
  geo: {
    tag: "02 / GEO",
    badgeClass: "",
    title: "Generative Engine Optimization (GEO) Methodology",
    subtitle: "Optimizing digital footprints for synthesis and citation in generative AI models.",
    definition: "Generative Engine Optimization focuses on crafting context-rich, entity-anchored content that generative search engines (such as Google SGE/AI Overviews, Bing Copilot, and Perplexity) evaluate, cite, and synthesize when generating answers.",
    purpose: "Instead of simply aiming for a blue link click, GEO ensures your brand, founder profile, and services are accurately represented and cited when prospects research solutions in generative AI interfaces.",
    steps: [
      {
        title: "1. Entity & Topic Grounding",
        desc: "Explicitly connect core business entities (e.g., Karishma Kumari → AI Automation Architect → Vision AI Studio & MIRAVIKA) across internal schemas and external references."
      },
      {
        title: "2. Problem-Solution Dualism in Case Studies",
        desc: "Structure portfolio and project deliverables around clear business challenges, architectural decisions, and tangible outcomes that models can summarize easily."
      },
      {
        title: "3. Multi-Source Fact Corroboration",
        desc: "Ensure consistent entity attributes (founder role, location, primary skills, verified contact channels) across LinkedIn, GitHub, and client domains."
      },
      {
        title: "4. High Semantic Density & Clean Layout",
        desc: "Maintain rich semantic text markup that allows generative scrapers and LLMs to extract key takeaways without running into heavy client-side rendering hurdles."
      }
    ],
    example: "The project cards on this portfolio explicitly separate business context, design solution, and core deliverables, providing clean data triples for generative AI citation.",
    whatsappMsg: "Hi Karishma, I would like to discuss optimizing my brand and website for Generative Engine Optimization (GEO)."
  },
  llmo: {
    tag: "03 / LLMO",
    badgeClass: "",
    title: "Large Language Model Optimization (LLMO) Methodology",
    subtitle: "Structuring information for tokenization, vector retrieval, and RAG architectures.",
    definition: "Large Language Model Optimization is the practice of formatting information architectures so that large language models and Retrieval-Augmented Generation (RAG) pipelines can ingest, chunk, embed, and retrieve data without semantic confusion.",
    purpose: "As more software applications rely on LLM embeddings and web-crawled knowledge bases, LLMO ensures your digital content is ingested cleanly, preventing hallucinated or omitted details.",
    steps: [
      {
        title: "1. Semantic DOM Tree Chunking",
        desc: "Utilize clean HTML5 structural elements (<article>, <section>, <header>, <nav>, <footer>) so document scrapers chunk content along logical boundaries."
      },
      {
        title: "2. Consistent Terminology & Entity Co-Occurrence",
        desc: "Consistently place primary keywords and service offerings in close semantic proximity to the brand and person entity to reinforce knowledge graph weights."
      },
      {
        title: "3. Machine-Readable Data Availability",
        desc: "Never bury crucial specifications, pricing, or capabilities exclusively inside images or PDFs without accessible, crawlable HTML text counterparts."
      },
      {
        title: "4. Structured Taxonomy & Hierarchical Hubs",
        desc: "Build clear relational structures connecting top-level services to specific packages, deliverables, and case study implementations."
      }
    ],
    example: "All portfolio data on this site is represented in crawlable HTML and accessible data structures, allowing embedding models to index Karishma Kumari's skillsets accurately.",
    whatsappMsg: "Hi Karishma, I would like to learn more about LLMO and preparing my business data for AI retrieval."
  },
  aiso: {
    tag: "04 / AISO",
    badgeClass: "gold",
    title: "AI Search Optimization (AISO) Methodology",
    subtitle: "The unified modern framework uniting technical SEO with next-generation AI discovery.",
    definition: "AI Search Optimization is the comprehensive technical and content strategy that prepares websites for hybrid search environments—where traditional algorithmic indexing works side-by-side with AI search agents and conversational discovery engines.",
    purpose: "Guarantees your business remains discoverable across Google, Bing Copilot, ChatGPT Search, Perplexity, and voice assistants without sacrificing human conversion rates.",
    steps: [
      {
        title: "1. Full-Spectrum Schema.org Graphs",
        desc: "Embed interconnected JSON-LD graphs (Person, WebSite, Service, CreativeWork, FAQPage) that describe exactly who you are, what you offer, and what you charge."
      },
      {
        title: "2. Core Web Vitals & Sub-Second Latency",
        desc: "Deliver lightweight static assets, fast FCP (First Contentful Paint), and minimal CLS (Cumulative Layout Shift) for both crawler efficiency and human retention."
      },
      {
        title: "3. Canonical Verification & Robots Protocol",
        desc: "Configure strict canonical tags, clean XML sitemaps, and robots.txt directives that guide search crawlers directly to canonical representations."
      },
      {
        title: "4. Frictionless Conversion Architecture",
        desc: "Pair search visibility with direct action points—prominent WhatsApp inquiry links, transparent scope explanations, and verified contact channels."
      }
    ],
    example: "This portfolio demonstrates AISO with sub-second load times, Schema.org JSON-LD graph, canonical verification, and immediate 1-click consultation links.",
    whatsappMsg: "Hi Karishma, I would like to build an AISO-optimized business website for modern search."
  },
  eeat: {
    tag: "05 / E-E-A-T",
    badgeClass: "gold",
    title: "E-E-A-T Framework (Experience • Expertise • Authoritativeness • Trustworthiness)",
    subtitle: "Google's core Search Quality Rater Guidelines implemented through verifiable proof.",
    definition: "E-E-A-T is Google's core framework evaluating content based on firsthand Experience, demonstrable Expertise, verified Authoritativeness, and transparent Trustworthiness. It serves as a benchmark for assessing real-world credibility.",
    purpose: "Distinguishes authentic practitioners and genuine business operators from automated spam, unverified content mills, and exaggerated marketing claims.",
    steps: [
      {
        title: "1. Demonstrable Firsthand Experience",
        desc: "Show real work: delivered client websites (Kuchuu Puchuu), active e-commerce operations (MIRAVIKA), and in-development platforms (Vision AI Studio)."
      },
      {
        title: "2. Genuine Technical Expertise",
        desc: "Detail specific technical competencies (n8n workflows, AI agent orchestration, commercial web development) rather than vague buzzwords."
      },
      {
        title: "3. External Authoritativeness & Entity Linking",
        desc: "Connect verified professional profiles (LinkedIn, GitHub) and live business properties with consistent naming and credentials."
      },
      {
        title: "4. Absolute Commercial Trustworthiness",
        desc: "Label project statuses transparently ('SOLD • DELIVERED', 'WEBSITE TEMPLATE', 'OWN BUSINESS • LIVE', 'TEAM PROJECT • IN DEVELOPMENT', 'FREE TOOL'), state transparent prices, and provide verified phone and email contact."
      }
    ],
    example: "Karishma Kumari's portfolio provides transparent status labels on all projects, verified contact information, and clear attribution of personal ventures.",
    whatsappMsg: "Hi Karishma, I want to audit and strengthen the E-E-A-T signals on my business website."
  }
};

function openAiMethodologyModal(topic) {
  const data = aiMethodologyData[topic];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-body');
  if (!modal || !content) return;

  content.innerHTML = `
    <span class="methodology-tag ${data.badgeClass}">${data.tag}</span>
    <h2 class="methodology-title">${data.title}</h2>
    <p class="modal-desc" style="font-size: 1.05rem; font-weight: 500; color: var(--charcoal); margin-bottom: 1.5rem;">${data.subtitle}</p>

    <div class="modal-case-study">
      <div class="case-study-block">
        <div class="case-study-label">01 / CONCEPT DEFINITION</div>
        <p class="case-study-text">${data.definition}</p>
      </div>

      <div class="case-study-block">
        <div class="case-study-label">02 / PRACTICAL COMMERCIAL PURPOSE</div>
        <p class="case-study-text">${data.purpose}</p>
      </div>

      <div class="case-study-block">
        <div class="case-study-label">03 / IMPLEMENTATION BLUEPRINT</div>
        <div class="methodology-steps-list">
          ${data.steps.map(s => `
            <div class="methodology-step">
              <div class="methodology-step-title">${s.title}</div>
              <p class="methodology-step-desc">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="case-study-block">
        <div class="case-study-label">04 / REAL-WORLD DEMONSTRATION</div>
        <div class="ai-card-example" style="margin-bottom: 0;">
          <strong>Applied on this site:</strong> ${data.example}
        </div>
      </div>
    </div>

    <div class="modal-actions" style="margin-top: 2rem;">
      <a href="https://wa.me/919818691915?text=${encodeURIComponent(data.whatsappMsg)}" target="_blank" rel="noopener" class="btn-whatsapp">
        CONSULT ON THIS METHODOLOGY →
      </a>
      <button type="button" class="btn-ghost" onclick="closeModal()">
        CLOSE
      </button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
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
  const form = event.target;
  const nameEl = form.querySelector('#inq-name') || document.getElementById('inq-name');
  const serviceEl = form.querySelector('#inq-service') || document.getElementById('inq-service');
  const budgetEl = form.querySelector('#inq-budget') || document.getElementById('inq-budget');
  const messageEl = form.querySelector('#inq-details') || form.querySelector('#inq-message') || document.getElementById('inq-details') || document.getElementById('inq-message');

  const name = nameEl ? nameEl.value : '';
  const service = serviceEl ? serviceEl.value : '';
  const budget = budgetEl ? budgetEl.value : '';
  const message = messageEl ? messageEl.value : '';

  const text = `Hi Karishma, my name is ${name}. I am interested in ${service}${budget ? ' (Budget: ' + budget + ')' : ''}.${message ? ' Project details: ' + message : ''}`;
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

  // Initialize scroll progress bar & sticky header transition
  initScrollProgressBar();

  // Initialize global scroll reveal motion system
  initScrollMotionSystem();

  // Initialize desktop subtle 3D card tilt
  initCardTilt();

  // Initialize custom desktop interactive cursor
  initCustomCursor();

  // Initialize high-end catwalk hero interaction (subtle parallax & spotlight tracking)
  initHeroCatwalkInteraction();

  // Initialize Discoverability Lab word flipper
  initDiscoverabilityWordFlipper();

  // Initialize interactive AI Systems Architecture Map
  initSystemsArchitectureMap();

  // Initialize Secret Interactions
  initLogoSecret();
  initCommandPalette();
  initKKeyEasterEgg();
  initHiddenArchitectureView();

  // Initialize smart inquiry form
  initSmartInquiryForm();

  // Mount professional AI Chatbot (KAI)
  mountKaiChatbot();

  // Initialize Directional Motion System
  initScrollReveals();

  // Initialize Cinematic Scroll Choreography across all sections
  initWorkArchiveChoreography();
  initSystemsConnectors();
  initEngineeringTimeline();
  initAiSearchChoreography();
  initPricingChoreography();
  initFaqChoreography();
  initFooterChoreography();
});

/* ==========================================================================
   HIGH-END HERO CATWALK & SPOTLIGHT INTERACTION
   Smooth 3D drift + mouse spotlight tracking + scroll parallax
   ========================================================================== */
function initHeroCatwalkInteraction() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return;

  const spotlight = document.getElementById('hero-spotlight');
  const textCol = document.getElementById('hero-text-col');
  const modelWrapper = document.getElementById('hero-model-wrapper');

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = 0;

  function renderHeroParallax() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    if (spotlight) {
      const spX = (currentX * 60).toFixed(2);
      const spY = (currentY * 40).toFixed(2);
      spotlight.style.transform = `translate(calc(-50% + ${spX}px), calc(-50% + ${spY}px))`;
    }

    if (modelWrapper) {
      const mX = (currentX * -8).toFixed(2);
      const mY = (currentY * -6).toFixed(2);
      modelWrapper.style.transform = `translate3d(${mX}px, ${mY}px, 0)`;
    }

    if (textCol) {
      const tX = (currentX * 15).toFixed(2);
      textCol.style.transform = `translate3d(${tX}px, 0, 0)`;
    }

    const closeEnough = Math.abs(targetX - currentX) < 0.0025 && Math.abs(targetY - currentY) < 0.0025;
    if (closeEnough) {
      rafId = 0;
      return;
    }

    rafId = requestAnimationFrame(renderHeroParallax);
  }

  const ensureHeroRaf = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(renderHeroParallax);
  };

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    targetX = Math.max(-1, Math.min(1, x));
    targetY = Math.max(-1, Math.min(1, y));
    ensureHeroRaf();
  });

  hero.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    ensureHeroRaf();
  });
}

/* ==========================================================================
   CINEMATIC SCROLL CHOREOGRAPHY ENGINES
   ========================================================================== */

/* 1. Work Archive: Skew-correct cards entrance */
function initWorkArchiveChoreography() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced || !('IntersectionObserver' in window)) {
    cards.forEach(c => c.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  cards.forEach((card, idx) => {
    card.style.transitionDelay = `${(idx % 4) * 0.08}s`;
    observer.observe(card);
  });
}

/* 2. Systems Map: SVG Connector Lines Drawing Node-by-Node with Traveling Gold Light Pulse */
function initSystemsConnectors() {
  const canvas = document.getElementById('sys-map-canvas');
  const svg = document.getElementById('sys-connectors-svg');
  if (!canvas || !svg) return;

  const hub = canvas.querySelector('.sys-core-hub-banner');
  const nodes = canvas.querySelectorAll('.sys-interactive-node');
  if (!hub || !nodes.length) return;

  function renderConnectorPaths() {
    const canvasRect = canvas.getBoundingClientRect();
    const hubRect = hub.getBoundingClientRect();

    const startX = hubRect.left + hubRect.width / 2 - canvasRect.left;
    const startY = hubRect.bottom - canvasRect.top;

    svg.setAttribute('viewBox', `0 0 ${canvasRect.width} ${canvasRect.height}`);
    svg.innerHTML = '';

    // Add SVG filter definition for gold glow pulse
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
      <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    `;
    svg.appendChild(defs);

    nodes.forEach((node, index) => {
      const nodeRect = node.getBoundingClientRect();
      const endX = nodeRect.left + nodeRect.width / 2 - canvasRect.left;
      const endY = nodeRect.top - canvasRect.top;

      const midY = startY + (endY - startY) * 0.5;
      const pathData = `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`;

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathData);
      path.setAttribute('class', 'sys-connector-path' + (node.classList.contains('active-node') ? ' active-path' : ''));
      path.setAttribute('data-connector-index', index);
      svg.appendChild(path);

      // Create traveling gold light pulse along this path
      const pulseGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      pulseGroup.setAttribute('class', 'sys-pulse-group' + (node.classList.contains('active-node') ? ' pulse-active' : ''));
      pulseGroup.setAttribute('data-pulse-index', index);

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('r', '3.5');
      circle.setAttribute('fill', '#E4C77A');
      circle.setAttribute('filter', 'url(#gold-glow)');

      const animMotion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
      animMotion.setAttribute('dur', `${2.4 + (index % 3) * 0.4}s`);
      animMotion.setAttribute('repeatCount', 'indefinite');
      animMotion.setAttribute('path', pathData);

      circle.appendChild(animMotion);
      pulseGroup.appendChild(circle);
      svg.appendChild(pulseGroup);

      const length = path.getTotalLength() || 350;
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = canvas.classList.contains('connectors-drawn') ? '0' : `${length}`;
    });
  }

  renderConnectorPaths();
  window.addEventListener('resize', () => {
    renderConnectorPaths();
    if (canvas.classList.contains('connectors-drawn')) {
      svg.querySelectorAll('.sys-connector-path').forEach(p => {
        p.style.strokeDashoffset = '0';
      });
    }
  }, { passive: true });

  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced) {
    canvas.classList.add('connectors-drawn');
    svg.querySelectorAll('.sys-connector-path').forEach(p => {
      p.style.strokeDashoffset = '0';
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !canvas.classList.contains('connectors-drawn')) {
        canvas.classList.add('connectors-drawn');
        const paths = svg.querySelectorAll('.sys-connector-path');
        paths.forEach((path, idx) => {
          setTimeout(() => {
            path.style.strokeDashoffset = '0';
            if (nodes[idx]) {
              nodes[idx].classList.add('node-connected');
            }
          }, 120 + idx * 180);
        });
      }
    });
  }, { threshold: 0.2 });

  observer.observe(canvas);
}

/* 2b. Engineering Timeline: Progressive Laser Draw & Step Illumination */
function initEngineeringTimeline() {
  const container = document.getElementById('engineering-timeline');
  if (!container) return;

  const progressLine = document.getElementById('timeline-laser-progress');
  const nodes = container.querySelectorAll('.timeline-step-node');
  if (!nodes.length) return;

  function updateProgressLine() {
    if (!progressLine) return;
    const activeNode = container.querySelector('.timeline-step-node.active-step') || nodes[0];
    const activeStepIndex = parseInt(activeNode.getAttribute('data-step') || '1', 10);
    const totalSteps = nodes.length;
    const pct = Math.min(100, Math.max(15, (activeStepIndex / totalSteps) * 100));

    if (window.innerWidth >= 992) {
      progressLine.style.width = `${pct}%`;
      progressLine.style.height = '100%';
    } else {
      progressLine.style.height = `${pct}%`;
      progressLine.style.width = '100%';
    }
  }

  nodes.forEach(node => {
    node.addEventListener('mouseenter', () => {
      nodes.forEach(n => n.classList.remove('active-step'));
      node.classList.add('active-step');
      updateProgressLine();
    });

    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active-step'));
      node.classList.add('active-step');
      updateProgressLine();
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        container.classList.add('in-view');
        nodes.forEach((node, idx) => {
          setTimeout(() => {
            node.classList.add('in-view');
            if (idx === 0) {
              node.classList.add('active-step');
              updateProgressLine();
            }
          }, idx * 160);
        });
      }
    });
  }, { threshold: 0.1 });

  observer.observe(container);
  window.addEventListener('resize', updateProgressLine, { passive: true });
}

/* 3. AI Search & Visibility: Radiating Outward Nodes & Soft Gold Glow Pulse */
function initAiSearchChoreography() {
  const section = document.getElementById('ai-search') || document.querySelector('.ai-visibility-intro');
  if (!section) return;

  const centralNode = document.getElementById('ai-search-central-node');
  const cards = document.querySelectorAll('.ai-card');

  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced || !('IntersectionObserver' in window)) {
    if (centralNode) centralNode.classList.add('in-view');
    cards.forEach(c => c.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (centralNode) centralNode.classList.add('in-view');
        cards.forEach((card, idx) => {
          setTimeout(() => {
            card.classList.add('in-view');
          }, 150 + idx * 130);
        });

        // Set default soft gold glow pulse on card-aiso
        const aisoCard = document.getElementById('card-aiso');
        if (aisoCard) {
          setTimeout(() => {
            aisoCard.classList.add('selected-pulse');
          }, 900);
        }
      }
    });
  }, { threshold: 0.15 });

  observer.observe(section);

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      cards.forEach(c => c.classList.remove('selected-pulse'));
      card.classList.add('selected-pulse');
    });
  });
}

/* 4. Pricing: 3D Tilt Settle & Recommended Gold Border Pulse */
function initPricingChoreography() {
  const pricingSection = document.getElementById('pricing') || document.querySelector('.tier-grid');
  if (!pricingSection) return;

  const cards = document.querySelectorAll('.tier-card');
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced || !('IntersectionObserver' in window)) {
    cards.forEach(c => c.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        cards.forEach((card, idx) => {
          setTimeout(() => {
            card.classList.add('in-view');
          }, 100 + idx * 140);
        });
      }
    });
  }, { threshold: 0.15 });

  observer.observe(pricingSection);
}

/* 5. FAQ: Gold Underline Rule Drawing On Scroll */
function initFaqChoreography() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isReduced || !('IntersectionObserver' in window)) {
    faqItems.forEach(i => i.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' });

  faqItems.forEach((item, idx) => {
    item.style.transitionDelay = `${idx * 0.08}s`;
    observer.observe(item);
  });
}

/* 6. Footer: Laser Sweep Line & Drifting Words Background Parallax */
function initFooterChoreography() {
  const footer = document.getElementById('global-footer') || document.querySelector('footer');
  if (!footer) return;

  const driftWords = document.getElementById('footer-drift-words');

  // Gold sweep line trigger
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(footer);

  // Background word parallax drift on scroll
  if (driftWords && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = footer.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
            const driftY = (progress * 50 - 25).toFixed(1);
            const driftX = (progress * 30 - 15).toFixed(1);
            driftWords.style.transform = `translate3d(${driftX}px, ${driftY}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
}

/* ==========================================================================
   INTERACTIVE DESKTOP CURSOR (DOT + RING + STATE LABELS)
   ========================================================================== */
function initCustomCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let dot = document.getElementById('cursor-dot');
  let ring = document.getElementById('cursor-ring');

  if (!dot) {
    dot = document.createElement('div');
    dot.id = 'cursor-dot';
    document.body.appendChild(dot);
  }

  if (!ring) {
    ring = document.createElement('div');
    ring.id = 'cursor-ring';
    ring.innerHTML = '<span id="cursor-label">VIEW</span>';
    document.body.appendChild(ring);
  }

  const label = document.getElementById('cursor-label');
  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;
  let rafId = 0;

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;

    if (Math.abs(mouseX - ringX) > 0.5 || Math.abs(mouseY - ringY) > 0.5) {
      rafId = requestAnimationFrame(renderRing);
      return;
    }

    rafId = 0;
  }

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    if (!rafId) {
      rafId = requestAnimationFrame(renderRing);
    }
  }, { passive: true });

  // Attach hover triggers
  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    const isProjectCard = target.closest('.project-card, .product-item-card');
    const isInteractiveNode = target.closest('.sys-interactive-node');
    const isInteractive = target.closest('a, button, input, select, textarea, .filter-btn, .faq-question');

    if (isProjectCard) {
      ring.classList.add('cursor-hover-project');
      if (label) label.textContent = 'EXPLORE';
    } else if (isInteractiveNode) {
      ring.classList.add('cursor-hover-project');
      if (label) label.textContent = 'INSPECT';
    } else if (isInteractive) {
      ring.classList.add('cursor-hover');
      ring.classList.remove('cursor-hover-project');
    } else {
      ring.classList.remove('cursor-hover', 'cursor-hover-project');
    }
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
}

/* ==========================================================================
   DISCOVERABILITY LAB: WORD FLIPPER
   Cycles: DISCOVER -> UNDERSTAND -> ANSWER -> CITE -> TRUST
   ========================================================================== */
function initDiscoverabilityWordFlipper() {
  const container = document.getElementById('flipper-words-viewport');
  if (!container) return;

  const words = ['DISCOVER', 'UNDERSTAND', 'ANSWER', 'CITE', 'TRUST'];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % words.length;
    const wordEl = container.querySelector('.flipper-word');
    if (wordEl) {
      wordEl.style.transform = 'translateY(-100%)';
      wordEl.style.opacity = '0';
      setTimeout(() => {
        wordEl.textContent = words[currentIndex];
        wordEl.style.transform = 'translateY(100%)';
        setTimeout(() => {
          wordEl.style.transform = 'translateY(0)';
          wordEl.style.opacity = '1';
        }, 30);
      }, 300);
    }
  }, 2400);
}

/* ==========================================================================
   INTERACTIVE AI SYSTEMS ARCHITECTURE MAP & TELEMETRY CONTROLLER
   ========================================================================== */
const systemsMapData = {
  "ai-agents": {
    code: "01 / AI AGENTS",
    title: "AI Automation & AI Agents",
    tagline: "Autonomous customer dialogue, 24/7 lead qualification, and multi-channel response bots.",
    desc: "Autonomous AI-powered conversation agents deployed across WhatsApp, web chat, and voice channels. Designed to answer complex customer inquiries, qualify high-intent prospects, and trigger immediate booking flows without human latency.",
    whatIsIt: "Custom LLM-powered conversational agents integrated with your business knowledge base and real-time APIs.",
    whoFor: "Gyms, salons, clinics, consultants, and service businesses losing leads after hours.",
    problemSolved: "Eliminates slow lead response times, missed weekend inquiries, and repetitive manual customer Q&A.",
    deliverables: "Configured AI agent, prompt architecture, WhatsApp Business API webhook, lead qualification pipeline, and test suite.",
    connectsTo: "WhatsApp Business, Web chat widget, Google Sheets CRM, n8n webhook pipelines.",
    price: "Starting from ₹3,999",
    waMessage: "Hi Karishma, I am interested in exploring an AI Agent / Automation solution for my business."
  },
  "n8n-workflow": {
    code: "02 / N8N PIPELINE",
    title: "Workflow Automation (n8n)",
    tagline: "Event-driven pipelines syncing forms, databases, spreadsheets, and notification channels.",
    desc: "Robust back-office workflow orchestration connecting disparate applications into an integrated, zero-data-loss automation loop. Eliminates manual spreadsheet copy-pasting, invoice emailing, and lead synchronization.",
    whatIsIt: "Server-orchestrated multi-step automation pipelines built on n8n or custom webhook endpoints.",
    whoFor: "E-commerce sellers, agencies, local businesses, and operations teams handling multi-app handoffs.",
    problemSolved: "Stops manual data entry errors, fragmented customer records, and delayed internal notifications.",
    deliverables: "Custom n8n workflow JSON, error-retry triggers, API credentials setup, and data mapping schema.",
    connectsTo: "Google Sheets, Notion, Airtable, Razorpay, WhatsApp, Gmail, Slack.",
    price: "Starting from ₹4,999",
    waMessage: "Hi Karishma, I need workflow automation (n8n) to connect my business apps and automate data."
  },
  "websites-templates": {
    code: "03 / WEB ARCHITECTURE",
    title: "Websites & Commerce Templates",
    tagline: "High-contrast editorial websites built around customer conversion and sub-second performance.",
    desc: "Production-ready commercial business websites and tailored industry templates. Engineered with responsive mobile-first layouts, Schema.org microdata for AI discoverability, and 1-click WhatsApp inquiry funnels.",
    whatIsIt: "Clean, high-performance static or dynamic web architecture tailored for commercial lead conversion.",
    whoFor: "Gyms, salons, restaurants, real estate consultants, and modern professionals.",
    problemSolved: "Replaces slow, outdated, generic WordPress themes with fast, authoritative, mobile-optimized sites.",
    deliverables: "Full responsive codebase, domain connection, Schema.org JSON-LD graph, WhatsApp CTAs, 3–5 day delivery.",
    connectsTo: "Google Maps, WhatsApp Business, Local SEO crawlers, custom analytics.",
    price: "Starting from ₹2,999",
    waMessage: "Hi Karishma, I want to discuss a new website or website template for my business."
  },
  "ecommerce-ops": {
    code: "04 / E-COMMERCE OPS",
    title: "E-Commerce & Marketplace Management",
    tagline: "Marketplace cataloging, algorithmic listing SEO, and D2C operational synchronization.",
    desc: "Hands-on multi-channel e-commerce execution informed by running live brands (MIRAVIKA). Covers Amazon, Flipkart, Meesho product cataloging, search algorithm optimization, bullet point copywriting, and visual merchandising.",
    whatIsIt: "Complete digital cataloging, marketplace SEO, and D2C operational listing management.",
    whoFor: "D2C lifestyle brands, consumer goods manufacturers, and retail stores expanding online.",
    problemSolved: "Low search impression rankings, rejected catalog listings, and disjointed product merchandising.",
    deliverables: "Optimized product listings, keyword index tags, backend search term schemas, visual merchandising review.",
    connectsTo: "Amazon Seller Central, Flipkart, Meesho, Shopify/WooCommerce, D2C portals.",
    price: "Starting from ₹2,999 / mo",
    waMessage: "Hi Karishma, I need e-commerce cataloging and marketplace management for my brand."
  },
  "ai-creative": {
    code: "05 / AI CREATIVE",
    title: "AI Creative & Product Visuals",
    tagline: "Studio-grade synthetic product staging, video reels, and high-impact social assets.",
    desc: "High-fidelity AI-assisted visual production that eliminates expensive commercial studio photoshoots. Transforms raw smartphone product photos into luxury lifestyle staged imagery and dynamic social video creatives.",
    whatIsIt: "AI-generated product staging, digital lifestyle compositions, and vertical short-form creatives.",
    whoFor: "Apparel brands, food businesses, beauty salons, and product creators wanting high visual fidelity.",
    problemSolved: "High photography studio costs, slow production turnarounds, and flat social media engagement.",
    deliverables: "High-resolution staged image package, multi-angle visual variations, optimized web assets.",
    connectsTo: "Social ad campaigns, website product galleries, Amazon A+ content, Instagram merchandising.",
    price: "Starting from ₹799",
    waMessage: "Hi Karishma, I would like AI creative services and staged product visuals for my products."
  },
  "digital-setup": {
    code: "06 / TURNKEY SETUP",
    title: "Turnkey Digital Business Setup",
    tagline: "End-to-end digital foundation: website, WhatsApp channel, branding, and operational workflows.",
    desc: "A holistic 360-degree launch package that takes an offline or newly incorporated business from raw idea to active, customer-accepting digital operations in under 10 days.",
    whatIsIt: "Comprehensive business digital transformation package combining all studio capabilities into one unified rollout.",
    whoFor: "New entrepreneurs, brick-and-mortar stores going online, and service professionals launching new ventures.",
    problemSolved: "Overwhelmed founders dealing with 5 different freelancers for web, marketing, automation, and design.",
    deliverables: "Custom website, domain setup, Google Business Profile, WhatsApp API channel, automated lead spreadsheet, branding kit.",
    connectsTo: "Entire modern digital ecosystem (Search, WhatsApp, CRM, Payment gateways).",
    price: "Starting from ₹9,999",
    waMessage: "Hi Karishma, I'm looking for a complete Turnkey Digital Business Setup for my new venture."
  }
};

function initSystemsArchitectureMap() {
  const nodes = document.querySelectorAll('.sys-interactive-node');
  if (!nodes.length) return;

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const systemKey = node.getAttribute('data-system-key');
      selectSystemNode(systemKey);
    });

    node.addEventListener('mouseenter', () => {
      const systemKey = node.getAttribute('data-system-key');
      selectSystemNode(systemKey);
    });
  });
}

function selectSystemNode(key) {
  const data = systemsMapData[key];
  if (!data) return;

  // Update active state on nodes
  document.querySelectorAll('.sys-interactive-node').forEach(n => {
    if (n.getAttribute('data-system-key') === key) {
      n.classList.add('active-node');
    } else {
      n.classList.remove('active-node');
    }
  });

  // Update Telemetry Panel
  const panel = document.getElementById('sys-telemetry-panel');
  if (!panel) return;

  panel.style.opacity = '0.4';
  panel.style.transform = 'scale(0.99)';
  panel.style.transition = 'opacity 120ms ease, transform 120ms ease';

  setTimeout(() => {
    const codeEl = document.getElementById('telemetry-code') || document.getElementById('telemetry-node-code');
    const titleEl = document.getElementById('telemetry-title') || document.getElementById('telemetry-node-title');
    const descEl = document.getElementById('telemetry-desc') || document.getElementById('telemetry-node-desc');
    const specWhat = document.getElementById('spec-what');
    const specWho = document.getElementById('spec-who');
    const specProblem = document.getElementById('spec-problem');
    const specGet = document.getElementById('spec-get');
    const specConnect = document.getElementById('spec-connect');
    const priceVal = document.getElementById('telemetry-price-val');
    const actionBtn = document.getElementById('telemetry-action-btn') || document.getElementById('telemetry-btn-action');

    if (codeEl) codeEl.textContent = data.code;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (specWhat) specWhat.textContent = data.whatIsIt;
    if (specWho) specWho.textContent = data.whoFor;
    if (specProblem) specProblem.textContent = data.problemSolved;
    if (specGet) specGet.textContent = data.deliverables;
    if (specConnect) specConnect.textContent = data.connectsTo;
    if (priceVal) priceVal.textContent = data.price;

    if (actionBtn) {
      actionBtn.href = `https://wa.me/919818691915?text=${encodeURIComponent(data.waMessage)}`;
    }

    panel.style.opacity = '1';
    panel.style.transform = 'scale(1)';
  }, 120);
}

/* ==========================================================================
   SMART PROJECT INQUIRY FORM CONTROLLER
   Formats complete structured message and pre-populates WhatsApp dispatch
   ========================================================================== */
function initSmartInquiryForm() {
  const form = document.getElementById('smart-inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = (document.getElementById('inq-client-name') || {}).value || 'Prospective Client';
    const business = (document.getElementById('inq-client-biz') || {}).value || 'Business';
    const category = (document.getElementById('inq-client-cat') || {}).value || 'Website / Automation';
    const budget = (document.getElementById('inq-client-budget') || {}).value || 'To be discussed';
    const timeline = (document.getElementById('inq-client-timeline') || {}).value || 'Flexible';
    const brief = (document.getElementById('inq-client-brief') || {}).value || '';

    const formattedMessage = 
`Hi Karishma, I'm reaching out from your portfolio regarding a new project inquiry:

• Name: ${name}
• Business / Brand: ${business}
• Project Category: ${category}
• Target Budget: ${budget}
• Timeline: ${timeline}
• Project Brief: ${brief}

Looking forward to connecting!`;

    const waUrl = `https://wa.me/919818691915?text=${encodeURIComponent(formattedMessage)}`;
    window.open(waUrl, '_blank');

    const submitBtn = form.querySelector('.inquiry-submit-btn');
    if (submitBtn) {
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>✓ INQUIRY DISPATCHED TO WHATSAPP</span>`;
      submitBtn.style.background = '#1B8A44';
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
      }, 4000);
    }
  });
}

/* ==========================================================================
   DESKTOP SUBTLE CURSOR-AWARE CARD TILT (2.5° MAX)
   ========================================================================== */
function initCardTilt() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (card._hasTiltListener) return;
    card._hasTiltListener = true;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -2.2;
      const rotateY = ((x - centerX) / centerX) * 2.2;
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ==========================================================================
   SCROLL PROGRESS INDICATOR & STICKY HEADER MOTION
   ========================================================================== */
function initScrollProgressBar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress-bar';
    progressBar.className = 'scroll-progress-bar';
    navbar.appendChild(progressBar);
  }

  let ticking = false;
  function updateScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    if (progressBar) {
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    if (scrollTop > 24) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScroll);
      ticking = true;
    }
  }, { passive: true });

  // Initial calculation
  updateScroll();
}

/* ==========================================================================
   GLOBAL SCROLL REVEAL & STAGGER MOTION SYSTEM (BI-DIRECTIONAL)
   ========================================================================== */
let globalMotionObserver = null;

function attachMotionClasses() {
  // Section Eyebrows / Labels
  document.querySelectorAll('.section-eyebrow:not(.reveal), .proof-strip-tag:not(.reveal), .svc-num-tag:not(.reveal)').forEach(el => {
    el.classList.add('reveal', 'reveal-label');
  });

  // Section Titles
  document.querySelectorAll('.section-title:not(.reveal), .page-hero-title:not(.reveal)').forEach(el => {
    el.classList.add('reveal', 'reveal-heading');
  });

  // Section Subtitles
  document.querySelectorAll('.section-sub:not(.reveal), .page-hero-sub:not(.reveal)').forEach(el => {
    el.classList.add('reveal', 'reveal-sub');
  });

  // Proof Strip Columns (Staggered)
  document.querySelectorAll('.proof-strip-col').forEach((col, idx) => {
    col.classList.add('reveal', 'reveal-card', `stagger-${(idx % 4) + 1}`);
  });

  // Project Cards (Static or Dynamic)
  document.querySelectorAll('.project-card').forEach((card, idx) => {
    card.classList.add('reveal', 'reveal-card');
    if (!card.className.includes('stagger-')) {
      card.classList.add(`stagger-${(idx % 6) + 1}`);
    }
  });

  // Expertise & Service Blocks
  document.querySelectorAll('.expertise-group, .service-editorial-block, .about-card, .pricing-card, .contact-card, .faq-card, .inquiry-box').forEach((item, idx) => {
    item.classList.add('reveal', 'reveal-card');
    if (!item.className.includes('stagger-')) {
      item.classList.add(`stagger-${(idx % 4) + 1}`);
    }
  });

  // Call-To-Action Banners
  document.querySelectorAll('.custom-website-cta, .indian-biz-banner').forEach(banner => {
    banner.classList.add('reveal');
  });

  // Footer Sections
  const footerCols = document.querySelectorAll('footer .footer-col, footer .footer-links-col');
  footerCols.forEach((col, idx) => {
    col.classList.add('reveal', `stagger-${(idx % 3) + 1}`);
  });
  const footerBottom = document.querySelector('footer .footer-bottom');
  if (footerBottom) {
    footerBottom.classList.add('reveal');
  }
}

function observeMotionElements(elements) {
  if (!elements || !elements.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }
  if (!globalMotionObserver) {
    initScrollMotionSystem();
    return;
  }
  elements.forEach(el => {
    globalMotionObserver.observe(el);
  });
}

// Back-compat aliases for the legacy call sites left behind by the refactor.
function initScrollReveals() {
  return initScrollMotionSystem();
}

function initScrollReals() {
  return initScrollReveals();
}

window.initScrollReveals = initScrollReveals;
window.initScrollReals = initScrollReals;

function initScrollMotionSystem() {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  attachMotionClasses();

  const allRevealElements = document.querySelectorAll('.reveal, [data-reveal]');

  if (isReduced || !('IntersectionObserver' in window)) {
    allRevealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  if (globalMotionObserver) {
    globalMotionObserver.disconnect();
  }

  globalMotionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      } else {
        // Bi-directional scroll-up handling:
        // Reset when scrolled past bottom so re-entrance from above plays cleanly
        const rect = entry.boundingClientRect;
        if (rect.top > window.innerHeight + 80) {
          entry.target.classList.remove('is-revealed');
        }
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  allRevealElements.forEach(el => {
    globalMotionObserver.observe(el);
  });
}

/* ==========================================================================
   IMAGE REVEAL & INTERSECTION OBSERVER ANIMATIONS
   ========================================================================== */
function updateScrollCharacterState() {
  const charStage = document.getElementById('hero-model-wrapper');
  const pCharStateLabel = document.getElementById('p-char-state-label');
  const stateLabel = document.getElementById('char-state-label');
  const scrollMax = Math.max(1, document.body.scrollHeight - window.innerHeight);
  const pct = (window.scrollY / scrollMax) * 100;

  let currentState = 'STATE 01 — PROFESSIONAL';
  if (pct < 20) {
    currentState = 'STATE 01 — PROFESSIONAL';
  } else if (pct < 45) {
    currentState = 'STATE 02 — DEVELOPER';
  } else if (pct < 70) {
    currentState = 'STATE 03 — AI / AUTOMATION';
  } else if (pct < 85) {
    currentState = 'STATE 04 — FOUNDER';
  } else {
    currentState = 'STATE 05 — DIRECT STANCE';
  }

  if (pCharStateLabel) {
    pCharStateLabel.textContent = currentState;
  }

  if (stateLabel && (!charStage || !charStage.matches(':hover'))) {
    stateLabel.textContent = currentState;
  }
}

window.addEventListener('scroll', updateScrollCharacterState, { passive: true });
window.addEventListener('resize', updateScrollCharacterState, { passive: true });
updateScrollCharacterState();

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
    <!-- KAI — Floating AI Agent -->
    <button class="kai-chatbot-btn kai-agent-trigger" id="kai-toggle-btn"
            aria-label="Open KAI AI Agent"
            onclick="toggleKaiChat()">
      <span class="kai-agent-orbit kai-orbit-one" aria-hidden="true"></span>
      <span class="kai-agent-orbit kai-orbit-two" aria-hidden="true"></span>

      <span class="kai-agent-core" aria-hidden="true">
        <span class="kai-robot-face">
          <span class="kai-eye kai-eye-left"></span>
          <span class="kai-eye kai-eye-right"></span>
          <span class="kai-mouth"></span>
        </span>
      </span>

      <span class="kai-agent-signal" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <span class="kai-agent-label">
        <strong>KAI</strong>
        <small>AI AGENT</small>
      </span>

      <span class="kai-agent-online">
        <span class="kai-btn-pulse"></span>
        ONLINE
      </span>
    </button>

    <!-- Chatbot Window Modal -->
    <div class="kai-chatbot-modal" id="kai-modal">
      <div class="kai-header">
        <div class="kai-header-info">
          <div class="kai-avatar">KK</div>
          <div>
            <div class="kai-name">KAI — AI ASSISTANT</div>
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
            <strong>Namaste &amp; Hello!</strong> I am KAI, Karishma's AI Assistant.<br><br>
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

/* ==========================================================================
   SECRET INTERACTIONS ENGINE
   ========================================================================== */

/* SECRET #1 — LOGO REVEAL */
function initLogoSecret() {
  const logo = document.querySelector('.nav-logo-group') || document.querySelector('.nav-logo');
  if (!logo) return;
  let clickCount = 0;
  let clickTimer = null;

  logo.addEventListener('click', (e) => {
    clickCount++;
    if (clickCount === 1) {
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 1200);
    } else if (clickCount >= 3) {
      e.preventDefault();
      e.stopPropagation();
      clearTimeout(clickTimer);
      clickCount = 0;
      openSystemStatusModal();
    }
  });
}

function openSystemStatusModal() {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-body');
  if (!modal || !content) return;

  content.innerHTML = `
    <span class="methodology-tag gold">SECRET REVEAL #1 // SYSTEM STATUS</span>
    <h2 class="methodology-title" style="font-family: var(--font-display); font-size: 1.8rem; margin: 0.5rem 0 1rem;">ARCHITECT SYSTEM PROFILE</h2>
    <p class="modal-desc" style="color: var(--gold-light); font-family: var(--font-mono); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1.5rem;">[ SECURITY PROTOCOL: VERIFIED ARCHITECT ENTITY ]</p>
    
    <div class="modal-case-study">
      <div class="case-study-block" style="background: rgba(212,175,55,0.04); border-left: 3px solid var(--gold); padding: 1rem 1.25rem; border-radius: 6px;">
        <div class="case-study-label" style="color: var(--gold);">IDENTIFIER</div>
        <p class="case-study-text" style="font-family: var(--font-mono); font-size: 0.95rem; color: #fff;">KARISHMA KUMARI — AI AUTOMATION ARCHITECT</p>
      </div>
      
      <div class="case-study-block">
        <div class="case-study-label">OPERATIONAL STATUS</div>
        <p class="case-study-text" style="color: #4ade80; font-family: var(--font-mono);">● ALL SYSTEMS ONLINE • AVAILABLE FOR SELECT COMMISSIONS</p>
      </div>

      <div class="case-study-block">
        <div class="case-study-label">ACTIVE VENTURES</div>
        <ul class="modal-features-list" style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">
          <li><strong style="color: #fff;">MIRAVIKA:</strong> Live Consumer D2C Brand (miravika.com)</li>
          <li><strong style="color: #fff;">Vision AI Studio:</strong> Team AI Automation Studio (velision.in)</li>
          <li><strong style="color: #fff;">Buildy Tools:</strong> Free Excel AI Utility (buildy-tools.lovable.app)</li>
        </ul>
      </div>

      <div class="case-study-block">
        <div class="case-study-label">DISCOVERY COMMANDS</div>
        <p class="case-study-text" style="font-size: 0.85rem; color: var(--text-muted);">
          Press <kbd style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; color: var(--gold);">⌘K</kbd> or <kbd style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; color: var(--gold);">Ctrl+K</kbd> anywhere to open the Command Center. Press <kbd style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; color: var(--gold);">K</kbd> 3 times rapidly to unlock the System Architecture Diagram.
        </p>
      </div>
    </div>

    <div class="modal-actions" style="margin-top: 1.5rem;">
      <a href="https://wa.me/919310860361?text=Hi%20Karishma,%20I%20unlocked%20your%20System%20Status%20and%20want%20to%20commission%20a%20project." target="_blank" rel="noopener" class="btn-primary">
        COMMISSION SYSTEM →
      </a>
      <button type="button" class="btn-ghost" onclick="closeModal()">
        CLOSE STATUS
      </button>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* SECRET #4 — COMMAND PALETTE (Cmd+K / Ctrl+K) */
function initCommandPalette() {
  if (!document.getElementById('command-palette-modal')) {
    const paletteHtml = `
      <div id="command-palette-modal" class="cmd-palette-overlay" aria-hidden="true" role="dialog" aria-label="Command Center">
        <div class="cmd-palette-card">
          <div class="cmd-palette-header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input type="text" id="cmd-input" placeholder="Type a command or search... (e.g., Work, Pricing, MIRAVIKA)" autocomplete="off" />
            <kbd class="cmd-esc-tag">ESC</kbd>
          </div>
          <div class="cmd-palette-results" id="cmd-results"></div>
          <div class="cmd-palette-footer">
            <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Select</span>
            <span><kbd>ESC</kbd> Close</span>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', paletteHtml);
  }

  const modal = document.getElementById('command-palette-modal');
  const input = document.getElementById('cmd-input');
  const results = document.getElementById('cmd-results');

  const commands = [
    { title: "Selected Work", desc: "View 7 verified portfolio projects & case studies", action: () => { jumpTo('/work'); } },
    { title: "System Architecture", desc: "Interactive 6-stage automation pipeline", action: () => { jumpTo('/capabilities'); } },
    { title: "AI Search & GEO Visibility", desc: "AEO, GEO, LLMO, AISO & E-E-A-T methodologies", action: () => { jumpTo('/ai-search'); } },
    { title: "Services & Pricing Architecture", desc: "Verified packages starting ₹2,999", action: () => { jumpTo('/pricing'); } },
    { title: "About Karishma Kumari", desc: "AI Automation Architect profile & ventures", action: () => { jumpTo('/about'); } },
    { title: "Start a Project", desc: "Inquire for custom website or AI automation", action: () => { jumpTo('/contact'); } },
    { title: "Open MIRAVIKA (D2C Store)", desc: "Live consumer e-commerce venture", action: () => { window.open('https://miravika.com/', '_blank'); } },
    { title: "Open Vision AI Studio", desc: "Team AI Automation platform (velision.in)", action: () => { window.open('https://velision.in/', '_blank'); } },
    { title: "Open Buildy Tools", desc: "Free AI Excel automation utility", action: () => { window.open('https://buildy-tools.lovable.app', '_blank'); } },
    { title: "Direct WhatsApp Inquiry", desc: "Chat directly with Karishma Kumari", action: () => { window.open('https://wa.me/919310860361?text=Hi%20Karishma,%20I%20am%20reaching%20out%20via%20your%20Command%20Center.', '_blank'); } }
  ];

  let selectedIdx = 0;

  function renderCmdResults(query = '') {
    const q = query.toLowerCase().trim();
    const filtered = commands.filter(c => c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q));
    
    if (filtered.length === 0) {
      results.innerHTML = `<div class="cmd-item empty">No matching system commands found</div>`;
      return;
    }

    if (selectedIdx >= filtered.length) selectedIdx = 0;

    results.innerHTML = filtered.map((c, idx) => `
      <div class="cmd-item ${idx === selectedIdx ? 'selected' : ''}" data-idx="${idx}">
        <div class="cmd-item-title">${c.title}</div>
        <div class="cmd-item-desc">${c.desc}</div>
      </div>
    `).join('');

    results.querySelectorAll('.cmd-item').forEach((item, idx) => {
      item.addEventListener('click', () => {
        closeCommandPalette();
        filtered[idx].action();
      });
      item.addEventListener('mouseenter', () => {
        selectedIdx = idx;
        renderCmdResults(input.value);
      });
    });
  }

  function jumpTo(target) {
    closeCommandPalette();

    if (target && target.startsWith('/')) {
      navigateTo(target);
      return;
    }

    const realTarget = document.querySelector(target);
    if (realTarget) {
      realTarget.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (target === '#services' || target === '#about' || target === '#work' || target === '#pricing' || target === '#contact' || target === '#ai-search' || target === '#process') {
      const routeMap = {
        '#services': '/capabilities',
        '#about': '/about',
        '#work': '/work',
        '#pricing': '/pricing',
        '#contact': '/contact',
        '#ai-search': '/ai-search',
        '#process': '/process'
      };
      navigateTo(routeMap[target]);
    }
  }

  function openCommandPalette() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    input.value = '';
    selectedIdx = 0;
    renderCmdResults('');
    setTimeout(() => input.focus(), 50);
    document.body.style.overflow = 'hidden';
  }

  function closeCommandPalette() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  window.openCommandPalette = openCommandPalette;
  window.closeCommandPalette = closeCommandPalette;

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal.classList.contains('open')) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
      return;
    }

    if (modal.classList.contains('open')) {
      if (e.key === 'Escape') {
        closeCommandPalette();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const items = results.querySelectorAll('.cmd-item');
        if (items.length > 0) {
          selectedIdx = (selectedIdx + 1) % items.length;
          renderCmdResults(input.value);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const items = results.querySelectorAll('.cmd-item');
        if (items.length > 0) {
          selectedIdx = (selectedIdx - 1 + items.length) % items.length;
          renderCmdResults(input.value);
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const q = input.value.toLowerCase().trim();
        const filtered = commands.filter(c => c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q));
        if (filtered[selectedIdx]) {
          closeCommandPalette();
          filtered[selectedIdx].action();
        }
      }
    }
  });

  input.addEventListener('input', () => {
    selectedIdx = 0;
    renderCmdResults(input.value);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCommandPalette();
  });
}

/* SECRET #5 — 'K' KEY EASTER EGG */
function initKKeyEasterEgg() {
  let kCount = 0;
  let kTimer = null;

  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    if (e.key === 'k' || e.key === 'K') {
      kCount++;
      if (kCount === 1) {
        kTimer = setTimeout(() => { kCount = 0; }, 1500);
      } else if (kCount >= 3) {
        clearTimeout(kTimer);
        kCount = 0;
        showEasterEggToast();
      }
    }
  });
}

function showEasterEggToast() {
  let toast = document.getElementById('k-easter-egg-toast');
  if (!toast) {
    const toastHtml = `
      <div id="k-easter-egg-toast" class="k-easter-egg-banner">
        <div class="k-banner-inner">
          <span class="k-banner-tag">SECRET #5 UNLOCKED</span>
          <div class="k-banner-title">SYSTEM UNLOCKED — BUILD SOMETHING USEFUL</div>
          <p class="k-banner-sub">You pressed 'K' 3 times. The architecture pipeline is now fully active.</p>
          <div class="k-banner-pipeline">
            <span>DISCOVER</span> → <span>DESIGN</span> → <span>BUILD</span> → <span>AUTOMATE</span> → <span>DEPLOY</span>
          </div>
          <div class="k-banner-actions">
            <button onclick="const route='/capabilities'; if (window.location.pathname !== route) { window.location.href = route; } else { document.querySelector('#process')?.scrollIntoView({behavior:'smooth'}); } this.closest('.k-easter-egg-banner').classList.remove('active');" class="btn-primary-sm">VIEW PIPELINE</button>
            <button onclick="this.closest('.k-easter-egg-banner').classList.remove('active');" class="btn-ghost-sm">DISMISS</button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', toastHtml);
    toast = document.getElementById('k-easter-egg-toast');
  }

  toast.classList.add('active');
  setTimeout(() => {
    if (toast) toast.classList.remove('active');
  }, 10000);
}

/* SECRET #8 — HIDDEN ARCHITECTURE VIEW */
function initHiddenArchitectureView() {
  const trigger = document.getElementById('hidden-architecture-trigger');
  if (trigger) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('services');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        const pipeline = document.querySelector('.systems-map-container') || target;
        pipeline.classList.add('highlight-pulse');
        setTimeout(() => pipeline.classList.remove('highlight-pulse'), 3000);
        return;
      }
      navigateTo('/capabilities');
    });
  }
}


/* ==========================================================================
   INTERACTIVE CHARACTER REVEAL & SCROLL STORY INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const charStage = document.getElementById('hero-model-wrapper');
  const overlayImg = document.getElementById('developer-character-overlay');
  const pCharStateLabel = document.getElementById('p-char-state-label');

  // Mouse Interactive Feathered Mask Reveal
  if (charStage && overlayImg) {
    charStage.addEventListener('mousemove', (e) => {
      const rect = charStage.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      overlayImg.style.setProperty('--mask-x', `${x}%`);
      overlayImg.style.setProperty('--mask-y', `${y}%`);
      overlayImg.style.setProperty('--mask-radius', '160px');

    });

    charStage.addEventListener('mouseleave', () => {
      overlayImg.style.setProperty('--mask-radius', '0px');
      updateScrollCharacterState();
    });
  }

  // -------------------------------------------------------------------------
  // CINEMATIC ADVERTISEMENT ENGINE
  //
  // Normal browser scroll is the timeline.
  // One scroll position drives ALL visual layers simultaneously:
  // camera + environment + character + typography + HUD.
  //
  // No scroll-jacking.
  // No timers.
  // No waiting for an animation to finish.
  // No intentional black transition.
  // -------------------------------------------------------------------------

  const story = document.getElementById('cinematic-story');
  const storyStage = document.getElementById('story-sticky-stage');

  if (story && storyStage) {
    const video = document.getElementById('cinematic-scroll-video');
    const storyCorners = Array.from(
      story.querySelectorAll('.story-interface-corner')
    );
    const storyCodes = Array.from(
      story.querySelectorAll('.story-interface-code')
    );
    const chapters = Array.from(
      story.querySelectorAll('.story-chapter')
    );

    const copy = document.getElementById('story-copy');
    const kicker = document.getElementById('story-kicker');
    const title = document.getElementById('story-title');
    const description = document.getElementById('story-description');
    const progressFill = document.getElementById('story-progress-fill');
    const progressValue = document.getElementById('story-progress-value');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const timeline = [
      {
        at: 0.00,
        kicker: '01 / INTELLIGENCE',
        title: 'INTELLIGENCE',
        description: 'Precision-built systems designed to think, act and move with intention.',
        x: 0,
        y: 0,
        scale: 1.00,
        opacity: 1
      },
      {
        at: 0.18,
        kicker: '02 / AUTOMATION',
        title: 'AUTOMATION',
        description: 'Operational flow that moves from trigger to action without friction.',
        x: -1,
        y: -2,
        scale: 1.02,
        opacity: 1
      },
      {
        at: 0.35,
        kicker: '03 / SYSTEMS',
        title: 'SYSTEMS',
        description: 'The architecture behind the product, the process and the growth engine.',
        x: 4,
        y: 4,
        scale: 1.04,
        opacity: 1
      },
      {
        at: 0.53,
        kicker: '04 / WORKFLOWS',
        title: 'WORKFLOWS',
        description: 'Connected operations that scale, respond and adapt as the business evolves.',
        x: -3,
        y: 1,
        scale: 1.06,
        opacity: 1
      },
      {
        at: 0.72,
        kicker: '05 / AI AGENTS',
        title: 'AI AGENTS',
        description: 'A high-trust layer of action, decision support and execution across the stack.',
        x: 3,
        y: -1,
        scale: 1.08,
        opacity: 1
      },
      {
        at: 0.88,
        kicker: '06 / VISION AI STUDIO',
        title: 'VISION<br><span>AI STUDIO</span>',
        description: 'Built to turn strategic vision into elegant systems, products and momentum.',
        x: 0,
        y: 0,
        scale: 1.10,
        opacity: 1
      }
    ];

    const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
    const ease = (v) => {
      const x = clamp(v);
      return x * x * (3 - 2 * x);
    };

    const getActiveScene = (progress) => {
      let activeIndex = 0;
      for (let i = 0; i < timeline.length; i += 1) {
        if (progress >= timeline[i].at) {
          activeIndex = i;
        }
      }
      return { index: activeIndex, scene: timeline[activeIndex] };
    };

    const getSceneProgress = (progress, activeIndex) => {
      const current = timeline[activeIndex];
      const next = timeline[Math.min(activeIndex + 1, timeline.length - 1)];
      const duration = Math.max(0.001, next.at - current.at);
      const local = clamp((progress - current.at) / duration);
      return {
        current,
        next,
        local,
        chapterProgress: activeIndex === timeline.length - 1 ? clamp((progress - current.at) / Math.max(0.12, 1 - current.at)) : clamp((progress - current.at) / duration)
      };
    };

    const storyLayout = {
      width: window.innerWidth,
      height: window.innerHeight,
      storyTravel: 1
    };

    const updateStoryLayout = () => {
      storyLayout.width = window.innerWidth;
      storyLayout.height = window.innerHeight;
      storyLayout.storyTravel = Math.max(1, story.offsetHeight - storyLayout.height);
    };

    const syncVideo = (progress) => {
      if (!video) return;
      const fallbackDuration = 36;
      const duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : fallbackDuration;
      const targetTime = progress * duration;

      if (video.readyState >= 1 && Math.abs(targetTime - video.currentTime) > 0.04) {
        video.currentTime = targetTime;
      }

      if (reduceMotion) {
        video.pause();
      }
    };

    const renderStory = (progress) => {
      progress = clamp(progress);
      storyStage.style.setProperty('--story-progress', progress.toFixed(4));

      const { index, scene } = getActiveScene(progress);
      const { chapterProgress } = getSceneProgress(progress, index);
      const textIn = ease(clamp(chapterProgress / 0.22));
      const textOut = index === timeline.length - 1 ? 1 : 1 - ease(clamp((chapterProgress - 0.78) / 0.22));
      const textOpacity = Math.max(0.12, textIn * textOut);
      const dir = index % 2 === 0 ? -1 : 1;
      const textX = dir * (1 - textIn) * 8;
      const textY = (1 - textIn) * 22 - chapterProgress * 8;

      if (copy) {
        copy.style.opacity = String(textOpacity);
        copy.style.transform = `translate3d(${textX}vw, calc(-50% + ${textY}px), 0) scale(${0.98 + textIn * 0.06})`;
      }

      if (kicker) {
        kicker.textContent = scene.kicker;
      }

      if (title) {
        title.innerHTML = scene.title;
      }

      if (description) {
        description.textContent = scene.description;
      }

      const hudX = Math.sin(progress * Math.PI * 2) * 12;
      const hudY = Math.cos(progress * Math.PI * 2) * 8;
      storyStage.style.setProperty('--story-hud-x', `${hudX}px`);
      storyStage.style.setProperty('--story-hud-y', `${hudY}px`);

      storyCorners.forEach((corner, cornerIndex) => {
        const direction = cornerIndex % 2 === 0 ? 1 : -1;
        corner.style.transform = `translate3d(${hudX * direction}px, ${hudY * direction}px, 0)`;
      });

      storyCodes.forEach((code, codeIndex) => {
        const drift = Math.sin(progress * Math.PI * (2 + codeIndex * 0.7)) * (12 + codeIndex * 5);
        const rise = Math.cos(progress * Math.PI * 2) * 6;
        code.style.opacity = String(0.14 + 0.42 * Math.max(0, Math.sin((progress + codeIndex * 0.17) * Math.PI)));
        code.style.transform = `translate3d(${drift}px, ${rise}px, 0)`;
      });

      if (progressFill) {
        progressFill.style.height = `${progress * 100}%`;
      }

      if (progressValue) {
        progressValue.textContent = String(Math.round(progress * 100)).padStart(2, '0');
      }

      chapters.forEach((chapter, chapterIndex) => {
        const distance = Math.abs(chapterIndex - index);
        const isActive = chapterIndex === index;
        chapter.classList.toggle('active', isActive);
        chapter.style.opacity = isActive ? '1' : String(Math.max(0.16, 0.42 - distance * 0.06));
        chapter.style.transform = isActive ? 'translateY(-3px) scale(1.04)' : 'translateY(0) scale(1)';
      });

      if (video) {
        syncVideo(progress);
      }
    };

    let raf = 0;
    let lastProgress = -1;
    let lastChapterIndex = -1;

    const requestStoryRender = () => {
      if (raf) return;

      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = story.getBoundingClientRect();
        const storyOffset = Math.max(0, Math.min(storyLayout.storyTravel, -rect.top));
        const progress = clamp(storyOffset / storyLayout.storyTravel);

        if (Math.abs(progress - lastProgress) < 0.0002) {
          return;
        }

        lastProgress = progress;
        renderStory(progress);
      });
    };

    if (video) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      video.setAttribute('playsinline', 'true');
      video.setAttribute('preload', 'auto');
      video.addEventListener('loadedmetadata', () => {
        video.pause();
        video.currentTime = 0;
      }, { once: true });
    }

    window.addEventListener('scroll', requestStoryRender, { passive: true });
    window.addEventListener('resize', () => {
      updateStoryLayout();
      requestStoryRender();
    }, { passive: true });

    updateStoryLayout();
    renderStory(0);
    requestStoryRender();
  }

  // Custom Cursor & Context Label Switching
  const cursorDot = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');
  const cursorLabel = document.getElementById('cursor-label');

  if (cursorDot && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let cursorRafId = 0;

    const renderCursor = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      if (Math.abs(mouseX - ringX) > 0.5 || Math.abs(mouseY - ringY) > 0.5) {
        cursorRafId = requestAnimationFrame(renderCursor);
        return;
      }

      cursorRafId = 0;
    };

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;

      if (!cursorRafId) {
        cursorRafId = requestAnimationFrame(renderCursor);
      }
    }, { passive: true });

    // Contextual Hover Labels
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-cursor-label], a, button, .project-card');
      if (target) {
        cursorRing.classList.add('cursor-view');
        let labelText = target.getAttribute('data-cursor-label');
        if (!labelText) {
          if (target.classList.contains('project-card')) labelText = 'VIEW PROJECT';
          else if (target.tagName === 'A') labelText = 'OPEN ↗';
          else if (target.tagName === 'BUTTON') labelText = 'SELECT';
          else labelText = 'EXPLORE';
        }
        if (cursorLabel) cursorLabel.textContent = labelText;
      } else {
        cursorRing.classList.remove('cursor-view');
      }
    });
  }
});



