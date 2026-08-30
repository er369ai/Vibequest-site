import { StatusBar, TabBar } from "./PhoneFrame";
import {
  Zap,
  MapPin,
  Compass,
} from "lucide-react";

const chip = "rounded-full px-2.5 py-0.5 text-[10px] font-bold flex items-center gap-1";

export function DiscoverScreen({ onTabSelect }: { onTabSelect?: (t: string) => void }) {
  return (
    <>
      <div className="bg-white border-b border-slate-200 px-4 pb-4">
        <StatusBar />
        <div className="mt-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-blue-600 flex items-center gap-1">
            <Zap className="h-3 w-3" /> Quests Near You
          </p>
          <h3 className="font-display text-lg font-bold text-slate-900">Pick a quest</h3>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <span className={`${chip} bg-blue-600 text-white`}>Chill</span>
          <span className={`${chip} border border-slate-200 bg-slate-100 text-slate-700`}>High-Energy</span>
          <span className={`${chip} border border-slate-200 bg-slate-100 text-slate-700`}>Creative</span>
        </div>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3 bg-slate-50">
        {[
          { t: "Outdoor photo walk", tag: "Photography", tone: "bg-blue-50 text-blue-700 border-blue-200" },
          { t: "Acoustic jam session", tag: "Music", tone: "bg-indigo-50 text-indigo-700 border-indigo-200" },
          { t: "Language practice hour", tag: "Languages", tone: "bg-sky-50 text-sky-700 border-sky-200" },
        ].map((q) => (
          <div key={q.t} className="rounded-xl p-3 border border-slate-200 bg-white shadow-xs">
            <span className={`inline-block rounded-md border px-1.5 py-0.5 text-[9px] font-bold ${q.tone}`}>
              {q.tag}
            </span>
            <p className="mt-1 text-xs font-bold leading-snug text-slate-900">{q.t}</p>
            <p className="mt-0.5 text-[10px] text-slate-500">Tap to see details and join</p>
          </div>
        ))}
      </div>
      <TabBar active="Quests" onTabSelect={onTabSelect} />
    </>
  );
}

export function RadarScreen({ onTabSelect }: { onTabSelect?: (t: string) => void }) {
  return (
    <>
      <div className="bg-white border-b border-slate-200 px-4 pb-2">
        <StatusBar />
        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-blue-600 flex items-center gap-1">
          <Compass className="h-3 w-3" /> Quest Map
        </p>
      </div>

      <div className="relative flex-1 overflow-hidden bg-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300 animate-ping" />
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 shadow-md" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 origin-top-left animate-radar rounded-tl-full bg-gradient-to-br from-blue-400/20 to-transparent" />

        <div className="absolute left-12 top-16 flex items-center gap-1 rounded-full bg-white px-2 py-1 border border-blue-300 shadow-xs text-[9px] font-bold text-blue-700">
          <MapPin className="h-2.5 w-2.5 text-blue-600" /> Quest nearby
        </div>
        <div className="absolute right-6 top-36 flex items-center gap-1 rounded-full bg-white px-2 py-1 border border-indigo-300 shadow-xs text-[9px] font-bold text-indigo-700">
          <MapPin className="h-2.5 w-2.5 text-indigo-600" /> Group activity
        </div>
      </div>

      <TabBar active="Radar" onTabSelect={onTabSelect} />
    </>
  );
}

