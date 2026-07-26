import { lootTable } from "@/data/lootTable";
import { shopItems } from "@/data/shopItems";
import { LootItem } from "@/types/loot";

export function rollLoot(): LootItem {
  const roll = Math.random() * 100;

  let total = 0;

  for (const loot of lootTable) {
    total += loot.chance;

    if (roll <= total) {
      const item = shopItems.find(
        (shopItem) => shopItem.id === loot.itemId
      );

      if (!item) {
        break;
      }

      return {
        id: item.id,
        name: item.name,
        icon: item.icon,
        category: item.category,
        rarity: loot.rarity,
      };
    }
  }

  const item = shopItems.find(
    (shopItem) => shopItem.id === lootTable[0].itemId
  )!;

  return {
    id: item.id,
    name: item.name,
    icon: item.icon,
    category: item.category,
    rarity: lootTable[0].rarity,
  };
}