import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/vq/SiteShell";
import { PhoneFrame } from "@/components/vq/PhoneFrame";
import {
  DiscoverScreen,
  MatchScreen,
  ProgressScreen,
  QrScreen,
  QuestDetailScreen,
} from "@/components/vq/screens";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Vibe Quest App Mockup — Quests, Matching, XP & QR" },
      {
        name: "description",
        content:
          "Interactive mockup of the Vibe Quest mobile app: quest discovery, skill matching, partner QR verification and XP progression screens.",
      },
      { property: "og:title", content: "Vibe Quest App Mockup" },
      {
        property: "og:description",
        content:
          "Five screens showing the Vibe Quest core flow: discover, join, verify with QR, earn XP and progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AppMockup,
});

const SCREENS = [
  {
    label: "Discover",
    note: "Vibe modes and location-aware quests.",
    node: <DiscoverScreen />,
  },
  {
    label: "Quest detail",
    note: "Join, see who's going, know the reward.",
    node: <QuestDetailScreen />,
  },
  {
    label: "Skill matching (Pro)",
    note: "Same level, higher level or mentor.",
    node: <MatchScreen />,
  },
  {
    label: "Partner QR verify",
    note: "Consent-based proof of participation.",
    node: <QrScreen />,
  },
  {
    label: "Progress & XP",
    note: "Levels, streaks, badges and skill goals.",
    node: <ProgressScreen />,
  },
];

function AppMockup() {
  return (
    <SiteShell className="bg-surface">
      <main className="mx-auto max-w-6xl px-5 py-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">App mockup</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
          The core flow, screen by screen.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Discover → Join → Meet → Do → Verify → Earn → Progress. Five key surfaces of the Vibe Quest
          MVP, from social discovery through Pro skill matching to partner QR verification.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-12">
          {SCREENS.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <PhoneFrame label={s.label}>{s.node}</PhoneFrame>
              <p className="mt-1 max-w-[280px] text-center text-xs text-muted-foreground">
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
