import { Quest } from "@/types/quest";

export const dailyQuests: Quest[] = [
  {
    id: 1,
    title: "Walk 6000 Steps",
    description: "Stay active today.",
    difficulty: "Easy",
    xp: 15,
    coins: 5,
    completed: false,
  },
  {
    id: 2,
    title: "Drink 2L Water",
    description: "Stay hydrated.",
    difficulty: "Easy",
    xp: 10,
    coins: 3,
    completed: false,
  },
  {
    id: 3,
    title: "Complete Workout",
    description: "Finish your workout.",
    difficulty: "Hard",
    xp: 50,
    coins: 20,
    completed: false,
  },
  {
    id: 4,
    title: "Read 20 Minutes",
    description: "Read for at least 20 minutes.",
    difficulty: "Medium",
    xp: 25,
    coins: 10,
    completed: false,
  },
];