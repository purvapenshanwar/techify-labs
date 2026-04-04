"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const spring = { type: "spring" as const, stiffness: 360, damping: 28 };
const springGentle = { type: "spring" as const, stiffness: 280, damping: 32 };

/**
 * High-quality Unsplash photos (CDN). Swap URLs for your own assets
 * (e.g. Google Drive direct links — add hostname to next.config `images.remotePatterns`).
 */
const projects = [
  {
    name: "Ganga Fashions",
    brand: "Ganga",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=900&h=1200&fit=crop&q=80",
    tint: "from-rose-950/70 via-amber-950/50 to-transparent",
  },
  {
    name: "Doeraa",
    brand: "doeraa",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&h=1200&fit=crop&q=80",
    tint: "from-fuchsia-950/65 via-purple-950/45 to-transparent",
  },
  {
    name: "ARFL",
    brand: "ARFL",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=1200&fit=crop&q=80",
    tint: "from-slate-950/75 via-blue-950/55 to-transparent",
  },
  {
    name: "Retail partner",
    brand: "Partner",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=1200&fit=crop&q=80",
    tint: "from-emerald-950/65 via-teal-950/45 to-transparent",
  },
] as const;

const headerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const gridContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const gridItem = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
};

function CaseStudyCard({
  project,
  index,
  reduceMotion,
}: {
  project: (typeof projects)[number];
  index: number;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      variants={gridItem}
      className="h-full [perspective:1400px]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.a
        href="#"
        className="group/card relative block h-full min-h-[320px] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/10 sm:min-h-[380px] lg:aspect-[3/4] lg:min-h-0"
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -10,
                scale: 1.02,
                rotateX: 2,
                rotateY: index % 2 === 0 ? -1.5 : 1.5,
                transition: spring,
              }
        }
        whileTap={reduceMotion ? undefined : { scale: 0.99, transition: springGentle }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={reduceMotion ? undefined : { scale: 1.08 }}
          transition={{ duration: 0.65, ease }}
        >
          <Image
            src={project.image}
            alt={`${project.name} — case study preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            priority={index < 2}
          />
        </motion.div>

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25 transition-opacity duration-500 group-hover/card:from-black/75 group-hover/card:via-black/35"
          aria-hidden
        />
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.tint} mix-blend-multiply opacity-90 transition-opacity duration-500 group-hover/card:opacity-75`}
          aria-hidden
        />

        <motion.div
          className="absolute inset-0 bg-violet-600/0"
          whileHover={reduceMotion ? undefined : { backgroundColor: "rgba(124, 58, 237, 0.12)" }}
          transition={{ duration: 0.35 }}
          aria-hidden
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center">
          <motion.div
            className="flex flex-col items-center gap-2 text-white"
            initial={false}
            whileHover={reduceMotion ? undefined : { y: -4, transition: springGentle }}
          >
            <span className="text-lg font-bold tracking-tight drop-shadow-lg sm:text-xl">{project.brand}</span>
            <motion.span
              className="text-xl font-light text-white/85"
              whileHover={reduceMotion ? undefined : { scale: 1.15, rotate: 90, transition: spring }}
            >
              ×
            </motion.span>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/95 drop-shadow-md">
              Techify
            </span>
          </motion.div>

          <motion.span
            className="mt-auto rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#0c2d52] shadow-lg backdrop-blur-sm ring-1 ring-white/40"
            whileHover={reduceMotion ? undefined : { scale: 1.05, y: -2, transition: springGentle }}
          >
            {project.name}
          </motion.span>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
          aria-hidden
        />
      </motion.a>
    </motion.div>
  );
}

export default function CaseStudiesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="border-t border-slate-100 bg-slate-50/90 py-16 sm:py-20 lg:py-24" aria-labelledby="case-studies-heading">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-10 flex flex-col gap-6 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <motion.span
              variants={headerItem}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-[#0c2d52] shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-violet-500" aria-hidden />
              Our projects
            </motion.span>
            <motion.h2
              variants={headerItem}
              id="case-studies-heading"
              className="mt-4 text-3xl font-bold tracking-tight text-[#0c2d52] sm:text-4xl"
            >
              Case studies
            </motion.h2>
            <motion.p
              variants={headerItem}
              className="mt-3 max-w-xl text-sm text-slate-600 sm:text-base"
            >
              Real brands, measurable outcomes—creative and media engineered for growth.
            </motion.p>
          </div>
          <motion.a
            variants={headerItem}
            href="#"
            whileHover={reduceMotion ? undefined : { scale: 1.04, y: -3, transition: spring }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 self-start overflow-hidden rounded-xl bg-[#0f2744] px-5 py-3 text-sm font-semibold text-white shadow-md ring-1 ring-slate-900/10 sm:self-auto"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-500/25 to-fuchsia-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <span className="relative z-10">View all projects</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((p, i) => (
            <CaseStudyCard key={p.name} project={p} index={i} reduceMotion={reduceMotion} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="mt-12 text-center text-sm text-slate-600 sm:text-base"
        >
          <motion.span
            whileHover={reduceMotion ? undefined : { scale: 1.05 }}
            className="mr-2 inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white shadow-sm"
          >
            Free
          </motion.span>
          From setup to scaling —{" "}
          <a href="#" className="font-semibold text-violet-700 underline-offset-2 transition-colors hover:text-fuchsia-700 hover:underline">
            Book your free consultation now.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
