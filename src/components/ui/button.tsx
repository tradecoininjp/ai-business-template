import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type CommonButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

type LinkButtonProps = CommonButtonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type NativeButtonProps = CommonButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[var(--color-gold)] text-black hover:bg-[var(--color-gold-soft)]",
  secondary:
    "border border-zinc-600 bg-black/35 text-zinc-100 hover:border-[var(--color-gold)] hover:text-[var(--color-gold-soft)]",
  ghost: "text-zinc-200 hover:text-[var(--color-gold-soft)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const baseButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]/60 disabled:pointer-events-none disabled:opacity-60";

function buttonClassName(variant: ButtonVariant, size: ButtonSize, fullWidth = false, className?: string) {
  return cn(
    baseButtonClass,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";
  const fullWidth = props.fullWidth ?? false;

  if ("href" in props) {
    const { href, target, rel, children, className } = props;

    return (
      <Link href={href} target={target} rel={rel} className={buttonClassName(variant, size, fullWidth, className)}>
        {children}
      </Link>
    );
  }

  const { children, className, type = "button", ...buttonProps } = props;

  return (
    <button type={type} className={buttonClassName(variant, size, fullWidth, className)} {...buttonProps}>
      {children}
    </button>
  );
}
