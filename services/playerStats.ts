import { Player } from "@/lib/player";
import { equipment } from "@/data/equipment";
import { EquippedItems } from "@/types/game";
import { applyEquipmentStats } from "./equipment";

export function calculatePlayerStats(
  player: Player,
  equipped: EquippedItems
): Player {
  const ids = [
    equipped.weapon,
    equipped.armor,
    equipped.helmet,
    equipped.boots,
    equipped.ring,
    equipped.necklace,
  ].filter(Boolean) as number[];

  const items = equipment.filter((item) =>
    ids.includes(item.id)
  );

  return applyEquipmentStats(player, items);
}