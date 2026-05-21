"use client";

import { businessConfig } from "@/constants/business";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { NavLink } from "@/components/shared/nav-link";
import { cn } from "@/utils/cn";

type MobileMenuProps = {
  open: boolean;
  activeHash: string;
  onClose: () => void;
};

export function MobileMenu({ open, activeHash, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-panel)]/95 backdrop-blur transition-all duration-300 md:hidden",
        open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0",
      )}
    >
      <Container className="flex flex-col gap-6 py-6">
        {businessConfig.navigation.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} active={activeHash === item.href} onClick={onClose} mobile />
        ))}
        <Button href={businessConfig.business.bookingUrl} fullWidth>
          Book Appointment
        </Button>
      </Container>
    </div>
  );
}
