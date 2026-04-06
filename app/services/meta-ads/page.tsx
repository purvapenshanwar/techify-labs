"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
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

const whyUs = [
  { title: "Data-Driven Results", desc: "Obsessed with numbers, not vanity likes. Every campaign is optimised for maximum ROI." },
  { title: "Multi-Industry Expertise", desc: "We've worked with brands across fashion, e-commerce, real estate, education, and more." },
  { title: "Personal Support", desc: "One point of contact who actually picks up the phone when you need them." },
  { title: "Transparent Reporting", desc: "Reports simple enough to read without a marketing degree — no jargon, just results." },
  { title: "ROI Focused", desc: "Every rupee counts. We keep testing and adjusting until your campaign moves." },
  { title: "Continuous Optimisation", desc: "We deliver consistent improvements, not one-time setups and promises." },
];

const processSteps = [
  { step: "01", title: "Business & Goal Analysis", desc: "We understand what you sell, who buys, and what a good lead or sale means for your business." },
  { step: "02", title: "Audience Research", desc: "We identify high-intent audiences and build structure for cold and retargeting campaigns." },
  { step: "03", title: "Ad Creative & Copywriting", desc: "Scroll-stopping creatives and clear messaging focused on benefits and simple CTAs." },
  { step: "04", title: "Campaign Launch", desc: "We launch with correct tracking, clean structure, and controlled testing budgets." },
  { step: "05", title: "Performance Optimisation", desc: "We test, improve, and remove waste — consistent improvements, not sudden guesses." },
  { step: "06", title: "Reporting & ROI Tracking", desc: "Clear updates on leads, cost per result, what we tested, and what we plan next." },
];

const adServices = [
  {
    title: "Facebook Lead Generation",
    desc: "Lead forms, messenger campaigns, and click-to-call ads that bring in people already interested in what you sell.",
    tags: ["Lead Forms", "Messenger Campaigns", "Click-to-Call Ads"],
  },
  {
    title: "eCommerce Facebook Ads",
    desc: "Catalog ads and retargeting that make abandoned carts disappear and products pop in front of ready-to-buy shoppers.",
    tags: ["Catalog Ads", "Dynamic Retargeting", "Shopping Campaigns"],
  },
  {
    title: "Facebook Retargeting",
    desc: "Smart creatives that bring back people who clicked, looked around, then left — at exactly the right moment.",
    tags: ["Website Visitors", "Lookalike Audiences", "Custom Audiences"],
  },
  {
    title: "Instagram Advertising",
    desc: "Ads that blend into feeds and stories but still nudge people to click — all managed from one Meta account.",
    tags: ["Story Ads", "Feed Posts", "Reels Advertising"],
  },
  {
    title: "Brand Awareness Campaigns",
    desc: "Keep your brand in the conversation so when the time comes to buy, you're the first they remember.",
    tags: ["Reach Campaigns", "Video Views", "Brand Recognition"],
  },
  {
    title: "Meta Pixel Setup & Optimisation",
    desc: "Without the Pixel, you're flying blind. We handle setup so you can track who clicked, who converted, and where to improve.",
    tags: ["Pixel Installation", "Event Tracking", "Conversion Optimisation"],
  },
];

const industries = [
  { title: "Fashion & Apparel", icon: "👗" },
  { title: "E-Commerce", icon: "🛒" },
  { title: "Real Estate", icon: "🏠" },
  { title: "Healthcare", icon: "🏥" },
  { title: "Education", icon: "🎓" },
  { title: "Technology", icon: "💻" },
  { title: "Food & Beverage", icon: "🍽️" },
  { title: "Professional Services", icon: "💼" },
  { title: "SaaS & Tech", icon: "☁️" },
];

const caseStudies = [
  {
    brand: "Ganga Fashion",
    tag: "Meta Ads + Google Ads",
    desc: "Scaled a leading fashion brand with full-funnel ads, driving consistent revenue growth month on month.",
  },
  {
    brand: "Doeraa",
    tag: "Meta Ads + Retention",
    desc: "Transformed an evolving designer brand's online store into a high-converting sales machine.",
  },
  {
    brand: "ARFL",
    tag: "Meta Ads + Google Ads",
    desc: "Planned effective strategies to deliver optimum leads for a home services brand at scale.",
  },
];

const stats = [
  { num: "200+", label: "Campaigns launched" },
  { num: "₹5Cr+", label: "Ad spend managed" },
  { num: "3.5×", label: "Average ROAS" },
];

const faqs = [
  {
    q: "Why hire a Meta ads agency instead of doing it myself?",
    a: "Ads are easy to run but hard to profit from. An agency saves you time, money, and frustration with expertise, tools, and proven strategies most businesses don't have in-house.",
  },
  {
    q: "How much should I spend on Meta ads?",
    a: "Depends on your goals and industry. Generally we recommend starting with at least ₹30,000–50,000 per month for meaningful results. We'll suggest a budget once we understand your goals.",
  },
  {
    q: "Do you manage Instagram ads too?",
    a: "Yes. One Meta account covers both Facebook and Instagram. We create campaigns that work seamlessly across both platforms to maximise reach.",
  },
  {
    q: "How soon will I see results?",
    a: "You'll usually notice traction within 2–3 weeks. Serious scaling takes a few months as we optimise based on real data.",
  },
  {
    q: "Do you provide regular reports?",
    a: "Always. Weekly performance updates and detailed monthly reports with clear next actions — simple enough to read without a marketing background.",
  },
];

