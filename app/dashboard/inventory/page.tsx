"use client";

import { useGameContext } from "@/context/GameContext";
import { shopItems } from "@/data/shopItems";

export default function InventoryPage() {
  const {
    inventory,
    equipped,
    equip,
  } = useGameContext();

  const ownedItems = shopItems.filter((item) =>
    inventory.some((i) => i.id === item.id)
  );

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">
        🎒 Inventory
      </h1>

      {ownedItems.length === 0 ? (
        <div className="rounded-2xl bg-zinc-900 p-8 text-center text-zinc-400">
          You don't own any items yet.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ownedItems.map((item) => {
            const isEquipped =
              equipped.avatar === item.id ||
              equipped.title === item.id ||
              equipped.theme === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <div className="text-5xl">
                  {item.icon}
                </div>

                <h2 className="mt-4 text-2xl font-bold">
                  {item.name}
                </h2>

                <p className="mt-2 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="rounded-full bg-green-600 px-4 py-2 font-bold">
                    ✓ Owned
                  </span>

                  <button
                    onClick={() =>
                      equip(item.id, item.category)
                    }
                    disabled={isEquipped}
                    className={`rounded-xl px-4 py-2 font-bold transition ${
                      isEquipped
                        ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
                        : "bg-purple-600 hover:bg-purple-500"
                    }`}
                  >
                    {isEquipped
                      ? "Equipped"
                      : "Equip"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}