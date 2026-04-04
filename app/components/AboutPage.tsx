"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;
const spring = { type: "spring" as const, stiffness: 360, damping: 28 };

const milestones = [
  {
    year: "2019",
    title: "Paid media practice",
    detail: "Meta and Google Ads retainers with reporting built for founders and finance — not vanity dashboards.",
  },
  {
    year: "2021",
    title: "Creative & landing in-house",
    detail: "Hooks, pages, and experiments bundled with media so tests ship in days, not procurement cycles.",
  },
  {
    year: "2023",
    title: "National footprint",
    detail: "Retainers across categories — same leads on your account, shared standards across the studio.",
  },
  {
    year: "Now",
    title: "Full growth stack",
    detail: "SEO, lifecycle, and commerce builds run beside paid — one roadmap, one weekly review.",
  },
];

const principles = [
  {
    title: "Accountability",
    body: "Spend, targets, and tests map to revenue or pipeline. If we cannot measure it, we say so before we scale it.",
  },
  {
    title: "Direct ownership",
    body: "Channel specialists speak to you directly. Strategy and execution stay with the same leads.",
  },
  {
    title: "Commercial honesty",
    body: "We align on guardrails and incrementality before budgets move — so scaling is a decision, not a surprise.",
  },
  {
    title: "Operational pace",
    body: "Creative, technical, and media work ships weekly. Roadmaps are living documents, not quarterly decks.",
  },
];

const practiceAreas = [
  {
    title: "Performance media",
    channels: "Meta · Google · Amazon",
    text: "Account structure, audience strategy, creative testing, and feed discipline for stable CAC at scale.",
    Icon: IconChart,
  },
  {
    title: "Creative & experience",
    channels: "Brand · UGC · landing",
    text: "Copy and layouts grounded in query and placement intent — built to learn, not to decorate slides.",
    Icon: IconPalette,
  },
  {
    title: "Commerce & web",
    channels: "Shopify · custom",
    text: "Speed, clarity, and checkout flows aligned with what your ads promise on every device.",
    Icon: IconWindow,
  },
  {
    title: "Organic & authority",
    channels: "SEO · content",
    text: "Technical foundations and editorial programmes aimed at how buyers actually search your category.",
    Icon: IconSearch,
  },
];

const stackLabels = ["Meta Ads", "Google Ads", "Google Analytics", "Shopify", "Search Console", "Tag Manager"];

const heroTrust = [
  { label: "Operating model", value: "Retainer + pods" },
  { label: "Review cadence", value: "Weekly" },
  { label: "Delivery", value: "India-wide" },
];

function IconChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M4 19V5M4 19h16M8 17V9m4 8V5m4 12v-5" strokeLinecap="round" />
    </svg>
  );
}
function IconPalette({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.5 0 2.5-.5 3.5-1.5" strokeLinecap="round" />
      <circle cx="7.5" cy="10.5" r="1" fill="currentColor" />
      <circle cx="10.5" cy="7.5" r="1" fill="currentColor" />
      <circle cx="14.5" cy="7.5" r="1" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="1" fill="currentColor" />
    </svg>
  );
}
function IconWindow({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 21V9" strokeLinecap="round" />
    </svg>
  );
}
function IconSearch({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="11" cy="11" r="6" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const reduce = useReducedMotion();

  return (
    <>
      {/* Hero — immersive */}
      <section className="relative overflow-hidden bg-[#050816] text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-40%,rgba(99,102,241,0.45),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_60%,rgba(168,85,247,0.18),transparent_45%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E')]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pt-20">
          <nav className="mb-14 flex items-center gap-3 text-[13px] text-white/45" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-white/25" aria-hidden>
              /
            </span>
            <span className="font-medium text-white">About</span>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10 lg:gap-y-0">
            <div className="lg:col-span-6 xl:col-span-5">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[12px] font-medium tracking-wide text-violet-200/90 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    {!reduce && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />
                    )}
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                  </span>
                  Techify · Growth studio
                </div>
                <h1 className="mt-8 text-[2.35rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
                  Growth that{" "}
                  <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                    finance and marketing
                  </span>{" "}
                  both understand.
                </h1>
                <p className="mt-8 max-w-lg text-[17px] leading-[1.7] text-white/65">
                  From Gujarat we partner with brands across India — paid social, search, SEO, and commerce in one operating
                  rhythm, so leadership sees a single story from spend to sale.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <motion.a
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-[14px] font-semibold text-slate-900 shadow-lg shadow-violet-900/30 transition hover:bg-violet-50"
                    whileHover={reduce ? undefined : { scale: 1.02, y: -1 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                  >
                    Start a conversation
                  </motion.a>
                  <Link
                    href="/#services"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
                  >
                    Explore services
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="mt-14 grid grid-cols-3 gap-3 sm:gap-4"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease }}
              >
                {heroTrust.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-md sm:px-5 sm:py-5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-white sm:text-[15px]">{item.value}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="relative lg:col-span-6 xl:col-span-7">
              <motion.div
                className="relative mx-auto max-w-lg lg:max-w-none"
                initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
              >
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-transparent blur-2xl lg:-inset-8" aria-hidden />
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50 ring-1 ring-white/10 sm:aspect-[5/4] lg:aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85"
                    alt="Modern workspace with natural light"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/20 to-transparent" aria-hidden />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300/90">Ahmedabad · Gujarat</p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85 sm:text-[15px]">
                      Client workshops with media, creative, and analytics in one room — decisions stay tied to your numbers.
                    </p>
                  </div>
                </div>
                <motion.div
                  className="absolute -bottom-6 -left-4 hidden max-w-[200px] rounded-2xl border border-white/10 bg-[#0c1228]/90 p-4 shadow-xl backdrop-blur-xl sm:block lg:-left-8 lg:max-w-[220px]"
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={reduce ? undefined : { opacity: 1, x: 0 }}
                  transition={{ delay: 0.45, duration: 0.5, ease }}
                  whileHover={reduce ? undefined : { y: -4, transition: spring }}
                >
                  <p className="text-xs font-semibold text-white">One roadmap</p>
                  <p className="mt-1 text-[11px] leading-snug text-white/55">Paid, organic, and build work share the same weekly priorities.</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="relative overflow-hidden border-b border-violet-200/30 bg-gradient-to-b from-violet-50 via-white to-white py-16 sm:py-20">
        <div className="pointer-events-none absolute left-8 top-1/2 hidden -translate-y-1/2 font-serif text-[120px] leading-none text-violet-200/40 lg:block" aria-hidden>
          “
        </div>
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <FadeIn>
            <p className="text-lg font-light leading-relaxed text-slate-700 sm:text-xl sm:leading-relaxed lg:text-[1.35rem] lg:leading-relaxed">
              We exist so marketing and finance read the{" "}
              <span className="font-medium text-slate-900">same numbers</span> — and every experiment ties back to a commercial
              decision, not a slide title.
            </p>
            <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" aria-hidden />
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-slate-200/80 bg-white py-20 sm:py-28" aria-labelledby="about-story">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <p id="about-story" className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                  Who we are
                </p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
                  For teams that have outgrown freelancers but are not rebuilding an in-house department.
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-7">
              <FadeIn delay={0.06}>
                <div className="flex gap-8 sm:gap-10">
                  <div
                    className="w-1 shrink-0 rounded-full bg-gradient-to-b from-violet-500 via-fuchsia-500 to-violet-200/40"
                    aria-hidden
                  />
                  <div className="space-y-6 text-[17px] leading-[1.75] text-slate-600">
                    <p>
                      Most brands we work with already run ads or have a site. The gap is consistency: account structures that
                      survive scale, creative that matches intent, and reporting that finance trusts. Techify began as paid media
                      and grew only where clients asked us to own the full path to conversion.
                    </p>
                    <p>
                      Today that includes organic search, lifecycle where it matters, and Shopify or custom builds when the
                      storefront limits growth. One weekly cadence keeps priorities aligned — nothing competes in silence.
                    </p>
                  </div>
                </div>
                <div className="relative mt-12 overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950 p-8 sm:p-10">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" aria-hidden />
                  <blockquote className="relative text-xl font-light italic leading-snug text-white sm:text-2xl">
                    Outcomes first. <span className="font-semibold not-italic text-violet-200">Channels follow.</span>
                  </blockquote>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Practice — bento cards */}
      <section id="team" className="border-b border-slate-200/80 bg-slate-50 py-20 sm:py-28" aria-labelledby="about-practice">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <FadeIn className="max-w-2xl">
              <p id="about-practice" className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
                Capabilities
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem]">
                How the studio is organised
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-slate-600">
                Discipline leads own their craft and sit in the same client forum — no layers that reset context every week.
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {practiceAreas.map((row, i) => (
              <FadeIn key={row.title} delay={0.05 * i}>
                <motion.div
                  className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-8 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.2)] transition-shadow hover:shadow-[0_28px_60px_-24px_rgba(99,102,241,0.15)]"
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={spring}
                >
                  <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600 ring-1 ring-violet-100 transition group-hover:bg-violet-100 group-hover:ring-violet-200">
                    <row.Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{row.channels}</span>
                  <h3 className="mt-3 pr-16 text-xl font-semibold text-slate-900">{row.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{row.text}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500 group-hover:w-full" aria-hidden />
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.12} className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200/90 shadow-xl lg:mt-14">
            <div className="aspect-[21/9] min-h-[220px] sm:min-h-[280px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85"
                alt="Team collaborating in a meeting"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/40 to-transparent" aria-hidden />
              <div className="absolute inset-y-0 left-0 flex max-w-lg flex-col justify-center p-8 sm:p-12 lg:p-14">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-300">Collaboration</p>
                <p className="mt-3 text-xl font-semibold leading-snug text-white sm:text-2xl">
                  Strategy, creative, and analytics stay in one conversation — briefs do not drift from your P&amp;L.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-slate-200/80 bg-white py-20 sm:py-28" aria-labelledby="about-principles">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p id="about-principles" className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Standards
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">What every engagement shares</h2>
          </FadeIn>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, idx) => (
              <FadeIn key={p.title} delay={0.05 * idx}>
                <motion.div
                  className="relative h-full rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50/80 to-white p-7 shadow-sm sm:p-8"
                  whileHover={reduce ? undefined : { y: -3 }}
                  transition={spring}
                >
                  <div className="h-1 w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" aria-hidden />
                  <h3 className="mt-5 text-[16px] font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{p.body}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-[#0a0f1c] py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(99,102,241,0.15),transparent_50%)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FadeIn className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-300/80">Stack</p>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/55">
              Platforms we configure daily for measurement, governance, and scale — not shelf-ware.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {stackLabels.map((label) => (
                <motion.li
                  key={label}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 text-[13px] font-medium text-white/90 backdrop-blur-sm"
                  whileHover={reduce ? undefined : { scale: 1.05, borderColor: "rgba(167,139,250,0.4)" }}
                  transition={spring}
                >
                  {label}
                </motion.li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-20 sm:py-28" aria-labelledby="about-history">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FadeIn className="max-w-xl">
            <p id="about-history" className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-600">
              Timeline
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Built with client demand</h2>
          </FadeIn>

          <div className="relative mt-16 hidden lg:block">
            <div className="absolute left-0 right-0 top-[2.25rem] h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" aria-hidden />
            <div className="grid grid-cols-4 gap-8">
              {milestones.map((m, i) => (
                <FadeIn key={m.year} delay={0.06 * i}>
                  <div className="relative rounded-2xl border border-slate-200/90 bg-white p-8 pt-14 shadow-sm">
                    <span className="absolute left-8 top-0 flex h-9 min-w-[2.25rem] -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 px-2 text-[11px] font-bold text-white shadow-lg shadow-violet-900/25 ring-4 ring-slate-50">
                      {m.year === "Now" ? "Now" : m.year.slice(2)}
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-violet-600">{m.year}</p>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900">{m.title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-slate-600">{m.detail}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <ol className="mt-12 space-y-6 lg:hidden">
            {milestones.map((m) => (
              <FadeIn key={m.year}>
                <li className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 min-w-[2.5rem] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 px-2 text-[11px] font-bold text-white">
                      {m.year === "Now" ? "Now" : m.year.slice(2)}
                    </span>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-violet-600">{m.year}</p>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{m.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{m.detail}</p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h30v30H0z\' fill=\'none\'/%3E%3Cpath d=\'M0 15h30M15 0v30\' stroke=\'%23ffffff\' stroke-opacity=\'0.04\'/%3E%3C/svg%3E')]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Discuss scope and fit</h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/65">
              Share your category, channels, and targets. We will reply with a clear view of priorities — whether or not we are
              the right partner for the next phase.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="/contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-10 text-[14px] font-semibold text-slate-900 shadow-xl shadow-black/20 sm:w-auto"
                whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Go to contact
              </motion.a>
              <Link
                href="/"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/25 px-10 text-[14px] font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Homepage
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
