import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { absoluteUrl } from "@/lib/seo";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Yeasin Arafat",
    };
  }

  const imageUrl = project.heroImage?.startsWith("http")
    ? project.heroImage
    : absoluteUrl(project.heroImage);

  return {
    title: `${project.title} | Yeasin Arafat`,
    description: project.tagline,
    alternates: {
      canonical: absoluteUrl(`/projects/${slug}`),
    },
    openGraph: {
      title: `${project.title} | Yeasin Arafat`,
      description: project.tagline,
      url: absoluteUrl(`/projects/${slug}`),
      images: [{ url: imageUrl }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Yeasin Arafat`,
      description: project.tagline,
      images: [imageUrl],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
