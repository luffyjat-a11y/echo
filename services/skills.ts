import { Player } from "@/lib/player";

export function canUpgradeSkill(
  player: Player,
  skillId: string,
  maxLevel: number
) {
  return (
    player.skillPoints > 0 &&
    (player.skills[skillId] ?? 0) < maxLevel
  );
}

export function upgradeSkill(
  player: Player,
  skillId: string,
  maxLevel: number
): Player {
  if (
    !canUpgradeSkill(player, skillId, maxLevel)
  ) {
    return player;
  }

  return {
    ...player,

    skillPoints: player.skillPoints - 1,

    skills: {
      ...player.skills,

      [skillId]:
        (player.skills[skillId] ?? 0) + 1,
    },
  };
}