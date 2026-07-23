import { Quest } from "@/types/quest";

export function getQuest(
  quests: Quest[],
  id: number
) {
  return quests.find((q) => q.id === id);
}

export function completeQuest(
  quests: Quest[],
  id: number
): Quest[] {
  return quests.map((q) =>
    q.id === id
      ? {
          ...q,
          completed: true,
        }
      : q
  );
}

export function resetQuests(
  quests: Quest[]
): Quest[] {
  return quests.map((q) => ({
    ...q,
    completed: false,
  }));
}