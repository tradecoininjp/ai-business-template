"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "@/types/business";

export function useActiveSection(items: NavItem[]) {
  const [activeHash, setActiveHash] = useState<string>(items[0]?.href ?? "#home");

  useEffect(() => {
    const sectionElements = items
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sectionElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((firstEntry, secondEntry) => secondEntry.intersectionRatio - firstEntry.intersectionRatio)[0];

        if (!visibleEntry?.target.id) {
          return;
        }

        setActiveHash(`#${visibleEntry.target.id}`);
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.65],
      },
    );

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [items]);

  return activeHash;
}
