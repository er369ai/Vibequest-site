export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8 drop-shadow-[0_0_12px_rgba(0,242,254,0.4)]" aria-hidden="true">
        <defs>
          <linearGradient id="vq-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00F2FE" />
            <stop offset="100%" stopColor="#4FACFE" />
          </linearGradient>
          <linearGradient id="vq-b" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF5E3A" />
            <stop offset="100%" stopColor="#FFB800" />
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
        <path d="M33 4 l1.6 3.6 3.6 1.6 -3.6 1.6 -1.6 3.6 -1.6 -3.6 -3.6 -1.6 3.6 -1.6z" fill="#FFB800" />
      </svg>
      <span className="font-display text-xl font-bold tracking-tight">
        <span className="text-white">Vibe</span>{" "}
        <span className="text-gradient-brand">Quest</span>
      </span>
    </span>
  );
}
