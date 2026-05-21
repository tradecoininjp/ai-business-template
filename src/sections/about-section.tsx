import Image from "next/image";
import { businessConfig } from "@/constants/business";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { AboutContent } from "@/types/business";

type AboutSectionProps = {
  id?: string;
  content?: AboutContent;
};

export function AboutSection({ id = "about", content = businessConfig.about }: AboutSectionProps) {
  return (
    <section id={id} className="border-b border-[var(--color-border)] bg-black py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            {content.image && (
              <Card className="overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={content.image.src}
                    alt={content.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </Card>
            )}
            <Card className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">{content.missionLabel}</p>
              <p className="mt-5 font-display text-3xl leading-tight text-zinc-100">{content.mission}</p>
            </Card>
          </div>
          <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.description} />
        </div>
      </Container>
    </section>
  );
}
