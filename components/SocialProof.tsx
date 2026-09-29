import { Quote } from "lucide-react";
import { Accent, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { VideoTestimonials } from "./VideoTestimonials";

const testimonials = [
  {
    quote:
      "Realty AI Agency helped us take a lot of the manual work out of our lead follow-up. Our AI system now responds to new inquiries, asks the right questions, and helps move qualified prospects toward an appointment. It has made our sales process much more organized.",
    name: "Marcus Reynolds",
    role: "Managing Broker",
    company: "Reynolds Property Group",
  },
  {
    quote:
      "The biggest change for us was how quickly we could respond to new leads. Instead of letting inquiries sit until someone on our team was available, our AI system could start the conversation right away and keep prospects engaged.",
    name: "Jessica Carter",
    role: "Founder",
    company: "Carter & Co. Realty",
  },
  {
    quote:
      "We had a large number of older leads sitting in our CRM that we weren't doing much with. Realty AI Agency built a re-engagement workflow that helped us start conversations with those prospects again. It gave our team a much better way to stay on top of our pipeline.",
    name: "Daniel Brooks",
    role: "Real Estate Team Lead",
    company: "Brooks Realty Group",
  },
  {
    quote:
      "We weren't looking for another basic chatbot. We wanted an actual AI system that could fit into our sales process. Realty AI Agency helped us connect lead generation, AI conversations, qualification, follow-up, and appointment booking into one workflow.",
    name: "Lauren Mitchell",
    role: "CEO",
    company: "Mitchell Real Estate Partners",
  },
];

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
