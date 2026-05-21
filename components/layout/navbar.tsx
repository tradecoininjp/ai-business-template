"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/constants/content";
import { siteConfig } from "@/constants/site";
import { Container } from "@/components/layout/container";
import { PrimaryButton } from "@/components/ui/primary-button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-black/75 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="#home" className="font-display text-lg tracking-wide text-[var(--color-gold-soft)]">
          {siteConfig.businessName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-[var(--color-gold-soft)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton href="#book">Book Appointment</PrimaryButton>
        </div>

        <button
          className="rounded-md border border-[var(--color-border)] p-2 text-zinc-200 md:hidden"
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

      {menuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-panel)] md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-300 transition hover:text-[var(--color-gold-soft)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <PrimaryButton href="#book" className="w-full justify-center">
              Book Appointment
            </PrimaryButton>
          </Container>
        </div>
      )}
    </header>
  );
}
