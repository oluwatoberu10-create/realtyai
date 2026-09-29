"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { site } from "@/lib/site";
import { Accent, Button, Container, SectionHeading } from "./ui/primitives";

const faqs = [
  {
    q: "What kind of real estate businesses do you work with?",
    a: "Real estate agents, brokers, teams, investors, property businesses, and other real estate professionals.",
  },
  {
    q: "Can you build an AI phone agent?",
    a: "Yes. Depending on the package and required workflow, an AI phone agent can be connected to the lead and CRM system.",
  },
  {
    q: "Can the AI generate leads?",
    a: "The system can support lead generation and prospecting workflows, including targeted lead lists and outbound processes through appropriate data sources and communication channels.",
  },
  {
    q: "Can it follow up with old leads?",
    a: "Yes. Re-engagement workflows can be built to reconnect with older leads inside your CRM.",
  },
  {
    q: "Does it work with my CRM?",
    a: "The system is designed to integrate with commonly used CRM and automation platforms where supported. We'll confirm compatibility with your specific setup on the strategy call.",
  },
  {
    q: "Can the AI book appointments?",
    a: "Yes. Appointment booking workflows can be connected to calendars and CRM systems.",
  },
  {
    q: "Is this a chatbot?",
    a: "Not necessarily. The system can include chat, SMS, email, phone, CRM automation, lead generation, and multiple AI agents depending on the setup.",
  },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <li className="border-b border-line">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-6 py-6 text-left text-[17px] font-medium tracking-[-0.015em] text-ink transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-lg"
        >
          {q}
          <span
            className={`grid size-8 shrink-0 place-items-center rounded-full border border-line-strong transition-all duration-300 ${
              open ? "rotate-45 border-accent/40 bg-accent/10 text-accent-soft" : "text-muted"
            }`}
          >
            <Plus className="size-4" aria-hidden />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-[grid-template-rows] duration-400 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-7 pr-12 leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </li>
  );
}

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="relative scroll-mt-20 border-t border-line py-28 sm:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              id="faq-title"
              eyebrow="FAQ"
              title={
                <>
                  Questions, <Accent>answered.</Accent>
                </>
              }
              description="Don't see yours? Bring it to a strategy call — we'll walk through your exact setup."
            />
            <Button href={site.bookingUrl} variant="secondary" arrow className="mt-8">
              Book a Strategy Call
            </Button>
          </div>
          <ul className="border-t border-line">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
