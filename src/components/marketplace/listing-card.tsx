import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/marketplace";
import { uiContent } from "@/data/ui";
import type { Listing } from "@/types/marketplace";

type ListingCardProps = {
  listing: Listing;
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-700">
      <div className="relative h-48 w-full">
        <Image src={listing.image} alt={listing.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300">{listing.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{listing.title}</h3>
          </div>
          <p className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold text-slate-100">{formatPrice(listing.price)}</p>
        </div>
        <p className="line-clamp-2 text-sm text-slate-300">{listing.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">{listing.location}</span>
          <Link href={`/listings/${listing.id}`} className="text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
            {uiContent.listingCard.viewDetailsLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
