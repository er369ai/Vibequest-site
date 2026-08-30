import { StatusBar, TabBar } from "./PhoneFrame";
import {
  Zap,
  MapPin,
  Compass,
} from "lucide-react";

const chip = "rounded-full px-2.5 py-0.5 text-[10px] font-bold flex items-center gap-1";

/* ── Concept Preview Screens ────────────────────────── */
/* These screens illustrate the planned app experience.  */
/* Content shown is representative, not live data.       */

export function DiscoverScreen({ onTabSelect }: { onTabSelect?: (t: string) => void }) {
  return (
    <>
      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-[#0B0F17] px-4 pb-4">
        <StatusBar />
        <div className="mt-2">
          <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1">
            <Zap className="h-3 w-3" /> Quests Near You
          </p>
          <h3 className="font-display text-lg font-bold text-white">Pick a quest</h3>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <span className={`${chip} bg-cyan-500 text-slate-950`}>Chill</span>
          <span className={`${chip} border border-white/10 bg-white/5 text-slate-300`}>High-Energy</span>
          <span className={`${chip} border border-white/10 bg-white/5 text-slate-300`}>Creative</span>
        </div>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3">
        {[
          { t: "Outdoor photo walk", tag: "Photography", tone: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
          { t: "Acoustic jam session", tag: "Music", tone: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
          { t: "Language practice hour", tag: "Languages", tone: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
        ].map((q) => (
          <div key={q.t} className="glass-card rounded-xl p-3 border border-white/10">
            <span className={`inline-block rounded-md border px-1.5 py-0.5 text-[9px] font-bold ${q.tone}`}>
              {q.tag}
            </span>
            <p className="mt-1 text-xs font-bold leading-snug text-white">{q.t}</p>
            <p className="mt-0.5 text-[10px] text-slate-400">Tap to see details and join</p>
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
      <div className="bg-slate-950 px-4 pb-2">
        <StatusBar />
        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1">
          <Compass className="h-3 w-3" /> Quest Map
        </p>
      </div>

      <div className="relative flex-1 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/30 animate-ping" />
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_#00F2FE]" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 origin-top-left animate-radar rounded-tl-full bg-gradient-to-br from-cyan-400/30 to-transparent" />

        <div className="absolute left-12 top-16 flex items-center gap-1 rounded-full bg-cyan-500/20 px-2 py-1 border border-cyan-400 text-[9px] font-bold text-cyan-300">
          <MapPin className="h-2.5 w-2.5" /> Quest nearby
        </div>
        <div className="absolute right-6 top-36 flex items-center gap-1 rounded-full bg-purple-500/20 px-2 py-1 border border-purple-400 text-[9px] font-bold text-purple-300">
          <MapPin className="h-2.5 w-2.5" /> Group activity
        </div>
      </div>

      <TabBar active="Radar" onTabSelect={onTabSelect} />
    </>
  );
}

export function MatchScreen({ onTabSelect }: { onTabSelect?: (t: string) => void }) {
  return (
    <>
      <div className="bg-slate-950 px-4 pb-3">
        <StatusBar />
        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
          Skill Matching
        </p>
        <h3 className="font-display text-sm font-bold text-white">Find a practice partner</h3>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3">
        {[
          { t: "Same Level Peer", desc: "Practice together at a similar skill level", color: "border-cyan-400/40 bg-cyan-500/10" },
          { t: "Step-Ahead Guide", desc: "Learn from someone slightly more experienced", color: "border-purple-400/40 bg-purple-500/10" },
          { t: "Mentor", desc: "Guided feedback from an experienced practitioner", color: "border-amber-400/40 bg-amber-500/10" },
        ].map((item) => (
          <div key={item.t} className={`glass-card rounded-xl p-3 border ${item.color}`}>
            <span className="text-xs font-bold text-white">{item.t}</span>
            <p className="mt-1 text-[10px] text-slate-400">{item.desc}</p>
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
      <div className="bg-slate-950 px-4 pb-2">
        <StatusBar />
        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
          QR Verification
        </p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center p-4 text-center">
        <p className="text-xs font-bold text-slate-300">Scan at partner venue</p>

        <div className="relative mt-3 rounded-2xl border border-cyan-400/40 bg-slate-900 p-3 shadow-glow-cyan">
          <div
            className="h-36 w-36 rounded-xl"
            style={{
              backgroundImage:
                "conic-gradient(from 0deg, #00F2FE 0 25%, transparent 0 50%, #FF5E3A 0 75%, transparent 0)",
              backgroundSize: "14px 14px",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-1 bg-cyan-400 shadow-[0_0_15px_#00F2FE] animate-pulse" />
        </div>

        <p className="mt-4 text-[10px] text-slate-400 max-w-[200px]">
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
      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-[#0B0F17] px-4 pb-4">
        <StatusBar />
        <div className="mt-3 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand font-display font-black text-slate-950 text-sm shadow-glow-cyan">
            VQ
          </div>
          <div>
            <p className="font-display text-sm font-bold text-white">Your Profile</p>
            <p className="text-[10px] text-cyan-400 font-semibold">Level &amp; Progression</p>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex justify-between text-[10px] font-bold text-slate-300">
            <span>XP Progress</span>
          </div>
          <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-2/3 rounded-full bg-gradient-brand transition-all duration-500" />
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="glass-card rounded-xl p-2 border border-white/10">
            <p className="font-display text-base font-bold text-cyan-400">Quests</p>
            <p className="text-[9px] text-slate-400">Completed</p>
          </div>
          <div className="glass-card rounded-xl p-2 border border-white/10">
            <p className="font-display text-base font-bold text-amber-400">Streak</p>
            <p className="text-[9px] text-slate-400">Weekly</p>
          </div>
          <div className="glass-card rounded-xl p-2 border border-white/10">
            <p className="font-display text-base font-bold text-purple-400">Badges</p>
            <p className="text-[9px] text-slate-400">Earned</p>
          </div>
        </div>

        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Skill Progress
        </p>

        {[
          { skill: "Photography", pct: 72 },
          { skill: "Guitar", pct: 45 },
          { skill: "Languages", pct: 28 },
        ].map((item) => (
          <div key={item.skill} className="glass-card rounded-xl p-2.5 border border-white/10">
            <span className="text-xs font-bold text-white">{item.skill}</span>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-cyan-400" style={{ width: `${item.pct}%` }} />
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
      <div className="bg-gradient-to-b from-amber-500/20 via-slate-950 to-[#0B0F17] px-4 pb-4">
        <StatusBar />
        <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-amber-400">
          Quest Detail
        </p>
        <h3 className="font-display text-base font-bold text-white">
          Outdoor Photo Walk
        </h3>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto px-3.5 py-3">
        <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-2.5">
          <p className="text-[9px] font-bold uppercase tracking-wide text-cyan-400">The Flow</p>
          <p className="mt-0.5 text-[10px] font-bold text-white">
            Discover → Join → Meet → Do → Verify → Earn XP
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
            Quest Info
          </p>
          <div className="mt-1.5 space-y-1.5">
            {[
              ["Category", "Photography"],
              ["Type", "Group outdoor activity"],
              ["Verification", "QR scan at partner venue"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900 px-3 py-1.5">
                <span className="text-[11px] text-slate-400">{label}</span>
                <span className="text-[11px] font-bold text-white">{value}</span>
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
  /* Intentionally empty — phone simulator removed to avoid displaying fabricated UI data */
  return null;
}

export function DiscoverScreenStatic() {
  return null;
}
