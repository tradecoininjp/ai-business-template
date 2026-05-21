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
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080807] via-black/85 to-[#0c0b09]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,165,96,0.16),transparent_40%)]" />
      <div className="absolute inset-0 mesh-overlay opacity-25" />
      <div className="absolute right-[-10rem] top-10 h-80 w-80 rounded-full bg-[var(--color-gold)]/10 blur-3xl animate-float-slow" />

      <Container className="relative py-18 sm:py-22 lg:py-30">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Premium Grooming Studio
            </p>
            <h1 className="animate-fade-up-delay mt-6 font-display text-4xl leading-[1.05] text-zinc-100 sm:text-5xl lg:text-[3.8rem]">
              Look Sharp Every Week With Precision Barber Craft.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              {siteConfig.businessName} delivers executive-level cuts, beard detailing, and luxury care designed for
              men who value first impressions.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PrimaryButton href="#book">Book in 30 Seconds</PrimaryButton>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-zinc-600 bg-black/30 px-6 py-3 text-sm font-semibold text-zinc-100 transition duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold-soft)]"
              >
                View Signature Services
              </a>
            </div>

            <ul className="mt-8 grid gap-3 text-sm text-zinc-300 sm:grid-cols-3">
              {trustIndicators.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-zinc-700/60 bg-black/45 px-4 py-3 backdrop-blur-sm transition hover:border-[var(--color-gold)]/60"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="animate-fade-up rounded-2xl border border-[var(--color-border)] bg-black/45 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">Quick Booking</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-zinc-100">Get Your Preferred Time Slot Today</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">
              Prime evening slots fill quickly. Call now or secure your appointment online in under a minute.
            </p>
            <div className="mt-7 space-y-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex w-full items-center justify-center rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[var(--color-gold-soft)]"
              >
                Call {siteConfig.phone}
              </a>
              <a
                href="#book"
                className="inline-flex w-full items-center justify-center rounded-full border border-zinc-600 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold-soft)]"
              >
                Reserve Online
              </a>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg border border-zinc-700/60 bg-black/40 px-3 py-3">
                <p className="font-display text-xl text-[var(--color-gold-soft)]">15+</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-400">Years</p>
              </div>
              <div className="rounded-lg border border-zinc-700/60 bg-black/40 px-3 py-3">
                <p className="font-display text-xl text-[var(--color-gold-soft)]">4.9</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-400">Rating</p>
              </div>
              <div className="rounded-lg border border-zinc-700/60 bg-black/40 px-3 py-3">
                <p className="font-display text-xl text-[var(--color-gold-soft)]">2k+</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-400">Clients</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
