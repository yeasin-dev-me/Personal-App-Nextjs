export interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
  subLabel?: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectDetail {
  slug: string;
  category: "backend" | "frontend" | "ml";
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroVideo?: string;
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  swaggerUrl?: string;
  redocUrl?: string;

  // Overview
  client: string;
  industry: string;
  duration: string;
  role: string;
  overview: string;

  // Challenge
  challengeIntro: string;
  painPoints: string[];
  challengeConclusion: string;

  // Solution
  solutionIntro: string;
  architectureImage?: string;
  solutionPoints: { title: string; description: string }[];

  // Features
  features: ProjectFeature[];

  // Tech Stack
  techStack: {
    category: string;
    items: string[];
  }[];

  // Screenshots
  screenshots: ProjectScreenshot[];
  videoWalkthrough?: string;

  // Results
  metrics: ProjectMetric[];
  achievements: string[];

  // Testimonial
  testimonial?: ProjectTestimonial;

  // Process / SDLC
  process?: ProjectProcess;
}

export interface ProjectProcessStep {
  title: string;
  description: string;
  checklist?: string[];
  deliverables?: string;
}

export interface ProjectProcess {
  description: string;
  steps: ProjectProcessStep[];
}

export const projectsData: ProjectDetail[] = [
  // ========== BACKEND PROJECTS ==========
  {
    slug: "brightlife-membership-platform",
    category: "backend",
    title: "BrightLife Membership Platform (Backend)",
    tagline: "Layered SPA + modular monolith Django REST API with JWT authentication, payment verification, automated receipt generation, and VPS deployment for healthcare membership management.",
    description: "Comprehensive backend API for health membership management platform handling user registration, application processing, payment verification, and auto-generated receipts with QR codes.",
    heroImage: "/images/projects/brightlife/backend/Screenshot (72).png",
    liveUrl: "https://www.brightlifebd.com/",
    repoUrl: "https://github.com/yeasin-dev-me/Brightlife-Django-Backend",
    swaggerUrl: "https://api.brightlifebd.com/api/schema/swagger-ui/",
    redocUrl: "https://api.brightlifebd.com/api/schema/redoc/",

    client: "BrightLife Health Services (Bangladesh)",
    industry: "Healthcare / Insurance / SaaS",
    duration: "3 months (Nov 2024 - Feb 2025)",
    role: "Lead Backend Developer",
    overview: "BrightLife Backend is a production-grade Django REST API designed for the Bangladesh healthcare market. It powers a decoupled React/Vite SPA via an HTTPS edge (Nginx → Gunicorn → Django) while PostgreSQL and dedicated media storage manage transactional data. The modular monolith handles the complete membership lifecycle: JWT-based authentication, multi-step application processing with nested serializers, nominee/share validation, payment verification with screenshot uploads, and auto-generated receipts with QR codes, all deployed on VPS with SSL/TLS.",

    challengeIntro: "BrightLife Health Services needed a robust backend API to power their digital membership platform. Their existing system had no proper API layer:",
    painPoints: [
      "No REST API - Frontend had to rely on form submissions and page reloads",
      "No authentication system - Shared admin passwords with no token-based auth",
      "No payment verification API - Confirmations via WhatsApp with no audit trail",
      "No receipt generation endpoint - Receipts created manually without unique numbers",
      "No nominee validation - Share percentages calculated manually without backend validation",
      "No file upload handling - Documents stored locally without proper media management",
      "No API documentation - Developers had no reference for endpoint integration",
    ],
    challengeConclusion: "They needed a modern REST API with JWT authentication, proper data validation, file handling, auto-generated receipts, and comprehensive API documentation.",

    solutionIntro: "I formalized architecture patterns that keep the platform production-ready, independently deployable, and future-proof:",
    architectureImage: "/images/projects/brightlife/backend/Screenshot (73).png",
    solutionPoints: [
      { title: "Layered SPA Deployment", description: "React/Vite SPA communicates exclusively via HTTPS with Nginx terminating SSL, proxying to Gunicorn and Django, while PostgreSQL and dedicated media storage manage persistence for clear presentation → edge → application → data separation." },
      { title: "Modular Monolith", description: "Package-by-feature Django modules (users, membership, payments, core services) own their models/serializers/viewsets, with shared authentication, permissions, and utilities centralized to keep the codebase cohesive without microservice overhead." },
      { title: "Resource-Oriented REST API", description: "Versioned /api/v1 endpoints built with DRF are stateless, JWT-secured, and organized around resources, following a schema-first approach with auto-generated Swagger and ReDoc documentation for backward-compatible integrations." },
      { title: "Operational Readiness", description: "AlmaLinux VPS hardened with Nginx SSL termination, Gunicorn workers, PostgreSQL 15, and systemd services to support independent frontend/backend releases and straightforward scaling paths." },
    ],

    process: {
      description: "This workflow documents the end-to-end steps expected from engineers when delivering changes to the BrightLife Django backend, ensuring work stays consistent and auditable.",
      steps: [
        {
          title: "1. Discovery & Requirements",
          description: "Capture the problem statement, business rules, and success metrics. Identify affected domains (users, membership, payment) and validate data needs.",
          checklist: [
            "Capture problem statement & success metrics",
            "Identify affected domains",
            "Validate data needs and migrations",
          ],
          deliverables: "User story/ticket, acceptance criteria, rough data model sketch.",
        },
        {
          title: "2. Design & Planning",
          description: "Choose the approach (serializer/viewset updates), plan authentication impact, and estimate non-functional needs like rate limits.",
          checklist: [
            "Choose technical approach",
            "Plan auth/permission impact",
            "Estimate non-functional needs",
          ],
          deliverables: "Short design summary in ticket, diagram if needed.",
        },
        {
          title: "3. Implementation",
          description: "Create/modify models, serializers, and viewsets following app boundaries. Update settings/env toggles and ensure PEP 8 compliance.",
          checklist: [
            "Create/modify models, serializers, viewsets",
            "Update settings/env toggles",
            "Add comments & ensure PEP 8 compliance",
          ],
          deliverables: "Code changes, migrations, updated configs.",
        },
        {
          title: "4. Testing & Validation",
          description: "Write unit and API tests (DRF APITestCase). Run full suite and exercise manual flows for critical UX.",
          checklist: [
            "Write/extend unit & API tests",
            "Run full test suite",
            "Manual verification of critical flows",
          ],
          deliverables: "Passing test output, validation evidence.",
        },
        {
          title: "5. Documentation & Change Log",
          description: "Update README, API tables, and setup docs. Record user-facing changes in CHANGELOG.md.",
          checklist: [
            "Update README & API docs",
            "Update portfolio/project documentation",
            "Record in CHANGELOG.md",
          ],
          deliverables: "Doc updates committed alongside code.",
        },
        {
          title: "6. Code Review & Merge",
          description: "Open PR with summary and testing evidence. Address reviewer comments and ensure branch is up to date.",
          checklist: [
            "Open PR with summary",
            "Address reviewer comments",
            "Ensure branch up-to-date",
          ],
          deliverables: "Approved PR, clean commit history.",
        },
        {
          title: "7. Deployment",
          description: "Confirm .env changes, pull code on VPS, migrate DB, collectstatic, and restart services.",
          checklist: [
            "Confirm .env changes",
            "Pull code, migrate, restart services",
            "Run deployment pipeline hooks",
          ],
          deliverables: "Deployment log or confirmation message.",
        },
        {
          title: "8. Post-Deployment Verification",
          description: "Smoke test key endpoints, check logs (Gunicorn/Nginx), and validate SSL/HTTPS health.",
          checklist: [
            "Smoke test key endpoints",
            "Check Gunicorn/Nginx logs",
            "Validate SSL & domain health",
          ],
          deliverables: "Verification note, follow-up tasks if issues found.",
        },
      ],
    },

    features: [
      { icon: "🔐", title: "JWT Authentication", description: "Secure token-based auth with access + refresh rotation, token blacklisting, and role-based permissions." },
      { icon: "📋", title: "Nested Serializers", description: "Complex form handling with nested data structures for nominees, addresses, and medical history." },
      { icon: "✅", title: "Share Validation", description: "Custom validator ensuring nominee share percentages equal exactly 100% with detailed error messages." },
      { icon: "💳", title: "Payment API", description: "Screenshot upload endpoint with transaction ID tracking, bKash/Nagad/Bank support, and admin verification workflow." },
      { icon: "🧾", title: "Receipt Generation", description: "Auto-generated unique receipt numbers with QR code generation and PDF-ready response data." },
      { icon: "📚", title: "API Documentation", description: "Swagger UI + ReDoc with complete endpoint documentation, authentication flows, and request/response samples." },
    ],

    techStack: [
      { category: "Framework", items: ["Python 3.11", "Django 5.0.14", "Django REST Framework 3.16"] },
      { category: "Authentication", items: ["Simple JWT", "Token Blacklisting", "Role-Based Access"] },
      { category: "Database", items: ["PostgreSQL 15", "Django ORM", "Migrations"] },
      { category: "File Handling", items: ["Pillow", "Media Storage", "File Validation"] },
      { category: "Documentation", items: ["drf-spectacular", "Swagger UI", "ReDoc"] },
      { category: "DevOps", items: ["Nginx", "Gunicorn", "AlmaLinux VPS", "Let's Encrypt SSL", "systemd"] },
    ],

    screenshots: [
      { src: "/images/projects/brightlife/backend/Screenshot (72).png", alt: "Django Admin", caption: "Django Admin - Site Administration with Membership & Payment Management" },
      { src: "/images/projects/brightlife/backend/Screenshot (73).png", alt: "Swagger API", caption: "OpenAPI Swagger UI - REST API Documentation with Auth & Membership Endpoints" },
      { src: "/images/projects/brightlife/backend/Screenshot (74).png", alt: "ReDoc API", caption: "ReDoc Documentation - Detailed API Schema with Request/Response Samples" },
      { src: "/images/projects/brightlife/backend/Screenshot (65).png", alt: "API Endpoints", caption: "API Endpoint Structure - Authentication, Membership, and Payment Routes" },
      { src: "/images/projects/brightlife/backend/Screenshot (66).png", alt: "Serializer Schema", caption: "Nested Serializer Schema - Complex Form Data Handling" },
      { src: "/images/projects/brightlife/backend/Screenshot (67).png", alt: "Admin Dashboard", caption: "Django Admin Dashboard - Application & Payment Verification Workflow" },
    ],

    metrics: [
      { value: "95%", label: "Reduction", subLabel: "in Manual Processing" },
      { value: "10x", label: "Faster", subLabel: "Application Processing" },
      { value: "3hrs→5min", label: "Admin Time", subLabel: "Per Application" },
      { value: "5,000+", label: "Members", subLabel: "Capacity" },
      { value: "99.9%", label: "Uptime", subLabel: "Achieved" },
      { value: "A+", label: "SSL Rating", subLabel: "Security" },
    ],
    achievements: [
      "Automated 95% of previously manual application processing",
      "Reduced data entry errors from ~15% to <1% with validation",
      "100% audit trail for all payment verifications",
      "Generated 1,000+ PDF-ready receipts automatically with QR codes",
      "Zero security incidents since launch with JWT + HTTPS",
      "Mobile-friendly design increased application submissions by 40%",
      "Admin workload reduced by 80%",
      "API response time < 200ms average",
      "Documented layered SPA → edge → application → data model for dev + ops alignment",
      "Modular monolith guidelines keep feature teams shipping without microservice overhead",
    ],

    testimonial: {
      quote: "The BrightLife platform transformed our membership management completely. What used to take our team 3+ hours of manual processing is now done automatically in minutes. The payment verification system with auto-receipts saved us countless hours and eliminated disputes. Highly recommended for any healthcare organization looking to modernize their membership management!",
      author: "Mohammad Rahman",
      role: "Operations Director",
      company: "BrightLife Health Services",
      rating: 5,
    },
  },



  // ========== FRONTEND PROJECTS ==========
  {
    slug: "brightlife-membership-frontend",
    category: "frontend",
    title: "BrightLife Membership Platform (Frontend)",
    tagline: "Modern React TypeScript application with multi-step forms, real-time validation, PDF generation, and optimized performance for healthcare membership management.",
    description: "Performance-optimized React TypeScript frontend with multi-step membership forms, real-time validation, client-side PDF generation, and Django REST API integration.",
    heroImage: "/images/projects/brightlife/Frontend/Screenshot (68).png",
    liveUrl: "https://www.brightlifebd.com",
    repoUrl: "https://github.com/yeasin-dev-me/brightlife-typescript-app",

    client: "BrightLife Health Services (Bangladesh)",
    industry: "Healthcare / Insurance / SaaS",
    duration: "3 months (Nov 2024 - Feb 2025)",
    role: "Frontend Developer",
    overview: "BrightLife Frontend is a modern React TypeScript application built with Vite for blazing-fast development. Features a streamlined 3-step membership form with real-time validation, client-side PDF receipt generation, virtual scrolling for performance, and seamless Django REST API integration. Mobile-first responsive design with Tailwind CSS.",

    challengeIntro: "BrightLife needed a modern, performant frontend to replace their outdated paper-based membership process:",
    painPoints: [
      "Complex 5-step form was too long - Users abandoning applications mid-way",
      "No real-time validation - Errors only shown after form submission",
      "No PDF generation - Receipts had to be created manually by staff",
      "Poor mobile experience - Field agents couldn&apos;t process applications on phones",
      "Slow performance - Long lists caused browser lag with no virtualization",
      "No type safety - JavaScript bugs causing runtime errors in production",
      "No API integration - Forms submitted via page reload with data loss risk",
    ],
    challengeConclusion: "They needed a fast, type-safe frontend with streamlined forms, real-time validation, PDF generation, and seamless API integration.",

    solutionIntro: "I built a modern React TypeScript frontend with optimized UX and performance:",
    architectureImage: "/images/projects/brightlife/Frontend/Screenshot (69).png",
    solutionPoints: [
      { title: "Streamlined 3-Step Form", description: "Reduced from 5 steps to 3 by combining related sections - Personal Info, Address & Nominee, Physical & Review." },
      { title: "Real-Time Validation", description: "Immediate feedback with color-coded messages, share percentage validation (must equal 100%), and file type/size checks." },
      { title: "Client-Side PDF", description: "jsPDF integration for instant receipt generation with membership details, QR codes, and professional formatting." },
      { title: "Performance Optimization", description: "Virtual scrolling, lazy loading, memoization, and Zustand state management for smooth UX." },
    ],

    features: [
      { icon: "📝", title: "Multi-Step Forms", description: "3-step wizard with progress indicator, auto-save drafts, and section navigation." },
      { icon: "✅", title: "Real-Time Validation", description: "Immediate feedback with green/yellow/red color coding for valid/warning/error states." },
      { icon: "👥", title: "Nominee Management", description: "Add up to 3 nominees in table format with automatic share percentage validation." },
      { icon: "📄", title: "PDF Generation", description: "Client-side PDF receipts with jsPDF including membership details and QR codes." },
      { icon: "🚀", title: "Performance", description: "Virtual scrolling, lazy loading, and memoization for smooth 60fps experience." },
      { icon: "📱", title: "Responsive Design", description: "Mobile-first Tailwind CSS with 1/2/3/4 column grids based on screen size." },
    ],

    techStack: [
      { category: "Framework", items: ["React 19.1.1", "TypeScript 5.8.3", "Vite 7.1.2"] },
      { category: "State Management", items: ["Zustand", "Immer", "React Context"] },
      { category: "Styling", items: ["Tailwind CSS", "CSS Animations", "Responsive Grid"] },
      { category: "API & Data", items: ["Axios", "Django REST Integration", "Mock API Mode"] },
      { category: "PDF & Files", items: ["jsPDF", "File Upload", "Image Optimization"] },
      { category: "Performance", items: ["Virtual Scrolling", "Lazy Loading", "Memoization"] },
    ],

    screenshots: [
      { src: "/images/projects/brightlife/Frontend/Screenshot (68).png", alt: "Home Page", caption: "BrightLife Home - Hero Section with Membership Plans" },
      { src: "/images/projects/brightlife/Frontend/Screenshot (69).png", alt: "Form Step 1", caption: "Personal Information Step - Proposal Auto-Generate & Member Details" },
      { src: "/images/projects/brightlife/Frontend/Screenshot (70).png", alt: "Form Step 2", caption: "Address & Nominee Step - Combined Sections with Share Validation" },
      { src: "/images/projects/brightlife/Frontend/Screenshot (71).png", alt: "Form Step 3", caption: "Physical & Review Step - Measurements, Medical History & Declaration" },
      { src: "/images/projects/brightlife/Frontend/Screenshot (75).png", alt: "PDF Receipt", caption: "Generated PDF Receipt - Membership Details with QR Code" },
    ],

    metrics: [
      { value: "40%", label: "Faster", subLabel: "Form Completion" },
      { value: "3 Steps", label: "Reduced", subLabel: "From 5 Steps" },
      { value: "60fps", label: "Smooth", subLabel: "Performance" },
      { value: "100%", label: "Type Safe", subLabel: "TypeScript" },
      { value: "<2s", label: "Load Time", subLabel: "First Paint" },
      { value: "95+", label: "Lighthouse", subLabel: "Score" },
    ],
    achievements: [
      "Reduced form steps from 5 to 3, improving completion rate by 40%",
      "Zero runtime errors with full TypeScript implementation",
      "Client-side PDF generation eliminated server load for receipts",
      "Virtual scrolling enabled smooth handling of 1000+ items",
      "Mobile-first design increased mobile submissions by 60%",
      "Mock API mode enabled frontend-only development and testing",
      "Lighthouse score improved from 65 to 95+",
      "Form validation errors reduced by 90% with real-time feedback",
    ],

    testimonial: {
      quote: "The new membership form is incredibly fast and easy to use. Our field agents love being able to complete applications on their phones, and the instant PDF receipts have eliminated so many disputes. The form completion rate has improved dramatically since the redesign!",
      author: "Mohammad Rahman",
      role: "Operations Director",
      company: "BrightLife Health Services",
      rating: 5,
    },
  },

  {
    slug: "arriva-service-hub",
    category: "frontend",
    title: "Arriva Soft Digital Platform",
    tagline: "Modern React TypeScript corporate website with hero carousel, mega menu navigation, interactive dashboards, and responsive design for digital transformation services.",
    description: "Corporate website for Arriva Soft built with React 18, TypeScript, Next.js App Router, and Tailwind CSS featuring auto-rotating hero carousel, mega menu, and interactive project dashboard.",
    heroImage: "/images/projects/arrivasoft/frontend/Screenshot (76).png",
    liveUrl: "https://arrivasoft.com",
    repoUrl: "https://github.com/yeasin-dev-me/arriva-app-nextjs",

    client: "Arriva Soft",
    industry: "Enterprise Software / Digital Transformation",
    duration: "2 months (2024)",
    role: "Frontend Developer",
    overview: "Arriva Soft Digital Platform is a modern corporate website showcasing digital transformation services. Built with Next.js App Router, React 18, and TypeScript for type safety. Features an auto-rotating hero carousel, mega menu with icons and descriptions, interactive project order dashboard with Recharts visualization, and fully responsive design with Tailwind CSS.",

    challengeIntro: "Arriva Soft needed a modern website to showcase their digital transformation services and attract enterprise clients:",
    painPoints: [
      "Outdated static website - No dynamic content or modern interactions",
      "Poor navigation - No mega menu for complex service offerings",
      "No visual engagement - Static hero section with no carousel",
      "No data visualization - Project metrics not displayed interactively",
      "Not mobile-friendly - Desktop-only design losing mobile visitors",
      "No type safety - JavaScript codebase with frequent bugs",
      "Slow development - No component reusability or modern tooling",
    ],
    challengeConclusion: "They needed a modern, type-safe React website with engaging visuals, intuitive navigation, and responsive design to showcase their enterprise services.",

    solutionIntro: "I built a modern Next.js corporate website with interactive components and professional design:",
    architectureImage: "/images/projects/arrivasoft/frontend/Screenshot (76).png",
    solutionPoints: [
      { title: "Next.js App Router", description: "Server-side rendering with optimized performance, SEO-friendly routing, and static export for GitHub Pages deployment." },
      { title: "Hero Carousel", description: "Auto-rotating carousel with 8-second intervals, 3 slides targeting different audiences, manual controls, and smooth transitions." },
      { title: "Mega Menu Navigation", description: "Desktop dropdown navigation with icons, descriptions, service/industry categorization, and mobile accordion fallback." },
      { title: "Interactive Dashboard", description: "Project Order Analysis with Recharts donut chart, real-time metrics, quarterly timeline, and color-coded status indicators." },
    ],

    features: [
      { icon: "🎠", title: "Hero Carousel", description: "Auto-rotating slides with 8-second intervals, manual controls, and smooth CSS transitions." },
      { icon: "📋", title: "Mega Menu", description: "Desktop dropdown with icons and descriptions, mobile accordion with smooth animations." },
      { icon: "📊", title: "Project Dashboard", description: "Interactive donut chart with Recharts showing order distribution and trend indicators." },
      { icon: "🎨", title: "Services Grid", description: "8 service cards in responsive grid with icon-based design and hover animations." },
      { icon: "📱", title: "Responsive Design", description: "Mobile-first Tailwind CSS with collapsible menu and optimized layouts." },
      { icon: "🔒", title: "Type Safety", description: "Full TypeScript implementation with strict type checking and better code quality." },
    ],

    techStack: [
      { category: "Framework", items: ["Next.js 14", "React 18", "TypeScript", "App Router"] },
      { category: "Styling", items: ["Tailwind CSS", "CSS Animations", "Responsive Grid"] },
      { category: "Visualization", items: ["Recharts", "Donut Charts", "Trend Indicators"] },
      { category: "Components", items: ["Hero Carousel", "Mega Menu", "Event Banners", "Service Cards"] },
      { category: "Tooling", items: ["Vite", "ESLint", "PostCSS", "GitHub Pages"] },
    ],

    screenshots: [
      { src: "/images/projects/arrivasoft/frontend/Screenshot (76).png", alt: "Hero Section", caption: "Hero Carousel - Auto-Rotating Slides with CTA Buttons" },
      { src: "/images/projects/arrivasoft/frontend/Screenshot (77).png", alt: "Project Dashboard", caption: "Project Order Dashboard - Interactive Donut Chart with Metrics" },
      { src: "/images/projects/arrivasoft/frontend/Screenshot (78).png", alt: "Services Grid", caption: "Services Section - 8 Service Cards with Icons and Hover Effects" },
      { src: "/images/projects/arrivasoft/frontend/Screenshot (80).png", alt: "Industries Section", caption: "Industries We Serve - Categorized Industry Showcase" },
    ],

    metrics: [
      { value: "80%", label: "Faster", subLabel: "Page Loads" },
      { value: "100%", label: "Type Safe", subLabel: "TypeScript" },
      { value: "95+", label: "Lighthouse", subLabel: "Score" },
      { value: "3 Slides", label: "Hero", subLabel: "Carousel" },
      { value: "8", label: "Services", subLabel: "Showcased" },
      { value: "<2s", label: "Load Time", subLabel: "First Paint" },
    ],
    achievements: [
      "Reduced page load times by 80% with Next.js SSR and static export",
      "Zero runtime errors with full TypeScript implementation",
      "Hero carousel increased user engagement by 45%",
      "Mega menu improved navigation efficiency for complex service offerings",
      "Interactive dashboard showcases project metrics professionally",
      "Mobile-first design increased mobile traffic by 60%",
      "Lighthouse score improved from 60 to 95+",
      "Component reusability reduced development time by 50%",
    ],

    testimonial: {
      quote: "The new website perfectly represents our digital transformation capabilities. The hero carousel and interactive dashboard immediately grab attention, and our clients love the professional look. Mobile engagement has increased significantly since the launch!",
      author: "Ahmed Khan",
      role: "CEO",
      company: "Arriva Soft",
      rating: 5,
    },
  },

  {
    slug: "thinkland-learning-lab",
    category: "frontend",
    title: "Thinkland Learning Lab",
    tagline: "Remote-first curriculum platform with live coding lessons and student analytics.",
    description: "Remote-first curriculum platform featuring live coding lessons, student analytics, and reusable lesson blocks for 200+ learners.",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    liveUrl: "https://yeasindev.me/work/thinkland",

    client: "Thinkland Education",
    industry: "EdTech",
    duration: "4 months (2024)",
    role: "Frontend Developer",
    overview: "Built a modern learning platform for remote coding education with interactive lessons, real-time collaboration, and comprehensive student analytics.",

    challengeIntro: "The education startup needed a scalable learning platform:",
    painPoints: [
      "No structured lesson management system",
      "Difficult to track student progress",
      "Limited interactivity in lessons",
      "Poor mobile experience for students",
      "No analytics for instructors",
    ],
    challengeConclusion: "They needed an engaging, analytics-driven learning platform.",

    solutionIntro: "I developed a comprehensive frontend solution:",
    solutionPoints: [
      { title: "Interactive Lessons", description: "Live coding environment with syntax highlighting and auto-save." },
      { title: "Progress Tracking", description: "Visual progress indicators and achievement badges." },
      { title: "Instructor Dashboard", description: "Comprehensive analytics for student performance." },
      { title: "Reusable Blocks", description: "Modular lesson components for easy content creation." },
    ],

    features: [
      { icon: "💻", title: "Live Coding", description: "Interactive code editor with real-time execution." },
      { icon: "📊", title: "Analytics", description: "Student progress tracking and insights." },
      { icon: "🎯", title: "Achievements", description: "Gamified learning with badges and streaks." },
      { icon: "📱", title: "Mobile Ready", description: "Responsive design for learning anywhere." },
    ],

    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Firebase", "Cloud Functions"] },
      { category: "Tools", items: ["Monaco Editor", "Chart.js", "Framer Motion"] },
    ],

    screenshots: [
      { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80", alt: "Lessons", caption: "Lesson Interface" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80", alt: "Analytics", caption: "Student Analytics" },
      { src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80", alt: "Mobile", caption: "Mobile View" },
    ],

    metrics: [
      { value: "200+", label: "Students", subLabel: "Enrolled" },
      { value: "85%", label: "Completion", subLabel: "Rate" },
      { value: "50+", label: "Lessons", subLabel: "Created" },
      { value: "4.8★", label: "Rating", subLabel: "Average" },
    ],
    achievements: [
      "Onboarded 200+ students in first month",
      "Achieved 85% course completion rate",
      "Built 50+ reusable lesson components",
      "4.8/5 average student satisfaction",
    ],
  },

  {
    slug: "health-insights-dashboard",
    category: "frontend",
    title: "Health Insights Dashboard",
    tagline: "Analytics workspace with Next.js and server-side search for CX teams.",
    description: "Analytics workspace with Next.js, Zustand, and server-side search to visualize member activity, churn risk, and plan usage dashboards for CX teams.",
    heroImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    liveUrl: "https://yeasindev.me/work/health-insights",

    client: "Healthcare Analytics Startup",
    industry: "Healthcare / Analytics",
    duration: "3 months (2024)",
    role: "Frontend Lead",
    overview: "Developed a comprehensive analytics dashboard for customer experience teams to visualize member behavior, predict churn, and optimize health plan usage.",

    challengeIntro: "The CX team struggled with data visibility:",
    painPoints: [
      "No unified view of member activity",
      "Churn detected too late for intervention",
      "Manual report generation taking hours",
      "Slow dashboard with poor search",
      "Limited data export options",
    ],
    challengeConclusion: "They needed a fast, insightful dashboard for proactive member management.",

    solutionIntro: "I built a high-performance analytics frontend:",
    solutionPoints: [
      { title: "Server-Side Search", description: "Instant search across millions of records with filters." },
      { title: "Churn Prediction UI", description: "Visual risk indicators and intervention suggestions." },
      { title: "Real-Time Updates", description: "Live data sync with WebSocket connections." },
      { title: "Export System", description: "One-click PDF and CSV exports for reports." },
    ],

    features: [
      { icon: "🔍", title: "Smart Search", description: "Server-side search with advanced filters." },
      { icon: "📈", title: "Churn Risk", description: "Visual risk scores and alerts." },
      { icon: "📊", title: "Visualizations", description: "Interactive charts and graphs." },
      { icon: "📤", title: "Export", description: "PDF and CSV report generation." },
    ],

    techStack: [
      { category: "Frontend", items: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"] },
      { category: "Data Viz", items: ["Recharts", "D3.js"] },
      { category: "Backend", items: ["PostgreSQL", "Prisma"] },
    ],

    screenshots: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80", alt: "Dashboard", caption: "Main Dashboard" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80", alt: "Churn", caption: "Churn Analysis" },
      { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80", alt: "Search", caption: "Advanced Search" },
    ],

    metrics: [
      { value: "500ms", label: "Search", subLabel: "Response" },
      { value: "30%", label: "Less", subLabel: "Churn" },
      { value: "5hrs→5min", label: "Report", subLabel: "Generation" },
      { value: "10K+", label: "Members", subLabel: "Tracked" },
    ],
    achievements: [
      "Search response under 500ms for 1M+ records",
      "Reduced member churn by 30% through early detection",
      "Report generation time reduced from 5 hours to 5 minutes",
      "Tracking 10,000+ active members",
    ],
  },

  // ========== ML PROJECTS ==========
  {
    slug: "human-genomic-mutation-analysis",
    category: "ml",
    title: "Human Genomic Mutation Analysis",
    tagline: "Hybrid machine learning model for understanding human genomic dynamics and mutation patterns with comprehensive EDA and predictive modeling.",
    description: "Applied hybrid machine learning approach combining multiple algorithms to analyze human genomic data, understand mutation dynamics, and predict genetic variations with extensive exploratory data analysis.",
    heroImage: "/images/projects/ML-projects/Mutation-data/Screenshot (82).png",
    repoUrl: "https://colab.research.google.com/drive/1kI96FYEXzxWDwET40vXXkRjIQWmEOvpE?usp=sharing",

    client: "Research Project",
    industry: "Bioinformatics / Genomics / Healthcare",
    duration: "3 months (2024)",
    role: "ML Engineer / Data Scientist",
    overview: "This research project applies hybrid machine learning models to understand human genomic dynamics and mutation patterns. The analysis includes comprehensive exploratory data analysis (EDA) to understand genomic data distributions, feature engineering for genetic sequences, and a hybrid model combining multiple ML algorithms to predict mutation patterns and their potential impacts on human health.",

    challengeIntro: "Understanding human genomic mutations requires analyzing complex, high-dimensional genetic data with multiple interacting factors:",
    painPoints: [
      "High-dimensional genomic data - Thousands of genetic features with complex interactions",
      "Imbalanced mutation classes - Rare mutations underrepresented in datasets",
      "Complex feature relationships - Non-linear interactions between genetic markers",
      "Interpretability requirements - Medical applications need explainable predictions",
      "Data quality issues - Missing values and noise in genetic sequencing data",
      "Computational complexity - Large-scale genomic datasets require efficient processing",
      "Validation challenges - Need for rigorous cross-validation and biological validation",
    ],
    challengeConclusion: "Required a comprehensive analytical approach with thorough EDA, robust feature engineering, and a hybrid model architecture to capture complex genomic patterns.",

    solutionIntro: "I developed a hybrid machine learning pipeline with extensive exploratory analysis and multiple modeling approaches:",
    architectureImage: "/images/projects/ML-projects/Mutation-data/Screenshot (83).png",
    solutionPoints: [
      { title: "Exploratory Data Analysis", description: "Comprehensive EDA including distribution analysis, correlation heatmaps, mutation frequency visualization, and statistical significance testing." },
      { title: "Feature Engineering", description: "Genomic feature extraction, sequence encoding, dimensionality reduction with PCA, and feature selection using mutual information." },
      { title: "Hybrid Model Architecture", description: "Ensemble approach combining Random Forest, Gradient Boosting, and Neural Networks for robust mutation prediction." },
      { title: "Model Interpretation", description: "SHAP analysis for feature importance, partial dependence plots, and biological pathway mapping." },
    ],

    features: [
      { icon: "🧬", title: "Genomic EDA", description: "Comprehensive exploratory analysis of mutation patterns, frequencies, and genomic distributions." },
      { icon: "📊", title: "Statistical Analysis", description: "Hypothesis testing, correlation analysis, and significance testing for genetic markers." },
      { icon: "🔬", title: "Hybrid Model", description: "Ensemble of Random Forest, XGBoost, and Neural Networks for robust predictions." },
      { icon: "🎯", title: "Mutation Prediction", description: "Predict mutation likelihood and potential pathogenicity scores." },
      { icon: "📈", title: "Visualization", description: "Interactive plots for genomic distributions, feature importance, and model performance." },
      { icon: "💡", title: "Interpretable AI", description: "SHAP values and feature importance for explainable genetic insights." },
    ],

    techStack: [
      { category: "Data Analysis", items: ["Python", "Pandas", "NumPy", "SciPy", "Statsmodels"] },
      { category: "Visualization", items: ["Matplotlib", "Seaborn", "Plotly", "Heatmaps"] },
      { category: "ML Framework", items: ["Scikit-learn", "XGBoost", "TensorFlow", "Keras"] },
      { category: "Bioinformatics", items: ["BioPython", "Genomic Encoding", "Sequence Analysis"] },
      { category: "Environment", items: ["Google Colab", "Jupyter Notebooks", "GPU Acceleration"] },
    ],

    screenshots: [
      { src: "/images/projects/ML-projects/Mutation-data/Screenshot (82).png", alt: "EDA Overview", caption: "Exploratory Data Analysis - Genomic Data Distribution and Mutation Patterns" },
      { src: "/images/projects/ML-projects/Mutation-data/Screenshot (83).png", alt: "Correlation Analysis", caption: "Correlation Heatmap - Feature Relationships and Genetic Marker Interactions" },
      { src: "/images/projects/ML-projects/Mutation-data/Screenshot (84).png", alt: "Model Training", caption: "Hybrid Model Training - Ensemble Architecture and Performance Metrics" },
      { src: "/images/projects/ML-projects/Mutation-data/Screenshot (85).png", alt: "Feature Importance", caption: "SHAP Analysis - Feature Importance and Mutation Predictors" },
    ],

    metrics: [
      { value: "92%", label: "Accuracy", subLabel: "Mutation Prediction" },
      { value: "0.89", label: "AUC-ROC", subLabel: "Score" },
      { value: "1000+", label: "Features", subLabel: "Analyzed" },
      { value: "3", label: "Models", subLabel: "Ensemble" },
      { value: "85%", label: "Precision", subLabel: "Pathogenic" },
      { value: "50K+", label: "Samples", subLabel: "Processed" },
    ],
    achievements: [
      "Achieved 92% accuracy in mutation classification with hybrid ensemble model",
      "Identified top 20 genomic features most predictive of pathogenic mutations",
      "Reduced false positive rate by 35% compared to single-model approaches",
      "Comprehensive EDA revealed novel patterns in mutation frequency distribution",
      "SHAP analysis provided interpretable insights for biological validation",
      "Processed 50,000+ genomic samples with optimized computational pipeline",
      "Cross-validated results aligned with known biological pathways",
      "Open-source Colab notebook enables reproducible research",
    ],

    testimonial: {
      quote: "This genomic analysis project demonstrates the power of combining rigorous exploratory analysis with hybrid machine learning. The interpretable results provide valuable insights for understanding mutation dynamics in human genomics.",
      author: "Research Collaboration",
      role: "Bioinformatics Research",
      company: "Academic Project",
      rating: 5,
    },
  },

  {
    slug: "churn-prediction-model",
    category: "ml",
    title: "Churn Prediction Model",
    tagline: "Scikit-learn pipeline predicting member churn with 89% accuracy.",
    description: "Scikit-learn pipeline predicting member churn with 89% accuracy using historical activity, plan usage, and engagement signals.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    repoUrl: "https://github.com/yeasin-dev-me/churn-prediction",

    client: "Internal Project",
    industry: "Machine Learning / Healthcare",
    duration: "2 months (2024)",
    role: "ML Engineer",
    overview: "Developed a machine learning pipeline to predict member churn using historical activity data, enabling proactive retention strategies.",

    challengeIntro: "The healthcare platform was losing members without early warning:",
    painPoints: [
      "No visibility into churn risk factors",
      "Reactive approach to member retention",
      "Manual analysis of member behavior",
      "Inconsistent intervention strategies",
      "High false-positive rates in existing rules",
    ],
    challengeConclusion: "They needed a data-driven approach to predict and prevent churn.",

    solutionIntro: "I built an end-to-end ML pipeline:",
    solutionPoints: [
      { title: "Feature Engineering", description: "Extracted 50+ features from activity logs, plan usage, and engagement data." },
      { title: "Model Training", description: "Tested multiple algorithms (Random Forest, XGBoost, Logistic Regression)." },
      { title: "API Deployment", description: "FastAPI endpoint for real-time predictions." },
      { title: "Monitoring", description: "Model performance tracking and drift detection." },
    ],

    features: [
      { icon: "🎯", title: "89% Accuracy", description: "High-precision predictions with low false positives." },
      { icon: "⚡", title: "Real-Time", description: "Sub-100ms prediction latency." },
      { icon: "📊", title: "Explainable", description: "SHAP values for feature importance." },
      { icon: "🔄", title: "Auto-Retrain", description: "Scheduled model updates with new data." },
    ],

    techStack: [
      { category: "ML Framework", items: ["Scikit-learn", "XGBoost", "Pandas"] },
      { category: "API", items: ["FastAPI", "Pydantic"] },
      { category: "Data", items: ["PostgreSQL", "Apache Airflow"] },
      { category: "MLOps", items: ["MLflow", "Docker", "AWS SageMaker"] },
    ],

    screenshots: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80", alt: "Model", caption: "Model Performance" },
      { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80", alt: "Features", caption: "Feature Importance" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80", alt: "Dashboard", caption: "Prediction Dashboard" },
    ],

    metrics: [
      { value: "89%", label: "Accuracy", subLabel: "Achieved" },
      { value: "50+", label: "Features", subLabel: "Engineered" },
      { value: "<100ms", label: "Latency", subLabel: "Per Prediction" },
      { value: "30%", label: "Churn", subLabel: "Reduction" },
    ],
    achievements: [
      "Achieved 89% prediction accuracy",
      "Reduced churn by 30% through early intervention",
      "Sub-100ms prediction latency",
      "Automated weekly model retraining",
    ],
  },

  {
    slug: "document-classification-api",
    category: "ml",
    title: "Document Classification API",
    tagline: "NLP microservice classifying PDFs and extracting key entities.",
    description: "NLP microservice classifying uploaded PDFs by type and extracting key entities using spaCy and Hugging Face transformers.",
    heroImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    repoUrl: "https://github.com/yeasin-dev-me/doc-classifier",

    client: "Internal Project",
    industry: "NLP / Document Processing",
    duration: "2 months (2024)",
    role: "ML Engineer",
    overview: "Built an NLP microservice that automatically classifies documents and extracts structured data from unstructured PDFs.",

    challengeIntro: "Manual document processing was a bottleneck:",
    painPoints: [
      "Hours spent manually categorizing documents",
      "Inconsistent classification across team members",
      "Key data buried in unstructured text",
      "No searchable document database",
      "Compliance risks from misfiled documents",
    ],
    challengeConclusion: "They needed automated document understanding.",

    solutionIntro: "I developed an intelligent document processing system:",
    solutionPoints: [
      { title: "Text Extraction", description: "OCR and PDF parsing for text extraction from any document." },
      { title: "Classification Model", description: "Fine-tuned transformer model for document type classification." },
      { title: "Entity Extraction", description: "spaCy NER for extracting names, dates, amounts, and custom entities." },
      { title: "REST API", description: "FastAPI endpoint for document upload and processing." },
    ],

    features: [
      { icon: "📄", title: "PDF Processing", description: "Extract text from scanned and digital PDFs." },
      { icon: "🏷️", title: "Classification", description: "Auto-categorize into 20+ document types." },
      { icon: "🔍", title: "Entity Extraction", description: "Extract dates, names, amounts, and more." },
      { icon: "🔗", title: "API Ready", description: "RESTful API for easy integration." },
    ],

    techStack: [
      { category: "NLP", items: ["spaCy", "Transformers", "NLTK"] },
      { category: "API", items: ["FastAPI", "Python"] },
      { category: "Document", items: ["PyMuPDF", "Tesseract OCR"] },
      { category: "ML", items: ["Hugging Face", "PyTorch"] },
    ],

    screenshots: [
      { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80", alt: "NLP", caption: "Entity Extraction" },
      { src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80", alt: "API", caption: "API Documentation" },
      { src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80", alt: "Results", caption: "Classification Results" },
    ],

    metrics: [
      { value: "95%", label: "Accuracy", subLabel: "Classification" },
      { value: "20+", label: "Document", subLabel: "Types" },
      { value: "2sec", label: "Processing", subLabel: "Per Doc" },
      { value: "10K+", label: "Documents", subLabel: "Processed" },
    ],
    achievements: [
      "95% classification accuracy across 20+ document types",
      "Processing time under 2 seconds per document",
      "Extracted 50+ entity types with high precision",
      "Processed 10,000+ documents in production",
    ],
  },

  {
    slug: "recommendation-engine",
    category: "ml",
    title: "Recommendation Engine",
    tagline: "Collaborative filtering engine for personalized plan suggestions.",
    description: "Collaborative filtering engine generating personalized plan suggestions based on member demographics and behavior clusters.",
    heroImage: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80",
    repoUrl: "https://github.com/yeasin-dev-me/recommendation-engine",

    client: "Internal Project",
    industry: "Machine Learning / Healthcare",
    duration: "3 months (2024)",
    role: "ML Engineer",
    overview: "Built a recommendation system that suggests optimal health plans based on member profiles, behavior patterns, and similar user preferences.",

    challengeIntro: "Members struggled to find the right health plans:",
    painPoints: [
      "Too many plan options causing decision paralysis",
      "Generic recommendations not personalized",
      "High plan switch rate due to poor matches",
      "No data-driven plan optimization",
      "Manual recommendation process",
    ],
    challengeConclusion: "They needed intelligent, personalized recommendations.",

    solutionIntro: "I built a hybrid recommendation system:",
    solutionPoints: [
      { title: "Collaborative Filtering", description: "Matrix factorization to find similar member preferences." },
      { title: "Content-Based Filtering", description: "Plan feature matching based on member profiles." },
      { title: "Behavior Clustering", description: "K-means clustering to group similar members." },
      { title: "Real-Time Scoring", description: "Redis-cached recommendations with fast retrieval." },
    ],

    features: [
      { icon: "🎯", title: "Personalized", description: "Recommendations tailored to each member." },
      { icon: "🔄", title: "Hybrid Model", description: "Combines collaborative and content-based filtering." },
      { icon: "⚡", title: "Real-Time", description: "Instant recommendations with caching." },
      { icon: "📊", title: "A/B Testing", description: "Built-in experimentation framework." },
    ],

    techStack: [
      { category: "ML", items: ["TensorFlow", "Scikit-learn", "Pandas"] },
      { category: "Backend", items: ["FastAPI", "Python"] },
      { category: "Data", items: ["PostgreSQL", "Redis"] },
      { category: "Infrastructure", items: ["Docker", "AWS", "Airflow"] },
    ],

    screenshots: [
      { src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80", alt: "Recs", caption: "Recommendations UI" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80", alt: "Analytics", caption: "Performance Analytics" },
      { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80", alt: "Model", caption: "Model Architecture" },
    ],

    metrics: [
      { value: "40%", label: "Higher", subLabel: "Conversion" },
      { value: "25%", label: "Less", subLabel: "Plan Switches" },
      { value: "<50ms", label: "Latency", subLabel: "Per Request" },
      { value: "85%", label: "Precision", subLabel: "@10" },
    ],
    achievements: [
      "Increased plan conversion by 40%",
      "Reduced plan switch rate by 25%",
      "Sub-50ms recommendation latency",
      "85% precision@10 in offline evaluation",
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit = 3): ProjectDetail[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return projectsData.slice(0, limit);

  // Prioritize same category, then others
  const sameCategory = projectsData.filter((p) => p.slug !== currentSlug && p.category === current.category);
  const otherCategory = projectsData.filter((p) => p.slug !== currentSlug && p.category !== current.category);

  return [...sameCategory, ...otherCategory].slice(0, limit);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
