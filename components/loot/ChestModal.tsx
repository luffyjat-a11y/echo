"use client";

import { useState } from "react";

import LootCard from "./LootCard";

import { rollLoot } from "@/services/loot";

export default function ChestModal() {
  const [opened, setOpened] =
    useState(false);

  const [loot, setLoot] =
    useState(rollLoot());

  function openChest() {
    setLoot(rollLoot());

    setOpened(true);
  }

  function closeChest() {
    setOpened(false);
  }

  return (
    <div className="rounded-3xl border border-zinc-700 bg-zinc-900 p-8">

      {!opened ? (
        <div className="text-center">

          <div className="text-8xl animate-bounce">
            📦
          </div>

          <button
            onClick={openChest}
            className="mt-8 rounded-xl bg-purple-600 px-8 py-3 font-bold transition hover:bg-purple-500"
          >
            Open Chest
          </button>

        </div>
      ) : (
        <div>

          <LootCard loot={loot} />

          <button
            onClick={closeChest}
            className="mt-8 w-full rounded-xl bg-zinc-700 py-3 font-bold hover:bg-zinc-600"
          >
            Close
          </button>

        </div>
      )}

    </div>
  );
}