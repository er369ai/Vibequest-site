import type { ReactNode } from "react";
import { Zap, Compass, Target, User } from "lucide-react";

export function PhoneFrame({
  children,
  label,
  className = "",
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <figure className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="relative w-[300px] shrink-0 rounded-[2.8rem] border border-white/20 bg-slate-950 p-[10px] shadow-[0_30px_70px_-15px_rgba(0,242,254,0.25)] transition-transform duration-500 hover:scale-[1.02]">
        {/* Outer frame glossy shine */}
        <div className="pointer-events-none absolute inset-0 rounded-[2.8rem] bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-50" />
        
        <div className="relative h-[600px] w-full overflow-hidden rounded-[2.2rem] bg-[#0B0F17] text-slate-100 flex flex-col justify-between">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-2.5 z-30 flex h-5 w-24 -translate-x-1/2 items-center justify-between rounded-full bg-slate-950 px-2.5 shadow-inner">
            <div className="h-2 w-2 rounded-full bg-slate-800" />
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-500/80 animate-pulse" />
          </div>

          {/* Screen Content */}
          <div className="flex h-full flex-col">{children}</div>
        </div>
      </div>
      {label ? (
        <figcaption className="text-xs font-bold uppercase tracking-widest text-slate-400">{label}</figcaption>
      ) : null}
    </figure>
  );
}

export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3.5 pb-1.5 text-[11px] font-bold text-slate-300">
      <span>9:41</span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
        <span className="inline-block h-2 w-3 rounded-xs bg-slate-400" />
        <span className="inline-block h-2.5 w-4 rounded-xs border border-slate-300 bg-cyan-400" />
      </span>
    </div>
  );
}

export function TabBar({
  active,
  onTabSelect,
}: {
  active: string;
  onTabSelect?: (tab: string) => void;
}) {
  const tabs = [
    { id: "Quests", icon: Zap, label: "Quests" },
    { id: "Radar", icon: Compass, label: "Radar" },
    { id: "Skills", icon: Target, label: "Skills" },
    { id: "Profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="z-20 grid grid-cols-4 border-t border-white/10 bg-slate-950/90 px-2 py-2 backdrop-blur-xl">
      {tabs.map((t) => {
        const IconComponent = t.icon;
        const isActive = t.id === active;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onTabSelect?.(t.id)}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition-all ${
              isActive ? "text-cyan-400 scale-105" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <IconComponent className="h-3.5 w-3.5" />
            <span>{t.label}</span>
            {isActive && (
              <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_6px_#00F2FE]" />
            )}
          </button>
        );
      })}
    </div>
  );
}
