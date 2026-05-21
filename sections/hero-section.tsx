import Image from "next/image";
import { Container } from "@/components/layout/container";
import { PrimaryButton } from "@/components/ui/primary-button";
import { trustIndicators } from "@/constants/content";
import { siteConfig } from "@/constants/site";

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden border-b border-[var(--color-border)]">
      <Image
        src="/images/hero-barber.svg"
        alt="Luxury barber interior with modern styling chairs"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
      <div className="absolute inset-0 mesh-overlay opacity-30" />

      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-gold)]">
            Premium Grooming Studio
          </p>
          <h1 className="animate-fade-up-delay mt-5 font-display text-4xl leading-tight text-zinc-100 sm:text-5xl lg:text-6xl">
            Precision Cuts and Luxury Care for Modern Gentlemen.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
            {siteConfig.businessName} blends master craftsmanship with a high-end atmosphere for men who expect
            exceptional style every week.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PrimaryButton href="#book">Book Your Slot</PrimaryButton>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold-soft)]"
            >
              Call {siteConfig.phone}
            </a>
          </div>

          <ul className="mt-10 grid gap-3 text-sm text-zinc-300 sm:grid-cols-3">
            {trustIndicators.map((item) => (
              <li key={item} className="rounded-lg border border-zinc-700/60 bg-black/40 px-4 py-3 backdrop-blur-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
