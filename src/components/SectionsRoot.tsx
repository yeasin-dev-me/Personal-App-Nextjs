"use client";

import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";

const VALID_SECTIONS = new Set(["hero", "about", "skills", "projects", "resume", "contact"]);

interface SectionsRootProps {
  initialSection?: string;
}

export function SectionsRoot({ initialSection }: SectionsRootProps) {
  useEffect(() => {
    if (!initialSection) return;
    const normalized = initialSection.toLowerCase();
    if (!VALID_SECTIONS.has(normalized)) return;

    const scrollIntoView = () => {
      const el = document.getElementById(normalized);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timer = window.setTimeout(scrollIntoView, 150);
    return () => window.clearTimeout(timer);
  }, [initialSection]);

  return (
    <div className="bg-black text-white">
      <Navigation />
      <main className="pt-32">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>
    </div>
  );
}
