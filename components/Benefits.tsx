import { CalendarCheck, Gauge, LayoutList, ListFilter, Repeat, Zap } from "lucide-react";
import { Accent, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const benefits = [
  { icon: Repeat, title: "Less Manual Follow-Up", body: "Let automation handle repetitive conversations." },
  { icon: Zap, title: "Faster Response Times", body: "Respond to new inquiries while the opportunity is still fresh." },
  { icon: Gauge, title: "More Consistent Prospecting", body: "Keep your pipeline active without relying entirely on manual outreach." },
  { icon: ListFilter, title: "Better Lead Qualification", body: "Separate serious prospects from people who aren't ready." },
  { icon: CalendarCheck, title: "More Appointments", body: "Move qualified prospects toward conversations and appointments." },
  { icon: LayoutList, title: "A Cleaner Pipeline", body: "Keep your CRM organized and automatically updated." },
];

export function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="relative border-t border-line py-28 sm:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="benefits-title"
              eyebrow="What changes"
              title={
                <>
                  Less chasing. <Accent>More conversations.</Accent>
                </>
              }
              description="The goal is simple: give your team back the hours spent on repetitive follow-up, and make sure no serious prospect ever waits for a reply."
            />
          </div>

          <ul className="grid gap-x-10 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <li key={b.title} className="border-t border-line">
                <Reveal delay={(i % 2) * 80} className="py-8">
                  <b.icon className="size-5 text-accent-soft" aria-hidden />
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-ink">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{b.body}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
