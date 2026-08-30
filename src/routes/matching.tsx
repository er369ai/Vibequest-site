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
        content: "Same-level, higher-level and mentor matching with a lightweight XP progression.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MatchingPage,
});

const XP_ROWS = [
  ["Social Quest", "40–70 XP", "1×", "Fun and community connection"],
  ["Skill Quest", "80–150 XP", "1.5×–2.5×", "Active learning & practice"],
  ["Mentor Session", "120–200 XP", "High Multiplier", "1-on-1 guided mastery"],
  ["Weekly Skill Streak", "Bonus XP", "Streak Multiplier", "Consistent real-world habits"],
];

function MatchingPage() {
  return (
    <TopicPage
      eyebrow="Matching & XP"
      title="The right person, the right skill level."
      intro="For Pro users, matching pairs users around a selected skill and target relationship — weighted by Cyprus location radius, availability, vibe preferences, and past completion rates."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-bold text-white">Intelligent Skill Matching</h2>
          <div className="mt-6 space-y-4">
            {[
              ["Same Level Peer", "Practice together", "Two beginner guitarists running open chords"],
              [
                "Step-Ahead Guide",
                "Learn from someone ahead",
                "Intermediate photographer giving practical tips to a novice",
              ],
              ["Certified Mentor", "Guidance & deep mastery", "Experienced public speaker coaching a newcomer"],
            ].map(([m, p, e]) => (
              <div key={m} className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-400/40">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-display font-bold text-cyan-400">{m}</span>
                  <span className="text-xs font-semibold text-slate-400">{p}</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{e}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-white">Gamification & XP Economics</h2>
          <p className="mt-2 text-sm text-slate-400">
            A lightweight, satisfying progression system that rewards real-world show-ups and skill development.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl glass-card border border-white/10 shadow-2xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950/80 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                <tr>
                  <th className="px-5 py-4">Quest Type</th>
                  <th className="px-5 py-4">Base XP</th>
                  <th className="px-5 py-4">Multiplier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {XP_ROWS.map(([t, x, m, p]) => (
                  <tr key={t} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-bold text-white">{t}</p>
                      <p className="text-[11px] text-slate-400">{p}</p>
                    </td>
                    <td className="px-5 py-4 font-bold text-cyan-400">{x}</td>
                    <td className="px-5 py-4 font-bold text-amber-400">{m}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </TopicPage>
  );
}
