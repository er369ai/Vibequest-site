import type { ReactNode } from "react";

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
      <div className="relative w-[290px] shrink-0 rounded-[2.6rem] border border-border bg-ink p-[10px] shadow-lift">
        <div className="relative h-[598px] w-full overflow-hidden rounded-[2.1rem] bg-background">
          <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-ink" />
          <div className="flex h-full flex-col">{children}</div>
        </div>
      </div>
      {label ? (
        <figcaption className="text-sm font-semibold text-muted-foreground">{label}</figcaption>
      ) : null}
    </figure>
  );
}

export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[11px] font-semibold text-foreground/70">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="inline-block h-2 w-2 rounded-full bg-foreground/40" />
        <span className="inline-block h-2 w-3 rounded-sm bg-foreground/40" />
        <span className="inline-block h-2 w-4 rounded-sm bg-foreground/60" />
      </span>
    </div>
  );
}

export function TabBar({ active }: { active: string }) {
  const tabs = ["Quests", "Map", "Skills", "Profile"];
  return (
    <div className="mt-auto grid grid-cols-4 border-t border-border bg-card px-2 py-2.5">
      {tabs.map((t) => (
        <div
          key={t}
          className={`flex flex-col items-center gap-1 text-[10px] font-semibold ${
            t === active ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${t === active ? "bg-primary" : "bg-muted-foreground/40"}`}
          />
          {t}
        </div>
      ))}
    </div>
  );
}
