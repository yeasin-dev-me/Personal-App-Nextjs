import { SectionsRoot } from "@/components/SectionsRoot";
import { absoluteUrl } from "@/lib/seo";

export const metadata = {
  title: "Resume | Yeasin Arafat",
  description: "Download resume detailing full-stack delivery: React/Next.js, Django REST APIs, cloud deployments, and production SDLC.",
  alternates: {
    canonical: absoluteUrl("/resume"),
  },
};

export default function ResumePage() {
  return <SectionsRoot initialSection="resume" />;
}
