"use client";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type BackgroundGradientProps = PropsWithChildren<{
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}>;

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-none", containerClassName)}>
      {/* animated gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* soft radial washes */}
        <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.18),transparent_70%),radial-gradient(40%_40%_at_0%_100%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(40%_40%_at_100%_100%,rgba(236,72,153,0.12),transparent_60%)]" />
        {/* subtle rotating conic beam */}
        <div
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "w-[1200px] h-[1200px] rounded-full opacity-30 blur-3xl",
            animate ? "animate-[spin_22s_linear_infinite]" : ""
          )}
          style={{
            background:
              "conic-gradient(from_0deg, rgba(37,99,235,0.15), rgba(99,102,241,0.15), rgba(236,72,153,0.12), rgba(37,99,235,0.15))",
          }}
        />
      </div>

      <div className={cn("relative", className)}>{children}</div>
    </div>
  );
}

export default BackgroundGradient;


