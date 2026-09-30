// Content for the client sales deck (/deck). Pricing lives here so every slide agrees.

export const deckTagline = "AI Systems That Turn Real Estate Leads Into Conversations.";

export type Plan = {
  name: string;
  price: number;
  pitch: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Starter",
    price: 500,
    pitch: "For businesses that need a foundational AI lead system.",
    features: [
      "Basic lead-generation setup",
      "Lead list setup",
      "Basic AI agent",
      "Lead capture",
      "Basic qualification",
      "Basic follow-up",
      "CRM connection",
      "Setup & configuration",
    ],
  },
  {
    name: "Growth",
    price: 1500,
    pitch: "For teams ready to automate inbound, outbound, and booking.",
    featured: true,
    features: [
      "Everything in Starter",
      "Advanced lead generation",
      "AI inbound agent",
      "AI outbound workflow",
      "Lead qualification",
      "Automated follow-up",
      "Appointment booking",
      "CRM automation",
      "Multi-step nurturing",
      "Custom workflow setup",
    ],
  },
  {
    name: "Scale",
    price: 3000,
    pitch: "For businesses that want a more complete AI sales system.",
    features: [
      "Everything in Growth",
      "Custom AI agents",
      "Advanced inbound & outbound workflows",
      "Advanced CRM automation",
      "Lead re-engagement",
      "Multiple AI agents",
      "Advanced appointment automation",
      "Custom integrations",
      "Custom dashboards/reporting",
      "Advanced workflow architecture",
      "Priority implementation",
    ],
  },
];

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

type Cell = boolean | string;
export const comparison: [string, Cell, Cell, Cell][] = [
  ["Lead Generation", true, true, true],
  ["Lead Lists", true, true, true],
  ["AI Agent", true, true, true],
  ["Lead Qualification", true, true, true],
  ["Follow-Up", "Basic", "Advanced", "Advanced"],
  ["Inbound AI", false, true, true],
  ["Outbound AI", false, true, true],
  ["Appointment Booking", false, true, true],
  ["CRM Automation", "Basic", "Advanced", "Advanced"],
  ["Re-Engagement", false, true, true],
  ["Multiple AI Agents", false, false, true],
  ["Custom Integrations", false, false, true],
  ["Custom Dashboard", false, false, true],
];

export type TeamMember = {
  name: string;
  role: string;
  focus: string[];
  /** Path under /public. Leave undefined to show the monogram placeholder. */
  photo?: string;
};

export const deckTeam: TeamMember[] = [
  {
    name: "Oluwatoberu",
    role: "Founder & AI Systems Strategist",
    focus: ["AI lead generation", "AI agents", "Sales automation", "Real estate workflows"],
  },
  {
    name: "Marcus James",
    role: "AI Automation Engineer",
    focus: ["AI agents", "CRM automation", "Integrations", "Inbound & outbound systems"],
  },
  {
    name: "Sofia Carter",
    role: "Real Estate Growth Strategist",
    focus: ["Lead generation", "Prospecting", "Qualification", "Sales workflows"],
  },
];
