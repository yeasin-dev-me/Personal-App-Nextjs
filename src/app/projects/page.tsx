import { SectionsRoot } from "@/components/SectionsRoot";
import { absoluteUrl } from "@/lib/seo";

export const metadata = {
  title: "Projects | Yeasin Arafat",
  description: "Case studies spanning full-stack, backend, frontend, and ML projects with measurable results and SDLC rigor.",
  alternates: {
    canonical: absoluteUrl("/projects"),
  },
};

export default function ProjectsPage() {
  return <SectionsRoot initialSection="projects" />;
}
