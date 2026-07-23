"use client";

import { useGameContext } from "@/context/GameContext";

export default function SkillsPage() {
  const { player } = useGameContext();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">
        🌳 Skill Tree
      </h1>

      <div className="rounded-2xl bg-zinc-900 p-6">
        <h2 className="text-2xl font-bold text-purple-400">
          Skill Points
        </h2>

        <p className="mt-3 text-5xl font-bold">
          ⭐ {player.skillPoints}
        </p>

        <p className="mt-2 text-zinc-400">
          Earn 1 Skill Point every level.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">
            💪 Strength
          </h2>

          <p className="mt-2 text-zinc-400">
            Workout quests give more XP.
          </p>

          <p className="mt-6 text-3xl font-bold">
            Level {player.skills.strength}
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">
            🧠 Focus
          </h2>

          <p className="mt-2 text-zinc-400">
            Reading quests give more XP.
          </p>

          <p className="mt-6 text-3xl font-bold">
            Level {player.skills.focus}
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">
            ❤️ Health
          </h2>

          <p className="mt-2 text-zinc-400">
            Health quests give extra coins.
          </p>

          <p className="mt-6 text-3xl font-bold">
            Level {player.skills.health}
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-6">
          <h2 className="text-2xl font-bold">
            ⚔️ Discipline
          </h2>

          <p className="mt-2 text-zinc-400">
            Improves streak rewards.
          </p>

          <p className="mt-6 text-3xl font-bold">
            Level {player.skills.discipline}
          </p>
        </div>

      </div>
    </div>
  );
}