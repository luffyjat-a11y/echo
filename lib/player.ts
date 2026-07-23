export type PlayerSkills = {
  strength: number;
  focus: number;
  discipline: number;
  health: number;
};

export type Player = {
  name: string;
  level: number;
  xp: number;
  maxXp: number;
  coins: number;
  streak: number;

  // NEW
  skillPoints: number;

  // NEW
  skills: PlayerSkills;
};

export const defaultPlayer: Player = {
  name: "Jon",

  level: 1,

  xp: 35,

  maxXp: 100,

  coins: 0,

  streak: 1,

  // NEW
  skillPoints: 0,

  // NEW
  skills: {
    strength: 0,
    focus: 0,
    discipline: 0,
    health: 0,
  },
};