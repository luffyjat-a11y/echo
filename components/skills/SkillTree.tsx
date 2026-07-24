"use client";

import { useGameContext } from "@/context/GameContext";
import { skills } from "@/data/skills";
import SkillNode from "./SkillNode";

export default function SkillTree() {
  const {
    player,
    upgradePlayerSkill,
  } = useGameContext();

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-r from-zinc-900 via-zinc-900 to-purple-950 p-8">

        <h1 className="text-4xl font-black">
          🌳 Skill Tree
        </h1>

        <p className="mt-2 text-zinc-400">
          Invest skill points to permanently
          strengthen your hunter.
        </p>

        <div className="mt-6 inline-flex rounded-xl bg-purple-600 px-6 py-3 text-xl font-bold">
          ⭐ {player.skillPoints} Skill Points
        </div>

      </div>

      {/* Grid */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {skills.map((skill) => (

          <SkillNode
            key={skill.id}
            skill={skill}
            level={
              player.skills[skill.id] ?? 0
            }
            skillPoints={
              player.skillPoints
            }
            onUpgrade={
              upgradePlayerSkill
            }
          />

        ))}

      </div>

    </div>
  );
}