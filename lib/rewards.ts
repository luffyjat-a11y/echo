import { Quest } from "@/types/quest";

export function getQuestRewards(quest: Quest) {
  return {
    xp: quest.xp,
    coins: quest.coins,
  };
}