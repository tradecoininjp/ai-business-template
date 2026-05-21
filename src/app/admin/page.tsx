import { DashboardListingsTable } from "@/components/marketplace/dashboard-listings-table";
import { DashboardStatCard } from "@/components/marketplace/dashboard-stat-card";
import { MarketplaceShell } from "@/components/marketplace/marketplace-shell";
import { SectionHeading } from "@/components/marketplace/section-heading";
import { listings } from "@/data/listings";
import { adminStats } from "@/data/platform";

export default function AdminPage() {
  return (
    <MarketplaceShell>
      <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <SectionHeading
          eyebrow="Admin Dashboard"
          title="Marketplace performance snapshot"
          subtitle="Mock analytics and listing management UI ready for backend integration."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {adminStats.map((stat) => (
            <DashboardStatCard key={stat.id} stat={stat} />
          ))}
        </div>
        <div className="mt-8">
          <DashboardListingsTable items={listings} />
        </div>
      </section>
    </MarketplaceShell>
  );
}
