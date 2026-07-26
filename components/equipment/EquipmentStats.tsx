"use client";

import { Player } from "@/lib/player";

type Props = {
  player: Player;
};

export default function EquipmentStats({
  player,
}: Props) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-black">
        Character Stats
      </h2>

      <div className="space-y-3">

        <Stat
          label="⭐ Level"
          value={player.level}
        />

        <Stat
          label="✨ Current XP"
          value={player.xp}
        />

        <Stat
          label="🎯 Max XP"
          value={player.maxXp}
        />

        <Stat
          label="💰 Coins"
          value={player.coins}
        />

        <Stat
          label="🔥 Daily Streak"
          value={`${player.streak} Day${player.streak === 1 ? "" : "s"}`}
        />

        <Stat
          label="🏆 Next Level"
          value={player.level + 1}
        />

      </div>

    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex justify-between rounded-lg bg-zinc-800 p-3">
      <span>{label}</span>

      <span className="font-bold text-purple-400">
        {value}
      </span>
    </div>
  );
}