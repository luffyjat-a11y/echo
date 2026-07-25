export type EquipmentSlot =
  | "Weapon"
  | "Armor"
  | "Helmet"
  | "Boots"
  | "Ring"
  | "Necklace";

export type EquipmentRarity =
  | "Common"
  | "Rare"
  | "Epic"
  | "Legendary"
  | "Mythic"
  | "Monarch";

export type Equipment = {
  id: number;

  name: string;
  icon: string;

  slot: EquipmentSlot;
  rarity: EquipmentRarity;

  level: number;
  price: number;

  attack: number;
  defense: number;

  health: number;
  stamina: number;

  critChance: number;
  speed: number;
};