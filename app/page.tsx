import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { HowWeWorkSection } from "@/components/how-we-work-section";
import { IndustriesSection } from "@/components/industries-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import { ServicesSection } from "@/components/services-section";
import { WhyFaxtorSection } from "@/components/why-faxtor-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <IndustriesSection />
      <HowWeWorkSection />
      <IntegrationsSection />
      <WhyFaxtorSection />
      <ContactSection />
    </main>
  );
}
