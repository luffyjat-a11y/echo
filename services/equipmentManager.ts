import { Player } from "@/lib/player";
import { equipment } from "@/data/equipment";
import { EquippedItems } from "@/types/game";

import { applyEquipmentStats } from "@/services/equipment";
import { getBasePlayer } from "./playerBase";

export function updatePlayerEquipment(
  player: Player,
  equipped: EquippedItems
): Player {
  const basePlayer = getBasePlayer(player);

  const equippedIds = [
    equipped.weapon,
    equipped.armor,
    equipped.helmet,
    equipped.boots,
    equipped.ring,
    equipped.necklace,
  ].filter((id): id is number => id !== null);

  const equippedItems = equipment.filter((item) =>
    equippedIds.includes(item.id)
  );

  return applyEquipmentStats(
    basePlayer,
    equippedItems
  );
}

export function equipSlot(
  equipped: EquippedItems,
  slot:
    | "weapon"
    | "armor"
    | "helmet"
    | "boots"
    | "ring"
    | "necklace",
  itemId: number
): EquippedItems {
  return {
    ...equipped,
    [slot]: itemId,
  };
}