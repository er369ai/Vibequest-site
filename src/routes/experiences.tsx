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
  {
    category: "Photography",
    icon: "📸",
    details: "Golden-hour Kyrenia beach shoot, street photowalk with a guide, portrait mentor session.",
    accent: "text-cyan-400 border-cyan-400/40 hover:shadow-glow-cyan",
  },
  {
    category: "Guitar & Music",
    icon: "🎸",
    details: "Open chord practice circle, acoustic jam at Kordon, song arrangement with a mentor.",
    accent: "text-purple-400 border-purple-400/40 hover:shadow-glow-orange",
  },
  {
    category: "Languages",
    icon: "🗣️",
    details: "Spanish conversation walk, language exchange coffee hour, vocabulary sprint.",
    accent: "text-amber-400 border-amber-400/40 hover:shadow-glow-gold",
  },
  {
    category: "Public Speaking",
    icon: "🎤",
    details: "2-minute lightning talks, constructive feedback circle, speech structure coaching.",
    accent: "text-orange-400 border-orange-400/40 hover:shadow-glow-orange",
  },
];

function ExperiencesPage() {
  return (
    <TopicPage
      eyebrow="Experiences"
      title="What a quest actually looks like."
      intro="Quests span fun, socialization, and personal growth — from a sunset beach shoot to a coffee shop language exchange."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {EXPERIENCES.map((exp) => (
          <div key={exp.category} className={`glass-card rounded-3xl p-6 border border-white/10 transition-all ${exp.accent}`}>
            <span className="text-3xl">{exp.icon}</span>
            <h2 className="mt-4 font-display text-xl font-bold text-white">{exp.category}</h2>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">{exp.details}</p>
          </div>
        ))}
      </div>
    </TopicPage>
  );
}
