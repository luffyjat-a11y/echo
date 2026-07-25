"use client";

import { useState } from "react";

import { dungeons } from "@/data/dungeons";
import { startDungeon } from "@/services/dungeon";
import { DungeonState } from "@/services/dungeon";

export default function DungeonsPage() {
  const [currentDungeon, setCurrentDungeon] =
    useState<DungeonState | null>(null);

  if (currentDungeon) {
    return (
      <main className="min-h-screen bg-zinc-950 p-8 text-white">

        <button
          onClick={() =>
            setCurrentDungeon(null)
          }
          className="mb-6 rounded-xl bg-zinc-800 px-5 py-2 hover:bg-zinc-700"
        >
          ← Leave Dungeon
        </button>

        <h1 className="text-5xl font-black text-purple-400">
          {currentDungeon.dungeon.icon}{" "}
          {currentDungeon.dungeon.name}
        </h1>

        <p className="mt-2 text-zinc-400">
          {currentDungeon.dungeon.description}
        </p>

        <div className="mt-10 rounded-3xl bg-zinc-900 p-8">

          <h2 className="text-3xl font-bold">
            Current Wave
          </h2>

          <p className="mt-4 text-5xl font-black text-purple-400">
            {currentDungeon.currentWave + 1}
          </p>

          <div className="mt-8">

            <div className="text-8xl">
              {currentDungeon.currentEnemy.icon}
            </div>

            <h2 className="mt-4 text-4xl font-bold">
              {currentDungeon.currentEnemy.name}
            </h2>

            <p className="mt-2">
              Level {currentDungeon.currentEnemy.level}
            </p>

            <div className="mt-6 space-y-2">

              <p>
                ❤️ {currentDungeon.currentEnemy.health} /{" "}
                {currentDungeon.currentEnemy.maxHealth}
              </p>

              <p>
                ⚔ {currentDungeon.currentEnemy.attack}
              </p>

              <p>
                🛡 {currentDungeon.currentEnemy.defense}
              </p>

            </div>

          </div>

          <button
            className="mt-10 w-full rounded-xl bg-purple-600 py-4 text-xl font-bold hover:bg-purple-500"
          >
            ⚔ Start Battle
          </button>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 p-8 text-white">

      <h1 className="mb-8 text-5xl font-black text-purple-400">
        🏰 Dungeons
      </h1>

      <div className="grid gap-8 lg:grid-cols-2">

        {dungeons.map((dungeon) => (
          <div
            key={dungeon.id}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-purple-500 hover:scale-[1.02]"
          >
            <div className="text-7xl">
              {dungeon.icon}
            </div>

            <h2 className="mt-4 text-3xl font-bold">
              {dungeon.name}
            </h2>

            <p className="mt-3 text-zinc-400">
              {dungeon.description}
            </p>

            <div className="mt-6 space-y-2">

              <p>
                ⭐ Difficulty:{" "}
                <span className="text-purple-400">
                  {dungeon.difficulty}
                </span>
              </p>

              <p>
                🎯 Recommended Level:{" "}
                {dungeon.recommendedLevel}
              </p>

              <p>
                👹 Waves:{" "}
                {dungeon.waves.length}
              </p>

              <p>
                👑 Boss:{" "}
                {dungeon.boss.name}
              </p>

            </div>

            <div className="mt-8 rounded-2xl bg-zinc-800 p-4">

              <h3 className="font-bold">
                Rewards
              </h3>

              <div className="mt-3 space-y-1">

                <p>
                  ⭐ {dungeon.xp} XP
                </p>

                <p>
                  💰 {dungeon.coins} Coins
                </p>

                <p>
                  📦 {dungeon.chestReward} Chest
                </p>

              </div>

            </div>

            <button
              onClick={() =>
                setCurrentDungeon(
                  startDungeon(dungeon)
                )
              }
              className="mt-8 w-full rounded-xl bg-purple-600 py-4 text-xl font-bold hover:bg-purple-500"
            >
              ▶ Enter Dungeon
            </button>

          </div>
        ))}

      </div>

    </main>
  );
}