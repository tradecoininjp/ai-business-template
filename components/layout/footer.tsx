import { Container } from "@/components/layout/container";
import { siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-black py-10">
      <Container className="flex flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>{siteConfig.businessName}</p>
        <p>{siteConfig.address}</p>
        <a href={`tel:${siteConfig.phone}`} className="transition hover:text-[var(--color-gold-soft)]">
          {siteConfig.phone}
        </a>
      </Container>
    </footer>
  );
}
