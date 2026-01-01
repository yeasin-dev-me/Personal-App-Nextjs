import { SectionsRoot } from "@/components/SectionsRoot";
import { absoluteUrl } from "@/lib/seo";

export const metadata = {
  title: "Skills | Yeasin Arafat",
  description: "Tech stack across Next.js, React, TypeScript, Django REST, Azure, PostgreSQL, and ML pipelines.",
  alternates: {
    canonical: absoluteUrl("/skills"),
  },
};

export default function SkillsPage() {
  return <SectionsRoot initialSection="skills" />;
}
