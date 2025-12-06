"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", target: "hero" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="pointer-events-none flex justify-center px-4">
        <div
          className={clsx(
            "pointer-events-auto mt-6 flex w-full max-w-6xl items-center justify-between rounded-3xl border border-white/10 px-6 py-4 transition-all duration-300",
            scrolled ? "bg-black/80 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.55)]" : "bg-black/50"
          )}
        >
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            className="heading-md gradient-text tracking-tight"
          >
            &lt;DevPortfolio /&gt;
          </button>
          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.target}
                type="button"
                onClick={() => scrollTo(link.target)}
                className="body-base rounded-2xl px-4 py-2 text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="pill-label rounded-full border border-white/10 px-4 py-2 text-gray-300">
              Available for work
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
