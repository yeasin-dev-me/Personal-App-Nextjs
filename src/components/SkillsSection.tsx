"use client";

import { motion } from "motion/react";

const categories = [
  {
    title: "Frontend",
    skills: [
      { label: "React / Next.js", value: 95, gradient: "from-emerald-400 to-emerald-600" },
      { label: "TypeScript", value: 90, gradient: "from-blue-400 to-emerald-400" },
      { label: "Tailwind CSS", value: 88, gradient: "from-purple-400 to-pink-500" },
      { label: "Vue.js", value: 75, gradient: "from-blue-500 to-indigo-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { label: "Node.js", value: 90, gradient: "from-emerald-400 to-blue-500" },
      { label: "Python", value: 85, gradient: "from-sky-400 to-blue-600" },
      { label: "PostgreSQL", value: 80, gradient: "from-blue-500 to-purple-500" },
      { label: "MongoDB", value: 78, gradient: "from-emerald-500 to-green-500" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { label: "Git & GitHub", value: 92, gradient: "from-orange-400 to-rose-500" },
      { label: "Docker", value: 82, gradient: "from-blue-500 to-cyan-400" },
      { label: "AWS", value: 75, gradient: "from-amber-400 to-yellow-500" },
      { label: "GraphQL", value: 70, gradient: "from-pink-400 to-purple-500" },
    ],
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "Docker",
  "AWS",
  "Python",
  "Tailwind",
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-wrapper bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="pill-label text-emerald-300">Skills</p>
          <h2 className="heading-xl text-white">A full-stack toolbox for bold products.</h2>
          <p className="body-lg text-gray-400">
            I combine user-centric design with systems thinking to deliver reliable interfaces, APIs, and deployment pipelines.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-6"
            >
              <h3 className="heading-md text-white">{category.title}</h3>
              <div className="mt-6 flex flex-col gap-5">
                {category.skills.map((skill) => (
                  <div key={skill.label}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="body-base text-gray-300">{skill.label}</span>
                      <span className="body-sm text-emerald-300">{skill.value}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10">
                      <motion.div
                        className={`h-3 rounded-full bg-linear-to-r ${skill.gradient} shadow-[0_10px_30px_rgba(16,185,129,0.35)]`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="body-base rounded-full border border-white/10 px-4 py-2 text-gray-300 transition hover:border-emerald-400/60 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
