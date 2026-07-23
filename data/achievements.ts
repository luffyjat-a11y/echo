import { Achievement } from "@/types/achievement";

export const defaultAchievements: Achievement[] = [
  {
    id: 1,
    title: "First Quest",
    description: "Complete your first quest.",
    icon: "🏅",
    unlocked: false,
  },
  {
    id: 2,
    title: "Level 5",
    description: "Reach Level 5.",
    icon: "⭐",
    unlocked: false,
  },
  {
    id: 3,
    title: "100 Coins",
    description: "Collect 100 Echo Coins.",
    icon: "💰",
    unlocked: false,
  },
  {
    id: 4,
    title: "Quest Master",
    description: "Complete all daily quests.",
    icon: "📜",
    unlocked: false,
  },
  {
    id: 5,
    title: "7 Day Streak",
    description: "Maintain a 7-day streak.",
    icon: "🔥",
    unlocked: false,
  },
];