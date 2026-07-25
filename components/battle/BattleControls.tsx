"use client";

type BattleControlsProps = {
  onAttack: () => void;
  disabled: boolean;
};

export default function BattleControls({
  onAttack,
  disabled,
}: BattleControlsProps) {
  return (
    <div className="mt-8 flex justify-center">

      <button
        onClick={onAttack}
        disabled={disabled}
        className="rounded-2xl bg-purple-600 px-12 py-5 text-2xl font-black transition hover:scale-105 hover:bg-purple-500 disabled:cursor-not-allowed disabled:bg-zinc-700"
      >
        ⚔ ATTACK
      </button>

    </div>
  );
}