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
      intro="Each user carries a personal QR identity. At participating venues and events in Cyprus, a scan verifies attendance, quest completion, or reward redemptions."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-bold text-white">Who Gains What</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["Users", "XP, badges, real discounts & memorable experiences."],
              ["Businesses", "Qualified off-peak foot traffic, repeat customers & brand lift."],
              ["Vibe Quest", "Pro subscriptions, partner campaign fees & marketplace cut."],
            ].map(([t, d]) => (
              <div key={t} className="glass-card rounded-2xl p-4 border border-white/10">
                <p className="font-display font-bold text-cyan-400">{t}</p>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-5 text-sm font-semibold text-amber-300">
            🛡️ <strong className="text-white">Privacy Principle</strong> — QR participation is built on zero-knowledge consent and purpose-specific verification without exposing personal phone numbers or sensitive user data.
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">Diversified Revenue Streams</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              ["Vibe Quest Pro", "Monthly & annual premium member perks."],
              ["Partner Campaigns", "Sponsored quests & venue foot-traffic campaigns."],
              ["QR Local Commerce", "Commissions on verified venue reward vouchers."],
              ["Workshops & Mentors", "Marketplace commission on paid skill sessions."],
              ["Brand Partnerships", "Co-sponsored real-world experience events."],
            ].map(([t, d]) => (
              <li
                key={t}
                className="flex items-center justify-between gap-4 glass-card rounded-2xl p-4 border border-white/10"
              >
                <span className="font-bold text-white">{t}</span>
                <span className="text-right text-xs font-semibold text-cyan-400">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TopicPage>
  );
}
