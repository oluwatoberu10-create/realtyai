// Single source of truth for brand + conversion settings.
// Swap `name` for the real agency name and `bookingUrl` for your scheduling link.
export const site = {
  name: "Realty AI Agency",
  tagline: "AI systems for modern real estate businesses.",
  bookingUrl: "https://calendly.com/oluwatoberu/consultation-for-travel-vloggers",
  contactEmail: "oluwatoberu10@gmail.com",
  nav: [
    { label: "Solutions", href: "#solutions" },
    { label: "AI Agents", href: "#agents" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Team", href: "#team" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
