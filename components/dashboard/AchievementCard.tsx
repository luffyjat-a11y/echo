import { Achievement } from "@/types/achievement";

type Props = {
  achievement: Achievement;
};

export default function AchievementCard({
  achievement,
}: Props) {
  return (
    <div
      className={`rounded-2xl p-4 transition ${
        achievement.unlocked
          ? "bg-green-700"
          : "bg-zinc-900"
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="text-4xl">
          {achievement.icon}
        </div>

        <div>
          <h3 className="font-bold">
            {achievement.title}
          </h3>

          <p className="text-sm text-zinc-300">
            {achievement.description}
          </p>
        </div>
      </div>

      <div className="mt-4">
        {achievement.unlocked ? (
          <span className="text-green-300">
            ✅ Unlocked
          </span>
        ) : (
          <span className="text-zinc-500">
            🔒 Locked
          </span>
        )}
      </div>
    </div>
  );
}