import { Bot, Handshake, Plug, Target } from "lucide-react";
import { Accent, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const steps = [
  { icon: Target, title: "Build Your Lead Engine", body: "We identify your ideal real estate prospects and build the lead-generation workflow." },
  { icon: Bot, title: "Deploy Your AI Agent", body: "Your AI agent handles inbound and/or outbound conversations." },
  { icon: Plug, title: "Connect Your CRM", body: "Every lead, conversation, qualification, and appointment flows into your existing system." },
  {
    icon: Handshake,
    title: "Turn Conversations Into Opportunities",
    body: "Your team receives qualified prospects and booked appointments instead of chasing every lead manually.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="relative scroll-mt-20 py-28 sm:py-36">
      <Container>
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          align="center"
          title={
            <>
              Four steps to a pipeline that <Accent>runs itself.</Accent>
            </>
          }
          description="A clear build process — scoped with you, implemented for you, and connected to the tools you already rely on."
        />

        <ol className="relative mt-20 grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* connection line (desktop) */}
          <span className="flow-line absolute left-[12.5%] right-[12.5%] top-7 hidden h-px lg:block" aria-hidden />
          {/* connection line (mobile) */}
          <span className="flow-line-v absolute bottom-6 left-7 top-7 w-px lg:hidden" aria-hidden />

          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <Reveal delay={i * 120} className="flex gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full border border-line-strong bg-canvas shadow-[0_0_0_6px_var(--color-canvas)]">
                  <s.icon className="size-5 text-ink" aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-soft lg:mt-8">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-ink">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted lg:mx-auto lg:max-w-[240px]">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
