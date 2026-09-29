import { Check } from "lucide-react";
import { site } from "@/lib/site";
import { Accent, Button, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

type Plan = {
  name: string;
  price: string;
  pitch: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$500",
    pitch: "For real estate professionals who need a simple AI system.",
    features: [
      "Basic AI lead-generation setup",
      "Lead list setup",
      "Basic AI agent",
      "Lead capture",
      "Basic qualification workflow",
      "Basic follow-up automation",
      "CRM connection",
      "Basic setup & configuration",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$1,500",
    pitch: "For agents and teams ready to automate inbound, outbound, and booking.",
    features: [
      "Everything in Starter",
      "Advanced lead-generation system",
      "AI inbound agent",
      "AI outbound workflow",
      "Lead qualification",
      "Automated follow-up",
      "Appointment booking",
      "CRM automation",
      "Multi-step lead nurturing",
      "Custom workflow setup",
    ],
    cta: "Build My System",
    featured: true,
  },
  {
    name: "Scale",
    price: "$3,000",
    pitch: "The full AI sales system for brokers, teams, and real estate businesses.",
    features: [
      "Everything in Growth",
      "Custom AI agents",
      "Advanced inbound & outbound workflows",
      "Advanced CRM automation",
      "Lead re-engagement system",
      "Multiple AI agents",
      "Advanced appointment automation",
      "Custom integrations",
      "Custom dashboards / reporting",
      "Advanced workflow architecture",
      "Priority implementation",
    ],
    cta: "Build My AI Sales System",
  },
];

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="relative scroll-mt-20 border-t border-line bg-surface/40 py-28 sm:py-36">
      <Container>
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          align="center"
          title={
            <>
              Choose the System <Accent>Your Business Needs</Accent>
            </>
          }
          description="Three clear starting points. Every system is scoped with you on a strategy call before any work begins."
        />

        <ul className="mt-16 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 90} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-3xl p-8 sm:p-9 ${
                    p.featured
                      ? "featured-plan border border-transparent bg-canvas"
                      : "border border-line bg-canvas/70"
                  }`}
                  aria-label={`${p.name} plan`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">{p.name}</h3>
                    {p.featured && (
                      <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-gold">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-6 text-[3.4rem] font-semibold leading-none tracking-[-0.05em] text-ink">{p.price}</p>
                  <p className="mt-4 min-h-[3rem] text-[15px] leading-relaxed text-muted">{p.pitch}</p>

                  <Button
                    href={site.bookingUrl}
                    variant={p.featured ? "primary" : "secondary"}
                    arrow
                    className="mt-8 w-full"
                  >
                    {p.cta}
                  </Button>

                  <ul className="mt-9 space-y-3.5 border-t border-line pt-8">
                    {p.features.map((f) => {
                      const inherits = f.startsWith("Everything in");
                      return (
                        <li key={f} className="flex gap-3 text-[14.5px]">
                          <Check
                            className={`mt-0.5 size-4 shrink-0 ${p.featured ? "text-accent-soft" : "text-ink/50"}`}
                            aria-hidden
                          />
                          <span className={inherits ? "font-medium text-ink" : "text-ink/80"}>{f}</span>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-relaxed text-muted">
            Third-party platforms your system runs on — such as your CRM, phone numbers, messaging, or data providers — may
            carry their own usage fees. We&apos;ll map these out with you before you commit.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
