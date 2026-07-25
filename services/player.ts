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

  let health = player.health;
  let maxHealth = player.maxHealth;

  let stamina = player.stamina;
  let maxStamina = player.maxStamina;

  let attack = player.attack;
  let defense = player.defense;
  let critChance = player.critChance;
  let speed = player.speed;

  let leveledUp = false;

  while (shouldLevelUp(xp, maxXp)) {
    xp -= maxXp;
    level++;
    maxXp = getNextLevelXP(maxXp);

    skillPoints++;

    maxHealth += 10;
    health = maxHealth;

    maxStamina += 5;
    stamina = maxStamina;

    attack += 2;
    defense += 1;
    critChance += 1;
    speed += 1;

    leveledUp = true;
  }

  return {
    leveledUp,
    player: {
      ...player,

      xp,
      level,
      maxXp,

      coins: player.coins + reward.coins,

      skillPoints,

      health,
      maxHealth,

      stamina,
      maxStamina,

      attack,
      defense,
      critChance,
      speed,
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