"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Github, href: "https://github.com/alexjohnson", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/alexjohnson", label: "LinkedIn" },
  { icon: Mail, href: "mailto:alex.johnson@email.com", label: "Email" },
];

const particles = Array.from({ length: 50 }, (_, index) => {
  const left = (index * 17) % 100;
  const top = (index * 29) % 100;
  const size = 2.2 + ((index % 6) + 1) * 0.4;
  return {
    left: `${left}%`,
    top: `${top}%`,
    delay: index * 0.08,
    size,
  };
});

export function HeroSection() {
  const handleViewWork = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="section-wrapper relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 particle-mask">
        {particles.map((particle, idx) => (
          <motion.span
            key={`particle-${idx}`}
            className="absolute rounded-full bg-emerald-500/40"
            style={{ width: particle.size, height: particle.size, left: particle.left, top: particle.top }}
            animate={{ opacity: [0, 0.9, 0], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: 6, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
          />
        ))}
      </div>
      <div className="relative flex w-full flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-6"
        >
          <span className="pill-label inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/40 px-5 py-2 text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Hello, I&apos;m
          </span>
          <h1 className="display-hero text-white">Alex Johnson</h1>
          <p className="heading-lg gradient-text">Full-Stack Developer</p>
          <p className="body-lg max-w-2xl text-gray-300">
            I craft immersive digital experiences with modern web technologies. From
            interactive dashboards to AI-powered tools, I fuse thoughtful design with robust engineering.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              className="shadow-[0_25px_80px_rgba(16,185,129,0.35)]"
              onClick={handleViewWork}
            >
              View My Work
            </Button>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="body-base flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 text-gray-300"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(16,185,129,0.15)", color: "#fff" }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="flex flex-wrap gap-4 text-gray-400"
        >
          {["React", "TypeScript", "Next.js", "Node.js", "Motion"].map((tag) => (
            <span
              key={tag}
              className="body-sm rounded-full border border-white/10 px-4 py-2 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
      <motion.div
        aria-hidden
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-10 flex justify-center"
      >
        <ArrowDown className="h-8 w-8 text-emerald-400" />
      </motion.div>
    </section>
  );
}
