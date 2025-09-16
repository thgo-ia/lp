"use client";

import React, { useMemo } from "react";

type MeteorsProps = {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number; // degrees
  className?: string; // optional extra classes for container
  meteorColor?: string; // CSS color for the trail
  xRange?: [number, number]; // spawn range in vw
  yRange?: [number, number]; // spawn range in vh
};

export function Meteors({
  number = 12,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 4,
  maxDuration = 8,
  angle = 150,
  className,
  meteorColor = "rgba(239,68,68,0.75)", // red-500 ~ brand alert
  xRange = [65, 100],
  yRange = [-8, 12],
}: MeteorsProps) {
  const meteors = useMemo(() => {
    const items = Array.from({ length: number }).map((_, i) => {
      const delay = rand(minDelay, maxDelay);
      const duration = rand(minDuration, maxDuration);
      const size = rand(50, 90); // length of the meteor in px
      const thickness = rand(1, 2); // px
      const startX = rand(xRange[0], xRange[1]); // vw
      const startY = rand(yRange[0], yRange[1]); // vh around top
      const distance = rand(70, 100); // vh translation magnitude
      return { id: i, delay, duration, size, thickness, startX, startY, distance };
    });
    return items;
  }, [number, minDelay, maxDelay, minDuration, maxDuration, xRange, yRange]);

  const rad = (angle * Math.PI) / 180;
  const dxUnit = Math.cos(rad);
  const dyUnit = Math.sin(rad);

  return (
    <div className={"pointer-events-none absolute inset-0 " + (className || "")}> 
      <style jsx global>{`
        @keyframes meteor-flight {
          from { transform: translate3d(0,0,0); opacity: 0; }
          10% { opacity: .9; }
          to { transform: translate3d(var(--mx), var(--my), 0); opacity: 0; }
        }
      `}</style>
      {meteors.map((m) => {
        const mx = dxUnit * (m.distance * 10); // vh -> approx px multiplier (10px per vh unit)
        const my = dyUnit * (m.distance * 10);
        const style: React.CSSProperties = {
          left: `calc(${m.startX}vw)`,
          top: `calc(${m.startY}vh)`,
          width: `${m.size}px`,
          height: `${m.thickness}px`,
          background: `linear-gradient(90deg, rgba(255,255,255,0.0) 0%, ${meteorColor} 40%, rgba(255,255,255,0.0) 100%)`,
          boxShadow: `0 0 6px ${meteorColor}`,
          transformOrigin: "left center",
          rotate: `${angle}deg`,
          animation: `meteor-flight ${m.duration}s linear ${m.delay}s infinite`,
          // custom vars for keyframes
          // convert numbers to px strings
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          "--mx": `${mx}px`,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          "--my": `${my}px`,
        };
        return <span key={m.id} style={style} className="absolute rounded-full" />;
      })}
    </div>
  );
}

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default Meteors;


