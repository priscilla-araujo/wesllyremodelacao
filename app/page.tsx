import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { SiteHeader } from "@/components/site-header";
import { TrustStrip } from "@/components/trust-strip";
import { VideoSection } from "@/components/video-section";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <VideoSection />
        <WhyChooseUs />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
