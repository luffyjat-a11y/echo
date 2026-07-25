"use client";

import { ReactNode } from "react";

type BattleArenaProps = {
  children: ReactNode;
};

export default function BattleArena({
  children,
}: BattleArenaProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black p-10 shadow-2xl">

      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,#9333ea,transparent_70%)]" />
      </div>

      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}