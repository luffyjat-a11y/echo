"use client";

import { useState } from "react";

import { useGameContext } from "@/context/GameContext";

import { enemies } from "@/data/enemies";
import { Enemy } from "@/types/enemy";

import { battleTurn } from "@/services/combat";
import { rewardPlayer } from "@/services/player";

import BattleCard from "@/components/battle/BattleCard";
import BattleLog from "@/components/battle/BattleLog";
import BattleEffects from "@/components/battle/BattleEffects";

import { useBattleAnimation } from "@/hooks/useBattleAnimation";

export default function BattlePage() {
  const { player } = useGameContext();

  const [battlePlayer, setBattlePlayer] =
    useState(player);

  const [selectedEnemy, setSelectedEnemy] =
    useState<Enemy | null>(null);

  const [logs, setLogs] =
    useState<string[]>([]);

  const {
    showEffect,
    critical,
    damage,
    play,
  } = useBattleAnimation();

  function startBattle(enemy: Enemy) {
    setBattlePlayer({
      ...player,
      health: player.maxHealth,
      stamina: player.maxStamina,
    });

    setSelectedEnemy({
      ...enemy,
    });

    setLogs([
      `⚔ Battle started against ${enemy.name}!`,
    ]);
  }

  function attack() {
    if (!selectedEnemy) return;

    const result = battleTurn(
      battlePlayer,
      selectedEnemy
    );

    play(
      result.playerDamage,
      result.critical
    );

    setBattlePlayer(result.player);
    setSelectedEnemy(result.enemy);

    const newLogs: string[] = [];

    newLogs.push(
      `⚔ You dealt ${result.playerDamage} damage`
    );

    if (result.critical) {
      newLogs.push(
        "💥 Critical Hit!"
      );
    }

    if (!result.enemyDead) {
      newLogs.push(
        `👹 ${selectedEnemy.name} dealt ${result.enemyDamage} damage`
      );
    }

    if (result.enemyDead) {
      const reward =
        rewardPlayer(result.player, {
          xp: selectedEnemy.xp,
          coins: selectedEnemy.coins,
        });

      setBattlePlayer(reward.player);

      newLogs.push(
        `🏆 ${selectedEnemy.name} defeated!`
      );

      newLogs.push(
        `⭐ +${selectedEnemy.xp} XP`
      );

      newLogs.push(
        `💰 +${selectedEnemy.coins} Coins`
      );

      if (reward.leveledUp) {
        newLogs.push(
          `🎉 LEVEL UP! You are now Level ${reward.player.level}!`
        );
      }
    }

    if (result.playerDead) {
      newLogs.push(
        "💀 You were defeated!"
      );
    }

    setLogs((prev) => [
      ...newLogs,
      ...prev,
    ]);
  }

  if (!selectedEnemy) {
    return (
      <main className="min-h-screen bg-zinc-950 p-8 text-white">

        <h1 className="mb-8 text-5xl font-black text-purple-400">
          ⚔ Choose Your Enemy
        </h1>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {enemies.map((enemy) => (
            <button
              key={enemy.id}
              onClick={() =>
                startBattle(enemy)
              }
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all hover:scale-105 hover:border-purple-500"
            >
              <div className="text-7xl">
                {enemy.icon}
              </div>

              <h2 className="mt-4 text-3xl font-bold">
                {enemy.name}
              </h2>

              <p className="mt-2 text-purple-400">
                Level {enemy.level}
              </p>

              <div className="mt-6 space-y-1 text-zinc-300">
                <p>❤️ {enemy.maxHealth}</p>
                <p>⚔ {enemy.attack}</p>
                <p>🛡 {enemy.defense}</p>
                <p>⭐ {enemy.xp} XP</p>
                <p>💰 {enemy.coins} Coins</p>
              </div>
            </button>
          ))}

        </div>

      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-zinc-950 p-8 text-white">

      <button
        onClick={() =>
          setSelectedEnemy(null)
        }
        className="mb-8 rounded-xl bg-zinc-800 px-5 py-2 transition hover:bg-zinc-700"
      >
        ← Back
      </button>

      <h1 className="mb-8 text-5xl font-black text-purple-400">
        ⚔ Battle
      </h1>

      <div className="grid gap-8 lg:grid-cols-2">

        <BattleCard
          icon="🧑"
          name={battlePlayer.name}
          level={battlePlayer.level}
          health={battlePlayer.health}
          maxHealth={battlePlayer.maxHealth}
          attack={battlePlayer.attack}
          defense={battlePlayer.defense}
          critChance={battlePlayer.critChance}
          isPlayer
        />

        <BattleCard
          icon={selectedEnemy.icon}
          name={selectedEnemy.name}
          level={selectedEnemy.level}
          health={selectedEnemy.health}
          maxHealth={selectedEnemy.maxHealth}
          attack={selectedEnemy.attack}
          defense={selectedEnemy.defense}
        />

      </div>

      <button
        onClick={attack}
        disabled={
          selectedEnemy.health <= 0 ||
          battlePlayer.health <= 0
        }
        className="mt-8 rounded-xl bg-purple-600 px-10 py-4 text-xl font-bold transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:bg-zinc-700"
      >
        ⚔ Attack
      </button>

      <div className="mt-10">
        <BattleLog logs={logs} />
      </div>

      <BattleEffects
        visible={showEffect}
        critical={critical}
        damage={damage}
      />

    </main>
  );
}