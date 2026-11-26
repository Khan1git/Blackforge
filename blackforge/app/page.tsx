import { CtaBand } from "@/components/sections/CtaBand";
import { Hero } from "@/components/sections/Hero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TrustStrip } from "@/components/sections/TrustStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <SelectedWork />
      <ProcessSection />
      <CtaBand />
    </>
  );
}
