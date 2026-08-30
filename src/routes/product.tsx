import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/vq/SiteShell";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product Layers — Free, Pro and Partners | Vibe Quest" },
      {
        name: "description",
        content:
          "Three layers, one ecosystem: Vibe Quest Free for social quests, Pro for skill growth and Partners for local commerce.",
      },
      { property: "og:title", content: "Vibe Quest Product Layers" },
      {
        property: "og:description",
        content: "Free social quests, Pro skill growth and a Partner commerce layer.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductPage,
});

const LAYERS = [
  {
    name: "Vibe Quest Free",
    tag: "Social Layer",
    accent: "text-blue-600",
    dot: "bg-blue-600",
    points: [
      "Email & Google auth",
      "Personalized social quests",
      "Chill and High-Energy vibe modes",
      "Group outings & basic matching",
      "XP leveling, badges & streaks",
    ],
  },
  {
    name: "Vibe Quest Pro",
    tag: "Growth Layer",
    accent: "text-blue-600",
    dot: "bg-blue-600",
    points: [
      "Multiple skill mastery trees",
      "Skill-specific quest generation",
      "Peer, guide & mentor matching",
      "Learning plans & calendar blocks",
      "Weekly progress reports & 2× XP",
    ],
  },
  {
    name: "Vibe Quest Partners",
    tag: "Commerce Layer",
    accent: "text-blue-600",
    dot: "bg-blue-600",
    points: [
      "Partner quests & sponsored experiences",
      "QR-based attendance verification",
      "Custom reward vouchers & perks",
      "Event discovery & ticket redemption",
      "Campaign analytics dashboard",
    ],
  },
];

function ProductPage() {
  return (
    <TopicPage
      eyebrow="Product"
      title="Three layers, one ecosystem."
      intro="Free, Pro, and Partners work together seamlessly to turn everyday moments into real-world experiences — and local venue owners into active participants."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {LAYERS.map((l) => (
          <div
            key={l.name}
            className="glass-card rounded-3xl p-6 border border-slate-200 bg-white shadow-xs hover:border-blue-400"
          >
            <p className={`text-[10px] font-bold uppercase tracking-widest ${l.accent}`}>{l.tag}</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-slate-900">{l.name}</h2>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {l.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${l.dot}`} />
                  <span className="leading-snug">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </TopicPage>
  );
}
