"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useId, useMemo, useState, type FormEvent, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const spring = { type: "spring" as const, stiffness: 380, damping: 28 };

const PHONE_E164 = "+919313961011";
const PHONE_DISPLAY = "+91 9313961011";
const PHONE_TEL = `tel:${PHONE_E164}`;
const EMAIL = "info@techify.com";
const WA_LINK = `https://wa.me/${PHONE_E164.replace(/\D/g, "")}`;

const topics = [
  "Paid media (Meta / Google)",
  "SEO & content",
  "Website / Shopify",
  "Full-funnel retainer",
  "Something else",
] as const;

type Topic = (typeof topics)[number];

const processSteps = [
  {
    title: "Acknowledgement",
    body: "We confirm receipt and, if needed, ask one or two clarifying questions so nothing important is missed.",
    day: "Day 0–1",
  },
  {
    title: "Discovery",
    body: "Short call or async brief — goals, constraints, channels, and how you measure success.",
    day: "Day 1–3",
  },
  {
    title: "Scope & proposal",
    body: "Clear deliverables, timeline, and reporting cadence. No vague “growth packages.”",
    day: "Day 3–7",
  },
  {
    title: "Kickoff",
    body: "Access, tracking, and a shared roadmap. You always know what’s live and what’s next.",
    day: "After sign-off",
  },
] as const;

const engagementTypes = [
  {
    title: "Retainer",
    desc: "Ongoing media, SEO, or full-funnel execution with weekly or bi-weekly reporting.",
    tag: "Most common",
  },
  {
    title: "Project",
    desc: "Launches, site builds, or campaign sprints with fixed milestones and a defined end date.",
    tag: "Scoped work",
  },
  {
    title: "Audit & strategy",
    desc: "Channel reviews, technical SEO, or funnel diagnostics — recommendations you can run with us or in-house.",
    tag: "Advisory",
  },
] as const;

const trustPoints = [
  { label: "IST business hours", sub: "Mon–Fri, India time" },
  { label: "Direct channel leads", sub: "No ticket roulette" },
  { label: "Clear reporting", sub: "Metrics tied to goals" },
  { label: "NDA on request", sub: "Before sensitive docs" },
] as const;

const faqs = [
  {
    q: "Do you work with brands outside India?",
    a: "Yes. We’re remote-first and used to async handoffs across time zones. Calls are scheduled where overlap makes sense.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "It depends on the channel and scope. We’ll spell out duration and exit terms in the proposal so there are no surprises.",
  },
  {
    q: "How do you handle data and access?",
    a: "We use least-privilege access to ad accounts, analytics, and CMS. You can revoke access at any time; we document what we need up front.",
  },
  {
    q: "What does the form do when I submit?",
    a: "It opens your email app with a pre-filled message to our team. You can edit before sending — nothing is transmitted until you hit send in your mail client.",
  },
] as const;

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

