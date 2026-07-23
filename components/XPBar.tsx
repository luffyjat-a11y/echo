type XPBarProps = {
  xp: number;
  maxXp: number;
  level: number;
  coins: number;
};

function getRank(level: number) {
  if (level >= 50) return "👑 Echo Master";
  if (level >= 35) return "🌌 Ascendant";
  if (level >= 20) return "💎 Elite";
  if (level >= 10) return "🛡 Vanguard";
  if (level >= 5) return "⚔️ Pathfinder";

  return "🌱 Initiate";
}

export default function XPBar({
  xp,
  maxXp,
  level,
  coins,
}: XPBarProps) {
  const percentage = (xp / maxXp) * 100;

  return (
    <div className="rounded-2xl bg-zinc-900 p-6 shadow-lg">
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-3xl">
            👤
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Jon
            </h2>

            <p className="text-purple-400">
              {getRank(level)}
            </p>

            <p className="text-zinc-500">
              ⭐ Level {level}
            </p>
          </div>

        </div>

        <div className="text-right">

          <p className="text-2xl font-bold text-yellow-400">
            💰 {coins}
          </p>

          <p className="text-sm text-zinc-500">
            Echo Coins
          </p>

        </div>

      </div>

      <div className="mt-6">

        <div className="flex justify-between text-sm text-zinc-400">
          <span>XP Progress</span>
          <span>{xp} / {maxXp}</span>
        </div>

        <div className="mt-2 h-4 rounded-full bg-zinc-700">

          <div
            className="h-4 rounded-full bg-purple-500 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>
    </div>
  );
}