"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contacts = [
  { icon: Mail, label: "Email", value: "alex.johnson@email.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { icon: MapPin, label: "Location", value: "San Francisco, CA" },
];

const socials = [
  { icon: Github, href: "https://github.com/alexjohnson" },
  { icon: Linkedin, href: "https://linkedin.com/in/alexjohnson" },
  { icon: Twitter, href: "https://twitter.com/alexjohnson" },
  { icon: Mail, href: "mailto:alex.johnson@email.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-wrapper bg-black">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-black/60 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
        >
          <p className="pill-label text-emerald-300">Contact</p>
          <h2 className="heading-xl text-white">Let&apos;s build something remarkable.</h2>
          <p className="body-lg mb-8 text-gray-400">
            Share a short brief and I&apos;ll respond within two business days. I partner with founders, agencies, and in-house teams.
          </p>
          <form
            className="space-y-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="First name" aria-label="First name" />
              <Input placeholder="Last name" aria-label="Last name" />
            </div>
            <Input type="email" placeholder="Email" aria-label="Email" />
            <Input placeholder="Subject" aria-label="Subject" />
            <Textarea rows={5} placeholder="Tell me about your project" aria-label="Message" />
            <Button className="w-full gap-2" type="submit">
              <Send className="h-4 w-4" /> Send Message
            </Button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="rounded-3xl border border-white/10 bg-gray-900/40 p-8">
            <p className="heading-lg text-white">Let&apos;s connect</p>
            <p className="body-base mt-3 text-gray-400">
              Prefer async updates with detailed documentation and Loom walk-throughs. Open to consulting or full-time offers.
            </p>
            <div className="mt-6 space-y-4">
              {contacts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="body-sm text-gray-400">{label}</p>
                    <p className="body-base text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gray-900/40 p-8">
            <p className="heading-md text-white">Follow</p>
            <p className="body-base mt-2 text-gray-400">Social channels for live builds, tutorials, and product notes.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="body-base flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 text-white"
                  whileHover={{ scale: 1.08, backgroundColor: "rgba(16,185,129,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
          <p className="body-sm text-gray-500">© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
