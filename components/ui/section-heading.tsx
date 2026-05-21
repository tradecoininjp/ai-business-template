type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight text-zinc-100 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-300">{description}</p>
    </div>
  );
}
