import { SectionsRoot } from "@/components/SectionsRoot";
import { absoluteUrl } from "@/lib/seo";

export const metadata = {
  title: "Contact | Yeasin Arafat",
  description: "Book a call or send a message to collaborate on full-stack web apps, APIs, or ML-driven features.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return <SectionsRoot initialSection="contact" />;
}
