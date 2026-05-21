import { Card } from "@/components/ui/card";
import type { ServiceIcon, ServiceItem } from "@/types/business";

function ServiceIconGlyph({ icon }: { icon: ServiceIcon }) {
  const commonProps = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
  };

  switch (icon) {
    case "scissors":
      return (
        <svg {...commonProps}>
          <circle cx="6" cy="6" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <path d="M8 7.5L20 3M8 16.5L20 21M8.2 8.1l11 11" />
        </svg>
      );
    case "beard":
      return (
        <svg {...commonProps}>
          <path d="M4 9a8 8 0 1116 0v2a8 8 0 01-16 0V9z" />
          <path d="M8 14c1 1.5 2.5 2 4 2s3-.5 4-2" />
        </svg>
      );
    case "razor":
      return (
        <svg {...commonProps}>
          <rect x="4" y="5" width="12" height="6" rx="1.5" />
          <path d="M16 8h4M10 11v8" />
        </svg>
      );
    case "facial":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="4" />
          <path d="M6 21c1.2-2.7 3.2-4 6-4s4.8 1.3 6 4" />
        </svg>
      );
    case "style":
      return (
        <svg {...commonProps}>
          <path d="M12 3l2.6 5.3L20 9l-4 3.9L17 19l-5-2.7L7 19l1-6.1L4 9l5.4-.7L12 3z" />
        </svg>
      );
    case "kid":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M7 20a5 5 0 0110 0" />
        </svg>
      );
  }
}

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)] hover:bg-[var(--color-panel-strong)]">
      <div className="inline-flex rounded-xl border border-[var(--color-border)] bg-black p-3 text-[var(--color-gold)] transition group-hover:text-[var(--color-gold-soft)]">
        <ServiceIconGlyph icon={service.icon} />
      </div>
      <h3 className="mt-5 font-display text-2xl text-zinc-100">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-zinc-300">{service.description}</p>
    </Card>
  );
}
