"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/constants/content";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/layout/container";
import { PrimaryButton } from "@/components/ui/primary-button";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

function NavLink({ href, label, active = false, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative text-sm font-medium tracking-wide transition-colors duration-300",
        active ? "text-[var(--color-gold-soft)]" : "text-zinc-200/90 hover:text-[var(--color-gold-soft)]",
      )}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-px w-full origin-left bg-[var(--color-gold)] transition-transform duration-300",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </a>
  );
}

type MobileMenuProps = {
  open: boolean;
  activeHash: string;
  onClose: () => void;
};

function MobileMenu({ open, activeHash, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-panel)]/95 backdrop-blur transition-all duration-300 md:hidden",
        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
      )}
    >
      <Container className="flex flex-col gap-5 py-5">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            label={item.label}
            active={activeHash === item.href}
            onClick={onClose}
          />
        ))}
        <PrimaryButton href="#book" className="w-full justify-center">
          Book Appointment
        </PrimaryButton>
      </Container>
    </div>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sectionElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible?.target.id) {
          return;
        }

        setActiveHash(`#${visible.target.id}`);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.65],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-[var(--color-border)] bg-black/72 shadow-[0_10px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/55 via-black/30 to-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="#home" className="group flex items-center gap-3">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--color-gold)] shadow-[0_0_20px_var(--color-gold)]" />
          <span className="font-display text-lg tracking-[0.05em] text-[var(--color-gold-soft)]">{siteConfig.businessName}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} active={activeHash === item.href} />
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-sm font-medium text-zinc-300/95 transition-colors duration-300 hover:text-[var(--color-gold-soft)]"
          >
            {siteConfig.phone}
          </a>
          <PrimaryButton href="#book">Book Appointment</PrimaryButton>
        </div>

        <button
          className="rounded-md border border-[var(--color-border)] bg-black/35 p-2 text-zinc-100 transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold-soft)] md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
        >
          <span className="sr-only">Open navigation</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </Container>

      <MobileMenu open={menuOpen} activeHash={activeHash} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
