import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { CentralizesSection } from "@/components/landing/CentralizesSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { TargetSection } from "@/components/landing/TargetSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <CentralizesSection />
        <TargetSection />
        <BenefitsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
