"use client";

import React, { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ShineBorderProps = PropsWithChildren<{
  className?: string;
  rounded?: string; // tailwind radius classes
  color?: string; // css color (deprecated - use shineColors)
  shineColors?: string | string[]; // css colors
  thickness?: number; // px
  duration?: number; // seconds
}>;

export function ShineBorder({
  className,
  children,
  rounded = "rounded-2xl",
  color = "rgba(255,255,255,0.8)",
  shineColors,
  thickness = 2,
  duration = 2.8,
}: ShineBorderProps) {
  const gradientStops = Array.isArray(shineColors)
    ? shineColors.join(",")
    : shineColors || color;
  return (
    <div className={cn("relative overflow-hidden", rounded, className)}>
      {/* Shine animation keyframes */}
      <style jsx global>{`
        @keyframes shine-border-move {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
      `}</style>
      {/* Border shine mask */}
      <span
        className={cn(
          "pointer-events-none absolute inset-0",
          rounded,
          "[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] p-[1px]"
        )}
        style={{
          WebkitMaskComposite: "destination-out",
        }}
      >
        <span
          className={cn("absolute inset-0", rounded)}
          style={{
            background: `linear-gradient(90deg, transparent, ${gradientStops}, transparent)`,
            animation: `shine-border-move ${duration}s linear infinite`,
            filter: "blur(0.5px)",
          }}
        />
      </span>
      {/* Static base border */}
      <span
        className={cn("absolute inset-0", rounded)}
        style={{
          boxShadow: `0 0 0 ${thickness}px rgba(255,255,255,0.45) inset`,
          pointerEvents: "none",
        }}
      />
      <div className={cn("relative", rounded)}>{children}</div>
    </div>
  );
}

export default ShineBorder;



