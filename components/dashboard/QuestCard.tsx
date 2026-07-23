import { Quest } from "@/types/quest";

type QuestCardProps = {
  quest: Quest;
  onComplete: () => void;
};

function difficultyColor(difficulty: Quest["difficulty"]) {
  switch (difficulty) {
    case "Easy":
      return "bg-green-600";
    case "Medium":
      return "bg-yellow-600";
    case "Hard":
      return "bg-red-600";
    case "Epic":
      return "bg-purple-600";
    default:
      return "bg-gray-600";
  }
}

export default function QuestCard({
  quest,
  onComplete,
}: QuestCardProps) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-5">
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-sm ${difficultyColor(
            quest.difficulty
          )}`}
        >
          {quest.difficulty}
        </span>

        {quest.completed ? (
          <span className="font-bold text-green-400">
            ✅ Completed
          </span>
        ) : (
          <button
            onClick={onComplete}
            className="rounded-lg bg-purple-600 px-4 py-2 hover:bg-purple-500"
          >
            Complete
          </button>
        )}
      </div>

      <h3 className="mt-4 text-xl font-bold">
        {quest.title}
      </h3>

      <p className="mt-2 text-zinc-400">
        {quest.description}
      </p>

      <div className="mt-4 flex gap-6 text-sm">
        <span>⭐ {quest.xp} XP</span>
        <span>💰 {quest.coins} Coins</span>
      </div>
    </div>
  );
}