import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Work } from "@/components/sections/Work";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Clients } from "@/components/sections/Clients";
import { Portfolio } from "@/components/sections/Portfolio";
import { Founder } from "@/components/sections/Founder";
import { ContactBand } from "@/components/sections/ContactBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Work />
      <ServicesPreview />
      <Clients />
      <Portfolio />
      <Founder />
      <ContactBand />
    </>
  );
}
