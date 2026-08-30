import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/vq/Logo";

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
  { to: "/business", label: "Business" },
] as const;

export function FloatingHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-border/70 bg-background/75 px-4 py-2.5 shadow-lift backdrop-blur-xl">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-muted-foreground md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
              className="hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/app"
          className="shrink-0 rounded-full bg-gradient-brand px-4 py-2 text-sm font-bold text-primary-foreground shadow-soft"
        >
          See the app
        </Link>
      </div>
    </header>
  );
}

export function MobileBottomNav() {
  const items = [
    { to: "/", label: "Home" },
    { to: "/app", label: "App" },
    { to: "/product", label: "Product" },
    { to: "/flow", label: "Flow" },
    { to: "/business", label: "Business" },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur sm:hidden">
      <div className="mx-auto grid max-w-md grid-cols-5">
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
            className="flex flex-col items-center justify-center py-3 text-[11px] font-bold text-muted-foreground transition-colors hover:text-foreground"
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
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <p className="text-sm text-muted-foreground">
          Not another social app. A reason to go outside.
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
          <Link to="/app" className="text-primary">
            View app mockup →
          </Link>
          <a href="mailto:investors@vibequest.app" className="text-primary">
            Investors — contact us
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
    <div className={`min-h-screen bg-background pb-20 sm:pb-0 ${className}`}>
      <FloatingHeader />
      <div className="pt-24 sm:pt-28">{children}</div>
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
      <main className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p> : null}
        <div className="mt-10">{children}</div>
        <TopicNavGrid />
      </main>
    </SiteShell>
  );
}

export function TopicNavGrid() {
  return (
    <section className="mt-16 border-t border-border pt-8">
      <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
        Explore more
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {TOPICS.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            className="rounded-2xl border border-border bg-card p-4 shadow-soft transition-colors hover:border-primary"
          >
            <p className="font-bold">{t.label}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
