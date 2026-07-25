import { Enemy } from "./enemy";

export type DungeonDifficulty =
  | "Easy"
  | "Medium"
  | "Hard"
  | "Nightmare";

export type Dungeon = {
  id: number;

  name: string;

  icon: string;

  description: string;

  difficulty: DungeonDifficulty;

  recommendedLevel: number;

  waves: Enemy[];

  boss: Enemy;

  xp: number;

  coins: number;

  chestReward: number;
};