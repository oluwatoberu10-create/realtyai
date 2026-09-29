import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solutions } from "@/components/Solutions";
import { HowItWorks } from "@/components/HowItWorks";
import { Agents } from "@/components/Agents";
import { UseCases } from "@/components/UseCases";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { Comparison } from "@/components/Comparison";
import { SocialProof } from "@/components/SocialProof";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Problem />
        <Solutions />
        <HowItWorks />
        <Agents />
        <UseCases />
        <Benefits />
        <Pricing />
        <Comparison />
        <SocialProof />
        <Team />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
