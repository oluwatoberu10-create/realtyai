import {
  Archive,
  BadgeCheck,
  Bot,
  CalendarCheck,
  CircleHelp,
  Database,
  House,
  ListChecks,
  MessageSquareText,
  PhoneMissed,
  RefreshCcw,
  Search,
  Send,
  Shuffle,
  Sparkles,
  Target,
  Timer,
  UserPlus,
  Users,
  UserX,
  Workflow,
} from "lucide-react";
import { Accent, BookCTA, FloorPlan, Heading, IconBox, Label, Panel, d } from "./kit";

/* ------------------------------------------------------------------ 01 */

const journey = [
  { icon: UserPlus, label: "Lead", time: "09:41:03", title: "Sarah Johnson", detail: "Website inquiry · Miami property" },
  { icon: Bot, label: "AI", time: "09:41:15", title: "Responded in 12 seconds", detail: "SMS · Conversation started", hi: true },
  { icon: BadgeCheck, label: "Qualification", time: "09:44:52", title: "Buyer · Pre-approved · $750K", detail: "Timeline 60–90 days · 3 bed" },
  { icon: RefreshCcw, label: "Follow-Up", time: "Day 2", title: "Check-in sent automatically", detail: "Shared 3 matching listings" },
  { icon: CalendarCheck, label: "Appointment", time: "Day 2", title: "Tomorrow · 2:30 PM", detail: "Buyer consultation · Agent notified" },
];

