"use client";

import { useGameContext } from "@/context/GameContext";

export default function ProfilePage() {
  const { player } = useGameContext();

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">

      <h1 className="mb-8 text-5xl font-black text-purple-400">
        👤 Hunter Profile
      </h1>

      {/* Character Card */}

      <div className="rounded-3xl bg-zinc-900 p-8 shadow-xl">

        <div className="flex items-center gap-6">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-purple-600 text-6xl">
            👤
          </div>

          <div>

            <h2 className="text-4xl font-bold">
              {player.name}
            </h2>

            <p className="mt-2 text-zinc-400">
              Level {player.level}
            </p>

            <p className="mt-2 text-yellow-400">
              💰 {player.coins} Coins
            </p>

            <p className="mt-2 text-purple-400">
              ⭐ {player.skillPoints} Skill Points
            </p>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        <StatCard
          icon="❤️"
          title="Health"
          value={`${player.health}/${player.maxHealth}`}
        />

        <StatCard
          icon="⚡"
          title="Stamina"
          value={`${player.stamina}/${player.maxStamina}`}
        />

        <StatCard
          icon="⚔️"
          title="Attack"
          value={player.attack}
        />

        <StatCard
          icon="🛡️"
          title="Defense"
          value={player.defense}
        />

        <StatCard
          icon="🎯"
          title="Critical Chance"
          value={`${player.critChance}%`}
        />

        <StatCard
          icon="🏃"
          title="Speed"
          value={player.speed}
        />

      </div>

    </main>
  );
}

type StatCardProps = {
  icon: string;
  title: string;
  value: string | number;
};

function StatCard({
  icon,
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-6 transition hover:scale-105 hover:border hover:border-purple-500">

      <div className="text-5xl">
        {icon}
      </div>

      <h2 className="mt-4 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-4xl font-black text-purple-400">
        {value}
      </p>

    </div>
  );
}