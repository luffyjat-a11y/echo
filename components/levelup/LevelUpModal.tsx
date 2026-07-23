"use client";

type LevelUpModalProps = {
  open: boolean;
  level: number;
  onClose: () => void;
};

export default function LevelUpModal({
  open,
  level,
  onClose,
}: LevelUpModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/80 backdrop-blur-md">

      {/* Animated Background */}
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-purple-900/40 via-black to-fuchsia-900/40" />

      {/* Glowing Circles */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl animate-pulse" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />

      {/* Card */}
      <div className="relative w-[520px] rounded-3xl border border-purple-500/50 bg-zinc-900/90 p-10 shadow-[0_0_80px_rgba(168,85,247,0.45)]">

        {/* Title */}
        <h1 className="animate-bounce text-center text-6xl font-black tracking-widest text-purple-400">
          LEVEL UP!
        </h1>

        {/* Level */}
        <div className="mt-10 text-center">

          <p className="text-zinc-400 text-lg">
            You reached
          </p>

          <h2 className="mt-3 text-8xl font-black text-white animate-pulse">
            {level}
          </h2>

        </div>

        {/* Rewards */}
        <div className="mt-10 rounded-2xl bg-zinc-800/70 p-6">

          <h3 className="mb-4 text-xl font-bold text-purple-400">
            Rewards
          </h3>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>⭐ XP Bonus</span>
              <span className="font-bold text-green-400">
                +100 XP
              </span>
            </div>

            <div className="flex justify-between">
              <span>💰 Echo Coins</span>
              <span className="font-bold text-yellow-400">
                +50
              </span>
            </div>

            <div className="flex justify-between">
              <span>🏅 Rank</span>
              <span className="font-bold text-cyan-400">
                Increased
              </span>
            </div>

          </div>

        </div>

        {/* Continue */}
        <button
          onClick={onClose}
          className="mt-10 w-full rounded-2xl bg-purple-600 py-4 text-xl font-bold transition hover:scale-105 hover:bg-purple-500"
        >
          Continue
        </button>

      </div>

    </div>
  );
}