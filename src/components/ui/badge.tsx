import { cn } from "@/utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-border)] bg-black/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
