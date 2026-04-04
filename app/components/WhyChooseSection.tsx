"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const spring = { type: "spring" as const, stiffness: 380, damping: 32 };

const reasons = [
  "Proven performance, transparent results",
  "360° ad solutions under one roof",
  "Audience-first approach, not fluff",
  "Transparent communication & client-centric process",
];

function GaugeIllustration() {
  return (
    <div className="relative flex aspect-[4/3] w-full max-w-md flex-col items-center justify-center rounded-3xl bg-gradient-to-b from-slate-100 to-slate-200/80 p-8 shadow-inner ring-1 ring-slate-200/80">
      <svg viewBox="0 0 200 120" className="h-40 w-full max-w-[280px]" aria-hidden>
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <path d="M 20 100 A 80 80 0 0 1 52 40" fill="none" stroke="#166534" strokeWidth="16" strokeLinecap="round" />
        <path d="M 52 40 A 80 80 0 0 1 84 28" fill="none" stroke="#22c55e" strokeWidth="16" strokeLinecap="round" />
        <path d="M 84 28 A 80 80 0 0 1 116 28" fill="none" stroke="#eab308" strokeWidth="16" strokeLinecap="round" />
        <path d="M 116 28 A 80 80 0 0 1 148 40" fill="none" stroke="#f97316" strokeWidth="16" strokeLinecap="round" />
        <path d="M 148 40 A 80 80 0 0 1 180 100" fill="none" stroke="#dc2626" strokeWidth="16" strokeLinecap="round" />
        <g transform="translate(100,100)">
          <line x1="0" y1="0" x2="-55" y2="-35" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
          <circle r="8" fill="#0f172a" />
        </g>
      </svg>
      <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-800">Ad performance</p>
    </div>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="why-choose-heading">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
        >
          <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Digital growth
          </span>
          <span className="mx-3 inline-block text-slate-300">✦</span>
          <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Smart solutions
          </span>
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease }}
            whileHover={{ y: -4, transition: spring }}
            className="group/gauge mx-auto w-full max-w-lg lg:mx-0"
          >
            <div className="rounded-[1.75rem] bg-slate-50/80 p-4 shadow-sm ring-1 ring-slate-200/60 transition-shadow duration-300 group-hover/gauge:shadow-xl group-hover/gauge:shadow-slate-300/40">
              <GaugeIllustration />
            </div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease }}
              className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1.5 text-sm font-semibold text-[#0f2744] ring-1 ring-sky-200/80"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-xs text-white">
                ✓
              </span>
              Why choose us
            </motion.span>
            <motion.h2
              id="why-choose-heading"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease }}
              className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0c2d52] sm:text-4xl"
            >
              Because we focus on results that matter to your business
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Techify is known for a customer-centric approach—clear reporting and education so you always
              understand the value behind every campaign and deliverable.
            </motion.p>

            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
              <ul className="space-y-4">
                {reasons.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.12 + i * 0.06, ease }}
                    whileHover={{ x: 4, transition: spring }}
                    className="flex gap-3 text-sm font-medium text-slate-700 sm:text-base"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0f2744] text-xs text-white">
                      ✓
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                whileHover={{ y: -6, scale: 1.02, transition: spring }}
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] px-8 py-10 text-center text-white shadow-xl ring-1 ring-white/10 sm:min-w-[200px]"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 20%, white 0%, transparent 45%), radial-gradient(circle at 80% 80%, violet 0%, transparent 40%)`,
                  }}
                  aria-hidden
                />
                <p className="relative text-4xl font-bold sm:text-5xl">10+</p>
                <p className="relative mt-2 text-sm font-medium text-white/85">Years of experience</p>
              </motion.div>
            </div>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25, ease }}
              whileHover={{ scale: 1.03, y: -2, transition: spring }}
              whileTap={{ scale: 0.98 }}
              className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-[#0f2744] px-6 py-3.5 text-sm font-semibold text-white shadow-md ring-1 ring-slate-900/10 transition-colors hover:bg-[#1a365d]"
            >
              Get free consultation
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
