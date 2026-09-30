import { Quote } from "lucide-react";
import { Accent, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { VideoTestimonials } from "./VideoTestimonials";
import { testimonials } from "@/lib/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("");
}

export function SocialProof() {
  return (
    <section aria-labelledby="proof-title" className="relative border-t border-line py-28 sm:py-36">
      <Container>
        <SectionHeading
          id="proof-title"
          eyebrow="Client stories"
          align="center"
          title={
            <>
              Trusted by real estate <Accent>professionals</Accent>
            </>
          }
        />

        {/* typographic wordmarks of the firms quoted below */}
        <Reveal>
          <ul
            className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-5 border-y border-line py-8"
            aria-label="Client firms"
          >
            {testimonials.map((t) => (
              <li key={t.company} className="font-serif text-xl italic tracking-[-0.01em] text-ink/55 sm:text-2xl">
                {t.company}
              </li>
            ))}
          </ul>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <li key={t.name}>
              <Reveal delay={(i % 2) * 90} className="h-full">
                <figure className="card-glow flex h-full flex-col rounded-3xl border border-line bg-surface/60 p-8 sm:p-10">
                  <Quote className="size-6 text-gold/70" aria-hidden />
                  <blockquote className="mt-6 flex-1 text-pretty text-[17px] leading-relaxed text-ink/85 sm:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                    <span
                      className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong bg-gradient-to-b from-white/[0.08] to-white/[0.02] text-sm font-medium text-ink/80"
                      aria-hidden
                    >
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block font-medium text-ink">{t.name}</span>
                      <span className="block text-sm text-muted">
                        {t.role} — {t.company}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <VideoTestimonials />
      </Container>
    </section>
  );
}
