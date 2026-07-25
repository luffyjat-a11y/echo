"use client";

type Props = {
  open: boolean;
  itemName: string;
  itemIcon: string;
  rarity: string;
  onClose: () => void;
};

function rarityColor(rarity: string) {
  switch (rarity) {
    case "Legendary":
      return "text-yellow-400";

    case "Epic":
      return "text-purple-400";

    case "Rare":
      return "text-blue-400";

    default:
      return "text-zinc-300";
  }
}

export default function RewardPopup({
  open,
  itemName,
  itemIcon,
  rarity,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

      <div className="w-[420px] rounded-3xl bg-zinc-900 p-8 text-center shadow-2xl">

        <div className="animate-bounce text-8xl">
          {itemIcon}
        </div>

        <h1 className="mt-6 text-4xl font-black">
          Chest Opened!
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          {itemName}
        </h2>

        <p
          className={`mt-4 text-2xl font-bold ${rarityColor(
            rarity
          )}`}
        >
          {rarity}
        </p>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-xl bg-purple-600 py-3 font-bold hover:bg-purple-500"
        >
          Continue
        </button>

      </div>

    </div>
  );
}