"use client";

import { PropsWithChildren, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function CardContainer({ children, className }: PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [rot, setRot] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0..1
    const y = (e.clientY - rect.top) / rect.height; // 0..1
    const rotateX = (y - 0.5) * 24; // higher sensitivity
    const rotateY = (0.5 - x) * 24;
    setRot({ rx: rotateX, ry: rotateY });
  };

  const handleLeave = () => setRot({ rx: 0, ry: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      className={cn("[perspective:800px]", className)}
      style={{
        // provide CSS variables that CardBody will consume
        // @ts-ignore - CSS custom properties
        "--rx": `${rot.rx}deg`,
        // @ts-ignore
        "--ry": `${rot.ry}deg`,
      }}
    >
      {children}
    </div>
  );
}

export function CardBody({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-gray-200 bg-white p-0 shadow-sm",
        "[transform-style:preserve-3d] transition-transform duration-125",
        "[transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardItem({ children, className }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn("[transform:translateZ(40px)]", className)}>{children}</div>;
}

export default CardContainer;


