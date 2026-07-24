"use client";

import GlassCard from "@/components/ui/GlassCard";
import RarityBadge from "@/components/ui/RarityBadge";
import { ShopItem } from "@/data/shopItems";

type EquipmentCardProps = {
  item: ShopItem;
  equipped: boolean;
  onEquip: (id: number, category: ShopItem["category"]) => void;
};

export default function EquipmentCard({
  item,
  equipped,
  onEquip,
}: EquipmentCardProps) {
  return (
    <GlassCard className="p-6">
      <div className="flex items-start justify-between">
        <div className="text-6xl">
          {item.icon}
        </div>

        <RarityBadge rarity={item.rarity} />
      </div>

      <h2 className="mt-5 text-2xl font-bold">
        {item.name}
      </h2>

      <p className="mt-3 text-zinc-300">
        {item.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300">
          {item.category}
        </span>

        {equipped ? (
          <button
            disabled
            className="rounded-xl bg-green-600 px-5 py-3 font-bold text-white"
          >
            ✓ Equipped
          </button>
        ) : (
          <button
            onClick={() => onEquip(item.id, item.category)}
            className="rounded-xl bg-purple-600 px-5 py-3 font-bold text-white transition hover:bg-purple-500"
          >
            Equip
          </button>
        )}
      </div>
    </GlassCard>
  );
}