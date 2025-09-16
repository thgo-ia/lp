"use client";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type WarpBackgroundProps = PropsWithChildren<{
  className?: string;
}>;

export function WarpBackground({ className, children }: WarpBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background:radial-gradient(100%_100%_at_50%_0%,rgba(59,130,246,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
}

export default WarpBackground;


