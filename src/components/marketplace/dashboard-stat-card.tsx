import type { DashboardStat } from "@/types/marketplace";
import { uiContent } from "@/data/ui";

type DashboardStatCardProps = {
  stat: DashboardStat;
};

const trendColorMap: Record<DashboardStat["trend"], string> = {
  up: "text-emerald-300",
  down: "text-rose-300",
  neutral: "text-slate-300",
};

export function DashboardStatCard({ stat }: DashboardStatCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
      <p className="text-sm text-slate-400">{stat.label}</p>
      <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
      <p className={`mt-2 text-sm font-medium ${trendColorMap[stat.trend]}`}>{stat.change} {uiContent.dashboard.changeSuffix}</p>
    </article>
  );
}
