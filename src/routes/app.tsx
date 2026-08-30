import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/vq/SiteShell";
import { PhoneFrame } from "@/components/vq/PhoneFrame";
import {
  DiscoverScreen,
  MatchScreen,
  ProgressScreen,
  QrScreen,
  QuestDetailScreen,
  RadarScreen,
} from "@/components/vq/screens";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Vibe Quest App — Concept Screens" },
      {
        name: "description",
        content:
          "Concept screens showing the planned Vibe Quest mobile app: quest discovery, map radar, skill matching, QR verification, and progression.",
      },
      { property: "og:title", content: "Vibe Quest App Concept" },
      {
        property: "og:description",
        content:
          "Concept screens for Vibe Quest: discover quests, find practice partners, verify at venues, and track progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AppMockup,
});

const SCREENS = [
  {
    label: "Quest Discovery",
    note: "Browse available quests by category and vibe.",
    node: <DiscoverScreen />,
  },
  {
    label: "Quest Map",
    note: "Find active group quests nearby on an interactive map.",
    node: <RadarScreen />,
  },
  {
    label: "Quest Detail",
    note: "View quest info and join.",
    node: <QuestDetailScreen />,
  },
  {
    label: "Skill Matching",
    note: "Find a practice partner at your level.",
    node: <MatchScreen />,
  },
  {
    label: "QR Verification",
    note: "Verify attendance at partner venues.",
    node: <QrScreen />,
  },
  {
    label: "Profile & Progress",
    note: "Track quests, streaks, badges, and skill progress.",
    node: <ProgressScreen />,
  },
];

function AppMockup() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">App Concept Screens</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold text-slate-900 sm:text-6xl">
          The planned app experience.
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          These screens illustrate the planned Vibe Quest mobile app flow: discover quests, find practice partners, verify at venues, and track your real-world progress.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-12">
          {SCREENS.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <PhoneFrame label={s.label}>{s.node}</PhoneFrame>
              <p className="mt-2 max-w-[280px] text-center text-xs text-slate-600 font-medium leading-snug">
                {s.note}
              </p>
            </div>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
