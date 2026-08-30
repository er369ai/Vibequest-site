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
    label: "1. Discover Feed",
    note: "Location-aware Cyprus quests categorized by vibe.",
    node: <DiscoverScreen />,
  },
  {
    label: "2. Quest Detail",
    note: "Join, see participants, preview XP rewards.",
    node: <QuestDetailScreen />,
  },
  {
    label: "3. Skill Matching Engine",
    note: "Peer, guide, and certified mentor matching.",
    node: <MatchScreen />,
  },
  {
    label: "4. Partner QR Scan",
    note: "Zero-knowledge verification at local venues.",
    node: <QrScreen />,
  },
  {
    label: "5. Profile & XP Tree",
    note: "Levels, streaks, skill mastery trees & badges.",
    node: <ProgressScreen />,
  },
];

function AppMockup() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">Interactive App Walkthrough</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold text-white sm:text-6xl">
          The core flow, screen by screen.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Discover → Join → Meet → Do → Verify → Earn → Progress. Five key surfaces of the Vibe Quest
          mobile app, from social discovery through Pro skill matching to partner QR verification.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-12">
          {SCREENS.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <PhoneFrame label={s.label}>{s.node}</PhoneFrame>
              <p className="mt-2 max-w-[280px] text-center text-xs text-slate-400 font-medium leading-snug">
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
