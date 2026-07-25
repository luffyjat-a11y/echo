"use client";

type Props = {
  current: number;
  max: number;
  color?: string;
  label?: string;
};

export default function HealthBar({
  current,
  max,
  color = "bg-red-500",
  label,
}: Props) {
  const percentage = Math.max(
    0,
    Math.min(100, (current / max) * 100)
  );

  return (
    <div className="w-full">

      {label && (
        <div className="mb-2 flex justify-between text-sm text-zinc-400">

          <span>{label}</span>

          <span>
            {current} / {max}
          </span>

        </div>
      )}

      <div className="h-5 overflow-hidden rounded-full bg-zinc-800">

        <div
          className={`h-full transition-all duration-500 ${color}`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}