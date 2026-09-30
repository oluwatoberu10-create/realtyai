import {
  Archive,
  BadgeCheck,
  BellRing,
  Bot,
  Building2,
  CalendarCheck,
  CalendarClock,
  Check,
  ChevronLeft,
  ChevronRight,
  Database,
  DoorOpen,
  Filter,
  Globe,
  Headset,
  House,
  KeyRound,
  ListChecks,
  MessageSquareText,
  PhoneMissed,
  RefreshCcw,
  Send,
  ShieldCheck,
  Signpost,
  TimerOff,
  UserPlus,
  Zap,
} from "lucide-react";
import { Accent, BookCTA, Chip, Heading, IconBox, Panel, StepArrow, d } from "./kit";

/* ------------------------------------------------------------------ 06 */

const segments = [
  { name: "Buyer prospects", tag: "Prospecting", on: true },
  { name: "Seller prospects", tag: "Prospecting", on: true },
  { name: "Property owners", tag: "Prospecting", on: true },
  { name: "Investors", tag: "Prospecting", on: false },
  { name: "Expired listings", tag: "Where permitted", on: true },
  { name: "FSBO opportunities", tag: "Where permitted", on: false },
  { name: "Local prospects", tag: "Prospecting", on: true },
  { name: "Website leads", tag: "Inbound", on: true },
  { name: "Existing CRM leads", tag: "Your CRM", on: true },
];

