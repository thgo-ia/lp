"use client";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type PulsatingButtonProps = PropsWithChildren<{
  className?: string;
  pulseColor?: string; // rgb numbers only: e.g. "37, 99, 235"
  duration?: string; // e.g. "2.4s"
  onClick?: () => void;
}>;

export function PulsatingButton({
  className,
  pulseColor = "30, 64, 175",
  duration = "2.4s",
  onClick,
  children,
}: PulsatingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold",
        "text-white shadow-lg bg-[#1e40af]",
        "ring-1 ring-white/10",
        className
      )}
      style={{ isolation: "isolate" }}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 -z-10 rounded-xl"
        style={{
          boxShadow: `0 0 0 0 rgba(${pulseColor}, 0.6)`,
          animation: `pulseGlow ${duration} ease-out infinite`,
        }}
      />
      <style jsx>{`
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(${pulseColor}, 0.5); }
          70% { box-shadow: 0 0 0 18px rgba(${pulseColor}, 0); }
          100% { box-shadow: 0 0 0 0 rgba(${pulseColor}, 0); }
        }
      `}</style>
    </button>
  );
}

export default PulsatingButton;


