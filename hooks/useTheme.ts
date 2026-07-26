"use client";

import { useGameContext } from "@/context/GameContext";
import { getThemeColors } from "@/lib/theme";

export function useTheme() {
  const { equipped } = useGameContext();

  return getThemeColors(equipped.theme);
}