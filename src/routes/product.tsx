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
    tag: "Social layer",
    points: [
      "Email & Google auth",
      "Personalized social quests",
      "Chill and High-Energy vibe modes",
      "Groups and basic matching",
      "XP, levels and badges",
    ],
  },
  {
    name: "Vibe Quest Pro",
    tag: "Growth layer",
    points: [
      "Multiple skill goals",
      "Skill-specific quest generation",
      "Same-level, higher-level and mentor matching",
      "Realistic learning plans and time blocks",
      "Weekly growth reports & higher XP multipliers",
    ],
  },
  {
    name: "Vibe Quest Partners",
    tag: "Commerce layer",
    points: [
      "Partner quests and sponsored experiences",
      "QR-based visit verification",
      "Rewards, discounts and loyalty",
      "Event discovery and participation",
      "Campaign analytics and reporting",
    ],
  },
];

function ProductPage() {
  return (
    <TopicPage
      eyebrow="Product"
      title="Three layers, one ecosystem."
      intro="Free, Pro and Partners work together to turn everyday moments into real-world experiences — and local businesses into active participants."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {LAYERS.map((l) => (
          <div
            key={l.name}
            className="rounded-3xl bg-gradient-deep p-6 text-ink-foreground shadow-lift"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-gold">{l.tag}</p>
            <h2 className="mt-2 text-xl font-bold text-ink-foreground">{l.name}</h2>
            <ul className="mt-4 space-y-2 text-sm opacity-85">
              {l.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </TopicPage>
  );
}
