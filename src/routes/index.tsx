import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-quest.jpg";
import { SiteShell, TOPICS } from "@/components/vq/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibe Quest — Less scrolling. More living. More growing." },
      {
        name: "description",
        content:
          "Vibe Quest turns everyday life into real-world quests: meet people, build skills, earn XP and unlock rewards at local places.",
      },
      { property: "og:title", content: "Vibe Quest — Less scrolling. More living." },
      {
        property: "og:description",
        content:
          "Real-world quests, skill matching, XP and a QR-powered local partner ecosystem. A reason to go outside.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vibequest.vercel.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vibequest.vercel.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: "Vibe Quest",
              url: "https://vibequest.vercel.app/",
              description:
                "Mobile social adventure platform turning everyday life into real-world quests.",
            },
            {
              "@type": "Organization",
              name: "Vibe Quest",
              url: "https://vibequest.vercel.app/",
              description:
                "Vibe Quest connects people through real-world quests, skill building and a local partner rewards ecosystem.",
            },
          ],
        }),
      },
    ],

  }),

  component: Landing,
});

function Landing() {
  return (
    <SiteShell>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Mobile social adventure platform
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            <span className="text-gradient-brand">Less scrolling.</span>
            <br />
            More living. More growing.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Vibe Quest turns everyday life into meaningful real-world experiences — connecting
            people through fun, learning, skills, events and local places.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/app"
              className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-lift"
            >
              Explore the app mockup
            </Link>
            <Link
              to="/flow"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-bold shadow-soft"
            >
              See the core flow
            </Link>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              ["18–32", "Core audience"],
              ["3", "Product layers"],
              ["Cyprus", "Launch market"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-border bg-card p-3">
                <dt className="text-lg font-bold text-ink">{v}</dt>
                <dd className="text-[11px] text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <img
            src={heroImage}
            alt="Friends completing a Vibe Quest together at golden hour"
            width={1400}
            height={1000}
            className="w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lift sm:block">
            <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
              Quest verified
            </p>
            <p className="text-sm font-bold text-primary">+120 XP · Golden-hour shoot</p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Explore Vibe Quest</h2>
          <p className="mt-2 text-muted-foreground">
            Each topic has its own page — tap through the parts you care about.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TOPICS.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition-colors hover:border-primary"
              >
                <p className="font-bold group-hover:text-primary">{t.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.blurb}</p>
                <p className="mt-3 text-xs font-bold text-primary">Read →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
