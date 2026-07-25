"use client";

type BattleLogProps = {
  logs?: string[];
};

export default function BattleLog({
  logs = [],
}: BattleLogProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-xl">
      <h2 className="mb-4 text-2xl font-bold">
        📜 Battle Log
      </h2>

      {logs.length === 0 ? (
        <p className="text-zinc-400">
          No battle actions yet.
        </p>
      ) : (
        <div className="space-y-2">
          {logs.map((log, index) => (
            <div
              key={index}
              className="rounded-lg bg-zinc-800 p-3 text-sm"
            >
              {log}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}