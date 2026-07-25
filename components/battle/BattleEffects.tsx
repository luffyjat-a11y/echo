"use client";

type BattleEffectsProps = {
  critical: boolean;
  damage: number;
  visible: boolean;
};

export default function BattleEffects({
  critical,
  damage,
  visible,
}: BattleEffectsProps) {
  if (!visible) return null;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

      <div
        className={`animate-bounce rounded-2xl px-6 py-4 font-black shadow-2xl
        ${
          critical
            ? "bg-yellow-500 text-black text-5xl"
            : "bg-red-600 text-white text-4xl"
        }`}
      >
        {critical ? "💥 CRITICAL!" : `-${damage}`}
      </div>

    </div>
  );
}