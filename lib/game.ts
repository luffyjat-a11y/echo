import { Player } from "@/lib/player";
import { Quest } from "@/types/quest";
import { Achievement } from "@/types/achievement";

export type GameState = {
  player: Player;
  quests: Quest[];
  achievements: Achievement[];
  lastReset: string;
};