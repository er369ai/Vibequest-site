import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/vq/SiteShell";
import { Camera, Music, MessageSquare, Mic } from "lucide-react";

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
    icon: Camera,
    details: "Golden-hour Kyrenia beach shoot, street photowalk with a guide, portrait mentor session.",
  },
  {
    category: "Guitar & Music",
    icon: Music,
    details: "Open chord practice circle, acoustic jam at Kordon, song arrangement with a mentor.",
  },
  {
    category: "Languages",
    icon: MessageSquare,
    details: "Spanish conversation walk, language exchange coffee hour, vocabulary sprint.",
  },
  {
    category: "Public Speaking",
    icon: Mic,
    details: "2-minute lightning talks, constructive feedback circle, speech structure coaching.",
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
        {EXPERIENCES.map((exp) => {
          const IconComponent = exp.icon;
          return (
            <div key={exp.category} className="glass-card rounded-3xl p-6 border border-slate-200 bg-white shadow-xs hover:border-blue-400">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
                <IconComponent className="h-6 w-6" />
              </div>
              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">{exp.category}</h2>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">{exp.details}</p>
            </div>
          );
        })}
      </div>
    </TopicPage>
  );
}
