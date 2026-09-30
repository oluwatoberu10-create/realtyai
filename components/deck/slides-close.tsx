import Image from "next/image";
import { ArrowRight, Blocks, Building2, Check, Cpu, Network, Quote, TriangleAlert } from "lucide-react";
import { deckTagline, deckTeam } from "@/lib/deck";
import { testimonials, testimonialsVerified } from "@/lib/testimonials";
import { Logo } from "../Logo";
import { Accent, BookCTA, FloorPlan, Heading, Label, d } from "./kit";

/* ------------------------------------------------------------------ 22 */

const pillars = [
  { icon: Building2, name: "Real Estate Focus", body: "We design workflows around real estate lead generation and sales." },
  { icon: Cpu, name: "AI-First", body: "We use AI where it removes repetitive work and speeds up response times." },
  { icon: Blocks, name: "Custom Systems", body: "Built around your existing processes rather than forcing a generic system." },
  { icon: Network, name: "Connected Workflows", body: "Lead generation, conversations, CRM, follow-up, and appointments — connected." },
];

function WhyUs() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-0">
      <Heading
        eyebrow="Why Realty AI Agency"
        title={
          <>
            Built Specifically for <Accent>Real Estate</Accent>
          </>
        }
      />
      <ul className="grid gap-3 @2xl:grid-cols-2 @3xl:my-auto @3xl:grid-cols-4 @3xl:gap-5">
        {pillars.map((p, i) => (
          <li key={p.name} className="rise" style={d(3 + i * 0.6)}>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-6 @3xl:min-h-[400px] @3xl:p-8">
              <div className="flex items-start justify-between">
                <p.icon className="size-7 text-accent-soft @3xl:size-8" aria-hidden />
                <span className="font-serif text-4xl italic leading-none text-white/15 @3xl:text-6xl">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="t-label mt-8 !text-[0.9rem] !tracking-[0.18em] text-ink @3xl:my-auto">{p.name}</p>
              <p className="t-body mt-3 text-muted">{p.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ 23 */

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("");

function Testimonials() {
  return (
    <div className="flex flex-col gap-8 @3xl:h-full @3xl:gap-7">
      <div>
        <div className="rise flex flex-col gap-3 @2xl:flex-row @2xl:items-center @2xl:justify-between" style={d(0)}>
          <Label>Testimonials</Label>
          {!testimonialsVerified && (
            <p className="inline-flex items-center gap-2 self-start rounded-full border border-amber-400/30 bg-amber-400/[0.08] px-3 py-1.5 text-xs text-amber-200 @3xl:text-sm">
              <TriangleAlert className="size-3.5 shrink-0" aria-hidden />
              Internal: replace with verified client testimonials before external use.
            </p>
          )}
        </div>
        <h2 className="rise t-h1 mt-4 text-balance text-ink @3xl:mt-4 @3xl:whitespace-nowrap" style={d(1)}>
          What Real Estate Professionals <Accent>Are Saying</Accent>
        </h2>
      </div>
      <ul className="grid gap-4 @3xl:flex-1 @3xl:grid-cols-2 @3xl:gap-5">
        {testimonials.map((t, i) => (
          <li key={t.name} className="rise" style={d(3 + i * 0.5)}>
            <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-6 @3xl:px-8 @3xl:py-6">
              <Quote className="size-5 text-gold/80 @3xl:size-6" aria-hidden />
              <blockquote className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-ink/85 @3xl:text-[1.08rem]">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 flex items-center gap-3.5 border-t border-line pt-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line-strong bg-white/[0.04] text-sm font-medium text-ink/80" aria-hidden>
                  {initials(t.name)}
                </span>
                <span>
                  <span className="t-small block font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-muted @3xl:text-sm">
                    {t.role} — {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ 24 */

function Team() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-0">
      <Heading
        eyebrow="Team"
        title={
          <>
            The Team Behind <Accent>Realty AI</Accent>
          </>
        }
      />
      <ul className="grid gap-4 @3xl:my-auto @3xl:grid-cols-3 @3xl:gap-6">
        {deckTeam.map((m, i) => (
          <li key={m.name} className="rise" style={d(3 + i * 0.6)}>
            <figure className="h-full overflow-hidden rounded-3xl border border-line bg-surface">
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#121a33] via-[#0d1120] to-[#0a0b0f] @3xl:h-[250px]">
                {m.photo ? (
                  <Image src={m.photo} alt={`Portrait of ${m.name}`} fill sizes="480px" className="object-cover grayscale" />
                ) : (
                  <>
                    <FloorPlan className="absolute -right-10 -top-6 w-[360px] text-white/[0.06]" />
                    <span className="absolute inset-0 grid place-items-center font-serif text-7xl italic text-ink/85 @3xl:text-[6.5rem]" aria-hidden>
                      {initials(m.name)}
                    </span>
                  </>
                )}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface to-transparent" aria-hidden />
              </div>
              <figcaption className="px-6 pb-6 @3xl:px-7 @3xl:pb-7">
                <p className="text-2xl font-semibold tracking-[-0.03em] text-ink @3xl:text-[1.75rem]">{m.name}</p>
                <p className="t-label mt-2 !text-[0.72rem] text-accent-soft">{m.role}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {m.focus.map((f) => (
                    <li key={f} className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-ink/75 @3xl:text-sm">
                      {f}
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ 25 */

const next = [
  { name: "Book Your Strategy Call", body: "We discuss your current lead flow and sales process." },
  { name: "Choose Your System", body: "Select the package or custom scope that fits your business." },
  { name: "We Build It", body: "Our team designs, develops, tests, and launches your AI system." },
];

function NextSteps() {
  return (
    <div className="flex flex-col gap-10 @3xl:h-full @3xl:gap-0">
      <Heading
        eyebrow="What happens next?"
        title={
          <>
            Ready to Build <Accent>Your System?</Accent>
          </>
        }
      />
      <ol className="flex flex-col gap-3 @3xl:my-auto @3xl:grid @3xl:grid-cols-[1fr_auto_1fr_auto_1fr] @3xl:items-stretch @3xl:gap-5">
        {next.map((s, i) => (
          <li key={s.name} className="contents">
            <div className="rise rounded-3xl border border-line bg-surface p-6 @3xl:p-9" style={d(3 + i)}>
              <p className="font-serif text-6xl italic leading-none text-accent-soft/80 @3xl:text-[6rem]">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-ink @3xl:mt-10 @3xl:text-[2rem]">{s.name}</p>
              <p className="t-body mt-3 text-muted">{s.body}</p>
            </div>
            {i < next.length - 1 && (
              <span className="hidden place-items-center text-white/25 @3xl:grid" aria-hidden>
                <ArrowRight className="size-6" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ------------------------------------------------------------------ 26 */

const verbs = ["Generate Leads.", "Start Conversations.", "Qualify Prospects.", "Follow Up.", "Book Appointments."];

function FinalCTA() {
  return (
    <div className="flex flex-col items-center justify-center text-center @3xl:h-full">
      <div className="rise" style={d(0)}>
        <Label>Your next step</Label>
      </div>
      <h2 className="rise t-display mt-6 text-balance text-ink @3xl:mt-8 @3xl:!text-[7rem]" style={d(1)}>
        Ready to Get Started <Accent>Now?</Accent>
      </h2>
      <p className="rise t-lead mt-6 max-w-[900px] text-pretty text-muted @3xl:mt-7" style={d(2)}>
        Let&apos;s build an AI-powered lead system around your real estate business.
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 @3xl:mt-10 @3xl:gap-x-9">
        {verbs.map((v, i) => (
          <li key={v} className="rise inline-flex items-center gap-2 text-base font-medium tracking-[-0.015em] text-ink @3xl:text-[1.45rem]" style={d(3 + i * 0.4)}>
            <Check className="size-4 text-accent-soft @3xl:size-5" aria-hidden />
            {v}
          </li>
        ))}
      </ul>
      <div className="rise mt-10 @3xl:mt-14" style={d(6)}>
        <BookCTA size="xl">Book Your Strategy Call</BookCTA>
      </div>
      <div className="rise mt-10 flex flex-col items-center gap-2 @3xl:mt-12" style={d(7)}>
        <Logo />
        <p className="font-serif text-lg italic text-ink/60 @3xl:text-xl">{deckTagline}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ 27 */

function Closing() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center @3xl:h-full">
      <FloorPlan className="pointer-events-none absolute left-1/2 top-1/2 hidden w-[900px] -translate-x-1/2 -translate-y-1/2 text-white/[0.035] @3xl:block" />
      <p className="rise relative text-3xl font-semibold tracking-[0.18em] text-ink @3xl:text-[4.5rem] @3xl:tracking-[0.16em]" style={d(0)}>
        REALTY AI AGENCY
      </p>
      <p className="rise t-lead relative mt-5 text-muted @3xl:mt-6" style={d(1)}>
        AI-powered lead generation and sales automation for real estate.
      </p>
      <span className="rise relative mt-12 h-px w-24 bg-gold/70 @3xl:mt-16" style={d(2)} aria-hidden />
      <p className="rise relative mt-12 font-serif text-3xl italic text-ink @3xl:mt-16 @3xl:text-[3.2rem]" style={d(3)}>
        Ready to get started now?
      </p>
      <div className="rise relative mt-8 @3xl:mt-10" style={d(4)}>
        <BookCTA>Book Your Strategy Call</BookCTA>
      </div>
    </div>
  );
}

export const closeSlides = [
  { title: "Why Realty AI Agency", section: "Why Us", Body: WhyUs },
  { title: "Testimonials", section: "Why Us", tone: "charcoal", Body: Testimonials },
  { title: "Team", section: "Why Us", Body: Team },
  { title: "What Happens Next?", section: "Next Steps", tone: "charcoal", Body: NextSteps },
  { title: "Ready to Get Started Now?", section: "Next Steps", tone: "final", grid: true, Body: FinalCTA },
  { title: "Contact", section: "Contact", tone: "glow", Body: Closing },
] as const;
