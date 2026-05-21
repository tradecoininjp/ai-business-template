import { businessConfig } from "@/constants/business";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/ui/section-title";
import type { Testimonial } from "@/types/business";

type TestimonialsSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  testimonials?: Testimonial[];
};

export function TestimonialsSection({
  id = "testimonials",
  eyebrow = "Client Voices",
  title = "Trusted by clients who expect consistency",
  description =
    "These reviews are rendered directly from centralized content, so testimonials can be customized per local business without touching section markup.",
  testimonials = businessConfig.testimonials,
}: TestimonialsSectionProps) {
  return (
    <section id={id} className="border-b border-[var(--color-border)] bg-black py-20 sm:py-24">
      <Container>
        <SectionTitle eyebrow={eyebrow} title={title} description={description} centered />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`${testimonial.name}-${testimonial.role}`} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
