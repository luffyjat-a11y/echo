export function getRank(level: number) {
  if (level >= 50) return "👑 Echo Master";
  if (level >= 35) return "🌌 Ascendant";
  if (level >= 20) return "💎 Elite";
  if (level >= 10) return "🛡 Vanguard";
  if (level >= 5) return "⚔️ Pathfinder";

  return "🌱 Initiate";
}