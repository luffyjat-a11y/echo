"use client";

type HealthBarProps = {
  current: number;
  max: number;
  label?: string;
  color?: string;
};

export default function HealthBar({
  current,
  max,
  label = "Health",
  color = "bg-green-500",
}: HealthBarProps) {
  const percentage =
    max === 0 ? 0 : (current / max) * 100;

  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>{label}</span>
        <span>
          {current} / {max}
        </span>
      </div>

      <div className="h-4 overflow-hidden rounded-full bg-zinc-700">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{
            width: `${Math.min(100, Math.max(0, percentage))}%`,
          }}
        />
      </div>
    </div>
  );
}