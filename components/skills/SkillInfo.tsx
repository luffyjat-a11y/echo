"use client";

import { Skill } from "@/types/skill";

type SkillInfoProps = {
  skill: Skill;
  level: number;
};

export default function SkillInfo({
  skill,
  level,
}: SkillInfoProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 backdrop-blur-xl">

      <div className="flex items-center gap-4">

        <div className="text-6xl">
          {skill.icon}
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            {skill.name}
          </h2>

          <p className="text-zinc-400">
            {skill.category}
          </p>
        </div>

      </div>

      <div className="mt-6 space-y-4">

        <div>
          <p className="text-sm uppercase tracking-wider text-zinc-500">
            Description
          </p>

          <p className="mt-2 text-zinc-300">
            {skill.description}
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-zinc-500">
            Current Level
          </p>

          <p className="mt-2 text-2xl font-bold text-purple-400">
            {level} / {skill.maxLevel}
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-zinc-500">
            Current Bonus
          </p>

          <div className="mt-2 rounded-xl bg-zinc-800 p-4">

            {skill.id === "strength" && (
              <p>⚔ +{level * 10}% XP from completed quests</p>
            )}

            {skill.id === "fortune" && (
              <p>💰 +{level * 10}% Coins from completed quests</p>
            )}

            {skill.id === "speed" && (
              <p>🏃 Future movement bonus (coming soon)</p>
            )}

            {skill.id === "vitality" && (
              <p>❤️ {level} streak protection charge(s)</p>
            )}

            {skill.id === "wisdom" && (
              <p>✨ Advanced quest bonuses coming soon</p>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}