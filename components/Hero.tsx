import { Globe, Mail, MessageCircle, Phone, Smartphone, Database } from "lucide-react";
import { site } from "@/lib/site";
import { Accent, Button, Container } from "./ui/primitives";
import { HeroPipeline } from "./HeroPipeline";

const channels = [
  { icon: Globe, label: "Website chat" },
  { icon: Smartphone, label: "SMS" },
  { icon: Phone, label: "Phone" },
  { icon: Mail, label: "Email" },
  { icon: MessageCircle, label: "Social DMs" },
  { icon: Database, label: "Your CRM" },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="hero-backdrop pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_1fr] lg:gap-12">
          <div>
            <p className="rise inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/[0.03] py-1 pl-1 pr-3.5 text-xs text-muted">
              <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-soft">
                Real Estate AI
              </span>
              Lead generation · AI agents · Automation
            </p>

            <h1
              id="hero-title"
              className="rise mt-7 text-balance text-[2.65rem] font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.1rem]"
              style={{ animationDelay: "80ms" }}
            >
              AI Systems Built to Help Real Estate Businesses <Accent>Win More Leads</Accent>
            </h1>

            <p
              className="rise mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-[1.2rem]"
              style={{ animationDelay: "160ms" }}
            >
              We build AI lead generation systems and AI agents that find prospects, respond to leads, qualify buyers
              and sellers, and keep your pipeline moving — automatically.
            </p>

            <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
              <Button href={site.bookingUrl} size="lg" arrow>
                Book a Strategy Call
              </Button>
              <Button href="#how-it-works" size="lg" variant="secondary">
                See How It Works
              </Button>
            </div>

            <p className="rise mt-6 flex items-center gap-2 text-sm text-muted" style={{ animationDelay: "320ms" }}>
              <span className="h-px w-5 bg-gold/70" aria-hidden />
              Built for real estate agents, brokers, teams &amp; real estate businesses.
            </p>
          </div>

          <HeroPipeline />
        </div>

        {/* channel strip */}
        <div className="rise mt-24 border-t border-line pb-6 pt-8 sm:mt-28" style={{ animationDelay: "600ms" }}>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            One system across every channel your leads already use
          </p>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12">
            {channels.map((c) => (
              <li key={c.label} className="flex items-center gap-2 text-sm text-ink/70">
                <c.icon className="size-4 text-muted" aria-hidden />
                {c.label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
