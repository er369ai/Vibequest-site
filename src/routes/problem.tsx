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
  "People waste time deciding what to do and default to scrolling.",
  "Social apps are passive rather than experience-driven.",
  "Learning a skill alone is hard to sustain.",
  "Nearby people with the same goals are scattered across platforms.",
  "Local businesses lack a channel to engaged customers.",
];

function ProblemPage() {
  return (
    <TopicPage
      eyebrow="The problem"
      title="Hours of scrolling, nothing meaningful."
      intro="Modern platforms are optimized for passive consumption. People spend hours scrolling and still feel they did nothing meaningful — while self-improvement alone is hard to sustain."
    >
      <ul className="grid gap-3 md:grid-cols-2">
        {PROBLEMS.map((p) => (
          <li
            key={p}
            className="rounded-2xl border border-border bg-card p-4 text-sm font-medium shadow-soft"
          >
            {p}
          </li>
        ))}
      </ul>
    </TopicPage>
  );
}
