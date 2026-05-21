import { SiteShell } from "@/components/layout/site-shell";
import { AboutSection } from "@/sections/about-section";
import { BookingCtaSection } from "@/sections/booking-cta-section";
import { ContactSection } from "@/sections/contact-section";
import { HeroSection } from "@/sections/hero-section";
import { ServicesSection } from "@/sections/services-section";
import { TestimonialsSection } from "@/sections/testimonials-section";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <AboutSection />
      <BookingCtaSection />
      <ContactSection />
    </SiteShell>
  );
}
