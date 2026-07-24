"use client";

import CoinDisplay from "@/components/ui/CoinDisplay";
import ShopCard from "@/components/shop/ShopCard";

import { shopItems } from "@/data/shopItems";
import { useGameContext } from "@/context/GameContext";

export default function ShopPage() {
  const {
    player,
    inventory,
    purchaseItem,
  } = useGameContext();

  function handleBuy(id: number) {
    const item = shopItems.find((i) => i.id === id);

    if (!item) return;

    const success = purchaseItem(
      item.id,
      item.price
    );

    if (!success) {
      alert("Purchase failed!");
      return;
    }

    alert(`🎉 You purchased ${item.name}!`);
  }

  return (
    <div className="space-y-8">

      <CoinDisplay coins={player.coins} />

      <div>
        <h1 className="text-4xl font-bold">
          🛒 Echo Shop
        </h1>

        <p className="mt-2 text-zinc-400">
          Spend your Echo Coins to unlock cosmetics,
          titles and themes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {shopItems.map((item) => (
          <ShopCard
            key={item.id}
            item={item}
            coins={player.coins}
            owned={inventory.some(
              (i) => i.id === item.id
            )}
            onBuy={handleBuy}
          />
        ))}

      </div>

    </div>
  );
}