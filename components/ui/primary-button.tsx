import Link from "next/link";
import { cn } from "@/lib/utils";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function PrimaryButton({ href, children, className }: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[var(--color-gold-soft)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
