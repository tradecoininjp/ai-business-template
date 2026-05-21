import Image from "next/image";
import { businessConfig } from "@/constants/business";
import { Badge, Button, Card, CTAButton } from "@/components/ui";
import { Container } from "@/components/layout/container";
import { TrustIndicators } from "@/components/shared/trust-indicators";

export function HeroSection() {
  const isSvgHero = businessConfig.hero.backgroundImage.src.endsWith(".svg");

  return (
    <section id="home" className="relative isolate overflow-hidden border-b border-[var(--color-border)]">
      <Image
        src={businessConfig.hero.backgroundImage.src}
        alt={businessConfig.hero.backgroundImage.alt}
        fill
        priority
        unoptimized={isSvgHero}
        sizes="100vw"
        decoding="async"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080807] via-black/85 to-[#0c0b09]/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,165,96,0.16),transparent_40%)]" />
      <div className="absolute inset-0 mesh-overlay opacity-25" />
      <div className="absolute right-[-10rem] top-10 h-80 w-80 rounded-full bg-[var(--color-gold)]/10 blur-3xl animate-float-slow" />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="max-w-2xl">
            <Badge className="animate-fade-up">{businessConfig.hero.eyebrow}</Badge>
            <h1 className="animate-fade-up-delay mt-5 font-display text-4xl leading-[1.06] text-zinc-100 sm:text-5xl lg:text-[3.8rem]">
              {businessConfig.hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">{businessConfig.hero.subheadline}</p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CTAButton href={businessConfig.hero.primaryCtaHref} size="lg">
                {businessConfig.hero.primaryCtaLabel}
              </CTAButton>
              <Button href={businessConfig.hero.secondaryCtaHref} variant="secondary">
                {businessConfig.hero.secondaryCtaLabel}
              </Button>
            </div>

            <p className="mt-4 text-sm text-zinc-300">
              Prefer to call?{" "}
              <a href={`tel:${businessConfig.business.phone}`} className="font-semibold text-[var(--color-gold-soft)] hover:text-[var(--color-gold)]">
                {businessConfig.business.phone}
              </a>
            </p>

            <div className="mt-8">
              <TrustIndicators indicators={businessConfig.trustIndicators} />
            </div>
          </div>

          <Card className="animate-fade-up border-[var(--color-border)] bg-black/45 p-5 backdrop-blur-md sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">
              {businessConfig.booking.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-zinc-100">{businessConfig.booking.title}</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{businessConfig.booking.description}</p>
            <div className="mt-7 space-y-3">
              <Button href={`tel:${businessConfig.business.phone}`} fullWidth>
                Call {businessConfig.business.phone}
              </Button>
              <Button href={businessConfig.booking.primaryCtaHref} variant="secondary" fullWidth>
                {businessConfig.booking.primaryCtaLabel}
              </Button>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3 text-center">
              {businessConfig.trustMetrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-zinc-700/60 bg-black/40 px-3 py-3">
                  <p className="font-display text-xl text-[var(--color-gold-soft)]">{metric.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-zinc-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