function LeadGeneration() {
  return (
    <div className="flex flex-col gap-10 @3xl:grid @3xl:h-full @3xl:grid-cols-[0.92fr_1.08fr] @3xl:items-center @3xl:gap-16">
      <div>
        <Heading
          eyebrow="Lead generation"
          title={
            <>
              Build a More <Accent>Targeted</Accent> Lead Pipeline
            </>
          }
          sub="We build lead-generation and prospecting workflows around your target market — the areas, property types, and clients you actually want."
        />
        <div className="rise mt-8 flex gap-4 rounded-2xl border border-line bg-white/[0.02] p-5 @3xl:mt-10 @3xl:p-6" style={d(4)}>
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold @3xl:size-6" aria-hidden />
          <p className="t-small text-ink/80">
            Lead sources and outreach channels depend on available data sources, integrations, permissions, and applicable
            rules. We only work with data you&apos;re permitted to use.
          </p>
        </div>
      </div>

      <Panel className="rise overflow-hidden" style={d(3)}>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 @3xl:px-6">
          <span className="t-small inline-flex items-center gap-2.5 font-medium text-ink">
            <ListChecks className="size-5 text-accent-soft" aria-hidden />
            Lead List Builder
          </span>
          <span className="t-label rounded-full border border-line-strong bg-white/[0.03] px-3 py-1 !text-[0.68rem] text-ink/75">
            Market · Your service area
          </span>
        </div>
        <p className="t-label px-5 pt-4 !text-[0.66rem] text-muted @3xl:px-6">Target segments</p>
        <ul className="px-3 pb-3 pt-2 @3xl:px-4">
          {segments.map((s, i) => (
            <li key={s.name} className="rise flex items-center gap-3.5 rounded-xl px-2 py-2.5 @3xl:py-3" style={d(4 + i * 0.4)}>
              <span
                className={`grid size-5 shrink-0 place-items-center rounded-md border ${
                  s.on ? "border-accent bg-accent text-white" : "border-line-strong bg-transparent"
                }`}
                aria-hidden
              >
                {s.on && <Check className="size-3.5" strokeWidth={3} />}
              </span>
              <span className="t-body flex-1 text-ink/90">{s.name}</span>
              <span
                className={`t-label rounded-md px-2 py-0.5 !text-[0.62rem] ${
                  s.tag === "Where permitted" ? "bg-gold/10 text-gold" : "bg-white/[0.05] text-muted"
                }`}
              >
                {s.tag}
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

/* ------------------------------------------------------------------ 07 */

const inboundCan = [
  "Respond",
  "Answer common questions",
  "Ask qualification questions",
  "Collect information",
  "Identify buying/selling intent",
  "Route qualified leads",
  "Help schedule appointments",
];

const chat: { from: "p" | "ai"; text: string }[] = [
  { from: "p", text: "Hi — is the 3-bed on Maple Ave still available?" },
  { from: "ai", text: "Hi! Yes, it is. Are you looking to buy in the next few months, or just starting to explore?" },
  { from: "p", text: "Next 2–3 months. We're already pre-approved." },
  { from: "ai", text: "Great. What price range are you working with?" },
  { from: "p", text: "Up to $650K." },
  { from: "ai", text: "Perfect. Would you like to see it this week? I have Thursday 4:30 PM or Saturday 11:00 AM." },
];

const summary = [
  ["Intent", "Buyer"],
  ["Timeline", "2–3 months"],
  ["Financing", "Pre-approved"],
  ["Budget", "Up to $650K"],
];

function InboundAgent() {
  return (
    <div className="flex flex-col gap-10 @3xl:grid @3xl:h-full @3xl:grid-cols-[0.78fr_1.22fr] @3xl:items-center @3xl:gap-14">
      <div>
        <Heading
          eyebrow="AI inbound agent"
          title={
            <>
              Your AI Agent Can Respond When <Accent>Your Team Can&apos;t.</Accent>
            </>
          }
        />
        <p className="rise t-body mt-6 text-muted" style={d(2)}>
          When someone contacts the business through an available channel, the AI can:
        </p>
        <ul className="mt-4 space-y-2.5 @3xl:mt-5 @3xl:space-y-3">
          {inboundCan.map((c, i) => (
            <li key={c} className="rise t-body flex items-center gap-3 text-ink/90" style={d(3 + i * 0.4)}>
              <Check className="size-5 shrink-0 text-accent-soft" aria-hidden />
              {c}
            </li>
          ))}
        </ul>
      </div>

      <Panel className="rise overflow-hidden" style={d(3)}>
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-gradient-to-b from-accent/40 to-accent/10 ring-1 ring-accent/40">
              <Bot className="size-4 text-accent-soft" aria-hidden />
            </span>
            <div>
              <p className="t-small font-medium leading-tight text-ink">Realty AI Agent</p>
              <p className="text-xs text-muted @3xl:text-sm">Website chat · Responding</p>
            </div>
          </div>
          <span className="t-label inline-flex items-center gap-2 !text-[0.66rem] text-emerald-300">
            <span className="live-dot size-1.5 rounded-full bg-emerald-400" aria-hidden />
            Live
          </span>
        </div>
        <div className="grid @3xl:grid-cols-[1.45fr_0.55fr]">
          <div className="space-y-3 p-4 @3xl:p-5">
            {chat.map((m, i) => (
              <div key={i} className={`rise flex ${m.from === "p" ? "justify-start" : "justify-end"}`} style={d(4 + i * 0.6)}>
                <div className="max-w-[86%]">
                  <p className={`mb-1 text-[11px] text-muted @3xl:text-xs ${m.from === "p" ? "" : "text-right"}`}>
                    {m.from === "p" ? "Prospect" : "Realty AI Agent"}
                  </p>
                  <p
                    className={`t-small rounded-2xl px-3.5 py-2.5 ${
                      m.from === "p" ? "rounded-tl-sm bg-white/[0.07] text-ink/90" : "rounded-tr-sm bg-accent text-white"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <aside className="border-t border-line bg-white/[0.015] p-4 @3xl:border-l @3xl:border-t-0 @3xl:p-5">
            <p className="t-label !text-[0.64rem] text-muted">Lead summary</p>
            <dl className="mt-3 space-y-3">
              {summary.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs text-muted @3xl:text-sm">{k}</dt>
                  <dd className="t-small font-medium text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300 @3xl:text-sm">
              <BadgeCheck className="size-3.5" aria-hidden /> Qualified
            </p>
            <p className="mt-2 text-xs text-muted @3xl:text-sm">Routed to agent</p>
          </aside>
        </div>
      </Panel>
    </div>
  );
}

/* ------------------------------------------------------------------ 08 */

const outboundCan = [
  "Start conversations",
  "Personalize outreach",
  "Ask qualifying questions",
  "Follow up",
  "Handle common responses",
  "Identify interested prospects",
  "Route qualified prospects",
];

function OutboundAgent() {
  const card = "h-full rounded-2xl border border-line bg-surface p-4 @3xl:p-5";
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-0">
      <div className="flex flex-col gap-6 @3xl:grid @3xl:grid-cols-[1.1fr_0.9fr] @3xl:items-end @3xl:gap-16">
        <Heading
          eyebrow="AI outbound agent"
          title={
            <>
              Don&apos;t Wait for Every Lead to <Accent>Come to You.</Accent>
            </>
          }
        />
        <p className="rise t-lead text-pretty text-muted" style={d(2)}>
          Outbound workflows help start conversations with prospects through approved communication channels — with
          opt-outs always honored.
        </p>
      </div>

      <ol className="mt-2 flex flex-col gap-2 @3xl:my-auto @3xl:grid @3xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] @3xl:items-stretch @3xl:gap-3">
        <li className="rise" style={d(3)}>
          <div className={card}>
            <p className="t-label !text-[0.66rem] text-muted">Prospect list</p>
            <ul className="mt-3 space-y-2">
              {["Homeowner · Coral Gables", "Investor · Brickell", "Seller · Kendall"].map((r) => (
                <li key={r} className="t-small flex items-center gap-2 rounded-lg bg-white/[0.04] px-2.5 py-1.5 text-ink/85">
                  <span className="size-1.5 rounded-full bg-accent-soft" aria-hidden />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </li>
        <StepArrow />
        <li className="rise" style={d(4)}>
          <div className={card}>
            <p className="t-label !text-[0.66rem] text-muted">AI outreach</p>
            <p className="t-small mt-3 rounded-2xl rounded-tr-sm bg-accent px-3 py-2.5 text-white">
              Hi Daniel — are you still thinking about selling your home this year?
            </p>
          </div>
        </li>
        <StepArrow />
        <li className="rise" style={d(5)}>
          <div className={card}>
            <p className="t-label !text-[0.66rem] text-muted">Conversation</p>
            <p className="t-small mt-3 rounded-2xl rounded-tl-sm bg-white/[0.07] px-3 py-2.5 text-ink/90">
              Possibly — it depends what it&apos;s worth.
            </p>
          </div>
        </li>
        <StepArrow />
        <li className="rise" style={d(6)}>
          <div className={card}>
            <p className="t-label !text-[0.66rem] text-muted">Qualification</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {["Seller", "6–12 months", "Wants a valuation"].map((t) => (
                <span key={t} className="t-small rounded-md border border-accent/30 bg-accent/10 px-2 py-1 text-accent-soft">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </li>
        <StepArrow />
        <li className="rise" style={d(7)}>
          <div className={`${card} border-emerald-400/25`}>
            <p className="t-label !text-[0.66rem] text-muted">Appointment</p>
            <div className="mt-3 flex items-start gap-2.5">
              <CalendarCheck className="mt-0.5 size-5 shrink-0 text-emerald-300" aria-hidden />
              <p className="t-small text-ink/90">
                Listing consultation
                <span className="block text-muted">Thu · 10:00 AM</span>
              </p>
            </div>
          </div>
        </li>
      </ol>

      <div className="rise mt-6 @3xl:mt-10" style={d(8)}>
        <p className="t-label !text-[0.7rem] text-muted">The AI can help</p>
        <ul className="mt-3 flex flex-wrap gap-2 @3xl:gap-2.5">
          {outboundCan.map((c) => (
            <li key={c}>
              <Chip>
                <Check className="size-3.5 text-accent-soft" aria-hidden />
                {c}
              </Chip>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ 09 */

const timeline = [
  { when: "Day 0", title: "New Lead", note: "Inquiry captured from any channel", icon: UserPlus },
  { when: "Immediate", title: "AI Response", note: "A personal reply, right away", icon: Zap },
  { when: "Follow-Up", title: "Conversation", note: "The thread keeps moving on its own", icon: MessageSquareText },
  { when: "Qualification", title: "Buyer / Seller / Investor", note: "Intent, timeline & budget captured", icon: BadgeCheck },
  { when: "Appointment", title: "Calendar Booking", note: "Booked straight onto the calendar", icon: CalendarCheck },
  { when: "CRM", title: "Lead Updated", note: "Stage, notes & transcript synced", icon: Database },
];

function FollowUp() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-0">
      <Heading
        eyebrow="AI follow-up"
        title={
          <>
            Follow-Up Shouldn&apos;t Depend on <Accent>Someone Remembering.</Accent>
          </>
        }
      />

      <ol className="relative flex flex-col gap-3 @3xl:my-auto @3xl:grid @3xl:h-[430px] @3xl:grid-cols-6 @3xl:gap-5">
        <span className="flow-line absolute left-[8%] right-[8%] top-1/2 hidden h-px @3xl:block" aria-hidden />
        {timeline.map((t, i) => {
          const up = i % 2 === 0;
          return (
            <li key={t.when} className="rise relative @3xl:grid @3xl:grid-rows-[1fr_auto_1fr]" style={d(3 + i * 0.7)}>
              <div className="@3xl:row-start-1 @3xl:flex @3xl:items-end @3xl:pb-6">
                {up && <TimelineCard {...t} />}
              </div>
              <div className="relative hidden h-12 items-center justify-center @3xl:row-start-2 @3xl:flex">
                <span className="grid size-12 place-items-center rounded-full border border-accent/45 bg-canvas text-accent-soft shadow-[0_0_0_8px_var(--color-canvas)]">
                  <t.icon className="size-5" aria-hidden />
                </span>
              </div>
              <div className="@3xl:row-start-3 @3xl:flex @3xl:items-start @3xl:pt-6">
                {!up && <TimelineCard {...t} />}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function TimelineCard({ when, title, note }: { when: string; title: string; note: string }) {
  return (
    <div className="w-full rounded-2xl border border-line bg-surface p-4 @3xl:p-5">
      <p className="t-label !text-[0.7rem] text-accent-soft">{when}</p>
      <p className="mt-2 text-[1.05rem] font-semibold leading-tight tracking-[-0.02em] text-ink @3xl:text-[1.3rem]">{title}</p>
      <p className="t-small mt-1.5 text-muted">{note}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ 10 */

const aged = [
  { name: "Michael Alvarez", last: "14 months ago", status: "Appointment set", tone: "ok" },
  { name: "Priya Shah", last: "11 months ago", status: "Qualified", tone: "hi" },
  { name: "Daniel Kim", last: "2 years ago", status: "Replied", tone: "hi" },
  { name: "Hannah Lee", last: "9 months ago", status: "AI message sent", tone: "mid" },
  { name: "Robert Taylor", last: "18 months ago", status: "Queued", tone: "low" },
  { name: "Emily Watson", last: "1 year ago", status: "Opted out · Suppressed", tone: "low" },
] as const;

const toneClass = {
  ok: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  hi: "border-accent/35 bg-accent/12 text-accent-soft",
  mid: "border-line-strong bg-white/[0.04] text-ink/80",
  low: "border-line bg-transparent text-muted",
};

function ReEngagement() {
  const flow = ["Old CRM Leads", "AI Re-Engagement", "New Conversation", "Qualification", "Appointment"];
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-8">
      <div className="flex flex-col gap-10 @3xl:grid @3xl:flex-1 @3xl:grid-cols-[0.88fr_1.12fr] @3xl:items-center @3xl:gap-14">
        <Heading
          eyebrow="Old lead re-engagement"
          title={
            <>
              Your Old CRM Could Be Full of <Accent>Opportunities.</Accent>
            </>
          }
          sub="Instead of manually working through every older lead, we build re-engagement workflows that help start conversations with appropriate contacts."
        />
        <Panel className="rise overflow-hidden" style={d(3)}>
          <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
            <span className="t-small inline-flex items-center gap-2.5 font-medium text-ink">
              <Archive className="size-4 text-accent-soft" aria-hidden /> Aged leads · Re-engagement
            </span>
            <span className="t-label !text-[0.64rem] text-muted">Example</span>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="t-label !text-[0.62rem] text-muted">
                <th className="px-5 py-2.5 font-normal">Lead</th>
                <th className="hidden px-3 py-2.5 font-normal @2xl:table-cell">Last contact</th>
                <th className="px-5 py-2.5 text-right font-normal">Status</th>
              </tr>
            </thead>
            <tbody>
              {aged.map((r, i) => (
                <tr key={r.name} className="rise border-t border-line" style={d(4 + i * 0.4)}>
                  <td className="t-small px-5 py-3 font-medium text-ink/90">{r.name}</td>
                  <td className="t-small hidden px-3 py-3 text-muted @2xl:table-cell">{r.last}</td>
                  <td className="px-5 py-3 text-right">
                    <span className={`inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs @3xl:text-sm ${toneClass[r.tone]}`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Panel>
      </div>
      <ol className="rise flex flex-col gap-2 @3xl:flex-row @3xl:items-center @3xl:gap-3" style={d(7)}>
        {flow.map((f, i) => (
          <li key={f} className="flex flex-col gap-2 @3xl:flex-1 @3xl:flex-row @3xl:items-center @3xl:gap-3">
            <span
              className={`t-small flex h-11 flex-1 items-center justify-center rounded-xl border px-3 text-center font-medium @3xl:h-14 ${
                i === 1 ? "border-accent/40 bg-accent/15 text-ink" : i === 4 ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200" : "border-line bg-surface text-ink/85"
              }`}
            >
              {f}
            </span>
            {i < flow.length - 1 && <StepArrow />}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ 11 */

const apptTypes = ["Consultation calls", "Buyer consultations", "Seller consultations", "Property discussions", "Showings", "Discovery calls"];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const hours = ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM"];
const events = [
  { day: 0, hour: 0, title: "Discovery call", who: "New inquiry", ai: false },
  { day: 1, hour: 1, title: "Buyer consultation", who: "J. Park", ai: true },
  { day: 2, hour: 2, title: "Showing", who: "42 Palm Ave", ai: false },
  { day: 3, hour: 3, title: "Seller consultation", who: "M. Alvarez", ai: true, hi: true },
  { day: 4, hour: 1, title: "Property discussion", who: "Investor lead", ai: true },
];

function Appointments() {
  return (
    <div className="flex flex-col gap-10 @3xl:grid @3xl:h-full @3xl:grid-cols-[0.82fr_1.18fr] @3xl:items-center @3xl:gap-14">
      <div>
        <Heading
          eyebrow="AI appointment setting"
          title={
            <>
              Turn Conversations Into <Accent>Appointments.</Accent>
            </>
          }
        />
        <p className="rise t-body mt-6 text-muted" style={d(2)}>
          The AI can help move qualified prospects toward:
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-2 @3xl:gap-2.5">
          {apptTypes.map((t, i) => (
            <li key={t} className="rise" style={d(3 + i * 0.3)}>
              <Chip className="w-full !rounded-xl">
                <CalendarCheck className="size-4 shrink-0 text-accent-soft" aria-hidden />
                {t}
              </Chip>
            </li>
          ))}
        </ul>
        <div className="rise mt-8 @3xl:mt-10" style={d(6)}>
          <BookCTA>Book the Next Conversation</BookCTA>
        </div>
      </div>

      <div className="relative">
        <Panel className="rise overflow-hidden" style={d(3)}>
          <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
            <span className="t-small font-medium text-ink">This week</span>
            <span className="flex gap-1.5 text-muted" aria-hidden>
              <ChevronLeft className="size-5" />
              <ChevronRight className="size-5" />
            </span>
          </div>
          <div className="overflow-x-auto">
            <div className="grid min-w-[520px] grid-cols-[56px_repeat(5,1fr)] @3xl:grid-cols-[72px_repeat(5,1fr)]">
              <div />
              {days.map((dname) => (
                <div key={dname} className="t-label border-l border-line py-2.5 text-center !text-[0.66rem] text-muted">
                  {dname}
                </div>
              ))}
              {hours.map((h, r) => (
                <div key={h} className="contents">
                  <div className="border-t border-line pr-2 pt-2 text-right text-[11px] text-muted @3xl:text-xs">{h}</div>
                  {days.map((dn, c) => {
                    const ev = events.find((e) => e.day === c && e.hour === r);
                    return (
                      <div key={dn + h} className="h-[62px] border-l border-t border-line p-1 @3xl:h-[74px] @3xl:p-1.5">
                        {ev && (
                          <div
                            className={`rise h-full rounded-lg border px-2 py-1.5 ${
                              ev.hi ? "border-accent/60 bg-accent/25" : ev.ai ? "border-accent/30 bg-accent/10" : "border-line-strong bg-white/[0.05]"
                            }`}
                            style={d(5 + c * 0.4)}
                          >
                            <p className="truncate text-[11px] font-medium leading-tight text-ink @3xl:text-[13px]">{ev.title}</p>
                            <p className="truncate text-[10px] text-muted @3xl:text-xs">{ev.who}</p>
                            {ev.ai && <p className="mt-0.5 text-[9px] uppercase tracking-wider text-accent-soft @3xl:text-[10px]">AI booked</p>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </Panel>
        <div className="rise glass mt-3 flex items-center gap-3 rounded-2xl p-4 @3xl:absolute @3xl:-bottom-10 @3xl:-left-10 @3xl:mt-0 @3xl:w-[400px]" style={d(8)}>
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
            <CalendarClock className="size-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="t-small font-medium text-ink">Appointment confirmed</p>
            <p className="text-xs text-muted @3xl:text-sm">Thu 3:00 PM · Seller consultation · CRM updated</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ 12 */

const crmCan = [
  "Create leads",
  "Update lead stages",
  "Record information",
  "Trigger follow-ups",
  "Assign leads",
  "Notify team members",
  "Track conversations",
  "Trigger appointment workflows",
];

const board = [
  { col: "New", cards: [["Sarah Johnson", "Buyer · Website"], ["Chris Moore", "Seller · Call"]] },
  { col: "Contacted", cards: [["Priya Shah", "Buyer · SMS"], ["Tom Reyes", "Investor · Email"]] },
  { col: "Qualified", cards: [["Daniel Kim", "Seller · $900K"], ["Ana Lopez", "Buyer · Pre-approved"]] },
  { col: "Appointment Set", cards: [["M. Alvarez", "Thu 3:00 PM"]] },
];

const activity = [
  ["AI", "Stage updated → Qualified", "Daniel Kim"],
  ["AI", "Follow-up scheduled", "Priya Shah"],
  ["AI", "Agent notified", "M. Alvarez"],
];

function CrmAutomation() {
  return (
    <div className="flex flex-col gap-10 @3xl:grid @3xl:h-full @3xl:grid-cols-[1.48fr_0.52fr] @3xl:items-center @3xl:gap-12">
      <div className="flex flex-col gap-8 @3xl:gap-8">
        <Heading
          eyebrow="CRM automation"
          title={
            <>
              Your CRM Should <Accent>Work With You.</Accent>
            </>
          }
        />
        <Panel className="rise overflow-hidden" style={d(3)}>
          <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
            <span className="t-small inline-flex items-center gap-2.5 font-medium text-ink">
              <Database className="size-4 text-accent-soft" aria-hidden /> Pipeline
            </span>
            <span className="t-label inline-flex items-center gap-2 !text-[0.64rem] text-emerald-300">
              <span className="live-dot size-1.5 rounded-full bg-emerald-400" aria-hidden /> Synced
            </span>
          </div>
          <div className="overflow-x-auto">
            <div className="grid min-w-[560px] grid-cols-4 gap-3 p-4">
              {board.map((b, i) => (
                <div key={b.col} className="rise" style={d(4 + i * 0.5)}>
                  <p className="t-label mb-2.5 flex items-center justify-between !text-[0.62rem] text-muted">
                    {b.col}
                    <span className="text-ink/60">{b.cards.length}</span>
                  </p>
                  <div className="space-y-2">
                    {b.cards.map(([n, t]) => (
                      <div key={n} className={`rounded-xl border p-3 ${b.col === "Appointment Set" ? "border-emerald-400/25 bg-emerald-400/[0.06]" : "border-line bg-white/[0.03]"}`}>
                        <p className="truncate text-[13px] font-medium text-ink @3xl:text-[15px]">{n}</p>
                        <p className="truncate text-[11px] text-muted @3xl:text-[13px]">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ul className="grid gap-px border-t border-line bg-line @2xl:grid-cols-3">
            {activity.map(([who, what, lead]) => (
              <li key={what} className="flex items-center gap-2.5 bg-surface px-4 py-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent/15 font-mono text-[9px] text-accent-soft">{who}</span>
                <span className="min-w-0">
                  <span className="block truncate text-[12px] text-ink/85 @3xl:text-sm">{what}</span>
                  <span className="block truncate text-[11px] text-muted @3xl:text-xs">{lead}</span>
                </span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="flex flex-col">
        <p className="rise t-label text-muted" style={d(2)}>
          The system can help
        </p>
        <ul className="mt-4 @3xl:mt-5">
          {crmCan.map((c, i) => (
            <li key={c} className="rise t-body flex items-center gap-3 border-b border-line py-2.5 text-ink/90 @3xl:py-3" style={d(3 + i * 0.35)}>
              <Check className="size-4 shrink-0 text-accent-soft" aria-hidden />
              {c}
            </li>
          ))}
        </ul>
        <p className="rise t-small mt-6 text-muted @3xl:mt-8" style={d(7)}>
          Integrations depend on your existing CRM and its available APIs/integrations.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ 13 */

const agents = [
  { icon: Headset, name: "AI Receptionist", role: "Handles incoming inquiries." },
  { icon: Filter, name: "AI Lead Qualifier", role: "Identifies serious prospects." },
  { icon: BellRing, name: "AI Follow-Up Agent", role: "Keeps conversations moving." },
  { icon: CalendarClock, name: "AI Appointment Setter", role: "Helps move prospects onto the calendar." },
  { icon: RefreshCcw, name: "AI Re-Engagement Agent", role: "Reconnects with older leads." },
  { icon: Send, name: "AI Outbound Agent", role: "Helps initiate prospecting conversations." },
];

function AgentTeam() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-0">
      <div className="flex flex-col gap-6 @3xl:grid @3xl:grid-cols-[1.15fr_0.85fr] @3xl:items-end @3xl:gap-16">
        <Heading
          eyebrow="The AI agent team"
          title={
            <>
              Think of It as a <Accent>Digital Sales Team.</Accent>
            </>
          }
        />
        <p className="rise t-lead text-pretty text-muted" style={d(2)}>
          Each agent owns one job. Run one, or several together — handing off to your people at the right moment.
        </p>
      </div>
      <ul className="grid gap-3 @2xl:grid-cols-2 @3xl:my-auto @3xl:grid-cols-3 @3xl:gap-5">
        {agents.map((a, i) => (
          <li key={a.name} className="rise" style={d(3 + i * 0.5)}>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-5 @3xl:p-7">
              <div className="flex items-center justify-between">
                <IconBox icon={a.icon} accent />
                <span className="t-label inline-flex items-center gap-2 !text-[0.66rem] text-emerald-300/90">
                  <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden /> Active
                </span>
              </div>
              <p className="mt-5 text-xl font-semibold tracking-[-0.025em] text-ink @3xl:mt-7 @3xl:text-[1.6rem]">{a.name}</p>
              <p className="t-body mt-1.5 text-muted @3xl:mt-2">{a.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ 14 */

const useCases = [
  { icon: KeyRound, name: "Buyer Leads", note: "Capture, qualify, and follow up with buyers." },
  { icon: House, name: "Seller Leads", note: "Spot potential sellers and start the conversation." },
  { icon: TimerOff, name: "Expired Listings", note: "Contact and nurture — where permitted." },
  { icon: Signpost, name: "FSBO", note: "Prospecting and follow-up for owners selling solo." },
  { icon: Building2, name: "Investor Leads", note: "Qualify criteria, budget, and timelines." },
  { icon: DoorOpen, name: "Open House Leads", note: "Follow up while the visit is still fresh." },
  { icon: Globe, name: "Website Leads", note: "Respond the moment a form comes in." },
  { icon: PhoneMissed, name: "Missed Calls", note: "Text back callers who didn't connect." },
  { icon: Archive, name: "Old CRM Leads", note: "Re-engage leads that went cold." },
];

function UseCases() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-0">
      <div className="flex flex-col gap-6 @3xl:grid @3xl:grid-cols-[1fr_1fr] @3xl:items-end @3xl:gap-16">
        <Heading
          eyebrow="Real estate use cases"
          title={
            <>
              Built Around <Accent>Real Estate.</Accent>
            </>
          }
        />
        <p className="rise t-lead text-pretty text-muted" style={d(2)}>
          Every lead source behaves differently, so every workflow is designed for the moment that prospect is in.
        </p>
      </div>
      <ul className="grid gap-3 @2xl:grid-cols-2 @3xl:my-auto @3xl:grid-cols-3 @3xl:gap-4">
        {useCases.map((u, i) => (
          <li key={u.name} className="rise" style={d(3 + i * 0.35)}>
            <div className="flex h-full items-center gap-4 rounded-2xl border border-line bg-surface p-4 @3xl:gap-5 @3xl:p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-gold/25 bg-gold/[0.07] text-gold @3xl:size-14 @3xl:rounded-2xl">
                <u.icon className="size-5 @3xl:size-6" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-lg font-semibold tracking-[-0.02em] text-ink @3xl:text-[1.4rem]">{u.name}</p>
                <p className="t-small mt-0.5 text-muted">{u.note}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const systemSlides = [
  { title: "Lead Generation", section: "The System", Body: LeadGeneration },
  { title: "AI Inbound Agent", section: "The System", tone: "charcoal", Body: InboundAgent },
  { title: "AI Outbound Agent", section: "The System", Body: OutboundAgent },
  { title: "AI Follow-Up", section: "The System", tone: "charcoal", Body: FollowUp },
  { title: "Old Lead Re-Engagement", section: "The System", Body: ReEngagement },
  { title: "AI Appointment Setting", section: "The System", tone: "charcoal", Body: Appointments },
  { title: "CRM Automation", section: "The System", Body: CrmAutomation },
  { title: "The AI Agent Team", section: "AI Agents", tone: "charcoal", Body: AgentTeam },
  { title: "Real Estate Use Cases", section: "Use Cases", Body: UseCases },
] as const;
