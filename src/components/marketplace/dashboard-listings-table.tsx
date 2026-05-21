import Link from "next/link";
import { formatPrice } from "@/lib/marketplace";
import { uiContent } from "@/data/ui";
import type { Listing } from "@/types/marketplace";

type DashboardListingsTableProps = {
  items: Listing[];
};

export function DashboardListingsTable({ items }: DashboardListingsTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-slate-800 bg-slate-900">
          <tr>
            <th className="px-4 py-3 font-medium text-slate-300">{uiContent.dashboard.columns.listing}</th>
            <th className="px-4 py-3 font-medium text-slate-300">{uiContent.dashboard.columns.category}</th>
            <th className="px-4 py-3 font-medium text-slate-300">{uiContent.dashboard.columns.location}</th>
            <th className="px-4 py-3 font-medium text-slate-300">{uiContent.dashboard.columns.price}</th>
            <th className="px-4 py-3 font-medium text-slate-300">{uiContent.dashboard.columns.action}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-slate-800 last:border-b-0">
              <td className="px-4 py-3 text-slate-100">{item.title}</td>
              <td className="px-4 py-3 text-slate-300">{item.category}</td>
              <td className="px-4 py-3 text-slate-300">{item.location}</td>
              <td className="px-4 py-3 text-slate-300">{formatPrice(item.price)}</td>
              <td className="px-4 py-3">
                <Link href={`/listings/${item.id}`} className="text-cyan-300 hover:text-cyan-200">
                  {uiContent.dashboard.viewAction}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
