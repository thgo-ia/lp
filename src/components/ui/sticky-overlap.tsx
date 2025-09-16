"use client";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type StickyOverlapProps = PropsWithChildren<{
  id?: string;
  heightVh?: number;
  backgroundClassName?: string;
  containerClassName?: string;
}>;

export function StickyOverlap({
  id,
  heightVh = 160,
  backgroundClassName = "bg-white/90 supports-[backdrop-filter]:backdrop-blur-md border-y border-gray-200/60",
  containerClassName,
  children,
}: StickyOverlapProps) {
  return (
    <section id={id} className="py-0 bg-transparent relative overflow-visible">
      <div className="relative" style={{ height: `${heightVh}vh` }}>
        <div className="sticky top-0 z-20">
          <div className={cn("relative", backgroundClassName)}>
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/90 to-transparent"></div>
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/90 to-transparent"></div>
            <div className={cn("relative", containerClassName)}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StickyOverlap;


