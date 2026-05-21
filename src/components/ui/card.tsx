import { cn } from "@/utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel)] shadow-[0_20px_60px_rgba(0,0,0,0.28)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
