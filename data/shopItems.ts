export type ShopItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  icon: string;
  category: "Avatar" | "Title" | "Theme";
};

export const shopItems: ShopItem[] = [
  {
    id: 1,
    name: "Warrior Avatar",
    description: "Unlock a warrior profile avatar.",
    price: 10,
    icon: "🛡️",
    category: "Avatar",
  },
  {
    id: 2,
    name: "Shadow Title",
    description: "Earn the title Shadow Walker.",
    price: 15,
    icon: "🌑",
    category: "Title",
  },
  {
    id: 3,
    name: "Purple Theme",
    description: "Unlock the royal purple theme.",
    price: 20,
    icon: "💜",
    category: "Theme",
  },
  {
    id: 4,
    name: "Dragon Avatar",
    description: "Become the Dragon Lord.",
    price: 30,
    icon: "🐉",
    category: "Avatar",
  },
];