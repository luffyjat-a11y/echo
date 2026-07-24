"use client";

import GlassCard from "@/components/ui/GlassCard";
import RarityBadge from "@/components/ui/RarityBadge";
import { ShopItem } from "@/data/shopItems";

type ShopCardProps = {
  item: ShopItem;
  coins: number;
  owned: boolean;
  onBuy: (id: number) => void;
};

export default function ShopCard({
  item,
  coins,
  owned,
  onBuy,
}: ShopCardProps) {
  const canBuy = coins >= item.price;

  const glow = {
    Common: "hover:shadow-zinc-500/20",
    Rare: "hover:shadow-blue-500/40",
    Epic: "hover:shadow-purple-500/50",
    Legendary: "hover:shadow-orange-400/60",
  };

  return (
    <GlassCard
      className={`p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        glow[item.rarity]
      }`}
    >
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

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            Price
          </p>

          <p className="text-2xl font-bold text-yellow-400">
            🪙 {item.price}
          </p>
        </div>

        {owned ? (
          <button
            disabled
            className="rounded-xl bg-green-600 px-5 py-3 font-bold text-white"
          >
            ✓ Owned
          </button>
        ) : (
          <button
            onClick={() => onBuy(item.id)}
            disabled={!canBuy}
            className={`rounded-xl px-5 py-3 font-bold transition ${
              canBuy
                ? "bg-purple-600 hover:bg-purple-500"
                : "cursor-not-allowed bg-zinc-700 text-zinc-500"
            }`}
          >
            {canBuy ? "Buy" : "Not Enough"}
          </button>
        )}
      </div>
    </GlassCard>
  );
}