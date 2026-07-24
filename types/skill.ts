export type SkillCategory =
  | "Combat"
  | "Economy"
  | "Utility";

export type Skill = {
  id: string;
  name: string;
  icon: string;
  description: string;
  category: SkillCategory;
  maxLevel: number;
};