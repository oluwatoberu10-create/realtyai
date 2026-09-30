"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ChevronLeft,
  ChevronRight,
  FileDown,
  LayoutGrid,
  Maximize,
  Minimize,
  Presentation,
  X,
} from "lucide-react";
import { Logo } from "../Logo";
import { slides, type SlideDef } from "./slides";

const W = 1600;
const H = 900;
const total = slides.length;
const pad = (n: number) => String(n).padStart(2, "0");

function SlideShell({ slide, n, animate = true }: { slide: SlideDef; n: number; animate?: boolean }) {
  const { Body, tone, grid, section, title } = slide;
  const bg = tone === "charcoal" ? "slide-bg-charcoal" : tone === "glow" ? "slide-bg-glow" : tone === "final" ? "slide-bg-final" : "";
  return (
    <section
      className={`slide ${bg} ${animate ? "slide-enter" : ""}`}
      aria-roledescription="slide"
      aria-label={`${n} of ${total}: ${title}`}
    >
      {grid && <div className="slide-grid pointer-events-none absolute inset-0" aria-hidden />}
      <header className="slide-head">
        <Logo />
        <span className="t-label !text-[0.7rem] text-muted">{section}</span>
      </header>
      <div className="slide-body">
        <Body />
      </div>
      <footer className="slide-foot t-label !text-[0.66rem] text-muted/70">
        <span>Realty AI Agency</span>
        <span>
          {pad(n)} / {pad(total)}
        </span>
      </footer>
    </section>
  );
}

function BarButton({
  label,
  onClick,
  children,
  disabled,
  active,
  className = "",
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`grid size-10 place-items-center rounded-full border transition-colors disabled:opacity-30 ${
        active ? "border-accent/50 bg-accent/15 text-ink" : "border-line-strong text-ink/80 hover:border-white/25 hover:bg-white/[0.06] hover:text-ink"
      } focus-visible:outline-2 focus-visible:outline-accent ${className}`}
    >
      {children}
    </button>
  );
}

