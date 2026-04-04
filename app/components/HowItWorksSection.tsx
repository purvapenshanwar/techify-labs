"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const spring = { type: "spring" as const, stiffness: 400, damping: 30 };

const phases: {
  phase: string;
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
}[] = [
  {
    phase: "Phase 01",
    title: "Client onboarding",
    description: "Understanding goals, challenges, requirements, objectives, and budgets.",
    Icon: IconHandshake,
  },
  {
    phase: "Phase 02",
    title: "Target audience research",
    description: "Demographics, behaviour, interests, and competitor analysis.",
    Icon: IconTarget,
  },
  {
    phase: "Phase 03",
    title: "Establishing brand voice",
    description: "Aligned tone and messaging for cohesive campaigns across channels.",
    Icon: IconMegaphone,
  },
  {
    phase: "Phase 04",
    title: "Ad creative development",
    description: "Visuals and copy engineered for scroll-stopping performance.",
    Icon: IconPalette,
  },
  {
    phase: "Phase 05",
    title: "Campaign setup & optimization",
    description: "Launch, measure, and refine targeting to reduce waste and scale winners.",
    Icon: IconSliders,
  },
  {
    phase: "Phase 06",
    title: "Creative testing strategy",
    description: "Structured tests, learnings, and iteration based on live performance.",
    Icon: IconFlask,
  },
];

function IconHandshake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M8 20l4-8 4 4 8-8 4 4-8 8-4-4-4 8-4-4z" strokeLinejoin="round" />
    </svg>
  );
}
function IconTarget({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="5" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}
function IconMegaphone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M6 12h6l10-4v16l-10-4H6V12z" />
      <path d="M22 10v12" />
    </svg>
  );
}
function IconPalette({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 22a4 4 0 004 4h2a2 2 0 002-2v-2h2v-4H12v4z" />
      <path d="M6 14a10 10 0 0110-10 10 10 0 0110 10" />
    </svg>
  );
}
function IconSliders({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M5 10h22M9 10v-3M23 10v4M5 22h22M15 22v-4M19 22v3" strokeLinecap="round" />
    </svg>
  );
}
function IconFlask({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 6h8M14 6v8l-4 14h12l-4-14V6" strokeLinejoin="round" />
    </svg>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="border-t border-slate-100 bg-slate-50/80 py-16 sm:py-20 lg:py-24" aria-labelledby="how-heading">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-12 text-center lg:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-[#1a2b56] shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-indigo-500" aria-hidden />
            How it works
          </motion.span>
          <motion.h2
            id="how-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06, ease }}
            className="mx-auto mt-5 max-w-4xl text-2xl font-bold leading-snug tracking-tight text-[#1a2b56] sm:text-3xl lg:text-[2rem] lg:leading-tight"
          >
            Clear steps that ensure scalable, secure, and hassle-free campaign management
          </motion.h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {phases.map((p, i) => {
            const CardIcon = p.Icon;
            return (
              <motion.article
                key={p.phase}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.05, ease }}
                whileHover={{ y: -6, transition: spring }}
                whileTap={{ scale: 0.99 }}
                className="group/card flex flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm ring-1 ring-transparent transition-[border-color,box-shadow,background-color] duration-300 hover:border-indigo-200/80 hover:bg-sky-50/40 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="flex items-center justify-between gap-3">
                  <CardIcon className="h-8 w-8 text-indigo-600 transition-colors duration-300 group-hover/card:text-violet-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{p.phase}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#1a2b56] transition-colors duration-300 group-hover/card:text-indigo-800">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{p.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
