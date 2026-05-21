import { businessConfig } from "@/constants/business";
import { ServiceCard } from "@/components/shared/service-card";
import type { ServiceItem } from "@/types/business";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";

type ServicesSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  services?: ServiceItem[];
};

export function ServicesSection({
  id = "services",
  eyebrow = "Crafted Services",
  title = "Everything needed to stay sharp",
  description =
    "Service data is driven from centralized content files so this section can be swapped quickly for any local business vertical.",
  services = businessConfig.services,
}: ServicesSectionProps) {
  return (
    <section id={id} className="luxury-surface border-b border-[var(--color-border)] py-20 sm:py-24">
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} centered />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

