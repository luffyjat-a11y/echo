import { Quest } from "@/types/quest";
import QuestCard from "./QuestCard";

type QuestListProps = {
  quests: Quest[];
  onComplete: (id: number) => void;
};

export default function QuestList({
  quests,
  onComplete,
}: QuestListProps) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">
        📜 Daily Quests
      </h2>

      <div className="space-y-4">
        {quests.map((quest) => (
          <QuestCard
            key={quest.id}
            quest={quest}
            onComplete={() => onComplete(quest.id)}
          />
        ))}
      </div>
    </div>
  );
}