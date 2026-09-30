import { Check, Clock, Compass, FlaskConical, Hammer, Minus, PenTool, Rocket } from "lucide-react";
import { comparison, plans, usd } from "@/lib/deck";
import { Accent, Heading, Panel, d } from "./kit";

/* ------------------------------------------------------------------ 15 */

const steps = [
  { icon: Compass, name: "Discover", body: "Understand the business, target market, CRM, lead sources, and sales process." },
  { icon: PenTool, name: "Design", body: "Map the lead-generation and AI workflow." },
  { icon: Hammer, name: "Build", body: "Develop the AI agents, automations, integrations, and workflows." },
  { icon: FlaskConical, name: "Test", body: "Test conversations, qualification, routing, CRM updates, and booking." },
  { icon: Rocket, name: "Launch", body: "Deploy the system and hand it over to your team." },
];

function HowItWorks() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-0">
      <Heading
        eyebrow="How it works"
        title={
          <>
            From Setup to <Accent>Working AI System</Accent>
          </>
        }
      />
      <ol className="relative grid gap-3 @2xl:grid-cols-2 @3xl:my-auto @3xl:grid-cols-5 @3xl:gap-5">
        <span className="flow-line absolute left-0 right-0 top-0 hidden h-px @3xl:block" aria-hidden />
        {steps.map((s, i) => (
          <li key={s.name} className="rise relative @3xl:pt-10" style={d(3 + i * 0.6)}>
            <span className="absolute -top-[5px] left-0 hidden size-2.5 rounded-full bg-accent-soft shadow-[0_0_0_5px_var(--color-canvas)] @3xl:block" aria-hidden />
            <div className="h-full rounded-2xl border border-line bg-surface p-5 @3xl:border-0 @3xl:bg-transparent @3xl:p-0">
              <div className="flex items-center justify-between @3xl:block">
                <p className="font-serif text-5xl italic leading-none text-white/25 @3xl:text-[5.5rem]">{String(i + 1).padStart(2, "0")}</p>
                <s.icon className="size-6 text-accent-soft @3xl:mt-8 @3xl:size-7" aria-hidden />
              </div>
              <p className="t-label mt-5 !text-[0.95rem] !tracking-[0.22em] text-ink @3xl:mt-5">{s.name}</p>
              <p className="t-body mt-3 text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ 16 */

const deliverables = [
  "Lead-generation workflow",
  "Lead list setup",
  "AI agent",
  "Inbound automation",
  "Outbound automation",
  "Lead qualification",
  "Follow-up automation",
  "Appointment booking",
  "CRM integration",
  "Re-engagement workflow",
  "Multiple AI agents",
  "Custom integrations",
  "Reporting/dashboard components",
];

function Deliverables() {
  return (
    <div className="flex flex-col gap-10 @3xl:grid @3xl:h-full @3xl:grid-cols-[0.8fr_1.2fr] @3xl:items-center @3xl:gap-16">
      <Heading
        eyebrow="What you get"
        title={
          <>
            Your System. <Accent>Built Around Your Business.</Accent>
          </>
        }
        sub="Depending on the selected package, deliverables can include:"
      />
      <Panel className="rise overflow-hidden" style={d(3)}>
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <span className="t-small font-medium text-ink">System specification</span>
          <span className="t-label !text-[0.64rem] text-muted">Scoped per package</span>
        </div>
        <ul className="grid @2xl:grid-cols-2">
          {deliverables.map((item, i) => (
            <li
              key={item}
              className={`rise flex items-center gap-4 border-b border-line px-6 py-3.5 @3xl:py-[18px] ${
                i === deliverables.length - 1 && deliverables.length % 2 ? "border-b-0 @2xl:col-span-2" : "@2xl:odd:border-r"
              }`}
              style={d(4 + i * 0.3)}
            >
              <span className="font-mono text-xs text-muted/70 @3xl:text-sm">{String(i + 1).padStart(2, "0")}</span>
              <span className="t-body flex-1 text-ink/90">{item}</span>
              <Check className="size-4 shrink-0 text-accent-soft" aria-hidden />
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

/* ------------------------------------------------------------------ 17 */

function Packages() {
  return (
    <div className="flex flex-col gap-8 @3xl:h-full @3xl:gap-7">
      <Heading
        eyebrow="Packages"
        title={
          <>
            Choose Your Level of <Accent>Automation</Accent>
          </>
        }
      />
      <ul className="grid gap-4 @3xl:flex-1 @3xl:grid-cols-3 @3xl:gap-5">
        {plans.map((p, i) => (
          <li key={p.name} className="rise" style={d(3 + i * 0.7)}>
            <div
              className={`relative flex h-full flex-col rounded-3xl p-6 @3xl:px-8 @3xl:py-7 ${
                p.featured ? "featured-plan border border-transparent" : "border border-line bg-surface"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="t-label !text-[0.95rem] text-ink">{p.name}</p>
                {p.featured && (
                  <span className="t-label rounded-full border border-gold/45 bg-gold/10 px-3 py-1 !text-[0.64rem] text-gold">
                    Most popular
                  </span>
                )}
              </div>
              <p className="mt-3 text-5xl font-semibold leading-none tracking-[-0.05em] text-ink @3xl:text-[4.1rem]">{usd(p.price)}</p>
              <p className="t-small mt-3 text-muted">{p.pitch}</p>
              <ul className="mt-5 space-y-1.5 border-t border-line pt-5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-[0.95rem] leading-snug @3xl:text-[0.98rem]">
                    <Check className={`mt-[3px] size-4 shrink-0 ${p.featured ? "text-accent-soft" : "text-ink/45"}`} aria-hidden />
                    <span className={f.startsWith("Everything in") ? "font-semibold text-ink" : "text-ink/85"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ 18 */

function CellValue({ v }: { v: boolean | string }) {
  if (v === true)
    return (
      <>
        <Check className="mx-auto size-5 text-accent-soft" aria-hidden />
        <span className="sr-only">Included</span>
      </>
    );
  if (v === false)
    return (
      <>
        <Minus className="mx-auto size-5 text-white/20" aria-hidden />
        <span className="sr-only">Not included</span>
      </>
    );
  return <span className="t-small text-ink/85">{v}</span>;
}

function Comparison() {
  return (
    <div className="flex flex-col gap-8 @3xl:grid @3xl:h-full @3xl:grid-cols-[0.62fr_1.38fr] @3xl:items-center @3xl:gap-14">
      <Heading
        eyebrow="Pricing comparison"
        title={
          <>
            Compare the <Accent>Systems</Accent>
          </>
        }
        sub="Every package includes lead generation, lead lists, an AI agent, and qualification."
      />
      <Panel className="rise overflow-hidden" style={d(3)}>
        <table className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">Feature comparison of Starter, Growth, and Scale</caption>
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="t-label w-[40%] px-4 py-3 !text-[0.64rem] font-normal text-muted @3xl:px-7 @3xl:py-3.5">
                Feature
              </th>
              {plans.map((p) => (
                <th key={p.name} scope="col" className={`px-2 py-3 text-center @3xl:py-3.5 ${p.featured ? "bg-accent/[0.08]" : ""}`}>
                  <span className="block text-sm font-semibold text-ink @3xl:text-lg">{p.name}</span>
                  <span className="block font-mono text-[11px] text-muted @3xl:text-sm">{usd(p.price)}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.map(([label, ...cells]) => (
              <tr key={label} className="border-b border-line last:border-b-0">
                <th scope="row" className="t-small px-4 py-2.5 font-normal text-ink/90 @3xl:px-7 @3xl:py-[11px] @3xl:!text-[1.1rem]">
                  {label}
                </th>
                {cells.map((c, i) => (
                  <td key={plans[i].name} className={`px-2 py-2.5 text-center @3xl:py-[11px] ${plans[i].featured ? "bg-accent/[0.08]" : ""}`}>
                    <CellValue v={c} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>
    </div>
  );
}

/* ------------------------------------------------------------------ 19 */

function Payments() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-0">
      <Heading
        eyebrow="Payment options"
        title={
          <>
            Simple Payment <Accent>Structure</Accent>
          </>
        }
        sub="Every project is split into an initial deposit and a final payment."
      />
      <ul className="grid gap-4 @3xl:my-auto @3xl:grid-cols-3 @3xl:gap-5">
        {plans.map((p, i) => {
          const half = p.price / 2;
          return (
            <li key={p.name} className="rise" style={d(3 + i * 0.6)}>
              <div className={`h-full rounded-3xl p-6 @3xl:p-8 ${p.featured ? "featured-plan border border-transparent" : "border border-line bg-surface"}`}>
                <div className="flex items-baseline justify-between">
                  <p className="t-label !text-[0.9rem] text-ink">{p.name}</p>
                  <p className="text-3xl font-semibold tracking-[-0.04em] text-ink @3xl:text-[2.6rem]">{usd(p.price)}</p>
                </div>
                <div className="mt-6 flex h-3 overflow-hidden rounded-full @3xl:mt-8" aria-hidden>
                  <span className="w-1/2 bg-accent" />
                  <span className="w-1/2 border-l-2 border-canvas bg-accent-soft/35" />
                </div>
                <dl className="mt-6 grid grid-cols-2 gap-4 @3xl:mt-7">
                  <div>
                    <dt className="t-label !text-[0.64rem] text-accent-soft">Initial deposit</dt>
                    <dd className="mt-1.5 text-2xl font-semibold tracking-[-0.03em] text-ink @3xl:text-[2rem]">{usd(half)}</dd>
                    <dd className="t-small mt-1 text-muted">Secures the project & begins development</dd>
                  </div>
                  <div>
                    <dt className="t-label !text-[0.64rem] text-muted">Final payment</dt>
                    <dd className="mt-1.5 text-2xl font-semibold tracking-[-0.03em] text-ink @3xl:text-[2rem]">{usd(half)}</dd>
                    <dd className="t-small mt-1 text-muted">Due before final delivery / launch</dd>
                  </div>
                </dl>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="rise t-body mt-6 max-w-[1100px] text-ink/80 @3xl:mt-9" style={d(6)}>
        The initial deposit secures the project and begins development. The remaining balance is due before final
        delivery/launch.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ 20 */

const optionA = [
  { pct: 50, label: "Initial deposit", note: "Project begins." },
  { pct: 50, label: "Final payment", note: "Due before final launch/handover." },
];
const optionB = [
  { pct: 40, label: "Project start", note: "Paid before development begins." },
  { pct: 30, label: "Working system / milestone", note: "When the agreed milestone is reached." },
  { pct: 30, label: "Final delivery", note: "Due before final delivery." },
];

function MilestoneOption({ tag, title, sub, parts, i }: { tag: string; title: string; sub: string; parts: typeof optionB; i: number }) {
  const shades = ["bg-accent", "bg-accent-soft/60", "bg-accent-soft/30"];
  return (
    <div className="rise h-full rounded-3xl border border-line bg-surface p-6 @3xl:p-9" style={d(3 + i)}>
      <p className="t-label !text-[0.72rem] text-accent-soft">{tag}</p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink @3xl:text-[3rem]">{title}</p>
      <p className="t-small mt-2 text-muted">{sub}</p>
      <div className="mt-7 flex h-4 overflow-hidden rounded-full @3xl:mt-9" aria-hidden>
        {parts.map((p, j) => (
          <span key={j} className={`${shades[j]} ${j ? "border-l-2 border-canvas" : ""}`} style={{ width: `${p.pct}%` }} />
        ))}
      </div>
      <ol className="mt-7 space-y-4 @3xl:mt-8 @3xl:space-y-5">
        {parts.map((p) => (
          <li key={p.label} className="flex items-start gap-4">
            <span className="w-16 shrink-0 text-2xl font-semibold tracking-[-0.03em] text-ink @3xl:w-20 @3xl:text-[2rem]">{p.pct}%</span>
            <span className="pt-1">
              <span className="t-body block font-medium text-ink">{p.label}</span>
              <span className="t-small block text-muted">{p.note}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Milestones() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-8">
      <Heading
        eyebrow="Optional payment milestones"
        title={
          <>
            Flexible Milestones for <Accent>Larger Projects</Accent>
          </>
        }
      />
      <div className="grid gap-4 @3xl:flex-1 @3xl:grid-cols-2 @3xl:gap-6">
        <MilestoneOption tag="Option A" title="50 / 50" sub="The standard structure." parts={optionA} i={0} />
        <MilestoneOption tag="Option B" title="40 / 30 / 30" sub="For larger custom implementations." parts={optionB} i={1} />
      </div>
      <p className="rise t-small text-muted" style={d(5)}>
        Milestone structures can be agreed upon before development begins for larger custom projects.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ 21 */

const phases = [
  { name: "Discovery & Strategy", body: "Understand the business and map the workflow." },
  { name: "System Architecture", body: "Design the AI agents, automations, integrations, and lead flow." },
  { name: "Development", body: "Build the system." },
  { name: "Testing", body: "Test conversations, lead qualification, CRM updates, and booking." },
  { name: "Launch", body: "Deploy the system and provide your team with access and instructions." },
];

function Implementation() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-0">
      <Heading
        eyebrow="Implementation timeline"
        title={
          <>
            What the Build Process <Accent>Looks Like</Accent>
          </>
        }
      />
      <div className="@3xl:my-auto">
        <div className="rise hidden h-14 overflow-hidden rounded-2xl border border-line @3xl:flex" style={d(3)} aria-hidden>
          {phases.map((p, i) => (
            <span
              key={p.name}
              className="t-label flex flex-1 items-center justify-center border-l border-canvas !text-[0.72rem] text-ink first:border-l-0"
              style={{ background: `rgba(61,107,255,${0.42 - i * 0.07})` }}
            >
              Phase {i + 1}
            </span>
          ))}
        </div>
        <ol className="mt-0 grid gap-3 @2xl:grid-cols-2 @3xl:mt-6 @3xl:grid-cols-5 @3xl:gap-5">
          {phases.map((p, i) => (
            <li key={p.name} className="rise rounded-2xl border border-line bg-surface p-5 @3xl:border-0 @3xl:bg-transparent @3xl:p-0 @3xl:pr-2" style={d(4 + i * 0.5)}>
              <p className="t-label !text-[0.7rem] text-accent-soft @3xl:hidden">Phase {i + 1}</p>
              <p className="mt-1 text-xl font-semibold tracking-[-0.025em] text-ink @3xl:mt-0 @3xl:text-[1.5rem]">{p.name}</p>
              <p className="t-body mt-2 text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
        <div className="rise mt-8 flex items-center gap-4 rounded-2xl border border-gold/25 bg-gold/[0.05] p-5 @3xl:mt-12 @3xl:px-7" style={d(7)}>
          <Clock className="size-6 shrink-0 text-gold" aria-hidden />
          <p className="t-body text-ink/90">
            Timeline depends on scope, integrations, data sources, approvals, and technical requirements — we&apos;ll set
            expectations for your project on the strategy call.
          </p>
        </div>
      </div>
    </div>
  );
}

export const commercialSlides = [
  { title: "How It Works", section: "Process", tone: "charcoal", Body: HowItWorks },
  { title: "What You Get", section: "Process", Body: Deliverables },
  { title: "Package Overview", section: "Investment", tone: "charcoal", Body: Packages },
  { title: "Pricing Comparison", section: "Investment", Body: Comparison },
  { title: "Payment Options", section: "Investment", tone: "charcoal", Body: Payments },
  { title: "Optional Payment Milestones", section: "Investment", Body: Milestones },
  { title: "Implementation Timeline", section: "Implementation", tone: "charcoal", Body: Implementation },
] as const;
