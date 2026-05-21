import { businessConfig } from "@/constants/business";
import { Container } from "@/components/layout/container";
import type { BusinessIdentity, FooterContent, NavItem, SocialLinks } from "@/types/business";

const socialLabelMap: Record<keyof SocialLinks, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  x: "X",
  tiktok: "TikTok",
  youtube: "YouTube",
};

type FooterProps = {
  business?: BusinessIdentity;
  navigation?: NavItem[];
  socialLinks?: SocialLinks;
  content?: FooterContent;
};

export function Footer({
  business = businessConfig.business,
  navigation = businessConfig.navigation,
  socialLinks = businessConfig.socialLinks,
  content = businessConfig.footer,
}: FooterProps) {
  const socialEntries = Object.entries(socialLinks).filter(([, url]) => Boolean(url));

  return (
    <footer className="border-t border-[var(--color-border)] bg-black py-10">
      <Container className="grid gap-6 text-sm text-zinc-400 md:grid-cols-4 md:items-start">
        <div>
          <p className="font-display text-lg text-[var(--color-gold-soft)]">{business.name}</p>
          <p className="mt-2 max-w-xs leading-6">{business.slogan}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-zinc-500">{content.copyrightText}</p>
        </div>
        <div>
          <p className="font-semibold text-zinc-200">{content.contactLabel}</p>
          <p className="mt-2">{business.address}</p>
          <a href={`mailto:${business.email}`} className="mt-2 block hover:text-[var(--color-gold-soft)]">
            {business.email}
          </a>
          <a href={`tel:${business.phone}`} className="mt-1 block hover:text-[var(--color-gold-soft)]">
            {business.phone}
          </a>
        </div>
        <div>
          <p className="font-semibold text-zinc-200">{content.exploreLabel}</p>
          <div className="mt-2 flex flex-col gap-2">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[var(--color-gold-soft)]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-zinc-200">{content.socialLabel}</p>
          <div className="mt-2 flex flex-col gap-2">
            {socialEntries.map(([network, url]) => (
              <a
                key={network}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--color-gold-soft)]"
              >
                {socialLabelMap[network as keyof SocialLinks]}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
