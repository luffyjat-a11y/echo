import { Player } from "@/lib/player";
import {
  shouldLevelUp,
  getNextLevelXP,
} from "@/lib/level";

export type Reward = {
  xp: number;
  coins: number;
};

export type RewardResult = {
  player: Player;
  leveledUp: boolean;
};

export function rewardPlayer(
  player: Player,
  reward: Reward
): RewardResult {
  let xp = player.xp + reward.xp;
  let level = player.level;
  let maxXp = player.maxXp;
  let skillPoints = player.skillPoints;

  let leveledUp = false;

  while (shouldLevelUp(xp, maxXp)) {
    xp -= maxXp;
    level++;
    maxXp = getNextLevelXP(maxXp);

    // ⭐ Every level gives one skill point
    skillPoints++;

    leveledUp = true;
  }

  return {
    leveledUp,

    player: {
      ...player,
      xp,
      level,
      maxXp,
      skillPoints,
      coins: player.coins + reward.coins,
    },
  };
}

export function addCoins(
  player: Player,
  coins: number
): Player {
  return {
    ...player,
    coins: player.coins + coins,
  };
}

export function spendCoins(
  player: Player,
  amount: number
): Player {
  return {
    ...player,
    coins: Math.max(0, player.coins - amount),
  };
}