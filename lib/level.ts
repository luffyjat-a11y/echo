export function getNextLevelXP(currentMaxXP: number) {
  return Math.floor(currentMaxXP * 1.5);
}

export function shouldLevelUp(
  currentXP: number,
  maxXP: number
) {
  return currentXP >= maxXP;
}