import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
      <span className="h-px w-6 bg-accent" aria-hidden />
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", id }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-5 text-balance text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-pretty text-lg leading-relaxed text-muted ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

/** The serif italic accent used for one or two words per headline. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal italic tracking-[-0.01em]">{children}</span>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", size = "md", arrow = false, className = "" }: ButtonProps) {
  const external = href.startsWith("http");
  const sizes = size === "lg" ? "h-13 px-7 text-[15px]" : "h-11 px-5 text-sm";
  const variants = {
    primary:
      "bg-ink text-canvas hover:bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_30px_-8px_rgba(59,107,255,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_10px_40px_-6px_rgba(59,107,255,0.75)]",
    secondary: "border border-line-strong bg-white/[0.03] text-ink hover:border-white/25 hover:bg-white/[0.06]",
    ghost: "text-ink/80 hover:text-ink",
  }[variant];

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${sizes} ${variants} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
      )}
    </a>
  );
}
