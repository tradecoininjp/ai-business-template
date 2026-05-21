import { SiteShell } from "@/components/layout/site-shell";
import { AboutSection } from "@/sections/about-section";
import { BookingCtaSection } from "@/sections/booking-cta-section";
import { ContactSection } from "@/sections/contact-section";
import { GallerySection } from "@/sections/gallery-section";
import { GoogleMapsSection } from "@/sections/google-maps-section";
import { HeroSection } from "@/sections/hero-section";
import { ServicesSection } from "@/sections/services-section";
import { TestimonialsSection } from "@/sections/testimonials-section";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <AboutSection />
      <BookingCtaSection />
      <ContactSection />
      <GoogleMapsSection />
    </SiteShell>
  );
}
