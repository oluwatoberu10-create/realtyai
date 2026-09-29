import { Bot, CalendarCheck, Database, MessageSquareText, UserPlus, BadgeCheck } from "lucide-react";

/**
 * Product-style visual: one real estate lead travelling through the system.
 * Pure CSS animation (staggered rise + a pulse running down the rail).
 */
const stages = [
  {
    icon: UserPlus,
    label: "New Lead",
    time: "09:41:03",
    title: "Sarah Johnson",
    detail: "Interested in Miami property",
    tags: ["Website inquiry"],
  },
  {
    icon: Bot,
    label: "AI Agent",
    time: "09:41:15",
    title: "Responded in 12 seconds",
    detail: "SMS · Conversation started",
    tags: [],
    highlight: true,
  },
  {
    icon: BadgeCheck,
    label: "Qualification",
    time: "09:44:52",
    title: "Buyer • Pre-approved • $750K budget",
    detail: "Timeline: 60–90 days · 3 bed",
    tags: [],
  },
  {
    icon: CalendarCheck,
    label: "Appointment",
    time: "09:46:10",
    title: "Tomorrow • 2:30 PM",
    detail: "Buyer consultation · Agent notified",
    tags: [],
  },
  {
    icon: Database,
    label: "CRM Updated",
    time: "09:46:11",
    title: "Stage → Appointment Set",
    detail: "Notes, transcript & tags synced",
    tags: [],
  },
];

export function HeroPipeline() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
      {/* soft light behind the panel */}
      <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-[radial-gradient(closest-side,rgba(59,107,255,0.22),transparent)] blur-2xl" aria-hidden />

      <figure
        className="rise glass relative overflow-hidden rounded-[22px] p-1.5"
        style={{ animationDelay: "250ms" }}
        aria-label="Example: a new buyer lead responded to, qualified, booked, and logged to the CRM automatically"
      >
        <div className="rounded-[17px] border border-line bg-canvas/80">
          {/* window chrome */}
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex gap-1.5" aria-hidden>
                <span className="size-2.5 rounded-full bg-white/10" />
                <span className="size-2.5 rounded-full bg-white/10" />
                <span className="size-2.5 rounded-full bg-white/10" />
              </span>
              <span className="ml-2 text-xs font-medium text-ink/80">Lead Pipeline</span>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
              <span className="live-dot size-1.5 rounded-full bg-emerald-400" aria-hidden />
              Live
            </span>
          </div>

          {/* stages */}
          <ol className="relative space-y-2.5 p-4">
            <span className="pipe-rail absolute bottom-10 left-[35px] top-10 w-px" aria-hidden />
            {stages.map((s, i) => (
              <li
                key={s.label}
                className="rise relative flex gap-3"
                style={{ animationDelay: `${500 + i * 180}ms` }}
              >
                <span
                  className={`relative z-10 grid size-9 shrink-0 place-items-center rounded-full border ${
                    s.highlight
                      ? "border-accent/50 bg-accent/15 text-accent-soft"
                      : "border-line-strong bg-surface-2 text-ink/80"
                  }`}
                >
                  <s.icon className="size-4" aria-hidden />
                </span>
                <div
                  className={`min-w-0 flex-1 rounded-xl border px-3.5 py-2.5 ${
                    s.highlight ? "border-accent/30 bg-accent/[0.07]" : "border-line bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{s.label}</span>
                    <span className="font-mono text-[10px] text-muted/70">{s.time}</span>
                  </div>
                  <p className="mt-1 truncate text-sm font-medium text-ink">{s.title}</p>
                  <p className="truncate text-xs text-muted">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </figure>

      {/* floating conversation snippet */}
      <div
        className="rise glass absolute -left-12 top-full -mt-5 hidden w-[272px] rounded-2xl p-3.5 xl:block"
        style={{ animationDelay: "1500ms" }}
        aria-hidden
      >
        <div className="flex items-center gap-2 text-[11px] text-muted">
          <MessageSquareText className="size-3.5 text-accent-soft" />
          SMS · AI Inbound Agent
        </div>
        <p className="mt-2 rounded-xl rounded-tl-sm bg-white/[0.06] px-3 py-2 text-[12.5px] leading-snug text-ink/90">
          Hi Sarah — thanks for reaching out about Miami. Are you hoping to buy in the next few months?
        </p>
        <p className="ml-auto mt-2 w-fit rounded-xl rounded-tr-sm bg-accent px-3 py-2 text-[12.5px] leading-snug text-white">
          Yes! Already pre-approved.
        </p>
      </div>
    </div>
  );
}
