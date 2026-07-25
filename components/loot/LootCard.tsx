"use client";

import { LootItem } from "@/types/loot";

type Props = {
  loot: LootItem;
};

function rarityColor(rarity: LootItem["rarity"]) {
  switch (rarity) {
    case "Legendary":
      return "border-yellow-400 bg-yellow-500/10";

    case "Epic":
      return "border-purple-500 bg-purple-500/10";

    case "Rare":
      return "border-blue-500 bg-blue-500/10";

    default:
      return "border-zinc-600 bg-zinc-800";
  }
}

export default function LootCard({
  loot,
}: Props) {
  return (
    <div
      className={`rounded-3xl border-2 p-8 text-center transition-all duration-300 ${rarityColor(
        loot.rarity
      )}`}
    >
      <div className="text-7xl">
        {loot.icon}
      </div>

      <h2 className="mt-5 text-3xl font-bold">
        {loot.name}
      </h2>

      <p className="mt-2 text-lg text-zinc-400">
        {loot.category}
      </p>

      <div className="mt-6 inline-block rounded-full bg-black/30 px-5 py-2">
        <span className="font-bold">
          {loot.rarity}
        </span>
      </div>
    </div>
  );
}