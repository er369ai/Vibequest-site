import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/vq/SiteShell";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Example Experiences — Photography, Guitar, Spanish | Vibe Quest" },
      {
        name: "description",
        content:
          "Real Vibe Quest examples: golden-hour photo walks, guitar practice sessions, Spanish conversation hours and public-speaking circles.",
      },
      { property: "og:title", content: "Example Vibe Quest Experiences" },
      {
        property: "og:description",
        content: "Photography, guitar, Spanish and public speaking quests you can actually do.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencesPage,
});

const EXPERIENCES = [
  [
    "Photography",
    "Golden-hour beach shoot, street walks with a higher-level user, mentor portraits.",
  ],
  ["Guitar", "Practice open chords together, learn a song, acoustic session with a mentor."],
  ["Spanish", "Conversation walk, Spanish-only café hour, exchange with a fluent mentor."],
  [
    "Public Speaking",
    "Short talk practice, feedback from a stronger speaker, a small speaking circle.",
  ],
];

function ExperiencesPage() {
  return (
    <TopicPage
      eyebrow="Experiences"
      title="What a quest actually looks like."
      intro="Quests span fun and growth — from a golden-hour photo walk to a Spanish-only café hour."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {EXPERIENCES.map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <h2 className="text-lg font-bold text-ink">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </TopicPage>
  );
}
