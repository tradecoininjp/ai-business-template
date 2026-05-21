import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = true,
  className,
}: CTAButtonProps) {
  return (
    <Button href={href} variant={variant} size={size} className={cn("group", className)}>
      {children}
      {showArrow && (
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      )}
    </Button>
  );
}
