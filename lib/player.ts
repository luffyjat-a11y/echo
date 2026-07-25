export type Player = {
  name: string;

  level: number;

  xp: number;
  maxXp: number;

  coins: number;

  streak: number;

  // Battle Stats
  health: number;
  maxHealth: number;

  stamina: number;
  maxStamina: number;

  attack: number;
  defense: number;

  critChance: number;
};

export const defaultPlayer: Player = {
  name: "Jon",

  level: 1,

  xp: 35,
  maxXp: 100,

  coins: 0,

  streak: 1,

  // Battle Stats
  health: 100,
  maxHealth: 100,

  stamina: 100,
  maxStamina: 100,

  attack: 15,
  defense: 5,

  critChance: 10,
};