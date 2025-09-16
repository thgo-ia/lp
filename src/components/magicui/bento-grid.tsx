"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function BentoGrid({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        // Bento-style grid
        "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[20rem]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  title,
  description,
  icon,
  header,
  footer,
  variant = 0,
}: {
  className?: string;
  title?: string;
  description?: string;
  icon?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  variant?: number; // 0..n for brand gradient variations
}) {
  const gradients = [
    "from-[hsl(var(--brand-1))] via-[hsl(var(--brand-2))] to-[hsl(var(--brand-3))]",
    "from-[hsl(var(--brand-4))] via-[hsl(var(--brand-1))] to-[hsl(var(--brand-2))]",
    "from-[hsl(var(--brand-2))] via-[hsl(var(--brand-3))] to-[hsl(var(--brand-1))]",
    "from-[hsl(var(--brand-1))] via-[hsl(var(--brand-3))] to-[hsl(var(--brand-4))]",
  ];
  const gradient = gradients[variant % gradients.length];
  return (
    <div
      className={cn(
        // Card container
        "group relative row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all hover:shadow-2xl hover:-translate-y-1",
        `bg-gradient-to-br ${gradient} text-white border border-white/10 shadow-xl`,
        className
      )}
    >
      {/* Lighten overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/25 to-white/35" />
      {/* Border beam */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl [mask:linear-gradient(#fff,transparent,transparent,#fff)]">
        <span className="absolute -inset-px rounded-2xl blur-sm opacity-40 group-hover:opacity-70 transition-opacity bg-[conic-gradient(from_0deg,white_0%,rgba(255,255,255,.6)_25%,rgba(255,255,255,.3)_50%,white_100%)]" />
      </span>

      {header}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_0,white_2px,transparent_2px)] bg-[length:20px_20px]" />
      <div className="relative z-10">
        {icon && <div className="mb-3">{icon}</div>}
        {title && (
          <h3 className="text-2xl font-bold leading-snug text-black">{title}</h3>
        )}
        {description && (
          <p className="mt-3 text-base leading-relaxed text-black">{description}</p>
        )}
      </div>
      {footer && <div className="mt-4 relative z-10 text-black/70">{footer}</div>}
    </div>
  );
}

export default BentoGrid;


