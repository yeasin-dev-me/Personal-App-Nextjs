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
}

export const projectsData: ProjectDetail[] = [
  // ========== BACKEND PROJECTS ==========
  {
    slug: "brightlife-membership-platform",
    category: "backend",
    title: "BrightLife Membership Platform",
    tagline: "Full-stack health membership ecosystem with smart eligibility validation, payment verification, automated receipt generation, JWT authentication, and production VPS deployment.",
    description: "Comprehensive health membership management platform for Bangladesh healthcare market handling user registration, application submission, payment verification, and auto-generated receipts with QR codes.",
    heroImage: "/images/projects/brightlife/admin-dashboard.png",
    liveUrl: "https://www.brightlifebd.com",
    repoUrl: "https://github.com/ya-shuvo30/Brightlife-Django-Backend",

    client: "BrightLife Health Services (Bangladesh)",
    industry: "Healthcare / Insurance / SaaS",
    duration: "3 months (Nov 2024 - Feb 2025)",
    role: "Full-Stack Developer (Lead Backend)",
    overview: "BrightLife is a comprehensive health membership management platform designed for the Bangladesh healthcare market. The system handles the complete membership lifecycle: user registration with JWT authentication, multi-step application submission with nominee management, document uploads, payment verification with screenshot upload, and auto-generated receipts with QR codes. Deployed on VPS with Nginx + Gunicorn and SSL/TLS.",

    challengeIntro: "BrightLife Health Services needed a modern digital platform to manage their growing membership base. Their existing system relied on paper applications, phone call confirmations, and Excel spreadsheets:",
    painPoints: [
      "Manual application processing - Staff spent 3+ hours daily processing paper forms with ~15% error rate",
      "No payment verification system - Confirmations via WhatsApp with no audit trail",
      "No receipt generation - Receipts created manually in Word documents without unique numbers",
      "No nominee management - Information stored in separate spreadsheets with manual share calculations",
      "No medical history tracking - Pre-existing conditions not systematically recorded",
      "No secure authentication - Shared admin passwords with no role-based access control",
      "No mobile access - Desktop-only workflows preventing field agents from processing applications",
    ],
    challengeConclusion: "They needed to digitize the entire membership process, automate payment verification and receipts, secure user data with modern authentication, and scale to handle 10,000+ members.",

    solutionIntro: "I designed and built a comprehensive full-stack platform with modern REST API, secure authentication, file management, and production deployment:",
    architectureImage: "/images/projects/brightlife/swagger-api.png",
    solutionPoints: [
      { title: "Modern REST API", description: "Django REST Framework with OpenAPI documentation, nested serializers for complex forms, and custom viewsets with actions." },
      { title: "JWT Authentication", description: "Simple JWT with access + refresh token rotation, role-based access control, and secure session management." },
      { title: "Payment Verification System", description: "Screenshot upload with transaction ID tracking, admin verification workflow, and auto-generated receipts with QR codes." },
      { title: "Production Deployment", description: "AlmaLinux VPS with Nginx reverse proxy, Gunicorn WSGI server, PostgreSQL 15, and Let's Encrypt SSL/TLS certificates." },
    ],

    features: [
      { icon: "🔐", title: "JWT Authentication", description: "Secure token-based auth with access + refresh rotation and role-based access control." },
      { icon: "📄", title: "Smart Forms", description: "Multi-step wizard with real-time validation, auto-save drafts, nominee management, and document uploads." },
      { icon: "✅", title: "Nominee Validation", description: "Multiple nominees per application with automatic share percentage validation (must equal 100%)." },
      { icon: "💳", title: "Payment System", description: "Screenshot upload, transaction ID tracking, bKash/Nagad/Bank support, and admin verification workflow." },
      { icon: "🧾", title: "Auto Receipts", description: "Auto-generated unique receipt numbers with QR codes for verification, PDF-ready and print-friendly." },
      { icon: "📊", title: "Admin Dashboard", description: "Django admin with color-coded badges, bulk actions, quick filters, search & sort, and verification workflow." },
    ],

    techStack: [
      { category: "Frontend", items: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Axios"] },
      { category: "Backend", items: ["Python 3.11", "Django 5.0", "DRF 3.16", "Simple JWT", "drf-spectacular"] },
      { category: "Database & Storage", items: ["PostgreSQL 15", "Pillow (Images)", "Local Media Storage"] },
      { category: "DevOps", items: ["Nginx", "Gunicorn", "AlmaLinux VPS", "Let's Encrypt SSL", "systemd"] },
      { category: "Code Quality", items: ["Black", "isort", "Flake8", "Pytest"] },
    ],

    screenshots: [
      { src: "/images/projects/brightlife/admin-dashboard.png", alt: "Admin Dashboard", caption: "Django Admin - Site Administration with Membership & Payment Management" },
      { src: "/images/projects/brightlife/swagger-api.png", alt: "Swagger API", caption: "OpenAPI Swagger UI - REST API Documentation with Auth & Membership Endpoints" },
      { src: "/images/projects/brightlife/redoc-api.png", alt: "ReDoc API", caption: "ReDoc Documentation - Detailed API Schema with Request/Response Samples" },
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
    ],

    testimonial: {
      quote: "The BrightLife platform transformed our membership management completely. What used to take our team 3+ hours of manual processing is now done automatically in minutes. The payment verification system with auto-receipts saved us countless hours and eliminated disputes. Highly recommended for any healthcare organization looking to modernize their membership management!",
      author: "Mohammad Rahman",
      role: "Operations Director",
      company: "BrightLife Health Services",
      rating: 5,
    },
  },

  {
    slug: "itransition-integration-layer",
    category: "backend",
    title: "Itransition Integration Layer",
    tagline: "Reusable Django ORM modules and FastAPI services with Azure deployments.",
    description: "Reusable Django ORM modules and FastAPI services with Azure deployments powering invoicing, billing, and access control across internal tools.",
    heroImage: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    liveUrl: "https://yeasindev.me/work/itransition",

    client: "Itransition (Enterprise Client)",
    industry: "Enterprise Software / SaaS",
    duration: "4 months (2024)",
    role: "Backend Developer",
    overview: "Developed reusable integration modules and microservices that power invoicing, billing, and access control across multiple internal enterprise tools.",

    challengeIntro: "The enterprise needed standardized backend components across multiple internal tools:",
    painPoints: [
      "Duplicated code across 5+ internal applications",
      "Inconsistent API patterns causing integration issues",
      "Manual billing calculations prone to errors",
      "No centralized access control system",
      "Slow deployment cycles (2+ weeks)",
    ],
    challengeConclusion: "They needed a unified integration layer with reusable components and consistent patterns.",

    solutionIntro: "I built a modular integration layer with standardized components:",
    solutionPoints: [
      { title: "Reusable ORM Modules", description: "Django ORM modules for common operations like user management, billing, and audit logging." },
      { title: "FastAPI Microservices", description: "High-performance API endpoints for real-time operations and integrations." },
      { title: "Azure Cloud Deployment", description: "Containerized services deployed on Azure with CI/CD automation." },
      { title: "Centralized Auth", description: "Unified access control with OAuth2 and role-based permissions." },
    ],

    features: [
      { icon: "🔗", title: "API Gateway", description: "Centralized routing and rate limiting for all internal services." },
      { icon: "💳", title: "Billing Engine", description: "Automated invoice generation and payment tracking." },
      { icon: "🔒", title: "Access Control", description: "Role-based permissions with audit logging." },
      { icon: "📊", title: "Analytics", description: "Real-time metrics and usage dashboards." },
    ],

    techStack: [
      { category: "Backend", items: ["Python", "Django REST", "FastAPI"] },
      { category: "Database", items: ["PostgreSQL", "Redis"] },
      { category: "Cloud", items: ["Azure App Service", "Azure Functions", "Azure DevOps"] },
      { category: "Tools", items: ["Docker", "Swagger", "Pytest"] },
    ],

    screenshots: [
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80", alt: "Dashboard", caption: "Integration Dashboard" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80", alt: "Billing", caption: "Billing Overview" },
      { src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1600&q=80", alt: "API", caption: "API Documentation" },
    ],

    metrics: [
      { value: "60%", label: "Less", subLabel: "Code Duplication" },
      { value: "3x", label: "Faster", subLabel: "Development" },
      { value: "5+", label: "Apps", subLabel: "Integrated" },
      { value: "2wks→2days", label: "Deploy", subLabel: "Cycle" },
    ],
    achievements: [
      "Reduced code duplication by 60% across internal apps",
      "Standardized API patterns for 5+ applications",
      "Automated billing reduced errors by 95%",
      "Deployment cycles shortened from 2 weeks to 2 days",
    ],
  },

  {
    slug: "deployment-automation-toolkit",
    category: "backend",
    title: "Deployment Automation Toolkit",
    tagline: "Docker Compose, Nginx, and GitHub Actions templates for zero-downtime deploys.",
    description: "Docker Compose, Nginx, and GitHub Actions templates that standardize staging + production rollouts with zero-downtime deploys.",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    repoUrl: "https://github.com/ya-shuvo30/deployment-automation-toolkit",

    client: "Open Source Project",
    industry: "DevOps / Infrastructure",
    duration: "Ongoing (2024)",
    role: "Creator & Maintainer",
    overview: "A comprehensive toolkit of deployment templates and automation scripts for standardizing staging and production rollouts with zero-downtime strategies.",

    challengeIntro: "Many teams struggle with inconsistent deployment processes:",
    painPoints: [
      "Manual deployment steps causing human errors",
      "Downtime during deployments affecting users",
      "No standardized configuration across environments",
      "Difficult rollback procedures",
      "Lack of deployment documentation",
    ],
    challengeConclusion: "I created this toolkit to provide battle-tested templates for modern deployment workflows.",

    solutionIntro: "A collection of ready-to-use templates and scripts:",
    solutionPoints: [
      { title: "Docker Compose Templates", description: "Production-ready compose files for common stacks (Django, Node, React)." },
      { title: "Nginx Configurations", description: "SSL, caching, load balancing, and reverse proxy configs." },
      { title: "GitHub Actions Workflows", description: "CI/CD pipelines for build, test, and deploy automation." },
      { title: "Zero-Downtime Scripts", description: "Blue-green and rolling deployment strategies." },
    ],

    features: [
      { icon: "🐳", title: "Docker Ready", description: "Pre-configured Docker setups for multiple frameworks." },
      { icon: "🔄", title: "Zero Downtime", description: "Blue-green deployment strategies included." },
      { icon: "🔐", title: "SSL/TLS", description: "Let's Encrypt auto-renewal configurations." },
      { icon: "📦", title: "Multi-Stage", description: "Optimized multi-stage Docker builds." },
    ],

    techStack: [
      { category: "Containerization", items: ["Docker", "Docker Compose"] },
      { category: "Web Server", items: ["Nginx", "Traefik"] },
      { category: "CI/CD", items: ["GitHub Actions", "GitLab CI"] },
      { category: "Cloud", items: ["AWS EC2", "DigitalOcean", "Azure"] },
    ],

    screenshots: [
      { src: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1600&q=80", alt: "GitHub", caption: "Repository Structure" },
      { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80", alt: "Actions", caption: "CI/CD Pipeline" },
      { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80", alt: "Deploy", caption: "Deployment Dashboard" },
    ],

    metrics: [
      { value: "50+", label: "Stars", subLabel: "on GitHub" },
      { value: "0", label: "Downtime", subLabel: "Deploys" },
      { value: "10+", label: "Templates", subLabel: "Included" },
      { value: "5min", label: "Setup", subLabel: "Time" },
    ],
    achievements: [
      "Used by 50+ developers worldwide",
      "Zero-downtime deployment templates",
      "Comprehensive documentation",
      "Active community contributions",
    ],
  },

  // ========== FRONTEND PROJECTS ==========
  {
    slug: "arriva-service-hub",
    category: "frontend",
    title: "Arriva Service Hub",
    tagline: "Multi-tenant feature suite with React/Next.js experiences and CI/CD pipelines.",
    description: "Multi-tenant feature suite for Arriva Soft with React/Next.js experiences, Django + Node micro services, and CI/CD pipelines that cut release cycles from weeks to days.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    liveUrl: "https://yeasindev.me/work/arriva-service-hub",

    client: "Arriva Soft",
    industry: "Enterprise Software",
    duration: "6 months (2024)",
    role: "Full-Stack Developer",
    overview: "Built a multi-tenant SaaS platform with modern React/Next.js frontend, microservices backend, and automated CI/CD pipelines that reduced release cycles from weeks to days.",

    challengeIntro: "The company needed to modernize their legacy platform:",
    painPoints: [
      "Legacy jQuery frontend causing poor UX",
      "Monolithic backend difficult to scale",
      "Release cycles taking 2-3 weeks",
      "No multi-tenancy support",
      "Poor mobile experience",
    ],
    challengeConclusion: "They needed a complete platform modernization with multi-tenant architecture.",

    solutionIntro: "I led the frontend development with full-stack contributions:",
    solutionPoints: [
      { title: "Next.js App Router", description: "Server-side rendering with optimized performance and SEO." },
      { title: "Multi-Tenant Architecture", description: "Isolated tenant data with shared infrastructure." },
      { title: "Microservices Backend", description: "Django + Node.js services for different domains." },
      { title: "CI/CD Automation", description: "GitHub Actions pipelines for automated testing and deployment." },
    ],

    features: [
      { icon: "🏢", title: "Multi-Tenant", description: "Isolated tenant environments with custom branding." },
      { icon: "⚡", title: "Fast Performance", description: "Server-side rendering and edge caching." },
      { icon: "📱", title: "Responsive", description: "Mobile-first design with PWA capabilities." },
      { icon: "🔄", title: "Real-Time", description: "WebSocket updates for live data sync." },
    ],

    techStack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Django", "GraphQL"] },
      { category: "Database", items: ["PostgreSQL", "Redis", "MongoDB"] },
      { category: "DevOps", items: ["AWS", "Docker", "GitHub Actions"] },
    ],

    screenshots: [
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80", alt: "Dashboard", caption: "Main Dashboard" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80", alt: "Analytics", caption: "Analytics View" },
      { src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80", alt: "Mobile", caption: "Mobile Experience" },
    ],

    metrics: [
      { value: "80%", label: "Faster", subLabel: "Page Loads" },
      { value: "3wks→2days", label: "Release", subLabel: "Cycle" },
      { value: "15+", label: "Tenants", subLabel: "Onboarded" },
      { value: "99%", label: "Uptime", subLabel: "SLA" },
    ],
    achievements: [
      "Reduced page load times by 80%",
      "Release cycles shortened from 3 weeks to 2 days",
      "Onboarded 15+ enterprise tenants",
      "Achieved 99% uptime SLA",
    ],
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
    slug: "churn-prediction-model",
    category: "ml",
    title: "Churn Prediction Model",
    tagline: "Scikit-learn pipeline predicting member churn with 89% accuracy.",
    description: "Scikit-learn pipeline predicting member churn with 89% accuracy using historical activity, plan usage, and engagement signals.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    repoUrl: "https://github.com/ya-shuvo30/churn-prediction",

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
    repoUrl: "https://github.com/ya-shuvo30/doc-classifier",

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
    repoUrl: "https://github.com/ya-shuvo30/recommendation-engine",

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
