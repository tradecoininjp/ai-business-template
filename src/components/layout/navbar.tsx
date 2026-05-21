"use client";

import Image from "next/image";
import Link from "next/link";
import { businessConfig } from "@/constants/business";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { useScrolled } from "@/hooks/use-scrolled";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/shared/nav-link";
import { cn } from "@/utils/cn";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = useScrolled();
  const activeHash = useActiveSection(businessConfig.navigation);

  useLockBodyScroll(menuOpen);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-[var(--color-border)] bg-black/72 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/55 via-black/30 to-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="#home" className="group flex items-center gap-3">
          {businessConfig.business.logo ? (
            <Image
              src={businessConfig.business.logo.src}
              alt={businessConfig.business.logo.alt}
              width={28}
              height={28}
              className="h-7 w-7 rounded-full border border-[var(--color-border)] bg-black/40 object-cover p-1"
            />
          ) : (
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-gold)] shadow-[0_0_20px_var(--color-gold)]" />
          )}
          <span className="font-display text-base tracking-[0.05em] text-[var(--color-gold-soft)] sm:text-lg">
            {businessConfig.business.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {businessConfig.navigation.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} active={activeHash === item.href} />
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`tel:${businessConfig.business.phone}`}
            className="text-sm font-medium text-zinc-300/95 transition-colors duration-300 hover:text-[var(--color-gold-soft)]"
          >
            {businessConfig.business.phone}
          </a>
          <Button href={businessConfig.business.bookingUrl}>Book Now</Button>
        </div>

        <button
          className="rounded-md border border-[var(--color-border)] bg-black/35 p-2 text-zinc-100 transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold-soft)] md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((previousValue) => !previousValue)}
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </Container>

      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 z-[-1] bg-black/45 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <MobileMenu open={menuOpen} activeHash={activeHash} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
