import { businessConfig } from "@/constants/business";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function BookingCtaSection() {
  return (
    <section id="book" className="border-b border-[var(--color-border)] bg-[var(--color-panel)] py-18 sm:py-20">
      <Container>
        <Card className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">
              {businessConfig.booking.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-3xl text-zinc-100 sm:text-4xl">{businessConfig.booking.title}</h2>
            <p className="mt-4 text-zinc-300">{businessConfig.booking.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={businessConfig.booking.primaryCtaHref}>{businessConfig.booking.primaryCtaLabel}</Button>
            <Button href={`tel:${businessConfig.business.phone}`} variant="secondary">
              Call {businessConfig.business.phone}
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
