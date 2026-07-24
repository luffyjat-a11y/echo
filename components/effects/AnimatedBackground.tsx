"use client";

import { useEffect, useState } from "react";

type Star = {
  width: number;
  height: number;
  left: number;
  top: number;
  opacity: number;
  delay: number;
  duration: number;
};

export default function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 80 }, () => ({
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.2,
      delay: Math.random() * 4,
      duration: Math.random() * 5 + 2,
    }));

    setStars(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-purple-950/30 to-black" />

      {/* Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse" />

      <div
        className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-fuchsia-600/15 blur-3xl animate-pulse"
        style={{ animationDuration: "6s" }}
      />

      <div
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* Stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: `${star.width}px`,
            height: `${star.height}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}