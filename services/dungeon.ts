import { Dungeon } from "@/types/dungeon";
import { Enemy } from "@/types/enemy";

export type DungeonState = {
  dungeon: Dungeon;

  currentWave: number;

  currentEnemy: Enemy;

  completed: boolean;

  bossDefeated: boolean;
};

export function startDungeon(
  dungeon: Dungeon
): DungeonState {
  return {
    dungeon,

    currentWave: 0,

    currentEnemy: {
      ...dungeon.waves[0],
    },

    completed: false,

    bossDefeated: false,
  };
}

export function nextWave(
  state: DungeonState
): DungeonState {
  const next = state.currentWave + 1;

  // More normal waves
  if (next < state.dungeon.waves.length) {
    return {
      ...state,

      currentWave: next,

      currentEnemy: {
        ...state.dungeon.waves[next],
      },
    };
  }

  // Boss fight
  if (!state.bossDefeated) {
    return {
      ...state,

      currentWave: next,

      currentEnemy: {
        ...state.dungeon.boss,
      },

      bossDefeated: true,
    };
  }

  // Dungeon finished
  return {
    ...state,

    completed: true,
  };
}

export function isBoss(
  state: DungeonState
) {
  return (
    state.currentEnemy.id ===
    state.dungeon.boss.id
  );
}

export function getDungeonRewards(
  dungeon: Dungeon
) {
  return {
    xp: dungeon.xp,

    coins: dungeon.coins,

    chestReward:
      dungeon.chestReward,
  };
}