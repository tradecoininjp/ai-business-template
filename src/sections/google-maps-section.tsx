import { businessConfig } from "@/constants/business";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { MapsContent } from "@/types/business";

type GoogleMapsSectionProps = {
  id?: string;
  content?: MapsContent;
};

export function GoogleMapsSection({ id = "map", content = businessConfig.maps }: GoogleMapsSectionProps) {
  return (
    <section id={id} className="border-b border-[var(--color-border)] bg-[var(--color-panel)] py-20 sm:py-24">
      <Container>
        <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.description} centered />

        <Card className="mt-10 overflow-hidden">
          <div className="aspect-[16/10] w-full md:aspect-[21/9]">
            <iframe
              title={content.title}
              src={content.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </Card>
      </Container>
    </section>
  );
}
