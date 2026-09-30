import type { Metadata } from "next";
import { Deck } from "@/components/deck/Deck";

export const metadata: Metadata = {
  title: "Realty AI Agency — Client Presentation",
  description: "AI systems that turn real estate leads into conversations.",
  // Sales material shared by link — keep it out of search results.
  robots: { index: false, follow: false },
};

export default function DeckPage() {
  return <Deck />;
}
