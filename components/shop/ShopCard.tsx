import { ShopItem } from "@/data/shopItems";

type ShopCardProps = {
  item: ShopItem;
  coins: number;
  owned: boolean;
  onBuy: (id: number) => void;
};

export default function ShopCard({
  item,
  coins,
  owned,
  onBuy,
}: ShopCardProps) {
  const canBuy = coins >= item.price;

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-purple-500 hover:scale-105">
      <div className="text-5xl">
        {item.icon}
      </div>

      <h2 className="mt-4 text-2xl font-bold">
        {item.name}
      </h2>

      <p className="mt-2 text-zinc-400">
        {item.description}
      </p>

      <div className="mt-2">
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-purple-300">
          {item.category}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-bold text-yellow-400">
          💰 {item.price}
        </span>

        {owned ? (
          <button
            disabled
            className="cursor-not-allowed rounded-xl bg-green-600 px-5 py-2 font-bold text-white"
          >
            ✓ Owned
          </button>
        ) : (
          <button
            disabled={!canBuy}
            onClick={() => onBuy(item.id)}
            className={`rounded-xl px-5 py-2 font-bold transition ${
              canBuy
                ? "bg-purple-600 hover:bg-purple-500"
                : "cursor-not-allowed bg-zinc-700 text-zinc-500"
            }`}
          >
            {canBuy ? "Buy" : "Not enough coins"}
          </button>
        )}
      </div>
    </div>
  );
}