export default function ContactPage() {
  const reduce = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState<Topic | "">("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqBaseId = useId();

  const validate = useCallback(() => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Please add your name";
    if (!email.trim()) next.email = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Enter a valid email";
    if (!message.trim()) next.message = "A short brief helps us respond";
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [name, email, message]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Inquiry — ${topic || "General"} — ${company || name || "Techify"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nCompany: ${company || "—"}\nInterest: ${topic || "—"}\n\n${message}`,
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [name, email, phone, company, topic, message]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const inputOk =
    "mt-2 w-full min-h-[48px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-200/80 focus:ring-offset-0 sm:py-3.5";
  const inputErr =
    "mt-2 w-full min-h-[48px] rounded-xl border border-red-300 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 focus:ring-offset-0 sm:py-3.5";

  return (
    <div className="min-h-full">
      {/* Hero — aligned with About */}
      <section className="relative overflow-hidden bg-[#050816] text-white">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_30%_-30%,rgba(99,102,241,0.4),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(217,70,239,0.14),transparent_45%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E')]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pb-24 lg:pt-20">
          <nav className="mb-8 flex flex-wrap items-center gap-2.5 text-[12px] text-white/45 sm:mb-12 sm:gap-3 sm:text-[13px]" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-white/25" aria-hidden>
              /
            </span>
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
            <span className="text-white/25" aria-hidden>
              /
            </span>
            <span className="font-medium text-white">Contact</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            <div className="min-w-0 lg:col-span-6">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
              >
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-violet-200/90 backdrop-blur-md sm:px-4 sm:text-[12px]">
                  <span className="relative flex h-2 w-2 shrink-0">
                    {!reduce && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />
                    )}
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
                  </span>
                  <span className="leading-snug">New projects &amp; partnerships</span>
                </div>
                <h1 className="mt-6 text-balance text-[1.85rem] font-semibold leading-[1.1] tracking-tight sm:mt-8 sm:text-5xl lg:text-[3.25rem]">
                  Tell us what you&apos;re{" "}
                  <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                    building next.
                  </span>
                </h1>
                <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-white/65 sm:mt-8 sm:text-[17px]">
                  One message — we come back with fit, realistic scope, and how we&apos;d measure progress. No auto-responder
                  essays.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
                  <motion.a
                    href={PHONE_TEL}
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-[14px] font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto sm:min-h-[44px] sm:px-5 sm:text-[13px]"
                    whileHover={reduce ? undefined : { y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                  >
                    Call now
                  </motion.a>
                  <motion.a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 text-[14px] font-semibold text-emerald-200 transition hover:bg-emerald-500/20 sm:w-auto sm:min-h-[44px] sm:px-5 sm:text-[13px]"
                    whileHover={reduce ? undefined : { y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                  >
                    WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <div className="relative min-w-0 lg:col-span-6">
              <motion.div
                className="relative mx-auto max-w-lg lg:max-w-none"
                initial={reduce ? false : { opacity: 0, scale: 0.96, y: 16 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease }}
              >
                <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-violet-500/25 via-fuchsia-500/10 to-transparent blur-2xl lg:-inset-6" aria-hidden />
                <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:aspect-[16/10]">
                  <Image
                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=85"
                    alt="Communication and workspace"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-transparent to-[#050816]/30" aria-hidden />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300/90 sm:text-[11px]">Studio hours</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-white/85 sm:mt-2 sm:text-[15px]">
                      Weekdays · Replies within a business day. Active retainers have a direct line to channel leads.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="relative border-t border-violet-200/20 bg-gradient-to-b from-violet-50/40 via-slate-50 to-slate-100 py-12 sm:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(167,139,250,0.08),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="mb-10 lg:hidden">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">Get started</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">Send an inquiry — or reach us directly below.</p>
          </FadeIn>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="order-2 min-w-0 space-y-5 lg:order-1 lg:col-span-4">
              <FadeIn>
                <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Reach us directly</h2>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                  Pick the channel you prefer — same team, same standards.
                </p>
              </FadeIn>

              <FadeIn delay={0.05} className="space-y-3 sm:space-y-4">
                <motion.a
                  href={PHONE_TEL}
                  className="group flex min-h-[56px] items-start gap-4 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.2)] backdrop-blur-sm transition active:bg-violet-50/30 hover:border-violet-200 hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.2)] sm:min-h-0 sm:p-5"
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.99 }}
                  transition={spring}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 text-violet-700 ring-1 ring-violet-200/80 transition group-hover:from-violet-200 group-hover:to-indigo-200 sm:h-12 sm:w-12">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Phone</p>
                    <p className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">{PHONE_DISPLAY}</p>
                    <p className="mt-2 text-xs font-medium text-violet-600 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">
                      Tap to call →
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.15)] backdrop-blur-sm sm:p-5"
                  whileHover={reduce ? undefined : { y: -2 }}
                  transition={spring}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 ring-1 ring-slate-200 sm:h-12 sm:w-12">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email</p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="mt-1 block break-all text-base font-semibold text-slate-900 hover:text-violet-700 sm:truncate sm:text-lg"
                      >
                        {EMAIL}
                      </a>
                      <motion.button
                        type="button"
                        onClick={copyEmail}
                        className="mt-3 min-h-[40px] rounded-lg bg-violet-50 px-4 py-2 text-xs font-semibold text-violet-700 transition hover:bg-violet-100 sm:min-h-0 sm:px-3 sm:py-1.5"
                        whileTap={reduce ? undefined : { scale: 0.97 }}
                      >
                        <AnimatePresence mode="wait">
                          {copied ? (
                            <motion.span key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                              Copied ✓
                            </motion.span>
                          ) : (
                            <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                              Copy address
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                <motion.a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[56px] items-start gap-4 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-white p-4 shadow-[0_16px_40px_-24px_rgba(5,150,105,0.15)] transition active:bg-emerald-50/80 hover:border-emerald-300 hover:shadow-lg sm:min-h-0 sm:p-5"
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.99 }}
                  transition={spring}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-600/25 sm:h-12 sm:w-12">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700/80">WhatsApp</p>
                    <p className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">Message the studio</p>
                    <p className="mt-2 text-xs font-medium text-emerald-700 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">
                      Opens in new tab →
                    </p>
                  </div>
                </motion.a>
              </FadeIn>

              <FadeIn delay={0.12}>
                <div className="rounded-2xl border border-dashed border-violet-200/80 bg-violet-50/50 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-violet-600/80">Response</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    <span className="font-semibold text-slate-800">~24h</span> acknowledgement on weekdays. For proposals we may
                    suggest a short call to align on goals.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="order-1 min-w-0 lg:order-2 lg:col-span-8">
              <FadeIn>
                <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_32px_64px_-28px_rgba(15,23,42,0.25)] ring-1 ring-violet-100/60 sm:rounded-3xl">
                  <div className="h-1.5 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600" aria-hidden />
                  <div className="border-b border-slate-100 px-4 py-5 sm:px-9 sm:py-7">
                    <h2 className="text-lg font-semibold text-slate-900 sm:text-2xl">Project inquiry</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      <span className="text-red-500">*</span> Required. Submit builds a draft in your email app — you can edit
                      before sending.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="done"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="px-4 py-12 text-center sm:px-9 sm:py-14"
                      >
                        <motion.div
                          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                          initial={reduce ? false : { scale: 0.8 }}
                          animate={reduce ? undefined : { scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 22 }}
                        >
                          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                        <h3 className="mt-8 text-xl font-semibold text-slate-900">Ready to send</h3>
                        <p className="mx-auto mt-3 max-w-md text-[15px] text-slate-600">
                          Your mail app opens with subject and body filled. Adjust anything, then hit send.
                        </p>
                        <motion.a
                          href={mailtoHref}
                          className="mt-10 inline-flex min-h-[48px] w-full max-w-sm items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 sm:h-12 sm:w-auto sm:max-w-none sm:px-10"
                          whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
                          whileTap={reduce ? undefined : { scale: 0.98 }}
                        >
                          Open in email app
                        </motion.a>
                        <motion.button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="mt-8 text-sm font-semibold text-slate-500 underline-offset-2 hover:text-slate-800 hover:underline"
                          whileHover={reduce ? undefined : { x: -3 }}
                        >
                          ← Edit form
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="px-4 py-7 sm:px-9 sm:py-10"
                      >
                        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                          <div className="sm:col-span-2">
                            <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">
                              Full name <span className="text-red-500">*</span>
                            </label>
                            <input
                              id="contact-name"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                                if (errors.name) setErrors((o) => ({ ...o, name: "" }));
                              }}
                              className={errors.name ? inputErr : inputOk}
                              placeholder="Your name"
                              autoComplete="name"
                            />
                            {errors.name && (
                              <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="mt-1.5 text-xs font-medium text-red-600">
                                {errors.name}
                              </motion.p>
                            )}
                          </div>
                          <div>
                            <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">
                              Work email <span className="text-red-500">*</span>
                            </label>
                            <input
                              id="contact-email"
                              type="email"
                              value={email}
                              onChange={(e) => {
                                setEmail(e.target.value);
                                if (errors.email) setErrors((o) => ({ ...o, email: "" }));
                              }}
                              className={errors.email ? inputErr : inputOk}
                              placeholder="you@company.com"
                              autoComplete="email"
                            />
                            {errors.email && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>}
                          </div>
                          <div>
                            <label htmlFor="contact-phone" className="text-sm font-medium text-slate-700">
                              Phone <span className="text-slate-400">(optional)</span>
                            </label>
                            <input
                              id="contact-phone"
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className={inputOk}
                              placeholder="+91 …"
                              autoComplete="tel"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label htmlFor="contact-company" className="text-sm font-medium text-slate-700">
                              Company <span className="text-slate-400">(optional)</span>
                            </label>
                            <input
                              id="contact-company"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              className={inputOk}
                              placeholder="Brand or legal name"
                              autoComplete="organization"
                            />
                          </div>
                        </div>

                        <div className="mt-8">
                          <p className="text-sm font-medium text-slate-700">What are you exploring?</p>
                          <div className="mt-3 flex flex-wrap gap-2 sm:gap-2.5">
                            {topics.map((t) => {
                              const active = topic === t;
                              return (
                                <motion.button
                                  key={t}
                                  type="button"
                                  onClick={() => setTopic(active ? "" : t)}
                                  className={`min-h-[44px] rounded-full border px-3.5 py-2 text-[13px] font-medium transition-shadow sm:min-h-0 sm:px-4 sm:py-2.5 sm:text-sm ${
                                    active
                                      ? "border-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-md shadow-violet-500/30"
                                      : "border-slate-200 bg-slate-50 text-slate-700 hover:border-violet-200 hover:bg-white"
                                  }`}
                                  whileHover={reduce ? undefined : { scale: 1.04 }}
                                  whileTap={reduce ? undefined : { scale: 0.96 }}
                                  layout
                                >
                                  {t}
                                </motion.button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="mt-8">
                          <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">
                            How can we help? <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="contact-message"
                            value={message}
                            onChange={(e) => {
                              setMessage(e.target.value);
                              if (errors.message) setErrors((o) => ({ ...o, message: "" }));
                            }}
                            rows={5}
                            className={`${errors.message ? inputErr : inputOk} min-h-[140px] resize-y sm:min-h-[120px]`}
                            placeholder="Category, channels, spend level, and what success looks like for you."
                          />
                          {errors.message && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>}
                        </div>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
                          <motion.button
                            type="submit"
                            className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:from-violet-500 hover:to-fuchsia-500 sm:h-12 sm:w-auto sm:px-12"
                            whileHover={reduce ? undefined : { scale: 1.02, y: -2 }}
                            whileTap={reduce ? undefined : { scale: 0.98 }}
                          >
                            Prepare email draft
                          </motion.button>
                          <p className="text-xs leading-relaxed text-slate-500">
                            We use your details only to respond. No resale, no spam lists.
                          </p>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-slate-200/60 bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">How we work</p>
            <p className="mx-auto mt-3 max-w-2xl text-balance text-center text-base font-semibold text-slate-900 sm:text-lg md:text-xl">
              Expectations, upfront
            </p>
          </FadeIn>
          <div className="mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-4">
            {trustPoints.map((item, i) => (
              <FadeIn key={item.label} delay={0.04 * i}>
                <div className="flex h-full min-h-[100px] flex-col justify-center rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50/80 to-white px-4 py-4 text-center shadow-sm ring-1 ring-slate-100/80 sm:px-5 sm:py-5">
                  <p className="text-[14px] font-semibold leading-snug text-slate-900 sm:text-[15px]">{item.label}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600 sm:mt-2 sm:text-sm">{item.sub}</p>
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
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">After you reach out</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">What happens next</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              A predictable path from first message to a clear yes or no — no chasing, no ghosting.
            </p>
          </FadeIn>

          <div className="relative mt-10 lg:mt-14">
            <div
              className="pointer-events-none absolute bottom-6 left-[21px] top-6 w-px bg-gradient-to-b from-violet-200 via-fuchsia-200 to-violet-200 lg:hidden"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[2.25rem] hidden h-0.5 bg-gradient-to-r from-violet-200 via-fuchsia-200 to-violet-200 lg:block"
              aria-hidden
            />
            <div className="grid gap-0 lg:grid-cols-4 lg:gap-6">
              {processSteps.map((step, i) => (
                <FadeIn key={step.title} delay={0.06 * i} className="relative lg:text-center">
                  <div
                    className={`flex gap-4 pl-0 lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:pl-0 ${
                      i < processSteps.length - 1 ? "pb-10" : "pb-2"
                    }`}
                  >
                    <div className="relative z-10 flex w-11 shrink-0 justify-center lg:w-auto lg:justify-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-200 bg-white text-base font-bold text-violet-700 shadow-md shadow-violet-500/10 ring-4 ring-violet-50/80 sm:h-12 sm:w-12 sm:text-lg lg:h-[4.5rem] lg:w-[4.5rem] lg:text-lg">
                        {i + 1}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5 lg:pt-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-fuchsia-600/90 sm:text-[11px]">{step.day}</p>
                      <h3 className="mt-2 text-base font-semibold text-slate-900 sm:text-lg">{step.title}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{step.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement types */}
      <section className="border-t border-slate-200/60 bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-600/90">Engagements</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Ways we partner</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
              Pick the shape that fits — we’ll still align on outcomes before anything is signed.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {engagementTypes.map((eng, i) => (
              <FadeIn key={eng.title} delay={0.06 * i}>
                <div className="group h-full rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.12)] transition hover:border-violet-200/80 hover:shadow-[0_24px_56px_-24px_rgba(99,102,241,0.18)] sm:rounded-3xl sm:p-8">
                  <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-violet-700">
                    {eng.tag}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{eng.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{eng.desc}</p>
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
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Common questions</h2>
            <p className="mt-4 text-[14px] text-slate-600 sm:text-[15px]">Straight answers before we ever get on a call.</p>
          </FadeIn>
          <div className="mt-8 space-y-2.5 sm:mt-10 sm:space-y-3">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              const panelId = `${faqBaseId}-panel-${i}`;
              const headerId = `${faqBaseId}-header-${i}`;
              return (
                <FadeIn key={item.q} delay={0.04 * i}>
                  <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm sm:rounded-2xl">
                    <button
                      type="button"
                      id={headerId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition hover:bg-slate-50/80 sm:min-h-[56px] sm:gap-4 sm:px-6 sm:py-5"
                    >
                      <span className="min-w-0 flex-1 text-[14px] font-semibold leading-snug text-slate-900 sm:text-[15px]">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-slate-500 transition sm:h-8 sm:w-8 ${
                          open ? "rotate-180 border-violet-200 bg-violet-50 text-violet-700" : "border-slate-200 bg-slate-50"
                        }`}
                        aria-hidden
                      >
                        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={headerId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease }}
                          className="overflow-hidden"
                        >
                          <p className="border-t border-slate-100 px-4 pb-4 pt-3 text-[13px] leading-relaxed text-slate-600 text-pretty sm:px-6 sm:pb-5 sm:pt-4 sm:text-sm">
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

      {/* Footer strip */}
      <section className="border-t border-slate-200/80 bg-[#0a0f1c] py-12 pb-[max(3rem,env(safe-area-inset-bottom))] text-white sm:py-16 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
          <FadeIn className="flex flex-col items-stretch justify-between gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:p-10">
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-violet-300/90">Location</p>
              <p className="mt-2 text-lg font-semibold sm:text-xl">Gujarat, India</p>
              <p className="mt-2 max-w-md text-[13px] leading-relaxed text-white/55 sm:text-sm">
                Remote-first delivery · In-person by appointment.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
              <Link
                href="/about"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition hover:bg-white/10 sm:h-11 sm:w-auto"
              >
                About the studio
              </Link>
              <Link
                href="/#services"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-violet-50 sm:h-11 sm:w-auto"
              >
                Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
