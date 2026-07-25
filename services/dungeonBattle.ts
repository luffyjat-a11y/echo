import { DungeonState } from "./dungeon";
import { battleTurn } from "./combat";

export function dungeonAttack(
  player: any,
  state: DungeonState
) {
  const result = battleTurn(
    player,
    state.currentEnemy
  );

  return result;
}
