"use client";

import { useGameContext } from "@/context/GameContext";
import { skills } from "@/data/skills";

export default function SkillTree() {
  const { player } = useGameContext();

  return (
    <div className="space-y-8">

      <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-r from-zinc-900 via-zinc-900 to-purple-950 p-8">

        <h1 className="text-4xl font-black">
          🌳 Skill Tree
        </h1>

        <p className="mt-2 text-zinc-400">
          The Skill Tree is coming soon.
        </p>

        <div className="mt-6 rounded-xl bg-zinc-800 p-4">
          <p className="text-zinc-300">
            Reach higher levels to unlock permanent hunter abilities in a future update.
          </p>
        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {skills.map((skill) => (

          <div
            key={skill.id}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h2 className="text-2xl font-bold">
              {skill.icon} {skill.name}
            </h2>

            <p className="mt-3 text-zinc-400">
              {skill.description}
            </p>

            <div className="mt-6 rounded-xl bg-zinc-800 px-4 py-2 text-center text-sm font-bold text-yellow-400">
              🔒 Locked
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}