"use client";

type CoinDisplayProps = {
  coins: number;
};

export default function CoinDisplay({
  coins,
}: CoinDisplayProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-5 shadow-lg">

      <div>
        <p className="text-sm uppercase tracking-widest text-yellow-300">
          Echo Coins
        </p>

        <h2 className="mt-1 text-4xl font-extrabold text-yellow-400">
          🪙 {coins.toLocaleString()}
        </h2>
      </div>

      <div className="text-6xl">
        💰
      </div>

    </div>
  );
}