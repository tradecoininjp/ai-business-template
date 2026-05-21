import { businessConfig } from "@/constants/business";
import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-black py-10">
      <Container className="grid gap-6 text-sm text-zinc-400 md:grid-cols-3 md:items-start">
        <div>
          <p className="font-display text-lg text-[var(--color-gold-soft)]">{businessConfig.business.name}</p>
          <p className="mt-2 max-w-xs leading-6">{businessConfig.business.slogan}</p>
        </div>
        <div>
          <p className="font-semibold text-zinc-200">Contact</p>
          <p className="mt-2">{businessConfig.business.address}</p>
          <a href={`mailto:${businessConfig.business.email}`} className="mt-2 block hover:text-[var(--color-gold-soft)]">
            {businessConfig.business.email}
          </a>
          <a href={`tel:${businessConfig.business.phone}`} className="mt-1 block hover:text-[var(--color-gold-soft)]">
            {businessConfig.business.phone}
          </a>
        </div>
        <div>
          <p className="font-semibold text-zinc-200">Explore</p>
          <div className="mt-2 flex flex-col gap-2">
            {businessConfig.navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[var(--color-gold-soft)]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
