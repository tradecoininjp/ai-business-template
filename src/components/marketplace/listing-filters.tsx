"use client";

import { useMemo, useState } from "react";
import { uiContent } from "@/data/ui";

type ListingFiltersProps = {
  categories: string[];
};

export function ListingFilters({ categories }: ListingFiltersProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(categories[0] ?? "All");

  const statusText = useMemo(() => {
    const activeCategory = category === "All" ? uiContent.listingFilters.allCategoriesLabel : category;
    return `${uiContent.listingFilters.statusPrefix} ${activeCategory}${query ? `${uiContent.listingFilters.statusKeywordPrefix} "${query}"` : ""}.`;
  }, [category, query]);

  return (
    <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          {uiContent.listingFilters.searchLabel}
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={uiContent.listingFilters.searchPlaceholder}
            className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          {uiContent.listingFilters.categoryLabel}
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="text-xs text-slate-400">{statusText}</p>
    </div>
  );
}
