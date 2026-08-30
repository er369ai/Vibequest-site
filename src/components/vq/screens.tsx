import { useState } from "react";
import { PhoneFrame, StatusBar, TabBar } from "./PhoneFrame";
import {
  Zap,
  CheckCircle2,
  MapPin,
  Sparkles,
  Award,
  Moon,
  Palette,
  Coffee,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const chip = "rounded-full px-2.5 py-0.5 text-[10px] font-bold flex items-center gap-1";

export function InteractivePhoneSimulator() {
  const [activeTab, setActiveTab] = useState<string>("Quests");
  const [joinedQuest, setJoinedQuest] = useState<boolean>(false);
  const [scannedQr, setScannedQr] = useState<boolean>(false);

  return (
    <PhoneFrame label="Tap tabs to test live app flow">
      {activeTab === "Quests" && (
        <DiscoverScreen
          joinedQuest={joinedQuest}
          onJoinQuest={() => setJoinedQuest(true)}
          onTabSelect={setActiveTab}
        />
      )}
      {activeTab === "Radar" && <RadarScreen onTabSelect={setActiveTab} />}
      {activeTab === "Skills" && <MatchScreen onTabSelect={setActiveTab} />}
      {activeTab === "Verify" && (
        <QrScreen
          scannedQr={scannedQr}
          onScan={() => setScannedQr(true)}
          onTabSelect={setActiveTab}
        />
      )}
      {activeTab === "Profile" && (
        <ProgressScreen joinedQuest={joinedQuest} onTabSelect={setActiveTab} />
      )}
    </PhoneFrame>
  );
}

export function DiscoverScreen({
  joinedQuest,
  onJoinQuest,
  onTabSelect,
}: {
  joinedQuest?: boolean;
  onJoinQuest?: () => void;
  onTabSelect?: (t: string) => void;
}) {
  return (
    <>
      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-[#0B0F17] px-4 pb-4">
        <StatusBar />
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1">
              <Zap className="h-3 w-3" /> Cyprus · Live Now
            </p>
            <h3 className="font-display text-lg font-bold text-white">Hey Deniz, pick a vibe</h3>
          </div>
          <button
            type="button"
            onClick={() => onTabSelect?.("Verify")}
            className="rounded-full bg-cyan-500/20 px-2.5 py-1 text-[10px] font-bold text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/30"
          >
            Scan QR
          </button>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <span className={`${chip} bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(0,242,254,0.5)]`}>
            <Moon className="h-3 w-3" /> Chill Vibes
          </span>
          <span className={`${chip} border border-white/10 bg-white/5 text-slate-300`}>
            <Zap className="h-3 w-3" /> High-Energy
          </span>
          <span className={`${chip} border border-white/10 bg-white/5 text-slate-300`}>
            <Palette className="h-3 w-3" /> Creative
          </span>
        </div>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3">
        {joinedQuest && (
          <div className="animate-xp-pop rounded-xl border border-gold/40 bg-amber-500/10 p-2.5 text-center text-xs font-bold text-amber-300 flex items-center justify-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" /> Quest Joined! +120 XP Reserved at Golden Hour Shoot
          </div>
        )}

        {[
          {
            id: 1,
            t: "Golden-hour photo shoot",
            s: "Kyrenia Beach · 4 going · 0.8 km",
            xp: "+120 XP",
            tag: "Photography",
            tone: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
          },
          {
            id: 2,
            t: "Acoustic jam at Kordon",
            s: "Lefkoşa · 3 going · 1.4 km",
            xp: "+95 XP",
            tag: "Guitar",
            tone: "bg-purple-500/20 text-purple-300 border-purple-500/30",
          },
          {
            id: 3,
            t: "Espresso tasting & notes",
            s: "Nicosia Roastery · 6 going · 0.4 km",
            xp: "+110 XP",
            tag: "Coffee Craft",
            tone: "bg-amber-500/20 text-amber-300 border-amber-500/30",
          },
        ].map((q) => (
          <div key={q.id} className="glass-card rounded-xl p-3 border border-white/10 hover:border-cyan-400/40">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className={`inline-block rounded-md border px-1.5 py-0.5 text-[9px] font-bold ${q.tone}`}>
                  {q.tag}
                </span>
                <p className="mt-1 text-xs font-bold leading-snug text-white">{q.t}</p>
                <p className="mt-0.5 text-[10px] text-slate-400">{q.s}</p>
              </div>
              <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-[10px] font-bold text-cyan-400 border border-cyan-400/30">
                {q.xp}
              </span>
            </div>
            {q.id === 1 && !joinedQuest && (
              <button
                type="button"
                onClick={onJoinQuest}
                className="mt-2 w-full rounded-lg bg-gradient-brand py-1.5 text-[10px] font-bold text-slate-950 shadow-glow-cyan"
              >
                Join Quest (+120 XP)
              </button>
            )}
          </div>
        ))}
      </div>
      <TabBar active="Quests" onTabSelect={onTabSelect} />
    </>
  );
}

export function QuestDetailScreen({ onTabSelect }: { onTabSelect?: (t: string) => void }) {
  return (
    <>
      <div className="bg-gradient-to-b from-amber-500/20 via-slate-950 to-[#0B0F17] px-4 pb-4">
        <StatusBar />
        <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-amber-400">
          Skill Quest · Photography
        </p>
        <h3 className="font-display text-base font-bold text-white">
          Golden-Hour Shoot @ Beach
        </h3>
        <p className="mt-1 text-[10px] text-slate-300">Today 18:40 · 90 min · 4 spots left</p>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto px-3.5 py-3">
        <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-2.5">
          <p className="text-[9px] font-bold uppercase tracking-wide text-cyan-400">
            The Flow
          </p>
          <p className="mt-0.5 text-[10px] font-bold text-white">
            Discover → Join → Meet → Do → Verify QR → +120 XP
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
            Who&apos;s Going
          </p>
          <div className="mt-1.5 space-y-1.5">
            {[
              ["Elif · Lv 6 Explorer", "Same Level", "border-cyan-400/30 text-cyan-300 bg-cyan-500/10"],
              ["Mert · Lv 12 Guide", "Guide", "border-purple-400/30 text-purple-300 bg-purple-500/10"],
              ["Ayça · Certified Mentor", "Coach", "border-amber-400/30 text-amber-300 bg-amber-500/10"],
            ].map(([n, r, tone]) => (
              <div
                key={n}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900 px-3 py-1.5"
              >
                <span className="text-[11px] font-bold text-white">{n}</span>
                <span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold ${tone}`}>{r}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl border border-gold/40 bg-amber-500/10 px-3 py-2">
          <div>
            <p className="text-[9px] uppercase tracking-wide text-amber-400">Reward</p>
            <p className="text-xs font-bold text-white">120 XP · 2× Multiplier</p>
          </div>
          <button
            type="button"
            onClick={() => onTabSelect?.("Verify")}
            className="rounded-lg bg-gradient-brand px-3 py-1 text-[10px] font-bold text-slate-950 shadow-glow-cyan"
          >
            Join Quest
          </button>
        </div>
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
          <Compass className="h-3 w-3" /> Live Quest Radar · Cyprus
        </p>
      </div>

      {/* Radar Map Canvas Simulation */}
      <div className="relative flex-1 overflow-hidden bg-slate-950">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        {/* Pulse rings */}
        <div className="absolute left-1/2 top-1/2 -h-48 -w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20" />
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/30 animate-ping" />
        
        {/* Center user dot */}
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_#00F2FE]" />

        {/* Radar scanning line */}
        <div className="absolute left-1/2 top-1/2 h-32 w-32 origin-top-left animate-radar rounded-tl-full bg-gradient-to-br from-cyan-400/30 to-transparent" />

        {/* Pins on map */}
        <div className="absolute left-12 top-16 flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-1 border border-amber-400 text-[9px] font-bold text-amber-300 animate-float-slow shadow-glow-gold">
          <MapPin className="h-2.5 w-2.5" /> Sunset Photo (0.8km)
        </div>
        <div className="absolute right-6 top-36 flex items-center gap-1 rounded-full bg-purple-500/20 px-2 py-1 border border-purple-400 text-[9px] font-bold text-purple-300 animate-float-delayed">
          <MapPin className="h-2.5 w-2.5" /> Acoustic Jam (1.4km)
        </div>
        <div className="absolute left-8 bottom-16 flex items-center gap-1 rounded-full bg-cyan-500/20 px-2 py-1 border border-cyan-400 text-[9px] font-bold text-cyan-300">
          <MapPin className="h-2.5 w-2.5" /> Espresso Tasting (0.4km)
        </div>
      </div>

      <TabBar active="Radar" onTabSelect={onTabSelect} />
    </>
  );
}

export function MatchScreen({ onTabSelect }: { onTabSelect?: (t: string) => void }) {
  const [selectedRole, setSelectedRole] = useState<string>("Same Level");

  return (
    <>
      <div className="bg-slate-950 px-4 pb-3">
        <StatusBar />
        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1">
          <UserCheck className="h-3 w-3" /> Skill Matcher Engine
        </p>
        <h3 className="font-display text-sm font-bold text-white">Select Mastery Partner Type</h3>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3">
        {[
          {
            t: "Same Level Peer",
            desc: "Practice open chords with someone starting out",
            badge: "Peer Match",
            color: "border-cyan-400/40 bg-cyan-500/10 text-cyan-300",
          },
          {
            t: "Step-Ahead Guide",
            desc: "Get tips from a Lv 12 guitarist nearby",
            badge: "Fast Track",
            color: "border-purple-400/40 bg-purple-500/10 text-purple-300",
          },
          {
            t: "Certified Mentor",
            desc: "1-on-1 feedback session at Kordon Cafe",
            badge: "Pro Coach",
            color: "border-amber-400/40 bg-amber-500/10 text-amber-300",
          },
        ].map((item) => (
          <button
            key={item.t}
            type="button"
            onClick={() => setSelectedRole(item.t)}
            className={`w-full text-left glass-card rounded-xl p-3 border transition-all ${
              selectedRole === item.t ? "border-cyan-400 bg-cyan-950/40 shadow-glow-cyan" : "border-white/10"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">{item.t}</span>
              <span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold ${item.color}`}>
                {item.badge}
              </span>
            </div>
            <p className="mt-1 text-[10px] text-slate-400">{item.desc}</p>
          </button>
        ))}

        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-2.5 text-[10px] text-slate-400 flex items-center gap-1.5">
          <Sparkles className="h-3 w-3 shrink-0 text-cyan-400" />
          <span>Algorithmic scoring matches by location radius, availability, and skill level.</span>
        </div>
      </div>

      <TabBar active="Skills" onTabSelect={onTabSelect} />
    </>
  );
}

export function QrScreen({
  scannedQr,
  onScan,
  onTabSelect,
}: {
  scannedQr?: boolean;
  onScan?: () => void;
  onTabSelect?: (t: string) => void;
}) {
  return (
    <>
      <div className="bg-slate-950 px-4 pb-2">
        <StatusBar />
        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1">
          <ShieldCheck className="h-3 w-3" /> Partner Verification
        </p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center p-4 text-center">
        <p className="text-xs font-bold text-slate-300">Nicosia Roasters Partner</p>

        {/* QR Code Container with Laser Scanning Effect */}
        <div className="relative mt-3 rounded-2xl border border-cyan-400/40 bg-slate-900 p-3 shadow-glow-cyan">
          <div
            className="h-36 w-36 rounded-xl"
            style={{
              backgroundImage:
                "conic-gradient(from 0deg, #00F2FE 0 25%, transparent 0 50%, #FF5E3A 0 75%, transparent 0)",
              backgroundSize: "14px 14px",
            }}
          />
          {/* Laser scanning beam */}
          <div className="absolute inset-x-0 top-0 h-1 bg-cyan-400 shadow-[0_0_15px_#00F2FE] animate-pulse" />
        </div>

        {scannedQr ? (
          <div className="mt-4 w-full animate-xp-pop rounded-xl border border-amber-400/40 bg-amber-500/10 p-2.5 text-xs font-bold text-amber-300 flex items-center justify-center gap-1.5">
            <Award className="h-3.5 w-3.5" /> +70 XP Verified! Free Filter Coffee Unlocked
          </div>
        ) : (
          <button
            type="button"
            onClick={onScan}
            className="mt-4 w-full rounded-xl bg-gradient-brand py-2 text-xs font-bold text-slate-950 shadow-glow-cyan"
          >
            Simulate Scan QR (+70 XP)
          </button>
        )}
      </div>

      <TabBar active="Verify" onTabSelect={onTabSelect} />
    </>
  );
}

export function ProgressScreen({
  joinedQuest,
  onTabSelect,
}: {
  joinedQuest?: boolean;
  onTabSelect?: (t: string) => void;
}) {
  const currentXp = joinedQuest ? 2600 : 2480;

  return (
    <>
      <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-[#0B0F17] px-4 pb-4">
        <StatusBar />
        <div className="mt-3 flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand font-display font-black text-slate-950 text-sm shadow-glow-cyan">
            DK
          </div>
          <div>
            <p className="font-display text-sm font-bold text-white">Deniz K.</p>
            <p className="text-[10px] text-cyan-400 font-semibold">Level 9 Explorer · Pro Member</p>
          </div>
        </div>

        {/* XP Bar */}
        <div className="mt-3">
          <div className="flex justify-between text-[10px] font-bold text-slate-300">
            <span>Progress to Level 10</span>
            <span className="text-amber-400">{currentXp} / 3,600 XP</span>
          </div>
          <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-brand transition-all duration-500"
              style={{ width: `${(currentXp / 3600) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-2.5 overflow-y-auto px-3.5 py-3">
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="glass-card rounded-xl p-2 border border-white/10">
            <p className="font-display text-base font-bold text-cyan-400">{joinedQuest ? "18" : "17"}</p>
            <p className="text-[9px] text-slate-400">Quests</p>
          </div>
          <div className="glass-card rounded-xl p-2 border border-white/10">
            <p className="font-display text-base font-bold text-amber-400">6 wks</p>
            <p className="text-[9px] text-slate-400">Streak</p>
          </div>
          <div className="glass-card rounded-xl p-2 border border-white/10">
            <p className="font-display text-base font-bold text-purple-400">11</p>
            <p className="text-[9px] text-slate-400">Badges</p>
          </div>
        </div>

        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Skill Mastery Tree
        </p>

        {[
          { skill: "Photography", pct: 72, level: "Lv 4 Intermediate" },
          { skill: "Guitar", pct: 45, level: "Lv 2 Novice" },
          { skill: "Public Speaking", pct: 28, level: "Lv 1 Starter" },
        ].map((item) => (
          <div key={item.skill} className="glass-card rounded-xl p-2.5 border border-white/10">
            <div className="flex justify-between text-xs font-bold text-white">
              <span>{item.skill}</span>
              <span className="text-cyan-400 text-[10px]">{item.level}</span>
            </div>
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400"
                style={{ width: `${item.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <TabBar active="Profile" onTabSelect={onTabSelect} />
    </>
  );
}

export function DiscoverScreenStatic() {
  return <InteractivePhoneSimulator />;
}
