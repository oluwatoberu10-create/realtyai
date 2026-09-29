import { BellRing, CalendarClock, Filter, Headset, RefreshCcw, Send, type LucideIcon } from "lucide-react";
import { Accent, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

type Agent = {
  icon: LucideIcon;
  name: string;
  role: string;
  channels: string[];
  activity: string;
};

// `activity` lines are illustrative examples of what each agent does.
const agents: Agent[] = [
  { icon: Headset, name: "AI Receptionist", role: "Answers incoming calls and questions.", channels: ["Phone", "Chat"], activity: "Answered a call about a 3-bed listing" },
  { icon: Filter, name: "AI Lead Qualifier", role: "Asks questions and identifies serious prospects.", channels: ["SMS", "Chat", "Email"], activity: "Confirmed budget, timeline & financing" },
  { icon: BellRing, name: "AI Follow-Up Agent", role: "Follows up with leads automatically.", channels: ["SMS", "Email"], activity: "Sent day-3 follow-up to a new buyer lead" },
  { icon: CalendarClock, name: "AI Appointment Setter", role: "Helps schedule calls, consultations, showings, and appointments.", channels: ["Calendar", "SMS"], activity: "Booked a listing consultation for Thu" },
  { icon: RefreshCcw, name: "AI Re-Engagement Agent", role: "Reaches back out to older leads sitting inside the CRM.", channels: ["CRM", "SMS", "Email"], activity: "Reopened a lead from last spring" },
  { icon: Send, name: "AI Outbound Agent", role: "Helps initiate prospecting conversations through approved channels.", channels: ["SMS", "Email", "Phone"], activity: "Started a conversation with a homeowner" },
];

export function Agents() {
  return (
    <section id="agents" aria-labelledby="agents-title" className="relative scroll-mt-20 overflow-hidden border-y border-line bg-surface/40 py-28 sm:py-36">
      <div className="agents-backdrop pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="agents-title"
            eyebrow="AI agents"
            title={
              <>
                Your AI Sales Team <Accent>Works While You Work.</Accent>
              </>
            }
            description="Each agent owns one job in your pipeline. Deploy one, or run several together as a coordinated team that hands off to you at exactly the right moment."
          />
          <Reveal className="shrink-0">
            <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-canvas/60 px-4 py-2 text-sm text-muted">
              <span className="live-dot size-1.5 rounded-full bg-emerald-400" aria-hidden />
              On duty 24/7 · Hands off to your team
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((a, i) => (
            <li key={a.name}>
              <Reveal delay={(i % 3) * 90} className="h-full">
                <article className="card-glow group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-canvas/80 p-7 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-b from-accent/25 to-accent/5 ring-1 ring-accent/30">
                      <a.icon className="size-5 text-accent-soft" aria-hidden />
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300/90">
                      <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
                      Active
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-ink">{a.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{a.role}</p>

                  <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Channels">
                    {a.channels.map((c) => (
                      <li key={c} className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[10.5px] text-ink/70">
                        {c}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <div className="flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3 py-2.5">
                      <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      <p className="truncate text-[12.5px] text-ink/75">
                        <span className="sr-only">Example action: </span>
                        {a.activity}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
