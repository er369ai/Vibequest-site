import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/vq/SiteShell";

export const Route = createFileRoute("/flow")({
  head: () => ({
    meta: [
      { title: "The Core Flow — Discover, Do, Verify, Earn | Vibe Quest" },
      {
        name: "description",
        content:
          "Vibe Quest's core flow: discover quests, join, meet up, do it in the real world, verify at a venue, and earn XP.",
      },
      { property: "og:title", content: "The Vibe Quest Core Flow" },
      {
        property: "og:description",
        content: "Discovery, social interaction, gamification and real-world action in one flow.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FlowPage,
});

const FLOW = ["Discover", "Join", "Meet", "Do", "Verify", "Earn", "Progress"];

function FlowPage() {
  return (
    <TopicPage
      eyebrow="The core flow"
      title="Discover → Do → Verify → Progress."
      intro="Discovery, social interaction, gamification and real-world action unified in one seamless experience."
    >
      <ol className="flex flex-wrap gap-3">
        {FLOW.map((step, i) => (
          <li
            key={step}
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-xs"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-600 text-[11px] font-black text-white">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className="mt-12 space-y-4 max-w-2xl">
        {[
          ["Discover", "Browse quests based on your location, vibe preference, and skill interests."],
          ["Join & Match", "Find peer partners, group outings, or mentor guides nearby."],
          ["Meet & Do", "Step away from the screen and complete the activity together in the real world."],
          ["Verify via QR", "Scan a QR code at partner cafes, gyms, or event venues to confirm attendance."],
          ["Earn & Level Up", "Gain XP, claim venue perks, unlock badges, and advance your rank."],
        ].map(([t, d]) => (
          <div key={t} className="glass-card rounded-2xl p-5 border border-slate-200 bg-white shadow-xs hover:border-blue-400">
            <p className="font-display text-lg font-bold text-slate-900">{t}</p>
            <p className="mt-1 text-sm text-slate-600 leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </TopicPage>
  );
}
