import { lootTable } from "@/data/lootTable";

export function rollLoot() {
  const roll = Math.random() * 100;

  let total = 0;

  for (const loot of lootTable) {
    total += loot.chance;

    if (roll <= total) {
      return loot;
    }
  }

  return lootTable[0];
}