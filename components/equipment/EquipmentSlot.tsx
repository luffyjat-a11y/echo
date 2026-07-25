"use client";

type EquipmentSlotProps = {
  icon: string;
  label: string;
  itemName?: string;
  onClick?: () => void;
};

export default function EquipmentSlot({
  icon,
  label,
  itemName,
  onClick,
}: EquipmentSlotProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-900 p-4 transition hover:border-purple-500 hover:bg-zinc-800"
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl">{icon}</span>

        <div className="text-left">
          <p className="font-bold">{label}</p>

          <p className="text-sm text-zinc-400">
            {itemName ?? "Empty"}
          </p>
        </div>
      </div>

      <span className="text-zinc-500">
        ▶
      </span>
    </button>
  );
}