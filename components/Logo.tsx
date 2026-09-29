import { site } from "@/lib/site";

/** Roofline monogram + wordmark. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative grid size-8 place-items-center rounded-[9px] border border-line-strong bg-gradient-to-b from-white/[0.09] to-white/[0.02]">
        <svg viewBox="0 0 20 20" className="size-[18px]" aria-hidden>
          <path d="M3 10.5 10 4l7 6.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-ink" />
          <path d="M6 9.5V16h8V9.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-ink/50" />
          <circle cx="10" cy="12.5" r="1.6" className="fill-accent" />
        </svg>
      </span>
      <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.02em] text-ink">{site.name}</span>
    </span>
  );
}
