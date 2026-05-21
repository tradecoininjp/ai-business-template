import { businessConfig } from "@/constants/business";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-[var(--color-border)] bg-black py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Card className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">Mission</p>
            <p className="mt-5 font-display text-3xl leading-tight text-zinc-100">{businessConfig.about.mission}</p>
          </Card>
          <SectionTitle
            eyebrow={businessConfig.about.eyebrow}
            title={businessConfig.about.title}
            description={businessConfig.about.description}
          />
        </div>
      </Container>
    </section>
  );
}
