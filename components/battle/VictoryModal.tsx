"use client";

type VictoryModalProps = {
  open: boolean;
  xp: number;
  coins: number;
  levelUp?: boolean;
  onClose: () => void;
};

export default function VictoryModal({
  open,
  xp,
  coins,
  levelUp = false,
  onClose,
}: VictoryModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-[500px] rounded-3xl border border-purple-600 bg-zinc-900 p-8 shadow-2xl">

        <h1 className="text-center text-5xl font-black text-yellow-400">
          🏆 Victory!
        </h1>

        <div className="mt-8 space-y-4 text-center">

          <p className="text-3xl">
            ⭐ +{xp} XP
          </p>

          <p className="text-3xl">
            💰 +{coins} Coins
          </p>

          {levelUp && (
            <p className="animate-pulse text-4xl font-black text-purple-400">
              🎉 LEVEL UP!
            </p>
          )}

        </div>

        <button
          onClick={onClose}
          className="mt-10 w-full rounded-xl bg-purple-600 py-4 text-xl font-bold transition hover:bg-purple-500"
        >
          Continue
        </button>

      </div>

    </div>
  );
}