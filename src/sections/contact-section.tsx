import { businessConfig } from "@/constants/business";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { BusinessIdentity, ContactContent } from "@/types/business";

const inputClassName =
  "rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-[var(--color-gold)]";

type ContactSectionProps = {
  id?: string;
  content?: ContactContent;
  business?: BusinessIdentity;
};

export function ContactSection({
  id = "contact",
  content = businessConfig.contact,
  business = businessConfig.business,
}: ContactSectionProps) {
  return (
    <section id={id} className="bg-black py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.description} />

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">{content.infoTitle}</p>
            <div className="mt-8 space-y-3 text-sm text-zinc-300">
              <p>{business.address}</p>
              <a href={`mailto:${business.email}`} className="block hover:text-[var(--color-gold-soft)]">
                {business.email}
              </a>
              <a href={`tel:${business.phone}`} className="block hover:text-[var(--color-gold-soft)]">
                {business.phone}
              </a>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">{content.hoursTitle}</p>
            <div className="mt-8 space-y-2 text-sm text-zinc-400">
              {content.businessHours.map((item) => (
                <div key={item.day} className="flex items-center justify-between border-b border-zinc-800 py-2">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--color-gold)]">{content.formTitle}</p>
            <p className="mt-3 text-sm text-zinc-300">{content.formDescription}</p>

            <form className="grid gap-4">
              <input
                type="text"
                name="name"
                placeholder={content.formPlaceholders.name}
                className={inputClassName}
              />
              <input
                type="email"
                name="email"
                placeholder={content.formPlaceholders.email}
                className={inputClassName}
              />
              <input
                type="tel"
                name="phone"
                placeholder={content.formPlaceholders.phone}
                className={inputClassName}
              />
              <textarea
                name="message"
                placeholder={content.formPlaceholders.message}
                rows={5}
                className={inputClassName}
              />
              <Button type="submit">{content.formCtaLabel}</Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
