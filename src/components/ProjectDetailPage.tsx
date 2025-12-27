"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Play,
  FileText,
  Building2,
  BookOpen,
  Briefcase,
  Clock,
  User,
  Target,
  Lightbulb,
  Zap,
  Wrench,
  Camera,
  BarChart3,
  MessageSquareQuote,
  Rocket,
  FolderOpen,
  Star,
  ChevronRight,
  ClipboardList,
} from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProjectDetail, getRelatedProjects } from "@/data/projects";

interface ProjectDetailPageProps {
  project: ProjectDetail;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const relatedProjects = getRelatedProjects(project.slug, 3);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Back Navigation */}
      <div className="sticky top-0 z-50 border-b border-white/5 bg-gray-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="body-base">Back to Projects</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Section Navigation */}
        <SectionNav />

        {/* SECTION 1: Hero */}
        <HeroSection project={project} />

        {/* SECTION 2: Project Overview */}
        <OverviewSection project={project} />

        {/* SECTION: Development Process */}
        {project.process && <ProcessSection project={project} />}

        {/* SECTION 3: The Challenge */}
        <ChallengeSection project={project} />

        {/* SECTION 4: My Solution */}
        <SolutionSection project={project} />

        {/* SECTION 5: Key Features */}
        <FeaturesSection project={project} />

        {/* SECTION 6: Tech Stack */}
        <TechStackSection project={project} />

        {/* SECTION 7: Screenshots */}
        <ScreenshotsSection project={project} />

        {/* SECTION 8: Results & Impact */}
        <ResultsSection project={project} />

        {/* SECTION 9: Testimonial */}
        {project.testimonial && <TestimonialSection project={project} />}

        {/* SECTION 10: Call to Action */}
        <CTASection />

        {/* SECTION 11: More Projects */}
        <MoreProjectsSection relatedProjects={relatedProjects} />
      </div>
    </div>
  );
}

