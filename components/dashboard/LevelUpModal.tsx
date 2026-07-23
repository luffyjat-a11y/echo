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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-fadeIn">

      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-yellow-400 bg-gradient-to-b from-zinc-900 to-zinc-950 p-10 text-center shadow-[0_0_60px_rgba(168,85,247,0.6)]">

        {/* Glow */}
        <div className="absolute inset-0 animate-pulse rounded-3xl border-2 border-purple-500 opacity-40" />

        <div className="relative">

          <div className="animate-bounce text-7xl">
            🎉
          </div>

          <h1 className="mt-4 bg-gradient-to-r from-yellow-300 via-purple-400 to-blue-400 bg-clip-text text-5xl font-extrabold text-transparent">
            LEVEL UP
          </h1>

          <p className="mt-6 text-zinc-400">
            Congratulations!
          </p>

          <h2 className="mt-2 text-6xl font-black text-white">
            Level {level}
          </h2>

          <div className="mt-8 space-y-3">

            <div className="rounded-xl bg-zinc-800 p-3">
              ⭐ New Power Increased
            </div>

            <div className="rounded-xl bg-zinc-800 p-3">
              💰 +50 Bonus Coins
            </div>

            <div className="rounded-xl bg-zinc-800 p-3">
              🔥 Keep going Hero!
            </div>

          </div>

          <button
            onClick={onClose}
            className="mt-10 w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-4 text-xl font-bold transition hover:scale-105"
          >
            Continue Adventure →
          </button>

        </div>

      </div>

    </div>
  );
}