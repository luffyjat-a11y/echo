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
          label="❤️ Health"
          value={player.maxHealth}
        />

        <Stat
          label="⚔ Attack"
          value={player.attack}
        />

        <Stat
          label="🛡 Defense"
          value={player.defense}
        />

        <Stat
          label="⚡ Stamina"
          value={player.maxStamina}
        />

        <Stat
          label="🎯 Crit Chance"
          value={`${player.critChance}%`}
        />

        <Stat
          label="💨 Speed"
          value={player.speed}
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