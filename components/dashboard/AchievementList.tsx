import { Achievement } from "@/types/achievement";
import AchievementCard from "./AchievementCard";

type Props = {
  achievements: Achievement[];
};

export default function AchievementList({
  achievements,
}: Props) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">
        🏆 Achievements
      </h2>

      <div className="grid gap-4">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
          />
        ))}
      </div>
    </div>
  );
}