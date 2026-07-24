"use client";

import CharacterPreview from "@/components/equipment/CharacterPreview";
import EquipmentCard from "@/components/equipment/EquipmentCard";

import { useGameContext } from "@/context/GameContext";
import { shopItems } from "@/data/shopItems";

export default function EquipmentPage() {
  const {
    inventory,
    equipped,
    equip,
  } = useGameContext();

  const ownedItems = shopItems.filter((item) =>
    inventory.some((i) => i.id === item.id)
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[380px_1fr]">

      {/* Character Preview */}
      <CharacterPreview />

      {/* Equipment */}
      <div>

        <h1 className="mb-6 text-4xl font-bold">
          ⚔ Equipment
        </h1>

        {ownedItems.length === 0 ? (
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-10 text-center backdrop-blur-xl">
            <div className="text-6xl">🎒</div>

            <h2 className="mt-4 text-2xl font-bold">
              No Equipment
            </h2>

            <p className="mt-3 text-zinc-400">
              Buy items from the Shop to equip them.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {ownedItems.map((item) => {
              const isEquipped =
                (item.category === "Avatar" &&
                  equipped.avatar === item.id) ||
                (item.category === "Title" &&
                  equipped.title === item.id) ||
                (item.category === "Theme" &&
                  equipped.theme === item.id);

              return (
                <EquipmentCard
                  key={item.id}
                  item={item}
                  equipped={isEquipped}
                  onEquip={equip}
                />
              );
            })}
          </div>
        )}

      </div>

    </div>
  );
}