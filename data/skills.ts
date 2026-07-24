import { Skill } from "@/types/skill";

export const skills: Skill[] = [
  {
    id: "strength",
    name: "Strength",
    icon: "⚔",
    description: "Increase XP gained from quests.",
    category: "Combat",
    maxLevel: 5,
  },
  {
    id: "speed",
    name: "Speed",
    icon: "🏃",
    description: "Complete objectives more efficiently.",
    category: "Utility",
    maxLevel: 5,
  },
  {
    id: "fortune",
    name: "Fortune",
    icon: "💰",
    description: "Increase coins earned from quests.",
    category: "Economy",
    maxLevel: 5,
  },
  {
    id: "vitality",
    name: "Vitality",
    icon: "❤️",
    description: "Protect your daily streak.",
    category: "Utility",
    maxLevel: 5,
  },
  {
    id: "wisdom",
    name: "Wisdom",
    icon: "✨",
    description: "Unlock advanced challenges and bonuses.",
    category: "Combat",
    maxLevel: 5,
  },
];