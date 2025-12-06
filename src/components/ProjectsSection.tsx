"use client";

import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Card } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live?: string;
  repo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Modular storefront with advanced search, analytics, and multi-tenant support.",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
    live: "https://commerce.example.com",
    repo: "https://github.com/alexjohnson/ecommerce-platform",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Realtime collaboration for teams with kanban, automations, and AI assistants.",
    tech: ["React", "Firebase", "Motion"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    live: "https://tasks.example.com",
    repo: "https://github.com/alexjohnson/task-manager",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "Global climate insights with radar layers, severe alerts, and location bookmarks.",
    tech: ["Vue", "D3", "Mapbox"],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    live: "https://weather.example.com",
  },
  {
    title: "Social Media Analytics",
    description: "Cross-network reporting with sentiment analysis, scheduling, and KPI tracking.",
    tech: ["Next.js", "Prisma", "Tailwind"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "AI Chat Interface",
    description: "Conversational AI dashboard with knowledge-base retrieval and handoff flows.",
    tech: ["React", "LangChain", "Supabase"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Portfolio Website",
    description: "Interactive personal brand site with CMS-powered case studies and 3D visuals.",
    tech: ["Next.js", "Three.js", "Contentful"],
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1600&q=80",
  },
];

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section-wrapper bg-gray-900/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="pill-label text-emerald-300">Projects</p>
          <h2 className="heading-xl text-white">Results-focused case studies.</h2>
          <p className="body-lg text-gray-400">
            Selected work spanning commerce, analytics, and creative tooling. Each project pairs modern UX with resilient infrastructure.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} layout="featured" />
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {others.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              layout="grid"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  layout,
}: {
  project: Project;
  index: number;
  layout: "featured" | "grid";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <Card className="group flex h-full flex-col overflow-hidden border-white/5 bg-black/60 p-0">
        <div className="relative h-60 w-full">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
            {project.repo && (
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="body-base flex items-center gap-2 rounded-2xl border border-white/20 bg-black/60 px-4 py-2 text-white"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="h-4 w-4" /> Code
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="body-base flex items-center gap-2 rounded-2xl border border-emerald-400/50 bg-emerald-500/20 px-4 py-2 text-emerald-200"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="h-4 w-4" /> Live
              </motion.a>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <p className="body-sm text-emerald-300">{layout === "featured" ? "Featured" : "Case Study"}</p>
            <h3 className="heading-lg text-white">{project.title}</h3>
          </div>
          <p className="body-base text-gray-400">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={`${project.title}-${tech}`}
                className="body-sm rounded-full border border-white/10 px-3 py-1 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
