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
      <div className="relative w-[300px] shrink-0 rounded-[2.8rem] border border-slate-300 bg-slate-900 p-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:scale-[1.02]">
        {/* Outer frame glossy shine */}
        <div className="pointer-events-none absolute inset-0 rounded-[2.8rem] bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40" />
        
        <div className="relative h-[600px] w-full overflow-hidden rounded-[2.2rem] bg-slate-50 text-slate-900 flex flex-col justify-between">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-2.5 z-30 flex h-5 w-24 -translate-x-1/2 items-center justify-between rounded-full bg-slate-950 px-2.5 shadow-inner">
            <div className="h-2 w-2 rounded-full bg-slate-800" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
          </div>

          {/* Screen Content */}
          <div className="flex h-full flex-col">{children}</div>
        </div>
      </div>
      {label ? (
        <figcaption className="text-xs font-bold uppercase tracking-widest text-slate-600">{label}</figcaption>
      ) : null}
    </figure>
  );
}

export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3.5 pb-1.5 text-[11px] font-bold text-slate-800">
      <span>9:41</span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block h-2 w-2 rounded-full bg-blue-600" />
        <span className="inline-block h-2 w-3 rounded-xs bg-slate-400" />
        <span className="inline-block h-2.5 w-4 rounded-xs border border-slate-600 bg-blue-600" />
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
    <div className="z-20 grid grid-cols-4 border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur-xl">
      {tabs.map((t) => {
        const IconComponent = t.icon;
        const isActive = t.id === active;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onTabSelect?.(t.id)}
            className={`flex flex-col items-center gap-0.5 text-[10px] font-bold transition-all ${
              isActive ? "text-blue-600 scale-105" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            <IconComponent className="h-3.5 w-3.5" />
            <span>{t.label}</span>
            {isActive && (
              <span className="h-1 w-1 rounded-full bg-blue-600" />
            )}
          </button>
        );
      })}
    </div>
  );
}
