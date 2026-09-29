"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Button } from "./ui/primitives";

/** Sticky bottom CTA on small screens: appears after the hero, hides over the final CTA. */
export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const book = document.getElementById("book");
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const atFinal = book ? book.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(pastHero && !atFinal);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/85 px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl transition-all duration-500 sm:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <Button href={site.bookingUrl} arrow className="w-full" >
        Book a Strategy Call
      </Button>
    </div>
  );
}
