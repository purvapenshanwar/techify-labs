"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
  {
    q: "What digital marketing services do you offer?",
    a: "Paid media (Meta, Google, Amazon), SEO, creative, web development, email, and full-funnel strategy—aligned to your growth stage.",
  },
  {
    q: "How do you measure campaign success?",
    a: "We set clear KPIs up front—ROAS, CPA, leads, or revenue—and report in dashboards you can actually use, with plain-language commentary.",
  },
  {
    q: "Do you work with small businesses or only enterprises?",
    a: "Both. We scope retainers and projects to your budget, starting with quick wins and a roadmap to scale.",
  },
  {
    q: "How long before we see results?",
    a: "Some channels move in weeks; SEO and brand builds take longer. You’ll get a realistic timeline in the first sprint.",
  },
  {
    q: "Can you manage our existing ad accounts?",
    a: "Yes. We audit structure, creatives, and tracking, then optimize or rebuild where needed—without losing historical data.",
  },
  {
    q: "What does onboarding look like?",
    a: "Kickoff, access checklist, audience and offer review, then a 30–60–90 plan so everyone knows what ships when.",
  },
  {
    q: "How do we get started?",
    a: "Book a free consultation. We’ll align on goals and share a proposal with scope, timelines, and investment.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease }}
            className="relative mx-auto w-full max-w-md space-y-4 lg:mx-0"
          >
            <motion.div
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 380, damping: 28 } }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#151a3d] to-[#0f1430] p-8 shadow-xl ring-1 ring-white/10"
            >
              <div className="absolute inset-0 opacity-30" aria-hidden>
                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/40" />
                <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              </div>
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-2xl font-bold text-white shadow-lg">
                T
              </div>
              <p className="relative mt-6 text-center text-sm text-white/70">
                Strategy · Meta · Google · SEO · Analytics
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 rounded-xl bg-[#151a3d] p-4 text-white shadow-lg ring-1 ring-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl">🎧</span>
              <div>
                <p className="text-sm font-semibold">Need any help?</p>
                <p className="text-xs text-white/70">Contact us today · +91 9313961011</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] p-5 text-white shadow-lg ring-1 ring-white/10"
            >
              <p className="text-2xl font-bold">250K+</p>
              <p className="text-xs text-white/75">Reach &amp; growth milestones</p>
              <div className="mt-3 flex gap-2 text-[10px] font-medium uppercase tracking-wide text-white/60">
                <span>Analytics</span>
                <span>·</span>
                <span>Growth</span>
                <span>·</span>
                <span>Secure</span>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease }}
              className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3.5 py-1.5 text-sm font-semibold text-[#0f2744] ring-1 ring-sky-200/80"
            >
              FAQ
            </motion.span>
            <motion.h2
              id="faq-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05, ease }}
              className="mt-4 text-2xl font-bold leading-tight tracking-tight text-[#0c2d52] sm:text-3xl"
            >
              Frequently asked questions about digital marketing services
            </motion.h2>

            <ul className="mt-8 divide-y divide-slate-200">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q} className="py-1">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="group flex w-full items-start justify-between gap-4 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="flex gap-3">
                        <span className="mt-0.5 text-sm font-bold text-slate-400 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-base font-semibold transition-colors duration-200 ${isOpen ? "text-violet-700" : "text-[#0c2d52] group-hover:text-violet-600"}`}
                        >
                          {item.q}
                        </span>
                      </span>
                      <span
                        className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-light transition-colors duration-200 ${isOpen ? "bg-emerald-500/15 text-emerald-600" : "bg-slate-100 text-indigo-600 group-hover:bg-violet-50 group-hover:text-violet-600"}`}
                        aria-hidden
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease }}
                          className="overflow-hidden"
                        >
                          <p className="pb-4 pl-9 text-sm leading-relaxed text-slate-600 sm:pl-10">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
