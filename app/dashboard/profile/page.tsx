"use client";

import { useGameContext } from "@/context/GameContext";

export default function ProfilePage() {
  const { player } = useGameContext();

  const xpPercent = (player.xp / player.maxXp) * 100;

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
              ⭐ {player.xp} / {player.maxXp} XP
            </p>
          </div>
        </div>

        {/* XP Bar */}
        <div className="mt-8">
          <div className="mb-2 flex justify-between text-sm text-zinc-400">
            <span>Experience</span>
            <span>
              {player.xp} / {player.maxXp}
            </span>
          </div>

          <div className="h-3 rounded-full bg-zinc-800">
            <div
              className="h-3 rounded-full bg-purple-500 transition-all duration-500"
              style={{
                width: `${xpPercent}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <StatCard
          icon="⭐"
          title="Level"
          value={player.level}
        />

        <StatCard
          icon="💰"
          title="Coins"
          value={player.coins}
        />

        <StatCard
          icon="🔥"
          title="Daily Streak"
          value={`${player.streak} Day${player.streak === 1 ? "" : "s"}`}
        />

        <StatCard
          icon="✨"
          title="Current XP"
          value={player.xp}
        />

        <StatCard
          icon="🎯"
          title="XP Needed"
          value={player.maxXp - player.xp}
        />

        <StatCard
          icon="🏆"
          title="Next Level"
          value={player.level + 1}
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