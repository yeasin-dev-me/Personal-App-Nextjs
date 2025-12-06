"use client";

import { motion } from "motion/react";
import { Code2, Lightbulb, Users, Coffee } from "lucide-react";
import { Card } from "@/components/ui/card";

const traits = [
  "Problem Solver",
  "Team Player",
  "Lifelong Learner",
  "Detail Oriented",
  "Mentor",
  "Product Thinker",
];

const features = [
  { title: "Clean Code", description: "Type-safe, scalable architecture with thoughtful abstractions.", icon: Code2 },
  { title: "Innovation", description: "Rapid prototyping with design systems and AI workflows.", icon: Lightbulb },
  { title: "Collaboration", description: "Cross-functional partnerships and clear communication.", icon: Users },
  { title: "Dedication", description: "Relentless focus on quality, performance, and polish.", icon: Coffee },
];

export function AboutSection() {
  return (
    <section id="about" className="section-wrapper bg-gray-900/60">
      <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div>
            <p className="pill-label text-emerald-300">About Me</p>
            <h2 className="heading-xl text-white">Design-led engineering for ambitious teams.</h2>
          </div>
          <p className="body-lg text-gray-300">
            I build cohesive product experiences from concept to production. My background spans
            design systems, front-end platforms, and cloud-native backends. I move fast without compromising craft.
          </p>
          <p className="body-lg text-gray-400">
            Today I partner with startups and enterprises to launch interactive tools, enable AI-driven workflows,
            and elevate engineering culture through mentorship and documentation.
          </p>
          <div className="flex flex-wrap gap-3">
            {traits.map((trait) => (
              <span
                key={trait}
                className="body-sm rounded-full border border-emerald-500/30 bg-black/40 px-4 py-2 text-emerald-200"
              >
                {trait}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Card className="h-full bg-black/60">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="heading-md text-white">{title}</h3>
                <p className="body-base mt-2 text-gray-400">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
