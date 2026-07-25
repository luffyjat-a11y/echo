import { Player } from "@/lib/player";
import { Enemy } from "@/types/enemy";

export type AttackResult = {
  player: Player;
  enemy: Enemy;

  playerDamage: number;
  enemyDamage: number;

  critical: boolean;

  playerDead: boolean;
  enemyDead: boolean;
};

function random(min: number, max: number) {
  return (
    Math.floor(
      Math.random() * (max - min + 1)
    ) + min
  );
}

export function battleTurn(
  player: Player,
  enemy: Enemy
): AttackResult {
  const critical =
    Math.random() * 100 <
    player.critChance;

  let playerDamage =
    player.attack +
    random(0, 3) -
    enemy.defense;

  if (critical) {
    playerDamage *= 2;
  }

  playerDamage = Math.max(
    1,
    playerDamage
  );

  const updatedEnemy = {
    ...enemy,
    health: Math.max(
      0,
      enemy.health - playerDamage
    ),
  };

  if (updatedEnemy.health <= 0) {
    return {
      player,

      enemy: updatedEnemy,

      playerDamage,

      enemyDamage: 0,

      critical,

      playerDead: false,

      enemyDead: true,
    };
  }

  let enemyDamage =
    enemy.attack +
    random(0, 2) -
    player.defense;

  enemyDamage = Math.max(
    1,
    enemyDamage
  );

  const updatedPlayer = {
    ...player,

    health: Math.max(
      0,
      player.health - enemyDamage
    ),
  };

  return {
    player: updatedPlayer,

    enemy: updatedEnemy,

    playerDamage,

    enemyDamage,

    critical,

    playerDead:
      updatedPlayer.health <= 0,

    enemyDead:
      updatedEnemy.health <= 0,
  };
}