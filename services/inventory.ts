import { InventoryItem } from "@/types/game";

export function ownsItem(
  inventory: InventoryItem[],
  id: number
) {
  return inventory.some((i) => i.id === id);
}

export function addItem(
  inventory: InventoryItem[],
  id: number
): InventoryItem[] {
  if (ownsItem(inventory, id))
    return inventory;

  return [
    ...inventory,
    {
      id,
      equipped: false,
    },
  ];
}

export function equipItem(
  inventory: InventoryItem[],
  id: number
) {
  return inventory.map((item) => ({
    ...item,
    equipped: item.id === id,
  }));
}