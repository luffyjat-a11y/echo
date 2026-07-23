import { GameState } from "@/types/game";

const GAME_KEY = "echo-game";

export function saveGame(game: GameState) {
  localStorage.setItem(GAME_KEY, JSON.stringify(game));
}

export function loadGame(): GameState | null {
  const data = localStorage.getItem(GAME_KEY);

  if (!data) return null;

  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}