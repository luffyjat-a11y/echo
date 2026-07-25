"use client";

type Props = {
  logs: string[];
};

function getColor(log: string) {
  if (
    log.includes("Victory") ||
    log.includes("defeated")
  ) {
    return "text-green-400";
  }

  if (log.includes("Critical")) {
    return "text-yellow-400";
  }

  if (log.includes("damage")) {
    return "text-red-400";
  }

  if (log.includes("XP")) {
    return "text-purple-400";
  }

  if (log.includes("Coins")) {
    return "text-yellow-500";
  }

  return "text-zinc-300";
}

export default function BattleLog({
  logs,
}: Props) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        📜 Battle Log
      </h2>

      <div className="max-h-72 space-y-2 overflow-y-auto">

        {logs.length === 0 ? (
          <p className="text-zinc-500">
            No actions yet...
          </p>
        ) : (
          logs.map((log, index) => (
            <p
              key={index}
              className={`${getColor(log)} transition-all`}
            >
              {log}
            </p>
          ))
        )}

      </div>

    </div>
  );
}