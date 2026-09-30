import type { CSSProperties, ReactNode } from "react";
import { ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { site } from "@/lib/site";

export { Accent } from "../ui/primitives";

/** Stagger helper for `.rise` elements: d(0), d(1)… */
export const d = (i: number): CSSProperties => ({ animationDelay: `${100 + i * 70}ms` });

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`t-label inline-flex items-center gap-3 text-muted ${className}`}>
      <span className="h-px w-7 bg-accent" aria-hidden />
      {children}
    </p>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  sub?: ReactNode;
  center?: boolean;
  className?: string;
  size?: "h1" | "display";
};

export function Heading({ eyebrow, title, sub, center, className = "", size = "h1" }: HeadingProps) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && (
        <div className="rise" style={d(0)}>
          <Label>{eyebrow}</Label>
        </div>
      )}
      <h2 className={`rise mt-4 text-balance text-ink @3xl:mt-5 ${size === "display" ? "t-display" : "t-h1"}`} style={d(1)}>
        {title}
      </h2>
      {sub && (
        <p className={`rise t-lead mt-4 text-pretty text-muted @3xl:mt-5 ${center ? "mx-auto" : ""}`} style={d(2)}>
          {sub}
        </p>
      )}
    </div>
  );
}

export function Panel({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`rounded-[22px] border border-line bg-surface/80 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBox({ icon: Icon, accent = false, className = "" }: { icon: LucideIcon; accent?: boolean; className?: string }) {
  return (
    <span
      className={`grid size-11 shrink-0 place-items-center rounded-xl border @3xl:size-14 @3xl:rounded-2xl ${
        accent
          ? "border-accent/35 bg-gradient-to-b from-accent/25 to-accent/5 text-accent-soft"
          : "border-line-strong bg-surface-2 text-ink/85"
      } ${className}`}
    >
      <Icon className="size-5 @3xl:size-6" aria-hidden />
    </span>
  );
}

/** Primary call to action — always opens the booking link in a new tab. */
export function BookCTA({ children, size = "md", className = "" }: { children: ReactNode; size?: "md" | "xl"; className?: string }) {
  const sizes =
    size === "xl"
      ? "h-14 px-8 text-base @3xl:h-[88px] @3xl:px-14 @3xl:text-[1.7rem] @3xl:gap-4"
      : "h-12 px-6 text-[15px] @3xl:h-16 @3xl:px-9 @3xl:text-xl";
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink font-semibold tracking-[-0.015em] text-canvas shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_18px_60px_-12px_rgba(61,107,255,0.75)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_22px_70px_-10px_rgba(61,107,255,0.95)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${sizes} ${className}`}
    >
      {children}
      <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 @3xl:size-7" aria-hidden />
    </a>
  );
}

/** Arrow between steps: points down on phones, right on the stage. */
export function StepArrow({ className = "" }: { className?: string }) {
  return (
    <span className={`grid place-items-center text-white/25 ${className}`} aria-hidden>
      <ArrowRight className="size-4 rotate-90 @3xl:size-5 @3xl:rotate-0" />
    </span>
  );
}

export function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`t-small inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-ink/85 @3xl:px-4 @3xl:py-2 ${className}`}>
      {children}
    </span>
  );
}

/** Architectural floor-plan line drawing used as quiet real estate imagery. */
export function FloorPlan({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 420" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="square">
        {/* outer walls with window gaps */}
        <path d="M20 20H190M250 20H460M520 20H620V150M620 210V400H390M330 400H20V250M20 190V20" strokeWidth="5" />
        {/* windows */}
        <path d="M190 16V24M250 16V24M190 20H250M460 16V24M520 16V24M460 20H520M616 150H624M616 210H624M620 150V210M390 396V404M330 396V404M330 400H390M16 190H24M16 250H24M20 190V250" strokeWidth="1.2" />
        {/* interior walls */}
        <path d="M250 20V150M250 205V260H20" strokeWidth="3.5" />
        <path d="M430 20V120M430 175V260H300" strokeWidth="3.5" />
        <path d="M430 260V300M430 350V400" strokeWidth="3.5" />
        <path d="M520 260H620" strokeWidth="3.5" />
        {/* door swings */}
        <path d="M250 150A55 55 0 0 1 305 205" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M250 150V205" strokeWidth="1" />
        <path d="M430 120A55 55 0 0 0 375 175" strokeWidth="1" strokeDasharray="3 4" />
        <path d="M430 120V175" strokeWidth="1" />
        <path d="M430 300A50 50 0 0 1 480 350" strokeWidth="1" strokeDasharray="3 4" />
        {/* kitchen island + counters */}
        <rect x="300" y="300" width="80" height="34" rx="2" strokeWidth="1.2" />
        <path d="M440 30V110M440 30H610" strokeWidth="1.2" />
        {/* dimension line */}
        <path d="M20 412H620M20 406V418M620 406V418" strokeWidth="0.8" />
      </g>
      <g fill="currentColor" fontFamily="var(--font-mono), monospace" fontSize="11" letterSpacing="2.5">
        <text x="70" y="140">BEDROOM</text>
        <text x="290" y="90">BATH</text>
        <text x="480" y="80">KITCHEN</text>
        <text x="90" y="340">LIVING</text>
        <text x="480" y="215">DINING</text>
        <text x="505" y="340">ENTRY</text>
      </g>
    </svg>
  );
}
