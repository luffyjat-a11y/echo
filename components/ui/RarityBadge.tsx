"use client";

type Rarity =
  | "Common"
  | "Rare"
  | "Epic"
  | "Legendary";

type RarityBadgeProps = {
  rarity: Rarity;
};

const styles: Record<Rarity, string> = {
  Common:
    "bg-zinc-700 text-white border-zinc-500",

  Rare:
    "bg-blue-600 text-white border-blue-400",

  Epic:
    "bg-purple-600 text-white border-purple-400",

  Legendary:
    "bg-orange-500 text-white border-orange-300",
};

export default function RarityBadge({
  rarity,
}: RarityBadgeProps) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${styles[rarity]}`}
    >
      {rarity}
    </span>
  );
}