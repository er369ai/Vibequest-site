import { StatusBar, TabBar } from "./PhoneFrame";

const chip = "rounded-full px-2.5 py-1 text-[10px] font-bold";

export function DiscoverScreen() {
  return (
    <>
      <div className="bg-gradient-deep px-5 pb-5 text-ink-foreground">
        <StatusBar />
        <p className="mt-2 text-[11px] font-semibold uppercase tracking-widest opacity-70">
          Kyrenia · Tonight
        </p>
        <h3 className="mt-1 text-xl font-bold text-ink-foreground">Hey Deniz, pick a vibe</h3>
        <div className="mt-3 flex gap-2">
          <span className={`${chip} bg-primary text-primary-foreground`}>🌙 Chill</span>
          <span className={`${chip} bg-ink-foreground/15 text-ink-foreground`}>⚡ High-Energy</span>
        </div>
      </div>
      <div className="flex-1 space-y-3 overflow-hidden px-4 py-4">
        {[
          {
            t: "Golden-hour beach shoot",
            s: "Photography · 4 going · 0.8 km",
            xp: "+120 XP",
            tone: "bg-accent/12 text-accent",
          },
          {
            t: "Open-chord jam at Kordon",
            s: "Guitar · 3 going · 1.4 km",
            xp: "+95 XP",
            tone: "bg-primary/12 text-primary",
          },
          {
            t: "Spanish-only café hour",
            s: "Language · 6 going · 0.4 km",
            xp: "+110 XP",
            tone: "bg-ink/12 text-ink",
          },
          {
            t: "Sunset run + smoothie",
            s: "Social · 9 going · 2.1 km",
            xp: "+60 XP",
            tone: "bg-gold/25 text-gold-foreground",
          },
        ].map((q) => (
          <div key={q.t} className="rounded-2xl border border-border bg-card p-3 shadow-soft">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-bold leading-tight">{q.t}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{q.s}</p>
              </div>
              <span className={`${chip} ${q.tone}`}>{q.xp}</span>
            </div>
          </div>
        ))}
      </div>
      <TabBar active="Quests" />
    </>
  );
}

export function QuestDetailScreen() {
  return (
    <>
      <div className="bg-gradient-warm px-5 pb-6 text-accent-foreground">
        <StatusBar />
        <p className="mt-2 text-[11px] font-bold uppercase tracking-widest opacity-80">
          Skill Quest · Photography
        </p>
        <h3 className="mt-1 text-2xl font-bold leading-tight text-accent-foreground">
          Golden-hour shoot at Karaoğlanoğlu beach
        </h3>
        <p className="mt-2 text-[11px] opacity-90">Today 18:40 · 90 min · 4 spots left</p>
      </div>
      <div className="flex-1 space-y-4 px-5 py-4">
        <div className="rounded-2xl bg-muted p-3">
          <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
            The flow
          </p>
          <p className="mt-1 text-xs font-semibold">
            Discover → Join → Meet → Do → Verify → Earn → Progress
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
            Who&apos;s going
          </p>
          <div className="mt-2 space-y-2">
            {[
              ["Elif · Lv 6", "Same level", "bg-primary/12 text-primary"],
              ["Mert · Lv 12", "Higher level", "bg-ink/12 text-ink"],
              ["Ayça · Mentor", "Guidance", "bg-accent/12 text-accent"],
            ].map(([n, r, tone]) => (
              <div
                key={n}
                className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2"
              >
                <span className="text-xs font-semibold">{n}</span>
                <span className={`${chip} ${tone}`}>{r}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-gradient-deep px-4 py-3 text-ink-foreground">
          <div>
            <p className="text-[10px] uppercase tracking-wide opacity-70">Reward</p>
            <p className="text-sm font-bold">120 XP · 2× multiplier</p>
          </div>
          <span className="rounded-full bg-gold px-3 py-1.5 text-[11px] font-bold text-gold-foreground">
            Join quest
          </span>
        </div>
      </div>
    </>
  );
}

export function QrScreen() {
  return (
    <>
      <div className="bg-card px-5">
        <StatusBar />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          Verify at partner
        </p>
        <h3 className="text-lg font-bold leading-tight">Kordon Coffee Roasters</h3>
        <div className="rounded-3xl border border-border bg-card p-4 shadow-soft">
          <div
            className="h-40 w-40 rounded-xl"
            style={{
              backgroundImage:
                "conic-gradient(from 0deg, var(--ink) 0 25%, transparent 0 50%, var(--ink) 0 75%, transparent 0)",
              backgroundSize: "16px 16px",
            }}
          />
        </div>
        <p className="text-[11px] text-muted-foreground">
          Scan verifies attendance only — consent-based, purpose-specific.
        </p>
        <div className="w-full rounded-2xl bg-gold/25 px-4 py-3">
          <p className="text-sm font-bold text-gold-foreground">Unlocked: 70 XP + free filter</p>
        </div>
      </div>
      <TabBar active="Map" />
    </>
  );
}

export function ProgressScreen() {
  return (
    <>
      <div className="bg-gradient-deep px-5 pb-6 text-ink-foreground">
        <StatusBar />
        <div className="mt-3 flex items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-foreground/15 text-lg font-bold">
            DK
          </div>
          <div>
            <p className="text-base font-bold text-ink-foreground">Deniz K.</p>
            <p className="text-[11px] opacity-75">Level 9 · Pro member</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="h-2 w-full overflow-hidden rounded-full bg-ink-foreground/20">
            <div className="h-full w-[68%] rounded-full bg-gradient-warm" />
          </div>
          <p className="mt-1 text-[10px] opacity-75">2 480 / 3 600 XP to Level 10</p>
        </div>
      </div>
      <div className="flex-1 space-y-3 px-5 py-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["17", "Quests"],
            ["6", "Week streak"],
            ["11", "Badges"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-2xl border border-border bg-card p-3 text-center">
              <p className="text-lg font-bold text-primary">{v}</p>
              <p className="text-[10px] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
        <p className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
          Skill goals
        </p>
        {[
          ["Photography", 72],
          ["Guitar", 45],
          ["Public speaking", 28],
        ].map(([s, p]) => (
          <div key={s as string} className="rounded-2xl border border-border bg-card p-3">
            <div className="flex justify-between text-xs font-semibold">
              <span>{s}</span>
              <span className="text-muted-foreground">{p}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${p}%` }} />
            </div>
          </div>
        ))}
      </div>
      <TabBar active="Profile" />
    </>
  );
}

export function MatchScreen() {
  return (
    <>
      <div className="bg-card px-5">
        <StatusBar />
        <h3 className="mt-2 text-lg font-bold">Matching · Guitar</h3>
        <p className="text-[11px] text-muted-foreground">Choose the relationship you want</p>
      </div>
      <div className="flex-1 space-y-3 px-4 py-4">
        {[
          ["Same level", "Practice together", "Two beginners run open chords", "bg-primary"],
          ["Higher level", "Learn from ahead", "Intermediate guides your song", "bg-accent"],
          ["Mentor", "Real experience", "Acoustic session with a coach", "bg-ink"],
        ].map(([t, p, e, tone]) => (
          <div key={t as string} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${tone}`} />
              <p className="text-sm font-bold">{t}</p>
            </div>
            <p className="mt-1 text-[11px] font-semibold text-muted-foreground">{p}</p>
            <p className="mt-2 text-xs">{e}</p>
          </div>
        ))}
        <div className="rounded-2xl bg-muted p-3 text-[11px] text-muted-foreground">
          Weighted by distance, availability, vibe preference and past completion.
        </div>
      </div>
      <TabBar active="Skills" />
    </>
  );
}
