import { HeroSection } from "@/components/hero-section";
import { IndustriesSection } from "@/components/industries-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <ServicesSection />
        <IndustriesSection />
      </main>
      <SiteFooter />
    </>
  );
}
