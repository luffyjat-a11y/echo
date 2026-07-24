export type Player = {
  name: string;

  level: number;

  xp: number;

  maxXp: number;

  coins: number;

  streak: number;

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

  skillPoints: 0,

  skills: {
    strength: 0,
    speed: 0,
    fortune: 0,
    vitality: 0,
    wisdom: 0,
  },
};