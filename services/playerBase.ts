import { Player } from "@/lib/player";

export function getBasePlayer(player: Player): Player {
  return {
    ...player,

    // Base Combat Stats
    health: 100 + (player.level - 1) * 10,
    maxHealth: 100 + (player.level - 1) * 10,

    stamina: 100 + (player.level - 1) * 5,
    maxStamina: 100 + (player.level - 1) * 5,

    attack: 15 + (player.level - 1) * 2,
    defense: 5 + (player.level - 1),

    critChance: 10 + Math.floor((player.level - 1) / 5),
    speed: 10 + Math.floor((player.level - 1) / 4),
  };
}