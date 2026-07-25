import { Dungeon } from "@/types/dungeon";
import { enemies } from "./enemies";

export const dungeons: Dungeon[] = [
  {
    id: 1,

    name: "Goblin Cave",

    icon: "🕳️",

    description:
      "Clear the cave and defeat the Goblin Chief.",

    difficulty: "Easy",

    recommendedLevel: 1,

    waves: [
      enemies[0],
      enemies[1],
      enemies[2],
    ],

    boss: enemies[2],

    xp: 80,

    coins: 50,

    chestReward: 1,
  },

  {
    id: 2,

    name: "Orc Fortress",

    icon: "🏰",

    description:
      "Fight through the fortress and defeat the Orc Commander.",

    difficulty: "Medium",

    recommendedLevel: 5,

    waves: [
      enemies[1],
      enemies[2],
      enemies[3],
    ],

    boss: enemies[3],

    xp: 180,

    coins: 120,

    chestReward: 2,
  },

  {
    id: 3,

    name: "Shadow Gate",

    icon: "🌑",

    description:
      "Face the Shadow Soldier and claim legendary rewards.",

    difficulty: "Hard",

    recommendedLevel: 10,

    waves: [
      enemies[2],
      enemies[3],
      enemies[4],
    ],

    boss: enemies[4],

    xp: 400,

    coins: 250,

    chestReward: 3,
  },
];