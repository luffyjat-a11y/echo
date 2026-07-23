import { Achievement } from "@/types/achievement";
import { Player } from "./player";
import { Quest } from "@/types/quest";

export function updateAchievements(
  achievements: Achievement[],
  player: Player,
  quests: Quest[]
): Achievement[] {
  const completedQuests = quests.filter((q) => q.completed).length;

  return achievements.map((achievement) => {
    if (achievement.unlocked) return achievement;

    switch (achievement.id) {
      case 1:
        return {
          ...achievement,
          unlocked: completedQuests >= 1,
        };

      case 2:
        return {
          ...achievement,
          unlocked: player.level >= 5,
        };

      case 3:
        return {
          ...achievement,
          unlocked: player.coins >= 100,
        };

      case 4:
        return {
          ...achievement,
          unlocked: completedQuests === quests.length,
        };

      case 5:
        return {
          ...achievement,
          unlocked: player.streak >= 7,
        };

      default:
        return achievement;
    }
  });
}