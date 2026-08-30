import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/vq/Logo";
import { MapPin, ArrowRight } from "lucide-react";

export const TOPICS = [
  { to: "/problem", label: "Problem", blurb: "Why passive scrolling fails people." },
  { to: "/flow", label: "The flow", blurb: "Discover → Join → Meet → Do → Verify → Earn." },
  { to: "/product", label: "Product", blurb: "Free, Pro and Partners in one ecosystem." },
  { to: "/matching", label: "Matching & XP", blurb: "Skill matching and the progression system." },
  { to: "/experiences", label: "Experiences", blurb: "Real quests across skills and vibes." },
  { to: "/business", label: "Business", blurb: "QR commerce and revenue streams." },
] as const;

const NAV = [
  { to: "/", label: "Home" },
  { to: "/flow", label: "Flow" },
  { to: "/product", label: "Product" },
  { to: "/matching", label: "Matching & XP" },
  { to: "/business", label: "Business" },
] as const;

export function FloatingHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-slate-200/80 bg-white/80 px-5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-300 hover:border-blue-400/50">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-slate-900 font-bold relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full" }}
              activeOptions={{ exact: true }}
              className="transition-colors hover:text-slate-900"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/flow"
          className="group relative shrink-0 overflow-hidden rounded-full bg-gradient-brand px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-1.5 font-extrabold uppercase tracking-wide">
            How It Works
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </header>
  );
}

export function MobileBottomNav() {
  const items = [
    { to: "/", label: "Home" },
    { to: "/flow", label: "Flow" },
    { to: "/product", label: "Product" },
    { to: "/matching", label: "Matching" },
    { to: "/business", label: "Business" },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/90 backdrop-blur-2xl sm:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            activeProps={{ className: "text-blue-600 font-bold" }}
            activeOptions={{ exact: true }}
            className="flex flex-col items-center justify-center py-3 text-[11px] font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo />
          <p className="mt-2 text-sm text-slate-600">
            Not another social app. A reason to go outside & experience life.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-blue-700">
            <MapPin className="h-3 w-3" />
            Launch Market: Cyprus
          </span>
          <Link to="/flow" className="text-slate-700 transition-colors hover:text-blue-600">
            How It Works →
          </Link>
          <a href="mailto:contact@vibequest.app" className="text-slate-700 transition-colors hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative min-h-screen bg-slate-50 text-slate-900 pb-20 sm:pb-0 ${className}`}>
      {/* Ambient background soft light accents */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-[800px] -z-10 h-[500px] w-[500px] rounded-full bg-cyan-100/60 blur-[140px]" />

      <FloatingHeader />
      <div className="pt-24 sm:pt-32">{children}</div>
      <SiteFooter />
      <MobileBottomNav />
    </div>
  );
}

export function TopicPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-6 py-8 sm:py-12">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-2xl text-lg text-slate-600">{intro}</p> : null}
        <div className="mt-10">{children}</div>
        <TopicNavGrid />
      </main>
    </SiteShell>
  );
}

export function TopicNavGrid() {
  return (
    <section className="mt-20 border-t border-slate-200 pt-10">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
        Explore Vibe Quest Blueprint
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOPICS.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            className="group glass-card rounded-2xl p-5 hover:border-blue-400 hover:shadow-md"
          >
            <p className="font-display font-bold text-slate-900 transition-colors group-hover:text-blue-600">{t.label}</p>
            <p className="mt-1 text-xs text-slate-600">{t.blurb}</p>
            <span className="mt-3 inline-block text-xs font-bold text-blue-600 transition-transform group-hover:translate-x-1">Explore →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