export function MatchScreen({ onTabSelect }: { onTabSelect?: (t: string) => void }) {
  return (
    <>
      <div className="bg-white border-b border-slate-200 px-4 pb-3">
        <StatusBar />
        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-blue-600">
          Skill Matching
        </p>
        <h3 className="font-display text-sm font-bold text-slate-900">Find a practice partner</h3>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3 bg-slate-50">
        {[
          { t: "Same Level Peer", desc: "Practice together at a similar skill level", color: "border-blue-200 bg-white text-blue-700" },
          { t: "Step-Ahead Guide", desc: "Learn from someone slightly more experienced", color: "border-indigo-200 bg-white text-indigo-700" },
          { t: "Mentor", desc: "Guided feedback from an experienced practitioner", color: "border-sky-200 bg-white text-sky-700" },
        ].map((item) => (
          <div key={item.t} className={`rounded-xl p-3 border shadow-xs ${item.color}`}>
            <span className="text-xs font-bold text-slate-900">{item.t}</span>
            <p className="mt-1 text-[10px] text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <TabBar active="Skills" onTabSelect={onTabSelect} />
    </>
  );
}

export function QrScreen({ onTabSelect }: { onTabSelect?: (t: string) => void }) {
  return (
    <>
      <div className="bg-white border-b border-slate-200 px-4 pb-2">
        <StatusBar />
        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-blue-600">
          QR Verification
        </p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center p-4 text-center bg-slate-50">
        <p className="text-xs font-bold text-slate-800">Scan at partner venue</p>

        <div className="relative mt-3 rounded-2xl border border-slate-300 bg-white p-3 shadow-md">
          <div
            className="h-36 w-36 rounded-xl"
            style={{
              backgroundImage:
                "conic-gradient(from 0deg, #2563EB 0 25%, transparent 0 50%, #0284C7 0 75%, transparent 0)",
              backgroundSize: "14px 14px",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-1 bg-blue-600 shadow-sm animate-pulse" />
        </div>

        <p className="mt-4 text-[10px] text-slate-500 max-w-[200px]">
          Verify attendance at cafes, gyms, and event venues to earn XP and unlock perks.
        </p>
      </div>

      <TabBar active="Verify" onTabSelect={onTabSelect} />
    </>
  );
}

export function ProgressScreen({ onTabSelect }: { onTabSelect?: (t: string) => void }) {
  return (
    <>
      <div className="bg-white border-b border-slate-200 px-4 pb-4">
        <StatusBar />
        <div className="mt-3 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand font-display font-black text-white text-sm shadow-md">
            VQ
          </div>
          <div>
            <p className="font-display text-sm font-bold text-slate-900">Your Profile</p>
            <p className="text-[10px] text-blue-600 font-semibold">Level &amp; Progression</p>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex justify-between text-[10px] font-bold text-slate-600">
            <span>XP Progress</span>
          </div>
          <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-2/3 rounded-full bg-gradient-brand transition-all duration-500" />
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3 bg-slate-50">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl p-2 border border-slate-200 bg-white shadow-xs">
            <p className="font-display text-base font-bold text-blue-600">Quests</p>
            <p className="text-[9px] text-slate-500">Completed</p>
          </div>
          <div className="rounded-xl p-2 border border-slate-200 bg-white shadow-xs">
            <p className="font-display text-base font-bold text-blue-600">Streak</p>
            <p className="text-[9px] text-slate-500">Weekly</p>
          </div>
          <div className="rounded-xl p-2 border border-slate-200 bg-white shadow-xs">
            <p className="font-display text-base font-bold text-blue-600">Badges</p>
            <p className="text-[9px] text-slate-500">Earned</p>
          </div>
        </div>

        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
          Skill Progress
        </p>

        {[
          { skill: "Photography", pct: 72 },
          { skill: "Guitar", pct: 45 },
          { skill: "Languages", pct: 28 },
        ].map((item) => (
          <div key={item.skill} className="rounded-xl p-2.5 border border-slate-200 bg-white shadow-xs">
            <span className="text-xs font-bold text-slate-900">{item.skill}</span>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-blue-600" style={{ width: `${item.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      <TabBar active="Profile" onTabSelect={onTabSelect} />
    </>
  );
}

export function QuestDetailScreen({ onTabSelect }: { onTabSelect?: (t: string) => void }) {
  return (
    <>
      <div className="bg-white border-b border-slate-200 px-4 pb-4">
        <StatusBar />
        <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-blue-600">
          Quest Detail
        </p>
        <h3 className="font-display text-base font-bold text-slate-900">
          Outdoor Photo Walk
        </h3>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto px-3.5 py-3 bg-slate-50">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-2.5">
          <p className="text-[9px] font-bold uppercase tracking-wide text-blue-700">The Flow</p>
          <p className="mt-0.5 text-[10px] font-bold text-slate-900">
            Discover → Join → Meet → Do → Verify → Earn XP
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
            Quest Info
          </p>
          <div className="mt-1.5 space-y-1.5">
            {[
              ["Category", "Photography"],
              ["Type", "Group outdoor activity"],
              ["Verification", "QR scan at partner venue"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-1.5 shadow-xs">
                <span className="text-[11px] text-slate-500">{label}</span>
                <span className="text-[11px] font-bold text-slate-900">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TabBar active="Quests" onTabSelect={onTabSelect} />
    </>
  );
}

export function InteractivePhoneSimulator() {
  return null;
}

export function DiscoverScreenStatic() {
  return null;
}
