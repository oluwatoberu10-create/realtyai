import { site } from "@/lib/site";
import { Container } from "./ui/primitives";
import { Logo } from "./Logo";

const links = [
  { label: "Solutions", href: "#solutions" },
  { label: "AI Agents", href: "#agents" },
  { label: "Pricing", href: "#pricing" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: `mailto:${site.contactEmail}` },
];

export function Footer() {
  return (
    <footer className="pb-28 pt-16 sm:pb-12">
      <Container>
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{site.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-8 text-xs text-muted/80 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>AI systems for real estate agents, brokers & teams.</p>
        </div>
      </Container>
    </footer>
  );
}
