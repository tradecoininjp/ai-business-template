import { businessConfig } from "@/constants/business";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

export function ContactSection() {
  return (
    <section id="contact" className="bg-black py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionTitle
              eyebrow={businessConfig.contact.eyebrow}
              title={businessConfig.contact.title}
              description={businessConfig.contact.description}
            />
            <div className="mt-8 space-y-3 text-sm text-zinc-300">
              <p>{businessConfig.business.address}</p>
              <a href={`mailto:${businessConfig.business.email}`} className="block hover:text-[var(--color-gold-soft)]">
                {businessConfig.business.email}
              </a>
              <a href={`tel:${businessConfig.business.phone}`} className="block hover:text-[var(--color-gold-soft)]">
                {businessConfig.business.phone}
              </a>
            </div>
            <div className="mt-8 space-y-2 text-sm text-zinc-400">
              {businessConfig.contact.businessHours.map((item) => (
                <div key={item.day} className="flex items-center justify-between border-b border-zinc-800 py-2">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <Card className="p-6 sm:p-8">
            <form className="grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-[var(--color-gold)]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-[var(--color-gold)]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-[var(--color-gold)]"
              />
              <textarea
                name="message"
                placeholder="Tell us what service you need"
                rows={5}
                className="rounded-2xl border border-zinc-700 bg-black px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-[var(--color-gold)]"
              />
              <Button type="submit">{businessConfig.contact.formCtaLabel}</Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
