import { SectionsRoot } from "@/components/SectionsRoot";
import { absoluteUrl } from "@/lib/seo";

export const metadata = {
  title: "About | Yeasin Arafat",
  description: "Full-stack engineer crafting Next.js frontends, Django REST backends, and Azure-ready deployments with measurable business impact.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  return <SectionsRoot initialSection="about" />;
}
