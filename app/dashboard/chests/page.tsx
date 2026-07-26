"use client";

import { useState } from "react";

import { useGameContext } from "@/context/GameContext";
import RewardPopup from "@/components/loot/RewardPopup";
import { LootItem } from "@/types/loot";

export default function ChestsPage() {
  const {
    chests,
    openChest,
    clearOpenedChests,
  } = useGameContext();

  const [reward, setReward] = useState<LootItem | null>(null);

  const unopened = chests.filter(
    (c) => !c.opened
  );

  function handleOpen(id: number) {
    const loot = openChest(id);

    if (!loot) return;

    setReward(loot);
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-black">
          📦 Chests
        </h1>

        <p className="mt-2 text-zinc-400">
          Open mysterious chests to unlock rewards.
        </p>
      </div>

      <div className="rounded-3xl bg-zinc-900 p-6">

        <h2 className="text-2xl font-bold">
          Unopened Chests
        </h2>

        <p className="mt-4 text-5xl font-black text-purple-400">
          {unopened.length}
        </p>

      </div>

      {unopened.length === 0 ? (

        <div className="rounded-3xl bg-zinc-900 p-12 text-center">

          <div className="text-7xl">
            📭
          </div>

          <h2 className="mt-6 text-3xl font-bold">
            No Chests
          </h2>

          <p className="mt-2 text-zinc-400">
            Complete quests to earn more chests.
          </p>

        </div>

      ) : (

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {unopened.map((chest) => (

            <div
              key={chest.id}
              className="rounded-3xl bg-zinc-900 p-8 text-center"
            >

              <div className="animate-bounce text-8xl">
                📦
              </div>

              <button
                onClick={() => handleOpen(chest.id)}
                className="mt-8 w-full rounded-xl bg-purple-600 py-3 font-bold hover:bg-purple-500"
              >
                Open Chest
              </button>

            </div>

          ))}

        </div>

      )}

      {reward && (

        <RewardPopup
          open={true}
          itemName={reward.name}
          itemIcon={reward.icon}
          rarity={reward.rarity}
          onClose={() => {
            setReward(null);
            clearOpenedChests();
          }}
        />

      )}

    </div>
  );
}