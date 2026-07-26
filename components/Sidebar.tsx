"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useGameContext } from "@/context/GameContext";
import { shopItems } from "@/data/shopItems";

function getRank(level: number) {
  if (level >= 50) return "👑 Echo Master";
  if (level >= 35) return "🌌 Ascendant";
  if (level >= 20) return "💎 Elite";
  if (level >= 10) return "🛡 Vanguard";
  if (level >= 5) return "⚔️ Pathfinder";

  return "🌱 Initiate";
}

export default function Sidebar() {
  const pathname = usePathname();

  const {
    player,
    equipped,
  } = useGameContext();

  const percentage = (player.xp / player.maxXp) * 100;

  const avatar =
    shopItems.find(
      (item) => item.id === equipped.avatar
    )?.icon ?? "👤";

  const title =
    shopItems.find(
      (item) => item.id === equipped.title
    )?.name ?? getRank(player.level);

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-zinc-800 bg-zinc-900 p-6">

      {/* Logo */}
      <div>

        <h1 className="text-3xl font-bold text-purple-400">
          ECHO
        </h1>

        {/* Player Card */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-zinc-800 to-zinc-900 p-5 shadow-xl">

          <div className="flex items-center gap-4">

            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-purple-500 bg-purple-600 text-3xl shadow-lg">
              {avatar}
            </div>

            <div className="flex-1">

              <h2 className="text-lg font-bold">
                {player.name}
              </h2>

              <p className="text-sm text-purple-300">
                {title}
              </p>

              <div className="mt-2 inline-flex rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold text-purple-300">
                ⭐ Level {player.level}
              </div>

            </div>

          </div>

          <div className="mt-6">

            <div className="mb-2 flex justify-between text-xs text-zinc-400">

              <span>XP</span>

              <span>
                {player.xp} / {player.maxXp}
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-zinc-700">

              <div
                className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-700"
                style={{
                  width: `${percentage}%`,
                }}
              />

            </div>

          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">

            <div className="rounded-xl bg-zinc-800 p-3 text-center">

              <p className="text-xs text-zinc-400">
                Coins
              </p>

              <p className="mt-1 text-lg font-bold text-yellow-400">
                🪙 {player.coins}
              </p>

            </div>

            <div className="rounded-xl bg-zinc-800 p-3 text-center">

              <p className="text-xs text-zinc-400">
                Streak
              </p>

              <p className="mt-1 text-lg font-bold text-orange-400">
                🔥 {player.streak}
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="mt-10 flex flex-col gap-3">

        <Link
          href="/dashboard"
          className={`rounded-xl px-4 py-3 transition ${
            pathname === "/dashboard"
              ? "bg-purple-600 text-white"
              : "hover:bg-purple-600"
          }`}
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/dashboard/missions"
          className={`rounded-xl px-4 py-3 transition ${
            pathname === "/dashboard/missions"
              ? "bg-purple-600 text-white"
              : "hover:bg-purple-600"
          }`}
        >
          🎯 Missions
        </Link>

        <Link
          href="/dashboard/profile"
          className={`rounded-xl px-4 py-3 transition ${
            pathname === "/dashboard/profile"
              ? "bg-purple-600 text-white"
              : "hover:bg-purple-600"
          }`}
        >
          👤 Profile
        </Link>

        <Link
          href="/dashboard/achievements"
          className={`rounded-xl px-4 py-3 transition ${
            pathname === "/dashboard/achievements"
              ? "bg-purple-600 text-white"
              : "hover:bg-purple-600"
          }`}
        >
          🏆 Achievements
        </Link>

        <Link
          href="/dashboard/shop"
          className={`rounded-xl px-4 py-3 transition ${
            pathname === "/dashboard/shop"
              ? "bg-purple-600 text-white"
              : "hover:bg-purple-600"
          }`}
        >
          🛒 Shop
        </Link>

        <Link
          href="/dashboard/inventory"
          className={`rounded-xl px-4 py-3 transition ${
            pathname === "/dashboard/inventory"
              ? "bg-purple-600 text-white"
              : "hover:bg-purple-600"
          }`}
        >
          🎒 Inventory
        </Link>

        <Link
          href="/dashboard/equipment"
          className={`rounded-xl px-4 py-3 transition ${
            pathname === "/dashboard/equipment"
              ? "bg-purple-600 text-white"
              : "hover:bg-purple-600"
          }`}
        >
          ⚔ Equipment
        </Link>

        <Link
          href="/dashboard/skills"
          className={`rounded-xl px-4 py-3 transition ${
            pathname === "/dashboard/skills"
              ? "bg-purple-600 text-white"
              : "hover:bg-purple-600"
          }`}
        >
          🌳 Skill Tree
        </Link>

        <Link
          href="/dashboard/settings"
          className={`rounded-xl px-4 py-3 transition ${
            pathname === "/dashboard/settings"
              ? "bg-purple-600 text-white"
              : "hover:bg-purple-600"
          }`}
        >
          ⚙️ Settings
        </Link>

      </nav>

      {/* Bottom */}

      <div className="mt-auto">

        <div className="rounded-xl bg-zinc-800 p-4">

          <p className="text-sm">
            🔥 Daily Streak
          </p>

          <p className="mt-2 text-2xl font-bold text-orange-400">
            {player.streak} Day{player.streak === 1 ? "" : "s"}
          </p>

        </div>

        <button className="mt-4 w-full rounded-xl bg-red-600 py-3 font-bold transition hover:bg-red-500">
          Logout
        </button>

      </div>

    </aside>
  );
}