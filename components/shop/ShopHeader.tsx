type ShopHeaderProps = {
  coins: number;
};

export default function ShopHeader({
  coins,
}: ShopHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between rounded-2xl bg-zinc-900 p-6">
      <div>
        <h1 className="text-3xl font-bold text-purple-400">
          🛒 Echo Shop
        </h1>

        <p className="mt-2 text-zinc-400">
          Spend your hard-earned Echo Coins on upgrades.
        </p>
      </div>

      <div className="rounded-xl bg-yellow-500 px-6 py-3 text-xl font-bold text-black">
        💰 {coins}
      </div>
    </div>
  );
}