import { businessConfig } from "@/constants/business";
import { Button } from "@/components/ui/button";

export function MobileContactBar() {
  const phoneHref = `tel:${businessConfig.business.phone}`;
  const bookingHref = businessConfig.booking.primaryCtaHref;

  return (
    <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-black/90 p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3">
        <Button href={phoneHref} variant="secondary" fullWidth className="text-sm">
          Call Now
        </Button>
        <Button href={bookingHref} fullWidth className="text-sm">
          Book Now
        </Button>
      </div>
    </aside>
  );
}
