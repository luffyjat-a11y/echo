import { Player } from "@/lib/player";
import { Quest } from "@/types/quest";

export function getQuestRewards(
  quest: Quest,
  player: Player
) {
  const strength =
    player.skills.strength ?? 0;

  const fortune =
    player.skills.fortune ?? 0;

  const xpMultiplier =
    1 + strength * 0.1;

  const coinMultiplier =
    1 + fortune * 0.1;

  return {
    xp: Math.floor(
      quest.xp * xpMultiplier
    ),
    coins: Math.floor(
      quest.coins * coinMultiplier
    ),
  };
}