import { Player } from "@/lib/player";
import { Quest } from "./quest";
import { Achievement } from "./achievement";

export type GameState = {
  player: Player;
  quests: Quest[];
  achievements: Achievement[];
  lastReset: string;
};