function LeadJourney() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-12 rounded-[48px] bg-[radial-gradient(closest-side,rgba(61,107,255,0.25),transparent)] blur-2xl" aria-hidden />
      <div className="rise glass relative rounded-[24px] p-1.5" style={d(3)}>
        <div className="rounded-[19px] border border-line bg-canvas/85">
          <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
            <span className="t-small font-medium text-ink/85">Lead Journey</span>
            <span className="t-label inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 !text-[0.7rem] text-emerald-300">
              <span className="live-dot size-1.5 rounded-full bg-emerald-400" aria-hidden />
              Live
            </span>
          </div>
          <ol className="relative space-y-2.5 p-4 @3xl:space-y-3 @3xl:p-5">
            <span className="pipe-rail absolute bottom-12 left-[37px] top-12 w-px @3xl:left-[45px]" aria-hidden />
            {journey.map((s, i) => (
              <li key={s.label} className="rise relative flex gap-3 @3xl:gap-4" style={d(4 + i)}>
                <span
                  className={`relative z-10 grid size-10 shrink-0 place-items-center rounded-full border @3xl:size-12 ${
                    s.hi ? "border-accent/50 bg-accent/15 text-accent-soft" : "border-line-strong bg-surface-2 text-ink/80"
                  }`}
                >
                  <s.icon className="size-4 @3xl:size-5" aria-hidden />
                </span>
                <div className={`min-w-0 flex-1 rounded-xl border px-4 py-2.5 @3xl:py-3 ${s.hi ? "border-accent/30 bg-accent/[0.08]" : "border-line bg-white/[0.02]"}`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className="t-label !tracking-[0.16em] text-muted">{s.label}</span>
                    <span className="font-mono text-[11px] text-muted/70 @3xl:text-[13px]">{s.time}</span>
                  </div>
                  <p className="t-body mt-0.5 truncate font-medium text-ink">{s.title}</p>
                  <p className="t-small truncate text-muted">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function Cover() {
  return (
    <div className="flex flex-col gap-12 @3xl:grid @3xl:h-full @3xl:grid-cols-[1.15fr_0.85fr] @3xl:items-center @3xl:gap-20">
      <FloorPlan className="pointer-events-none absolute -bottom-10 -left-8 hidden w-[620px] text-white/[0.05] @3xl:block" />
      <div className="relative">
        <div className="rise" style={d(0)}>
          <Label>Realty AI Agency · Client Presentation</Label>
        </div>
        <h1 className="rise t-display mt-6 text-balance text-ink @3xl:mt-8" style={d(1)}>
          Turn Your Real Estate Leads Into <Accent>Conversations.</Accent>
        </h1>
        <p className="rise t-lead mt-6 max-w-[680px] text-pretty text-muted @3xl:mt-8" style={d(2)}>
          AI-powered lead generation and sales systems built for real estate agents, brokers, and teams.
        </p>
        <div className="rise mt-9 @3xl:mt-11" style={d(3)}>
          <BookCTA>Let&apos;s Build Your AI Sales System</BookCTA>
        </div>
      </div>
      <LeadJourney />
    </div>
  );
}

/* ------------------------------------------------------------------ 02 */

const problems = [
  { icon: Timer, text: "Leads aren't contacted quickly enough" },
  { icon: House, text: "Agents are busy showing properties" },
  { icon: Shuffle, text: "Follow-up becomes inconsistent" },
  { icon: Archive, text: "Old CRM leads are forgotten" },
  { icon: Search, text: "Outbound prospecting takes too much time" },
  { icon: PhoneMissed, text: "Missed calls become missed opportunities" },
  { icon: CircleHelp, text: "Agents spend time answering repetitive questions" },
  { icon: UserX, text: "Leads aren't properly qualified" },
];

const stages = [
  { name: "Inquiry", dots: 14 },
  { name: "First response", dots: 10, drop: "Slow first reply" },
  { name: "Follow-up", dots: 7, drop: "Agent at a showing" },
  { name: "Qualified", dots: 4, drop: "Follow-up forgotten" },
  { name: "Appointment", dots: 2, drop: "Never qualified" },
];

function Problem() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-9">
      <div className="flex flex-col gap-8 @3xl:grid @3xl:grid-cols-[0.78fr_1.22fr] @3xl:gap-16">
        <Heading
          eyebrow="The real estate lead problem"
          title={
            <>
              The Problem Isn&apos;t Always <Accent>Getting Leads.</Accent>
            </>
          }
          sub="It's what happens after the lead comes in."
        />
        <ul className="grid gap-x-8 gap-y-3 @2xl:grid-cols-2 @3xl:gap-y-4 @3xl:self-end">
          {problems.map((p, i) => (
            <li key={p.text} className="rise flex items-center gap-3.5 border-b border-line pb-3 @3xl:pb-4" style={d(2 + i * 0.5)}>
              <p.icon className="size-5 shrink-0 text-accent-soft" aria-hidden />
              <span className="t-body text-ink/85">{p.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <Panel className="rise p-5 @3xl:my-auto @3xl:p-7" style={d(6)}>
        <div className="flex items-center justify-between">
          <p className="t-small font-medium text-ink/85">Where leads fall out of the pipeline</p>
          <span className="t-label rounded-full border border-line px-2.5 py-1 !text-[0.66rem] text-muted">Illustrative</span>
        </div>
        <ol className="mt-5 grid gap-3 @3xl:mt-6 @3xl:grid-cols-5 @3xl:gap-4">
          {stages.map((s, i) => (
            <li key={s.name} className="flex items-center gap-3 @3xl:flex-col @3xl:items-stretch @3xl:gap-3">
              <div className="hidden h-[68px] flex-wrap content-end justify-center gap-1.5 @3xl:flex" aria-hidden>
                {Array.from({ length: s.dots }).map((_, j) => (
                  <span key={j} className="size-3 rounded-full" style={{ background: `rgba(138,166,255,${0.95 - i * 0.14})` }} />
                ))}
              </div>
              <div
                className="t-small flex h-11 min-w-[9.5rem] items-center justify-center rounded-lg border px-3 font-medium text-ink @3xl:h-12"
                style={{ borderColor: `rgba(61,107,255,${0.45 - i * 0.08})`, background: `rgba(61,107,255,${0.16 - i * 0.03})` }}
              >
                {s.name}
              </div>
              <p className="t-small text-muted @3xl:text-center">{s.drop ? `↓ ${s.drop}` : "Lead comes in"}</p>
            </li>
          ))}
        </ol>
      </Panel>
    </div>
  );
}

/* ------------------------------------------------------------------ 03 */

const funnel = [
  "Lead Comes In",
  "No Immediate Response",
  "Lead Loses Interest",
  "Follow-Up Gets Delayed",
  "Opportunity Goes Cold",
  "Potential Revenue Is Lost",
];

function MissedLeads() {
  return (
    <div className="flex flex-col gap-12 @3xl:grid @3xl:h-full @3xl:grid-cols-[1.05fr_0.95fr] @3xl:items-center @3xl:gap-20">
      <div>
        <div className="rise" style={d(0)}>
          <Label>What happens to missed leads?</Label>
        </div>
        <div className="relative mt-8 @3xl:mt-10 @3xl:pl-40">
          <div className="rise absolute left-0 top-0 hidden h-[140px] w-32 @3xl:block" style={d(8)} aria-hidden>
            <span className="absolute right-3 top-1 h-[132px] w-px bg-accent" />
            <span className="absolute right-3 top-1 h-px w-3 bg-accent" />
            <span className="absolute bottom-0 right-3 h-px w-3 bg-accent" />
            <span className="t-label absolute right-7 top-1/2 w-28 -translate-y-1/2 text-right !text-[0.72rem] leading-relaxed text-accent-soft">
              AI steps in here
            </span>
          </div>
          <ol className="space-y-2.5 @3xl:space-y-3">
            {funnel.map((f, i) => {
              const last = i === funnel.length - 1;
              return (
                <li
                  key={f}
                  className={`rise t-body mx-auto flex h-12 items-center justify-center rounded-xl border px-4 text-center font-medium @3xl:h-[60px] ${
                    last
                      ? "border-rose-400/25 bg-rose-400/[0.07] text-rose-200/90"
                      : i < 2
                        ? "border-accent/40 bg-accent/15 text-ink"
                        : "border-line bg-white/[0.03] text-ink/75"
                  }`}
                  style={{ ...d(1 + i), width: `${100 - i * 9}%` }}
                >
                  {f}
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div>
        <p className="rise t-label text-gold" style={d(8)}>
          The opportunity
        </p>
        <h2 className="rise t-h1 mt-5 text-balance text-ink" style={d(9)}>
          What if AI handled the first part of that process <Accent>automatically?</Accent>
        </h2>
        <p className="rise t-lead mt-6 text-pretty text-muted" style={d(10)}>
          Responding, qualifying, and following up are where most leads slip — and exactly the steps a well-built AI
          system can run for you.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ 04 */

const capabilities = [
  { icon: ListChecks, text: "Generate targeted lead lists" },
  { icon: MessageSquareText, text: "Respond to inbound inquiries" },
  { icon: Send, text: "Start outbound conversations" },
  { icon: BadgeCheck, text: "Qualify prospects" },
  { icon: RefreshCcw, text: "Follow up automatically" },
  { icon: Archive, text: "Re-engage old leads" },
  { icon: CalendarCheck, text: "Book appointments" },
  { icon: Database, text: "Update CRM systems" },
  { icon: Sparkles, text: "Reduce repetitive manual work" },
];

function Introducing() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-8">
      <div className="flex flex-col gap-10 @3xl:grid @3xl:flex-1 @3xl:grid-cols-[0.82fr_1.18fr] @3xl:items-center @3xl:gap-16">
        <Heading
          eyebrow="Introducing"
          title={
            <>
              Meet <Accent>Realty AI Agency</Accent>
            </>
          }
          sub="We build AI-powered lead generation and sales systems specifically for real estate businesses."
        />
        <div>
          <p className="rise t-label text-muted" style={d(2)}>
            Our systems can help
          </p>
          <ul className="mt-5 grid grid-cols-1 gap-3 @2xl:grid-cols-2 @3xl:grid-cols-3 @3xl:gap-4">
            {capabilities.map((c, i) => (
              <li key={c.text} className="rise flex items-center gap-3.5 rounded-2xl border border-line bg-surface/70 p-4 @3xl:flex-col @3xl:items-start @3xl:gap-5 @3xl:p-5" style={d(3 + i * 0.6)}>
                <c.icon className="size-5 text-accent-soft @3xl:size-6" aria-hidden />
                <span className="t-body font-medium leading-snug text-ink">{c.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rise flex items-center gap-4 rounded-2xl border border-gold/25 bg-gold/[0.05] px-5 py-5 @3xl:gap-6 @3xl:px-8 @3xl:py-6" style={d(9)}>
        <span className="h-px w-8 shrink-0 bg-gold @3xl:w-12" aria-hidden />
        <p className="text-lg font-medium tracking-[-0.02em] text-ink @3xl:text-[1.9rem]">
          Your team focuses on the opportunities. <Accent>AI handles the repetitive work.</Accent>
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ 05 */

const architecture = [
  { icon: Target, name: "Lead Generation", caption: "Targeted lists & lead sources" },
  { icon: Bot, name: "AI Inbound / Outbound Agents", caption: "Conversations on every channel", hi: true },
  { icon: BadgeCheck, name: "Lead Qualification", caption: "Intent, timeline, budget" },
  { icon: RefreshCcw, name: "Follow-Up", caption: "Automatic, multi-step" },
  { icon: Database, name: "CRM", caption: "Every lead logged & updated" },
  { icon: CalendarCheck, name: "Appointment Booking", caption: "Straight onto the calendar" },
  { icon: Users, name: "Sales Team", caption: "Qualified conversations", team: true },
];

function WhatWeBuild() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-0">
      <Heading
        eyebrow="What we actually build"
        title={
          <>
            We&apos;re Not Just Building <Accent>Chatbots.</Accent>
          </>
        }
        sub="We build complete AI sales workflows around your real estate business."
      />

      <div className="@3xl:my-auto">
        <ol className="relative grid gap-3 @3xl:grid-cols-7 @3xl:gap-5">
          <span className="flow-line absolute left-[7%] right-[7%] top-[58px] hidden h-px @3xl:block" aria-hidden />
          <span className="flow-line-v absolute bottom-6 left-[27px] top-6 w-px @3xl:hidden" aria-hidden />
          {architecture.map((n, i) => (
            <li key={n.name} className="rise relative" style={d(3 + i * 0.7)}>
              <div
                className={`relative flex h-full items-center gap-4 rounded-2xl border p-3 @3xl:flex-col @3xl:items-start @3xl:gap-0 @3xl:p-5 ${
                  n.hi
                    ? "border-accent/40 bg-[#0d1426]"
                    : n.team
                      ? "border-gold/35 bg-[#141209]"
                      : "border-line bg-surface"
                }`}
              >
                <IconBox icon={n.icon} accent={n.hi} className={n.team ? "!border-gold/40 !text-gold" : ""} />
                <div className="@3xl:mt-6">
                  <p className="t-label !text-[0.7rem] text-muted">{String(i + 1).padStart(2, "0")}</p>
                  <p className="mt-1 text-[1.02rem] font-semibold leading-tight tracking-[-0.02em] text-ink @3xl:mt-2 @3xl:text-[1.22rem]">
                    {n.name}
                  </p>
                  <p className="t-small mt-1.5 text-muted @3xl:mt-2 @3xl:!text-[0.98rem]">{n.caption}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="rise mt-5 hidden grid-cols-7 gap-5 @3xl:grid" style={d(9)} aria-hidden>
          <div className="col-span-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/60 to-accent/60" />
            <span className="t-label inline-flex items-center gap-2 text-accent-soft">
              <Workflow className="size-4" /> Automated by your AI system
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-accent/60 to-accent/60" />
          </div>
          <div className="flex items-center justify-center">
            <span className="t-label text-gold">Your team</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export const storySlides = [
  { title: "Cover", section: "Introduction", tone: "glow", grid: true, Body: Cover },
  { title: "The Real Estate Lead Problem", section: "The Problem", Body: Problem },
  { title: "What Happens to Missed Leads?", section: "The Problem", tone: "charcoal", Body: MissedLeads },
  { title: "Introducing Realty AI Agency", section: "The Solution", Body: Introducing },
  { title: "What We Actually Build", section: "The Solution", tone: "charcoal", Body: WhatWeBuild },
] as const;