export default function MetaAdsPage() {
  const reduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-full">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050816] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_30%_-30%,rgba(99,102,241,0.4),transparent_55%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(217,70,239,0.14),transparent_45%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pt-20">
          <nav className="mb-8 flex flex-wrap items-center gap-2.5 text-[12px] text-white/45 sm:mb-12" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span className="text-white/25" aria-hidden>/</span>
            <span className="text-white/25" aria-hidden>Solutions</span>
            <span className="text-white/25" aria-hidden>/</span>
            <span className="font-medium text-white">Meta Ads</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 22 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[12px] font-medium tracking-wide text-violet-200/90 backdrop-blur-md">
                <span className="relative flex h-2 w-2 shrink-0">
                  {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />}
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                </span>
                Performance Marketing · Meta & Instagram
              </div>
              <h1 className="mt-6 text-balance text-[1.85rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
                367 Million Indians Are On Facebook.{" "}
                <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                  Are They Seeing Your Brand?
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-white/65 sm:text-[17px]">
                We plan, run, and improve Meta ads for brands across India — Facebook, Instagram, Messenger, and Meta's full ad network. Results, not vanity metrics.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:from-violet-500 hover:to-fuchsia-500 sm:w-auto"
                >
                  Book Free Strategy Call
                </Link>
                <Link
                  href="#services"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  See what's included
                </Link>
              </div>
            </motion.div>

            {/* Sidebar contact card */}
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
              initial={reduce ? false : { opacity: 0, x: 20 }}
              animate={reduce ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-300/90">Paid Advertising Services</p>
              <div className="mt-4 space-y-2">
                {[
                  { label: "Meta Ads", href: "/services/meta-ads", active: true },
                  { label: "Google Ads", href: "/services/google-ads", active: false },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${s.active ? "bg-violet-600/30 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${s.active ? "bg-violet-400" : "bg-white/30"}`} />
                    {s.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">Contact information</p>
                <div className="mt-3 space-y-2">
                  <a href="tel:+919313961011" className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                    +91 9313961011
                  </a>
                  <a href="mailto:info@techify.com" className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white">
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    info@techify.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-t border-white/10 bg-[#0a0f1c] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <div className="grid grid-cols-3 gap-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="px-4 text-center first:pl-0 last:pr-0">
                <p className="text-2xl font-semibold text-white sm:text-3xl">{s.num}</p>
                <p className="mt-1 text-[12px] text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-slate-200/60 bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">Why choose us</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Why Choose Techify as Your Meta Ads Agency?
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Facebook advertising is powerful but can waste money fast if tracking or targeting is wrong. We focus on clean setup, smart testing, and regular optimisation.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={0.05 * i}>
                <div className="flex h-full gap-4 rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-violet-200/80 hover:shadow-md">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-violet-50/30 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">Our process</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Our Meta Ads Process</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Simple and repeatable — so you always know what is happening and why.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="relative h-full rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
                  <span className="text-4xl font-bold text-violet-100 sm:text-5xl">{s.step}</span>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Services */}
      <section id="services" className="border-t border-slate-200/60 bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">What's included</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Facebook Advertising Services We Offer</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              As a full-service Meta ads agency, we handle the full system — from strategy to scaling.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {adServices.map((s, i) => (
              <FadeIn key={s.title} delay={0.05 * i}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition hover:border-violet-200/80 hover:shadow-md">
                  <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-violet-50 px-3 py-1 text-[11px] font-medium text-violet-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-t border-slate-200/60 bg-slate-50 py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">Industries</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Industries We Serve</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Every industry has its quirks. We tailor campaigns to your audience, not someone else's.
            </p>
          </FadeIn>
          <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-9 lg:gap-4">
            {industries.map((ind, i) => (
              <FadeIn key={ind.title} delay={0.04 * i}>
                <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200/90 bg-white px-3 py-5 text-center shadow-sm transition hover:border-violet-200 hover:shadow-md">
                  <span className="text-2xl">{ind.icon}</span>
                  <p className="text-[11px] font-medium leading-snug text-slate-700">{ind.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="border-t border-slate-200/60 bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">Case studies</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Real Results from Real Brands</h2>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <FadeIn key={c.brand} delay={0.06 * i}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm sm:rounded-3xl sm:p-8">
                  <span className="inline-flex self-start rounded-full bg-violet-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-violet-700">
                    {c.tag}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{c.brand}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                  <Link href="/contact" className="mt-6 text-xs font-semibold text-violet-600 hover:text-violet-800">
                    Get similar results →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200/60 bg-slate-50 py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">FAQ</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-[14px] text-slate-600">Everything you need to know about working with us.</p>
          </FadeIn>
          <div className="mt-8 space-y-3 sm:mt-10">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <FadeIn key={item.q} delay={0.04 * i}>
                  <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm sm:rounded-2xl">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition hover:bg-slate-50/80 sm:px-6 sm:py-5"
                    >
                      <span className="text-[14px] font-semibold text-slate-900 sm:text-[15px]">{item.q}</span>
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${open ? "rotate-180 border-violet-200 bg-violet-50 text-violet-700" : "border-slate-200 bg-slate-50 text-slate-500"}`}>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease }}
                          className="overflow-hidden"
                        >
                          <p className="border-t border-slate-100 px-4 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200/80 bg-[#0a0f1c] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Turn Scrolls Into Sales</h2>
            <p className="mt-4 text-[15px] text-white/55">
              Book a free strategy call — we'll come back with a clear plan, realistic scope, and how we'd measure success.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact" className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-10 text-sm font-semibold text-white shadow-lg shadow-violet-500/30">
                Book Free Strategy Call
              </Link>
              <Link href="/services/google-ads" className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-10 text-sm font-semibold text-white">
                See Google Ads →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}