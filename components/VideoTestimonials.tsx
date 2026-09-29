"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Accent, Eyebrow } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const videos = [
  { src: "/videos/testimonial-1.mp4", poster: "/videos/testimonial-1.jpg", duration: "0:18" },
  { src: "/videos/testimonial-2.mp4", poster: "/videos/testimonial-2.jpg", duration: "1:30" },
];

function VideoCard({ src, poster, duration, index }: (typeof videos)[number] & { index: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    // only one testimonial plays at a time
    document.querySelectorAll<HTMLVideoElement>("video[data-testimonial]").forEach((v) => v !== ref.current && v.pause());
    setStarted(true);
    ref.current?.play();
  };

  return (
    <figure className="card-glow group relative aspect-[9/16] overflow-hidden rounded-3xl border border-line bg-surface">
      <video
        ref={ref}
        data-testimonial
        src={src}
        poster={poster}
        preload="none"
        playsInline
        controls={started}
        onPlay={() => setStarted(true)}
        onEnded={() => setStarted(false)}
        className="absolute inset-0 size-full object-cover"
        aria-label={`Client video testimonial ${index + 1}`}
      />

      {!started && (
        <button
          type="button"
          onClick={play}
          className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-canvas/90 via-canvas/10 to-canvas/30 p-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent sm:p-6"
          aria-label={`Play client video testimonial ${index + 1}`}
        >
          <span className="self-start rounded-full border border-white/15 bg-canvas/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/80 backdrop-blur-md">
            {duration}
          </span>

          <span className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-canvas shadow-[0_8px_30px_-6px_rgba(61,107,255,0.7)] transition-transform duration-500 group-hover:scale-110 sm:size-12">
              <Play className="ml-0.5 size-4 fill-canvas sm:size-[18px]" aria-hidden />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-gold">Client story</span>
              <span className="mt-0.5 block text-sm font-medium text-ink sm:text-base">Watch the testimonial</span>
            </span>
          </span>
        </button>
      )}
    </figure>
  );
}

export function VideoTestimonials() {
  return (
    <div className="mt-24 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <Reveal>
        <Eyebrow>Video testimonials</Eyebrow>
        <h3 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.035em] text-ink sm:text-4xl">
          Hear it from the people <Accent>we build for.</Accent>
        </h3>
        <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted">
          Real conversations about what changed once their lead follow-up stopped depending on someone being free to
          reply.
        </p>
      </Reveal>

      <ul className="grid grid-cols-2 gap-3 sm:gap-5">
        {videos.map((v, i) => (
          <li key={v.src} className={i === 1 ? "lg:translate-y-10" : ""}>
            <Reveal delay={i * 100}>
              <VideoCard {...v} index={i} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
