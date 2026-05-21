import { cn } from "@/utils/cn";

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  mobile?: boolean;
};

export function NavLink({ href, label, active = false, onClick, mobile = false }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "group relative font-medium tracking-wide transition-colors duration-300",
        mobile ? "text-base" : "text-sm",
        active ? "text-[var(--color-gold-soft)]" : "text-zinc-200/90 hover:text-[var(--color-gold-soft)]",
      )}
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
