"use client";

import ShopHeader from "@/components/shop/ShopHeader";
import ShopGrid from "@/components/shop/ShopGrid";

import { shopItems } from "@/data/shopItems";
import { useGameContext } from "@/context/GameContext";

export default function ShopPage() {
  const {
    player,
    inventory,
    purchaseItem,
  } = useGameContext();

  function buy(id: number) {
    const item = shopItems.find((i) => i.id === id);

    if (!item) return;

    const success = purchaseItem(
      item.id,
      item.price
    );

    if (!success) {
      if (
        inventory.some((i) => i.id === item.id)
      ) {
        alert("You already own this item!");
      } else {
        alert("Not enough Echo Coins!");
      }

      return;
    }

    alert(`Purchased ${item.name}!`);
  }

  return (
    <div className="space-y-8">
      <ShopHeader coins={player.coins} />

      <ShopGrid
        items={shopItems}
        coins={player.coins}
        inventory={inventory}
        onBuy={buy}
      />
    </div>
  );
}