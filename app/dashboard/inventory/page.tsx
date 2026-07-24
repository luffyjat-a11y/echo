"use client";

import { useGameContext } from "@/context/GameContext";
import { shopItems } from "@/data/shopItems";
import GlassCard from "@/components/ui/GlassCard";

export default function InventoryPage() {
  const { inventory } = useGameContext();

  const ownedItems = shopItems.filter((item) =>
    inventory.some((i) => i.id === item.id)
  );

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">
        🎒 Inventory
      </h1>

      {ownedItems.length === 0 ? (
        <GlassCard className="p-8 text-center">
          <p className="text-zinc-400 text-lg">
            You don't own any items yet.
          </p>
        </GlassCard>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ownedItems.map((item) => (
            <GlassCard
              key={item.id}
              className="p-6"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h2 className="mt-4 text-2xl font-bold">
                {item.name}
              </h2>

              <p className="mt-2 text-zinc-300">
                {item.description}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full bg-green-600/90 px-4 py-2 font-bold text-white">
                  ✓ Owned
                </span>

                <span className="text-sm text-zinc-400">
                  {item.category}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}