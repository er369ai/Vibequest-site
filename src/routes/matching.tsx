import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/vq/SiteShell";

export const Route = createFileRoute("/matching")({
  head: () => ({
    meta: [
      { title: "Matching & XP — Skill pairing and progression | Vibe Quest" },
      {
        name: "description",
        content:
          "How Vibe Quest matches people by skill level, mentorship and availability — plus the XP system that rewards real-world participation.",
      },
      { property: "og:title", content: "Matching & XP in Vibe Quest" },
      {
        property: "og:description",
        content: "Same-level, step-ahead, and mentor matching with a lightweight XP progression.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MatchingPage,
});

function MatchingPage() {
  return (
    <TopicPage
      eyebrow="Matching & XP"
      title="The right person, the right skill level."
      intro="For Pro users, matching pairs people around a selected skill and target relationship — weighted by location proximity, availability, vibe preferences, and past completion rates."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-bold text-slate-900">Matching Types</h2>
          <div className="mt-6 space-y-4">
            {[
              ["Same Level Peer", "Practice together", "Find someone at a similar skill level to learn and practice alongside."],
              ["Step-Ahead Guide", "Learn from someone ahead", "Get practical tips from someone slightly more experienced than you."],
              ["Certified Mentor", "Guided feedback & mastery", "Receive structured guidance from an experienced practitioner."],
            ].map(([m, p, e]) => (
              <div key={m} className="glass-card rounded-2xl p-5 border border-slate-200 bg-white shadow-xs hover:border-blue-400">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-display font-bold text-blue-600">{m}</span>
                  <span className="text-xs font-semibold text-slate-500">{p}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{e}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-slate-900">XP & Progression</h2>
          <p className="mt-2 text-sm text-slate-600">
            A lightweight progression system that rewards real-world show-ups and skill development.
          </p>
          <div className="mt-6 space-y-4">
            {[
              { type: "Social Quest", desc: "Fun and community connection — group meetups, coffee hours." },
              { type: "Skill Quest", desc: "Active learning and practice — photography, music, languages." },
              { type: "Mentor Session", desc: "Guided 1-on-1 mastery with experienced practitioners." },
              { type: "Weekly Streak", desc: "Consistent real-world habits — bonus XP for showing up regularly." },
            ].map((item) => (
              <div key={item.type} className="glass-card rounded-2xl p-4 border border-slate-200 bg-white shadow-xs hover:border-blue-400">
                <p className="font-bold text-slate-900 text-sm">{item.type}</p>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TopicPage>
  );
}
