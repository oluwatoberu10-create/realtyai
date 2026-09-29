"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "./ui/primitives";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-canvas/75 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-[1200px] items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="#top" className="rounded-md focus-visible:outline-2 focus-visible:outline-accent" aria-label={`${site.name} home`}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <Button href={site.bookingUrl}>Book a Strategy Call</Button>
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full border border-line-strong text-ink lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-canvas px-5 pb-10 pt-6 sm:px-8 lg:hidden"
      >
        <ul className="flex flex-col">
          {site.nav.map((item) => (
            <li key={item.href} className="border-b border-line">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-5 text-2xl font-medium tracking-[-0.02em] text-ink"
              >
                {item.label}
                <span className="font-mono text-xs text-muted" aria-hidden>
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
        <Button href={site.bookingUrl} size="lg" arrow className="mt-8 w-full">
          Book a Strategy Call
        </Button>
        <p className="mt-4 text-center text-sm text-muted">Built for agents, brokers & real estate teams.</p>
      </div>
    </header>
  );
}
