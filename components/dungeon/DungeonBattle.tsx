"use client";

import BattleCard from "@/components/battle/BattleCard";
import BattleLog from "@/components/battle/BattleLog";
import { Enemy } from "@/types/enemy";
import { Player } from "@/lib/player";

type Props = {
  player: Player;
  enemy: Enemy;
  logs: string[];
  onAttack: () => void;
};

export default function DungeonBattle({
  player,
  enemy,
  logs,
  onAttack,
}: Props) {
  return (
    <div>

      <div className="grid gap-8 lg:grid-cols-2">

        <BattleCard
          icon="🧑"
          name={player.name}
          level={player.level}
          health={player.health}
          maxHealth={player.maxHealth}
          attack={player.attack}
          defense={player.defense}
          critChance={player.critChance}
          isPlayer
        />

        <BattleCard
          icon={enemy.icon}
          name={enemy.name}
          level={enemy.level}
          health={enemy.health}
          maxHealth={enemy.maxHealth}
          attack={enemy.attack}
          defense={enemy.defense}
        />

      </div>

      <button
        onClick={onAttack}
        className="mt-8 w-full rounded-xl bg-purple-600 py-4 text-xl font-bold hover:bg-purple-500"
      >
        ⚔ Attack
      </button>

      <div className="mt-8">
        <BattleLog logs={logs} />
      </div>

    </div>
  );
}