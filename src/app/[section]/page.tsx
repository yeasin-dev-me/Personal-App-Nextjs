import { SectionsRoot } from "@/components/SectionsRoot";
import { notFound } from "next/navigation";

const SECTION_MAP: Record<string, string> = {
  about: "about",
  skills: "skills",
  projects: "projects",
  resume: "resume",
  contact: "contact",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(SECTION_MAP).map((section) => ({ section }));
}

interface SectionPageProps {
  params?: {
    section?: string;
  };
}

export default function SectionPage({ params }: SectionPageProps) {
  const key = params?.section?.toLowerCase();
  const target = key ? SECTION_MAP[key] : undefined;
  if (!target) {
    notFound();
  }

  return <SectionsRoot initialSection={target} />;
}
