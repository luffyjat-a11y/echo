export type LootRarity =
  | "Common"
  | "Rare"
  | "Epic"
  | "Legendary";

export type LootCategory =
  | "Avatar"
  | "Title"
  | "Theme";

export type LootItem = {
  id: number;
  name: string;
  icon: string;

  rarity: LootRarity;

  category: LootCategory;

  chance: number;
};