export function Deck() {
  const [index, setIndex] = useState(0);
  const [present, setPresent] = useState(false);
  const [overview, setOverview] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [peek, setPeek] = useState(false);
  const [scale, setScale] = useState(1);
  const stageArea = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback((n: number) => setIndex(Math.max(0, Math.min(total - 1, n))), []);
  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), []);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  }, []);

  // Deep links: /deck#12 opens slide 12, /deck?present opens in present mode.
  useEffect(() => {
    const readHash = () => {
      const n = parseInt(window.location.hash.replace(/\D/g, ""), 10);
      if (n >= 1 && n <= total) setIndex(n - 1);
    };
    const readLocation = () => {
      readHash();
      if (new URLSearchParams(window.location.search).has("present")) setPresent(true);
    };
    readLocation();
    window.addEventListener("hashchange", readHash);
    return () => window.removeEventListener("hashchange", readHash);
  }, []);

  useEffect(() => {
    const { pathname, search } = window.location;
    window.history.replaceState(null, "", `${pathname}${search}#${index + 1}`);
    stageArea.current?.scrollTo({ top: 0 });
  }, [index]);

  // Fit the 1600×900 stage to whatever space is available.
  useEffect(() => {
    const el = stageArea.current;
    if (!el) return;
    const margin = present ? 0 : 32;
    const measure = () => setScale(Math.min((el.clientWidth - margin) / W, (el.clientHeight - margin) / H));
    // Measure now as well: ResizeObserver only reports on rendered frames (not in hidden tabs).
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [present]);

  useEffect(() => {
    const onChange = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const onControl = e.target instanceof HTMLElement && e.target.closest("button, a");
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
          e.preventDefault();
          next();
          break;
        case " ":
          if (onControl) return;
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case "Home":
          go(0);
          break;
        case "End":
          go(total - 1);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "p":
        case "P":
          setPresent((v) => !v);
          break;
        case "g":
        case "G":
          setOverview((v) => !v);
          break;
        case "Escape":
          setOverview(false);
          if (!document.fullscreenElement) setPresent(false);
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, next, prev, toggleFullscreen]);

  const slide = slides[index];
  const barHidden = present && !peek && !overview;

  return (
    <div
      className={`deck-root fixed inset-0 flex flex-col bg-[#030304] text-ink ${present ? "deck-present" : ""}`}
      onMouseMove={present ? (e) => setPeek(e.clientY > window.innerHeight - 96) : undefined}
    >
      <div className="deck-screen relative flex min-h-0 flex-1 flex-col">
        <main
          ref={stageArea}
          className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain md:flex md:items-center md:justify-center md:overflow-hidden"
          onTouchStart={(e) => (touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY })}
          onTouchEnd={(e) => {
            const start = touch.current;
            if (!start) return;
            const dx = e.changedTouches[0].clientX - start.x;
            const dy = e.changedTouches[0].clientY - start.y;
            if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) (dx < 0 ? next : prev)();
            touch.current = null;
          }}
        >
          <div className="deck-stage relative min-h-full md:min-h-0" style={{ "--s": scale } as CSSProperties}>
            <SlideShell key={index} slide={slide} n={index + 1} />
          </div>
        </main>

        <nav
          aria-label="Presentation controls"
          className={`z-20 flex items-center justify-between gap-3 border-t border-line bg-[#060709]/90 px-3 py-2.5 backdrop-blur-xl transition-transform duration-300 sm:px-5 ${
            present ? "absolute inset-x-0 bottom-0" : "relative"
          } ${barHidden ? "translate-y-full" : "translate-y-0"}`}
        >
          <div className="hidden min-w-0 flex-1 items-center gap-3 lg:flex">
            <span className="t-label truncate !text-[0.68rem] text-muted">{slide.section}</span>
            <span className="text-muted/40">/</span>
            <span className="truncate text-sm text-ink/80">{slide.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <BarButton label="Previous slide" onClick={prev} disabled={index === 0}>
              <ChevronLeft className="size-5" />
            </BarButton>
            <span className="min-w-[4.5rem] text-center font-mono text-sm tabular-nums text-ink/85" aria-live="polite">
              {pad(index + 1)} / {pad(total)}
            </span>
            <BarButton label="Next slide" onClick={next} disabled={index === total - 1}>
              <ChevronRight className="size-5" />
            </BarButton>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2">
            <BarButton label="All slides (G)" onClick={() => setOverview(true)}>
              <LayoutGrid className="size-[18px]" />
            </BarButton>
            <BarButton label={present ? "Exit present mode (P)" : "Present mode (P)"} onClick={() => setPresent((v) => !v)} active={present} className="hidden md:grid">
              <Presentation className="size-[18px]" />
            </BarButton>
            <BarButton label={fullscreen ? "Exit full screen (F)" : "Full screen (F)"} onClick={toggleFullscreen} className="hidden sm:grid">
              {fullscreen ? <Minimize className="size-[18px]" /> : <Maximize className="size-[18px]" />}
            </BarButton>
            <BarButton label="Export PDF" onClick={() => window.print()}>
              <FileDown className="size-[18px]" />
            </BarButton>
          </div>
        </nav>

        {overview && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="All slides"
            className="absolute inset-0 z-30 overflow-y-auto bg-[#050608]/95 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 sm:py-12">
              <div className="flex items-center justify-between">
                <p className="t-label !text-[0.7rem] text-muted">All slides</p>
                <BarButton label="Close" onClick={() => setOverview(false)}>
                  <X className="size-5" />
                </BarButton>
              </div>
              <ol className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {slides.map((s, i) => (
                  <li key={s.title}>
                    <button
                      type="button"
                      onClick={() => {
                        go(i);
                        setOverview(false);
                      }}
                      className={`flex w-full items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-colors ${
                        i === index ? "border-accent/50 bg-accent/10" : "border-line hover:border-line-strong hover:bg-white/[0.03]"
                      }`}
                    >
                      <span className="font-mono text-sm text-muted">{pad(i + 1)}</span>
                      <span className="min-w-0">
                        <span className="block truncate text-[15px] font-medium text-ink">{s.title}</span>
                        <span className="block text-xs text-muted">{s.section}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-muted">
                Keys: ← → or Space to move · G all slides · P present mode · F full screen · Esc close
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Every slide at full size, one per page — only visible when printing / saving as PDF. */}
      <div className="print-deck" aria-hidden>
        {slides.map((s, i) => (
          <div key={s.title} className="print-page">
            <SlideShell slide={s} n={i + 1} animate={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
