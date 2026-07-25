import { Player } from "@/lib/player";
import { Equipment } from "@/types/equipment";

export function applyEquipmentStats(
  player: Player,
  items: Equipment[]
): Player {
  let attack = player.attack;
  let defense = player.defense;

  let maxHealth = player.maxHealth;
  let maxStamina = player.maxStamina;

  let critChance = player.critChance;
  let speed = player.speed;

  for (const item of items) {
    attack += item.attack;
    defense += item.defense;

    maxHealth += item.health;
    maxStamina += item.stamina;

    critChance += item.critChance;
    speed += item.speed;
  }

  return {
    ...player,

    attack,
    defense,

    maxHealth,
    health: Math.min(player.health, maxHealth),

    maxStamina,
    stamina: Math.min(player.stamina, maxStamina),

    critChance,
    speed,
  };
}