"use client";

import { useGameContext } from "@/context/GameContext";

import EquipmentSlot from "./EquipmentSlot";
import EquipmentStats from "./EquipmentStats";

export default function EquipmentPanel() {
  const { player, equipped } =
    useGameContext();

  return (
    <div className="grid gap-8 lg:grid-cols-2">

      <div className="space-y-4">

        <EquipmentSlot
          icon="⚔"
          label="Weapon"
          itemName={
            equipped.weapon
              ? `#${equipped.weapon}`
              : undefined
          }
        />

        <EquipmentSlot
          icon="🛡"
          label="Armor"
          itemName={
            equipped.armor
              ? `#${equipped.armor}`
              : undefined
          }
        />

        <EquipmentSlot
          icon="👑"
          label="Helmet"
          itemName={
            equipped.helmet
              ? `#${equipped.helmet}`
              : undefined
          }
        />

        <EquipmentSlot
          icon="👢"
          label="Boots"
          itemName={
            equipped.boots
              ? `#${equipped.boots}`
              : undefined
          }
        />

        <EquipmentSlot
          icon="💍"
          label="Ring"
          itemName={
            equipped.ring
              ? `#${equipped.ring}`
              : undefined
          }
        />

        <EquipmentSlot
          icon="📿"
          label="Necklace"
          itemName={
            equipped.necklace
              ? `#${equipped.necklace}`
              : undefined
          }
        />

      </div>

      <EquipmentStats player={player} />

    </div>
  );
}