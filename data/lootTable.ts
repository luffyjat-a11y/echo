import { shopItems } from "./shopItems";

export type LootRarity =
  | "Common"
  | "Rare"
  | "Epic"
  | "Legendary";

export type LootItem = {
  itemId: number;
  rarity: LootRarity;
  chance: number;
};

export const lootTable: LootItem[] = [
  // Common
  {
    itemId: shopItems[0].id,
    rarity: "Common",
    chance: 40,
  },
  {
    itemId: shopItems[1].id,
    rarity: "Common",
    chance: 30,
  },

  // Rare
  {
    itemId: shopItems[2].id,
    rarity: "Rare",
    chance: 15,
  },
  {
    itemId: shopItems[3].id,
    rarity: "Rare",
    chance: 8,
  },

  // Epic
  {
    itemId: shopItems[4].id,
    rarity: "Epic",
    chance: 5,
  },

  // Legendary
  {
    itemId: shopItems[5].id,
    rarity: "Legendary",
    chance: 2,
  },
];