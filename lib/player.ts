export type Player = {
  name: string;

  level: number;

  xp: number;

  maxXp: number;

  coins: number;

  streak: number;

  // ⭐ RPG Stats

  health: number;

  maxHealth: number;

  stamina: number;

  maxStamina: number;

  attack: number;

  defense: number;

  critChance: number;

  speed: number;

  // ⭐ Skills

  skillPoints: number;

  skills: Record<string, number>;
};

export const defaultPlayer: Player = {
  name: "Jon",

  level: 1,

  xp: 35,

  maxXp: 100,

  coins: 0,

  streak: 1,

  // ❤️ Health

  health: 100,

  maxHealth: 100,

  // ⚡ Stamina

  stamina: 100,

  maxStamina: 100,

  // ⚔ Combat Stats

  attack: 10,

  defense: 5,

  critChance: 10,

  speed: 10,

  // 🌳 Skills

  skillPoints: 0,

  skills: {
    strength: 0,
    speed: 0,
    fortune: 0,
    vitality: 0,
    wisdom: 0,
  },
};