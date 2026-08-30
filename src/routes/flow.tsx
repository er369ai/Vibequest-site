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
      intro="Discovery, social interaction, gamification and real-world action in one experience."
    >
      <ol className="flex flex-wrap gap-2">
        {FLOW.map((step, i) => (
          <li
            key={step}
            className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-bold shadow-soft"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-brand text-[11px] text-primary-foreground">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex justify-center gap-6">
          <PhoneFrame label="Discover">
            <DiscoverScreen />
          </PhoneFrame>
          <PhoneFrame label="Progress" className="hidden sm:flex">
            <ProgressScreen />
          </PhoneFrame>
        </div>
        <div className="space-y-4">
          {[
            ["Discover", "Quests based on interests, location, vibe and goals."],
            ["Join", "Individual, group or skill-based quests."],
            ["Meet & Do", "The quest happens in the real world."],
            ["Verify", "In-app actions, partner QR scans or other validation."],
            ["Earn & Progress", "XP, badges, streaks and rewards — then level up."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
              <p className="font-bold">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </TopicPage>
  );
}
