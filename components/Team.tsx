import Image from "next/image";
import { Accent, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

// Add a member by dropping their photo in /public/team and adding a row here.
const team = [
  { name: "Toby Wilson", role: "AI Agent Specialist", photo: "/team/toby-wilson.png" },
  { name: "P.J Oche", role: "AI Agent Specialist", photo: "/team/pj-oche.jpg" },
];

export function Team() {
  return (
    <section id="team" aria-labelledby="team-title" className="relative scroll-mt-20 border-t border-line py-28 sm:py-36">
      <Container>
        <SectionHeading
          id="team-title"
          eyebrow="Meet the team"
          align="center"
          title={
            <>
              The people behind <Accent>your AI system.</Accent>
            </>
          }
          description="You work directly with the specialists who design, build, and deploy your agents — not a hand-off to a support queue."
        />

        <ul className="mx-auto mt-16 grid max-w-3xl gap-5 sm:grid-cols-2">
          {team.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={i * 100}>
                <figure className="card-glow group overflow-hidden rounded-3xl border border-line bg-surface/60">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={m.photo}
                      alt={`Portrait of ${m.name}`}
                      fill
                      sizes="(min-width: 640px) 380px, 100vw"
                      className="object-cover brightness-[0.85] grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-100 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/10 to-transparent" aria-hidden />
                  </div>
                  <figcaption className="relative -mt-20 px-7 pb-7">
                    <p className="text-2xl font-semibold tracking-[-0.03em] text-ink">{m.name}</p>
                    <p className="mt-1.5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-soft">
                      <span className="h-px w-4 bg-accent" aria-hidden />
                      {m.role}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
