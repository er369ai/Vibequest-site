import { createFileRoute } from "@tanstack/react-router";
import { TopicPage } from "@/components/vq/SiteShell";
import { PhoneFrame } from "@/components/vq/PhoneFrame";
import { DiscoverScreen, ProgressScreen } from "@/components/vq/screens";

export const Route = createFileRoute("/flow")({
  head: () => ({
    meta: [
      { title: "The Core Flow — Discover, Do, Verify, Earn | Vibe Quest" },
      {
        name: "description",
        content:
          "Vibe Quest's core flow: discover quests, join, meet up, do it in the real world, verify, earn XP and progress.",
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
            className="flex items-center gap-2 rounded-full glass-card border border-white/10 px-4 py-2 text-sm font-bold text-white shadow-glow-cyan"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-brand text-[11px] font-black text-slate-950">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-12">
        <div className="flex justify-center gap-6 lg:col-span-6">
          <PhoneFrame label="1. Discover Quests">
            <DiscoverScreen />
          </PhoneFrame>
          <PhoneFrame label="2. Level Up Profile" className="hidden sm:flex">
            <ProgressScreen />
          </PhoneFrame>
        </div>
        <div className="space-y-4 lg:col-span-6">
          {[
            ["Discover", "Browse curated quests based on location radius, vibe preferences, and skill goals."],
            ["Join & Match", "Find peer partners, group outings, or mentor guides nearby."],
            ["Meet & Do", "Step away from the screen and complete the experience together in the real world."],
            ["Verify via QR", "Scan instant partner QR codes at local cafes, climbing gyms, or event venues."],
            ["Earn & Level Up", "Gain XP, claim free drinks or discounts, unlock badges, and advance your rank."],
          ].map(([t, d]) => (
            <div key={t} className="glass-card rounded-2xl p-5 border border-white/10 hover:border-cyan-400/40">
              <p className="font-display text-lg font-bold text-white">{t}</p>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </TopicPage>
  );
}
