import { Check, Database, PhoneIncoming, Send, Target, type LucideIcon } from "lucide-react";
import { Accent, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

type Solution = {
  n: string;
  icon: LucideIcon;
  title: string;
  body: string;
  listLabel: string;
  items: string[];
  note?: string;
};

const solutions: Solution[] = [
  {
    n: "01",
    icon: Target,
    title: "Lead Generation",
    body: "Targeted real estate lead lists and prospecting systems, built around your market and the clients you actually want.",
    listLabel: "Prospect segments",
    items: ["Homeowners", "Buyers", "Sellers", "Investors", "Expired listings", "FSBO prospects", "Absentee owners", "Property owners", "Local property opportunities"],
    note: "Built on reputable, properly licensed data sources — never data we aren't permitted to use.",
  },
  {
    n: "02",
    icon: PhoneIncoming,
    title: "AI Inbound Agent",
    body: "Every incoming lead gets an immediate, natural response — then gets qualified, informed, and moved toward an appointment.",
    listLabel: "Responds across",
    items: ["Website chat", "SMS", "Phone", "Email", "Other connected channels"],
    note: "Answers questions, qualifies prospects, collects details, and helps schedule appointments.",
  },
  {
    n: "03",
    icon: Send,
    title: "AI Outbound Agent",
    body: "Systems that help start conversations with prospects through approved communication channels — consistently, every day.",
    listLabel: "What it handles",
    items: ["Contact prospects", "Start conversations", "Qualify interest", "Follow up", "Handle common questions", "Route qualified prospects", "Book appointments"],
    note: "Designed around consent, opt-outs, and the outreach rules that apply in your market.",
  },
  {
    n: "04",
    icon: Database,
    title: "CRM & Follow-Up Automation",
    body: "Your AI system plugs into the CRM you already use, so every conversation becomes a clean, actionable record.",
    listLabel: "Automations",
    items: ["Create leads automatically", "Update lead stages", "Trigger follow-ups", "Notify agents", "Re-engage old leads", "Track conversations", "Schedule appointments"],
    note: "Integrates with commonly used CRM and automation platforms where supported.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="relative scroll-mt-20 border-t border-line bg-surface/40 py-28 sm:py-36">
      <Container>
        <SectionHeading
          id="solutions-title"
          eyebrow="The solution"
          title={
            <>
              One AI System. <Accent>From Prospect to Appointment.</Accent>
            </>
          }
          description="We don't sell a chatbot. We design a custom system around how your business already works — your market, your lead sources, your CRM, your calendar — and connect every step."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 90} className="h-full">
              <article className="card-glow group relative flex h-full flex-col rounded-3xl border border-line bg-canvas p-7 sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl border border-line-strong bg-surface-2 text-ink transition-colors duration-500 group-hover:border-accent/40 group-hover:text-accent-soft">
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-serif text-4xl italic text-white/15">{s.n}</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-ink">{s.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted">{s.body}</p>

                <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted/80">{s.listLabel}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.025] px-3 py-1.5 text-[13px] text-ink/85">
                      <Check className="size-3 text-accent-soft" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                {s.note && <p className="mt-auto pt-8 text-[13px] leading-relaxed text-muted/90">{s.note}</p>}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
