import { ListingCard } from "@/components/marketplace/listing-card";
import { ListingFilters } from "@/components/marketplace/listing-filters";
import { MarketplaceShell } from "@/components/marketplace/marketplace-shell";
import { SectionHeading } from "@/components/marketplace/section-heading";
import { listings } from "@/data/listings";
import { platformConfig } from "@/data/platform";

export default function ListingsPage() {
  return (
    <MarketplaceShell>
      <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <SectionHeading
          eyebrow="Listings"
          title="Find a provider that fits your needs"
          subtitle="Browse service providers, compare pricing, and move to booking quickly."
        />
        <div className="mt-7">
          <ListingFilters categories={platformConfig.categories} />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>
    </MarketplaceShell>
  );
}
