"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Server, Layout, Brain, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Card } from "@/components/ui/card";
import { projectsData } from "@/data/projects";

type Category = "backend" | "frontend" | "ml";

interface CategoryMeta {
  label: string;
  icon: typeof Server;
  color: string;
  gradient: string;
}

const categoryMeta: Record<Category, CategoryMeta> = {
  backend: { label: "Backend Projects", icon: Server, color: "text-sky-300", gradient: "from-sky-400/60 to-transparent" },
  frontend: { label: "Frontend Projects", icon: Layout, color: "text-emerald-300", gradient: "from-emerald-400/60 to-transparent" },
  ml: { label: "ML Projects", icon: Brain, color: "text-purple-300", gradient: "from-purple-400/60 to-transparent" },
};

const backendProjects = projectsData.filter((p) => p.category === "backend");
const frontendProjects = projectsData.filter((p) => p.category === "frontend");
const mlProjects = projectsData.filter((p) => p.category === "ml");

const categories: { key: Category; projects: typeof projectsData }[] = [
  { key: "backend", projects: backendProjects },
  { key: "frontend", projects: frontendProjects },
  { key: "ml", projects: mlProjects },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrapper bg-gray-900/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="pill-label text-emerald-300">Projects</p>
          <h2 className="heading-xl text-white">Results-focused case studies.</h2>
          <p className="body-lg text-gray-400">
            Real-world solutions for health, education, and enterprise teams—organized by discipline so you can explore backend APIs, polished frontends, and ML experiments.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {categories.map(({ key, projects }) => {
            const meta = categoryMeta[key];
            const Icon = meta.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${meta.color}`} />
                    <h3 className={`heading-md ${meta.color}`}>{meta.label}</h3>
                  </div>
                  <div className={`h-px w-full bg-linear-to-r ${meta.gradient} opacity-50`} />
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="group flex h-full flex-col overflow-hidden border-white/5 bg-black/60 p-0 transition-all hover:border-white/20">
          <div className="relative h-40 w-full overflow-hidden">
            <ImageWithFallback
              src={project.heroImage}
              alt={project.title}
              className="h-full w-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="body-sm flex items-center gap-1.5 rounded-xl border border-emerald-400/50 bg-emerald-500/20 px-3 py-1.5 text-emerald-200">
                View Details <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-3 p-4">
            <h3 className="heading-sm text-white leading-tight">{project.title}</h3>
            <p className="body-sm text-gray-400 line-clamp-3">{project.tagline}</p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {project.techStack[0]?.items.slice(0, 4).map((tech) => (
                <span
                  key={`${project.title}-${tech}`}
                  className="body-xs rounded-full border border-white/10 px-2 py-0.5 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
