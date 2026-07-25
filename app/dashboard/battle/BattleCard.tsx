"use client";

import HealthBar from "./HealthBar";

type Props = {
  icon: string;
  name: string;
  level: number;
  health: number;
  maxHealth: number;
  attack: number;
  defense: number;
  critChance?: number;
  isPlayer?: boolean;
};

export default function BattleCard({
  icon,
  name,
  level,
  health,
  maxHealth,
  attack,
  defense,
  critChance,
  isPlayer = false,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">

      <div className="flex flex-col items-center">

        <div className="text-8xl">
          {icon}
        </div>

        <h2 className="mt-4 text-3xl font-black">
          {name}
        </h2>

        <p className="text-purple-400">
          Level {level}
        </p>

      </div>

      <div className="mt-8">

        <HealthBar
          current={health}
          max={maxHealth}
          label="Health"
          color={isPlayer ? "bg-green-500" : "bg-red-500"}
        />

      </div>

      <div className="mt-8 space-y-3">

        <div className="flex justify-between">
          <span>⚔ Attack</span>
          <span>{attack}</span>
        </div>

        <div className="flex justify-between">
          <span>🛡 Defense</span>
          <span>{defense}</span>
        </div>

        {critChance !== undefined && (
          <div className="flex justify-between">
            <span>🎯 Crit Chance</span>
            <span>{critChance}%</span>
          </div>
        )}

      </div>

    </div>
  );
}