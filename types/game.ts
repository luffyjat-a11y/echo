import { Player } from "@/lib/player";
import { Quest } from "./quest";
import { Achievement } from "./achievement";

export type InventoryItem = {
  id: number;
  equipped: boolean;
};

export type EquippedItems = {
  avatar: number | null;
  title: number | null;
  theme: number | null;
};

export type Chest = {
  id: number;
  opened: boolean;
};

export type GameState = {
  player: Player;

  quests: Quest[];

  achievements: Achievement[];

  inventory: InventoryItem[];

  equipped: EquippedItems;

  chests: Chest[];

  lastReset: string;
};