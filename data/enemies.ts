import { Enemy } from "@/types/enemy";

export const enemies: Enemy[] = [
  {
    id: 1,
    name: "Slime",
    icon: "🟢",
    level: 1,
    health: 30,
    maxHealth: 30,
    attack: 4,
    defense: 1,
    xp: 10,
    coins: 5,
  },

  {
    id: 2,
    name: "Wolf",
    icon: "🐺",
    level: 3,
    health: 50,
    maxHealth: 50,
    attack: 8,
    defense: 3,
    xp: 20,
    coins: 10,
  },

  {
    id: 3,
    name: "Goblin",
    icon: "👺",
    level: 5,
    health: 80,
    maxHealth: 80,
    attack: 12,
    defense: 5,
    xp: 35,
    coins: 20,
  },

  {
    id: 4,
    name: "Orc",
    icon: "👹",
    level: 8,
    health: 130,
    maxHealth: 130,
    attack: 18,
    defense: 8,
    xp: 60,
    coins: 35,
  },

  {
    id: 5,
    name: "Shadow Soldier",
    icon: "💀",
    level: 12,
    health: 220,
    maxHealth: 220,
    attack: 30,
    defense: 12,
    xp: 120,
    coins: 80,
  },
];