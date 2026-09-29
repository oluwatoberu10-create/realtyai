import { Archive, DoorOpen, Globe, House, KeyRound, PhoneMissed, Signpost, TimerOff } from "lucide-react";
import { Accent, Container, SectionHeading } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const useCases = [
  { icon: KeyRound, title: "Buyer Leads", body: "Capture, qualify, and follow up with potential buyers." },
  { icon: House, title: "Seller Leads", body: "Identify potential sellers and automate initial outreach and follow-up." },
  { icon: TimerOff, title: "Expired Listings", body: "Build workflows for contacting and nurturing expired listing opportunities where permitted." },
  { icon: Signpost, title: "FSBO", body: "Create prospecting and follow-up workflows for for-sale-by-owner opportunities." },
  { icon: Archive, title: "Old CRM Leads", body: "Automatically re-engage leads that went cold." },
  { icon: DoorOpen, title: "Open House Leads", body: "Follow up with prospects after an open house." },
  { icon: Globe, title: "Website Leads", body: "Respond instantly when someone submits a form or starts a conversation." },
  { icon: PhoneMissed, title: "Missed Calls", body: "Automatically follow up with people who called but didn't connect." },
];

export function UseCases() {
  return (
    <section aria-labelledby="usecases-title" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          id="usecases-title"
          eyebrow="Use cases"
          title={
            <>
              Built Around the Way Real Estate <Accent>Actually Works.</Accent>
            </>
          }
          description="Every lead source behaves differently. Each workflow is designed for the specific moment a prospect is in."
        />

        <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((u, i) => (
            <li key={u.title}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <article className="group relative flex h-full gap-4 rounded-2xl border border-line bg-surface/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-line-strong hover:bg-surface sm:block sm:p-6">
                  <u.icon className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-ink sm:mt-6">{u.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted sm:mt-2">{u.body}</p>
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
