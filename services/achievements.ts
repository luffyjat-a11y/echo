import { Achievement } from "@/types/achievement";
import { Player } from "@/lib/player";
import { Quest } from "@/types/quest";

export function updateAchievementProgress(
  achievements: Achievement[],
  player: Player,
  quests: Quest[]
): Achievement[] {
  return achievements.map((achievement) => {
    if (achievement.unlocked)
      return achievement;

    if (
      achievement.id === 1 &&
      quests.some((q) => q.completed)
    ) {
      return {
        ...achievement,
        unlocked: true,
      };
    }

    if (
      achievement.id === 2 &&
      player.level >= 5
    ) {
      return {
        ...achievement,
        unlocked: true,
      };
    }

    if (
      achievement.id === 3 &&
      player.coins >= 100
    ) {
      return {
        ...achievement,
        unlocked: true,
      };
    }

    return achievement;
  });
}