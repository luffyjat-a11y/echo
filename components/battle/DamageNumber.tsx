"use client";

type DamageNumberProps = {
  damage: number;
  critical?: boolean;
};

export default function DamageNumber({
  damage,
  critical = false,
}: DamageNumberProps) {
  return (
    <div
      className={`
        pointer-events-none
        absolute
        left-1/2
        top-1/3
        -translate-x-1/2
        animate-bounce
        font-black
        drop-shadow-2xl
        ${
          critical
            ? "text-6xl text-yellow-400"
            : "text-5xl text-red-500"
        }
      `}
    >
      {critical ? "💥 " : ""}
      -{damage}
    </div>
  );
}