"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type FlickeringGridProps = {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
};

/**
 * Lightweight canvas-based flickering grid.
 * Draws small squares with random low opacity to create a subtle noise glow.
 */
export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(255,255,255)",
  width,
  height,
  className,
  maxOpacity = 0.12,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const w = width ?? wrapper.clientWidth;
      const h = height ?? wrapper.clientHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();

    let rafId = 0;
    const render = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const step = squareSize + gridGap;
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const willFlicker = Math.random() < flickerChance;
          const opacity = willFlicker ? Math.random() * maxOpacity : Math.random() * (maxOpacity * 0.35);
          ctx.fillStyle = color.replace(
            ")",
            `, ${Math.min(Math.max(opacity, 0), 1)})`
          ).replace("rgb(", "rgba(");
          ctx.fillRect(x, y, squareSize, squareSize);
        }
      }
      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    const handle = () => resize();
    window.addEventListener("resize", handle);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handle);
    };
  }, [squareSize, gridGap, flickerChance, color, width, height, maxOpacity]);

  return (
    <div ref={wrapperRef} className={cn("absolute inset-0", className)}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}

export default FlickeringGrid;



