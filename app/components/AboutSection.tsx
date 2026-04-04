"use client";

import { motion } from "framer-motion";

const sectionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const springSoft = { type: "spring" as const, stiffness: 400, damping: 30, mass: 0.8 };
const springTap = { type: "spring" as const, stiffness: 520, damping: 35 };

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: sectionEase },
  }),
};

const stats = [
  {
    metric: "3.5X ROAS",
    caption: "Through well-structured funnel ads",
    Icon: IconChart,
  },
  {
    metric: "47+",
    caption: "Profoundly active clients",
    Icon: IconUsersRing,
  },
  {
    metric: "10%",
    caption: "Conversion rate through Advantage+ campaigns",
    Icon: IconTarget,
  },
];

function IconChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M8 38V10M8 38h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 30l8-10 6 6 10-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconUsersRing({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="18" r="6" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 38c0-6 5.4-10 12-10s12 4 12 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

const avatars = ["A", "B", "C", "D"];

export default function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="about-heading">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={springSoft}
              className="inline-flex cursor-default items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3.5 py-1.5 text-sm font-medium text-[#1e3a5f] shadow-sm transition-colors duration-300 hover:border-violet-300/70 hover:text-violet-800 hover:shadow-md hover:shadow-violet-500/10"
            >
              <motion.span
                className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-[10px] font-bold text-white shadow-inner"
                whileHover={{ scale: 1.08, rotate: 12 }}
                transition={springTap}
              >
                ✦
              </motion.span>
              Propel your business vision
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              whileHover={{ y: -4, transition: springSoft }}
              className="group/card relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f2744] via-[#152a4a] to-[#1a365d] p-6 shadow-xl ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-2xl hover:shadow-indigo-950/40 hover:ring-violet-400/25 sm:p-8"
            >
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/25 via-indigo-500/10 to-fuchsia-500/20 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                aria-hidden
              />
              <div className="relative flex items-center gap-0">
                {avatars.map((letter, i) => (
                  <motion.span
                    key={letter}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#152a4a] bg-white text-xs font-bold text-slate-600 shadow-md transition-colors duration-300 first:ml-0 -ml-3 group-hover/card:border-violet-200 group-hover/card:text-violet-700"
                    style={{ zIndex: avatars.length - i }}
                    whileHover={{ scale: 1.12, y: -3, transition: springTap }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <motion.span
                  className="-ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#152a4a] bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg font-light text-white shadow-md transition-[box-shadow,filter] duration-300 group-hover/card:shadow-lg group-hover/card:shadow-violet-500/40"
                  whileHover={{ scale: 1.1 }}
                  transition={springTap}
                >
                  +
                </motion.span>
              </div>
              <p className="relative mt-6 text-base font-medium leading-snug text-white/95 transition-colors duration-300 group-hover/card:text-white sm:text-lg">
                Results driven web design agency
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
          >
            <motion.h2
              id="about-heading"
              variants={fadeUp}
              custom={0}
              className="text-3xl font-bold leading-[1.15] tracking-tight text-[#0c2d52] sm:text-4xl lg:text-[2.35rem] lg:leading-tight"
            >
              Result-driven digital marketing &amp; web development agency in India
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              We combine strategy, creative, and performance media to help brands scale with clarity.
              Our team blends technical depth with marketing instincts—so every launch, funnel, and
              campaign is built to convert, not just look good.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } }, hidden: {} }}
          className="mt-14 grid gap-5 sm:grid-cols-3 lg:mt-16"
        >
          {stats.map((s) => (
            <motion.div
              key={s.metric}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: sectionEase } },
              }}
              whileHover={{ y: -8, scale: 1.02, transition: springSoft }}
              whileTap={{ scale: 0.99, transition: springTap }}
              className="group/stat relative cursor-default overflow-hidden rounded-2xl border border-slate-200/95 bg-white p-6 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-transparent hover:shadow-xl hover:shadow-violet-500/20 sm:p-7"
            >
              {/* Default: white card. Hover: purple → violet → blue gradient (matches reference). */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-500 via-violet-600 to-blue-700 opacity-0 transition-opacity duration-500 ease-out group-hover/stat:opacity-100"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/stat:opacity-100"
                aria-hidden
              />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.06, rotate: -4 }}
                  transition={springTap}
                  className="inline-block"
                >
                  <s.Icon className="h-10 w-10 text-[#1e4976] transition-colors duration-300 group-hover/stat:text-white" />
                </motion.div>
                <p className="mt-5 text-3xl font-bold tracking-tight text-[#0c2d52] transition-colors duration-300 group-hover/stat:text-white sm:text-4xl">
                  {s.metric}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover/stat:text-white/90">
                  {s.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: sectionEase, delay: 0.15 }}
          className="mt-12 lg:mt-14"
        >
          <motion.a
            href="#"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[#0f2744] px-6 py-3.5 text-sm font-semibold text-white shadow-md ring-1 ring-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
            whileHover={{
              scale: 1.03,
              y: -2,
              boxShadow: "0 20px 40px -12px rgba(30, 58, 95, 0.45)",
              transition: springSoft,
            }}
            whileTap={{ scale: 0.98, transition: springTap }}
          >
            <span
              className="absolute inset-0 bg-[#1a365d] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <span
              className="absolute inset-0 bg-gradient-to-r from-violet-600/25 via-fuchsia-500/20 to-violet-600/25 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
            <span className="relative z-10 flex items-center gap-2">
              More about us
              <span
                aria-hidden
                className="text-lg leading-none transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
