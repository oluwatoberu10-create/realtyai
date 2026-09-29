import {
  Archive,
  CircleHelp,
  Clock,
  Hourglass,
  PhoneMissed,
  Search,
  Shuffle,
  UserX,
} from "lucide-react";
import { Accent, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const problems = [
  { icon: Clock, title: "Leads come in while you're busy", body: "Showings, closings, and client calls don't pause when a new inquiry lands." },
  { icon: Hourglass, title: "Follow-up gets delayed", body: "By the time you reply, the prospect has already spoken to another agent." },
  { icon: Archive, title: "Old leads sit in the CRM", body: "Hundreds of past inquiries — never re-engaged, slowly going cold." },
  { icon: Search, title: "Hours lost to prospecting", body: "Building lists and making first touches eats the time you need for clients." },
  { icon: UserX, title: "Leads aren't properly qualified", body: "Serious buyers and sellers get the same attention as casual browsers." },
  { icon: PhoneMissed, title: "Missed calls, missed deals", body: "An unanswered call is often the last chance you get with that prospect." },
  { icon: CircleHelp, title: "The same questions, all day", body: "Price, availability, process, timing — answered manually, over and over." },
  { icon: Shuffle, title: "Inconsistent outbound", body: "Prospecting happens in bursts, so your pipeline rises and falls with it." },
];

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          id="problem-title"
          eyebrow="The problem"
          title={
            <>
              Most Real Estate Leads Don&apos;t Need More Attention. They Need <Accent>Faster Follow-Up.</Accent>
            </>
          }
          description="The opportunity is usually already there. It's lost in the gap between when a prospect raises their hand and when someone actually responds."
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <li key={p.title} className="bg-canvas">
              <Reveal delay={(i % 4) * 70} className="group h-full p-7 transition-colors duration-500 hover:bg-surface">
                <div className="flex items-center justify-between">
                  <p.icon className="size-5 text-muted transition-colors duration-500 group-hover:text-accent-soft" aria-hidden />
                  <span className="font-mono text-[11px] text-muted/60">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-[17px] font-medium tracking-[-0.015em] text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
