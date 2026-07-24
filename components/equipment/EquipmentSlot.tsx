"use client";

type EquipmentSlotProps = {
  icon: string;
  label: string;
  value: string;
};

export default function EquipmentSlot({
  icon,
  label,
  value,
}: EquipmentSlotProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 backdrop-blur-md">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-2xl">
          {icon}
        </div>

        <div>
          <p className="text-sm text-zinc-400">
            {label}
          </p>

          <p className="font-bold text-white">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}