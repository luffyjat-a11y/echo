"use client";

import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_8px_40px_rgba(0,0,0,.35)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-purple-400/50
        hover:shadow-[0_0_35px_rgba(168,85,247,.35)]
        ${className}
      `}
    >
      {/* Top highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      {/* Purple glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}