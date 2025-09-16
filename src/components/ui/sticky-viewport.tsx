"use client";

import { PropsWithChildren } from "react";

type StickyViewportProps = PropsWithChildren<{
  heightVh?: number;
  zIndex?: number;
}>;

export default function StickyViewport({ heightVh = 180, zIndex = 10, children }: StickyViewportProps) {
  return (
    <section className="relative" style={{ height: `${heightVh}vh` }}>
      <div className="sticky top-0" style={{ zIndex }}>
        {children}
      </div>
    </section>
  );
}


