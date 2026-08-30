import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/vq/SiteShell";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business Model — QR local commerce & revenue | Vibe Quest" },
      {
        name: "description",
        content:
          "Vibe Quest's business model: consent-based QR verification at local venues, partner campaigns, Pro subscriptions and event revenue.",
      },
      { property: "og:title", content: "Vibe Quest Business Model" },
      {
        property: "og:description",
        content: "QR-verified local commerce plus diversified revenue beyond subscriptions.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BusinessPage,
});

function BusinessPage() {
  return (
    <TopicPage
      eyebrow="Business model"
      title="Local commerce, verified by QR."
      intro="Each user carries a personal QR identity. At participating venues and events, a scan verifies attendance, quest completion or a reward interaction."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold">Who gains what</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Users", "XP, rewards, badges, discounts and memorable experiences."],
              ["Businesses", "Qualified foot traffic, campaigns and venue experiences."],
              ["Vibe Quest", "Subscriptions, event fees and partner campaigns."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-4">
                <p className="font-bold text-primary">{t}</p>
                <p className="mt-1 text-xs text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-2xl bg-gold/20 p-4 text-sm font-semibold text-gold-foreground">
            Privacy principle — QR participation is designed around consent and purpose-specific
            verification, with careful limits on personal data exposure.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Revenue streams</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              ["Vibe Quest Pro", "Monthly and annual subscriptions."],
              ["Events", "Booking or participation fees."],
              ["Partner campaigns", "Sponsored quests and promotions."],
              ["Local commerce", "Fees or commissions on experiences."],
              ["Workshops & mentors", "Marketplace commissions."],
              ["Brand partnerships", "Sponsored experiences and skill events."],
            ].map(([t, d]) => (
              <li
                key={t}
                className="flex justify-between gap-4 rounded-2xl border border-border bg-card px-4 py-3"
              >
                <span className="font-bold">{t}</span>
                <span className="text-right text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Intentionally diversified so revenue does not depend exclusively on subscriptions.
          </p>
        </div>
      </div>
    </TopicPage>
  );
}
