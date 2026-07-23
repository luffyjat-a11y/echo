export type Difficulty = "Easy" | "Medium" | "Hard" | "Epic";

export type Quest = {
  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  xp: number;
  coins: number;
  completed: boolean;
};