import { site } from "@/lib/site";
import { Accent, Button, Container } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

export function FinalCTA() {
  return (
    <section id="book" aria-labelledby="cta-title" className="relative px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="cta-panel relative overflow-hidden rounded-[32px] border border-line py-28 sm:py-40">
        <div className="cta-backdrop pointer-events-none absolute inset-0" aria-hidden />
        <Container className="relative text-center">
          <Reveal>
            <h2
              id="cta-title"
              className="mx-auto max-w-4xl text-balance text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-6xl lg:text-7xl"
            >
              Stop Letting Real Estate Leads <Accent>Slip Through the Cracks.</Accent>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
              Build an AI system that finds prospects, starts conversations, follows up, qualifies leads, and helps turn
              opportunities into appointments.
            </p>
            <div className="mt-11 flex justify-center">
              <Button href={site.bookingUrl} size="lg" arrow>
                Book a Strategy Call
              </Button>
            </div>
            <p className="mt-6 font-serif text-lg italic text-ink/60">Let&apos;s build your real estate AI system.</p>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
