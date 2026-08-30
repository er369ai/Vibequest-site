import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/vq/SiteShell";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "The Problem — Passive scrolling vs. real living | Vibe Quest" },
      {
        name: "description",
        content:
          "Why social apps leave people unfulfilled: passive feeds, solo skill-building and scattered local communities — the problem Vibe Quest solves.",
      },
      { property: "og:title", content: "The Problem Vibe Quest Solves" },
      {
        property: "og:description",
        content:
          "Passive feeds, hard-to-sustain solo learning and disconnected local businesses.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProblemPage,
});

const PROBLEMS = [
  "Young adults waste hours deciding what to do and default to infinite feeds.",
  "Legacy social media platforms promote passive consumption over real-world action.",
  "Developing a new skill alone is difficult to sustain without social accountability.",
  "Nearby people with identical goals remain disconnected across fragmented apps.",
  "Local business owners lack a high-conversion channel for active off-peak foot traffic.",
];

function ProblemPage() {
  return (
    <TopicPage
      eyebrow="The problem"
      title="Hours of scrolling, zero real connection."
      intro="Modern platforms are engineered for passive consumption. Young adults spend hours scrolling, yet still feel unfulfilled — while self-improvement alone is hard to maintain."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {PROBLEMS.map((p, idx) => (
          <li
            key={p}
            className="glass-card rounded-2xl p-6 border border-white/10 text-sm font-medium text-slate-300 hover:border-orange-400/40 hover:shadow-glow-orange flex items-start gap-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-xs font-bold text-orange-400">
              0{idx + 1}
            </span>
            <span className="leading-relaxed">{p}</span>
          </li>
        ))}
      </ul>
    </TopicPage>
  );
}
