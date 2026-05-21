import { businessConfig } from "@/constants/business";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { BookingContent } from "@/types/business";

type BookingCtaSectionProps = {
  id?: string;
  content?: BookingContent;
  fallbackPhone?: string;
};

export function BookingCtaSection({
  id = "book",
  content = businessConfig.booking,
  fallbackPhone = businessConfig.business.phone,
}: BookingCtaSectionProps) {
  const secondaryHref = content.secondaryCtaHref ?? `tel:${fallbackPhone}`;
  const secondaryLabel = content.secondaryCtaLabel ?? `Call ${fallbackPhone}`;

  return (
    <section id={id} className="border-b border-[var(--color-border)] bg-[var(--color-panel)] py-18 sm:py-20">
      <Container>
        <Card className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">{content.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl text-zinc-100 sm:text-4xl">{content.title}</h2>
            <p className="mt-4 text-zinc-300">{content.description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={content.primaryCtaHref}>{content.primaryCtaLabel}</Button>
            <Button href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}