// Section Navigation Sidebar
function SectionNav() {
  const sections = [
    { id: "hero", label: "Hero", icon: Camera },
    { id: "overview", label: "Overview", icon: FileText },
    { id: "process", label: "Process", icon: ClipboardList },
    { id: "challenge", label: "Challenge", icon: Target },
    { id: "solution", label: "Solution", icon: Lightbulb },
    { id: "features", label: "Features", icon: Zap },
    { id: "tech-stack", label: "Tech Stack", icon: Wrench },
    { id: "screenshots", label: "Screenshots", icon: Camera },
    { id: "results", label: "Results", icon: BarChart3 },
    { id: "cta", label: "Contact", icon: Rocket },
    { id: "more-projects", label: "More", icon: FolderOpen },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-gray-900/90 p-2 backdrop-blur-md">
        {sections.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group flex items-center gap-2 rounded-xl p-2 text-gray-500 transition-all hover:bg-white/5 hover:text-white"
            title={label}
          >
            <Icon className="h-4 w-4" />
            <span className="body-xs hidden group-hover:block">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

// SECTION 1: Hero
function HeroSection({ project }: { project: ProjectDetail }) {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      {/* Hero Image */}
      <div className="relative mb-8 aspect-video overflow-hidden rounded-3xl border border-white/10">
        <ImageWithFallback
          src={project.heroImage}
          alt={project.title}
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-transparent to-transparent" />
      </div>

      {/* Title & Description */}
      <div className="mb-8">
        <p className="pill-label mb-2 text-emerald-300">
          {project.category === "backend"
            ? "🔧 Backend Project"
            : project.category === "frontend"
            ? "🎨 Frontend Project"
            : "🤖 ML Project"}
        </p>
        <h1 className="heading-2xl mb-4 text-white">{project.title}</h1>
        <p className="body-lg text-gray-400">{project.tagline}</p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        {project.liveUrl && (
          <Button asChild className="gap-2">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        {project.heroVideo && (
          <Button variant="outline" className="gap-2">
            <Play className="h-4 w-4" />
            Watch Video
          </Button>
        )}
        {project.repoUrl && (
          <Button variant="outline" asChild className="gap-2">
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              View Code
            </a>
          </Button>
        )}
        {project.caseStudyUrl && (
          <Button variant="outline" className="gap-2">
            <FileText className="h-4 w-4" />
            Case Study
          </Button>
        )}
        {project.swaggerUrl && (
          <Button variant="outline" asChild className="gap-2">
            <a href={project.swaggerUrl} target="_blank" rel="noreferrer">
              <BookOpen className="h-4 w-4" />
              Swagger UI
            </a>
          </Button>
        )}
        {project.redocUrl && (
          <Button variant="outline" asChild className="gap-2">
            <a href={project.redocUrl} target="_blank" rel="noreferrer">
              <FileText className="h-4 w-4" />
              ReDoc
            </a>
          </Button>
        )}
      </div>
    </motion.section>
  );
}

// SECTION 2: Overview
function OverviewSection({ project }: { project: ProjectDetail }) {
  const overviewItems = [
    { icon: Building2, label: "Client", value: project.client },
    { icon: Briefcase, label: "Industry", value: project.industry },
    { icon: Clock, label: "Timeline", value: project.duration },
    { icon: User, label: "My Role", value: project.role },
  ];

  return (
    <motion.section
      id="overview"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <SectionHeader icon={FileText} title="Project Overview" color="text-sky-300" />

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewItems.map(({ icon: Icon, label, value }) => (
          <Card key={label} className="border-white/5 bg-gray-900/50 p-4">
            <div className="mb-2 flex items-center gap-2 text-gray-500">
              <Icon className="h-4 w-4" />
              <span className="body-sm">{label}</span>
            </div>
            <p className="body-base font-medium text-white">{value}</p>
          </Card>
        ))}
      </div>

      <p className="body-lg text-gray-400">{project.overview}</p>
    </motion.section>
  );
}

// SECTION: Process / SDLC
function ProcessSection({ project }: { project: ProjectDetail }) {
  if (!project.process) return null;

  return (
    <motion.section
      id="process"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <SectionHeader icon={ClipboardList} title="Development Process" color="text-indigo-300" />

      <p className="body-lg mb-8 text-gray-400">{project.process.description}</p>

      <div className="relative border-l border-indigo-500/20 pl-8 ml-3 space-y-10">
        {project.process.steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-950 border border-indigo-500/50 text-xs font-bold text-indigo-400">
              {index + 1}
            </span>

            <h3 className="heading-md mb-2 text-white">{step.title.replace(/^\d+\.\s*/, "")}</h3>
            <p className="body-base mb-4 text-gray-400">{step.description}</p>

            {step.checklist && (
              <div className="mb-4 space-y-2">
                {step.checklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500/50" />
                    <span className="body-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            )}

            {step.deliverables && (
              <div className="rounded-lg border border-white/5 bg-gray-900/50 px-4 py-2">
                <span className="body-sm font-semibold text-indigo-300">Deliverables: </span>
                <span className="body-sm text-gray-400">{step.deliverables}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// SECTION 3: Challenge
function ChallengeSection({ project }: { project: ProjectDetail }) {
  return (
    <motion.section
      id="challenge"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <SectionHeader icon={Target} title="The Challenge" color="text-rose-300" />

      <p className="body-lg mb-6 text-gray-400">{project.challengeIntro}</p>

      <div className="mb-6 space-y-3">
        {project.painPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <span className="mt-1 text-rose-400">✗</span>
            <p className="body-base text-gray-300">{point}</p>
          </motion.div>
        ))}
      </div>

      <p className="body-lg text-gray-400">{project.challengeConclusion}</p>
    </motion.section>
  );
}

// SECTION 4: Solution
function SolutionSection({ project }: { project: ProjectDetail }) {
  return (
    <motion.section
      id="solution"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <SectionHeader icon={Lightbulb} title="My Solution" color="text-amber-300" />

      <p className="body-lg mb-8 text-gray-400">{project.solutionIntro}</p>

      {project.architectureImage && (
        <div className="mb-8 overflow-hidden rounded-2xl border border-white/10">
          <ImageWithFallback
            src={project.architectureImage}
            alt="Architecture Diagram"
            className="h-64 w-full"
          />
        </div>
      )}

      <div className="space-y-4">
        {project.solutionPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">
              {index + 1}
            </div>
            <div>
              <h4 className="heading-sm mb-1 text-white">{point.title}</h4>
              <p className="body-base text-gray-400">{point.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// SECTION 5: Features
function FeaturesSection({ project }: { project: ProjectDetail }) {
  return (
    <motion.section
      id="features"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <SectionHeader icon={Zap} title="Key Features" color="text-purple-300" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full border-white/5 bg-gray-900/50 p-6">
              <span className="mb-3 block text-3xl">{feature.icon}</span>
              <h4 className="heading-sm mb-2 text-white">{feature.title}</h4>
              <p className="body-sm text-gray-400">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// SECTION 6: Tech Stack
function TechStackSection({ project }: { project: ProjectDetail }) {
  return (
    <motion.section
      id="tech-stack"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <SectionHeader icon={Wrench} title="Tech Stack" color="text-cyan-300" />

      <div className="space-y-6">
        {project.techStack.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <p className="body-sm mb-3 text-gray-500">{category.category}</p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

// SECTION 7: Screenshots
function ScreenshotsSection({ project }: { project: ProjectDetail }) {
  return (
    <motion.section
      id="screenshots"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <SectionHeader icon={Camera} title="Screenshots" color="text-pink-300" />

      {/* Main Screenshot */}
      {project.screenshots[0] && (
        <div className="mb-6 overflow-hidden rounded-2xl border border-white/10">
          <ImageWithFallback
            src={project.screenshots[0].src}
            alt={project.screenshots[0].alt}
            className="aspect-video w-full"
          />
          <div className="border-t border-white/5 bg-gray-900/50 px-4 py-2">
            <p className="body-sm text-gray-400">{project.screenshots[0].caption}</p>
          </div>
        </div>
      )}

      {/* Thumbnail Gallery */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.screenshots.slice(1).map((screenshot, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer overflow-hidden rounded-xl border border-white/10 transition-all hover:border-white/20"
          >
            <ImageWithFallback
              src={screenshot.src}
              alt={screenshot.alt}
              className="aspect-video w-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="border-t border-white/5 bg-gray-900/50 px-3 py-2">
              <p className="body-xs text-gray-400">{screenshot.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {project.videoWalkthrough && (
        <div className="mt-8">
          <p className="body-sm mb-4 flex items-center gap-2 text-gray-500">
            <Play className="h-4 w-4" />
            Video Walkthrough
          </p>
          <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
            <iframe
              src={project.videoWalkthrough}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </motion.section>
  );
}

// SECTION 8: Results
function ResultsSection({ project }: { project: ProjectDetail }) {
  return (
    <motion.section
      id="results"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <SectionHeader icon={BarChart3} title="Results & Impact" color="text-emerald-300" />

      {/* Metrics Grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-white/5 bg-gray-900/50 p-6 text-center">
              <p className="heading-xl mb-1 text-emerald-300">{metric.value}</p>
              <p className="body-base font-medium text-white">{metric.label}</p>
              {metric.subLabel && (
                <p className="body-sm text-gray-500">{metric.subLabel}</p>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <div className="rounded-2xl border border-white/10 bg-gray-900/30 p-6">
        <p className="body-base mb-4 font-medium text-white">Key Achievements</p>
        <div className="space-y-3">
          {project.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="mt-1 text-emerald-400">✓</span>
              <p className="body-base text-gray-300">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// SECTION 9: Testimonial
function TestimonialSection({ project }: { project: ProjectDetail }) {
  if (!project.testimonial) return null;

  return (
    <motion.section
      id="testimonial"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <SectionHeader icon={MessageSquareQuote} title="Client Testimonial" color="text-yellow-300" />

      <Card className="border-white/10 bg-gray-900/50 p-8">
        <blockquote className="body-lg mb-6 italic text-gray-300">
          &ldquo;{project.testimonial.quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-cyan-400 text-xl font-bold text-gray-900">
            {project.testimonial.author.charAt(0)}
          </div>
          <div>
            <p className="body-base font-medium text-white">{project.testimonial.author}</p>
            <p className="body-sm text-gray-500">
              {project.testimonial.role}, {project.testimonial.company}
            </p>
          </div>
          {project.testimonial.rating && (
            <div className="ml-auto flex gap-1">
              {Array.from({ length: project.testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          )}
        </div>
      </Card>
    </motion.section>
  );
}

// SECTION 10: CTA
function CTASection() {
  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="mb-20"
    >
      <Card className="border-emerald-500/30 bg-linear-to-br from-emerald-900/20 to-cyan-900/20 p-8 text-center">
        <Rocket className="mx-auto mb-4 h-10 w-10 text-emerald-300" />
        <h3 className="heading-lg mb-2 text-white">Interested in Something Similar?</h3>
        <p className="body-lg mb-6 text-gray-400">
          I help businesses build robust backend systems, membership platforms, and automation tools.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="gap-2">
            <Link href="/contact">
              <MessageSquareQuote className="h-4 w-4" />
              Let&apos;s Talk
            </Link>
          </Button>
        </div>
      </Card>
    </motion.section>
  );
}

// SECTION 11: More Projects
function MoreProjectsSection({ relatedProjects }: { relatedProjects: ProjectDetail[] }) {
  return (
    <motion.section
      id="more-projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <SectionHeader icon={FolderOpen} title="More Projects" color="text-gray-300" />

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relatedProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/projects/${project.slug}`}>
              <Card className="group h-full border-white/5 bg-gray-900/50 p-0 transition-all hover:border-white/20">
                <ImageWithFallback
                  src={project.heroImage}
                  alt={project.title}
                  className="aspect-video w-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h4 className="heading-sm mb-1 text-white">{project.title}</h4>
                  <p className="body-sm mb-3 line-clamp-2 text-gray-400">{project.tagline}</p>
                  <span className="body-sm flex items-center gap-1 text-emerald-300">
                    View Project <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </motion.section>
  );
}

// Reusable Section Header
function SectionHeader({
  icon: Icon,
  title,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  color: string;
}) {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-2">
        <Icon className={`h-5 w-5 ${color}`} />
        <h2 className={`heading-lg ${color}`}>{title}</h2>
      </div>
      <div className={`h-px w-full bg-linear-to-r from-current to-transparent opacity-30 ${color}`} />
    </div>
  );
}
