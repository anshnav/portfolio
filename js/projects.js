const projects = [
  {
    id: "last-post-search-redesign",
    title: "Last Post Search Experience Redesign",
    category: "UX & Frontend Modernization",
    tags: ["UX Design", "Frontend", "WordPress", "PHP", "JavaScript"],
    image: "images/Search-personal.jpeg",
    year: "2025",
    client: "Legion Magazine",
    role: "UI/UX Designer & Frontend Developer",
    url: "https://legionmagazine.com/last-post/",
    gradient: "linear-gradient(135deg, #102033 0%, #263d57 52%, #b89b5e 100%)",
    description: "A redesign and modernization of the Last Post memorial archive search experience, improving how users search, scan, and view commemorative records.",
    overview: "The Last Post archive is a memorial database that allows users to search records of veterans, Royal Canadian Legion members, and related commemorative entries. This project focused on redesigning the search experience from initial query to record detail while preserving the respectful tone expected of a memorial platform.",
    highlights: [
      "Restructured search into clear Personal Details, Military Service, and Legion Membership pathways",
      "Reduced cognitive load with minimal required input and progressive disclosure",
      "Replaced dense table results with readable record cards",
      "Redesigned record detail pages with stronger hierarchy and memorial tone",
      "Implemented print and save-as-PDF refinements for individual records",
      "Resolved browser caching issues with asset versioning"
    ],
    tools: ["HTML", "CSS", "JavaScript", "WordPress / PHP", "Responsive Design", "Accessibility", "Print CSS"],
    caseStudy: {
      deck: "Legion Magazine — Memorial Archive UX & Frontend Modernization",
      images: [
        {
          src: "images/Before-lastpost.jpeg",
          alt: "Original Last Post archive search interface before the redesign",
          caption: "Before: overloaded search flow and dated visual structure."
        },
        {
          src: "images/Search-personal.jpeg",
          alt: "Redesigned Last Post personal details search tab",
          caption: "After: focused Personal Details search with a clearer starting point."
        },
        {
          src: "images/search-military.jpeg",
          alt: "Redesigned Last Post military service search tab",
          caption: "Military Service tab separating service-related search context."
        },
        {
          src: "images/search-legionmember.jpeg",
          alt: "Redesigned Last Post Legion membership search tab",
          caption: "Legion Membership tab with location-driven search fields."
        },
        {
          src: "images/Search-results.jpeg",
          alt: "Card-based Last Post search results interface",
          caption: "Card-based results designed for faster scanning and comparison."
        },
        {
          src: "images/result-detail.jpeg",
          alt: "Redesigned Last Post record detail page",
          caption: "Record detail page with stronger hierarchy and print-ready structure."
        }
      ],
      sections: [
        {
          eyebrow: "Problem",
          title: "The original experience was functional, but created friction at every step.",
          body: [
            "Search was structured as a combined, step-based flow with too many fields presented at once. Users struggled to understand how to begin or refine a search, and results were displayed in dense, table-like layouts that were difficult to scan.",
            "Record pages lacked hierarchy and emotional presence. The visual design felt outdated and inconsistent with the significance of the memorial content."
          ]
        },
        {
          eyebrow: "Goals",
          title: "Make search clearer, faster, and more respectful.",
          bullets: [
            "Make the search process intuitive for first-time users",
            "Break complex search inputs into clearer, focused categories",
            "Improve scanability of search results",
            "Elevate the visual tone to reflect a respectful memorial experience",
            "Redesign record detail pages for clarity and structure",
            "Enable print and save-as-PDF functionality for records",
            "Ensure consistent experience by resolving browser caching issues"
          ]
        },
        {
          eyebrow: "Research & Discovery",
          title: "Users thought in contexts, not in advanced search modes.",
          body: [
            "Internal review and user feedback showed that most searches started with minimal information, often just a last name. Too many visible fields created hesitation and confusion.",
            "An early attempt to unify all search fields into a single flow proved counterproductive. Testing showed that separation and clarity outperformed consolidation."
          ]
        },
        {
          eyebrow: "UX Strategy",
          title: "Shift from a form-heavy workflow to a guided search system.",
          bullets: [
            "Break search into clear categories",
            "Reduce cognitive load by limiting visible inputs",
            "Use progressive disclosure to reveal complexity only when needed",
            "Prioritize readability and hierarchy in results and records",
            "Design for both quick lookup and deeper exploration"
          ]
        },
        {
          eyebrow: "Key Design Decisions",
          title: "The redesign focused on clarity, context, and respectful presentation.",
          decisions: [
            {
              title: "Tabbed Search System",
              text: "Replaced the combined search wizard with three focused entry points: Personal Details, Military Service, and Legion Membership."
            },
            {
              title: "Minimal Required Input",
              text: "Every form includes First Name and Last Name, but only Last Name is required so users can search with partial information."
            },
            {
              title: "Progressive Location Fields",
              text: "Country, province, and city fields reveal progressively, while Legion Branch options populate dynamically based on location."
            },
            {
              title: "Card-Based Search Results",
              text: "Dense tables were replaced with structured record cards that surface names and key details first."
            },
            {
              title: "Redesigned Record Detail Pages",
              text: "Record pages now use a prominent nameplate header and structured sections for personal, military, and membership details."
            },
            {
              title: "Print / Save as PDF",
              text: "A dedicated print-friendly layout supports saving and sharing memorial records."
            }
          ]
        },
        {
          eyebrow: "UI Design System",
          title: "Restrained, archival, and respectful.",
          body: [
            "The visual direction uses serif display typography for names and memorial titles, clean sans-serif UI text for metadata, navy and slate tones, muted blues, a soft parchment background, and subtle gold accents.",
            "Clean cards, subtle separators, and strong vertical rhythm reinforce the archival tone while improving usability."
          ]
        },
        {
          eyebrow: "Implementation",
          title: "Modern frontend patterns inside a legacy WordPress/PHP system.",
          bullets: [
            "Rebuilt frontend structure within a legacy WordPress/PHP plugin",
            "Introduced modular form patterns for each search category",
            "Implemented progressive disclosure using JavaScript",
            "Created reusable card components for results",
            "Designed and implemented a print-specific stylesheet",
            "Added cache-busting for CSS and JS assets to prevent stale UI issues"
          ]
        },
        {
          eyebrow: "Challenges & Iterations",
          title: "The strongest solution came from simplifying, not combining.",
          decisions: [
            {
              title: "Legacy Constraints",
              text: "The system was tightly coupled with backend query logic, so frontend patterns had to map cleanly to existing query modes."
            },
            {
              title: "Unified Search vs. Split Search",
              text: "The initial unified search approach created confusion, so the experience shifted to clearer tabbed categories."
            },
            {
              title: "Browser Caching Issues",
              text: "Returning users saw stale layouts due to cached CSS, which was resolved with cache-busting versioning."
            },
            {
              title: "Print Layout Bugs",
              text: "Hidden elements affected print output, so the print action was refined to generate a cloned, record-only print view."
            }
          ]
        },
        {
          eyebrow: "Results",
          title: "A clearer mental model and a more dignified record experience.",
          bullets: [
            "More intuitive search experience for first-time users",
            "Improved engagement with search results",
            "Faster ability to locate relevant records",
            "Cleaner, more respectful presentation of memorial data",
            "Reduced user confusion and support friction",
            "Improved readability across devices",
            "Reliable, consistent experience for returning visitors"
          ]
        },
        {
          eyebrow: "What I Learned",
          title: "Clarity, tone, and technical reality have to work together.",
          body: [
            "This project reinforced that clarity beats completeness. Separating complexity is often more effective than unifying it, especially when users arrive with partial information.",
            "It also emphasized that frontend decisions must respect backend realities in legacy systems, and that print experiences still matter for archival and commemorative content."
          ]
        }
      ]
    }
  },
  {
    id: "invictus-games-2025",
    title: "Invictus Games 2025",
    category: "Interactive Feature",
    tags: ["HTML", "CSS", "JavaScript", "CMS"],
    image: "images/Invictus-games.jpeg",
    award: "Silver — Best Website | Canadian Online Publishing Awards",
    year: "2025",
    client: "Legion Magazine / Canvet Publications",
    role: "Web Designer & Developer",
    url: "https://legionmagazine.com/features/Invictusgames2025/",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    description: "An award-winning interactive feature built for Legion Magazine covering the Invictus Games 2025. This project earned a Silver award for Best Website at the Canadian Online Publishing Awards — one of the highest honours in Canadian digital publishing.",
    overview: "The Invictus Games is an international adaptive sports competition for wounded, injured, and sick armed services personnel. This feature was designed to bring their stories to life through immersive web design, combining multimedia storytelling with editorial content.",
    highlights: [
      "Won Silver — Best Website at the Canadian Online Publishing Awards",
      "Fully responsive, mobile-first interactive layout",
      "Integrated multimedia assets including photography and video",
      "Accessibility-compliant (WCAG/AODA) design and development",
      "Built and deployed through CMS with cross-device QA testing"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Photoshop", "Adobe After Effects", "CMS Publishing", "WCAG / AODA"]
  },
  {
    id: "legion-100th-anniversary",
    title: "Royal Canadian Legion — 100th Anniversary",
    category: "Interactive Experience",
    tags: ["HTML", "CSS", "JavaScript", "Multimedia"],
    year: "2024",
    client: "Royal Canadian Legion",
    role: "Web Designer & Developer",
    url: "https://www.legion.ca/ourstory/",
    gradient: "linear-gradient(135deg, #2d1b00 0%, #5c3a00 100%)",
    image: "images/RCL.jpeg",
    video: "images/RCL-video.mp4",
    description: "A centennial interactive experience celebrating 100 years of the Royal Canadian Legion. Designed to honour the history, sacrifice, and legacy of Canadian veterans through rich digital storytelling.",
    overview: "This milestone project marked the Legion's 100th anniversary with an immersive online experience. The design drew on archival photography, historical timelines, and multimedia content to guide visitors through a century of Canadian military history and community service.",
    highlights: [
      "Centennial milestone project for a major national institution",
      "Historical timeline with archival imagery and multimedia",
      "Interactive navigation designed for broad audience accessibility",
      "Collaborated with editorial and communications teams",
      "Optimised for performance across all devices"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Photoshop", "Adobe Illustrator", "CMS Publishing", "WCAG / AODA"]
  },
  {
    id: "the-scheldt-campaign",
    title: "The Scheldt Campaign",
    category: "Multimedia Storytelling",
    tags: ["HTML", "CSS", "JavaScript", "Editorial"],
    year: "2023",
    client: "Legion Magazine / Canvet Publications",
    role: "Web Designer & Developer",
    url: "https://legionmagazine.com/features/the-scheldt-campaign/",
    gradient: "linear-gradient(135deg, #0d1b0d 0%, #1a3a1a 100%)",
    image: "images/scheldt.jpeg",
    video: "images/scheldt.mp4",
    description: "An interactive historical feature detailing the Battle of the Scheldt during World War II — one of Canada's most significant and costly military operations.",
    overview: "The Battle of the Scheldt in autumn 1944 was crucial in opening the port of Antwerp, helping to supply Allied forces across Northwestern Europe. This feature combines historical narrative, photography, and interactive design to tell that story in a way that honours both accuracy and emotional resonance.",
    highlights: [
      "Deep-dive historical storytelling with editorial photography",
      "Custom interactive layout for long-form content",
      "Multimedia integration including maps and archival imagery",
      "Designed for readers with no prior knowledge of the campaign",
      "Cross-browser tested"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Photoshop", "Adobe InDesign", "CMS Publishing"]
  },
  {
    id: "rcaf-100",
    title: "RCAF — 100 Years",
    category: "Interactive Feature",
    tags: ["HTML", "CSS", "JavaScript", "Multimedia"],
    year: "2024",
    client: "Legion Magazine / Canvet Publications",
    role: "Web Designer & Developer",
    url: "https://legionmagazine.com/features/rcaf-100/",
    gradient: "linear-gradient(135deg, #1a0a2e 0%, #3d1c6e 100%)",
    image: "images/RCAF.jpeg",
    video: "images/RCAF.mp4",
    description: "An interactive centennial feature celebrating 100 years of the Royal Canadian Air Force, tracing its evolution from early biplanes to modern jet fighters.",
    overview: "From its founding in 1924 to its role in modern international operations, the RCAF's century of service is a story of innovation, courage, and sacrifice. This feature used rich visual design and interactive elements to make that history accessible and engaging for a broad readership.",
    highlights: [
      "Centennial feature with strong visual identity",
      "Timeline-driven layout tracing 100 years of aviation history",
      "Integration of archival and contemporary photography",
      "Responsive design optimised for desktop and mobile"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Photoshop", "Adobe Illustrator", "CMS Publishing"]
  },
  {
    id: "those-damn-women",
    title: "Those Damn Women",
    category: "Digital Storytelling",
    tags: ["HTML", "CSS", "JavaScript", "Editorial"],
    year: "2023",
    client: "Legion Magazine / Canvet Publications",
    role: "Web Designer & Developer",
    url: "https://legionmagazine.com/features/those-damn-women/",
    gradient: "linear-gradient(135deg, #2e0a0a 0%, #6e1c1c 100%)",
    image: "images/those-damn-women.jpeg",
    video: "images/those-damn-women.mp4",
    description: "A digital storytelling project shining a light on the extraordinary contributions of women during wartime — often overlooked, always essential.",
    overview: "\"Those Damn Women\" is an editorial feature that reclaims the stories of women who served, supported, and sacrificed during times of war. The design prioritised emotional impact, using bold typography, portraiture, and a narrative-first layout to give these voices the prominence they deserve.",
    highlights: [
      "Narrative-led design with editorial photography",
      "Bold typographic treatment to amplify subject matter",
      "Sensitive, accessible design for a broad readership",
      "Collaborative project with editorial and research teams",
      "Fully responsive with strong mobile reading experience"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Photoshop", "Adobe InDesign", "CMS Publishing"]
  },
  {
    id: "afghanistan",
    title: "Afghanistan — Canada's Longest War",
    category: "Long-form Feature",
    tags: ["HTML", "CSS", "JavaScript", "Multimedia"],
    year: "2022",
    client: "Legion Magazine / Canvet Publications",
    role: "Web Designer & Developer",
    url: "https://legionmagazine.com/afghanistan-canadas-longest-war-interactive-story/",
    gradient: "linear-gradient(135deg, #1a1500 0%, #3d3200 100%)",
    image: "images/Afghanistan-cover.jpeg",
    video: "images/Afghanistan.mp4",
    description: "An interactive long-form multimedia feature on Canada's mission in Afghanistan — the country's longest and most complex modern military engagement.",
    overview: "Canada's involvement in Afghanistan from 2001 to 2014 touched thousands of families across the country. This long-form feature was designed to document that mission with depth and care — combining first-person accounts, archival photography, maps, and video into a cohesive, immersive narrative.",
    highlights: [
      "Long-form interactive storytelling with video integration",
      "Complex multimedia layout managing multiple content types",
      "Custom scroll-based interactions for narrative pacing",
      "Archival photography and video editing for web delivery",
      "Recognised internally as a benchmark for multimedia features"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Photoshop", "Adobe Premiere Pro", "Adobe After Effects", "CMS Publishing"]
  },
  {
    id: "operation-husky",
    title: "Operation Husky — Sicily",
    category: "Interactive Feature",
    tags: ["HTML", "CSS", "JavaScript", "Historical"],
    year: "2023",
    client: "Legion Magazine / Canvet Publications",
    role: "Web Designer & Developer",
    url: "https://legionmagazine.com/operation-husky-the-allies-take-sicily-interactive-story/",
    gradient: "linear-gradient(135deg, #001a1a 0%, #003d3d 100%)",
    image: "images/sicily.jpeg",
    video: "images/sicily.mp4",
    description: "An interactive feature exploring Operation Husky — the Allied invasion of Sicily in 1943 and Canada's pivotal role in one of WWII's largest amphibious assaults.",
    overview: "Operation Husky was a turning point in the Second World War. Canada's contribution to the invasion of Sicily in July 1943 was significant — and largely untold. This feature brought that story to a new generation through interactive maps, archival imagery, and editorial narrative.",
    highlights: [
      "Interactive maps illustrating the Allied campaign across Sicily",
      "Archival photography and historical document integration",
      "Narrative structure guiding readers through key battle phases",
      "Designed for readers unfamiliar with WWII history",
      "Responsive layout with strong desktop and mobile performance"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Photoshop", "Adobe Illustrator", "CMS Publishing"]
  },
  {
    id: "korea-the-war-without-end",
    title: "Korea — The War Without End",
    category: "Multimedia Storytelling",
    tags: ["HTML", "CSS", "JavaScript", "Multimedia"],
    year: "2022",
    client: "Legion Magazine / Canvet Publications",
    role: "Web Designer & Developer",
    url: "https://legionmagazine.com/korea-the-war-without-end-interactive-story/",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3d 100%)",
    image: "images/korea.jpeg",
    video: "images/korea.mp4",
    description: "A multimedia storytelling feature on the Korean War and its lasting impact — a conflict often called 'The Forgotten War', brought to life through immersive digital design.",
    overview: "The Korean War (1950–1953) saw over 26,000 Canadians serve, yet it remains one of the least-remembered conflicts in national memory. This feature aimed to change that — using multimedia storytelling to document the human cost and historical significance of Canada's involvement.",
    highlights: [
      "Multimedia-rich long-form feature with strong narrative arc",
      "Photography, video, and audio integrated into editorial layout",
      "Designed to engage readers with limited prior knowledge",
      "Scroll-paced storytelling for emotional engagement"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Photoshop", "Adobe Premiere Pro", "CMS Publishing"]
  },
  {
    id: "canada-and-the-great-war",
    title: "Canada & The Great War",
    category: "Interactive Feature",
    tags: ["HTML", "CSS", "JavaScript", "Historical"],
    year: "2022",
    client: "Legion Magazine / Canvet Publications",
    role: "Web Designer & Developer",
    url: "https://legionmagazine.com/features/canada-and-the-great-war-liberation/",
    gradient: "linear-gradient(135deg, #1a0d00 0%, #4a2800 100%)",
    image: "images/Canada-the-Great-War.jpeg",
    video: "images/Canada-the-Great-War.mp4",
    description: "An interactive feature covering Canada's defining role in the liberation campaigns of the First World War — from Vimy Ridge to the Hundred Days Offensive.",
    overview: "Canada's contribution to the First World War forged the nation's identity on the world stage. This feature traced the arc of Canada's involvement through key battles, pivotal moments, and the human stories behind them — designed to educate and move readers in equal measure.",
    highlights: [
      "Historical feature covering Canada's full WWI contribution",
      "Timeline-based interactive layout with archival imagery",
      "Editorial collaboration with historians and researchers",
      "Designed for educational and commemorative audiences",
      "Strong performance across devices"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Photoshop", "Adobe InDesign", "CMS Publishing"]
  },
  {
    id: "liberation-of-netherlands",
    title: "Liberation of the Netherlands",
    category: "Digital Storytelling",
    award: "Gold — Best Interactive Story | Canadian Online Publishing Awards 2020",
    tags: ["HTML", "CSS", "JavaScript", "Editorial"],
    year: "2023",
    client: "Legion Magazine / Canvet Publications",
    role: "Web Designer & Developer",
    url: "https://legionmagazine.com/features/liberation-of-netherlands/",
    gradient: "linear-gradient(135deg, #001a0d 0%, #003d1c 100%)",
    image: "images/netherlands.jpeg",
    video: "images/netherlands.mp4",
    description: "An interactive storytelling project on the liberation of the Netherlands during WWII — and the enduring bond between Canada and the Dutch people.",
    overview: "In 1945, Canadian forces liberated the Netherlands from Nazi occupation. The gratitude of the Dutch people toward Canada has lasted generations. This feature documented that liberation campaign and the profound relationship it created — a story of friendship as much as warfare.",
    highlights: [
      "Emotionally resonant design honouring a historic friendship",
      "Archival photography from the liberation campaign",
      "Editorial storytelling balancing history and human interest",
      "Featured testimonials and contemporary Dutch perspectives",
      "Fully responsive layout"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Photoshop", "Adobe InDesign", "CMS Publishing"]
  },
  {
    id: "the-october-crisis",
    title: "The October Crisis",
    category: "Interactive Feature",
    award: "Silver — Best Interactive Story | Canadian Online Publishing Awards 2020",
    tags: ["HTML", "CSS", "JavaScript", "Editorial"],
    year: "2020",
    client: "Legion Magazine / Canvet Publications",
    role: "Web Designer & Developer",
    url: "https://legionmagazine.com/features/theoctobercrisis/",
    gradient: "linear-gradient(135deg, #1a0000 0%, #4a0000 100%)",
    image: "images/october-crisis.jpeg",
    video: "images/october-crisis.mp4",
    description: "A historical interactive feature examining Canada's October Crisis of 1970 — the only peacetime invocation of the War Measures Act in Canadian history.",
    overview: "In October 1970, the FLQ kidnapped two government officials, triggering a constitutional crisis that changed Canada forever. This feature examined the events, decisions, and consequences of that month through an editorial lens — balancing historical analysis with compelling design.",
    highlights: [
      "Politically sensitive subject handled with editorial care",
      "Documentary-style design with archival news photography",
      "Timeline layout mapping the crisis day by day",
      "Strong typographic treatment for editorial gravitas",
      "Responsive and accessible across all platforms"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Photoshop", "Adobe InDesign", "CMS Publishing"]
  },
  {
    id: "canadas-ultimate-story",
    title: "Canada's Ultimate Story",
    category: "Corporate Website",
    tags: ["WordPress", "PHP", "CSS"],
    year: "2019 – Present",
    client: "Canvet Publications Ltd.",
    role: "Web Designer & Administrator",
    url: "https://canadasultimatestory.com/",
    gradient: "linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)",
    image: "images/CUS.jpg",
    video: "images/CUS.mp4",
    description: "A standalone magazine website for Canada's Ultimate Story — a publication by Canvet Publications Ltd. celebrating Canadian history, culture, and identity.",
    overview: "Canada's Ultimate Story is a premium magazine publication dedicated to telling the stories that define Canada. As Web Designer and Administrator, I designed and developed the site to reflect the editorial quality of the publication — clean, authoritative, and accessible across all devices.",
    highlights: [
      "Full website design and development for a standalone publication",
      "Editorial CMS publishing workflows and content management",
      "Responsive design optimised for desktop and mobile",
      "Consistent visual identity aligned with the print publication",
      "Ongoing administration and maintenance"
    ],
    tools: ["Figma", "HTML / CSS / JavaScript", "Adobe Creative Cloud"]
  },
  {
    id: "legion-magazine",
    title: "Legion Magazine",
    category: "Corporate Website",
    tags: ["WordPress", "PHP", "CSS", "WooCommerce"],
    year: "2019 – Present",
    client: "Canvet Publications Ltd.",
    role: "Web Designer & Administrator",
    url: "https://legionmagazine.com/",
    gradient: "linear-gradient(135deg, #1a1400 0%, #3d3000 100%)",
    image: "images/LM.jpg",
    video: "images/LM.mp4",
    description: "The corporate website for Legion Magazine — Canada's largest veterans' publication — featuring articles, multimedia stories, digital magazine content, and an integrated e-commerce store.",
    overview: "As Web Designer and Administrator at Canvet Publications, I have been responsible for the ongoing design, development, and management of legionmagazine.com since 2019. This includes the editorial site, interactive features, and the WooCommerce-powered subscription and retail store.",
    highlights: [
      "Ongoing web design, development, and administration since 2019",
      "Manages editorial CMS publishing workflows and QA testing",
      "Integrated WooCommerce store for subscriptions and products",
      "Accessibility compliance (WCAG / AODA) across all pages",
      "Cross-device optimisation and performance monitoring",
      "Launched and maintains all interactive storytelling features"
    ],
    tools: ["Figma", "WordPress", "WooCommerce", "PHP", "HTML / CSS / JavaScript", "Adobe Creative Cloud", "WCAG / AODA"],
    caseStudy: {
      deck: "Final Figma page designs for a refreshed Legion Magazine website system.",
      galleryStyle: "figma",
      images: [
        {
          src: "images/LM/home.jpeg",
          alt: "Legion Magazine homepage final Figma design",
          caption: "Homepage design establishing the editorial hierarchy, feature areas, and publication rhythm.",
          layout: "feature"
        },
        {
          src: "images/LM/home-mobile.jpeg",
          alt: "Legion Magazine homepage mobile final Figma design",
          caption: "Mobile homepage flow designed as a long-form editorial reading path.",
          layout: "phone"
        },
        {
          src: "images/LM/header-design.jpg",
          alt: "Legion Magazine header and navigation design exploration",
          caption: "Header system and navigation treatment for the site-wide experience.",
          layout: "wide"
        },
        {
          src: "images/LM/postpage.jpeg",
          alt: "Legion Magazine article page final Figma design",
          caption: "Article page design focused on readable long-form content, media placement, and related pathways.",
          layout: "wide"
        },
        {
          src: "images/LM/postpage-mobile.jpeg",
          alt: "Legion Magazine article page mobile final Figma design",
          caption: "Mobile article layout preserving hierarchy and reading comfort on narrow screens.",
          layout: "phone"
        },
        {
          src: "images/LM/CategoryArchive.jpeg",
          alt: "Legion Magazine category archive final Figma design",
          caption: "Category archive layout for browsing article collections and recurring editorial themes.",
          layout: "wide"
        },
        {
          src: "images/LM/search.jpeg",
          alt: "Legion Magazine search results final Figma design",
          caption: "Search results page designed for quick scanning across editorial content.",
          layout: "wide"
        },
        {
          src: "images/LM/Newsletter.jpeg",
          alt: "Legion Magazine newsletter page final Figma design",
          caption: "Newsletter signup page with a focused conversion path and publication context.",
          layout: "wide"
        },
        {
          src: "images/LM/Newsletter-mobile.jpeg",
          alt: "Legion Magazine newsletter page mobile final Figma design",
          caption: "Mobile newsletter layout with simplified hierarchy and compact form placement.",
          layout: "phone"
        },
        {
          src: "images/LM/Newsletter-mobile-1.jpeg",
          alt: "Alternate Legion Magazine newsletter mobile final Figma design",
          caption: "Extended mobile newsletter state showing the full responsive flow.",
          layout: "phone"
        },
        {
          src: "images/LM/404.jpeg",
          alt: "Legion Magazine 404 page final Figma design",
          caption: "404 page design keeping the error state aligned with the editorial brand.",
          layout: "wide"
        },
        {
          src: "images/LM/404-mobile.jpeg",
          alt: "Legion Magazine 404 page mobile final Figma design",
          caption: "Mobile 404 treatment for a consistent responsive error state.",
          layout: "phone"
        },
        {
          src: "images/LM/404-mobile-1.jpeg",
          alt: "Alternate Legion Magazine 404 page mobile final Figma design",
          caption: "Alternate mobile 404 view showing the full page composition.",
          layout: "phone"
        },
        {
          src: "images/LM/Text%20styles.jpg",
          alt: "Legion Magazine typography styles from Figma",
          caption: "Typography styles documenting the visual language used across the redesign.",
          layout: "wide"
        }
      ],
      sections: [
        {
          eyebrow: "Design System",
          title: "A Figma-led refresh for a publication site with many content types.",
          body: [
            "The designs define a stronger editorial system for Legion Magazine, covering the homepage, article pages, archive views, search, newsletter signup, navigation, typography, and error states.",
            "The goal was to create a cleaner and more flexible visual language that could support daily publishing, long-form storytelling, subscriptions, and recurring site utilities."
          ]
        },
        {
          eyebrow: "Page Coverage",
          title: "The showcase presents the site as a connected system, not isolated screens.",
          bullets: [
            "Homepage and mobile homepage",
            "Article detail page and mobile article page",
            "Category archive and search results",
            "Newsletter signup flows",
            "404 error states",
            "Header and typography design system references"
          ]
        },
        {
          eyebrow: "Design Focus",
          title: "Editorial hierarchy, flexible browsing, and responsive continuity.",
          body: [
            "The final screens balance publication identity with practical CMS needs. Large story moments, compact article lists, search utility, and mobile reading patterns are treated as parts of the same system.",
            "The mobile designs are included alongside desktop screens to show how the Figma direction adapts across real editorial workflows."
          ]
        }
      ]
    }
  }
];
