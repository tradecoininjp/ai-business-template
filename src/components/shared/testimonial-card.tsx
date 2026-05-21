import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/types/business";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-[var(--color-gold)]" aria-label={`${rating} star rating`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={`${rating}-${index}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={index < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className={index < rating ? "opacity-100" : "opacity-40"}
        >
          <path d="M12 3l2.6 5.3L20 9l-4 3.9L17 19l-5-2.7L7 19l1-6.1L4 9l5.4-.7L12 3z" />
        </svg>
      ))}
    </div>
  );
}

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full rounded-2xl p-6 transition duration-300 hover:border-[var(--color-gold)]/70 hover:bg-[var(--color-panel-strong)]">
      <StarRating rating={testimonial.rating} />
      <blockquote className="mt-4 text-sm leading-7 text-zinc-200">"{testimonial.quote}"</blockquote>
      <div className="mt-6 border-t border-zinc-800 pt-4">
        <p className="font-semibold text-zinc-100">{testimonial.name}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{testimonial.role}</p>
      </div>
    </Card>
  );
}
