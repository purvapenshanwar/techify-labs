"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import TopBar from "./TopBar";

type MenuKey = "solutions" | "knowledge" | null;

const solutionsSections = [
  {
    title: "Performance marketing (paid)",
    links: [
      { label: "Meta Ads", href: "#", Icon: IconMegaphone },
      { label: "Google Ads", href: "#", Icon: IconSearchChart },
      { label: "Amazon Ads", href: "#", Icon: IconPackage },
    ],
  },
  {
    title: "Design and development",
    links: [
      { label: "Website Design (UI/UX)", href: "#", Icon: IconLayout },
      { label: "Website Development", href: "#", Icon: IconCode },
      { label: "Shopify Development", href: "#", Icon: IconShopping },
    ],
  },
  {
    title: "Quick commerce & marketplace",
    links: [
      { label: "E-Commerce Marketplace", href: "#", Icon: IconStore },
      { label: "Quick Commerce", href: "#", Icon: IconZap },
    ],
  },
  {
    title: "Branding & growth marketing",
    links: [
      { label: "Organic Growth (SEO)", href: "#", Icon: IconTrending },
      { label: "Retention Marketing", href: "#", Icon: IconHeart },
      { label: "Social Media Agency India", href: "#", Icon: IconShare },
      { label: "Branding Agency India", href: "#", Icon: IconSparkle },
    ],
  },
];

const knowledgeLinks = [
  { label: "Case Studies", href: "#", Icon: IconFolder },
  { label: "Our Team", href: "/about#team", Icon: IconUsers },
  { label: "Blogs", href: "#", Icon: IconBook },
];

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function IconMegaphone({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M3 11v4a1 1 0 001 1h2l4 4V6L6 10H4a1 1 0 00-1 1z" />
      <path d="M16 8a5 5 0 010 8M19 5a9 9 0 010 14" />
    </svg>
  );
}

function IconSearchChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

function IconPackage({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M16.5 9.4 7.5 4.21M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  );
}

