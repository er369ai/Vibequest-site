export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true">
        <defs>
          <linearGradient id="vq-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.63 0.114 184)" />
            <stop offset="100%" stopColor="oklch(0.41 0.152 260)" />
          </linearGradient>
          <linearGradient id="vq-b" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.7 0.176 48)" />
            <stop offset="100%" stopColor="oklch(0.83 0.16 85)" />
          </linearGradient>
        </defs>
        <path
          d="M7 8 L18 32 L24 20"
          fill="none"
          stroke="url(#vq-a)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 18 C22 8, 30 8, 33 14"
          fill="none"
          stroke="url(#vq-b)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path d="M33 4 l1.6 3.6 3.6 1.6 -3.6 1.6 -1.6 3.6 -1.6 -3.6 -3.6 -1.6 3.6 -1.6z" fill="oklch(0.83 0.16 85)" />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight">
        <span className="text-ink">Vibe</span> <span className="text-primary">Quest</span>
      </span>
    </span>
  );
}
