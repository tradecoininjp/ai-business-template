import { Card } from "@/components/ui/card";

type TrustIndicatorsProps = {
  indicators: string[];
};

export function TrustIndicators({ indicators }: TrustIndicatorsProps) {
  return (
    <ul className="grid gap-3 text-sm text-zinc-300 sm:grid-cols-3">
      {indicators.map((indicator) => (
        <li key={indicator}>
          <Card className="border-zinc-700/60 bg-black/45 px-4 py-3 backdrop-blur-sm transition hover:border-[var(--color-gold)]/60">
            {indicator}
          </Card>
        </li>
      ))}
    </ul>
  );
}
