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
  ["Social Quest", "40–70 XP", "1×", "Fun and connection"],
  ["Skill Quest", "80–150 XP", "1.5×–2.5×", "Learning and growth"],
  ["Mentor Session", "120–200 XP", "High", "Guidance and experience"],
  ["Weekly Skill Streak", "Bonus", "—", "Consistency"],
];

function MatchingPage() {
  return (
    <TopicPage
      eyebrow="Matching & XP"
      title="The right person, the right level."
      intro="For Pro users, matching centers on a selected skill and the learning relationship the user wants — weighted by distance, availability, vibe and past completion."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold">Intelligent matching</h2>
          <div className="mt-6 space-y-3">
            {[
              ["Same Level", "Practice together", "Two beginner guitar players practice chords"],
              [
                "Higher Level",
                "Learn from someone ahead",
                "Intermediate photographer joins a learner",
              ],
              ["Mentor", "Guidance and real experience", "Experienced speaker coaches a beginner"],
            ].map(([m, p, e]) => (
              <div key={m} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-bold text-primary">{m}</span>
                  <span className="text-sm font-semibold text-muted-foreground">{p}</span>
                </div>
                <p className="mt-1 text-sm">{e}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Gamification &amp; XP</h2>
          <p className="mt-3 text-muted-foreground">
            A lightweight progression system that rewards real-world participation and consistency.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted text-[11px] uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3">Quest type</th>
                  <th className="px-4 py-3">Base XP</th>
                  <th className="px-4 py-3">Mult.</th>
                </tr>
              </thead>
              <tbody>
                {XP_ROWS.map(([t, x, m, p]) => (
                  <tr key={t} className="border-t border-border align-top">
                    <td className="px-4 py-3">
                      <p className="font-bold">{t}</p>
                      <p className="text-[11px] text-muted-foreground">{p}</p>
                    </td>
                    <td className="px-4 py-3 font-semibold text-primary">{x}</td>
                    <td className="px-4 py-3 font-semibold text-accent">{m}</td>
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
