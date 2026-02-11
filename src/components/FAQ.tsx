"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQ({
  items,
  title = "Frequently Asked Questions",
}: {
  items: FAQItem[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {title && (
        <h2 className="mb-8 text-2xl font-bold text-ash-100 sm:text-3xl">
          {title}
        </h2>
      )}
      <div className="space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-lg border border-slab-700 bg-slab-900/50 transition-colors hover:border-slab-600"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              aria-expanded={openIndex === i}
            >
              <span className="text-sm font-medium text-ash-200 pr-4">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-ash-500 transition-transform duration-200",
                  openIndex === i && "rotate-180 text-forge-500"
                )}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4">
                <p className="text-sm leading-relaxed text-ash-400">
                  {item.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
