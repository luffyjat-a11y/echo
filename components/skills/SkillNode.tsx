"use client";

import { Skill } from "@/types/skill";

type Props = {
  skill: Skill;
  level: number;
  skillPoints: number;
  onUpgrade: (id: string) => void;
};

export default function SkillNode({
  skill,
  level,
  skillPoints,
  onUpgrade,
}: Props) {
  const canUpgrade =
    skillPoints > 0 &&
    level < skill.maxLevel;

  return (
    <div
      className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/70
      backdrop-blur-xl
      p-6
      transition-all
      duration-300
      hover:border-purple-500
      hover:scale-[1.03]
      hover:shadow-2xl
      hover:shadow-purple-500/20
    "
    >
      <div className="text-center">

        <div className="text-6xl">
          {skill.icon}
        </div>

        <h2 className="mt-4 text-2xl font-bold">
          {skill.name}
        </h2>

        <p className="mt-2 text-zinc-400">
          {skill.description}
        </p>

      </div>

      <div className="mt-6">

        <div className="flex justify-center gap-1">

          {Array.from({
            length: skill.maxLevel,
          }).map((_, index) => (
            <span
              key={index}
              className={`text-xl ${
                index < level
                  ? "text-yellow-400"
                  : "text-zinc-700"
              }`}
            >
              ★
            </span>
          ))}

        </div>

        <p className="mt-3 text-center text-purple-400 font-bold">

          Level {level}/{skill.maxLevel}

        </p>

      </div>

      <button
        disabled={!canUpgrade}
        onClick={() =>
          onUpgrade(skill.id)
        }
        className={`mt-6 w-full rounded-xl py-3 font-bold transition-all duration-300 ${
          canUpgrade
            ? "bg-purple-600 hover:bg-purple-500 hover:scale-105"
            : "bg-zinc-700 text-zinc-500 cursor-not-allowed"
        }`}
      >
        {level >= skill.maxLevel
          ? "MAX LEVEL"
          : "Upgrade"}
      </button>

    </div>
  );
}