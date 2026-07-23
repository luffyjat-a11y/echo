import ShopCard from "./ShopCard";

import { ShopItem } from "@/data/shopItems";
import { InventoryItem } from "@/types/game";

type ShopGridProps = {
  items: ShopItem[];
  coins: number;
  inventory: InventoryItem[];
  onBuy: (id: number) => void;
};

export default function ShopGrid({
  items,
  coins,
  inventory,
  onBuy,
}: ShopGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <ShopCard
          key={item.id}
          item={item}
          coins={coins}
          owned={inventory.some(
            (i) => i.id === item.id
          )}
          onBuy={onBuy}
        />
      ))}
    </div>
  );
}