function IconLayout({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function IconCode({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  );
}

function IconShopping({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

function IconStore({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function IconZap({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconTrending({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  );
}

function IconHeart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function IconShare({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  );
}

function IconSparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M12 3l1.09 3.26L16 7l-2.91 1.74L12 12l-1.09-3.26L8 7l2.91-1.74L12 3zM19 15l.66 2h2.09l-1.73 1.26.66 2-1.68-1.22L19 21l-.66-2-1.68 1.22.66-2-1.73-1.26h2.09L19 15zM5 15l.66 2h2.09l-1.73 1.26.66 2L5 19.78 3.32 21l.66-2L2.25 17.74h2.09L5 15z" />
    </svg>
  );
}

function IconFolder({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconBook({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

function MenuPanel({
  children,
  className = "",
  variant = "mega",
}: {
  children: ReactNode;
  className?: string;
  /** mega: solid navy corporate panel | compact: smaller hub menu */
  variant?: "mega" | "compact";
}) {
  const base =
    variant === "mega"
      ? "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a1428] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)_inset]"
      : "relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0a1428] shadow-[0_28px_56px_-14px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-xl";

  return (
    <div className={[base, className].join(" ")}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/20 to-transparent"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/** Two columns: left = paid + design, right = commerce + branding (matches mega-menu layout). */
const solutionsColumns: (typeof solutionsSections)[] = [
  solutionsSections.slice(0, 2),
  solutionsSections.slice(2, 4),
];

const dropdownEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const dropdownEaseOut: [number, number, number, number] = [0.4, 0, 1, 1];

const megaContainerVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.34, ease: dropdownEase },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.99,
    transition: { duration: 0.22, ease: dropdownEaseOut },
  },
};

const megaColumnVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.08 },
  },
};

const megaSectionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: dropdownEase },
  },
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<MenuKey>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeMenus = useCallback(() => {
    setOpenMenu(null);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenus]);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!navRef.current?.contains(e.target as Node)) closeMenus();
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [closeMenus]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const triggerClass = (active: boolean) =>
    [
      "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold tracking-tight transition-all duration-200",
      active
        ? "bg-gradient-to-r from-violet-600/12 to-fuchsia-600/10 text-violet-700 shadow-sm ring-1 ring-violet-200/70"
        : "text-slate-600 hover:bg-slate-100/90 hover:text-violet-700",
    ].join(" ");

  return (
    <header ref={navRef} className="sticky top-0 z-50">
      <TopBar />
      <div className="relative border-b border-slate-200/70 bg-white/90 shadow-[0_1px_0_rgba(255,255,255,0.7)_inset] backdrop-blur-xl backdrop-saturate-150">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-200/50 to-transparent"
          aria-hidden
        />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2.5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 rounded-xl py-0.5 pr-2 transition hover:opacity-95"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 ring-2 ring-white transition group-hover:shadow-indigo-500/45 group-hover:ring-violet-200/50">
            <span className="relative z-10">TE</span>
            <span className="absolute inset-0 rounded-full bg-white/15 opacity-0 transition group-hover:opacity-100" />
          </div>
          <div className="leading-tight">
            <span className="block bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-lg font-bold tracking-tight text-transparent">
              Techify
            </span>
            <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Accelerating brands
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
          <Link
            href="/"
            className="rounded-full px-3.5 py-2 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-violet-50 hover:text-violet-700"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("solutions")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              aria-expanded={openMenu === "solutions"}
              aria-haspopup="true"
              className={triggerClass(openMenu === "solutions")}
              onClick={() => setOpenMenu(openMenu === "solutions" ? null : "solutions")}
            >
              Solutions
              <ChevronDown
                className={`transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${openMenu === "solutions" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {openMenu === "solutions" && (
                <motion.div
                  key="solutions-mega"
                  role="menu"
                  aria-label="Solutions"
                  variants={megaContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ transformOrigin: "top center" }}
                  className="absolute left-1/2 top-full z-50 w-[min(94vw,820px)] -translate-x-1/2 pt-3"
                  onMouseEnter={() => setOpenMenu("solutions")}
                >
                  <MenuPanel variant="mega" className="px-8 py-9 sm:px-10 sm:py-10">
                    <div className="grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
                      {solutionsColumns.map((column, colIdx) => (
                        <motion.div
                          key={colIdx}
                          className="space-y-10"
                          variants={megaColumnVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {column.map((section) => (
                            <motion.div key={section.title} variants={megaSectionVariants}>
                              <div className="mb-4 flex items-center gap-2.5">
                                <span
                                  className="h-2 w-2 shrink-0 rounded-[2px] bg-violet-500 shadow-[0_0_14px_rgba(139,92,246,0.55)]"
                                  aria-hidden
                                />
                                <h3 className="text-[11px] font-bold uppercase leading-tight tracking-[0.14em] text-white">
                                  {section.title}
                                </h3>
                              </div>
                              <ul className="space-y-0.5 border-l border-white/[0.06] pl-4">
                                {section.links.map(({ label, href }) => (
                                  <li key={label}>
                                    <a
                                      href={href}
                                      role="menuitem"
                                      className="group relative block py-2.5 pl-1 text-[15px] font-normal leading-snug text-slate-200/90 transition-colors duration-200 ease-out hover:text-violet-400 focus-visible:text-violet-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1428]"
                                    >
                                      <span
                                        className="absolute -left-[17px] top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-violet-400 opacity-0 shadow-[0_0_10px_rgba(167,139,250,0.7)] transition-opacity duration-200 group-hover:opacity-100 sm:block"
                                        aria-hidden
                                      />
                                      {label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          ))}
                        </motion.div>
                      ))}
                    </div>
                  </MenuPanel>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("knowledge")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              aria-expanded={openMenu === "knowledge"}
              aria-haspopup="true"
              className={triggerClass(openMenu === "knowledge")}
              onClick={() => setOpenMenu(openMenu === "knowledge" ? null : "knowledge")}
            >
              Knowledge Hub
              <ChevronDown
                className={`transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${openMenu === "knowledge" ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {openMenu === "knowledge" && (
                <motion.div
                  key="knowledge-hub"
                  role="menu"
                  aria-label="Knowledge Hub"
                  variants={megaContainerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ transformOrigin: "top left" }}
                  className="absolute left-0 top-full z-50 min-w-[min(92vw,320px)] pt-3"
                  onMouseEnter={() => setOpenMenu("knowledge")}
                >
                  <MenuPanel variant="compact" className="p-4">
                    <div className="border-b border-white/[0.08] pb-3 pl-1">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 shrink-0 rounded-[2px] bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.5)]" aria-hidden />
                        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white">Knowledge Hub</p>
                      </div>
                      <p className="mt-1.5 pl-4 text-xs text-slate-400">Case studies, team, and insights</p>
                    </div>
                    <motion.ul
                      className="mt-3 space-y-0.5"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                        hidden: {},
                      }}
                    >
                      {knowledgeLinks.map(({ label, href, Icon }) => (
                        <motion.li
                          key={label}
                          variants={{
                            hidden: { opacity: 0, x: -8 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.26, ease: dropdownEase } },
                          }}
                        >
                          <a
                            href={href}
                            role="menuitem"
                            className="group flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium text-slate-200/95 transition-colors duration-200 ease-out hover:bg-white/[0.06] hover:text-violet-300 focus-visible:text-violet-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1428]"
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-violet-300/90 ring-1 ring-white/[0.08] transition duration-200 group-hover:bg-violet-500/15 group-hover:text-violet-200">
                              <Icon className="h-[17px] w-[17px]" />
                            </span>
                            <span className="flex-1">{label}</span>
                            <span className="text-violet-400/0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-violet-400/90" aria-hidden>
                              →
                            </span>
                          </a>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </MenuPanel>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className="rounded-full px-3.5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100/90 hover:text-violet-700"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="rounded-full px-3.5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100/90 hover:text-violet-700"
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="group/navcta relative hidden items-center gap-1.5 overflow-hidden rounded-full bg-[#0f2744] px-5 py-2.5 text-sm font-bold text-white shadow-md ring-1 ring-slate-900/15 transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-900/25 sm:inline-flex"
          >
            <span
              className="absolute inset-0 bg-[#1a365d] opacity-0 transition-opacity duration-200 group-hover/navcta:opacity-100"
              aria-hidden
            />
            <span
              className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-indigo-500/25 to-fuchsia-500/25 opacity-0 transition-opacity duration-300 group-hover/navcta:opacity-100"
              aria-hidden
            />
            <span className="relative z-10 flex items-center gap-1">
              Get a free consultation
              <span
                aria-hidden
                className="text-base leading-none transition-transform duration-200 group-hover/navcta:translate-x-0.5"
              >
                →
              </span>
            </span>
          </motion.button>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-slate-700 shadow-sm transition hover:border-violet-200 hover:bg-violet-50/50 hover:text-violet-700 md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-0 top-[6.75rem] z-50 mx-3 max-h-[min(82vh,calc(100dvh-8rem))] overflow-y-auto rounded-2xl border border-white/[0.12] bg-slate-950/95 p-4 shadow-[0_24px_80px_-12px_rgba(15,23,42,0.85)] ring-1 ring-white/10 backdrop-blur-2xl md:hidden"
            >
              <nav className="flex flex-col gap-0.5" aria-label="Mobile">
                <Link
                  href="/"
                  className="rounded-xl px-4 py-3.5 text-sm font-bold text-white/90 transition-colors hover:bg-white/[0.08]"
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-bold text-white transition hover:bg-white/[0.05]"
                  onClick={() => setMobileAccordion((a) => (a === "solutions" ? null : "solutions"))}
                >
                  Solutions
                  <ChevronDown
                    className={`shrink-0 opacity-80 transition-transform ${mobileAccordion === "solutions" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileAccordion === "solutions" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: dropdownEase }}
                      className="overflow-hidden pl-2"
                    >
                      {solutionsSections.map((section) => (
                        <div
                          key={section.title}
                          className="mb-3 rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/[0.06]"
                        >
                          <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-200">
                            <span className="h-1.5 w-1.5 rounded-sm bg-gradient-to-br from-violet-400 to-fuchsia-500" />
                            {section.title}
                          </p>
                          <ul className="space-y-0.5">
                            {section.links.map(({ label, href, Icon }) => (
                              <li key={label}>
                                <a
                                  href={href}
                                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-white/88 active:bg-white/10"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-violet-200 ring-1 ring-white/10">
                                    <Icon className="h-4 w-4" />
                                  </span>
                                  {label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-bold text-white transition hover:bg-white/[0.05]"
                  onClick={() => setMobileAccordion((a) => (a === "knowledge" ? null : "knowledge"))}
                >
                  Knowledge Hub
                  <ChevronDown
                    className={`shrink-0 opacity-80 transition-transform ${mobileAccordion === "knowledge" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileAccordion === "knowledge" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: dropdownEase }}
                      className="overflow-hidden pl-2"
                    >
                      <ul className="space-y-1 rounded-xl bg-white/[0.04] p-2 pb-3 ring-1 ring-white/[0.06]">
                        {knowledgeLinks.map(({ label, href, Icon }) => (
                          <li key={label}>
                            <a
                              href={href}
                              className="flex items-center gap-3 rounded-lg px-2 py-3 text-sm font-semibold text-white/90 active:bg-white/10"
                              onClick={() => setMobileOpen(false)}
                            >
                              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.06] text-violet-200 ring-1 ring-white/10">
                                <Icon className="h-4 w-4" />
                              </span>
                              {label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link
                  href="/about"
                  className="rounded-xl px-4 py-3.5 text-sm font-bold text-white/90 transition hover:bg-white/[0.05]"
                  onClick={() => setMobileOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="rounded-xl px-4 py-3.5 text-sm font-bold text-white/90 transition hover:bg-white/[0.05]"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  className="mt-3 rounded-full bg-[#0f2744] py-3.5 text-sm font-bold text-white shadow-md ring-1 ring-white/15 transition-colors hover:bg-[#1a365d]"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a free consultation →
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}
