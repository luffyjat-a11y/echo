"use client";

import { useGameContext } from "@/context/GameContext";
import EquipmentSlot from "./EquipmentSlot";
import { shopItems } from "@/data/shopItems";

export default function CharacterPreview() {
  const { player, equipped } = useGameContext();

  const avatar = shopItems.find(
    (item) => item.id === equipped.avatar
  );

  const title = shopItems.find(
    (item) => item.id === equipped.title
  );

  const theme = shopItems.find(
    (item) => item.id === equipped.theme
  );

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-xl">

      {/* Character */}
      <div className="text-center">

        <div className="text-8xl">
          {avatar?.icon ?? "👤"}
        </div>

        <h1 className="mt-4 text-4xl font-bold">
          {player.name}
        </h1>

        <p className="mt-2 text-xl text-purple-400">
          {title?.name ?? "🌱 Initiate"}
        </p>

        <p className="mt-2 text-zinc-400">
          Level {player.level}
        </p>

      </div>

      <div className="mt-10 space-y-4">

        <EquipmentSlot
          icon="🐉"
          label="Avatar"
          value={avatar?.name ?? "Default Avatar"}
        />

        <EquipmentSlot
          icon="🌌"
          label="Title"
          value={title?.name ?? "None Equipped"}
        />

        <EquipmentSlot
          icon="💜"
          label="Theme"
          value={theme?.name ?? "Default Theme"}
        />

      </div>

    </div>
  );
}