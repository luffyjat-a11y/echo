import { Player } from "@/lib/player";
import {
  InventoryItem,
  EquippedItems,
} from "@/types/game";

export function canBuy(
  player: Player,
  price: number
) {
  return player.coins >= price;
}

export function buyItem(
  player: Player,
  inventory: InventoryItem[],
  id: number,
  price: number
) {
  if (!canBuy(player, price)) {
    return null;
  }

  if (
    inventory.some(
      (item) => item.id === id
    )
  ) {
    return null;
  }

  return {
    player: {
      ...player,
      coins: player.coins - price,
    },

    inventory: [
      ...inventory,
      {
        id,
        equipped: false,
      },
    ],
  };
}

export function unlockItem(
  player: Player,
  inventory: InventoryItem[],
  id: number
) {
  // Already owned
  if (
    inventory.some(
      (item) => item.id === id
    )
  ) {
    return {
      player: {
        ...player,
        // Duplicate reward
        coins: player.coins + 50,
      },

      inventory,

      duplicate: true,
    };
  }

  return {
    player,

    inventory: [
      ...inventory,
      {
        id,
        equipped: false,
      },
    ],

    duplicate: false,
  };
}

export function equipItem(
  inventory: InventoryItem[],
  equipped: EquippedItems,
  id: number,
  category:
    | "Avatar"
    | "Title"
    | "Theme"
) {
  const updatedInventory =
    inventory.map((item) => ({
      ...item,
      equipped: item.id === id,
    }));

  const updatedEquipped = {
    ...equipped,
  };

  switch (category) {
    case "Avatar":
      updatedEquipped.avatar = id;
      break;

    case "Title":
      updatedEquipped.title = id;
      break;

    case "Theme":
      updatedEquipped.theme = id;
      break;
  }

  return {
    inventory: updatedInventory,
    equipped: updatedEquipped,
  };
}