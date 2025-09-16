"use client";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = PropsWithChildren<{
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  gap?: number;
  duration?: number; // seconds
}>;

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  gap = 24,
  duration = 20,
  children,
}: MarqueeProps) {
  const items = Array.from({ length: repeat }).map((_, i) => (
    <div key={i} className="flex items-center gap-6">
      {children}
    </div>
  ));

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        vertical ? "h-40" : "h-16",
        className
      )}
      style={{
        // @ts-ignore custom prop for the theme animation
        "--duration": `${duration}s`,
        // @ts-ignore
        "--gap": `${gap}px`,
      }}
    >
      <div
        className={cn(
          "flex gap-6 whitespace-nowrap",
          vertical ? "flex-col" : "flex-row",
          vertical ? "animate-marquee-vertical" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "[animation-play-state:paused]_hover:[animation-play-state:paused]"
        )}
      >
        {items}
      </div>
    </div>
  );
}

export default Marquee;


