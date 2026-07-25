import { Player } from "@/lib/player";
import { Enemy } from "@/types/enemy";

export function battleTurn(
  player: Player,
  enemy: Enemy
) {
  let critical = false;

  // ---------- PLAYER ATTACK ----------
  let playerDamage = Math.max(
    1,
    player.attack - enemy.defense
  );

  if (Math.random() * 100 < player.critChance) {
    critical = true;
    playerDamage *= 2;
  }

  const updatedEnemy: Enemy = {
    ...enemy,
    health: Math.max(
      0,
      enemy.health - playerDamage
    ),
  };

  const enemyDead = updatedEnemy.health <= 0;

  // Enemy defeated before attacking
  if (enemyDead) {
    return {
      player,
      enemy: updatedEnemy,

      playerDamage,
      enemyDamage: 0,

      critical,

      enemyDead: true,
      playerDead: false,
    };
  }

  // ---------- ENEMY ATTACK ----------
  const enemyDamage = Math.max(
    1,
    updatedEnemy.attack - player.defense
  );

  const updatedPlayer: Player = {
    ...player,
    health: Math.max(
      0,
      player.health - enemyDamage
    ),
  };

  const playerDead = updatedPlayer.health <= 0;

  return {
    player: updatedPlayer,
    enemy: updatedEnemy,

    playerDamage,
    enemyDamage,

    critical,

    enemyDead: false,
    playerDead,
  };
}